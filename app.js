// Local data for Warframes, weapons, mods, popular builds, mission builds, and resources
const data = {
  warframes: [
      { 
          name: "Excalibur", 
          health: 370, 
          shield: 370, 
          armor: 225, 
          energy: 150, 
          sprintSpeed: 1.0, 
          duration: 100, 
          efficiency: 100, 
          range: 100, 
          strength: 100, 
          auraPolarity: "Madurai",
          abilities: [
              "Slash Dash: Dash forward, slashing enemies in your path.",
              "Radial Blind: Blinds enemies in a radius, opening them to finishers.",
              "Radial Javelin: Launches javelins that impale enemies to walls.",
              "Exalted Blade: Summons an energy sword with enhanced melee attacks."
          ],
          acquisition: "Starter Warframe or craft via blueprint from Junction on Mars."
      },
      { 
          name: "Volt", 
          health: 370, 
          shield: 555, 
          armor: 150, 
          energy: 225, 
          sprintSpeed: 1.0, 
          duration: 100, 
          efficiency: 100, 
          range: 100, 
          strength: 100, 
          auraPolarity: "Naramon",
          abilities: [
              "Shock: Zaps enemies with electricity, chaining to nearby targets.",
              "Speed: Boosts movement and attack speed for you and allies.",
              "Electric Shield: Deploys a shield that blocks enemy fire and boosts damage.",
              "Discharge: Paralyzes enemies with a massive electric discharge."
          ],
          acquisition: "Craft via blueprint from Tenno Lab in Clan Dojo."
      },
      { 
          name: "Mag", 
          health: 370, 
          shield: 555, 
          armor: 150, 
          energy: 225, 
          sprintSpeed: 1.0, 
          duration: 100, 
          efficiency: 100, 
          range: 100, 
          strength: 100, 
          auraPolarity: "Madurai",
          abilities: [
              "Pull: Magnetically pulls enemies towards you, dealing damage.",
              "Magnetize: Creates a magnetic field that traps enemies and amplifies damage.",
              "Polarize: Depletes enemy shields/armor and creates damaging shards.",
              "Crush: Crushes enemies with magnetic force, dealing massive damage."
          ],
          acquisition: "Starter Warframe or farm blueprint from The Sergeant on Phobos."
      }
  ],
  weapons: [
      { 
          name: "Braton", 
          damage: 35, 
          fireRate: 7.5, 
          critChance: 0.12, 
          critMultiplier: 1.6,
          acquisition: "Starter weapon or purchase blueprint for 25,000 Credits from the Market."
      },
      { 
          name: "Paris", 
          damage: 180, 
          fireRate: 1.0, 
          critChance: 0.3, 
          critMultiplier: 2.0,
          acquisition: "Starter weapon or purchase blueprint for 20,000 Credits from the Market."
      },
      { 
          name: "Soma", 
          damage: 12, 
          fireRate: 15.0, 
          critChance: 0.3, 
          critMultiplier: 3.0,
          acquisition: "Purchase blueprint for 50,000 Credits from the Market (Mastery Rank 6 required)."
      }
  ],
  mods: [
      { name: "Vitality", type: "warframe", effect: { healthMult: 0.4 }, baseDrain: 4, maxRank: 5, rank: 0 },
      { name: "Steel Charge", type: "aura", effect: { meleeDamageMult: 0.6 }, squadEffect: "Melee Damage +60%", polarity: "Madurai", baseDrain: 9, maxRank: 5, rank: 0 },
      { name: "Energy Siphon", type: "aura", effect: { energyRegen: 0.6 }, squadEffect: "Energy Regen +0.6/s", polarity: "Naramon", baseDrain: 7, maxRank: 5, rank: 0 },
      { name: "Primed Flow", type: "warframe", effect: { energyMult: 1.5 }, baseDrain: 7, maxRank: 5, rank: 0 },
      { name: "Streamline", type: "warframe", effect: { efficiencyMult: 0.3 }, baseDrain: 5, maxRank: 5, rank: 0 },
      { name: "Augur Message", type: "warframe", effect: { durationMult: 0.3 }, baseDrain: 6, maxRank: 5, rank: 0 },
      { name: "Primed Continuity", type: "warframe", effect: { durationMult: 0.55 }, baseDrain: 7, maxRank: 5, rank: 0 },
      { name: "Intensify", type: "warframe", effect: { strengthMult: 0.3 }, baseDrain: 6, maxRank: 5, rank: 0 },
      { name: "Stretch", type: "warframe", effect: { rangeMult: 0.45 }, baseDrain: 6, maxRank: 5, rank: 0 },
      { name: "Augur Reach", type: "warframe", effect: { rangeMult: 0.3 }, baseDrain: 6, maxRank: 5, rank: 0 },
      { name: "Serration", type: "weapon", effect: { damageMult: 1.65 }, baseDrain: 5, maxRank: 5, rank: 0 },
      { name: "Point Strike", type: "weapon", effect: { critChanceMult: 0.6 }, baseDrain: 4, maxRank: 5, rank: 0 },
      { name: "Vital Sense", type: "weapon", effect: { critMultiplierMult: 1.2 }, baseDrain: 4, maxRank: 5, rank: 0 },
      { name: "Shred", type: "weapon", effect: { fireRateMult: 0.3, punchThrough: 1.0 }, baseDrain: 6, maxRank: 5, rank: 0 }
  ],
  popularBuilds: [
      {
          name: "Excalibur Tank",
          itemType: "warframe",
          itemName: "Excalibur",
          aura: { name: "Steel Charge", rank: 0 },
          mods: [
              { name: "Vitality", rank: 0 },
              { name: "Primed Flow", rank: 0 },
              { name: "Intensify", rank: 0 }
          ],
          capacity: 47
      },
      {
          name: "Volt Speedster",
          itemType: "warframe",
          itemName: "Volt",
          aura: { name: "Energy Siphon", rank: 0 },
          mods: [
              { name: "Primed Flow", rank: 0 },
              { name: "Streamline", rank: 0 },
              { name: "Augur Message", rank: 0 },
              { name: "Stretch", rank: 0 }
          ],
          capacity: 37
      },
      {
          name: "Mag Power",
          itemType: "warframe",
          itemName: "Mag",
          aura: { name: "Steel Charge", rank: 0 },
          mods: [
              { name: "Primed Continuity", rank: 0 },
              { name: "Augur Reach", rank: 0 },
              { name: "Intensify", rank: 0 }
          ],
          capacity: 47
      },
      {
          name: "Braton DMG",
          itemType: "weapon",
          itemName: "Braton",
          mods: [
              { name: "Serration", rank: 0 },
              { name: "Point Strike", rank: 0 }
          ],
          capacity: 13
      },
      {
          name: "Paris Crit",
          itemType: "weapon",
          itemName: "Paris",
          mods: [
              { name: "Serration", rank: 0 },
              { name: "Point Strike", rank: 0 },
              { name: "Vital Sense", rank: 0 }
          ],
          capacity: 13
      }
  ],
  missionBuilds: [
      {
          missionType: "Defense",
          frame: "Excalibur",
          aura: "Steel Charge",
          mods: ["Vitality", "Primed Flow", "Intensify"],
          description: "High durability and melee damage for prolonged defense waves."
      },
      {
          missionType: "Survival",
          frame: "Volt",
          aura: "Energy Siphon",
          mods: ["Primed Flow", "Streamline", "Augur Message", "Stretch"],
          description: "Sustained energy and range for long Survival missions."
      },
      {
          missionType: "Capture",
          frame: "Mag",
          aura: "Steel Charge",
          mods: ["Primed Continuity", "Augur Reach", "Intensify"],
          description: "Strong crowd control and power for quick captures."
      }
  ],
  resources: [
      { name: "Ferrite", locations: "Mercury, Earth, Lua, Neptune, Void", method: "Survival/Defense on Mercury (Apollodorus)", notes: "Common resource, good for early-game crafting." },
      { name: "Alloy Plate", locations: "Venus, Phobos, Ceres, Jupiter, Pluto, Sedna", method: "Survival on Ceres (Draco)", notes: "Crucial for Warframes and weapons." },
      { name: "Nano Spores", locations: "Deimos, Saturn, Neptune, Eris", method: "Survival on Deimos (Terrorem)", notes: "Abundant in infested missions." },
      { name: "Salvage", locations: "Mars, Jupiter, Sedna, Kuva Fortress", method: "Survival on Mars (Wahiba)", notes: "Used in various Grineer-related blueprints." },
      { name: "Neurodes", locations: "Earth, Lua, Eris", method: "Survival on Lua (Copernicus)", notes: "Rare, use Nekros for better drops." },
      { name: "Gallium", locations: "Uranus, Mars", method: "Assassination on Mars (War)", notes: "Found from Lieutenant Lech Kril." },
      { name: "Morphics", locations: "Mars, Mercury", method: "Survival on Mars (Wahiba)", notes: "Uncommon, check containers." },
      { name: "Orokin Cells", locations: "Venus, Uranus, Saturn, Ceres", method: "Assassination on Saturn (Tethys)", notes: "Rare, boss drops like Phorid boost yield." },
      { name: "Cryotic", locations: "Any Excavation mission", method: "Excavation on Earth (E Prime)", notes: "Focus on completing excavation cycles." },
      { name: "Tellurium", locations: "Any Archwing mission", method: "Archwing Survival on Uranus (Caelus)", notes: "Rare, use Nekros or Khora." },
      { name: "Argon Crystal", locations: "Void", method: "Exterminate on Void (Hepit)", notes: "Decays over time, farm only when needed." },
      { name: "Oxium", locations: "Corpus missions (Oxium Ospreys)", method: "Survival on Europa (Baal)", notes: "Target Oxium Ospreys specifically." }
  ]
};

