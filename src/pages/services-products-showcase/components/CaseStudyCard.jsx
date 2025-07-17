import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CaseStudyCard = ({ caseStudy }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'FileText' },
    { id: 'results', label: 'Results', icon: 'TrendingUp' },
    { id: 'process', label: 'Process', icon: 'Settings' }
  ];

  return (
    <div className="bg-card border border-border rounded-lg shadow-card overflow-hidden">
      {/* Header */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
              {caseStudy.category}
            </span>
            <span className="bg-success text-success-foreground px-2 py-1 rounded-md text-xs font-medium">
              {caseStudy.industry}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-white">{caseStudy.title}</h3>
          <p className="text-sm text-white/80">{caseStudy.client}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 text-sm font-medium transition-smooth ${
                activeTab === tab.id
                  ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Challenge</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Solution</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Timeline</h4>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} color="var(--color-muted-foreground)" />
                <span className="text-sm text-muted-foreground">{caseStudy.timeline}</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'results' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {caseStudy.metrics.map((metric, index) => (
                <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Key Achievements</h4>
              <ul className="space-y-2">
                {caseStudy.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="CheckCircle" size={16} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'process' && (
          <div className="space-y-4">
            <div className="space-y-3">
              {caseStudy.processSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium text-primary">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="text-sm font-medium text-foreground mb-1">{step.title}</h5>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Icon name="Clock" size={12} color="var(--color-muted-foreground)" />
                      <span className="text-xs text-muted-foreground">{step.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-6 pt-4 border-t border-border">
          <Button
            variant="outline"
            size="sm"
            iconName="ExternalLink"
            iconPosition="right"
            fullWidth
          >
            View Full Case Study
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;