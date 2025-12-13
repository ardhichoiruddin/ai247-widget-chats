import App from './App.svelte';
import "./app.css";

export interface Ai247Config {
  apiKey: string;
  botId: string;
  theme?: 'light' | 'dark';
  position?: 'bottom-right' | 'bottom-left';
}

(function() {
  'use strict';
  
  const BASE_URL = import.meta.env.BASE_URL ?? 'https://embed.ai247.id';
  
  async function fetchCSS(href: string): Promise<string> {
    const response = await fetch(href);
    return await response.text();
  }
  
  async function initAi247Chat(config: Ai247Config | undefined): Promise<void> {
    const cssText = await fetchCSS(`${BASE_URL}/script.css`);
    
    const container = document.createElement('div');
    container.id = 'ai247-chat-widget';
    document.body.appendChild(container);
    
    const shadowRoot = container.attachShadow({ mode: 'open' });
    
    const styleEl = document.createElement('style');
    styleEl.textContent = cssText;
    shadowRoot.appendChild(styleEl);
    
    const target = document.createElement('div');
    shadowRoot.appendChild(target);
    
    new App({
      target: target,
      ...config
    });
  }
  
  if (window.AI247_CONFIG) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        initAi247Chat(window?.AI247_CONFIG);
      });
    } else {
      initAi247Chat(window.AI247_CONFIG);
    }
  }
  
  (window as any).Ai247Chat = {
    init: initAi247Chat,
    version: '1.0.0'
  };
})();
