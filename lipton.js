elements.lipton = {
    color: "#ffa500", 
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 10000, 
    state: "liquid",
    density: 1020, 
};

if (!eLists.CONDIMENT) {
    eLists.CONDIMENT = [];
}
eLists.CONDIMENT.push("lipton");

runAfterLoad(function() {
    console.log("Lipton mod loaded!");
});
