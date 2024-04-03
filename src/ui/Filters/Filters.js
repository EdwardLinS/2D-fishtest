import './Filter.css'

export function createFilter() {
    const filter = document.createElement("div");
    filter.className = "filter";

    const cellToggle = createButton("toggleCellCheckbox", "Celltype")
    filter.appendChild(cellToggle);

    const checkbox = createCheckboxContainer();
    filter.appendChild(checkbox);

    const geneToggle = createButton("toggleGeneRadio", "Gene")
    filter.appendChild(geneToggle);

    const radio = createGeneRadioContainer();
    filter.appendChild(radio);

    const icons = createIcon();
    filter.appendChild(icons);

    return filter;
}

function createButton(id, text) {
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.classList.add("toggles", "btn");
    button.id = id;
    button.textContent = text;

    return button;
}

function createCheckboxContainer() {
    // Create main container div
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("checkbox-container");
    containerDiv.id = "cellCheckbox";
    containerDiv.style.display = "none";

    // Create textbox input and clear button
    const inputDiv = document.createElement("div");
    inputDiv.classList.add("input-elements");

    const textBox = document.createElement("input");
    textBox.setAttribute("type", "text");
    textBox.classList.add("textInput");
    textBox.id = "cellTextbox";
    textBox.placeholder = "Search celltype";

    const clearButton = document.createElement("button");
    clearButton.setAttribute("type", "button");
    clearButton.classList.add("clearButton", "btn", "btn-danger");
    clearButton.id = "cellClearButton";
    clearButton.textContent = "Clear";

    inputDiv.appendChild(textBox);
    inputDiv.appendChild(clearButton);

    // Create checkboxes div
    const checkboxesDiv = document.createElement("div");
    checkboxesDiv.classList.add("checkboxes");
    checkboxesDiv.id = "cellCheckboxes";

    // Create not found message div
    const notFoundDiv = document.createElement("div");
    notFoundDiv.classList.add("notfound", "alert", "alert-danger", "alert-dismissible", "fade", "show");
    notFoundDiv.id = "cellNotFound";
    notFoundDiv.textContent = "No cell types of that name found.";

    // Append child elements to container div
    containerDiv.appendChild(inputDiv);
    containerDiv.appendChild(checkboxesDiv);
    containerDiv.appendChild(notFoundDiv);

    return containerDiv;
}

function createGeneRadioContainer() {
    // Create main container div
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("checkbox-container");
    containerDiv.id = "geneRadioContainer";
    containerDiv.style.display = "none";

    // Create textbox input and clear button
    const inputDiv = document.createElement("div");
    inputDiv.classList.add("input-elements");

    const textBox = document.createElement("input");
    textBox.setAttribute("type", "text");
    textBox.classList.add("textInput");
    textBox.id = "geneTextbox";
    textBox.placeholder = "Search gene";

    const clearButton = document.createElement("button");
    clearButton.setAttribute("type", "button");
    clearButton.classList.add("clearButton", "btn", "btn-danger");
    clearButton.id = "geneClearButton";
    clearButton.textContent = "Clear";

    inputDiv.appendChild(textBox);
    inputDiv.appendChild(clearButton);

    // Create checkboxes div
    const checkboxesDiv = document.createElement("div");
    checkboxesDiv.classList.add("checkboxes");
    checkboxesDiv.id = "geneRadio";

    // Create not found message div
    const notFoundDiv = document.createElement("div");
    notFoundDiv.classList.add("notfound", "alert", "alert-danger", "alert-dismissible", "fade", "show");
    notFoundDiv.id = "geneNotFound";
    notFoundDiv.textContent = "No genes of that name found.";

    // Append child elements to container div
    containerDiv.appendChild(inputDiv);
    containerDiv.appendChild(checkboxesDiv);
    containerDiv.appendChild(notFoundDiv);

    return containerDiv;
}

