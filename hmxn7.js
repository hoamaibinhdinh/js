// bai dang moi bai dang cu ket qua tim kiem, thieu ko hien bai dang cu bai dang moi 
var _vNeQ = $(_s7VbK[492]).attr(_s7VbK[493]);
var _vGpX = $(_s7VbK[494]).attr(_s7VbK[495]);
var _vXsT = $(_s7VbK[496]).attr(_s7VbK[497]);
var _vMvH = $(_s7VbK[498]).attr(_s7VbK[499]);
var _vKrL = $(_s7VbK[500]).text();
var _vMoI = $(_s7VbK[501]).text();
var _vFmO = $(_s7VbK[502]).text();
var _vInB = $(_s7VbK[503]).text();
var _vFjF = window.location.href;
var _vMtX = 0;
var _vVnB = false;
if (typeof(_vNeQ) !== _s7VbK[504] && _vNeQ) {
    _vNeQ = _vNeQ.replace(_s7VbK[505], _s7VbK[506]);
    _vNeQ = _vNeQ.replace(_s7VbK[507], _s7VbK[508])
}
if (typeof(_vGpX) !== _s7VbK[509] && _vGpX) {
    _vGpX = _vGpX.replace(_s7VbK[510], _s7VbK[511]);
    _vGpX = _vGpX.replace(_s7VbK[512], _s7VbK[513])
}
if (typeof(_vFjF) !== _s7VbK[514] && _vFjF) {
    _vFjF = _vFjF.replace(_s7VbK[515], _s7VbK[516]);
    _vFjF = _vFjF.replace(_s7VbK[517], _s7VbK[518])
}
if (typeof(_vXsT) !== _s7VbK[519] && _vXsT) {
    _vXsT = _vXsT.replace(_s7VbK[520], _s7VbK[521]);
    _vXsT = _vXsT.replace(_s7VbK[522], _s7VbK[523])
}
if ((typeof(_vNeQ) != _s7VbK[524]) && (typeof(_vGpX) != _s7VbK[525]) && (typeof(_vXsT) != _s7VbK[526]) && (typeof(_vFjF) != _s7VbK[527]) && (typeof(_vKrL) != _s7VbK[528])) {
    _vVnB = true
}
if (_vVnB) {
    var _vLlZ = 1;
    if (_vFjF.indexOf(_s7VbK[529]) != -1) {
        _vLlZ = parseInt(_fXgC(_vFjF, _s7VbK[530]))
    }
    if (_vNeQ.indexOf(_s7VbK[531]) != -1) {
        _vMtX = parseInt(_fXgC(_vNeQ, _s7VbK[532]))
    }
    if (_vGpX.indexOf(_s7VbK[533]) != -1) {
        _vMtX = parseInt(_fXgC(_vGpX, _s7VbK[534]))
    }
    if (_vFjF.indexOf(_s7VbK[535]) != -1) {
        _vMtX = parseInt(_fXgC(_vFjF, _s7VbK[536]))
    }
    var _vWvX = $(_s7VbK[537]).length;
    if (_vGpX.indexOf(_s7VbK[538]) != -1 && _vLlZ == 1 && _vWvX < _vMtX) {
        _vMtX = _vWvX
    }
    var _vOeX = _vMtX;
    var _vBaS = 1;
    var _vCnZ = _s7VbK[539];
    var _vUeU = _vLlZ;
    var _vOjO = _vLlZ;
    var _vKbL = _s7VbK[540];
    var _vTdW = _s7VbK[541];

    function _fYzY(xml) {
        var _vRcS = -1;
        $(xml).find(_s7VbK[542]).each(function() {
            _vRcS = 1;
            _vOeX = parseInt($(this).text())
        });
        if (_vRcS == -1) {
            var _vKxY = xml.getElementsByTagName(_s7VbK[543]);
            if (typeof(_vKxY) != _s7VbK[544]) {
                _vOeX = parseInt($(_vKxY).text())
            }
        }
        if (_vMtX == 0) {
            _vBaS = 1
        } else {
            _vBaS = Math.ceil(_vOeX / _vMtX)
        }
        _fBwU(_vLlZ)
    }

    function _fBwU(_vRtM) {
        _vRtM--;
        _vCnZ = _s7VbK[545];
        for (var _vAeD = 0; _vAeD < _vBaS; _vAeD++) {
            if ((_vAeD < 3) || (_vAeD >= _vBaS - 3) || (_vAeD > _vRtM - 3 && _vAeD < _vRtM + 3)) {
                if (_vAeD == _vRtM) {
                    _vCnZ += _s7VbK[546] + (_vRtM + 1) + _s7VbK[547]
                } else {
                    _vCnZ += _s7VbK[548] + (_vAeD + 1) + _s7VbK[549] + (_vAeD + 1) + _s7VbK[550]
                }
            } else {
                if ((_vAeD == _vRtM - 3) || (_vAeD == _vRtM + 3)) {
                    _vCnZ += _s7VbK[551]
                }
            }
        }
        _vCnZ += _s7VbK[552];
        $(_vTdW).html(_vCnZ);
        $(_vTdW + _s7VbK[553]).click(function() {
            _fMbD(Number($(this).html()))
        })
    }

    function _fNnD(xml) {
        $(xml).find(_s7VbK[554]).each(function() {
            $(this).find(_s7VbK[555]).each(function() {
                var _vPbM = $(this).text();
                var _vRtM = _vPbM.indexOf(_s7VbK[556]);
                _vPbM = _vPbM.substring(0, _vRtM) + _vPbM.substring(_vRtM + 4);
                var _vGkO = _fPgV(_vFjF, _s7VbK[557]);
                if (_vFjF == _vXsT) {
                    _vGkO += _s7VbK[558]
                }
                _vPbM = _vPbM.replace(_s7VbK[559], _s7VbK[560]);
                var _vZvP = _fRxG(_s7VbK[561]);
                if (_vZvP) {
                    _vGkO += _s7VbK[562] + _vZvP;
                    _vGkO += _s7VbK[563] + _vPbM;
                    _vGkO += _s7VbK[564] + ((_vOjO - 1) * _vMtX)
                } else {
                    _vGkO += _s7VbK[565] + _vPbM
                }
                _vGkO += _s7VbK[566] + _vMtX;
                _vGkO += _s7VbK[567] + _vOjO;
                window.location.href = _vGkO
            })
        })
    }

    function _fMbD(_vRtM) {
        _vOjO = _vRtM;
        if (_vOjO == 1) {
            if (_vFjF.indexOf(_s7VbK[568]) != -1 && _vMvH == _vXsT) {
                window.location.href = _vXsT
            } else {
                var _vZvP = _fRxG(_s7VbK[569]);
                if (_vZvP) {
                    window.location.href = _fPgV(_vFjF, _s7VbK[570]) + _s7VbK[571] + _vZvP
                } else {
                    window.location.href = _fPgV(_vFjF, _s7VbK[572])
                }
            }
        } else {
            var _vRtM = (_vOjO - 1) * _vMtX;
            if (_vFjF.indexOf(_s7VbK[573]) != -1 || _vMvH == _vXsT) {
                $.ajax({
                    _vSoK: _s7VbK[574],
                    url: _vXsT + _s7VbK[575] + _vRtM + _s7VbK[576],
                    dataType: _s7VbK[577],
                    success: _fNnD
                })
            } else if (_vFjF.indexOf(_s7VbK[578]) != -1) {
                $.ajax({
                    _vSoK: _s7VbK[579],
                    url: _vXsT + _s7VbK[580] + _vKbL + _s7VbK[581] + _vRtM + _s7VbK[582],
                    dataType: _s7VbK[583],
                    success: _fNnD
                })
            }
        }
    }
    if (_vFjF.indexOf(_s7VbK[584]) != -1 || _vFjF.indexOf(_s7VbK[585]) != -1) {
        $.ajax({
            _vSoK: _s7VbK[586],
            url: _vXsT + _s7VbK[587] + _fRxG(_s7VbK[588]),
            dataType: _s7VbK[589],
            success: _fYzY
        })
    } else if (_vFjF.indexOf(_s7VbK[590]) != -1 && _vMvH == _vXsT) {
        $.ajax({
            _vSoK: _s7VbK[591],
            url: _vXsT + _s7VbK[592],
            dataType: _s7VbK[593],
            success: _fYzY
        })
    } else if (_vFjF.indexOf(_s7VbK[594]) != -1) {
        _vKbL = _fXgC(_vFjF, _s7VbK[595]);
        _vKbL = _fPgV(_vKbL, _s7VbK[596]);
        $.ajax({
            _vSoK: _s7VbK[597],
            url: _vXsT + _s7VbK[598] + _vKbL + _s7VbK[599],
            dataType: _s7VbK[600],
            success: _fYzY
        })
    } else if (_vKrL == _s7VbK[601]) {
        if (typeof(_vNeQ) != _s7VbK[602]) {
            if (_vNeQ != _vFjF && _vNeQ != _s7VbK[603] && _vMoI != _s7VbK[604] && _vNeQ) {
                $.get(_vNeQ, function(response) {
                    var _vIwE = _fXgC(response, _s7VbK[605]);
                    _vIwE = _fPgV(_vIwE, _s7VbK[606]);
                    _vIwE = _fPgV(_vIwE, _s7VbK[607]);
                    $(_vTdW).addClass(_s7VbK[608]);
                    $(_vTdW).html($(_vTdW).html() + _s7VbK[609] + _vMoI + _s7VbK[610] + _vNeQ + _s7VbK[611] + _vIwE + _s7VbK[612])
                })
            }
        }
        if (typeof(_vGpX) != _s7VbK[613]) {
            if (_vGpX != _vFjF && _vGpX != _s7VbK[614] && _vFmO != _s7VbK[615]) {
                $.get(_vGpX, function(response) {
                    var _vIwE = _fXgC(response, _s7VbK[616]);
                    _vIwE = _fPgV(_vIwE, _s7VbK[617]);
                    _vIwE = _fPgV(_vIwE, _s7VbK[618]);
                    $(_vTdW).addClass(_s7VbK[619]);
                    $(_vTdW).html($(_vTdW).html() + _s7VbK[620] + _vFmO + _s7VbK[621] + _vGpX + _s7VbK[622] + _vIwE + _s7VbK[623])
                })
            }
        }
    }
}  