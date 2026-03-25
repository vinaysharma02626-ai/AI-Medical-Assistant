// UI EVENT HANDLERS
document.addEventListener('DOMContentLoaded', function() {

  // Navigation
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      const target = this.dataset.target;
      document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
      document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
      document.getElementById(target).classList.add('active');
      this.classList.add('active');
    });
  });

  // Symptom Analyzer
  document.getElementById('analyze-btn').addEventListener('click', analyzeSymptoms);

  // AI Assistant
  document.getElementById('send-btn').addEventListener('click', sendChatMessage);
  document.getElementById('chat-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendChatMessage();
  });
});

function analyzeSymptoms() {
  const symptomText = document.getElementById('symptom-input').value;
  const duration = document.getElementById('symptom-duration').value;
  const severity = document.getElementById('symptom-severity').value;

  if (!symptomText.trim()) {
    alert('Please enter symptoms');
    return;
  }

  const results = medicalAI.analyzeMultipleSymptoms(symptomText, duration, severity);
  displayAnalysisResults(results);
}

function displayAnalysisResults(results) {
  const container = document.getElementById('results-content');
  const resultsSection = document.getElementById('analysis-results');

  if (results.error) {
    container.innerHTML = '<p>' + results.message + '</p>';
  } else {
    let html = '';
    results.diagnoses.forEach(diagnosis => {
      html += `
        <div class="diagnosis-card">
          <h4>${diagnosis.name}</h4>
          <span class="confidence-badge confidence-${diagnosis.confidence.toLowerCase()}">${diagnosis.confidence} Confidence</span>
          <p><strong>Definition:</strong> ${diagnosis.summary}</p>
          <details>
            <summary>View Full Details</summary>
            <h5>Symptoms:</h5>
            <ul>${diagnosis.symptoms.map(s => '<li>' + s + '</li>').join('')}</ul>
            <h5>Causes:</h5>
            <ul>${diagnosis.causes.map(c => '<li>' + c + '</li>').join('')}</ul>
            ${diagnosis.emergency ? '<h5>⚠️ Emergency Signs:</h5><ul>' + diagnosis.emergency.map(e => '<li>' + e + '</li>').join('') + '</ul>' : ''}
          </details>
        </div>`;
    });
    container.innerHTML = html;
  }

  resultsSection.style.display = 'block';
}

function sendChatMessage() {
  const input = document.getElementById('chat-input');
  const message = input.value.trim();
  if (!message) return;

  addChatMessage(message, 'user');
  input.value = '';

  document.getElementById('typing-indicator').style.display = 'block';

  setTimeout(() => {
    const response = medicalAI.generateChatResponse(message);
    document.getElementById('typing-indicator').style.display = 'none';
    addChatMessage(response.content, 'assistant', response.type === 'emergency');
  }, 800);
}

function addChatMessage(content, sender, isEmergency = false) {
  const messagesContainer = document.getElementById('chat-messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message ' + sender;
  messageDiv.innerHTML = '<div class="message-content ' + (isEmergency ? 'emergency-alert' : '') + '">' + content + '</div>';
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

console.log("✅ UI Handlers Ready");
