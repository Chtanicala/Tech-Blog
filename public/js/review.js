const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#review-name').value.trim();
    const needed_funding = document.querySelector('#review-funding').value.trim();
    const description = document.querySelector('#review-desc').value.trim();
  
    if (eview_title && review_description) {
      const response = await fetch(`/api/review`, {
        method: 'POST',
        body: JSON.stringify({ review_title, review_description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/review');
      } else {
        alert('Failed to create review');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/review/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/review');
      } else {
        alert('Failed to delete review');
      }
    }
  };
  
  document
    .querySelector('.new-review-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.review-list')
    .addEventListener('click', delButtonHandler);
  