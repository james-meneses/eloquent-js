/* Agora vendo o conceito de Map (key:value) - by @james-meneses */

let ages = {
    Júlia: 30,
    James: 32,
    John: 4
}

// lembrar de usar sempre as "aspas" para referenciar a chave
console.log(`Júlia tem ${ages["Júlia"]}`)

// usando o 'in'. Conceito de Key in Map -> value
console.log(`Tem James no mapa?`, "James" in ages);

// Também funciona para outras propriedades, pelo visto
console.log("toString" in ages)

let salarios = new Map()
    salarios.set("Dev Junior", 5000)
    salarios.set("Dev Pleno", 8000)
    salarios.set("Dev Senior", 12000)
    salarios.set("Dev Especialista", 15000)

    for (let salario of salarios) {
        console.log(salario[0], '->', salario[1])
    
        // needs fix
        for ( let prop in salario ) {
            console.log ( 'O salário do ' + prop + ' é de ' + salario[prop])
        }
    }

    

    console.log( "junior " + salarios.get("Dev Junior"), "\nespecialista " + salarios.get("Dev Especialista"))


    //console.log(Object.keys)