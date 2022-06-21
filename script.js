var map = L.map('map', {
    'center': [15.97466,108.25204],
    'zoom': 19  ,
    'layers': [
      L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 22,
        attribution: "Map data &copy; OpenStreetMap contributors"
    })
    ]
  });
  
  var controlLayers = L.control.layers().addTo(map);
//   var url = 'https://rawgit.com/johan/world.geo.json/master/countries.geo.json';
  
  $.getJSON('./floor1.json', function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      style: function (feature) {
       var fill = "gray";
        if(feature.properties.room === 'class')
        {
               fill ='red';
              
                
        }
        if(feature.properties.room === 'wc')
        {
               fill ='#009999';
                
        }
        if(feature.properties.room === 'costume')
        {
               fill ='#999933';
                
        }
        if(feature.properties.room === 'teacher')
        {
               fill ='#FF6600';
                
        }
        if(feature.properties.room === 'door')
        {
               fill ='#0033FF';
                
        }
        if(feature.properties.room === 'ladder')
        {
               fill ='#00CC00';
                
        }
        if(feature.properties.room === 'equipment')
        {
               fill ='#006699';
                
        }
        

        return {
              fillColor : fill,
              weight: 2,
              color: '#666',
              fillOpacity: 1
        }
      },
      onEachFeature: function(feature, layer){
          if(feature.properties.id ==='class')
             {
               layer.bindPopup("<h1> Phòng dạy học sinh viên  tầng 1 </h1>"+'<img style="width :100%; height: 100%;"  src="./img/student.jpg"></img>')
            }
        if(feature.properties.room=== 'wc'){
          layer.bindPopup("<h1> Phòng vệ sinh  </h1> <p> Phòng vệ sinh tầng 1</p>" +' <img style="width :100%; height: 100%;"  src="./img/wc.jpg"></img>');
        }
        if(feature.properties.room=== 'costume'){
          layer.bindPopup("<h1> Phòng trang phục tầng 1 </h1> <p> Đây là phòng trang phục</p>"+'<img style="width :100%; height: 100%;"  src="./img/ptrangphiuc.jpg"></img>');
        }
        if(feature.properties.room=== 'door'){
          layer.bindPopup("<h1> Cửa ra vào khu A tầng 1 </h1><p> cửa ra vào</p>"+' <img style="width :100%; height: 100%;"  src="./img/door.jpg"></img>');
        }
        if(feature.properties.room=== 'equipment'){
          layer.bindPopup("<h1> Phòng thiết bị  tầng 1</h1> <p> Đây là phòng thiết bị</p>" +'<img style="width :100%; height: 100%;"  src="./img/thietbi.jpg"></img>');
        }
        if(feature.properties.room === 'ladder')
        {
          layer.bindPopup("<h1> Cầu thang tầng 1 </h1> "+'<img style="width :100%; height: 100%;"  src="./img/ladder.jpg"></img>');
        }    
        if(feature.properties.room=== 'teacher'){
          layer.bindPopup("<h1> Phòng giảng viên A.109  </h1> "+ 
          '  <img style="width :100%; height: 100%;"  src="./img/teacher.jpg"></img>');
        }
        if(feature.properties.room === 'hop')
        {
          layer.bindPopup("<h1> Phòng họp  tầng 1</h1> "+'<img style="width :100%; height: 100%;"  src="./img/hop1.jpg"></img>');
        }    
      },
      
    });
   
    // geojsonLayer.addTo(map);
    controlLayers.addOverlay(geojsonLayer, 'A.Floor 1');
  });
 
  // Test popup tang 1
  // $.getJSON('./floor1.json', function (geojson) {
  //   var geojsonLayer = L.geoJson(geojson, {
  //       onEachFeature: function(feature, layer){
  //         if(feature.properties.room=== 'class'){
  //           layer.bindPopup("<h1> Marker </h1> <p> this is a next marker</p>");
  //         }
  //       }
  //   });
    
  // });
  // ===========================them layer tang moi
  $.getJSON('./floor2.json', function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      style: function (feature) {
        var fill = "gray";
        if(feature.properties.room === 'class')
        {
               fill ='#00FFFF';
              
                
        }
        if(feature.properties.room === 'hop')
        {
               fill ='#0099CC';
              
                
        }
        if(feature.properties.room === 'lithuyet')
        {
               fill ='#993300';
              
                
        }
        if(feature.properties.room === 'wc')
        {
               fill ='#008080';
                
        }
      
    
  
        if(feature.properties.room === 'ladder')
        {
               fill ='#808080';
                
        }
        if(feature.properties.room === 'equipment')
        {
               fill ='#FFFFCC';
                
        }
        return {
          fillColor : fill,
          weight: 2,
          color: '#333399',
          fillOpacity: 1
        }
      },
      onEachFeature: function(feature, layer){
        if(feature.properties.room ==='class')
           {
             layer.bindPopup("<h1> Phòng dạy học sinh viên  tầng 2 </h1>"+'<img style="width :100%; height: 100%;"  src="./img/hoc2.jpg"></img>')
          }
      if(feature.properties.room=== 'wc'){
        layer.bindPopup("<h1> Phòng vệ sinh  </h1> <p> Phòng vệ sinh tầng 2</p>" +' <img style="width :100%; height: 100%;"  src="./img/wc2.jpg"></img>');
      }
      if(feature.properties.room=== 'lithuyet'){
        layer.bindPopup("<h1> Phòng học lí thuyết tầng 2 </h1>"+'<img style="width :100%; height: 100%;"  src="./img/lithuyet2.jpg"></img>');
      }
      
      if(feature.properties.room=== 'equipment'){
        layer.bindPopup("<h1> Phòng thiết bị tầng 2 </h1> <p> Đây là phòng thiết bị</p>" +'<img style="width :100%; height: 100%;"  src="./img/thietbi2.jpg"></img>');
      }
      if(feature.properties.room === 'ladder')
      {
        layer.bindPopup("<h1> Cầu thang tầng 2 </h1> "+'<img style="width :100%; height: 100%;"  src="./img/ladder2.jpg"></img>');
      }    
      if(feature.properties.room=== 'hop'){
        layer.bindPopup("<h1> Phòng họp tầng 2 </h1> "+ 
        '  <img style="width :100%; height: 100%;"  src="./img/hop2.jpg"></img>');
      }
    }
    });
    // .bindPopup("<h1>Marker</h1> <p> This is the marker next </p>")
    controlLayers.addOverlay(geojsonLayer, 'A.Floor 2');
  });
  // tang 3
  $.getJSON('./floor3.json', function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      style: function (feature) {
        var fill = "gray";
        if(feature.properties.room === 'class')
        {
               fill ='#00AA00';
              
                
        }
        if(feature.properties.room === 'wc')
        {
               fill ='#FF00FF';
                
        }
        if(feature.properties.room === 'hop')
        {
               fill ='#660000';
              
                
        }
        if(feature.properties.room === 'lithuyet')
        {
               fill ='#6600FF';
              
                
        }
      
    
  
        if(feature.properties.room === 'ladder')
        {
               fill ='#006699';
                
        }
        if(feature.properties.room === 'equipment')
        {
               fill ='#CC6600';
                
        }
        return {
          fillColor : fill,
          weight: 2,
          color: '#333399',
          fillOpacity: 1
        }
      },
      onEachFeature: function(feature, layer){
        if(feature.properties.room ==='class')
           {
             layer.bindPopup("<h1> Phòng dạy học sinh viên tầng 3  </h1>"+'<img style="width :100%; height: 100%;"  src="./img/hoc3.jpg"></img>')
          }
      if(feature.properties.room=== 'wc'){
        layer.bindPopup("<h1> Phòng vệ sinh  </h1> <p> Phòng vệ sinh tầng 3</p>" +' <img style="width :100%; height: 100%;"  src="./img/wc3.jpg"></img>');
      }
      if(feature.properties.room=== 'lithuyet'){
        layer.bindPopup("<h1> Phòng học lí thuyết tầng 3 </h1>"+'<img style="width :100%; height: 100%;"  src="./img/lithuyet3.jpg"></img>');
      }
      
      if(feature.properties.room=== 'equipment'){
        layer.bindPopup("<h1> Phòng thiết bị tầng 3 </h1> <p> Đây là phòng thiết bị</p>" +'<img style="width :100%; height: 100%;"  src="./img/thietbi3.jpg"></img>');
      }
      if(feature.properties.room === 'ladder')
      {
        layer.bindPopup("<h1> Cầu thang tầng 3 </h1> "+'<img style="width :100%; height: 100%;"  src="./img/ladder3.jpg"></img>');
      }    
      if(feature.properties.room=== 'hop'){
        layer.bindPopup("<h1> Phòng họp tầng 3 </h1> "+ 
        '  <img style="width :100%; height: 100%;"  src="./img/hop3.jpg"></img>');
      }
    }
    });
    // .bindPopup("<h1>Marker</h1> <p> This is the marker next </p>")
    controlLayers.addOverlay(geojsonLayer, 'A.Floor 3');
  });
