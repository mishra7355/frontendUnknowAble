import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceComparison = ({ comparisonData, onSelectPlan }) => {
  const { tiers, features } = comparisonData;

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="BarChart3" size={20} color="var(--color-primary)" />
          <h3 className="text-lg font-semibold text-foreground">Service Comparison</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          Compare our service tiers to find the perfect fit for your needs
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Header */}
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-4 font-medium text-foreground min-w-[200px]">
                Features
              </th>
              {tiers.map((tier) => (
                <th key={tier.id} className="text-center p-4 min-w-[160px]">
                  <div className="space-y-2">
                    <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-md text-xs font-medium ${
                      tier.popular 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon name={tier.icon} size={12} />
                      <span>{tier.name}</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">{tier.price}</div>
                    <div className="text-xs text-muted-foreground">{tier.billing}</div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {features.map((feature, featureIndex) => (
              <tr key={featureIndex} className="border-b border-border hover:bg-muted/30 transition-smooth">
                <td className="p-4">
                  <div className="flex items-start space-x-2">
                    <Icon name={feature.icon} size={16} color="var(--color-muted-foreground)" className="mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground text-sm">{feature.name}</div>
                      {feature.description && (
                        <div className="text-xs text-muted-foreground mt-1">{feature.description}</div>
                      )}
                    </div>
                  </div>
                </td>
                {tiers.map((tier) => (
                  <td key={tier.id} className="p-4 text-center">
                    {feature.values[tier.id] === true ? (
                      <Icon name="Check" size={16} color="var(--color-success)" />
                    ) : feature.values[tier.id] === false ? (
                      <Icon name="X" size={16} color="var(--color-error)" />
                    ) : (
                      <span className="text-sm text-foreground font-medium">
                        {feature.values[tier.id]}
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>

          {/* Footer */}
          <tfoot>
            <tr>
              <td className="p-4"></td>
              {tiers.map((tier) => (
                <td key={tier.id} className="p-4 text-center">
                  <Button
                    variant={tier.popular ? "default" : "outline"}
                    size="sm"
                    iconName="ArrowRight"
                    iconPosition="right"
                    onClick={() => onSelectPlan(tier)}
                    fullWidth
                  >
                    {tier.popular ? "Get Started" : "Choose Plan"}
                  </Button>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ServiceComparison;