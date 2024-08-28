// Seleciona os elementos do formulário.
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const expense = document.getElementById('expense')
const category = document.getElementById('category')

// Captura o evento de input para formatar o valor.
amount.oninput = () => {

  // Obtém o valor atual do input e remove os caracteres não númericos.
  let value = amount.value.replace(/\D/g, '')

  /* Transformar o valor em centavos.
    Exemplo: 150/1500 = 1.5 que é equivalente a R$ 1,50.
  */
  value = Number(value) / 100

  // Atualiza o valor do input.
  amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value) {
  // Formata o valor no formato BRL (Real Brasileiro)
  value = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return value
}

form.onsubmit = (event) => {
  event.preventDefault()
}