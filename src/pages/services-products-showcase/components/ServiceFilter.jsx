import React from 'react';
import Icon from '../../../components/AppIcon';

const ServiceFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  industries,
  selectedIndustry,
  onIndustryChange,
  projectSizes,
  selectedProjectSize,
  onProjectSizeChange,
  isMobile = false
}) => {
  const FilterChip = ({ label, isActive, onClick, icon }) => (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-smooth whitespace-nowrap ${
        isActive
          ? 'bg-primary text-primary-foreground'
          : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
      }`}
    >
      {icon && <Icon name={icon} size={14} />}
      <span>{label}</span>
    </button>
  );

  if (isMobile) {
    return (
      <div className="space-y-4">
        {/* Categories */}
        <div>
          <h3 className="text-sm font-medium text-foreground mb-3">Service Type</h3>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            <FilterChip
              label="All Services"
              isActive={selectedCategory === 'all'}
              onClick={() => onCategoryChange('all')}
              icon="Grid3X3"
            />
            {categories.map((category) => (
              <FilterChip
                key={category.id}
                label={category.name}
                isActive={selectedCategory === category.id}
                onClick={() => onCategoryChange(category.id)}
                icon={category.icon}
              />
            ))}
          </div>
        </div>

        {/* Industries */}
        <div>
          <h3 className="text-sm font-medium text-foreground mb-3">Industry</h3>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            <FilterChip
              label="All Industries"
              isActive={selectedIndustry === 'all'}
              onClick={() => onIndustryChange('all')}
              icon="Building"
            />
            {industries.map((industry) => (
              <FilterChip
                key={industry.id}
                label={industry.name}
                isActive={selectedIndustry === industry.id}
                onClick={() => onIndustryChange(industry.id)}
                icon={industry.icon}
              />
            ))}
          </div>
        </div>

        {/* Project Sizes */}
        <div>
          <h3 className="text-sm font-medium text-foreground mb-3">Project Size</h3>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            <FilterChip
              label="All Sizes"
              isActive={selectedProjectSize === 'all'}
              onClick={() => onProjectSizeChange('all')}
              icon="Layers"
            />
            {projectSizes.map((size) => (
              <FilterChip
                key={size.id}
                label={size.name}
                isActive={selectedProjectSize === size.id}
                onClick={() => onProjectSizeChange(size.id)}
                icon={size.icon}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-6">
      <div className="flex items-center space-x-2">
        <Icon name="Filter" size={20} color="var(--color-primary)" />
        <h3 className="text-lg font-semibold text-foreground">Filter Services</h3>
      </div>

      {/* Categories */}
      <div>
        <h4 className="text-sm font-medium text-foreground mb-3">Service Type</h4>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryChange('all')}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-smooth ${
              selectedCategory === 'all' ?'bg-primary/10 text-primary' :'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            <Icon name="Grid3X3" size={16} />
            <span>All Services</span>
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-smooth ${
                selectedCategory === category.id
                  ? 'bg-primary/10 text-primary' :'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={category.icon} size={16} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Industries */}
      <div>
        <h4 className="text-sm font-medium text-foreground mb-3">Industry</h4>
        <div className="space-y-2">
          <button
            onClick={() => onIndustryChange('all')}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-smooth ${
              selectedIndustry === 'all' ?'bg-primary/10 text-primary' :'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            <Icon name="Building" size={16} />
            <span>All Industries</span>
          </button>
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => onIndustryChange(industry.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-smooth ${
                selectedIndustry === industry.id
                  ? 'bg-primary/10 text-primary' :'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={industry.icon} size={16} />
              <span>{industry.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Project Sizes */}
      <div>
        <h4 className="text-sm font-medium text-foreground mb-3">Project Size</h4>
        <div className="space-y-2">
          <button
            onClick={() => onProjectSizeChange('all')}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-smooth ${
              selectedProjectSize === 'all' ?'bg-primary/10 text-primary' :'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            <Icon name="Layers" size={16} />
            <span>All Sizes</span>
          </button>
          {projectSizes.map((size) => (
            <button
              key={size.id}
              onClick={() => onProjectSizeChange(size.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-smooth ${
                selectedProjectSize === size.id
                  ? 'bg-primary/10 text-primary' :'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={size.icon} size={16} />
              <span>{size.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFilter;