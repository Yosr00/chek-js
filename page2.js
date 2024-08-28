document.addEventListener('DOMContentLoaded', () => {
    const cart = document.getElementById('cart');
    const totalPriceElement = document.getElementById('total-price');
  
    // Fonction pour calculer le total
    function updateTotal() {
      let total = 0;
      document.querySelectorAll('.item').forEach(item => {
        const price = parseFloat(item.dataset.price);
        const quantity = parseInt(item.querySelector('.quantity').textContent, 10);
        total += price * quantity;
      });
      totalPriceElement.textContent = `${total}$`;
    }
  
    // Gestion des boutons + et -
    cart.addEventListener('click', (event) => {
      if (event.target.classList.contains('plus') || event.target.classList.contains('minus')) {
        const item = event.target.closest('.item');
        const quantityElement = item.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent, 10);
        
        if (event.target.classList.contains('plus')) {
          quantity++;
        } else if (event.target.classList.contains('minus') && quantity > 1) {
          quantity--;
        }
        
        quantityElement.textContent = quantity;
        updateTotal();
      }
  
      // Gestion de la suppression d'article
      if (event.target.classList.contains('remove')) {
        const item = event.target.closest('.item');
        item.remove();
        updateTotal();
      }
  
      // Gestion du bouton like
      if (event.target.classList.contains('like')) {
        event.target.classList.toggle('liked');
        event.target.style.color = event.target.classList.contains('liked') ? 'red' : 'black';
      }
    });
  
    // Calcul initial du total
    updateTotal();
  });
  
  