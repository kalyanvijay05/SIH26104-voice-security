import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { HealthStatus } from '../types';

interface HeaderProps {
  health: HealthStatus | null;
}

export const Header: React.FC<HeaderProps> = ({ health }) => {
  const isHealthy = health?.status === 'healthy';

  return (
    <header className="viper-header">
      <div className="viper-brand">
        <div className="viper-logo">
          <ShieldCheck size={21} strokeWidth={2.4} />
        </div>

        <div className="viper-brand-info">
          <div className="viper-brand-name">
            V.I.P.E.R.
            <span className="viper-brand-badge">AI SECURITY</span>
          </div>
          <div className="viper-brand-tagline">
            Voice Identity &amp; Protection Engine for Real-time Threats
          </div>
        </div>
      </div>

      <div className={`viper-status-pill ${isHealthy ? 'online' : 'offline'}`}>
        <span className="viper-status-dot" />
        <span>
          {health
            ? isHealthy
              ? 'Detection Engine Online'
              : 'Engine Degraded'
            : 'Connecting to Engine...'}
        </span>
      </div>
    </header>
  );
};