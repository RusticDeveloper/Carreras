var tablero = {

}
var autos = {

}
var gano = false;
var quien;
var cont = 0;
var valors;
var car1 = document.getElementById("auto1");
var xc1 = 500,
    yc1 = 435;
var xc2 = 400,
    yc2 = 477;
var car2 = document.getElementById("auto2");

var dado = {
    lados: 7,
    tirar: function() {
        valors = Math.floor(Math.random() * (this.lados - 1)) + 1;
        switch (valors) {
            case 1:
                return ("uno");
            case 2:
                return ("dos");
            case 3:
                return ("tres");
            case 4:
                return ("cuatro");
            case 5:
                return ("cinco");
            case 6:
                return ("seis");
        }
    }
}

var juego = {
    preguntar: function() {
        document.getElementById("uno").style = "display:none";
        document.getElementById("dos").style = "display:none";
        document.getElementById("tres").style = "display:none";
        document.getElementById("cuatro").style = "display:none";
        document.getElementById("cinco").style = "display:none";
        document.getElementById("seis").style = "display:none";
        var lugar = dado.tirar();
        var lado = document.getElementById(lugar);
        var boton = document.getElementById("jugar");
        var a1 = document.getElementById("auto1");
        var a2 = document.getElementById("auto2");
        a1.style = `visibility:visible; top: ${yc1}px; left: ${xc1}px;`;
        a2.style = `visibility:visible; top: ${yc2}px; left: ${xc2}px;`;
        lado.style = "display:inline; position:relative; top: 100px; left: 250px; ";
        boton.style = "display:inline; position:relative; top: 33px; left: 310px;"
        location.href = "#openModal";
        this.modal();
    },
    comprovar: function() {
        let ans1 = document.getElementById("R1");
        let ans2 = document.getElementById("R2");
        let ans3 = document.getElementById("R3");
        if ((ans1.value == "true" && ans1.checked == true) || (ans2.value == "true" && ans2.checked == true) || (ans3.value == "true" && ans3.checked == true)) {
            quien = "carro1";
            this.mover(quien);
        } else {
            quien = "carro2";
            this.mover(quien);
        }
    },
    mover: function(who) {
        if (who == "carro1") {
            let cnt = valors * 100;
            var mc1 = setInterval(function() {
                if (xc1 < 950 && yc1 == 435) {
                    if (cnt == 0) {
                        clearInterval(mc1);
                    } else {
                        if (xc1 == 1) {
                            car1.style.webkitTransform = "rotate(360deg)";
                            car1.style.transform = "rotate(360deg)";
                        }
                        if (xc1 == 400) {
                            gano = true;
                            clearInterval(mc1);
                            juego.ganar();
                        }
                        cnt--;
                        xc1++;
                        car1.style.left = xc1 + "px";
                    }
                } else if (xc1 == 950 && yc1 > 30) {
                    if (cnt == 0) {
                        clearInterval(mc1);
                    } else {
                        cnt--;
                        yc1--;
                        car1.style.top = yc1 + "px";
                        car1.style.webkitTransform = "rotate(-90deg)";
                        car1.style.transform = "rotate(-90deg)";
                    }
                } else if (xc1 > 20 && yc1 == 30) {
                    if (cnt == 0) {
                        clearInterval(mc1);
                    } else {
                        cnt--;
                        xc1--;
                        car1.style.left = xc1 + "px";
                        car1.style.webkitTransform = "rotate(90deg)";
                        car1.style.transform = "rotate(90deg)";
                        car1.style.webkitTransform = "rotateY(180deg)";
                        car1.style.transform = "rotateY(180deg)";
                    }
                } else if (xc1 == 20 && yc1 < 436) {
                    if (cnt == 0) {
                        clearInterval(mc1);
                    } else {
                        cnt--;
                        yc1++;
                        car1.style.top = yc1 + "px";
                        car1.style.webkitTransform = "rotate(90deg)";
                        car1.style.transform = "rotate(90deg)";
                    }
                }
            }, 5);
        }
        //aqui e,pieza el movimiento del segundo carro el de IA
        else if (who == "carro2") {
            let cnt = valors * 100;
            var mc2 = setInterval(function() {
                if (xc2 < 900 && yc2 == 477) {
                    if (cnt == 0) {
                        clearInterval(mc2);
                    } else {
                        if (xc2 == 21) {
                            car2.style.webkitTransform = "rotate(360deg)";
                            car2.style.transform = "rotate(360deg)";
                        }
                        if (xc2 == 300) {
                            gano = true;
                            clearInterval(mc2);
                            juego.ganar();
                        }
                        cnt--;
                        xc2++;
                        car2.style.left = xc2 + "px";
                    }
                } else if (xc2 == 900 && yc2 > -35) {
                    if (cnt == 0) {
                        clearInterval(mc2);
                    } else {
                        cnt--;
                        yc2--;
                        car2.style.top = yc2 + "px";
                        car2.style.webkitTransform = "rotate(-90deg)";
                        car2.style.transform = "rotate(-90deg)";
                    }
                } else if (xc2 > -120 && yc2 == -35) {
                    if (cnt == 0) {
                        clearInterval(mc2);
                    } else {
                        cnt--;
                        xc2--;
                        car2.style.left = xc2 + "px";
                        car2.style.webkitTransform = "rotate(90deg)";
                        car2.style.transform = "rotate(90deg)";
                        car2.style.webkitTransform = "rotateY(180deg)";
                        car2.style.transform = "rotateY(180deg)";
                    }
                } else if (xc2 == -120 && yc2 < 478) {
                    if (cnt == 0) {
                        clearInterval(mc2);
                    } else {
                        cnt--;
                        yc2++;
                        car2.style.top = yc2 + "px";
                        car2.style.webkitTransform = "rotate(90deg)";
                        car2.style.transform = "rotate(90deg)";
                    }
                }
            }, 5);
        }
    },
    ganar: function() {
        location.href = "#ganado";
        if (quien == "carro1") {
            document.getElementById("j1").style = "visibility:visible"
        } else {
            document.getElementById("j2").style = "visibility:visible"
        }

    },
    modal: function() {
        utilidades.readTextFile("preguntas.json", function(text) {
            document.getElementById("contenido").innerHTML = "";

            var data = JSON.parse(text);
            let numpreg = Math.floor(Math.random() * (12 - 1)) + 1;

            let cuerpo = document.getElementById("contenido");
            let h2 = document.createElement("h2");
            let label = document.createElement("label");
            let label2 = document.createElement("label");
            let label3 = document.createElement("label");
            let input = document.createElement("input");
            let input2 = document.createElement("input");
            let input3 = document.createElement("input");
            let salir = document.createElement("button");
            input.setAttribute("id", "R1");
            input2.setAttribute("id", "R2");
            input3.setAttribute("id", "R3");
            input.setAttribute("type", "radio");
            input.setAttribute("name", "Answers");
            input2.setAttribute("type", "radio");
            input2.setAttribute("name", "Answers");
            input3.setAttribute("type", "radio");
            input3.setAttribute("name", "Answers");
            salir.innerHTML = "Seleccionar";
            salir.addEventListener("click", function() {
                location.href = "#close";
                juego.comprovar();
            });
            switch (numpreg) {
                case 1:
                    h2.appendChild(document.createTextNode(data.Pregunta1.Q));
                    label.innerHTML = "<br>A)   " + data.Pregunta1.Respuestas[0].R1 + "\n\n\n\n\n";

                    label2.innerHTML = "<br>B)   " + data.Pregunta1.Respuestas[1].R2 + "\n\n\n\n\n";

                    label3.innerHTML = "<br>C)   " + data.Pregunta1.Respuestas[2].R3 + "\n\n\n\n\n";
                    input.setAttribute("value", data.Pregunta1.Respuestas[0].valor);
                    input2.setAttribute("value", data.Pregunta1.Respuestas[1].valor);
                    input3.setAttribute("value", data.Pregunta1.Respuestas[2].valor);
                    cuerpo.appendChild(h2);
                    cuerpo.appendChild(label);
                    cuerpo.appendChild(input);
                    cuerpo.appendChild(label2);
                    cuerpo.appendChild(input2);
                    cuerpo.appendChild(label3);
                    cuerpo.appendChild(input3);
                    cuerpo.appendChild(salir);
                    break;
                case 2:
                    h2.appendChild(document.createTextNode(data.Pregunta2.Q));
                    label.innerHTML = "<br>A)   " + data.Pregunta2.Respuestas[0].R1 + "\n\n\n\n\n";

                    label2.innerHTML = "<br>B)   " + data.Pregunta2.Respuestas[1].R2 + "\n\n\n\n\n";

                    label3.innerHTML = "<br>C)   " + data.Pregunta2.Respuestas[2].R3 + "\n\n\n\n\n";
                    input.setAttribute("value", data.Pregunta2.Respuestas[0].valor);
                    input2.setAttribute("value", data.Pregunta2.Respuestas[1].valor);
                    input3.setAttribute("value", data.Pregunta2.Respuestas[2].valor);
                    cuerpo.appendChild(h2);
                    cuerpo.appendChild(label);
                    cuerpo.appendChild(input);
                    cuerpo.appendChild(label2);
                    cuerpo.appendChild(input2);
                    cuerpo.appendChild(label3);
                    cuerpo.appendChild(input3);
                    cuerpo.appendChild(salir);

                    break;
                case 3:
                    h2.appendChild(document.createTextNode(data.Pregunta3.Q));
                    label.innerHTML = "<br>A)   " + data.Pregunta3.Respuestas[0].R1 + "\n\n\n\n\n";

                    label2.innerHTML = "<br>B)   " + data.Pregunta3.Respuestas[1].R2 + "\n\n\n\n\n";

                    label3.innerHTML = "<br>C)   " + data.Pregunta3.Respuestas[2].R3 + "\n\n\n\n\n";
                    input.setAttribute("value", data.Pregunta3.Respuestas[0].valor);
                    input2.setAttribute("value", data.Pregunta3.Respuestas[1].valor);
                    input3.setAttribute("value", data.Pregunta3.Respuestas[2].valor);
                    cuerpo.appendChild(h2);
                    cuerpo.appendChild(label);
                    cuerpo.appendChild(input);
                    cuerpo.appendChild(label2);
                    cuerpo.appendChild(input2);
                    cuerpo.appendChild(label3);
                    cuerpo.appendChild(input3);
                    cuerpo.appendChild(salir);

                    break;
                case 4:
                    h2.appendChild(document.createTextNode(data.Pregunta4.Q));
                    label.innerHTML = "<br>A)   " + data.Pregunta4.Respuestas[0].R1 + "\n\n\n\n\n";

                    label2.innerHTML = "<br>B)   " + data.Pregunta4.Respuestas[1].R2 + "\n\n\n\n\n";

                    label3.innerHTML = "<br>C)   " + data.Pregunta4.Respuestas[2].R3 + "\n\n\n\n\n";
                    input.setAttribute("value", data.Pregunta4.Respuestas[0].valor);
                    input2.setAttribute("value", data.Pregunta4.Respuestas[1].valor);
                    input3.setAttribute("value", data.Pregunta4.Respuestas[2].valor);
                    cuerpo.appendChild(h2);
                    cuerpo.appendChild(label);
                    cuerpo.appendChild(input);
                    cuerpo.appendChild(label2);
                    cuerpo.appendChild(input2);
                    cuerpo.appendChild(label3);
                    cuerpo.appendChild(input3);
                    cuerpo.appendChild(salir);

                    break;
                case 5:
                    h2.appendChild(document.createTextNode(data.Pregunta5.Q));
                    label.innerHTML = "<br>A)   " + data.Pregunta5.Respuestas[0].R1 + "\n\n\n\n\n";

                    label2.innerHTML = "<br>B)   " + data.Pregunta5.Respuestas[1].R2 + "\n\n\n\n\n";

                    label3.innerHTML = "<br>C)   " + data.Pregunta5.Respuestas[2].R3 + "\n\n\n\n\n";
                    input.setAttribute("value", data.Pregunta5.Respuestas[0].valor);
                    input2.setAttribute("value", data.Pregunta5.Respuestas[1].valor);
                    input3.setAttribute("value", data.Pregunta5.Respuestas[2].valor);
                    cuerpo.appendChild(h2);
                    cuerpo.appendChild(label);
                    cuerpo.appendChild(input);
                    cuerpo.appendChild(label2);
                    cuerpo.appendChild(input2);
                    cuerpo.appendChild(label3);
                    cuerpo.appendChild(input3);
                    cuerpo.appendChild(salir);

                    break;
                case 6:
                    h2.appendChild(document.createTextNode(data.Pregunta6.Q));
                    label.innerHTML = "<br>A)   " + data.Pregunta6.Respuestas[0].R1 + "\n\n\n\n\n";

                    label2.innerHTML = "<br>B)   " + data.Pregunta6.Respuestas[1].R2 + "\n\n\n\n\n";

                    label3.innerHTML = "<br>C)   " + data.Pregunta6.Respuestas[2].R3 + "\n\n\n\n\n";
                    input.setAttribute("value", data.Pregunta6.Respuestas[0].valor);
                    input2.setAttribute("value", data.Pregunta6.Respuestas[1].valor);
                    input3.setAttribute("value", data.Pregunta6.Respuestas[2].valor);
                    cuerpo.appendChild(h2);
                    cuerpo.appendChild(label);
                    cuerpo.appendChild(input);
                    cuerpo.appendChild(label2);
                    cuerpo.appendChild(input2);
                    cuerpo.appendChild(label3);
                    cuerpo.appendChild(input3);
                    cuerpo.appendChild(salir);

                    break;
                case 7:
                    h2.appendChild(document.createTextNode(data.Pregunta7.Q));
                    label.innerHTML = "<br>A)   " + data.Pregunta7.Respuestas[0].R1 + "\n\n\n\n\n";

                    label2.innerHTML = "<br>B)   " + data.Pregunta7.Respuestas[1].R2 + "\n\n\n\n\n";

                    label3.innerHTML = "<br>C)   " + data.Pregunta7.Respuestas[2].R3 + "\n\n\n\n\n";
                    input.setAttribute("value", data.Pregunta7.Respuestas[0].valor);
                    input2.setAttribute("value", data.Pregunta7.Respuestas[1].valor);
                    input3.setAttribute("value", data.Pregunta7.Respuestas[2].valor);
                    cuerpo.appendChild(h2);
                    cuerpo.appendChild(label);
                    cuerpo.appendChild(input);
                    cuerpo.appendChild(label2);
                    cuerpo.appendChild(input2);
                    cuerpo.appendChild(label3);
                    cuerpo.appendChild(input3);
                    cuerpo.appendChild(salir);

                    break;
                case 8:
                    h2.appendChild(document.createTextNode(data.Pregunta8.Q));
                    label.innerHTML = "<br>A)   " + data.Pregunta8.Respuestas[0].R1 + "\n\n\n\n\n";

                    label2.innerHTML = "<br>B)   " + data.Pregunta8.Respuestas[1].R2 + "\n\n\n\n\n";

                    label3.innerHTML = "<br>C)   " + data.Pregunta8.Respuestas[2].R3 + "\n\n\n\n\n";
                    input.setAttribute("value", data.Pregunta8.Respuestas[0].valor);
                    input2.setAttribute("value", data.Pregunta8.Respuestas[1].valor);
                    input3.setAttribute("value", data.Pregunta8.Respuestas[2].valor);
                    cuerpo.appendChild(h2);
                    cuerpo.appendChild(label);
                    cuerpo.appendChild(input);
                    cuerpo.appendChild(label2);
                    cuerpo.appendChild(input2);
                    cuerpo.appendChild(label3);
                    cuerpo.appendChild(input3);
                    cuerpo.appendChild(salir);

                    break;
                case 9:
                    h2.appendChild(document.createTextNode(data.Pregunta9.Q));
                    label.innerHTML = "<br>A)   " + data.Pregunta9.Respuestas[0].R1 + "\n\n\n\n\n";

                    label2.innerHTML = "<br>B)   " + data.Pregunta9.Respuestas[1].R2 + "\n\n\n\n\n";

                    label3.innerHTML = "<br>C)   " + data.Pregunta9.Respuestas[2].R3 + "\n\n\n\n\n";
                    input.setAttribute("value", data.Pregunta9.Respuestas[0].valor);
                    input2.setAttribute("value", data.Pregunta9.Respuestas[1].valor);
                    input3.setAttribute("value", data.Pregunta9.Respuestas[2].valor);
                    cuerpo.appendChild(h2);
                    cuerpo.appendChild(label);
                    cuerpo.appendChild(input);
                    cuerpo.appendChild(label2);
                    cuerpo.appendChild(input2);
                    cuerpo.appendChild(label3);
                    cuerpo.appendChild(input3);
                    cuerpo.appendChild(salir);

                    break;
                case 10:
                    h2.appendChild(document.createTextNode(data.Pregunta10.Q));
                    label.innerHTML = "<br>A)   " + data.Pregunta10.Respuestas[0].R1 + "\n\n\n\n\n";

                    label2.innerHTML = "<br>B)   " + data.Pregunta10.Respuestas[1].R2 + "\n\n\n\n\n";

                    label3.innerHTML = "<br>C)   " + data.Pregunta10.Respuestas[2].R3 + "\n\n\n\n\n";
                    input.setAttribute("value", data.Pregunta10.Respuestas[0].valor);
                    input2.setAttribute("value", data.Pregunta10.Respuestas[1].valor);
                    input3.setAttribute("value", data.Pregunta10.Respuestas[2].valor);
                    cuerpo.appendChild(h2);
                    cuerpo.appendChild(label);
                    cuerpo.appendChild(input);
                    cuerpo.appendChild(label2);
                    cuerpo.appendChild(input2);
                    cuerpo.appendChild(label3);
                    cuerpo.appendChild(input3);
                    cuerpo.appendChild(salir);

                    break;
                case 11:
                    h2.appendChild(document.createTextNode(data.Pregunta11.Q));
                    label.innerHTML = "<br>A)   " + data.Pregunta11.Respuestas[0].R1 + "\n\n\n\n\n";

                    label2.innerHTML = "<br>B)   " + data.Pregunta11.Respuestas[1].R2 + "\n\n\n\n\n";

                    label3.innerHTML = "<br>C)   " + data.Pregunta11.Respuestas[2].R3 + "\n\n\n\n\n";
                    input.setAttribute("value", data.Pregunta11.Respuestas[0].valor);
                    input2.setAttribute("value", data.Pregunta11.Respuestas[1].valor);
                    input3.setAttribute("value", data.Pregunta11.Respuestas[2].valor);
                    cuerpo.appendChild(h2);
                    cuerpo.appendChild(label);
                    cuerpo.appendChild(input);
                    cuerpo.appendChild(label2);
                    cuerpo.appendChild(input2);
                    cuerpo.appendChild(label3);
                    cuerpo.appendChild(input3);
                    cuerpo.appendChild(salir);

                    break;
            }
        });
    }
}
var utilidades = {
    readTextFile: function(file, callback) {
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }
}