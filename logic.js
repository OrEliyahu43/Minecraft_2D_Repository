const tools = document.querySelectorAll('.tool');

const toolsUsing = {
    'axe': false,
    'shove': false,
    'pickaxe': false
}

export let currentTool = null;

const inventoryElements = {
    "ground": 0,
    "grass": 0,
    "leaves": 0,
    "stone": 0,
    "tree": 0,
}

tools.forEach(tool => {
    tool.addEventListener('click', chosenTool)
    tool.addEventListener('mouseover', hover)
    tool.addEventListener('mouseout', unHover)
})

function hover(event) {
    event.target.classList.add("hoverd-tool");
}

function unHover(event) {
    event.target.classList.remove("hoverd-tool")
}

function chosenTool(event) {
    if (currentTool === null) {
        currentTool = event.target;
        currentTool.classList.add('chosen-tool');
    }
    else if (currentTool === event.target) {
        currentTool === null;
        event.target.classList.remove('chosen-tool');
    }
    else {
        currentTool.classList.remove('chosen-tool');
        currentTool = event.target;
        currentTool.classList.add('chosen-tool')
    }
}

