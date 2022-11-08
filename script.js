const current = {
  'sketch-1': 1,
  'sketch-2': 1,
  'sketch-3': 1,
  'sketch-4': 1,
  'critique': 1,
}

function select(name, number) {
  document.getElementById(`${name}-${current[name]}`).style.display = 'none';
  current[name] = number
  document.getElementById(`${name}-${current[name]}`).style.display = 'flex';
}

function selectSketch(a, b) {
  select(`sketch-${a}`, b)
}

function selectCritique(n) {
  select('critique', n)
}

