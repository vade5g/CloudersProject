const testi = () => {
    console.log('Testi2');
};
function makeTableHTML(recipies) {
    var recipies = ['1','2','3','4','5','6'];
    var result = "<table border=1>";
    for(var i=0; i<recipies.length; i++) {
        result += "<tr>";
        for(var j=0; j<recipies[i].length; j++){
            result += "<td>"+recipies[i][j]+"</td>";
        }
        result += "</tr>";
    }
    result += "</table>";

    return result;
};