let clientes = require("./clientes.json")


const clientesGet = () =>{

    return clientes

}

const clientesSet = (cliente) =>{
    clientes.push(cliente)
    return clientes

}

const clientesDelete = (id) =>{
    console.log(clientes)
    clientes = clientes.filter((vuel)=>{
        return vuel.id != id
    }
    )
    console.log(clientes)
    return clientes
}

module.exports.clientesgetExport = clientesGet;
module.exports.clientesSetExport = clientesSet;
module.exports.clientesDeleteExport = clientesDelete;