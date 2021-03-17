function countBy (items, groupName) {
    let counts = []
    for (let item of items) {
        let name = groupName(item)
        let known = counts.findIndex(c => c.name == name)
        if (known == -1 ) {
            counts.push({name, count: 1})
        } else {
            counts[known].count++
        }
    }
    return counts
}

console.log ('log', countBy([1, 2, 3, 4, 5], n => n > 2))

/* text scripts (só para solidifcar o conceito, non-executable kk) */
/*
function textScripts (text) {
    let scripts = countBy (text, char => {
        let script = characterScript(char.codePointAt(0))
        return script ? script.name : 'none';
    }).filter(({name})=> name != 'none')
    
    let total = scripts.reduce((n), {count} => n + count, 0)
    if (total == 0) return "No scripts found"
    

    return scripts.map(())
}/*