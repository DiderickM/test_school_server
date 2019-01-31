
function list(){
    var rowSize = 100; // => container height / number of items
    var container = document.querySelector(".container");
    var listItems = Array.from(document.querySelectorAll(".list-item")); // Array of elements
    var sortables = listItems.map(Sortable); // Array of sortables
    var total = sortables.length;

    TweenLite.to(container, 0.5, { autoAlpha: 1 });

    function changeIndex(item, to) {

        // Change position in array
        // arrayMove(sortables, item.index, to);

        // Change element's position in DOM. Not always necessary. Just showing how.
        if (to === total - 1) {
            container.appendChild(item.element);
        } else {
            var i = item.index > to ? to : to + 1;
            container.insertBefore(item.element, container.children[i]);
        }

        // Set index for each sortable
            sortables.forEach(function (sortable, index) {return sortable.setIndex(index);});
    }

    function Sortable(element, index) {

        var content = element.querySelector(".item-content");
        var order = element.querySelector(".order");

        var animation = TweenLite.to(content, 0.3, {
        boxShadow: "rgba(0,0,0,0.2) 0px 16px 32px 0px",
        force3D: true,
        scale: 1.1,
        paused: true });


        // var dragger = new Draggable(element, {
        // onDragStart: downAction,
        // onRelease: upAction,
        // onDrag: dragAction,
        // cursor: "inherit",
        // type: "y" });


        // Public properties and methods
        var sortable = {
        // dragger: dragger,
        element: element,
        index: index,
        setIndex: setIndex };


        TweenLite.set(element, { y: index * rowSize });

        function setIndex(index) {

        sortable.index = index;
        order.textContent = index + 1;

        // Don't layout if you're dragging
        if (!dragger.isDragging) layout();
        }

        function downAction() {
            animation.play();
            this.update();
        }

        function dragAction() {

            // Calculate the current index based on element's position
            var index = clamp(Math.round(this.y / rowSize), 0, total - 1);

            if (index !== sortable.index) {
            changeIndex(sortable, index);
            }
        }

        function upAction() {
            animation.reverse();
            layout();
        }

        function layout() {
            TweenLite.to(element, 0.3, { y: sortable.index * rowSize });
        }
        return sortable;

    }

    // Changes an elements's position in array
    function arrayMove(array, from, to) {
        array.splice(to, 0, array.splice(from, 1)[0]);
    }

    // Clamps a value to a min/max
    function clamp(value, a, b) {
        return value < a ? a : value > b ? b : value;
    }
}

function addField(num, name, status, link){
    //parent
    var parent = document.getElementById('container');

    //link div
    var linkDiv = document.createElement("a");
    linkDiv.href = link;

    //the div waar alles in zit
    var masterDiv = document.createElement("div");
    masterDiv.classList.add('list-item');

    //the div waar de content in thuis hoort
    var subDiv = document.createElement("div");
    subDiv.classList.add('item-content');

    //the span met het studenten nummer
    var spanNummer = document.createElement("SPAN");
    spanNummer.classList.add("order");
    var numNode = document.createTextNode(num + "    ");
    spanNummer.appendChild(numNode);
    subDiv.appendChild(spanNummer);

    //the text node with the name
    var nameNode = document.createTextNode(name);
    subDiv.appendChild(nameNode);

    //the node with the status of webiste
    var spanStatus = document.createElement("span");
    spanStatus.classList.add('status');
    if(status == 1){
        spanStatus.classList.add('on');
        var statusText = document.createTextNode('online');
        spanStatus.appendChild(statusText);
    }else{
        spanStatus.classList.add('off');
        var statusText = document.createTextNode('offline ' + status);
        spanStatus.appendChild(statusText);
    }
    subDiv.appendChild(spanStatus);

    //append alles maar
    masterDiv.appendChild(subDiv);
    linkDiv.appendChild(masterDiv);
    parent.appendChild(linkDiv);

    list();
}

