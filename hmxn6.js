// bai viet lien quan icon meta
$(_s7VbK[441]).each(function() {
    var _vJyX = $(this).text();
    var _vApI = 3;
    $.get(feed_url + _s7VbK[442] + encodeURIComponent(_vJyX) + _s7VbK[443], function(json) {
        var _vHeF = _fXvG(json);
        var _vMwN = _vHeF.total_entry;
        var _vRxM = Math.floor(Math.random() * (_vMwN - _vApI) + 1);
        if (_vRxM < 1) {
            _vRxM = 1
        }
        $.get(feed_url + _s7VbK[444] + encodeURIComponent(_vJyX) + _s7VbK[445] + (_vApI + 1) + _s7VbK[446] + _vRxM + _s7VbK[447], function(json) {
            var _vOlB = _fXvG(json);
            var _vJvE = _s7VbK[448];
            var _vUgU = $(_s7VbK[449]).text();
            var _vKhL = 0;
            if (_vOlB.entry.length < 2) {
                $(_s7VbK[450]).remove();
                $(_s7VbK[451]).css(_s7VbK[452], _s7VbK[453]);
                $(_s7VbK[454]).css(_s7VbK[455], _s7VbK[456]);
                $(_s7VbK[457]).css(_s7VbK[458], _s7VbK[459])
            }
            for (var _vAeD = 0; _vAeD < _vOlB.entry.length && _vAeD < _vApI; _vAeD++) {
                var _vWcO = _vOlB.entry[_vAeD];
                if (_vWcO.id == _vUgU) {
                    _vApI++;
                    continue
                }
                thumbnail = _fOxV(_vWcO.content);
                if (thumbnail == _s7VbK[460]) {
                    thumbnail = _vWcO.thumbnail
                }
                if (thumbnail == _s7VbK[461]) {
                    thumbnail = DEFAULT_THUMBNAIL
                }
                if (_vWcO.summary.length > SUMMARY_LEN) {
                    _vWcO.summary = _vWcO.summary.substring(0, SUMMARY_LEN) + _s7VbK[462]
                }
                _vJvE += _s7VbK[463] + _vKhL;
                if (_vKhL == 0) {
                    _vJvE += _s7VbK[464]
                } else {
                    _vJvE += _s7VbK[465]
                }
                _vJvE += _s7VbK[466];
                _vJvE += _s7VbK[467] + _vWcO.link + _s7VbK[468] + thumbnail + _s7VbK[469];
                var _vSyM = _s7VbK[470] + _vWcO.link + _s7VbK[471] + _vWcO.reply_number + _s7VbK[472] + _vWcO.link + _s7VbK[473] + _fNtY(_vWcO.published, DAY_FORMAT) + _s7VbK[474];
                _vJvE += _s7VbK[475] + _vSyM + _s7VbK[476];
                _vJvE += _s7VbK[477] + _vWcO.link + _s7VbK[478] + _vWcO.title + _s7VbK[479];
                _vJvE += _s7VbK[480] + _vSyM + _s7VbK[481];
                _vJvE += _s7VbK[482] + _vWcO.summary + _s7VbK[483];
                _vJvE += _s7VbK[484] + _vSyM + _s7VbK[485];
                _vJvE += _s7VbK[486];
                _vKhL++
            }
            $(_s7VbK[487]).html(_vJvE);
            $(_s7VbK[488]).removeClass(_s7VbK[489]);
            _fZpY()
        }, _s7VbK[490])
    }, _s7VbK[491])
});   