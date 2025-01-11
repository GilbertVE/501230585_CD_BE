import categoryRouter from './categoryRoute.js'
export default function routes(app){
    app.use('/categories', categoryRouter)
    app.get('/', (req, res) => {
        res.render('pages/index');
    })
    app.get('/components', (req, res) => {
        res.render('pages/components');
    })
    app.get('/forms', (req, res) => {
        res.render('pages/forms');
    })
    app.get('/icons', (req, res) => {
        res.render('pages/icons');
    })
    app.get('/typography', (req, res) => {
        res.render('pages/typography');
    })
    app.get('/table', (req, res) => {
        res.render('pages/table');
    })
    app.get('/notifications', (req, res) => {
        res.render('pages/notifications');
    })
}