function getArray(){
    //oke het is hier dus de bedoeling dat er met ajax een array binnen komt en die wordt dan doorgegeven door deze functie
    //omdat ik nu geen zin heb om zelf een database op te zetten en ik denk dus dat mitch er al 1 heeft ga ik het niet opzetten
    //HARDCODE
var info = [
    ['0945183','Andy Vos'],
    ['0949618','Mitch de Vos'],
    ['0958804','Robin Martijn'],
    ['0959846','Jacob Cuperus'],
    ['0960634','Peter Jaarsveld'],
    ['0961962','Nathan Samijo'],
    ['0963336','Diderick Magermans'],
    ['0963401','Sebastiaan Beekman'],
    ['0963727','Kevin Hersman'],
    ['0964155','Robert Vroegindeweij'],
    ['0964694','Kjeld van der Linden'],
    ['0965827','Jeffrey van Leeuwen'],
    ['0966333','Aswin Hathie'],
    ['0967267','Niek van Leeuwen'],
    ['0967583','Lars de Jong'],
    ['0968586','Tim de Jong'],
    ['0968981','Jordy van Essen'],
    ['0970665','Diederik van Linden'],
    ['0970996','Safouane Bghiel'],
    ['0971051','Ricardo Mokveld'],
    ['0972208','Raymond Blok'],
    ['0972395','Tijn Langeveld'],
    ['0972911','Jesse Persij'],
    ['0973139','Didier Volk'],
    ['0973515','Shivan Rambaran'],
    ['0973740','Tristan Schiesser'],
    ['0973880','Yekta Öztürk'],
    ['0976269','Johnny Guo'],
    ['0976553','Coen Schutte'],
    ['0874011','Kevin Cijntje'],
    ['0900347','Arun Bahadoer'],
    ['0934964','Semih Selvi'],
    ['0943246','Hicham Ben Abdelkader'],
    ['0943853','Faziel Nasrullah'],
    ['0945345','Langpei Wu'],
    ['0945888','Hiu Tung Tai'],
    ['0947596','Olaf Stehouwer'],
    ['0955509','Appie Strörmann'],
    ['0959427','Floris van der Plas'],
    ['0960743','Nick van Leeuwen'],
    ['0962270','Tommy Sit'],
    ['0962690','Jonatan Vrijenhoek'],
    ['0964040','Luuk Klaver'],
    ['0964048','Ryan Vlaming'],
    ['0965797','Bo van Rutten'],
    ['0966297','Tycho Ravensbergen'],
    ['0966307','Auke Blankwaard'],
    ['0966959','Idris Çelik'],
    ['0966962','Yari de Boed'],
    ['0967985','timo de Vries'],
    ['0968284','Tom Dingenouts'],
    ['0968601','Niels van Hagen'],
    ['0968627','Ryan Jagroep'],
    ['0968890','Jarno Biesheuvel'],
    ['0969075','Rody Haket'],
    ['0971289','Ridvan Kuzu'],
    ['0972429','Diyar Bertan'],
    ['0974527','Rolf Don'],
    ['0975763','Daniel Poulis'],
    ['0976779','Jorn van der Maat'],
    ['0977837','Alan Zhong'],
    ['0910652','Niels Dorst'],
    ['0924010','Ruben Hiemstra'],
    ['0930689','Max van der Heijden'],
    ['0932927','Martijn van Adrichem'],
    ['0935179','Joey Tang'],
    ['0943611','Mickey Gijzen'],
    ['0943718','Fabian de Groot'],
    ['0944222','Bart van Vessem'],
    ['0945922','Ahmad Silevani'],
    ['0946250','Alexander Slaa'],
    ['0946690','Wouter Leijs'],
    ['0948956','Bob van Leusden'],
    ['0958022','Wing Sun Pang'],
    ['0962010','Dennis den Boef'],
    ['0962472','Mart-Jan Koedam'],
    ['0962873','Sascha Vis'],
    ['0963038','Michael Francis'],
    ['0963324','Edgar Bruijnen'],
    ['0963586','Stefan Beenen'],
    ['0965538','Steven Slaa'],
    ['0967019','Keanu van der Linden'],
    ['0967087','Robin van Pelt'],
    ['0969108','Boyd van Kronenburg'],
    ['0970476','Jefta Verboon'],
    ['0971688','Jochem Boender'],
    ['0972144','Sam Jansen'],
    ['0972207','Mattias Suijker'],
    ['0972368','Jeffrey Zuiddam'],
    ['0973768','Jurian de Moor'],
    ['0974347','Jordy Weijgertse'],
    ['0976952','Rachaan de Graaff'],
    ['0890018','Eldin Begovic'],
    ['0910074','Jordi Kicken'],
    ['0929613','Hikmat Hellal'],
    ['0940628','Ismahaan Mohamed'],
    ['0943177','Aidan Lourier'],
    ['0943949','Sven van Leeuwen'],
    ['0952254','Timo Coomans'],
    ['0954042','Marijn van Dongen'],
    ['0956631','Jozef Chen'],
    ['0958493','Issam Er-Rabhi'],
    ['0961449','Ebrar Eryigit'],
    ['0961943','Britt Reijnders'],
    ['0962038','Matthijs Meijerink'],
    ['0962276','Brent Boere'],
    ['0964295','Julian van Marion'],
    ['0964957','Sam Sweben'],
    ['0965412','Britt Schoffelmeer'],
    ['0966481','Noah Kaak'],
    ['0966929','Fabian Rijkhoek'],
    ['0967090','Daan van Schie'],
    ['0967350','Jesse Doelman'],
    ['0968262','Aroena Almeida Mendes'],
    ['0968872','Tycho den Hartog'],
    ['0969032','Jorian Nakorikantodas'],
    ['0970562','Feiko Bronsveld'],
    ['0971843','Freek van der Wel'],
    ['0972251','Tayfun Bozdere'],
    ['0976457','Mohammed El Hadouchi'],
    ['0977307','Trevor Boeije'],
    ['0977832','Herman Heringa'],
    ['0977957','Bas van Gameren'],

]

return info;
}

function check(){
    //dit is dus de functie die chekt of de website down is
    var array = getArray();
    array.forEach(function(element) {
        // console.log(element[0]); //get leerling num
        var baseUrl = "https://stud.hosted.hr.nl/";
        var url = baseUrl + element[0] + "/";
        var sendurl = "http://nintia.nl/testmapjeDiderick/link.php?link=" + url;
        // console.log(sendurl)
        gethtmlresponse(sendurl, url, element[0], element[1]);
    });
}

async function gethtmlresponse(sendurl, url, number, name) {
    var xmlhttp = new XMLHttpRequest();
    var start_time = new Date().getTime();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
            var request_time = new Date().getTime() - start_time;
            console.log(number + "  "+ request_time);
            if (xmlhttp.status == 200) {
               if(xmlhttp.responseText == 200){
                   addField(number, name, true, url);
               }else{
                   addField(number, name, xmlhttp.responseText, url);
               }
               list();
            }
            else if (xmlhttp.status == 400) {
                alert('There was an error 400');
            }
            else {
                alert('something else other than 200 was returned');
            }
        }
    };

    xmlhttp.open("GET", sendurl, true);
    xmlhttp.send();
}