const userRoutes = require("./main");
(appRouter = (e, s) => {
    e.get("/", (e, s) => {
        s.send('<body> <h class="big">Welcome To The New Beashape API!</h> <p class="p">This Is The Third Beatshape API, Its Been Improved And Made More Simple.</p><p class="p">This Is An HTML File, Which The Second Version of the API Cannot Send.</p><p class="p">Anyways, Enjoy Beatshape!</p><p class="p">-Bey</p><p class="small">Running Beatshape API 3.1.0, Rev 1</p><p class="small">Running Custom Server / 3.1.0 </p></body><style>body{background-color: black; color: white; font-family: monospace}.big{font-size: 32px;}.p{font-size: 20px; color: darkcyan}.small{font-size: 8px;}</style>');
        console.log('checked!')
    }),
        userRoutes(e, s);
}),
    (module.exports = appRouter);
