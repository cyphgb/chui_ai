// Gemini Service for CHUITECHMA Chatbot
// This file handles all Google Gemini API interactions and configuration

class GeminiService {
  constructor() {
    // TODO: Replace with your valid Gemini API key
    this.apiKey = 'AIzaSyCYMyLCyNCdMlllIT_fl5kXv8fKVY6HfnI';
    this.apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';
    this.model = 'gemini-2.5-flash';
    this.maxTokens = 500;
    this.temperature = 0.7;
    console.log('Gemini Service initialized with API key');
    
    // University information for enhanced responses
    this.universityInfo = {
      "institutional_identity": {
        "official_name": "CHITECHMA University Institute of Technology and Medical Affairs",
        "former_name": "Chartered Higher Institute of Technology and Management",
        "founded": "June 2017",
        "founder": "Dr. Momenyi Mirabel Tangmo",
        "founding_story": "CHITECHMA was established to provide practical, skill-based higher education in technology, medical sciences, business, and management to meet national workforce needs.",
        "vision": "Build and equip business leaders with quality entrepreneurial skills and mindset.",
        "mission": "To deliver professional, practical, and entrepreneurial-focused education that prepares students for leadership and industry integration.",
        "motto": "Capacity building, professionalism, and integrity",
        "core_values": ["Professionalism", "Integrity", "Innovation", "Excellence", "Entrepreneurship"],
        "slogan": "Tell the future we are ready",
        "philosophy": "Practical, skill-based learning combined with academic excellence to produce employable graduates.",
        "culture": "Entrepreneurial, innovative, and student-centered.",
        "accreditation_status": "Accredited by the Ministry of Higher Education (MINESUP), Cameroon",
        "regulatory_bodies": ["Ministry of Higher Education", "University of Buea"],
        "government_recognition": "Authorization Number 17 09265/L/MINESUP/SG/DDES/ESUP/SDA/AEO (2017)",
        "institutional_affiliations": ["University of Buea (academic supervision)", "Ministry of Higher Education", "PAD"],
        "international_partnerships": ["University of Calabar, Nigeria", "Patrice Lumumba University, Russia"],
        "national_partnerships": ["MINESUP", "University of Buea (UB)", "PAD"],
        "awards": "Data not publicly available",
        "major_achievements": "HND, Degree, and Master program graduations, professional skill-building workshops, collaborations with national and international universities",
        "fields_of_specialization": ["Engineering Technology", "Biomedical Sciences", "Business and Management", "Hospitality and Home Economics"]
      },
      "campus_information": {
        "country": "Cameroon",
        "region": "South West Region",
        "city": "Buea",
        "campus_locations": {
          "main_campus": "Tarred Malingo behind Amazing Pharmacy",
          "admission_campus": "Opposite Presbyterian Church, Molyko, Buea"
        },
        "number_of_campuses": 2,
        "description": "Practical learning environment with classrooms, labs, and administrative buildings; Admission and Main campus for student services",
        "transportation": "Accessible by public transport, taxis, and personal vehicles"
      },
      "administration": {
        "founder": "Dr. Momenyi Mirabel Tangmo",
        "proprietor": "Dr. Momenyi Mirabel Tangmo",
        "registrar": [
          {"name": "Dr. Ambei Moses Chu", "start_year": 2017, "end_year": 2019},
          {"name": "Dr. Tantoh Williams", "start_year": 2020, "end_year": 2020},
          {"name": "Dr. Tameh Jube", "start_year": 2022, "end_year": 2024},
          {"name": "Dr. Divid Bisong Epey", "start_year": 2024, "end_year": "present"}
        ],
        "dean_of_studies": [
          {"name": "Mme. Nthanbo Milanda", "start_year": 2018, "end_year": 2020},
          {"name": "Mr. Prince Oboso Epupu Raegan", "start_year": 2020, "end_year": 2021},
          {"name": "Mr. Divine Eyong Etahoben", "start_year": 2021, "end_year": 2022},
          {"name": "Mr. Alain Pierre", "start_year": 2022, "end_year": 2023},
          {"name": "Mme. Funwie Helen", "start_year": 2023, "end_year": "present"}
        ],
        "director_of_student_affairs": [
          {"name": "Dr. Ngole Rary Akwe", "start_year": 2020, "end_year": 2022},
          {"name": "Mme. Data not available", "start_year": 2022, "end_year": 2025}
        ],
        "director_of_finance": "Mr. Chenwie Marcel",
        "director_of_ict": [
          {"name": "Mr. Ngala Dirane", "start_year": 2020, "end_year": 2022},
          {"name": "Mr. Kaka Martin", "start_year": 2022, "end_year": 2024},
          {"name": "Mr. Simon Ngwonju", "start_year": 2024, "end_year": "present"}
        ],
        "quality_assurance_officer": [
          {"name": "Mr. Issa Divine", "start_year": 2020, "end_year": 2022},
          {"name": "Asongu Jenny", "start_year": 2023, "end_year": "present"}
        ],
        "examination_officer": [
          {"name": "Mr. Divine Eyong Etahoben", "start_year": 2019, "end_year": 2020},
          {"name": "Mme. Funwie Helen", "start_year": 2020, "end_year": 2023},
          {"name": "Mme. Owi Mairron Besseng", "start_year": 2023, "end_year": "present"}
        ],
        "admission_officers": ["Mme. Fowfietsoh Ophilia", "Mme. Che Heriberth", "Mme. Nancy Nkarsay"]
      },
      "faculties": [
        {
          "name": "School of Engineering and Technology",
          "year_established": 2017,
          "description": "Offers practical training in computer software, hardware, networking, and electrical engineering",
          "objectives": "Equip students with technological and entrepreneurial skills",
          "dean": "Data not publicly available",
          "contact": "info@chitechma.com"
        },
        {
          "name": "School of Business, Finance and Management",
          "year_established": 2017,
          "description": "Offers programs in accounting, finance, marketing, and management",
          "objectives": "Train students for leadership and business excellence"
        },
        {
          "name": "School of Medical and Biomedical Sciences",
          "year_established": 2022,
          "description": "Programs in Nursing, Midwifery, and Medical Laboratory Science",
          "objectives": "Produce competent health professionals"
        },
        {
          "name": "School of Tourism, Hospitality and Home Economics",
          "year_established": 2017,
          "description": "Offers programs in hotel management, fashion design, culinary arts, and tourism",
          "objectives": "Train students for the hospitality and tourism industry"
        }
      ],
      "departments": {
        "LTM": "Mme. Ngwa Patience",
        "BFP_HMC": "Mme. Mbasso Josephine",
        "FCT": "Mme. Christina Joffi",
        "CSE": "Mr. Simon Ngwonju",
        "NWS_EPS": "Mme. Taku Otto",
        "MLS_NUES": "Mr. Monya Elvis",
        "ACC_BFN": "Mme. Sakem Grace",
        "PRM_HRM_MKT": "Mme. Asongu Jenny"
      },
      "admissions": {
        "HND": {
          "requirements": ["Photocopies of A-level and O-level", "ID card", "Birth certificate", "2 passport size photos"],
          "application_fee": "25,000 CFA"
        },
        "Bachelor": {
          "requirements": ["Certified copies of HND transcripts", "A-level certificates", "Birth certificate", "ID card", "O-level photocopies", "2 passport size photos"],
          "application_fee": "25,000 CFA"
        },
        "Masters": {
          "requirements": ["Certified Bachelor's degree or attestation", "A-level certificate", "Birth certificate", "ID card", "Medical certificate", "2 passport size photos on red background", "2 recommendation letters from PhD holders"],
          "application_fee": "45,000 CFA"
        }
      },
      "tuition_fees": {
        "HND": {"Engineering": 300000, "Business": 250000, "Medical": 350000, "Home_Economic": 300000},
        "Bachelor": {"Engineering": 400000, "Business": 350000, "Medical": 400000, "Home_Economic": 400000},
        "Masters": {"All_Programs": 550000},
        "payment_plan": "Two installments"
      },
      "contact": {
        "emails": ["info@chitechma.com"],
        "phone_numbers": ["+237675254348", "+237650675076", "+237652821294"],
        "website": "https://t.chitechma.com",
        "social_media": {
          "facebook": "CHUITECHMA UNIVERSITY",
          "tiktok": "CHUITECHMA UNIVERSITY",
          "linkedin": "CHUITECHMA UNIVERSITY",
          "instagram": "CHUITECHMA UNIVERSITY"
        },
        "admission_office": ["+237675254348", "+237652821294"]
      },
      "history_timeline": [
        {"year": 2017, "event": "Institution established"},
        {"year": 2019, "event": "First graduation batch in December"},
        {"year": 2022, "event": "School of Medical added in October"},
        {"year": 2025, "event": "School of Education added"}
      ],
      "student_union": {
        "2026-2027": {
          "president": "Negob Boris (Nursing)",
          "vice_president": "Lue Bryan Chukwuecbuks",
          "secretary_general": "Tangfact Hensleg (Accounting)",
          "financial_secretary": "Daberechi Kingsley (CSE)",
          "sports_coordinator": "Fuanjia Ryan (CSE)",
          "PRO": "Mukoh Ajei Blessing (CSE)",
          "education_officer": "Obi Jane (Nursing)",
          "adviser": "Youtta Kelven (CSE)"
        }
      }
    };
    
    // Cache for web scraping results
    this.webCache = new Map();
    this.cacheExpiry = 5 * 60 * 1000; // 5 minutes
  }

