import { Router } from 'express'
import { inserirVilao, listarTodosViloes} from '../repository/vilaoRepository.js'
const server= Router();

server.post('/vilao', async (req, resp) => {
    try{
    const addvilao = req.body
    const resposta = await inserirVilao(addvilao);

    resp.status(204).send(resposta);
    } catch(err) {
        resp.status(404).send({
            erro: err.message
        })
    }
});

server.get('/vilao', async (req, resp) => {
    try{
        const resposta = await listarTodosViloes();
        resp.send(resposta);
    } catch(err) {
        resp.status(404).send({
            erro: err.message
        })
    }
});



export default server;