let installedMods = Array(8).fill(null); // Array to track installed mods
let installedAura = null; // Variable to track installed aura mod
let currentCapacity = 69; // Current mod capacity
const baseCapacity = 69; // Base mod capacity

// Calculate drain cost for a mod based on its rank
function getModDrain(mod) {
  return mod ? Math.round(mod.baseDrain * (1 + mod.rank * 0.2)) : 0;
}

// Calculate capacity bonus from aura based on polarity match
function calculateAuraCapacityBonus(aura) {
  if (!aura) return 0;
  const itemName = document.getElementById('itemSelect').value;
  const warframe = data.warframes.find(w => w.name === itemName);
  const polarityMatch = warframe && aura.polarity === warframe.auraPolarity;
  return getModDrain(aura) * (polarityMatch ? 2 : 1);
}

// Calculate cost to rank up a mod
function getRankUpCost(rank) {
  return Math.round(500 * Math.pow(1.5, rank)); // Example Warframe fusion cost formula
}

// Initialize the interface when the page loads
document.addEventListener('DOMContentLoaded', () => {
  // Dynamically create the Resource Guide section
  const mainContent = document.querySelector('main');
  const resourceSection = document.createElement('section');
  resourceSection.className = 'section';
  resourceSection.id = 'Resource Guide'; // Match the ID from the nav link
  resourceSection.innerHTML = `
      <h2>Resource Guide</h2>
      <table class="resource-table">
          <thead>
              <tr>
                  <th>Resource</th>
                  <th>Primary Locations</th>
                  <th>Best Farming Method</th>
                  <th>Notes</th>
              </tr>
          </thead>
          <tbody id="resourceBody"></tbody>
      </table>
      <p class="note">For optimal farming, use Warframes like Nekros (Desecrate) or Khora (Pilfering Strangledome) with a Resource Booster. Check the Star Chart for planet-specific drops and explore containers for additional resources.</p>
  `;
  mainContent.appendChild(resourceSection);

  // Initialize other components
  updateInterface();
  renderSavedBuilds();
  renderPopularBuilds();
  renderMissionBuilds();
  renderResources();
});

