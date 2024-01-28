// Thieu ko hien lable trang chu, bai viet lien quan trong post, data thumbnail iframe, youtube
function _fOxV(_vIxM) {
    var _vFqT = _s7VbK[57];
    var _vSwY = _s7VbK[58];
    var _vEkP = _s7VbK[59];
    var _vIvJ = _s7VbK[60];
    index0 = _vIxM.indexOf(_vSwY);
    if (index0 != -1) {
        index1 = _vIxM.indexOf(_vEkP, index0);
        if (index0 != -1) {
            index2 = _vIxM.indexOf(_vIvJ, index1 + _vEkP.length);
            if (index0 != -1) {
                _vFqT = _vIxM.substring(index1 + _vEkP.length, index2)
            }
        }
    }
    if (_vFqT == _s7VbK[61]) {
        _vSwY = _s7VbK[62];
        _vEkP = _s7VbK[63];
        index0 = _vIxM.indexOf(_vSwY);
        if (index0 != -1) {
            index1 = _vIxM.indexOf(_vEkP, index0 + _vSwY.length);
            if (index0 != -1) {
                _vFqT = _vIxM.substring(index0 + _vSwY.length, index1)
            }
        }
    }
    if (_vFqT == _s7VbK[64]) {
        _vSwY = _s7VbK[65];
        _vEkP = _s7VbK[66];
        _vIvJ = _s7VbK[67];
        index0 = _vIxM.indexOf(_vSwY);
        if (index0 != -1) {
            index1 = _vIxM.indexOf(_vEkP, index0);
            if (index0 != -1) {
                index2 = _vIxM.indexOf(_vIvJ, index1 + _vEkP.length);
                if (index0 != -1) {
                    _vFqT = _vIxM.substring(index1 + _vEkP.length, index2);
                    _vFqT = _vFqT.replace(_s7VbK[68], _s7VbK[69]);
                    _vFqT = _vFqT.replace(_s7VbK[70], _s7VbK[71]);
                    _vFqT = _vFqT.replace(_s7VbK[72], _s7VbK[73]);
                    _vFqT = _s7VbK[74] + _vFqT + _s7VbK[75]
                }
            }
        }
    }
    return _vFqT
}  