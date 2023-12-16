document.querySelectorAll('.rond').forEach(rond => {
   rond.addEventListener('click', () => {
      document.querySelectorAll('.selected').forEach(selected => {
         selected.classList.remove('selected')
      })
      rond.classList.add('selected')
   })
})

document.querySelector('.button').addEventListener('click', () => {
   document.querySelector('.container').innerHTML = `
      <img class="img-result" src="../images/illustration-thank-you.svg" alt="a">
      <p class="result">You selected ${document.querySelector('.selected').innerHTML} out of 5</p>
      <p class="title-result">Thank you!</p>
      <p class="paragraphe-result">We appreciate you taking the time to give a rating. If you ever need more support, 
      don’t hesitate to get in touch!</p>
   `
})