// Show the selected section and hide others
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}

// Update the entire interface based on current state
// Crucial to keep as refreshing was needed after certain actions were took
// Do not delete 
function updateInterface() {
  updateItemList();
  updateAuraSlot();
  updateModGrid();
  renderAvailableMods();
  updateStats();
  updateSquadEffects();
  updateItemDetails();
}

// Update the item selection dropdown based on item type
function updateItemList() {
  const itemType = document.getElementById('itemType').value;
  const itemSelect = document.getElementById('itemSelect');
  itemSelect.innerHTML = '';
  const items = data[itemType + 's'];
  if (items && items.length > 0) {
      items.forEach(item => {
          const option = document.createElement('option');
          option.value = item.name;
          option.textContent = item.name;
          itemSelect.appendChild(option);
      });
      itemSelect.value = items[0].name;
  } else {
      const option = document.createElement('option');
      option.value = '';
      option.textContent = 'No items available';
      itemSelect.appendChild(option);
  }
}

// Update the aura slot display
function updateAuraSlot() {
  const auraSlot = document.getElementById('auraSlot');
  auraSlot.innerHTML = '';
  auraSlot.className = 'aura-slot';
  auraSlot.setAttribute('ondrop', 'dropAura(event)');
  auraSlot.setAttribute('ondragover', 'allowDrop(event)');
  if (installedAura) {
      const modDiv = document.createElement('div');
      modDiv.className = `mod-info mod-type-${installedAura.type}`;
      modDiv.draggable = true;
      modDiv.setAttribute('ondragstart', 'dragAura(event)');
      modDiv.innerHTML = `<span>${installedAura.name}</span><span class="rank">+${installedAura.rank}</span>`;
      auraSlot.appendChild(modDiv);
      const rankUpBtn = document.createElement('button');
      rankUpBtn.textContent = 'Rank Up';
      rankUpBtn.onclick = () => rankUpMod(installedAura, null);
      auraSlot.appendChild(rankUpBtn);
      const rankDownBtn = document.createElement('button');
      rankDownBtn.textContent = 'Rank Down';
      rankDownBtn.onclick = () => rankDownMod(installedAura, null);
      auraSlot.appendChild(rankDownBtn);
      const removeBtn = document.createElement('button');
      removeBtn.className = 'remove-btn';
      removeBtn.textContent = 'X';
      removeBtn.onclick = () => {
          installedAura = null;
          currentCapacity = baseCapacity - installedMods.reduce((total, mod) => total + (mod ? getModDrain(mod) : 0), 0);
          updateAuraSlot();
          updateStats();
          renderAvailableMods();
          updateSquadEffects();
      };
      auraSlot.appendChild(removeBtn);
  } else {
      auraSlot.className += ' empty';
      auraSlot.textContent = 'Empty Aura Slot';
  }
}

