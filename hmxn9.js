// zoom text, fonsise, post body
var _vDqZ = _fXdZ(_s7VbK[425]);
if (_vDqZ != _s7VbK[426] && _vDqZ != null) {
    $(_s7VbK[427]).css(_s7VbK[428], _vDqZ + _s7VbK[429])
}
$(_s7VbK[430]).click(function() {
    var _vOvE = $(_s7VbK[431]).css(_s7VbK[432]);
    _vOvE = _vOvE.replace(_s7VbK[433], _s7VbK[434]);
    var _vJrO = $(this).attr(_s7VbK[435]);
    var _vXuE = Number(_vOvE);
    if (_vJrO.indexOf(_s7VbK[436]) != -1) {
        _vXuE++
    } else {
        _vXuE -= 1
    }
    _fYlF(_s7VbK[437], _vXuE);
    $(_s7VbK[438]).css(_s7VbK[439], _vXuE + _s7VbK[440])
});
