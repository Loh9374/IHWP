// Assessment Logic
document.addEventListener('DOMContentLoaded', function() {
    // Initialize assessment variables
    let currentQuestion = 1;
    const totalQuestions = 4;
    const doshaScores = {
        vata: 0,
        pitta: 0,
        kapha: 0
    };

    // Navigation buttons
    const nextButtons = document.querySelectorAll('.next-btn');
    const prevButtons = document.querySelectorAll('.prev-btn');
    const calculateButton = document.getElementById('calculate-results');
    const restartButton = document.getElementById('restart-assessment');
    const downloadButton = document.getElementById('download-report');

    // Option selection
    const optionCards = document.querySelectorAll('.option-card');
    
    optionCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove selected class from siblings
            const siblings = this.parentElement.querySelectorAll('.option-card');
            siblings.forEach(sibling => {
                sibling.classList.remove('selected');
            });
            
            // Add selected class to clicked card
            this.classList.add('selected');
            
            // Store the selected dosha for this question category
            const category = this.closest('.options-container').previousElementSibling.textContent;
            const dosha = this.getAttribute('data-dosha');
            
            // For simplicity, we'll just track overall scores
            // In a more complex implementation, you would track by category
        });
    });

    // Next button functionality
    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (currentQuestion < totalQuestions) {
                // Hide current question
                document.getElementById(`question-${currentQuestion}`).classList.remove('active');
                
                // Update progress indicator
                document.querySelectorAll('.step-circle')[currentQuestion - 1].classList.remove('active');
                document.querySelectorAll('.step-circle')[currentQuestion - 1].classList.add('completed');
                
                // Show next question
                currentQuestion++;
                document.getElementById(`question-${currentQuestion}`).classList.add('active');
                
                // Update progress indicator
                document.querySelectorAll('.step-circle')[currentQuestion - 1].classList.add('active');
            }
        });
    });

    // Previous button functionality
    prevButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (currentQuestion > 1) {
                // Hide current question
                document.getElementById(`question-${currentQuestion}`).classList.remove('active');
                
                // Update progress indicator
                document.querySelectorAll('.step-circle')[currentQuestion - 1].classList.remove('active');
                
                // Show previous question
                currentQuestion--;
                document.getElementById(`question-${currentQuestion}`).classList.add('active');
                
                // Update progress indicator
                document.querySelectorAll('.step-circle')[currentQuestion - 1].classList.add('active');
                document.querySelectorAll('.step-circle')[currentQuestion - 1].classList.remove('completed');
            }
        });
    });

    // Calculate results
    calculateButton.addEventListener('click', function() {
        // In a real implementation, you would calculate based on selected options
        // For this demo, we'll use a simple scoring system
        
        // Count selected options for each dosha
        const selectedOptions = document.querySelectorAll('.option-card.selected');
        
        selectedOptions.forEach(option => {
            const dosha = option.getAttribute('data-dosha');
            doshaScores[dosha]++;
        });
        
        // Determine dominant dosha
        let dominantDosha = 'vata';
        let highestScore = doshaScores.vata;
        
        if (doshaScores.pitta > highestScore) {
            dominantDosha = 'pitta';
            highestScore = doshaScores.pitta;
        }
        
        if (doshaScores.kapha > highestScore) {
            dominantDosha = 'kapha';
        }
        
        // Hide current question and show results
        document.getElementById(`question-${currentQuestion}`).classList.remove('active');
        document.getElementById('results').style.display = 'block';
        
        // Update progress indicator
        document.querySelectorAll('.step-circle')[currentQuestion - 1].classList.remove('active');
        document.querySelectorAll('.step-circle')[currentQuestion - 1].classList.add('completed');
        document.querySelectorAll('.step-circle')[4].classList.add('active');
        
        // Update results based on dominant dosha
        updateResults(dominantDosha);
    });

    // Restart assessment
    restartButton.addEventListener('click', function() {
        // Reset all values
        currentQuestion = 1;
        doshaScores.vata = 0;
        doshaScores.pitta = 0;
        doshaScores.kapha = 0;
        
        // Hide results and show first question
        document.getElementById('results').style.display = 'none';
        document.getElementById('question-1').classList.add('active');
        
        // Reset progress indicators
        document.querySelectorAll('.step-circle').forEach((circle, index) => {
            circle.classList.remove('active', 'completed');
            if (index === 0) {
                circle.classList.add('active');
            }
        });
        
        // Clear all selections
        document.querySelectorAll('.option-card').forEach(card => {
            card.classList.remove('selected');
        });
    });

    // Download report
    downloadButton.addEventListener('click', function() {
        alert('In a complete implementation, this would generate a PDF report of your results.');
        // This would typically generate a PDF with the user's results and recommendations
    });

    // Function to update results based on dominant dosha
    function updateResults(dosha) {
        const doshaName = document.querySelector('.dosha-name');
        const doshaDescription = document.querySelector('.dosha-description p');
        const balancingTips = document.querySelector('.balancing-tips ul');
        
        // Remove existing dosha classes
        doshaName.classList.remove('vata', 'pitta', 'kapha');
        
        // Update based on dominant dosha
        if (dosha === 'vata') {
            doshaName.textContent = 'Vata Dosha';
            doshaName.classList.add('vata');
            doshaDescription.textContent = 'Your assessment shows a dominance of Vata dosha, which is composed of the elements Air and Space. People with Vata constitution tend to be creative, energetic, and lively when in balance.';
            
            // Update balancing tips for Vata
            balancingTips.innerHTML = `
                <li>Follow a regular daily routine with consistent meal times</li>
                <li>Favor warm, moist, and grounding foods</li>
                <li>Practice calming activities like gentle yoga and meditation</li>
                <li>Keep warm and avoid cold, windy environments</li>
                <li>Get adequate rest and avoid overexertion</li>
            `;
        } else if (dosha === 'pitta') {
            doshaName.textContent = 'Pitta Dosha';
            doshaName.classList.add('pitta');
            doshaDescription.textContent = 'Your assessment shows a dominance of Pitta dosha, which is composed of the elements Fire and Water. People with Pitta constitution tend to be focused, determined, and intelligent when in balance.';
            
            // Update balancing tips for Pitta
            balancingTips.innerHTML = `
                <li>Avoid excessive heat and direct sunlight</li>
                <li>Favor cool, sweet, and bitter foods</li>
                <li>Practice moderation in all activities</li>
                <li>Engage in calming activities like swimming and moon gazing</li>
                <li>Avoid excessive competition and conflict</li>
            `;
        } else if (dosha === 'kapha') {
            doshaName.textContent = 'Kapha Dosha';
            doshaName.classList.add('kapha');
            doshaDescription.textContent = 'Your assessment shows a dominance of Kapha dosha, which is composed of the elements Earth and Water. People with Kapha constitution tend to be calm, steady, and nurturing when in balance.';
            
            // Update balancing tips for Kapha
            balancingTips.innerHTML = `
                <li>Engage in regular physical activity and exercise</li>
                <li>Favor light, warm, and spicy foods</li>
                <li>Vary your routine and try new experiences</li>
                <li>Stay active and avoid excessive sleep</li>
                <li>Keep your environment warm and dry</li>
            `;
        }
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});