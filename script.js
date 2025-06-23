// Frases para "Feliz" y "Triste"
const happyPhrases = [
    '💖 "Me encanta verte feliz, pero lo que más me gusta es saber que una persona tan increíble como tú merece toda esa felicidad y más."',
    '🌟 "Tu energía ilumina todo a tu alrededor. No solo eres increíble, sino que haces que todo sea mejor con tu presencia."',
    '😊 "Si la felicidad tuviera un rostro, seguramente se parecería mucho al tuyo. ¡Brillas con luz propia!"',
    '✨ "Eres una de esas personas que le da color a la vida de los demás, y me siento afortunado de tenerte cerca."',
    '💫 "Ojalá pudieras verte con mis ojos, porque entonces entenderías lo increíble que eres."',
    '🔥 "No solo mereces toda la felicidad del mundo, ¡también mereces que nunca se acabe!"',
    '🥰 "Siempre que sonríes, el mundo se vuelve un lugar mejor. ¡Sigue brillando así!"'
];

const sadPhrases = [
    '💙 "No tienes que ser fuerte todo el tiempo. Estoy aquí para ti, en los buenos y malos momentos."',
    '🤍 "A veces la vida pesa, pero no tienes que cargar con todo sola. Déjame ayudarte a llevar un poco de esa carga."',
    '✨ "Tu valor no depende de cómo te sientas en este momento. Eres increíble, incluso en tus días difíciles."',
    '💫 "Hoy puede ser un día gris, pero recuerda que incluso las tormentas más fuertes terminan y el sol vuelve a brillar."',
    '🥰 "No estás sola. No importa lo que pase, siempre estaré aquí para ti."',
    '🌿 "Es normal sentirse así a veces, pero quiero que recuerdes que eres fuerte y que esto también pasará. Y mientras pasa, cuentas conmigo."',
    '🔥 "Incluso cuando no lo ves, sigues brillando. No dejes que este momento te haga olvidar lo increíble que eres."'
];

let currentPhrases = []; // Almacena las frases actuales
let currentIndex = 0; // Índice de la frase actual

// Función para manejar la selección de estado de ánimo
function selectMood(mood) {
    const modal = document.getElementById('modal');
    const bouquet = document.getElementById('bouquet');
    const phraseContainer = document.getElementById('phrase-container');

    // Ocultar la ventana emergente
    modal.style.display = 'none';

    // Mostrar el ramo de flores con efecto de fundido
    bouquet.classList.add('visible');

    // Seleccionar las frases según el estado de ánimo
    currentPhrases = mood === 'feliz' ? happyPhrases : sadPhrases;
    currentIndex = 0;

    // Mostrar la primera frase
    showNextPhrase();
}

// Función para mostrar la siguiente frase
function showNextPhrase() {
    const phraseContainer = document.getElementById('phrase-container');

    // Mostrar la frase actual con efecto de fundido
    phraseContainer.textContent = currentPhrases[currentIndex];
    phraseContainer.style.opacity = 1;

    // Ocultar la frase después de 5 segundos
    setTimeout(() => {
        phraseContainer.style.opacity = 0;
    }, 5000);

    // Cambiar a la siguiente frase después de 6 segundos (5 segundos de visualización + 1 segundo de fundido)
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % currentPhrases.length; // Reiniciar el índice si llega al final
        showNextPhrase(); // Mostrar la siguiente frase
    }, 6000);
}