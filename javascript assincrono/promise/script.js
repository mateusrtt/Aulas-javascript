/*
const promessa = new Promise((resolve, reject) => {
    let condicao = true;
    if(condicao) {
    setTimeout(()=>{
        resolve({nome:'mateus', idade: 21})
    }, 1000)
    } else {
      reject(Error('Um erro ocorreu na promise'));
    }
  });

const retorno = promessa
.then(resolucao => {
    console.log(resolucao);
    resolucao.profissao = 'Front-end';
    return resolucao;
})
.then(resolucao =>{
    console.log(resolucao);
}, rejeitada =>{
    console.log(rejeitada);
}).finally(()=>{
    console.log('acabou');
})

console.log(retorno)
*/

const login = new Promise(resolve => {
    setTimeout(() => {
      resolve('Login Efetuado');
    }, 1000);
  });
  const dados = new Promise(resolve => {
    setTimeout(() => {
      resolve('Dados Carregados');
    }, 1500);
  });
  
  const tudoCarregado = Promise.all([login, dados]);
  
  tudoCarregado.then(respostas => {
    console.log(respostas); // Array com ambas respostas
  });
  








