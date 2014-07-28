(function() {
    'use strict';
    var chart = new Highcharts.StockChart({
		    chart: {
		        alignTicks: false,
				backgroundColor: '#FFFFFF',
				events: {
					load: function (e) {
						this.xAxis[0].setExtremes(1390943153305, 1400015153305);
					}
				},
				ignoreHiddenSeries: true,
				renderTo: $('#indicators')[0]
			},
			colors: [
			'#E9322D', '#46A546', '#2C81BA' , '#EC7063', '#FBD8DB', '#666'
			],
			credits: {
				enabled: false
			},
			legend: {
				enabled: true,
				shadow: true
			},
		    rangeSelector: {
		        selected: 1
		    },
		    title: {
		        text: 'Party Counts'
		    },
		    scrollbar: {
                barBackgroundColor: '#EC7063',
                barBorderRadius: 5,
                buttonBackgroundColor: '#EC7063',
                buttonBorderRadius: 5
            },
			navigator: {
				height: 40,
				xAxis: {
					gridLineWidth: 1
				},
				series: {
					type: 'column'
				}
			},
            plotOptions: {
                series: {
					showInLegend: true,
                    stacking: 'normal',
					dataGrouping: {
						enabled: true,
						forced: true,
						units: [[
							'millisecond',
							[604800000] // Attempting to force data into weekly groups, get error if this is null
						], [
							'second',
							[604800]
						], [
							'minute',
							[10080]
						], [
							'hour',
							[168]
						], [
							'day',
							[7]
						], [
							'week',
							[1]
						], [
							'month',
							null
						], [
							'year',
							null
						]]
					}
                }
            },
			xAxis: {
				ordinal: false
			},
		    series: getData()
		});


// Just data after here


function getData() {
    return [{"name":"Political Party 1","type":"column","data":[[1372680000000,1],[1372766400000,1],[1372852800000,1],[1373457600000,1],[1373630400000,1],[1373716800000,1],[1374062400000,1],[1374148800000,1],[1374408000000,1],[1374494400000,1],[1374667200000,1],[1374753600000,1],[1374840000000,1],[1374926400000,2],[1375012800000,1],[1375099200000,1],[1375531200000,1],[1376136000000,1],[1376308800000,1],[1376395200000,1],[1377259200000,2],[1377604800000,1],[1377864000000,1],[1377950400000,1],[1378036800000,1],[1378123200000,1],[1378555200000,1],[1378814400000,2],[1378900800000,1],[1378987200000,1],[1379246400000,1],[1379419200000,1],[1379937600000,1],[1380110400000,1],[1380196800000,1],[1381060800000,1],[1381492800000,2],[1381579200000,1],[1381924800000,1],[1382270400000,1],[1382356800000,1],[1382616000000,2],[1382961600000,1],[1383048000000,1],[1383307200000,2],[1383566400000,1],[1384084800000,1],[1384171200000,1],[1384344000000,1],[1384430400000,1],[1384603200000,1],[1384948800000,2],[1385726400000,1],[1385899200000,1],[1386158400000,1],[1386331200000,1],[1386417600000,1],[1386504000000,1],[1386763200000,1],[1386936000000,1],[1387195200000,2],[1387368000000,1],[1387540800000,1],[1387627200000,1],[1387713600000,1],[1387972800000,1],[1388232000000,1],[1388404800000,3],[1388577600000,1],[1389873600000,2],[1390046400000,1],[1390219200000,1],[1390478400000,1],[1390651200000,1],[1390824000000,1],[1390910400000,2],[1391256000000,1],[1391601600000,1],[1392379200000,1],[1392552000000,1],[1392638400000,2],[1392811200000,1],[1393416000000,1],[1393502400000,1],[1393761600000,3],[1394107200000,1],[1394884800000,1],[1394971200000,1],[1395057600000,3],[1395230400000,1],[1395403200000,1],[1395576000000,2],[1395835200000,1],[1396094400000,1],[1396267200000,1],[1396353600000,1],[1397822400000,1],[1398600000000,1],[1398772800000,1],[1399032000000,1],[1399291200000,1],[1399377600000,1],[1399550400000,2],[1399636800000,1],[1399809600000,1],[1399982400000,1],[1400068800000,1],[1400328000000,1],[1400932800000,1],[1401105600000,1],[1401364800000,1],[1402142400000,1],[1402315200000,1],[1402574400000,2],[1403092800000,1],[1403179200000,1],[1403352000000,1],[1403611200000,1],[1404302400000,1],[1404475200000,1],[1404648000000,1],[1404734400000,1],[1404820800000,1],[1405080000000,1],[1405166400000,1],[1405684800000,1],[1405857600000,1],[1406203200000,1],[1406376000000,1],[1406462400000,2],[1406635200000,1],[1407672000000,1],[1407931200000,1],[1408104000000,2],[1409054400000,1],[1409140800000,1],[1410350400000,1],[1410436800000,2],[1410609600000,1],[1410955200000,1],[1411992000000,1],[1412164800000,1],[1413115200000,1],[1413288000000,1],[1413547200000,2],[1413806400000,1],[1413979200000,1],[1414411200000,1],[1414584000000,1],[1415102400000,2],[1415188800000,1],[1415361600000,1],[1415620800000,2],[1415880000000,1],[1416225600000,1],[1416312000000,1],[1416398400000,4],[1416484800000,1],[1416571200000,1],[1416657600000,1],[1416744000000,1],[1416916800000,1],[1417003200000,1],[1417089600000,1],[1417953600000,1],[1418385600000,1],[1419163200000,1],[1419249600000,1],[1419336000000,2],[1419422400000,1],[1419508800000,1],[1419854400000,2],[1419940800000,1],[1420027200000,1],[1420200000000,1],[1421323200000,1],[1421668800000,1],[1421841600000,1],[1422100800000,1],[1422187200000,1],[1422446400000,1],[1422878400000,1],[1423569600000,1],[1423828800000,1],[1424347200000,2],[1424433600000,1],[1424692800000,1],[1424779200000,2],[1424952000000,1],[1425124800000,1],[1425211200000,1],[1425297600000,1],[1425384000000,1],[1425470400000,1],[1425556800000,1],[1425902400000,2],[1426075200000,1],[1426248000000,1],[1426420800000,1],[1426507200000,1],[1426680000000,3],[1427198400000,1],[1427371200000,1],[1427457600000,1],[1427716800000,1],[1427889600000,2],[1428148800000,1],[1428235200000,1],[1428580800000,1],[1428667200000,1],[1428753600000,1],[1429617600000,1],[1430481600000,1],[1430654400000,1],[1431172800000,2],[1431604800000,1],[1431777600000,3],[1432296000000,1],[1432468800000,1],[1432555200000,1],[1432987200000,2],[1433073600000,1],[1433160000000,1],[1433764800000,1],[1433937600000,2],[1434369600000,2],[1434456000000,1],[1434628800000,1],[1434888000000,1],[1435060800000,3],[1435406400000,1],[1435752000000,2],[1436875200000,1],[1437998400000,1],[1438084800000,1],[1438257600000,1],[1438344000000,1],[1438689600000,1],[1438776000000,3],[1438862400000,1],[1439035200000,1],[1439208000000,1],[1439467200000,1],[1439553600000,1],[1439812800000,1],[1440158400000,1],[1440244800000,1],[1440849600000,1],[1441022400000,2],[1441195200000,1],[1441281600000,1],[1441368000000,2],[1441713600000,1],[1441800000000,1],[1442059200000,1],[1442318400000,2],[1442491200000,1],[1442923200000,1],[1443182400000,1],[1443268800000,1],[1443355200000,1]]},{"name":"Political Party 2","type":"column","data":[[1373112000000,1],[1373198400000,1],[1373457600000,1],[1373544000000,3],[1373630400000,1],[1373716800000,1],[1373803200000,1],[1374148800000,2],[1374408000000,1],[1374494400000,1],[1374580800000,3],[1374840000000,1],[1375272000000,1],[1375358400000,1],[1375876800000,1],[1376136000000,1],[1376222400000,1],[1376308800000,2],[1376481600000,1],[1376654400000,1],[1377000000000,2],[1377345600000,1],[1377518400000,1],[1377777600000,1],[1378036800000,1],[1378209600000,1],[1378382400000,1],[1378468800000,2],[1378555200000,1],[1378728000000,2],[1379160000000,1],[1379246400000,2],[1379419200000,1],[1379592000000,1],[1379678400000,2],[1379764800000,1],[1379937600000,2],[1380283200000,1],[1380715200000,1],[1380801600000,1],[1380974400000,2],[1381406400000,1],[1381665600000,1],[1381752000000,1],[1381838400000,1],[1381924800000,1],[1382011200000,2],[1382097600000,1],[1382270400000,1],[1382616000000,1],[1382702400000,1],[1383134400000,1],[1383393600000,1],[1383480000000,1],[1383739200000,1],[1383825600000,1],[1384948800000,1],[1385035200000,1],[1385726400000,2],[1385899200000,2],[1385985600000,1],[1386590400000,1],[1386676800000,1],[1387972800000,2],[1388059200000,1],[1388145600000,1],[1388232000000,4],[1388404800000,2],[1388664000000,2],[1389441600000,2],[1389614400000,1],[1389787200000,1],[1389873600000,1],[1390219200000,1],[1390478400000,1],[1390564800000,4],[1390651200000,2],[1390824000000,2],[1390910400000,1],[1390996800000,1],[1391342400000,1],[1391428800000,1],[1391601600000,3],[1391774400000,1],[1391860800000,2],[1392033600000,1],[1392120000000,2],[1392206400000,1],[1392379200000,1],[1392897600000,1],[1392984000000,1],[1393156800000,1],[1393243200000,1],[1393588800000,2],[1393761600000,1],[1393848000000,1],[1394107200000,1],[1394280000000,1],[1394539200000,2],[1394798400000,1],[1395230400000,1],[1395662400000,1],[1396008000000,3],[1396094400000,1],[1396180800000,1],[1396267200000,2],[1396353600000,2],[1396440000000,1],[1396526400000,1],[1396699200000,3],[1396785600000,1],[1397304000000,1],[1397390400000,1],[1397649600000,1],[1397736000000,1],[1397995200000,2],[1398081600000,1],[1398168000000,2],[1398254400000,1],[1398772800000,1],[1398859200000,1],[1399204800000,2],[1399377600000,1],[1399464000000,1],[1399550400000,3],[1399809600000,1],[1399896000000,1],[1400241600000,1],[1400328000000,1],[1400500800000,2],[1400760000000,1],[1400846400000,1],[1401192000000,1],[1401278400000,3],[1401364800000,1],[1401624000000,1],[1401710400000,1],[1401969600000,1],[1402228800000,3],[1402315200000,1],[1402401600000,1],[1403006400000,1],[1403092800000,1],[1403352000000,1],[1403438400000,1],[1403524800000,1],[1403611200000,1],[1403697600000,3],[1404043200000,1],[1404216000000,1],[1404302400000,2],[1404734400000,1],[1404907200000,4],[1404993600000,2],[1405339200000,1],[1405512000000,1],[1405598400000,1],[1405684800000,1],[1405771200000,1],[1406030400000,1],[1406462400000,2],[1406548800000,1],[1406721600000,1],[1406894400000,4],[1407067200000,1],[1407412800000,1],[1407499200000,1],[1407844800000,1],[1408363200000,1],[1408881600000,2],[1408968000000,1],[1409054400000,1],[1409140800000,1],[1409313600000,1],[1409832000000,1],[1409918400000,1],[1410177600000,1],[1410264000000,1],[1410350400000,2],[1410523200000,1],[1410696000000,1],[1410782400000,1],[1410955200000,2],[1411387200000,1],[1411905600000,1],[1411992000000,1],[1412164800000,1],[1412596800000,1],[1412769600000,2],[1413115200000,1],[1413374400000,1],[1413460800000,1],[1413633600000,1],[1413720000000,1],[1413979200000,2],[1414065600000,1],[1414324800000,1],[1414670400000,1],[1414929600000,1],[1415016000000,1],[1415188800000,1],[1415361600000,1],[1415534400000,1],[1415620800000,1],[1415880000000,1],[1415966400000,1],[1416139200000,1],[1416571200000,1],[1416657600000,1],[1416916800000,1],[1417262400000,1],[1417867200000,1],[1417953600000,3],[1418731200000,1],[1418990400000,1],[1419076800000,1],[1419249600000,1],[1419508800000,1],[1419768000000,2],[1419940800000,2],[1420027200000,1],[1420113600000,2],[1420286400000,1],[1420372800000,1],[1420545600000,2],[1420977600000,1],[1421150400000,1],[1421409600000,1],[1421582400000,1],[1421668800000,1],[1421755200000,1],[1422014400000,1],[1422100800000,1],[1422273600000,1],[1422705600000,1],[1422878400000,1],[1422964800000,1],[1423051200000,1],[1423310400000,1],[1423396800000,2],[1423483200000,1],[1423569600000,1],[1423656000000,1],[1423828800000,2],[1423915200000,1],[1424088000000,1],[1424347200000,2],[1424692800000,1],[1424865600000,4],[1425038400000,1],[1425470400000,1],[1425643200000,1],[1425729600000,1],[1425902400000,1],[1426248000000,1],[1426334400000,1],[1426766400000,1],[1427025600000,1],[1427112000000,2],[1427284800000,1],[1427457600000,1],[1428494400000,1],[1428667200000,1],[1428840000000,1],[1428926400000,1],[1429185600000,1],[1429272000000,1],[1429704000000,1],[1429790400000,1],[1429876800000,1],[1429963200000,1],[1430136000000,2],[1430481600000,2],[1430568000000,1],[1430740800000,2],[1430827200000,1],[1431000000000,1],[1431172800000,2],[1431345600000,1],[1431518400000,1],[1431604800000,1],[1431864000000,1],[1432296000000,1],[1432468800000,1],[1432900800000,1],[1432987200000,1],[1433160000000,1],[1433592000000,1],[1433764800000,1],[1433851200000,1],[1434110400000,1],[1434196800000,2],[1434283200000,2],[1434456000000,1],[1434542400000,1],[1434974400000,1],[1435060800000,2],[1435579200000,1],[1435752000000,1],[1435838400000,2],[1435924800000,1],[1436097600000,2],[1436184000000,2],[1436270400000,1],[1436788800000,1],[1437220800000,1],[1437739200000,1],[1437998400000,1],[1438084800000,2],[1438257600000,2],[1438344000000,4],[1438516800000,1],[1438689600000,1],[1438948800000,2],[1439380800000,2],[1439726400000,1],[1439812800000,1],[1439985600000,1],[1440331200000,2],[1440417600000,2],[1440504000000,1],[1440676800000,2],[1440849600000,1],[1441195200000,1],[1441281600000,1],[1441368000000,2],[1441454400000,1],[1441540800000,1],[1441800000000,1],[1442491200000,1],[1442664000000,2],[1443009600000,1],[1443268800000,1],[1443441600000,3]]},{"name":"Political Party 3","type":"column","data":[[1372680000000,2],[1373025600000,2],[1373716800000,1],[1373889600000,2],[1374235200000,1],[1374321600000,1],[1374408000000,1],[1374580800000,1],[1374667200000,2],[1374840000000,1],[1374926400000,2],[1375358400000,3],[1375704000000,1],[1375790400000,1],[1375876800000,1],[1375963200000,1],[1376136000000,3],[1376308800000,1],[1376568000000,2],[1376654400000,1],[1376740800000,1],[1376827200000,1],[1377000000000,2],[1377086400000,2],[1377259200000,1],[1377518400000,1],[1377691200000,1],[1377777600000,1],[1377950400000,1],[1378036800000,1],[1378123200000,1],[1378209600000,1],[1378296000000,1],[1378468800000,1],[1378555200000,1],[1378900800000,2],[1379678400000,4],[1379937600000,1],[1380024000000,2],[1380110400000,1],[1380196800000,1],[1380456000000,1],[1380542400000,3],[1380628800000,1],[1380974400000,1],[1381233600000,1],[1381406400000,2],[1381579200000,1],[1381752000000,1],[1381924800000,1],[1382011200000,2],[1382184000000,1],[1382270400000,1],[1382356800000,2],[1382702400000,2],[1382788800000,2],[1382875200000,2],[1383134400000,1],[1383220800000,1],[1383480000000,2],[1383652800000,2],[1383998400000,1],[1384344000000,1],[1384430400000,1],[1384516800000,2],[1385121600000,1],[1385208000000,2],[1385294400000,1],[1385553600000,1],[1385640000000,1],[1385726400000,1],[1385812800000,2],[1386331200000,1],[1386417600000,1],[1386504000000,1],[1386590400000,1],[1387022400000,1],[1387108800000,1],[1387281600000,1],[1387368000000,2],[1387886400000,1],[1388318400000,1],[1388404800000,1],[1388491200000,1],[1388577600000,1],[1388664000000,1],[1388836800000,2],[1388923200000,1],[1389009600000,3],[1389096000000,2],[1389182400000,1],[1389268800000,1],[1389355200000,1],[1389441600000,1],[1389873600000,2],[1389960000000,1],[1390046400000,3],[1390392000000,2],[1390910400000,1],[1390996800000,1],[1391428800000,2],[1391515200000,2],[1391688000000,1],[1391947200000,1],[1392033600000,1],[1392120000000,2],[1392379200000,2],[1392638400000,1],[1392811200000,2],[1392897600000,2],[1393243200000,2],[1393329600000,3],[1393675200000,1],[1393761600000,1],[1393848000000,3],[1394020800000,1],[1394107200000,1],[1394193600000,1],[1394280000000,1],[1394452800000,1],[1394539200000,1],[1394798400000,1],[1394971200000,1],[1395230400000,1],[1395316800000,1],[1395403200000,2],[1395576000000,3],[1395662400000,1],[1396008000000,2],[1396094400000,1],[1396180800000,1],[1396267200000,1],[1396353600000,1],[1396440000000,2],[1396699200000,1],[1397044800000,1],[1397217600000,1],[1397563200000,1],[1397649600000,1],[1397736000000,1],[1397822400000,1],[1397908800000,1],[1398081600000,1],[1398168000000,1],[1398254400000,1],[1398427200000,1],[1398513600000,2],[1398600000000,3],[1398772800000,1],[1398859200000,1],[1398945600000,3],[1399204800000,2],[1399291200000,2],[1399464000000,1],[1399550400000,1],[1399636800000,1],[1399982400000,1],[1400068800000,3],[1400155200000,2],[1400500800000,1],[1401278400000,1],[1401451200000,1],[1401624000000,1],[1401710400000,1],[1401883200000,1],[1401969600000,1],[1402142400000,1],[1402228800000,2],[1402315200000,2],[1402401600000,2],[1402488000000,2],[1402660800000,1],[1402747200000,1],[1403092800000,1],[1403265600000,1],[1403438400000,1],[1403524800000,1],[1403611200000,1],[1403784000000,2],[1403870400000,1],[1403956800000,1],[1404302400000,2],[1404648000000,1],[1404734400000,2],[1404820800000,1],[1404907200000,1],[1404993600000,2],[1405252800000,1],[1405512000000,1],[1405771200000,1],[1405944000000,2],[1406116800000,1],[1406203200000,2],[1406289600000,1],[1406462400000,3],[1406548800000,1],[1406721600000,1],[1406980800000,1],[1407153600000,1],[1407499200000,1],[1407585600000,2],[1407844800000,2],[1407931200000,1],[1408017600000,2],[1408104000000,4],[1408190400000,1],[1408276800000,2],[1408449600000,1],[1408622400000,1],[1408708800000,1],[1408795200000,3],[1408968000000,3],[1409054400000,1],[1409140800000,1],[1409227200000,1],[1409313600000,1],[1409400000000,1],[1410091200000,2],[1410350400000,1],[1410436800000,1],[1410523200000,1],[1410868800000,2],[1410955200000,1],[1411041600000,1],[1411128000000,2],[1411387200000,1],[1411473600000,1],[1411560000000,1],[1411646400000,2],[1411819200000,1],[1411905600000,1],[1412164800000,2],[1412337600000,2],[1412596800000,1],[1412683200000,2],[1412769600000,1],[1412856000000,1],[1412942400000,1],[1413115200000,1],[1413201600000,1],[1413288000000,1],[1413374400000,1],[1413460800000,2],[1413547200000,1],[1413720000000,1],[1413806400000,1],[1413892800000,1],[1413979200000,1],[1414238400000,1],[1414411200000,2],[1414670400000,1],[1414756800000,1],[1414843200000,1],[1415188800000,1],[1415361600000,1],[1415534400000,1],[1415707200000,1],[1415793600000,2],[1415880000000,1],[1415966400000,1],[1416052800000,3],[1416139200000,1],[1416225600000,1],[1416312000000,1],[1416744000000,1],[1416830400000,1],[1416916800000,2],[1417003200000,3],[1417262400000,1],[1417348800000,1],[1417521600000,1],[1417608000000,1],[1417694400000,1],[1417780800000,1],[1417867200000,1],[1418126400000,5],[1418299200000,1],[1418731200000,1],[1418990400000,1],[1419076800000,1],[1419163200000,1],[1419422400000,1],[1419681600000,2],[1419854400000,1],[1420200000000,1],[1420286400000,1],[1420372800000,1],[1420545600000,2],[1420632000000,2],[1420718400000,1],[1420804800000,1],[1420891200000,1],[1420977600000,2],[1421150400000,1],[1421409600000,1],[1421496000000,1],[1421755200000,1],[1421928000000,2],[1422014400000,1],[1422187200000,1],[1422964800000,1],[1423396800000,2],[1423569600000,1],[1423742400000,1],[1424001600000,2],[1424088000000,1],[1424174400000,1],[1424347200000,1],[1424433600000,2],[1424520000000,1],[1424606400000,1],[1424692800000,2],[1424779200000,1],[1424865600000,1],[1424952000000,1],[1425211200000,2],[1425297600000,1],[1425384000000,1],[1425556800000,2],[1425729600000,2],[1425902400000,1],[1425988800000,1],[1426161600000,2],[1426248000000,1],[1426334400000,1],[1426420800000,1],[1426507200000,2],[1426593600000,1],[1426680000000,3],[1426766400000,1],[1427284800000,2],[1427371200000,1],[1427630400000,1],[1428062400000,2],[1428235200000,1],[1428408000000,1],[1428494400000,1],[1428580800000,1],[1429099200000,1],[1429185600000,1],[1429272000000,2],[1429531200000,1],[1429617600000,1],[1429790400000,1],[1429876800000,1],[1430049600000,1],[1430136000000,1],[1430222400000,1],[1430308800000,2],[1430568000000,3],[1430740800000,3],[1430827200000,3],[1431000000000,2],[1431086400000,1],[1431172800000,1],[1431259200000,1],[1431518400000,2],[1431604800000,1],[1431864000000,1],[1431950400000,2],[1432036800000,1],[1432209600000,1],[1432296000000,1],[1432468800000,1],[1432555200000,1],[1432728000000,1],[1432900800000,2],[1432987200000,1],[1433073600000,1],[1433246400000,1],[1433332800000,1],[1433505600000,2],[1433764800000,1],[1434110400000,1],[1434283200000,2],[1434369600000,1],[1434456000000,2],[1434542400000,1],[1434801600000,2],[1434888000000,1],[1434974400000,2],[1435147200000,1],[1435579200000,3],[1435752000000,1],[1436356800000,3],[1436443200000,2],[1436529600000,2],[1436702400000,1],[1436875200000,3],[1437048000000,1],[1437134400000,3],[1437393600000,2],[1437739200000,1],[1437825600000,1],[1437912000000,1],[1437998400000,2],[1438084800000,2],[1438257600000,1],[1438344000000,3],[1438689600000,2],[1438776000000,1],[1438862400000,1],[1438948800000,2],[1439035200000,1],[1439121600000,1],[1439208000000,3],[1439294400000,1],[1439380800000,2],[1439467200000,1],[1439899200000,1],[1439985600000,2],[1440072000000,1],[1440244800000,1],[1440331200000,1],[1440590400000,2],[1440763200000,1],[1441281600000,2],[1441368000000,3],[1441540800000,1],[1441627200000,1],[1441713600000,2],[1442059200000,1],[1442145600000,4],[1442232000000,1],[1442491200000,1],[1442577600000,1],[1442750400000,2],[1442836800000,2],[1443009600000,1],[1443182400000,1],[1443355200000,2],[1443441600000,3],[1443528000000,1]]},{"name":"Political Party 4","type":"column","data":[[1372680000000,1],[1372939200000,1],[1373198400000,1],[1373371200000,1],[1373457600000,1],[1374062400000,1],[1375272000000,1],[1375444800000,1],[1376049600000,1],[1376481600000,1],[1376654400000,1],[1377172800000,2],[1377259200000,1],[1380024000000,1],[1380456000000,1],[1381665600000,1],[1382616000000,1],[1382875200000,2],[1383048000000,1],[1384257600000,1],[1385035200000,1],[1385294400000,1],[1386936000000,1],[1387627200000,1],[1387800000000,1],[1388404800000,1],[1390651200000,1],[1391169600000,1],[1392033600000,1],[1392120000000,1],[1392552000000,1],[1393588800000,1],[1394712000000,1],[1394884800000,1],[1394971200000,1],[1396008000000,1],[1396612800000,1],[1396958400000,1],[1397044800000,1],[1397476800000,1],[1397563200000,1],[1397995200000,1],[1398168000000,1],[1398427200000,1],[1399550400000,1],[1400241600000,1],[1401019200000,2],[1401537600000,1],[1402228800000,1],[1403265600000,1],[1403438400000,1],[1403524800000,2],[1403697600000,1],[1403784000000,1],[1404129600000,1],[1405080000000,1],[1405857600000,1],[1406376000000,1],[1407153600000,1],[1407240000000,1],[1407672000000,1],[1407931200000,1],[1409140800000,1],[1409918400000,1],[1410091200000,1],[1410868800000,2],[1410955200000,1],[1411041600000,1],[1411732800000,1],[1411819200000,1],[1411905600000,1],[1412337600000,1],[1412510400000,1],[1412683200000,1],[1413547200000,1],[1415448000000,1],[1416312000000,1],[1416571200000,1],[1416744000000,1],[1417953600000,1],[1418040000000,1],[1418385600000,1],[1418817600000,1],[1418904000000,1],[1418990400000,1],[1420113600000,1],[1420545600000,1],[1421064000000,1],[1421236800000,1],[1421755200000,1],[1422014400000,1],[1422360000000,1],[1422792000000,1],[1423137600000,1],[1423656000000,1],[1424779200000,1],[1425556800000,1],[1426680000000,1],[1427284800000,1],[1428753600000,1],[1429185600000,1],[1430136000000,1],[1430395200000,1],[1431604800000,1],[1431950400000,2],[1432036800000,1],[1432468800000,1],[1432555200000,1],[1432728000000,1],[1432814400000,1],[1433160000000,1],[1433764800000,1],[1433937600000,1],[1434024000000,1],[1435147200000,1],[1435406400000,1],[1435752000000,1],[1436011200000,1],[1436097600000,1],[1436270400000,1],[1436356800000,1],[1436529600000,1],[1436961600000,1],[1437393600000,1],[1437566400000,2],[1437998400000,1],[1438862400000,1],[1439035200000,1],[1439380800000,1],[1439812800000,2],[1440072000000,1],[1440331200000,1],[1442577600000,1],[1442750400000,1]]},{"name":"bounds","type":"column","showInLegend":false,"data":[[1372680000000,0],[1443528000000,0]]}];
}


})();