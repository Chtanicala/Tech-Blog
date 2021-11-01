const newFormHandler = async (event) => {
    event.preventDefault();
  
    const review_title = document.querySelector('#review-name').value.trim();
    const review_description = document.querySelector('#review-desc').value.trim();
  
    if (review_title && review_description) {
      const response = await fetch(`/api/review`, {
        method: 'POST',
        body: JSON.stringify({ review_title, review_description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
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
        document.location.replace('/dashboard');
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
  