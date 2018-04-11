function showInfo(){} // Turn showInfo() into global function
$(document).ready(function() {
	
  		
  		/* data引入 */
  		jsContent = $('#js-content').offset().top;
    $('#btn').click(function() {
        $('#results').hide();
        infowindow = new google.maps.InfoWindow();
        var data =  [
  {
    "編號": 1,
    "商圈名稱": "精明一街商圈",
    "組織名稱": "臺中市精明一街管理委員會",
    "職稱": "主委",
    "姓名": "侯宏宗",
    "地址": "403臺中市西區精明一街80號",
    "電話": "04-3704-8811",
    "Wgs84X": "120.655411",
    "Wgs84Y": "24.155416"
  },
  {
    "編號": 2,
    "商圈名稱": "大隆路商圈",
    "組織名稱": "臺中市大隆路商店街管理委員會",
    "職稱": "主委",
    "姓名": "劉阿貞",
    "地址": "403臺中市西區大隆路12號",
    "電話": "04-2323-6254",
    "Wgs84X": "120.655386",
    "Wgs84Y": "24.155172"
  },
  {
    "編號": 3,
    "商圈名稱": "電子街商圈",
    "組織名稱": "臺中市電子街行人徒步區管理委員會",
    "職稱": "主委",
    "姓名": "余政雄",
    "地址": "400臺中市中區綠川西街95號",
    "電話": "04-2224-0048",
    "Wgs84X": "120.682624",
    "Wgs84Y": "24.137732"
  },
  {
    "編號": 4,
    "商圈名稱": "繼光街商圈",
    "組織名稱": "臺中市繼光商店街行人徒步區管理委員會",
    "職稱": "主委",
    "姓名": "林錦源",
    "地址": "400臺中市中區臺灣大道1段209號",
    "電話": "04-2222-8786",
    "Wgs84X": "120.681564",
    "Wgs84Y": "24.140573"
  },
  {
    "編號": 5,
    "商圈名稱": "美術園道商圈",
    "組織名稱": "臺中市美術園道商店街管理委員會",
    "職稱": "主委",
    "姓名": "楊日瑱",
    "地址": "403臺中市西區五權西二街152號",
    "電話": "04-2375-5482",
    "Wgs84X": "120.663728",
    "Wgs84Y": "24.134013"
  },
  {
    "編號": 6,
    "商圈名稱": "天津路服飾商圈",
    "組織名稱": "臺中市天津路服飾商圈管理委員會",
    "職稱": "主委",
    "姓名": "余大江",
    "地址": "404臺中市北區天津路2段149號",
    "電話": "04-2291-9714",
    "Wgs84X": "120.677719",
    "Wgs84Y": "24.170082"
  },
  {
    "編號": 7,
    "商圈名稱": "大坑商圈",
    "組織名稱": "臺中市大坑商圈管理委員會",
    "職稱": "主委",
    "姓名": "東正勝",
    "地址": "406臺中市北屯區東山路2段48-3號",
    "電話": "04-2239-6349",
    "Wgs84X": "120.741085",
    "Wgs84Y": "24.179763"
  },
  {
    "編號": 8,
    "商圈名稱": "一中街商圈",
    "組織名稱": "臺中市一中街（含育才南街）商店管理委員會",
    "職稱": "主委",
    "姓名": "陳信志",
    "地址": "404臺中市北區一中街116巷25號",
    "電話": "04-2225-5663",
    "Wgs84X": "120.687206",
    "Wgs84Y": "24.152610"
  },
  {
    "編號": 9,
    "商圈名稱": "逢甲商圈",
    "組織名稱": "臺中市逢甲商店街管理委員會",
    "職稱": "主委",
    "姓名": "王朝藝",
    "地址": "407臺中市西屯區福星路431號",
    "電話": "04-2451-9076",
    "Wgs84X": "120.645263",
    "Wgs84Y": "24.178551"
  },
  {
    "編號": 10,
    "商圈名稱": "自由路商圈",
    "組織名稱": "臺中市中區自由路商圈管理委員會",
    "職稱": "主委",
    "姓名": "翁羿琦",
    "地址": "400臺中市中區自由路二段36號",
    "電話": "04-2222-2257",
    "Wgs84X": "120.681783",
    "Wgs84Y": "24.139541"
  },
  {
    "編號": 11,
    "商圈名稱": "昌平皮鞋商圈",
    "組織名稱": "臺中市昌平皮鞋商店街區管理委員會",
    "職稱": "主委",
    "姓名": "江勁航",
    "地址": "406臺中市北屯區昌平路1段63號",
    "電話": "04-2234-4371",
    "Wgs84X": "120.692981",
    "Wgs84Y": "24.167360"
  },
  {
    "編號": 12,
    "商圈名稱": "谷關商圈",
    "組織名稱": "臺中市和平區谷關社區發展協會",
    "職稱": "理事長",
    "姓名": "顏世陸",
    "地址": "424臺中市和平區東關路1段溫泉巷10號",
    "電話": "04-2595-1998",
    "Wgs84X": "121.010796",
    "Wgs84Y": "24.204169"
  },
  {
    "編號": 13,
    "商圈名稱": "臺中港舶來品商圈",
    "組織名稱": "臺中市臺中港區經濟繁榮促進會",
    "職稱": "理事長",
    "姓名": "陳麗玉",
    "地址": "436臺中市梧棲區臨港路4段886號",
    "電話": "04-2656-6922",
    "Wgs84X": "120.530740",
    "Wgs84Y": "24.267834"
  },
  {
    "編號": 14,
    "商圈名稱": "東勢形象商圈",
    "組織名稱": "臺中市東勢區形象商圈發展協會",
    "職稱": "理事長",
    "姓名": "葉艾維",
    "地址": "423臺中市東勢區中山路17號",
    "電話": "04-2587-4345",
    "Wgs84X": "120.830674",
    "Wgs84Y": "24.257391"
  },
  {
    "編號": 15,
    "商圈名稱": "新社商圈",
    "組織名稱": "臺中市新社區休閒農業導覽發展協會",
    "職稱": "理事長",
    "姓名": "傅慶泉",
    "地址": "426臺中市新社區中興里中興嶺99號",
    "電話": "04-2582-1058",
    "Wgs84X": "120.787716",
    "Wgs84Y": "24.208084"
  },
  {
    "編號": 16,
    "商圈名稱": "豐原廟東復興商圈",
    "組織名稱": "臺中市豐原廟東復興商圈管理委員會",
    "職稱": "主委",
    "姓名": "吳俊和",
    "地址": "420臺中市豐原區信義街86號",
    "電話": "04-25243798",
    "Wgs84X": "120.718972",
    "Wgs84Y": "24.250482"
  },
  {
    "編號": 17,
    "商圈名稱": "后里泰安商圈",
    "組織名稱": "臺中市后里區泰安社區發展協會",
    "職稱": "理事長",
    "姓名": "李奇芳",
    "地址": "421臺中市后里區泰安里福美路4號",
    "電話": "04-2556-6920",
    "Wgs84X": "120.736897",
    "Wgs84Y": "24.324937"
  },
  {
    "編號": 18,
    "商圈名稱": "烏日啤酒商圈",
    "組織名稱": "臺中市高鐵文化觀光發展協會",
    "職稱": "理事長",
    "姓名": "張正興",
    "地址": "414臺中市烏日區成功東路42號",
    "電話": "04-2337-6638",
    "Wgs84X": "120.603316",
    "Wgs84Y": "24.114560"
  },
  {
    "編號": 19,
    "商圈名稱": "太平樹孝商圈",
    "組織名稱": "臺中市太平樹孝商圈管理委員會",
    "職稱": "主委",
    "姓名": "劉震藩",
    "地址": "411臺中市太平區樹孝路73號",
    "電話": "04-2391-6492",
    "Wgs84X": "120.716754",
    "Wgs84Y": "24.151624"
  },
  {
    "編號": 20,
    "商圈名稱": "霧峰區樹仁路商圈",
    "組織名稱": "臺中市霧峰區樹仁路商圈再造推動小組",
    "職稱": "主委",
    "姓名": "郭芳溢",
    "地址": "413臺中市霧峰區樹仁路13號",
    "電話": "04-2333-6469",
    "Wgs84X": "120.697256",
    "Wgs84Y": "24.064416"
  },
  {
    "編號": 21,
    "商圈名稱": "東海藝術街商圈",
    "組織名稱": "臺中市東海藝術街商店街區管理委員會",
    "職稱": "主委",
    "姓名": "莊家玟",
    "地址": "434臺中市龍井區國際街127號2樓",
    "電話": "04-2631-7686",
    "Wgs84X": "120.595406",
    "Wgs84Y": "24.186844"
  },
  {
    "編號": 22,
    "商圈名稱": "大甲鎮瀾觀光商圈",
    "組織名稱": "臺中市大甲鎮瀾觀光商店街區管理委員會",
    "職稱": "主委",
    "姓名": "陳裕賢",
    "地址": "437臺中市大甲區光明路67號",
    "電話": "04-2687-0929",
    "Wgs84X": "120.623211",
    "Wgs84Y": "24.344087"
  },
  {
    "編號": 23,
    "商圈名稱": "大里中興商圈",
    "組織名稱": "臺中市大里中興商圈管理委員會",
    "職稱": "主委",
    "姓名": "傅運福",
    "地址": "412臺中市大里區中興路2段372號",
    "電話": "04-2483-9155",
    "Wgs84X": "120.689454",
    "Wgs84Y": "24.105845"
  }]
  
  infowindow = new google.maps.InfoWindow();
    //console.log();
 	$('#results').show();
 	$('.content-list').html('');

marker = [];
// Check select value then create init map
 	for (var i=0; i <data.length;i++){
 		var area = data[i].商圈名稱;
 		if (area === $("#choise").val()) {
 			var latlng = new google.maps.LatLng(data[i].Wgs84Y, data[i].Wgs84X);
 			alert(latlng);
	     	 var myOptions = {
	            zoom: 16,
	            center: latlng
	        };				                 
			}
 		else if ($('#choise').val() === '台中市全商圈'){
	    //alert("資料載入正確，共有：" + data.length + "筆");
          var latlng = new google.maps.LatLng(data[i].Wgs84Y, data[i].Wgs84X);
          var myOptions = {
              zoom: 10,
              center: latlng
            };
        	}
    		 				
 		}
 	
 		// Create map
	      map = new google.maps.Map($("#map")[0], myOptions); // End of default google map
				for(i=0; i<data.length; i++){
          		var area = data[i].商圈名稱;
         		 org = data[i].組織名稱;
      			 name = data[i].姓名;
      			 job = data[i].職稱;
      			 add = data[i].地址;
      			 phone = data[i].電話;
			onclickJs = "showInfo(map, marker[" + i + "])";
			result = '<li>\
						<h3 style="color:blue">' + area + '</h3>\
						<p style="color:blue"> 單位名稱：' + org + ' </p>\
						<p style="color:blue"> 職稱：' + job + '</p>\
						<p style="color:blue"> 姓名：' + name + '</p>\
						<p style="color:blue"> 地址：' + add + '</p>\
						<p style="color:blue"> 電話：' + phone + '</p>\
						<p style="color:blue"> 座標：' + data[i].Wgs84Y +','+ data[i].Wgs84X +'</p>\
					</li>';    	
	       
	          		// Search area info
					if($('#choise').val() === area) {
					$( ".content-list" ).append(result)
						 // Add new markers	
	        	marker[i] = new google.maps.Marker({
                position: new google.maps.LatLng(data[i].Wgs84Y,data[i].Wgs84X),
                map: map,
                title: area, add, phone
             			});
	        			// Open infowindow event
	        			google.maps.event.addListener(marker[i], 'click', function(){ 
							showInfo(map, this);
						});// End of area addListener
 						}// End of Area Search					 
	      		// Search All info
 					else if($('#choise').val() === '台中市全商圈') {           
            	marker[i] = new google.maps.Marker({
                position: new google.maps.LatLng(data[i].Wgs84Y,data[i].Wgs84X),
                map: map,
                title: area, add, phone
                          //title: '這是測試2'
                        });
            	google.maps.event.addListener(marker[i], 'click', function(){ 
						showInfo(map, this);
						});// End of area addListener
           				}// End of else if
 					showInfo = function(mapObj, markerObj) { // Open infowindow function
						  infowindow.setContent(infoContent(markerObj));
						  infowindow.open(mapObj, markerObj);
						  $('html, body').animate({
								scrollTop: jsContent
							}, 350);
						} // End of showInfo
						var infoContent = function(markerObj) { // Setting infowindow content function
						   html = '<ul id="' + markerObj.area + '" style="list-style:none;"><li>名稱: '+ markerObj.title +'</li>';
						   html += '<li>詳細位置: '+ markerObj.add +'</li></ul>';
						   html += '<li>聯絡電話: '+ markerObj.phone +'</li></ul>';
						   //html += '<button id="' + #btn + '" >'+ markerObj.phone +'</button>'</ul>';
						   return html;
						}	// End of infoContent



		}// End of for
				if($('#choise').val() === 'null') {
					alert('請選擇商圈！');


				}

	
		});  
	});
 



   	