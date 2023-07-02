const DEFEAT = 1;
const DRAW = 2;
const VICTORY = 3;

const TEAM_SMALL = 0;
const TEAM_MIDDLE = 1;
const TEAM_STRONG = 2;
const TEAM_VSTRONG = 3;

const weights = {};

weights[18]    = TEAM_VSTRONG;   //Flamengo
weights[56]    = TEAM_VSTRONG;   //Palmeiras
weights[30]    = TEAM_VSTRONG;    //Atletico MG
weights[26]    = TEAM_VSTRONG;    //Fluminense
weights[63]    = TEAM_STRONG;    //Santos
weights[185]   = TEAM_STRONG;    //Atlético PR
weights[44]    = TEAM_STRONG;    //Internacional
weights[57]    = TEAM_STRONG;    //São paulo
weights[45]    = TEAM_STRONG;    //Grêmio
weights[22]    = TEAM_STRONG;    //Botafogo
weights[65]    = TEAM_STRONG;    //Corinthians
weights[23]    = TEAM_STRONG;    //Vasco
weights[37]    = TEAM_STRONG;    //Cruzeiro
weights[68]    = TEAM_MIDDLE;     //Bahia
weights[131]   = TEAM_MIDDLE;     //Fortaleza
weights[33]    = TEAM_MIDDLE;     //América-mg
weights[64]    = TEAM_MIDDLE;     //Reb Bull Bragantino
weights[5]     = TEAM_SMALL;   //Chapecoense
weights[79]    = TEAM_SMALL;   //Sport
weights[204]   = TEAM_SMALL;   //Cuiabá
weights[115]   = TEAM_SMALL;   //Goiás
weights[84]    = TEAM_SMALL;   //Coritiba
weights[105]   = TEAM_SMALL;   //Ceará
weights[98]    = TEAM_SMALL;   //Atlético GO
weights[43]    = TEAM_SMALL;   //Juventude
weights[6]     = TEAM_SMALL;   //Avaí

var victory_icon = "https://cdn.pixabay.com/photo/2013/07/13/10/31/card-157403_960_720.png";
var draw_icon = "https://cdn.pixabay.com/photo/2012/04/18/15/23/black-37329_960_720.png";
var defeat_icon = "https://images.emojiterra.com/google/android-10/512px/1f7e2.png";

const ICONS = {};
ICONS[DEFEAT] = 'https://cdn.pixabay.com/photo/2013/07/13/10/31/card-157403_960_720.png';
ICONS[DRAW] = 'https://cdn.pixabay.com/photo/2022/06/14/15/50/rounded-7262275_960_720.png';
ICONS[VICTORY] = 'https://images.emojiterra.com/google/android-10/512px/1f7e2.png';

