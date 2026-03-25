// INTELLIGENT MEDICAL AI LOGIC
class MedicalAI {
  constructor() {
    this.database = MEDICAL_DATABASE;
    this.conversationHistory = [];
  }

  analyzeMultipleSymptoms(symptomText, duration, severity) {
    const symptoms = this.parseSymptoms(symptomText);
    if (symptoms.length === 0) return { error: true, message: "Please enter at least one symptom." };

    const matchingDiseases = this.findMatchingDiseases(symptoms);
    const rankedDiseases = this.rankByProbability(matchingDiseases, symptoms);
    return this.formatAnalysisResults(rankedDiseases, symptoms, duration, severity);
  }

  parseSymptoms(text) {
    const normalizedText = text.toLowerCase();
    const foundSymptoms = [];
    for (const [keyword, entries] of Object.entries(this.database.searchIndex)) {
      if (normalizedText.includes(keyword)) {
        entries.forEach(entry => { if (!foundSymptoms.includes(entry)) foundSymptoms.push(entry); });
      }
    }
    return foundSymptoms;
  }

  findMatchingDiseases(symptoms) {
    const diseaseMatches = {};
    symptoms.forEach(symptom => {
      const disease = this.database.diseases[symptom];
      if (disease) {
        diseaseMatches[symptom] = { disease: disease, matchedSymptoms: [symptom] };
      }
    });
    return diseaseMatches;
  }

  rankByProbability(matchingDiseases, symptoms) {
    const ranked = Object.entries(matchingDiseases).map(([key, data]) => ({
      key: key,
      disease: data.disease,
      confidence: 'HIGH'
    })).slice(0, 5);
    return ranked;
  }

  formatAnalysisResults(rankedDiseases, symptoms, duration, severity) {
    if (rankedDiseases.length === 0) {
      return { error: false, message: "Please consult a healthcare professional for evaluation.", diagnoses: [] };
    }
    return {
      success: true,
      diagnoses: rankedDiseases.map(item => ({
        name: item.disease.names.primary,
        confidence: item.confidence,
        summary: item.disease.definition,
        symptoms: item.disease.symptoms,
        causes: item.disease.causes,
        treatment: item.disease.treatment,
        emergency: item.disease.emergency_signs
      }))
    };
  }

  generateChatResponse(userQuery) {
    const query = userQuery.toLowerCase().trim();

    if (this.isEmergency(query)) {
      return this.generateEmergencyResponse();
    }

    let response = this.searchExactMatch(query);
    if (response) return response;

    response = this.searchSimilar(query);
    if (response) return response;

    return this.generateHelpfulResponse(query);
  }

  isEmergency(query) {
    const emergencyKeywords = ['chest pain', 'heart attack', 'stroke', 'difficulty breathing', 'severe headache', 'unconscious', 'seizure', 'severe bleeding', 'choking'];
    return emergencyKeywords.some(keyword => query.includes(keyword));
  }

  generateEmergencyResponse() {
    return {
      type: 'emergency',
      content: '<div class="emergency-alert"><h3>🚨 MEDICAL EMERGENCY</h3><p><strong>CALL 108 IMMEDIATELY!</strong></p><p>Do not delay. Go to nearest Emergency Room right now.</p></div>'
    };
  }

  searchExactMatch(query) {
    if (this.database.searchIndex[query]) {
      const disease_key = this.database.searchIndex[query][0];
      const disease = this.database.diseases[disease_key];
      if (disease) return this.generateDiseaseResponse(disease);
    }
    return null;
  }

  generateDiseaseResponse(disease) {
    let html = `
      <div class="disease-info">
        <h3>${disease.names.primary}</h3>
        <p><strong>Also known as:</strong> ${disease.names.common.join(', ')}</p>

        <div class="section">
          <h4>📋 What is it?</h4>
          <p>${disease.definition}</p>
        </div>

        <div class="section">
          <h4>🔍 Causes</h4>
          <ul>${disease.causes.map(c => '<li>' + c + '</li>').join('')}</ul>
        </div>

        <div class="section">
          <h4>⚕️ Symptoms</h4>
          <ul>${disease.symptoms.map(s => '<li>' + s + '</li>').join('')}</ul>
        </div>

        <div class="section">
          <h4>🔬 Diagnosis</h4>
          <ul>${disease.diagnosis.map(d => '<li>' + d + '</li>').join('')}</ul>
        </div>

        <div class="section modern-treatment">
          <h4>💊 Modern Treatment</h4>`;

    if (disease.treatment.modern) {
      disease.treatment.modern.forEach(med => {
        html += `
          <div class="medication">
            <p><strong>${med.drug}</strong></p>
            <p><small>🏥 Brands: ${med.brands}</small></p>
            <p><small>💉 Dosage: ${med.dosage}</small></p>
          </div>`;
      });
    }
    html += '</div>';

    if (disease.treatment.ayurvedic) {
      const ayur = disease.treatment.ayurvedic;
      html += `
        <div class="section ayurvedic-treatment">
          <h4>🌿 Ayurvedic Approach</h4>
          <p><strong>Classical Name:</strong> ${ayur.classical_name}</p>
          <p><strong>Dosha:</strong> ${ayur.dosha}</p>
          ${ayur.herbs ? '<p><strong>Herbs:</strong> ' + ayur.herbs.join(', ') + '</p>' : ''}
          ${ayur.formulations ? '<p><strong>Formulations:</strong> ' + ayur.formulations.join(', ') + '</p>' : ''}
        </div>`;
    }

    if (disease.emergency_signs) {
      html += `
        <div class="section emergency">
          <h4>⚠️ Seek Immediate Care If:</h4>
          <ul>${disease.emergency_signs.map(s => '<li>' + s + '</li>').join('')}</ul>
        </div>`;
    }

    html += '</div>';
    return { type: 'disease', content: html };
  }

  searchSimilar(query) {
    const words = query.split(' ');
    for (const word of words) {
      for (const [keyword] of Object.entries(this.database.searchIndex)) {
        if (keyword.includes(word) || this.levenshteinDistance(word, keyword) <= 2) {
          return this.searchExactMatch(keyword);
        }
      }
    }
    return null;
  }

  levenshteinDistance(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b[i-1] === a[j-1]) matrix[i][j] = matrix[i-1][j-1];
        else matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, matrix[i][j-1] + 1, matrix[i-1][j] + 1);
      }
    }
    return matrix[b.length][a.length];
  }

  generateHelpfulResponse(query) {
    return {
      type: 'helpful',
      content: `
        <div class="helpful-info">
          <p>I can help you with medical information about diseases, symptoms, medications, and treatments.</p>
          <p><strong>Try asking about:</strong></p>
          <ul>
            <li>"What causes fever and cough?"</li>
            <li>"Tell me about diabetes"</li>
            <li>"Treatment for gas"</li>
            <li>"Asthma symptoms"</li>
            <li>"Emergency signs of heart attack"</li>
          </ul>
        </div>
      `
    };
  }
}

const medicalAI = new MedicalAI();
console.log("✅ Medical AI Ready");
