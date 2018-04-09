function showInfo(){} // Turn showInfo() into global function
$(document).ready(function() {

	
  		
  		/* data引入 */
    $('#btn').click(function() {
        $('#results').hide();
        var data =  [
  { "編號": 1,
    "商圈名稱": "精明一街商圈",
    "組織名稱": "臺中市精明一街管理委員會",
    "職稱": "主委",
    "姓名": "侯宏宗",
    "地址": "403臺中市西區精明一街80號",
    "電話": "04-3704-8811",
    "Wgs84X": "120.655111",
	  "Wgs84Y": "24.155716" },
	{ "編號": 2,
    "商圈名稱": "精明二街商圈",
    "組織名稱": "臺中市精明二街管理委員會",
    "職稱": "主委",
    "姓名": "侯宏宗",
    "地址": "403臺中市西區精明一街80號",
    "電話": "04-3704-8811",
    "Wgs84X": "120.655411",
    "Wgs84Y": "24.155416" }
	  ];
  alert("資料載入正確，共有：" + data.length + "筆");
  infowindow = new google.maps.InfoWindow();
    //console.log();
 	$('#results').show();
 	$('.content-list').html('');

marker = [];
// Check select value then create init map
 	for (var i=0; i <data.length;i++){
 		
 		var org = data[i].商圈名稱;
 		if (org == $("#open").val()) {
 			var latlng = new google.maps.LatLng(data[i].Wgs84Y, data[i].Wgs84X);
 			alert(latlng);
	     	 var myOptions = {
	            zoom: 16,
	            center: latlng
	        	};
				
                  alert(org);
      $( ".content-list" ).append(
                    '<li>\
<h3>' + data[i].商圈名稱 + '</h3>\
<p> 單位名稱：' + data[i].組織名稱 + ' </p>\
<p> 主委：' + data[i].姓名 + '</p>\
<p> 地址：' + data[i].地址 + '</p>\
<p> 座標：' + data[i].Wgs84Y + data[i].Wgs84X +'</p>\
</li>');

        }
 		
	else if ($('#open').val() === '台中市全商圈'){
          var latlng = new google.maps.LatLng(data[i].Wgs84Y, data[i].Wgs84X);
          var myOptions = {
              zoom: 13,
              center: latlng
            };
        }

 			//alert($("#open").val());

 		
		
 		}

 	
 		// Create map
	      map = new google.maps.Map($("#map")[0], myOptions); // End of default google map
				for(i=0; i<data.length; i++){
          var org = data[i].商圈名稱;
    if (org == $("#open").val()) {
      var latlng = new google.maps.LatLng(data[i].Wgs84Y, data[i].Wgs84X);


	        onclickJs = "showInfo(map, marker[" + i + "])";

	       // Add new markers	
	        marker[i] = new google.maps.Marker({
                  position: new google.maps.LatLng(data[i].Wgs84Y,data[i].Wgs84X),
                  map: map,
                  //title: name, address, caseSN
             			});

 	}
 else if($('#open').val() === '台中市全商圈') {
           
            marker[i] = new google.maps.Marker({
                          position: new google.maps.LatLng(data[i].Wgs84Y,data[i].Wgs84X),
                          map: map,

                          //title: name, address, caseSN
                        });
        
      }
 
}


});	
  
 
});


   	