// Function to create and return the icon div element
function createIcon() {
    // Create icon container div
    const iconDiv = document.createElement("div");
    iconDiv.classList.add("icon");

    const zoomIn = createZoomButton("toggleZoomIn", "zoomInBox", "M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM10.1005 7H12.1005V10H15.1005V12H12.1005V15H10.1005V12H7.10052V10H10.1005V7Z")
    const zoomInBox = createDescBox("zoomInBox", "Click to zoom in.");
    
    const zoomOut = createZoomButton("toggleZoomOut", "zoomOutBox", "M15.3431 15.2426C17.6863 12.8995 17.6863 9.1005 15.3431 6.75736C13 4.41421 9.20101 4.41421 6.85786 6.75736C4.51472 9.1005 4.51472 12.8995 6.85786 15.2426C9.20101 17.5858 13 17.5858 15.3431 15.2426ZM16.7574 5.34315C19.6425 8.22833 19.8633 12.769 17.4195 15.9075C17.4348 15.921 17.4498 15.9351 17.4645 15.9497L21.7071 20.1924C22.0976 20.5829 22.0976 21.2161 21.7071 21.6066C21.3166 21.9971 20.6834 21.9971 20.2929 21.6066L16.0503 17.364C16.0356 17.3493 16.0215 17.3343 16.008 17.319C12.8695 19.7628 8.32883 19.542 5.44365 16.6569C2.31946 13.5327 2.31946 8.46734 5.44365 5.34315C8.56785 2.21895 13.6332 2.21895 16.7574 5.34315ZM7.10052 10V12H15.1005V10L7.10052 10Z")
    const zoomOutBox = createDescBox("zoomOutBox", "Click to zoom out.");

    const pointSize = createOtherButton("togglePointSize", "pointSizeBox", "M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12ZM12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13Z", "M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19Z");
    const pointSizeBox = createDescBox("pointSizeBox", "Click to change point size.");
    
    const genePercentile = createOtherButton("toggleGenePercentile", "genePercentileBox", "M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z", "M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z");
    const genePercentileBox = createDescBox("genePercentileBox", "Click to change the gene percentile.");
    
    const download = createOtherButton("toggleDownload", "downloadBox", "M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V12.1578L16.2428 8.91501L17.657 10.3292L12.0001 15.9861L6.34326 10.3292L7.75748 8.91501L11 12.1575V5Z", "M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z");
    const downloadBox = createDescBox("downloadBox", "Click to download an image of the projection and umap.");

    // Append elements to parent element

    iconDiv.appendChild(zoomIn);
    iconDiv.appendChild(zoomInBox);
    iconDiv.appendChild(zoomOut);
    iconDiv.appendChild(zoomOutBox);
    iconDiv.appendChild(pointSize);
    iconDiv.appendChild(pointSizeBox);
    iconDiv.appendChild(genePercentile);
    iconDiv.appendChild(genePercentileBox);
    iconDiv.appendChild(download);
    iconDiv.appendChild(downloadBox);

    return iconDiv;
}

function createDescBox(id, content) {
    const box = document.createElement('div');
    box.classList.add("descBox")
    box.id = id;
    box.textContent = content;
    box.style.display = 'none';

    return box;
}

// Function to create and return the zoom button elements
function createZoomButton(id, dataTarget, content) {
    // Create button element
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("data-target", dataTarget)
    button.classList.add("iconBtn", "btn");
    button.id = id;

    // Create SVG element
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");

    // Create path element and set attributes
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill-rule", "evenodd");
    path.setAttribute("clip-rule", "evenodd");
    path.setAttribute("d", content);
    path.setAttribute("fill", "currentColor");

    // Append path to SVG
    svg.appendChild(path);

    // Append SVG to button
    button.appendChild(svg);

    return button;
}

function createOtherButton(id, dataTarget, content1, content2) {
    // Create button element
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("data-target", dataTarget)
    button.classList.add("iconBtn", "btn");
    button.id = id;

    // Create SVG element
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");

    // Create first path element and set attributes
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("fill-rule", "evenodd");
    path1.setAttribute("clip-rule", "evenodd");
    path1.setAttribute("d", content1);
    path1.setAttribute("fill", "currentColor");

    // Create second path element and set attributes
    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("fill-rule", "evenodd");
    path2.setAttribute("clip-rule", "evenodd");
    path2.setAttribute("d", content2);
    path2.setAttribute("fill", "currentColor");

    // Append paths to SVG
    svg.appendChild(path1);
    svg.appendChild(path2);

    // Append SVG to button
    button.appendChild(svg);

    return button;
}