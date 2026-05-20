function calculateFlow() {

  const diameter =
    parseFloat(document.getElementById("diameter").value);

  const velocity =
    parseFloat(document.getElementById("velocity").value);

  const diameterMeters = diameter / 1000;

  const area =
    Math.PI * Math.pow(diameterMeters / 2, 2);

  const flowM3s = area * velocity;

  const flowLMin = flowM3s * 1000 * 60;

  document.getElementById("result").innerHTML =
    flowLMin.toFixed(2);
}

calculateFlow();