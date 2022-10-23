
function result() {

    var states = {

        ABIA: {
            killings: "95",
            kidnapping: "80",
            ROBBERY: "97"
        },
        ADAMAWA: {
            killings: "98",
            kidnapping: "89",
            ROBBERY: "106"
        },
        AKWAIBOM: {
            killings: "60",
            kidnapping: "71",
            ROBBERY: "51"
        },
        ANAMBRA: {
            killings: "95",
            kidnapping: "86",
            ROBBERY: "125"
        },
        BAUCHI: {
            killings: "75",
            kidnapping: "55",
            ROBBERY: "51"
        },
        BAYELSA: {
            killings: "99",
            kidnapping: "90",
            ROBBERY: "100"
        },
        BENUE: {
            killings: "100",
            kidnapping: "100",
            ROBBERY: "32"
        },
        BORNO: {
           killings: "87",
           kidnapping: "40",
           ROBBERY: "61"
        },
        CROSSRIVER: {
            killings: "65",
            kidnapping: "80",
            ROBBERY: "134"
        },
        DELTA: {
            killings: "95",
            kidnapping: "85",
            ROBBERY: "121"
        },
        EBONYI: {
            killings: "98",
            kidnapping: "80",
            ROBBERY: "62"
        },
        EDO: {
            killings: "99",
            kidnapping: "90",
            ROBBERY: "163"
        },
        EKITI: {
            killings: "45",
            kidnapping: "70",
            ROBBERY: "36"
        },
        ENUGU: {
            killings: "105",
            kidnapping: "80",
            ROBBERY: "89"
        },
        GOMBE: {
            killings: "95",
            kidnapping: "30",
            ROBBERY: "22"
        },
        IMO: {
            killings: "95",
           kidnapping: "110",
           ROBBERY: "175"
        },
        JIGAWA: {
            killings: "91",
            kidnapping: "60",
            ROBBERY: "23"
        },
        KADUNA: {
            killings: "125",
           kidnapping: "80",
           ROBBERY: "45"
        },
        KANO: {
            killings: "103",
            kidnapping: "79",
            ROBBERY: "65"
        },
        KATSINA: {
            killings: "95",
           kidnapping: "80",
           ROBBERY: "75"
        },
        KEBBI: {
            killings: "55",
           kidnapping: "86",
           ROBBERY: "77"
        },
        KOGI: {
            killings: "95",
            kidnapping: "50",
            ROBBERY: "115"
        },
        KWARA: {
            killings: "90",
            kidnapping: "83",
            ROBBERY: "86"
        },
        LAGOS: {
            killings: "115",
            kidnapping: "80",
            ROBBERY: "95"
        },
        NASARAWA: {
            killings: "90",
            kidnapping: "80",
            ROBBERY: "72"
        },
        NIGER: {
            killings: "95",
            kidnapping: "90",
            ROBBERY: "45"
        },
        OGUN: {
            killings: "95",
            kidnapping: "81",
            ROBBERY: "95"
        },
        ONDO: {
            killings: "95",
           kidnapping: "90",
           ROBBERY: "105"
        },
        OSUN: {
            killings: "125",
            kidnapping: "110",
            ROBBERY: "73"
        },
        OYO: {
            killings: "95",
            kidnapping: "60",
            ROBBERY: "65"
        },
        PLATEAU: {
            killings: "122",
            kidnapping: "90",
            ROBBERY: "71"
        },
        RIVERS: {
            killings: "85",
            kidnapping: "90",
            ROBBERY: "82"
        },
        SOKOTO: {
            killings: "115",
            kidnapping: "109",
            ROBBERY: "78"
        },
        TARABA: {
            killings: "103",
            kidnapping: "88",
            ROBBERY: "77"
        },
        YOBE: {
            killings: "96",
            kidnapping: "89",
            ROBBERY: "72"
        },
        ZAMFARA: {
            killings: "123",
            kidnapping: "63",
            ROBBERY: "75"
        },
        FCT: {
            killings: "97",
            kidnapping: "80",
            ROBBERY: "75"
        }
        
    } 

    var state = document.getElementById('state').value;
    var input = state.toUpperCase();
    var definition = states[input];
    var output = document.getElementById("output");

    if (definition == undefined) {
        output.innerHTML = `<hr> There is no information about this state. <hr>` ;
    } else {
        output.innerHTML = `<hr> Rates of killing is ${definition.killings} per month. <hr> Rates of kidnapping is ${definition.kidnapping} per month. <hr> Rates of robbery is ${definition.ROBBERY} per month. <hr>`;
    };
};











































