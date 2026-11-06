import { designsData } from '../data/designsData';
import { interiorsData } from '../data/interiorsData';
import { exteriorsData } from '../data/exteriorsData';
import { galleryData } from '../data/galleryData';
import { aboutData } from '../data/aboutData';

const API_BASE = '/api';

/**
 * Generic fetch wrapper with graceful offline fallback
 */
async function request(endpoint, options = {}, fallbackData = null) {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!res.ok) {
      const errBody = await res.json().catch(() => ({}));
      throw new Error(errBody.error?.message || `Request failed with status ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    if (fallbackData !== null) {
      console.warn(`[API] Endpoint '${endpoint}' unreachable (${err.message}), using local cache.`);
      return { success: true, data: fallbackData };
    }
    throw err;
  }
}

export const api = {
  // Designs
  async getDesigns(category = 'all', search = '') {
    const query = new URLSearchParams();
    if (category && category !== 'all') query.append('category', category);
    if (search) query.append('search', search);
    const qs = query.toString() ? `?${query.toString()}` : '';

    return request(`/designs${qs}`, { method: 'GET' }, designsData);
  },

  async getDesignById(id) {
    const fallback = designsData.find((d) => d.id === id);
    return request(`/designs/${id}`, { method: 'GET' }, fallback);
  },

  // Interiors
  async getInteriors() {
    return request('/interiors', { method: 'GET' }, interiorsData);
  },

  // Exteriors
  async getExteriors() {
    return request('/exteriors', { method: 'GET' }, exteriorsData);
  },

  // Gallery
  async getGallery(category = 'all', tag = '') {
    const query = new URLSearchParams();
    if (category && category !== 'all') query.append('category', category);
    if (tag) query.append('tag', tag);
    const qs = query.toString() ? `?${query.toString()}` : '';

    return request(`/gallery${qs}`, { method: 'GET' }, galleryData);
  },

  // Studio / About
  async getStudioInfo() {
    return request('/studio', { method: 'GET' }, aboutData);
  },

  // Consultation Inquiries (POST to backend)
  async submitConsultation(formData) {
    return request('/consultations', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  },

  // Newsletter Subscriptions (POST to backend)
  async subscribeNewsletter(email) {
    return request('/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },
};

