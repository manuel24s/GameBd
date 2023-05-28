import express from 'express';
import indexRoutes from './routes/index.routes';
import exphbs from 'express-handlebars';
import path from 'path';
import morgan from "morgan";
import { create } from 'express-handlebars';
const app = express();

app.set('views', path.join(__dirname, '/views'));

var hbs = create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"),"partials"),
    defaultLayout: "main",
    extname: ".hbs",
})
                    
app.engine(".hbs",hbs.engine);

app.set("view engine", ".hbs");

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,"public")));

app.use(indexRoutes);

export default app;