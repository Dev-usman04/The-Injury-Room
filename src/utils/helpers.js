// src/utils/helpers.js

/**
 * Get CSS classes for severity levels
 */
export const getSeverityColor = (severity) => {
  switch (severity) {
    case 'high': 
      return 'text-red-500 bg-red-50';
    case 'medium': 
      return 'text-orange-500 bg-orange-50';
    case 'low': 
      return 'text-green-500 bg-green-50';
    default: 
      return 'text-gray-500 bg-gray-50';
  }
};

/**
 * Filter injuries based on selected sport
 */
export const filterInjuriesBySport = (injuries, selectedSport) => {
  if (selectedSport === 'all') return injuries;
  return injuries.filter(injury => injury.sports.includes(selectedSport));
};

/**
 * Get body part positions for injury indicators
 */
export const getBodyPartPositions = () => ({
  head: { x: 175, y: 35 },
  shoulder: { x: 200, y: 80 },
  knee: { x: 195, y: 315 },
  ankle: { x: 195, y: 415 },
  back: { x: 175, y: 195 }
});

/**
 * Get icon component by name string
 */
export const getIconComponent = (iconName, icons) => {
  return icons[iconName] || icons.Activity;
};