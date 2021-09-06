const layersOrder = [
    'layer1',
    'layer2',
    'layer3',
    'layer4',
     ];
  
const format = {
    width: 122, //choose a size that you create your images
    height: 122//choose a size that you create your images
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 20;

module.exports = { layersOrder, format, rarity, defaultEdition };