
import { con } from './connection.js'

export async function inserirVilao(vilao){
    const comando = `
    INSERT INTO TB_VILAO(id_vilao, nm_vilao, ds_maldades, bt_super_poder)
         VALUES (?, ?, ?, ?)`;

    const resposta = await con.query(comando, [vilao.id, vilao.nome, vilao.maldade, vilao.super_poder])
    vilao.id = resposta.insertId;
    return vilao
}

export async function listarTodosViloes(){
    const comando = 
    `SELECT id_vilao id,
            nm_vilao nome,
            ds_maldades maldade,
            bt_super_poder  poder
       FROM TB_VILAO`;

    const [resposta] = await con.query (comando);  
    return resposta;  
}