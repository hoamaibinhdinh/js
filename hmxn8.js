//binh luan [defause comment], thieu ko hien ifram comment
var _vUbB = false;
$(_s7VbK[638]).click(function() {
    if (!_vUbB) {
        $(_s7VbK[639]).slideDown();
        _vUbB = true
    } else {
        $(_s7VbK[640]).slideUp();
        _vUbB = false
    }
});
if ($(_s7VbK[641]).length) {
    var _vBxQ = _fXdZ(_s7VbK[642]);
    if (_vBxQ != _s7VbK[643] && _vBxQ != null) {
        if (_vBxQ == _s7VbK[644]) {
            $(_s7VbK[645]).css(_s7VbK[646], _s7VbK[647]);
            $(_s7VbK[648]).addClass(_s7VbK[649])
        } else if (_vBxQ == _s7VbK[650]) {
            $(_s7VbK[651]).css(_s7VbK[652], _s7VbK[653]);
            $(_s7VbK[654]).addClass(_s7VbK[655])
        } else {
            $(_s7VbK[656]).css(_s7VbK[657], _s7VbK[658]);
            $(_s7VbK[659]).addClass(_s7VbK[660])
        }
    } else {
        $(_s7VbK[661]).first().css(_s7VbK[662], _s7VbK[663]);
        $(_s7VbK[664]).first().addClass(_s7VbK[665])
    }
    $(_s7VbK[666]).click(function() {
        var _vJrO = $(this).attr(_s7VbK[667]);
        if (_vJrO.indexOf(_s7VbK[668]) != -1) {
            return
        }
        $(_s7VbK[669]).removeClass(_s7VbK[670]);
        $(this).addClass(_s7VbK[671]);
        $(_s7VbK[672]).css(_s7VbK[673], _s7VbK[674]);
        if (_vJrO.indexOf(_s7VbK[675]) != -1) {
            $(_s7VbK[676]).slideDown(300);
            _fYlF(_s7VbK[677], _s7VbK[678])
        } else if (_vJrO.indexOf(_s7VbK[679]) != -1) {
            $(_s7VbK[680]).slideDown(300);
            _fYlF(_s7VbK[681], _s7VbK[682])
        } else {
            $(_s7VbK[683]).slideDown(300);
            _fYlF(_s7VbK[684], _s7VbK[685])
        }
    })
} else {
    $(_s7VbK[686]).css(_s7VbK[687], _s7VbK[688])
}  
  