// =====================================Khu B Tang 1 ================================================
$.getJSON('./khuBtang1.json', function (geojson){
  var geojsonLayer = L.geoJson(geojson, {  
    style: function (feature) {
      var fill = "gray";
      if(feature.properties.room === 'class')
      {
             fill ='#00AA00';
            
              
      }
      if(feature.properties.room === 'lab')
      {
             fill ='#006699';
            
              
      }
      if(feature.properties.room === 'tea')
      {
             fill ='#660000';
            
              
      }
      if(feature.properties.room === 'ladder')
      {
             fill ='#CC6600';
            
              
      }
      if(feature.properties.room === 'server')
      {
             fill ='#6600FF';
            
              
      }
      return {
        fillColor : fill,
        weight: 2,
        color: '#333399',
        fillOpacity: 1
      }
      

    }
   });
   controlLayers.addOverlay(geojsonLayer, 'B.Floor 1');

})
// =====================================Khu B Tang 2 ================================================
$.getJSON('./khuBtang2.json', function (geojson){
  var geojsonLayer = L.geoJson(geojson, {  
    style: function (feature) {
      var fill = "gray";
      if(feature.properties.room === 'class')
      {
             fill ='#339999';
            
              
      }
      if(feature.properties.room === 'lab')
      {
             fill ='#996666';
            
              
      }
      if(feature.properties.room === 'tea')
      {
             fill ='#8DEEEE';
            
              
      }
      if(feature.properties.room === 'ladder')
      {
             fill ='#FDF5E6';
            
              
      }
      if(feature.properties.room === 'server')
      {
             fill ='#EED5D2';
            
              
      }
      return {
        fillColor : fill,
        weight: 2,
        color: '#333399',
        fillOpacity: 1
      }
      

    }
   });
   controlLayers.addOverlay(geojsonLayer, 'B.Floor 2');

})
// ==============================Khu 3 Tang 1======================================================
$.getJSON('./khu3tang1.json', function (geojson){
  var geojsonLayer = L.geoJson(geojson, {  
    style: function (feature) {
      var fill = "gray";
      if(feature.properties.room === 'class')
      {
             fill ='#4876FF';
            
              
      }
      if(feature.properties.room === 'amphitheater')
      {
             fill ='#8470FF';
            
              
      }
      if(feature.properties.room === 'technical')
      {
             fill ='#607B8B';
            
              
      }
      if(feature.properties.room === 'ladder')
      {
             fill ='#FDF5E6';
            
              
      }
      if(feature.properties.room === 'wc')
      {
             fill ='#EED5D2';
            
              
      }
      if(feature.properties.room === 'ladder')
      {
             fill ='#AFEEEE';
            
              
      }
      return {
        fillColor : fill,
        weight: 2,
        color: '#333399',
        fillOpacity: 1
      }
      

    }
   });
   controlLayers.addOverlay(geojsonLayer, 'C.Floor 1');

})

