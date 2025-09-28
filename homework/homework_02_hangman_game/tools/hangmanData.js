export const hangmanParts = [{id: 0, name: "top-bar", height: "10px", width: "120px", color: "blue", top: "0", left: "140px", position: "absolute"},
                            {id: 1, name: "rope", height: "30px", width: "10px", color: "blue", top: "0", left: "260px", position: "absolute"},
                            {id: 2, name: "vertical-bar", height: "250px", width: "10px", color: "blue"},
                            {id: 3, name: "base", height: "10px", width: "280px", color: "blue"},
                            {id: 4, name: "head", height: "35px", width: "35px", top: "25px", left: "250px", position: "absolute", border_radius: "50%", border: "7px solid blue"},
                            {id: 5, name: "body", height: "80px", width: "10px", color: "blue", top: "55px", left: "260px", position: "absolute"},
                            {id: 6, name: "left-arm",height: "10px", width: "50px", color: "blue", top: "70px", left: "260px", position: "absolute", rotate: "-30deg"},
                            {id: 7, name: "right-arm", height: "10px", width: "50px", color: "blue", top: "70px", left: "220px", position: "absolute", rotate: "-150deg"},
                            {id: 8, name: "left-leg", height: "10px", width: "50px", color: "blue", top: "140px", left: "260px", position: "absolute", rotate: "30deg"},
                            {id: 9, name: "right-leg", height: "10px", width: "50px", color: "blue", top: "140px", left: "220px", position: "absolute", rotate: "150deg"}];

export const keys = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

export const words = ["APPLE", "REACT", "DEVELOPER", "PYTHON", "JAVASCRIPT", "VARIABLE", "FUNCTION", "OBJECT", "MODULE", "IMPORT",
                      "EXPORT", "ASYNC", "AWAIT", "PROMISE", "COMPONENT", "STATE", "HOOK", "PACKAGE", "SCRIPT", "SERVER",
                      "BANANA", "ORANGE", "PINEAPPLE", "MANGO", "PEACH", "CHERRY", "GRAPE", "LEMON", "WATERMELON", "STRAWBERRY",
                      "PIZZA", "BURGER", "BREAD", "PASTA", "CHEESE", "COFFEE", "TEA", "JUICE", "MILK", "CHOCOLATE",
                      "TABLE", "CHAIR", "LAMP", "BOTTLE", "PENCIL", "NOTEBOOK", "PHONE", "WINDOW", "DOOR", "CLOCK",
                      "DOG", "CAT", "BIRD", "FISH", "HORSE", "COW", "SHEEP", "DUCK", "RABBIT", "TIGER",
                      "SHIRT", "PANTS", "DRESS", "SHOES", "HAT", "JACKET", "SCARF", "GLOVES", "SOCKS", "BELT",
                      "RED", "BLUE", "GREEN", "YELLOW", "PURPLE", "ORANGE", "BLACK", "WHITE", "PINK", "BROWN",
                      "SUNNY", "RAIN", "CLOUD", "STORM", "SNOW", "WIND", "TREE", "FLOWER", "MOUNTAIN", "RIVER",
                      "HOUSE", "CAR", "TRAIN", "PLANE", "BEACH","CANDLE", "MIRROR", "TOOTHBRUSH", "WALLET", "BACKPACK"];