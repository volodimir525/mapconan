(function() {

	var groups = {
		
		//Mineral Groups
		ironGroup: new L.LayerGroup(),
		coalGroup: new L.LayerGroup(),
		crystalGroup: new L.LayerGroup(),
		brimstoneGroup: new L.LayerGroup(),
		silverGroup: new L.LayerGroup(),
		starmetalGroup: new L.LayerGroup(),
		//Misc Groups
		religonGroup: new L.LayerGroup(),
		//Thrall Groups
		blacksmithGroup: new L.LayerGroup(),
		entertainerGroup: new L.LayerGroup(),
		alchemistGroup: new L.LayerGroup(),
		carpenterGroup: new L.LayerGroup(),
		tannerGroup: new L.LayerGroup(),
		sherpaGroup: new L.LayerGroup(),
		taskmasterGroup: new L.LayerGroup(),
		smelterGroup: new L.LayerGroup(),
		priestGroup: new L.LayerGroup(),
		armorerGroup: new L.LayerGroup(),
		cookGroup: new L.LayerGroup(),
		
		//Named Thrall Groups
		namedArcherGroup: new L.LayerGroup(),
		namedAlchemistGroup: new L.LayerGroup(),
		namedArmorerGroup: new L.LayerGroup(),
		namedFighterGroup: new L.LayerGroup(),
		
		//Location Groups
		caveGroup: new L.LayerGroup(),
		dungeonGroup: new L.LayerGroup()

  };

		//Crystal Icons
		L.marker([-3266,1310], {icon: crystalIcon}).addTo(map).bindPopup("Crystals in Cavern of Fiends").addTo(groups.crystalGroup),
		
		//Iron Icons
		L.marker([-3021,1337.5], {icon: ironIcon}).addTo(map).bindPopup("2 Iron Nodes").addTo(groups.ironGroup);
		L.marker([-3016.5,1340.75], {icon: ironIcon}).addTo(map).bindPopup("2 Iron Nodes").addTo(groups.ironGroup);
		L.marker([-3015.75,1330], {icon: ironIcon}).addTo(map).bindPopup("3 Iron Nodes").addTo(groups.ironGroup);
		L.marker([-3021,1351.5], {icon: ironIcon}).addTo(map).bindPopup("6 Iron Nodes").addTo(groups.ironGroup);
		L.marker([-3037,1354.25], {icon: ironIcon}).addTo(map).bindPopup("19 Iron Nodes").addTo(groups.ironGroup);
		L.marker([-3031.75,1382.25], {icon: ironIcon}).addTo(map).bindPopup("6 Iron Nodes").addTo(groups.ironGroup);
		L.marker([-3037,1354.25], {icon: ironIcon}).addTo(map).bindPopup("19 Iron Nodes").addTo(groups.ironGroup);
		L.marker([-3037.25,1388.75], {icon: ironIcon}).addTo(map).bindPopup("1 Iron Node").addTo(groups.ironGroup);
		L.marker([-3041,1395.75], {icon: ironIcon}).addTo(map).bindPopup("2 Iron Nodes").addTo(groups.groups.ironGroup);
		L.marker([-3022.5,1367], {icon: ironIcon}).addTo(map).bindPopup("5 Iron Nodes").addTo(groups.ironGroup);
		L.marker([-3022,1387.75], {icon: ironIcon}).addTo(map).bindPopup("14 Iron Nodes").addTo(groups.ironGroup);
		L.marker([-3005.5,1368.25], {icon: ironIcon}).addTo(map).bindPopup("4 Iron Nodes").addTo(groups.ironGroup);
		L.marker([-2997.25,1354.75], {icon: ironIcon}).addTo(map).bindPopup("2 Iron Nodes").addTo(groups.ironGroup);
		L.marker([-3016.5,1315.5], {icon: ironIcon}).addTo(map).bindPopup("21 Iron Nodes - On Cliff").addTo(groups.ironGroup);
		L.marker([-3011.5,1302.5], {icon: ironIcon}).addTo(map).bindPopup("12 Iron Nodes - On Cliff").addTo(groups.ironGroup);
		L.marker([-3008.25,1286.75], {icon: ironIcon}).addTo(map).bindPopup("20 Iron Nodes - On Plateau").addTo(groups.ironGroup);
		L.marker([-2996.75,1282.75], {icon: ironIcon}).addTo(map).bindPopup("9 Iron Nodes - On Plateau").addTo(groups.ironGroup);
		L.marker([-3048.25,1317.5], {icon: ironIcon}).addTo(map).bindPopup("15 Iron Nodes - On Plateau").addTo(groups.ironGroup);
		L.marker([-2981.25,1286.25], {icon: ironIcon}).addTo(map).bindPopup("5 Iron Nodes - On Cliff").addTo(groups.ironGroup);
		L.marker([-2985.75,1293], {icon: ironIcon}).addTo(map).bindPopup("3 Iron Nodes").addTo(groups.ironGroup);
		L.marker([-3032.5,1634.5], {icon: ironIcon}).addTo(map).bindPopup("3 Iron Nodes").addTo(groups.ironGroup);
		L.marker([-2946,1608.75], {icon: ironIcon}).addTo(map).bindPopup("3 Iron Nodes").addTo(groups.ironGroup);
		L.marker([-2971.5,1651], {icon: ironIcon}).addTo(map).bindPopup("3 Iron Nodes").addTo(groups.ironGroup);
		L.marker([-3054.25,1607], {icon: ironIcon}).addTo(map).bindPopup("3 Iron Nodes").addTo(groups.ironGroup);
		L.marker([-2802.75,2095.5], {icon: ironIcon}).addTo(map).bindPopup("4 Iron Nodes").addTo(groups.ironGroup);
		L.marker([-2962,1598.25], {icon: ironIcon}).addTo(map).bindPopup("4 Iron Nodes").addTo(groups.ironGroup);
		L.marker([-2988.5,1649.5], {icon: ironIcon}).addTo(map).bindPopup("4 Iron Nodes").addTo(groups.ironGroup);
		L.marker([-3014.75,1670.75], {icon: ironIcon}).addTo(map).bindPopup("4 Iron Nodes").addTo(groups.ironGroup);
		L.marker([-3020,1654.5], {icon: ironIcon}).addTo(map).bindPopup("4 Iron Nodes").addTo(groups.ironGroup);
		L.marker([-2978,2326.75], {icon: ironIcon}).addTo(map).bindPopup("6 Iron Nodes").addTo(groups.ironGroup);
		L.marker([-3027,1822.25], {icon: ironIcon}).addTo(map).bindPopup("6 Iron Nodes").addTo(groups.ironGroup);
		L.marker([-3006.5,1863.5], {icon: ironIcon}).addTo(map).bindPopup("6 Iron Nodes").addTo(groups.ironGroup);
		L.marker([-2936,1756], {icon: ironIcon}).addTo(map).bindPopup("7 Iron Nodes").addTo(groups.ironGroup);
		
		//Coal Icons
		L.marker([-2821.25,2106.5], {icon: coalIcon}).addTo(map).bindPopup("1 Coal Node").addTo(groups.coalGroup);
		L.marker([-2842,2082.25], {icon: coalIcon}).addTo(map).bindPopup("1 Coal Node").addTo(groups.coalGroup);
		L.marker([-2836,2098.5], {icon: coalIcon}).addTo(map).bindPopup("3 Coal Nodes").addTo(groups.coalGroup);
		L.marker([-2858,2058.25], {icon: coalIcon}).addTo(map).bindPopup("2 Coal Nodes").addTo(groups.coalGroup);
		L.marker([-3047.75,1744], {icon: coalIcon}).addTo(map).bindPopup("2 Coal Nodes").addTo(groups.coalGroup);
		L.marker([-3021.5,1718.25], {icon: coalIcon}).addTo(map).bindPopup("3 Coal Nodes").addTo(groups.coalGroup);
		L.marker([-2947,1726], {icon: coalIcon}).addTo(map).bindPopup("3 Coal Nodes").addTo(groups.coalGroup);
		L.marker([-2962,1737.5], {icon: coalIcon}).addTo(map).bindPopup("3 Coal Nodes").addTo(groups.coalGroup);
		
		//Brimstone Icons
		L.marker([-3149,1705], {icon: brimstoneIcon}).addTo(map).bindPopup("Brimstone in Sinner's Refuge").addTo(groups.brimstoneGroup);
		
		//Religon Icons
		L.marker([-3244,1328], {icon: yogIcon}).addTo(map).bindPopup("<a href='https://conanexiles.gamepedia.com/Nunu_the_Cannibal' target='_blank'>Yog Trainer - Nunu the Cannibal</a>").addTo(groups.religonGroup);
		L.marker([-2614.5,1630], {icon: setIcon}).addTo(map).bindPopup("<a href='https://conanexiles.gamepedia.com/Mek-kamoses' target='_blank'>Set Trainer - Mek-Kamoses</a>").addTo(groups.religonGroup);
		L.marker([-2516,1171], {icon: mitraIcon}).addTo(map).bindPopup("<a href='https://conanexiles.gamepedia.com/Muriela_the_Artisan' target='_blank'>Mitra Trainer - Muriela the Artisan</a>").addTo(groups.religonGroup);
		L.marker([-1453.5,693.5], {icon: ymirIcon}).addTo(map).bindPopup("<a href='https://conanexiles.gamepedia.com/The_Outcast' target='_blank'>Ymir Trainer - The Outcast</a>").addTo(groups.religonGroup);
		L.marker([-3056.25,3352], {icon: derketoIcon}).addTo(map).bindPopup("<a href='https://conanexiles.gamepedia.com/Yakira,_Priestess_of_Derketo' target='_blank'>Derketo Trainer - Yakira, Priestess of Derketo</a>").addTo(groups.religonGroup);

		//Thralls - Blacksmith
		L.marker([-3357,1485.5], {icon: blacksmithIcon}).addTo(map).bindPopup("Blacksmith - Zamorian").addTo(groups.blacksmithGroup);
		L.marker([-2882.75,2117], {icon: blacksmithIcon}).addTo(map).bindPopup("Blacksmith - Zamorian").addTo(groups.blacksmithGroup);
		
		
		//Thralls - Entertainer
		L.marker([-3262.75,1049.75], {icon: entertainerIcon}).addTo(map).bindPopup("Entertainer - Dafari").addTo(groups.entertainerGroup);
		L.marker([-3343.5,2017.5], {icon: entertainerIcon}).addTo(map).bindPopup("Entertainer - Dafari").addTo(groups.entertainerGroup);
		L.marker([-3347.5,2026.75], {icon: entertainerIcon}).addTo(map).bindPopup("Entertainer - Dafari").addTo(groups.entertainerGroup);
		L.marker([-2967,2306.5], {icon: entertainerIcon}).addTo(map).bindPopup("Entertainer - Nordheimer").addTo(groups.entertainerGroup);
		L.marker([-2995.5, 1849.75], {icon: entertainerIcon}).addTo(map).bindPopup("Entertainer - Dafari").addTo(groups.entertainerGroup);
		L.marker([-2987,1760.25], {icon: entertainerIcon}).addTo(map).bindPopup("Entertainer - Dafari").addTo(groups.entertainerGroup);
		
		//Thralls - Alchemist
		L.marker([-3259.5,1037], {icon: cookIcon}).addTo(map).bindPopup("Alchemist - Dafari").addTo(groups.alchemistGroup);
		L.marker([-3007.75,1753], {icon: cookIcon}).addTo(map).bindPopup("Alchemist - Dafari").addTo(groups.alchemistGroup);
		
		//Thralls - Taskmaster
		L.marker([-3179.25,2317.5], {icon: taskmasterIcon}).addTo(map).bindPopup("Taskmaster - Hyborian").addTo(groups.taskmasterGroup);
		L.marker([-3009.75,1766.25], {icon: taskmasterIcon}).addTo(map).bindPopup("Taskmaster - Dafari").addTo(groups.taskmasterGroup);
		L.marker([-2975.5,1845.75], {icon: taskmasterIcon}).addTo(map).bindPopup("Taskmaster - Dafari").addTo(groups.taskmasterGroup);
		
		//Thralls - Carpenter
		L.marker([-3288.5,1237.5], {icon: carpenterIcon}).addTo(map).bindPopup("Carpenter - Dafari").addTo(groups.alchemistGroup);
		L.marker([-3461.75,1671], {icon: carpenterIcon}).addTo(map).bindPopup("Carpenter - Zamorian").addTo(groups.alchemistGroup);
		L.marker([-2999.5,1773.75], {icon: carpenterIcon}).addTo(map).bindPopup("Carpenter - Dafari").addTo(groups.alchemistGroup);
		L.marker([-3141,1533.5], {icon: carpenterIcon}).addTo(map).bindPopup("Carpenter - Dafari").addTo(groups.alchemistGroup);
		
		//Thralls - Cook
		L.marker([-2980,1849], {icon: cookIcon}).addTo(map).bindPopup("Cook - Dafari").addTo(groups.cookGroup);
		L.marker([-3007.8,1778.5], {icon: cookIcon}).addTo(map).bindPopup("Cook - Dafari").addTo(groups.cookGroup);
		L.marker([-2999.75,1524.75], {icon: cookIcon}).addTo(map).bindPopup("Cook - Dafari").addTo(groups.cookGroup);
		
		//Thralls - Tanner
		L.marker([-3232.5,1304], {icon: tannerIcon}).addTo(map).bindPopup("Tanner - Dafari").addTo(groups.tannerGroup);
		L.marker([-3004.5,1785.5], {icon: tannerIcon}).addTo(map).bindPopup("Tanner - Dafari").addTo(groups.tannerGroup);
		
		//Thralls - Smelter
		L.marker([-3412.75,2075.75], {icon: smelterIcon}).addTo(map).bindPopup("Smelter - Stygian").addTo(groups.smelterGroup);
		L.marker([-2883,2119], {icon: smelterIcon}).addTo(map).bindPopup("Smelter - Shemite").addTo(groups.smelterGroup);
		
		//Thralls - Priest
		L.marker([-2910.5,1987], {icon: priestIcon}).addTo(map).bindPopup("Priest - Mitra High Priest").addTo(groups.priestGroup);
		L.marker([-2995.25,1769], {icon: priestIcon}).addTo(map).bindPopup("Priest - Yog Priest").addTo(groups.priestGroup);
		
		//Thralls - Bearer
		L.marker([-3266,1276.75], {icon: sherpaIcon}).addTo(map).bindPopup("Bearer - Dafari").addTo(groups.sherpaGroup);
		L.marker([-3341.5,2014], {icon: sherpaIcon}).addTo(map).bindPopup("Bearer - Kushite").addTo(groups.sherpaGroup);
		L.marker([-2994.25,1843], {icon: sherpaIcon}).addTo(map).bindPopup("Bearer - Stygian").addTo(groups.sherpaGroup);
		L.marker([-3010.75,1768.5], {icon: sherpaIcon}).addTo(map).bindPopup("Bearer - Dafari").addTo(groups.sherpaGroup);
		
		//Named Thralls - Fighter
		L.marker([-2903.25,2258.75], {icon: warriorIcon}).addTo(map).bindPopup("Named Thrall - Tarman (Fighter)").addTo(groups.namedFighterGroup);
		
		//Location - Dungeons
		L.marker([-3249.5,996.5], {icon: dungeonIcon}).addTo(map).bindPopup("<a href='https://conanexiles.gamepedia.com/The_Dregs' target='_blank'>The Dregs</a>").addTo(groups.dungeonGroup);
		
		//Location - Caves
		L.marker([-3271,1318.5], {icon: caveIcon}).addTo(map).bindPopup("Cavern of Fiends - Demon Blood, Crystals").addTo(groups.caveGroup);
		L.marker([-3160,1705.25], {icon: caveIcon}).addTo(map).bindPopup("Sinner's Refuge - Brimstone").addTo(groups.caveGroup);

  window.MapData = {
    LayerGroups: groups,
  };

}());
