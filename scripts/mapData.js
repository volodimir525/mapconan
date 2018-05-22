var mapExtent = [0.00000000, -4000.00000000, 4000.00000000, 0.00000000];
		var mapMinZoom = 3;
		var mapMaxZoom = 6;
		var mapMaxResolution = 0.25000000;
		var mapMinResolution = Math.pow(2, mapMaxZoom) * mapMaxResolution;
		var tileExtent = [0.00000000, -4000.00000000, 4000.00000000, 0.00000000];
		var maxBounds = [[0,0], [-4000,4000]];
		var crs = L.CRS.Simple;
			crs.transformation = new L.Transformation(1, -tileExtent[0], -1, tileExtent[3]);
			crs.scale = function(zoom) {
				return Math.pow(2, zoom) / mapMinResolution;
			};
			crs.zoom = function(scale) {
				return Math.log(scale * mapMinResolution) / Math.LN2;
			};

		var map = new L.Map('map', {
			maxZoom: mapMaxZoom,
			minZoom: mapMinZoom,
			layers: overlays,
			crs: crs,
			maxBounds: maxBounds,
			maxBoundsViscosity: 1,
			attributionControl:false,
			zoomControl:false
			
		});

			layer = L.tileLayer('https://www.conanexilesmap.com/data/images/map/{z}/{x}/{y}.png', {
			minZoom: mapMinZoom, maxZoom: mapMaxZoom,
			bounds: [[0,0], [-4000,4000]],
			tms: false
			
		}).addTo(map);

		map.fitBounds([
        crs.unproject(L.point(mapExtent[2], mapExtent[3])),
        crs.unproject(L.point(mapExtent[0], mapExtent[1]))
		]);

		//Coordinates Display (Bottom Left)
		L.control.mousePosition().addTo(map)
	  	
		//Create Mineral Groups
		var ironGroup = L.layerGroup();
		var coalGroup = L.layerGroup();
		var brimstoneGroup = L.layerGroup();
		var crystalGroup = L.layerGroup();
		var silverGroup = L.layerGroup();
		var starmetalGroup = L.layerGroup();
		var blackiceGroup = L.layerGroup();
		var obsidianGroup = L.layerGroup();
		
		//Create Thrall Groups
		var alchemistGroup = L.layerGroup();
		var armorerGroup = L.layerGroup();
		var blacksmithGroup = L.layerGroup();
		var carpenterGroup = L.layerGroup();
		var cookGroup = L.layerGroup();
		var entertainerGroup = L.layerGroup();
		var priestGroup = L.layerGroup();
		var sherpaGroup = L.layerGroup();
		var smelterGroup = L.layerGroup();
		var tannerGroup = L.layerGroup();
		var taskmasterGroup = L.layerGroup();
		
		//Create Named Thrall Groups
		var namedArcherGroup = L.layerGroup();
		var namedAlchemistGroup = L.layerGroup();
		var namedArmorerGroup = L.layerGroup();
		var namedBlacksmithGroup = L.layerGroup();
		var namedCarpenterGroup = L.layerGroup();
		var namedCookGroup = L.layerGroup();
		var namedEntertainerGroup = L.layerGroup();
		var namedPriestGroup = L.layerGroup();
		var namedSherpaGroup = L.layerGroup();
		var namedSmelterGroup = L.layerGroup();
		var namedTannerGroup = L.layerGroup();
		var namedTaskmasterGroup = L.layerGroup();
		var namedFighterGroup = L.layerGroup();

		
		//Create Location Groups
		var caveGroup = L.layerGroup().addTo(map);
		var dungeonGroup = L.layerGroup().addTo(map);
		var obeliskGroup = L.layerGroup().addTo(map);
		var religonGroup = L.layerGroup().addTo(map);
		var campGroup = L.layerGroup().addTo(map);
		var capitalGroup = L.layerGroup().addTo(map);
		var vistaGroup = L.layerGroup().addTo(map);
		var ruinsGroup = L.layerGroup().addTo(map);
		var bossGroup = L.layerGroup().addTo(map);
		var loreGroup = L.layerGroup().addTo(map);
		var treasureGroup = L.layerGroup().addTo(map);
		
		//Set the groups
		var overlays = {
			"Iron": ironGroup,
			"Coal": coalGroup,
			"Brimstone": brimstoneGroup,
			"Crystal": crystalGroup,
			"Silver": silverGroup,
			"Star Metal": starmetalGroup,
			"Black Ice": blackiceGroup,
			"Obsidian": obsidianGroup,
			"NPC - Religon Trainer": religonGroup,
			"Thrall - Alchemist": alchemistGroup,
			"Thrall - Armorer": armorerGroup,
			"Thrall - Bearer": sherpaGroup,
			"Thrall - Blacksmith": blacksmithGroup,
			"Thrall - Carpenter": carpenterGroup,
			"Thrall - Cook": cookGroup,
			"Thrall - Entertainer": entertainerGroup,
			"Thrall - Priest": priestGroup,
			"Thrall - Tanner": tannerGroup,
			"Thrall - Taskmaster": taskmasterGroup,
			"Thrall - Smelter": smelterGroup,
			"Named Thrall - Archer": namedArcherGroup,
			"Named Thrall - Alchemist": namedAlchemistGroup,
			"Named Thrall - Armorer": namedArmorerGroup,
			"Named Thrall - Blacksmith": namedBlacksmithGroup,
			"Named Thrall - Carpenter": namedCarpenterGroup,
			"Named Thrall - Cook": namedCookGroup,
			"Named Thrall - Entertainer": namedEntertainerGroup,
			"Named Thrall - Fighter": namedFighterGroup,
			"Named Thrall - Priest": namedPriestGroup,
			"Named Thrall - Bearer": namedSherpaGroup,
			"Named Thrall - Smelter": namedSmelterGroup,
			"Named Thrall - Tanner": namedTannerGroup,
			"Named Thrall - Taskmaster": namedTaskmasterGroup,			
			"Locations - Caves": caveGroup,
			"Locations - Obelisks": obeliskGroup,
			"Locations - Dungeons": dungeonGroup,
			"Locations - Camps": campGroup,
			"Locations - Capitals": capitalGroup,
			"Locations - Vistas": vistaGroup,
			"Locations - Ruins": ruinsGroup,
			"Locations - Bosses": bossGroup,
			"Locations - Lore": loreGroup,
			"Locations - Treasure": treasureGroup
		};
		
		//Obsidian Icons
		L.marker([-1266.25,1465], {icon: obsidianIcon}).bindPopup("3 Obsidian Nodes").addTo(obsidianGroup),
		L.marker([-1274.25,1475.5], {icon: obsidianIcon}).bindPopup("3 Obsidian Nodes").addTo(obsidianGroup),
		L.marker([-1249.5,1444.75], {icon: obsidianIcon}).bindPopup("3 Obsidian Nodes").addTo(obsidianGroup),
		L.marker([-1230.5,1452.75], {icon: obsidianIcon}).bindPopup("3 Obsidian Nodes").addTo(obsidianGroup),
		L.marker([-1200.25,1410], {icon: obsidianIcon}).bindPopup("11 Obsidian Nodes").addTo(obsidianGroup),
		L.marker([-1129,1732.25], {icon: obsidianIcon}).bindPopup("2 Obsidian Nodes").addTo(obsidianGroup),
		L.marker([-970,1590.75], {icon: obsidianIcon}).bindPopup("1 Obsidian Nodes").addTo(obsidianGroup),
		L.marker([-1192.5,1655.75], {icon: obsidianIcon}).bindPopup("2 Obsidian Nodes").addTo(obsidianGroup),
		L.marker([-1267.75,1703.5], {icon: obsidianIcon}).bindPopup("2 Obsidian Nodes").addTo(obsidianGroup),
		L.marker([-1191.25,1538.5], {icon: obsidianIcon}).bindPopup("2 Obsidian Nodes").addTo(obsidianGroup),
		L.marker([-1235.25,1756.25], {icon: obsidianIcon}).bindPopup("3 Obsidian Nodes").addTo(obsidianGroup),
		L.marker([-1266.5,1716.75], {icon: obsidianIcon}).bindPopup("3 Obsidian Nodes").addTo(obsidianGroup),
		L.marker([-1335,1570], {icon: obsidianIcon}).bindPopup("3 Obsidian Nodes").addTo(obsidianGroup),
		L.marker([-1211.75,1584.5], {icon: obsidianIcon}).bindPopup("3 Obsidian Nodes").addTo(obsidianGroup),
		L.marker([-1317.5,1614.25], {icon: obsidianIcon}).bindPopup("3 Obsidian Nodes").addTo(obsidianGroup),
		L.marker([-1237.25,1737], {icon: obsidianIcon}).bindPopup("5 Obsidian Nodes").addTo(obsidianGroup),
		L.marker([-1261,1615], {icon: obsidianIcon}).bindPopup("4 Obsidian Nodes").addTo(obsidianGroup),
		L.marker([-1198.5,1556.75], {icon: obsidianIcon}).bindPopup("6 Obsidian Nodes").addTo(obsidianGroup),
		L.marker([-1012.75,1587.25], {icon: obsidianIcon}).bindPopup("6 Obsidian Nodes").addTo(obsidianGroup),
		L.marker([-1312.5,1569.5], {icon: obsidianIcon}).bindPopup("7 Obsidian Nodes").addTo(obsidianGroup),
		L.marker([-966.75,1616], {icon: obsidianIcon}).bindPopup("7 Obsidian Nodes").addTo(obsidianGroup),
		L.marker([-998.5,1600.5], {icon: obsidianIcon}).bindPopup("10 Obsidian Nodes").addTo(obsidianGroup),

		//Black Ice Icons
		L.marker([-1090.75,1081.5], {icon: blackiceIcon}).bindPopup("3 Black Ice Nodes").addTo(blackiceGroup),
		L.marker([-1023.5,1105], {icon: blackiceIcon}).bindPopup("3 Black Ice Nodes").addTo(blackiceGroup),
		L.marker([-988,1078], {icon: blackiceIcon}).bindPopup("40+ Black Ice Nodes - Inside Temple of Frost").addTo(blackiceGroup),
		L.marker([-1130.5,828.5], {icon: blackiceIcon}).bindPopup("3 Black Ice Nodes").addTo(blackiceGroup),
		L.marker([-1074.5,754], {icon: blackiceIcon}).bindPopup("3 Black Ice Nodes").addTo(blackiceGroup),
		L.marker([-1152.5,497.5], {icon: blackiceIcon}).bindPopup("3 Black Ice Nodes").addTo(blackiceGroup),
		L.marker([-1347.25,918.25], {icon: blackiceIcon}).bindPopup("3 Black Ice Nodes").addTo(blackiceGroup),
		L.marker([-1280.5,992], {icon: blackiceIcon}).bindPopup("3 Black Ice Nodes").addTo(blackiceGroup),
		L.marker([-1463,1420.5], {icon: blackiceIcon}).bindPopup("3 Black Ice Nodes").addTo(blackiceGroup),
		L.marker([-1495.25,1314.25], {icon: blackiceIcon}).bindPopup("3 Black Ice Nodes").addTo(blackiceGroup),
		L.marker([-1560.75,1809.75], {icon: blackiceIcon}).bindPopup("3 Black Ice Nodes").addTo(blackiceGroup),
		L.marker([-1507.5,869], {icon: blackiceIcon}).bindPopup("3 Black Ice Nodes").addTo(blackiceGroup),
		L.marker([-1689,1763], {icon: blackiceIcon}).bindPopup("2 Black Ice Nodes").addTo(blackiceGroup),
		L.marker([-1323,345.5], {icon: blackiceIcon}).bindPopup("4 Black Ice Nodes").addTo(blackiceGroup),
		L.marker([-1360,1257.25], {icon: blackiceIcon}).bindPopup("4 Black Ice Nodes").addTo(blackiceGroup),
		L.marker([-1344.25,1081], {icon: blackiceIcon}).bindPopup("5 Black Ice Nodes").addTo(blackiceGroup),
		L.marker([-1462,699.75], {icon: blackiceIcon}).bindPopup("6 Black Ice Nodes").addTo(blackiceGroup),
		
		//Crystal Icons
		L.marker([-3266,1310], {icon: crystalIcon}).bindPopup("Crystals in Cavern of Fiends").addTo(crystalGroup),
		L.marker([-3503.25,1904.75], {icon: crystalIcon}).bindPopup("Crystals in Hanuman's Grotto").addTo(crystalGroup),
		
		//Iron Icons
		L.marker([-2236,1397], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-3021,1337.5], {icon: ironIcon}).bindPopup("2 Iron Nodes").addTo(ironGroup),
		L.marker([-2644.5,352], {icon: ironIcon}).bindPopup("2 Iron Nodes").addTo(ironGroup),
		L.marker([-3016.5,1340.75], {icon: ironIcon}).bindPopup("2 Iron Nodes").addTo(ironGroup),
		L.marker([-1288,377.5], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2310.75,1584], {icon: ironIcon}).bindPopup("7 Iron Nodes").addTo(ironGroup),
		L.marker([-1926.25,1659.5], {icon: ironIcon}).bindPopup("7 Iron Nodes").addTo(ironGroup),
		L.marker([-2310.5,1588.5], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2292.25,1597.75], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2274.5,1555], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-1122.25,1158.75], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-1948.5,1699], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-2153.5,1812.25], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-1935.75,1672], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-3015.75,1330], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-1115.25,1173.25], {icon: ironIcon}).bindPopup("8 Iron Nodes").addTo(ironGroup),
		L.marker([-2374,1820], {icon: ironIcon}).bindPopup("8 Iron Nodes").addTo(ironGroup),
		L.marker([-1965.25,1767.25], {icon: ironIcon}).bindPopup("8 Iron Nodes").addTo(ironGroup),
		L.marker([-1270.75,1093], {icon: ironIcon}).bindPopup("9 Iron Nodes").addTo(ironGroup),
		L.marker([-2224,1940.25], {icon: ironIcon}).bindPopup("9 Iron Nodes").addTo(ironGroup),
		L.marker([-2215.25,1925.5], {icon: ironIcon}).bindPopup("9 Iron Nodes").addTo(ironGroup),
		L.marker([-1946.75,1706.75], {icon: ironIcon}).bindPopup("9 Iron Nodes").addTo(ironGroup),
		L.marker([-1286.75,1079.75], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-1993,1530.5], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-2007,1539.25], {icon: ironIcon}).bindPopup("12 Iron Nodes").addTo(ironGroup),
		L.marker([-2020,1537.25], {icon: ironIcon}).bindPopup("10 Iron Nodes").addTo(ironGroup),
		L.marker([-2264.75,1964], {icon: ironIcon}).bindPopup("10 Iron Nodes").addTo(ironGroup),
		L.marker([-2240.75,1599.5], {icon: ironIcon}).bindPopup("10 Iron Nodes").addTo(ironGroup),
		L.marker([-1147,1152], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-1314.25,764.5], {icon: ironIcon}).bindPopup("7 Iron Nodes").addTo(ironGroup),
		L.marker([-1496.5,711], {icon: ironIcon}).bindPopup("12 Iron Nodes").addTo(ironGroup),
		L.marker([-2175,1384.75], {icon: ironIcon}).bindPopup("13 Iron Nodes").addTo(ironGroup),
		L.marker([-2156.75,1384], {icon: ironIcon}).bindPopup("13 Iron Nodes").addTo(ironGroup),
		L.marker([-1953,1507.5], {icon: ironIcon}).bindPopup("13 Iron Nodes").addTo(ironGroup),
		L.marker([-2202.25,1644.5], {icon: ironIcon}).bindPopup("11 Iron Nodes").addTo(ironGroup),
		L.marker([-1934.5,1665.5], {icon: ironIcon}).bindPopup("11 Iron Nodes").addTo(ironGroup),
		L.marker([-2274.25,1535.75], {icon: ironIcon}).bindPopup("11 Iron Nodes").addTo(ironGroup),
		L.marker([-1971.25,1747.25], {icon: ironIcon}).bindPopup("12 Iron Nodes").addTo(ironGroup),
		L.marker([-1343.5,765.25], {icon: ironIcon}).bindPopup("13 Iron Nodes").addTo(ironGroup),
		L.marker([-2287.5,1577], {icon: ironIcon}).bindPopup("14 Iron Nodes").addTo(ironGroup),
		L.marker([-2020.5,1776.25], {icon: ironIcon}).bindPopup("14 Iron Nodes").addTo(ironGroup),
		L.marker([-1944.25,1715.5], {icon: ironIcon}).bindPopup("16 Iron Nodes").addTo(ironGroup),
		L.marker([-2414.75,2002], {icon: ironIcon}).bindPopup("16 Iron Nodes").addTo(ironGroup),
		L.marker([-2313.5,1965.25], {icon: ironIcon}).bindPopup("16 Iron Nodes").addTo(ironGroup),
		L.marker([-2262,1593.75], {icon: ironIcon}).bindPopup("16 Iron Nodes").addTo(ironGroup),
		L.marker([-1444.75,723.5], {icon: ironIcon}).bindPopup("17 Iron Nodes").addTo(ironGroup),
		L.marker([-1433,706.5], {icon: ironIcon}).bindPopup("17 Iron Nodes").addTo(ironGroup),
		L.marker([-1329,939.5], {icon: ironIcon}).bindPopup("9 Iron Nodes").addTo(ironGroup),
		L.marker([-1348,950.5], {icon: ironIcon}).bindPopup("9 Iron Nodes").addTo(ironGroup),
		L.marker([-1409,977], {icon: ironIcon}).bindPopup("9 Iron Nodes").addTo(ironGroup),
		L.marker([-1322.25,929.25], {icon: ironIcon}).bindPopup("8 Iron Nodes").addTo(ironGroup),
		L.marker([-1514.75,1581.25], {icon: ironIcon}).bindPopup("8 Iron Nodes").addTo(ironGroup),
		L.marker([-3021,1351.5], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-1071,583], {icon: ironIcon}).bindPopup("7 Iron Nodes").addTo(ironGroup),
		L.marker([-1052.5,563.25], {icon: ironIcon}).bindPopup("7 Iron Nodes").addTo(ironGroup),
		L.marker([-1750.25,1834.25], {icon: ironIcon}).bindPopup("7 Iron Nodes").addTo(ironGroup),
		L.marker([-1078.75,702], {icon: ironIcon}).bindPopup("20 Iron Nodes").addTo(ironGroup),
		L.marker([-1040.5,615.25], {icon: ironIcon}).bindPopup("10 Iron Nodes").addTo(ironGroup),
		L.marker([-1387,984.25], {icon: ironIcon}).bindPopup("15 Iron Nodes").addTo(ironGroup),
		L.marker([-1277.5,389.25], {icon: ironIcon}).bindPopup("12 Iron Nodes").addTo(ironGroup),
		L.marker([-1041,550.75], {icon: ironIcon}).bindPopup("11 Iron Nodes").addTo(ironGroup),
		L.marker([-2844.5,2680], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-2834.25,2671.75], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-3037,1354.25], {icon: ironIcon}).bindPopup("19 Iron Nodes").addTo(ironGroup),
		L.marker([-3031.75,1382.25], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-3037,1354.25], {icon: ironIcon}).bindPopup("19 Iron Nodes").addTo(ironGroup),
		L.marker([-3037.25,1388.75], {icon: ironIcon}).bindPopup("1 Iron Node").addTo(ironGroup),
		L.marker([-2678.75,409.25], {icon: ironIcon}).bindPopup("1 Iron Node").addTo(ironGroup),
		L.marker([-3073,713.75], {icon: ironIcon}).bindPopup("1 Iron Node").addTo(ironGroup),
		L.marker([-2877,642.5], {icon: ironIcon}).bindPopup("1 Iron Node").addTo(ironGroup),
		L.marker([-2561,673.25], {icon: ironIcon}).bindPopup("1 Iron Node").addTo(ironGroup),
		L.marker([-2878.5,688], {icon: ironIcon}).bindPopup("1 Iron Node").addTo(ironGroup),
		L.marker([-2205.5,335], {icon: ironIcon}).bindPopup("1 Iron Node").addTo(ironGroup),
		L.marker([-2516.75,609], {icon: ironIcon}).bindPopup("1 Iron Node").addTo(ironGroup),
		L.marker([-2551.5,555], {icon: ironIcon}).bindPopup("1 Iron Node").addTo(ironGroup),
		L.marker([-2245,555.5], {icon: ironIcon}).bindPopup("1 Iron Node").addTo(ironGroup),
		L.marker([-2431,1434], {icon: ironIcon}).bindPopup("1 Iron Node").addTo(ironGroup),
		L.marker([-2652.5,510], {icon: ironIcon}).bindPopup("1 Iron Node").addTo(ironGroup),
		L.marker([-2626.25,353.5], {icon: ironIcon}).bindPopup("1 Iron Node").addTo(ironGroup),
		L.marker([-2658.25,384.25], {icon: ironIcon}).bindPopup("1 Iron Node").addTo(ironGroup),
		L.marker([-2857.25,711.5], {icon: ironIcon}).bindPopup("1 Iron Node").addTo(ironGroup),
		L.marker([-2575.25,342.75], {icon: ironIcon}).bindPopup("1 Iron Node").addTo(ironGroup),
		L.marker([-2598.75,580.75], {icon: ironIcon}).bindPopup("1 Iron Node").addTo(ironGroup),
		L.marker([-2670.25,515.5], {icon: ironIcon}).bindPopup("1 Iron Node").addTo(ironGroup),
		L.marker([-3041,1395.75], {icon: ironIcon}).bindPopup("2 Iron Nodes").addTo(ironGroup),
		L.marker([-2490.5,353.5], {icon: ironIcon}).bindPopup("2 Iron Nodes").addTo(ironGroup),
		L.marker([-2540.5,552.5], {icon: ironIcon}).bindPopup("2 Iron Nodes").addTo(ironGroup),
		L.marker([-3022.5,1367], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-2098.75,471.75], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-2560,558.5], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-3022,1387.75], {icon: ironIcon}).bindPopup("14 Iron Nodes").addTo(ironGroup),
		L.marker([-3005.5,1368.25], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2795.5,2683], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2818,2663.75], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2786,2692.75], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2997.25,1354.75], {icon: ironIcon}).bindPopup("2 Iron Nodes").addTo(ironGroup),
		L.marker([-2595.5,575.75], {icon: ironIcon}).bindPopup("2 Iron Nodes").addTo(ironGroup),
		L.marker([-2473.25,359.25], {icon: ironIcon}).bindPopup("2 Iron Nodes").addTo(ironGroup),
		L.marker([-2768.75,1434.5], {icon: ironIcon}).bindPopup("2 Iron Nodes").addTo(ironGroup),
		L.marker([-3003.75,3076], {icon: ironIcon}).bindPopup("2 Iron Nodes").addTo(ironGroup),
		L.marker([-2587.25,596.25], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2617.5,591.25], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2699,398], {icon: ironIcon}).bindPopup("2 Iron Nodes").addTo(ironGroup),
		L.marker([-2574.75,603], {icon: ironIcon}).bindPopup("2 Iron Nodes").addTo(ironGroup),
		L.marker([-2519.25,888.75], {icon: ironIcon}).bindPopup("2 Iron Nodes").addTo(ironGroup),
		L.marker([-2746.5,447.25], {icon: ironIcon}).bindPopup("2 Iron Nodes").addTo(ironGroup),
		L.marker([-2789.75,467.25], {icon: ironIcon}).bindPopup("2 Iron Nodes").addTo(ironGroup),
		L.marker([-2262.25,527], {icon: ironIcon}).bindPopup("2 Iron Nodes").addTo(ironGroup),
		L.marker([-3016.5,1315.5], {icon: ironIcon}).bindPopup("21 Iron Nodes - On Cliff").addTo(ironGroup),
		L.marker([-3011.5,1302.5], {icon: ironIcon}).bindPopup("12 Iron Nodes - On Cliff").addTo(ironGroup),
		L.marker([-3008.25,1286.75], {icon: ironIcon}).bindPopup("20 Iron Nodes - On Plateau").addTo(ironGroup),
		L.marker([-2125.75,779], {icon: ironIcon}).bindPopup("2 Iron Nodes - On Plateau").addTo(ironGroup),
		L.marker([-2996.75,1282.75], {icon: ironIcon}).bindPopup("9 Iron Nodes - On Plateau").addTo(ironGroup),
		L.marker([-3048.25,1317.5], {icon: ironIcon}).bindPopup("15 Iron Nodes - On Plateau").addTo(ironGroup),
		L.marker([-2981.25,1286.25], {icon: ironIcon}).bindPopup("5 Iron Nodes - On Cliff").addTo(ironGroup),
		L.marker([-2163,772.5], {icon: ironIcon}).bindPopup("5 Iron Nodes - On Cliff").addTo(ironGroup),
		L.marker([-2985.75,1293], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-3032.5,1634.5], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2567.25,881.5], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2561.75,892.5], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2957.75,672.75], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2946,1608.75], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2971.5,1651], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2169,711.5], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2165,699], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-3054.25,1607], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2622.25,598], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2423,901], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2376.5,852.5], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2994.25,680.5], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2620.25,836], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2558.75,627], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2564.25,635.5], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2174.25,775], {icon: ironIcon}).bindPopup("10 Iron Nodes").addTo(ironGroup),
		L.marker([-2926,612.5], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2928.5,571], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2572.25,599], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2928.5,562], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2794.25,488], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2806.5,477.5], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2617,619.5], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2791.75,493], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2614.75,861.75], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2775,476.5], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2591.5,336.75], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2683.5,791], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2467,874.25], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2549.25,3110.75], {icon: ironIcon}).bindPopup("2 Iron Nodes").addTo(ironGroup),
		L.marker([-2524,3111.75], {icon: ironIcon}).bindPopup("2 Iron Nodes").addTo(ironGroup),
		L.marker([-2802.75,2095.5], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2143,502.75], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2962,1598.25], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2566,334.5], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2466,359.25], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2988.5,1649.5], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2660.5,514.5], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2405.5,905.75], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2564.5,618], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-3014.75,1670.75], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2631,631], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-3020,1654.5], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2157.5,732.5], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2926,651], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2502.5,895.75], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2657,643], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2660.75,798.5], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2978,2326.75], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-2604.25,621.5], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-3027,1822.25], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-3006.5,1863.5], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-2621.25,608.75], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-2978,670.25], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-2923,541], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-2857.25,560.5], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-2936,1756], {icon: ironIcon}).bindPopup("7 Iron Nodes").addTo(ironGroup),
		L.marker([-2144,567], {icon: ironIcon}).bindPopup("7 Iron Nodes").addTo(ironGroup),
		L.marker([-2180.75,583.75], {icon: ironIcon}).bindPopup("7 Iron Nodes").addTo(ironGroup),
		L.marker([-2898,517.25], {icon: ironIcon}).bindPopup("7 Iron Nodes").addTo(ironGroup),
		L.marker([-2917.75,628.75], {icon: ironIcon}).bindPopup("11 Iron Nodes").addTo(ironGroup),
		L.marker([-2158.5,560], {icon: ironIcon}).bindPopup("11 Iron Nodes").addTo(ironGroup),
		L.marker([-2147,587.75], {icon: ironIcon}).bindPopup("10 Iron Nodes").addTo(ironGroup),
		L.marker([-2514,340.5], {icon: ironIcon}).bindPopup("12 Iron Nodes").addTo(ironGroup),
		L.marker([-2678.5,648.5], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2557.75,684.75], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-2363.75,3442.5], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-2525.5,638], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-2556.5,3420], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-2517.25,622.5], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2583.5,1574.5], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2509.25,616.25], {icon: ironIcon}).bindPopup("9 Iron Nodes").addTo(ironGroup),
		L.marker([-2501.5,573.5], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2487,487.25], {icon: ironIcon}).bindPopup("8 Iron Nodes").addTo(ironGroup),
		L.marker([-2429,503.25], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2368.5,3450], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2375.5,575.25], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2805.5,1606.5], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2766.75,1544.75], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2753.75,2129.5], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2441.5,481.25], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2470.75,456], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2380.5,566], {icon: ironIcon}).bindPopup("2 Iron Nodes").addTo(ironGroup),
		L.marker([-2386,544.75], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2769.25,1574], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2766.5,1514], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2567,3420], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2890.75,1540.75], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2782.5,1778.75], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2379.25,3445.25], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2720.5,2934], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2715.75,2920], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2796.75,1689.25], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2767.75,1498.75], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-3179.5,3265.5], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-2811.5,1698.5], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-2800,2879.75], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-2802,2890.25], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-3224.75,2990], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-2809.75,2898.25], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-3217.25,2967.5], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-3239.25,3047], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-3165.25,3149.5], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-3154,3143.75], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-3058.75,3348.75], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-3002.25,3090.75], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-3016,3092.25], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-3049.75,3340.5], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-2696,3328.75], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-2720,3319.75], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-2809.75,2925], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-3017.5,3454.5], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-2806.75,3047], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-2796.5,1726.5], {icon: ironIcon}).bindPopup("7 Iron Nodes").addTo(ironGroup),
		L.marker([-3010.75,3073.25], {icon: ironIcon}).bindPopup("7 Iron Nodes").addTo(ironGroup),
		L.marker([-2996.75,3452.5], {icon: ironIcon}).bindPopup("7 Iron Nodes").addTo(ironGroup),
		L.marker([-3241.75,3060.25], {icon: ironIcon}).bindPopup("7 Iron Nodes").addTo(ironGroup),
		L.marker([-2993.25,3084.75], {icon: ironIcon}).bindPopup("7 Iron Nodes").addTo(ironGroup),
		L.marker([-2725,2951], {icon: ironIcon}).bindPopup("7 Iron Nodes").addTo(ironGroup),
		L.marker([-2790,3093.75], {icon: ironIcon}).bindPopup("7 Iron Nodes").addTo(ironGroup),
		L.marker([-2919.5,2721.75], {icon: ironIcon}).bindPopup("7 Iron Nodes").addTo(ironGroup),
		L.marker([-2689.5,1863], {icon: ironIcon}).bindPopup("7 Iron Nodes").addTo(ironGroup),
		L.marker([-2756.5,1922.25], {icon: ironIcon}).bindPopup("7 Iron Nodes").addTo(ironGroup),
		L.marker([-2799.75,2782.25], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-2936,2736], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-2861.5,2744], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-3088,2954.5], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-3104,2952], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-3136.5,3282], {icon: ironIcon}).bindPopup("10 Iron Nodes").addTo(ironGroup),
		L.marker([-2467.25,3150.50], {icon: ironIcon}).bindPopup("21 Iron Nodes").addTo(ironGroup),
		L.marker([-2470.5,3150], {icon: ironIcon}).bindPopup("19 Iron Nodes").addTo(ironGroup),
		L.marker([-2493,3153], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-2599.5,3275.5], {icon: ironIcon}).bindPopup("18 Iron Nodes").addTo(ironGroup),
		L.marker([-2599,3257], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-2595.25,3396], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-2749.25,1915], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-2694.25,1991.25], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-2569.25,3394], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2761.75,2004.75], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2747,2115], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2542.75,1401.25], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2251,1161.75], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2259.75,1130.25], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2432.5,1449.25], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2707.75,2029.25], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2680.25,1816], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2658,1881.5], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2691.5,1906.75], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2674.25,1547.5], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2559,1718], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2574,1458], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2290,1010], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2537,1277], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2341,1584.5], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2525.25,1196.75], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2303.5,1392.5], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2520,1713], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2464.25,1266.5], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2371.25,1267], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2261,1173], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2361.5,1162.75], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2319.75,1251.75], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2169,606.5], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2405,1464], {icon: ironIcon}).bindPopup("4 Iron Nodes").addTo(ironGroup),
		L.marker([-2736.5,1826.25], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-2138.5,644], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-2138.5,644], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-2251,1180], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-2726,2052], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-2699,1870.25], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-2819.5,1330.75], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-2529,1734], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-2279.75,1314], {icon: ironIcon}).bindPopup("6 Iron Nodes").addTo(ironGroup),
		L.marker([-2272.25,1220.25], {icon: ironIcon}).bindPopup("8 Iron Nodes").addTo(ironGroup),
		L.marker([-2755.5,1866.75], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-2760.5,1318], {icon: ironIcon}).bindPopup("2 Iron Nodes").addTo(ironGroup),
		L.marker([-2161,710.75], {icon: ironIcon}).bindPopup("2 Iron Nodes - Cliff").addTo(ironGroup),
		L.marker([-2749,1658.75], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-2622,1363], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2116.5,637], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2581.75,1399.25], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2567,1309.5], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2368,1179], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2569,1652], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2339.5,1355], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2312.5,1220.5], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2381.5,1248], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2241,914], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2348.75,1289.25], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2308,941.25], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2410,1230.5], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2299,1019], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2306,1000], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2289,1026], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2614,1307], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2354.5,1387], {icon: ironIcon}).bindPopup("3 Iron Nodes").addTo(ironGroup),
		L.marker([-2578.5,1486.25], {icon: ironIcon}).bindPopup("5 Iron Nodes").addTo(ironGroup),
		L.marker([-1798.25,1837.75], {icon: ironIcon}).bindPopup("7 Iron Nodes").addTo(ironGroup),
		L.marker([-1811.75,1289.5], {icon: ironIcon}).bindPopup("22 Iron Nodes").addTo(ironGroup),
		L.marker([-1814,1349], {icon: ironIcon}).bindPopup("12 Iron Nodes").addTo(ironGroup),
		L.marker([-1803,1400], {icon: ironIcon}).bindPopup("16 Iron Nodes").addTo(ironGroup),
		
		//Coal Icons
		L.marker([-2821.25,2106.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2571,1644.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2575,1186], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2472.5,988.25], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2405,977], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2565,1037], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2581,1129], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2511,1056.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2438,1230.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2485,1089], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2552,1050], {icon: coalIcon}).bindPopup("2 Coal Node").addTo(coalGroup),
		L.marker([-2539,1005], {icon: coalIcon}).bindPopup("2 Coal Node").addTo(coalGroup),
		L.marker([-2381,964], {icon: coalIcon}).bindPopup("2 Coal Node").addTo(coalGroup),
		L.marker([-2429,992], {icon: coalIcon}).bindPopup("2 Coal Node").addTo(coalGroup),
		L.marker([-2527.25,1070.75], {icon: coalIcon}).bindPopup("2 Coal Node").addTo(coalGroup),
		L.marker([-2548.5,1605.25], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2480,1591], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2606,1373], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2576.5,1661], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2591,1462], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2589,1669.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2603,1485.75], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2590.5,1487.25], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2751.5,1651.75], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2582.5,1578.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2652.75,1311.75], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2707.5,1643.75], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2563.25,1770.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2567.25,1756.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2722.75,1656.25], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2821.5,1600.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2709.25,1842.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2712,1732], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2705,1810.25], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2682.25,1908.25], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2794,1663], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2766.5,1544.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2772,1578.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2729,2056.75], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2723.25,2044.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2765.75,1558.25], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2446.25,476.5], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2340,1388], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2786.25,1802.75], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2087.5,776.75], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2068,797.25], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2037,1539.5], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2094,815.75], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2112.5,857.5], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2318,1855.5], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2734.25,1820.25], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2408.75,1961.5], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2243.25,1712.25], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2437,489.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2808,1635.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2721,1797], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2753.5,1805], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2481.25,457.75], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2621.5,617], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2487,521], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2429.5,510], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2542,1478], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2486.5,595.75], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2358.5,1517.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2556.5,1466], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2830.25,1531], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2371.25,1486], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2565.75,603.25], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2793,1582.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2653,627.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2483.5,555.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2640,1875], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2615,1797.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2665.5,632.25], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2636.5,631.25], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2508,916], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2432.25,1724.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2466,1745.75], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2464,1811.75], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2477,1814.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2703.25,637], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2827.25,1505.25], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-5482,502], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2552,873], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2945.25,669.25], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2590.75,586.25], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2461.5,360.25], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2624.5,845.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2566.25,648.25], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2517,613.25], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2842,2082.25], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2409.25,930.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2461.25,926], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2926.25,546.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2423.5,911.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2494.5,362.75], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2916.25,537.75], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2903.75,518.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2482.75,354], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2841.25,496.5], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2809.5,498.25], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2834.5,586], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2646.75,513], {icon: coalIcon}).bindPopup("1 Coal Node").addTo(coalGroup),
		L.marker([-2836,2098.5], {icon: coalIcon}).bindPopup("3 Coal Nodes").addTo(coalGroup),
		L.marker([-2837,1704.5], {icon: coalIcon}).bindPopup("3 Coal Nodes").addTo(coalGroup),
		L.marker([-2488.5,576], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2363,1279.5], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2325.75,1336], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2327.25,1578.5], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2520,1612], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2560,1835.25], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2443,1411.25], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2626,1784], {icon: coalIcon}).bindPopup("3 Coal Nodes").addTo(coalGroup),
		L.marker([-2481,1647.25], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2568.25,1855.25], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2627.75,1867.5], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2434,1475.75], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2424.75,1670.5], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2707.75,1748], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2488,513.5], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2858,2058.25], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2658.75,647.5], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2545.75,684], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2621.75,593.5], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2671.25,1899.25], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2396.5,1243.25], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2570.75,1402.75], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2742.25, 688.5], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2603,862], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2790.5,1743], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2581.75,1370.75], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2609.5,625.75], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2568,867], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2450,1262.25], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2645,836], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2716.25,2034.5], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2934.25,664.5], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-1475.75,731.25], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2470,934.25], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2427,943.5], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2440,1332.5], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2258,345], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-2967,671.5], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-3047.75,1744], {icon: coalIcon}).bindPopup("2 Coal Nodes").addTo(coalGroup),
		L.marker([-3162.75,3127], {icon: coalIcon}).bindPopup("6 Coal Nodes").addTo(coalGroup),
		L.marker([-3021.5,1718.25], {icon: coalIcon}).bindPopup("3 Coal Nodes").addTo(coalGroup),
		L.marker([-2256.25,1694.5], {icon: coalIcon}).bindPopup("3 Coal Nodes").addTo(coalGroup),
		L.marker([-2424.5,342], {icon: coalIcon}).bindPopup("3 Coal Nodes").addTo(coalGroup),
		L.marker([-2694.5,642.75], {icon: coalIcon}).bindPopup("3 Coal Nodes").addTo(coalGroup),
		L.marker([-2947,1726], {icon: coalIcon}).bindPopup("3 Coal Nodes").addTo(coalGroup),
		L.marker([-2728,2033.75], {icon: coalIcon}).bindPopup("3 Coal Nodes").addTo(coalGroup),
		L.marker([-2522,1208.5], {icon: coalIcon}).bindPopup("3 Coal Nodes").addTo(coalGroup),
		L.marker([-2522.75,648.5], {icon: coalIcon}).bindPopup("3 Coal Nodes").addTo(coalGroup),
		L.marker([-1969.25,1757.25], {icon: coalIcon}).bindPopup("3 Coal Nodes").addTo(coalGroup),
		L.marker([-3192,3141.75], {icon: coalIcon}).bindPopup("4 Coal Nodes").addTo(coalGroup),
		L.marker([-2676.25,1884.25], {icon: coalIcon}).bindPopup("4 Coal Nodes").addTo(coalGroup),
		L.marker([-2503,611], {icon: coalIcon}).bindPopup("3 Coal Nodes").addTo(coalGroup),
		L.marker([-2519.5,629], {icon: coalIcon}).bindPopup("3 Coal Nodes").addTo(coalGroup),
		L.marker([-2962,1737.5], {icon: coalIcon}).bindPopup("3 Coal Nodes").addTo(coalGroup),
		L.marker([-2601,3369.75], {icon: coalIcon}).bindPopup("4 Coal Nodes").addTo(coalGroup),
		L.marker([-1355.5,1285], {icon: coalIcon}).bindPopup("4 Coal Nodes").addTo(coalGroup),
		L.marker([-2588.25,3381.75], {icon: coalIcon}).bindPopup("8 Coal Nodes").addTo(coalGroup),
		
		//Silver Icons
		L.marker([-2760.75,2914.75], {icon: silverIcon}).bindPopup("7 Silver Nodes").addTo(silverGroup),
		L.marker([-2815.25,621.25], {icon: silverIcon}).bindPopup("4 Silver Nodes").addTo(silverGroup),
		L.marker([-2799,634.5], {icon: silverIcon}).bindPopup("4 Silver Nodes").addTo(silverGroup),
		L.marker([-2778,601.75], {icon: silverIcon}).bindPopup("2 Silver Nodes").addTo(silverGroup),
		L.marker([-2779,619], {icon: silverIcon}).bindPopup("1 Silver Node").addTo(silverGroup),
		L.marker([-2789.5,653], {icon: silverIcon}).bindPopup("1 Silver Node - On Plateau").addTo(silverGroup),
		
		//Brimstone Icons
		L.marker([-3149,1705], {icon: brimstoneIcon}).bindPopup("Brimstone in Sinner's Refuge").addTo(brimstoneGroup),
		L.marker([-3175,1901], {icon: brimstoneIcon}).bindPopup("Brimstone in Gallaman's Tomb").addTo(brimstoneGroup),
		
		//Religon Icons
		L.marker([-3244,1328], {icon: yogIcon}).bindPopup("<a href='https://conanexiles.gamepedia.com/Nunu_the_Cannibal' target='_blank'>Yog Trainer - Nunu the Cannibal</a>").addTo(religonGroup),
		L.marker([-2614.5,1630], {icon: setIcon}).bindPopup("<a href='https://conanexiles.gamepedia.com/Mek-kamoses' target='_blank'>Set Trainer - Mek-Kamoses</a>").addTo(religonGroup),
		L.marker([-2516,1171], {icon: mitraIcon}).bindPopup("<a href='https://conanexiles.gamepedia.com/Muriela_the_Artisan' target='_blank'>Mitra Trainer - Muriela the Artisan</a>").addTo(religonGroup),
		L.marker([-1453.5,693.5], {icon: ymirIcon}).bindPopup("<a href='https://conanexiles.gamepedia.com/The_Outcast' target='_blank'>Ymir Trainer - The Outcast</a>").addTo(religonGroup),
		L.marker([-3056.25,3352], {icon: derketoIcon}).bindPopup("<a href='https://conanexiles.gamepedia.com/Yakira,_Priestess_of_Derketo' target='_blank'>Derketo Trainer - Yakira, Priestess of Derketo</a>").addTo(religonGroup),

		//Thralls - Blacksmith
		L.marker([-3357,1485.5], {icon: blacksmithIcon}).bindPopup("Blacksmith - Zamorian").addTo(blacksmithGroup),
		L.marker([-2882.75,2117], {icon: blacksmithIcon}).bindPopup("Blacksmith - Zamorian").addTo(blacksmithGroup),
		L.marker([-2648.5,2098], {icon: blacksmithIcon}).bindPopup("Blacksmith - Zingarian (Lower Platform)").addTo(blacksmithGroup),
		L.marker([-2588,554.75], {icon: blacksmithIcon}).bindPopup("Blacksmith - Stygian").addTo(blacksmithGroup),
		L.marker([-2654.75,2207.5], {icon: blacksmithIcon}).bindPopup("Blacksmith - Stygian").addTo(blacksmithGroup),
		L.marker([-2280.75,1208], {icon: blacksmithIcon}).bindPopup("Blacksmith - Stygian").addTo(blacksmithGroup),
		L.marker([-2090,1716.25], {icon: blacksmithIcon}).bindPopup("Blacksmith - Nordheimer").addTo(blacksmithGroup),
		
		//Thralls - Armorer
		L.marker([-2582.75,553], {icon: armorerIcon}).bindPopup("Armorer - Stygian").addTo(armorerGroup),
		L.marker([-2652.25,2101], {icon: armorerIcon}).bindPopup("Armorer - Stygian").addTo(armorerGroup),
		L.marker([-3051.5,3351.75], {icon: armorerIcon}).bindPopup("Armorer - Lemurian").addTo(armorerGroup),
		L.marker([-2280.25,1274.25], {icon: armorerIcon}).bindPopup("Armorer - Kushite").addTo(armorerGroup),
		L.marker([-3032,3344], {icon: armorerIcon}).bindPopup("Armorer - Lemurian").addTo(armorerGroup),
		
		//Thralls - Entertainer
		L.marker([-3262.75,1049.75], {icon: entertainerIcon}).bindPopup("Entertainer - Dafari").addTo(entertainerGroup),
		L.marker([-3343.5,2017.5], {icon: entertainerIcon}).bindPopup("Entertainer - Dafari").addTo(entertainerGroup),
		L.marker([-2269,2957.75], {icon: entertainerIcon}).bindPopup("Entertainer - Stygian").addTo(entertainerGroup),
		L.marker([-2664.25,2126], {icon: entertainerIcon}).bindPopup("Entertainer - Stygian").addTo(entertainerGroup),
		L.marker([-2354.25,1189.25], {icon: entertainerIcon}).bindPopup("Entertainer - Shemite").addTo(entertainerGroup),
		L.marker([-3347.5,2026.75], {icon: entertainerIcon}).bindPopup("Entertainer - Dafari").addTo(entertainerGroup),
		L.marker([-2623.25,2134], {icon: entertainerIcon}).bindPopup("Entertainer - Dafari").addTo(entertainerGroup),
		L.marker([-2293.75,1155.25], {icon: entertainerIcon}).bindPopup("Entertainer - Stygian").addTo(entertainerGroup),
		L.marker([-2600.5,2131.5], {icon: entertainerIcon}).bindPopup("Entertainer - Zamorian").addTo(entertainerGroup),
		L.marker([-2545,3224.25], {icon: entertainerIcon}).bindPopup("Entertainer - Dafari").addTo(entertainerGroup),
		L.marker([-1787.5,1422.5], {icon: entertainerIcon}).bindPopup("Entertainer - Nordheimer").addTo(entertainerGroup),
		L.marker([-2967,2306.5], {icon: entertainerIcon}).bindPopup("Entertainer - Nordheimer").addTo(entertainerGroup),
		L.marker([-2995.5, 1849.75], {icon: entertainerIcon}).bindPopup("Entertainer - Dafari").addTo(entertainerGroup),
		L.marker([-2987,1760.25], {icon: entertainerIcon}).bindPopup("Entertainer - Dafari").addTo(entertainerGroup),
		L.marker([-3158,1697], {icon: entertainerIcon}).bindPopup("2 Entertainers (In Cave)").addTo(entertainerGroup),
		L.marker([-2772.5,1558.5], {icon: entertainerIcon}).bindPopup("Entertainer - Kushite").addTo(entertainerGroup),
		L.marker([-2636.25,463], {icon: entertainerIcon}).bindPopup("3 Entertainers - Stygian-Stygian-Zamorian").addTo(entertainerGroup),
		L.marker([-3051.75,3348.75], {icon: entertainerIcon}).bindPopup("2 Entertainers - Lemurian").addTo(entertainerGroup),
		L.marker([-2772.25,2931.25], {icon: entertainerIcon}).bindPopup("Entertainer - Zingarian (Upper Levels)").addTo(entertainerGroup),
		
		//Thralls - Alchemist
		L.marker([-3259.5,1037], {icon: cookIcon}).bindPopup("Alchemist - Dafari").addTo(alchemistGroup),
		L.marker([-3007.75,1753], {icon: cookIcon}).bindPopup("Alchemist - Dafari").addTo(alchemistGroup),
		L.marker([-2718.75,423.75], {icon: cookIcon}).bindPopup("Alchemist - Stygian").addTo(alchemistGroup),
		L.marker([-2542,3263.5], {icon: cookIcon}).bindPopup("Alchemist - Nordheimer").addTo(alchemistGroup),
		L.marker([-2661.5,2112.25], {icon: cookIcon}).bindPopup("Alchemist - Nordheimer").addTo(alchemistGroup),
		L.marker([-1167,1650.25], {icon: cookIcon}).bindPopup("2 Alchemists").addTo(alchemistGroup),
		
		//Thralls - Taskmaster
		L.marker([-3179.25,2317.5], {icon: taskmasterIcon}).bindPopup("Taskmaster - Hyborian").addTo(taskmasterGroup),
		L.marker([-3009.75,1766.25], {icon: taskmasterIcon}).bindPopup("Taskmaster - Dafari").addTo(taskmasterGroup),
		L.marker([-2975.5,1845.75], {icon: taskmasterIcon}).bindPopup("Taskmaster - Dafari").addTo(taskmasterGroup),
		L.marker([-2543.75,3256.75], {icon: taskmasterIcon}).bindPopup("Taskmaster - Kushite").addTo(taskmasterGroup),
		L.marker([-2337,1220], {icon: taskmasterIcon}).bindPopup("Taskmaster - Kushite").addTo(taskmasterGroup),
		L.marker([-2668,2221], {icon: taskmasterIcon}).bindPopup("Taskmaster - Stygian").addTo(taskmasterGroup),
		L.marker([-2672.5,2120.25], {icon: taskmasterIcon}).bindPopup("Taskmaster - Stygian").addTo(taskmasterGroup),
		
		//Thralls - Carpenter
		L.marker([-3288.5,1237.5], {icon: carpenterIcon}).bindPopup("Carpenter - Dafari").addTo(carpenterGroup),
		L.marker([-3461.75,1671], {icon: carpenterIcon}).bindPopup("Carpenter - Zamorian").addTo(carpenterGroup),
		L.marker([-2334.75,1231.5], {icon: carpenterIcon}).bindPopup("Carpenter - Kushite").addTo(carpenterGroup),
		L.marker([-2999.5,1773.75], {icon: carpenterIcon}).bindPopup("Carpenter - Dafari").addTo(carpenterGroup),
		L.marker([-3141,1533.5], {icon: carpenterIcon}).bindPopup("Carpenter - Dafari").addTo(carpenterGroup),
		L.marker([-2448,3356], {icon: carpenterIcon}).bindPopup("Carpenter - Shemite").addTo(carpenterGroup),
		L.marker([-2663,2084.5], {icon: carpenterIcon}).bindPopup("Carpenter - Shemite (Lower Area)").addTo(carpenterGroup),
		L.marker([-2627,382], {icon: carpenterIcon}).bindPopup("Carpenter - Dafari").addTo(carpenterGroup),
		L.marker([-2609,559.5], {icon: carpenterIcon}).bindPopup("Carpenter - Stygian").addTo(carpenterGroup),
		L.marker([-2353.5,1171], {icon: carpenterIcon}).bindPopup("Carpenter - Stygian").addTo(carpenterGroup),
		L.marker([-3054.5,3356], {icon: carpenterIcon}).bindPopup("Carpenter - Lemurian").addTo(carpenterGroup),
		L.marker([-2456,3307.25], {icon: carpenterIcon}).bindPopup("Carpenter - Hyrkanian or <a href='data/images/thralls/rayne.png' target='_blank'>Named Thrall - Rayne O' the Rosewood</a>").addTo(carpenterGroup).addTo(namedCarpenterGroup),
		L.marker([-2697.5,2542], {icon: carpenterIcon}).bindPopup("2 Carpenters").addTo(carpenterGroup),
		
		//Thralls - Cook
		L.marker([-2980,1849], {icon: cookIcon}).bindPopup("Cook - Dafari").addTo(cookGroup),
		L.marker([-3007.8,1778.5], {icon: cookIcon}).bindPopup("Cook - Dafari").addTo(cookGroup),
		L.marker([-2999.75,1524.75], {icon: cookIcon}).bindPopup("Cook - Dafari").addTo(cookGroup),
		L.marker([-3055,3350.5], {icon: cookIcon}).bindPopup("Cook - Lemurian").addTo(cookGroup),
		L.marker([-2760.5,2924.5], {icon: cookIcon}).bindPopup("Cook - Zamorian (Upper Levels)").addTo(cookGroup),
		L.marker([-3025,3342.5], {icon: cookIcon}).bindPopup("Cook - Lemurian").addTo(cookGroup),
		L.marker([-2262.75,2961.5], {icon: cookIcon}).bindPopup("Cook - Cimmerian").addTo(cookGroup),
		L.marker([-2721.75,424.75], {icon: cookIcon}).bindPopup("Cook - Stygian").addTo(cookGroup),
		L.marker([-2720,2219.5], {icon: cookIcon}).bindPopup("Cook - Stygian").addTo(cookGroup),
		L.marker([-2938.5,2775], {icon: cookIcon}).bindPopup("Cook - Hyborian").addTo(cookGroup),
		L.marker([-2628,2140.5], {icon: cookIcon}).bindPopup("Cook - Zamorian").addTo(cookGroup),
		L.marker([-2465,3285.25], {icon: cookIcon}).bindPopup("Cook - Zingarian").addTo(cookGroup),
		L.marker([-2507.25,3220], {icon: cookIcon}).bindPopup("Cook - Zingarian").addTo(cookGroup),
		L.marker([-2168,1551], {icon: cookIcon}).bindPopup("Cook - Nordheimer").addTo(cookGroup),
		L.marker([-2768,2933.75], {icon: cookIcon}).bindPopup("Cook - Hyrkanian (Upper Levels)").addTo(cookGroup),
		
		//Thralls - Tanner
		L.marker([-3232.5,1304], {icon: tannerIcon}).bindPopup("Tanner - Dafari").addTo(tannerGroup),
		L.marker([-3004.5,1785.5], {icon: tannerIcon}).bindPopup("Tanner - Dafari").addTo(tannerGroup),
		L.marker([-2899.50,1428.0], {icon: tannerIcon}).bindPopup("Tanner - Dafari").addTo(tannerGroup),
		L.marker([-2699,484], {icon: tannerIcon}).bindPopup("Tanner - Zamorian").addTo(tannerGroup),
		L.marker([-2667,476.75], {icon: tannerIcon}).bindPopup("Tanner - Kushite").addTo(tannerGroup),
		L.marker([-2660.25,2071], {icon: tannerIcon}).bindPopup("Tanner - Kushite").addTo(tannerGroup),
		L.marker([-2295.75,1258.25], {icon: tannerIcon}).bindPopup("Tanner - Kushite").addTo(tannerGroup),
		L.marker([-2606,481.5], {icon: tannerIcon}).bindPopup("Tanner - Stygian").addTo(tannerGroup),
		L.marker([-2606,481.5], {icon: tannerIcon}).bindPopup("Tanner - Hyrkanian").addTo(tannerGroup),
		
		//Thralls - Smelter
		L.marker([-3412.75,2075.75], {icon: smelterIcon}).bindPopup("Smelter - Stygian").addTo(smelterGroup),
		L.marker([-2883,2119], {icon: smelterIcon}).bindPopup("Smelter - Shemite").addTo(smelterGroup),
		L.marker([-2584.25,550.75], {icon: smelterIcon}).bindPopup("Smelter - Shemite").addTo(smelterGroup),
		L.marker([-3103.5,2621.75], {icon: smelterIcon}).bindPopup("Smelter - Shemite").addTo(smelterGroup),
		L.marker([-2278.75,1212], {icon: smelterIcon}).bindPopup("Smelter - Shemite").addTo(smelterGroup),
		L.marker([-2651.5,2104.25], {icon: smelterIcon}).bindPopup("Smelter - Shemite (Lower Platform)").addTo(smelterGroup),
		L.marker([-2443.5,3352], {icon: smelterIcon}).bindPopup("Smelter - Zamorian").addTo(smelterGroup),
		L.marker([-2616,2117.5], {icon: smelterIcon}).bindPopup("Smelter - Zamorian").addTo(smelterGroup),
		
		//Thralls - Priest
		L.marker([-2910.5,1987], {icon: priestIcon}).bindPopup("Priest - Mitra High Priest").addTo(priestGroup),
		L.marker([-2995.25,1769], {icon: priestIcon}).bindPopup("Priest - Yog Priest").addTo(priestGroup),
		L.marker([-2662.75,2093.5], {icon: priestIcon}).bindPopup("Priest - Yog Priest (Lower Area)").addTo(priestGroup),
		L.marker([-2629,551], {icon: priestIcon}).bindPopup("Priest - Set Priest").addTo(priestGroup),
		L.marker([-3158.25,1711.5], {icon: priestIcon}).bindPopup("Priest - Mitra Priest(In Cave)").addTo(priestGroup),
		
		//Thralls - Bearer
		L.marker([-3266,1276.75], {icon: sherpaIcon}).bindPopup("Bearer - Dafari").addTo(sherpaGroup),
		L.marker([-3341.5,2014], {icon: sherpaIcon}).bindPopup("Bearer - Kushite").addTo(sherpaGroup),
		L.marker([-2994.25,1843], {icon: sherpaIcon}).bindPopup("Bearer - Stygian").addTo(sherpaGroup),
		L.marker([-2619.75,2129.5], {icon: sherpaIcon}).bindPopup("Bearer - Stygian").addTo(sherpaGroup),
		L.marker([-3010.75,1768.5], {icon: sherpaIcon}).bindPopup("Bearer - Dafari").addTo(sherpaGroup),
		L.marker([-2604.25,477.25], {icon: sherpaIcon}).bindPopup("Bearer - Zingarian").addTo(sherpaGroup),
		L.marker([-2633.75,2152.25], {icon: sherpaIcon}).bindPopup("Bearer - Zamorian").addTo(sherpaGroup),
		L.marker([-2767.5,2955.25], {icon: sherpaIcon}).bindPopup("Bearer - Hyrkanian (In Cave)").addTo(sherpaGroup),
		
		//Named Thralls - Blacksmith
		L.marker([-1255,1724], {icon: blacksmithIcon}).bindPopup("Secas the Smith (Blacksmith)").addTo(namedBlacksmithGroup),

		//Named Thralls - Alchemist
		L.marker([-1181,1668.5], {icon: cookIcon}).bindPopup("Sayd Secretkeeper (Alchemist)").addTo(namedAlchemistGroup),

		//Named Thralls - Tanner
		L.marker([-965,1526.5], {icon: tannerIcon}).bindPopup("Firis Flickertongue").addTo(namedTannerGroup),

		//Named Thralls - Fighter
		L.marker([-2903.25,2258.75], {icon: warriorIcon}).bindPopup("Tarman (Fighter)").addTo(namedFighterGroup),
		L.marker([-2777,1775.25], {icon: warriorIcon}).bindPopup("<a href='data/images/thralls/thugra.png' target='_blank'>Thugra (Fighter)</a>").addTo(namedFighterGroup),
		L.marker([-3042.25,3360.5], {icon: warriorIcon}).bindPopup("<a href='data/images/thralls/mei.png' target='_blank'>Mei the Blade (Fighter)</a>").addTo(namedFighterGroup),
		L.marker([-2409,3368.25], {icon: warriorIcon}).bindPopup("<a href='data/images/thralls/gallo.png' target='_blank'>Gall O' the Spear-Din (Fighter)</a>").addTo(namedFighterGroup),
		L.marker([-2671.25,2141], {icon: warriorIcon}).bindPopup("<a href='data/images/thralls/captainioushwa.png' target='_blank'>Captain Ioushuwa (Fighter)</a>").addTo(namedFighterGroup),
		L.marker([-2695.5,1824.25], {icon: warriorIcon}).bindPopup("<a href='data/images/thralls/nbatu.png' target='_blank'>N'batu (Fighter)</a>").addTo(namedFighterGroup),
		L.marker([-1941,1538.5], {icon: warriorIcon}).bindPopup("Lian (Fighter)").addTo(namedFighterGroup),
		
		//Named Thralls - Taskmaster
		L.marker([-2632.5,385.5], {icon: taskmasterIcon}).bindPopup("Taskmaster Master").addTo(namedTaskmasterGroup),
		L.marker([-967.5,1549.75], {icon: taskmasterIcon}).bindPopup("Risa the Brutal").addTo(namedTaskmasterGroup),

		//Named Thralls - Entertainer
		L.marker([-2602.5,479.5], {icon: entertainerIcon}).bindPopup("Luba the Luscious").addTo(namedEntertainerGroup),
		
		//Named Thralls - Cook
		L.marker([-2666.75,2105.75], {icon: cookIcon}).bindPopup("<a href='data/images/thralls/vatessa.png' target='_blank'>Vatessa the Potent (Cook) (Lower Area)</a>").addTo(namedCookGroup),
		L.marker([-1187.5,1671.5], {icon: cookIcon}).bindPopup("Ennis the Gobbler (Cook)").addTo(namedCookGroup),

		//Named Thralls - Carpenter
		
		L.marker([-2415.75,3369.5], {icon: carpenterIcon}).bindPopup("<a href='data/images/thralls/sigyn.png' target='_blank'>Sigyn the Woodworker (Carpenter)</a>").addTo(namedCarpenterGroup),
		
		//Named Thralls - Bearer
		L.marker([-2598,1783.25], {icon: sherpaIcon}).bindPopup("<a href='data/images/thralls/dono.png' target='_blank'>Dono'Thelpup (Bearer)</a>").addTo(namedSherpaGroup),
		
		//Named Thralls - Archer
		L.marker([-2558.75,3262.75], {icon: archerIcon}).bindPopup("<a href='data/images/thralls/sarnai.png' target='_blank'>Sarnai the Thorn (Archer)</a>").addTo(namedArcherGroup),
		L.marker([-2102,1711], {icon: archerIcon}).bindPopup("Freya (Archer)").addTo(namedArcherGroup),

		
		//Location - Dungeons
		L.marker([-3249.5,996.5], {icon: dungeonIcon}).bindPopup("<a href='https://conanexiles.gamepedia.com/The_Dregs' target='_blank'>The Dregs</a>").addTo(dungeonGroup),
		L.marker([-2901.25,3366.75], {icon: dungeonIcon}).bindPopup("<a href='https://conanexiles.gamepedia.com/Palace_of_the_Witch_Queen' target='_blank'>Palace of the Witch Queen</a>").addTo(dungeonGroup),
		L.marker([-2179.75,2499.25], {icon: dungeonIcon}).bindPopup("<a href='https://conanexiles.gamepedia.com/The_Passage' target='_blank'>The Passage</a>").addTo(dungeonGroup),
		L.marker([-1526.5,1377], {icon: dungeonIcon}).bindPopup("<a href='https://conanexiles.gamepedia.com/Black_Keep' target='_blank'>The Black Keep</a>").addTo(dungeonGroup),
		L.marker([-1550.5,1283], {icon: dungeonIcon}).bindPopup("<a href='https://conanexiles.gamepedia.com/Undergate' target='_blank'>Undergate</a> - Entrance requires swimming under ice.").addTo(dungeonGroup),
		L.marker([-969,1537], {icon: dungeonIcon}).bindPopup("<a href='https://conanexiles.gamepedia.com/The_Well_of_Skelos' target='_blank'>The Well of Skelos</a>").addTo(dungeonGroup),
		
		//Location - Caves
		L.marker([-3271,1318.5], {icon: caveIcon}).bindPopup("Cavern of Fiends - Demon Blood, Crystals").addTo(caveGroup),
		L.marker([-3160,1705.25], {icon: caveIcon}).bindPopup("Sinner's Refuge - Brimstone").addTo(caveGroup),
		L.marker([-3496,1905], {icon: caveIcon}).bindPopup("Hanuman's Grotto - Demon Blood, Crystals").addTo(caveGroup),
		L.marker([-3181.5,1901], {icon: caveIcon}).bindPopup("Gallaman's Tomb - Brimstone").addTo(caveGroup),
		L.marker([-2513.25,2304], {icon: caveIcon}).bindPopup("Xalthar's Refuge").addTo(caveGroup),
		L.marker([-2596,1393], {icon: caveIcon}).bindPopup("Weaver's Hollow").addTo(caveGroup),
		L.marker([-2482.75,1492], {icon: caveIcon}).bindPopup("Scuttler's Shortcut").addTo(caveGroup),
		L.marker([-2006,1823.25], {icon: caveIcon}).bindPopup("Lockstone Cave").addTo(caveGroup),
		L.marker([-2879.75,1315], {icon: caveIcon}).bindPopup("Warren of Degenerates - Demon Blood, Crystals").addTo(caveGroup),
		L.marker([-1087,1201], {icon: caveIcon}).bindPopup("The Floe - Goes to Volcano").addTo(caveGroup),
		L.marker([-1391,1266.5], {icon: caveIcon}).bindPopup("Dragonmouth - Goes to Volcano").addTo(caveGroup),
		L.marker([-3052.75,1298.25], {icon: caveIcon}).bindPopup("Skittering Cavern - Gossamer").addTo(caveGroup),
		L.marker([-3017,1193], {icon: caveIcon}).bindPopup("Shaleback Hollow").addTo(caveGroup),
		L.marker([-1957,1822], {icon: caveIcon}).bindPopup("Jhil's Roost").addTo(caveGroup),
		L.marker([-1799.25,1772.75], {icon: caveIcon}).bindPopup("Bin-Yakin`s Seal").addTo(caveGroup),
		L.marker([-1913,1845.75], {icon: caveIcon}).bindPopup("The Scraps").addTo(caveGroup),
		L.marker([-1648.75,339.25], {icon: caveIcon}).bindPopup("The Barrow King").addTo(caveGroup),
		L.marker([-1493.25,1886.5], {icon: caveIcon}).bindPopup("The High Way - Goes to Volcano").addTo(caveGroup),
		L.marker([-1702.5,971.25], {icon: caveIcon}).bindPopup("The Crevice").addTo(caveGroup),
		L.marker([-2863.5,2186.75], {icon: caveIcon}).bindPopup("Executioners Entrance - Brimstone, Iron").addTo(caveGroup),
		
		//Location - Obelisks
		L.marker([-2253.75,2589], {icon: obeliskIcon}).bindPopup("<a href='data/images/markers/obelisks/obelisk1.png' target='_blank'><img src='data/images/markers/obelisks/obelisk1.png' width='300'></img></a><p align='center'>Obelisk</p>").addTo(obeliskGroup),
		L.marker([-2771.75,3226.25], {icon: obeliskIcon}).bindPopup("<a href='data/images/markers/obelisks/obelisk2.png' target='_blank'><img src='data/images/markers/obelisks/obelisk2.png' width='300'></img></a><p align='center'>Obelisk</p>").addTo(obeliskGroup),
		L.marker([-1110,1643], {icon: obeliskIcon}).bindPopup("<a href='data/images/markers/obelisks/obelisk3.png' target='_blank'><img src='data/images/markers/obelisks/obelisk3.png' width='300'></img></a><p align='center'>Obelisk</p>").addTo(obeliskGroup),
		L.marker([-1117.25,1086.25], {icon: obeliskIcon}).bindPopup("<a href='data/images/markers/obelisks/obelisk4.png' target='_blank'><img src='data/images/markers/obelisks/obelisk4.png' width='300'></img></a><p align='center'>Obelisk</p>").addTo(obeliskGroup),
		L.marker([-1698.5,520.5], {icon: obeliskIcon}).bindPopup("<a href='data/images/markers/obelisks/obelisk5.png' target='_blank'><img src='data/images/markers/obelisks/obelisk5.png' width='300'></img></a><p align='center'>Obelisk</p>").addTo(obeliskGroup),
		L.marker([-2743.75,1074.25], {icon: obeliskIcon}).bindPopup("<a href='data/images/markers/obelisks/obelisk6.png' target='_blank'><img src='data/images/markers/obelisks/obelisk6.png' width='300'></img></a><p align='center'>Obelisk</p>").addTo(obeliskGroup),
		L.marker([-2444.25,679.75], {icon: obeliskIcon}).bindPopup("<a href='data/images/markers/obelisks/obelisk7.png' target='_blank'><img src='data/images/markers/obelisks/obelisk7.png' width='300'></img></a><p align='center'>Obelisk</p>").addTo(obeliskGroup),
		L.marker([-3247.75,985.75], {icon: obeliskIcon}).bindPopup("<a href='data/images/markers/obelisks/obelisk8.png' target='_blank'><img src='data/images/markers/obelisks/obelisk8.png' width='300'></img></a><p align='center'>Obelisk</p>").addTo(obeliskGroup),
		L.marker([-2846.5,1794.5], {icon: obeliskIcon}).bindPopup("<a href='data/images/markers/obelisks/obelisk9.png' target='_blank'><img src='data/images/markers/obelisks/obelisk9.png' width='300'></img></a><p align='center'>Obelisk</p>").addTo(obeliskGroup),
		L.marker([-1620.75,1337], {icon: obeliskIcon}).bindPopup("<a href='data/images/markers/obelisks/obelisk10.png' target='_blank'><img src='data/images/markers/obelisks/obelisk10.png' width='300'></img></a><p align='center'>Obelisk</p>").addTo(obeliskGroup),
		
		//Locations - Camps


		//Locations - Capitals
		L.marker([-2297.75,1197], {icon: capitalDogsOfTheDesertIcon}).bindPopup("The Den").addTo(capitalGroup),
		L.marker([-1014.5,1081], {icon: capitalFrostGiantIcon}).bindPopup("The Temple of Frost").addTo(capitalGroup),
		L.marker([-1664.75,558.5], {icon: capitalCimmerianIcon}).bindPopup("Mounds of the Dead").addTo(capitalGroup),
		L.marker([-1961,1303], {icon: capitalVanirIcon}).bindPopup("New Asagarth").addTo(capitalGroup),
		L.marker([-2660.5,2099.25], {icon: capitalBlackhandIcon}).bindPopup("The Black Galleon").addTo(capitalGroup),
		L.marker([-2909,3270], {icon: capitalLemurianIcon}).bindPopup("Forgotten City of Xel-ha").addTo(capitalGroup),
		L.marker([-2997.5,1764.5], {icon: capitalDarfariIcon}).bindPopup("The Summoning Place").addTo(capitalGroup),
		L.marker([-2662,480.25], {icon: capitalRelicHuntersIcon}).bindPopup("Sepermeru, City of the Relic Hunters").addTo(capitalGroup),
		L.marker([-2817.75,992.5], {icon: capitalUnnamedCityIcon}).bindPopup("The Unnamed City").addTo(capitalGroup),
		
		//Locations - Vistas
		L.marker([-2514.75,1725.5], {icon: vistaIcon}).bindPopup("Swagger Rock").addTo(vistaGroup),
		
		//Locations - Ruins
		L.marker([-3717,1820.5], {icon: ruinsIcon}).bindPopup("The Broken Highway").addTo(ruinsGroup),
		
		//Locations - Bosses
		L.marker([-3270,1629.25], {icon: bossIcon}).bindPopup("Alligator").addTo(bossGroup);
		
		//Locations - Lore
		
		
		//Locations - Treasures


		//Group Overlay Combiner
		var groupedResources = {
			"Resources": {
				"<img src='data/images/icons/icon_ironstone.png' width='16' height='16'></img> Iron": ironGroup,
				"<img src='data/images/icons/icon_coal.png' width='16' height='16'></img> Coal": coalGroup,
				"<img src='data/images/icons/icon_brimstone.png' width='16' height='16'></img> Brimstone": brimstoneGroup,
				"<img src='data/images/icons/icon_crystal.png' width='16' height='16'></img> Crystal": crystalGroup,
				"<img src='data/images/icons/icon_silver.png' width='16' height='16'></img> Silver": silverGroup,
				"<img src='data/images/icons/icon_starmetal.png' width='16' height='16'></img> Star Metal": starmetalGroup,
				"<img src='data/images/icons/icon_black_ice.png' width='16' height='16'></img> Black Ice": blackiceGroup,
				"<img src='data/images/icons/icon_obsidian.png' width='16' height='16'></img> Obsidian": obsidianGroup
			},
			"Thralls": {
				"<img src='data/images/icons/icon_cook.png' width='16' height='16'></img> Alchemist": alchemistGroup,
				"<img src='data/images/icons/icon_armorer.png' width='16' height='16'></img> Armorer": armorerGroup,
				"<img src='data/images/icons/icon_sherpa.png' width='16' height='16'></img> Bearer": sherpaGroup,
				"<img src='data/images/icons/icon_blacksmith.png' width='16' height='16'></img> Blacksmith": blacksmithGroup,
				"<img src='data/images/icons/icon_carpenter.png' width='16' height='16'></img> Carpenter": carpenterGroup,
				"<img src='data/images/icons/icon_cook.png' width='16' height='16'></img> Cook": cookGroup,
				"<img src='data/images/icons/icon_entertainer.png' width='16' height='16'></img> Entertainer": entertainerGroup,
				"<img src='data/images/icons/icon_priest.png' width='16' height='16'></img> Priest": priestGroup,
				"<img src='data/images/icons/icon_tanner.png' width='16' height='16'></img> Tanner": tannerGroup,
				"<img src='data/images/icons/icon_taskmaster.png' width='16' height='16'></img> Taskmaster": taskmasterGroup,
				"<img src='data/images/icons/icon_smelter.png' width='16' height='16'></img> Smelter": smelterGroup
			},
			"Named Thralls": {
				"<img src='data/images/icons/icon_archer.png' width='16' height='16'></img> Archer": namedArcherGroup,
				"<img src='data/images/icons/icon_cook.png' width='16' height='16'></img> Alchemist": namedAlchemistGroup,
				"<img src='data/images/icons/icon_armorer.png' width='16' height='16'></img> Armorer": namedArmorerGroup,
				"<img src='data/images/icons/icon_blacksmith.png' width='16' height='16'></img> Blacksmith": namedBlacksmithGroup,
				"<img src='data/images/icons/icon_carpenter.png' width='16' height='16'></img> Carpenter": namedCarpenterGroup,
				"<img src='data/images/icons/icon_cook.png' width='16' height='16'></img> Cook": namedCookGroup,
				"<img src='data/images/icons/icon_entertainer.png' width='16' height='16'></img> Entertainer": namedEntertainerGroup,
				"<img src='data/images/icons/icon_warrior.png' width='16' height='16'></img> Fighter": namedFighterGroup,
				"<img src='data/images/icons/icon_priest.png' width='16' height='16'></img> Priest": namedPriestGroup,
				"<img src='data/images/icons/icon_sherpa.png' width='16' height='16'></img> Bearer": namedSherpaGroup,
				"<img src='data/images/icons/icon_smelter.png' width='16' height='16'></img> Smelter": namedSmelterGroup,
				"<img src='data/images/icons/icon_tanner.png' width='16' height='16'></img> Tanner": namedTannerGroup,
				"<img src='data/images/icons/icon_taskmaster.png' width='16' height='16'></img> Taskmaster": namedTaskmasterGroup
			}
		}

		var groupedLocations = {
			"Toggle Locations": {
				"<img src='data/images/icons/icon_mitra.png' width='16' height='16'></img> Religon Trainer": religonGroup,
				"<img src='data/images/icons/icon_cave.png' width='16' height='16'></img> Caves": caveGroup,
				"<img src='data/images/icons/icon_dungeon.png' width='16' height='16'></img> Dungeons": dungeonGroup,
				"<img src='data/images/icons/icon_obelisk.png' width='16' height='16'></img> Obelisks": obeliskGroup,
				"<img src='data/images/icons/camp_vanir.png' width='16' height='16'></img> Camps": campGroup,
				"<img src='data/images/icons/capital_vanir.png' width='16' height='16'></img> Capitals": capitalGroup,
				"<img src='data/images/icons/icon_vista.png' width='16' height='16'></img> Vistas": vistaGroup,
				"<img src='data/images/icons/icon_ruins.png' width='16' height='16'></img> Ruins": ruinsGroup,
				"<img src='data/images/icons/icon_boss.png' width='16' height='16'></img> Bosses": bossGroup,
				"<img src='data/images/icons/icon_lore.png' width='16' height='16'></img> Lore": loreGroup,
				"<img src='data/images/icons/icon_treasure.png' width='16' height='16'></img> Treasures": treasureGroup
			}
		}

		//Enable Group Options
		var options = {
			groupCheckboxes: true,
			collapsed: true
		};

		var layerControlResources = L.control.groupedLayers(null, groupedResources);
		var layerControlLocations = L.control.groupedLayers(null, groupedLocations, options);


		//OLD FILTERING
		layerControlResources.addTo(map);
		layerControlLocations.addTo(map);
		L.DomEvent.disableClickPropagation(layerControlLocations._container);
		L.DomEvent.disableClickPropagation(layerControlResources._container);