// Update the mod grid display
function updateModGrid() {
  const modSlots = document.getElementById('modSlots');
  modSlots.innerHTML = '';
  for (let i = 0; i < 8; i++) {
      const slot = document.createElement('div');
      slot.className = 'mod-slot';
      slot.setAttribute('data-index', i);
      slot.setAttribute('ondrop', 'drop(event)');
      slot.setAttribute('ondragover', 'allowDrop(event)');
      if (installedMods[i]) {
          const mod = installedMods[i];
          const modDiv = document.createElement('div');
          modDiv.className = `mod-info mod-type-${mod.type}`;
          modDiv.draggable = true;
          modDiv.setAttribute('ondragstart', `drag(event, ${i})`);
          modDiv.innerHTML = `<span>${mod.name}</span><span class="rank">+${mod.rank}</span>`;
          slot.appendChild(modDiv);
          const rankUpBtn = document.createElement('button');
          rankUpBtn.textContent = 'Rank Up';
          rankUpBtn.onclick = () => rankUpMod(mod, i);
          slot.appendChild(rankUpBtn);
          const rankDownBtn = document.createElement('button');
          rankDownBtn.textContent = 'Rank Down';
          rankDownBtn.onclick = () => rankDownMod(mod, i);
          slot.appendChild(rankDownBtn);
          const removeBtn = document.createElement('button');
          removeBtn.className = 'remove-btn';
          removeBtn.textContent = 'X';
          removeBtn.onclick = () => {
              currentCapacity += getModDrain(mod);
              installedMods[i] = null;
              updateModGrid();
              updateStats();
              renderAvailableMods();
          };
          slot.appendChild(removeBtn);
      } else {
          slot.className += ' empty';
          slot.textContent = 'Empty Slot';
      }
      modSlots.appendChild(slot);
  }
}

// Update the item details display
function updateItemDetails() {
  const itemType = document.getElementById('itemType').value;
  const itemName = document.getElementById('itemSelect').value;
  const itemDetailsDiv = document.getElementById('itemDetails');
  itemDetailsDiv.innerHTML = '';

  if (itemType === 'warframe') {
      const warframe = data.warframes.find(w => w.name === itemName);
      if (warframe) {
          const abilitiesList = warframe.abilities.map(ability => `<li>${ability}</li>`).join('');
          itemDetailsDiv.innerHTML = `
              <h4>Abilities:</h4>
              <ul>${abilitiesList}</ul>
              <p><strong>Acquisition:</strong> ${warframe.acquisition}</p>
          `;
      } else {
          itemDetailsDiv.innerHTML = '<p>Warframe data not found. Please ensure the selected Warframe is valid.</p>';
      }
  } else if (itemType === 'weapon') {
      const weapon = data.weapons.find(w => w.name === itemName);
      if (weapon) {
          itemDetailsDiv.innerHTML = `
              <p><strong>Acquisition:</strong> ${weapon.acquisition}</p>
          `;
      } else {
          itemDetailsDiv.innerHTML = '<p>Weapon data not found. Please ensure the selected weapon is valid.</p>';
      }
  }
}

// Render available mods for selection
function renderAvailableMods() {
  const itemType = document.getElementById('itemType').value;
  const searchTerm = document.getElementById('modSearch').value.toLowerCase();
  const sortMethod = document.getElementById('modSort').value;

  let mods = data.mods.filter(mod => {
      if (mod.type === 'aura') return !installedAura;
      return mod.type === itemType && !installedMods.some(installed => installed && installed.name === mod.name);
  });

  if (searchTerm) {
      mods = mods.filter(mod => mod.name.toLowerCase().includes(searchTerm));
  }

  if (sortMethod === 'drain') {
      mods.sort((a, b) => a.baseDrain - b.baseDrain);
  } else {
      mods.sort((a, b) => a.name.localeCompare(b.name));
  }

  const availableModsDiv = document.getElementById('availableMods');
  availableModsDiv.innerHTML = '';
  mods.forEach(mod => {
      const modDiv = document.createElement('div');
      modDiv.className = `mod-info mod-type-${mod.type}`;
      modDiv.draggable = true;
      modDiv.setAttribute('ondragstart', `dragAvailableMod(event, '${mod.name}')`);
      modDiv.innerHTML = `${mod.name} (Drain: ${mod.baseDrain})<span class="rank">+${mod.rank}</span>`;
      availableModsDiv.appendChild(modDiv);
  });
}

