// Create a new SpeechSynthesisUtterance instance for speech output.
let speech = new SpeechSynthesisUtterance();

// Array to hold available voices.
let voices = [];

// Reference to the <select> element for voice selection.
let voiceSelect = document.querySelector("select");

// When the list of voices changes (or loads), populate the select dropdown.
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices(); // Get available voices.
    speech.voice = voices[0]; // Set default voice.

    // Populate the select element with available voices.
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

// When the user selects a different voice, update the speech voice.
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

// When the button is clicked, speak the text from the textarea.
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value; // Get text to speak.
    window.speechSynthesis.speak(speech); // Speak the text.
});