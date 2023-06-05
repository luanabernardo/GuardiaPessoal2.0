const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createPool({

    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'dados',
    port: 3307,

})

// app.get("/", (req, res) => {

//     let SQL = "INSERT INTO dados ( itens ) VALUE ('nome:luana')";
    


//     db.query(SQL,(err, result) => {
//     console.log(err);

//     })

//     res.send('acesso concedido')

// });
app.get("/", (req, res) => {

    //CREATE
    let novoUsuario = {
        nome: "Luana"
    };

    let SQL_CREATE = "INSERT INTO dados ( itens ) VALUE ('nome:Fernanda')";

    db.query(SQL_CREATE, novoUsuario, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Novo usuário criado com sucesso!");
        }
    });

    // READ
    let SQL_READ = "SELECT * FROM dados";

    db.query(SQL_READ, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Lista de usuários:");
            console.log(result);
        }
    });

    // DELETE
    let idUsuarioParaExcluir = 1;

    let SQL_DELETE = "DELETE FROM dados WHERE id = '18'";

    db.query(SQL_DELETE, idUsuarioParaExcluir, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Usuário excluído com sucesso!");
        }
    });

    res.send('Guradiã Pessoal Backend');
});



app.listen(3001, () => {

    console.log('rodando servidor');

});