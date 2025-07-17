import React from 'react';
import Icon from '../../../components/AppIcon';

const MeetingTypeCard = ({ type, isSelected, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(type.id)}
      className={`p-6 rounded-lg border-2 cursor-pointer transition-smooth ${
        isSelected
          ? 'border-primary bg-primary/5' :'border-border bg-card hover:border-primary/50 hover:bg-primary/5'
      }`}
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg ${
          isSelected ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
        }`}>
          <Icon name={type.icon} size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2">{type.title}</h3>
          <p className="text-muted-foreground text-sm mb-3">{type.description}</p>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Icon name="Clock" size={16} />
              <span>{type.duration}</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Icon name="Users" size={16} />
              <span>{type.participants}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingTypeCard;