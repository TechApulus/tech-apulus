var fazendasModel = require("../models/fazendasModel");

// function (resultadoAutenticar) {
//   console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
//   console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

//   if (resultadoAutenticar.length == 1) {
//     console.log(resultadoAutenticar);
    
    function buscarFazendasPorEmpresa(req, res) {
      var id_empresa = req.params.idEmpresa;
      fazendasModel.buscarFazendasPorEmpresa(id_empresa)
        .then(
          (resultadoArmazens) => {
            if (resultadoArmazens.length > 0) {
              console.log(resultadoArmazens)
              // res.json({
              //   // fkEmpresa: buscarFazendasPorEmpresa[0].fkEmpresa,
              //   nome: buscarFazendasPorEmpresa[0].nome,
              //   identificador: buscarFazendasPorEmpresa[0].identificador,
              //   armazens: resultadoArmazens
              // });
              res.status(201).json(resultadoArmazens);
            } else {
              res.status(204).json([]);
            }
          }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os Armazens: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
          });
    }
//   }
// }


  function cadastrar(req, res) {
    var nome = req.body.empresaServer
    var fk_empresa = req.body.idEmpresaServer
    var identificador = req.body.identificadorServer
    if (nome == undefined) {
      res.status(400).send("nome está undefined!");
    } else if (fk_empresa == undefined) {
      res.status(400).send("fk_empresa está undefined!");
    } else {
      fazendasModel.cadastrar(nome, fk_empresa, identificador)
        .then((resultado) => {
          res.status(201).json(resultado);
        }
        ).catch((erro) => {
          console.log(erro);
          console.log(
            "\nHouve um erro ao realizar o cadastro! Erro: ",
            erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        });
    }
  }

  function cadastrarEndereco(req, res) {
    var logradouro = req.body.logradouroServer
    var numero = req.body.numeroServer
    var bairro = req.body.bairroServer
    var cidade = req.body.cidadeServer
    var estado = req.body.estadoServer
    var cep = req.body.cepServer
    var fk_fazenda = req.body.fk_fazenda

    fazendasModel.cadastrarEndereco(logradouro, numero, bairro, cidade, estado, cep, fk_fazenda)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }

  function buscarId(req, res) {
    var nome = req.body.empresaServer
    var fk_empresa = req.body.idEmpresaServer
    var identificador = req.body.identificadorServer

    fazendasModel.buscarId(nome, fk_empresa, identificador)

      .then((resultado) => {
        console.log(resultado)
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\Houve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }



  module.exports = {
    buscarFazendasPorEmpresa,
    cadastrar,
    cadastrarEndereco,
    buscarId
  }