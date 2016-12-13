jQuery('#vmap').vectorMap({
    // map: 'world_en',
    // backgroundColor: null,
    // color: '#ffffff',
    // hoverOpacity: 0.7,
    // selectedColor: '#666666',
    // enableZoom: true,
    // showTooltip: true,
    // values: sample_data,
    // scaleColors: ['#C8EEFF', '#006491'],
    // normalizeFunction: 'polynomial',
    map: 'world_en',
    backgroundColor: '#a5bfdd',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: '#f4f3f0',
    enableZoom: true,
    hoverColor: '#c9dfaf',
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#c9dfaf',
    selectedRegions: null,
    showTooltip: true,

    onRegionClick: function(element, code, region)
{


    var message = 'You clicked "'
        + region
        + '" which has the code: '
        + code.toUpperCase();


    alert(message);
}
});