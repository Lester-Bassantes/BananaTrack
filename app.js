const express = require('express');
const app = express();
const path = require('path');

const sequelize = require('./config/database');

// Application port 
const port = process.env.PORT;

// Import routes
const indexRouter = require('./routes/index');
const userRoutes = require('./routes/user');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Main route
app.use('/', indexRouter);

// User routes
app.use('/api', userRoutes);



(async () => {
    try {
        // Sincroniza todos los modelos
        await sequelize.sync({ force: false }); // 'force: true' reinicia tablas
        console.log('Modelos sincronizados.');
    } catch (error) {
        console.error('Error al sincronizar modelos:', error);
    }
})();



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});