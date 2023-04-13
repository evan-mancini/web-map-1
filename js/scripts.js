mapboxgl.accessToken = 'pk.eyJ1IjoiZXZhbm1hbmNpbmkiLCJhIjoiY2xnNXE5d2NlMDJxazNxcDhyc2g1eGo2eCJ9.9FsLDvuMxvT0C4cWbIsQAw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [-73.82171609019126, 40.71443461532266],
    zoom: 10
})

const libraies = [
    {
        "name": "Rosedale",
        "Longitude": -73.739488,
        "Latitude": 40.660152,
        "long_lat": "-73.739488, 40.660152"
    },
    {
        "name": "Bayside",
        "Longitude": -73.768588,
        "Latitude": 40.760363,
        "long_lat": "-73.768588, 40.760363"
    },
    {
        "name": "Central Library- The Archives",
        "Longitude": -73.795295,
        "Latitude": 40.707865,
        "long_lat": "-73.795295, 40.707865"
    },
    {
        "name": "Hollis",
        "Longitude": -73.762191,
        "Latitude": 40.719914,
        "long_lat": "-73.762191, 40.719914"
    },
    {
        "name": "Douglaston/Little Neck",
        "Longitude": -73.738088,
        "Latitude": 40.76795,
        "long_lat": "-73.738088, 40.76795"
    },
    {
        "name": "Queensboro Hill",
        "Longitude": -73.825526,
        "Latitude": 40.743081,
        "long_lat": "-73.825526, 40.743081"
    },
    {
        "name": "Howard Beach",
        "Longitude": -73.841928,
        "Latitude": 40.664069,
        "long_lat": "-73.841928, 40.664069"
    },
    {
        "name": "South Jamaica",
        "Longitude": -73.790734,
        "Latitude": 40.695879,
        "long_lat": "-73.790734, 40.695879"
    },
    {
        "name": "Long Island City",
        "Longitude": -73.938771,
        "Latitude": 40.757826,
        "long_lat": "-73.938771, 40.757826"
    },
    {
        "name": "Elmhurst",
        "Longitude": -73.877382,
        "Latitude": 40.738498,
        "long_lat": "-73.877382, 40.738498"
    },
    {
        "name": "McGoldrick",
        "Longitude": -73.809754,
        "Latitude": 40.763998,
        "long_lat": "-73.809754, 40.763998"
    },
    {
        "name": "Bellerose",
        "Longitude": -73.717266,
        "Latitude": 40.735403,
        "long_lat": "-73.717266, 40.735403"
    },
    {
        "name": "Far Rockaway",
        "Longitude": -73.752641,
        "Latitude": 40.604487,
        "long_lat": "-73.752641, 40.604487"
    },
    {
        "name": "Windsor Park",
        "Longitude": -73.755509,
        "Latitude": 40.734936,
        "long_lat": "-73.755509, 40.734936"
    },
    {
        "name": "Ozone Park",
        "Longitude": -73.847111,
        "Latitude": 40.681283,
        "long_lat": "-73.847111, 40.681283"
    },
    {
        "name": "Lefrak City",
        "Longitude": -73.861173,
        "Latitude": 40.738027,
        "long_lat": "-73.861173, 40.738027"
    },
    {
        "name": "Bay Terrace",
        "Longitude": -73.777013,
        "Latitude": 40.783103,
        "long_lat": "-73.777013, 40.783103"
    },
    {
        "name": "North Forest Park",
        "Longitude": -73.853662,
        "Latitude": 40.710913,
        "long_lat": "-73.853662, 40.710913"
    },
    {
        "name": "Forest Hills",
        "Longitude": -73.843378,
        "Latitude": 40.721777,
        "long_lat": "-73.843378, 40.721777"
    },
    {
        "name": "Laurelton",
        "Longitude": -73.74514,
        "Latitude": 40.677059,
        "long_lat": "-73.74514, 40.677059"
    },
    {
        "name": "Mitchell-Linden",
        "Longitude": -73.826582,
        "Latitude": 40.771345,
        "long_lat": "-73.826582, 40.771345"
    },
    {
        "name": "Woodside",
        "Longitude": -73.90982,
        "Latitude": 40.745524,
        "long_lat": "-73.90982, 40.745524"
    },
    {
        "name": "South Ozone Park",
        "Longitude": -73.809585,
        "Latitude": 40.675084,
        "long_lat": "-73.809585, 40.675084"
    },
    {
        "name": "Broadway",
        "Longitude": -73.918772,
        "Latitude": 40.758859,
        "long_lat": "-73.918772, 40.758859"
    },
    {
        "name": "Glendale",
        "Longitude": -73.875748,
        "Latitude": 40.703149,
        "long_lat": "-73.875748, 40.703149"
    },
    {
        "name": "Ridgewood",
        "Longitude": -73.902867,
        "Latitude": 40.705193,
        "long_lat": "-73.902867, 40.705193"
    },
    {
        "name": "Woodhaven",
        "Longitude": -73.861812,
        "Latitude": 40.694619,
        "long_lat": "-73.861812, 40.694619"
    },
    {
        "name": "South Hollis",
        "Longitude": -73.753827,
        "Latitude": 40.706755,
        "long_lat": "-73.753827, 40.706755"
    },
    {
        "name": "Steinway",
        "Longitude": -73.909496,
        "Latitude": 40.777105,
        "long_lat": "-73.909496, 40.777105"
    },
    {
        "name": "Sunnyside",
        "Longitude": -73.921797,
        "Latitude": 40.740977,
        "long_lat": "-73.921797, 40.740977"
    },
    {
        "name": "Maspeth",
        "Longitude": -73.893357,
        "Latitude": 40.727126,
        "long_lat": "-73.893357, 40.727126"
    },
    {
        "name": "Hillcrest",
        "Longitude": -73.781902,
        "Latitude": 40.728981,
        "long_lat": "-73.781902, 40.728981"
    },
    {
        "name": "Baisley Park",
        "Longitude": -73.79203,
        "Latitude": 40.680318,
        "long_lat": "-73.79203, 40.680318"
    },
    {
        "name": "Richmond Hill",
        "Longitude": -73.83211,
        "Latitude": 40.701022,
        "long_lat": "-73.83211, 40.701022"
    },
    {
        "name": "Cyber Center",
        "Longitude": -73.795295,
        "Latitude": 40.707865,
        "long_lat": "-73.795295, 40.707865"
    },
    {
        "name": "Jackson Heights",
        "Longitude": -73.885533,
        "Latitude": 40.751319,
        "long_lat": "-73.885533, 40.751319"
    },
    {
        "name": "North Hills",
        "Longitude": -73.731307,
        "Latitude": 40.75942,
        "long_lat": "-73.731307, 40.75942"
    },
    {
        "name": "Lefferts",
        "Longitude": -73.824691,
        "Latitude": 40.687273,
        "long_lat": "-73.824691, 40.687273"
    },
    {
        "name": "Job Information Center",
        "Longitude": -73.795295,
        "Latitude": 40.707865,
        "long_lat": "-73.795295, 40.707865"
    },
    {
        "name": "East Flushing",
        "Longitude": -73.784804,
        "Latitude": 40.757877,
        "long_lat": "-73.784804, 40.757877"
    },
    {
        "name": "Poppenhusen",
        "Longitude": -73.846506,
        "Latitude": 40.785984,
        "long_lat": "-73.846506, 40.785984"
    },
    {
        "name": "East Elmhurst",
        "Longitude": -73.874016,
        "Latitude": 40.76278,
        "long_lat": "-73.874016, 40.76278"
    },
    {
        "name": "Middle Village",
        "Longitude": -73.880885,
        "Latitude": 40.71258,
        "long_lat": "-73.880885, 40.71258"
    },
    {
        "name": "Pomonok",
        "Longitude": -73.809902,
        "Latitude": 40.732272,
        "long_lat": "-73.809902, 40.732272"
    },
    {
        "name": "Rego Park",
        "Longitude": -73.864371,
        "Latitude": 40.726991,
        "long_lat": "-73.864371, 40.726991"
    },
    {
        "name": "Broad Channel",
        "Longitude": -73.820374,
        "Latitude": 40.600838,
        "long_lat": "-73.820374, 40.600838"
    },
    {
        "name": "Seaside",
        "Longitude": -73.837487,
        "Latitude": 40.57971,
        "long_lat": "-73.837487, 40.57971"
    },
    {
        "name": "Auburndale",
        "Longitude": -73.796552,
        "Latitude": 40.773525,
        "long_lat": "-73.796552, 40.773525"
    },
    {
        "name": "Queens Village",
        "Longitude": -73.739299,
        "Latitude": 40.719749,
        "long_lat": "-73.739299, 40.719749"
    },
    {
        "name": "Kew Gardens Hills",
        "Longitude": -73.820989,
        "Latitude": 40.725815,
        "long_lat": "-73.820989, 40.725815"
    },
    {
        "name": "Glen Oaks",
        "Longitude": -73.715036,
        "Latitude": 40.745388,
        "long_lat": "-73.715036, 40.745388"
    },
    {
        "name": "Briarwood",
        "Longitude": -73.819621,
        "Latitude": 40.71014,
        "long_lat": "-73.819621, 40.71014"
    },
    {
        "name": "St. Albans",
        "Longitude": -73.760112,
        "Latitude": 40.692284,
        "long_lat": "-73.760112, 40.692284"
    },
    {
        "name": "Langston Hughes",
        "Longitude": -73.868331,
        "Latitude": 40.757361,
        "long_lat": "-73.868331, 40.757361"
    },
    {
        "name": "Corona",
        "Longitude": -73.862204,
        "Latitude": 40.750871,
        "long_lat": "-73.862204, 40.750871"
    },
    {
        "name": "Astoria",
        "Longitude": -73.928757,
        "Latitude": 40.772173,
        "long_lat": "-73.928757, 40.772173"
    },
    {
        "name": "Peninsula",
        "Longitude": -73.815797,
        "Latitude": 40.5863,
        "long_lat": "-73.815797, 40.5863"
    },
    {
        "name": "Fresh Meadows",
        "Longitude": -73.782521,
        "Latitude": 40.74172,
        "long_lat": "-73.782521, 40.74172"
    },
    {
        "name": "Whitestone",
        "Longitude": -73.810893,
        "Latitude": 40.78864,
        "long_lat": "-73.810893, 40.78864"
    },
    {
        "name": "Cambria Heights",
        "Longitude": -73.74138,
        "Latitude": 40.69554,
        "long_lat": "-73.74138, 40.69554"
    },
    {
        "name": "Court Square",
        "Longitude": -73.94444,
        "Latitude": 40.746845,
        "long_lat": "-73.94444, 40.746845"
    },
    {
        "name": "Rochdale Village",
        "Longitude": -73.770994,
        "Latitude": 40.672568,
        "long_lat": "-73.770994, 40.672568"
    },
    {
        "name": "Flushing",
        "Longitude": -73.829252,
        "Latitude": 40.757784,
        "long_lat": "-73.829252, 40.757784"
    },
    {
        "name": "Central Library",
        "Longitude": -73.795295,
        "Latitude": 40.707865,
        "long_lat": "-73.795295, 40.707865"
    },
    {
        "name": "Arverne",
        "Longitude": -73.784341,
        "Latitude": 40.593066,
        "long_lat": "-73.784341, 40.593066"
    }
]

libraies.forEach(function (branch) {
    const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        `The ${branch['name']} branch has great books.`
    );
    new mapboxgl.Marker({
        color: '#4287f5'
    })
        .setLngLat([branch.Longitude, branch.Latitude])
        .setPopup(popup)
        .addTo(map);
})

$('#fly-to-flushing').on('click', function () {
    map.flyTo({
        center: [-73.82870558422651116, 40.75782292326307]
    })
})

$('#fly-to-jamaica').on('click', function () {
    map.flyTo({
        center: [-73.79508357119535, 40.707741030403916]
    })
})


$('#fly-to-lic').on('click', function () {
    map.flyTo({
        center: [-73.95827868721324, 40.74567761393485]
    })
})