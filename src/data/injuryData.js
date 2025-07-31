// src/data/injuryData.js
export const injuryData = {
  head: {
    name: 'Head & Neck',
    injuries: [
      {
        name: 'Concussion',
        sports: ['football', 'soccer', 'hockey', 'rugby'],
        severity: 'high',
        frequency: 85,
        symptoms: ['Headache', 'Dizziness', 'Confusion', 'Memory issues'],
        prevention: ['Proper helmet fitting', 'Tackling technique', 'Neck strengthening'],
        recovery: '1-4 weeks with proper rest',
        color: '#ef4444'
      },
      {
        name: 'Neck Strain',
        sports: ['wrestling', 'gymnastics', 'football'],
        severity: 'medium',
        frequency: 65,
        symptoms: ['Neck pain', 'Stiffness', 'Limited range of motion'],
        prevention: ['Neck exercises', 'Proper warm-up', 'Good posture'],
        recovery: '1-2 weeks',
        color: '#f59e0b'
      }
    ]
  },
  shoulder: {
    name: 'Shoulder',
    injuries: [
      {
        name: 'Rotator Cuff Tear',
        sports: ['swimming', 'baseball', 'tennis', 'volleyball'],
        severity: 'high',
        frequency: 78,
        symptoms: ['Shoulder pain', 'Weakness', 'Limited mobility'],
        prevention: ['Shoulder strengthening', 'Proper technique', 'Gradual training increase'],
        recovery: '3-6 months',
        color: '#ef4444'
      },
      {
        name: 'Shoulder Dislocation',
        sports: ['rugby', 'hockey', 'basketball'],
        severity: 'high',
        frequency: 45,
        symptoms: ['Severe pain', 'Visible deformity', 'Inability to move arm'],
        prevention: ['Strengthening exercises', 'Proper falling technique'],
        recovery: '6-12 weeks',
        color: '#ef4444'
      }
    ]
  },
  knee: {
    name: 'Knee',
    injuries: [
      {
        name: 'ACL Tear',
        sports: ['soccer', 'basketball', 'skiing', 'football'],
        severity: 'high',
        frequency: 92,
        symptoms: ['Sharp pain', 'Swelling', 'Instability', 'Pop sound'],
        prevention: ['Landing technique', 'Leg strengthening', 'Agility training'],
        recovery: '6-12 months with surgery',
        color: '#ef4444'
      },
      {
        name: 'Meniscus Tear',
        sports: ['basketball', 'soccer', 'tennis'],
        severity: 'medium',
        frequency: 73,
        symptoms: ['Knee pain', 'Swelling', 'Catching sensation'],
        prevention: ['Quad strengthening', 'Proper pivoting', 'Flexibility'],
        recovery: '4-8 weeks',
        color: '#f59e0b'
      }
    ]
  },
  ankle: {
    name: 'Ankle',
    injuries: [
      {
        name: 'Ankle Sprain',
        sports: ['basketball', 'soccer', 'volleyball', 'running'],
        severity: 'medium',
        frequency: 88,
        symptoms: ['Pain', 'Swelling', 'Bruising', 'Instability'],
        prevention: ['Balance training', 'Proper footwear', 'Ankle strengthening'],
        recovery: '2-6 weeks',
        color: '#f59e0b'
      }
    ]
  },
  back: {
    name: 'Lower Back',
    injuries: [
      {
        name: 'Lower Back Strain',
        sports: ['weightlifting', 'golf', 'rowing', 'gymnastics'],
        severity: 'medium',
        frequency: 67,
        symptoms: ['Back pain', 'Muscle spasms', 'Stiffness'],
        prevention: ['Core strengthening', 'Proper lifting form', 'Flexibility'],
        recovery: '2-4 weeks',
        color: '#f59e0b'
      }
    ]
  }
};

export const sports = [
  { id: 'all', name: 'All Sports', icon: '🏆' },
  { id: 'soccer', name: 'Soccer', icon: '⚽' },
  { id: 'basketball', name: 'Basketball', icon: '🏀' },
  { id: 'football', name: 'Football', icon: '🏈' },
  { id: 'tennis', name: 'Tennis', icon: '🎾' },
  { id: 'swimming', name: 'Swimming', icon: '🏊' },
  { id: 'running', name: 'Running', icon: '🏃' }
];

export const statsData = [
  { 
    label: 'Sports Covered', 
    value: '15+', 
    color: 'from-blue-500 to-cyan-500',
    icon: 'Activity'
  },
  { 
    label: 'Injury Types', 
    value: '50+', 
    color: 'from-red-500 to-pink-500',
    icon: 'AlertTriangle'
  },
  { 
    label: 'Prevention Tips', 
    value: '200+', 
    color: 'from-green-500 to-emerald-500',
    icon: 'Target'
  },
  { 
    label: 'Success Rate', 
    value: '87%', 
    color: 'from-purple-500 to-indigo-500',
    icon: 'TrendingUp'
  }
];