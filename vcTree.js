$(function () {
    var searchTimeout = false;
    $('#searchTree').keyup(function () {
        if (searchTimeout) { clearTimeout(searchTimeout); }
        searchTimeout = setTimeout(function () {
            var v = $('#searchTree').val();
            $('#jstree_div').jstree(true).search(v);
        }, 250);
    });

    $('#jstree_div').jstree({
        'core': {
            "themes": { "stripes": true, "responsive":true},
            'data': {
                'url': function (node) {
                    return node.id === '#' ?
                        urlRoot + 'GesCatalogue/GetTreeDatas' :
                        urlRoot + 'GesCatalogue/GetTreeDatas';
                },
                'data': function (node) {
                    return { 'id': node.id };
                }
            }
        },
        "plugins": ["search", "wholerow"]
    });
});
