var fetchSVG = function(filepath, keyName) {
            if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect) {
                return true;
            }
            var revision = 3;
            var file = filepath;
            var keypath = keyName;
            if (typeof filepath === 'undefined' || filepath === null) {
                file = 'https://cdn.jsdelivr.net/gh/hoamaibinhdinh/svg/symbol-defs.svg';
            }
            if (typeof keypath === 'undefined' || keypath === null) {
                keypath = 'inlineSVGdata';
            }
            var isLocalStorage = window.supportLS,
                request,
                data,
                insertIT = function() {
                    document.body.insertAdjacentHTML('beforebegin', data);
                    removeTitle();
                },
                insert = function() {
                    if (document.body) insertIT();
                    else document.addEventListener('DOMContentLoaded', insertIT);
                },
                removeTitle = function() {
                    var svg = document.querySelectorAll('svg symbol');
                    if (svg != null) {
                        for (var i = 0; i < svg.length; ++i) {
                            var el = svg[i].querySelector('title');
                            if (el != null) el.parentNode.removeChild(el);
                        }
                    }
                };
            if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
                data = localStorage.getItem(keypath);
                if (data) {
                    insert();
                    return true;
                }
            }

            try {
                request = new XMLHttpRequest();
                request.open('GET', file, true);
                request.onload = function() {
                    if (request.status >= 200 && request.status < 400) {
                        data = request.responseText;
                        insert();
                        if (isLocalStorage) {
                            localStorage.setItem(keypath, data);
                            localStorage.setItem('inlineSVGrev', revision);
                        }
                    }
                }
                request.send();
            } catch (e) {}
        }
        fetchSVG('https://cdn.jsdelivr.net/gh/hoamaibinhdinh/svg/icon.svg');
        fetchSVG();