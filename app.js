
const domainGenerator = () => {
    let pronoun = ['the','our']
    let adj = ['great', 'big' ]
    let noun = ['jogger','racoon']
    let extension = ['.com', '.us', '.net']

    for(i in pronoun){
        for(j in adj){
            for(k in noun){
                for(l in extension){
                    let newText = window.document.createElement('P')
                    newText.innerText = (`${pronoun[i]}${adj[j]}${noun[l]}${extension[k]}`)
                    document.querySelector('.array').appendChild(newText)
                }
            }
        }
    }
}