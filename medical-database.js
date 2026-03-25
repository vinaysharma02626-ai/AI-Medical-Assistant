// COMPREHENSIVE MEDICAL KNOWLEDGE DATABASE
// Based on Harrison's Principles, USMLE First Aid 2023, Charaka Samhita, Astanga Hrdayam

const MEDICAL_DATABASE = {
  diseases: {
    upper_respiratory_infection: {
      names: { primary: "Upper Respiratory Tract Infection", common: ["Common Cold", "URI", "Flu"], hindi: ["Sardi", "Jukam"], keywords: ["cold", "flu", "runny nose", "congestion", "sneezing"] },
      definition: "Viral infection of upper respiratory tract including nose, throat, and sinuses",
      causes: ["Rhinovirus", "Coronavirus", "Influenza virus", "Adenovirus"],
      symptoms: ["Fever (low-grade 98-101°F)", "Runny nose", "Nasal congestion", "Sore throat", "Cough", "Sneezing", "Headache", "Body aches", "Fatigue", "Mild malaise"],
      diagnosis: ["Clinical diagnosis", "Throat swab if bacterial infection suspected", "COVID-19 RT-PCR test if indicated"],
      treatment: {
        modern: [
          {drug: "Paracetamol", brands: "Crocin, Dolo-650, Calpol, P-500", dosage: "500-1000mg every 4-6 hours (max 4g/day)", purpose: "Fever & pain relief"},
          {drug: "Phenylephrine + Chlorpheniramine", brands: "Sinarest, D-Cold Total, Cheston", dosage: "1 tablet 3x daily", purpose: "Decongestant + antihistamine"},
          {drug: "Dextromethorphan", brands: "Benadryl DR, Corex, Grilinctus DX", dosage: "15-30mg every 6 hours", purpose: "Cough suppressant"}
        ],
        ayurvedic: { dosha: "Kapha-Vata imbalance", classical_name: "Kasa Jwara", herbs: ["Tulsi", "Ginger", "Turmeric", "Yashtimadhu"], formulations: ["Sitopaladi Churna", "Talisadi Churna"], lifestyle: ["Steam inhalation", "Warm fluids", "Rest", "Ginger-honey tea"] }
      },
      complications: ["Secondary bacterial infection", "Sinusitis", "Otitis media", "Bronchitis"],
      emergency_signs: ["High fever >103°F", "Difficulty breathing", "Chest pain", "Confusion"],
      prevention: ["Hand hygiene", "Avoid close contact with sick", "Boost immunity", "Adequate sleep (7-8 hours)"]
    },

    flatulence: {
      names: { primary: "Flatulence", common: ["Gas", "Bloating", "Distension"], hindi: ["Gas", "Pet Mein Hawa", "Phet"], ayurvedic: "Udavarta", keywords: ["gas", "flatulence", "bloating", "burping", "farting", "distension", "abdominal bloating"] },
      definition: "Excessive gas in gastrointestinal tract causing discomfort and bloating",
      causes: [
        "Swallowing air while eating rapidly (aerophagia)",
        "High-fiber foods (beans, lentils, vegetables, whole grains)",
        "Lactose intolerance (inability to digest milk lactose)",
        "Food intolerances (FODMAP foods: onions, garlic, wheat)",
        "Bacterial overgrowth in small intestine (SIBO)",
        "Irritable Bowel Syndrome (IBS)",
        "Pancreatic enzyme deficiencies",
        "Antibiotics altering gut bacterial flora",
        "Constipation (gas trapped in colon)",
        "Inflammatory bowel diseases"
      ],
      symptoms: ["Abdominal bloating", "Abdominal distension", "Cramping pain", "Passing gas frequently", "Burping/belching", "Rumbling sounds in abdomen", "Feeling of fullness", "Discomfort after eating"],
      diagnosis: ["Clinical history and examination", "Elimination diet trial (2-4 weeks)", "Hydrogen breath test (for lactose/fructose intolerance & SIBO)", "Stool tests", "Imaging if persistent"],
      treatment: {
        modern: [
          {drug: "Simethicone", brands: "Gas-X, Gasex, Digene Gas Free", dosage: "125-250mg after meals and at bedtime", purpose: "Breaks down gas bubbles, provides relief"},
          {drug: "Probiotics", brands: "Yakult, Bifilac, Econorm, Align", dosage: "As directed on package", purpose: "Restores healthy gut bacteria"},
          {drug: "Lactase enzyme", brands: "Lactaid, Lactozyme", dosage: "Take with dairy products", purpose: "Helps digest lactose in dairy"},
          {drug: "Pancreatic enzymes", brands: "Enzypan, Fermilon", dosage: "As prescribed", purpose: "Improves food digestion"}
        ],
        ayurvedic: {
          dosha: "Vata aggravation (Apana Vayu affected), Weak Agni (digestive fire)",
          classical_name: "Udavarta (upward movement of gas causing bloating)",
          herbs: ["Hing (Asafoetida) - classic anti-gas", "Ajwain (Carom seeds)", "Ginger", "Fennel", "Cumin", "Coriander"],
          formulations: ["Hingvashtaka Churna", "Panchamrita Parpati", "Trikatu (3 peppers)"],
          dietary: ["Warm, oiled, easily digestible foods", "Cooked vegetables (avoid raw)", "Warming spices", "Avoid: cold drinks, heavy foods, legumes", "Eat slowly in calm environment"],
          lifestyle: ["Regular meal times", "Oil massage (Abhyanga)", "Yoga: Pawanmuktasana (wind-relieving pose)", "Pranayama (breathing)", "Meditation", "Adequate sleep"]
        },
        lifestyle: ["Eat slowly (30+ minutes per meal)", "Chew thoroughly (20-30 times)", "Avoid carbonated drinks", "Low FODMAP diet trial", "Regular physical exercise", "Manage stress", "Maintain hydration"]
      },
      red_flags: ["Severe abdominal pain not relieved", "Weight loss >5lbs", "Blood in stool", "Persistent symptoms >3 weeks", "Fever with gas and pain"],
      prevention: ["Identify trigger foods (keep food diary)", "Eat mindfully without distractions", "Stay hydrated (2-3 liters daily)", "Regular physical activity", "Manage stress levels"]
    },

    hypertension: {
      names: { primary: "Hypertension", common: ["High Blood Pressure", "High BP"], hindi: ["Ucch Raktchaap", "High BP"], keywords: ["hypertension", "blood pressure", "BP", "high BP", "elevated BP"] },
      definition: "Persistent elevation of systolic BP ≥130 mmHg or diastolic BP ≥80 mmHg on multiple readings",
      causes: ["Essential/Primary (90%): unknown cause", "Secondary (10%): kidney disease, endocrine disorders, medications"],
      symptoms: ["Often asymptomatic (silent killer)", "Headache (especially morning or back of head)", "Dizziness or lightheadedness", "Blurred vision", "Nosebleeds", "Shortness of breath"],
      diagnosis: ["Multiple BP readings on separate days", "24-hour ambulatory BP monitoring", "ECG (check for left ventricular hypertrophy)", "Blood tests (electrolytes, kidney function)", "Urinalysis"],
      treatment: {
        modern: [
          {drug: "Amlodipine", brands: "Amlovas, Stamlo, Amlokind, Norvasc", dosage: "5-10mg once daily", class: "Calcium channel blocker"},
          {drug: "Enalapril", brands: "Envas, Renitec, Vasotec", dosage: "5-20mg twice daily", class: "ACE inhibitor"},
          {drug: "Metoprolol", brands: "Metolar, Betaloc", dosage: "50-100mg twice daily", class: "Beta blocker"}
        ],
        ayurvedic: {
          dosha: "Vata-Pitta imbalance",
          classical_name: "Rakta Gata Vata (Vata in blood)",
          herbs: ["Arjuna (Terminalia arjuna) - cardioprotective", "Punarnava - diuretic", "Sarpagandha - natural antihypertensive", "Ashwagandha - stress reducer"],
          formulations: ["Arjunarishta", "Punarnavarishta", "Sarpagandha Vati"],
          lifestyle: ["Pranayama (breathing exercises)", "Meditation", "Stress reduction", "Yoga"]
        },
        lifestyle: ["Low sodium diet (<5g/day)", "Weight loss (5-10% of body weight)", "Regular aerobic exercise (30 min/day)", "Limit alcohol", "Quit smoking", "DASH diet (high fruits, vegetables, low fat)"]
      },
      complications: ["Stroke (ischemic or hemorrhagic)", "Myocardial infarction (heart attack)", "Heart failure", "Chronic kidney disease", "Retinopathy (eye damage)"],
      emergency_signs: ["BP >180/120 mmHg", "Severe headache", "Chest pain", "Vision disturbance", "Confusion"]
    },

    diabetes_type2: {
      names: { primary: "Type 2 Diabetes Mellitus", common: ["Diabetes", "Sugar Disease"], hindi: ["Madhumeha", "Shakkar Ki Bimari"], ayurvedic: "Madhumeha", keywords: ["diabetes", "sugar", "blood sugar", "glucose", "prediabetes"] },
      definition: "Metabolic disorder with insulin resistance and/or relative insulin deficiency leading to hyperglycemia",
      causes: ["Insulin resistance", "Pancreatic beta-cell dysfunction", "Genetic factors", "Obesity", "Sedentary lifestyle", "Poor diet"],
      symptoms: ["Polyuria (increased urination, especially at night)", "Polydipsia (increased thirst)", "Polyphagia (increased hunger)", "Unintentional weight loss", "Fatigue and weakness", "Blurred vision", "Slow wound healing", "Frequent infections"],
      diagnosis: ["Fasting plasma glucose ≥126 mg/dL", "HbA1c ≥6.5%", "Random plasma glucose ≥200 mg/dL with symptoms", "2-hour oral glucose tolerance test ≥200 mg/dL"],
      treatment: {
        modern: [
          {drug: "Metformin", brands: "Glycomet, Diabex, Obimet, Glyciphage", dosage: "500-1000mg twice daily with meals", note: "First-line treatment"},
          {drug: "Glimepiride", brands: "Amaryl, Glimestar, Gemer", dosage: "1-4mg once daily before breakfast", class: "Sulfonylurea"},
          {drug: "Insulin", types: "Rapid, Short, Intermediate, Long-acting", note: "When oral agents insufficient"}
        ],
        ayurvedic: {
          dosha: "Kapha-Pitta aggravation with Ojas depletion",
          classical_name: "Madhumeha (one of 20 Prameha types)",
          herbs: ["Gudmar (Gymnema sylvestre) - 'sugar destroyer'", "Karela (Bitter gourd)", "Methi (Fenugreek)", "Jamun seeds"],
          formulations: ["Chandraprabha Vati", "Diabecon", "Diabetic Care Churna"],
          dietary: ["Low carbohydrate, high fiber", "Avoid refined sugars", "Bitter foods (karela, neem)"],
          lifestyle: ["Regular exercise", "Weight management", "Stress reduction"]
        }
      },
      complications: ["Diabetic retinopathy", "Diabetic nephropathy", "Diabetic neuropathy", "Cardiovascular disease", "Stroke", "Foot ulcers & amputation"],
      emergency_signs: ["Very high glucose >400", "Confusion", "Severe dehydration", "Fruity-smelling breath (DKA)"]
    },

    asthma: {
      names: { primary: "Bronchial Asthma", common: ["Asthma"], hindi: ["Dama", "Shwas Rog"], ayurvedic: "Tamaka Shvasa", keywords: ["asthma", "wheeze", "breathlessness", "shortness of breath"] },
      definition: "Chronic inflammatory airway disease with reversible airflow obstruction and hyperresponsiveness",
      causes: ["Genetic predisposition", "Allergens (dust, pollen, pet dander)", "Environmental triggers (cold air, pollution)", "Exercise", "Infections", "Stress"],
      symptoms: ["Wheezing (high-pitched whistling sound)", "Shortness of breath", "Chest tightness", "Cough (especially at night, early morning, or after exercise)"],
      diagnosis: ["Spirometry", "Peak flow measurements", "Fractional exhaled nitric oxide (FeNO)", "Chest X-ray"],
      treatment: {
        modern: [
          {drug: "Salbutamol", brands: "Ventolin, Asthalin", dosage: "2-4 puffs as needed (up to 4 times daily)", type: "Quick-relief (Reliever)"},
          {drug: "Fluticasone propionate", brands: "Flixotide, Flohale", dosage: "100-500mcg twice daily", type: "Long-term control (Controller)"},
          {drug: "Montelukast", brands: "Montair, Singulair", dosage: "10mg at bedtime", class: "Leukotriene receptor antagonist"}
        ],
        ayurvedic: {
          dosha: "Vata-Kapha imbalance",
          classical_name: "Tamaka Shvasa (asthma with spasm)",
          herbs: ["Vasa (Adhatoda vasica) - bronchodilator", "Pushkarmool", "Kantakari", "Yashtimadhu"],
          formulations: ["Sitopaladi Churna", "Vasarishta", "Kanakasava"],
          lifestyle: ["Pranayama", "Avoid cold & damp environment", "Warm foods", "Steam inhalation"]
        }
      },
      complications: ["Status asthmaticus", "Respiratory failure", "Pneumothorax"],
      emergency_signs: ["Severe breathlessness", "Inability to speak in full sentences", "Blue lips/face", "Confusion or altered consciousness"]
    },

    myocardial_infarction: {
      names: { primary: "Myocardial Infarction", common: ["Heart Attack", "MI"], hindi: ["Dil Ka Dora", "Hriday Avarodan"], keywords: ["heart attack", "MI", "chest pain", "cardiac infarction"] },
      definition: "Necrosis of myocardial tissue due to acute coronary artery occlusion",
      causes: ["Atherosclerotic plaque rupture → thrombus formation", "Coronary artery vasospasm", "Coronary embolism"],
      symptoms: ["Severe crushing chest pain (substernal)", "Pain radiating to left arm, jaw, back, or neck", "Shortness of breath", "Nausea and vomiting", "Diaphoresis (cold sweating)", "Anxiety/sense of impending doom", "Palpitations"],
      diagnosis: ["12-lead ECG (ST elevations, Q waves)", "Cardiac troponin (I/T) levels", "Coronary angiography", "Echocardiography"],
      treatment: {
        acute: [
          {intervention: "Primary PCI (Percutaneous Coronary Intervention)", timeframe: "Within 90 minutes", note: "Preferred for STEMI"},
          {intervention: "Thrombolysis (fibrinolytic agents)", medications: "Streptokinase, tPA, TNKase", timeframe: "Within 12 hours if PCI not available"}
        ],
        medications: [
          {drug: "Aspirin", dosage: "325mg chewed immediately, then 81mg daily", purpose: "Antiplatelet"},
          {drug: "Clopidogrel", brands: "Plavix, Clopivas", dosage: "Loading 600mg, then 75mg daily", purpose: "Dual antiplatelet"},
          {drug: "Atorvastatin", brands: "Lipitor, Atorva", dosage: "40-80mg daily", purpose: "Cholesterol reduction"}
        ]
      },
      complications: ["Cardiogenic shock", "Arrhythmias (VF, VT, AV blocks)", "Heart failure", "Sudden cardiac death"],
      emergency_signs: ["This IS an emergency - call 108 immediately"],
      immediate_action: "🚨 CALL 108 IMMEDIATELY - LIFE-THREATENING EMERGENCY"
    },

    fever: {
      names: { primary: "Fever", hindi: ["Bukhar", "Taap"], keywords: ["fever", "high temperature", "pyrexia"] },
      definition: "Body temperature elevation above normal (>100.4°F or 38°C)",
      causes: ["Viral infections (URI, flu, COVID-19)", "Bacterial infections (UTI, pneumonia)", "Inflammatory conditions", "Malignancy", "Medications"],
      symptoms: ["Temperature >100.4°F", "Chills", "Sweating", "Headache", "Body aches", "Fatigue"],
      diagnosis: ["Thermometer reading", "Blood tests if persistent", "Imaging if indicated"],
      treatment: {
        modern: [
          {drug: "Paracetamol", brands: "Crocin, Dolo-650", dosage: "500-1000mg every 4-6 hours"},
          {drug: "Ibuprofen", brands: "Brufen, Combiflam", dosage: "400-600mg every 6-8 hours"}
        ],
        ayurvedic: {dosha: "Pitta aggravation", classical_name: "Jwara", herbs: ["Tulsi", "Ginger", "Neem"]}
      },
      emergency_signs: ["Fever >103°F", "Fever >3 days", "With severe headache + neck stiffness"]
    },

    cough: {
      names: { primary: "Cough", hindi: ["Khansi"], keywords: ["cough", "coughing"] },
      definition: "Involuntary reflex to clear airways",
      causes: ["Upper respiratory infection", "Asthma", "GERD", "Post-nasal drip", "Pneumonia"],
      symptoms: ["Dry cough or productive cough", "Throat clearing", "Mucus production"],
      diagnosis: ["Clinical assessment", "Chest X-ray if persistent"],
      treatment: {
        modern: [
          {drug: "Dextromethorphan", brands: "Benadryl DR, Corex", dosage: "15-30mg every 6 hours", type: "Cough suppressant"},
          {drug: "Guaifenesin", brands: "Grilinctus, Mucolite", dosage: "As directed", type: "Expectorant"}
        ],
        ayurvedic: {dosha: "Kapha-Vata", classical_name: "Kasa", herbs: ["Vasaka", "Tulsi", "Honey"]}
      },
      emergency_signs: ["Hemoptysis (coughing blood)", "Severe breathlessness"]
    },

    headache: {
      names: { primary: "Headache", hindi: ["Sir Dard"], keywords: ["headache", "head pain"] },
      definition: "Pain in the head or neck region",
      causes: ["Tension", "Migraine", "Cluster", "Sinus", "Hypertension", "Infection"],
      symptoms: ["Head pain (location varies)", "Nausea", "Sensitivity to light"],
      treatment: {
        modern: [
          {drug: "Paracetamol + Caffeine", brands: "Saridon, Combiflam Plus", dosage: "As directed"}
        ],
        ayurvedic: {dosha: "Vata-Pitta", classical_name: "Shirashoola", herbs: ["Brahmi", "Jatamansi"]}
      },
      emergency_signs: ["Sudden severe headache", "With fever + neck stiffness"]
    }
  },

  symptoms: {
    fever: { name: "Fever", definition: "Temperature >100.4°F", causes: ["Infection", "Inflammation"], differential: ["URI", "COVID-19", "Pneumonia"], red_flags: ["High fever >103°F", "Lasting >3 days"], ayurvedic: {dosha: "Pitta", classical_name: "Jwara"} },
    cough: { name: "Cough", definition: "Airway reflex", causes: ["Infection", "Asthma"], differential: ["Cold", "Pneumonia", "TB"], red_flags: ["Hemoptysis", "Weight loss"], ayurvedic: {dosha: "Kapha-Vata", classical_name: "Kasa"} },
    headache: { name: "Headache", definition: "Head pain", causes: ["Tension", "Migraine"], differential: ["Sinusitis", "Hypertension"], red_flags: ["Sudden severe", "With neck stiffness"], ayurvedic: {dosha: "Vata-Pitta", classical_name: "Shirashoola"} },
    gas: { name: "Gas", definition: "Abdominal bloating", related_disease: "flatulence", ayurvedic: {dosha: "Vata", classical_name: "Udavarta"} },
    chest_pain: { name: "Chest Pain", emergency: true, differential: ["Heart attack", "Angina", "GERD"], immediate_action: "🚨 CALL 108 IMMEDIATELY" }
  },

  medications: {
    paracetamol: {
      generic: "Paracetamol (Acetaminophen)",
      brands: ["Crocin", "Dolo-650", "Calpol", "P-500", "Metacin"],
      class: "Analgesic, Antipyretic",
      indications: ["Fever", "Pain", "Headache"],
      dosage: {adult: "500-1000mg every 4-6 hours (max 4g/day)", pediatric: "10-15mg/kg every 4-6 hours"},
      availability: "OTC - Available in all medical stores"
    },
    metformin: {
      generic: "Metformin",
      brands: ["Glycomet", "Diabex", "Obimet", "Glyciphage"],
      class: "Biguanide antidiabetic",
      indications: ["Type 2 Diabetes", "Prediabetes"],
      dosage: {initial: "500mg twice daily", maintenance: "1000-2000mg daily"},
      availability: "Prescription required"
    }
  },

  searchIndex: {
    "gas": ["flatulence"],
    "flatulence": ["flatulence"],
    "bloating": ["flatulence"],
    "udavarta": ["flatulence"],
    "fever": ["fever"],
    "bukhar": ["fever"],
    "diabetes": ["diabetes_type2"],
    "sugar": ["diabetes_type2"],
    "madhumeha": ["diabetes_type2"],
    "hypertension": ["hypertension"],
    "high bp": ["hypertension"],
    "heart attack": ["myocardial_infarction"],
    "mi": ["myocardial_infarction"],
    "chest pain": ["myocardial_infarction"],
    "asthma": ["asthma"],
    "dama": ["asthma"],
    "cough": ["cough"],
    "khansi": ["cough"],
    "headache": ["headache"],
    "sir dard": ["headache"]
  }
};

console.log("✅ Medical Database Loaded Successfully");
