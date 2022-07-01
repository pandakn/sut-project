am4core.ready(() => {
  // Create chart
  const chartDiv = document.getElementById("chartdiv");
  
  am4core.useTheme(am4themes_animated);

  var chart = am4core.create(chartDiv, "ForceDirectedTree");
  // Show data node
  // chart.legend = new am4charts.Legend();

  // Create series
  var series = chart.series.push(
    new am4plugins_forceDirected.ForceDirectedSeries()
  );

  // Set data
  // external load data from chart_data.json
  series.dataSource.url = "./json/chart_data.json";
  
  // Set up data fields
  series.dataFields.value = "value";
  series.dataFields.name = "name";
  series.dataFields.children = "children";
  series.nodes.template.tooltipText = "{name}:{value}";
  series.manyBodyStrength = -20;
  series.minRadius = am4core.percent(1.5);
  // Add labels
  series.nodes.template.label.text = "{name}";
  series.fontSize = 12;

  // lighten color children
  series.nodes.template.adapter.add("fill", function(fill, target) {
    return fill.lighten(target.dataItem.level * 0.25);
  });

  // Click to slide bar show course details
  // Not yet 
  series.nodes.template.events.on("hit", (ev) => {
    let selectedNode = ev.target;
    if (selectedNode.isActive) {
      console.log("selectedNode", selectedNode.isActive);
      console.log("Clicked");
      // document.body.style.backgroundColor = "#fff";
      document.getElementById("mySidenav").style.width = "0";

      // selectedNode = undefined;
    } else {
      console.log("selectedNode", selectedNode.isActive);
      if (selectedNode) {
        // document.body.style.backgroundColor = "#1f1a24";
        // console.log(ev.target);

        document.getElementById("mySidenav").style.width = "25%";
      }
    }
  });
});
