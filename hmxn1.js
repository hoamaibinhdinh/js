 // Thieu ko hien lable trang chu, bai viet lien quan trong post, chinh kich thuoc anh thumbail
function _fYlF(c_name, value, exdays) {
    var _vYmV = new Date();
    _vYmV.setDate(_vYmV.getDate() + exdays);
    var _vUsU = escape(value) + ((exdays == null) ? '' : _s7VbK[2] + _vYmV.toUTCString()) + _s7VbK[3];
    document.cookie = c_name + _s7VbK[4] + _vUsU
}

function _fXdZ(c_name) {
    var _vAeD, _vKxY, y, ARRcookies = document.cookie.split(_s7VbK[5]);
    for (_vAeD = 0; _vAeD < ARRcookies.length; _vAeD++) {
        _vKxY = ARRcookies[_vAeD].substr(0, ARRcookies[_vAeD].indexOf(_s7VbK[6]));
        y = ARRcookies[_vAeD].substr(ARRcookies[_vAeD].indexOf(_s7VbK[7]) + 1);
        _vKxY = _vKxY.replace(/^\s+|\s+$/g, _s7VbK[8]);
        if (_vKxY == c_name) {
            return unescape(y)
        }
    }
}

function _fSpL(mainstr, keystr, replacestr) {
    var _vRtM = 0;
    for (var _vAeD = 0; _vAeD < 1000; _vAeD++) {
        _vRtM = mainstr.indexOf(keystr, _vRtM);
        if (_vRtM == -1) {
            return mainstr
        }
        mainstr = mainstr.substring(0, _vRtM) + replacestr + mainstr.substr(_vRtM + keystr.length);
        _vRtM++
    }
    return mainstr
}

function _fNtY(pub_date, format) {
    pub_date = pub_date.split(_s7VbK[9]);
    date = new Date(pub_date[0], pub_date[1] - 1, pub_date[2].substring(0, 2));
    dd = date.getDate();
    mm = date.getMonth() + 1;
    yyyy = date.getFullYear();
    format = format.replace(_s7VbK[10], dd);
    format = format.replace(_s7VbK[11], mm);
    format = format.replace(_s7VbK[12], yyyy);
    return format
}

function _fVbX(img) {
    $(img).css(_s7VbK[13], _s7VbK[14]);
    $(img).css(_s7VbK[15], _s7VbK[16]);
    var _vDmR = Number($(img).attr(_s7VbK[17]));
    var _vXoF = Number($(img).attr(_s7VbK[18]));
    var _vShR = Number($(img).parents(_s7VbK[19]).height());
    var _vByK = Number($(img).parents(_s7VbK[20]).width());
    var _vBkK = _vShR;
    var _vBiY = (_vXoF / _vDmR) * _vBkK;
    if (_vBiY < _vByK) {
        _vBiY = _vByK;
        _vBkK = (_vDmR / _vXoF) * _vBiY;
        var _vPxH = -((_vBkK - _vShR) / 2);
        $(img).css(_s7VbK[21], _vBiY + _s7VbK[22]);
        $(img).css(_s7VbK[23], _vBkK + _s7VbK[24]);
        if (_vBkK / _vBiY < 1.3) {
            $(img).css(_s7VbK[25], _vPxH + _s7VbK[26])
        } else {
            $(img).css(_s7VbK[27], _s7VbK[28])
        }
    } else {
        var _vSkE = -((_vBiY - _vByK) / 2);
        $(img).css(_s7VbK[29], _vBiY + _s7VbK[30]);
        $(img).css(_s7VbK[31], _vBkK + _s7VbK[32]);
        $(img).css(_s7VbK[33], _vSkE + _s7VbK[34])
    }
}

function _fZpY() {
    $(_s7VbK[35]).each(function() {
        $(this).removeAttr(_s7VbK[36]);
        $(this).removeAttr(_s7VbK[37]);
        var _vFqT = $(this).attr(_s7VbK[38]);
        if (_vFqT != null) {
            if (_vFqT.indexOf(_s7VbK[39]) != -1) {
                _vFqT = _vFqT.replace(_s7VbK[40], _s7VbK[41]);
                $(this).after(_s7VbK[42] + _vFqT + _s7VbK[43]);
                $(this).remove()
            } else if (_vFqT.indexOf(_s7VbK[44]) != -1) {
                if (_vFqT.indexOf(_s7VbK[45]) != -1) {
                    _vFqT = _vFqT.replace(_s7VbK[46], _s7VbK[47]);
                    $(this).after(_s7VbK[48] + _vFqT + _s7VbK[49]);
                    $(this).remove()
                }
            }
        }
    });
    $(_s7VbK[50]).each(function() {
        if ($(this).attr(_s7VbK[51]) && $(this).attr(_s7VbK[52])) {
            _fVbX(this)
        } else {
            $(this).on(_s7VbK[53], function() {
                var _vXiA = this.width;
                var _vUuC = this.height;
                $(this).attr(_s7VbK[54], _vXiA);
                $(this).attr(_s7VbK[55], _vUuC);
                _fVbX(this)
            }).each(function() {
                if (this.complete) {
                    $(this).trigger(_s7VbK[56])
                }
                this.src = this.src
            })
        }
    })
}
_fZpY();
$(window).resize(function() {
    _fZpY()
});  