// Filter mods based on search input
function filterMods() {
  renderAvailableMods();
}

// Sort mods based on selected method
function sortMods() {
  renderAvailableMods();
}

// Update the stats display based on installed mods
function updateStats() {
  const itemType = document.getElementById('itemType').value;
  const itemName = document.getElementById('itemSelect').value;
  const item = data[itemType + 's'].find(i => i.name === itemName);
  if (!item) return;

  let stats = { ...item };
  document.getElementById('capacity').textContent = `${Math.round(currentCapacity)}/${baseCapacity + (installedAura ? calculateAuraCapacityBonus(installedAura) : 0)}`;

  installedMods.forEach(mod => {
      if (mod && mod.effect) {
          for (let key in mod.effect) {
              if (key.endsWith('Mult')) {
                  const baseKey = key.replace('Mult', '');
                  const baseValue = item[baseKey] || 100;
                  const effectValue = mod.effect[key] * (mod.rank + 1);
                  stats[baseKey] = baseValue * (1 + effectValue);
              } else if (key === 'punchThrough') {
                  stats.punchThrough = (stats.punchThrough || 0) + mod.effect[key] * (mod.rank + 1);
              }
          }
      }
  });

  if (installedAura && installedAura.effect) {
      for (let key in installedAura.effect) {
          if (key.endsWith('Mult')) {
              const baseKey = key.replace('Mult', '');
              const baseValue = item[baseKey] || 100;
              const effectValue = installedAura.effect[key] * (installedAura.rank + 1);
              stats[baseKey] = baseValue * (1 + effectValue);
          } else if (key === 'energyRegen') {
              stats.energyRegen = (stats.energyRegen || 0) + installedAura.effect[key] * (installedAura.rank + 1);
          }
      }
  }

  const baseStats = document.getElementById('baseStats');
  if (itemType === 'warframe') {
      baseStats.innerHTML = `
          Health: ${Math.round(item.health)}<span class="${stats.health > item.health ? 'modified' : ''}">${stats.health > item.health ? ` (+${Math.round(stats.health - item.health)})` : ''}</span><br>
          Shield: ${Math.round(item.shield)}<span class="${stats.shield > item.shield ? 'modified' : ''}">${stats.shield > item.shield ? ` (+${Math.round(stats.shield - item.shield)})` : ''}</span><br>
          Armor: ${Math.round(item.armor)}<span class="${stats.armor > item.armor ? 'modified' : ''}">${stats.armor > item.armor ? ` (+${Math.round(stats.armor - item.armor)})` : ''}</span><br>
          Energy: ${Math.round(item.energy)}<span class="${stats.energy > item.energy ? 'modified' : ''}">${stats.energy > item.energy ? ` (+${Math.round(stats.energy - item.energy)})` : ''}</span><br>
          Sprint Speed: ${item.sprintSpeed}<br>
          Duration: ${item.duration}%<span class="${stats.duration > item.duration ? 'modified' : ''}">${stats.duration > item.duration ? ` (+${Math.round(stats.duration - item.duration)}%)` : ''}</span><br>
          Efficiency: ${item.efficiency}%<span class="${stats.efficiency > item.efficiency ? 'modified' : ''}">${stats.efficiency > item.efficiency ? ` (+${Math.round(stats.efficiency - item.efficiency)}%)` : ''}</span><br>
          Range: ${item.range}%<span class="${stats.range > item.range ? 'modified' : ''}">${stats.range > item.range ? ` (+${Math.round(stats.range - item.range)}%)` : ''}</span><br>
          Strength: ${item.strength}%<span class="${stats.strength > item.strength ? 'modified' : ''}">${stats.strength > item.strength ? ` (+${Math.round(stats.strength - item.strength)}%)` : ''}</span>
      `;
      // Code dynamically updates depending on the mod added which all have a determind stat modifier
      //"modified" class triggers visual styling, in this case green text next to the stat number to show what changes will be made
  } else if (itemType === 'weapon') {
      baseStats.innerHTML = `
          Damage: ${Math.round(item.damage)}<span class="${stats.damage > item.damage ? 'modified' : ''}">${stats.damage > item.damage ? ` (+${Math.round(stats.damage - item.damage)})` : ''}</span><br>
          Fire Rate: ${item.fireRate.toFixed(1)}<span class="${stats.fireRate > item.fireRate ? 'modified' : ''}">${stats.fireRate > item.fireRate ? ` (+${(stats.fireRate - item.fireRate).toFixed(1)})` : ''}</span><br>
          Crit Chance: ${(item.critChance * 100).toFixed(1)}%<span class="${stats.critChance > item.critChance ? 'modified' : ''}">${stats.critChance > item.critChance ? ` (+${((stats.critChance - item.critChance) * 100).toFixed(1)}%)` : ''}</span><br>
          Crit Multiplier: ${item.critMultiplier.toFixed(1)}x<span class="${stats.critMultiplier > item.critMultiplier ? 'modified' : ''}">${stats.critMultiplier > item.critMultiplier ? ` (+${(stats.critMultiplier - item.critMultiplier).toFixed(1)}x)` : ''}</span><br>
          ${stats.punchThrough ? `Punch Through: ${stats.punchThrough.toFixed(1)}m` : ''}
      `;
  }
}

