// Define your emoji data here
const emojis = [
    {
        icon: "😀",
        name: "Grinning Face",
        description: "A classic smiley emoji."
    },
    {
        icon: "🌞",
        name: "Sun",
        description: "A bright and shiny sun emoji."
    },
    {
        icon: "🌈",
        name: "Rainbow",
        description: "A colorful rainbow emoji."
    },
    {
        icon: "🎉",
        name: "Party Popper",
        description: "An emoji representing celebration."
    },
    {
        icon: "🍔",
        name: "Hamburger",
        description: "A delicious hamburger emoji."
    },
    {
        icon: "🚀",
        name: "Rocket",
        description: "A rocket emoji launching into space."
    },
    {
        icon: "🐱",
        name: "Cat Face",
        description: "A cute cat face emoji."
    },
    {
        icon: "🌺",
        name: "Hibiscus",
        description: "A beautiful hibiscus flower emoji."
    },
    {
        icon: "🚗",
        name: "Car",
        description: "An emoji representing a car."
    },
    {
        icon: "⭐",
        name: "Star",
        description: "A star emoji shining brightly."
    },
    {
        icon: "🌍",
        name: "Earth Globe Europe-Africa",
        description: "An emoji of the Earth representing Europe and Africa."
    },
    {
        icon: "🎸",
        name: "Guitar",
        description: "An emoji of an electric guitar."
    },
    {
        icon: "📷",
        name: "Camera",
        description: "A camera emoji."
    },
    {
        icon: "🍕",
        name: "Pizza",
        description: "A pizza emoji."
    },
    {
        icon: "🌊",
        name: "Water Wave",
        description: "An emoji of a water wave."
    },
    {
        icon: "🎂",
        name: "Birthday Cake",
        description: "A birthday cake emoji."
    },
    {
        icon: "🌮",
        name: "Taco",
        description: "A taco emoji."
    },
    {
        icon: "🎈",
        name: "Balloon",
        description: "A balloon emoji."
    },
    {
        icon: "📚",
        name: "Books",
        description: "An emoji representing books."
    },
    {
        icon: "🐶",
        name: "Dog Face",
        description: "A cute dog face emoji."
    },
    {
        icon: "🌹",
        name: "Rose",
        description: "A red rose emoji."
    },
    {
        icon: "🚢",
        name: "Ship",
        description: "A ship emoji."
    },
    {
        icon: "🌄",
        name: "Sunrise over Mountains",
        description: "An emoji of a sunrise over mountains."
    },
    {
        icon: "📱",
        name: "Mobile Phone",
        description: "A mobile phone emoji."
    },
    {
        icon: "🍦",
        name: "Ice Cream",
        description: "An ice cream emoji."
    },
    {
        icon: "🎮",
        name: "Video Game",
        description: "A video game emoji."
    },
    {
        icon: "🎁",
        name: "Wrapped Gift",
        description: "A wrapped gift emoji."
    },
    {
        icon: "🌸",
        name: "Cherry Blossom",
        description: "A cherry blossom emoji."
    },
    {
        icon: "🚁",
        name: "Helicopter",
        description: "A helicopter emoji."
    },
    {
        icon: "🌋",
        name: "Volcano",
        description: "A volcano emoji."
    },
    {
        icon: "🏖️",
        name: "Beach with Umbrella",
        description: "An emoji of a beach with an umbrella."
    },
    {
        icon: "🐠",
        name: "Tropical Fish",
        description: "A tropical fish emoji."
    },
    {
        icon: "🌕",
        name: "Full Moon",
        description: "A full moon emoji."
    },
    {
        icon: "🚴",
        name: "Person Biking",
        description: "An emoji of a person biking."
    },
    {
        icon: "🎤",
        name: "Microphone",
        description: "A microphone emoji."
    },
    {
        icon: "🍁",
        name: "Maple Leaf",
        description: "A maple leaf emoji."
    },
    {
        icon: "🚁",
        name: "Helicopter",
        description: "A helicopter emoji."
    },
    {
        icon: "🌋",
        name: "Volcano",
        description: "A volcano emoji."
    },
    {
        icon: "🏖️",
        name: "Beach with Umbrella",
        description: "An emoji of a beach with an umbrella."
    },
    {
        icon: "🐠",
        name: "Tropical Fish",
        description: "A tropical fish emoji."
    },
    {
        icon: "🌕",
        name: "Full Moon",
        description: "A full moon emoji."
    },
    {
        icon: "🚴",
        name: "Person Biking",
        description: "An emoji of a person biking."
    },
    {
        icon: "🎤",
        name: "Microphone",
        description: "A microphone emoji."
    },
    {
        icon: "🍁",
        name: "Maple Leaf",
        description: "A maple leaf emoji."
    },
    {
        icon: "🍓",
        name: "Strawberry",
        description: "A strawberry emoji."
    },
    {
        icon: "🏰",
        name: "Castle",
        description: "A castle emoji."
    },
    {
        icon: "🌇",
        name: "Sunset over Buildings",
        description: "An emoji of a sunset over buildings."
    },
    {
        icon: "🎃",
        name: "Jack-O-Lantern",
        description: "A jack-o-lantern emoji."
    },
    {
        icon: "🚂",
        name: "Locomotive",
        description: "A locomotive emoji."
    },
    {
        icon: "🌅",
        name: "Sunrise",
        description: "An emoji of a sunrise."
    },
    {
        icon: "🎨",
        name: "Artist Palette",
        description: "An artist palette emoji."
    },
    {
        icon: "🍂",
        name: "Fallen Leaf",
        description: "A fallen leaf emoji."
    },
    {
        icon: "🚑",
        name: "Ambulance",
        description: "An ambulance emoji."
    },
    {
        icon: "🌌",
        name: "Milky Way",
        description: "An emoji of the Milky Way galaxy."
    },
    {
        icon: "🎭",
        name: "Performing Arts",
        description: "An emoji representing performing arts."
    },
    {
        icon: "🍇",
        name: "Grapes",
        description: "A bunch of grapes emoji."
    },
    {
        icon: "🏟️",
        name: "Stadium",
        description: "An emoji of a stadium."
    },
    {
        icon: "🌘",
        name: "Waning Crescent Moon",
        description: "An emoji of a waning crescent moon."
    },
    {
        icon: "🛰️",
        name: "Satellite",
        description: "An emoji of a satellite."
    },
    {
        icon: "🚲",
        name: "Bicycle",
        description: "A bicycle emoji."
    },
    {
        icon: "🏞️",
        name: "National Park",
        description: "An emoji of a national park."
    },
    {
        icon: "🌒",
        name: "Waxing Crescent Moon",
        description: "An emoji of a waxing crescent moon."
    },
    {
        icon: "🚀",
        name: "Rocket",
        description: "A rocket emoji."
    },
    {
        icon: "🎯",
        name: "Bullseye",
        description: "A bullseye emoji."
    },
    {
        icon: "🌓",
        name: "First Quarter Moon",
        description: "An emoji of a first quarter moon."
    },
    {
        icon: "🛁",
        name: "Bathtub",
        description: "A bathtub emoji."
    },
    {
        icon: "🚁",
        name: "Helicopter",
        description: "A helicopter emoji."
    },
    {
        icon: "🎈",
        name: "Balloon",
        description: "A balloon emoji."
    },
    {
        icon: "🌔",
        name: "Waxing Gibbous Moon",
        description: "An emoji of a waxing gibbous moon."
    },
    {
        icon: "🍎",
        name: "Red Apple",
        description: "A red apple emoji."
    },
    {
        icon: "🚤",
        name: "Speedboat",
        description: "A speedboat emoji."
    },
    {
        icon: "🎊",
        name: "Confetti Ball",
        description: "A confetti ball emoji."
    },
    {
        icon: "🌕",
        name: "Full Moon",
        description: "A full moon emoji."
    },
    {
        icon: "🎖️",
        name: "Medal",
        description: "An emoji of a medal."
    },
    {
        icon: "🌖",
        name: "Waning Gibbous Moon",
        description: "An emoji of a waning gibbous moon."
    },
    {
        icon: "🍌",
        name: "Banana",
        description: "A banana emoji."
    },
    {
        icon: "🚢",
        name: "Ship",
        description: "A ship emoji."
    },
    {
        icon: "🏆",
        name: "Trophy",
        description: "A trophy emoji."
    },
    {
        icon: "🌗",
        name: "Last Quarter Moon",
        description: "An emoji of a last quarter moon."
    },
    {
        icon: "🍒",
        name: "Cherries",
        description: "A bunch of cherries emoji."
    },
    {
        icon: "🚀",
        name: "Rocket",
        description: "A rocket emoji."
    },
    {
        icon: "🌘",
        name: "Waning Crescent Moon",
        description: "An emoji of a waning crescent moon."
    },
    {
        icon: "🏰",
        name: "Castle",
        description: "A castle emoji."
    },
    {
        icon: "🚂",
        name: "Locomotive",
        description: "A locomotive emoji."
    },
    {
        icon: "🌅",
        name: "Sunrise",
        description: "An emoji of a sunrise."
    },
    {
        icon: "🎨",
        name: "Artist Palette",
        description: "An artist palette emoji."
    },
]
       


// Function to display emojis in a table
function displayEmojis(emojiData) {
    const emojiTable = document.getElementById('emoji-list');
    emojiTable.innerHTML = '';

    emojiData.forEach(emoji => {
        const row = emojiTable.insertRow();
        const iconCell = row.insertCell(0);
        const nameCell = row.insertCell(1);
        const descriptionCell = row.insertCell(2);

        iconCell.innerHTML = emoji.icon;
        nameCell.textContent = emoji.name;
        descriptionCell.textContent = emoji.description;
    });
}

// Function to search for emojis based on input
function searchEmoji() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();

    const filteredEmojis = emojis.filter(emoji =>
        emoji.name.toLowerCase().includes(searchInput)
    );
    displayEmojis(filteredEmojis);
}

// Add an event listener for the input event on the search input field
document.getElementById('search-input').addEventListener('input', searchEmoji);

// Initial display of all emojis
displayEmojis(emojis);