import express from "express";
import ProdutosRouter from "./routers/ProdutosRouters";

const PORT = 4000;
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (_request, response) => {
    response.send("API Produtos v. 1.0");
})

app.use("/produtos", ProdutosRouter);
//app.use("/usuarios", UsuarioRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