// Update the squad effects display
function updateSquadEffects() {
  const squadEffectsDiv = document.getElementById('squadEffects');
  squadEffectsDiv.innerHTML = '';
  if (installedAura && installedAura.squadEffect) {
      squadEffectsDiv.textContent = installedAura.squadEffect;
  } else {
      squadEffectsDiv.textContent = 'None';
  }
}

// Save the current build to local storage
function saveBuild() {
  const itemType = document.getElementById('itemType').value;
  const itemName = document.getElementById('itemSelect').value;
  const buildName = document.getElementById('buildName').value.trim() || `Build_${Date.now()}`;
  const mods = installedMods.filter(mod => mod).map(mod => ({ name: mod.name, rank: mod.rank }));
  const build = {
      name: buildName,
      itemType,
      itemName,
      aura: installedAura ? { name: installedAura.name, rank: installedAura.rank } : null,
      mods,
      capacity: currentCapacity,
      id: Date.now(),
      votes: 0,
      comments: []
  };
  const savedBuilds = JSON.parse(localStorage.getItem('savedBuilds') || '[]');
  savedBuilds.push(build);
  localStorage.setItem('savedBuilds', JSON.stringify(savedBuilds));
  renderSavedBuilds();
  document.getElementById('buildName').value = '';
  alert('Build saved!');
}

// Upvote a saved build
function upvoteBuild(index) {
  const savedBuilds = JSON.parse(localStorage.getItem('savedBuilds') || '[]');
  savedBuilds[index].votes = (savedBuilds[index].votes || 0) + 1;
  localStorage.setItem('savedBuilds', JSON.stringify(savedBuilds));
  renderSavedBuilds();
}

// Downvote a saved build
function downvoteBuild(index) {
  const savedBuilds = JSON.parse(localStorage.getItem('savedBuilds') || '[]');
  savedBuilds[index].votes = (savedBuilds[index].votes || 0) - 1;
  localStorage.setItem('savedBuilds', JSON.stringify(savedBuilds));
  renderSavedBuilds();
}

// Add a comment to a saved build
function addComment(index) {
  const savedBuilds = JSON.parse(localStorage.getItem('savedBuilds') || '[]');
  const commentInput = document.getElementById(`comment-input-${index}`);
  const commentText = commentInput.value.trim();
  if (commentText) {
      savedBuilds[index].comments = savedBuilds[index].comments || [];
      savedBuilds[index].comments.push({ text: commentText, timestamp: new Date().toISOString() });
      localStorage.setItem('savedBuilds', JSON.stringify(savedBuilds));
      renderSavedBuilds();
      commentInput.value = '';
  }
}

// Render saved builds from local storage
function renderSavedBuilds() {
  const savedBuilds = JSON.parse(localStorage.getItem('savedBuilds') || '[]');
  const savedBuildsDiv = document.getElementById('savedBuilds');
  savedBuildsDiv.innerHTML = '';
  savedBuilds.forEach((build, index) => {
      const div = document.createElement('div');
      const auraText = build.aura ? `Aura: ${build.aura.name}+${build.aura.rank}, ` : '';
      div.innerHTML = `
          <div>
              ${build.name} - ${build.itemType}: ${build.itemName} [${auraText}${build.mods.map(m => `${m.name}+${m.rank}`).join(', ')}] (Capacity: ${build.capacity}/${baseCapacity + (build.aura ? calculateAuraCapacityBonus(build.aura) : 0)})
              <div>
                  <button class="load-btn" onclick="loadBuild(${index})">Load</button>
                  <button class="delete-btn" onclick="deleteBuild(${index})">Delete</button>
              </div>
              <div class="vote-buttons">
                  <button class="upvote-btn" onclick="upvoteBuild(${index})">Upvote</button>
                  <span class="vote-count">${build.votes || 0}</span>
                  <button class="downvote-btn" onclick="downvoteBuild(${index})">Downvote</button>
              </div>
              <div class="comment-section">
                  <input type="text" id="comment-input-${index}" class="comment-input" placeholder="Add a comment...">
                  <button onclick="addComment(${index})">Comment</button>
                  <div class="comments-list">
                      ${(build.comments || []).map(comment => `<div class="comment">${comment.text} <small>(${new Date(comment.timestamp).toLocaleString()})</small></div>`).join('')}
                  </div>
              </div>
          </div>
      `;
      savedBuildsDiv.appendChild(div);
  });
}

