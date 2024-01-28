//thieu ko hien lable trang chu, feed, href, blospot. wordpress, tumblr, 
function _fXgC(str, _vNqX) {
    if (str == null) {
        str = _s7VbK[136];
        return str
    }
    var _vRtM = str.indexOf(_vNqX);
    if (_vRtM != -1) {
        return str.substring(_vRtM + _vNqX.length)
    }
    return str
}

function _fPgV(str, _vNqX) {
    if (str == null) {
        str = _s7VbK[137];
        return str
    }
    var _vRtM = str.indexOf(_vNqX);
    if (_vRtM != -1) {
        return str.substring(0, _vRtM)
    }
    return str
}

function _fQsO(selector) {
    var _vMtT = $(selector).attr(_s7VbK[138]);
    var _vOhF = _s7VbK[139];
    if (_vMtT != _s7VbK[140] && _vMtT != null) {
        if (_vMtT.indexOf(_s7VbK[141]) != -1) {
            _vOhF = _s7VbK[142]
        } else if (_vMtT.indexOf(_s7VbK[143]) != -1) {
            _vOhF = _s7VbK[144]
        } else if (_vMtT.indexOf(_s7VbK[145]) != -1) {
            _vOhF = _s7VbK[146]
        } else if (_vMtT.indexOf(_s7VbK[147]) != -1) {
            _vOhF = _s7VbK[148]
        } else {
            _vOhF = selector.hostname;
            _vOhF = _vOhF.replace(_s7VbK[149], _s7VbK[150]);
            _vOhF = _fPgV(_vOhF, _s7VbK[151])
        }
    }
    return _vOhF
}  