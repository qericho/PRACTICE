const userInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');
const pokeImg = document.getElementById('pokeImg');
const pokeName = document.getElementById('pokeName');
const box = document.getElementById('box');

// Dark Mode
const toggleTheme = document.getElementById('toggleTheme');
const container = document.getElementById('container');
const title = document.getElementById('title');

toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('bg-black/80');
  container.classList.toggle('bg-white/40');
  title.classList.toggle('text-white');
  box.classList.toggle('bg-white')

});

// Fetch Pokémon Data
async function getData() {
  let input = userInput.value.trim().toLowerCase();
  
  if (input === '') {
    alert('Please enter a Pokémon name or ID!');
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Loading...";

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);

    if (!response.ok) {
      throw new Error('Pokémon not found');
    }

    const data = await response.json();
    box.classList.remove('hidden');
    pokeName.textContent = `Name: ${data.name}`;
    pokeImg.src = data.sprites.front_default;
  } catch (error) {
    alert('Pokémon not found! Try again.');
    console.error('Error:', error);
    box.classList.add('hidden');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit";
  }
}

submitBtn.addEventListener('click', getData);
userInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    getData();
  }
});