// Render popular builds from data
function renderPopularBuilds() {
  const popularBuildsDiv = document.getElementById('popularBuilds');
  popularBuildsDiv.innerHTML = '';
  data.popularBuilds.forEach((build, index) => {
      const div = document.createElement('div');
      const auraText = build.aura ? `Aura: ${build.aura.name}+${build.aura.rank}, ` : '';
      div.innerHTML = `
          ${build.name} - ${build.itemType}: ${build.itemName} [${auraText}${build.mods.map(m => `${m.name}+${m.rank}`).join(', ')}] (Capacity: ${build.capacity}/${baseCapacity + (build.aura ? calculateAuraCapacityBonus(build.aura) : 0)})
          <button onclick="loadPopularBuild(${index})">Load</button>
      `;
      popularBuildsDiv.appendChild(div);
  });
}

// Render mission builds from data
function renderMissionBuilds() {
  const missionBuildsDiv = document.getElementById('missionBuilds');
  missionBuildsDiv.innerHTML = '';
  data.missionBuilds.forEach(build => {
      const card = document.createElement('div');
      card.className = 'mission-card';
      card.innerHTML = `
          <h4>${build.missionType}</h4>
          <p><strong>Warframe:</strong> ${build.frame}</p>
          <p><strong>Aura:</strong> ${build.aura}</p>
          <p><strong>Mods:</strong> ${build.mods.join(', ')}</p>
          <p>${build.description}</p>
          <button onclick="loadMissionBuild('${build.missionType}')">Use Build</button>
      `;
      missionBuildsDiv.appendChild(card);
  });
}

