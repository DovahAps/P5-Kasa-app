import React, { useState } from 'react';
import '../../sass/components/collapseItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'; 

const CollapseItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-item">
      <div className="collapse-title" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="collapse-icon" />
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
};

export default CollapseItem;