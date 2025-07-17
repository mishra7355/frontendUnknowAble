import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onGetQuote }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-card hover:shadow-interactive transition-smooth overflow-hidden">
      {/* Service Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
            {service.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name={service.icon} size={20} color="var(--color-primary)" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.subtitle}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-primary">{service.price}</p>
            <p className="text-xs text-muted-foreground">{service.duration}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {service.description}
        </p>

        {/* Key Benefits */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-foreground mb-2">Key Benefits:</h4>
          <ul className="space-y-1">
            {service.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Check" size={14} color="var(--color-success)" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Expandable Details */}
        {isExpanded && (
          <div className="border-t border-border pt-4 mb-4">
            <div className="space-y-4">
              {/* Additional Benefits */}
              {service.benefits.length > 3 && (
                <div>
                  <h5 className="text-sm font-medium text-foreground mb-2">Additional Benefits:</h5>
                  <ul className="space-y-1">
                    {service.benefits.slice(3).map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={14} color="var(--color-success)" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Deliverables */}
              <div>
                <h5 className="text-sm font-medium text-foreground mb-2">What You Get:</h5>
                <ul className="space-y-1">
                  {service.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="Package" size={14} color="var(--color-accent)" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process Steps */}
              <div>
                <h5 className="text-sm font-medium text-foreground mb-2">Our Process:</h5>
                <div className="space-y-2">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-primary">{index + 1}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{step.title}</p>
                        <p className="text-xs text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            size="sm"
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            onClick={toggleExpanded}
            className="flex-1"
          >
            {isExpanded ? "Show Less" : "Learn More"}
          </Button>
          <Button
            variant="default"
            size="sm"
            iconName="MessageCircle"
            iconPosition="left"
            onClick={() => onGetQuote(service)}
            className="flex-1"
          >
            Get Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;