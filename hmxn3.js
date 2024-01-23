// thieu ko hien lable trang chu, catelogy, subtile, publish, content, sumary, json
function _fXvG(json) {
    var _vXbK = new Object();
    var _vLlI = /<\S[^>]*>/g;
    _vXbK.id = json.feed.id.$t;
    _vNqX = _s7VbK[76];
    _vRtM = _vXbK.id.indexOf(_vNqX);
    _vXbK.id = _vXbK.id.substring(_vRtM + _vNqX.length);
    _vXbK.id = _vXbK.id.replace(_s7VbK[77], _s7VbK[78]);
    _vXbK.cate = new Array();
    if (_s7VbK[79] in json.feed) {
        for (_vAeD = 0; _vAeD < json.feed.category.length; _vAeD++) {
            _vXbK.cate[_vAeD] = json.feed.category[_vAeD].term
        }
    }
    _vXbK.title = _s7VbK[80];
    if (_s7VbK[81] in json.feed) {
        _vXbK.title = json.feed.title.$t
    }
    _vXbK.subtitle = _s7VbK[82];
    if (_s7VbK[83] in json.feed) {
        _vXbK.subtitle = json.feed.subtitle.$t
    }
    _vXbK.admin = new Object();
    _vXbK.admin.name = _s7VbK[84];
    _vXbK.admin.uri = _s7VbK[85];
    _vXbK.admin.avatar = _s7VbK[86];
    if (_s7VbK[87] in json.feed.author[0]) {
        _vXbK.admin.name = json.feed.author[0].name.$t
    }
    if (_s7VbK[88] in json.feed.author[0]) {
        _vXbK.admin.uri = json.feed.author[0].uri.$t
    }
    if (_s7VbK[89] in json.feed.author[0]) {
        if (json.feed.author[0].gd$image.src != _s7VbK[90]) {
            _vXbK.admin.avatar = json.feed.author[0].gd$image.src
        }
    }
    _vXbK.total_entry = Number(json.feed.openSearch$totalResults.$t);
    _vXbK.start_index = Number(json.feed.openSearch$startIndex.$t);
    _vXbK.item_per_page = Number(json.feed.openSearch$itemsPerPage.$t);
    _vXbK.entry_number = 0;
    if (_s7VbK[91] in json.feed) {
        _vXbK.entry_number = json.feed.entry.length
    }
    _vXbK.entry = new Array();
    for (_vAeD = 0; _vAeD < _vXbK.entry_number; _vAeD++) {
        _vXbK.entry[_vAeD] = new Object();
        temp = new Object();
        entry = json.feed.entry[_vAeD];
        temp.id = entry.id.$t;
        _vNqX = _s7VbK[92];
        _vRtM = temp.id.indexOf(_vNqX);
        temp.id = temp.id.substring(_vRtM + _vNqX.length);
        temp.published = _s7VbK[93];
        if (_s7VbK[94] in entry) {
            temp.published = entry.published.$t
        }
        temp.cate = new Array();
        if (_s7VbK[95] in entry) {
            for (_vKlL = 0; _vKlL < entry.category.length; _vKlL++) {
                temp.cate[_vKlL] = entry.category[_vKlL].term
            }
        }
        temp.title = _s7VbK[96];
        if (_s7VbK[97] in entry) {
            temp.title = entry.title.$t
        }
        temp.content = _s7VbK[98];
        if (_s7VbK[99] in entry) {
            temp.content = entry.content.$t
        }
        temp.summary = _s7VbK[100];
        if (_s7VbK[101] in entry) {
            temp.summary = entry.summary.$t
        }
        if (temp.summary == _s7VbK[102]) {
            temp.summary = temp.content.replace(_vLlI, _s7VbK[103])
        }
        if (temp.content == _s7VbK[104]) {
            temp.content = temp.summary
        }
        temp.link = _s7VbK[105];
        temp.reply_label = _s7VbK[106];
        if (_s7VbK[107] in entry) {
            for (_vKlL = 0; _vKlL < entry.link.length; _vKlL++) {
                if (entry.link[_vKlL].rel == _s7VbK[108]) {
                    temp.link = entry.link[_vKlL].href
                }
                if (entry.link[_vKlL].rel == _s7VbK[109]) {
                    temp.reply_label = entry.link[_vKlL].title
                }
            }
        }
        temp.author = new Object();
        temp.author.name = _s7VbK[110];
        temp.author.uri = _s7VbK[111];
        temp.author.avatar = _s7VbK[112];
        a0 = entry.author[0];
        if (_s7VbK[113] in a0) {
            temp.author.name = a0.name.$t
        }
        if (_s7VbK[114] in a0) {
            temp.author.uri = a0.uri.$t
        }
        if (_s7VbK[115] in a0) {
            if (a0.gd$image.src != _s7VbK[116]) {
                temp.author.avatar = a0.gd$image.src
            }
        }
        temp.thumbnail = _s7VbK[117];
        if (_s7VbK[118] in entry) {
            temp.thumbnail = entry.media$thumbnail.url
        }
        temp.reply_number = 0;
        if (_s7VbK[119] in entry) {
            temp.reply_number = Number(entry.thr$total.$t)
        }
        temp.reply_label = temp.reply_label.replace(temp.reply_number + _s7VbK[120], _s7VbK[121]);
        temp.reply_to = _s7VbK[122];
        temp.reply_json = _s7VbK[123];
        temp.reply_title = _s7VbK[124];
        if (_s7VbK[125] in entry) {
            temp.reply_to = entry[_s7VbK[126]].href;
            temp.reply_json = entry[_s7VbK[127]].source;
            temp.reply_json = temp.reply_json.replace(_s7VbK[128], _s7VbK[129]);
            temp.reply_json = temp.reply_json + _s7VbK[130]
        }
        temp.pid = _s7VbK[131];
        if (_s7VbK[132] in entry) {
            for (_vKlL = 0; _vKlL < entry.gd$extendedProperty.length; _vKlL++) {
                if (entry.gd$extendedProperty[_vKlL].name == _s7VbK[133]) {
                    temp.pid = entry.gd$extendedProperty[_vKlL].value
                }
            }
        }
        temp.pid = temp.pid.replace(_s7VbK[134], _s7VbK[135]);
        _vXbK.entry[_vAeD] = temp
    }
    return _vXbK
}  