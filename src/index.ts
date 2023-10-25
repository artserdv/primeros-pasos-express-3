import Express from 'express';

const app: Express.Application = Express();
const PORT: number = 3000;

app.get("/",  (req: Express.Request, res: Express.Response) => {
    res.send("<p>Hola Mundo 3!</p>"); // metodos send render json
})

app.listen(PORT, ()=>{
    console.log(`App is listening at port ${PORT}`);
})

