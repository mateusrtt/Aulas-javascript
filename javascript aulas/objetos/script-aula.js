/*function Carro(marca, preco) {
    this.marca = marca;
    this.preco = preco;
  }
  const honda = new Carro('Honda', 4000);
  const fiat = new Carro('Fiat', 3000);
  */

  function Dom(seletor) {
    const element = document.querySelector(seletor);
    this.ativo = function(classe) {
      element.classList.add(classe);
    };
  }
  
  const lista = new Dom('ul');
  lista.ativo('ativo');
  
  const lastLi = new Dom('li:last-child');
  lastLi.ativo('ativo');
  