//==================KHU 3 tang 2====================================
$.getJSON('./khu3tang2.json', function (geojson){
  var geojsonLayer = L.geoJson(geojson, {  
    style: function (feature) {
      var fill = "gray";
      if(feature.properties.room === 'class')
      {
             fill ='#4876FF';
            
              
      }
      if(feature.properties.room === 'amphitheater')
      {
             fill ='#8470FF';
            
              
      }
      if(feature.properties.room === 'technical')
      {
             fill ='#607B8B';
            
              
      }
      if(feature.properties.room === 'ladder')
      {
             fill ='#FDF5E6';
            
              
      }
      if(feature.properties.room === 'wc')
      {
             fill ='#EED5D2';
            
              
      }
      if(feature.properties.room === 'ladder')
      {
             fill ='#AFEEEE';
            
              
      }
      if(feature.properties.room === 'costume')
      {
             fill ='#668B8B';
            
              
      }
      return {
        fillColor : fill,
        weight: 2,
        color: '#333399',
        fillOpacity: 1
      }
      

    }
   });
   controlLayers.addOverlay(geojsonLayer, 'C.Floor 2');

})
  // ================================Layer Map=============================
 
  var grayscale = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
 });
 var osm = L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 22,
  attribution: "Map data &copy; OpenStreetMap contributors"

 }).addTo(map);
 googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
   maxZoom: 20,
   subdomains:['mt0','mt1','mt2','mt3']
 });
 Terrain = L.tileLayer('http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}',{
  maxZoom: 20,
  subdomains:['mt0','mt1','mt2','mt3']
});
Road =L.tileLayer('https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}',{
  maxZoom: 20,
  subdomains:['mt0','mt1','mt2','mt3']
});
 
 controlLayers.addBaseLayer(osm, 'OSM');
 controlLayers.addBaseLayer(grayscale, 'GrayScale');
controlLayers.addBaseLayer(googleSat,'Satelite');
controlLayers.addBaseLayer(Terrain, 'Terrain');
controlLayers.addBaseLayer(Road, 'Road')

  // ======================================GROUP LAYER CONTROL======================================
//   var Floor1 = L.geoJson(floor1);
//   var grayscale = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution}),
//     streets   = L.tileLayer(mapboxUrl, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution});

//   var basemaps = {
//     "Grayscale": grayscale,
//     "Streets": streets
//   }
//   var overlayMaps = {
//     "Floor 1": Floor1
// };
// var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
  // ==================================SELECT JSON===============================================
  
 