  // Initialize API key from localStorage or prompt user
  initializeApiKey() {
    let apiKey = localStorage.getItem('chuitechma_gemini_api_key');
    if (!apiKey) {
      apiKey = prompt('Please enter your Gemini API key (AIza...):');
      if (apiKey && apiKey.startsWith('AIza')) {
        localStorage.setItem('chuitechma_gemini_api_key', apiKey);
        this.apiKey = apiKey;
      } else {
        alert('Invalid API key format. Please enter a valid Gemini API key starting with "AIza"');
        return false;
      }
    } else {
      this.apiKey = apiKey;
    }
    return true;
  }

  // Update API key
  updateApiKey(newKey) {
    if (newKey && newKey.startsWith('AIza')) {
      localStorage.setItem('chuitechma_gemini_api_key', newKey);
      this.apiKey = newKey;
      return true;
    }
    return false;
  }

  // Web scraping method to get real-time information
  async scrapeWebsite(url, query = '') {
    const cacheKey = `${url}_${query}`;
    const cached = this.webCache.get(cacheKey);
    
    // Return cached result if still valid
    if (cached && (Date.now() - cached.timestamp) < this.cacheExpiry) {
      return cached.data;
    }
    
    try {
      // Use a CORS proxy to fetch the website
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
      const response = await fetch(proxyUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      const data = await response.json();
      const htmlContent = data.contents;
      
      if (!htmlContent) {
        throw new Error('No content received');
      }
      
      // Parse HTML content
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');
      
      // Extract relevant information
      const extractedData = {
        title: doc.querySelector('title')?.textContent || '',
        headings: Array.from(doc.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => h.textContent.trim()),
        paragraphs: Array.from(doc.querySelectorAll('p')).map(p => p.textContent.trim()).filter(p => p.length > 20),
        links: Array.from(doc.querySelectorAll('a[href]')).map(a => ({
          text: a.textContent.trim(),
          href: a.href
        })).filter(link => link.text.length > 3),
        lists: Array.from(doc.querySelectorAll('ul, ol')).map(list => 
          Array.from(list.querySelectorAll('li')).map(li => li.textContent.trim())
        ).filter(items => items.length > 0),
        lastUpdated: new Date().toISOString()
      };
      
      // Cache the result
      this.webCache.set(cacheKey, {
        data: extractedData,
        timestamp: Date.now()
      });
      
      console.log('Successfully scraped website:', url);
      return extractedData;
      
    } catch (error) {
      console.error('Web scraping failed:', error);
      return null;
    }
  }

  // Get system prompt based on context
  async getSystemPrompt(language = 'en', context = {}) {
    return this.getEnhancedSystemPrompt(language, context);
  }

  // Enhanced system prompt with real-time data
  async getEnhancedSystemPrompt(language = 'en', context = {}) {
    let webData = null;
    
    // Scrape website for real-time information if needed
    if (context.needsRealTimeInfo || context.query?.includes('latest') || context.query?.includes('current')) {
      webData = await this.scrapeWebsite('https://t.chitechma.com', context.query || '');
    }
    
    const basePrompt = `You are an *intelligent assistant* for CHUITECHMA University with access to both stored knowledge and real-time web information. Your role is to provide accurate, helpful information about:

1. Admissions and application processes
2. School fees and payment options  
3. Available departments and programs
4. Campus facilities and student life
5. Academic requirements and courses
6. University history and achievements

**Stored University Information:**
${JSON.stringify(this.universityInfo, null, 2)}

${webData ? `
**Real-time Information from CHUITECHMA Website:**
Title: ${webData.title}
Key Information: ${webData.headings.slice(0, 5).join(' • ')}
Recent Updates: ${webData.paragraphs.slice(0, 3).join(' • ')}
` : ''}

**Enhanced Capabilities:**
- Think *outside the box* to provide comprehensive answers
- Combine stored knowledge with real-time web data
- Provide creative solutions and suggestions
- Analyze information critically and offer insights
- Suggest additional resources or contacts when helpful

Guidelines:
- Always be professional, friendly, and helpful
- Provide specific, actionable information when possible
- If you don't know something, admit it and suggest where they might find information
- Respond in the language the user is using (English, French, Spanish, or Chinese)
- Keep responses concise but comprehensive
- Focus on CHUITECHMA University specifically
- Maintain a positive and professional tone that reflects well on the institution
- Use provided university information to give accurate, detailed responses about programs, fees, admission requirements, etc.
- Use **bold** text for important information like program names, fees, deadlines
- Use *italic* text for emphasis and additional details
- Use bullet points (•) for lists of programs, requirements, or options
- When real-time data is available, mention that it's from the official website
- Be creative and proactive in offering helpful suggestions`;

    // Add context-specific information
    let contextInfo = '';
    
    if (context.userType) {
      contextInfo += `\n\nUser Context: ${context.userType}`;
    }
    
    if (context.previousTopics) {
      contextInfo += `\n\nPreviously discussed: ${context.previousTopics.join(', ')}`;
    }

    // Language-specific instructions
    const languageInstructions = {
      en: '\n\nPlease respond in English.',
      fr: '\n\nVeuillez répondre en français.',
      es: '\n\nPor favor responda en español.',
      zh: '\n\n请用中文回复。'
    };

    return basePrompt + contextInfo + (languageInstructions[language] || languageInstructions.en);
  }

  // Main API call function
  async callAPI(userMessage, language = 'en', context = {}) {
    if (!this.apiKey) {
      throw new Error('API key not configured');
    }

    try {
      // Get enhanced system prompt with potential web data
      const systemPrompt = await this.getEnhancedSystemPrompt(language, {...context, query: userMessage});
      
      const response = await fetch(`${this.apiUrl}?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: systemPrompt + "\n\nUser: " + userMessage
            }]
          }],
          generationConfig: {
            temperature: this.temperature,
            maxOutputTokens: this.maxTokens,
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`API Error: ${response.status} - ${errorData.error?.message || response.statusText}`);
      }

      const data = await response.json();
      return {
        success: true,
        response: data.candidates[0].content.parts[0].text.trim(),
        usage: data.usageMetadata,
        hasWebData: context.needsRealTimeInfo || false
      };
    } catch (error) {
      console.error('Gemini API Error:', error);
      
      // Check if it's a quota exceeded error
      let errorType = 'general';
      if (error.message.includes('429') || error.message.includes('quota') || error.message.includes('exceeded') || error.message.includes('limit')) {
        errorType = 'quota';
      }
      
      return {
        success: false,
        error: error.message,
        fallback: this.getFallbackResponse(language, errorType)
      };
    }
  }

  // Get fallback response based on language
  getFallbackResponse(language, errorType = 'general') {
    const fallbacks = {
      general: {
        en: "I apologize, but I'm having trouble connecting to my AI services right now. Please try again later or contact the university directly for assistance.",
        fr: "Je suis désolé, mais j'ai des difficultés à me connecter à mes services IA pour le moment. Veuillez réessayer plus tard ou contacter directement l'université pour obtenir de l'aide.",
        es: "Lo siento, pero estoy teniendo problemas para conectarme a mis servicios de IA en este momento. Por favor, inténtelo de nuevo más tarde o contacte directamente a la universidad para obtener ayuda.",
        zh: "抱歉，我现在无法连接到我的AI服务。请稍后再试或直接联系大学寻求帮助。"
      },
      quota: {
        en: "The Gemini AI service has reached its usage limit. Please contact the administrator to check the API key billing and quota. Using fallback responses for now.",
        fr: "Le service Gemini IA a atteint sa limite d'utilisation. Veuillez contacter l'administrateur pour vérifier la facturation et le quota de la clé API. Utilisation des réponses de secours pour le moment.",
        es: "El servicio Gemini IA ha alcanzado su límite de uso. Por favor contacte al administrador para verificar la facturación y cuota de la clave API. Usando respuestas de respaldo por ahora.",
        zh: "Gemini AI服务已达到使用限制。请联系管理员检查API密钥的计费和配额。目前使用备用回复。"
      }
    };
    return fallbacks[errorType]?.[language] || fallbacks.general[language] || fallbacks.general.en;
  }

  // Quick response for common queries (cache for performance)
  getQuickResponse(query, language) {
    const quickResponses = {
      en: {
        'hello': "Hello! Welcome to CHUITECHMA University. How can I help you today?",
        'fees': "School fees vary by program and level. Which specific program are you interested in?",
        'admission': "CHUITECHMA accepts applications throughout the year. What program would you like to apply for?",
        'departments': "CHUITECHMA offers Engineering, Health Sciences, Business, ICT, and more. Which department interests you?"
      },
      fr: {
        'bonjour': "Bonjour ! Bienvenue à l'Université CHUITECHMA. Comment puis-je vous aider aujourd'hui ?",
        'frais': "Les frais de scolarité varient selon le programme et le niveau. Quel programme spécifique vous intéresse ?",
        'admission': "CHUITECHMA accepte les candidatures toute l'année. Pour quel programme souhaitez-vous postuler ?"
      },
      es: {
        'hola': "¡Hola! Bienvenido a la Universidad CHUITECHMA. ¿Cómo puedo ayudarte hoy?",
        'cuotas': "Las tarifas varían según el programa y el nivel. ¿Qué programa específico te interesa?"
      },
      zh: {
        '你好': "你好！欢迎来到CHUITECHMA大学。今天我能如何帮助您？",
        '费用': "学费因课程和级别而异。您对哪个具体课程感兴趣？"
      }
    };

    const normalizedQuery = query.toLowerCase().trim();
    const langResponses = quickResponses[language] || quickResponses.en;
    
    for (const [key, response] of Object.entries(langResponses)) {
      if (normalizedQuery.includes(key)) {
        return response;
      }
    }
    
    return null;
  }

  // Configure service parameters
  configure(config = {}) {
    if (config.model) this.model = config.model;
    if (config.maxTokens) this.maxTokens = config.maxTokens;
    if (config.temperature) this.temperature = config.temperature;
    if (config.apiKey) this.updateApiKey(config.apiKey);
  }

  // Get current configuration
  getConfig() {
    return {
      model: this.model,
      maxTokens: this.maxTokens,
      temperature: this.temperature,
      hasApiKey: !!this.apiKey
    };
  }
}

// Export for use in main application
window.GeminiService = GeminiService;
