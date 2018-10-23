const flightPMs = [
  { name: 'Theon', team: 'Feature' },
  { name: 'Steven', team: 'Inventory' },
  { name: 'Aput', team: 'Hore' },
];

const result = flightPMs
  .map(p => p.name)
  .map(name => name.toUpperCase())
  .join(', ');

console.log(result);
