function generarHorarios() {
            let html = "<h3>Horario Mañana</h3><table>";
            html += "<tr><th>Hora</th><th>Lunes</th><th>Martes</th><th>Miercoles</th><th>Jueves</th><th>Viernes</th></tr>";
            
            for (let h = 9; h <= 13; h += 2) {
                html += "<tr><th>" + h + ":00-" + (h+2) + ":00</th>";
                for (let d = 0; d < 5; d++) {
                    html += "<td></td>";
                }
                html += "</tr>";
            }
            html += "</table>";

            html += "<h3>Horario Tarde</h3><table>";
            html += "<tr><th>Hora</th><th>Lunes</th><th>Martes</th><th>Miercoles</th><th>Jueves</th><th>Viernes</th><th>Sabado</th><th>Domingo</th></tr>";
            
            for (let h = 16; h <= 20; h++) {
                html += "<tr><th>" + h + ":00-" + (h+1) + ":00</th>";
                for (let d = 0; d < 7; d++) {
                    html += "<td></td>";
                }
                html += "</tr>";
            }
            html += "</table>";

            document.getElementById("resultadoH").innerHTML = html;
        }