function getLastUpdate() {
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", window.location.href + '/last_update.json', false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

const LAST_UPDATE = JSON.parse(getLastUpdate());

const RICA_PREDICTIONS = {
    "18": {
        "4850": 3,
        "4854": 3,
        "4872": 2,
        "4874": 3,
        "4884": 1,
        "4899": 3,
        "4904": 3,
        "4914": 1,
        "4924": 3,
        "4935": 2,
        "4948": 1,
        "4954": 3,
        "4963": 1,
        "4974": 3,
        "4997": 1,
        "5016": 1,
        "5034": 3,
        "5054": 3,
        "5081": 3,
        "5094": 3,
        "5115": 1,
        "5134": 3,
        "5156": 1,
        "5177": 1,
        "5194": 3,
        "5220": 3,
        "5234": 1,
        "5259": 2,
        "5274": 3,
        "5294": 3,
        "5321": 3,
        "5334": 3,
        "5353": 2,
        "5374": 3,
        "5394": 3,
        "5422": 3,
        "5438": 3,
        "5454": 3
    },
    "22": {
        "4847": 3,
        "4859": 3,
        "4870": 3,
        "4877": 3,
        "4884": 1,
        "4897": 3,
        "4903": 2,
        "4922": 3,
        "4927": 3,
        "4936": 1,
        "4947": 3,
        "4957": 3,
        "4968": 1,
        "4977": 1,
        "4995": 2,
        "5021": 3,
        "5037": 3,
        "5057": 1,
        "5077": 3,
        "5096": 1,
        "5117": 3,
        "5137": 3,
        "5158": 3,
        "5177": 1,
        "5199": 2,
        "5217": 3,
        "5237": 3,
        "5260": 3,
        "5277": 3,
        "5301": 3,
        "5315": 1,
        "5337": 3,
        "5354": 1,
        "5377": 3,
        "5397": 3,
        "5413": 1,
        "5437": 3,
        "5462": 2
    },
    "26": {
        "4844": 3,
        "4861": 3,
        "4864": 3,
        "4882": 3,
        "4886": 1,
        "4894": 3,
        "4909": 2,
        "4914": 1,
        "4928": 3,
        "4934": 3,
        "4944": 3,
        "4953": 2,
        "4964": 3,
        "4977": 1,
        "4994": 3,
        "5014": 3,
        "5035": 1,
        "5060": 3,
        "5074": 3,
        "5097": 1,
        "5114": 3,
        "5138": 1,
        "5154": 3,
        "5174": 3,
        "5202": 2,
        "5214": 3,
        "5234": 1,
        "5254": 3,
        "5273": 1,
        "5300": 3,
        "5314": 3,
        "5341": 3,
        "5354": 1,
        "5376": 1,
        "5399": 3,
        "5414": 3,
        "5434": 3,
        "5455": 2
    },
    "30": {
        "4843": 3,
        "4862": 2,
        "4863": 3,
        "4880": 3,
        "4883": 2,
        "4893": 3,
        "4905": 2,
        "4913": 3,
        "4926": 1,
        "4934": 1,
        "4943": 3,
        "4959": 2,
        "4963": 3,
        "4973": 3,
        "4998": 3,
        "5013": 3,
        "5037": 1,
        "5061": 3,
        "5073": 3,
        "5098": 1,
        "5113": 3,
        "5142": 2,
        "5153": 3,
        "5173": 2,
        "5200": 3,
        "5213": 3,
        "5241": 3,
        "5253": 3,
        "5273": 3,
        "5297": 1,
        "5313": 3,
        "5334": 1,
        "5359": 2,
        "5373": 3,
        "5395": 1,
        "5413": 3,
        "5433": 3,
        "5456": 1
    },
    "44": {
        "4843": 1,
        "4858": 3,
        "4864": 1,
        "4878": 3,
        "4888": 3,
        "4898": 3,
        "4911": 3,
        "4918": 3,
        "4925": 2,
        "4937": 1,
        "4948": 3,
        "4960": 3,
        "4968": 3,
        "4978": 3,
        "4999": 2,
        "5018": 3,
        "5042": 2,
        "5058": 3,
        "5076": 1,
        "5098": 3,
        "5119": 2,
        "5138": 3,
        "5161": 3,
        "5178": 2,
        "5196": 1,
        "5218": 3,
        "5240": 3,
        "5258": 3,
        "5278": 3,
        "5294": 1,
        "5318": 3,
        "5337": 1,
        "5362": 2,
        "5378": 3,
        "5393": 2,
        "5418": 3,
        "5435": 1,
        "5458": 3
    },
    "56": {
        "4846": 3,
        "4860": 3,
        "4866": 2,
        "4874": 1,
        "4886": 3,
        "4896": 3,
        "4908": 3,
        "4917": 1,
        "4926": 3,
        "4936": 3,
        "4952": 3,
        "4956": 3,
        "4965": 1,
        "4981": 3,
        "4996": 3,
        "5019": 2,
        "5036": 3,
        "5053": 2,
        "5076": 3,
        "5099": 3,
        "5116": 3,
        "5136": 1,
        "5156": 3,
        "5174": 1,
        "5195": 2,
        "5216": 3,
        "5236": 2,
        "5253": 1,
        "5277": 1,
        "5296": 3,
        "5320": 3,
        "5336": 2,
        "5356": 3,
        "5382": 2,
        "5396": 3,
        "5421": 3,
        "5436": 3,
        "5458": 1
    },
    "57": {
        "4845": 3,
        "4854": 1,
        "4865": 2,
        "4875": 2,
        "4889": 2,
        "4895": 3,
        "4906": 1,
        "4915": 3,
        "4931": 3,
        "4942": 3,
        "4945": 3,
        "4957": 1,
        "4965": 2,
        "4975": 3,
        "5000": 3,
        "5013": 1,
        "5035": 3,
        "5058": 1,
        "5075": 3,
        "5102": 2,
        "5115": 3,
        "5135": 3,
        "5157": 1,
        "5175": 3,
        "5201": 3,
        "5215": 2,
        "5239": 3,
        "5255": 3,
        "5275": 3,
        "5293": 2,
        "5315": 3,
        "5336": 1,
        "5358": 3,
        "5375": 3,
        "5395": 3,
        "5414": 1,
        "5435": 3,
        "5460": 3
    },
    "63": {
        "4844": 1,
        "4857": 3,
        "4867": 3,
        "4875": 1,
        "4887": 3,
        "4900": 3,
        "4907": 3,
        "4917": 2,
        "4932": 2,
        "4937": 3,
        "4943": 1,
        "4958": 3,
        "4967": 3,
        "4976": 1,
        "4997": 3,
        "5017": 3,
        "5041": 3,
        "5057": 3,
        "5079": 2,
        "5097": 3,
        "5122": 3,
        "5133": 2,
        "5157": 2,
        "5181": 3,
        "5197": 3,
        "5219": 3,
        "5236": 1,
        "5257": 3,
        "5278": 1,
        "5297": 3,
        "5317": 3,
        "5335": 2,
        "5357": 2,
        "5374": 1,
        "5400": 3,
        "5417": 3,
        "5437": 1,
        "5457": 3
    },
    "65": {
        "4847": 1,
        "4856": 3,
        "4866": 1,
        "4876": 3,
        "4885": 2,
        "4898": 1,
        "4906": 2,
        "4916": 3,
        "4930": 3,
        "4941": 3,
        "4946": 3,
        "4962": 2,
        "4966": 3,
        "4976": 2,
        "4994": 1,
        "5016": 3,
        "5039": 3,
        "5056": 3,
        "5073": 1,
        "5096": 3,
        "5121": 3,
        "5136": 2,
        "5159": 2,
        "5176": 3,
        "5196": 3,
        "5215": 1,
        "5233": 2,
        "5256": 3,
        "5276": 3,
        "5298": 3,
        "5316": 3,
        "5340": 3,
        "5357": 1,
        "5376": 3,
        "5394": 1,
        "5416": 3,
        "5442": 3,
        "5456": 3
    },
    "185": {
        "4845": 1,
        "4862": 3,
        "4872": 3,
        "4873": 2,
        "4892": 3,
        "4894": 1,
        "4912": 3,
        "4921": 3,
        "4932": 3,
        "4938": 3,
        "4949": 2,
        "4962": 3,
        "4972": 1,
        "4982": 3,
        "4996": 1,
        "5020": 3,
        "5042": 3,
        "5062": 3,
        "5077": 1,
        "5102": 3,
        "5113": 1,
        "5134": 1,
        "5162": 3,
        "5179": 3,
        "5202": 3,
        "5221": 3,
        "5242": 3,
        "5257": 1,
        "5282": 3,
        "5302": 3,
        "5316": 1,
        "5342": 2,
        "5355": 2,
        "5382": 3,
        "5402": 3,
        "5418": 1,
        "5440": 3,
        "5462": 3
    }
};
const ALESSANDRO_PREDICTIONS = {};
const CUSTOM_PREDICTIONS = {
    "18": {
        "5016": 1
    },
    "22": {
        "5462": 2
    },
    "26": {
        "4844": 3
    }
};

const METHODOLOGIES = [
    {
        'name': "Rica perrone",
        'id': "rica-methodology"
    },
    {
        'name': "Alessandro",
        'id': "alessandro-methodology"
    },
    {
        'name': "Personalizado",
        'id': "custom-methodology"
    }
];

var state = {};

function start () {
    //reset();
    readLocalStorage();
    getMatchs();
    getTeams();
    setMethodology();
    calculatePredictions();
    renderBoard(this.state.active_team);
    calculatePlannedClassification();
    renderPlannedClassification();
    updateTeamsExplanation();
}
function reset() {
    let board = document.getElementById('board');
    board.innerHTML = '';
    let classification = document.getElementById('classification');
    classification.innerHTML = '';
}

function setMethodology() {
    this.state.active_methodologies = this.state.active_methodologies || 0;
    this.state.savedPredictions = null;
    if (this.state.active_methodologies == 0) {
        this.state.savedPredictions = RICA_PREDICTIONS;
    } else if (this.state.active_methodologies == 1) {
        calculateAlessandroPredictions();
        this.state.savedPredictions = ALESSANDRO_PREDICTIONS;
    } else {
        this.state.savedPredictions = CUSTOM_PREDICTIONS;
    }
    const methodologies = document.getElementsByClassName('methodology-class');
    for (var i = 0; i < methodologies.length; i++) {
        methodologies[i].style.display = 'none';
    }
    const methodologiesBtn = document.getElementsByClassName('btn-methodologies');
    for (var i = 0; i < methodologiesBtn.length; i++) {
        methodologiesBtn[i].classList.remove('btn-primary');
        methodologiesBtn[i].classList.add('btn-secondary');
    }
    document.getElementById(METHODOLOGIES[this.state.active_methodologies].id).style.display = 'block';
    document.getElementById(METHODOLOGIES[this.state.active_methodologies].id + '-btn').classList.remove('btn-secondary');
    document.getElementById(METHODOLOGIES[this.state.active_methodologies].id + '-btn').classList.add('btn-primary');
    //console.log(this.state.savedPredictions);
    //calculateAlessandroPredictions();
    //this.state.savedPredictions = ALESSANDRO_PREDICTIONS;
}

function readLocalStorage() {
    let default_state = {
        teams: {},
        origin: [],
        matches: {},
        savedPredictions: {},
        ricaPredictions: {},
        alessandroPredictions: {},
        customPredictions: {},
        calculatedTeams: {},
        plannedClassification: [],
        methodologies: METHODOLOGIES,
        active_edit: false,
        active_team: 18,
        active_methodologies: 1
    };
    /* if (localStorage.state) {
        this.state = JSON.parse(localStorage.state);
    } */
    if (Object.keys(this.state).length === 0) {
        this.state = default_state;
    }
    this.state.origin = LAST_UPDATE;
    this.state.ricaPredictions = RICA_PREDICTIONS;
}
function getTeams() {
    Object.keys(this.state.origin['tabela']).forEach(table_id => {
        let team_id = this.state.origin['tabela'][table_id]['time']['time_id'];
        let team_data = this.state.origin['tabela'][table_id]['time'];
        this.state.teams[team_id] = team_data;
    });
}
function getMatchs() {
    Object.keys(this.state.origin.partidas).forEach(round => {
        this.state.origin.partidas[round].forEach(match => {
            this.state.matches[match.partida_id] = match;
        });
    });
}
function calculateAlessandroPredictions () {
    Object.keys(this.state.matches).forEach(match_id => {
        let visitante_id = this.state.matches[match_id].time_visitante.time_id;
        let mandante_id = this.state.matches[match_id].time_mandante.time_id;
        if (!ALESSANDRO_PREDICTIONS[mandante_id]) {
            ALESSANDRO_PREDICTIONS[mandante_id] = {};
        }
        if (!ALESSANDRO_PREDICTIONS[visitante_id]) {
            ALESSANDRO_PREDICTIONS[visitante_id] = {};
        }
        //Cálculo mandante
        if (weights[visitante_id] !== TEAM_VSTRONG) {
            ALESSANDRO_PREDICTIONS[mandante_id][match_id] = VICTORY;
        } else {
            ALESSANDRO_PREDICTIONS[mandante_id][match_id] = DRAW;
        }
        //Cálculo visitante
        if (weights[mandante_id] == TEAM_VSTRONG || weights[mandante_id] == TEAM_STRONG) {
            ALESSANDRO_PREDICTIONS[visitante_id][match_id] = DEFEAT;
        }
        if (weights[mandante_id] == TEAM_MIDDLE) {
            ALESSANDRO_PREDICTIONS[visitante_id][match_id] = DRAW;
        }
        if (weights[mandante_id] == TEAM_SMALL) {
            ALESSANDRO_PREDICTIONS[visitante_id][match_id] = VICTORY;
        }
    });
}
function calculatePredictions() {
    this.state.calculatedTeams = [];
    Object.keys(this.state.savedPredictions).forEach(team_id => {
        this.state.calculatedTeams[team_id] = {};
        this.state.calculatedTeams[team_id]['predictions'] = 0;
        this.state.calculatedTeams[team_id]['succeed'] = 0;
        this.state.calculatedTeams[team_id]['results'] = {};
        Object.keys(this.state.savedPredictions[team_id]).forEach(match_id => {
            let match = this.state.matches[match_id];
            let result = {};
            result['in_home'] = match['time_mandante']['time_id'] == team_id;
            result['prediction'] = this.state.savedPredictions[team_id][match_id];
            result['scoreboard'] = match['placar'];
            result['date_of_match'] = match['data_realizacao_iso'];
            if (match['placar_mandante'] !== null && match['placar_mandante'] == match['placar_visitante']) {
                result['match_result'] = DRAW;
                this.state.calculatedTeams[team_id]['succeed'] += 1;
            }
            if (
                result['in_home'] && match['placar_mandante'] > match['placar_visitante'] ||
                !result['in_home'] && match['placar_mandante'] < match['placar_visitante']
            ) {
                result['match_result'] = VICTORY;
                this.state.calculatedTeams[team_id]['succeed'] += 3;   
            }
            if (
                result['in_home'] && match['placar_mandante'] < match['placar_visitante'] ||
                !result['in_home'] && match['placar_mandante'] > match['placar_visitante']
            ) {
                result['match_result'] = DEFEAT;
            }
            if (result['match_result']) {
                if (result['prediction'] === DRAW) {
                    this.state.calculatedTeams[team_id]['predictions'] += 1;
                }
                if (result['prediction'] === VICTORY) {
                    this.state.calculatedTeams[team_id]['predictions'] += 3;
                }
            }
            if (result['in_home']) {
                result['opponent'] = match['time_visitante'];
            } else {
                result['opponent'] = match['time_mandante'];
            }
            this.state.calculatedTeams[team_id]['results'][match_id] = result;
        });
        this.state.calculatedTeams[team_id]['team_id'] = team_id;
        if (this.state.calculatedTeams[team_id]['succeed'] === 0 || this.state.calculatedTeams[team_id]['predictions'] === 0) {
            this.state.calculatedTeams[team_id]['used'] = 'Vazio';
        } else {
            this.state.calculatedTeams[team_id]['used'] = Math.ceil(
                this.state.calculatedTeams[team_id]['succeed'] * 100 / 
                this.state.calculatedTeams[team_id]['predictions']
            );
        }
    });
}
function addPrediction(team_id) {
    this.state.savedPredictions[team_id] = {};
    Object.keys(this.state.origin.partidas).forEach(round => {
        this.state.origin.partidas[round].forEach(match => {
            if (match['time_mandante']['time_id'] == team_id || match['time_visitante']['time_id'] == team_id) {
                this.state.savedPredictions[team_id][match.partida_id] = Math.floor(Math.random() * (4 - 1) + 1);
            }
        });
    });
}
function renderBoard(team_id) {
    this.state.active_team = team_id;
    renderSelectedTeam(team_id);
    renderRounds(team_id);
    save();
}
function renderSelectedTeam(team_id) {
    let nameDiv = document.getElementById('team-name');
    nameDiv.innerHTML = '';
    nameDiv.innerText = this.state.teams[team_id]['nome_popular'];
    let shieldImg = document.getElementById('team-shield');
    shieldImg.setAttribute('src', this.state.teams[team_id]['escudo']);
    let predictionDiv = document.getElementById('prediction');
    predictionDiv.innerHTML = '';
    predictionDiv.innerText = this.state.calculatedTeams[team_id]['predictions'];
    let succeedDiv = document.getElementById('succeed');
    succeedDiv.innerHTML = '';
    succeedDiv.innerText = this.state.calculatedTeams[team_id]['succeed'];
    let usedDiv = document.getElementById('used');
    usedDiv.innerHTML = '';
    usedDiv.innerText = `${this.state.calculatedTeams[team_id]['used']}%`;
}
function renderRounds(team_id) {
    let boardFirstRound = document.getElementById('first-round');
    boardFirstRound.innerHTML = '';
    let boardSecondRound = document.getElementById('second-round');
    boardSecondRound.innerHTML = '';
    const ordered = Object.keys(this.state.calculatedTeams[team_id]['results']).sort().reduce(
        (obj, key) => { 
            obj[key] = this.state.calculatedTeams[team_id]['results'][key]; 
            return obj;
        }, 
        {}
    );
    let countRound = 1;
    Object.keys(ordered).forEach(match_id => {
        let matchTr = document.createElement('tr');
        /* Shield */
        let opponentShieldTd = document.createElement('td');
        if (ordered[match_id]['in_home']) {
            opponentShieldTd.classList.add('in_home');
        } else {
            opponentShieldTd.classList.add('out_home');
        }
        let opponentShieldImg = document.createElement('img');
        opponentShieldImg.setAttribute('src', ordered[match_id]['opponent']['escudo']);
        opponentShieldImg.setAttribute('width', '20px');
        if (this.state.calculatedTeams[ordered[match_id]['opponent']['time_id']]) {
            opponentShieldImg.setAttribute('onclick', `renderBoard(${ordered[match_id]['opponent']['time_id']})`);
            opponentShieldImg.setAttribute('style', 'cursor:pointer;');
        }
        opponentShieldImg.setAttribute('title', new Date(ordered[match_id]['date_of_match']).toLocaleString('pt-BR'));
        opponentShieldTd.appendChild(opponentShieldImg);
        matchTr.appendChild(opponentShieldTd);
        /* Prediction */
        let predictionTd = document.createElement('td');
        
        Object.keys(ICONS).forEach(icon_id => {
            let predictionImg = document.createElement('img');
            if (ordered[match_id].prediction != icon_id && !this.state.active_edit) {
                return;
            }
            if (ordered[match_id].prediction == icon_id && this.state.active_edit) {
                predictionImg.classList.add('active_prediction');
                //predictionImg.setAttribute('title', ordered[match_id]['scoreboard']);
            }
            predictionImg.setAttribute('src', ICONS[icon_id]);
            predictionImg.setAttribute('width', '20px');
            if (this.state.active_edit) {
                predictionImg.setAttribute('onclick', `changePrediction(${icon_id}, ${match_id})`);
                predictionImg.setAttribute('style', 'padding: 4px 4px; cursor:pointer;');
            }
            predictionTd.appendChild(predictionImg);
        });
        /* Prediction number */
        if (!this.state.active_edit) {
            let spanPrediction = document.createElement('span');
            spanPrediction.style.fontWeight = 'bold';
            spanPrediction.style.fontSize = '15px';
            spanPrediction.style.padding = '0px 10px';
            spanPrediction.style.color = '#00000090';
            if (ordered[match_id].prediction == 1) {
                spanPrediction.textContent = '0';
            } else
            if (ordered[match_id].prediction == 2) {
                spanPrediction.textContent = '1';
            } 
            else {
                spanPrediction.textContent = '3';
            }
            predictionTd.appendChild(spanPrediction);
        }
        /* End prediction number */
        matchTr.appendChild(predictionTd);
        /* Result */
        let resultTd = document.createElement('td');
        resultTd.setAttribute('style', 'background-color:#d9e1f2;')
        if (ordered[match_id].match_result) {
            let resultImg = document.createElement('img');
            resultImg.setAttribute('src', ICONS[ordered[match_id].match_result]);
            resultImg.setAttribute('width', '20px');
            resultTd.appendChild(resultImg);
            let spanResult = document.createElement('span');
            spanResult.style.fontWeight = 'bold';
            spanResult.style.fontSize = '15px';
            spanResult.style.padding = '0px 10px';
            spanResult.style.color = '#00000090';
            if (ordered[match_id].match_result == 1) {
                spanResult.textContent = '0';
            } else
            if (ordered[match_id].match_result == 2) {
                spanResult.textContent = '1';
            } 
            else {
                spanResult.textContent = '3';
            }
            resultTd.appendChild(spanResult);
        
        }
        matchTr.appendChild(resultTd);
        if (countRound < 20) {
            boardFirstRound.appendChild(matchTr);
        } else {
            boardSecondRound.appendChild(matchTr);
        }
        countRound++;
    });
}
function calculatePlannedClassification (){
    this.state.plannedClassification = [];
    for (var team_id in this.state.calculatedTeams) {
        this.state.plannedClassification.push(this.state.calculatedTeams[team_id]);
    }
    this.state.plannedClassification = this.state.plannedClassification.sort(function(a, b) {
        let a_used = isNaN(a.used) ? 0 : a.used;
        let b_used = isNaN(b.used) ? 0 : b.used;
        return b_used - a_used;
    })
}
function renderPlannedClassification (){
    let plannedClassification = document.getElementById('plannedClassification');
    plannedClassification.innerHTML = '';
    let position = 0;
    this.state.plannedClassification.forEach(team => {
        position++;
        let teamTr = document.createElement('tr');
        teamTr.setAttribute('onclick', `renderBoard(${team.team_id})`);
        teamTr.setAttribute('style', 'cursor:pointer;');
        let teamName = document.createElement('td');
        teamName.innerHTML = `
            <span style="padding-right:5px;">${position}º </span>
            <img src="${this.state.teams[team.team_id]['escudo']}" width="15px" /> 
            ${this.state.teams[team.team_id]['nome_popular']}
        `;
        teamTr.appendChild(teamName);
        let teamUsed = document.createElement('td');
        teamUsed.innerText = team.used + '%';
        teamTr.appendChild(teamUsed);
        if (team.used < 62) {
            teamTr.classList.add('rebaixamento');
        }
        if (team.used >= 62 && team.used < 70) {
            teamTr.classList.add('intermediaria');
        }
        if (team.used >= 70 && team.used < 90) {
            teamTr.classList.add('libertadores');
        }
        if (team.used >= 90) {
            teamTr.classList.add('titulo');
        }
        plannedClassification.appendChild(teamTr);
    })
}
function editRender (){
    this.state.active_edit = !this.state.active_edit;
    renderRounds(this.state.active_team);
    save();
}
function changePrediction (value, match_id){
    this.state.savedPredictions[this.state.active_team][match_id] = value;
    calculatePredictions();
    calculatePlannedClassification();
    renderPlannedClassification();
    renderBoard(this.state.active_team);
    save();
}
function save () {
    localStorage.state = JSON.stringify(this.state);
}
/* No */
function createBoards() {
    this.state.teams.forEach(team_id => {
        teamCalculate(team_id);
    });
}
function teamCalculate(team_id) {
    Object.keys(this.state.matches).forEach(id => {
        if (
            this.state.matches[id]['time_mandante']['time_id'] == team_id || 
            this.state.matches[id]['time_visitante']['time_id'] == team_id
        ) {
            //console.log(this.state.matches[id]);
        }
    })
}
function addClubeOnBoard (team_id) {
    let board = document.getElementById('board');
    /* Create Div */
    let teamDiv = document.createElement('div');
    teamDiv.setAttribute('id', `team-${team_id}`);
    teamDiv.classList.add('teams');
    teamDiv.classList.add('col-12');
    teamDiv.classList.add('mb-2');
    teamDiv.classList.add('d-inline-flex');
    
    /* Create Colummn 1 */
    let teamColummnOne = document.createElement('div');
    teamColummnOne.classList.add('column-one');

    let teamNameBoard = document.createElement('div');
    teamNameBoard.innerText = teams[team_id];
    teamColummnOne.appendChild(teamNameBoard);

    let teamShieldBoard = document.createElement('div');
    let teamShieldImg = document.createElement('img');
    teamShieldImg.setAttribute('src', shields[team_id]);
    teamShieldImg.setAttribute('width', '50%');
    teamShieldBoard.appendChild(teamShieldImg);
    //console.log(teamShieldBoard);
    teamColummnOne.appendChild(teamShieldBoard);

    /* Create Colummn 2 */
    let teamColummnTwo = document.createElement('div');
    teamColummnTwo.classList.add('column-two');
    
    let tableHeadersTheadFirstRound = document.createElement('thead');
    let tableHeadersTrFirstRound = document.createElement('tr');
    setHeadersOnTable(tableHeadersTrFirstRound, '1º Turno');
    let teamTableOne = document.createElement(`table`);
    teamTableOne.setAttribute('id', `fist-round-${team_id}`);
    tableHeadersTheadFirstRound.appendChild(tableHeadersTrFirstRound);
    teamTableOne.appendChild(tableHeadersTrFirstRound);
    
    let tableHeadersTheadSecondRound = document.createElement('thead');
    let tableHeadersTrSecondRound = document.createElement('tr');
    setHeadersOnTable(tableHeadersTrSecondRound, '2º Turno');
    let teamTableTwo = document.createElement(`table`);
    teamTableTwo.setAttribute('id', `second-round-${team_id}`);
    tableHeadersTheadSecondRound.appendChild(tableHeadersTrSecondRound);
    teamTableTwo.appendChild(tableHeadersTheadSecondRound);

    teamColummnTwo.appendChild(teamTableOne);
    teamColummnTwo.appendChild(teamTableTwo);
    
    teamDiv.appendChild(teamColummnOne);
    teamDiv.appendChild(teamColummnTwo);
    board.appendChild(teamDiv);
}

function setHeadersOnTable (table, title){
    let tableHeaders = document.createElement('th');
    tableHeaders.textContent = title;
    
    let tableHeadersPrediction = document.createElement('th');
    tableHeadersPrediction.textContent = "Previstos";
    
    let tableHeadersResult = document.createElement('th');
    tableHeadersResult.textContent = "Conquistados";
    
    table.appendChild(tableHeaders);
    table.appendChild(tableHeadersPrediction);
    table.appendChild(tableHeadersResult);
}

function classificationCalculate (team_id) {
    let teamFirstRound = document.getElementById(`fist-round-${team_id}`);
    let teamSecondRound = document.getElementById(`second-round-${team_id}`);
    let round = 0;
    Object.keys(matches).forEach(id => {
        let teamTableRow = document.createElement('tr');
        if (matches[id]['time_mandante']['time_id'] == team_id || matches[id]['time_visitante']['time_id'] == team_id) {
            round++;
            let is_play_home = matches[id]['time_mandante']['time_id'] == team_id;
            let opponent = null;
            let result_icon = null;
            let prediction_icon = null;
            if (is_play_home) {
                opponent = matches[id]['time_visitante'];
            } else {
                opponent = matches[id]['time_mandante'];
            }
            if (matches[id]['placar_mandante'] !== null && matches[id]['placar_mandante'] == matches[id]['placar_visitante']) {
                result_icon = draw_icon;
            }
            if (
                is_play_home && matches[id]['placar_mandante'] > matches[id]['placar_visitante'] ||
                !is_play_home && matches[id]['placar_mandante'] < matches[id]['placar_visitante']
            ) {
                result_icon = defeat_icon;
            }
            if (
                is_play_home && matches[id]['placar_mandante'] < matches[id]['placar_visitante'] ||
                !is_play_home && matches[id]['placar_mandante'] > matches[id]['placar_visitante']
            ) {
                result_icon = victory_icon;
            }

            if (predictions[team_id] && predictions[team_id][id] && predictions[team_id][id] === 1) {
                prediction_icon = draw_icon;
            }
            if (predictions[team_id] && predictions[team_id][id] && predictions[team_id][id] === 2) {
                prediction_icon = defeat_icon;
            }
            if (predictions[team_id] && predictions[team_id][id] && predictions[team_id][id] === 3) {
                prediction_icon = victory_icon;
            }
            
            let teamTableHead = document.createElement('td');
            if(is_play_home) { teamTableHead.classList.add('is_play_home'); }
            teamTableHead.innerHTML = `<img src="${opponent.escudo}" width="20%" title="${matches[id]['placar']}"/>`;
            teamTableRow.appendChild(teamTableHead);
            
            let teamTablePrediction = document.createElement('td');
            if (prediction_icon) {
                teamTablePrediction.innerHTML = `<img src="${prediction_icon}" width="15%;" title="${matches[id]['placar']}"/>`;
            }
            teamTableRow.appendChild(teamTablePrediction);
            
            let teamTableResult = document.createElement('td');
            if (result_icon) {
                teamTableResult.innerHTML = `<img src="${result_icon}" width="15%;" title="${matches[id]['placar']}"/>`;
            }
            teamTableRow.appendChild(teamTableResult);
            if (round > 19) {
                teamSecondRound.appendChild(teamTableRow);
            } else {
                teamFirstRound.appendChild(teamTableRow);
            }
        }
    });
}
function classificationCalculateBK (team_id) {
    teamTable = document.getElementById(`team-table-${team_id}`);
    let teamTableRowHead = document.createElement('tr');
    let teamTableRowPrediction = document.createElement('tr');
    let teamTableRowResult = document.createElement('tr');
    Object.keys(matches).forEach(id => {
        if (matches[id]['time_mandante']['time_id'] == team_id || matches[id]['time_visitante']['time_id'] == team_id) {
            let is_play_home = matches[id]['time_mandante']['time_id'] == team_id;
            let opponent = null;
            let result_icon = null;
            let prediction_icon = null;
            if (is_play_home) {
                opponent = matches[id]['time_visitante'];
            } else {
                opponent = matches[id]['time_mandante'];
            }
            if (matches[id]['placar_mandante'] !== null && matches[id]['placar_mandante'] == matches[id]['placar_visitante']) {
                result_icon = draw_icon;
            }
            if (
                is_play_home && matches[id]['placar_mandante'] > matches[id]['placar_visitante'] ||
                !is_play_home && matches[id]['placar_mandante'] < matches[id]['placar_visitante']
            ) {
                result_icon = defeat_icon;
            }
            if (
                is_play_home && matches[id]['placar_mandante'] < matches[id]['placar_visitante'] ||
                !is_play_home && matches[id]['placar_mandante'] > matches[id]['placar_visitante']
            ) {
                result_icon = victory_icon;
            }

            if (predictions[team_id][id] && predictions[team_id][id] === 1) {
                prediction_icon = draw_icon;
            }
            if (predictions[team_id][id] && predictions[team_id][id] === 2) {
                prediction_icon = defeat_icon;
            }
            if (predictions[team_id][id] && predictions[team_id][id] === 3) {
                prediction_icon = victory_icon;
            }
            
            let teamTableHead = document.createElement('th');
            if(is_play_home) { teamTableHead.classList.add('is_play_home'); }
            teamTableHead.innerHTML = `<img src="${opponent.escudo}" width="20px;" title="${matches[id]['placar']}"/>`;
            teamTableRowHead.appendChild(teamTableHead);
            
            let teamTablePrediction = document.createElement('td');
            if (prediction_icon) {
                teamTablePrediction.innerHTML = `<img src="${prediction_icon}" width="20px;" title="${matches[id]['placar']}"/>`;
            }
            teamTableRowPrediction.appendChild(teamTablePrediction);
            
            let teamTableResult = document.createElement('td');
            if (result_icon) {
                teamTableResult.innerHTML = `<img src="${result_icon}" width="20px;" title="${matches[id]['placar']}"/>`;
            }
            teamTableRowResult.appendChild(teamTableResult);
        }
    });
    teamTable.appendChild(teamTableRowHead);
    teamTable.appendChild(teamTableRowPrediction);
    teamTable.appendChild(teamTableRowResult);
}
function changeMethodology(newMethodology) {
    this.state.active_methodologies = newMethodology;
    setMethodology();
    calculatePredictions();
    calculatePlannedClassification();
    renderPlannedClassification();
    renderBoard(this.state.active_team);
    save();
}

function updateTeamsExplanation() {
    const vstrong_team = document.querySelector('#clubes-mfortes');
    vstrong_team.innerHTML = '';
    const strong_team = document.querySelector('#clubes-fortes');
    strong_team.innerHTML = '';
    const middle_team = document.querySelector('#clubes-medios');
    middle_team.innerHTML = '';
    const small_team = document.querySelector('#clubes-pequenos');
    small_team.innerHTML = '';

    Object.keys(this.state.teams).forEach(team => {
        let li_team = document.createElement('li');
        li_team.classList.add('team-explanation');
        li_team.textContent = this.state.teams[team].nome_popular;
        if (weights[team] == TEAM_VSTRONG) {
            vstrong_team.appendChild(li_team);
        }
        if (weights[team] == TEAM_STRONG) {
            strong_team.appendChild(li_team);
        }
        if (weights[team] == TEAM_MIDDLE) {
            middle_team.appendChild(li_team);
        }
        if (weights[team] == TEAM_SMALL) {
            small_team.appendChild(li_team);
        }
    });
}
start();