// Render resource guides from data
function renderResources() {
  const resourceBody = document.getElementById('resourceBody');
  if (!resourceBody) return; // Exit if resourceBody isn't found
  resourceBody.innerHTML = '';
  data.resources.forEach(resource => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${resource.name}</td>
          <td>${resource.locations}</td>
          <td>${resource.method}</td>
          <td>${resource.notes}</td>
      `;
      resourceBody.appendChild(row);
  });
}

// Load a mission build
function loadMissionBuild(missionType) {
  const build = data.missionBuilds.find(b => b.missionType === missionType);
  if (!build) return;

  document.getElementById('itemType').value = 'warframe';
  updateItemList();
  document.getElementById('itemSelect').value = build.frame;
  installedMods = Array(8).fill(null);
  installedAura = null;
  currentCapacity = baseCapacity;

  const auraMod = data.mods.find(m => m.name === build.aura && m.type === 'aura');
  if (auraMod) {
      installedAura = { ...auraMod, rank: 0 };
      currentCapacity += calculateAuraCapacityBonus(installedAura);
  }

  build.mods.forEach(modName => {
      const mod = data.mods.find(m => m.name === modName && m.type === 'warframe');
      if (mod) {
          const newMod = { ...mod, rank: 0 };
          const drain = getModDrain(newMod);
          const emptySlot = installedMods.indexOf(null);
          if (emptySlot !== -1 && currentCapacity - drain >= 0) {
              currentCapacity -= drain;
              installedMods[emptySlot] = newMod;
          }
      }
  });

  updateInterface();
  showSection('builds');
}

// Load a popular build
function loadPopularBuild(index) {
  const build = data.popularBuilds[index];
  document.getElementById('itemType').value = build.itemType;
  updateItemList();
  document.getElementById('itemSelect').value = build.itemName;
  installedMods = Array(8).fill(null);
  installedAura = null;
  currentCapacity = baseCapacity;

  if (build.aura) {
      installedAura = { ...data.mods.find(m => m.name === build.aura.name), rank: build.aura.rank };
      currentCapacity += calculateAuraCapacityBonus(installedAura);
  }

  build.mods.forEach(modData => {
      const mod = { ...data.mods.find(m => m.name === modData.name), rank: modData.rank };
      const emptySlot = installedMods.indexOf(null);
      if (emptySlot !== -1) {
          const drain = getModDrain(mod);
          currentCapacity -= drain;
          installedMods[emptySlot] = mod;
      }
  });

  updateInterface();
  showSection('builds');
}

// Load a saved build
function loadBuild(index) {
  const savedBuilds = JSON.parse(localStorage.getItem('savedBuilds') || '[]');
  const build = savedBuilds[index];
  document.getElementById('itemType').value = build.itemType;
  updateItemList();
  document.getElementById('itemSelect').value = build.itemName;
  installedMods = Array(8).fill(null);
  installedAura = null;
  currentCapacity = baseCapacity;

  if (build.aura) {
      installedAura = { ...data.mods.find(m => m.name === build.aura.name), rank: build.aura.rank };
      currentCapacity += calculateAuraCapacityBonus(installedAura);
      // Mod capacity increases with rank of aura
  }

  build.mods.forEach(modData => {
      const mod = { ...data.mods.find(m => m.name === modData.name), rank: modData.rank };
      const emptySlot = installedMods.indexOf(null);
      if (emptySlot !== -1) {
          const drain = getModDrain(mod);
          currentCapacity -= drain;
          installedMods[emptySlot] = mod;
      }
  });

  updateInterface();
  showSection('builds');
}

// Delete a saved build
function deleteBuild(index) {
  const savedBuilds = JSON.parse(localStorage.getItem('savedBuilds') || '[]');
  savedBuilds.splice(index, 1);
  localStorage.setItem('savedBuilds', JSON.stringify(savedBuilds));
  renderSavedBuilds();
}

// Increase the rank of a mod
function rankUpMod(mod, slotIndex) {
  if (mod.rank < mod.maxRank) {
      const cost = getRankUpCost(mod.rank);
      if (confirm(`Rank up ${mod.name} to +${mod.rank + 1} for ${cost} credits?`)) {
          const oldDrain = getModDrain(mod);
          mod.rank += 1;
          const newDrain = getModDrain(mod);
          currentCapacity -= (newDrain - oldDrain);
          if (currentCapacity < 0) {
              alert('Insufficient capacity after rank up!');
              mod.rank -= 1;
              currentCapacity += (newDrain - oldDrain);
              return;
          }
          updateAuraSlot();
          updateModGrid();
          updateStats();
          renderAvailableMods();
          updateSquadEffects();
      }
  } else {
      alert(`${mod.name} is already at max rank!`);
  }
}

// Decrease the rank of a mod
function rankDownMod(mod, slotIndex) {
  if (mod.rank > 0) {
      if (confirm(`Rank down ${mod.name} to +${mod.rank - 1}?`)) {
          const oldDrain = getModDrain(mod);
          mod.rank -= 1;
          const newDrain = getModDrain(mod);
          currentCapacity += (oldDrain - newDrain);
          updateAuraSlot();
          updateModGrid();
          updateStats();
          renderAvailableMods();
          updateSquadEffects();
      }
  } else {
      alert(`${mod.name} is already at minimum rank!`);
  }
}

// Drag-and-Drop Functions
// Allow dropping by preventing default behavior
function allowDrop(event) {
  event.preventDefault();
}

// Start dragging an available mod
function dragAvailableMod(event, modName) {
  event.dataTransfer.setData('modName', modName);
}

// Start dragging a mod from a slot
function drag(event, slotIndex) {
  event.dataTransfer.setData('slotIndex', slotIndex);
}

// Start dragging the aura mod
function dragAura(event) {
  event.dataTransfer.setData('aura', 'true');
}

// Handle dropping a mod into a slot
function drop(event) {
  event.preventDefault();
  const modName = event.dataTransfer.getData('modName');
  const slotIndex = event.dataTransfer.getData('slotIndex');
  const targetIndex = parseInt(event.target.closest('.mod-slot').getAttribute('data-index'));

  if (modName) {
      // Install mod from available mods
      const mod = data.mods.find(m => m.name === modName);
      if (mod) {
          const newMod = { ...mod };
          const drain = getModDrain(newMod);
          if (currentCapacity - drain < 0) {
              alert('Insufficient capacity!');
              return;
          }
          if (installedMods[targetIndex]) {
              currentCapacity += getModDrain(installedMods[targetIndex]);
          }
          currentCapacity -= drain;
          installedMods[targetIndex] = newMod;
          updateModGrid();
          updateStats();
          renderAvailableMods();
      }
  } else if (slotIndex) {
      // Remove mod by dragging out
      const index = parseInt(slotIndex);
      if (targetIndex !== index) {
          currentCapacity += getModDrain(installedMods[index]);
          installedMods[index] = null;
          updateModGrid();
          updateStats();
          renderAvailableMods();
      }
  }
}

// Handle dropping into the aura slot
function dropAura(event) {
  event.preventDefault();
  const modName = event.dataTransfer.getData('modName');
  const isAura = event.dataTransfer.getData('aura');

  if (modName) {
      // Install aura mod
      const mod = data.mods.find(m => m.name === modName && m.type === 'aura');
      if (mod) {
          installedAura = { ...mod };
          currentCapacity += calculateAuraCapacityBonus(installedAura);
          updateAuraSlot();
          updateStats();
          renderAvailableMods();
          updateSquadEffects();
      }
  } else if (isAura) {
      // Remove aura by dragging out
      installedAura = null;
      currentCapacity = baseCapacity - installedMods.reduce((total, mod) => total + (mod ? getModDrain(mod) : 0), 0);
      updateAuraSlot();
      updateStats();
      renderAvailableMods();
      updateSquadEffects();
  }
}