// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../dist/anonymous.js":[function(require,module,exports) {
window.anonymous =
/******/
function () {
  // webpackBootstrap

  /******/
  "use strict";
  /******/

  var __webpack_modules__ = {
    /***/
    "./src/adjectives.js":
    /*!***************************!*\
      !*** ./src/adjectives.js ***!
      \***************************/

    /***/
    function srcAdjectivesJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = ["abandoned", "able", "absolute", "adorable", "adventurous", "academic", "acceptable", "acclaimed", "accomplished", "accurate", "aching", "acidic", "acrobatic", "active", "actual", "adept", "admirable", "admired", "adolescent", "adorable", "adored", "advanced", "afraid", "affectionate", "aged", "aggravating", "aggressive", "agile", "agitated", "agonizing", "agreeable", "ajar", "alarmed", "alarming", "alert", "alienated", "alive", "all", "altruistic", "amazing", "ambitious", "ample", "amused", "amusing", "anchored", "ancient", "angelic", "angry", "anguished", "animated", "annual", "another", "antique", "anxious", "any", "apprehensive", "appropriate", "apt", "arctic", "arid", "aromatic", "artistic", "ashamed", "assured", "astonishing", "athletic", "attached", "attentive", "attractive", "austere", "authentic", "authorized", "automatic", "avaricious", "average", "aware", "awesome", "awful", "awkward", "babyish", "bad", "back", "baggy", "bare", "barren", "basic", "beautiful", "belated", "beloved", "beneficial", "better", "best", "bewitched", "big", "big-hearted", "biodegradable", "bite-sized", "bitter", "black", "black-and-white", "bland", "blank", "blaring", "bleak", "blind", "blissful", "blond", "blue", "blushing", "bogus", "boiling", "bold", "bony", "boring", "bossy", "both", "bouncy", "bountiful", "bowed", "brave", "breakable", "brief", "bright", "brilliant", "brisk", "broken", "bronze", "brown", "bruised", "bubbly", "bulky", "bumpy", "buoyant", "burdensome", "burly", "bustling", "busy", "buttery", "buzzing", "calculating", "calm", "candid", "canine", "capital", "carefree", "careful", "careless", "caring", "cautious", "cavernous", "celebrated", "charming", "cheap", "cheerful", "cheery", "chief", "chilly", "chubby", "circular", "classic", "clean", "clear", "clear-cut", "clever", "close", "closed", "cloudy", "clueless", "clumsy", "cluttered", "coarse", "cold", "colorful", "colorless", "colossal", "comfortable", "common", "compassionate", "competent", "complete", "complex", "complicated", "composed", "concerned", "concrete", "confused", "conscious", "considerate", "constant", "content", "conventional", "cooked", "cool", "cooperative", "coordinated", "corny", "corrupt", "costly", "courageous", "courteous", "crafty", "crazy", "creamy", "creative", "creepy", "criminal", "crisp", "critical", "crooked", "crowded", "cruel", "crushing", "cuddly", "cultivated", "cultured", "cumbersome", "curly", "curvy", "cute", "cylindrical", "damaged", "damp", "dangerous", "dapper", "daring", "darling", "dark", "dazzling", "dead", "deadly", "deafening", "dear", "dearest", "decent", "decimal", "decisive", "deep", "defenseless", "defensive", "defiant", "deficient", "definite", "definitive", "delayed", "delectable", "delicious", "delightful", "delirious", "demanding", "dense", "dental", "dependable", "dependent", "descriptive", "deserted", "detailed", "determined", "devoted", "different", "difficult", "digital", "diligent", "dim", "dimpled", "dimwitted", "direct", "disastrous", "discrete", "disfigured", "disgusting", "disloyal", "dismal", "distant", "downright", "dreary", "dirty", "disguised", "dishonest", "dismal", "distant", "distinct", "distorted", "dizzy", "dopey", "doting", "double", "downright", "drab", "drafty", "dramatic", "dreary", "droopy", "dry", "dual", "dull", "dutiful", "each", "eager", "earnest", "early", "easy", "easy-going", "ecstatic", "edible", "educated", "elaborate", "elastic", "elated", "elderly", "electric", "elegant", "elementary", "elliptical", "embarrassed", "embellished", "eminent", "emotional", "empty", "enchanted", "enchanting", "energetic", "enlightened", "enormous", "enraged", "entire", "envious", "equal", "equatorial", "essential", "esteemed", "ethical", "euphoric", "even", "evergreen", "everlasting", "every", "evil", "exalted", "excellent", "exemplary", "exhausted", "excitable", "excited", "exciting", "exotic", "expensive", "experienced", "expert", "extraneous", "extroverted", "extra-large", "extra-small", "fabulous", "failing", "faint", "fair", "faithful", "fake", "false", "familiar", "famous", "fancy", "fantastic", "far", "faraway", "far-flung", "far-off", "fast", "fat", "fatal", "fatherly", "favorable", "favorite", "fearful", "fearless", "feisty", "feline", "female", "feminine", "few", "fickle", "filthy", "fine", "finished", "firm", "first", "firsthand", "fitting", "fixed", "flaky", "flamboyant", "flashy", "flat", "flawed", "flawless", "flickering", "flimsy", "flippant", "flowery", "fluffy", "fluid", "flustered", "focused", "fond", "foolhardy", "foolish", "forceful", "forked", "formal", "forsaken", "forthright", "fortunate", "fragrant", "frail", "frank", "frayed", "free", "French", "fresh", "frequent", "friendly", "frightened", "frightening", "frigid", "frilly", "frizzy", "frivolous", "front", "frosty", "frozen", "frugal", "fruitful", "full", "fumbling", "functional", "funny", "fussy", "fuzzy", "gargantuan", "gaseous", "general", "generous", "gentle", "genuine", "giant", "giddy", "gigantic", "gifted", "giving", "glamorous", "glaring", "glass", "gleaming", "gleeful", "glistening", "glittering", "gloomy", "glorious", "glossy", "glum", "golden", "good", "good-natured", "gorgeous", "graceful", "gracious", "grand", "grandiose", "granular", "grateful", "grave", "gray", "great", "greedy", "green", "gregarious", "grim", "grimy", "gripping", "grizzled", "gross", "grotesque", "grouchy", "grounded", "growing", "growling", "grown", "grubby", "gruesome", "grumpy", "guilty", "gullible", "gummy", "hairy", "half", "handmade", "handsome", "handy", "happy", "happy-go-lucky", "hard", "hard-to-find", "harmful", "harmless", "harmonious", "harsh", "hasty", "hateful", "haunting", "healthy", "heartfelt", "hearty", "heavenly", "heavy", "hefty", "helpful", "helpless", "hidden", "hideous", "high", "high-level", "hilarious", "hoarse", "hollow", "homely", "honest", "honorable", "honored", "hopeful", "horrible", "hospitable", "hot", "huge", "humble", "humiliating", "humming", "humongous", "hungry", "hurtful", "husky", "icky", "icy", "ideal", "idealistic", "identical", "idle", "idiotic", "idolized", "ignorant", "ill", "illegal", "ill-fated", "ill-informed", "illiterate", "illustrious", "imaginary", "imaginative", "immaculate", "immaterial", "immediate", "immense", "impassioned", "impeccable", "impartial", "imperfect", "imperturbable", "impish", "impolite", "important", "impossible", "impractical", "impressionable", "impressive", "improbable", "impure", "inborn", "incomparable", "incompatible", "incomplete", "inconsequential", "incredible", "indelible", "inexperienced", "indolent", "infamous", "infantile", "infatuated", "inferior", "infinite", "informal", "innocent", "insecure", "insidious", "insignificant", "insistent", "instructive", "insubstantial", "intelligent", "intent", "intentional", "interesting", "internal", "international", "intrepid", "ironclad", "irresponsible", "irritating", "itchy", "jaded", "jagged", "jam-packed", "jaunty", "jealous", "jittery", "joint", "jolly", "jovial", "joyful", "joyous", "jubilant", "judicious", "juicy", "jumbo", "junior", "jumpy", "juvenile", "kaleidoscopic", "keen", "key", "kind", "kindhearted", "kindly", "klutzy", "knobby", "knotty", "knowledgeable", "knowing", "known", "kooky", "kosher", "lame", "lanky", "large", "last", "lasting", "late", "lavish", "lawful", "lazy", "leading", "lean", "leafy", "left", "legal", "legitimate", "light", "lighthearted", "likable", "likely", "limited", "limp", "limping", "linear", "lined", "liquid", "little", "live", "lively", "livid", "loathsome", "lone", "lonely", "long", "long-term", "loose", "lopsided", "lost", "loud", "lovable", "lovely", "loving", "low", "loyal", "lucky", "lumbering", "luminous", "lumpy", "lustrous", "luxurious", "mad", "made-up", "magnificent", "majestic", "major", "male", "mammoth", "married", "marvelous", "masculine", "massive", "mature", "meager", "mealy", "mean", "measly", "meaty", "medical", "mediocre", "medium", "meek", "mellow", "melodic", "memorable", "menacing", "merry", "messy", "metallic", "mild", "milky", "mindless", "miniature", "minor", "minty", "miserable", "miserly", "misguided", "misty", "mixed", "modern", "modest", "moist", "monstrous", "monthly", "monumental", "moral", "mortified", "motherly", "motionless", "mountainous", "muddy", "muffled", "multicolored", "mundane", "murky", "mushy", "musty", "muted", "mysterious", "naive", "narrow", "nasty", "natural", "naughty", "nautical", "near", "neat", "necessary", "needy", "negative", "neglected", "negligible", "neighboring", "nervous", "new", "next", "nice", "nifty", "nimble", "nippy", "nocturnal", "noisy", "nonstop", "normal", "notable", "noted", "noteworthy", "novel", "noxious", "numb", "nutritious", "nutty", "obedient", "obese", "oblong", "oily", "oblong", "obvious", "occasional", "odd", "oddball", "offbeat", "offensive", "official", "old", "old-fashioned", "only", "open", "optimal", "optimistic", "opulent", "orange", "orderly", "organic", "ornate", "ornery", "ordinary", "original", "other", "our", "outlying", "outgoing", "outlandish", "outrageous", "outstanding", "oval", "overcooked", "overdue", "overjoyed", "overlooked", "palatable", "pale", "paltry", "parallel", "parched", "partial", "passionate", "past", "pastel", "peaceful", "peppery", "perfect", "perfumed", "periodic", "perky", "personal", "pertinent", "pesky", "pessimistic", "petty", "phony", "physical", "piercing", "pink", "pitiful", "plain", "plaintive", "plastic", "playful", "pleasant", "pleased", "pleasing", "plump", "plush", "polished", "polite", "political", "pointed", "pointless", "poised", "poor", "popular", "portly", "posh", "positive", "possible", "potable", "powerful", "powerless", "practical", "precious", "present", "prestigious", "pretty", "precious", "previous", "pricey", "prickly", "primary", "prime", "pristine", "private", "prize", "probable", "productive", "profitable", "profuse", "proper", "proud", "prudent", "punctual", "pungent", "puny", "pure", "purple", "pushy", "putrid", "puzzled", "puzzling", "quaint", "qualified", "quarrelsome", "quarterly", "queasy", "querulous", "questionable", "quick", "quick-witted", "quiet", "quintessential", "quirky", "quixotic", "quizzical", "radiant", "ragged", "rapid", "rare", "rash", "raw", "recent", "reckless", "rectangular", "ready", "real", "realistic", "reasonable", "red", "reflecting", "regal", "regular", "reliable", "relieved", "remarkable", "remorseful", "remote", "repentant", "required", "respectful", "responsible", "repulsive", "revolving", "rewarding", "rich", "rigid", "right", "ringed", "ripe", "roasted", "robust", "rosy", "rotating", "rotten", "rough", "round", "rowdy", "royal", "rubbery", "rundown", "ruddy", "rude", "runny", "rural", "rusty", "sad", "safe", "salty", "same", "sandy", "sane", "sarcastic", "sardonic", "satisfied", "scaly", "scarce", "scared", "scary", "scented", "scholarly", "scientific", "scornful", "scratchy", "scrawny", "second", "secondary", "second-hand", "secret", "self-assured", "self-reliant", "selfish", "sentimental", "separate", "serene", "serious", "serpentine", "several", "severe", "shabby", "shadowy", "shady", "shallow", "shameful", "shameless", "sharp", "shimmering", "shiny", "shocked", "shocking", "shoddy", "short", "short-term", "showy", "shrill", "shy", "sick", "silent", "silky", "silly", "silver", "similar", "simple", "simplistic", "sinful", "single", "sizzling", "skeletal", "skinny", "sleepy", "slight", "slim", "slimy", "slippery", "slow", "slushy", "small", "smart", "smoggy", "smooth", "smug", "snappy", "snarling", "sneaky", "sniveling", "snoopy", "sociable", "soft", "soggy", "solid", "somber", "some", "spherical", "sophisticated", "sore", "sorrowful", "soulful", "soupy", "sour", "Spanish", "sparkling", "sparse", "specific", "spectacular", "speedy", "spicy", "spiffy", "spirited", "spiteful", "splendid", "spotless", "spotted", "spry", "square", "squeaky", "squiggly", "stable", "staid", "stained", "stale", "standard", "starchy", "stark", "starry", "steep", "sticky", "stiff", "stimulating", "stingy", "stormy", "straight", "strange", "steel", "strict", "strident", "striking", "striped", "strong", "studious", "stunning", "stupendous", "stupid", "sturdy", "stylish", "subdued", "submissive", "substantial", "subtle", "suburban", "sudden", "sugary", "sunny", "super", "superb", "superficial", "superior", "supportive", "sure-footed", "surprised", "suspicious", "svelte", "sweaty", "sweet", "sweltering", "swift", "sympathetic", "tall", "talkative", "tame", "tan", "tangible", "tart", "tasty", "tattered", "taut", "tedious", "teeming", "tempting", "tender", "tense", "tepid", "terrible", "terrific", "testy", "thankful", "that", "these", "thick", "thin", "third", "thirsty", "this", "thorough", "thorny", "those", "thoughtful", "threadbare", "thrifty", "thunderous", "tidy", "tight", "timely", "tinted", "tiny", "tired", "torn", "total", "tough", "traumatic", "treasured", "tremendous", "tragic", "trained", "tremendous", "triangular", "tricky", "trifling", "trim", "trivial", "troubled", "true", "trusting", "trustworthy", "trusty", "truthful", "tubby", "turbulent", "twin", "ugly", "ultimate", "unacceptable", "unaware", "uncomfortable", "uncommon", "unconscious", "understated", "unequaled", "uneven", "unfinished", "unfit", "unfolded", "unfortunate", "unhappy", "unhealthy", "uniform", "unimportant", "unique", "united", "unkempt", "unknown", "unlawful", "unlined", "unlucky", "unnatural", "unpleasant", "unrealistic", "unripe", "unruly", "unselfish", "unsightly", "unsteady", "unsung", "untidy", "untimely", "untried", "untrue", "unused", "unusual", "unwelcome", "unwieldy", "unwilling", "unwitting", "unwritten", "upbeat", "upright", "upset", "urban", "usable", "used", "useful", "useless", "utilized", "utter", "vacant", "vague", "vain", "valid", "valuable", "vapid", "variable", "vast", "velvety", "venerated", "vengeful", "verifiable", "vibrant", "vicious", "victorious", "vigilant", "vigorous", "villainous", "violet", "violent", "virtual", "virtuous", "visible", "vital", "vivacious", "vivid", "voluminous", "wan", "warlike", "warm", "warmhearted", "warped", "wary", "wasteful", "watchful", "waterlogged", "watery", "wavy", "wealthy", "weak", "weary", "webbed", "wee", "weekly", "weepy", "weighty", "weird", "welcome", "well-documented", "well-groomed", "well-informed", "well-lit", "well-made", "well-off", "well-to-do", "well-worn", "wet", "which", "whimsical", "whirlwind", "whispered", "white", "whole", "whopping", "wicked", "wide", "wide-eyed", "wiggly", "wild", "willing", "wilted", "winding", "windy", "winged", "wiry", "wise", "witty", "wobbly", "woeful", "wonderful", "wooden", "woozy", "wordy", "worldly", "worn", "worried", "worrisome", "worse", "worst", "worthless", "worthwhile", "worthy", "wrathful", "wretched", "writhing", "wrong", "wry", "yawning", "yearly", "yellow", "yellowish", "young", "youthful", "yummy", "zany", "zealous", "zesty", "zigzag"];
      /***/
    },

    /***/
    "./src/animalImages.js":
    /*!*****************************!*\
      !*** ./src/animalImages.js ***!
      \*****************************/

    /***/
    function srcAnimalImagesJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "alligator": function alligator() {
          return (
            /* reexport safe */
            _assets_alligator_png__WEBPACK_IMPORTED_MODULE_0__.default
          );
        },

        /* harmony export */
        "anteater": function anteater() {
          return (
            /* reexport safe */
            _assets_anteater_png__WEBPACK_IMPORTED_MODULE_1__.default
          );
        },

        /* harmony export */
        "armadillo": function armadillo() {
          return (
            /* reexport safe */
            _assets_armadillo_png__WEBPACK_IMPORTED_MODULE_2__.default
          );
        },

        /* harmony export */
        "auroch": function auroch() {
          return (
            /* reexport safe */
            _assets_auroch_png__WEBPACK_IMPORTED_MODULE_3__.default
          );
        },

        /* harmony export */
        "axolotl": function axolotl() {
          return (
            /* reexport safe */
            _assets_axolotl_png__WEBPACK_IMPORTED_MODULE_4__.default
          );
        },

        /* harmony export */
        "badger": function badger() {
          return (
            /* reexport safe */
            _assets_badger_png__WEBPACK_IMPORTED_MODULE_5__.default
          );
        },

        /* harmony export */
        "bat": function bat() {
          return (
            /* reexport safe */
            _assets_bat_png__WEBPACK_IMPORTED_MODULE_6__.default
          );
        },

        /* harmony export */
        "beaver": function beaver() {
          return (
            /* reexport safe */
            _assets_beaver_png__WEBPACK_IMPORTED_MODULE_7__.default
          );
        },

        /* harmony export */
        "buffalo": function buffalo() {
          return (
            /* reexport safe */
            _assets_buffalo_png__WEBPACK_IMPORTED_MODULE_8__.default
          );
        },

        /* harmony export */
        "camel": function camel() {
          return (
            /* reexport safe */
            _assets_camel_png__WEBPACK_IMPORTED_MODULE_9__.default
          );
        },

        /* harmony export */
        "capybara": function capybara() {
          return (
            /* reexport safe */
            _assets_capybara_png__WEBPACK_IMPORTED_MODULE_10__.default
          );
        },

        /* harmony export */
        "chameleon": function chameleon() {
          return (
            /* reexport safe */
            _assets_chameleon_png__WEBPACK_IMPORTED_MODULE_11__.default
          );
        },

        /* harmony export */
        "cheetah": function cheetah() {
          return (
            /* reexport safe */
            _assets_cheetah_png__WEBPACK_IMPORTED_MODULE_12__.default
          );
        },

        /* harmony export */
        "chinchilla": function chinchilla() {
          return (
            /* reexport safe */
            _assets_chinchilla_png__WEBPACK_IMPORTED_MODULE_13__.default
          );
        },

        /* harmony export */
        "chipmunk": function chipmunk() {
          return (
            /* reexport safe */
            _assets_chipmunk_png__WEBPACK_IMPORTED_MODULE_14__.default
          );
        },

        /* harmony export */
        "chupacabra": function chupacabra() {
          return (
            /* reexport safe */
            _assets_chupacabra_png__WEBPACK_IMPORTED_MODULE_15__.default
          );
        },

        /* harmony export */
        "cormorant": function cormorant() {
          return (
            /* reexport safe */
            _assets_cormorant_png__WEBPACK_IMPORTED_MODULE_16__.default
          );
        },

        /* harmony export */
        "coyote": function coyote() {
          return (
            /* reexport safe */
            _assets_coyote_png__WEBPACK_IMPORTED_MODULE_17__.default
          );
        },

        /* harmony export */
        "crow": function crow() {
          return (
            /* reexport safe */
            _assets_crow_png__WEBPACK_IMPORTED_MODULE_18__.default
          );
        },

        /* harmony export */
        "dingo": function dingo() {
          return (
            /* reexport safe */
            _assets_dingo_png__WEBPACK_IMPORTED_MODULE_19__.default
          );
        },

        /* harmony export */
        "dinosaur": function dinosaur() {
          return (
            /* reexport safe */
            _assets_dinosaur_png__WEBPACK_IMPORTED_MODULE_20__.default
          );
        },

        /* harmony export */
        "dolphin": function dolphin() {
          return (
            /* reexport safe */
            _assets_dolphin_png__WEBPACK_IMPORTED_MODULE_21__.default
          );
        },

        /* harmony export */
        "duck": function duck() {
          return (
            /* reexport safe */
            _assets_duck_png__WEBPACK_IMPORTED_MODULE_22__.default
          );
        },

        /* harmony export */
        "elephant": function elephant() {
          return (
            /* reexport safe */
            _assets_elephant_png__WEBPACK_IMPORTED_MODULE_23__.default
          );
        },

        /* harmony export */
        "ferret": function ferret() {
          return (
            /* reexport safe */
            _assets_ferret_png__WEBPACK_IMPORTED_MODULE_24__.default
          );
        },

        /* harmony export */
        "fox": function fox() {
          return (
            /* reexport safe */
            _assets_fox_png__WEBPACK_IMPORTED_MODULE_25__.default
          );
        },

        /* harmony export */
        "frog": function frog() {
          return (
            /* reexport safe */
            _assets_frog_png__WEBPACK_IMPORTED_MODULE_26__.default
          );
        },

        /* harmony export */
        "giraffe": function giraffe() {
          return (
            /* reexport safe */
            _assets_giraffe_png__WEBPACK_IMPORTED_MODULE_27__.default
          );
        },

        /* harmony export */
        "gopher": function gopher() {
          return (
            /* reexport safe */
            _assets_gopher_png__WEBPACK_IMPORTED_MODULE_28__.default
          );
        },

        /* harmony export */
        "grizzly": function grizzly() {
          return (
            /* reexport safe */
            _assets_grizzly_png__WEBPACK_IMPORTED_MODULE_29__.default
          );
        },

        /* harmony export */
        "hedgehog": function hedgehog() {
          return (
            /* reexport safe */
            _assets_hedgehog_png__WEBPACK_IMPORTED_MODULE_30__.default
          );
        },

        /* harmony export */
        "hippo": function hippo() {
          return (
            /* reexport safe */
            _assets_hippo_png__WEBPACK_IMPORTED_MODULE_31__.default
          );
        },

        /* harmony export */
        "hyena": function hyena() {
          return (
            /* reexport safe */
            _assets_hyena_png__WEBPACK_IMPORTED_MODULE_32__.default
          );
        },

        /* harmony export */
        "ibex": function ibex() {
          return (
            /* reexport safe */
            _assets_ibex_png__WEBPACK_IMPORTED_MODULE_33__.default
          );
        },

        /* harmony export */
        "ifrit": function ifrit() {
          return (
            /* reexport safe */
            _assets_ifrit_png__WEBPACK_IMPORTED_MODULE_34__.default
          );
        },

        /* harmony export */
        "iguana": function iguana() {
          return (
            /* reexport safe */
            _assets_iguana_png__WEBPACK_IMPORTED_MODULE_35__.default
          );
        },

        /* harmony export */
        "jackal": function jackal() {
          return (
            /* reexport safe */
            _assets_jackal_png__WEBPACK_IMPORTED_MODULE_36__.default
          );
        },

        /* harmony export */
        "kangaroo": function kangaroo() {
          return (
            /* reexport safe */
            _assets_kangaroo_png__WEBPACK_IMPORTED_MODULE_37__.default
          );
        },

        /* harmony export */
        "koala": function koala() {
          return (
            /* reexport safe */
            _assets_koala_png__WEBPACK_IMPORTED_MODULE_38__.default
          );
        },

        /* harmony export */
        "kraken": function kraken() {
          return (
            /* reexport safe */
            _assets_kraken_png__WEBPACK_IMPORTED_MODULE_39__.default
          );
        },

        /* harmony export */
        "lemur": function lemur() {
          return (
            /* reexport safe */
            _assets_lemur_png__WEBPACK_IMPORTED_MODULE_40__.default
          );
        },

        /* harmony export */
        "leopard": function leopard() {
          return (
            /* reexport safe */
            _assets_leopard_png__WEBPACK_IMPORTED_MODULE_41__.default
          );
        },

        /* harmony export */
        "liger": function liger() {
          return (
            /* reexport safe */
            _assets_liger_png__WEBPACK_IMPORTED_MODULE_42__.default
          );
        },

        /* harmony export */
        "llama": function llama() {
          return (
            /* reexport safe */
            _assets_llama_png__WEBPACK_IMPORTED_MODULE_43__.default
          );
        },

        /* harmony export */
        "manatee": function manatee() {
          return (
            /* reexport safe */
            _assets_manatee_png__WEBPACK_IMPORTED_MODULE_44__.default
          );
        },

        /* harmony export */
        "mink": function mink() {
          return (
            /* reexport safe */
            _assets_mink_png__WEBPACK_IMPORTED_MODULE_45__.default
          );
        },

        /* harmony export */
        "monkey": function monkey() {
          return (
            /* reexport safe */
            _assets_monkey_png__WEBPACK_IMPORTED_MODULE_46__.default
          );
        },

        /* harmony export */
        "moose": function moose() {
          return (
            /* reexport safe */
            _assets_moose_png__WEBPACK_IMPORTED_MODULE_47__.default
          );
        },

        /* harmony export */
        "narwhal": function narwhal() {
          return (
            /* reexport safe */
            _assets_narwhal_png__WEBPACK_IMPORTED_MODULE_48__.default
          );
        },

        /* harmony export */
        "orangutan": function orangutan() {
          return (
            /* reexport safe */
            _assets_orangutan_png__WEBPACK_IMPORTED_MODULE_49__.default
          );
        },

        /* harmony export */
        "otter": function otter() {
          return (
            /* reexport safe */
            _assets_otter_png__WEBPACK_IMPORTED_MODULE_50__.default
          );
        },

        /* harmony export */
        "panda": function panda() {
          return (
            /* reexport safe */
            _assets_panda_png__WEBPACK_IMPORTED_MODULE_51__.default
          );
        },

        /* harmony export */
        "penguin": function penguin() {
          return (
            /* reexport safe */
            _assets_penguin_png__WEBPACK_IMPORTED_MODULE_52__.default
          );
        },

        /* harmony export */
        "platypus": function platypus() {
          return (
            /* reexport safe */
            _assets_platypus_png__WEBPACK_IMPORTED_MODULE_53__.default
          );
        },

        /* harmony export */
        "pumpkin": function pumpkin() {
          return (
            /* reexport safe */
            _assets_pumpkin_png__WEBPACK_IMPORTED_MODULE_54__.default
          );
        },

        /* harmony export */
        "python": function python() {
          return (
            /* reexport safe */
            _assets_python_png__WEBPACK_IMPORTED_MODULE_55__.default
          );
        },

        /* harmony export */
        "quagga": function quagga() {
          return (
            /* reexport safe */
            _assets_quagga_png__WEBPACK_IMPORTED_MODULE_56__.default
          );
        },

        /* harmony export */
        "rabbit": function rabbit() {
          return (
            /* reexport safe */
            _assets_rabbit_png__WEBPACK_IMPORTED_MODULE_57__.default
          );
        },

        /* harmony export */
        "raccoon": function raccoon() {
          return (
            /* reexport safe */
            _assets_raccoon_png__WEBPACK_IMPORTED_MODULE_58__.default
          );
        },

        /* harmony export */
        "rhino": function rhino() {
          return (
            /* reexport safe */
            _assets_rhino_png__WEBPACK_IMPORTED_MODULE_59__.default
          );
        },

        /* harmony export */
        "sheep": function sheep() {
          return (
            /* reexport safe */
            _assets_sheep_png__WEBPACK_IMPORTED_MODULE_60__.default
          );
        },

        /* harmony export */
        "shrew": function shrew() {
          return (
            /* reexport safe */
            _assets_shrew_png__WEBPACK_IMPORTED_MODULE_61__.default
          );
        },

        /* harmony export */
        "skunk": function skunk() {
          return (
            /* reexport safe */
            _assets_skunk_png__WEBPACK_IMPORTED_MODULE_62__.default
          );
        },

        /* harmony export */
        "squirrel": function squirrel() {
          return (
            /* reexport safe */
            _assets_squirrel_png__WEBPACK_IMPORTED_MODULE_63__.default
          );
        },

        /* harmony export */
        "tiger": function tiger() {
          return (
            /* reexport safe */
            _assets_tiger_png__WEBPACK_IMPORTED_MODULE_64__.default
          );
        },

        /* harmony export */
        "turtle": function turtle() {
          return (
            /* reexport safe */
            _assets_turtle_png__WEBPACK_IMPORTED_MODULE_65__.default
          );
        },

        /* harmony export */
        "walrus": function walrus() {
          return (
            /* reexport safe */
            _assets_walrus_png__WEBPACK_IMPORTED_MODULE_66__.default
          );
        },

        /* harmony export */
        "wolf": function wolf() {
          return (
            /* reexport safe */
            _assets_wolf_png__WEBPACK_IMPORTED_MODULE_67__.default
          );
        },

        /* harmony export */
        "wolverine": function wolverine() {
          return (
            /* reexport safe */
            _assets_wolverine_png__WEBPACK_IMPORTED_MODULE_68__.default
          );
        },

        /* harmony export */
        "wombat": function wombat() {
          return (
            /* reexport safe */
            _assets_wombat_png__WEBPACK_IMPORTED_MODULE_69__.default
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _assets_alligator_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../assets/alligator.png */
      "./assets/alligator.png");
      /* harmony import */


      var _assets_anteater_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../assets/anteater.png */
      "./assets/anteater.png");
      /* harmony import */


      var _assets_armadillo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../assets/armadillo.png */
      "./assets/armadillo.png");
      /* harmony import */


      var _assets_auroch_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../assets/auroch.png */
      "./assets/auroch.png");
      /* harmony import */


      var _assets_axolotl_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../assets/axolotl.png */
      "./assets/axolotl.png");
      /* harmony import */


      var _assets_badger_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../assets/badger.png */
      "./assets/badger.png");
      /* harmony import */


      var _assets_bat_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../assets/bat.png */
      "./assets/bat.png");
      /* harmony import */


      var _assets_beaver_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../assets/beaver.png */
      "./assets/beaver.png");
      /* harmony import */


      var _assets_buffalo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../assets/buffalo.png */
      "./assets/buffalo.png");
      /* harmony import */


      var _assets_camel_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../assets/camel.png */
      "./assets/camel.png");
      /* harmony import */


      var _assets_capybara_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../assets/capybara.png */
      "./assets/capybara.png");
      /* harmony import */


      var _assets_chameleon_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../assets/chameleon.png */
      "./assets/chameleon.png");
      /* harmony import */


      var _assets_cheetah_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../assets/cheetah.png */
      "./assets/cheetah.png");
      /* harmony import */


      var _assets_chinchilla_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../assets/chinchilla.png */
      "./assets/chinchilla.png");
      /* harmony import */


      var _assets_chipmunk_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../assets/chipmunk.png */
      "./assets/chipmunk.png");
      /* harmony import */


      var _assets_chupacabra_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../assets/chupacabra.png */
      "./assets/chupacabra.png");
      /* harmony import */


      var _assets_cormorant_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../assets/cormorant.png */
      "./assets/cormorant.png");
      /* harmony import */


      var _assets_coyote_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../assets/coyote.png */
      "./assets/coyote.png");
      /* harmony import */


      var _assets_crow_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../assets/crow.png */
      "./assets/crow.png");
      /* harmony import */


      var _assets_dingo_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../assets/dingo.png */
      "./assets/dingo.png");
      /* harmony import */


      var _assets_dinosaur_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../assets/dinosaur.png */
      "./assets/dinosaur.png");
      /* harmony import */


      var _assets_dolphin_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../assets/dolphin.png */
      "./assets/dolphin.png");
      /* harmony import */


      var _assets_duck_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../assets/duck.png */
      "./assets/duck.png");
      /* harmony import */


      var _assets_elephant_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../assets/elephant.png */
      "./assets/elephant.png");
      /* harmony import */


      var _assets_ferret_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../assets/ferret.png */
      "./assets/ferret.png");
      /* harmony import */


      var _assets_fox_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../assets/fox.png */
      "./assets/fox.png");
      /* harmony import */


      var _assets_frog_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../assets/frog.png */
      "./assets/frog.png");
      /* harmony import */


      var _assets_giraffe_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../assets/giraffe.png */
      "./assets/giraffe.png");
      /* harmony import */


      var _assets_gopher_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../assets/gopher.png */
      "./assets/gopher.png");
      /* harmony import */


      var _assets_grizzly_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../assets/grizzly.png */
      "./assets/grizzly.png");
      /* harmony import */


      var _assets_hedgehog_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../assets/hedgehog.png */
      "./assets/hedgehog.png");
      /* harmony import */


      var _assets_hippo_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../assets/hippo.png */
      "./assets/hippo.png");
      /* harmony import */


      var _assets_hyena_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ../assets/hyena.png */
      "./assets/hyena.png");
      /* harmony import */


      var _assets_ibex_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ../assets/ibex.png */
      "./assets/ibex.png");
      /* harmony import */


      var _assets_ifrit_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ../assets/ifrit.png */
      "./assets/ifrit.png");
      /* harmony import */


      var _assets_iguana_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ../assets/iguana.png */
      "./assets/iguana.png");
      /* harmony import */


      var _assets_jackal_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ../assets/jackal.png */
      "./assets/jackal.png");
      /* harmony import */


      var _assets_kangaroo_png__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ../assets/kangaroo.png */
      "./assets/kangaroo.png");
      /* harmony import */


      var _assets_koala_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ../assets/koala.png */
      "./assets/koala.png");
      /* harmony import */


      var _assets_kraken_png__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ../assets/kraken.png */
      "./assets/kraken.png");
      /* harmony import */


      var _assets_lemur_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ../assets/lemur.png */
      "./assets/lemur.png");
      /* harmony import */


      var _assets_leopard_png__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ../assets/leopard.png */
      "./assets/leopard.png");
      /* harmony import */


      var _assets_liger_png__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ../assets/liger.png */
      "./assets/liger.png");
      /* harmony import */


      var _assets_llama_png__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ../assets/llama.png */
      "./assets/llama.png");
      /* harmony import */


      var _assets_manatee_png__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ../assets/manatee.png */
      "./assets/manatee.png");
      /* harmony import */


      var _assets_mink_png__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ../assets/mink.png */
      "./assets/mink.png");
      /* harmony import */


      var _assets_monkey_png__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ../assets/monkey.png */
      "./assets/monkey.png");
      /* harmony import */


      var _assets_moose_png__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ../assets/moose.png */
      "./assets/moose.png");
      /* harmony import */


      var _assets_narwhal_png__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ../assets/narwhal.png */
      "./assets/narwhal.png");
      /* harmony import */


      var _assets_orangutan_png__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ../assets/orangutan.png */
      "./assets/orangutan.png");
      /* harmony import */


      var _assets_otter_png__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ../assets/otter.png */
      "./assets/otter.png");
      /* harmony import */


      var _assets_panda_png__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ../assets/panda.png */
      "./assets/panda.png");
      /* harmony import */


      var _assets_penguin_png__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! ../assets/penguin.png */
      "./assets/penguin.png");
      /* harmony import */


      var _assets_platypus_png__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! ../assets/platypus.png */
      "./assets/platypus.png");
      /* harmony import */


      var _assets_pumpkin_png__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! ../assets/pumpkin.png */
      "./assets/pumpkin.png");
      /* harmony import */


      var _assets_python_png__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! ../assets/python.png */
      "./assets/python.png");
      /* harmony import */


      var _assets_quagga_png__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! ../assets/quagga.png */
      "./assets/quagga.png");
      /* harmony import */


      var _assets_rabbit_png__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! ../assets/rabbit.png */
      "./assets/rabbit.png");
      /* harmony import */


      var _assets_raccoon_png__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! ../assets/raccoon.png */
      "./assets/raccoon.png");
      /* harmony import */


      var _assets_rhino_png__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! ../assets/rhino.png */
      "./assets/rhino.png");
      /* harmony import */


      var _assets_sheep_png__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! ../assets/sheep.png */
      "./assets/sheep.png");
      /* harmony import */


      var _assets_shrew_png__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! ../assets/shrew.png */
      "./assets/shrew.png");
      /* harmony import */


      var _assets_skunk_png__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
      /*! ../assets/skunk.png */
      "./assets/skunk.png");
      /* harmony import */


      var _assets_squirrel_png__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
      /*! ../assets/squirrel.png */
      "./assets/squirrel.png");
      /* harmony import */


      var _assets_tiger_png__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
      /*! ../assets/tiger.png */
      "./assets/tiger.png");
      /* harmony import */


      var _assets_turtle_png__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
      /*! ../assets/turtle.png */
      "./assets/turtle.png");
      /* harmony import */


      var _assets_walrus_png__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
      /*! ../assets/walrus.png */
      "./assets/walrus.png");
      /* harmony import */


      var _assets_wolf_png__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
      /*! ../assets/wolf.png */
      "./assets/wolf.png");
      /* harmony import */


      var _assets_wolverine_png__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
      /*! ../assets/wolverine.png */
      "./assets/wolverine.png");
      /* harmony import */


      var _assets_wombat_png__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
      /*! ../assets/wombat.png */
      "./assets/wombat.png");
      /***/

    },

    /***/
    "./src/animals.js":
    /*!************************!*\
      !*** ./src/animals.js ***!
      \************************/

    /***/
    function srcAnimalsJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = ["alligator", "anteater", "armadillo", "auroch", "axolotl", "badger", "bat", "beaver", "buffalo", "camel", "capybara", "chameleon", "cheetah", "chinchilla", "chipmunk", "chupacabra", "cormorant", "coyote", "crow", "dingo", "dinosaur", "dolphin", "duck", "elephant", "ferret", "fox", "frog", "giraffe", "gopher", "grizzly", "hedgehog", "hippo", "hyena", "ibex", "ifrit", "iguana", "jackal", "kangaroo", "koala", "kraken", "lemur", "leopard", "liger", "llama", "manatee", "mink", "monkey", "moose", "narwhal", "orangutan", "otter", "panda", "penguin", "platypus", "pumpkin", "python", "quagga", "rabbit", "raccoon", "rhino", "sheep", "shrew", "skunk", "squirrel", "tiger", "turtle", "walrus", "wolf", "wolverine", "wombat"];
      /***/
    },

    /***/
    "./src/index.js":
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/

    /***/
    function srcIndexJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony import */


      var _adjectives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./adjectives */
      "./src/adjectives.js");
      /* harmony import */


      var _animals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./animals */
      "./src/animals.js");
      /* harmony import */


      var _animalImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./animalImages */
      "./src/animalImages.js");

      var animalSize = _animals__WEBPACK_IMPORTED_MODULE_1__.default.length;
      var adjectiveSize = _adjectives__WEBPACK_IMPORTED_MODULE_0__.default.length;
      /**
       * @typedef options
       * @property {string} prefix
       */

      /**
       * @typedef info
       * @property {string} name
       * @property {string} image
       * @property {string} animal
       */

      /* harmony default export */

      var __WEBPACK_DEFAULT_EXPORT__ = {
        /**
         * @param {options} options
         * @returns {info}
         */
        generate: function generate() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var prefix = options.prefix;

          var adjective = _adjectives__WEBPACK_IMPORTED_MODULE_0__.default[Math.floor(Math.random() * adjectiveSize)];

          var animal = _animals__WEBPACK_IMPORTED_MODULE_1__.default[Math.floor(Math.random() * animalSize)];

          var image = _animalImages__WEBPACK_IMPORTED_MODULE_2__[animal];
          var name = "".concat(adjective, " ").concat(animal);
          return {
            name: prefix ? "".concat(prefix, " ").concat(name) : name,
            image: image,
            animal: animal
          };
        },

        /**
         * @param {string} animal
         * @returns {string}
         */
        getImage: function getImage(animal) {
          var image = _animalImages__WEBPACK_IMPORTED_MODULE_2__[animal];
          return image;
        }
      };
      /***/
    },

    /***/
    "./assets/alligator.png":
    /*!******************************!*\
      !*** ./assets/alligator.png ***!
      \******************************/

    /***/
    function assetsAlligatorPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAABBgn88g74Bwv6/fj0BQMPzvtkoAAAL/SURBVHja7ZrLkqwgDIYH5C6ief+XPQsRvKBIDzk9i3wrqqkivwRDEvvnhyAIgiAIgiAIgiCIPwVrgA9CAgBIMfC3M5EeApSAjBY7Q1zo3ZRQOAIMHNF2m7H6NGUQBHAHF9ZN4OI643hvAVxCAcmfZroKKFoBEIyJ8ozrK8DADdbezZieAtSdFdD6dkp1FCDgA0Q/AQo+QnUTYD8TYLsJcJ8JGLsJ2B80b+7k+Gk8HdBuAk6vd9kjkjM2HH/CEBDOO5KYGWPM374H/0nAKWCOvLuA8dYFjl1csL8SegkAZ+6iki/NjN98DQ/n4BuBaGX4XiiO0UC1CAjGeeiMey1ATRowmN8J4BMg4V8JCB7QGF4IGAARXxcgAJWlJmDAtQ+iIiAg2wf/LIBrbAGwPAoQ6PbBPglQ/ezIyThdPgQPArptQCzLrS6F4wcBnU6AnlNILxSSDwLmjuFui+q6RUCnK+BQBAwtAly3YHdTSQAAAL8X0OkEVKpZdS9AhI1pSkNh0nC0aeiGNPRzHhb6EabBBXrLnLn3aahlTsfS2kuuNAJMR3//QkBayuSuxpRL2zFmNGtyHOLQp+J7O/FHAWOLgHh+lE4J5AIAcWPCltGsjypzmuyOzzofWlq6IRBtS4mcxTsAiBsjU7uH+/S2r+uHQ8LsHvP4p1AsV/Uh135zbnCsK2meHlXz1UPbxoyldsSiWy4jsS4Vw6fMJa7LWylWD8XdWHIfLJRC4dX+43U8AIDJsWvIJziwKQ9F7vxsoUvzYzXsVqeYxoSEA4DOondDr3Zr55ibLw9x9rV3rtjRnFjtOt5t2ofDXySl6BkhuEpa7rAF1AoThZyU1ksz5LIg1GtD1Lx4fFOeIyqIl0qtOMVTML9s0Vgk++Z1k0qhvI2ipU0XHJ79l00qZUeNY7+lTRfeYFv83+vT7YGl2lPSgWEKqHbVBGe4AhhbHg6tCwhfz68E8dI8lgDGlL2kQNIifb6/PQyzcdEZ0pm5/P8FRv8UIQiCIAiCIAiCIIg/xT8d3S33YbUCQgAAAABJRU5ErkJggg==";
      /***/
    },

    /***/
    "./assets/anteater.png":
    /*!*****************************!*\
      !*** ./assets/anteater.png ***!
      \*****************************/

    /***/
    function assetsAnteaterPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIC/QDbf7tYAAAFlSURBVGje7dhBboMwEIVhjlAbsw+0HCCR2DdtOQCEd/+rdEELjvyCZ+Ruos5/gE9jYRLjqrIsy7IsRW7LA7PL9nIgDADOJUINALcSYQQAXAuEHgDQmvBHwqVLe1MJvLkVCB6HXbLCJzLNGaFGtuVQCBB0PhIGibC+M1yoRcC6Di7IRliHoIJwhHUIKkhHAK5c8GIACxdGuXDjgnwRQMsExSKAiQmNRpiZ0GsEMEEFoE2FoBOmVPA6YUmFRifMB0In21Op0G8bVrY3HwuTcGOUC6dE2Bb4NRQK0kwwwYT/JfycN/1QKrgQE9PvGbRTCHfE5OhxNyPER6rJUSInRMeRSIj/SrJCTYWgEPYhYiEaIi+MVAgKwVNhHy0vOC40CqGnglcIIxWcQmi4MMiFmgu9XPBcGIuFRir47pUJXSddRUDpm9VwAc8l8N+o+Avi9Pj2YO1ju3WIH3HYLyPeK8uyLMuynrJvpv50Hre/CZ4AAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/armadillo.png":
    /*!******************************!*\
      !*** ./assets/armadillo.png ***!
      \******************************/

    /***/
    function assetsArmadilloPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAKHSURBVGje7ZjNbqswEIVbXXXf8LMv5PIAjmBfp/K+gOf9X6UUg2OPx8Ymq0o+m0Si/Tg+M5iJX16ysrKysv6IXi8etS3zXXqPIJQdADRPEHqA5wgdPEnYAOcJ/QaAccmj/VUioQCDINS3O0shCJOgv1/jCQOQBPiKJZTgIZiIIMGwAJORySIeRTAtYAKwGEIdIkwxBBEi6HUECPietU2Qx4TB/g9M2JMIEESYMB96QMt2COyQgE3rp9S2ECB0eNldaj8gADQd2Q5+QukQRGJXVw6BaoYQoQ4SFgvdfEDAQQK3LQz71hlPmC0LvV6KQ1i20ytVCphMC/0jTkxYL0kWJvDeyBMRqv1SGSDIwqypTfinF12AX9Iqqk1409duECXm9WDcJ6jRyWGANEmHUCYSlmXgaqaaGB1CqonJ7clUE0RXJxIa98lKNMFdQqKJmXi600xMBCHNhKR2GJGEIAhFWhAfz+ZAEdZF3LvzhEK9FaPz/KY7ihObdTRBbFN0fZZQ7nP4aQ/VPh2Is4Stls1/z8bqzGoOQYR3xWNCsIg8hlAkWFB//IkIoRrOmFBRPUnWcCBz3FoGE6gg5w4NXxYBP91kgHSOW9MhAhWkLOkcVeWnIEG5Hys6R1V5vNM+SiHbvT9ZTeeoisl9hLte57x/OFpvwDxv/6/HYNxcPDmuMUj81uvM3imMkYrIcdvMSII0Wo6rj9GzCI4JwnSs1qn6htGVAGeGsSp/a9fpdPsgLcw0gV8ipHdDisBiCIKeJ1/pJ8h7tsJpwhgNoObq4ImL1k0YGwZBiLu/blyXcBRDgX7uIQJdevJMQbK40yRXVcL5Q6iVrpfzhN8uv3rPgrKysrKysrIi9AOTm3lzorBBtQAAAABJRU5ErkJggg==";
      /***/
    },

    /***/
    "./assets/auroch.png":
    /*!***************************!*\
      !*** ./assets/auroch.png ***!
      \***************************/

    /***/
    function assetsAurochPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAEC/gDwUuiYAAAJsSURBVGje7dhRcqQgEAbgXKERDmBlOYCpeAC3hgOg/Pe/yj7oKFGgG82kKlv2Y2rmC9JNN+Pb2x133HHHbwh6RyBJqB4dpQQFoJMIFpiSQgPIFtEDGFKCkQoA0OUESAWfEuxlwQkF/WphEArhNUJ/WYBQMN8jTFnBCwVcEWxZEBwMVxYmWVEX9gGtKJmFeuB7jEG5JvmN6DmBe4xm/pTPdhhglCwhLSx6uSzXD6UEDZ748/xMm5wXkEe62y/FJoqQFoxcSM8s0nKhTQtUsQ0ZwUoFnxOU/CEywrPguBgpKzTiJeQEWUmMVBCUdAlZgd4l1VQU+Of4IEbgiAUoCdsJTsVfEgil0txaYElQXCJZwbKZZATFVxMjWEE5FQWuKkdWYHtEywj8wRgZQdCmWrp6NsfyGhwAhFyDjUZaficfmB650+W1QxgE5yJ7PuNr2suFzPwbflKYJ+jn+jCPeZBQpTCtozgsg6RCoPl7tAp6+UOdsK1hmtdQJbiv+/DZ75MpE0rlwAqGS+YPCNGVartT0DnBN+eE7VI2rE0nnBOmLS+VgttamkklUy50255UCiZqzH0imWIhRBOgUmiilTeJZPKCjv6vOiWoZy63IVIpUFwC5pTQR2uwx2QKBLfOqWQ5CAS7F4ZawVwWmr1AtYK+LKidMFULtBNCvdADCBpeo7M4vhIQCA7AqOA1BnMsB4lgAQSC12gtjm9XBIIBMJHzeiJ3LAeJ0ABAq73u6OsvC7Gg17tjkygHiaCefVL1iXKQCMu7r0Gn+otMcNnJLxXs8WdqpRDf0o8v/CRCvIjunLDtxAeJhDvuuOP/in/ityNMHXEf0AAAAABJRU5ErkJggg==";
      /***/
    },

    /***/
    "./assets/axolotl.png":
    /*!****************************!*\
      !*** ./assets/axolotl.png ***!
      \****************************/

    /***/
    function assetsAxolotlPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAACC/cDDvEN+Az0BQn2CPr8pKUQEAAAV+SURBVHja7VrbloQoDFzuBCRS//+z++C1pxVB6bMPax5nbClzrST8888rr7zyyiuvvLIX0UOkAnTh/78GYCwA+d8BcB4Aif8OgAIQHNn4KwBmoKQCZgkqUXS7f2sAIIvwCw1IHteTP8SnYQYh7fQX63oDcEPyKEkeFgMAsKavD0idcS1eu7ieL2U3AI4VKsXOBlAK8J0AOLK4I8H0AXD3eO7kA+nW8fCkTRcAEffF9QDgMgCrRh1nn45V4QAgy15h+KVKSTU2cD+oBS5ZAEFRjWMG1x9AbosD1x1AY0SmHxQjFy/qwYfo7gBiatLBaUG6DSA3ZgL1E0JiwmMjPAKwJYEKc5ywkhoAw/n5ngIAH2WFCj646dAC4KyYy2gEzW+uMcIuIbvQAqBQSoSFj6ISwC4ZDGgCMJwD4OmzJNpUMLYBSJfuOFQBGNfnvWoCULLB8kVV2citeBsB0BUA35YLVBuAUCC1c0KqZWcrt0otABTAZQDVbDEuL6QWAIQLFci2shwBNCUiRnnGIKi+KLq5YzPVAIwR5qK/lA1FkaeQtUJwrQaCEbY8ZWjpF+QUMVmwqgVA1iSU5iwt/QLN9mJGtQYk7AAA+QxAAyfwbpoZeF7dusIJE2zYQuiBBwJxZlJ5M2kJwPip4uP+wjScn7eisTj1WAKwmEkdMYq1sKMlBp39fJdGCYCdYa5eZp5FwLAVrfnNztoSgLw43qKC72EXtxkg/qFnGbkEQC8ZM54xW2PbDOA/FaABLgGQ65OLCuxnMnD2ngFmBRgLuGIYqqWfMMftRcpEsSBEOezK0PBZlV0AcjkP8AqWLnu88x5ummfKnb7i6r/DRSKy69PLl9gDcn4ibjfG8OrrI3hSRRkArQ6zxvuwn9WqCyrmFc1jW7nRtnGzKpcBkHF2Dr5hjfg5Ms1Y3ZsHLffEOQoXZ//1whQzofTMs/+kPO4HXtyQ/wBAbR8ATyHOJo3sZdEEhDFPmtoFnBbs0SyePzr1BABjgr7wgQA/5+Dt9z7gmVg37RFygLpyQrP9JqGXxMkdvIWVl3yAtjFXLwS8JXBdQUjClsjGHsf7uFUEVcOI9mglPT4/7DLKlGAuKZneEer8XANpM2Ws5IR5HbRRDxuoP5TgGsBWxNFTVD0rNn1P/sNwa3vDzmJN05yQf3d+DQCSxwgsxVguC55jPBqrWyMM1wPQCKM6eovJusjLc8z6sHMYk195ReWA4jCle8BsQXJQdDxgjnsnOzz2AS+EAmQhQ4/zAwfda5sPCCGMP4pjp03JQ2l+4Btids3TckcHWf2iOx73txhOVwfV4/qTgVdhRLjkGokuANTJJixdDae/o6ATAFiWblBlLurcQaagWwCoXx7kWwCKoyj79zND5eKiZWdki7XtI+P6qMus6BaAsbybdXr56sxle/FNAOV5aJBCuMjE0U17/trtWcParsyKLS0vZtuyP2y5wHDRkdmkY+SrpjU8WFzGvlTkxua0AzManq1uU9ccdGd3TL3Pb15e8wOOfnirsHl7bm6PB5TstL6/d6HL8tP7A5JTQDLrFZ6248kJERUUxXsAzHp7UkUhhNNNY6LA0/FLrXCNAORndlODEEIYqnQGpaXYHb/Uq3oAUR10PMtlMsqqIJl40vj3WM/XdkaHlc2TabvdfGQxb2oAHG5kkmueWLt0VhYqp2Q1N4Kurzh/r1AuASgAQX9EvnW3AMj9O7LOlVMyVnpuztf703zzlveizGwnCseZKsOQAfghzlzXi7vipzcEN+4v+F0DGKaYUUDQDxQwDfwGC7CQaescrwFwihMbspKeKEA4AJEnUiZ1bqwFCd4IKl8TvxIGouA/+89aAGNyQtCj84WINgoRczWAV1555ZVXXvk/yr8vE3pHmVRFsAAAAABJRU5ErkJggg==";
      /***/
    },

    /***/
    "./assets/badger.png":
    /*!***************************!*\
      !*** ./assets/badger.png ***!
      \***************************/

    /***/
    function assetsBadgerPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAALDSURBVGje7ZhdlpwgEIUnyQou4gLMNAtwHBZg57CAVmr/W8mDrRSKUJjHWI8e/eRWXYqfj4877rjjjjv+s/iBOD4tEdH8tXsMKaGx9A7fXyI0xOJ5gaCJThEiQkO7GMWEYRgAwOwJMwA0w9AVCMuv+4MIohFQlojoT5awjh2A2xE6wK6jOSf8XKt3lDEDaNesnhN+vV+ZjrUYWXbnLMH3aNwIAAcRAA1Q3yVCB0B1wKY66AK6pUp5Qih6ywlTeF4i9GlPMT9ZemWqGb16SMP6OE+Y+M92aViH1mcIlr9rdpbennYZQstlMEe8AsGRL7jap1IZ8vsgmrIzy/FMJBLZEFGfJWiuOUwurswX+oNjmm2iFERjgaBZ6U2iFNYXe9Rj0TtwX78ADEs2dSfsk45GVs4XoLkUCYHoxcrZAy2fdHnC70BQCcJnmWCfmwowO7xVPKhMcPRcMwluh6Ff7FAmcAe6naEUCQl+byluEBFhm582NpQmMcGnCU5OWAdhIoKmCoKP2vXM8yqpZhhERFAkJFi2PkQEU0dYPNHyLslaRZ5g2FecoNl48oSW/YsTbC2BupigeN/PExr2KiNovoDmCeq4aXmxntkLepQLMhgh6vsFgg3jDa5uor5fILRh0xH6g4l2IgXC1l+/vrf1Yoh3IqVeTZnoRARzDvCy9UKfE0bhiuMKIsqEUxmzdNVrCiIE6+aZDPnK26YBk5yg8iIkq7/LmEFG0FkREoLKmEG4hzE5ESKCDtPSHnfGEgLYj93hgCAimFBAvd9TVp2aw3jGWsIy9jlsI+rP/m1MmOoJKpjI7kRIbzAcH4O/cgeieSanKwTFq9lduskxwVH+2l2QXq6SbOzoGgKSR94qQuqUVEdoUvdAVQS+lbhIMIfLh1qCSouoICwyPP6BoI+3epUEPI6lrCS873/EhDvuuOOOO+44ib9ci0H+lvoC1QAAAABJRU5ErkJggg==";
      /***/
    },

    /***/
    "./assets/bat.png":
    /*!************************!*\
      !*** ./assets/bat.png ***!
      \************************/

    /***/
    function assetsBatPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAEC/gDwUuiYAAAJ2SURBVGje7dfNbpwwEAfwpGruHT7uJSs/AKl8Lwk8AIb/+79KDxjsscesLbU9eaRI2bX3x9hYMPPyUqNGjRo1atQojVdiMVAcwXc/boXHKgjLlC88MAqCwpQrtOBzbfTAkCc04FM9eMsTNAABoA6AyREeuBG85SWFBpfQ8BvZAf46ksLihP7cjXa6BHw8E1p4wspOwiFcm5wStC9s58J8wdwLNgUr2IOlmHAmkRC0P6s/9q2xd+DUzZ3Q2EnHT+whbN1HeLdDFlQomCMvJti1icKVAtbzJwO1J7iAJSEK7SUYdtFD0NfHISlcV8EuCOAZSoJbxHE7udC5wS0ltJ4wRULvjQ4JYQFPtAdmAPMhhKOS4E3BTkQ9DCkYeybDUUHwFwEQUY/V/k1sG45lCIJic8bjVGtspDEJo4Kg2RwT7GQ0GgsNECTqC3yJ2CShC4SRCSoYlYQe4WU8IUwQkyAs4aTRE8IUsAqCDidtTvgMx2AEIZoEDez0ixYg0rHHQgcx3jHJA7HQyhM1dnlgiIQeZTFFgioUxkhYCoU1EnShYCKhEMD+94VvpcIWCt9LBVThXwlvxcLv58L2df43z4Lw8+kqPq/31EREX+X74Iqv0RXLJcLHVdttrNjNFnbXU5zNSqOLhMHV6QPxgjlPcG2E35ToW4E/H1ybtex+o5X/hCFR6PIFIwtsGfvts3pMCOr2WW2Ffe5mv9NjQrvN77NOCeo8ykGbaqKO7ZF44/RB+ueBGKTmV3zrBd3kbWjx3Z3qdCnV/UoVSG4KRFqqQGjJToGoFesotWUD1GCUqsH8RRDpQapIxwJBxRVpjRo1atSoUaPG/4s/rlXskknqYaUAAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/beaver.png":
    /*!***************************!*\
      !*** ./assets/beaver.png ***!
      \***************************/

    /***/
    function assetsBeaverPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAACCAr78Qn89gMFCPQO/fcCsi9/cAAAMASURBVHja7ZrZcuQgDEUjVhuzmP//2TykEy8NSGA7M1XRfexSzAnmSgLz8cFisVgsFovFYrH+Q0FBQiqtpABUrcBxAGPzl6xpD98OHAYwU/7W1CRAAocBdN6kWwBI4CjAnPea6+NjgaMA0+G5Ux0ACxwFyEe9fnWL9FprraQMphX4BICZVTz8lvzyiwBB5YKSFL8EoDNRTwFkBmAABmAABvjbAEk2a1H09lkABQCyPn4yAOFRANd+JeuhM30CQPwLALcbwQLA2n4F7jhd1wHcofvT0rYWYZJ+C4/uDgCTCuMoWZB/i4ziOoCZCuPLysYsngNP+7MRgOKEB8LOrEQwAOCLb5o8A6cdYj/AXMl35e1/kdZeAQi1xW6LRxNobC+Ai1W7BdIK2GWnEYCiAeub/+p0bfv0PoCiARub/4QH9wE0M15O5xOYtVWk3QCAR7oNiVvwjaAHYMbanZMVPSW6A8DhDZclWPCUEukALhJavkCw4JGADNA2QMGKgRZOBiCegcwUC+7fGRUg0MbfrLjS4h0VwBEBvq1o4s0A4PaNTkStWLdg3D/IjbVkFrWiIKerEYAVt6Ik14wBACwhKgzg0Jv3A1QTUtrlghdAbBeiIQARqzP/QtsAbC197frSXoBqQtQA4NIBQNbz4UbQC6CbGcjYDSAFaCwGOwhgsUoo/KQBYFUzsmD9EMCKVtfW95qiGbsAEAPG5dQRKULp7gHAOwK9d7hEwr/M2AEgIrkUAQAYWuWkA5A6komeMHs7ImJHYmgVa8vaZADf2xGRGgIPdzcktnSK1JC4vSX78QAtPpBfwarPii0fFC2r1PkZ64X7A7X/0QsAmEvjx1vvD7x9l8a1wM0AInaN7+FuAFh6xq984r8EQMl22D2PawDU/U/1EO0yAHUO6vdcrgKUDfdWpuv3bC4DgJt6ivQDAGCQOpUCPAsA4BqlOsr2PatbAKByhSTnJJF7XncBAIj1bS1Eu+AX3W4DAAAx+58SOSkZKH9DBmCxWCwWi8VisVisv6VPfRMX4lwxKWMAAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/buffalo.png":
    /*!****************************!*\
      !*** ./assets/buffalo.png ***!
      \****************************/

    /***/
    function assetsBuffaloPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAIzSURBVGje7dhNjqMwFATgPkKXwfuBiAOw4ABE8n74qftfZRYBgoEXP2Op1dK4VpFQPtmvDCL5+srJycnJycn54WBJ3QKmgjbfJ8Fwbg3n1+e6buMFS84kWwCGJOtooSFJsgfgSJLzI1J4AZyAcvnIsdILRe22r9UNtzzVwu5LfuStaAV5K3qBfLapwnWzccLVOHaCYRsUyLmSBcu+oCJjKwtTSVWeokBHZR6SoM97K3cFskoWVsJr8xaxE4pYYW6PZ9LFEuNR6GIF9gchehucj3fWrUV4wq1F+Hf36yGgnejgyP5iDRO0R2soyckXSpIcoD1aIxzpCzZuDSMsWXlCEzeHEQXZe0JkERPgOKScqAFoOO6FMl6wvmDvCPNeaOKFkky5uwfAeEL0XXESTLJgk4UmWXDJAn/BGtLnsN4WY13pnrknAY5k/Vhfje+c6uL9omWUQkf+Of862L8bhwRH/hUETTE9QFnQFFN9FGyyUCYLRid8mCR0woc2NaOsgNJ/0nrpVAJcLwpWJ1z9UtOPMiAU3um9vBIQdue6F66EhOaw2vOQQ8J7lBCuhITtXM9HwSiFrYzx9ONMKUCo4j2ioOCEKrZBBIVOqGLbYBsSrFDFdqYQEoxQxbbBoFBIVawbDAqQqljPSlhohCrWDYaFTqhiXV5YKIUq1uWFBSNVsTQdFiBVseAKwQlVLE0rhEaoYsEVgpWqePWkEAppkIDZJvRRQCNtAnDrpe/8z25OTs5/kH9FLOvnZmeyrQAAAABJRU5ErkJggg==";
      /***/
    },

    /***/
    "./assets/camel.png":
    /*!**************************!*\
      !*** ./assets/camel.png ***!
      \**************************/

    /***/
    function assetsCamelPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAEC/gDwUuiYAAAKLSURBVGje7dlLcpwwEAZgO+UDBAH7qFIcgGTYW/boACD6/lcJ4ikGdautXsSL6ZVrCn0l+m80Nfjl5VnP+pb1WuzVuIJZPxHBglSA/y9U2YK6L/UJY6bQwVaZQglSwa6ru2xhWn2bFFPmCm+ToBupME2j4C7e/EJRJyehrUTCj2ldI0tTF0o4D/6pFgpWOpPFb7HgS8WFu//0xhKqqGCxrUWEMnbpFjIMDKGOCNXeHzBpoYkIx8kDLi3YqxBs4bKJiBBpWRMKQ44Ap0oJ1VWozoL5iqA+p790fRb6hFAHgpozcN1ZGBNCE1zWQKxcQgjGt4R4JYTuEBpEMLRw3KxCAGhJIThpsZs4h0EJ2E2cw7gI9XGVxQTHFTpMAFKwh4ACpzAuQscRWkoATvWEoFjCSAgVSwCNCyVPcLhQ84Sgl4+CZQpOLBybeBS4ADgdF3hhzjXEBWaYc+mowAwz3MSDUHOX/903kSsMdpvtXGH0PW8lAvgz0IkEvW0iO81220S20M/HmWSq5+8TJ3my/GL7J/+EgeOYyjsnfRlEwL/qIq2MC+xNDJjA7oRDBfZM4ALXMITAm6tWLPRiYRQLIBe0WDBioRcLo1hwYgHkgkkJtztWYSujggo2Ga1muWBIPZu4UAZhEALxjnM7yBIC9QaiO1qZKayNaGmhJ4TqCCNTCH5a5wp2bzYhGEpY89T5gtrDIARNCWuePSmQwJrnIBD2ucWF1Iv7ba5xIfVaza6tzBfqda5xoU8Iam1lvrDkORJCmxKWPAnBpIRlsLVAWPJscUEnhTnPHheSwJLnKBHmPB0qcN70znn+kghznu+YMDCEEhUUZ6C2RkT7UFT3DwZQ+H89nSfqWc/6NvUPwbor78tEf3oAAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/capybara.png":
    /*!*****************************!*\
      !*** ./assets/capybara.png ***!
      \*****************************/

    /***/
    function assetsCapybaraPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIC/QDbf7tYAAAIiSURBVGje7ZjZbcMwEETTgkS6AAtgATbCAoSABeiY/lvJR2Tz3uWBAEHA+Taexd3hHvz4GBoaGvr7mjzN2CdWJEEDWxdhBnB0EQQAdBFug2AJzw7CDABgTZUnSFw6Wwn6RcCjjWBgtbYQhAPAsdYTJDzt9QTtE/BZSzAIda8jiAhAhCJFkEhoryHoFCFrrARBIa1HKeEnCM9liUhrGUHaTw4RRxnB5AnpUESE68epU6RDERIESN15gqEJCWOFBDDaOYLkCPEdCwiCJUShCAg3nhCGop4QGisgqAJCYKwWgm+sJoJ3xyLCsVSGIiKcU8l37EQutiKCY6yIcEhdFIp7uydDY1XfiygUtXczDkVlfUgYq7JGJUKRq5MoviCZWo1yd2f6RcVH5HpWodJ9832Ooygdqd79BQBYVllkq/QMsyz39CiTOAa545iSY5AEVZINklB0v3oJYDc13pbspsbWKnZD4bRRBNNNUN2EsnL5q4S5myC6CVcyd91MuFLxuPUSmEJDZfM9KphGwvXXG5MUgjDbLq/bbpaw845oI9xsY5NtFUY5/dk0VTkF+wQimyqtN6johmovvelV5Lt3ljD7w2t+NM0ShD+7mqrOa5O5TZkHCWcEyRJUsM+Y8gnEif7rEFLVTEFu6E6m7J/US450c6mpNSNHmN1cVk2kbip22gznxBI2krAzL1rKNaShVhSCYA0ZLS3HsuZ2nKGhoaGh/6xvk0DROAm1K88AAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/chameleon.png":
    /*!******************************!*\
      !*** ./assets/chameleon.png ***!
      \******************************/

    /***/
    function assetsChameleonPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAL7SURBVGje7ZlbltsgDIanPe0CsJ0F0NQLYJwsIMxhAQa0/610YjtcbEDInL5Fj7l8+SV0w/n4eNvb3vaf7AdL2R9WNozQK9NE6G4AtoVwhaedJ/QK2gg3gCbCFaCJ0N+hjXADaCJcAdoIf6GR0O0B5Iwa9wRyVn//6KRCgiYSegAee/IgEi6L6jAdOJEwwvzdES71YTgQ7t8EYEO9E0lCqAGVsCcMa+zdkVpOJHRbBqlqH/YEtQqPEnuaPusJh5Jw9jVNooLwE4pmBUr4BYhJjPD7+aEiQlcQBFnF3guEAAKNJEaw2GnaAYumxqsbM4522jtRRKLbK5qIBGGgiUjNLEwETsBEPPC5eafkRJLQUWKZnv5jmTDjhI7gRmaHGevdOEd44AQkJUxrHKKkShPQChUYAavP8DzTBKwywkCcyskoEElCjxNEmTDghLlMwJslGN5K8JvFaYI7jvOEV79sIGzncabLxW2ihbAWeRPBNhOWSLQRdDMBioRn5l+nxVQplnmCr76+6EaewFP95msnyJYILFHr8vVAIJgcWYJJSHjtgp0KApElzEcJfpn0CJ0mRGNJpbbRztd4liD2EuR2o18XdDcW84T9j0l/oZbh6zxHsLsRLEM5j+ANkSOYWIKMT4B73JwjzJEEudsI9OZqiSBCCfIwyLgrvyyBBxJk0DwndlVrJDZJJkcIJMggL8QWD+MCkSMY/yUZxFS7FHEVmyNol0wyzCzu5PAyYVqPQoWpPAY7+WVxp0RImQpqpT9FiJrOki9EQh+tsmcJpokw7AjilaNzLeEStq3uSehbCMsjp+EEQfvcsG7JEBSC8bmhXW2SCNY78XAdmFEI4AjWtQvLKPng+reSLgyaRtDscIeZGakuLDvMc8FItRncr8by7E7ZPVqFe2R/yB6GGyMK2WGyodwQfvYwAsHN8Gm64btc0kbKPpm0jrLTFk6jcq8uxrJqt6+MhCATOlV9x6nyw7AThPABbvmuV6HCVP+ndrBp+X7m6cHb3rbZP1AqE63tpeG6AAAAAElFTkSuQmCC";
      /***/
    },

    /***/
    "./assets/cheetah.png":
    /*!****************************!*\
      !*** ./assets/cheetah.png ***!
      \****************************/

    /***/
    function assetsCheetahPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAMFSURBVGje7ZhRspwgEEXfFhplAZDnAkiNC3ASFiBy97+VfKhjg6CIlUo+7I9Xb4qZY9N9+4p+fT3xxBNP/N0gIiLSFIYwdBh7AqDYemODj0WEDp5dtUcNAeOWAgCqIPjPsqwhSACfbQS4KwT10wLwPwiAu0xoAXjM8a4iCIQx/gMCRYThNkH9BwS6TugAYGgBDPIGQYn1Ty1hajFh6M8FlSUAMBaoI8gZ4Km/SZhmdY71BGf0TQIUagntnIJV+F0gyRRhHs6xUxDcri4TXKtcWyCoFKFZ5EBkz10ySaC1F98lcjggLJwqgr0y3ElCd8VgzgnTbYKvIcjA5cxtwnCbMFUQxCWzPiY4jYozDCcY6k8dIkVoWCflqbBTBGJDIU/7eUgAUX/az2PCL3HezyShC9vpbxOOC1FEGC8TZERwtwmoIgyi0KiShBaAosL5TBIEgKEp7GeW4NeGeJvop9banBE2MTQ7Yc/r7wMChZ2MT1MiaHIJIToTNqFOCnPg/exDF04TbFyH6NHLK2q+lx6lCXwwvA372a8fXnMS54R4Prf/X4C/QBi2RkxssypDkHvCtC0Zpv6pPAf/WfK84j5JeCEVav3RFDTWZM+Ty7PizqgChQtAJQgWwcE6MqrQLIDx4GnRRPVYV/mcdpj2hJ5dU+76KULL6+GSz/5pwhQSWgxEMkWwOYJfpkKtVxozBL7vfi/skNACB4RhcQLX8X5+2tphJBKHBGjLDGLdxkeTmHeBfB1Y7g3bRr/sRgAqU4fUjbvbhN0u2ppJJQTHNLIUAu/VG471wAmSKaLng5LUpMzn4AKrNrm5kIk6WD5cry2hBhhOCRi2yzrmH24xApN+mxQl0UUnEaG1Xqew4F3Q0VkGcHmC684JLTBmCZ4am/Vr5vYmQWjWL/c7wrhLIb7jCK211uuXZc6uWQrRXa8JLyfzd75PU01IkGHRuuNCvpbCcEL4pCqyt04iIvoG5he6WUIi3nqLDXmFkN7VDYLbn+XaGkCoB3vh9yp1pn3iiSeeeCIXfwB4uELis2OycQAAAABJRU5ErkJggg==";
      /***/
    },

    /***/
    "./assets/chinchilla.png":
    /*!*******************************!*\
      !*** ./assets/chinchilla.png ***!
      \*******************************/

    /***/
    function assetsChinchillaPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIC/QDbf7tYAAAJXSURBVGje7dhRcqQgEAbg7N4AhANorQdwKx6ApDyA6H//q+yDOuBINy1WbeWBfkqlKl9+oBlgPj5q1apVq9Z/qV8qKj3Cq1xxghkBrE+ECQDgHggjAGAuFzQAIDsTjNBsAsoF+wOE56N4PpNqE9YHwuN+6LcMbbEw4eEojpUAhkJhfAlLmRAi5EJQwhgJS4kwAdIQacGcAD5EWjhH4EMkBX38a0lPJIV9GuewIu6ecPxdJKz3hBHvo+BCJIT3acyEuAhdh2Q5qfAbRKVCfHXuhpAI8Q0s7oZwCWG2317mYRSH2I/Vi6DFIfaGv64mKSAxCGC9CvQwzvvrOE6uwkQKi1AwyIfQfzhBfWdDGGDgBPUFwFsmhAU8K5zO/lQIC+AQZsGJcw1hAbRZQTMzYQEMWcEwy2EAzJrsyXPTpkOMgN+F9q6whZiAxeaEhuuJBsAuOFLoqbZq92neBfLkNfwmjyJRQmZ/vTawF53+iWG8xjhTQkMDmOOIAyVYYKEEH++alhJ6YOY+7Wz4mb7DOG4ibJhWch5WuiOGIKz0TUwzPTUHYWZvxRPTUzYMSPBCSS1G9HoRvFAYwYteKEmhD831THCiN06ypaJNViaYaKNzQk+Oogm7tFDoo0/d/Ns/IZiwErxAtZSf4mtRibCGdsoIGmwNecGwwCJ48ypJBF7oBRF4YRJE4IVGEIEXlCBCRujZw1MikFcAJxVUdgxZIb0an0ouGOrgFAq668YcwArpefROLvT5IRQIn+qZ4Ft1S3hfyr+t/BuM61J2XSt8NdeqVatWrR9c/wCVkDxzGnSY8AAAAABJRU5ErkJggg==";
      /***/
    },

    /***/
    "./assets/chipmunk.png":
    /*!*****************************!*\
      !*** ./assets/chipmunk.png ***!
      \*****************************/

    /***/
    function assetsChipmunkPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAL9AgBGoc7kAAAKESURBVGje7djbsaQgEAbgs1WbAF4CsGYIgKkxAFwIQPTPP5V9GHG8AN3C027Zb2c89RVC0y38/Nxxxx13/CPxS6wh0Yl4MIQKcGVCD0AVCRaALh5DkfAuHYMFyoQeAJKLQQgVluhyBekFlynUADmItNB/hSlLqAHguRBZQg/AifYjqBxBAphEg2RKpIQKW2HMED5LqfpsocIuMgR5FswafxhCjaPw3v45K1Loj8Jw+EFTwuH/4Y4/LBkSFX6DDEcKA0VMhDALchSKGMMLwFxRg6BmcmyoQcQFexJmY4yxxzSLC5/h6/a0fM2wW45EVr8AuG2ZglvysLYblOwXu0HPaxv6lk9KqAIZIITwRQMTKRyX4uGJl58I8i1keD/5dghFCn14P629RJPCKSf9gix2Rwr1KQ/n3ZOR/n6QUcIyhf68G5YFaQFgpoXQ5uy+r8EQglVCr084gg0VOOWfOIbQRmtkCwAMQQZry8wXYmXusWyanHxYF4QnJCqt5gky0XHeLAHAJFPlmiOovkiQmERVJDRPFdjhm8lgZFQksX1m8YS2WKiLhURWjEyhKhYSu4MrRAehuUJ0EIItNMWCb7WnUsUXwsR0RRCNDBWqK4IQ7+XL3m4axzXBJ/l3MCJPsNuanxZqA2dMYkpHQlhzwJjNWXHY98+UsN/TT6PPC8I66+3yZzi3voRQkYcDdGnB0oK6dNaL9G/y2558iQunxdDOTguSBKaL583wPBadN50oFbpSwYlSoSsVZlEqqFLhwbgDYU1jdk46xRFS+0Kz7oIqHpBVHzT3PsrScyBy6qS5fi+3S0Rz7WZvPxO7rsO9n/Q9K9D52De9Bm5ziXdNuOOOO/6j+AsX0lTQhRg5hgAAAABJRU5ErkJggg==";
      /***/
    },

    /***/
    "./assets/chupacabra.png":
    /*!*******************************!*\
      !*** ./assets/chupacabra.png ***!
      \*******************************/

    /***/
    function assetsChupacabraPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIC/QDbf7tYAAAIhSURBVGje7dhRkqMgEAbguUKDOYDOeABTwwGsXQ8g+N//KvsQBTRoNzK1tbXF/5aU+WxoICYfHzU1NTU1NdlRLTFR7bXQIyZUZwDX7d6C5QQXLu6xxgbD8AKW9dpfiPK9vjlBIGAgIqIeu1giItIQCRh3gGs80UAouN0QLPmBGKmAReFdQDtBLMCkBIcMASkBmcJiSoX2AcBpwCkAy3RTsM36atB3Bd8HlSUsOi38FguzSgpOvqJmBcCao2BfS10s7Ds5P0oFZ0qF14s7gioV0BcL+FEBhFIhc1UXCbsj6p6A/0V4Hr+zPjMFR4eOtmTyBEuHEzp8D/61Gvw82P7mPPjMj9Jujk2h4IhMmbAQTWVC+3ryKRCIjguDE6bE89dBna+FQ++G7QHutvDsuq77zBI0v7uZ52pVLDS8QNcClQvsMWc5YeKEhRPYZgycwDZj5ATar6YtfbRTOGGKt0RIH7Y7J+hrYeCFJgyY1GsIbbTFR16I7zb5cuLKWEGHI7L3H4tYXoiGsR2yu6Hxgu/G4gdPj9AJibDd0Pk7tyYcvBLBF/HchC5MjUzwRbzvCaFwtkHXH/USoTnb2GLhpIgxQ9AXJcgEMsmzJUfQp/MoFRJFDJmCPptHsfBWxEK5gj4rQSwcigh/MskFnZ7HDGFXRFRChqCT85gjxEWM94QpWUKO0CRLyBH8THzTXWH9c+1J9wVSPewX5Qg1NTU1Nf9g/gCB2vn74kClTQAAAABJRU5ErkJggg==";
      /***/
    },

    /***/
    "./assets/cormorant.png":
    /*!******************************!*\
      !*** ./assets/cormorant.png ***!
      \******************************/

    /***/
    function assetsCormorantPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAJ/SURBVGje7ZjdsaMwDIVvC8ZQgJOlAJi4ACbrAiCc/lvZh+SCY0tCxo+L3pLJfJH1cyT75+eyyy677P8wI9ttiD+dIDR4VRMw1RFMAIY6QgusdQQTgKcxPfA8S2gBuAAAy0mCCfi16SSh3QgrQ7hRdk+deFoAjiTsf/Flr8SJwfTATBJ6mhAXUgBgTA+8SAIDiKugBTAZAEsRIXFi7VlC4AhRJLrPVzTBK45hRYJhnYg66vM3dC6M5RAuc4IhmOY4lB8nJq6qmaKaM4Jj++JBEpYvqQIAobPowtwA4y9S6M3AJcPe4mMJBDIhLjnfIOpDQ4ayT+IiKgyRkNcjza6sUXlC1qzKD1Suh2hOodVBAjw188KGA8CxVjcs4K6dWWSHrDdXMPUeYnuoJk4vCY1uZgVeLpWEhlcq7eSt9iE7RnEcslguxYQuqwdXSGi5klYTLCW6Q9EmVtNZkk5MBQTPD2IloeOHoJLAqMSizwWnl+rOCoLUagijKNYKgqT4s0ZpRb1XEEZ55My1M+uQIJ9AQRiBOsKf9Od/ywjEwHT5qSSCJ0u4L/GB7uWxIA6eXuy/TycSLLPPNvpceGbW6QmWWWe9vqI8fTtp9QRLTzpb0BceAO7ZxaDXEyywujZbGrqC7vbrsEVjoGbgIcHuPq/kOqFROUOsDL5MJ4kbVlNE6IhbnikieGJ12o9RQqB3Gg3B5oGM8qnKhc8CGZWlimDzQO7xVRHeTjh6NdMRbBbIvSx1BOPTQEavDzqCTXbxqCyVBOPTQG5lqSXYNJBxknWbmOee5uazb4NbPmsI77KsInTVBFtNMKGa4KsJjeYNRLa39tUQHvzt4LLLLrvs2/4BYcIX9FEtOToAAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/coyote.png":
    /*!***************************!*\
      !*** ./assets/coyote.png ***!
      \***************************/

    /***/
    function assetsCoyotePng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAYAAADnoNlQAAADfklEQVR42u3dUXKdMAyFYZbmpXlnWpqbTEmGNLeJAdtIR79nzuSpdwh8tWwBN1trbSO5w0kgICAgICAgICAgICAgICAgICAgICAgIEMQvI+3n+Uttf0ddWMsG15mgtJeDC5PLgS1vR7MCCBoBgQQHEfhcgkj2A/EOiAYGIQRHHYIYMiM4AChd4BBEcGJ0vDfXcSh5/AZLnUwBBchtM5/A4goCPaDmzkoI0EQlMkQDALOEewHWIGQHMGN9cG3zuMPn1NA4G+L+HGxPlf2NyBYDygQ+EIwevqvnQvOCgJdBNb7+SCI2TE8NRt0Akt359Jrx3D21vDsgrKAIE7HcPaQBOG9WeQRghyICM0itxCYCdY2izwOA8FaBMUhggKChQgcQpBaHIZBsOhmUspb0NEQrJgNyoubTdINJGYCbi2HQ8CUn3xhuHQ9AAKfCOgDJO8TVHYCIPj2HsE/McpCkoXhQ+XCQAAC+bIggWBFEwkE/hHQRLr+n6eAIFlZeHGuKgiSlIUfzhEIMpSFX7bQIFAvCx09FBAol4XOJhoIVMvCiS4qCBTLwsm+CQgUIVx4fwIESmXhws00EAwaNWAZkEPAY+jb5be1QKBUFq7OYiAQKQs3SiIIVMrCHbggECgLN5+nAIFCWbi5OwKBQlm4CxYEAmUBBH4RLCkLAxplIIheFkAQA4E5LgUaCJrPr7JZVhZAsLn59pJHysKg3z0lAlMpCyC4fiKqSlkAwT0EEk8ijYKZDoGDxaSBwAECB9vKCoLnEFRHu4riZGucF4GD2cCcbI3TISgDnslzURZAcPFkOG00FRCsQ2BO7zsYCO4juDX1Nh9/VKOC4FkEXu49lAe2h7kQqL23AAJNBKdmAxCcPxk1yK1oA8EzCFwNEMxDUAI9lVRBMAFBsKeSQDABgUV7NA0E4xGEWQ+AAAQgmHVPPeL7CiAY3D9XQzBhHSOPoKogmLidTY/AvCPYL/7M49RGEPTtJVt8fAUEDptFbfHfb1BGYItX2SGHOoLe9qslNlDVEZRRvQbhUaQRnPycjLPBcQEKgqSzQQmHYMF+OeUsEAZB8ro9FUAkBMwAkwBEQsCYBAAEAABBhovf0y+JgqByPcdf/IhbRBaHHW3gduFV91DNon2rWMnXDPjuo+cREJ1wEggICAgICAgICAgICAgICAgICAgICAgICAgIyNf8Af2TGzAC1d25AAAAAElFTkSuQmCC";
      /***/
    },

    /***/
    "./assets/crow.png":
    /*!*************************!*\
      !*** ./assets/crow.png ***!
      \*************************/

    /***/
    function assetsCrowPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAADCAn7+PcBDf72BAIM+vUAXZf8wAAAJ/SURBVHja7ZpZdusgDECLQTaDwbD/zfYjTZvEwlgM9jvn6a7gBoQm5+uLYRiGYRiGYf4tRIZJKgCYl0l0gCygpUlPjNSXC8j0hnXXCqwmfaL0dQIeEkLQFwlomXDgGgFnUw55gcAK6QA/WkCr3bG/RaMaLLB8nr6dhFCdjqAsgDy9WQihO0VBScBvyJ3vBKweJJB5ersraIiCQ4HJ5OIeTK+HcChg02nUCAGdCKxDrkC+ciwA44tR4Qjc3QJG3yxQmY06CtQ9RYJA8VHCYAEoHsFyt0BNSSAIzOVstA0VkCfyYRwpEE8I0C+BILCeKQkwUOBcbVrGCZysztM4Adg1Rvt2mTwpUQRm5LSbexOKgEOqD7QWZorAhPzUuTUMSOP5RxSaXHKgZAOSwIbUX/RphEECCxKFqrFJJgl8BoERQvjG9oi2orFIL67aelSagEIyv7dNBjSBiI0jS8oOkP3XdBYLd2gxIAooLNh0aDAgCkQ067UYUDelBs16WYO1u4DEy69WtRMjVcDnGoBo6jok8rYca0EeVy1xhcIymSyApV77043HDUtKwXcVwFPv9vyZk5MKfjFvfp0E8Opj8W8XPwV81h0FchOSlchRP2cJs3YU0NnlXZBrtoXJxWLNR6vDESnA9rfXCuVLqhE4MyejW6RFdxIQoc4g2dn3EciHQXl6dbqDgJhsqifM0bcKtBk8ghVAuXoBMYXUAVUvIPTWw8DVCyDfkiqQLQL5NoRwB00CQnhlb7yCxyk4Ze4JwtdzWF++azx0QJ6h5RlmgZHDKQuwAAuwAAuwwAHSXrEpzROvWdXm2f57gVj7l5J+QVj5R0v+6y7DMAzDMAzDvPENFbLLU98o0AIAAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/dingo.png":
    /*!**************************!*\
      !*** ./assets/dingo.png ***!
      \**************************/

    /***/
    function assetsDingoPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAIOSURBVGje7dhLTsMwFAVQlsCLwwIS6BxXzbyh8pzYvvvfCgM3HycO8jUz5DdqkTi69ffJLy+1av3/kqaXk+q71xxBAS4NDMBnjvAG+LRggHumAJ0CFIDvHOECYEwJLSO4k2HIF/zJMOQLqYFQoITuKDScMB2FN06wR+HCCTgKIIUuOQyMMCWHgRFcchgYwafWEyU819S179/X9cQJo4j6CB+/dNhWpODkiqXeZeAFf8OmHoYX0lWFKlThT4Jr4n/tBlbQEmWxz0OKui92QsF9EQmez2Cv8Tg8LnVFVeEPwg2Ibr3JYOL6SQOYpTluAAvYkl/h1na4dBy27UuZ0G3aF/qMMktHF9qXlu7E1n4s/KF0d+u5mS1eUePczBYIXkyYz2H5Qgo2LIMwl7akl7Ohkw7D4OZzlxPaMBkGwFQiQNQ6DlpK5qKTG7wWUQaPZUIoIWwrpaPNxa0HLSIyuGhrcIIPR8MomzuUXJO+/wCAr97U074K5UL7m3DPEbYXzL78a5bwS4gxTzgP4SVTOA0x5gqnIXS2cBLCSbagziJkC9ueI+5HsgV1EiFfSIVwQgkqHYEQjiHC9UEIKhmBEfYhno0hI6hUBEqIQ8yPbJQQhehKhG2I5ZWOE5qopSsR1k2+PhSSQnuIwApziM1bJSu0+wi0EEJsn0tpod1F4AUxuxdbXlAXq2mhVq1atUL9AI8l9lXf4BgxAAAAAElFTkSuQmCC";
      /***/
    },

    /***/
    "./assets/dinosaur.png":
    /*!*****************************!*\
      !*** ./assets/dinosaur.png ***!
      \*****************************/

    /***/
    function assetsDinosaurPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAJ4SURBVGje7dhBcqQwDAXQHGGMYR8q4QDE+ABMFfsJtu5/lVlAjDES6NObLNAq1VW8tmTJpvP29sQTT/yeMFlUzjmjjD8MYCciiu1toJqIiCjcBpbnicabgF+fVy7hAHxSivYOUG/P63IogGpZ/EBERDMOrBvQL4WMOLAWsF//aFHgp4DrClRFyAGbNnDQb2QGVHQIDJiOQI8A3fF5zUYmgElAtZEJ4Bag2cgEeBb4RoC+CqZr7Q4ICPBdk5nGBswhA2JHjkKRyvhiEa9zSEDNA6QGDL8NlzlkreyWGLBmPB6qFsvhCFRYDsy9gA0UA3goBwUwokAD5cAANdRLDGChXuLeD6B50ACnM80BHslBBUQM+ITO1uthumiFA2DB+6EELHqssG8oyNFYAI0AyGVkgNB3wBVVADXFL3YdUVvED6mSI9CJbCkDAhigjDww6buRB7x+CTzAtsP8KhABwOoHggf4kYh6wOhnUgAm9RIEQP+2IQDCWEc1IL0xjVpAONmY37MCIB1tx3YUAEPas00CvHYJEtCJSxh1gHg8l3WUgFoEiiQkwMrAPgkJMCfALgkRmE6EoAH8CZCXQQSaM4D+vgpsgghY0gkicBynMHGVFIG0jzE9UZixPwd+tmH06SvLtILTAKmrw/pPsn28XwFzSiYYY4wrgX9XNWjTaK9VcxMEzNuObg2c/TaM7xfbOG5zEYDLNX1tzLoSBOps9Ks7wPKt+Y6AQJePbX0D8LtL4CYw79YDAvtbyN4C4v6IxABbHN8NBFjnhnwBlXMDAtTl/YG28jp95fGoB3xx9sNAU7xJVChQOefcV/bBhys/YYAnnnjiid8R/wF1Z1N9IIj7LQAAAABJRU5ErkJggg==";
      /***/
    },

    /***/
    "./assets/dolphin.png":
    /*!****************************!*\
      !*** ./assets/dolphin.png ***!
      \****************************/

    /***/
    function assetsDolphinPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIC/QDbf7tYAAAI6SURBVGje7dhBdoQgDADQtq8HqBr3HaYcYOaVfbWPA6iT+1+lCx0RRUjI646sOn3tHwxBAi8vJUqUKFEiGa9VNGp1HZU6/v6DKIDGOb4yhRrXGLOEDYB4IwmgDI5KqW7+tAVwoAi9+/v7pao0W/j1/mO6eh8pT+ED+yBkEqLA1KUFExVu6Xpo4kMg1KTmDeEoAHMIRyH+EANBsFHhQhDiaagIgkHE8XRGKcKc8JY8FVxhIgqP87p80ASMFHZHEzgVwRYmYT0EpoMvTGJhn8ut0CullEkKj1PhHWkxnQpvRGG3QHOEQfoUu8fYZvKXSnSUnReU0rSiiu7dljKfUQEoiYj3D5aQiLgwD2I0sUQkehg7z38fSURCgKWCanPaAaT6KLvUIOizt35KgLWK9cnSSPZydl0HOpzKpADuC3VwcaX7yX7thMGEUvlB7qu9xjRX2HR5uYLbDbtcAY7TyRTWtXbLFuAwnVzhOQiBAPvpZAvLICRCs3vR8YWlJiSCFQuNX5QZQuUXZY6gxUIrFmqxAF5Z5wiVEQtaLFix0IqFRizUiDh2AqGfLwPuuYLbuUbRW84RbMHsu6Hc/cI1dbl7lhsEU7DHK5Xcndft4TyhDpw1eEIbOGvwBB24W+IJJtCk84TQjURuJ+bafJbgbnmGNSMXluCmoluxgSVolz8QCjf388gStqekJkdYR/69rQ2OUHtHvaf3wxBa/45zAT85YzC4fc1XcEXE+w9vdT/vn8PnrBIlSpT4l/gDmbgOZCJFnFYAAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/duck.png":
    /*!*************************!*\
      !*** ./assets/duck.png ***!
      \*************************/

    /***/
    function assetsDuckPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAGuSURBVGje7dhtbgIhEAZgjyC7eABi+V9i9wCbhgO4C/e/Stda3S/mAyY2bcL73yfDDBjHw6Gmpqam5p9EzTn7GGNwisoREt7iPa5UeAA0AQjNE4jBFAl2FuJQIixKmGIKBLsSrgXCCoghX9BrAT9GUrAboc8W/EYYsoUNgDciJbRbIWYI3fypseO1EhTC8lq5EmHqXlci2OVFtCXCaW5DYQ2LMZi2qA+7q5AvWLGgxUK6iCxBfYiFxMtChNYIhSYGoTB17V0k3B6fTLBiIUoFLRa8VLi/AIngpcLPIxQIXio8vgfKBZ8lYKkCInS/KxxfI1ixcMoAxhcJbYYwiIUr53c1mj4teL7g0kLGhQC2A/4wAiBo/ihYWxI6CmhTY7fScXY9vJGQwG3EyNlYiTaAWzOzEQYWeI0IChZ4j2tABN4xDCZY5iFggTONHhU479Pggmb1ERPoXhpK0KwSMIEqwtCC5pSACvg4DEdoqLtACsg5RsUTwLu9+JuLEKB5OMUWGk8ApJAknMoR9jPd/GfJENR5BXxydt7dSS7z550qEW51XL5D7901NTU1NX84X2MIkYtmHKAWAAAAAElFTkSuQmCC";
      /***/
    },

    /***/
    "./assets/elephant.png":
    /*!*****************************!*\
      !*** ./assets/elephant.png ***!
      \*****************************/

    /***/
    function assetsElephantPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAADBAIIC/73CP369gz1CfEGiXxkoAAAMWSURBVHja7ZrZkuMgDEVbYMAsNuj/f3Ye3HHhhdWme2pG9zVFdCKEkES+vkgkEolEIpFIJBKJRCIdBWcxPkGvEmurAZiQChERlZxbKZiWiIiIxl7WVgK4BWNJ3mDemcNay9sB+NE8IqJklea5ua6dGgEE3slV2dd3S9XaBODxXj6yM3EhhJRaiDV2TVgSa+cGgJT9nSA4qw6/b4+0pH1EUQ2Qtr/9jtXefSIdAIDNrHWVACvmxJ1JfWQczLmlilUBBIXdMvmPZRWAxnFyFQBhoH00FQDzSABkZYBlKIAuAgzdAcSlCMDHAmARQAwG4ATw1wPI3wbwFAP/OkAxEc2/DVBMxerRx7IIwAqXSQCmskVXyF6nvnwd5wFCvmZ0APmKZn5YDxgAAJ6PcTCFQ1AA0MWKJnNQBACwUgwWAFw+xlaePSeCr7kwtBUA08hDWFMVDy0KQw3AwFRkqxqTgXuw1vWGdmxbUgbgY0Owoj2XYx1QBmDjSoHKCcmQBlm3zIgG5IIltABM6m37KrSN6djLBIq1DiqZKTt16fF/9ag22PJv4pV+0qFrWL2aYlapqqEvU+b6cb2ThYutImn63TwXm1zLe8HktFTp2iYPYKRYI+d/3CXbHixShiaA7M05X77kCcDNDbl5Nj8MOso/AbiOTzcAVXPu4ZhedQ/AdRO22bcs3LxxOO2b0wVwqdR87tryd884u+/6AM5D/G2T11ztd78DCjoBzgQBUn3YMfGe99B2A5wIXOJ43Po/ihbXD3DsmnxiD0R+qQoPAA535PcNb9KvY/ERUFFh9AAAgj7vwbGX9OF+2RJn0CcAAJM8JTtTfl2N7At4CgDA/SEZ8lL4xfZVeAEAIDgbvUHZxAvtDqxOzdlzgO1299+PySGOTHEOgslfTs47APHZiK8kJWIvMH+ToV4HOCeDRTvOOeezN7cZ8n2AwlznY3+CYQCwqobSfARAuY+wTa1Zh/J9hJq7yvI28bQT7AQ/AHD578punvc2Jh1e8OdoNHrq/h9RJ4OQH0dIP7PWPzKRSCQSiUQikUik/09/AHC6S49BDWCyAAAAAElFTkSuQmCC";
      /***/
    },

    /***/
    "./assets/ferret.png":
    /*!***************************!*\
      !*** ./assets/ferret.png ***!
      \***************************/

    /***/
    function assetsFerretPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAGiSURBVGje7ddBboMwEAXQHKEYsy9K2RcRHwAhDgD43/8qXdAmGFyw51eFhWcZlCczMx7j2y1FihTHkW3i3g/uD2+RQg6QgmEFBVbQtFDIBQNbz2kQChoAupIQDAAAjVzo8QqZgAsIhhYKWtAAgFbJBQUAmGsi7EleMOxbLFMpFDQtKFpY7AypYGihoIWcFhQtvFJ5ooAk/E01+Y7S5+8LRe/u/vQzy7DnZgVS0GCFihbMBYQKgGUzaXOumveuzOlTjxeKJCTBL4y0MNECriDUtNDKv+295QwUlrfFVTHCBHfeCwTlDmvEC8VKKKOF1YHhljNIWAFuMf5HyNfCRAuWFhArqI1Qs5mMF/q9Yog6yhmVQUK1V07RvnCKIRTqSGHbEAMtTOSEcRIRNuW2QksLI3M7WE06sTAw096dEWHCtqVeuZQLNlD4wK8xBgkKO1GHCIX/v/PIsWWAYPzr/7672fJY8C+hfZa3kQl22WOdRGidm/x7fB7mRlA/jz73BU87P/fUI2gNem8yqMYc52F72LgfkwFdrRo3sixSSJEixRXiC/2eeWomnVpsAAAAAElFTkSuQmCC";
      /***/
    },

    /***/
    "./assets/fox.png":
    /*!************************!*\
      !*** ./assets/fox.png ***!
      \************************/

    /***/
    function assetsFoxPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAABBAYO9QMN8ggHCfv8+vj4uptuEAAAN4SURBVHja7dvNmqsgDAbgAQwIgpr7v9mzsK12RuBDm3oWZuWiffI2QkL/fn7uuOOOO+74z0JVQxv9ut5cNsQ5QEdMdrl0xNx9G6CJmfvlumdm9l8GBGZmXmrBzMzmuwBNK6C/ArAUgNcCfBnwKACvBSgB3BDTnzCnAI8C8FqALECHh/BXkD4BeBaA1wJkADoQZ8KcADwLwGsB9gGu52z444BXAXgtwC6gy6en7sQaeBWANylMS/7ozuyCtQC8FmAHYHPpR39uG64F4I7zAJ9bfhHrA3oIwVcKwH0BkHKvH2tEemRmcuUCvO8q8AZ4DDAwM/NULkAJkNuAM9iKl9dJf1tozxDA1AuAVKAUVATE6gqorQHaSbJN75QeC4C+tgWqu8DHNBmXFXRKKZ0H6NzzQuM4zgqMUkpRFpBdArb1PJATBKWUy720wiY0zQeSXEMPxtKfm1JrFkcApZHGWUFAHoTOAljgAEA4AIAFm86dBcyHDqWxWZAFpGOn4ri7mHb6nK4B6BjAgYCXIPDZWfCen1DAs9fnAfYAYO9skwM8mn0eENoB70NnraQrjJs8IDUDdvP3hX4figBqBqRckrnQ7fIA9Ei2dqH1MPSrzL9WRr8+0JcA9vi741eqYe82J2gYbVfhIYDJtwYQMH0GsNMaLAboPwHQoTJnCgDWJwHa2JkKTbAKMKcXIdDmS4AgBugwwCQGiBhgFAMQBmAxADsMYMQAAwYYxAATBohiAMYASQ5gIADLAWYM4MQAIwboxACsIUCQA3QQIMkBIgQgOUAPAR53SgLwHMkB2a4igAECBDnABAGiHIAgwCgHeNzegAwNGUCAAE4OMEKATg6w7PGA1KkVYDGARQCpGeAjYfmXkVwDUCsgoOkf3TggNwoH6IkbwiMA0wLY/ZCmvMKrgKEFEJvy84QAYgPAtuVnQgCp4VMyagSwAwCsPv99wbbL1AEeBozNgIQALArw3B4IIKAAcwBgAcCEAsIBwAw8a5QEjMizUEA8AGAPABwISEcAHQCwkoAIAIIkgADAJAlgYH73ogBkfogCkDA34AZcDfAXA+jqbZiuBgxXA/zFgKQuBpiLAfV3Rn5evgknkfzkawBHLBn1z4gm+fxlwBfyXwZ4/jWlDBjF8k8e+ubUCqWPmx8Ulreh7T+efIzd2/+Rfu6444477rhjG/8AXKbkRmjdYtMAAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/frog.png":
    /*!*************************!*\
      !*** ./assets/frog.png ***!
      \*************************/

    /***/
    function assetsFrogPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAADCPv9+vYBCA73BQz59AIO0gd0oAAAL1SURBVHja7ZnbeqwgDIXLSQERyPu/7L6YsbUtJFGh377Ius0M+cWAYfHxIRKJRCKRSCQSiUQikej/kqKkjQUAALes/kckvCJx2Tw+xgOAtMOXYj4lKvYUgVynAPhvSQAgrkdk+RnZJgDoCL+UXxHXiPjRAK38L4J2ZB8MUJtZAIzyrh3JYwEsdFSWXiSNBFh7WSD2I34QQAq2nwXTUgYApAUeKObyCMAHB0/l1vsAW4QRcukegN57A4bcjZgms603ALbeA1mlVGnn90rpdi2kqwA+A7q8m7OzIRtGuAbgdxgMcNoYGQBYfth9b19yXqnU/V/mA6D5AZzp7Q3RZOR/mQ2QYY42JsAGs1RYAHpafnCeA7DPAwDDAFhhpjQN4KYCWBJg7gQAFAqAmICdrhCLDpEJgIJ/2r1SKlmsCdJKqRqQ77jHAbA9aDl6vND9ydF81B3ZjVAABP3U6Gciv1I+9ssQA9DECjqGd90Sp9toFGBjTYBShj4IdKegYABICxzOo5dOfZ3UHSpgAPYRwLfWs1upGQOAcQDdGbA3ARZFdqzfasCNBoBKjs5bBXAXwNLvN1EL9RHAV1fZfbpYOF3tbQDYE7HE33uhX7EzXbwPcJxw+t+CWNEFQBcheRp9FcKOrtUK9wEs+bVPfcPqWKqEo2AwAMNsbDvGmO9vUqcywQAYDZnpmnavfsFTTaXGACqjq1vbtumxV1NvMeINCacnfi/2srfsYfJYl3EAwwD4dBsO6/xkkGdGFaMAnHfwecqk7ezWGyDacssiWJoeZGG8wEABFBYAxPALobIcxUoezXhTABCNvmFoGvpsyJwCAACXt1JKKSksTEcxesbx3MA8bRx/wM87H1ueRTPNInn797RJNeuIrtk+4RybbL3glOaJ+XlesZmXn+mWD66DqC/b9XqkXWf9jQsLH4Y9/nbzyqaOqUXj79+aPUeIoT67tvPrg3u7mNOQm9OyGXvx7tJZG1Z9/eZUJBKJRCKRSCQSiUQi0d/rH8TPTqVq8oN/AAAAAElFTkSuQmCC";
      /***/
    },

    /***/
    "./assets/giraffe.png":
    /*!****************************!*\
      !*** ./assets/giraffe.png ***!
      \****************************/

    /***/
    function assetsGiraffePng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAL9SURBVGje7ZjZceMwDIazs9kCoKMA2lEB9EQFyDMsgDLRfyv7IFMnAILkWyZ4zPGJBH7i+vj4tZ9mfwAAAG53yDCC0CHaOsKIaOoIA6IH6OaqM0wAA1b54QWAFQR4YICmigAObV9HGNEPdYQOZ6wjtIhVhMcNawiPL4xWRGgdbmZKCBEQbIM4FRD+xs+/ABy+CgifkeABBgwFhH87gtNmCZoQoFW7kibg7JaTFPvhjamIRY6mjnoYjwSTT4DhQJgKCIv1m7CK80MMaimhidewpYQ2x5UkAXbqLiS4DE3RhCFDUzRhzHAETegzNEUTOtRriiY0qNcUTVgFodAUTYCM58kQnF5TDGHQ5ymGMOrzFEPo9Y5gCJ0+TzGEVRBpTTGETRChkLAJIqkpjuDUruQIW9r3hYRRXfs4Qq+ufRyhU9c+jtCoax9H2ASR0hRHAHUfwRL2nWUwJYRjH3AvIJyakWc+oT91ROGeS+jwbLPNIzR4tWcWoSUIZFBYAiBp6zFuNklwNOJ9jG599TxhQBSO4RSEkSNgMNChgtAvw84Xxbg7NcGu/ojP63HOfjIhrOIMF6npPDmv0pouQdIRfCSEq969Sg9z/Ad/VetLpckQo2quWgs6VU/vL1pCa8q3eXPXmtEfqoDydVOEKSvDAKF3n5XlKD/MWZmWiEUMhjLbeyp7ZREC5SGjrnr0u4g/0xK2Q3yfrqao3cdq8X2uyIr+gbd6glX2UbwZDeF5o2zvylQ3SFfbYZdkUh0pXfH7XTASBKaFanb8RGfumbZjd8cEgWvB3PbrxHxhGcIuycgzDjuedFswZALbzrbbF+RZz7M9oFuDIRMMSxjXP5BnXhawy/giQWjJm/Wa4uTOuyEKZk5sDyaBMMRgiAQLSUfIWxRx3G1iMCSCPNvEi0q7IC8SorOlfZQRCeP7nBJBBMTHJe3lEnuD9+OyAiG1u1gcYYTt4pQgLI7wwobTJAiLs14CIQGIouE3veld1uJKnuCThIEngFPt9LrrLX7tZ9h/7BkrxdEaHVQAAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/gopher.png":
    /*!***************************!*\
      !*** ./assets/gopher.png ***!
      \***************************/

    /***/
    function assetsGopherPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIC/QDbf7tYAAAI7SURBVGje7ZhtkoMgDIb3CqIeANQD0CkHwI4HUOH+V1lFqwRUPuxsZ3Z4/zUDTwkJCfjzk5SUlJT0J8qgKvnILNPADdMFoZFSCmjqJtPgTcjlLPCPhTJRX0KnhguH6YrA1PDR9GuSL0Fqw1timdwEtA1vl9WQjYADCevSJ4dwHIFJS4EEmQiJ8M8IotCn0jycgPejqU76Nwj3vfhILJ6bhUUSzGIfTuBmsQ8mULP+BxOEZQkljOY2hEcTgzYYQ+j1xh1AyLcJg2nwJJR7DnIQyxgCBbGMIQjjnIQTRhDLGIKawm4Rej2WUYTBXlIgYYpnc5NAM3mT0H+ZQLuFMBZhBLKf5YIpAt1TYqidBAJ2Ec2EJ0iJsb4kIHCHHHlW4AyDvJ7Xwc8JldFgrPqwqj4jNFaPesISBe02wQYsiyjlCcIkHACW060RHgBhEN7ODrgEXR+g8fvBoFIDEoo9Vo76QLblQUJ37DcGZXLJyYKt2QIJ2hbrBAFjibVGPEBCrt0XSniW2MHJUggOCPqDtHTfYZQjFBAa7brgQVCu9YCg93ofwuzbYBJoEKH7PIFFeCE+vJOldunxiab6AQhIKyhuwpLXRlazvX45CUstFAYhX5/oHoT23Q+N+rCm/4M7CKjZzpxB2G4qpLsgoGqv41aVe0m3GPDHqrQ+CLAhdrV/hQGOOg7ymz/y865XVB6Ax3XnRY1rPnd2f3S1DsL9vuy15NB9gr2/DaqLBNHXQkhtD0kfZZOSkpKSkkL1C2qDVr4Dgnq4AAAAAElFTkSuQmCC";
      /***/
    },

    /***/
    "./assets/grizzly.png":
    /*!****************************!*\
      !*** ./assets/grizzly.png ***!
      \****************************/

    /***/
    function assetsGrizzlyPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIC/QDbf7tYAAALySURBVGje7ZhblpwgEIYnOckCSukF6MQFdJ9xAaTjAgT//W8lDyCtUsVlPP1mvXnUj5+iLsDHx2WXXXbZu+0HERF9ArAdyaYGAEYTERFHGAAAkBFqBABYLRCe8KYlwug/sDxBrQAs6x/9AMD262MbvrizhCm89yKadUj82UtwIiKCAgDT90HE80WECRIe/acXERFa/6caARwADjF4LzfuOSIM3kHUAug2c3b2RRQ8NAFgCN4/brqzwtG6JjhIAegiQuO0exFmiAj29lqkCZg5wvo+Hh8AMAaR1AJLRLgB8zFw4pn4DxrAcIQQzYNECMGZI0ynCbfTBNEPupDQSoBXygmEOSchiFAcoQ0jyBK2nyxcRNmshFUEG5MhL1ISvAg+L0JuJiU4EUJu3lwKpyUAi1wfFAA8uowE4F8v1Sg5loXoTNXqvH3x/aJchM30rDxA6lmlCCv3TRrLNMiEtnAWi0gYSz0p+aHdDMKsiz60ZoYwblpzw63gsCt3MaHZVfWIYLb1M9v9sxrY7k+78Rg/dGrvS7b7l9vMEKpSE5YhjFUE6Iig6gC4c9W+yuJqP1US4o4zVBIQEWoB0AfCr2pCdyD8rCbMJQQTdk0FhN+JPQu/pVmKCPdE/TVFhCWxvSwj2ET9LSOEXv99wixX8DzhMbr1bMJDLcEtol9LZkWzBOs82NEAwHyHACf/DEHTaxYzsyBLNi/uNAGLCyjNLEg+sxaiviciavqOi8s5Xx80EZFapBNHl69Ri/tVC6mhC+rkg+gTsN3m+Jyqk+drdW2/mN/Qs873zcreze3tm9P7h7pp6LOnA3P6dHB/1+lAVUlg99VTjQSWoGok8OeLsuTwR2eWUHTI8YdrgVCAsDpNyCICQCQcbtOEbU2SQH8zJ9U8IZGlW0CKICJ2gCSBL87H+9skYb3STQEyBAYR3SBnCMfAsPH9cZawQzCAAsIGYbgb7AJCCE/DXn+XEDyCB5QR6Ola+AkCNYdAlAmXXXbZZUf7DxU3x/QTm2QRAAAAAElFTkSuQmCC";
      /***/
    },

    /***/
    "./assets/hedgehog.png":
    /*!*****************************!*\
      !*** ./assets/hedgehog.png ***!
      \*****************************/

    /***/
    function assetsHedgehogPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAADAgEFDv37+Pn2DPQIBwryT1ARkAAAMMSURBVHja7ZrLYoMgFEQbQMJD0Pn/n+1Co4BUES/NhlmVhjAnvLxc+fnp6urq6urq6urq6lr1uieWlLmIy4Kff/4QYJB4hy0yBQxhBQ2Y0F4BlhDAApEBkwDewc8fAcDFn0s6AAtEhkICAPZRMQAAH/MEQA8BGBZt/1ja3w2mpaw+5XkpT0QATCYAGrGBQwzg17KnARAff0QDshtsFVaAAaQA63juAFuHfAy2CgsAl6QAgf8CIN6IDQwigOALJAB78yvAjNjAIgYwIAUI/RFOsI/BPiALwARSgLA5IJxgq0EwIIDaVywRgEUCwGVioBABCEkK4JAAhDMSgI8GBFCv9PNnAEymACYu+yEuKw1KgIM/pqQ8JzXSLzwDSLq7Ro8ACPyfAcz4LoDBdwE8vgtg8V0AIv9qgOMGUKk3qwIg8wckqwCInm+EBKUAFBtQlqAUgNY/ICgEMKDWKO4A0PtvJ7oiAIsWGooB2vhDikIAhkbSZQCEG1AqXgLA2/nDFACIEQ3FLwHa+kNfApim/pBXAI39geEcYGrtD30KYJv7430GMOAfxHMAdlaat9yAwklwBFhXng/95eB8GwB/BNCZaozsTJBqPgJken7MZQVopI4AuWqi2ZoYywCUeLmgZ0bvnCXapI4AKr9pBn+uuWA+twFYl5+8iiaJdurMPsAUIPWfz8HwXKWaAJwfhUwUrbSYhBexGKM9r6jbDyPijMV8+jjONK+IAfzdgEQSAwznAJmlwGmTZvwiJjwG5VF+RTQNSPLHIini15ItQ7L8UlCUMdtQcDQ7/MqRk8WssuhwephoUrvXi1uCpJEuAmh4OuJl+YFm4akpzZC4dh1QmCNqE47pr2bJbqRomuQJbyWpyDO1y4P4Zq6YeincS1TST8S7qVpqgvvJalqCinQ9KUHVC4uFgGQmVr6yWdYCwX4wi0evbp8GQXJ6epfMPeqEObnbVnWBoT4UUe7QWN0dElt1KjUu01TtNR4+3RyJ2YpsQw/ukonBqyIKNXv3Zyv9BmlXV1dXV1dXV1dX16Zf7/ee+IBRKVMAAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/hippo.png":
    /*!**************************!*\
      !*** ./assets/hippo.png ***!
      \**************************/

    /***/
    function assetsHippoPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAHsSURBVGje7ZjNbcMwDIWzgmR7AKPxAKqjAdJAA1jW23+VHuI2cUiqJHwqoncKEuCz+SjxJ6dTU1NTU9O/kVPJX0rYPtoIfp7n4JxzEcBoJ3QJAFA+nQeAbCZc8KN1AIBiJUS8ykiYCGAzQkvoKQDBQvCJIZiiYGKwOekZgC2b3CvYThSOEnocjSKyBIOTrI+m89ALhKwmPDIxJxqGhpAeD/X0UFYIft70HHgiRogEH1nrdt8uNUInmJ+IlQKhE8zf+7DKBOkE7HNxTwZPSNBJJPQ4SPBaAIJAmA4Tkpqw8AS1C/dkMISoJyBwBG8AIHOE3kIoHGGyEBAYQjIRFkrwQEkWIwihA0JnMYIQBkDoMMLVIIQJCJaEBkKIwBoPEWypAK6EYARgeSfCTfY3qwihUvlUhFxrAKooRuecGw4Q1kof5AhJmrjUhMiWdNmIoCdELWEwvgOtD73Nh8LWSXbyFHKxMrVaOA+TulYzjuXqXKvqWcKOc/9J1Tflbsz2TZq2Vb5XV938sMj9nJ8fPHWrNt0r5qgi15dRN8tl0QZ5Kp5eHuQrr8ATdtkvYn36quwX3T5hSbgStQ3l/Bwrf6nKH/vm+SnWqQaQd5ztL5MgXKrb7zJV2bM+5oTA1vkyj04mNDU1NTU1NTW9lb4BGUyCMqGLcs0AAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/hyena.png":
    /*!**************************!*\
      !*** ./assets/hyena.png ***!
      \**************************/

    /***/
    function assetsHyenaPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAHLSURBVGje7dZBkoMgEAVQryCYA1iGA2QsDuCCA8T473+VWYwxOgP8xp5MzYK/YNFFXgLBlqapqampyaaNZ1j6dFEiXAH0yaJAsACwJIsCIQAA5lSRCx2+0ieKXAjr5DlRpMLz2w47YXdFKrjnZNxixYkLYZs8x4tMMNvc3TIORSZ0r8mIF5lw2U2+RYtM8LvJU7RYItyjRSYgJuBXhblEeESLfyvM6lWc20n9v6k/UQ4kt5LnIpqeCZYA/OluiTCXdLlopoJOG09Jt08sQiBklyF54xjyE3ivDuQntCWn+ud5FLy7rzngIbiB5E+kQDDQCkEreCiFdReX4fAsDnLBbs+OOzxJTipsR+n27e17kQrh1V/dodt6ofD61DIe9mEU7sMVguQEC6VgglaQARnBQSl0UAoWWmG994fTwrqGyZ0W1u9m3SUtdFsbDyeFsHXh7pxgXtd4c0647G5M/pTgUZCoAK1g1IJVC5d/IPgqNE3TNMM4+nGkQ74/+IkPeQEzH0iHWfiQFRzQ84H0qDsfSI968IH1KMHwzh7l1EKnFlq94NSCVQvSG1BGsGqhYCeS96igFkzQCq3xWqFtzSjJR0Soqampqal5cz4BN8AwiHqfkQMAAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/ibex.png":
    /*!*************************!*\
      !*** ./assets/ibex.png ***!
      \*************************/

    /***/
    function assetsIbexPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAALtSURBVGje7ZhdkqMgEIAne4IB5H11x/fNVDyAM8UBYvT+V1m1AYnS3UAepmrLfrIS+6P/aBrf3k455ZRTTuHkIptF/ohk+QSFd0+YrAx1irr8cO//dYRfk5fhyumrj+3t3xHCNDG+yPBdT7iY8OdvCnAL39y8uMx/NY3HDAmAsWlmf99DwmJgy1lx20V8T5gZhkTIfaiOBKGsGdGsKuvAlq4IQQhAjDGC2QPiBIt4YEEIAQhBmbgf1oeniosTbLwOfnTrz71IIFhz+5gJO+cwAoRsZ0R7CAJFkEcjVMwunAA+j/QvNOGwYtwEggBLPjgTKILa5d5ETaAIO5UKqXSK8KyzOnHPI4gnN471nEAIl8WcoAlV0O8wJ2hCaLlBnGAIrc+GRHsOTah8UWmk5XAE5Vdu4+XEEiAQZBg4QmubnULDwBG0zWGFhoEjSKupsWpgCc76Fj2COIILJR5IlmAX9zkpJUhiICD7w+hC6AimFpk9qrcEm4oqZgdBkMuysMEtwcSiSRAWNSiIAZqDyu20rY/huMXzXkaYgKCjCeEIUAmmnPDVbIPjV1tCOMgjh9DFCPfcbB6kz6yoo9QvE7JqUlilJ1zuztqWtYTM0z+crzV6aaAIczp7ZROo4fmRR9DQY+9gz/acM8MMC2YAwvqc2aMkrDtAXtbnTIIA3yd7btQq2q75OWpVw8uBJmzprPAbID+JrQRdSNB+R3fY3k6Z5dYyagsJ0ttu8AskSVB+O6F7O2menHOo8GSmzJPz0vjeTiTURDIZgtXsNdbq02baOYlEMhmCS2eLtfq0qXgmTMT3hJSpmGj1PAFqcTB4OSTN1VPfEV93UuZqV1HlBLcviuZqGe7u8sncdbnyyTwgFRCMDaB5ZTIfmqtsygl6293DTxHkRri/TOjLCMvp29V6rLBk8gQza17lVWEXNZ7QQQQ75MabQJDr19IbGkie4A48zIkEQkV0+jQCnPz41+cEgvg0UyN4wimnnPI/yj/HMZwWjDCORwAAAABJRU5ErkJggg==";
      /***/
    },

    /***/
    "./assets/ifrit.png":
    /*!**************************!*\
      !*** ./assets/ifrit.png ***!
      \**************************/

    /***/
    function assetsIfritPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAMgSURBVGje7ZhRjqQgEIZndrIHGNQDmB0P4DAcwOlwAKX/+19lHxAF/EFpMskm25XwUG37UVQVVcjLy1Oe8pSUvL5nBMvxtyJCg3sloQPqCWMdQVUTNDDXEQASjBJCA8BUEVqABKOE0AFAX00Y/wFCdSzu1Rk11RGElJU7i8r/QBCftYRuTyAWhgsE5ZJYaLaxLxHWDBoAlk3nBFfVBEAz+pQgXFVrAbovTwmNW7yyhLmY0LndbAHcl1lCuxKalXAscVdX0TnCVBwLbd/RjrA8uC+EA9B4XiG0G4E54gph2AnzY4QdwOJJCF+mP5ToTcK3v0xPCEPssM4nBPH8AO6EoGOHKZ+wRNUf44HwK55J+IDAPAEA84HwFru8DQi+eU2GsPBYRua1GYKJFsvj2QGAORB+R0FrEEnk4hRh5LEMH+kcYeKxDLxsg5QiGJbSUTzbLAGJWPrxVHnCxGPpPVozzfBo7hmhj4QlsC5JWG0VIBKw5yRhSblhjad7MvOdtRmhGGH2l3ckvAZRYwAYWxpWg9IEfJOUdubtDwhBeYiBEyaP3OcIuGlOMH5gjoQOJWIIoS0iLIQgiggz6xdFhJERVAmB9qyuyJGM0BS5gXbeIAuklDqtjpwwRPtQ6JR6T3T/Nq5HIqFiSZ0ftD+H/NysilRrEiUM3pwD0LtZI9UWAEoQ+zYW1lbNVFtq+ClIb9FuYGBciwzVtYxxQrvN0WBUxjX6UF1LaeIkpncbbjqwYVfXcp4gtC7rhX1TEXXJnwaVc74GJi8WntrnCdtXTaNvfj7s6nR2Iv04yUmTPpHKVeysYd/x1Nv6tz7TL+w747tQSZX3C11U5fId55L01YTqjnOv7jjmZzpOUTBoxxlISW/cOLiBEQRpK50b1/rFcGxtahuhCT0nCH1Y7D7Cw0yy0kaIudmHL5+Z3W333ZdzRLcP1/uklP2lWxQryhuIvibzhIEnwVRwo5U6dlz/7h746auAQI3oi779hxMvnBMEqQiF9w9tfg1XbjA+smu4dAcSIL4fukX5Ex7MHiBsTeZWfCfmiZQyceP68pSnPOUn5S8curM1tlnXIAAAAABJRU5ErkJggg==";
      /***/
    },

    /***/
    "./assets/iguana.png":
    /*!***************************!*\
      !*** ./assets/iguana.png ***!
      \***************************/

    /***/
    function assetsIguanaPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAIrSURBVGje7ZhRkqMgFEV7Znr+BzH/CWkWYFdcgOlyAUHP/rcyHxobbYSnVk1XTXG+rRMu8HiQl5dMJpPJZDLfwA/lcVUJ/iQMNdUxQwmXQwbdQqUKt99QQ6M07DaU4JSy+w1DhhK6vQY7ZuirnYYpQ6P0W7XDoIHLmKHmscNgAe7QV6pkj6FkpFMa2J5Ct0xYaLbPZM2M62ZDwYLebDS0fOV+2WCoAT5uXwZylRo0AEoFBmIqkaFdN4C7pg0/h08rTZj5rIYMv4H+hLOs4s3qmsGdiDPNasjwCnQ1KcaiDxl+AU2LUBFcixvXEgF9rC6sxMBHxCAaA1SR86EVGbqIQctypDrOuzEJUZPsvEOZ9oUxxoSCubTBgnfOBmIkDcBn//aOrn4c0SVl0NPOWRjceBY/UoZiXDPP95yAYct0KcPJD+HPgxu3jEvfgrwQvuHx3Lcpg2XW/K23EcZMUYOePp6FelbEECNqqJ87d+S2KGwLcI4ZLLOV8KutmX7hnB5DE5jH/jPTOXET80N4hovQsKRetPJasppR7GFDe9SgRbs6RimqrGSIxwFDITthUkMQnHLxpaTbZdDewd1sMOhQ7+iV3PC2uesFU2/qvCs1tex5UsPKXcApsaFdF8gMwxCcMfMboZIbaubPNW2MMelX0rz7rr/3JIaC2OtbYjhF36wSw7531mIt1THDc+WPGB7fbdDxf1L+iUER/T9IYrjd1UZDJpPJZDL/PX8Bb0ETGmcF168AAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/jackal.png":
    /*!***************************!*\
      !*** ./assets/jackal.png ***!
      \***************************/

    /***/
    function assetsJackalPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAEC/gDwUuiYAAAHESURBVGje7ddbcoMwDAXQ9JEFiMcCmIQF0AkLcGIWEMjd/1b6QdPBxEgymulPfb+TM0aWZTgccnJycnJy/jJvpE0xEhFZhBaNUQA6m1ACD5vQA5NJKADAJLQA0BiEAgDgDEJpFnqrMC/BIrSzsGsvzt57N9dxl+CxTHpHFX0ApHf1GsA9UXgB4OJCMUyOq/8iG/OhnSu01QKrQkaEd2AeHfEuXBcyInw8SyQuYespjr+6tARg3BYm77333vFL2OjJIxLSxYRP4U/uFNYysps9C4xhXzQxoeSXEJaki3b1mROIqAqWFD0XCcKULjiiOmiqZGFc9ZaLCuxuXG7hiIgKbUJPxYUiQXjEZ1RrFsj3amJrTg5moTYLJeBtQoWJqt4iEEaiYrAIfUdEdDMIQzPf1PuF+mfCisWQ702hGJPm5h32dHWYk1ngOvSuErgN6TQC2xROsRf8dspvQRXfDZMonIR+GgVBPlodLyiON/82KJ8qjKxQKoZDxwqKCcW/V1eaC4sVNNOa/+ZV3Ftf/Hf3oKqCTXCCUKuegRNKHcAIwkvElUSB3YxLQwrh5bPMP3Ndnn/2bK5+G88hJycnJycnJ+ef5xsrVMzomf1AWAAAAABJRU5ErkJggg==";
      /***/
    },

    /***/
    "./assets/kangaroo.png":
    /*!*****************************!*\
      !*** ./assets/kangaroo.png ***!
      \*****************************/

    /***/
    function assetsKangarooPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAAECAcBDPvyBQ32DvMK+Pn6dddTsAAAKrSURBVHja7drJcsMgDAbgAGYxi7He/2V7aJqxJ14QFqgH/nvHX4ORBMnrNTIyMjIyMvK/Ikoi1aTFszwCSAAwnAALAOD4ADMAAEg+gGcGBOAFaM8MUMAL0LE1IC1W6fsPoBkgRQCwp3/noDUgAwBAkCdZmgNWKEwrQOAGiAzgDSdA6CRc5AQIIcS0f9iq3dIXIHaLYLYFqBMgbZ9lv0gdSrHaPCum3ymoK2D3H8ecY3eAZN0FQgiRuQF/kwcb4GYRegwkefswDsBu+uEAvE8AjADx7gBuOwp1BfwuQhQclXBzClFHVaHXWG7fB2HPBXBeHQwI3Q8mKfICDp7fFRAisAImtl5wNJt84pXrBkgnDdHOvV7C09nEhz6Ai9mkloCsA1eziU09bkguB0TVAXA9IFrXHPCZTY4TUyNAjqXXBaEJIEN5QgOABmgmKAJIaCcoAjgcANWfyt6BBQeIjhqgV5zANKwDZWuiGgN29yaHSY0BwlAtQi0gUe3F6u8L7hYh6sYA4WnewypAyvZ+K/pmgOApKzIakAxtNcIC5lheD10DQMAU5NzncPrwNUQBtMf1pEQNUMi5YCIG6IgEWGJAAGwcLWBBA2ZaAPr5JRsRAUh4gCUFSDwA2AGSGzBxA1bmXVDQDjAAUyHQlICpAjBTAlwFQJF2w6VBKUIBKvZBpJ2IPF6QSAH4hnw7nCOvaiN5KUJOxRkNMLQAR94QsQcT/E40khRQ05F80IRnw4qdCBBXSQYIUBefEw2gYid+DJOjuB/I8CDmy1DyI5bLW8oJ26TNfi0KAOamzoRH78M9YL7tNSnW7Iu5FKDujz56qdub7vEn8LkMDHV7Y9Ul74Av6bVa1e2KEkA6uxSMu2OHUzWfgiz7xuT4t8XfV2glF5iln8DIyMjIyEj//ACKXRgXTz5bQgAAAABJRU5ErkJggg==";
      /***/
    },

    /***/
    "./assets/koala.png":
    /*!**************************!*\
      !*** ./assets/koala.png ***!
      \**************************/

    /***/
    function assetsKoalaPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAH2SURBVGje7ddLboMwEAbgHCHD4wAWYV/kcgCKfIBgz/2v0gWQ+DEGD1EXleZfpTJ8BWOP7dtNIpFIJBKJ5GJgS6cHyKfTavt1zwjfiIguZ/itGWHENTQRtNLCfglNhK2k0LwuQZcCUSspmPc1uAAAgP5GtGvnVV4jTrTQ+NegAuj23zMAtH6jowWD4b8ZvTtU0koIdXAJujH46xG2WkrokRNFCIYlTITAAnBJhZon2FRoeQL+hTAyha//JMxafyb8xLOSK7i4MrCFaS0u5rqwlaf+smDTAscUnptQfSzApVGt+kBY4u48nVkL1N6qgThAyxSe621Z4bw+OGgCYYo+qT2vUbMJBKcvVbkh/y2eZZX2QBjKqj1TGFkCtWa1HIFc9RqOsFBCxRGmgtX/eGYpUuiJZ83MbkvvQOryCjMV7KP2h6WrnMoIfa7SUm9HClWm2j+oR6N3pHRf1mQHZ3bFaU/YdNVz6kCoStbcw5051Obs/n3jf8+eL3TQkWYv23s0wJngd6iFBhGX17T19+uHQuN9zE7rN/ksFSAaUVU0RAuEPhxRI/ESJ8J7DFnlnW2mciGzxwaGQO57Fo5APYRTLKHO7qlKhXSaWmAK8XtE71AiVIYu/OVCSKRn4AJhO6jv4+qSALVGRJzJc3wqSCQSiUQikRTmFw6W8JpZ3lUtAAAAAElFTkSuQmCC";
      /***/
    },

    /***/
    "./assets/kraken.png":
    /*!***************************!*\
      !*** ./assets/kraken.png ***!
      \***************************/

    /***/
    function assetsKrakenPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAMpSURBVGje7ZltjuMgDIbnCgvJAVDLAWjKAdIRB0gC97/Kdpo0MWDz1dlKK9VSfrQpT7GxXxzy9fWxj32MsD+EMW0Fda+IwIxzTrxC0HeAo2ZRQujcw+ZmAnObqVaCfBJsI2GfgnNjG0EeBNtGcMBEC6GDhLmFoCHBNRCYB8BimSP0PmGuJxif4KoJgROYGxlCFxLmWoIMCbaW4CITdQQeE8Y6Qh8T5jqCjgm2juBcPhBJAsMIYw2hwwhzDUFihKWGoDGCqyGggFCyUwSGE8ZyAscJUzmhxwlLOUHiBFtOwJciXIwUgQAEed1CUKUEThGm9xF6irC8j0AtZpAQLQT3PgIJ8FOqiaD+HwL/JcLgjx3itM4QJl9mto8JQgcWiq/z7f3p9z6BmZtPkGBHKiJ0bvEJGuQ8X7c44+94xifIkNCDfEusxQRavZgw1azm/TdLGEngRgHhvjKTT+BwU8sTfrbFMcgHWHl5wk9YVUDQQIJMTh8eAhLm5GO5F1GkMHrVzICwLcCQ2DY3pT2ZrRUI64KeOiVXIaGvA8xxbbI6wohUt6wBWEwfqiahUIXpqqKAalSUB8swXH+uyAdBEJiJ/6qbkckpUidDxD1e0sYxVgmlDRHinmgiTDaV1mrf55GtF4yNyKk9h/Gcu/U6/LqU7BdsGJ4UK9dr/TAMqri334vEbFf184UpaEj/8dPBy505S5T0q91gYR/VZWoyS9h9AOm5GMQPirCXxtz7uRn1QQThqC3RQ5k3cShwwgG4wYBaEByVJJzg2hsvHY8cudEEpuEQFmjCAVwIjeJXf8Q670U+mxeoPsslJuhIhiRcBRsJmBVxB3LcVEd9KnbUpY+Yoj4q0DH+3O81SKUrTeBhmJ5OPOOx1SW7UoTtn74H4TdT457l+41tAwrjQJzLWW82dadq5uhAu6ZTNW+UaTkT8wZ1DSdaZ3+MqT6PYoGc8Gqt1qE0S0QmU4Rz5DfD/Mg+692Q78YypTXYLnmOHxczSmuJM09RqrTIuxsNKj9FIAE7ItfDoJ2C1yGpAsKNegd2KiGYXWLQVztXEEuCwBPjH/cvRCQ/9rFfsr/S0BXOO1hKugAAAABJRU5ErkJggg==";
      /***/
    },

    /***/
    "./assets/lemur.png":
    /*!**************************!*\
      !*** ./assets/lemur.png ***!
      \**************************/

    /***/
    function assetsLemurPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAI5SURBVGje7dbdceMgFAXgZBMXcEEqQDgUIG8oQJ6hAAGn/1b2wXZW/FkgMpk8cB5t6zNwL6CXl56enp6enuK8CkGbiDPtJhQA8/Ud10C18AfA8vhO4YDwBsDhFqMTApuIC3EmughBxERqFl6c/zyXWIkBhkgCRCNMJGhfMD6gEQpYQkH5wuIJErFgQ4H5wuytARKC2RmDJ5BOCNhZB38WvEB4AxwNj6c1rF8LFQsuEN6B5TJrOA3Hz0NQCyK9uw4nYMaqYBXsCLbtKLYQ0bBbzRPwF6vCMmBV4FthxExEKhTmWJj0IkEcZnDeGCQsEfFAmCgWLPHbL2ZSW0GHlUnvrBOAq8ZKNMJ9eDsr3iVZAcB0b8BACIv7RHg8sRFYokdTwnsg/B83F0IIMRWdMABGIyfkhr1zTt72xRm4JPZFkaAef61y894T7iW4fiSOqDKB/O1N1Sv5SixzPtw+XwsE+kyftBWCT8xHhEc7+o/UCTpx5dQJcjOIqbqaoWAPCSrdEhXCmL8yjgjmiDAkbr66WvidvTYL7oBA/vU7NQu2WXB150PUlHstUSTYeiF4F3p64KaFEeXTKBNc9UoOiKZRWU0WCrZZcLUCDwUslQJFgm0W7nd5uSAj4dos4MeF8RcIQ7PAfoHw2SrkilksKDQKA1oF3SpwtApjsyCbBbQKvFlgXfgmob0WT/thae5Jat0XpkxgVZOoPB/mQiF7RtniN7HMWrq5WOCyHMjdFyKRsvfJnp6enp5M/gEmYfhKXHc6HgAAAABJRU5ErkJggg==";
      /***/
    },

    /***/
    "./assets/leopard.png":
    /*!****************************!*\
      !*** ./assets/leopard.png ***!
      \****************************/

    /***/
    function assetsLeopardPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAKhSURBVGje7ZhLcqMwFEXT3RvIE3jeJGEekL0AdYoFGOnufysZ6A8SEnFVUl2lO7KhfHi6eh/hp6empqampu/SLyrqxX16PiSwIQMYsVYRGJBGMPg7h4QR/lFEXRgCMNUQbu5RjAMA5OxCwL2WsBIRvcJKDiaEegIGojd4qUGHcIKgIgCghvEkAR+IpXCWkNG3E1bt/wOEifqHCd2Px7DuXf3qXiyPEu7dowTBHiXIt5/Lyf+YYH2XYUrPlrtWEEw5Kv9R/85k1VAmuB/xyaXBxDhdoiAOCLaWRA9pnwsaIeyaigT7o+kC2MUrWrDagESB4APfEmwMqkBw5oke0noSrUIHkScEvSHtpPEyS/A9KbOb/KY3NEtYgoKMM+pqUJ3m5QgMBd2J9IbmCGOZwLSXOYKx4JolKOq1RxlCb1M/H4s0G5ohLMbC/aDZcjIE5ltAyY8hTRgdwe2J4pzzhC1rmuBC9KuYwq4VHkr+pgh/XIjeyZCgwin6niL8drd9pxRBxd9De97z/WGz3qDiLUFyzufnWgKIyPe34EBYT5iC9j/cvDcHhNt+PiSgdYRh1CXQuy91hNEX0cVvrfItCqVefYnLEBPdAMgTBJ81OjN3BFki+LIcaHE+CO/PWjv1AEG9TsoFKrh8LxKWINxOz9k5XNxUO7vtmO7WzSaXZ3c8MmiBiC7K+hMIADm/LgD4y3VTa4VT0HLY36a6980D1ZzEko36H6s/R6WXYTufqCLYBA5nl7mqKt/99x0Xxp66d3/rpQzTQLAlOAsWCSw3/dbKfzBMEFEM0XG0gsDSMzz4W6JEMEHwzeFhOEFI5oSgM4TEiWqlU4R9bks6SdgiYkAVIUZ80BcIxFxdqIm+RCBi/AaAz/s7SUJTU1NTU1NTU50+AWGj5Ye8I1WFAAAAAElFTkSuQmCC";
      /***/
    },

    /***/
    "./assets/liger.png":
    /*!**************************!*\
      !*** ./assets/liger.png ***!
      \**************************/

    /***/
    function assetsLigerPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAMPSURBVGje7ZhBetwgDIXTNN1XYO9jUg7gtD6A03IAbN79r9KFgcEOmZHw1m81yWf/A0h6EvP0dOnSpUuP9Y2IiEiZQiMd9PMxwWKnDylBOxy0CAkWn/RXROhQ0SghuBohCAjVJewX8YDg6oSVTdD4QmxC/xVh4BIsAHyYnexhG/cJxz0TEelDVt0lfAeA+VgIdn8QdwnPhy0XhJFHePl6DQOP8GPbcvf5HEQELGX09bIl2Swh7MsgJoQXERai+J0Y2ggr0faGxpD8QkbwRNEezZgIsnPYxXOCJBYvxdMq5ncvIjwXT/cxlbujxzyui1gDXSwndTSI+7Xpbk/reP4Kktrc/GEhosmTw6BDSinPJXSJYFeaQAqJMIh8MhDRFMhhnBALK/C92sYe1eX8tjKvjm+OpB1ggTn+Y5b2rIVImUGbt9SHg7hvzoecLpvWw949AUCIb6hK02LOD/ENV2laj2eYYh9/0ETYvjhkj20g6DS42OokxCDEACyu3v45hMoU4akbJYSu0v0nLyHkRCoIOS95hE+zDKmcqDzCcR+BphwPJuEwmC7kcnFwCWR2s5y6hZRN2K3C97fEbCMM7uaWfEK5i99oIOwC2hc+wyaoMpgWDedQjrchxVSP5wgrTV5AqNx1PLkgIFTuCYMGZj6hNuD3wMImqNolwwEYhYTyNIIGAM8lbKFYcpX/S38sXMIUu4a7ZaXfFiTzhzGlxWoBv318ZRJSy46E2QK/Ggg+E+h2qkyCSrW4vbYWlfoqcNqQYzIoMaFPI2C/oXoxId/O+liUTYSQD2QoK5VJyOauN5QTEoy5zbEO8LtK5eRkngBVMlglJOSho0+ooo0GPmFIBL8zzYVPyOk07kxz5RDejTHmjYh0+rClQzCDwGHqUsBwjtADdI5gEc4RNLCeI3SijlPfBMZTBA0sdIowAfMpgt7y8wRh2iyjnaCjZbQTbPS9ZkKXLl+tBJXvrY0EBflkvtN78aNzC0HZ8ronJph4TQhjIyG5dAaICdGll5HOEQxRM0E7fBj+L/+XLl26VOo/UnlsF9augV0AAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/llama.png":
    /*!**************************!*\
      !*** ./assets/llama.png ***!
      \**************************/

    /***/
    function assetsLlamaPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAIoSURBVGje7dhRkpswDAbgbbc9gGw4gN34AHTqA5AOB8Dw3/8qfSDewKyxbGvbzrToMZN8GCEJOy8vV1zxb8YnOobCQmxkhQkwIkEDmEWCuoSPEH4AEAkdpMIkFRSkghMKKt5Dq3ADRMJuAW3CDQBW01wPegKAOxGRbxL0tC2AaFp0k+DjAghhW0Sl8PpYwCZ0DcIXrMPjc/9zq8tK4Svm7jlc2wSjgf2gbRBoCiRbA/nxMCLq80Aq5rLpaX6Oz0KFOGTq6wHWEFEf4pxrqUng/s2HR4e09QUArLa1u7XDMVomjL1Jhf2c/YtC2V18t3YQCQ4ATFrQJcJjEg9JQRUI8SpLs9DHLwwpoS8Q3l5LY6PwTNXSKDxvdE0Jjhd2F/k9wv7lHez7MKwANu5eKuwjIag/LKxiISSEvkoYxUKqs3wNkOxuV7UEqZCecuW/t4aEgklPe13xJNNCRUHNYiGkha6iJ9JCTUlewiX8L4K8NyuEhaRT7mTCHLYPTXOy4o0znAjFQ2o925nrqjSQZA9jTgVXkwbidqRsGtidOVdP/AklE2PZOYtNZFooq6ncSa2opkJOKKqpOSfE5jLJff0xDSeCLxCGrNDxwpo988aayglLXiBeGBnBsYJhhJ4ViBEUJwROIE6YWWE6fu2dYFjBM8LACl1eWIkVdF5YeIGmrDAWCC4rmAKhzwpUIKicEEoEyglzkeAygikSlLXpqrbbf2FJ4YortvgF6mQ0tbW5Jc4AAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/manatee.png":
    /*!****************************!*\
      !*** ./assets/manatee.png ***!
      \****************************/

    /***/
    function assetsManateePng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIC/QDbf7tYAAAIcSURBVGje7dnBcoIwEMZxH6Eb4F5w8gA4k3vRcm9Jvvd/lR4cFGWT7Ca3Dnt15uffEIKOp9MxxxxzTGaIyFjgQsL5YIQWALBUCA4AgLFYaO4AfLHgAPizOGIvtPdP4KQRe6EBgImsNGIvdADQk5WuxF6wABAMACCUC+tM1UIoEi7wVhHBCL1djCKCa3D+rFiJzDoIIrJCNoITRofQiCM4obcYG3EEJyxA34lXIrIOZMUrwQuB5JeDF0bzcjl6nXAdhoHmF8FrT9r1tH7OqBbmN8GrBUAeIRR8tZCIkApeKThFBC9YRYRYiEbIBa8SOsgjFIKfaoXIXc4LhhX4o0YlBLnQQB4hv5qxCFZoAXkEKzRRIQgFC0UEK8QBJoITTELYR3BCA00EJ8zQRHCCTQqLQHBJ4f0u54Q08H7UFAhvEYzQQhXBCAaqiCLB167Da0RCmGURccG3soj4nvwlWUT8vuiTm3NMCt36Lo0kIvqrOVD6sBqTZ5Rbv0O2Ln+Xs8L8qDT5oyZ22q+v37IRsSfO44vwLRcReW5urvctE8EL9L3ZtiYdERFeprWpCIlAdHXxCJlAdLWxCKlARMOwljx+0QadwC3uVC2EagGlAm1u0VrBVwsYq4WlUNjsr3rhq1r4LBM2j5KfMqH7F4KpXsm2WqDqHfXcEKW7+vlY/y0VHh9jKhZu6zFXLNxXYqEKgc73vwf2wjHHHHPMv5w/eO4CLCiP+HIAAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/mink.png":
    /*!*************************!*\
      !*** ./assets/mink.png ***!
      \*************************/

    /***/
    function assetsMinkPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAHmSURBVGje7dhBboMwEAXQtD1BDBwgKD5AInwAKvkAEP79r9JNIUT2zHwHqYvKf90+ZexhbDidampqampq/jIf52zc5SyFEwbgdkhoAYxHhCYCmI8IAYBchiVcgSUCShmG4LFleksYnoC4EKrgcFBo4l5Y3hA8XlIuDDgoNDgqxKNCWLdgk8YyoV3/77ZV8ygSto2cd+XcSoSw6yOv93VeaHd91Bg9lRX2G/m966uRFjzyebBCCyk3Tlj3oU+FkRPCugtpMQslOMhCroxU2Bqo59YyEeRlFB6vRIi6MJrCpw5kpmWpkK6lJMwewJhZlMkSvn7/8OIAvI57oSWSlbxfn0LuN+BCdtQsPV1JS8g9ybZEKjSWMJpPVixrCfnZZFsiNx/KysjNqMEQFntO3kvKEM6Le68JD/Ls7iNVhn6P6q/2Wpr3yc4qwxRaay1NobHKsG/F0VhLW/BGGbbQGS1hC85oCeLtwGgJQoh6GYQQ9GFHCK1eBiE4fdgx71n6lGAE4eiYeKFTpwQjOHXiUm+s6rCj3pqjtpaUELQyKKHTJi4lOO3g4L4/aAcHJ3ilDE4IyiHMCa1yl+CERjmEyW9B4hE6sYKXD2FS6OQy2C9aojCRwlm+ErGCfEVkhUALNTU1NTU1/z8/wuvL5gp0xtIAAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/monkey.png":
    /*!***************************!*\
      !*** ./assets/monkey.png ***!
      \***************************/

    /***/
    function assetsMonkeyPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAALpSURBVGje7Zg9muMgDIbnCCuD+zGJD0Ce+ABOHvq1Y93/KluQOEKIP1dbWKUz84KE+CT083PaaaedljeQzRhjjE38+KdI6Eb0tl2OEa74tW1oJyiHgV1aCRyA+GwjxADEuYkgABCHBsIkAXCrJ2iU7VVNcAkC8yNNSG2B+5EkKEzbXEXoM4StiuCjYGhePyzALdpEiqBJzO40HTt+HCnCSJea6H9pRERbJChExJW6tFmaaEuR0IcLaeq6CmOZIDgW8WDfY0CXCYoHfHqxXFsKBB4t0DNLtrVAmHjaKMtvTIHgglUim+j1EgkKd09Hqmv395n2NBAiQe8ETeOhPnml6RZFQr9n9EhX05/odDRMImHcCUFq9viOYIcklCLB1RCGHAFrCHOSoK5EiBy9yiHhrR4xYa8yy+fk5+gsdv1aJYILRF0FuTm+feup8nPCt8p491XQN5jhe1Yf5WcEqtDprA5ElxF0rsbuPQnVbcsIY7q6JerpEhLCMmPLTiCuIaHLldhEOQwJrFCJm+Dl8DcgTPlWgR+lQOC/rhYAtHfHoQUAxf8E/2YJOPhFLYD2eR6X4QLB+jwfAHpPcK0E4ITxCGFC9Ik4VxB497b6JH4CAIwbiITfXD4INaNE0EVC3Bzl7kUVYWN30zUTXowwNROGjEaJF6OPGsO0Tso61UfNKScUNqHi3jRSe51t5Fk6bFaqWV3mWXQXLn+qI+0kxA5YKnpaspPHW+yIuNQTVn80DwPK+ILsWgk8dGvfTAgRH2I9YQufzRdoJiBtSR4WDhIAQO3Dg2aClWtmA2GQ70UDYZFbhwbCKl/ulqyWpbqGAOIbWwlfCy9Wpg9aaCyShEnqQlzLq1kLIiV9q3j723giUff23y/lGktU6wTjyT+8mqcoKxuO2QOTHGPMkUlOapRj6wmdCHi2zMTuAmBtm+zFPc9mG6eLYxFQnHBe40LZOiO9kRMxx+a0cPOubKZm0nvaaaeddtpp/7v9AxWSGnNu0TMGAAAAAElFTkSuQmCC";
      /***/
    },

    /***/
    "./assets/moose.png":
    /*!**************************!*\
      !*** ./assets/moose.png ***!
      \**************************/

    /***/
    function assetsMoosePng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAM8SURBVGje7dlLcpwwEAZgu3IBN4J9VBP2IZgD4CkOINB//6tk0TyE1JKA1LiyoBeu8ozmQ8+ehnl7u+OOO+74v+OdHu0fOhmqbeljFUoA+hxQAOg3oQMwnhMqAHYTAMASUdG22a4Un09NRB0A/FyEHwAAIqoZSsbcBgDw2xcKAGjy40cTE0oAMGlhaSMJDVUAMOVnEJMvvM9CfVwoJKHn+Z2iS9JOzSooSTAsGKJB3B28CBXPWQkA2O8oTItQQtyi3E+++Ax5gl2Eitv658DtPjd19iSLutsPRlhGuwgAgMkX+vmjEIV5Aljgv2YT+IUpKfDcNdy05ktuAn8IAwAYhfg8oKm2ltCO0GGNaW4qrgVMtbWEk2F4N3LYcjmpXnAP3Wu5QunIVUTgWRq2hsYVyBG6yOnoAGB0Guqd4HQOKcE6w6WdUB4U4A5iJxTe28gLei+4qxERvAaWPEF5DRoxQTrR+wINwSiJiD4B2zi7etcFTyiFqSyY/aJwmGMo+J3QzuQ18tu+UAbjLJ0ul0IXfMG7inVf6MUuBILfCWf2x7CDkuBPlvvvEC6EJAQbMxY6JgSnIxJfFBWCvS3GduoEwZ9yKaxOCkWecE6MJORn0z1yokBqOAxEhORA7P7QR4QwG22r4H2jRwV6yN0I6t64QNSGRhu2SglB2hPLq1cLUl48J1SAnWejHcT0nxPqtSgbKXb3kBY6oOHJ4AKuOS0Ma+1nSElFTVYAMHG+sFRHKvakEJzR8aygkK8HXi1UyFcUrxa6dHb6FiHML+a7BSHpj+cElfqyOyQI38H2nFAJqfqcUCeqhmMCl+HtHJ+RDZESht3cRW6ckgIEwZwX1pHX54ViV/TNlc0pQe22YRHbUnnB7rbXFWFewO4fBOOe0/HCWvBly+jxPiBAOzv8mtA7VWp//lzw2It4ojx0Np2Drq/lh2bL2heznKGLWW79nFFXs30dCPqkUAJ4DrPwHORiLlvDNCULlroLNQzVQE81jAI0DVdquQKwmh5GTZp+RR4EpwWq1wVUsYfRGaEY5huKR6QWzAq8q57tEH9wmhO2jRl78poVSHWxe5OjApFq2zb+7sf9q8kdd9zx2vgLQbh6WVz//GkAAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/narwhal.png":
    /*!****************************!*\
      !*** ./assets/narwhal.png ***!
      \****************************/

    /***/
    function assetsNarwhalPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAI9SURBVGje7dhLkqMwDAbgPsLYhgO4qrMfN+MDJF0+QID//leZRSABWw6WtOnqQpskmy+2JD/g4+OMM35r2CEYVvzJhR6zUoiAVwtXnXABRp3QAdAJDkBQCQbAXSckYNIJkZmIUujBq2cpdODVsxQswGrsUjAAq7EJIfISQQgXsOpJCD1Y9SQEB1ZjE4IFq7EJwSRWIighsupJCT049aSEDpzGpgQHAPOwxJdAMNjH9MUWUkZgDkwhoohvlmBBRHUYlHABGYHXk+1EbWVhjo1EZX8AvGkcBSE8JkFWZPbN+yTgyXRMLcIjDbh1ZDZv7UItfNuZ9SZmtVBsHFVhqg7CNwo+1oixUTCxMZkSYWwUUmNFa8JkWstRE+6utSdqgu9be6IijG8SmeWyInjbvDpIYQ61vZKYBrE2B78cfG9iOjgvjlb4bhqkcAxspkGPIR4K44HQQBwJxg3bSG82/pqQh/uXCXeuYIxLdD3bhTw5EmFPBImwI64iwaayI3jCtlsnmbBds0LBFouLK2zWfRAKr1PgKhW6rK/5gs3KyRee5ZjEgtufOwLhmUu50KsFpxbWaQS5cFELnVqwamFJhEaIaqFXC51acGrB6IWkFqJWeFwHvuVrM22fpAWC3T+tCIS0v0Uodvvl0OALMbvTsYX8wu0V5+YyDbaQX9lHtrBWYv2c2ML638P6RXwDMVLBPau4JuSvULg+iyIU5ldOhUJ4dYZMeLxL+RRl0mxfxnyKBDsMfvejEM4444yfFf8BRMTp39vlJI4AAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/orangutan.png":
    /*!******************************!*\
      !*** ./assets/orangutan.png ***!
      \******************************/

    /***/
    function assetsOrangutanPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAADBwn7/vj2BQ3yCAEEDPr7t9UTcAAAPTSURBVHja7ZrbcuMgEEQjxJ0Bif//2X1IbIMlYAZwamuXfktVbI4QDD1tvr6WlpaWlpaWlv42bVixnQsZvyWF0gz3sUkAhj/Gfsly80sADq6j/zCA/zyA47Em7j8L4ItP/5CETwIEG9s62McAIOK0fwbAnxEr/gkAf0S8Dj8dgDR+maAbgDh+kaAbgDp+jOdUAB7pUhMBdOyRmQbgZBeA9LMAROwTnwRgYq/CHADbDSCmAOgY501BD4AdABATAEIcERsH4EMAagTAGxBCyCEAKYTSvgug7b7wFMrTAdi04WOMUTIqgImTpWkAc58/mQMsQLH6n2BCURoqtuGgAJiS5/cDfYsmANz738Nh+sYgaxYJCUD02m99c4kAD8BIThtNwNAAAVPVK9rLR2M/AN8IsoMAd6/guQBBylu/63m0ujoFbGQR2syeQMm5/xgQN7gIb7YhzwyquAGIKdnoNrwWIsgeVJTeO1QqqR4qxZDtMVOwjtKVAcTYYaSSjArCfQkEcOVtQDyMLi9BUHbh5ot9Wr8h8RQAPW5Its2rO0OBkyieogQAk0+BJUxBKDw+CQBQ7T4uTUkI0AC86Oraqn0WC8CJ8V8zzdM0gEIiKZ77nNnslSR/Glvt0XAA135YwB5CCM8KdGYHNJPPc8iHEEIAdXGnP0USBfCeyAh9v894VjLeyqPbbXcpznexCMVKw5PxbxybttfjBAOgMSvvRVAcf9s8v7wEBICXhRpyT1AZ//1hOA4AUOM/vvuUdces32wdAsDixk+/u+bY93wK2gAGX/s0qmM4s+SyDXC24uYLQaNjSdeURgDcOfH6/HrMPz0eqQkQSK1IeLhtZJsi2wBA6sVwAImzCU0AcW1FhgGSRmtvAlhSM4gD2F7LEJoANP+BBHhNqyAAhHkA8M8B6IdFfQEwWylI0wHkY40+AZgsNO2fAfiuwOEFADHOB9ibleU0JsYYGdjU9VV3wdkEOFB1QNXy6LE6cCZ1u3YOXpI44TGVUFPOAkOIZK3GdUqsCcDQkYBTz7J9aqQhQJyGyftqlyIXAEAHdBmKHAHA3wP2UbksJmkDhLtkakRJkyaprpgWi7R7dYUC0BHry8lZAa4vyCM2PXF8hewN84RH+YH1d1zuM6C64zzikL2T4OEmYEEB+LfO3qqOpWD4QFTLbn4CVkAQF6ULJciMaOTOQv23W2xKNp3AUHPCuQSSnBNekto5v52TsmJ2zBo//cWVdIMC5owP/XdIHB8fXrihSyyOjy2FMwzfovH67GU4wE26zMY0cEGU0q7rPuHS0tLS0tLS0n+nP5b8JKuOyxvUAAAAAElFTkSuQmCC";
      /***/
    },

    /***/
    "./assets/otter.png":
    /*!**************************!*\
      !*** ./assets/otter.png ***!
      \**************************/

    /***/
    function assetsOtterPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAG1BMVEX///8AAAD///////////9Xs0dXs0f///9Xs0dOEAi1AAAAB3RSTlMAAECAv0CAMw1xIgAAApZJREFUaN7tmM2KnTAYhmd6Bf0SIeswB7LOccB1poVsexXdHxXeW+hlz0L9Yvw7iballLwrDfiQfP/m5aWoqKio6KleaVviHQD6Ox3o6xHhDaO6k4QbkIA4IEjM1J4gCD8nwOUTTARAn00QWMjlEsyS0GcRRH3HSq62yYSFEY9Pskkw2JNOI4hdAB5phGqf0KUR1D4BaQRzmdD8A3u4bofrvrgeD9djcsqL2gPoPT8CH8m52QyFTQJoDYB2tA3lERwRAFsBsKNtdB7BEgEYMEQYlxIJY3kWQEfUAG4s3JkE6AZwRArodXOKMJ5cnKhRFJdXfxRQ2wQZf2KuEGycJycIi0O1+YS61rKuD1v4JmGe3lYdJ/c2Qf0+woeHVehu5wlawipoeZ7gSGppZwGR3zf1YhxKJYSG0dt4nsoh+MRiv0vo1lOQyiP060lMbReITYIHoMVyfPEZhCGJTLyFCpmExSbaoc5kEVqau0NXyCZMH0U4l9V555uYaImddwpCbYId/SmC42O0AqcID84IfvprhGqfkDmRbtghndADgFaxL3wO4VGt46EVWQSS93nTfpC8k8yyg456Nr+vf5V+/diZq3srovF6el8Rfv6Zyfz/IPgDgt4j+MnTEk/l+G5BB8IXnrr9c8LwYTVVzUDAk5+TxV2Ejwmv0+5StgBMp52d4vVtyDsB4HuIw/BNEy26YUC4R74QADSZqFeFcu94cz3dgI7Is0XZm2asI5bd0YZDaTaQIwHA3kKSMaEKg7TneVYxSwQ/mLhkhojyvK6YJUIENOyGKo6tQFC8LkLgGB7wq7DoowF5FtWe1w1fu4gQhA0X2ioK7xlBenwbV9/Ra47y8VZONOg037bZRV4UFRUVFRUVFWXoE3njDKPDQaB6AAAAAElFTkSuQmCC";
      /***/
    },

    /***/
    "./assets/panda.png":
    /*!**************************!*\
      !*** ./assets/panda.png ***!
      \**************************/

    /***/
    function assetsPandaPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAANkSURBVGje7ZhrdqUgDIA7rwWIuABPLwuwXhdg72EBKu5/K6M8AySo7Zz5ZX60esUvIYQk8vZ2yy233HLLGflR7cL6demrktTP9dWZS4xQr7ssLQ146hEvimAAG4IEPOyIT4IgVzhAS7+Lv2NuwNqhBO6fr3Yevb192XuvYlUoQT9f9N9JawwvaJ3WhN79kBF2E1Rr5qoSgEEI66Nh+z8jBOGsNxcxQCOkQbuLjCA12A6YtCIoqt0nMeoBXOtICSw4cDNifqypzNyZoHWMGaEOcbBdqjUXaT28SbNfpoQmPK9WSrqgY8EIoyMMFKEKOlBC9+8IzbcJ4rsERnpyPCCMRyb4eGAYgfvVpE3wStDVrL0GUSCoQkT5qC6Z4IxAo9rvLFEkKHpn6Tc7a8LSsT55s6/eB2cEsbv3PKs6DfpMU5ROPSZWVcWoDBOy4OwdnibOAf5AZ1rVZnExprE2F7P9lCV3VaXx3uIEFlkMxk+h6JUrjnkOKhZPEouz85Osm1ppUOiMUqDuiXCPEVii0HoG1tEmOBYjiNgNbvUmWP2DUZQn9dP6A7rSEvrWZ+GRIAgfTtJa0gBHcvNo8GpyAgt49xYkNMYfwo/KCWB4gcALMSlDMpUKJm1XLMcqCjt0b6YdkMjWwhW0ESE0yOgB7tXotwWv/jCfA32xXY0rHVieTOLJb864o3R7Bcn22eAm31megFb/jCDjpJVMLSUMOaFOk1zUXWQEmRNCqp0RbpsScqc9kOYFELqE8CsbWkf1os0S10gQQpoN3SFDk+2UEP6kff0QXuORK+QBwZn7AHMSMFp9/75QhDkOG7B8bbxAJEGnclczF+hSFdcxmrB9R/USzqkJ9fsd9IkFQtpwSPzRMWGxXmH+5iqhteWJ+5urBDP/zta55iuE2hAGvSZfIjCzGEK745jwG/mWkN4PI9LuT8TOAiO2uNIN0WMPsvWQ8JNqX7t4NwAbiQyTtq9cJemKJmBjbAuOf/RkeRJrhl9Psx0k2h4T2f60zNjXwSVBevuLBKS3Hy4BFHF6cMUNOYFdImAnGJemoY7OYc5MongWdGYlUAK/ZALaV8srJqAEfsUE/PtiOL0QFIGdmkfhbDBtO+g6RhNOIPyxH0E4mogKbRJFqKr3AgMeoL7dcsstt9xyy/+Uv0IU0D8W5O1uAAAAAElFTkSuQmCC";
      /***/
    },

    /***/
    "./assets/penguin.png":
    /*!****************************!*\
      !*** ./assets/penguin.png ***!
      \****************************/

    /***/
    function assetsPenguinPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAAGCf38+PMBCA70CvUL8gcCWO3EkAAALDSURBVHja7dvbcqQgFAXQAHJXdP//z85DOmlFQCccMJViv6XTFVZxFBTIx8fIyMjIyK8Py4WLCQAglWbltAAY6/CO9L0BfsIxs+kK4Dhl0h0BifYBp7sBku0Dk+kEyLQPzH0A2fYB3wNwaH9e1P7H0AFg4z4/fLA2B4hDly+MMb//YGsNOLYPdSpJY4CIrzrruTvciW0BFpdpC8DTgPA04DURTw8DmH4aUBqMO03H4mmAkQ8D2OoeBrDlaQBTTwMyo1I/gE5fh7YXIDsviT63YWFWEB0A+WEAAHhzQLl9QLcGiIspWT73XpC7FUgB2VF495ZoWgJuPBadHo4pARx3sjQDGHcLEBWBEDDjXuZGgMQsLEMI7qIIZIBTAQL/7GutXKkIZICoANNuPcDMhSJQAaICSFO8PxZyQFQAacpD5K4IRIBjJ7vzYsScKwINYLl89llzRSABxHfAev3C8r1uRwKYr+bcxDChCAG5v12swde6HQHgNASlH38zi6cEAIEfAV4dVQ/w+CHgswjVgMSiyF3AZCgACj8GQBEAPCoA8NWA5KrUfcBkagEKVQCoSoBHJQC+DhCqAaEOIJ8GbNUAXnkR8koArx4H9PdloNRNwPuLQZPMBUICUq3vpZkLgGWrkIAUnvjN6D6g0avZAAzAAAzAAAzA7wEkjyr4joDkUYWtIyB5ZEf2BITiAkkHwPnEzP4Vrgcg3p06bCV1ARz7YJXoDkDw6QOW3QCAtN57z0V5Dash4N7G2QD8PcCU3ztzUw9AyO7ff/2mNYCxLdUJbvvaWW0POA09gLOGdQQwZvh+D2F+7eA1Amj7mRBNxZ5bG6zlPtrcDq/vayJAtFofCgfZQ+JISTUg3i75DwAWCoCtAFgKwHbnsFDmhMlGsmHhrs7JZM9bOpINC6bn8M5c/n8Of/iurr8IR0ZGRkZGRv56/gGnLNFoqsMJBgAAAABJRU5ErkJggg==";
      /***/
    },

    /***/
    "./assets/platypus.png":
    /*!*****************************!*\
      !*** ./assets/platypus.png ***!
      \*****************************/

    /***/
    function assetsPlatypusPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAJSSURBVGje7dlNcuMgEAXgHCEgdABmov1ghQNgFweQ4N3/KrOQHAsLVfGgkmjhXtku11f6oVvd6O3tFa84fYhHyHEcR7P54Z0TpAUAIJpK4S++4lolfAB7ghE6IEMQgsRTGFawz0IkBYVdXDnB7wVoRsgcAjAzgs0JkRAksuHKhT4vzOWCzwsoFg5OAnClgjoS5lJhOBJiqXB0GYBS4RCAKRO6Y2EqE9SxMJcJ/bEQygT7nQJ+SvAAEP8kqyJ0jLDctzRB3Voy6gWzfv1XLsxpdrh1qRMCxjSnPkELzffil9dDuzA050X/ncL8UzWqXUgeOMFWVFqRth0fFYJPWoZtipU+L2zafqkWQSjACf6pd18Q8SI8EB/NbSCFoJe2VAvpSUGtf18vgRN3YioVOgCIWoi1MF3undVE9TDm69iBsB6NKe6jAMwbAAhLg0gJOu0pZyEB6GLBYkrHC8CJgejlhIWWuxaqY4Rh3ndjTvhA9LRGZvo4RQhdriF0cmqcL2ZhCCFb6KgJZTgYDsoF3zzjALj554IbSSGZEaLoAJBzVlKkdY3gNvPadbm27KynH0V6+RgYoQcQNoJEjbC5GzdbJzSth+yIMYnWvDiDYKj9h7MKunkXhduHsScQMoUycEJ/TmHihO6cguMEmU8LZn/ynELzLusZBHand5+cgRX6EwgqmxaM0DULMptY1LuD3NOCE2xuQVFCv28/SEHmLgP3FsZnToITVOYkyHdJfncnWEHtD4F9IzakmV0h3NdE1NXCMrrftKgXhOguydcy4RWvaIj/rDkUUBm9ebsAAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/pumpkin.png":
    /*!****************************!*\
      !*** ./assets/pumpkin.png ***!
      \****************************/

    /***/
    function assetsPumpkinPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAJbSURBVGje7dhhTvQgEAZgjyC0PUCj+//rIgeoGw6wlPf+V/l+uLR0dwamSzQmMgnRGH2WMlMYfHlp0aJFiz8RKg1tjFHZeC0IFgDONQIAAHO1gLFa8NVCZhJSwVcLqMsmAEzVwvVZYYjCopRSylgs0zGhTxeicwAQjgk6ETpyUUuCcmtFaPeccFqTcaJLoyisj2Hi14O5SCbB1EVZ0DtgVseFJKEPmRQK6j03BZGgug9+CjJhrW5fIVh2v5QK/CsuFDS/zeSEN7fW4C0dl1GpzgLARSLEBCyjXvcZnGNqw1gUtr8KDkREghXeUYqQFzTK4bOCFQhfxxAj9BLgaxKM4EQCRlbQMgCeFU5CAazgpMLMCJ0UwMII4ocAGMHJhYkUtBzAlRToclosvRCUMNCfRv+YFOh3YqQzNFIC9y6TCzyLBc8k+UoIu9le7Hbi9vfHOAD4krBrXNbpJIu6EMKwr9qkEbOxBpIPCQUhxPKak8ZuNwcQwm7BPm2yocViPbu8YPl9mcqnUPBkRwQA+CcTpsd25qDw0OofFfxDo35UWMwtnhZy8RuEUk0+JQw/LFDvZlp4F2M+qJHfH7rdcaAGauQFvd9hLDXy+6TavxD0yO/VaUFMHT22X6CE091JRY38mdXfnZbU2DYvSugOlIOn+4cDwlzdw4y00IuBwHRB8ibmynWDVv4QjCB9jKW6r55re/uQu1846RRYoZdOgb9nWVEicoJ2omfI3RY3It0Ptvfys3xjvd1Tw6SUjlvrOV5kwyS6d3fGmPgfVrN+r5Of0kKLFi1atGjxrfEfyzS0C+vB5L0AAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/python.png":
    /*!***************************!*\
      !*** ./assets/python.png ***!
      \***************************/

    /***/
    function assetsPythonPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAH4SURBVGje7dnRcYMwDAbgtBsYhwFMmwGcawdIex4AsPdfpYQCwWA7lv4kzfXQQx6/E7Isq9fdbot/FS9CiNIJenjCARbKTbiF4M6hAeG1F1o4B0YSXh2kc9bZN0AQn30e34AgHZ3whSEJUjUWwpCE5QtjEie+MCRB+I6lMCbR8oWi/waT/x2+cKz6BM53zCId1QvZSQQ7qhcsrw774SxN96t4lTRuipYnFBfBYv3wWw6WIC+C4glDMfMvx1q4FLPmCgUsTMVs2IKEhXNP/7lwuJXAP4uxIwAB7geJdvXUlIot7GGhxObD7F7wBVJDBQUDTVpyO4QEWjukZpSCBQ0Lgi0sG0pW3eE0ii6M7fDu0iviNaEw1x6guGDnCSRKm6iDFkczByJNmnqzVqFhoYUFS7xZgVC02x2Imjij8gqRmrTraIjvRSCI7yYgrD6jMvGeCgqL06iScysszCvR6FmPZAviYwK+vC7LF0ai0X5SBKGbbV3ojOkbFfwoiKe5jvIJhAPtXtxFIN7uuFCzhSLx6NAExRZS292jhNR292Ch5gsGFlI7CElQTyDglVwvFIp4msGNAhVsphDfKJym3azQWkObD6G1hjblQmsNbVYDwh4WJCzEz7POFWSssVWuEKtEbk/6i9E8TgRh+ffKOHu3f+RtscUW944f4vbZ6VOGM18AAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/quagga.png":
    /*!***************************!*\
      !*** ./assets/quagga.png ***!
      \***************************/

    /***/
    function assetsQuaggaPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAL+AQEE2ZkcAAANqSURBVGje7ddNmpwsEMDxHCHlxwGYxH14HPYvk9cDCP7vf5UsAFuwW7SzjLWa9pn+CVVQ0N++3XHHHXfc8c+EpPiQ0/H9qdBi/1JomEX+/xuhx0kD7vNdwQBaDPDjPaEBWKQD8PYdYQDAygTg3xBa2AyiSjwR+iBg5QuAn5eFgTSI+Ke6KHSwhBTYkFOcvSb0MIeZrINYrgnDKqBSVtUVoQNcfLeTMB3cFSFVIr67ozaPnTBshXUQB3u1FDooBlFLZin0ueDjLjkYRCkMubBItaKFUEwCLdVBFEIPy3YYa7t4PYhCGECvqfjAi7Q2DcyeETo2gp+YRYZF5Pc4juOozwgNoOMKcBa0TNTadi4YQAzOAKoF6Wr7qhQAxPyQFhbp8SGJFwUvVkRwIgbVpG3VjZ8i0o3jp4i043g0i5Avo0XADqmME15EpnWJOf1CaMdH2lrcV2oODaiwZ1RaYfb4zAq9ygMDiHQD2LBN96v8tWAAFvAiE7jw7sdOQ1cFAH6nVhd75py18mMhHH09WBkAFR7odQhrkV8Kod8bXDh3wrvddvvrimCARWAOB3A6jh9DYK4IPWBb0EP47wFAdUPefY6EFn5Kjwsv1XERTHkHrNTCiRh87NkDgOu4IkwqVhRYwhDm6ZLQxpuEB1SY/ieXhHR+fQGhUzKVQgfqUDDAkr5mcLuzZAJ3KEDa4UULTwLArwOhBZaYfleeJDDXhZ5wMQViuyqEriYYUOsFYnoitPUxuMflcnhH6NYbyCL7NKCD8N9RLT5im3BWmmdCD3BYzdQmlDxJQxRcTYh95UkasNIDviJ0qbHvAeKarQhNcRXcC3NFmPLLfbsXdEUY8rO73W+L490d0jAX2z0TXEVoq8JSEfrt8ZZOwiYJ4SQ+FkwhDICX7bawFYHiChO+OT0EJ9eEbnt0ztLAfEYol0Na4kp6sBeFPn6c0sZyckYoijk/ZtOjrgomVYb4w1xOCSov5vpcxCznBJ199KkmTsTYc4LNijmvB4mIlXNCXkydMqrqt8EouLzdrF3Dnhby5eBTTZycFpasmPP+cVXIl4NOj9VbQkpDm1WoKuhtMX3KqJN3hDYNqM+yUxWyYurHreAdoU8fTPb7ryb4bSl8ero9xi4Jc3q6XBBmqcWx8PKn8kvhjjvuuOOOOw7jD4ser2yVhz8iAAAAAElFTkSuQmCC";
      /***/
    },

    /***/
    "./assets/rabbit.png":
    /*!***************************!*\
      !*** ./assets/rabbit.png ***!
      \***************************/

    /***/
    function assetsRabbitPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAJCSURBVGje7djbjZwwFAbgbQFfCiCJC9isXMBs5AKA+ftvJQ8GbDMLc/wfRYpW45fhhU/m3Azz9vZa33EN58uUS1Lwo1aI71oBk1KwmJWCx6IUoloAsF3+pARbBLdQgi9C4oQIIBeEAydgEww4we5CIAW/CQbAxAhxExIrYBUcANwIwW5CAoB3QvAAgGEI+ZcQYr7TAADujLDembewEEIOw+IAAJgIIYdhTlgD2i/kMNwzAGY+oF4LIdhGuBGCb4SREGINzMycPG6hW7DHLXQL/riFbiG2iSCE4zN0C1UY/nBnVgnDb/LUi6WaOcG0aSAEV7cUJYQSyE9OyGPlI5Vq6BTWAZe3cmcEvwq+Ksk+Yc3lj0TXZNPZ22P0CK65e3uN6RFC3dhme43pEVLd2Y4Q9pL+SMASCWHvyy0n3XHYx9MYSKHEwMSqueSCq1Lp87HdKdR96asRIRdSW5F7e4sFcwCW7vngTgC5EL/qqi7hbAtioX3xqD7UxEJohalfSFrhmMt+wamFQxjW0dAjQCtYteDVQtQKx1yWr26p4NRCUAtJKzyGoVd4yGU9HkRCVAvQCBH4tBohAkBSCI+V9DgeroWkFQxO1ygT3LkgPC/8ubC/E18L8UKY1UKJBC3c1MKsjWQ5/8lsViOCrKhqXHNVLRacWrjchEww/4Hg1EL4p5EUTTmjrcnBQjClLoWr1ppEQtBOmCEKmpsWSjSUAm58HPZhR+difwy6HmTC9ZASCe6p8PT/6l9PgPt4KbzWa32X9RdFHhYmFcY4SQAAAABJRU5ErkJggg==";
      /***/
    },

    /***/
    "./assets/raccoon.png":
    /*!****************************!*\
      !*** ./assets/raccoon.png ***!
      \****************************/

    /***/
    function assetsRaccoonPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIC/QDbf7tYAAAKVSURBVGje7ddbkqIwGIbhnq7qBfwQFgA2C4A2C4hdLIDDu/+tzAUHI0aSmJupGv4bldJHyOFL8vFx1llnneWrP3KvGmitz3IBRmNfORYyAAaRG8C3SAdAHy4UADD9zq/XfPkcLWylWW8qVOhg1DuljhJqmFtzq1GkjhMGkdwWmkihYBDRKfdQwOMtQBMtmF1LjhLVmxmM0KrL/OtW1fATNaLUOn7q9Y0GKMMF0YBZh7eRpWMkQihgXKm5/faD2ieo9fv1+vQ1NDFCDo10V5ECepHuKkWkoMEI4yowSrY+V5iQAyIg0s0CouL6Yp6HehCpYZrf6ZgRpeY8yoyoeUpkZh4aJlTotkTrlnm5DK4pUNhG5JKX81/XuzF1JHTLdBZlpxv32/EJysoUhqq6wHXNmzFIWIJhrC7zT3Kgre5Z5ResYGg1Rjra+6UpQLCzqexoRGOs0DV+wY7osqAXsK/1fuEhHJUupb7aDzbECZO9jAYLDwlbSrbL/ckvZA8R/QODDYwmfHY7qonM6ueK2IEsO45dDZE56XkIn/C49LtuwSsoTyv4hV2nAkNVVVUZITztpRanTBXgO1lYuyRBWBaeFGFMFub5mSRgkoUpWRiTBZpkYUoWSBfKZKFPFoZkgXTBJAtlstAkC/0/IEzJwvBfCDWM77akatbj1e97val0vx3Qbm8JmrvwvH4HCB22IJmOnVmKR8G1lTme3V244E4YRbDwIuVylzDV7gXDKWiX0MvFuWi5BIVbcA0M4xTyV8Jzrw7uNat7KTy16IuVV4cLxi1wKEzauwP5PBZ6pX27IJ+wHaJf7sS+fMJGmLeFhWjkfUFq4CqJQiuJwvfB6eCzqrZDyG153Qu3wxPKWWedddZZZ72uv12GQx5T4X0IAAAAAElFTkSuQmCC";
      /***/
    },

    /***/
    "./assets/rhino.png":
    /*!**************************!*\
      !*** ./assets/rhino.png ***!
      \**************************/

    /***/
    function assetsRhinoPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAACAQn1DvYEBwgL+vzzDfj9X7HdoAAAM8SURBVHja7ZrReoMgDIWnICAgyvu/7GpXW0VACKHugnO7Af9HA54k/Pw0NTU1Nf0/da76DqjdQDgAodZaSvJXPw4EAwzMrmJD7vrOQCgAt5t43vruQCDAZ5pMgtNAGMBg98r4Fc4DQQA9O8zD3NPQi1Gu4sL5i2cgCEDZo/R+jVHvV2F63EFoZ6CCAQjrSmwnbJzsWROPDIQA6NM8f1tAJLN+MUlCAwEAvWeFdZvH0PJPBB4YCAAYPfOMnZlsXKr3DgQAaM88mjN7JeZD1ACA2SJqBgBYVDWABnD3KWBI9wBYGukmBGtE+haABfkWnOxAgRSSHwBL4Diigg1A8YTwMwj1hAdzXSAOzwskxvqyJDOSSOvDc0NeGAeMl2bHfdFZUH1xev7Ks+HhVw5QEAiyATSABtAAGgAUgGtFzY0A9Pgl+ToAd+qCXwdQ74rQTQBbWkrvAngXdu4GsOYMcJW0z6gAiwvATEdihcKJdIYVA3zSYkac4vtaeCcRAOKU6kt3YJuAHqrV4V9hdnPaYoDXFry3fZ3QRHbAOBFTDLC1CD4EYojWqgchEYKQnZ090XfchK+4f5WM2PcAFusjCPcpan2MXILHCaPr5jAlB/GQVLUAjBtZwe7s1aZA/cAcnOeEsFQ0JPsr1lz1iHEBhvNUNNjDN6yCJ5y9/aJAD19UAAg4ALXIZ/jT9WKc37ZV4gOQtCO/kIvKPjwvSDRBE4nXE+EAiVuwfaxm/Mwo1Qf+XVJLhdRsSvwRogehBMCktiK6iE0rSk4TWzYi1mIry4713QBkuhkgjcBUBOjMdfOSRSNWlFZIrvdARgO2GKAjF7brlTiE/gvjNd2SEIJ99JYqLVJFLM/mFkMNhQUFINyw2FySiH8oyst0vhXYMmwGiczRE4IB4LkUdy41GKcUD0AEfEA8azR4AOFMIfKySnWIANxXilhTo8sjigRwfltIOjLQBLeGBZDqTw4tc0yA7GLh2CEDpJpE7w+AAkCy6hMDPkA0Cz2HgMEHyCQg+AB5BBPBB7h+UVrtJgS9JaAVAB7+JOOVnawBkFUv5DUAshBEFYBnyZLlXQfYAOuJGKlKeOYMAGhqampqamr6rn4B+pGIWV4OTWAAAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/sheep.png":
    /*!**************************!*\
      !*** ./assets/sheep.png ***!
      \**************************/

    /***/
    function assetsSheepPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAICSURBVGje7dfBccMgEAVQJ6lgkShASVQAwRSgZChAgt9/KzkIHGMhsTjJwTP8iw6eeV6hhVlOp5aWlpaWlpaWR80TZSPOcOrnYeBU/IknCAsAKj4AAKpKGAEA3iaPGmH909tMHOHNYj+OIbzjMENREMdAWMsjYSwIc0kolVAW+pLgSoJEkVAHQmfBidoVevDi9wRhmQKmHYFbAuB2BAt4rbU2AAZz3JhZQcSdJwFXKEhlhS5uPAnMRMdtlRHEGQCRGIgkoIhMrWABeBLwRBIYCoLbCuO6xB2gSAKl5twKInwkGYRSDctGkAC0/rjUUL8OJp4c1t/5LYAl2Z6+th+eL2dw3ODqeI9suvolHqDMI2Lb1S9AOOIWnjDtCT0cT5gzglrrv1d4CitpuILLCH7dncu9ggEmEnYthSFsu7oH4ADgK5xR1esgUJdpZ3fzkzsnTQ3gs2e1rhCW4wmE8xK/FT4LU5BhAL8S5vIkJv9bKE9i1P23wJlp/04Is3gY0Cum4svnfL2+HQw1wnipV1s9EAkNPUR35ggSyVUirYwl9Em9N67iCF3cwncLIqn3pjLeLSkrdDWCTa51SWWOJ5icQDXCeF1vKsw8QWYFUyH0mXYIAvPO22UFWSGITEMFgXtzt9t2WCvzXGFEMpr9uBNXEJmXIBL6g/aElpaWlpaWlkfJN20RytUF/gYEAAAAAElFTkSuQmCC";
      /***/
    },

    /***/
    "./assets/shrew.png":
    /*!**************************!*\
      !*** ./assets/shrew.png ***!
      \**************************/

    /***/
    function assetsShrewPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAH2SURBVGje7dfRkYMgEAbgawEIBUhCAdwNBZgZC1D5+2/lHpIo6C6S+JSZ/d/imC+wEF1+fiQSiUQikUgk3xzFRTunajkSfgEA0zW75K7vCB6vLAOJQN8urACAe6eUUgZAahYiyiSnlAWA0Cho7HP3ANA1CgO4NAoXnBU8L6TQIhhUkloEWxMwNwi+KqwLygt1YB0EK+gDAYeCPRL6I8GjcRqfC+lIwGHCCWHyWSE4obojg8kKwQm6vpBZIU4Iz0J8JPSXbEd8JBQ74oyQTguPQnCCbRH608JcEzxaC3FKQKgITQB6XjBtwswLuk1IvGDbBARWOH5CLYVghPUe7rXnX4WgBQ2grwnds9aJEyKAwM9kCkt7EhhhANKugym+r5QZHoUgBQ1gZPuHMe8vZlqIADpqT7g/AFPe4yRSeLVrRB+mhkwwABAo4fIc6rDvBVXM3rkqAugJwQzPf10sf37RQ37nTAjx9eywADA657pyhl0+2rQX9PIE1Hnls/KNxaedYIb1hUYJtrik98Jjn4R1ucb9Q3zKF347Cz3kzUUkBLVpzDf74VY2i5YSfLacpeDcbduwakqwZVO8Cp5omg0laO6Esmyejl26pRBjTbiHzZxH4twyk0IEANfVFn/ZiFP7OUtTwlunReO2o6oIEolEIpFIJN+WfyxbbKJz9FUwAAAAAElFTkSuQmCC";
      /***/
    },

    /***/
    "./assets/skunk.png":
    /*!**************************!*\
      !*** ./assets/skunk.png ***!
      \**************************/

    /***/
    function assetsSkunkPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAIBAv4j5/CkAAAIwSURBVGje7ZjRkaMwEEQ3hZFwAGitALg6AsAuBWBM55/Kfnh9xwI9M8DXVqn/9ZBa0vSIj4+qqqoqU7JQEomfQuQhZIgE3I8TGkAkAN1hQv4mPA4T8E0YjxLCmzCdIqQrgDOEl34zoTlLiOUsof8HIIfSIvxfAzAcIpTpCgC3AuB5hPAXrRRgkgbsUOqECIhkYJRIjdAJPd5zCNQIlRABjA0AtBnMCJUw20l+IjRCXALQ7iSsprBZphTCegqbZUohXIBJLqYRCqEA6LJpBCdEABhsIzghAMBkG6GsAlvaRei3CO3eu9nYJ8IgRPtEmBXGNMIi9KYRe+rkthEWwTbCrPYrI1JKKR3Mix9Tad2EBkR3d+rBQNjJWyhicBJ6Snjlx570X+m5twPZXoevG2Sa3B2p5oSDcIHqhIMQ9GV4enuFgNb5OuB6uAiaEaOLoBkBF0E3wkXQjBhcBM2Ih4ugGTG6CHKewIzIwOQjECOeGYCPEMilsAkxXdU7YRK04cBdTEK2AFJ0gg5o37vMCb02/ta904jvZjDHv4KAnygaVbf045g8GaGZf4spazerzNKZKWr1oaFPu2UedoTQ0wfqItUnVuU8U4harW48U+i1vOjpX5eFCzSzCv3zs+htBkKI5Fm3LlssuwP92bAAPFn/cKG/jhaFs2MEy8hQZs3cJiGrhD951gNxwvZWxDQvnB0nwKVWThIGOUnQe3t7/Njp74tkqbVeKFVVVVVVVVWGvgDEAKn7LjQjAQAAAABJRU5ErkJggg==";
      /***/
    },

    /***/
    "./assets/squirrel.png":
    /*!*****************************!*\
      !*** ./assets/squirrel.png ***!
      \*****************************/

    /***/
    function assetsSquirrelPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACABAMAAADe0hfGAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAIzSURBVGje7dhRcqQgEAbgZPcE7TgHoCoegCQewNRyAIT//lfZBydVYHcrHTJv/o9M+ck0tFK+vFy5cuXKYV5pn4GIiHw9+BEAAMjvRHQijFiJKMCV6ON6APg6FQIy0QBEGQDciTAAIJoqYS4BrCfCBIAGlMKIOu5QGACApkoIO2E5FEYAGFAK+ykgHQoBAKZKmPdCPhKK+30LA1iOhIkLo0ko7xc52iBMghBMAgQBFmEEgPVWCYNJCNu2n0vhxgF9Nbeq06mwqsJ2pXvULqqLqe7qxz9On1Ud7lxQO2u38EkT1O7eF10V1CfMvVFY1KdcaBD+IXnShBuQqg0oCY/qysIdyPXS/UCAn06E9UyI4URIZ0KdnwnfG1IR8pGwdVAsGskJczsStv2wFKvhrcIbgI+yOSTBHwn0+Xjd1YtvEW5A9XaRhOVMqJIEIZqE3C1AEJJNcN2C50K2CYvQLzYhdgtJEFy34E0CniJEm+C7hYULq02IXEg2Ye0WEheyTchcgE1Av+C44G2C7xbiM4RoE9IzhNUmQD6gacKbIDiLIAHwTMiqIAJY+NlGEwYRQGwXJllYueBlQZkCUrMwKgKahbldiLIQNME3CloZ2oWbKkQmJFEYu4W7KqRuIfOfjAL6hYmNOKMwsxFvFEK3wLN0C/ESLqFI/57sF6zdzZK7hbVbWJhQf85uKcNemG2AcI6yAXBM+GufQp/guPDHBHyRcLYPZmAvjM3X53eShCtXrvxq/gPpmvU6il377QAAAABJRU5ErkJggg==";
      /***/
    },

    /***/
    "./assets/tiger.png":
    /*!**************************!*\
      !*** ./assets/tiger.png ***!
      \**************************/

    /***/
    function assetsTigerPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAAGDvvxBQz99AcIAgn4+vMHRevv4AAARBSURBVHja7ZrJoqsgDEBfGQQERP7/Z1/HW4YAgaorsrMqOTUQMvDv35QpU6ZMmTJlSiy3Y4RQ7xmH7owAlEcryeIfIg4CqIxWEvl8xatjANhrNILXv77e8OuhABRtBE7fAPpQAHA4ULQ/B8AbnH7jzwKwOAB7GkA4qw3Z2MfUwungzu7PA2Af7avwiVC3ZI8fD/Baisp6UKh+rBPlzwSQ/GacLwrVfz7oJACvdXAh2aa1tuF9uflzAb7iyHdV7psEnzkRwKY+QbErARjkkhZ6FQB97zF80Y4xZj9OgLuLAF7b4hKoo2+LsGsAHn9YpZ7I8nAXOhfA8dsG+AB1M/KiSUgpuOjElcvw7f81Uasu3j8ZgC1/EdAqrweQCg6CrgIQaYC4XwzwHNo8YhLhCK8+dQ6Au1vehq6Ry4vngNPhWmRanGcCQqN9QBFajki8VYuozJQRABIpWJOgK7fMNy2BCXoBYv3+OWAZgKQmywk6AVKnv0SJRyZbkJm+/cX+E0AW/97HM6IyB5bsHbr/AADF37UpCN5OCHoArD9EYoIOgIP0JwR4gLZ+6bQmi9ZOtghUPwAXjUHFasJUldWfJr0ALf1uz6oCFkeAA2joF1D1KQ9UQQIUQEO/LVWLNgQBBqChv1IuI+33EAD7sP4GwYYD2Ou+bm3UaKu2wwA09LsgEJXQorANghaAqesPqpVRGMq+VUpZJ2gBWKxDieMShjSC31sAS935QgXZNPqrfQJqUH6AJXHen5hCMhLVkc33eZv4L4V0RKwZ2ybWXltV46+dUADOF+xbWHKy9IQbBNBVAPK3D7KkhEtWU0sp9CCAzxz+x+QqJtyypgIdBEiWQrz1hn/ZRmX8rEtj8pAaB7DXvC8NftnDKj7PAAjwR3DxQNH9vu3KwuZQdGEqUW1HQMKAfCjqSG2vD0CDRsbzQlamgOgA2Co78Gu3YAtX+lut+VyQvN8X78ZIgORVhijHAM1FB8xBbEwI1CZh01IXefrKGngbEhkVu9o0DL4B4/FFZQqyrrCcVD/BPQanr55BdlH+AKQvL6ga9/lEuDVyZZqVHd6XGdm+ULDU8s6tiAVQ9SS73T6lBSOik1PWKk3WRZRiKTQAqcTDPe3bsdwQ+g/Y1jFc2hmoDyg/TJCH1mqkQpKn/I4P6mdDJRogRxGIIwQcqFWYsSLVCsT1zZMkQPswiqu7ynRQ3YVVPwLY2mbDdUI4UbRFBK4pmA2NV0oLdWkLusXd0lL1dLxWvJaSxC3ZH9UmcQWF3mp5JVtmVpNHAkjiIwQN59HdLxisl9KVws6rv2MyRCD2e5wiPSNH9IzeBETj9VcOXQ0d57vvS+4+6XaGU89qscNvBxoX2VYv687y1xOVpFFEFi1f/fuRzpK/eZ6kaAduh5wpXTbgO4htwbx71KHWezJo2RvjeZAFGzLOc8NTpkyZMmXKlClTpkyZksp/8EESW03DelwAAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/turtle.png":
    /*!***************************!*\
      !*** ./assets/turtle.png ***!
      \***************************/

    /***/
    function assetsTurtlePng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAAECAr78gcFBg388Q758wj20ggR8AAALKSURBVHja7ZnZdoMgFEUbZgRU/v9nGwcSwYsMMV19uPupXUllywEu0J8fBEEQBEEQBEEQBEEQBEEQ5N/w6IRQxn2AM0pKf3CngJDvtt9wKf5GQDGfg6nvC+jBXzHo7woQ40sY0itgyRNb6H5XFPBjl4CV+7sZeukgSl3gVFcE9PBmjmbefns0vQ5gnQlCtQnY5LXMBI2+Z+eunUMuYqAhKN0iYE/d6iao/WBmc/PQrePPjsvPukEAiPVkoPcP5PqbBDuBrR007Y/T1QJgqImBSlrJI1/fVJUCNryNk4pnDIRL+znDKx3DeaKaFXgpLy1yeD4ZYKSB61QUjakTCA/ncVcfU0xCcmHVilj8Z583zQnYyFd6wEC481I3n6vAMgATU1EhQI7NTUlTm8GYNKXgmbN0gcuvymWB58A5PXQxEP6cgAAmzgy4iiaBzNI2AsVGQpU4HUNxF3QKPJdfV5cAmIGz9YMwW14qE4Az0OVpOPg2WCaBbR4p4NsFAXoqqNNlzde5BLYhlwZWFhDnp6grAZtLYKtUaQaktRjxx7VAPgE4A1oWiLcDizHrSwDMgFXsB45L7fzI93BIID9x5Nne1GzJ3jvNdeHghQR0fsoCn1ZtSu18CEyX5sBFQuLcP5XbcjEPflxX7sl3JwBm0Hwy0r47gW0OJZ+HzUL90UxDO/1uaBhcDWfD+Pw1Pe4Q8FPL4TTal5B7BETT6fhoYNSfR1A8ADZhlkEoGu8HRn8j+/mgReDW9kM5aBDQ/mbmNoHJ345qEoiK7UBLtzbwGU2adG/atRTn77wa77PmBoHhuCX/aAmYozJZK6CL110Nd4rHnVmtAIsq24eMh2NTpYCFj7ad2HeetcVIVVxDdIVAKwUodLD9gFdVY5UCDL5f+XwUmEoBHi2fd2bQKkDvESCtAprukHsERHgexf+OIQiCIAiCIAiCIAjyz/gF0u64To/v8lwAAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/walrus.png":
    /*!***************************!*\
      !*** ./assets/walrus.png ***!
      \***************************/

    /***/
    function assetsWalrusPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAMGSURBVGje7dhBupsgEADgd4SKui9f4r7Esq8vZV9F7n+VGhAEZZgxb9c6K2OS32HEQf34uOKKK6644n+Jah83ZWw8Kyi+lYW78THzt4QNgImiwEwc0xuCSgQjTgtNChh9Wuh2grGVYH1ckLovCGwPuErIpah+PLdl5y9YaA7CvAq+JDbJP7BwGIQbhgxb7hAFQR2FIQhTGCUsHMvgCiF9Oh0m1BlBb8Lkc/wBCm1GmLfyzP4I5wQT7feF/g4KHSDsRwfPKJkTxKHC+rywO8vjG0JaII4ID3/AdUPsJ8pUlQXtD+g3xL7G/C0hqsRnhQhzmD/rhhOYJ57FDqOgSr6if32rRblH5QB7cYYUsS7n//Q7Ofvx15wmzMtwBpUVBDEH3szb+Rvja58qTJVgx1E04UNZsOm7buRGMsbXPkXg0v7QnkeZCB0u2MxFG4QqFVRYw0DBNpKhsXNAvU6JTBY+QxWWP8+2bIM7Hzr+liKIZV3klahuj7Ut6LiJUgQ76+7ztgjquHlQhHV11TxNfJ0sRCH0hViozwidvyZjoaUIbbLIjckJXHvHKWHyY48XZaKw/XgT2i8L6qtCY74qKLpgYoF5oUnbDV2ovaCIgswLPFrzKAKPBJe8uO+Xn7IgIqE9rB4UYTgIh9tsRBh93abcHUlFEKboylLZu2xM0NHVnb09LQlqTdR3mOMt7ogIvtzNWrQWupdAhNFN5jlXSE4SdFidDFBITDB+hazzj0wEwRUiV4YBEVg4ErMJK6gMoFBvE08tTA2WAReGZQAi86gwYUKzHasxnMF3lqCwVW7ozHCHBwEK2Sec7IsASJCIwFFBlQGNPvszJIUBFeoyMOPvH1pyCpAgySlAQjkFgQsNcS7AQnEQuxdTWYGdSCEvdNT5CAnIZNi9l8oI69PkDBOfZeHmF5TCWDQHhWgAubaiJdqjunjeHZJ4xhMF6LQy8/IqxCPZJRDBFetnPJFE8tCOCQ/fJ3r/njbskRThyatC3FRJuPV9/6iwYMuveqCSV1xxxRX/avwF3HyWGo6xlhQAAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/wolf.png":
    /*!*************************!*\
      !*** ./assets/wolf.png ***!
      \*************************/

    /***/
    function assetsWolfPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEX///8AAAD///////////////////////////////////////////////////////////////9TvwflAAAAEXRSTlMAAGDvvxBQz0BwgK8wIJ+P3+rdXCMAAAOdSURBVHja7ZvbdqUgDIYnHAQR1Lz/y86FtRsQIirYrhlyx+qifEKA5Cf7z59u3bp169atW7ejQWSMIwoJVyzd5SbAgIiI6sr4mS43AQQiIiK7AKC2LroqgCgfX289cKwKcPievO09TF2AqXR8i20A0BUCzK0A5rLxHbYCwLKzYGkHYErGl7wdAC+ZAoPtAIoOo7UlwFpwC2BLgIIpWNsCqNJTuBXA6XksWgPsV5Jji9j3m5qMTk1AEwB0AOBGhZHxaQhO4XYAM+gZk7Ya6bA9AE6YNa7eALhgHaADdIAO0AH+RQA+asaJIWc9qKYA4yHoCG/KxnnBV26UB2B0IlMBYAhyv4MtYVzcAGC14BThA0MQlTXZBZx2fN7Pgf8NQAgh1E8BTGwXjeyoXgfgJhQr7PwuwHTUSrR6D4AnZQI5vwXA7bk81BIgO36cHLcCGAh9YnoBYCkUCZtdRrRWODYHOFNLeX2AcH+fiaULsVr3AEZMiVTnjwUJWfEWAMNLKxBGjNGOvQNgowjI0wnHT/A32YzLcPcQwMURmE7P9ZrzWSUfAcjDBaPToizPnUWB01wHOEpyOn3mzPkLYX4AkLjjdXJ7+Ett8nfiVQCGJEAmAzHpfOkGwIAnAN9esEoSAO0tAMszAMy4yOH3T2TGJQH24+ASgEynQBqWz5K70NG3vyQA9s14BUBmgm0NwvvkJVgWhYgsCfBFcAUgp4lvALvTyWCfbX83aeXiIsCMWYDJO/gYxg2bAcDlEgDDPAD7fPWXn3oNDjkAZBcABiQANu8Ug7Rm99NPw+QBUBcDSE4BENODqyQAuCwFIFQo1JGD8Cne7ybft3gGFA3g3QLKhQ0KQMibMWEQ5mx73i3rlh8fGh7AMXiqBwAAoP1gx2u8BnBaP/BTAHM+hXoHQPwagKpLwMvzAt4EQGBpOZUj0vgHAHNxbjgeArEqACx4MSiqIeFQE8BhMgClSKeqAF6OTrqhXKmCmycADIm1TflKYgUeAXgxAiHSMFpKegLg37JKFlRRudoAfpiUUQqXMyHjEUAYiSX+v1VRbFYbIFQe1sjJ3YznBVcPAaJYlS/fZ61jZWLmQ4BEuqqEEELw1ANqCwDq0TarC1UFyKTspeNXAAC7no5PFP9WAAB58ojHqZrLGgDbTwfyz3hk9XUdAJAmh7AOdM9KAADSpFxhGs76VQMAALuosKByLCh9rwkAAKCZ2WywZR36z3e6devW7VfaX1RWEFui2iCPAAAAAElFTkSuQmCC";
      /***/
    },

    /***/
    "./assets/wolverine.png":
    /*!******************************!*\
      !*** ./assets/wolverine.png ***!
      \******************************/

    /***/
    function assetsWolverinePng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAALZSURBVGje7ZhtcqQgEIaTzQlAPACV8QAu4QDOFAcYwftfZf1WELsb/LG7Vb4/kpo4PNJN0x/5+Lh169at/0SfjHFlrJJslhq1flwEER7dqHr4Hv/pZtl6WlmoziqYIJY1/ZLvbqfnAJiITkKEclnh5KPzZBnTyzOIoNcVrgtk1/11EiB0JDUIwRqM8D4nfE0+LM4Xv4YfLUwYnF6drLdyfGZRAj91QP+wpBDOttCfI43AgVOgEapzgqMQag6GAkL4NXynhAgWOYsholo4oKSGCRqN6Dcck5/V5XshSATobnIKAMwPTBMILUigmNGABDZkZq5+QCNgwiweMceqeoA3NEKQqncZH6sXO/mZ6kmtOHuJMwCZsLvmT5ZHYGYrN5mExQ6ZTZg30bB8gljyazaBjSnhEkFHvJBOYFcJ9q8QuOr3rlZPphOKLRDFGk/ffWisTR1CKLbqUsxZbe2hflMIkWRbs4d/xWACkmtrlCDQVI8RDJ6pYQIn1BuYUFLKBaVmvWL+fOrlcHGCi7WUbjGRYoWNEewU48NvvG662KG6LUQhwvzuV+xQZ+e8kXjAz6JGCHgDgcUkGhAWIxRoM4feTYIbEm63mhW4ASGI4B4Gf2rTclQbdgEzFMmTOkgnfs6gZNr9nmXYDrWkbG/8o/NCRJIIlR8+EbMwAvffyY+Hg1Y94y05+IVAEJ7nqsPpEmq3Z7gOyg2JUO3PX4d+pBB4fA9NQgdidpaXoR9JBLF7LQ/9SCLwLaLk6pUmqY8aV7m+ExL9m5UOGlMKoVjsNt3il3diL2emm/yYgiBoTEmEclzzmM0PJgQSYQuJVhwafFpHusbl9N8ll97TinDQTe+K/eIrMwhlWOuSCbw7JqfE3l6HSf7KxNpmzhcm7secmdflzjg87secqVlenZrbC5Oan+RzCNXlqZlHB/ekedNcnppFxI9pBB4zIonAqqMfEwm8TiLcunXrn9EfdCAUTiCcYbAAAAAASUVORK5CYII=";
      /***/
    },

    /***/
    "./assets/wombat.png":
    /*!***************************!*\
      !*** ./assets/wombat.png ***!
      \***************************/

    /***/
    function assetsWombatPng(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return __WEBPACK_DEFAULT_EXPORT__;
        }
        /* harmony export */

      });
      /* harmony default export */


      var __WEBPACK_DEFAULT_EXPORT__ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBBAMAAAAVjsRjAAAAElBMVEX///8AAAD///////////////+k0Pl/AAAABXRSTlMAAECAv9KsvScAAAG8SURBVGje7dhNbsMgEAXgHCGAs6+VZl+SeF9XYl/bvPtfpQs3iQ0MzJRVJd7KipRPw7OMfw6HlpaWlpaWln8Ylc15AAAs1+2PR76g1/8DgLdl4YRrOAC2sQwBIzHAmi+G4MkBdlNkhNcQ0QAAgL4sLL/HBsksZQHr4R1ExrJglVLaUQB8zxEMMpmLwkSv4FVmVpiHPICxJBTjqwXYamGuFkALA7jLIIR3JoCZEAwXgCcExxaQFjo+AJsUBoEwpQQtALCkBMki4FOCZBFAShABeIsFIxM+YqGrFi4y4TsWHADPd2JBrztk93ehqxYuqF2FQ2WTGrWCqRZO1cJQLaBWENeAz0AQ1xBdWUO1IAbCPUpeQ7hPymsI9+qLWAjvF04s2GqhDwTxyYzu3Z24yFAQ7w5TdPeXDpF4CjoLi0w9gejbXVAk9SRmbo5ZZO5djzPKlH9b1Jwis4LhFJkVnheqpxbkFVOYlFLqlih3KQjPi2R8naJ7WCRP6Hc/b4axBWG7WprmCEso7OiMYHZFkjRHsAGwpzPCKV1kSDOEqMgnXfqK8mh8pgRfEhxV5J4WfMkh6OOhpaWlpaWlRZofI0qwfBNtipMAAAAASUVORK5CYII=";
      /***/
    }
    /******/

  };
  /************************************************************************/

  /******/
  // The module cache

  /******/

  var __webpack_module_cache__ = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    if (__webpack_module_cache__[moduleId]) {
      /******/
      return __webpack_module_cache__[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = __webpack_module_cache__[moduleId] = {
      /******/
      // no module.id needed

      /******/
      // no module.loaded needed

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/

    /******/
    // Return the exports of the module

    /******/


    return module.exports;
    /******/
  }
  /******/

  /************************************************************************/

  /******/

  /* webpack/runtime/define property getters */

  /******/


  (function () {
    /******/
    // define getter functions for harmony exports

    /******/
    __webpack_require__.d = function (exports, definition) {
      /******/
      for (var key in definition) {
        /******/
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/

      }
      /******/

    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/hasOwnProperty shorthand */

  /******/


  (function () {
    /******/
    __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/make namespace object */

  /******/


  (function () {
    /******/
    // define __esModule on exports

    /******/
    __webpack_require__.r = function (exports) {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/


      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/

  })();
  /******/

  /************************************************************************/

  /******/
  // module exports must be returned from runtime so entry inlining is disabled

  /******/
  // startup

  /******/
  // Load entry module and return exports

  /******/


  return __webpack_require__("./src/index.js");
  /******/
}();
},{}],"../../../../../../../../usr/local/lib/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52899" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../../usr/local/lib/node_modules/parcel/src/builtins/hmr-runtime.js","../dist/anonymous.js"], null)
//# sourceMappingURL=/anonymous.54719c5c.js.map