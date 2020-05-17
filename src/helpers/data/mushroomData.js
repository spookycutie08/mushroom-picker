const mushrooms = [
  {
    id: 'mushroom1',
    name: 'Magic Mushroom',
    description: 'Psilocybe semilanceata. The psychedelic kind.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Psilocybe_semilanceata_6514.jpg',
    isMagic: true,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom2',
    name: 'Fly Agaric',
    description: 'The iconic toadstool.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/02/2006-10-25_Amanita_muscaria_crop.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom3',
    name: 'Death Cap',
    description: 'As bad as it sounds.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Amanita_phalloides_1.JPG',
    isMagic: false,
    isPoisonous: false,
    isDeadly: true,
  },
  {
    id: 'mushroom4',
    name: 'Sulfur Tuft',
    description: 'People say (between bouts of vomiting) it has a bitter taste.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Hypholoma_fasciculare_Queteraro.jpg/1920px-Hypholoma_fasciculare_Queteraro.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom5',
    name: 'Green Gills',
    description: 'AKA: The Vomiter',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Chlorophyllum_molybdites_Guadalajara.jpg/1920px-Chlorophyllum_molybdites_Guadalajara.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom6',
    name: 'Common White Mushroom',
    description: 'Super boring, but tasty on pizza.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/01/ChampignonMushroom.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom7',
    name: 'Oyster Mushroom',
    description: 'Helps lower cholesterol.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Oyster_mushoom_fells.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom8',
    name: 'Shiitake Mushroom',
    description: 'Tastes better than it sounds.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Shiitakegrowing.jpg/1024px-Shiitakegrowing.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom9',
    name: 'Jew\'s Ear',
    description: 'Mistranslated from "Judas\' Ear" in Latin.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Auricularia_auricula-judae_64485.JPG/1920px-Auricularia_auricula-judae_64485.JPG',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom10',
    name: 'Paddy Straw Mushroom',
    description: 'Grows on rice straw beds.',
    imgUrl: 'http://www.agrilearner.com/wp-content/uploads/2018/08/mushrooms-311.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom11',
    name: 'Snow Ear',
    description: 'Actually, it\'s a parasitic yeast.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Tremella_fuciformis_337510.jpg/1920px-Tremella_fuciformis_337510.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom12',
    name: 'Buna Shimeji',
    description: 'Native to East Asia.',
    imgUrl: 'https://c1.staticflickr.com/1/637/32398997561_afaea4b6a0_z.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom13',
    name: 'Enokitake',
    description: 'AKA: Velvet Foot',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Flammulina_velutipes.JPG',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom14',
    name: 'Wine Cap Mushroom',
    description: 'Guess what color it is...?',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/2011-05-19_Stropharia_rugosoannulata_Farl._ex_Murrill_183478.jpg/1920px-2011-05-19_Stropharia_rugosoannulata_Farl._ex_Murrill_183478.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom15',
    name: 'Poplar Mushroom',
    description: 'Usually has a curvy foot.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Agrocybe_aegerita.jpg/1920px-Agrocybe_aegerita.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom16',
    name: 'Lion\'s Mane',
    description: 'No idea why it\'s called that...',
    imgUrl: 'https://www.healthbenefitstimes.com/9/gallery/lions-mane-mushroom/Lions-mane-mushroom.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom17',
    name: 'Penny Bun',
    description: 'Also known as porcini.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Boletus_edulis_EtgHollande_041031_091.jpg/1920px-Boletus_edulis_EtgHollande_041031_091.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom18',
    name: 'Sculptured Giant Puffball',
    description: 'Commonly found in the Rocky Mountains.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Calbovista_subsculpta_42758.jpg/1920px-Calbovista_subsculpta_42758.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom19',
    name: 'Golden Chantarelle',
    description: 'Tries to look toxic, but is very edible.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom20',
    name: 'Wood Blewit',
    description: 'Native to Europe.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Lepista_nuda_LC0372.jpg/1280px-Lepista_nuda_LC0372.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
]

const basket = [
  {
    id: '1',
    name: 'Wood Blewit',
    description: 'Native to Europe.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Lepista_nuda_LC0372.jpg/1280px-Lepista_nuda_LC0372.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    quantity: 3,
  },
  {
    id: '2',
    name: 'Penny Bun',
    description: 'Also known as porcini.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Boletus_edulis_EtgHollande_041031_091.jpg/1920px-Boletus_edulis_EtgHollande_041031_091.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    quantity: 2,
  },
  {
    id: '3',
    name: 'Golden Chantarelle',
    description: 'Tries to look toxic, but is very edible.',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Chanterelle_Cantharellus_cibarius.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    quantity: 3,
  },
]

const getMushrooms = () => mushrooms;

const getBasket = () => basket;

const checkForDuplicates = (pickedMushroom) => {
const duplicate = basket.find((x) => x.name === pickedMushroom.name);
if (duplicate === undefined) {
  pickedMushroom.quantity = 1;
  basket.push(pickedMushroom);
} else {
  duplicate.quantity ++;
}
};

const poisonEvent = () => {
  console.log('picked poison!')
  const poisonedMushroomQtyOne = basket.find((x) => x.quantity === 1);
  const poisonedMushroomQtyMore = basket.find((x) => x.quantity >= 2);
  if (poisonedMushroomQtyOne === undefined && poisonedMushroomQtyMore === undefined) {
    // if both are undefined, basket is empty and will do nothing
  } else if (poisonedMushroomQtyOne === undefined){
    // if basket not empty, but all mushrooms are multiples, will decrease qty by one
    poisonedMushroomQtyMore.quantity -= 1;
  } else {
    // if basket contains a single qty mushroom, will prefer to remove that one
    const indexToRemove = basket.indexOf(poisonedMushroomQtyOne);
    basket.splice(indexToRemove, 1);
  }
};

const deadlyEvent = () => {
  const baskLen = basket.length;
  basket.splice(0, baskLen);
};

const magicEvent = () => {
  mushrooms.forEach((oneMush) => {
    if (oneMush.isDeadly === false && oneMush.isPoisonous === false && oneMush.isMagic === false){
      checkForDuplicates(oneMush);
    }
  })
};

const pickAMushroom = () => {
  const randomNum = Math.floor(Math.random() * mushrooms.length);
  const pickedMushroom = mushrooms[randomNum];
  if (pickedMushroom.isPoisonous) {
    poisonEvent();
    poisonEvent();
    window.alert('You picked a Poison Mushroom... two mushrooms in your basket have died.')
  } else if (pickedMushroom.isDeadly){
    deadlyEvent();
    window.alert('You picked a Deadly Mushroom... all mushrooms in your basket have died.')

  } else if (pickedMushroom.isMagic) {
    magicEvent();
    pickedMushroom.quantity = 1;
    basket.push(pickedMushroom);
    window.alert('You picked a Magic Mushroom! One of each type will be added to your basket!')
  } else {
    checkForDuplicates(pickedMushroom);
  }
};

export default { getMushrooms, getBasket, pickAMushroom };
