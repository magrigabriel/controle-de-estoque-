document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('.button-cadastro').addEventListener('click', () => {
        alert('Botão de Cadastro clicado!');
});
});
document.addEventListener('DOMContentLoaded', () => {
    let selectedRating = 0;

    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            selectedRating = star.getAttribute('data-value');
            stars.forEach(s => s.classList.remove('selected'));
            star.classList.add('selected');
            star.previousElementSibling?.classList.add('selected');
        });
    });

    document.getElementById('submit').addEventListener('click', () => {
        const comment = document.getElementById('comment').value;
        if (selectedRating && comment) {
            const review = {
                rating: selectedRating,
                comment: comment
            };
            saveReview(review);
            alert('Avaliação enviada com sucesso!');
            resetForm();
        } else {
            alert('Por favor, forneça uma classificação e um comentário.');
        }
    });

    function saveReview(review) {
        let reviews = localStorage.getItem('reviews');
        reviews = reviews ? JSON.parse(reviews) : [];
        reviews.push(review);
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }

    function resetForm() {
        selectedRating = 0;
        stars.forEach(star => star.classList.remove('selected'));
        document.getElementById('comment').value = '';
    }
});

