import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add CSRF token if available
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    if (csrfToken) {
      config.headers['X-CSRF-Token'] = csrfToken;
    }
    
    // Add timestamp to prevent caching
    config.headers['X-Timestamp'] = Date.now().toString();
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 429) {
      console.warn('Rate limit exceeded. Please try again later.');
    } else if (error.response?.status === 503) {
      console.warn('Service temporarily unavailable. Please try again later.');
    } else if (error.code === 'ECONNABORTED') {
      console.warn('Request timeout. Please check your connection.');
    }
    
    return Promise.reject(error);
  }
);

// Contact form API
export const contactAPI = {
  // Submit contact form
  submitForm: async (formData) => {
    try {
      const response = await api.post('/contact', formData);
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to submit form',
        details: error.response?.data?.details || [],
        status: error.response?.status || 500
      };
    }
  },
  
  // Get contact form statistics (if needed)
  getStats: async () => {
    try {
      const response = await api.get('/contact/stats');
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to get stats',
        status: error.response?.status || 500
      };
    }
  }
};

// Health check API
export const healthAPI = {
  // Check server health
  checkHealth: async () => {
    try {
      const response = await api.get('/health');
      return {
        success: true,
        data: response.data
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.error || 'Health check failed',
        status: error.response?.status || 500
      };
    }
  }
};

// Utility functions
export const apiUtils = {
  // Format error message for display
  formatErrorMessage: (error) => {
    if (typeof error === 'string') {
      return error;
    }
    
    if (error.details && Array.isArray(error.details) && error.details.length > 0) {
      return error.details.map(detail => detail.message || detail.msg).join(', ');
    }
    
    return error.error || 'An unexpected error occurred';
  },
  
  // Check if error is validation error
  isValidationError: (error) => {
    return error.status === 400 && error.details && Array.isArray(error.details);
  },
  
  // Check if error is rate limit error
  isRateLimitError: (error) => {
    return error.status === 429;
  },
  
  // Check if error is server error
  isServerError: (error) => {
    return error.status >= 500;
  },
  
  // Retry function with exponential backoff
  retryWithBackoff: async (fn, maxRetries = 3, baseDelay = 1000) => {
    for (let i = 0; i < maxRetries; i++) {
      try {
        return await fn();
      } catch (error) {
        if (i === maxRetries - 1) throw error;
        
        const delay = baseDelay * Math.pow(2, i);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
};

// Export default api instance
export default api;