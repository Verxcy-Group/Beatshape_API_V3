const util = require("util")
const serveIndex = require("serve-index");
const userRoutes = (app, fs) => {
    let dataPath = "./data/maps.json",
        datafol = "./data",
        a = "<p>";
    const readFile = (e, a = !1, r = dataPath, t = "utf8") => {
            fs.readFile(r, t, (r, t) => {
                if (r) throw r;
                e(a ? JSON.parse(t) : t);
            });
        },
        writeFile = (e, a, r = dataPath, t = "utf8") => {
            fs.writeFile(r, e, t, (e) => {
                if (e) throw e;
                a();
            });
        };
    app.get("/files/:id", (e, a) => {
        (id = e.params.id),
            fs.readFile("./data/s" + id + ".map", "utf8", (e, r) => {
                if (e) throw e;
                a.send(JSON.parse(r)), console.log("hey someone checked their account");
            });
    }),
        app.get("/files", (e, r) => {
            fs.readdirSync(datafol).forEach((e) => {
                a = a + e + "</p><p>";
            }),
                r.send("<style>h{font-size:24px;color:gray}p{color:#008b8b;font-size:16px}body{background-color:#000;font-family:monospace}</style><h>files:</h> " + a),
                (a = "<p>");
        }),
        app.put("/files/:id", (req, res) => {
            (id = req.params.id),
                (enewdat = req.body),
                (newdat = JSON.stringify(enewdat)
                    .replace(/\\/g, "")
                    .replace(/","token":"/g, "&token=")
                    .replace(/''/g, "")
                    .replace(/}}}}"}/g, "}}}}}")
                    .replace('"{', "{")),
                eval("fs.writeFile('./data/" + id + ".map',newdat, function (err) { if (err) throw err; console.log('File is created successfully.')});");
        }),
        app.delete("/users/:id", (e, a) => {
            readFile((r) => {
                const t = e.params.id;
                delete r[t],
                    writeFile(JSON.stringify(r, null, 2), () => {
                        a.status(200).send(`Map:${t} removed`);
                    });
            }, !0);
        });
};
module.exports = userRoutes;
