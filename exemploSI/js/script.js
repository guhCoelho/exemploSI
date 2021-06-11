// Referências do DOM - HTML

const inpRepo = document.getElementById('intRepo');
const btnConsultar = document.getElementById('btnConsultar');

const lista = document.getElementById('lista');


// Código - Lógica ///

const apiGithub = axios.create({
    baseURL:'https://api.github.com/users/'
});

function consultaDados(){
    let list=''
    let nomeRepo = inpRepo.nodeValue;

    apiGithub.get(nomeRepo + '/repos').then(res=>{
        console.log(res);
        const data = res.data;
        data.map(repo =>{
            list += `<li>${repo.name}</li>`;
            lista.innerHTML = list;
        });
    }).catch(error =>{consult.log(error)});
};

btnConsultar.onclick = ()=>{
    consultaDados();
};











/*
let pessoa = {
    nome:'Gustavo',
    peso:60,
    altura: 173,
    email:'tantofaz@gmail.com'
};

let { altura, email } = pessoa; 

console.log(email, altura);
*/

/*
let hardware = ['Mouse', 'Teclado', 'Monitor', 'Teclado', 'Monitor'];

let item = hardware[1];

let [ a, ...rest ] = hardware;

console.log(rest );
*/
