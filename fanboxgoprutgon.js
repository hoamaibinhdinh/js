/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */

function beforeAfter(n) {
    if ($(n).length > 0) {
        function f(n, t, i) {
            $(n).beforeAfter({
                imageWidth: t,
                imageHeight: i
            })
        }

        function e(n) {
            var t = $(n).find(".flipper"),
                i, r;
            $(n).find(".before-after-img").css({
                width: "100%",
                height: "auto"
            });
            i = $(n).find(".before-after-img").first().height();
            r = $(n).find(".before-after-img").last().height();
            t.height(i);
            t.on("click", function() {
                $(this).parent().hasClass("rotate") ? ($(this).parent().removeClass("rotate"), t.height(i)) : ($(this).parent().addClass("rotate"), t.height(r || i));
                $(this).parent().find(".tips").hasClass("hide") || $(this).parent().find(".tips").addClass("hide")
            });
            $(n).find(".icon").on("click", function() {
                t.trigger("click")
            })
        }
        var i, r, t, u, o = $(n);
        o.each(function() {
            $(this).hasClass("skin2") ? (t = $(this), t.addClass("flip-container"), u = $('<div class="flipper"><\/div>'), t.prepend(u).append('<span class="icon"><img src="https://static.mediacdn.vn/thethaovanhoa/web_images/full_4_lightDark_30X30.png" /><\/span>'), u.append(t.find(".panel-before,.panel-after,.front,.back")), GetImageSize(t, t.find(".before-after-img").first().attr("src"), e)) : (i = $(this).attr("w"), r = $(this).attr("h"), isNaN(i) && isNaN(r) ? $(this).beforeAfter({
                imageWidth: i,
                imageHeight: r
            }) : GetImageSize($(this), $(this).find(".before-after-img").first().attr("src"), f))
        })
    }
}
    

function initMagazineObj() {
    $('.VCSortableInPreviewMode[type="LayoutAlbum"] a').addClass("sp-img-zoom");
    $('.VCSortableInPreviewMode[type="LayoutAlbum"]').each(function(n) {
        $(this).find("a").attr("data-fancybox-group", "img-album" + n)
    });
    $('.VCSortableInPreviewMode[type="photo"] a[target="_blank"]').not(".link-callout").removeAttr("target");
    $(".sp-img-zoom").fancybox({
        padding: 0,
        showNavArrows: !0,
        locked: !1,
        beforeShow: function() {
            $(".fancybox-overlay").addClass("fancybox-opening")
        },
        onUpdate: function() {
            $(window).scroll(function() {
                try {
                    $.fancybox.close().transitions()
                } catch (n) {}
            });
            $(".fancybox-image").on("click", function() {
                try {
                    $.fancybox.close().transitions()
                } catch (n) {}
            })
        },
        beforeClose: function() {
            $(".fancybox-overlay").addClass("fancybox-closing")
        },
        nextEffect: "none",
        prevEffect: "none"
    })
}

function SmartAlbumLayout() {
    var n = $(".LastestLayoutAlbum .LayoutAlbumRow");
    n.each(function() {
        for (var n = $(".LayoutAlbumItem", $(this)), e = $(this).parents(".VCSortableInPreviewMode").width(), t = n.map(function() {
                return $(this).find("img").attr("w") / $(this).find("img").attr("h")
            }).get(), u = 0, f = 0, i = Math.min.apply(Math, t), r = 0; r < n.length; r++) u += t[r] / i;
        n.each(function() {
            f += parseInt($(this).css("margin-left")) + parseInt($(this).css("margin-right"))
        });
        n.each(function(n) {
            var r = (e - f) / u,
                o = Math.floor(r / i),
                s = Math.floor(r / i) * t[n];
            $("img", $(this)).height(o).width(s);
            $("img", $(this)).css({
                width: s,
                height: o
            })
        })
    });
    $(".LastestLayoutAlbum").removeClass("LastestLayoutAlbum")
}



function initLightBox() {
    var n = '<a href="{0}" data-fancybox-group="img-lightbox" title="{1}" target="_blank" class="detail-img-lightbox"><\/a>';
    $('.VCSortableInPreviewMode[type="photo"] img:not(.lightbox-content)').each(function() {
        var t = $(this),
            i = t.attr("data-original"),
            r = t.parents(".VCSortableInPreviewMode").find(".PhotoCMS_Caption").text(),
            u, f;
        r == null && (r = "");
        typeof i == "undefined" && (i = t.attr("src"));
        u = String.format(n, i, encodeReplace(r));
        f = t.parent("div").prepend(u);
        $(f).find("a").append(t);
        t.addClass("lightbox-content")
    });
    $(".desc_image.slide_content img:not(.lightbox-content)").each(function() {
        var t = $(this),
            u = t.parents(".desc_image.slide_content"),
            i = u.attr("href"),
            r = u.find(".ck_legend.caption").html(),
            f, e;
        r == null && (r = "");
        typeof i == "undefined" && (i = t.attr("src"));
        f = String.format(n, i, htmlEncode(r));
        e = t.parent("td").prepend(f);
        $(e).find("a").append(t);
        t.addClass("lightbox-content")
    });
    $(".detail-img-lightbox").fancybox({
        padding: 0,
        showNavArrows: !0,
        locked: !1,
        beforeShow: function() {
            $(".fancybox-overlay").addClass("fancybox-opening")
        },
        onUpdate: function() {
            $(window).scroll(function() {
                try {
                    $.fancybox.close().transitions()
                } catch (n) {}
            });
            $(".fancybox-image").on("click", function() {
                try {
                    $.fancybox.close().transitions()
                } catch (n) {}
            })
        },
        beforeClose: function() {
            $(".fancybox-overlay").addClass("fancybox-closing")
        },
        nextEffect: "none",
        prevEffect: "none"
    })
}

var detectmob, videoStorage, videoHD, waitingVideoIdForReady, readyVideoIds, currentTimingVideo, videoInContent, videoInPopup, fbClient, poll, ajax, vcCore, removeCookie, swipeSlide, detail, spnBeforeAfter, getBoxDetail, iniDetail, setcss;
! function(n, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document) throw new Error("jQuery requires a window with a document");
        return t(n)
    } : t(n)
}("undefined" != typeof window ? window : this, function(n, t) {
    function ri(n) {
        var t = n.length,
            r = i.type(n);
        return "function" === r || i.isWindow(n) ? !1 : 1 === n.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in n
    }

    function ui(n, t, r) {
        if (i.isFunction(t)) return i.grep(n, function(n, i) {
            return !!t.call(n, i, n) !== r
        });
        if (t.nodeType) return i.grep(n, function(n) {
            return n === t !== r
        });
        if ("string" == typeof t) {
            if (ue.test(t)) return i.filter(t, n, r);
            t = i.filter(t, n)
        }
        return i.grep(n, function(n) {
            return i.inArray(n, t) >= 0 !== r
        })
    }

    function hr(n, t) {
        do n = n[t]; while (n && 1 !== n.nodeType);
        return n
    }

    function oe(n) {
        var t = fi[n] = {};
        return i.each(n.match(h) || [], function(n, i) {
            t[i] = !0
        }), t
    }

    function cr() {
        u.addEventListener ? (u.removeEventListener("DOMContentLoaded", a, !1), n.removeEventListener("load", a, !1)) : (u.detachEvent("onreadystatechange", a), n.detachEvent("onload", a))
    }

    function a() {
        (u.addEventListener || "load" === event.type || "complete" === u.readyState) && (cr(), i.ready())
    }

    function yr(n, t, r) {
        if (void 0 === r && 1 === n.nodeType) {
            var u = "data-" + t.replace(vr, "-$1").toLowerCase();
            if (r = n.getAttribute(u), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : ar.test(r) ? i.parseJSON(r) : r
                } catch (f) {}
                i.data(n, t, r)
            } else r = void 0
        }
        return r
    }

    function ei(n) {
        for (var t in n)
            if (("data" !== t || !i.isEmptyObject(n[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function pr(n, t, r, u) {
        if (i.acceptData(n)) {
            var s, e, h = i.expando,
                l = n.nodeType,
                o = l ? i.cache : n,
                f = l ? n[h] : n[h] && h;
            if (f && o[f] && (u || o[f].data) || void 0 !== r || "string" != typeof t) return f || (f = l ? n[h] = c.pop() || i.guid++ : h), o[f] || (o[f] = l ? {} : {
                toJSON: i.noop
            }), ("object" == typeof t || "function" == typeof t) && (u ? o[f] = i.extend(o[f], t) : o[f].data = i.extend(o[f].data, t)), e = o[f], u || (e.data || (e.data = {}), e = e.data), void 0 !== r && (e[i.camelCase(t)] = r), "string" == typeof t ? (s = e[t], null == s && (s = e[i.camelCase(t)])) : s = e, s
        }
    }

    function wr(n, t, u) {
        if (i.acceptData(n)) {
            var o, s, h = n.nodeType,
                f = h ? i.cache : n,
                e = h ? n[i.expando] : i.expando;
            if (f[e]) {
                if (t && (o = u ? f[e] : f[e].data)) {
                    for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in o) ? t = [t] : (t = i.camelCase(t), t = (t in o) ? [t] : t.split(" ")), s = t.length; s--;) delete o[t[s]];
                    if (u ? !ei(o) : !i.isEmptyObject(o)) return
                }(u || (delete f[e].data, ei(f[e]))) && (h ? i.cleanData([n], !0) : r.deleteExpando || f != f.window ? delete f[e] : f[e] = null)
            }
        }
    }

    function vt() {
        return !0
    }

    function it() {
        return !1
    }

    function dr() {
        try {
            return u.activeElement
        } catch (n) {}
    }

    function gr(n) {
        var i = nu.split("|"),
            t = n.createDocumentFragment();
        if (t.createElement)
            while (i.length) t.createElement(i.pop());
        return t
    }

    function f(n, t) {
        var e, u, s = 0,
            r = typeof n.getElementsByTagName !== o ? n.getElementsByTagName(t || "*") : typeof n.querySelectorAll !== o ? n.querySelectorAll(t || "*") : void 0;
        if (!r)
            for (r = [], e = n.childNodes || n; null != (u = e[s]); s++) !t || i.nodeName(u, t) ? r.push(u) : i.merge(r, f(u, t));
        return void 0 === t || t && i.nodeName(n, t) ? i.merge([n], r) : r
    }

    function be(n) {
        oi.test(n.type) && (n.defaultChecked = n.checked)
    }

    function eu(n, t) {
        return i.nodeName(n, "table") && i.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }

    function ou(n) {
        return n.type = (null !== i.find.attr(n, "type")) + "/" + n.type, n
    }

    function su(n) {
        var t = ye.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"), n
    }

    function li(n, t) {
        for (var u, r = 0; null != (u = n[r]); r++) i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
    }

    function hu(n, t) {
        if (1 === t.nodeType && i.hasData(n)) {
            var u, f, o, s = i._data(n),
                r = i._data(t, s),
                e = s.events;
            if (e) {
                delete r.handle;
                r.events = {};
                for (u in e)
                    for (f = 0, o = e[u].length; o > f; f++) i.event.add(t, u, e[u][f])
            }
            r.data && (r.data = i.extend({}, r.data))
        }
    }

    function ke(n, t) {
        var u, e, f;
        if (1 === t.nodeType) {
            if (u = t.nodeName.toLowerCase(), !r.noCloneEvent && t[i.expando]) {
                f = i._data(t);
                for (e in f.events) i.removeEvent(t, e, f.handle);
                t.removeAttribute(i.expando)
            }
            "script" === u && t.text !== n.text ? (ou(t).text = n.text, su(t)) : "object" === u ? (t.parentNode && (t.outerHTML = n.outerHTML), r.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : "input" === u && oi.test(n.type) ? (t.defaultChecked = t.checked = n.checked, t.value !== n.value && (t.value = n.value)) : "option" === u ? t.defaultSelected = t.selected = n.defaultSelected : ("input" === u || "textarea" === u) && (t.defaultValue = n.defaultValue)
        }
    }

    function cu(t, r) {
        var u = i(r.createElement(t)).appendTo(r.body),
            f = n.getDefaultComputedStyle ? n.getDefaultComputedStyle(u[0]).display : i.css(u[0], "display");
        return u.detach(), f
    }

    function lu(n) {
        var r = u,
            t = ai[n];
        return t || (t = cu(n, r), "none" !== t && t || (ot = (ot || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement), r = (ot[0].contentWindow || ot[0].contentDocument).document, r.write(), r.close(), t = cu(n, r), ot.detach()), ai[n] = t), t
    }

    function vu(n, t) {
        return {
            get: function() {
                var i = n();
                if (null != i) return i ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function wu(n, t) {
        if (t in n) return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = pu.length; i--;)
            if (t = pu[i] + r, t in n) return t;
        return u
    }

    function bu(n, t) {
        for (var f, r, o, e = [], u = 0, s = n.length; s > u; u++) r = n[u], r.style && (e[u] = i._data(r, "olddisplay"), f = r.style.display, t ? (e[u] || "none" !== f || (r.style.display = ""), "" === r.style.display && et(r) && (e[u] = i._data(r, "olddisplay", lu(r.nodeName)))) : e[u] || (o = et(r), (f && "none" !== f || !o) && i._data(r, "olddisplay", o ? f : i.css(r, "display"))));
        for (u = 0; s > u; u++) r = n[u], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? e[u] || "" : "none"));
        return n
    }

    function ku(n, t, i) {
        var r = to.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }

    function du(n, t, r, u, f) {
        for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2) "margin" === r && (o += i.css(n, r + w[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + w[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + w[e] + "Width", !0, f))) : (o += i.css(n, "padding" + w[e], !0, f), "padding" !== r && (o += i.css(n, "border" + w[e] + "Width", !0, f)));
        return o
    }

    function gu(n, t, u) {
        var o = !0,
            f = "width" === t ? n.offsetWidth : n.offsetHeight,
            e = k(n),
            s = r.boxSizing() && "border-box" === i.css(n, "boxSizing", !1, e);
        if (0 >= f || null == f) {
            if (f = d(n, t, e), (0 > f || null == f) && (f = n.style[t]), yt.test(f)) return f;
            o = s && (r.boxSizingReliable() || f === n.style[t]);
            f = parseFloat(f) || 0
        }
        return f + du(n, t, u || (s ? "border" : "content"), o, e) + "px"
    }

    function e(n, t, i, r, u) {
        return new e.prototype.init(n, t, i, r, u)
    }

    function tf() {
        return setTimeout(function() {
            rt = void 0
        }), rt = i.now()
    }

    function bt(n, t) {
        var r, i = {
                height: n
            },
            u = 0;
        for (t = t ? 1 : 0; 4 > u; u += 2 - t) r = w[u], i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n), i
    }

    function rf(n, t, i) {
        for (var u, f = (st[t] || []).concat(st["*"]), r = 0, e = f.length; e > r; r++)
            if (u = f[r].call(i, t, n)) return u
    }

    function eo(n, t, u) {
        var f, l, p, a, o, b, y, w, c = this,
            v = {},
            s = n.style,
            h = n.nodeType && et(n),
            e = i._data(n, "fxshow");
        u.queue || (o = i._queueHooks(n, "fx"), null == o.unqueued && (o.unqueued = 0, b = o.empty.fire, o.empty.fire = function() {
            o.unqueued || b()
        }), o.unqueued++, c.always(function() {
            c.always(function() {
                o.unqueued--;
                i.queue(n, "fx").length || o.empty.fire()
            })
        }));
        1 === n.nodeType && ("height" in t || "width" in t) && (u.overflow = [s.overflow, s.overflowX, s.overflowY], y = i.css(n, "display"), w = lu(n.nodeName), "none" === y && (y = w), "inline" === y && "none" === i.css(n, "float") && (r.inlineBlockNeedsLayout && "inline" !== w ? s.zoom = 1 : s.display = "inline-block"));
        u.overflow && (s.overflow = "hidden", r.shrinkWrapBlocks() || c.always(function() {
            s.overflow = u.overflow[0];
            s.overflowX = u.overflow[1];
            s.overflowY = u.overflow[2]
        }));
        for (f in t)
            if (l = t[f], uo.exec(l)) {
                if (delete t[f], p = p || "toggle" === l, l === (h ? "hide" : "show")) {
                    if ("show" !== l || !e || void 0 === e[f]) continue;
                    h = !0
                }
                v[f] = e && e[f] || i.style(n, f)
            }
        if (!i.isEmptyObject(v)) {
            e ? "hidden" in e && (h = e.hidden) : e = i._data(n, "fxshow", {});
            p && (e.hidden = !h);
            h ? i(n).show() : c.done(function() {
                i(n).hide()
            });
            c.done(function() {
                var t;
                i._removeData(n, "fxshow");
                for (t in v) i.style(n, t, v[t])
            });
            for (f in v) a = rf(h ? e[f] : 0, f, c), f in e || (e[f] = a.start, h && (a.end = a.start, a.start = "width" === f || "height" === f ? 1 : 0))
        }
    }

    function oo(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u) r in n || (n[r] = u[r], t[r] = e)
            } else t[f] = e
    }

    function uf(n, t, r) {
        var h, e, o = 0,
            l = wt.length,
            f = i.Deferred().always(function() {
                delete c.elem
            }),
            c = function() {
                if (e) return !1;
                for (var s = rt || tf(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, o = u.tweens.length; o > r; r++) u.tweens[r].run(i);
                return f.notifyWith(n, [u, i, t]), 1 > i && o ? t : (f.resolveWith(n, [u]), !1)
            },
            u = f.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {}
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: rt || tf(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) {
                    var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(f), f
                },
                stop: function(t) {
                    var i = 0,
                        r = t ? u.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; r > i; i++) u.tweens[i].run(1);
                    return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
                }
            }),
            s = u.props;
        for (oo(s, u.opts.specialEasing); l > o; o++)
            if (h = wt[o].call(u, n, s, u.opts)) return h;
        return i.map(s, rf, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function vf(n) {
        return function(t, r) {
            "string" != typeof t && (r = t, t = "*");
            var u, f = 0,
                e = t.toLowerCase().match(h) || [];
            if (i.isFunction(r))
                while (u = e[f++]) "+" === u.charAt(0) ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }

    function yf(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1)
            }), h
        }
        var f = {},
            o = n === bi;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function ki(n, t) {
        var u, r, f = i.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u), n
    }

    function vo(n, t, i) {
        for (var o, e, u, f, s = n.contents, r = n.dataTypes;
            "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e)
            for (f in s)
                if (s[f] && s[f].test(e)) {
                    r.unshift(f);
                    break
                }
        if (r[0] in i) u = r[0];
        else {
            for (f in i) {
                if (!r[0] || n.converters[f + " " + r[0]]) {
                    u = f;
                    break
                }
                o || (o = f)
            }
            u = u || o
        }
        if (u) return (u !== r[0] && r.unshift(u), i[u])
    }

    function yo(n, t, i, r) {
        var h, u, f, s, e, o = {},
            c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u;)
            if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                if ("*" === u) u = e;
                else if ("*" !== e && e !== u) {
            if (f = o[e + " " + u] || o["* " + u], !f)
                for (h in o)
                    if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                        f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                        break
                    }
            if (f !== !0)
                if (f && n.throws) t = f(t);
                else try {
                    t = f(t)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: f ? l : "No conversion from " + e + " to " + u
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function di(n, t, r, u) {
        var f;
        if (i.isArray(t)) i.each(t, function(t, i) {
            r || wo.test(n) ? u(n, i) : di(n + "[" + ("object" == typeof i ? t : "") + "]", i, r, u)
        });
        else if (r || "object" !== i.type(t)) u(n, t);
        else
            for (f in t) di(n + "[" + f + "]", t[f], r, u)
    }

    function wf() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }

    function ns() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function bf(n) {
        return i.isWindow(n) ? n : 9 === n.nodeType ? n.defaultView || n.parentWindow : !1
    }
    var c = [],
        l = c.slice,
        ir = c.concat,
        ti = c.push,
        rr = c.indexOf,
        ct = {},
        gf = ct.toString,
        tt = ct.hasOwnProperty,
        ii = "".trim,
        r = {},
        ur = "1.11.0",
        i = function(n, t) {
            return new i.fn.init(n, t)
        },
        ne = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        te = /^-ms-/,
        ie = /-([\da-z])/gi,
        re = function(n, t) {
            return t.toUpperCase()
        },
        p, or, sr, h, fi, lt, o, lr, ar, vr, ot, ai, ff, of, sf, dt, gi, ni, nr, tr, kf, df;
    i.fn = i.prototype = {
        jquery: ur,
        constructor: i,
        selector: "",
        length: 0,
        toArray: function() {
            return l.call(this)
        },
        get: function(n) {
            return null != n ? 0 > n ? this[n + this.length] : this[n] : l.call(this)
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(n, t) {
            return i.each(this, n, t)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(l.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length,
                t = +n + (0 > n ? i : 0);
            return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: ti,
        sort: c.sort,
        splice: c.splice
    };
    i.extend = i.fn.extend = function() {
        var r, e, t, f, o, s, n = arguments[0] || {},
            u = 1,
            c = arguments.length,
            h = !1;
        for ("boolean" == typeof n && (h = n, n = arguments[u] || {}, u++), "object" == typeof n || i.isFunction(n) || (n = {}), u === c && (n = this, u--); c > u; u++)
            if (null != (o = arguments[u]))
                for (f in o) r = n[f], t = o[f], n !== t && (h && t && (i.isPlainObject(t) || (e = i.isArray(t))) ? (e ? (e = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : void 0 !== t && (n[f] = t));
        return n
    };
    i.extend({
        expando: "jQuery" + (ur + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isFunction: function(n) {
            return "function" === i.type(n)
        },
        isArray: Array.isArray || function(n) {
            return "array" === i.type(n)
        },
        isWindow: function(n) {
            return null != n && n == n.window
        },
        isNumeric: function(n) {
            return n - parseFloat(n) >= 0
        },
        isEmptyObject: function(n) {
            for (var t in n) return !1;
            return !0
        },
        isPlainObject: function(n) {
            var t;
            if (!n || "object" !== i.type(n) || n.nodeType || i.isWindow(n)) return !1;
            try {
                if (n.constructor && !tt.call(n, "constructor") && !tt.call(n.constructor.prototype, "isPrototypeOf")) return !1
            } catch (u) {
                return !1
            }
            if (r.ownLast)
                for (t in n) return tt.call(n, t);
            for (t in n);
            return void 0 === t || tt.call(n, t)
        },
        type: function(n) {
            return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ct[gf.call(n)] || "object" : typeof n
        },
        globalEval: function(t) {
            t && i.trim(t) && (n.execScript || function(t) {
                n.eval.call(n, t)
            })(t)
        },
        camelCase: function(n) {
            return n.replace(te, "ms-").replace(ie, re)
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(n, t, i) {
            var u, r = 0,
                f = n.length,
                e = ri(n);
            if (i) {
                if (e) {
                    for (; f > r; r++)
                        if (u = t.apply(n[r], i), u === !1) break
                } else
                    for (r in n)
                        if (u = t.apply(n[r], i), u === !1) break
            } else if (e) {
                for (; f > r; r++)
                    if (u = t.call(n[r], r, n[r]), u === !1) break
            } else
                for (r in n)
                    if (u = t.call(n[r], r, n[r]), u === !1) break; return n
        },
        trim: ii && !ii.call("﻿ ") ? function(n) {
            return null == n ? "" : ii.call(n)
        } : function(n) {
            return null == n ? "" : (n + "").replace(ne, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return null != n && (ri(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ti.call(r, n)), r
        },
        inArray: function(n, t, i) {
            var r;
            if (t) {
                if (rr) return rr.call(t, n, i);
                for (r = t.length, i = i ? 0 > i ? Math.max(0, r + i) : i : 0; r > i; i++)
                    if (i in t && t[i] === n) return i
            }
            return -1
        },
        merge: function(n, t) {
            for (var r = +t.length, i = 0, u = n.length; r > i;) n[u++] = t[i++];
            if (r !== r)
                while (void 0 !== t[i]) n[u++] = t[i++];
            return n.length = u, n
        },
        grep: function(n, t, i) {
            for (var u, f = [], r = 0, e = n.length, o = !i; e > r; r++) u = !t(n[r], r), u !== o && f.push(n[r]);
            return f
        },
        map: function(n, t, i) {
            var u, r = 0,
                e = n.length,
                o = ri(n),
                f = [];
            if (o)
                for (; e > r; r++) u = t(n[r], r, i), null != u && f.push(u);
            else
                for (r in n) u = t(n[r], r, i), null != u && f.push(u);
            return ir.apply([], f)
        },
        guid: 1,
        proxy: function(n, t) {
            var u, r, f;
            return "string" == typeof t && (f = n[t], t = n, n = f), i.isFunction(n) ? (u = l.call(arguments, 2), r = function() {
                return n.apply(t || this, u.concat(l.call(arguments)))
            }, r.guid = n.guid = n.guid || i.guid++, r) : void 0
        },
        now: function() {
            return +new Date
        },
        support: r
    });
    i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
        ct["[object " + t + "]"] = t.toLowerCase()
    });
    p = function(n) {
        function u(n, t, i, u) {
            var w, h, c, v, k, y, d, a, nt, g;
            if ((t ? t.ownerDocument || t : s) !== e && p(t), t = t || e, i = i || [], !n || "string" != typeof n) return i;
            if (1 !== (v = t.nodeType) && 9 !== v) return [];
            if (l && !u) {
                if (w = or.exec(n))
                    if (c = w[1]) {
                        if (9 === v) {
                            if (h = t.getElementById(c), !h || !h.parentNode) return i;
                            if (h.id === c) return i.push(h), i
                        } else if (t.ownerDocument && (h = t.ownerDocument.getElementById(c)) && et(t, h) && h.id === c) return i.push(h), i
                    } else {
                        if (w[2]) return b.apply(i, t.getElementsByTagName(n)), i;
                        if ((c = w[3]) && r.getElementsByClassName && t.getElementsByClassName) return b.apply(i, t.getElementsByClassName(c)), i
                    }
                if (r.qsa && (!o || !o.test(n))) {
                    if (a = d = f, nt = t, g = 9 === v && n, 1 === v && "object" !== t.nodeName.toLowerCase()) {
                        for (y = vt(n), (d = t.getAttribute("id")) ? a = d.replace(sr, "\\$&") : t.setAttribute("id", a), a = "[id='" + a + "'] ", k = y.length; k--;) y[k] = a + yt(y[k]);
                        nt = gt.test(n) && ii(t.parentNode) || t;
                        g = y.join(",")
                    }
                    if (g) try {
                        return b.apply(i, nt.querySelectorAll(g)), i
                    } catch (tt) {} finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return vr(n.replace(lt, "$1"), t, i, u)
        }

        function ni() {
            function n(r, u) {
                return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
            }
            var i = [];
            return n
        }

        function h(n) {
            return n[f] = !0, n
        }

        function c(n) {
            var t = e.createElement("div");
            try {
                return !!n(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function ti(n, i) {
            for (var u = n.split("|"), r = n.length; r--;) t.attrHandle[u[r]] = i
        }

        function pi(n, t) {
            var i = t && n,
                r = i && 1 === n.nodeType && 1 === t.nodeType && (~t.sourceIndex || li) - (~n.sourceIndex || li);
            if (r) return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ? 1 : -1
        }

        function hr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === n
            }
        }

        function cr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === n
            }
        }

        function tt(n) {
            return h(function(t) {
                return t = +t, h(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }

        function ii(n) {
            return n && typeof n.getElementsByTagName !== ut && n
        }

        function wi() {}

        function vt(n, i) {
            var e, f, s, o, r, h, c, l = hi[n + " "];
            if (l) return i ? 0 : l.slice(0);
            for (r = n, h = [], c = t.preFilter; r;) {
                (!e || (f = nr.exec(r))) && (f && (r = r.slice(f[0].length) || r), h.push(s = []));
                e = !1;
                (f = tr.exec(r)) && (e = f.shift(), s.push({
                    value: e,
                    type: f[0].replace(lt, " ")
                }), r = r.slice(e.length));
                for (o in t.filter)(f = at[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                    value: e,
                    type: o,
                    matches: f
                }), r = r.slice(e.length));
                if (!e) break
            }
            return i ? r.length : r ? u.error(n) : hi(n, h).slice(0)
        }

        function yt(n) {
            for (var t = 0, r = n.length, i = ""; r > t; t++) i += n[t].value;
            return i
        }

        function ri(n, t, i) {
            var r = t.dir,
                u = i && "parentNode" === r,
                e = bi++;
            return t.first ? function(t, i, f) {
                while (t = t[r])
                    if (1 === t.nodeType || u) return n(t, i, f)
            } : function(t, i, o) {
                var s, h, c = [a, e];
                if (o) {
                    while (t = t[r])
                        if ((1 === t.nodeType || u) && n(t, i, o)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || u) {
                            if (h = t[f] || (t[f] = {}), (s = h[r]) && s[0] === a && s[1] === e) return c[2] = s[2];
                            if (h[r] = c, c[2] = n(t, i, o)) return !0
                        }
            }
        }

        function ui(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function pt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
            return o
        }

        function fi(n, t, i, r, u, e) {
            return r && !r[f] && (r = fi(r)), u && !u[f] && (u = fi(u, e)), h(function(f, e, o, s) {
                var l, c, a, p = [],
                    y = [],
                    w = e.length,
                    k = f || ar(t || "*", o.nodeType ? [o] : o, []),
                    v = !n || !f && t ? k : pt(k, p, n, o, s),
                    h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s), r)
                    for (l = pt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--;)(a = h[c]) && (l = u ? nt.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else h = pt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : b.apply(e, h)
            })
        }

        function ei(n) {
            for (var s, u, r, o = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ri(function(n) {
                    return n === s
                }, c, !0), a = ri(function(n) {
                    return nt.call(s, n) > -1
                }, c, !0), e = [function(n, t, i) {
                    return !h && (i || t !== ht) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
                }]; o > i; i++)
                if (u = t.relative[n[i].type]) e = [ri(ui(e), u)];
                else {
                    if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) {
                        for (r = ++i; o > r; r++)
                            if (t.relative[n[r].type]) break;
                        return fi(i > 1 && ui(e), i > 1 && yt(n.slice(0, i - 1).concat({
                            value: " " === n[i - 2].type ? "*" : ""
                        })).replace(lt, "$1"), u, r > i && ei(n.slice(i, r)), o > r && ei(n = n.slice(r)), o > r && yt(n))
                    }
                    e.push(u)
                }
            return ui(e)
        }

        function lr(n, i) {
            var r = i.length > 0,
                f = n.length > 0,
                o = function(o, s, h, c, l) {
                    var y, d, w, k = 0,
                        v = "0",
                        g = o && [],
                        p = [],
                        nt = ht,
                        tt = o || f && t.find.TAG("*", l),
                        it = a += null == nt ? 1 : Math.random() || .1,
                        rt = tt.length;
                    for (l && (ht = s !== e && s); v !== rt && null != (y = tt[v]); v++) {
                        if (f && y) {
                            for (d = 0; w = n[d++];)
                                if (w(y, s, h)) {
                                    c.push(y);
                                    break
                                }
                            l && (a = it)
                        }
                        r && ((y = !w && y) && k--, o && g.push(y))
                    }
                    if (k += v, r && v !== k) {
                        for (d = 0; w = i[d++];) w(g, p, s, h);
                        if (o) {
                            if (k > 0)
                                while (v--) g[v] || p[v] || (p[v] = di.call(c));
                            p = pt(p)
                        }
                        b.apply(c, p);
                        l && !o && p.length > 0 && k + i.length > 1 && u.uniqueSort(c)
                    }
                    return l && (a = it, ht = nt), g
                };
            return r ? h(o) : o
        }

        function ar(n, t, i) {
            for (var r = 0, f = t.length; f > r; r++) u(n, t[r], i);
            return i
        }

        function vr(n, i, u, f) {
            var s, e, o, c, a, h = vt(n);
            if (!f && 1 === h.length) {
                if (e = h[0] = h[0].slice(0), e.length > 2 && "ID" === (o = e[0]).type && r.getById && 9 === i.nodeType && l && t.relative[e[1].type]) {
                    if (i = (t.find.ID(o.matches[0].replace(k, d), i) || [])[0], !i) return u;
                    n = n.slice(e.shift().value.length)
                }
                for (s = at.needsContext.test(n) ? 0 : e.length; s--;) {
                    if (o = e[s], t.relative[c = o.type]) break;
                    if ((a = t.find[c]) && (f = a(o.matches[0].replace(k, d), gt.test(e[0].type) && ii(i.parentNode) || i))) {
                        if (e.splice(s, 1), n = f.length && yt(e), !n) return b.apply(u, f), u;
                        break
                    }
                }
            }
            return wt(n, h)(f, i, !l, u, gt.test(n) && ii(i.parentNode) || i), u
        }
        var it, r, t, st, oi, wt, ht, y, rt, p, e, v, l, o, g, ct, et, f = "sizzle" + -new Date,
            s = n.document,
            a = 0,
            bi = 0,
            si = ni(),
            hi = ni(),
            ci = ni(),
            bt = function(n, t) {
                return n === t && (rt = !0), 0
            },
            ut = "undefined",
            li = -2147483648,
            ki = {}.hasOwnProperty,
            w = [],
            di = w.pop,
            gi = w.push,
            b = w.push,
            ai = w.slice,
            nt = w.indexOf || function(n) {
                for (var t = 0, i = this.length; i > t; t++)
                    if (this[t] === n) return t;
                return -1
            },
            kt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            i = "[\\x20\\t\\r\\n\\f]",
            ft = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            vi = ft.replace("w", "w#"),
            yi = "\\[" + i + "*(" + ft + ")" + i + "*(?:([*^$|!~]?=)" + i + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + vi + ")|)|)" + i + "*\\]",
            dt = ":(" + ft + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + yi.replace(3, 8) + ")*)|.*)\\)|)",
            lt = new RegExp("^" + i + "+|((?:^|[^\\\\])(?:\\\\.)*)" + i + "+$", "g"),
            nr = new RegExp("^" + i + "*," + i + "*"),
            tr = new RegExp("^" + i + "*([>+~]|" + i + ")" + i + "*"),
            ir = new RegExp("=" + i + "*([^\\]'\"]*?)" + i + "*\\]", "g"),
            rr = new RegExp(dt),
            ur = new RegExp("^" + vi + "$"),
            at = {
                ID: new RegExp("^#(" + ft + ")"),
                CLASS: new RegExp("^\\.(" + ft + ")"),
                TAG: new RegExp("^(" + ft.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + yi),
                PSEUDO: new RegExp("^" + dt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + i + "*(even|odd|(([+-]|)(\\d*)n|)" + i + "*(?:([+-]|)" + i + "*(\\d+)|))" + i + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + kt + ")$", "i"),
                needsContext: new RegExp("^" + i + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + i + "*((?:-\\d)?\\d*)" + i + "*\\)|)(?=[^-]|$)", "i")
            },
            fr = /^(?:input|select|textarea|button)$/i,
            er = /^h\d$/i,
            ot = /^[^{]+\{\s*\[native \w/,
            or = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            gt = /[+~]/,
            sr = /'|\\/g,
            k = new RegExp("\\\\([\\da-f]{1,6}" + i + "?|(" + i + ")|.)", "ig"),
            d = function(n, t, i) {
                var r = "0x" + t - 65536;
                return r !== r || i ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            b.apply(w = ai.call(s.childNodes), s.childNodes);
            w[s.childNodes.length].nodeType
        } catch (yr) {
            b = {
                apply: w.length ? function(n, t) {
                    gi.apply(n, ai.call(t))
                } : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++];);
                    n.length = i - 1
                }
            }
        }
        r = u.support = {};
        oi = u.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        };
        p = u.setDocument = function(n) {
            var a, u = n ? n.ownerDocument || n : s,
                h = u.defaultView;
            return u !== e && 9 === u.nodeType && u.documentElement ? (e = u, v = u.documentElement, l = !oi(u), h && h !== h.top && (h.addEventListener ? h.addEventListener("unload", function() {
                p()
            }, !1) : h.attachEvent && h.attachEvent("onunload", function() {
                p()
            })), r.attributes = c(function(n) {
                return n.className = "i", !n.getAttribute("className")
            }), r.getElementsByTagName = c(function(n) {
                return n.appendChild(u.createComment("")), !n.getElementsByTagName("*").length
            }), r.getElementsByClassName = ot.test(u.getElementsByClassName) && c(function(n) {
                return n.innerHTML = "<div class='a'><\/div><div class='a i'><\/div>", n.firstChild.className = "i", 2 === n.getElementsByClassName("i").length
            }), r.getById = c(function(n) {
                return v.appendChild(n).id = f, !u.getElementsByName || !u.getElementsByName(f).length
            }), r.getById ? (t.find.ID = function(n, t) {
                if (typeof t.getElementById !== ut && l) {
                    var i = t.getElementById(n);
                    return i && i.parentNode ? [i] : []
                }
            }, t.filter.ID = function(n) {
                var t = n.replace(k, d);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }) : (delete t.find.ID, t.filter.ID = function(n) {
                var t = n.replace(k, d);
                return function(n) {
                    var i = typeof n.getAttributeNode !== ut && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }), t.find.TAG = r.getElementsByTagName ? function(n, t) {
                if (typeof t.getElementsByTagName !== ut) return t.getElementsByTagName(n)
            } : function(n, t) {
                var i, r = [],
                    f = 0,
                    u = t.getElementsByTagName(n);
                if ("*" === n) {
                    while (i = u[f++]) 1 === i.nodeType && r.push(i);
                    return r
                }
                return u
            }, t.find.CLASS = r.getElementsByClassName && function(n, t) {
                if (typeof t.getElementsByClassName !== ut && l) return t.getElementsByClassName(n)
            }, g = [], o = [], (r.qsa = ot.test(u.querySelectorAll)) && (c(function(n) {
                n.innerHTML = "<select t=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[t^='']").length && o.push("[*^$]=" + i + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || o.push("\\[" + i + "*(?:value|" + kt + ")");
                n.querySelectorAll(":checked").length || o.push(":checked")
            }), c(function(n) {
                var t = u.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && o.push("name" + i + "*[*^$|!~]?=");
                n.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:")
            })), (r.matchesSelector = ot.test(ct = v.webkitMatchesSelector || v.mozMatchesSelector || v.oMatchesSelector || v.msMatchesSelector)) && c(function(n) {
                r.disconnectedMatch = ct.call(n, "div");
                ct.call(n, "[s!='']:x");
                g.push("!=", dt)
            }), o = o.length && new RegExp(o.join("|")), g = g.length && new RegExp(g.join("|")), a = ot.test(v.compareDocumentPosition), et = a || ot.test(v.contains) ? function(n, t) {
                var r = 9 === n.nodeType ? n.documentElement : n,
                    i = t && t.parentNode;
                return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
            } : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n) return !0;
                return !1
            }, bt = a ? function(n, t) {
                if (n === t) return rt = !0, 0;
                var i = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, 1 & i || !r.sortDetached && t.compareDocumentPosition(n) === i ? n === u || n.ownerDocument === s && et(s, n) ? -1 : t === u || t.ownerDocument === s && et(s, t) ? 1 : y ? nt.call(y, n) - nt.call(y, t) : 0 : 4 & i ? -1 : 1)
            } : function(n, t) {
                if (n === t) return rt = !0, 0;
                var i, r = 0,
                    o = n.parentNode,
                    h = t.parentNode,
                    f = [n],
                    e = [t];
                if (!o || !h) return n === u ? -1 : t === u ? 1 : o ? -1 : h ? 1 : y ? nt.call(y, n) - nt.call(y, t) : 0;
                if (o === h) return pi(n, t);
                for (i = n; i = i.parentNode;) f.unshift(i);
                for (i = t; i = i.parentNode;) e.unshift(i);
                while (f[r] === e[r]) r++;
                return r ? pi(f[r], e[r]) : f[r] === s ? -1 : e[r] === s ? 1 : 0
            }, u) : e
        };
        u.matches = function(n, t) {
            return u(n, null, null, t)
        };
        u.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== e && p(n), t = t.replace(ir, "='$1']"), !(!r.matchesSelector || !l || g && g.test(t) || o && o.test(t))) try {
                var i = ct.call(n, t);
                if (i || r.disconnectedMatch || n.document && 11 !== n.document.nodeType) return i
            } catch (f) {}
            return u(t, e, null, [n]).length > 0
        };
        u.contains = function(n, t) {
            return (n.ownerDocument || n) !== e && p(n), et(n, t)
        };
        u.attr = function(n, i) {
            (n.ownerDocument || n) !== e && p(n);
            var f = t.attrHandle[i.toLowerCase()],
                u = f && ki.call(t.attrHandle, i.toLowerCase()) ? f(n, i, !l) : void 0;
            return void 0 !== u ? u : r.attributes || !l ? n.getAttribute(i) : (u = n.getAttributeNode(i)) && u.specified ? u.value : null
        };
        u.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        };
        u.uniqueSort = function(n) {
            var u, f = [],
                t = 0,
                i = 0;
            if (rt = !r.detectDuplicates, y = !r.sortStable && n.slice(0), n.sort(bt), rt) {
                while (u = n[i++]) u === n[i] && (t = f.push(i));
                while (t--) n.splice(f[t], 1)
            }
            return y = null, n
        };
        st = u.getText = function(n) {
            var r, i = "",
                u = 0,
                t = n.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof n.textContent) return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                } else if (3 === t || 4 === t) return n.nodeValue
            } else
                while (r = n[u++]) i += st(r);
            return i
        };
        t = u.selectors = {
            cacheLength: 50,
            createPseudo: h,
            match: at,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(n) {
                    return n[1] = n[1].replace(k, d), n[3] = (n[4] || n[5] || "").replace(k, d), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n
                },
                PSEUDO: function(n) {
                    var i, t = !n[5] && n[2];
                    return at.CHILD.test(n[0]) ? null : (n[3] && void 0 !== n[4] ? n[2] = n[4] : t && rr.test(t) && (i = vt(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(k, d).toLowerCase();
                    return "*" === n ? function() {
                        return !0
                    } : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = si[n + " "];
                    return t || (t = new RegExp("(^|" + i + ")" + n + "(" + i + "|$)")) && si(n, function(n) {
                        return t.test("string" == typeof n.className && n.className || typeof n.getAttribute !== ut && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(r) {
                        var f = u.attr(r, n);
                        return null == f ? "!=" === t : t ? (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = "nth" !== n.slice(0, 3),
                        o = "last" !== n.slice(-4),
                        e = "of-type" === t;
                    return 1 === r && 0 === u ? function(n) {
                        return !!n.parentNode
                    } : function(t, i, h) {
                        var v, k, c, l, y, w, b = s !== o ? "nextSibling" : "previousSibling",
                            p = t.parentNode,
                            g = e && t.nodeName.toLowerCase(),
                            d = !h && !e;
                        if (p) {
                            if (s) {
                                while (b) {
                                    for (c = t; c = c[b];)
                                        if (e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                    w = b = "only" === n && !w && "nextSibling"
                                }
                                return !0
                            }
                            if (w = [o ? p.firstChild : p.lastChild], o && d) {
                                for (k = p[f] || (p[f] = {}), v = k[n] || [], y = v[0] === a && v[1], l = v[0] === a && v[2], c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop();)
                                    if (1 === c.nodeType && ++l && c === t) {
                                        k[n] = [a, y, l];
                                        break
                                    }
                            } else if (d && (v = (t[f] || (t[f] = {}))[n]) && v[0] === a) l = v[1];
                            else
                                while (c = ++y && c && c[b] || (l = y = 0) || w.pop())
                                    if ((e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [a, l]), c === t)) break; return l -= u, l === r || l % r == 0 && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, i) {
                    var e, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                    return r[f] ? r(i) : r.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? h(function(n, t) {
                        for (var u, f = r(n, i), e = f.length; e--;) u = nt.call(n, f[e]), n[u] = !(t[u] = f[e])
                    }) : function(n) {
                        return r(n, 0, e)
                    }) : r
                }
            },
            pseudos: {
                not: h(function(n) {
                    var i = [],
                        r = [],
                        t = wt(n.replace(lt, "$1"));
                    return t[f] ? h(function(n, i, r, u) {
                        for (var e, o = t(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(i[f] = e))
                    }) : function(n, u, f) {
                        return i[0] = n, t(i, null, f, r), !r.pop()
                    }
                }),
                has: h(function(n) {
                    return function(t) {
                        return u(n, t).length > 0
                    }
                }),
                contains: h(function(n) {
                    return function(t) {
                        return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                    }
                }),
                lang: h(function(n) {
                    return ur.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(k, d).toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = l ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === v
                },
                focus: function(n) {
                    return n === e.activeElement && (!e.hasFocus || e.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: function(n) {
                    return n.disabled === !1
                },
                disabled: function(n) {
                    return n.disabled === !0
                },
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && !!n.checked || "option" === t && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6) return !1;
                    return !0
                },
                parent: function(n) {
                    return !t.pseudos.empty(n)
                },
                header: function(n) {
                    return er.test(n.nodeName)
                },
                input: function(n) {
                    return fr.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && "button" === n.type || "button" === t
                },
                text: function(n) {
                    var t;
                    return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: tt(function() {
                    return [0]
                }),
                last: tt(function(n, t) {
                    return [t - 1]
                }),
                eq: tt(function(n, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: tt(function(n, t) {
                    for (var i = 0; t > i; i += 2) n.push(i);
                    return n
                }),
                odd: tt(function(n, t) {
                    for (var i = 1; t > i; i += 2) n.push(i);
                    return n
                }),
                lt: tt(function(n, t, i) {
                    for (var r = 0 > i ? i + t : i; --r >= 0;) n.push(r);
                    return n
                }),
                gt: tt(function(n, t, i) {
                    for (var r = 0 > i ? i + t : i; ++r < t;) n.push(r);
                    return n
                })
            }
        };
        t.pseudos.nth = t.pseudos.eq;
        for (it in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) t.pseudos[it] = hr(it);
        for (it in {
                submit: !0,
                reset: !0
            }) t.pseudos[it] = cr(it);
        return wi.prototype = t.filters = t.pseudos, t.setFilters = new wi, wt = u.compile = function(n, t) {
            var r, u = [],
                e = [],
                i = ci[n + " "];
            if (!i) {
                for (t || (t = vt(n)), r = t.length; r--;) i = ei(t[r]), i[f] ? u.push(i) : e.push(i);
                i = ci(n, lr(e, u))
            }
            return i
        }, r.sortStable = f.split("").sort(bt).join("") === f, r.detectDuplicates = !!rt, p(), r.sortDetached = c(function(n) {
            return 1 & n.compareDocumentPosition(e.createElement("div"))
        }), c(function(n) {
            return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href")
        }) || ti("type|href|height|width", function(n, t, i) {
            if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), r.attributes && c(function(n) {
            return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value")
        }) || ti("value", function(n, t, i) {
            if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue
        }), c(function(n) {
            return null == n.getAttribute("disabled")
        }) || ti(kt, function(n, t, i) {
            var r;
            if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }), u
    }(n);
    i.find = p;
    i.expr = p.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.unique = p.uniqueSort;
    i.text = p.getText;
    i.isXMLDoc = p.isXML;
    i.contains = p.contains;
    var fr = i.expr.match.needsContext,
        er = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ue = /^.[^:#\[\.,]*$/;
    i.filter = function(n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return 1 === n.nodeType
        }))
    };
    i.fn.extend({
        find: function(n) {
            var t, r = [],
                u = this,
                f = u.length;
            if ("string" != typeof n) return this.pushStack(i(n).filter(function() {
                for (t = 0; f > t; t++)
                    if (i.contains(u[t], this)) return !0
            }));
            for (t = 0; f > t; t++) i.find(n, u[t], r);
            return r = this.pushStack(f > 1 ? i.unique(r) : r), r.selector = this.selector ? this.selector + " " + n : n, r
        },
        filter: function(n) {
            return this.pushStack(ui(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(ui(this, n || [], !0))
        },
        is: function(n) {
            return !!ui(this, "string" == typeof n && fr.test(n) ? i(n) : n || [], !1).length
        }
    });
    var ft, u = n.document,
        fe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ee = i.fn.init = function(n, t) {
            var r, f;
            if (!n) return this;
            if ("string" == typeof n) {
                if (r = "<" === n.charAt(0) && ">" === n.charAt(n.length - 1) && n.length >= 3 ? [null, n, null] : fe.exec(n), !r || !r[1] && t) return !t || t.jquery ? (t || ft).find(n) : this.constructor(t).find(n);
                if (r[1]) {
                    if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), er.test(r[1]) && i.isPlainObject(t))
                        for (r in t) i.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                if (f = u.getElementById(r[2]), f && f.parentNode) {
                    if (f.id !== r[2]) return ft.find(n);
                    this.length = 1;
                    this[0] = f
                }
                return this.context = u, this.selector = n, this
            }
            return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? "undefined" != typeof ft.ready ? ft.ready(n) : n(i) : (void 0 !== n.selector && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
        };
    ee.prototype = i.fn;
    ft = i(u);
    or = /^(?:parents|prev(?:Until|All))/;
    sr = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.extend({
        dir: function(n, t, r) {
            for (var f = [], u = n[t]; u && 9 !== u.nodeType && (void 0 === r || 1 !== u.nodeType || !i(u).is(r));) 1 === u.nodeType && f.push(u), u = u[t];
            return f
        },
        sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
            return i
        }
    });
    i.fn.extend({
        has: function(n) {
            var t, r = i(n, this),
                u = r.length;
            return this.filter(function() {
                for (t = 0; u > t; t++)
                    if (i.contains(this, r[t])) return !0
            })
        },
        closest: function(n, t) {
            for (var r, f = 0, o = this.length, u = [], e = fr.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)
                for (r = this[f]; r && r !== t; r = r.parentNode)
                    if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                        u.push(r);
                        break
                    }
            return this.pushStack(u.length > 1 ? i.unique(u) : u)
        },
        index: function(n) {
            return n ? "string" == typeof n ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.unique(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function(n) {
            return hr(n, "nextSibling")
        },
        prev: function(n) {
            return hr(n, "previousSibling")
        },
        nextAll: function(n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function(n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function(n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return i.sibling(n.firstChild)
        },
        contents: function(n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), this.length > 1 && (sr[n] || (f = i.unique(f)), or.test(n) && (f = f.reverse())), this.pushStack(f)
        }
    });
    h = /\S+/g;
    fi = {};
    i.Callbacks = function(n) {
        n = "string" == typeof n ? fi[n] || oe(n) : i.extend({}, n);
        var o, u, h, f, e, c, t = [],
            r = !n.once && [],
            l = function(i) {
                for (u = n.memory && i, h = !0, e = c || 0, c = 0, f = t.length, o = !0; t && f > e; e++)
                    if (t[e].apply(i[0], i[1]) === !1 && n.stopOnFalse) {
                        u = !1;
                        break
                    }
                o = !1;
                t && (r ? r.length && l(r.shift()) : u ? t = [] : s.disable())
            },
            s = {
                add: function() {
                    if (t) {
                        var r = t.length;
                        ! function e(r) {
                            i.each(r, function(r, u) {
                                var f = i.type(u);
                                "function" === f ? n.unique && s.has(u) || t.push(u) : u && u.length && "string" !== f && e(u)
                            })
                        }(arguments);
                        o ? f = t.length : u && (c = r, l(u))
                    }
                    return this
                },
                remove: function() {
                    return t && i.each(arguments, function(n, r) {
                        for (var u;
                            (u = i.inArray(r, t, u)) > -1;) t.splice(u, 1), o && (f >= u && f--, e >= u && e--)
                    }), this
                },
                has: function(n) {
                    return n ? i.inArray(n, t) > -1 : !(!t || !t.length)
                },
                empty: function() {
                    return t = [], f = 0, this
                },
                disable: function() {
                    return t = r = u = void 0, this
                },
                disabled: function() {
                    return !t
                },
                lock: function() {
                    return r = void 0, u || s.disable(), this
                },
                locked: function() {
                    return !r
                },
                fireWith: function(n, i) {
                    return !t || h && !r || (i = i || [], i = [n, i.slice ? i.slice() : i], o ? r.push(i) : l(i)), this
                },
                fire: function() {
                    return s.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!h
                }
            };
        return s
    };
    i.extend({
        Deferred: function(n) {
            var u = [
                    ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", i.Callbacks("memory")]
                ],
                f = "pending",
                r = {
                    state: function() {
                        return f
                    },
                    always: function() {
                        return t.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var n = arguments;
                        return i.Deferred(function(f) {
                            i.each(u, function(u, e) {
                                var o = i.isFunction(n[u]) && n[u];
                                t[e[1]](function() {
                                    var n = o && o.apply(this, arguments);
                                    n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                                })
                            });
                            n = null
                        }).promise()
                    },
                    promise: function(n) {
                        return null != n ? i.extend(n, r) : r
                    }
                },
                t = {};
            return r.pipe = r.then, i.each(u, function(n, i) {
                var e = i[2],
                    o = i[3];
                r[i[1]] = e.add;
                o && e.add(function() {
                    f = o
                }, u[1 ^ n][2].disable, u[2][2].lock);
                t[i[0]] = function() {
                    return t[i[0] + "With"](this === t ? r : this, arguments), this
                };
                t[i[0] + "With"] = e.fireWith
            }), r.promise(t), n && n.call(t, t), t
        },
        when: function(n) {
            var t = 0,
                u = l.call(arguments),
                r = u.length,
                e = 1 !== r || n && i.isFunction(n.promise) ? r : 0,
                f = 1 === e ? n : i.Deferred(),
                h = function(n, t, i) {
                    return function(r) {
                        t[n] = this;
                        i[n] = arguments.length > 1 ? l.call(arguments) : r;
                        i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                    }
                },
                o, c, s;
            if (r > 1)
                for (o = new Array(r), c = new Array(r), s = new Array(r); r > t; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
            return e || f.resolveWith(s, u), f.promise()
        }
    });
    i.fn.ready = function(n) {
        return i.ready.promise().done(n), this
    };
    i.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function(n) {
            if (n === !0 ? !--i.readyWait : !i.isReady) {
                if (!u.body) return setTimeout(i.ready);
                i.isReady = !0;
                n !== !0 && --i.readyWait > 0 || (lt.resolveWith(u, [i]), i.fn.trigger && i(u).trigger("ready").off("ready"))
            }
        }
    });
    i.ready.promise = function(t) {
        if (!lt)
            if (lt = i.Deferred(), "complete" === u.readyState) setTimeout(i.ready);
            else if (u.addEventListener) u.addEventListener("DOMContentLoaded", a, !1), n.addEventListener("load", a, !1);
        else {
            u.attachEvent("onreadystatechange", a);
            n.attachEvent("onload", a);
            var r = !1;
            try {
                r = null == n.frameElement && u.documentElement
            } catch (e) {}
            r && r.doScroll && ! function f() {
                if (!i.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (n) {
                        return setTimeout(f, 50)
                    }
                    cr();
                    i.ready()
                }
            }()
        }
        return lt.promise(t)
    };
    o = "undefined";
    for (lr in i(r)) break;
    r.ownLast = "0" !== lr;
    r.inlineBlockNeedsLayout = !1;
    i(function() {
            var t, n, i = u.getElementsByTagName("body")[0];
            i && (t = u.createElement("div"), t.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", n = u.createElement("div"), i.appendChild(t).appendChild(n), typeof n.style.zoom !== o && (n.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (r.inlineBlockNeedsLayout = 3 === n.offsetWidth) && (i.style.zoom = 1)), i.removeChild(t), t = n = null)
        }),
        function() {
            var n = u.createElement("div");
            if (null == r.deleteExpando) {
                r.deleteExpando = !0;
                try {
                    delete n.test
                } catch (t) {
                    r.deleteExpando = !1
                }
            }
            n = null
        }();
    i.acceptData = function(n) {
        var t = i.noData[(n.nodeName + " ").toLowerCase()],
            r = +n.nodeType || 1;
        return 1 !== r && 9 !== r ? !1 : !t || t !== !0 && n.getAttribute("classid") === t
    };
    ar = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
    vr = /([A-Z])/g;
    i.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !ei(n)
        },
        data: function(n, t, i) {
            return pr(n, t, i)
        },
        removeData: function(n, t) {
            return wr(n, t)
        },
        _data: function(n, t, i) {
            return pr(n, t, i, !0)
        },
        _removeData: function(n, t) {
            return wr(n, t, !0)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var f, u, e, r = this[0],
                o = r && r.attributes;
            if (void 0 === n) {
                if (this.length && (e = i.data(r), 1 === r.nodeType && !i._data(r, "parsedAttrs"))) {
                    for (f = o.length; f--;) u = o[f].name, 0 === u.indexOf("data-") && (u = i.camelCase(u.slice(5)), yr(r, u, e[u]));
                    i._data(r, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof n ? this.each(function() {
                i.data(this, n)
            }) : arguments.length > 1 ? this.each(function() {
                i.data(this, n, t)
            }) : r ? yr(r, n, i.data(r, n)) : void 0
        },
        removeData: function(n) {
            return this.each(function() {
                i.removeData(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, r) {
            var u;
            if (n) return (t = (t || "fx") + "queue", u = i._data(n, t), r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)), u || [])
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t),
                o = function() {
                    i.dequeue(n, t)
                };
            "inprogress" === u && (u = r.shift(), e--);
            u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var r = t + "queueHooks";
            return i._data(n, r) || i._data(n, r, {
                empty: i.Callbacks("once memory").add(function() {
                    i._removeData(n, t + "queue");
                    i._removeData(n, r)
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var r, f = 1,
                e = i.Deferred(),
                u = this,
                o = this.length,
                s = function() {
                    --f || e.resolveWith(u, [u])
                };
            for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; o--;) r = i._data(u[o], n + "queueHooks"), r && r.empty && (f++, r.empty.add(s));
            return s(), e.promise(t)
        }
    });
    var at = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        w = ["Top", "Right", "Bottom", "Left"],
        et = function(n, t) {
            return n = t || n, "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
        },
        b = i.access = function(n, t, r, u, f, e, o) {
            var s = 0,
                c = n.length,
                h = null == r;
            if ("object" === i.type(r)) {
                f = !0;
                for (s in r) i.access(n, t, s, r[s], !0, e, o)
            } else if (void 0 !== u && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) {
                    return h.call(i(n), r)
                })), t))
                for (; c > s; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
            return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
        },
        oi = /^(?:checkbox|radio)$/i;
    ! function() {
        var i = u.createDocumentFragment(),
            n = u.createElement("div"),
            t = u.createElement("input");
        if (n.setAttribute("className", "t"), n.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a>", r.leadingWhitespace = 3 === n.firstChild.nodeType, r.tbody = !n.getElementsByTagName("tbody").length, r.htmlSerialize = !!n.getElementsByTagName("link").length, r.html5Clone = "<:nav><\/:nav>" !== u.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), r.appendChecked = t.checked, n.innerHTML = "<textarea>x<\/textarea>", r.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue, i.appendChild(n), n.innerHTML = "<input type='radio' checked='checked' name='t'/>", r.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked, r.noCloneEvent = !0, n.attachEvent && (n.attachEvent("onclick", function() {
                r.noCloneEvent = !1
            }), n.cloneNode(!0).click()), null == r.deleteExpando) {
            r.deleteExpando = !0;
            try {
                delete n.test
            } catch (f) {
                r.deleteExpando = !1
            }
        }
        i = n = t = null
    }(),
    function() {
        var t, i, f = u.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) i = "on" + t, (r[t + "Bubbles"] = i in n) || (f.setAttribute(i, "t"), r[t + "Bubbles"] = f.attributes[i].expando === !1);
        f = null
    }();
    var si = /^(?:input|select|textarea)$/i,
        se = /^key/,
        he = /^(?:mouse|contextmenu)|click/,
        br = /^(?:focusinfocus|focusoutblur)$/,
        kr = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {
        global: {},
        add: function(n, t, r, u, f) {
            var w, y, b, p, s, c, l, a, e, k, d, v = i._data(n);
            if (v) {
                for (r.handler && (p = r, r = p.handler, f = p.selector), r.guid || (r.guid = i.guid++), (y = v.events) || (y = v.events = {}), (c = v.handle) || (c = v.handle = function(n) {
                        if (typeof i !== o && (!n || i.event.triggered !== n.type)) return i.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = n), t = (t || "").match(h) || [""], b = t.length; b--;) w = kr.exec(t[b]) || [], e = d = w[1], k = (w[2] || "").split(".").sort(), e && (s = i.event.special[e] || {}, e = (f ? s.delegateType : s.bindType) || e, s = i.event.special[e] || {}, l = i.extend({
                    type: e,
                    origType: d,
                    data: u,
                    handler: r,
                    guid: r.guid,
                    selector: f,
                    needsContext: f && i.expr.match.needsContext.test(f),
                    namespace: k.join(".")
                }, p), (a = y[e]) || (a = y[e] = [], a.delegateCount = 0, s.setup && s.setup.call(n, u, k, c) !== !1 || (n.addEventListener ? n.addEventListener(e, c, !1) : n.attachEvent && n.attachEvent("on" + e, c))), s.add && (s.add.call(n, l), l.handler.guid || (l.handler.guid = r.guid)), f ? a.splice(a.delegateCount++, 0, l) : a.push(l), i.event.global[e] = !0);
                n = null
            }
        },
        remove: function(n, t, r, u, f) {
            var y, o, s, b, p, a, c, l, e, w, k, v = i.hasData(n) && i._data(n);
            if (v && (a = v.events)) {
                for (t = (t || "").match(h) || [""], p = t.length; p--;)
                    if (s = kr.exec(t[p]) || [], e = k = s[1], w = (s[2] || "").split(".").sort(), e) {
                        for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, l = a[e] || [], s = s[2] && new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"), b = y = l.length; y--;) o = l[y], !f && k !== o.origType || r && r.guid !== o.guid || s && !s.test(o.namespace) || u && u !== o.selector && ("**" !== u || !o.selector) || (l.splice(y, 1), o.selector && l.delegateCount--, c.remove && c.remove.call(n, o));
                        b && !l.length && (c.teardown && c.teardown.call(n, w, v.handle) !== !1 || i.removeEvent(n, e, v.handle), delete a[e])
                    } else
                        for (e in a) i.event.remove(n, e + t[p], r, u, !0);
                i.isEmptyObject(a) && (delete v.handle, i._removeData(n, "events"))
            }
        },
        trigger: function(t, r, f, e) {
            var l, a, o, p, c, h, w, y = [f || u],
                s = tt.call(t, "type") ? t.type : t,
                v = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = h = f = f || u, 3 !== f.nodeType && 8 !== f.nodeType && !br.test(s + i.event.triggered) && (s.indexOf(".") >= 0 && (v = s.split("."), s = v.shift(), v.sort()), a = s.indexOf(":") < 0 && "on" + s, t = t[i.expando] ? t : new i.Event(s, "object" == typeof t && t), t.isTrigger = e ? 2 : 3, t.namespace = v.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = f), r = null == r ? [t] : i.makeArray(r, [t]), c = i.event.special[s] || {}, e || !c.trigger || c.trigger.apply(f, r) !== !1)) {
                if (!e && !c.noBubble && !i.isWindow(f)) {
                    for (p = c.delegateType || s, br.test(p + s) || (o = o.parentNode); o; o = o.parentNode) y.push(o), h = o;
                    h === (f.ownerDocument || u) && y.push(h.defaultView || h.parentWindow || n)
                }
                for (w = 0;
                    (o = y[w++]) && !t.isPropagationStopped();) t.type = w > 1 ? p : c.bindType || s, l = (i._data(o, "events") || {})[t.type] && i._data(o, "handle"), l && l.apply(o, r), l = a && o[a], l && l.apply && i.acceptData(o) && (t.result = l.apply(o, r), t.result === !1 && t.preventDefault());
                if (t.type = s, !e && !t.isDefaultPrevented() && (!c._default || c._default.apply(y.pop(), r) === !1) && i.acceptData(f) && a && f[s] && !i.isWindow(f)) {
                    h = f[a];
                    h && (f[a] = null);
                    i.event.triggered = s;
                    try {
                        f[s]()
                    } catch (b) {}
                    i.event.triggered = void 0;
                    h && (f[a] = h)
                }
                return t.result
            }
        },
        dispatch: function(n) {
            n = i.event.fix(n);
            var e, f, t, r, o, s = [],
                h = l.call(arguments),
                c = (i._data(this, "events") || {})[n.type] || [],
                u = i.event.special[n.type] || {};
            if (h[0] = n, n.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, n) !== !1) {
                for (s = i.event.handlers.call(this, n, c), e = 0;
                    (r = s[e++]) && !n.isPropagationStopped();)
                    for (n.currentTarget = r.elem, o = 0;
                        (t = r.handlers[o++]) && !n.isImmediatePropagationStopped();)(!n.namespace_re || n.namespace_re.test(t.namespace)) && (n.handleObj = t, n.data = t.data, f = ((i.event.special[t.origType] || {}).handle || t.handler).apply(r.elem, h), void 0 !== f && (n.result = f) === !1 && (n.preventDefault(), n.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, n), n.result
            }
        },
        handlers: function(n, t) {
            var f, e, u, o, h = [],
                s = t.delegateCount,
                r = n.target;
            if (s && r.nodeType && (!n.button || "click" !== n.type))
                for (; r != this; r = r.parentNode || this)
                    if (1 === r.nodeType && (r.disabled !== !0 || "click" !== n.type)) {
                        for (u = [], o = 0; s > o; o++) e = t[o], f = e.selector + " ", void 0 === u[f] && (u[f] = e.needsContext ? i(f, this).index(r) >= 0 : i.find(f, this, null, [r]).length), u[f] && u.push(e);
                        u.length && h.push({
                            elem: r,
                            handlers: u
                        })
                    }
            return s < t.length && h.push({
                elem: this,
                handlers: t.slice(s)
            }), h
        },
        fix: function(n) {
            if (n[i.expando]) return n;
            var e, o, s, r = n.type,
                f = n,
                t = this.fixHooks[r];
            for (t || (this.fixHooks[r] = t = he.test(r) ? this.mouseHooks : se.test(r) ? this.keyHooks : {}), s = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(f), e = s.length; e--;) o = s[e], n[o] = f[o];
            return n.target || (n.target = f.srcElement || u), 3 === n.target.nodeType && (n.target = n.target.parentNode), n.metaKey = !!n.metaKey, t.filter ? t.filter(n, f) : n
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(n, t) {
                return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode), n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(n, t) {
                var i, e, r, f = t.button,
                    o = t.fromElement;
                return null == n.pageX && null != t.clientX && (e = n.target.ownerDocument || u, r = e.documentElement, i = e.body, n.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), n.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !n.relatedTarget && o && (n.relatedTarget = o === n.target ? t.toElement : o), n.which || void 0 === f || (n.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), n
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== dr() && this.focus) try {
                        return this.focus(), !1
                    } catch (n) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === dr() && this.blur) return (this.blur(), !1)
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (i.nodeName(this, "input") && "checkbox" === this.type && this.click) return (this.click(), !1)
                },
                _default: function(n) {
                    return i.nodeName(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    void 0 !== n.result && (n.originalEvent.returnValue = n.result)
                }
            }
        },
        simulate: function(n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.removeEvent = u.removeEventListener ? function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    } : function(n, t, i) {
        var r = "on" + t;
        n.detachEvent && (typeof n[r] === o && (n[r] = null), n.detachEvent(r, i))
    };
    i.Event = function(n, t) {
        return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && (n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault()) ? vt : it) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), void(this[i.expando] = !0)) : new i.Event(n, t)
    };
    i.Event.prototype = {
        isDefaultPrevented: it,
        isPropagationStopped: it,
        isImmediatePropagationStopped: it,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = vt;
            n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = vt;
            n && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = vt;
            this.stopPropagation()
        }
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this,
                    r = n.relatedTarget,
                    e = n.handleObj;
                return (!r || r !== f && !i.contains(f, r)) && (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
            }
        }
    });
    r.submitBubbles || (i.event.special.submit = {
        setup: function() {
            return i.nodeName(this, "form") ? !1 : void i.event.add(this, "click._submit keypress._submit", function(n) {
                var r = n.target,
                    t = i.nodeName(r, "input") || i.nodeName(r, "button") ? r.form : void 0;
                t && !i._data(t, "submitBubbles") && (i.event.add(t, "submit._submit", function(n) {
                    n._submit_bubble = !0
                }), i._data(t, "submitBubbles", !0))
            })
        },
        postDispatch: function(n) {
            n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
        },
        teardown: function() {
            return i.nodeName(this, "form") ? !1 : void i.event.remove(this, "._submit")
        }
    });
    r.changeBubbles || (i.event.special.change = {
        setup: function() {
            return si.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (i.event.add(this, "propertychange._change", function(n) {
                "checked" === n.originalEvent.propertyName && (this._just_changed = !0)
            }), i.event.add(this, "click._change", function(n) {
                this._just_changed && !n.isTrigger && (this._just_changed = !1);
                i.event.simulate("change", this, n, !0)
            })), !1) : void i.event.add(this, "beforeactivate._change", function(n) {
                var t = n.target;
                si.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change", function(n) {
                    !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                }), i._data(t, "changeBubbles", !0))
            })
        },
        handle: function(n) {
            var t = n.target;
            if (this !== t || n.isSimulated || n.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return n.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return i.event.remove(this, "._change"), !si.test(this.nodeName)
        }
    });
    r.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var r = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n), !0)
        };
        i.event.special[t] = {
            setup: function() {
                var u = this.ownerDocument || this,
                    f = i._data(u, t);
                f || u.addEventListener(n, r, !0);
                i._data(u, t, (f || 0) + 1)
            },
            teardown: function() {
                var u = this.ownerDocument || this,
                    f = i._data(u, t) - 1;
                f ? i._data(u, t, f) : (u.removeEventListener(n, r, !0), i._removeData(u, t))
            }
        }
    });
    i.fn.extend({
        on: function(n, t, r, u, f) {
            var o, e;
            if ("object" == typeof n) {
                "string" != typeof t && (r = r || t, t = void 0);
                for (o in n) this.on(o, t, r, n[o], f);
                return this
            }
            if (null == r && null == u ? (u = t, r = t = void 0) : null == u && ("string" == typeof t ? (u = r, r = void 0) : (u = r, r = t, t = void 0)), u === !1) u = it;
            else if (!u) return this;
            return 1 === f && (e = u, u = function(n) {
                return i().off(n), e.apply(this, arguments)
            }, u.guid = e.guid || (e.guid = i.guid++)), this.each(function() {
                i.event.add(this, n, u, r, t)
            })
        },
        one: function(n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
            if ("object" == typeof n) {
                for (f in n) this.off(f, t, n[f]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (r = t, t = void 0), r === !1 && (r = it), this.each(function() {
                i.event.remove(this, n, r, t)
            })
        },
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r) return i.event.trigger(n, t, r, !0)
        }
    });
    var nu = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ce = / jQuery\d+="(?:null|\d+)"/g,
        tu = new RegExp("<(?:" + nu + ")[\\s/>]", "i"),
        hi = /^\s+/,
        iu = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ru = /<([\w:]+)/,
        uu = /<tbody/i,
        le = /<|&#?\w+;/,
        ae = /<(?:script|style|link)/i,
        ve = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fu = /^$|\/(?:java|ecma)script/i,
        ye = /^true\/(.*)/,
        pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        s = {
            option: [1, "<select multiple='multiple'>", "<\/select>"],
            legend: [1, "<fieldset>", "<\/fieldset>"],
            area: [1, "<map>", "<\/map>"],
            param: [1, "<object>", "<\/object>"],
            thead: [1, "<table>", "<\/table>"],
            tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
            col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
            td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
            _default: r.htmlSerialize ? [0, "", ""] : [1, "X<div>", "<\/div>"]
        },
        we = gr(u),
        ci = we.appendChild(u.createElement("div"));
    s.optgroup = s.option;
    s.tbody = s.tfoot = s.colgroup = s.caption = s.thead;
    s.th = s.td;
    i.extend({
        clone: function(n, t, u) {
            var e, c, s, o, h, l = i.contains(n.ownerDocument, n);
            if (r.html5Clone || i.isXMLDoc(n) || !tu.test("<" + n.nodeName + ">") ? s = n.cloneNode(!0) : (ci.innerHTML = n.outerHTML, ci.removeChild(s = ci.firstChild)), !(r.noCloneEvent && r.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (e = f(s), h = f(n), o = 0; null != (c = h[o]); ++o) e[o] && ke(c, e[o]);
            if (t)
                if (u)
                    for (h = h || f(n), e = e || f(s), o = 0; null != (c = h[o]); o++) hu(c, e[o]);
                else hu(n, s);
            return e = f(s, "script"), e.length > 0 && li(e, !l && f(n, "script")), e = h = c = null, s
        },
        buildFragment: function(n, t, u, e) {
            for (var c, o, b, h, p, w, a, k = n.length, v = gr(t), l = [], y = 0; k > y; y++)
                if (o = n[y], o || 0 === o)
                    if ("object" === i.type(o)) i.merge(l, o.nodeType ? [o] : o);
                    else if (le.test(o)) {
                for (h = h || v.appendChild(t.createElement("div")), p = (ru.exec(o) || ["", ""])[1].toLowerCase(), a = s[p] || s._default, h.innerHTML = a[1] + o.replace(iu, "<$1><\/$2>") + a[2], c = a[0]; c--;) h = h.lastChild;
                if (!r.leadingWhitespace && hi.test(o) && l.push(t.createTextNode(hi.exec(o)[0])), !r.tbody)
                    for (o = "table" !== p || uu.test(o) ? "<table>" !== a[1] || uu.test(o) ? 0 : h : h.firstChild, c = o && o.childNodes.length; c--;) i.nodeName(w = o.childNodes[c], "tbody") && !w.childNodes.length && o.removeChild(w);
                for (i.merge(l, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = v.lastChild
            } else l.push(t.createTextNode(o));
            for (h && v.removeChild(h), r.appendChecked || i.grep(f(l, "input"), be), y = 0; o = l[y++];)
                if ((!e || -1 === i.inArray(o, e)) && (b = i.contains(o.ownerDocument, o), h = f(v.appendChild(o), "script"), b && li(h), u))
                    for (c = 0; o = h[c++];) fu.test(o.type || "") && u.push(o);
            return h = null, v
        },
        cleanData: function(n, t) {
            for (var u, e, f, s, a = 0, h = i.expando, l = i.cache, v = r.deleteExpando, y = i.event.special; null != (u = n[a]); a++)
                if ((t || i.acceptData(u)) && (f = u[h], s = f && l[f])) {
                    if (s.events)
                        for (e in s.events) y[e] ? i.event.remove(u, e) : i.removeEvent(u, e, s.handle);
                    l[f] && (delete l[f], v ? delete u[h] : typeof u.removeAttribute !== o ? u.removeAttribute(h) : u[h] = null, c.push(f))
                }
        }
    });
    i.fn.extend({
        text: function(n) {
            return b(this, function(n) {
                return void 0 === n ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || u).createTextNode(n))
            }, null, n, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = eu(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = eu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        remove: function(n, t) {
            for (var r, e = n ? i.filter(n, this) : this, u = 0; null != (r = e[u]); u++) t || 1 !== r.nodeType || i.cleanData(f(r)), r.parentNode && (t && i.contains(r.ownerDocument, r) && li(f(r, "script")), r.parentNode.removeChild(r));
            return this
        },
        empty: function() {
            for (var n, t = 0; null != (n = this[t]); t++) {
                for (1 === n.nodeType && i.cleanData(f(n, !1)); n.firstChild;) n.removeChild(n.firstChild);
                n.options && i.nodeName(n, "select") && (n.options.length = 0)
            }
            return this
        },
        clone: function(n, t) {
            return n = null == n ? !1 : n, t = null == t ? n : t, this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return b(this, function(n) {
                var t = this[0] || {},
                    u = 0,
                    e = this.length;
                if (void 0 === n) return 1 === t.nodeType ? t.innerHTML.replace(ce, "") : void 0;
                if (!("string" != typeof n || ae.test(n) || !r.htmlSerialize && tu.test(n) || !r.leadingWhitespace && hi.test(n) || s[(ru.exec(n) || ["", ""])[1].toLowerCase()])) {
                    n = n.replace(iu, "<$1><\/$2>");
                    try {
                        for (; e > u; u++) t = this[u] || {}, 1 === t.nodeType && (i.cleanData(f(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = arguments[0];
            return this.domManip(arguments, function(t) {
                n = this.parentNode;
                i.cleanData(f(this));
                n && n.replaceChild(t, this)
            }), n && (n.length || n.nodeType) ? this : this.remove()
        },
        detach: function(n) {
            return this.remove(n, !0)
        },
        domManip: function(n, t) {
            n = ir.apply([], n);
            var h, u, c, o, v, s, e = 0,
                l = this.length,
                p = this,
                w = l - 1,
                a = n[0],
                y = i.isFunction(a);
            if (y || l > 1 && "string" == typeof a && !r.checkClone && ve.test(a)) return this.each(function(i) {
                var r = p.eq(i);
                y && (n[0] = a.call(this, i, r.html()));
                r.domManip(n, t)
            });
            if (l && (s = i.buildFragment(n, this[0].ownerDocument, !1, this), h = s.firstChild, 1 === s.childNodes.length && (s = h), h)) {
                for (o = i.map(f(s, "script"), ou), c = o.length; l > e; e++) u = s, e !== w && (u = i.clone(u, !0, !0), c && i.merge(o, f(u, "script"))), t.call(this[e], u, e);
                if (c)
                    for (v = o[o.length - 1].ownerDocument, i.map(o, su), e = 0; c > e; e++) u = o[e], fu.test(u.type || "") && !i._data(u, "globalEval") && i.contains(v, u) && (u.src ? i._evalUrl && i._evalUrl(u.src) : i.globalEval((u.text || u.textContent || u.innerHTML || "").replace(pe, "")));
                s = h = null
            }
            return this
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, r = 0, f = [], e = i(n), o = e.length - 1; o >= r; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ti.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    ai = {};
    ! function() {
        var t, i, n = u.createElement("div"),
            f = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        n.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>";
        t = n.getElementsByTagName("a")[0];
        t.style.cssText = "float:left;opacity:.5";
        r.opacity = /^0.5/.test(t.style.opacity);
        r.cssFloat = !!t.style.cssFloat;
        n.style.backgroundClip = "content-box";
        n.cloneNode(!0).style.backgroundClip = "";
        r.clearCloneStyle = "content-box" === n.style.backgroundClip;
        t = n = null;
        r.shrinkWrapBlocks = function() {
            var t, r, n, e;
            if (null == i) {
                if (t = u.getElementsByTagName("body")[0], !t) return;
                e = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px";
                r = u.createElement("div");
                n = u.createElement("div");
                t.appendChild(r).appendChild(n);
                i = !1;
                typeof n.style.zoom !== o && (n.style.cssText = f + ";width:1px;padding:1px;zoom:1", n.innerHTML = "<div><\/div>", n.firstChild.style.width = "5px", i = 3 !== n.offsetWidth);
                t.removeChild(r);
                t = r = n = null
            }
            return i
        }
    }();
    var au = /^margin/,
        yt = new RegExp("^(" + at + ")(?!px)[a-z%]+$", "i"),
        k, d, de = /^(top|right|bottom|left)$/;
    n.getComputedStyle ? (k = function(n) {
        return n.ownerDocument.defaultView.getComputedStyle(n, null)
    }, d = function(n, t, r) {
        var e, o, s, u, f = n.style;
        return r = r || k(n), u = r ? r.getPropertyValue(t) || r[t] : void 0, r && ("" !== u || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), yt.test(u) && au.test(t) && (e = f.width, o = f.minWidth, s = f.maxWidth, f.minWidth = f.maxWidth = f.width = u, u = r.width, f.width = e, f.minWidth = o, f.maxWidth = s)), void 0 === u ? u : u + ""
    }) : u.documentElement.currentStyle && (k = function(n) {
        return n.currentStyle
    }, d = function(n, t, i) {
        var o, f, e, r, u = n.style;
        return i = i || k(n), r = i ? i[t] : void 0, null == r && u && u[t] && (r = u[t]), yt.test(r) && !de.test(t) && (o = u.left, f = n.runtimeStyle, e = f && f.left, e && (f.left = n.currentStyle.left), u.left = "fontSize" === t ? "1em" : r, r = u.pixelLeft + "px", u.left = o, e && (f.left = e)), void 0 === r ? r : r + "" || "auto"
    });
    ! function() {
        function a() {
            var f, t, r = u.getElementsByTagName("body")[0];
            r && (f = u.createElement("div"), t = u.createElement("div"), f.style.cssText = l, r.appendChild(f).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", i.swap(r, null != r.style.zoom ? {
                zoom: 1
            } : {}, function() {
                c = 4 === t.offsetWidth
            }), o = !0, s = !1, h = !0, n.getComputedStyle && (s = "1%" !== (n.getComputedStyle(t, null) || {}).top, o = "4px" === (n.getComputedStyle(t, null) || {
                width: "4px"
            }).width), r.removeChild(f), t = r = null)
        }
        var f, e, c, o, s, h, t = u.createElement("div"),
            l = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            v = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>";
        f = t.getElementsByTagName("a")[0];
        f.style.cssText = "float:left;opacity:.5";
        r.opacity = /^0.5/.test(f.style.opacity);
        r.cssFloat = !!f.style.cssFloat;
        t.style.backgroundClip = "content-box";
        t.cloneNode(!0).style.backgroundClip = "";
        r.clearCloneStyle = "content-box" === t.style.backgroundClip;
        f = t = null;
        i.extend(r, {
            reliableHiddenOffsets: function() {
                if (null != e) return e;
                var i, n, f, t = u.createElement("div"),
                    r = u.getElementsByTagName("body")[0];
                if (r) return t.setAttribute("className", "t"), t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>", i = u.createElement("div"), i.style.cssText = l, r.appendChild(i).appendChild(t), t.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>", n = t.getElementsByTagName("td"), n[0].style.cssText = "padding:0;margin:0;border:0;display:none", f = 0 === n[0].offsetHeight, n[0].style.display = "", n[1].style.display = "none", e = f && 0 === n[0].offsetHeight, r.removeChild(i), t = r = null, e
            },
            boxSizing: function() {
                return null == c && a(), c
            },
            boxSizingReliable: function() {
                return null == o && a(), o
            },
            pixelPosition: function() {
                return null == s && a(), s
            },
            reliableMarginRight: function() {
                var r, f, t, i;
                if (null == h && n.getComputedStyle) {
                    if (r = u.getElementsByTagName("body")[0], !r) return;
                    f = u.createElement("div");
                    t = u.createElement("div");
                    f.style.cssText = l;
                    r.appendChild(f).appendChild(t);
                    i = t.appendChild(u.createElement("div"));
                    i.style.cssText = t.style.cssText = v;
                    i.style.marginRight = i.style.width = "0";
                    t.style.width = "1px";
                    h = !parseFloat((n.getComputedStyle(i, null) || {}).marginRight);
                    r.removeChild(f)
                }
                return h
            }
        })
    }();
    i.swap = function(n, t, i, r) {
        var f, u, e = {};
        for (u in t) e[u] = n.style[u], n.style[u] = t[u];
        f = i.apply(n, r || []);
        for (u in t) n.style[u] = e[u];
        return f
    };
    var vi = /alpha\([^)]*\)/i,
        ge = /opacity\s*=\s*([^)]*)/,
        no = /^(none|table(?!-c[ea]).+)/,
        to = new RegExp("^(" + at + ")(.*)$", "i"),
        io = new RegExp("^([+-])=(" + at + ")", "i"),
        ro = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        yu = {
            letterSpacing: 0,
            fontWeight: 400
        },
        pu = ["Webkit", "O", "Moz", "ms"];
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = d(n, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: r.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(n, t, u, f) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var o, c, e, s = i.camelCase(t),
                    h = n.style;
                if (t = i.cssProps[s] || (i.cssProps[s] = wu(h, s)), e = i.cssHooks[t] || i.cssHooks[s], void 0 === u) return e && "get" in e && void 0 !== (o = e.get(n, !1, f)) ? o : h[t];
                if (c = typeof u, "string" === c && (o = io.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, t)), c = "number"), null != u && u === u && ("number" !== c || i.cssNumber[s] || (u += "px"), r.clearCloneStyle || "" !== u || 0 !== t.indexOf("background") || (h[t] = "inherit"), !(e && "set" in e && void 0 === (u = e.set(n, u, f))))) try {
                    h[t] = "";
                    h[t] = u
                } catch (l) {}
            }
        },
        css: function(n, t, r, u) {
            var s, f, e, o = i.camelCase(t);
            return t = i.cssProps[o] || (i.cssProps[o] = wu(n.style, o)), e = i.cssHooks[t] || i.cssHooks[o], e && "get" in e && (f = e.get(n, !0, r)), void 0 === f && (f = d(n, t, u)), "normal" === f && t in yu && (f = yu[t]), "" === r || r ? (s = parseFloat(f), r === !0 || i.isNumeric(s) ? s || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r) return 0 === n.offsetWidth && no.test(i.css(n, "display")) ? i.swap(n, ro, function() {
                    return gu(n, t, u)
                }) : gu(n, t, u)
            },
            set: function(n, u, f) {
                var e = f && k(n);
                return ku(n, u, f ? du(n, t, f, r.boxSizing() && "border-box" === i.css(n, "boxSizing", !1, e), e) : 0)
            }
        }
    });
    r.opacity || (i.cssHooks.opacity = {
        get: function(n, t) {
            return ge.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(n, t) {
            var r = n.style,
                u = n.currentStyle,
                e = i.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                f = u && u.filter || r.filter || "";
            r.zoom = 1;
            (t >= 1 || "" === t) && "" === i.trim(f.replace(vi, "")) && r.removeAttribute && (r.removeAttribute("filter"), "" === t || u && !u.filter) || (r.filter = vi.test(f) ? f.replace(vi, e) : f + " " + e)
        }
    });
    i.cssHooks.marginRight = vu(r.reliableMarginRight, function(n, t) {
        if (t) return i.swap(n, {
            display: "inline-block"
        }, d, [n, "marginRight"])
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++) f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        au.test(n) || (i.cssHooks[n + t].set = ku)
    });
    i.fn.extend({
        css: function(n, t) {
            return b(this, function(n, t, r) {
                var f, e, o = {},
                    u = 0;
                if (i.isArray(t)) {
                    for (f = k(n), e = t.length; e > u; u++) o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
            }, n, t, arguments.length > 1)
        },
        show: function() {
            return bu(this, !0)
        },
        hide: function() {
            return bu(this)
        },
        toggle: function(n) {
            return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                et(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    i.Tween = e;
    e.prototype = {
        constructor: e,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = e.propHooks[this.prop];
            return n && n.get ? n.get(this) : e.propHooks._default.get(this)
        },
        run: function(n) {
            var r, t = e.propHooks[this.prop];
            return this.pos = r = this.options.duration ? i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : n, this.now = (this.end - this.start) * r + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : e.propHooks._default.set(this), this
        }
    };
    e.prototype.init.prototype = e.prototype;
    e.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return null == n.elem[n.prop] || n.elem.style && null != n.elem.style[n.prop] ? (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t : 0) : n.elem[n.prop]
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (null != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    e.propHooks.scrollTop = e.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }
    };
    i.fx = e.prototype.init;
    i.fx.step = {};
    var rt, pt, uo = /^(?:toggle|show|hide)$/,
        nf = new RegExp("^(?:([+-])=|)(" + at + ")([a-z%]*)$", "i"),
        fo = /queueHooks$/,
        wt = [eo],
        st = {
            "*": [function(n, t) {
                var f = this.createTween(n, t),
                    s = f.cur(),
                    r = nf.exec(t),
                    e = r && r[3] || (i.cssNumber[n] ? "" : "px"),
                    u = (i.cssNumber[n] || "px" !== e && +s) && nf.exec(i.css(f.elem, n)),
                    o = 1,
                    h = 20;
                if (u && u[3] !== e) {
                    e = e || u[3];
                    r = r || [];
                    u = +s || 1;
                    do o = o || ".5", u /= o, i.style(f.elem, n, u + e); while (o !== (o = f.cur() / s) && 1 !== o && --h)
                }
                return r && (u = f.start = +u || +s || 0, f.unit = e, f.end = r[1] ? u + (r[1] + 1) * r[2] : +r[2]), f
            }]
        };
    i.Animation = i.extend(uf, {
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
            for (var r, u = 0, f = n.length; f > u; u++) r = n[u], st[r] = st[r] || [], st[r].unshift(t)
        },
        prefilter: function(n, t) {
            t ? wt.unshift(n) : wt.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var u = n && "object" == typeof n ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (null == u.queue || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }, u
    };
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(et).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, r, u) {
            var o = i.isEmptyObject(n),
                e = i.speed(t, r, u),
                f = function() {
                    var t = uf(this, i.extend({}, n), e);
                    (o || i._data(this, "finish")) && t.stop(!0)
                };
            return f.finish = f, o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
        },
        stop: function(n, t, r) {
            var u = function(n) {
                var t = n.stop;
                delete n.stop;
                t(r)
            };
            return "string" != typeof n && (r = t, t = n, n = void 0), t && n !== !1 && this.queue(n || "fx", []), this.each(function() {
                var o = !0,
                    t = null != n && n + "queueHooks",
                    e = i.timers,
                    f = i._data(this);
                if (t) f[t] && f[t].stop && u(f[t]);
                else
                    for (t in f) f[t] && f[t].stop && fo.test(t) && u(f[t]);
                for (t = e.length; t--;) e[t].elem !== this || null != n && e[t].queue !== n || (e[t].anim.stop(r), o = !1, e.splice(t, 1));
                (o || !r) && i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"), this.each(function() {
                var t, f = i._data(this),
                    r = f[n + "queue"],
                    e = f[n + "queueHooks"],
                    u = i.timers,
                    o = r ? r.length : 0;
                for (f.finish = !0, i.queue(this, n, []), e && e.stop && e.stop.call(this, !0), t = u.length; t--;) u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0), u.splice(t, 1));
                for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete f.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(bt(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: bt("show"),
        slideUp: bt("hide"),
        slideToggle: bt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = i.timers,
            t = 0;
        for (rt = i.now(); t < n.length; t++) r = n[t], r() || n[t] !== r || n.splice(t--, 1);
        n.length || i.fx.stop();
        rt = void 0
    };
    i.fx.timer = function(n) {
        i.timers.push(n);
        n() ? i.fx.start() : i.timers.pop()
    };
    i.fx.interval = 13;
    i.fx.start = function() {
        pt || (pt = setInterval(i.fx.tick, i.fx.interval))
    };
    i.fx.stop = function() {
        clearInterval(pt);
        pt = null
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) {
                var r = setTimeout(t, n);
                i.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var i, n, f, e, t = u.createElement("div");
            t.setAttribute("className", "t");
            t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>";
            i = t.getElementsByTagName("a")[0];
            f = u.createElement("select");
            e = f.appendChild(u.createElement("option"));
            n = t.getElementsByTagName("input")[0];
            i.style.cssText = "top:1px";
            r.getSetAttribute = "t" !== t.className;
            r.style = /top/.test(i.getAttribute("style"));
            r.hrefNormalized = "/a" === i.getAttribute("href");
            r.checkOn = !!n.value;
            r.optSelected = e.selected;
            r.enctype = !!u.createElement("form").enctype;
            f.disabled = !0;
            r.optDisabled = !e.disabled;
            n = u.createElement("input");
            n.setAttribute("value", "");
            r.input = "" === n.getAttribute("value");
            n.value = "t";
            n.setAttribute("type", "radio");
            r.radioValue = "t" === n.value;
            i = n = f = e = t = null
        }();
    ff = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, f, u = this[0];
            return arguments.length ? (f = i.isFunction(n), this.each(function(r) {
                var u;
                1 === this.nodeType && (u = f ? n.call(this, r, i(this).val()) : n, null == u ? u = "" : "number" == typeof u ? u += "" : i.isArray(u) && (u = i.map(u, function(n) {
                    return null == n ? "" : n + ""
                })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
            })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(u, "value")) ? r : (r = u.value, "string" == typeof r ? r.replace(ff, "") : null == r ? "" : r)) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return null != t ? t : i.text(n)
                }
            },
            select: {
                get: function(n) {
                    for (var o, t, s = n.options, u = n.selectedIndex, f = "select-one" === n.type || 0 > u, h = f ? null : [], c = f ? u + 1 : s.length, e = 0 > u ? c : f ? u : 0; c > e; e++)
                        if (t = s[e], !(!t.selected && e !== u || (r.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && i.nodeName(t.parentNode, "optgroup"))) {
                            if (o = i(t).val(), f) return o;
                            h.push(o)
                        }
                    return h
                },
                set: function(n, t) {
                    for (var f, r, u = n.options, o = i.makeArray(t), e = u.length; e--;)
                        if (r = u[e], i.inArray(i.valHooks.option.get(r), o) >= 0) try {
                            r.selected = f = !0
                        } catch (s) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return f || (n.selectedIndex = -1), u
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
            }
        };
        r.checkOn || (i.valHooks[this].get = function(n) {
            return null === n.getAttribute("value") ? "on" : n.value
        })
    });
    var ut, ef, v = i.expr.attrHandle,
        yi = /^(?:checked|selected)$/i,
        g = r.getSetAttribute,
        kt = r.input;
    i.fn.extend({
        attr: function(n, t) {
            return b(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var u, f, e = n.nodeType;
            if (n && 3 !== e && 8 !== e && 2 !== e) return typeof n.getAttribute === o ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (t = t.toLowerCase(), u = i.attrHooks[t] || (i.expr.match.bool.test(t) ? ef : ut)), void 0 === r ? u && "get" in u && null !== (f = u.get(n, t)) ? f : (f = i.find.attr(n, t), null == f ? void 0 : f) : null !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""), r) : void i.removeAttr(n, t))
        },
        removeAttr: function(n, t) {
            var r, u, e = 0,
                f = t && t.match(h);
            if (f && 1 === n.nodeType)
                while (r = f[e++]) u = i.propFix[r] || r, i.expr.match.bool.test(r) ? kt && g || !yi.test(r) ? n[u] = !1 : n[i.camelCase("default-" + r)] = n[u] = !1 : i.attr(n, r, ""), n.removeAttribute(g ? r : u)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!r.radioValue && "radio" === t && i.nodeName(n, "input")) {
                        var u = n.value;
                        return n.setAttribute("type", t), u && (n.value = u), t
                    }
                }
            }
        }
    });
    ef = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : kt && g || !yi.test(r) ? n.setAttribute(!g && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0, r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = v[t] || i.find.attr;
        v[t] = kt && g || !yi.test(t) ? function(n, t, i) {
            var u, f;
            return i || (f = v[t], v[t] = u, u = null != r(n, t, i) ? t.toLowerCase() : null, v[t] = f), u
        } : function(n, t, r) {
            if (!r) return n[i.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    });
    kt && g || (i.attrHooks.value = {
        set: function(n, t, r) {
            return i.nodeName(n, "input") ? void(n.defaultValue = t) : ut && ut.set(n, t, r)
        }
    });
    g || (ut = {
        set: function(n, t, i) {
            var r = n.getAttributeNode(i);
            return r || n.setAttributeNode(r = n.ownerDocument.createAttribute(i)), r.value = t += "", "value" === i || t === n.getAttribute(i) ? t : void 0
        }
    }, v.id = v.name = v.coords = function(n, t, i) {
        var r;
        if (!i) return (r = n.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, i.valHooks.button = {
        get: function(n, t) {
            var i = n.getAttributeNode(t);
            if (i && i.specified) return i.value
        },
        set: ut.set
    }, i.attrHooks.contenteditable = {
        set: function(n, t, i) {
            ut.set(n, "" === t ? !1 : t, i)
        }
    }, i.each(["width", "height"], function(n, t) {
        i.attrHooks[t] = {
            set: function(n, i) {
                if ("" === i) return (n.setAttribute(t, "auto"), i)
            }
        }
    }));
    r.style || (i.attrHooks.style = {
        get: function(n) {
            return n.style.cssText || void 0
        },
        set: function(n, t) {
            return n.style.cssText = t + ""
        }
    });
    of = /^(?:input|select|textarea|button|object)$/i;
    sf = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return b(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return n = i.propFix[n] || n, this.each(function() {
                try {
                    this[n] = void 0;
                    delete this[n]
                } catch (t) {}
            })
        }
    });
    i.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(n, t, r) {
            var f, u, o, e = n.nodeType;
            if (n && 3 !== e && 8 !== e && 2 !== e) return o = 1 !== e || !i.isXMLDoc(n), o && (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : of.test(n.nodeName) || sf.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        }
    });
    r.hrefNormalized || i.each(["href", "src"], function(n, t) {
        i.propHooks[t] = {
            get: function(n) {
                return n.getAttribute(t, 4)
            }
        }
    });
    r.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    r.enctype || (i.propFix.enctype = "encoding");
    dt = /[\t\r\n\f]/g;
    i.fn.extend({
        addClass: function(n) {
            var o, t, r, u, s, f, e = 0,
                c = this.length,
                l = "string" == typeof n && n;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).addClass(n.call(this, t, this.className))
            });
            if (l)
                for (o = (n || "").match(h) || []; c > e; e++)
                    if (t = this[e], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(dt, " ") : " ")) {
                        for (s = 0; u = o[s++];) r.indexOf(" " + u + " ") < 0 && (r += u + " ");
                        f = i.trim(r);
                        t.className !== f && (t.className = f)
                    }
            return this
        },
        removeClass: function(n) {
            var o, t, r, u, s, f, e = 0,
                c = this.length,
                l = 0 === arguments.length || "string" == typeof n && n;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).removeClass(n.call(this, t, this.className))
            });
            if (l)
                for (o = (n || "").match(h) || []; c > e; e++)
                    if (t = this[e], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(dt, " ") : "")) {
                        for (s = 0; u = o[s++];)
                            while (r.indexOf(" " + u + " ") >= 0) r = r.replace(" " + u + " ", " ");
                        f = n ? i.trim(r) : "";
                        t.className !== f && (t.className = f)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var r = typeof n;
            return "boolean" == typeof t && "string" === r ? t ? this.addClass(n) : this.removeClass(n) : this.each(i.isFunction(n) ? function(r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            } : function() {
                if ("string" === r)
                    for (var t, f = 0, u = i(this), e = n.match(h) || []; t = e[f++];) u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else(r === o || "boolean" === r) && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
            })
        },
        hasClass: function(n) {
            for (var i = " " + n + " ", t = 0, r = this.length; r > t; t++)
                if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(dt, " ").indexOf(i) >= 0) return !0;
            return !1
        }
    });
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    });
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        },
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    });
    var pi = i.now(),
        wi = /\?/,
        so = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    i.parseJSON = function(t) {
        if (n.JSON && n.JSON.parse) return n.JSON.parse(t + "");
        var f, r = null,
            u = i.trim(t + "");
        return u && !i.trim(u.replace(so, function(n, t, i, u) {
            return f && t && (r = 0), 0 === r ? n : (f = i || t, r += !u - !i, "")
        })) ? Function("return " + u)() : i.error("Invalid JSON: " + t)
    };
    i.parseXML = function(t) {
        var r, u;
        if (!t || "string" != typeof t) return null;
        try {
            n.DOMParser ? (u = new DOMParser, r = u.parseFromString(t, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(t))
        } catch (f) {
            r = void 0
        }
        return r && r.documentElement && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r
    };
    var nt, y, ho = /#.*$/,
        hf = /([?&])_=[^&]*/,
        co = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        lo = /^(?:GET|HEAD)$/,
        ao = /^\/\//,
        cf = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        lf = {},
        bi = {},
        af = "*/".concat("*");
    try {
        y = location.href
    } catch (ts) {
        y = u.createElement("a");
        y.href = "";
        y = y.href
    }
    nt = cf.exec(y.toLowerCase()) || [];
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: y,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(nt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": af,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? ki(ki(n, i.ajaxSettings), t) : ki(i.ajaxSettings, n)
        },
        ajaxPrefilter: vf(lf),
        ajaxTransport: vf(bi),
        ajax: function(n, t) {
            function w(n, t, s, h) {
                var v, it, nt, y, w, c = t;
                2 !== e && (e = 2, k && clearTimeout(k), a = void 0, b = h || "", u.readyState = n > 0 ? 4 : 0, v = n >= 200 && 300 > n || 304 === n, s && (y = vo(r, u, s)), y = yo(r, y, u, v), v ? (r.ifModified && (w = u.getResponseHeader("Last-Modified"), w && (i.lastModified[f] = w), w = u.getResponseHeader("etag"), w && (i.etag[f] = w)), 204 === n || "HEAD" === r.type ? c = "nocontent" : 304 === n ? c = "notmodified" : (c = y.state, it = y.data, nt = y.error, v = !nt)) : (nt = c, (n || !c) && (c = "error", 0 > n && (n = 0))), u.status = n, u.statusText = (t || c) + "", v ? g.resolveWith(o, [it, c, u]) : g.rejectWith(o, [u, c, nt]), u.statusCode(p), p = void 0, l && d.trigger(v ? "ajaxSuccess" : "ajaxError", [u, r, v ? it : nt]), tt.fireWith(o, [u, c]), l && (d.trigger("ajaxComplete", [u, r]), --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof n && (t = n, n = void 0);
            t = t || {};
            var s, c, f, b, k, l, a, v, r = i.ajaxSetup({}, t),
                o = r.context || r,
                d = r.context && (o.nodeType || o.jquery) ? i(o) : i.event,
                g = i.Deferred(),
                tt = i.Callbacks("once memory"),
                p = r.statusCode || {},
                it = {},
                rt = {},
                e = 0,
                ut = "canceled",
                u = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var t;
                        if (2 === e) {
                            if (!v)
                                for (v = {}; t = co.exec(b);) v[t[1].toLowerCase()] = t[2];
                            t = v[n.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === e ? b : null
                    },
                    setRequestHeader: function(n, t) {
                        var i = n.toLowerCase();
                        return e || (n = rt[i] = rt[i] || n, it[n] = t), this
                    },
                    overrideMimeType: function(n) {
                        return e || (r.mimeType = n), this
                    },
                    statusCode: function(n) {
                        var t;
                        if (n)
                            if (2 > e)
                                for (t in n) p[t] = [p[t], n[t]];
                            else u.always(n[u.status]);
                        return this
                    },
                    abort: function(n) {
                        var t = n || ut;
                        return a && a.abort(t), w(0, t), this
                    }
                };
            if (g.promise(u).complete = tt.add, u.success = u.done, u.error = u.fail, r.url = ((n || r.url || y) + "").replace(ho, "").replace(ao, nt[1] + "//"), r.type = t.method || t.type || r.method || r.type, r.dataTypes = i.trim(r.dataType || "*").toLowerCase().match(h) || [""], null == r.crossDomain && (s = cf.exec(r.url.toLowerCase()), r.crossDomain = !(!s || s[1] === nt[1] && s[2] === nt[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (nt[3] || ("http:" === nt[1] ? "80" : "443")))), r.data && r.processData && "string" != typeof r.data && (r.data = i.param(r.data, r.traditional)), yf(lf, r, t, u), 2 === e) return u;
            l = r.global;
            l && 0 == i.active++ && i.event.trigger("ajaxStart");
            r.type = r.type.toUpperCase();
            r.hasContent = !lo.test(r.type);
            f = r.url;
            r.hasContent || (r.data && (f = r.url += (wi.test(f) ? "&" : "?") + r.data, delete r.data), r.cache === !1 && (r.url = hf.test(f) ? f.replace(hf, "$1_=" + pi++) : f + (wi.test(f) ? "&" : "?") + "_=" + pi++));
            r.ifModified && (i.lastModified[f] && u.setRequestHeader("If-Modified-Since", i.lastModified[f]), i.etag[f] && u.setRequestHeader("If-None-Match", i.etag[f]));
            (r.data && r.hasContent && r.contentType !== !1 || t.contentType) && u.setRequestHeader("Content-Type", r.contentType);
            u.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + af + "; q=0.01" : "") : r.accepts["*"]);
            for (c in r.headers) u.setRequestHeader(c, r.headers[c]);
            if (r.beforeSend && (r.beforeSend.call(o, u, r) === !1 || 2 === e)) return u.abort();
            ut = "abort";
            for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) u[c](r[c]);
            if (a = yf(bi, r, t, u)) {
                u.readyState = 1;
                l && d.trigger("ajaxSend", [u, r]);
                r.async && r.timeout > 0 && (k = setTimeout(function() {
                    u.abort("timeout")
                }, r.timeout));
                try {
                    e = 1;
                    a.send(it, w)
                } catch (ft) {
                    if (!(2 > e)) throw ft;
                    w(-1, ft)
                }
            } else w(-1, "No Transport");
            return u
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, void 0, t, "script")
        }
    });
    i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, u, f) {
            return i.isFunction(r) && (f = f || u, u = r, r = void 0), i.ajax({
                url: n,
                type: t,
                dataType: f,
                data: r,
                success: u
            })
        }
    });
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    });
    i._evalUrl = function(n) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    };
    i.fn.extend({
        wrapAll: function(n) {
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).wrapAll(n.call(this, t))
            });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]);
                t.map(function() {
                    for (var n = this; n.firstChild && 1 === n.firstChild.nodeType;) n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return this.each(i.isFunction(n) ? function(t) {
                i(this).wrapInner(n.call(this, t))
            } : function() {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    i.expr.filters.hidden = function(n) {
        return n.offsetWidth <= 0 && n.offsetHeight <= 0 || !r.reliableHiddenOffsets() && "none" === (n.style && n.style.display || i.css(n, "display"))
    };
    i.expr.filters.visible = function(n) {
        return !i.expr.filters.hidden(n)
    };
    var po = /%20/g,
        wo = /\[\]$/,
        pf = /\r?\n/g,
        bo = /^(?:submit|button|image|reset|file)$/i,
        ko = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, u = [],
            f = function(n, t) {
                t = i.isFunction(t) ? t() : null == t ? "" : t;
                u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
            f(this.name, this.value)
        });
        else
            for (r in n) di(r, n[r], t, f);
        return u.join("&").replace(po, "+")
    };
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && ko.test(this.nodeName) && !bo.test(n) && (this.checked || !oi.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return null == r ? null : i.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(pf, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(pf, "\r\n")
                }
            }).get()
        }
    });
    i.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && wf() || ns()
    } : wf;
    var go = 0,
        gt = {},
        ht = i.ajaxSettings.xhr();
    return n.ActiveXObject && i(n).on("unload", function() {
        for (var n in gt) gt[n](void 0, !0)
    }), r.cors = !!ht && "withCredentials" in ht, ht = r.ajax = !!ht, ht && i.ajaxTransport(function(n) {
        if (!n.crossDomain || r.cors) {
            var t;
            return {
                send: function(r, u) {
                    var e, f = n.xhr(),
                        o = ++go;
                    if (f.open(n.type, n.url, n.async, n.username, n.password), n.xhrFields)
                        for (e in n.xhrFields) f[e] = n.xhrFields[e];
                    n.mimeType && f.overrideMimeType && f.overrideMimeType(n.mimeType);
                    n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (e in r) void 0 !== r[e] && f.setRequestHeader(e, r[e] + "");
                    f.send(n.hasContent && n.data || null);
                    t = function(r, e) {
                        var s, c, h;
                        if (t && (e || 4 === f.readyState))
                            if (delete gt[o], t = void 0, f.onreadystatechange = i.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                h = {};
                                s = f.status;
                                "string" == typeof f.responseText && (h.text = f.responseText);
                                try {
                                    c = f.statusText
                                } catch (l) {
                                    c = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = h.text ? 200 : 404
                            }
                        h && u(s, c, h, f.getAllResponseHeaders())
                    };
                    n.async ? 4 === f.readyState ? setTimeout(t) : f.onreadystatechange = gt[o] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n), n
            }
        }
    }), i.ajaxPrefilter("script", function(n) {
        void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET", n.global = !1)
    }), i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var t, r = u.head || i("head")[0] || u.documentElement;
            return {
                send: function(i, f) {
                    t = u.createElement("script");
                    t.async = !0;
                    n.scriptCharset && (t.charset = n.scriptCharset);
                    t.src = n.url;
                    t.onload = t.onreadystatechange = function(n, i) {
                        (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, i || f(200, "success"))
                    };
                    r.insertBefore(t, r.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    }), gi = [], ni = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = gi.pop() || i.expando + "_" + pi++;
            return this[n] = !0, n
        }
    }), i.ajaxPrefilter("json jsonp", function(t, r, u) {
        var f, o, e, s = t.jsonp !== !1 && (ni.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return (f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ni, "$1" + f) : t.jsonp !== !1 && (t.url += (wi.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function() {
            return e || i.error(f + " was not called"), e[0]
        }, t.dataTypes[0] = "json", o = n[f], n[f] = function() {
            e = arguments
        }, u.always(function() {
            n[f] = o;
            t[f] && (t.jsonpCallback = r.jsonpCallback, gi.push(f));
            e && i.isFunction(o) && o(e[0]);
            e = o = void 0
        }), "script")
    }), i.parseHTML = function(n, t, r) {
        if (!n || "string" != typeof n) return null;
        "boolean" == typeof t && (r = t, t = !1);
        t = t || u;
        var f = er.exec(n),
            e = !r && [];
        return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && e.length && i(e).remove(), i.merge([], f.childNodes))
    }, nr = i.fn.load, i.fn.load = function(n, t, r) {
        if ("string" != typeof n && nr) return nr.apply(this, arguments);
        var u, o, s, f = this,
            e = n.indexOf(" ");
        return e >= 0 && (u = n.slice(e, n.length), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (s = "POST"), f.length > 0 && i.ajax({
            url: n,
            type: s,
            dataType: "html",
            data: t
        }).done(function(n) {
            o = arguments;
            f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
        }).complete(r && function(n, t) {
            f.each(r, o || [n.responseText, t, n])
        }), this
    }, i.expr.filters.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }, tr = n.document.documentElement, i.offset = {
        setOffset: function(n, t, r) {
            var e, o, s, h, u, c, v, l = i.css(n, "position"),
                a = i(n),
                f = {};
            "static" === l && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            v = ("absolute" === l || "fixed" === l) && i.inArray("auto", [s, c]) > -1;
            v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            i.isFunction(t) && (t = t.call(n, r, u));
            null != t.top && (f.top = t.top - u.top + h);
            null != t.left && (f.left = t.left - u.left + o);
            "using" in t ? t.using.call(n, f) : a.css(f)
        }
    }, i.fn.extend({
        offset: function(n) {
            if (arguments.length) return void 0 === n ? this : this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
            var t, f, u = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                e = r && r.ownerDocument;
            if (e) return t = e.documentElement, i.contains(t, r) ? (typeof r.getBoundingClientRect !== o && (u = r.getBoundingClientRect()), f = bf(e), {
                top: u.top + (f.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: u.left + (f.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : u
        },
        position: function() {
            if (this[0]) {
                var n, r, t = {
                        top: 0,
                        left: 0
                    },
                    u = this[0];
                return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {
                    top: r.top - t.top - i.css(u, "marginTop", !0),
                    left: r.left - t.left - i.css(u, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent || tr; n && !i.nodeName(n, "html") && "static" === i.css(n, "position");) n = n.offsetParent;
                return n || tr
            })
        }
    }), i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, t) {
        var r = /Y/.test(t);
        i.fn[n] = function(u) {
            return b(this, function(n, u, f) {
                var e = bf(n);
                return void 0 === f ? e ? t in e ? e[t] : e.document.documentElement[u] : n[u] : void(e ? e.scrollTo(r ? i(e).scrollLeft() : f, r ? f : i(e).scrollTop()) : n[u] = f)
            }, n, u, arguments.length, null)
        }
    }), i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = vu(r.pixelPosition, function(n, r) {
            if (r) return (r = d(n, t), yt.test(r) ? i(n).position()[t] + "px" : r)
        })
    }), i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(u, f) {
                var e = arguments.length && (r || "boolean" != typeof u),
                    o = r || (u === !0 || f === !0 ? "margin" : "border");
                return b(this, function(t, r, u) {
                    var f;
                    return i.isWindow(t) ? t.document.documentElement["client" + n] : 9 === t.nodeType ? (f = t.documentElement, Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : void 0 === u ? i.css(t, r, o) : i.style(t, r, u, o)
                }, t, e ? u : void 0, e, null)
            }
        })
    }), i.fn.size = function() {
        return this.length
    }, i.fn.andSelf = i.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return i
    }), kf = n.jQuery, df = n.$, i.noConflict = function(t) {
        return n.$ === i && (n.$ = df), t && n.jQuery === i && (n.jQuery = kf), i
    }, typeof t === o && (n.jQuery = n.$ = i), i
}),
function(n, t, i) {
    typeof define == "function" && define.amd ? define(["jquery"], function(r) {
        return i(r, n, t), r.mobile
    }) : i(n.jQuery, n, t)
}(this, document, function(n, t, i) {
    (function(n, t, i, r) {
        function h(n) {
            while (n && typeof n.originalEvent != "undefined") n = n.originalEvent;
            return n
        }

        function vt(t, i) {
            var u = t.type,
                e, o, l, f, s, a, v, c, y;
            if (t = n.Event(t), t.type = i, e = t.originalEvent, o = n.event.props, u.search(/^(mouse|click)/) > -1 && (o = gt), e)
                for (v = o.length, f; v;) f = o[--v], t[f] = e[f];
            if (u.search(/mouse(down|up)|click/) > -1 && !t.which && (t.which = 1), u.search(/^touch/) !== -1 && (l = h(e), u = l.touches, s = l.changedTouches, a = u && u.length ? u[0] : s && s.length ? s[0] : r, a))
                for (c = 0, y = ct.length; c < y; c++) f = ct[c], t[f] = a[f];
            return t
        }

        function v(t) {
            for (var i = {}, r, u; t;) {
                r = n.data(t, o);
                for (u in r) r[u] && (i[u] = i.hasVirtualBinding = !0);
                t = t.parentNode
            }
            return i
        }

        function yt(t, i) {
            for (var r; t;) {
                if (r = n.data(t, o), r && (!i || r[i])) return t;
                t = t.parentNode
            }
            return null
        }

        function pt() {
            l = !1
        }

        function tt() {
            l = !0
        }

        function wt() {
            s = 0;
            y.length = 0;
            d = !1;
            tt()
        }

        function bt() {
            pt()
        }

        function w() {
            it();
            c = setTimeout(function() {
                c = 0;
                wt()
            }, n.vmouse.resetTimerDuration)
        }

        function it() {
            c && (clearTimeout(c), c = 0)
        }

        function f(t, i, r) {
            var u;
            return (r && r[t] || !r && yt(i.target, t)) && (u = vt(i, t), n(i.target).trigger(u)), u
        }

        function rt(t) {
            var r = n.data(t.target, b),
                i;
            d || s && s === r || (i = f("v" + t.type, t), i && (i.isDefaultPrevented() && t.preventDefault(), i.isPropagationStopped() && t.stopPropagation(), i.isImmediatePropagationStopped() && t.stopImmediatePropagation()))
        }

        function ut(t) {
            var o = h(t).touches,
                r, i, u;
            o && o.length === 1 && (r = t.target, i = v(r), i.hasVirtualBinding && (s = ni++, n.data(r, b, s), it(), bt(), e = !1, u = h(t).touches[0], lt = u.pageX, at = u.pageY, f("vmouseover", t, i), f("vmousedown", t, i)))
        }

        function ft(n) {
            l || (e || f("vmousecancel", n, v(n.target)), e = !0, w())
        }

        function et(t) {
            if (!l) {
                var i = h(t).touches[0],
                    o = e,
                    r = n.vmouse.moveDistanceThreshold,
                    u = v(t.target);
                e = e || Math.abs(i.pageX - lt) > r || Math.abs(i.pageY - at) > r;
                e && !o && f("vmousecancel", t, u);
                f("vmousemove", t, u);
                w()
            }
        }

        function ot(n) {
            if (!l) {
                tt();
                var t = v(n.target),
                    i, r;
                f("vmouseup", n, t);
                e || (i = f("vclick", n, t), i && i.isDefaultPrevented() && (r = h(n).changedTouches[0], y.push({
                    touchID: s,
                    x: r.clientX,
                    y: r.clientY
                }), d = !0));
                f("vmouseout", n, t);
                e = !1;
                w()
            }
        }

        function st(t) {
            var i = n.data(t, o),
                r;
            if (i)
                for (r in i)
                    if (i[r]) return !0;
            return !1
        }

        function ht() {}

        function kt(t) {
            var i = t.substr(1);
            return {
                setup: function() {
                    st(this) || n.data(this, o, {});
                    var r = n.data(this, o);
                    r[t] = !0;
                    u[t] = (u[t] || 0) + 1;
                    u[t] === 1 && p.bind(i, rt);
                    n(this).bind(i, ht);
                    g && (u.touchstart = (u.touchstart || 0) + 1, u.touchstart === 1 && p.bind("touchstart", ut).bind("touchend", ot).bind("touchmove", et).bind("scroll", ft))
                },
                teardown: function() {
                    --u[t];
                    u[t] || p.unbind(i, rt);
                    g && (--u.touchstart, u.touchstart || p.unbind("touchstart", ut).unbind("touchmove", et).unbind("touchend", ot).unbind("scroll", ft));
                    var r = n(this),
                        f = n.data(this, o);
                    f && (f[t] = !1);
                    r.unbind(i, ht);
                    st(this) || r.removeData(o)
                }
            }
        }
        var o = "virtualMouseBindings",
            b = "virtualTouchID",
            k = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
            ct = "clientX clientY pageX pageY screenX screenY".split(" "),
            dt = n.event.mouseHooks ? n.event.mouseHooks.props : [],
            gt = n.event.props.concat(dt),
            u = {},
            c = 0,
            lt = 0,
            at = 0,
            e = !1,
            y = [],
            d = !1,
            l = !1,
            g = "addEventListener" in i,
            p = n(i),
            ni = 1,
            s = 0,
            nt, a;
        for (n.vmouse = {
                moveDistanceThreshold: 10,
                clickDistanceThreshold: 10,
                resetTimerDuration: 1500
            }, a = 0; a < k.length; a++) n.event.special[k[a]] = kt(k[a]);
        g && i.addEventListener("click", function(t) {
            var f = y.length,
                e = t.target,
                o, s, i, r, u, h;
            if (f)
                for (o = t.clientX, s = t.clientY, nt = n.vmouse.clickDistanceThreshold, i = e; i;) {
                    for (r = 0; r < f; r++)
                        if (u = y[r], h = 0, i === e && Math.abs(u.x - o) < nt && Math.abs(u.y - s) < nt || n.data(i, b) === u.touchID) {
                            t.preventDefault();
                            t.stopPropagation();
                            return
                        }
                    i = i.parentNode
                }
        }, !0)
    })(n, t, i),
    function(n) {
        n.mobile = {}
    }(n),
    function(n) {
        var t = {
            touch: "ontouchend" in i
        };
        n.mobile.support = n.mobile.support || {};
        n.extend(n.support, t);
        n.extend(n.mobile.support, t)
    }(n),
    function(n, t, r) {
        function f(t, i, u, f) {
            var e = u.type;
            u.type = i;
            f ? n.event.trigger(u, r, t) : n.event.dispatch.call(t, u);
            u.type = e
        }
        var u = n(i),
            e = n.mobile.support.touch,
            s = "touchmove scroll",
            h = e ? "touchstart" : "mousedown",
            c = e ? "touchend" : "mouseup",
            o = e ? "touchmove" : "mousemove";
        n.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function(t, i) {
            n.fn[i] = function(n) {
                return n ? this.bind(i, n) : this.trigger(i)
            };
            n.attrFn && (n.attrFn[i] = !0)
        });
        n.event.special.scrollstart = {
            enabled: !0,
            setup: function() {
                function i(n, i) {
                    t = i;
                    f(r, t ? "scrollstart" : "scrollstop", n)
                }
                var r = this,
                    e = n(r),
                    t, u;
                e.bind(s, function(r) {
                    n.event.special.scrollstart.enabled && (t || i(r, !0), clearTimeout(u), u = setTimeout(function() {
                        i(r, !1)
                    }, 50))
                })
            },
            teardown: function() {
                n(this).unbind(s)
            }
        };
        n.event.special.tap = {
            tapholdThreshold: 750,
            emitTapOnTaphold: !0,
            setup: function() {
                var i = this,
                    r = n(i),
                    t = !1;
                r.bind("vmousedown", function(e) {
                    function o() {
                        clearTimeout(l)
                    }

                    function s() {
                        o();
                        r.unbind("vclick", h).unbind("vmouseup", o);
                        u.unbind("vmousecancel", s)
                    }

                    function h(n) {
                        s();
                        !t && c === n.target ? f(i, "tap", n) : t && n.preventDefault()
                    }
                    if (t = !1, e.which && e.which !== 1) return !1;
                    var c = e.target,
                        l;
                    r.bind("vmouseup", o).bind("vclick", h);
                    u.bind("vmousecancel", s);
                    l = setTimeout(function() {
                        n.event.special.tap.emitTapOnTaphold || (t = !0);
                        f(i, "taphold", n.Event("taphold", {
                            target: c
                        }))
                    }, n.event.special.tap.tapholdThreshold)
                })
            },
            teardown: function() {
                n(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup");
                u.unbind("vmousecancel")
            }
        };
        n.event.special.swipe = {
            scrollSupressionThreshold: 30,
            durationThreshold: 1e3,
            horizontalDistanceThreshold: 30,
            verticalDistanceThreshold: 30,
            getLocation: function(n) {
                var u = t.pageXOffset,
                    f = t.pageYOffset,
                    i = n.clientX,
                    r = n.clientY;
                return n.pageY === 0 && Math.floor(r) > Math.floor(n.pageY) || n.pageX === 0 && Math.floor(i) > Math.floor(n.pageX) ? (i -= u, r -= f) : (r < n.pageY - f || i < n.pageX - u) && (i = n.pageX - u, r = n.pageY - f), {
                    x: i,
                    y: r
                }
            },
            start: function(t) {
                var r = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
                    i = n.event.special.swipe.getLocation(r);
                return {
                    time: (new Date).getTime(),
                    coords: [i.x, i.y],
                    origin: n(t.target)
                }
            },
            stop: function(t) {
                var r = t.originalEvent.touches ? t.originalEvent.touches[0] : t,
                    i = n.event.special.swipe.getLocation(r);
                return {
                    time: (new Date).getTime(),
                    coords: [i.x, i.y]
                }
            },
            handleSwipe: function(t, i, r, u) {
                if (i.time - t.time < n.event.special.swipe.durationThreshold && Math.abs(t.coords[0] - i.coords[0]) > n.event.special.swipe.horizontalDistanceThreshold && Math.abs(t.coords[1] - i.coords[1]) < n.event.special.swipe.verticalDistanceThreshold) {
                    var e = t.coords[0] > i.coords[0] ? "swipeleft" : "swiperight";
                    return f(r, "swipe", n.Event("swipe", {
                        target: u,
                        swipestart: t,
                        swipestop: i
                    }), !0), f(r, e, n.Event(e, {
                        target: u,
                        swipestart: t,
                        swipestop: i
                    }), !0), !0
                }
                return !1
            },
            eventInProgress: !1,
            setup: function() {
                var i, r = this,
                    f = n(r),
                    t = {};
                i = n.data(this, "mobile-events");
                i || (i = {
                    length: 0
                }, n.data(this, "mobile-events", i));
                i.length++;
                i.swipe = t;
                t.start = function(i) {
                    if (!n.event.special.swipe.eventInProgress) {
                        n.event.special.swipe.eventInProgress = !0;
                        var e, s = n.event.special.swipe.start(i),
                            h = i.target,
                            f = !1;
                        t.move = function(t) {
                            s && !t.isDefaultPrevented() && (e = n.event.special.swipe.stop(t), f || (f = n.event.special.swipe.handleSwipe(s, e, r, h), f && (n.event.special.swipe.eventInProgress = !1)), Math.abs(s.coords[0] - e.coords[0]) > n.event.special.swipe.scrollSupressionThreshold && t.preventDefault())
                        };
                        t.stop = function() {
                            f = !0;
                            n.event.special.swipe.eventInProgress = !1;
                            u.off(o, t.move);
                            t.move = null
                        };
                        u.on(o, t.move).one(c, t.stop)
                    }
                };
                f.on(h, t.start)
            },
            teardown: function() {
                var i, t;
                i = n.data(this, "mobile-events");
                i && (t = i.swipe, delete i.swipe, i.length--, i.length === 0 && n.removeData(this, "mobile-events"));
                t && (t.start && n(this).off(h, t.start), t.move && u.off(o, t.move), t.stop && u.off(c, t.stop))
            }
        };
        n.each({
            scrollstop: "scrollstart",
            taphold: "tap",
            swipeleft: "swipe.left",
            swiperight: "swipe.right"
        }, function(t, i) {
            n.event.special[t] = {
                setup: function() {
                    n(this).bind(i, n.noop)
                },
                teardown: function() {
                    n(this).unbind(i)
                }
            }
        })
    }(n, this)
}),
function(n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : n(jQuery)
}(function(n) {
    function o(t, i) {
        var r, u, f, e = t.nodeName.toLowerCase();
        return "area" === e ? (r = t.parentNode, u = r.name, !t.href || !u || r.nodeName.toLowerCase() !== "map") ? !1 : (f = n("img[usemap='#" + u + "']")[0], !!f && s(f)) : (/input|select|textarea|button|object/.test(e) ? !t.disabled : "a" === e ? t.href || i : i) && s(t)
    }

    function s(t) {
        return n.expr.filters.visible(t) && !n(t).parents().addBack().filter(function() {
            return n.css(this, "visibility") === "hidden"
        }).length
    }

    function tt(n) {
        for (var t, i; n.length && n[0] !== document;) {
            if (t = n.css("position"), (t === "absolute" || t === "relative" || t === "fixed") && (i = parseInt(n.css("zIndex"), 10), !isNaN(i) && i !== 0)) return i;
            n = n.parent()
        }
        return 0
    }

    function v() {
        this._curInst = null;
        this._keyEvent = !1;
        this._disabledInputs = [];
        this._datepickerShowing = !1;
        this._inDialog = !1;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        };
        n.extend(this._defaults, this.regional[""]);
        this.regional.en = n.extend(!0, {}, this.regional[""]);
        this.regional["en-US"] = n.extend(!0, {}, this.regional.en);
        this.dpDiv = y(n("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>"))
    }

    function y(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(i, "mouseout", function() {
            n(this).removeClass("ui-state-hover");
            this.className.indexOf("ui-datepicker-prev") !== -1 && n(this).removeClass("ui-datepicker-prev-hover");
            this.className.indexOf("ui-datepicker-next") !== -1 && n(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", p)
    }

    function p() {
        n.datepicker._isDisabledDatepicker(r.inline ? r.dpDiv.parent()[0] : r.input[0]) || (n(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), n(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && n(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && n(this).addClass("ui-datepicker-next-hover"))
    }

    function u(t, i) {
        n.extend(t, i);
        for (var r in i) i[r] == null && (t[r] = i[r]);
        return t
    }

    function t(n) {
        return function() {
            var t = this.element.val();
            n.apply(this, arguments);
            this._refresh();
            t !== this.element.val() && this._trigger("change")
        }
    }
    var h, f, k, i, d, nt, r, it, rt, ut, ft;
    n.ui = n.ui || {};
    n.extend(n.ui, {
        version: "1.11.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    n.fn.extend({
        scrollParent: function(t) {
            var i = this.css("position"),
                u = i === "absolute",
                f = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                r = this.parents().filter(function() {
                    var t = n(this);
                    return u && t.css("position") === "static" ? !1 : f.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return i === "fixed" || !r.length ? n(this[0].ownerDocument || document) : r
        },
        uniqueId: function() {
            var n = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++n)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && n(this).removeAttr("id")
            })
        }
    });
    n.extend(n.expr[":"], {
        data: n.expr.createPseudo ? n.expr.createPseudo(function(t) {
            return function(i) {
                return !!n.data(i, t)
            }
        }) : function(t, i, r) {
            return !!n.data(t, r[3])
        },
        focusable: function(t) {
            return o(t, !isNaN(n.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var i = n.attr(t, "tabindex"),
                r = isNaN(i);
            return (r || i >= 0) && o(t, !r)
        }
    });
    n("<a>").outerWidth(1).jquery || n.each(["Width", "Height"], function(t, i) {
        function f(t, i, r, u) {
            return n.each(e, function() {
                i -= parseFloat(n.css(t, "padding" + this)) || 0;
                r && (i -= parseFloat(n.css(t, "border" + this + "Width")) || 0);
                u && (i -= parseFloat(n.css(t, "margin" + this)) || 0)
            }), i
        }
        var e = i === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
            r = i.toLowerCase(),
            u = {
                innerWidth: n.fn.innerWidth,
                innerHeight: n.fn.innerHeight,
                outerWidth: n.fn.outerWidth,
                outerHeight: n.fn.outerHeight
            };
        n.fn["inner" + i] = function(t) {
            return t === undefined ? u["inner" + i].call(this) : this.each(function() {
                n(this).css(r, f(this, t) + "px")
            })
        };
        n.fn["outer" + i] = function(t, e) {
            return typeof t != "number" ? u["outer" + i].call(this, t) : this.each(function() {
                n(this).css(r, f(this, t, !0, e) + "px")
            })
        }
    });
    n.fn.addBack || (n.fn.addBack = function(n) {
        return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
    });
    n("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (n.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, n.camelCase(i)) : t.call(this)
        }
    }(n.fn.removeData));
    n.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    n.fn.extend({
        focus: function(t) {
            return function(i, r) {
                return typeof i == "number" ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        n(t).focus();
                        r && r.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(n.fn.focus),
        disableSelection: function() {
            var n = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(n + ".ui-disableSelection", function(n) {
                    n.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(t) {
            if (t !== undefined) return this.css("zIndex", t);
            if (this.length)
                for (var i = n(this[0]), r, u; i.length && i[0] !== document;) {
                    if (r = i.css("position"), (r === "absolute" || r === "relative" || r === "fixed") && (u = parseInt(i.css("zIndex"), 10), !isNaN(u) && u !== 0)) return u;
                    i = i.parent()
                }
            return 0
        }
    });
    n.ui.plugin = {
        add: function(t, i, r) {
            var u, f = n.ui[t].prototype;
            for (u in r) f.plugins[u] = f.plugins[u] || [], f.plugins[u].push([i, r[u]])
        },
        call: function(n, t, i, r) {
            var u, f = n.plugins[t];
            if (f && (r || n.element[0].parentNode && n.element[0].parentNode.nodeType !== 11))
                for (u = 0; u < f.length; u++) n.options[f[u][0]] && f[u][1].apply(n.element, i)
        }
    };
    h = 0;
    f = Array.prototype.slice;
    n.cleanData = function(t) {
        return function(i) {
            for (var r, u, f = 0;
                (u = i[f]) != null; f++) try {
                r = n._data(u, "events");
                r && r.remove && n(u).triggerHandler("remove")
            } catch (e) {}
            t(i)
        }
    }(n.cleanData);
    n.widget = function(t, i, r) {
        var s, f, u, o, h = {},
            e = t.split(".")[0];
        return t = t.split(".")[1], s = e + "-" + t, r || (r = i, i = n.Widget), n.expr[":"][s.toLowerCase()] = function(t) {
            return !!n.data(t, s)
        }, n[e] = n[e] || {}, f = n[e][t], u = n[e][t] = function(n, t) {
            if (!this._createWidget) return new u(n, t);
            arguments.length && this._createWidget(n, t)
        }, n.extend(u, f, {
            version: r.version,
            _proto: n.extend({}, r),
            _childConstructors: []
        }), o = new i, o.options = n.widget.extend({}, o.options), n.each(r, function(t, r) {
            if (!n.isFunction(r)) {
                h[t] = r;
                return
            }
            h[t] = function() {
                var n = function() {
                        return i.prototype[t].apply(this, arguments)
                    },
                    u = function(n) {
                        return i.prototype[t].apply(this, n)
                    };
                return function() {
                    var i = this._super,
                        f = this._superApply,
                        t;
                    return this._super = n, this._superApply = u, t = r.apply(this, arguments), this._super = i, this._superApply = f, t
                }
            }()
        }), u.prototype = n.widget.extend(o, {
            widgetEventPrefix: f ? o.widgetEventPrefix || t : t
        }, h, {
            constructor: u,
            namespace: e,
            widgetName: t,
            widgetFullName: s
        }), f ? (n.each(f._childConstructors, function(t, i) {
            var r = i.prototype;
            n.widget(r.namespace + "." + r.widgetName, u, i._proto)
        }), delete f._childConstructors) : i._childConstructors.push(u), n.widget.bridge(t, u), u
    };
    n.widget.extend = function(t) {
        for (var e = f.call(arguments, 1), u = 0, o = e.length, i, r; u < o; u++)
            for (i in e[u]) r = e[u][i], e[u].hasOwnProperty(i) && r !== undefined && (t[i] = n.isPlainObject(r) ? n.isPlainObject(t[i]) ? n.widget.extend({}, t[i], r) : n.widget.extend({}, r) : r);
        return t
    };
    n.widget.bridge = function(t, i) {
        var r = i.prototype.widgetFullName || t;
        n.fn[t] = function(u) {
            var s = typeof u == "string",
                o = f.call(arguments, 1),
                e = this;
            return u = !s && o.length ? n.widget.extend.apply(null, [u].concat(o)) : u, s ? this.each(function() {
                var i, f = n.data(this, r);
                return u === "instance" ? (e = f, !1) : f ? !n.isFunction(f[u]) || u.charAt(0) === "_" ? n.error("no such method '" + u + "' for " + t + " widget instance") : (i = f[u].apply(f, o), i !== f && i !== undefined ? (e = i && i.jquery ? e.pushStack(i.get()) : i, !1) : void 0) : n.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + u + "'")
            }) : this.each(function() {
                var t = n.data(this, r);
                t ? (t.option(u || {}), t._init && t._init()) : n.data(this, r, new i(u, this))
            }), e
        }
    };
    n.Widget = function() {};
    n.Widget._childConstructors = [];
    n.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, i) {
            i = n(i || this.defaultElement || this)[0];
            this.element = n(i);
            this.uuid = h++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings = n();
            this.hoverable = n();
            this.focusable = n();
            i !== this && (n.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(n) {
                    n.target === i && this.destroy()
                }
            }), this.document = n(i.style ? i.ownerDocument : i.document || i), this.window = n(this.document[0].defaultView || this.document[0].parentWindow));
            this.options = n.widget.extend({}, this.options, this._getCreateOptions(), t);
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: n.noop,
        _getCreateEventData: n.noop,
        _create: n.noop,
        _init: n.noop,
        destroy: function() {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(n.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: n.noop,
        widget: function() {
            return this.element
        },
        option: function(t, i) {
            var e = t,
                r, u, f;
            if (arguments.length === 0) return n.widget.extend({}, this.options);
            if (typeof t == "string")
                if (e = {}, r = t.split("."), t = r.shift(), r.length) {
                    for (u = e[t] = n.widget.extend({}, this.options[t]), f = 0; f < r.length - 1; f++) u[r[f]] = u[r[f]] || {}, u = u[r[f]];
                    if (t = r.pop(), arguments.length === 1) return u[t] === undefined ? null : u[t];
                    u[t] = i
                } else {
                    if (arguments.length === 1) return this.options[t] === undefined ? null : this.options[t];
                    e[t] = i
                }
            return this._setOptions(e), this
        },
        _setOptions: function(n) {
            for (var t in n) this._setOption(t, n[t]);
            return this
        },
        _setOption: function(n, t) {
            return this.options[n] = t, n === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(t, i, r) {
            var f, u = this;
            typeof t != "boolean" && (r = i, i = t, t = !1);
            r ? (i = f = n(i), this.bindings = this.bindings.add(i)) : (r = i, i = this.element, f = this.widget());
            n.each(r, function(r, e) {
                function o() {
                    if (t || u.options.disabled !== !0 && !n(this).hasClass("ui-state-disabled")) return (typeof e == "string" ? u[e] : e).apply(u, arguments)
                }
                typeof e != "string" && (o.guid = e.guid = e.guid || o.guid || n.guid++);
                var s = r.match(/^([\w:-]*)\s*(.*)$/),
                    h = s[1] + u.eventNamespace,
                    c = s[2];
                c ? f.delegate(c, h, o) : i.bind(h, o)
            })
        },
        _off: function(t, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            t.unbind(i).undelegate(i);
            this.bindings = n(this.bindings.not(t).get());
            this.focusable = n(this.focusable.not(t).get());
            this.hoverable = n(this.hoverable.not(t).get())
        },
        _delay: function(n, t) {
            function r() {
                return (typeof n == "string" ? i[n] : n).apply(i, arguments)
            }
            var i = this;
            return setTimeout(r, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t);
            this._on(t, {
                mouseenter: function(t) {
                    n(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    n(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t);
            this._on(t, {
                focusin: function(t) {
                    n(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    n(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, r) {
            var u, f, e = this.options[t];
            if (r = r || {}, i = n.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], f = i.originalEvent, f)
                for (u in f) u in i || (i[u] = f[u]);
            return this.element.trigger(i, r), !(n.isFunction(e) && e.apply(this.element[0], [i].concat(r)) === !1 || i.isDefaultPrevented())
        }
    };
    n.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, i) {
        n.Widget.prototype["_" + t] = function(r, u, f) {
            typeof u == "string" && (u = {
                effect: u
            });
            var o, e = u ? u === !0 || typeof u == "number" ? i : u.effect || i : t;
            u = u || {};
            typeof u == "number" && (u = {
                duration: u
            });
            o = !n.isEmptyObject(u);
            u.complete = f;
            u.delay && r.delay(u.delay);
            o && n.effects && n.effects.effect[e] ? r[t](u) : e !== t && r[e] ? r[e](u.duration, u.easing, f) : r.queue(function(i) {
                n(this)[t]();
                f && f.call(r[0]);
                i()
            })
        }
    });
    k = n.widget;
    i = !1;
    n(document).mouseup(function() {
        i = !1
    });
    d = n.widget("ui.mouse", {
            version: "1.11.2",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var t = this;
                this.element.bind("mousedown." + this.widgetName, function(n) {
                    return t._mouseDown(n)
                }).bind("click." + this.widgetName, function(i) {
                    if (!0 === n.data(i.target, t.widgetName + ".preventClickEvent")) return n.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
                });
                this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName);
                this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(t) {
                if (!i) {
                    this._mouseMoved = !1;
                    this._mouseStarted && this._mouseUp(t);
                    this._mouseDownEvent = t;
                    var r = this,
                        u = t.which === 1,
                        f = typeof this.options.cancel == "string" && t.target.nodeName ? n(t.target).closest(this.options.cancel).length : !1;
                    return !u || f || !this._mouseCapture(t) ? !0 : (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        r.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted)) ? (t.preventDefault(), !0) : (!0 === n.data(t.target, this.widgetName + ".preventClickEvent") && n.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(n) {
                        return r._mouseMove(n)
                    }, this._mouseUpDelegate = function(n) {
                        return r._mouseUp(n)
                    }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), i = !0, !0)
                }
            },
            _mouseMove: function(t) {
                return this._mouseMoved && (n.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button || !t.which) ? this._mouseUp(t) : ((t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted) ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
            },
            _mouseUp: function(t) {
                return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && n.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), i = !1, !1
            },
            _mouseDistanceMet: function(n) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - n.pageX), Math.abs(this._mouseDownEvent.pageY - n.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        }),
        function() {
            function a(n, t, i) {
                return [parseFloat(n[0]) * (l.test(n[0]) ? t / 100 : 1), parseFloat(n[1]) * (l.test(n[1]) ? i / 100 : 1)]
            }

            function r(t, i) {
                return parseInt(n.css(t, i), 10) || 0
            }

            function y(t) {
                var i = t[0];
                return i.nodeType === 9 ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : n.isWindow(i) ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: t.scrollTop(),
                        left: t.scrollLeft()
                    }
                } : i.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: i.pageY,
                        left: i.pageX
                    }
                } : {
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    offset: t.offset()
                }
            }
            n.ui = n.ui || {};
            var u, f, i = Math.max,
                t = Math.abs,
                e = Math.round,
                o = /left|center|right/,
                s = /top|center|bottom/,
                h = /[\+\-]\d+(\.[\d]+)?%?/,
                c = /^\w+/,
                l = /%$/,
                v = n.fn.position;
            n.position = {
                scrollbarWidth: function() {
                    if (u !== undefined) return u;
                    var r, i, t = n("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'><\/div><\/div>"),
                        f = t.children()[0];
                    return n("body").append(t), r = f.offsetWidth, t.css("overflow", "scroll"), i = f.offsetWidth, r === i && (i = t[0].clientWidth), t.remove(), u = r - i
                },
                getScrollInfo: function(t) {
                    var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                        r = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                        u = i === "scroll" || i === "auto" && t.width < t.element[0].scrollWidth,
                        f = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
                    return {
                        width: f ? n.position.scrollbarWidth() : 0,
                        height: u ? n.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(t) {
                    var i = n(t || window),
                        r = n.isWindow(i[0]),
                        u = !!i[0] && i[0].nodeType === 9;
                    return {
                        element: i,
                        isWindow: r,
                        isDocument: u,
                        offset: i.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: i.scrollLeft(),
                        scrollTop: i.scrollTop(),
                        width: r || u ? i.width() : i.outerWidth(),
                        height: r || u ? i.height() : i.outerHeight()
                    }
                }
            };
            n.fn.position = function(u) {
                if (!u || !u.of) return v.apply(this, arguments);
                u = n.extend({}, u);
                var k, l, p, b, w, g, nt = n(u.of),
                    it = n.position.getWithinInfo(u.within),
                    rt = n.position.getScrollInfo(it),
                    d = (u.collision || "flip").split(" "),
                    tt = {};
                return g = y(nt), nt[0].preventDefault && (u.at = "left top"), l = g.width, p = g.height, b = g.offset, w = n.extend({}, b), n.each(["my", "at"], function() {
                    var n = (u[this] || "").split(" "),
                        t, i;
                    n.length === 1 && (n = o.test(n[0]) ? n.concat(["center"]) : s.test(n[0]) ? ["center"].concat(n) : ["center", "center"]);
                    n[0] = o.test(n[0]) ? n[0] : "center";
                    n[1] = s.test(n[1]) ? n[1] : "center";
                    t = h.exec(n[0]);
                    i = h.exec(n[1]);
                    tt[this] = [t ? t[0] : 0, i ? i[0] : 0];
                    u[this] = [c.exec(n[0])[0], c.exec(n[1])[0]]
                }), d.length === 1 && (d[1] = d[0]), u.at[0] === "right" ? w.left += l : u.at[0] === "center" && (w.left += l / 2), u.at[1] === "bottom" ? w.top += p : u.at[1] === "center" && (w.top += p / 2), k = a(tt.at, l, p), w.left += k[0], w.top += k[1], this.each(function() {
                    var y, g, s = n(this),
                        h = s.outerWidth(),
                        c = s.outerHeight(),
                        ut = r(this, "marginLeft"),
                        ft = r(this, "marginTop"),
                        et = h + ut + r(this, "marginRight") + rt.width,
                        ot = c + ft + r(this, "marginBottom") + rt.height,
                        o = n.extend({}, w),
                        v = a(tt.my, s.outerWidth(), s.outerHeight());
                    u.my[0] === "right" ? o.left -= h : u.my[0] === "center" && (o.left -= h / 2);
                    u.my[1] === "bottom" ? o.top -= c : u.my[1] === "center" && (o.top -= c / 2);
                    o.left += v[0];
                    o.top += v[1];
                    f || (o.left = e(o.left), o.top = e(o.top));
                    y = {
                        marginLeft: ut,
                        marginTop: ft
                    };
                    n.each(["left", "top"], function(t, i) {
                        n.ui.position[d[t]] && n.ui.position[d[t]][i](o, {
                            targetWidth: l,
                            targetHeight: p,
                            elemWidth: h,
                            elemHeight: c,
                            collisionPosition: y,
                            collisionWidth: et,
                            collisionHeight: ot,
                            offset: [k[0] + v[0], k[1] + v[1]],
                            my: u.my,
                            at: u.at,
                            within: it,
                            elem: s
                        })
                    });
                    u.using && (g = function(n) {
                        var r = b.left - o.left,
                            a = r + l - h,
                            f = b.top - o.top,
                            v = f + p - c,
                            e = {
                                target: {
                                    element: nt,
                                    left: b.left,
                                    top: b.top,
                                    width: l,
                                    height: p
                                },
                                element: {
                                    element: s,
                                    left: o.left,
                                    top: o.top,
                                    width: h,
                                    height: c
                                },
                                horizontal: a < 0 ? "left" : r > 0 ? "right" : "center",
                                vertical: v < 0 ? "top" : f > 0 ? "bottom" : "middle"
                            };
                        l < h && t(r + a) < l && (e.horizontal = "center");
                        p < c && t(f + v) < p && (e.vertical = "middle");
                        e.important = i(t(r), t(a)) > i(t(f), t(v)) ? "horizontal" : "vertical";
                        u.using.call(this, n, e)
                    });
                    s.offset(n.extend(o, {
                        using: g
                    }))
                })
            };
            n.ui.position = {
                    fit: {
                        left: function(n, t) {
                            var e = t.within,
                                u = e.isWindow ? e.scrollLeft : e.offset.left,
                                o = e.width,
                                s = n.left - t.collisionPosition.marginLeft,
                                r = u - s,
                                f = s + t.collisionWidth - o - u,
                                h;
                            t.collisionWidth > o ? r > 0 && f <= 0 ? (h = n.left + r + t.collisionWidth - o - u, n.left += r - h) : n.left = f > 0 && r <= 0 ? u : r > f ? u + o - t.collisionWidth : u : r > 0 ? n.left += r : f > 0 ? n.left -= f : n.left = i(n.left - s, n.left)
                        },
                        top: function(n, t) {
                            var o = t.within,
                                u = o.isWindow ? o.scrollTop : o.offset.top,
                                e = t.within.height,
                                s = n.top - t.collisionPosition.marginTop,
                                r = u - s,
                                f = s + t.collisionHeight - e - u,
                                h;
                            t.collisionHeight > e ? r > 0 && f <= 0 ? (h = n.top + r + t.collisionHeight - e - u, n.top += r - h) : n.top = f > 0 && r <= 0 ? u : r > f ? u + e - t.collisionHeight : u : r > 0 ? n.top += r : f > 0 ? n.top -= f : n.top = i(n.top - s, n.top)
                        }
                    },
                    flip: {
                        left: function(n, i) {
                            var r = i.within,
                                y = r.offset.left + r.scrollLeft,
                                c = r.width,
                                o = r.isWindow ? r.scrollLeft : r.offset.left,
                                l = n.left - i.collisionPosition.marginLeft,
                                a = l - o,
                                v = l + i.collisionWidth - c - o,
                                u = i.my[0] === "left" ? -i.elemWidth : i.my[0] === "right" ? i.elemWidth : 0,
                                f = i.at[0] === "left" ? i.targetWidth : i.at[0] === "right" ? -i.targetWidth : 0,
                                e = -2 * i.offset[0],
                                s, h;
                            a < 0 ? (s = n.left + u + f + e + i.collisionWidth - c - y, (s < 0 || s < t(a)) && (n.left += u + f + e)) : v > 0 && (h = n.left - i.collisionPosition.marginLeft + u + f + e - o, (h > 0 || t(h) < v) && (n.left += u + f + e))
                        },
                        top: function(n, i) {
                            var r = i.within,
                                y = r.offset.top + r.scrollTop,
                                a = r.height,
                                o = r.isWindow ? r.scrollTop : r.offset.top,
                                v = n.top - i.collisionPosition.marginTop,
                                s = v - o,
                                h = v + i.collisionHeight - a - o,
                                p = i.my[1] === "top",
                                u = p ? -i.elemHeight : i.my[1] === "bottom" ? i.elemHeight : 0,
                                f = i.at[1] === "top" ? i.targetHeight : i.at[1] === "bottom" ? -i.targetHeight : 0,
                                e = -2 * i.offset[1],
                                c, l;
                            s < 0 ? (l = n.top + u + f + e + i.collisionHeight - a - y, n.top + u + f + e > s && (l < 0 || l < t(s)) && (n.top += u + f + e)) : h > 0 && (c = n.top - i.collisionPosition.marginTop + u + f + e - o, n.top + u + f + e > h && (c > 0 || t(c) < h) && (n.top += u + f + e))
                        }
                    },
                    flipfit: {
                        left: function() {
                            n.ui.position.flip.left.apply(this, arguments);
                            n.ui.position.fit.left.apply(this, arguments)
                        },
                        top: function() {
                            n.ui.position.flip.top.apply(this, arguments);
                            n.ui.position.fit.top.apply(this, arguments)
                        }
                    }
                },
                function() {
                    var t, i, r, u, e, o = document.getElementsByTagName("body")[0],
                        s = document.createElement("div");
                    t = document.createElement(o ? "div" : "body");
                    r = {
                        visibility: "hidden",
                        width: 0,
                        height: 0,
                        border: 0,
                        margin: 0,
                        background: "none"
                    };
                    o && n.extend(r, {
                        position: "absolute",
                        left: "-1000px",
                        top: "-1000px"
                    });
                    for (e in r) t.style[e] = r[e];
                    t.appendChild(s);
                    i = o || document.documentElement;
                    i.insertBefore(t, i.firstChild);
                    s.style.cssText = "position: absolute; left: 10.7432222px;";
                    u = n(s).offset().left;
                    f = u > 10 && u < 11;
                    t.innerHTML = "";
                    i.removeChild(t)
                }()
        }();
    var et = n.ui.position,
        ot = n.widget("ui.accordion", {
            version: "1.11.2",
            options: {
                active: 0,
                animate: {},
                collapsible: !1,
                event: "click",
                header: "> li > :first-child,> :not(li):even",
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            hideProps: {
                borderTopWidth: "hide",
                borderBottomWidth: "hide",
                paddingTop: "hide",
                paddingBottom: "hide",
                height: "hide"
            },
            showProps: {
                borderTopWidth: "show",
                borderBottomWidth: "show",
                paddingTop: "show",
                paddingBottom: "show",
                height: "show"
            },
            _create: function() {
                var t = this.options;
                this.prevShow = this.prevHide = n();
                this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist");
                t.collapsible || t.active !== !1 && t.active != null || (t.active = 0);
                this._processPanels();
                t.active < 0 && (t.active += this.headers.length);
                this._refresh()
            },
            _getCreateEventData: function() {
                return {
                    header: this.active,
                    panel: this.active.length ? this.active.next() : n()
                }
            },
            _createIcons: function() {
                var t = this.options.icons;
                t && (n("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function() {
                this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
            },
            _destroy: function() {
                var n;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
                this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId();
                this._destroyIcons();
                n = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId();
                this.options.heightStyle !== "content" && n.css("height", "")
            },
            _setOption: function(n, t) {
                if (n === "active") {
                    this._activate(t);
                    return
                }
                n === "event" && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t));
                this._super(n, t);
                n !== "collapsible" || t || this.options.active !== !1 || this._activate(0);
                n === "icons" && (this._destroyIcons(), t && this._createIcons());
                n === "disabled" && (this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t))
            },
            _keydown: function(t) {
                if (!t.altKey && !t.ctrlKey) {
                    var i = n.ui.keyCode,
                        u = this.headers.length,
                        f = this.headers.index(t.target),
                        r = !1;
                    switch (t.keyCode) {
                        case i.RIGHT:
                        case i.DOWN:
                            r = this.headers[(f + 1) % u];
                            break;
                        case i.LEFT:
                        case i.UP:
                            r = this.headers[(f - 1 + u) % u];
                            break;
                        case i.SPACE:
                        case i.ENTER:
                            this._eventHandler(t);
                            break;
                        case i.HOME:
                            r = this.headers[0];
                            break;
                        case i.END:
                            r = this.headers[u - 1]
                    }
                    r && (n(t.target).attr("tabIndex", -1), n(r).attr("tabIndex", 0), r.focus(), t.preventDefault())
                }
            },
            _panelKeyDown: function(t) {
                t.keyCode === n.ui.keyCode.UP && t.ctrlKey && n(t.currentTarget).prev().focus()
            },
            refresh: function() {
                var t = this.options;
                this._processPanels();
                (t.active !== !1 || t.collapsible !== !0) && this.headers.length ? t.active === !1 ? this._activate(0) : this.active.length && !n.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = n()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active) : (t.active = !1, this.active = n());
                this._destroyIcons();
                this._refresh()
            },
            _processPanels: function() {
                var t = this.headers,
                    n = this.panels;
                this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all");
                this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide();
                n && (this._off(t.not(this.headers)), this._off(n.not(this.panels)))
            },
            _refresh: function() {
                var t, i = this.options,
                    r = i.heightStyle,
                    u = this.element.parent();
                this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
                this.active.next().addClass("ui-accordion-content-active").show();
                this.headers.attr("role", "tab").each(function() {
                    var t = n(this),
                        r = t.uniqueId().attr("id"),
                        i = t.next(),
                        u = i.uniqueId().attr("id");
                    t.attr("aria-controls", u);
                    i.attr("aria-labelledby", r)
                }).next().attr("role", "tabpanel");
                this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }).next().attr({
                    "aria-hidden": "true"
                }).hide();
                this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-hidden": "false"
                }) : this.headers.eq(0).attr("tabIndex", 0);
                this._createIcons();
                this._setupEvents(i.event);
                r === "fill" ? (t = u.height(), this.element.siblings(":visible").each(function() {
                    var i = n(this),
                        r = i.css("position");
                    r !== "absolute" && r !== "fixed" && (t -= i.outerHeight(!0))
                }), this.headers.each(function() {
                    t -= n(this).outerHeight(!0)
                }), this.headers.next().each(function() {
                    n(this).height(Math.max(0, t - n(this).innerHeight() + n(this).height()))
                }).css("overflow", "auto")) : r === "auto" && (t = 0, this.headers.next().each(function() {
                    t = Math.max(t, n(this).css("height", "").height())
                }).height(t))
            },
            _activate: function(t) {
                var i = this._findActive(t)[0];
                i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: n.noop
                }))
            },
            _findActive: function(t) {
                return typeof t == "number" ? this.headers.eq(t) : n()
            },
            _setupEvents: function(t) {
                var i = {
                    keydown: "_keydown"
                };
                t && n.each(t.split(" "), function(n, t) {
                    i[t] = "_eventHandler"
                });
                this._off(this.headers.add(this.headers.next()));
                this._on(this.headers, i);
                this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                });
                this._hoverable(this.headers);
                this._focusable(this.headers)
            },
            _eventHandler: function(t) {
                var i = this.options,
                    u = this.active,
                    r = n(t.currentTarget),
                    f = r[0] === u[0],
                    e = f && i.collapsible,
                    s = e ? n() : r.next(),
                    h = u.next(),
                    o = {
                        oldHeader: u,
                        oldPanel: h,
                        newHeader: e ? n() : r,
                        newPanel: s
                    };
                (t.preventDefault(), (!f || i.collapsible) && this._trigger("beforeActivate", t, o) !== !1) && (i.active = e ? !1 : this.headers.index(r), this.active = f ? n() : r, this._toggle(o), u.removeClass("ui-accordion-header-active ui-state-active"), i.icons && u.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), f || (r.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && r.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), r.next().addClass("ui-accordion-content-active")))
            },
            _toggle: function(t) {
                var r = t.newPanel,
                    i = this.prevShow.length ? this.prevShow : t.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0);
                this.prevShow = r;
                this.prevHide = i;
                this.options.animate ? this._animate(r, i, t) : (i.hide(), r.show(), this._toggleComplete(t));
                i.attr({
                    "aria-hidden": "true"
                });
                i.prev().attr("aria-selected", "false");
                r.length && i.length ? i.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                }) : r.length && this.headers.filter(function() {
                    return n(this).attr("tabIndex") === 0
                }).attr("tabIndex", -1);
                r.attr("aria-hidden", "false").prev().attr({
                    "aria-selected": "true",
                    tabIndex: 0,
                    "aria-expanded": "true"
                })
            },
            _animate: function(n, t, i) {
                var h, r, u, c = this,
                    o = 0,
                    l = n.length && (!t.length || n.index() < t.index()),
                    e = this.options.animate || {},
                    f = l && e.down || e,
                    s = function() {
                        c._toggleComplete(i)
                    };
                if (typeof f == "number" && (u = f), typeof f == "string" && (r = f), r = r || f.easing || e.easing, u = u || f.duration || e.duration, !t.length) return n.animate(this.showProps, u, r, s);
                if (!n.length) return t.animate(this.hideProps, u, r, s);
                h = n.show().outerHeight();
                t.animate(this.hideProps, {
                    duration: u,
                    easing: r,
                    step: function(n, t) {
                        t.now = Math.round(n)
                    }
                });
                n.hide().animate(this.showProps, {
                    duration: u,
                    easing: r,
                    complete: s,
                    step: function(n, i) {
                        i.now = Math.round(n);
                        i.prop !== "height" ? o += i.now : c.options.heightStyle !== "content" && (i.now = Math.round(h - t.outerHeight() - o), o = 0)
                    }
                })
            },
            _toggleComplete: function(n) {
                var t = n.oldPanel;
                t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
                t.length && (t.parent()[0].className = t.parent()[0].className);
                this._trigger("activate", null, n)
            }
        }),
        st = n.widget("ui.menu", {
            version: "1.11.2",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-carat-1-e"
                },
                items: "> *",
                menus: "ul",
                position: {
                    my: "left-1 top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element;
                this.mouseHandled = !1;
                this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                    role: this.options.role,
                    tabIndex: 0
                });
                this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true");
                this._on({
                    "mousedown .ui-menu-item": function(n) {
                        n.preventDefault()
                    },
                    "click .ui-menu-item": function(t) {
                        var i = n(t.target);
                        !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && n(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(t) {
                        if (!this.previousFilter) {
                            var i = n(t.currentTarget);
                            i.siblings(".ui-state-active").removeClass("ui-state-active");
                            this.focus(t, i)
                        }
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(n, t) {
                        var i = this.active || this.element.find(this.options.items).eq(0);
                        t || this.focus(n, i)
                    },
                    blur: function(t) {
                        this._delay(function() {
                            n.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                        })
                    },
                    keydown: "_keydown"
                });
                this.refresh();
                this._on(this.document, {
                    click: function(n) {
                        this._closeOnDocumentClick(n) && this.collapseAll(n);
                        this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
                this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                    var t = n(this);
                    t.data("ui-menu-submenu-carat") && t.remove()
                });
                this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function(t) {
                var i, u, r, f, e = !0;
                switch (t.keyCode) {
                    case n.ui.keyCode.PAGE_UP:
                        this.previousPage(t);
                        break;
                    case n.ui.keyCode.PAGE_DOWN:
                        this.nextPage(t);
                        break;
                    case n.ui.keyCode.HOME:
                        this._move("first", "first", t);
                        break;
                    case n.ui.keyCode.END:
                        this._move("last", "last", t);
                        break;
                    case n.ui.keyCode.UP:
                        this.previous(t);
                        break;
                    case n.ui.keyCode.DOWN:
                        this.next(t);
                        break;
                    case n.ui.keyCode.LEFT:
                        this.collapse(t);
                        break;
                    case n.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                        break;
                    case n.ui.keyCode.ENTER:
                    case n.ui.keyCode.SPACE:
                        this._activate(t);
                        break;
                    case n.ui.keyCode.ESCAPE:
                        this.collapse(t);
                        break;
                    default:
                        e = !1;
                        u = this.previousFilter || "";
                        r = String.fromCharCode(t.keyCode);
                        f = !1;
                        clearTimeout(this.filterTimer);
                        r === u ? f = !0 : r = u + r;
                        i = this._filterMenuItems(r);
                        i = f && i.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : i;
                        i.length || (r = String.fromCharCode(t.keyCode), i = this._filterMenuItems(r));
                        i.length ? (this.focus(t, i), this.previousFilter = r, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter
                }
                e && t.preventDefault()
            },
            _activate: function(n) {
                this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(n) : this.select(n))
            },
            refresh: function() {
                var i, t, u = this,
                    f = this.options.icons.submenu,
                    r = this.element.find(this.options.menus);
                this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length);
                r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var t = n(this),
                        i = t.parent(),
                        r = n("<span>").addClass("ui-menu-icon ui-icon " + f).data("ui-menu-submenu-carat", !0);
                    i.attr("aria-haspopup", "true").prepend(r);
                    t.attr("aria-labelledby", i.attr("id"))
                });
                i = r.add(this.element);
                t = i.find(this.options.items);
                t.not(".ui-menu-item").each(function() {
                    var t = n(this);
                    u._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider")
                });
                t.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                });
                t.filter(".ui-state-disabled").attr("aria-disabled", "true");
                this.active && !n.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function(n, t) {
                n === "icons" && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu);
                n === "disabled" && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t);
                this._super(n, t)
            },
            focus: function(n, t) {
                var i, r;
                this.blur(n, n && n.type === "focus");
                this._scrollIntoView(t);
                this.active = t.first();
                r = this.active.addClass("ui-state-focus").removeClass("ui-state-active");
                this.options.role && this.element.attr("aria-activedescendant", r.attr("id"));
                this.active.parent().closest(".ui-menu-item").addClass("ui-state-active");
                n && n.type === "keydown" ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay);
                i = t.children(".ui-menu");
                i.length && n && /^mouse/.test(n.type) && this._startOpening(i);
                this.activeMenu = t.parent();
                this._trigger("focus", n, {
                    item: t
                })
            },
            _scrollIntoView: function(t) {
                var e, o, i, r, u, f;
                this._hasScroll() && (e = parseFloat(n.css(this.activeMenu[0], "borderTopWidth")) || 0, o = parseFloat(n.css(this.activeMenu[0], "paddingTop")) || 0, i = t.offset().top - this.activeMenu.offset().top - e - o, r = this.activeMenu.scrollTop(), u = this.activeMenu.height(), f = t.outerHeight(), i < 0 ? this.activeMenu.scrollTop(r + i) : i + f > u && this.activeMenu.scrollTop(r + i - u + f))
            },
            blur: function(n, t) {
                (t || clearTimeout(this.timer), this.active) && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", n, {
                    item: this.active
                }))
            },
            _startOpening: function(n) {
                (clearTimeout(this.timer), n.attr("aria-hidden") === "true") && (this.timer = this._delay(function() {
                    this._close();
                    this._open(n)
                }, this.delay))
            },
            _open: function(t) {
                var i = n.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer);
                this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true");
                t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
            },
            collapseAll: function(t, i) {
                clearTimeout(this.timer);
                this.timer = this._delay(function() {
                    var r = i ? this.element : n(t && t.target).closest(this.element.find(".ui-menu"));
                    r.length || (r = this.element);
                    this._close(r);
                    this.blur(t);
                    this.activeMenu = r
                }, this.delay)
            },
            _close: function(n) {
                n || (n = this.active ? this.active.parent() : this.element);
                n.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
            },
            _closeOnDocumentClick: function(t) {
                return !n(t.target).closest(".ui-menu").length
            },
            _isDivider: function(n) {
                return !/[^\-\u2014\u2013\s]/.test(n.text())
            },
            collapse: function(n) {
                var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                t && t.length && (this._close(), this.focus(n, t))
            },
            expand: function(n) {
                var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                t && t.length && (this._open(t.parent()), this._delay(function() {
                    this.focus(n, t)
                }))
            },
            next: function(n) {
                this._move("next", "first", n)
            },
            previous: function(n) {
                this._move("prev", "last", n)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(n, t, i) {
                var r;
                this.active && (r = n === "first" || n === "last" ? this.active[n === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[n + "All"](".ui-menu-item").eq(0));
                r && r.length && this.active || (r = this.activeMenu.find(this.options.items)[t]());
                this.focus(i, r)
            },
            nextPage: function(t) {
                var i, r, u;
                if (!this.active) {
                    this.next(t);
                    return
                }
                this.isLastItem() || (this._hasScroll() ? (r = this.active.offset().top, u = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    return i = n(this), i.offset().top - r - u < 0
                }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))
            },
            previousPage: function(t) {
                var i, r, u;
                if (!this.active) {
                    this.next(t);
                    return
                }
                this.isFirstItem() || (this._hasScroll() ? (r = this.active.offset().top, u = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    return i = n(this), i.offset().top - r + u > 0
                }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first()))
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function(t) {
                this.active = this.active || n(t.target).closest(".ui-menu-item");
                var i = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(t, !0);
                this._trigger("select", t, i)
            },
            _filterMenuItems: function(t) {
                var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                    r = new RegExp("^" + i, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                    return r.test(n.trim(n(this).text()))
                })
            }
        });
    n.widget("ui.autocomplete", {
        version: "1.11.2",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var t, i, r, u = this.element[0].nodeName.toLowerCase(),
                f = u === "textarea",
                e = u === "input";
            this.isMultiLine = f ? !0 : e ? !1 : this.element.prop("isContentEditable");
            this.valueMethod = this.element[f || e ? "val" : "text"];
            this.isNewMenu = !0;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
            this._on(this.element, {
                keydown: function(u) {
                    if (this.element.prop("readOnly")) {
                        t = !0;
                        r = !0;
                        i = !0;
                        return
                    }
                    t = !1;
                    r = !1;
                    i = !1;
                    var f = n.ui.keyCode;
                    switch (u.keyCode) {
                        case f.PAGE_UP:
                            t = !0;
                            this._move("previousPage", u);
                            break;
                        case f.PAGE_DOWN:
                            t = !0;
                            this._move("nextPage", u);
                            break;
                        case f.UP:
                            t = !0;
                            this._keyEvent("previous", u);
                            break;
                        case f.DOWN:
                            t = !0;
                            this._keyEvent("next", u);
                            break;
                        case f.ENTER:
                            this.menu.active && (t = !0, u.preventDefault(), this.menu.select(u));
                            break;
                        case f.TAB:
                            this.menu.active && this.menu.select(u);
                            break;
                        case f.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(u), u.preventDefault());
                            break;
                        default:
                            i = !0;
                            this._searchTimeout(u)
                    }
                },
                keypress: function(r) {
                    if (t) {
                        t = !1;
                        (!this.isMultiLine || this.menu.element.is(":visible")) && r.preventDefault();
                        return
                    }
                    if (!i) {
                        var u = n.ui.keyCode;
                        switch (r.keyCode) {
                            case u.PAGE_UP:
                                this._move("previousPage", r);
                                break;
                            case u.PAGE_DOWN:
                                this._move("nextPage", r);
                                break;
                            case u.UP:
                                this._keyEvent("previous", r);
                                break;
                            case u.DOWN:
                                this._keyEvent("next", r)
                        }
                    }
                },
                input: function(n) {
                    if (r) {
                        r = !1;
                        n.preventDefault();
                        return
                    }
                    this._searchTimeout(n)
                },
                focus: function() {
                    this.selectedItem = null;
                    this.previous = this._value()
                },
                blur: function(n) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return
                    }
                    clearTimeout(this.searching);
                    this.close(n);
                    this._change(n)
                }
            });
            this._initSource();
            this.menu = n("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance");
            this._on(this.menu.element, {
                mousedown: function(t) {
                    t.preventDefault();
                    this.cancelBlur = !0;
                    this._delay(function() {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    n(t.target).closest(".ui-menu-item").length || this._delay(function() {
                        var t = this;
                        this.document.one("mousedown", function(r) {
                            r.target === t.element[0] || r.target === i || n.contains(i, r.target) || t.close()
                        })
                    })
                },
                menufocus: function(t, i) {
                    var r, u;
                    if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) {
                        this.menu.blur();
                        this.document.one("mousemove", function() {
                            n(t.target).trigger(t.originalEvent)
                        });
                        return
                    }
                    u = i.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", t, {
                        item: u
                    }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(u.value);
                    r = i.item.attr("aria-label") || u.value;
                    r && n.trim(r).length && (this.liveRegion.children().hide(), n("<div>").text(r).appendTo(this.liveRegion))
                },
                menuselect: function(n, t) {
                    var i = t.item.data("ui-autocomplete-item"),
                        r = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = r, this._delay(function() {
                        this.previous = r;
                        this.selectedItem = i
                    }));
                    !1 !== this._trigger("select", n, {
                        item: i
                    }) && this._value(i.value);
                    this.term = this._value();
                    this.close(n);
                    this.selectedItem = i
                }
            });
            this.liveRegion = n("<span>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body);
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching);
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove()
        },
        _setOption: function(n, t) {
            this._super(n, t);
            n === "source" && this._initSource();
            n === "appendTo" && this.menu.element.appendTo(this._appendTo());
            n === "disabled" && t && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
        },
        _initSource: function() {
            var i, r, t = this;
            n.isArray(this.options.source) ? (i = this.options.source, this.source = function(t, r) {
                r(n.ui.autocomplete.filter(i, t.term))
            }) : typeof this.options.source == "string" ? (r = this.options.source, this.source = function(i, u) {
                t.xhr && t.xhr.abort();
                t.xhr = n.ajax({
                    url: r,
                    data: i,
                    dataType: "json",
                    success: function(n) {
                        u(n)
                    },
                    error: function() {
                        u([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(n) {
            clearTimeout(this.searching);
            this.searching = this._delay(function() {
                var t = this.term === this._value(),
                    i = this.menu.element.is(":visible"),
                    r = n.altKey || n.ctrlKey || n.metaKey || n.shiftKey;
                t && (!t || i || r) || (this.selectedItem = null, this.search(null, n))
            }, this.options.delay)
        },
        search: function(n, t) {
            return (n = n != null ? n : this._value(), this.term = this._value(), n.length < this.options.minLength) ? this.close(t) : this._trigger("search", t) === !1 ? void 0 : this._search(n)
        },
        _search: function(n) {
            this.pending++;
            this.element.addClass("ui-autocomplete-loading");
            this.cancelSearch = !1;
            this.source({
                term: n
            }, this._response())
        },
        _response: function() {
            var t = ++this.requestIndex;
            return n.proxy(function(n) {
                t === this.requestIndex && this.__response(n);
                this.pending--;
                this.pending || this.element.removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(n) {
            n && (n = this._normalize(n));
            this._trigger("response", null, {
                content: n
            });
            !this.options.disabled && n && n.length && !this.cancelSearch ? (this._suggest(n), this._trigger("open")) : this._close()
        },
        close: function(n) {
            this.cancelSearch = !0;
            this._close(n)
        },
        _close: function(n) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", n))
        },
        _change: function(n) {
            this.previous !== this._value() && this._trigger("change", n, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : n.map(t, function(t) {
                return typeof t == "string" ? {
                    label: t,
                    value: t
                } : n.extend({}, t, {
                    label: t.label || t.value,
                    value: t.value || t.label
                })
            })
        },
        _suggest: function(t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t);
            this.isNewMenu = !0;
            this.menu.refresh();
            i.show();
            this._resizeMenu();
            i.position(n.extend({
                of: this.element
            }, this.options.position));
            this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var n = this.menu.element;
            n.outerWidth(Math.max(n.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, i) {
            var r = this;
            n.each(i, function(n, i) {
                r._renderItemData(t, i)
            })
        },
        _renderItemData: function(n, t) {
            return this._renderItem(n, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(t, i) {
            return n("<li>").text(i.label).appendTo(t)
        },
        _move: function(n, t) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, t);
                return
            }
            if (this.menu.isFirstItem() && /^previous/.test(n) || this.menu.isLastItem() && /^next/.test(n)) {
                this.isMultiLine || this._value(this.term);
                this.menu.blur();
                return
            }
            this.menu[n](t)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(n, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(n, t), t.preventDefault())
        }
    });
    n.extend(n.ui.autocomplete, {
        escapeRegex: function(n) {
            return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, i) {
            var r = new RegExp(n.ui.autocomplete.escapeRegex(i), "i");
            return n.grep(t, function(n) {
                return r.test(n.label || n.value || n)
            })
        }
    });
    n.widget("ui.autocomplete", n.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(n) {
                    return n + (n > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(t) {
            var i;
            (this._superApply(arguments), this.options.disabled || this.cancelSearch) || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), n("<div>").text(i).appendTo(this.liveRegion))
        }
    });
    var ht = n.ui.autocomplete,
        e, c = "ui-button ui-widget ui-state-default ui-corner-all",
        l = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        g = function() {
            var t = n(this);
            setTimeout(function() {
                t.find(":ui-button").button("refresh")
            }, 1)
        },
        a = function(t) {
            var i = t.name,
                r = t.form,
                u = n([]);
            return i && (i = i.replace(/'/g, "\\'"), u = r ? n(r).find("[name='" + i + "'][type=radio]") : n("[name='" + i + "'][type=radio]", t.ownerDocument).filter(function() {
                return !this.form
            })), u
        };
    n.widget("ui.button", {
        version: "1.11.2",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, g);
            typeof this.options.disabled != "boolean" ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled);
            this._determineButtonType();
            this.hasTitle = !!this.buttonElement.attr("title");
            var i = this,
                t = this.options,
                r = this.type === "checkbox" || this.type === "radio",
                u = r ? "" : "ui-state-active";
            t.label === null && (t.label = this.type === "input" ? this.buttonElement.val() : this.buttonElement.html());
            this._hoverable(this.buttonElement);
            this.buttonElement.addClass(c).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                t.disabled || this === e && n(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                t.disabled || n(this).removeClass(u)
            }).bind("click" + this.eventNamespace, function(n) {
                t.disabled && (n.preventDefault(), n.stopImmediatePropagation())
            });
            this._on({
                focus: function() {
                    this.buttonElement.addClass("ui-state-focus")
                },
                blur: function() {
                    this.buttonElement.removeClass("ui-state-focus")
                }
            });
            r && this.element.bind("change" + this.eventNamespace, function() {
                i.refresh()
            });
            this.type === "checkbox" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (t.disabled) return !1
            }) : this.type === "radio" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (t.disabled) return !1;
                n(this).addClass("ui-state-active");
                i.buttonElement.attr("aria-pressed", "true");
                var r = i.element[0];
                a(r).not(r).map(function() {
                    return n(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                if (t.disabled) return !1;
                n(this).addClass("ui-state-active");
                e = this;
                i.document.one("mouseup", function() {
                    e = null
                })
            }).bind("mouseup" + this.eventNamespace, function() {
                if (t.disabled) return !1;
                n(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function(i) {
                if (t.disabled) return !1;
                (i.keyCode === n.ui.keyCode.SPACE || i.keyCode === n.ui.keyCode.ENTER) && n(this).addClass("ui-state-active")
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                n(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                t.keyCode === n.ui.keyCode.SPACE && n(this).click()
            }));
            this._setOption("disabled", t.disabled);
            this._resetButton()
        },
        _determineButtonType: function() {
            var n, t, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button";
            this.type === "checkbox" || this.type === "radio" ? (n = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = n.find(t), this.buttonElement.length || (n = n.length ? n.siblings() : this.element.siblings(), this.buttonElement = n.filter(t), this.buttonElement.length || (this.buttonElement = n.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible");
            this.buttonElement.removeClass(c + " ui-state-active " + l).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
            this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(n, t) {
            if (this._super(n, t), n === "disabled") {
                this.widget().toggleClass("ui-state-disabled", !!t);
                this.element.prop("disabled", !!t);
                t && (this.type === "checkbox" || this.type === "radio" ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active"));
                return
            }
            this._resetButton()
        },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t);
            this.type === "radio" ? a(this.element[0]).each(function() {
                n(this).is(":checked") ? n(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : n(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if (this.type === "input") {
                this.options.label && this.element.val(this.options.label);
                return
            }
            var i = this.buttonElement.removeClass(l),
                f = n("<span><\/span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(i.empty()).text(),
                t = this.options.icons,
                u = t.primary && t.secondary,
                r = [];
            t.primary || t.secondary ? (this.options.text && r.push("ui-button-text-icon" + (u ? "s" : t.primary ? "-primary" : "-secondary")), t.primary && i.prepend("<span class='ui-button-icon-primary ui-icon " + t.primary + "'><\/span>"), t.secondary && i.append("<span class='ui-button-icon-secondary ui-icon " + t.secondary + "'><\/span>"), this.options.text || (r.push(u ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || i.attr("title", n.trim(f)))) : r.push("ui-button-text-only");
            i.addClass(r.join(" "))
        }
    });
    n.widget("ui.buttonset", {
        version: "1.11.2",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(n, t) {
            n === "disabled" && this.buttons.button("option", n, t);
            this._super(n, t)
        },
        refresh: function() {
            var i = this.element.css("direction") === "rtl",
                t = this.element.find(this.options.items),
                r = t.filter(":ui-button");
            t.not(":ui-button").button();
            r.button("refresh");
            this.buttons = t.map(function() {
                return n(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(i ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(i ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset");
            this.buttons.map(function() {
                return n(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    });
    nt = n.ui.button;
    n.extend(n.ui, {
        datepicker: {
            version: "1.11.2"
        }
    });
    n.extend(v.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(n) {
            return u(this._defaults, n || {}), this
        },
        _attachDatepicker: function(t, i) {
            var r, f, u;
            r = t.nodeName.toLowerCase();
            f = r === "div" || r === "span";
            t.id || (this.uuid += 1, t.id = "dp" + this.uuid);
            u = this._newInst(n(t), f);
            u.settings = n.extend({}, i || {});
            r === "input" ? this._connectDatepicker(t, u) : f && this._inlineDatepicker(t, u)
        },
        _newInst: function(t, i) {
            var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: r,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? y(n("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, i) {
            var r = n(t);
            (i.append = n([]), i.trigger = n([]), r.hasClass(this.markerClassName)) || (this._attachments(r, i), r.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), n.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, i) {
            var u, r, f, e = this._get(i, "appendText"),
                o = this._get(i, "isRTL");
            i.append && i.append.remove();
            e && (i.append = n("<span class='" + this._appendClass + "'>" + e + "<\/span>"), t[o ? "before" : "after"](i.append));
            t.unbind("focus", this._showDatepicker);
            i.trigger && i.trigger.remove();
            u = this._get(i, "showOn");
            (u === "focus" || u === "both") && t.focus(this._showDatepicker);
            (u === "button" || u === "both") && (r = this._get(i, "buttonText"), f = this._get(i, "buttonImage"), i.trigger = n(this._get(i, "buttonImageOnly") ? n("<img/>").addClass(this._triggerClass).attr({
                src: f,
                alt: r,
                title: r
            }) : n("<button type='button'><\/button>").addClass(this._triggerClass).html(f ? n("<img/>").attr({
                src: f,
                alt: r,
                title: r
            }) : r)), t[o ? "before" : "after"](i.trigger), i.trigger.click(function() {
                return n.datepicker._datepickerShowing && n.datepicker._lastInput === t[0] ? n.datepicker._hideDatepicker() : n.datepicker._datepickerShowing && n.datepicker._lastInput !== t[0] ? (n.datepicker._hideDatepicker(), n.datepicker._showDatepicker(t[0])) : n.datepicker._showDatepicker(t[0]), !1
            }))
        },
        _autoSize: function(n) {
            if (this._get(n, "autoSize") && !n.inline) {
                var r, u, f, t, i = new Date(2009, 11, 20),
                    e = this._get(n, "dateFormat");
                e.match(/[DM]/) && (r = function(n) {
                    for (u = 0, f = 0, t = 0; t < n.length; t++) n[t].length > u && (u = n[t].length, f = t);
                    return f
                }, i.setMonth(r(this._get(n, e.match(/MM/) ? "monthNames" : "monthNamesShort"))), i.setDate(r(this._get(n, e.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - i.getDay()));
                n.input.attr("size", this._formatDate(n, i).length)
            }
        },
        _inlineDatepicker: function(t, i) {
            var r = n(t);
            r.hasClass(this.markerClassName) || (r.addClass(this.markerClassName).append(i.dpDiv), n.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, i, r, f, e) {
            var s, h, c, l, a, o = this._dialogInst;
            return o || (this.uuid += 1, s = "dp" + this.uuid, this._dialogInput = n("<input type='text' id='" + s + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), n("body").append(this._dialogInput), o = this._dialogInst = this._newInst(this._dialogInput, !1), o.settings = {}, n.data(this._dialogInput[0], "datepicker", o)), u(o.settings, f || {}), i = i && i.constructor === Date ? this._formatDate(o, i) : i, this._dialogInput.val(i), this._pos = e ? e.length ? e : [e.pageX, e.pageY] : null, this._pos || (h = document.documentElement.clientWidth, c = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, a = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + l, c / 2 - 150 + a]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), o.settings.onSelect = r, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), n.blockUI && n.blockUI(this.dpDiv), n.data(this._dialogInput[0], "datepicker", o), this
        },
        _destroyDatepicker: function(t) {
            var i, r = n(t),
                u = n.data(t, "datepicker");
            r.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), n.removeData(t, "datepicker"), i === "input" ? (u.append.remove(), u.trigger.remove(), r.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (i === "div" || i === "span") && r.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(t) {
            var i, r, u = n(t),
                f = n.data(t, "datepicker");
            u.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), i === "input" ? (t.disabled = !1, f.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : (i === "div" || i === "span") && (r = u.children("." + this._inlineClass), r.children().removeClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = n.map(this._disabledInputs, function(n) {
                return n === t ? null : n
            }))
        },
        _disableDatepicker: function(t) {
            var i, r, u = n(t),
                f = n.data(t, "datepicker");
            u.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), i === "input" ? (t.disabled = !0, f.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : (i === "div" || i === "span") && (r = u.children("." + this._inlineClass), r.children().addClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = n.map(this._disabledInputs, function(n) {
                return n === t ? null : n
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(n) {
            if (!n) return !1;
            for (var t = 0; t < this._disabledInputs.length; t++)
                if (this._disabledInputs[t] === n) return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return n.data(t, "datepicker")
            } catch (i) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(t, i, r) {
            var e, h, o, s, f = this._getInst(t);
            if (arguments.length === 2 && typeof i == "string") return i === "defaults" ? n.extend({}, n.datepicker._defaults) : f ? i === "all" ? n.extend({}, f.settings) : this._get(f, i) : null;
            e = i || {};
            typeof i == "string" && (e = {}, e[i] = r);
            f && (this._curInst === f && this._hideDatepicker(), h = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(f, "min"), s = this._getMinMaxDate(f, "max"), u(f.settings, e), o !== null && e.dateFormat !== undefined && e.minDate === undefined && (f.settings.minDate = this._formatDate(f, o)), s !== null && e.dateFormat !== undefined && e.maxDate === undefined && (f.settings.maxDate = this._formatDate(f, s)), "disabled" in e && (e.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(n(t), f), this._autoSize(f), this._setDate(f, h), this._updateAlternate(f), this._updateDatepicker(f))
        },
        _changeDatepicker: function(n, t, i) {
            this._optionDatepicker(n, t, i)
        },
        _refreshDatepicker: function(n) {
            var t = this._getInst(n);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(n, t) {
            var i = this._getInst(n);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(n, t) {
            var i = this._getInst(n);
            return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
        },
        _doKeyDown: function(t) {
            var u, e, f, i = n.datepicker._getInst(t.target),
                r = !0,
                o = i.dpDiv.is(".ui-datepicker-rtl");
            if (i._keyEvent = !0, n.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    n.datepicker._hideDatepicker();
                    r = !1;
                    break;
                case 13:
                    return f = n("td." + n.datepicker._dayOverClass + ":not(." + n.datepicker._currentClass + ")", i.dpDiv), f[0] && n.datepicker._selectDay(t.target, i.selectedMonth, i.selectedYear, f[0]), u = n.datepicker._get(i, "onSelect"), u ? (e = n.datepicker._formatDate(i), u.apply(i.input ? i.input[0] : null, [e, i])) : n.datepicker._hideDatepicker(), !1;
                case 27:
                    n.datepicker._hideDatepicker();
                    break;
                case 33:
                    n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 34:
                    n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && n.datepicker._clearDate(t.target);
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && n.datepicker._gotoToday(t.target);
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? 1 : -1, "D");
                    r = t.ctrlKey || t.metaKey;
                    t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, -7, "D");
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? -1 : 1, "D");
                    r = t.ctrlKey || t.metaKey;
                    t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, 7, "D");
                    r = t.ctrlKey || t.metaKey;
                    break;
                default:
                    r = !1
            } else t.keyCode === 36 && t.ctrlKey ? n.datepicker._showDatepicker(this) : r = !1;
            r && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function(t) {
            var i, r, u = n.datepicker._getInst(t.target);
            if (n.datepicker._get(u, "constrainInput")) return i = n.datepicker._possibleChars(n.datepicker._get(u, "dateFormat")), r = String.fromCharCode(t.charCode == null ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || r < " " || !i || i.indexOf(r) > -1
        },
        _doKeyUp: function(t) {
            var r, i = n.datepicker._getInst(t.target);
            if (i.input.val() !== i.lastVal) try {
                r = n.datepicker.parseDate(n.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, n.datepicker._getFormatConfig(i));
                r && (n.datepicker._setDateFromField(i), n.datepicker._updateAlternate(i), n.datepicker._updateDatepicker(i))
            } catch (u) {}
            return !0
        },
        _showDatepicker: function(t) {
            if (t = t.target || t, t.nodeName.toLowerCase() !== "input" && (t = n("input", t.parentNode)[0]), !n.datepicker._isDisabledDatepicker(t) && n.datepicker._lastInput !== t) {
                var i, o, s, r, f, e, h;
                (i = n.datepicker._getInst(t), n.datepicker._curInst && n.datepicker._curInst !== i && (n.datepicker._curInst.dpDiv.stop(!0, !0), i && n.datepicker._datepickerShowing && n.datepicker._hideDatepicker(n.datepicker._curInst.input[0])), o = n.datepicker._get(i, "beforeShow"), s = o ? o.apply(t, [t, i]) : {}, s !== !1) && (u(i.settings, s), i.lastVal = null, n.datepicker._lastInput = t, n.datepicker._setDateFromField(i), n.datepicker._inDialog && (t.value = ""), n.datepicker._pos || (n.datepicker._pos = n.datepicker._findPos(t), n.datepicker._pos[1] += t.offsetHeight), r = !1, n(t).parents().each(function() {
                    return r |= n(this).css("position") === "fixed", !r
                }), f = {
                    left: n.datepicker._pos[0],
                    top: n.datepicker._pos[1]
                }, n.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), n.datepicker._updateDatepicker(i), f = n.datepicker._checkOffset(i, f, r), i.dpDiv.css({
                    position: n.datepicker._inDialog && n.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: f.left + "px",
                    top: f.top + "px"
                }), i.inline || (e = n.datepicker._get(i, "showAnim"), h = n.datepicker._get(i, "duration"), i.dpDiv.css("z-index", tt(n(t)) + 1), n.datepicker._datepickerShowing = !0, n.effects && n.effects.effect[e] ? i.dpDiv.show(e, n.datepicker._get(i, "showOptions"), h) : i.dpDiv[e || "show"](e ? h : null), n.datepicker._shouldFocusInput(i) && i.input.focus(), n.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4;
            r = t;
            t.dpDiv.empty().append(this._generateHTML(t));
            this._attachHandlers(t);
            var i, u = this._getNumberOfMonths(t),
                f = u[1],
                e = t.dpDiv.find("." + this._dayOverClass + " a");
            e.length > 0 && p.apply(e.get(0));
            t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            f > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + f).css("width", 17 * f + "em");
            t.dpDiv[(u[0] !== 1 || u[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            t === n.datepicker._curInst && n.datepicker._datepickerShowing && n.datepicker._shouldFocusInput(t) && t.input.focus();
            t.yearshtml && (i = t.yearshtml, setTimeout(function() {
                i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml);
                i = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(n) {
            return n.input && n.input.is(":visible") && !n.input.is(":disabled") && !n.input.is(":focus")
        },
        _checkOffset: function(t, i, r) {
            var u = t.dpDiv.outerWidth(),
                f = t.dpDiv.outerHeight(),
                h = t.input ? t.input.outerWidth() : 0,
                o = t.input ? t.input.outerHeight() : 0,
                e = document.documentElement.clientWidth + (r ? 0 : n(document).scrollLeft()),
                s = document.documentElement.clientHeight + (r ? 0 : n(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? u - h : 0, i.left -= r && i.left === t.input.offset().left ? n(document).scrollLeft() : 0, i.top -= r && i.top === t.input.offset().top + o ? n(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + u > e && e > u ? Math.abs(i.left + u - e) : 0), i.top -= Math.min(i.top, i.top + f > s && s > f ? Math.abs(f + o) : 0), i
        },
        _findPos: function(t) {
            for (var i, r = this._getInst(t), u = this._get(r, "isRTL"); t && (t.type === "hidden" || t.nodeType !== 1 || n.expr.filters.hidden(t));) t = t[u ? "previousSibling" : "nextSibling"];
            return i = n(t).offset(), [i.left, i.top]
        },
        _hideDatepicker: function(t) {
            var r, f, u, e, i = this._curInst;
            i && (!t || i === n.data(t, "datepicker")) && this._datepickerShowing && (r = this._get(i, "showAnim"), f = this._get(i, "duration"), u = function() {
                n.datepicker._tidyDialog(i)
            }, n.effects && (n.effects.effect[r] || n.effects[r]) ? i.dpDiv.hide(r, n.datepicker._get(i, "showOptions"), f, u) : i.dpDiv[r === "slideDown" ? "slideUp" : r === "fadeIn" ? "fadeOut" : "hide"](r ? f : null, u), r || u(), this._datepickerShowing = !1, e = this._get(i, "onClose"), e && e.apply(i.input ? i.input[0] : null, [i.input ? i.input.val() : "", i]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), n.blockUI && (n.unblockUI(), n("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(n) {
            n.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            if (n.datepicker._curInst) {
                var i = n(t.target),
                    r = n.datepicker._getInst(i[0]);
                (i[0].id === n.datepicker._mainDivId || i.parents("#" + n.datepicker._mainDivId).length !== 0 || i.hasClass(n.datepicker.markerClassName) || i.closest("." + n.datepicker._triggerClass).length || !n.datepicker._datepickerShowing || n.datepicker._inDialog && n.blockUI) && (!i.hasClass(n.datepicker.markerClassName) || n.datepicker._curInst === r) || n.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, i, r) {
            var f = n(t),
                u = this._getInst(f[0]);
            this._isDisabledDatepicker(f[0]) || (this._adjustInstDate(u, i + (r === "M" ? this._get(u, "showCurrentAtPos") : 0), r), this._updateDatepicker(u))
        },
        _gotoToday: function(t) {
            var r, u = n(t),
                i = this._getInst(u[0]);
            this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (r = new Date, i.selectedDay = r.getDate(), i.drawMonth = i.selectedMonth = r.getMonth(), i.drawYear = i.selectedYear = r.getFullYear());
            this._notifyChange(i);
            this._adjustDate(u)
        },
        _selectMonthYear: function(t, i, r) {
            var f = n(t),
                u = this._getInst(f[0]);
            u["selected" + (r === "M" ? "Month" : "Year")] = u["draw" + (r === "M" ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10);
            this._notifyChange(u);
            this._adjustDate(f)
        },
        _selectDay: function(t, i, r, u) {
            var f, e = n(t);
            n(u).hasClass(this._unselectableClass) || this._isDisabledDatepicker(e[0]) || (f = this._getInst(e[0]), f.selectedDay = f.currentDay = n("a", u).html(), f.selectedMonth = f.currentMonth = i, f.selectedYear = f.currentYear = r, this._selectDate(t, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
        },
        _clearDate: function(t) {
            var i = n(t);
            this._selectDate(i, "")
        },
        _selectDate: function(t, i) {
            var u, f = n(t),
                r = this._getInst(f[0]);
            i = i != null ? i : this._formatDate(r);
            r.input && r.input.val(i);
            this._updateAlternate(r);
            u = this._get(r, "onSelect");
            u ? u.apply(r.input ? r.input[0] : null, [i, r]) : r.input && r.input.trigger("change");
            r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], typeof r.input[0] != "object" && r.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var i, r, u, f = this._get(t, "altField");
            f && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), r = this._getDate(t), u = this.formatDate(i, r, this._getFormatConfig(t)), n(f).each(function() {
                n(this).val(u)
            }))
        },
        noWeekends: function(n) {
            var t = n.getDay();
            return [t > 0 && t < 6, ""]
        },
        iso8601Week: function(n) {
            var i, t = new Date(n.getTime());
            return t.setDate(t.getDate() + 4 - (t.getDay() || 7)), i = t.getTime(), t.setMonth(0), t.setDate(1), Math.floor(Math.round((i - t) / 864e5) / 7) + 1
        },
        parseDate: function(t, i, r) {
            if (t == null || i == null) throw "Invalid arguments";
            if (i = typeof i == "object" ? i.toString() : i + "", i === "") return null;
            for (var a, v, f = 0, y = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff, d = typeof y != "string" ? y : (new Date).getFullYear() % 100 + parseInt(y, 10), g = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort, nt = (r ? r.dayNames : null) || this._defaults.dayNames, tt = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort, it = (r ? r.monthNames : null) || this._defaults.monthNames, e = -1, s = -1, h = -1, p = -1, w = !1, u, l = function(n) {
                    var i = o + 1 < t.length && t.charAt(o + 1) === n;
                    return i && o++, i
                }, c = function(n) {
                    var u = l(n),
                        r = n === "@" ? 14 : n === "!" ? 20 : n === "y" && u ? 4 : n === "o" ? 3 : 2,
                        e = n === "y" ? r : 1,
                        o = new RegExp("^\\d{" + e + "," + r + "}"),
                        t = i.substring(f).match(o);
                    if (!t) throw "Missing number at position " + f;
                    return f += t[0].length, parseInt(t[0], 10)
                }, k = function(t, r, u) {
                    var e = -1,
                        o = n.map(l(t) ? u : r, function(n, t) {
                            return [
                                [t, n]
                            ]
                        }).sort(function(n, t) {
                            return -(n[1].length - t[1].length)
                        });
                    if (n.each(o, function(n, t) {
                            var r = t[1];
                            if (i.substr(f, r.length).toLowerCase() === r.toLowerCase()) return e = t[0], f += r.length, !1
                        }), e !== -1) return e + 1;
                    throw "Unknown name at position " + f;
                }, b = function() {
                    if (i.charAt(f) !== t.charAt(o)) throw "Unexpected literal at position " + f;
                    f++
                }, o = 0; o < t.length; o++)
                if (w) t.charAt(o) !== "'" || l("'") ? b() : w = !1;
                else switch (t.charAt(o)) {
                    case "d":
                        h = c("d");
                        break;
                    case "D":
                        k("D", g, nt);
                        break;
                    case "o":
                        p = c("o");
                        break;
                    case "m":
                        s = c("m");
                        break;
                    case "M":
                        s = k("M", tt, it);
                        break;
                    case "y":
                        e = c("y");
                        break;
                    case "@":
                        u = new Date(c("@"));
                        e = u.getFullYear();
                        s = u.getMonth() + 1;
                        h = u.getDate();
                        break;
                    case "!":
                        u = new Date((c("!") - this._ticksTo1970) / 1e4);
                        e = u.getFullYear();
                        s = u.getMonth() + 1;
                        h = u.getDate();
                        break;
                    case "'":
                        l("'") ? b() : w = !0;
                        break;
                    default:
                        b()
                }
                if (f < i.length && (v = i.substr(f), !/^\s+/.test(v))) throw "Extra/unparsed characters found in date: " + v;
            if (e === -1 ? e = (new Date).getFullYear() : e < 100 && (e += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (e <= d ? 0 : -100)), p > -1) {
                s = 1;
                h = p;
                do {
                    if (a = this._getDaysInMonth(e, s - 1), h <= a) break;
                    s++;
                    h -= a
                } while (1)
            }
            if (u = this._daylightSavingAdjust(new Date(e, s - 1, h)), u.getFullYear() !== e || u.getMonth() + 1 !== s || u.getDate() !== h) throw "Invalid date";
            return u
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (718685 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 864e9,
        formatDate: function(n, t, i) {
            if (!t) return "";
            var u, h = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                c = (i ? i.dayNames : null) || this._defaults.dayNames,
                l = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                a = (i ? i.monthNames : null) || this._defaults.monthNames,
                f = function(t) {
                    var i = u + 1 < n.length && n.charAt(u + 1) === t;
                    return i && u++, i
                },
                e = function(n, t, i) {
                    var r = "" + t;
                    if (f(n))
                        while (r.length < i) r = "0" + r;
                    return r
                },
                s = function(n, t, i, r) {
                    return f(n) ? r[t] : i[t]
                },
                r = "",
                o = !1;
            if (t)
                for (u = 0; u < n.length; u++)
                    if (o) n.charAt(u) !== "'" || f("'") ? r += n.charAt(u) : o = !1;
                    else switch (n.charAt(u)) {
                        case "d":
                            r += e("d", t.getDate(), 2);
                            break;
                        case "D":
                            r += s("D", t.getDay(), h, c);
                            break;
                        case "o":
                            r += e("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            r += e("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            r += s("M", t.getMonth(), l, a);
                            break;
                        case "y":
                            r += f("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                            break;
                        case "@":
                            r += t.getTime();
                            break;
                        case "!":
                            r += t.getTime() * 1e4 + this._ticksTo1970;
                            break;
                        case "'":
                            f("'") ? r += "'" : o = !0;
                            break;
                        default:
                            r += n.charAt(u)
                    }
                    return r
        },
        _possibleChars: function(n) {
            for (var i = "", r = !1, u = function(i) {
                    var r = t + 1 < n.length && n.charAt(t + 1) === i;
                    return r && t++, r
                }, t = 0; t < n.length; t++)
                if (r) n.charAt(t) !== "'" || u("'") ? i += n.charAt(t) : r = !1;
                else switch (n.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        u("'") ? i += "'" : r = !0;
                        break;
                    default:
                        i += n.charAt(t)
                }
                return i
        },
        _get: function(n, t) {
            return n.settings[t] !== undefined ? n.settings[t] : this._defaults[t]
        },
        _setDateFromField: function(n, t) {
            if (n.input.val() !== n.lastVal) {
                var f = this._get(n, "dateFormat"),
                    r = n.lastVal = n.input ? n.input.val() : null,
                    u = this._getDefaultDate(n),
                    i = u,
                    e = this._getFormatConfig(n);
                try {
                    i = this.parseDate(f, r, e) || u
                } catch (o) {
                    r = t ? "" : r
                }
                n.selectedDay = i.getDate();
                n.drawMonth = n.selectedMonth = i.getMonth();
                n.drawYear = n.selectedYear = i.getFullYear();
                n.currentDay = r ? i.getDate() : 0;
                n.currentMonth = r ? i.getMonth() : 0;
                n.currentYear = r ? i.getFullYear() : 0;
                this._adjustInstDate(n)
            }
        },
        _getDefaultDate: function(n) {
            return this._restrictMinMax(n, this._determineDate(n, this._get(n, "defaultDate"), new Date))
        },
        _determineDate: function(t, i, r) {
            var f = function(n) {
                    var t = new Date;
                    return t.setDate(t.getDate() + n), t
                },
                e = function(i) {
                    try {
                        return n.datepicker.parseDate(n.datepicker._get(t, "dateFormat"), i, n.datepicker._getFormatConfig(t))
                    } catch (h) {}
                    for (var o = (i.toLowerCase().match(/^c/) ? n.datepicker._getDate(t) : null) || new Date, f = o.getFullYear(), e = o.getMonth(), r = o.getDate(), s = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = s.exec(i); u;) {
                        switch (u[2] || "d") {
                            case "d":
                            case "D":
                                r += parseInt(u[1], 10);
                                break;
                            case "w":
                            case "W":
                                r += parseInt(u[1], 10) * 7;
                                break;
                            case "m":
                            case "M":
                                e += parseInt(u[1], 10);
                                r = Math.min(r, n.datepicker._getDaysInMonth(f, e));
                                break;
                            case "y":
                            case "Y":
                                f += parseInt(u[1], 10);
                                r = Math.min(r, n.datepicker._getDaysInMonth(f, e))
                        }
                        u = s.exec(i)
                    }
                    return new Date(f, e, r)
                },
                u = i == null || i === "" ? r : typeof i == "string" ? e(i) : typeof i == "number" ? isNaN(i) ? r : f(i) : new Date(i.getTime());
            return u = u && u.toString() === "Invalid Date" ? r : u, u && (u.setHours(0), u.setMinutes(0), u.setSeconds(0), u.setMilliseconds(0)), this._daylightSavingAdjust(u)
        },
        _daylightSavingAdjust: function(n) {
            return n ? (n.setHours(n.getHours() > 12 ? n.getHours() + 2 : 0), n) : null
        },
        _setDate: function(n, t, i) {
            var u = !t,
                f = n.selectedMonth,
                e = n.selectedYear,
                r = this._restrictMinMax(n, this._determineDate(n, t, new Date));
            n.selectedDay = n.currentDay = r.getDate();
            n.drawMonth = n.selectedMonth = n.currentMonth = r.getMonth();
            n.drawYear = n.selectedYear = n.currentYear = r.getFullYear();
            f === n.selectedMonth && e === n.selectedYear || i || this._notifyChange(n);
            this._adjustInstDate(n);
            n.input && n.input.val(u ? "" : this._formatDate(n))
        },
        _getDate: function(n) {
            return !n.currentYear || n.input && n.input.val() === "" ? null : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay))
        },
        _attachHandlers: function(t) {
            var r = this._get(t, "stepMonths"),
                i = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        n.datepicker._adjustDate(i, -r, "M")
                    },
                    next: function() {
                        n.datepicker._adjustDate(i, +r, "M")
                    },
                    hide: function() {
                        n.datepicker._hideDatepicker()
                    },
                    today: function() {
                        n.datepicker._gotoToday(i)
                    },
                    selectDay: function() {
                        return n.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return n.datepicker._selectMonthYear(i, this, "M"), !1
                    },
                    selectYear: function() {
                        return n.datepicker._selectMonthYear(i, this, "Y"), !1
                    }
                };
                n(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(n) {
            var b, s, rt, h, ut, k, ft, et, ri, c, ot, ui, fi, ei, oi, st, g, si, ht, nt, f, y, ct, p, lt, l, u, at, vt, yt, pt, tt, wt, i, bt, kt, d, a, it, dt = new Date,
                gt = this._daylightSavingAdjust(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate())),
                e = this._get(n, "isRTL"),
                li = this._get(n, "showButtonPanel"),
                hi = this._get(n, "hideIfNoPrevNext"),
                ni = this._get(n, "navigationAsDateFormat"),
                o = this._getNumberOfMonths(n),
                ai = this._get(n, "showCurrentAtPos"),
                ci = this._get(n, "stepMonths"),
                ti = o[0] !== 1 || o[1] !== 1,
                ii = this._daylightSavingAdjust(n.currentDay ? new Date(n.currentYear, n.currentMonth, n.currentDay) : new Date(9999, 9, 9)),
                w = this._getMinMaxDate(n, "min"),
                v = this._getMinMaxDate(n, "max"),
                t = n.drawMonth - ai,
                r = n.drawYear;
            if (t < 0 && (t += 12, r--), v)
                for (b = this._daylightSavingAdjust(new Date(v.getFullYear(), v.getMonth() - o[0] * o[1] + 1, v.getDate())), b = w && b < w ? w : b; this._daylightSavingAdjust(new Date(r, t, 1)) > b;) t--, t < 0 && (t = 11, r--);
            for (n.drawMonth = t, n.drawYear = r, s = this._get(n, "prevText"), s = ni ? this.formatDate(s, this._daylightSavingAdjust(new Date(r, t - ci, 1)), this._getFormatConfig(n)) : s, rt = this._canAdjustMonth(n, -1, r, t) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "e" : "w") + "'>" + s + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "e" : "w") + "'>" + s + "<\/span><\/a>", h = this._get(n, "nextText"), h = ni ? this.formatDate(h, this._daylightSavingAdjust(new Date(r, t + ci, 1)), this._getFormatConfig(n)) : h, ut = this._canAdjustMonth(n, 1, r, t) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "w" : "e") + "'>" + h + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "w" : "e") + "'>" + h + "<\/span><\/a>", k = this._get(n, "currentText"), ft = this._get(n, "gotoCurrent") && n.currentDay ? ii : gt, k = ni ? this.formatDate(k, ft, this._getFormatConfig(n)) : k, et = n.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(n, "closeText") + "<\/button>", ri = li ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (e ? et : "") + (this._isInRange(n, ft) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + k + "<\/button>" : "") + (e ? "" : et) + "<\/div>" : "", c = parseInt(this._get(n, "firstDay"), 10), c = isNaN(c) ? 0 : c, ot = this._get(n, "showWeek"), ui = this._get(n, "dayNames"), fi = this._get(n, "dayNamesMin"), ei = this._get(n, "monthNames"), oi = this._get(n, "monthNamesShort"), st = this._get(n, "beforeShowDay"), g = this._get(n, "showOtherMonths"), si = this._get(n, "selectOtherMonths"), ht = this._getDefaultDate(n), nt = "", f, y = 0; y < o[0]; y++) {
                for (ct = "", this.maxRows = 4, p = 0; p < o[1]; p++) {
                    if (lt = this._daylightSavingAdjust(new Date(r, t, n.selectedDay)), l = " ui-corner-all", u = "", ti) {
                        if (u += "<div class='ui-datepicker-group", o[1] > 1) switch (p) {
                            case 0:
                                u += " ui-datepicker-group-first";
                                l = " ui-corner-" + (e ? "right" : "left");
                                break;
                            case o[1] - 1:
                                u += " ui-datepicker-group-last";
                                l = " ui-corner-" + (e ? "left" : "right");
                                break;
                            default:
                                u += " ui-datepicker-group-middle";
                                l = ""
                        }
                        u += "'>"
                    }
                    for (u += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + l + "'>" + (/all|left/.test(l) && y === 0 ? e ? ut : rt : "") + (/all|right/.test(l) && y === 0 ? e ? rt : ut : "") + this._generateMonthYearHeader(n, t, r, w, v, y > 0 || p > 0, ei, oi) + "<\/div><table class='ui-datepicker-calendar'><thead><tr>", at = ot ? "<th class='ui-datepicker-week-col'>" + this._get(n, "weekHeader") + "<\/th>" : "", f = 0; f < 7; f++) vt = (f + c) % 7, at += "<th scope='col'" + ((f + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + ui[vt] + "'>" + fi[vt] + "<\/span><\/th>";
                    for (u += at + "<\/tr><\/thead><tbody>", yt = this._getDaysInMonth(r, t), r === n.selectedYear && t === n.selectedMonth && (n.selectedDay = Math.min(n.selectedDay, yt)), pt = (this._getFirstDayOfMonth(r, t) - c + 7) % 7, tt = Math.ceil((pt + yt) / 7), wt = ti ? this.maxRows > tt ? this.maxRows : tt : tt, this.maxRows = wt, i = this._daylightSavingAdjust(new Date(r, t, 1 - pt)), bt = 0; bt < wt; bt++) {
                        for (u += "<tr>", kt = ot ? "<td class='ui-datepicker-week-col'>" + this._get(n, "calculateWeek")(i) + "<\/td>" : "", f = 0; f < 7; f++) d = st ? st.apply(n.input ? n.input[0] : null, [i]) : [!0, ""], a = i.getMonth() !== t, it = a && !si || !d[0] || w && i < w || v && i > v, kt += "<td class='" + ((f + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (a ? " ui-datepicker-other-month" : "") + (i.getTime() === lt.getTime() && t === n.selectedMonth && n._keyEvent || ht.getTime() === i.getTime() && ht.getTime() === lt.getTime() ? " " + this._dayOverClass : "") + (it ? " " + this._unselectableClass + " ui-state-disabled" : "") + (a && !g ? "" : " " + d[1] + (i.getTime() === ii.getTime() ? " " + this._currentClass : "") + (i.getTime() === gt.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!a || g) && d[2] ? " title='" + d[2].replace(/'/g, "&#39;") + "'" : "") + (it ? "" : " data-handler='selectDay' data-event='click' data-month='" + i.getMonth() + "' data-year='" + i.getFullYear() + "'") + ">" + (a && !g ? "&#xa0;" : it ? "<span class='ui-state-default'>" + i.getDate() + "<\/span>" : "<a class='ui-state-default" + (i.getTime() === gt.getTime() ? " ui-state-highlight" : "") + (i.getTime() === ii.getTime() ? " ui-state-active" : "") + (a ? " ui-priority-secondary" : "") + "' href='#'>" + i.getDate() + "<\/a>") + "<\/td>", i.setDate(i.getDate() + 1), i = this._daylightSavingAdjust(i);
                        u += kt + "<\/tr>"
                    }
                    t++;
                    t > 11 && (t = 0, r++);
                    u += "<\/tbody><\/table>" + (ti ? "<\/div>" + (o[0] > 0 && p === o[1] - 1 ? "<div class='ui-datepicker-row-break'><\/div>" : "") : "");
                    ct += u
                }
                nt += ct
            }
            return nt += ri, n._keyEvent = !1, nt
        },
        _generateMonthYearHeader: function(n, t, i, r, u, f, e, o) {
            var k, d, h, v, y, p, s, a, w = this._get(n, "changeMonth"),
                b = this._get(n, "changeYear"),
                g = this._get(n, "showMonthAfterYear"),
                c = "<div class='ui-datepicker-title'>",
                l = "";
            if (f || !w) l += "<span class='ui-datepicker-month'>" + e[t] + "<\/span>";
            else {
                for (k = r && r.getFullYear() === i, d = u && u.getFullYear() === i, l += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; h < 12; h++)(!k || h >= r.getMonth()) && (!d || h <= u.getMonth()) && (l += "<option value='" + h + "'" + (h === t ? " selected='selected'" : "") + ">" + o[h] + "<\/option>");
                l += "<\/select>"
            }
            if (g || (c += l + (f || !(w && b) ? "&#xa0;" : "")), !n.yearshtml)
                if (n.yearshtml = "", f || !b) c += "<span class='ui-datepicker-year'>" + i + "<\/span>";
                else {
                    for (v = this._get(n, "yearRange").split(":"), y = (new Date).getFullYear(), p = function(n) {
                            var t = n.match(/c[+\-].*/) ? i + parseInt(n.substring(1), 10) : n.match(/[+\-].*/) ? y + parseInt(n, 10) : parseInt(n, 10);
                            return isNaN(t) ? y : t
                        }, s = p(v[0]), a = Math.max(s, p(v[1] || "")), s = r ? Math.max(s, r.getFullYear()) : s, a = u ? Math.min(a, u.getFullYear()) : a, n.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; s <= a; s++) n.yearshtml += "<option value='" + s + "'" + (s === i ? " selected='selected'" : "") + ">" + s + "<\/option>";
                    n.yearshtml += "<\/select>";
                    c += n.yearshtml;
                    n.yearshtml = null
                }
            return c += this._get(n, "yearSuffix"), g && (c += (f || !(w && b) ? "&#xa0;" : "") + l), c + "<\/div>"
        },
        _adjustInstDate: function(n, t, i) {
            var u = n.drawYear + (i === "Y" ? t : 0),
                f = n.drawMonth + (i === "M" ? t : 0),
                e = Math.min(n.selectedDay, this._getDaysInMonth(u, f)) + (i === "D" ? t : 0),
                r = this._restrictMinMax(n, this._daylightSavingAdjust(new Date(u, f, e)));
            n.selectedDay = r.getDate();
            n.drawMonth = n.selectedMonth = r.getMonth();
            n.drawYear = n.selectedYear = r.getFullYear();
            (i === "M" || i === "Y") && this._notifyChange(n)
        },
        _restrictMinMax: function(n, t) {
            var i = this._getMinMaxDate(n, "min"),
                r = this._getMinMaxDate(n, "max"),
                u = i && t < i ? i : t;
            return r && u > r ? r : u
        },
        _notifyChange: function(n) {
            var t = this._get(n, "onChangeMonthYear");
            t && t.apply(n.input ? n.input[0] : null, [n.selectedYear, n.selectedMonth + 1, n])
        },
        _getNumberOfMonths: function(n) {
            var t = this._get(n, "numberOfMonths");
            return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t
        },
        _getMinMaxDate: function(n, t) {
            return this._determineDate(n, this._get(n, t + "Date"), null)
        },
        _getDaysInMonth: function(n, t) {
            return 32 - this._daylightSavingAdjust(new Date(n, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function(n, t) {
            return new Date(n, t, 1).getDay()
        },
        _canAdjustMonth: function(n, t, i, r) {
            var f = this._getNumberOfMonths(n),
                u = this._daylightSavingAdjust(new Date(i, r + (t < 0 ? t : f[0] * f[1]), 1));
            return t < 0 && u.setDate(this._getDaysInMonth(u.getFullYear(), u.getMonth())), this._isInRange(n, u)
        },
        _isInRange: function(n, t) {
            var i, f, e = this._getMinMaxDate(n, "min"),
                o = this._getMinMaxDate(n, "max"),
                r = null,
                u = null,
                s = this._get(n, "yearRange");
            return s && (i = s.split(":"), f = (new Date).getFullYear(), r = parseInt(i[0], 10), u = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += f), i[1].match(/[+\-].*/) && (u += f)), (!e || t.getTime() >= e.getTime()) && (!o || t.getTime() <= o.getTime()) && (!r || t.getFullYear() >= r) && (!u || t.getFullYear() <= u)
        },
        _getFormatConfig: function(n) {
            var t = this._get(n, "shortYearCutoff");
            return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(n, "dayNamesShort"),
                dayNames: this._get(n, "dayNames"),
                monthNamesShort: this._get(n, "monthNamesShort"),
                monthNames: this._get(n, "monthNames")
            }
        },
        _formatDate: function(n, t, i, r) {
            t || (n.currentDay = n.selectedDay, n.currentMonth = n.selectedMonth, n.currentYear = n.selectedYear);
            var u = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r, i, t)) : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay));
            return this.formatDate(this._get(n, "dateFormat"), u, this._getFormatConfig(n))
        }
    });
    n.fn.datepicker = function(t) {
        if (!this.length) return this;
        n.datepicker.initialized || (n(document).mousedown(n.datepicker._checkExternalClick), n.datepicker.initialized = !0);
        n("#" + n.datepicker._mainDivId).length === 0 && n("body").append(n.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return typeof t == "string" && (t === "isDisabled" || t === "getDate" || t === "widget") ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : t === "option" && arguments.length === 2 && typeof arguments[1] == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : this.each(function() {
            typeof t == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this].concat(i)) : n.datepicker._attachDatepicker(this, t)
        })
    };
    n.datepicker = new v;
    n.datepicker.initialized = !1;
    n.datepicker.uuid = (new Date).getTime();
    n.datepicker.version = "1.11.2";
    it = n.datepicker;
    n.widget("ui.draggable", n.ui.mouse, {
        version: "1.11.2",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            this.options.helper === "original" && this._setPositionRelative();
            this.options.addClasses && this.element.addClass("ui-draggable");
            this.options.disabled && this.element.addClass("ui-draggable-disabled");
            this._setHandleClassName();
            this._mouseInit()
        },
        _setOption: function(n, t) {
            this._super(n, t);
            n === "handle" && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function() {
            if ((this.helper || this.element).is(".ui-draggable-dragging")) {
                this.destroyOnClear = !0;
                return
            }
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
            this._removeHandleClassName();
            this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var i = this.options;
            return (this._blurActiveElement(t), this.helper || i.disabled || n(t.target).closest(".ui-resizable-handle").length > 0) ? !1 : (this.handle = this._getHandle(t), !this.handle) ? !1 : (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0)
        },
        _blockFrames: function(t) {
            this.iframeBlocks = this.document.find(t).map(function() {
                var t = n(this);
                return n("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function(t) {
            var i = this.document[0];
            if (this.handleElement.is(t.target)) try {
                i.activeElement && i.activeElement.nodeName.toLowerCase() !== "body" && n(i.activeElement).blur()
            } catch (r) {}
        },
        _mouseStart: function(t) {
            var i = this.options;
            return (this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), n.ui.ddmanager && (n.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                return n(this).css("position") === "fixed"
            }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1) ? (this._clear(), !1) : (this._cacheHelperProportions(), n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), n.ui.ddmanager && n.ui.ddmanager.dragStart(this, t), !0)
        },
        _refreshOffsets: function(n) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            };
            this.offset.click = {
                left: n.pageX - this.offset.left,
                top: n.pageY - this.offset.top
            }
        },
        _mouseDrag: function(t, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var r = this._uiHash();
                if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
                this.position = r.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", n.ui.ddmanager && n.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function(t) {
            var r = this,
                i = !1;
            return n.ui.ddmanager && !this.options.dropBehaviour && (i = n.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), this.options.revert === "invalid" && !i || this.options.revert === "valid" && i || this.options.revert === !0 || n.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? n(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                r._trigger("stop", t) !== !1 && r._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1
        },
        _mouseUp: function(t) {
            return this._unblockFrames(), n.ui.ddmanager && n.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), n.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(t) {
            return this.options.handle ? !!n(t.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
            this.handleElement.addClass("ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this.handleElement.removeClass("ui-draggable-handle")
        },
        _createHelper: function(t) {
            var r = this.options,
                u = n.isFunction(r.helper),
                i = u ? n(r.helper.apply(this.element[0], [t])) : r.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
            return i.parents("body").length || i.appendTo(r.appendTo === "parent" ? this.element[0].parentNode : r.appendTo), u && i[0] === this.element[0] && this._setPositionRelative(), i[0] === this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"), i
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(t) {
            typeof t == "string" && (t = t.split(" "));
            n.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            });
            "left" in t && (this.offset.click.left = t.left + this.margins.left);
            "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left);
            "top" in t && (this.offset.click.top = t.top + this.margins.top);
            "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _isRootNode: function(n) {
            return /(html|body)/i.test(n.tagName) || n === this.document[0]
        },
        _getParentOffset: function() {
            var t = this.offsetParent.offset(),
                i = this.document[0];
            return this.cssPosition === "absolute" && this.scrollParent[0] !== i && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition !== "relative") return {
                top: 0,
                left: 0
            };
            var n = this.element.position(),
                t = this._isRootNode(this.scrollParent[0]);
            return {
                top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var f, t, i, r = this.options,
                u = this.document[0];
            if (this.relativeContainer = null, !r.containment) {
                this.containment = null;
                return
            }
            if (r.containment === "window") {
                this.containment = [n(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, n(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, n(window).scrollLeft() + n(window).width() - this.helperProportions.width - this.margins.left, n(window).scrollTop() + (n(window).height() || u.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (r.containment === "document") {
                this.containment = [0, 0, n(u).width() - this.helperProportions.width - this.margins.left, (n(u).height() || u.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (r.containment.constructor === Array) {
                this.containment = r.containment;
                return
            }(r.containment === "parent" && (r.containment = this.helper[0].parentNode), t = n(r.containment), i = t[0], i) && (f = /(scroll|auto)/.test(t.css("overflow")), this.containment = [(parseInt(t.css("borderLeftWidth"), 10) || 0) + (parseInt(t.css("paddingLeft"), 10) || 0), (parseInt(t.css("borderTopWidth"), 10) || 0) + (parseInt(t.css("paddingTop"), 10) || 0), (f ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t.css("borderRightWidth"), 10) || 0) - (parseInt(t.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (f ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t.css("borderBottomWidth"), 10) || 0) - (parseInt(t.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = t)
        },
        _convertPositionTo: function(n, t) {
            t || (t = this.position);
            var i = n === "absolute" ? 1 : -1,
                r = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - (this.cssPosition === "fixed" ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top) * i,
                left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - (this.cssPosition === "fixed" ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function(n, t) {
            var i, s, u, f, r = this.options,
                h = this._isRootNode(this.scrollParent[0]),
                e = n.pageX,
                o = n.pageY;
            return h && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, n.pageX - this.offset.click.left < i[0] && (e = i[0] + this.offset.click.left), n.pageY - this.offset.click.top < i[1] && (o = i[1] + this.offset.click.top), n.pageX - this.offset.click.left > i[2] && (e = i[2] + this.offset.click.left), n.pageY - this.offset.click.top > i[3] && (o = i[3] + this.offset.click.top)), r.grid && (u = r.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, o = i ? u - this.offset.click.top >= i[1] || u - this.offset.click.top > i[3] ? u : u - this.offset.click.top >= i[1] ? u - r.grid[1] : u + r.grid[1] : u, f = r.grid[0] ? this.originalPageX + Math.round((e - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, e = i ? f - this.offset.click.left >= i[0] || f - this.offset.click.left > i[2] ? f : f - this.offset.click.left >= i[0] ? f - r.grid[0] : f + r.grid[0] : f), r.axis === "y" && (e = this.originalPageX), r.axis === "x" && (o = this.originalPageY)), {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top),
                left: e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove();
            this.helper = null;
            this.cancelHelperRemoval = !1;
            this.destroyOnClear && this.destroy()
        },
        _normalizeRightBottom: function() {
            this.options.axis !== "y" && this.helper.css("right") !== "auto" && (this.helper.width(this.helper.width()), this.helper.css("right", "auto"));
            this.options.axis !== "x" && this.helper.css("bottom") !== "auto" && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
        },
        _trigger: function(t, i, r) {
            return r = r || this._uiHash(), n.ui.plugin.call(this, t, [i, r, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), r.offset = this.positionAbs), n.Widget.prototype._trigger.call(this, t, i, r)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    n.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, i, r) {
            var u = n.extend({}, i, {
                item: r.element
            });
            r.sortables = [];
            n(r.options.connectToSortable).each(function() {
                var i = n(this).sortable("instance");
                i && !i.options.disabled && (r.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, u))
            })
        },
        stop: function(t, i, r) {
            var u = n.extend({}, i, {
                item: r.element
            });
            r.cancelHelperRemoval = !1;
            n.each(r.sortables, function() {
                var n = this;
                n.isOver ? (n.isOver = 0, r.cancelHelperRemoval = !0, n.cancelHelperRemoval = !1, n._storedCSS = {
                    position: n.placeholder.css("position"),
                    top: n.placeholder.css("top"),
                    left: n.placeholder.css("left")
                }, n._mouseStop(t), n.options.helper = n.options._helper) : (n.cancelHelperRemoval = !0, n._trigger("deactivate", t, u))
            })
        },
        drag: function(t, i, r) {
            n.each(r.sortables, function() {
                var f = !1,
                    u = this;
                u.positionAbs = r.positionAbs;
                u.helperProportions = r.helperProportions;
                u.offset.click = r.offset.click;
                u._intersectsWith(u.containerCache) && (f = !0, n.each(r.sortables, function() {
                    return this.positionAbs = r.positionAbs, this.helperProportions = r.helperProportions, this.offset.click = r.offset.click, this !== u && this._intersectsWith(this.containerCache) && n.contains(u.element[0], this.element[0]) && (f = !1), f
                }));
                f ? (u.isOver || (u.isOver = 1, u.currentItem = i.helper.appendTo(u.element).data("ui-sortable-item", !0), u.options._helper = u.options.helper, u.options.helper = function() {
                    return i.helper[0]
                }, t.target = u.currentItem[0], u._mouseCapture(t, !0), u._mouseStart(t, !0, !0), u.offset.click.top = r.offset.click.top, u.offset.click.left = r.offset.click.left, u.offset.parent.left -= r.offset.parent.left - u.offset.parent.left, u.offset.parent.top -= r.offset.parent.top - u.offset.parent.top, r._trigger("toSortable", t), r.dropped = u.element, n.each(r.sortables, function() {
                    this.refreshPositions()
                }), r.currentItem = r.element, u.fromOutside = r), u.currentItem && (u._mouseDrag(t), i.position = u.position)) : u.isOver && (u.isOver = 0, u.cancelHelperRemoval = !0, u.options._revert = u.options.revert, u.options.revert = !1, u._trigger("out", t, u._uiHash(u)), u._mouseStop(t, !0), u.options.revert = u.options._revert, u.options.helper = u.options._helper, u.placeholder && u.placeholder.remove(), r._refreshOffsets(t), i.position = r._generatePosition(t, !0), r._trigger("fromSortable", t), r.dropped = !1, n.each(r.sortables, function() {
                    this.refreshPositions()
                }))
            })
        }
    });
    n.ui.plugin.add("draggable", "cursor", {
        start: function(t, i, r) {
            var u = n("body"),
                f = r.options;
            u.css("cursor") && (f._cursor = u.css("cursor"));
            u.css("cursor", f.cursor)
        },
        stop: function(t, i, r) {
            var u = r.options;
            u._cursor && n("body").css("cursor", u._cursor)
        }
    });
    n.ui.plugin.add("draggable", "opacity", {
        start: function(t, i, r) {
            var u = n(i.helper),
                f = r.options;
            u.css("opacity") && (f._opacity = u.css("opacity"));
            u.css("opacity", f.opacity)
        },
        stop: function(t, i, r) {
            var u = r.options;
            u._opacity && n(i.helper).css("opacity", u._opacity)
        }
    });
    n.ui.plugin.add("draggable", "scroll", {
        start: function(n, t, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1));
            i.scrollParentNotHidden[0] !== i.document[0] && i.scrollParentNotHidden[0].tagName !== "HTML" && (i.overflowOffset = i.scrollParentNotHidden.offset())
        },
        drag: function(t, i, r) {
            var u = r.options,
                o = !1,
                e = r.scrollParentNotHidden[0],
                f = r.document[0];
            e !== f && e.tagName !== "HTML" ? (u.axis && u.axis === "x" || (r.overflowOffset.top + e.offsetHeight - t.pageY < u.scrollSensitivity ? e.scrollTop = o = e.scrollTop + u.scrollSpeed : t.pageY - r.overflowOffset.top < u.scrollSensitivity && (e.scrollTop = o = e.scrollTop - u.scrollSpeed)), u.axis && u.axis === "y" || (r.overflowOffset.left + e.offsetWidth - t.pageX < u.scrollSensitivity ? e.scrollLeft = o = e.scrollLeft + u.scrollSpeed : t.pageX - r.overflowOffset.left < u.scrollSensitivity && (e.scrollLeft = o = e.scrollLeft - u.scrollSpeed))) : (u.axis && u.axis === "x" || (t.pageY - n(f).scrollTop() < u.scrollSensitivity ? o = n(f).scrollTop(n(f).scrollTop() - u.scrollSpeed) : n(window).height() - (t.pageY - n(f).scrollTop()) < u.scrollSensitivity && (o = n(f).scrollTop(n(f).scrollTop() + u.scrollSpeed))), u.axis && u.axis === "y" || (t.pageX - n(f).scrollLeft() < u.scrollSensitivity ? o = n(f).scrollLeft(n(f).scrollLeft() - u.scrollSpeed) : n(window).width() - (t.pageX - n(f).scrollLeft()) < u.scrollSensitivity && (o = n(f).scrollLeft(n(f).scrollLeft() + u.scrollSpeed))));
            o !== !1 && n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(r, t)
        }
    });
    n.ui.plugin.add("draggable", "snap", {
        start: function(t, i, r) {
            var u = r.options;
            r.snapElements = [];
            n(u.snap.constructor !== String ? u.snap.items || ":data(ui-draggable)" : u.snap).each(function() {
                var t = n(this),
                    i = t.offset();
                this !== r.element[0] && r.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        },
        drag: function(t, i, r) {
            for (var e, o, s, h, c, a, l, v, w, b = r.options, f = b.snapTolerance, y = i.offset.left, k = y + r.helperProportions.width, p = i.offset.top, d = p + r.helperProportions.height, u = r.snapElements.length - 1; u >= 0; u--) {
                if (c = r.snapElements[u].left - r.margins.left, a = c + r.snapElements[u].width, l = r.snapElements[u].top - r.margins.top, v = l + r.snapElements[u].height, k < c - f || y > a + f || d < l - f || p > v + f || !n.contains(r.snapElements[u].item.ownerDocument, r.snapElements[u].item)) {
                    r.snapElements[u].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, n.extend(r._uiHash(), {
                        snapItem: r.snapElements[u].item
                    }));
                    r.snapElements[u].snapping = !1;
                    continue
                }
                b.snapMode !== "inner" && (e = Math.abs(l - d) <= f, o = Math.abs(v - p) <= f, s = Math.abs(c - k) <= f, h = Math.abs(a - y) <= f, e && (i.position.top = r._convertPositionTo("relative", {
                    top: l - r.helperProportions.height,
                    left: 0
                }).top), o && (i.position.top = r._convertPositionTo("relative", {
                    top: v,
                    left: 0
                }).top), s && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: c - r.helperProportions.width
                }).left), h && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: a
                }).left));
                w = e || o || s || h;
                b.snapMode !== "outer" && (e = Math.abs(l - p) <= f, o = Math.abs(v - d) <= f, s = Math.abs(c - y) <= f, h = Math.abs(a - k) <= f, e && (i.position.top = r._convertPositionTo("relative", {
                    top: l,
                    left: 0
                }).top), o && (i.position.top = r._convertPositionTo("relative", {
                    top: v - r.helperProportions.height,
                    left: 0
                }).top), s && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: c
                }).left), h && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: a - r.helperProportions.width
                }).left));
                !r.snapElements[u].snapping && (e || o || s || h || w) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, n.extend(r._uiHash(), {
                    snapItem: r.snapElements[u].item
                }));
                r.snapElements[u].snapping = e || o || s || h || w
            }
        }
    });
    n.ui.plugin.add("draggable", "stack", {
        start: function(t, i, r) {
            var f, e = r.options,
                u = n.makeArray(n(e.stack)).sort(function(t, i) {
                    return (parseInt(n(t).css("zIndex"), 10) || 0) - (parseInt(n(i).css("zIndex"), 10) || 0)
                });
            u.length && (f = parseInt(n(u[0]).css("zIndex"), 10) || 0, n(u).each(function(t) {
                n(this).css("zIndex", f + t)
            }), this.css("zIndex", f + u.length))
        }
    });
    n.ui.plugin.add("draggable", "zIndex", {
        start: function(t, i, r) {
            var u = n(i.helper),
                f = r.options;
            u.css("zIndex") && (f._zIndex = u.css("zIndex"));
            u.css("zIndex", f.zIndex)
        },
        stop: function(t, i, r) {
            var u = r.options;
            u._zIndex && n(i.helper).css("zIndex", u._zIndex)
        }
    });
    rt = n.ui.draggable;
    n.widget("ui.resizable", n.ui.mouse, {
        version: "1.11.2",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(n) {
            return parseInt(n, 10) || 0
        },
        _isNumber: function(n) {
            return !isNaN(parseInt(n, 10))
        },
        _hasScroll: function(t, i) {
            if (n(t).css("overflow") === "hidden") return !1;
            var r = i && i === "left" ? "scrollLeft" : "scrollTop",
                u = !1;
            return t[r] > 0 ? !0 : (t[r] = 1, u = t[r] > 0, t[r] = 0, u)
        },
        _create: function() {
            var e, f, r, i, o, u = this,
                t = this.options;
            if (this.element.addClass("ui-resizable"), n.extend(this, {
                    _aspectRatio: !!t.aspectRatio,
                    aspectRatio: t.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: t.helper || t.ghost || t.animate ? t.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(n("<div class='ui-wrapper' style='overflow: hidden;'><\/div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = t.handles || (n(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this.handles.constructor === String)
                for (this.handles === "all" && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, f = 0; f < e.length; f++) r = n.trim(e[f]), o = "ui-resizable-" + r, i = n("<div class='ui-resizable-handle " + o + "'><\/div>"), i.css({
                    zIndex: t.zIndex
                }), "se" === r && i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[r] = ".ui-resizable-" + r, this.element.append(i);
            this._renderAxis = function(t) {
                var i, r, u, f;
                t = t || this.element;
                for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = this.element.children(this.handles[i]).first().show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (r = n(this.handles[i], this.element), f = /sw|ne|nw|se|n|s/.test(i) ? r.outerHeight() : r.outerWidth(), u = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(u, f), this._proportionallyResize()), !n(this.handles[i]).length
            };
            this._renderAxis(this.element);
            this._handles = n(".ui-resizable-handle", this.element).disableSelection();
            this._handles.mouseover(function() {
                u.resizing || (this.className && (i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), u.axis = i && i[1] ? i[1] : "se")
            });
            t.autoHide && (this._handles.hide(), n(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                t.disabled || (n(this).removeClass("ui-resizable-autohide"), u._handles.show())
            }).mouseleave(function() {
                t.disabled || u.resizing || (n(this).addClass("ui-resizable-autohide"), u._handles.hide())
            }));
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var t, i = function(t) {
                n(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _mouseCapture: function(t) {
            var r, i, u = !1;
            for (r in this.handles) i = n(this.handles[r])[0], (i === t.target || n.contains(i, t.target)) && (u = !0);
            return !this.options.disabled && u
        },
        _mouseStart: function(t) {
            var u, f, e, r = this.options,
                i = this.element;
            return this.resizing = !0, this._renderProxy(), u = this._num(this.helper.css("left")), f = this._num(this.helper.css("top")), r.containment && (u += n(r.containment).scrollLeft() || 0, f += n(r.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: u,
                top: f
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: i.width(),
                height: i.height()
            }, this.originalSize = this._helper ? {
                width: i.outerWidth(),
                height: i.outerHeight()
            } : {
                width: i.width(),
                height: i.height()
            }, this.sizeDiff = {
                width: i.outerWidth() - i.width(),
                height: i.outerHeight() - i.height()
            }, this.originalPosition = {
                left: u,
                top: f
            }, this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            }, this.aspectRatio = typeof r.aspectRatio == "number" ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1, e = n(".ui-resizable-" + this.axis).css("cursor"), n("body").css("cursor", e === "auto" ? this.axis + "-resize" : e), i.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
        },
        _mouseDrag: function(t) {
            var i, r, u = this.originalMousePosition,
                e = this.axis,
                o = t.pageX - u.left || 0,
                s = t.pageY - u.top || 0,
                f = this._change[e];
            return (this._updatePrevProperties(), !f) ? !1 : (i = f.apply(this, [t, o, s]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), r = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), n.isEmptyObject(r) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1)
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var r, u, f, e, o, s, h, c = this.options,
                i = this;
            return this._helper && (r = this._proportionallyResizeElements, u = r.length && /textarea/i.test(r[0].nodeName), f = u && this._hasScroll(r[0], "left") ? 0 : i.sizeDiff.height, e = u ? 0 : i.sizeDiff.width, o = {
                width: i.helper.width() - e,
                height: i.helper.height() - f
            }, s = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, h = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null, c.animate || this.element.css(n.extend(o, {
                top: h,
                left: s
            })), i.helper.height(i.size.height), i.helper.width(i.size.width), this._helper && !c.animate && this._proportionallyResize()), n("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            };
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var n = {};
            return this.position.top !== this.prevPosition.top && (n.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (n.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (n.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (n.height = this.size.height + "px"), this.helper.css(n), n
        },
        _updateVirtualBoundaries: function(n) {
            var r, u, f, e, t, i = this.options;
            t = {
                minWidth: this._isNumber(i.minWidth) ? i.minWidth : 0,
                maxWidth: this._isNumber(i.maxWidth) ? i.maxWidth : Infinity,
                minHeight: this._isNumber(i.minHeight) ? i.minHeight : 0,
                maxHeight: this._isNumber(i.maxHeight) ? i.maxHeight : Infinity
            };
            (this._aspectRatio || n) && (r = t.minHeight * this.aspectRatio, f = t.minWidth / this.aspectRatio, u = t.maxHeight * this.aspectRatio, e = t.maxWidth / this.aspectRatio, r > t.minWidth && (t.minWidth = r), f > t.minHeight && (t.minHeight = f), u < t.maxWidth && (t.maxWidth = u), e < t.maxHeight && (t.maxHeight = e));
            this._vBoundaries = t
        },
        _updateCache: function(n) {
            this.offset = this.helper.offset();
            this._isNumber(n.left) && (this.position.left = n.left);
            this._isNumber(n.top) && (this.position.top = n.top);
            this._isNumber(n.height) && (this.size.height = n.height);
            this._isNumber(n.width) && (this.size.width = n.width)
        },
        _updateRatio: function(n) {
            var t = this.position,
                i = this.size,
                r = this.axis;
            return this._isNumber(n.height) ? n.width = n.height * this.aspectRatio : this._isNumber(n.width) && (n.height = n.width / this.aspectRatio), r === "sw" && (n.left = t.left + (i.width - n.width), n.top = null), r === "nw" && (n.top = t.top + (i.height - n.height), n.left = t.left + (i.width - n.width)), n
        },
        _respectSize: function(n) {
            var t = this._vBoundaries,
                i = this.axis,
                r = this._isNumber(n.width) && t.maxWidth && t.maxWidth < n.width,
                u = this._isNumber(n.height) && t.maxHeight && t.maxHeight < n.height,
                f = this._isNumber(n.width) && t.minWidth && t.minWidth > n.width,
                e = this._isNumber(n.height) && t.minHeight && t.minHeight > n.height,
                o = this.originalPosition.left + this.originalSize.width,
                s = this.position.top + this.size.height,
                h = /sw|nw|w/.test(i),
                c = /nw|ne|n/.test(i);
            return f && (n.width = t.minWidth), e && (n.height = t.minHeight), r && (n.width = t.maxWidth), u && (n.height = t.maxHeight), f && h && (n.left = o - t.minWidth), r && h && (n.left = o - t.maxWidth), e && c && (n.top = s - t.minHeight), u && c && (n.top = s - t.maxHeight), n.width || n.height || n.left || !n.top ? n.width || n.height || n.top || !n.left || (n.left = null) : n.top = null, n
        },
        _getPaddingPlusBorderDimensions: function(n) {
            for (var t = 0, i = [], r = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], u = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")]; t < 4; t++) i[t] = parseInt(r[t], 10) || 0, i[t] += parseInt(u[t], 10) || 0;
            return {
                height: i[0] + i[2],
                width: i[1] + i[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var n, t = 0, i = this.helper || this.element; t < this._proportionallyResizeElements.length; t++) n = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(n)), n.css({
                    height: i.height() - this.outerDimensions.height || 0,
                    width: i.width() - this.outerDimensions.width || 0
                })
        },
        _renderProxy: function() {
            var t = this.element,
                i = this.options;
            this.elementOffset = t.offset();
            this._helper ? (this.helper = this.helper || n("<div style='overflow:hidden;'><\/div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(n, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function(n, t) {
                var i = this.originalSize,
                    r = this.originalPosition;
                return {
                    left: r.left + t,
                    width: i.width - t
                }
            },
            n: function(n, t, i) {
                var r = this.originalSize,
                    u = this.originalPosition;
                return {
                    top: u.top + i,
                    height: r.height - i
                }
            },
            s: function(n, t, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            },
            sw: function(t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            },
            ne: function(t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            },
            nw: function(t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            }
        },
        _propagate: function(t, i) {
            n.ui.plugin.call(this, t, [i, this.ui()]);
            t !== "resize" && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    });
    n.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var i = n(this).resizable("instance"),
                u = i.options,
                r = i._proportionallyResizeElements,
                f = r.length && /textarea/i.test(r[0].nodeName),
                s = f && i._hasScroll(r[0], "left") ? 0 : i.sizeDiff.height,
                h = f ? 0 : i.sizeDiff.width,
                c = {
                    width: i.size.width - h,
                    height: i.size.height - s
                },
                e = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                o = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(n.extend(c, o && e ? {
                top: o,
                left: e
            } : {}), {
                duration: u.animateDuration,
                easing: u.animateEasing,
                step: function() {
                    var u = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    r && r.length && n(r[0]).css({
                        width: u.width,
                        height: u.height
                    });
                    i._updateCache(u);
                    i._propagate("resize", t)
                }
            })
        }
    });
    n.ui.plugin.add("resizable", "containment", {
        start: function() {
            var r, f, e, o, s, h, c, t = n(this).resizable("instance"),
                l = t.options,
                a = t.element,
                u = l.containment,
                i = u instanceof n ? u.get(0) : /parent/.test(u) ? a.parent().get(0) : u;
            i && (t.containerElement = n(i), /document/.test(u) || u === document ? (t.containerOffset = {
                left: 0,
                top: 0
            }, t.containerPosition = {
                left: 0,
                top: 0
            }, t.parentData = {
                element: n(document),
                left: 0,
                top: 0,
                width: n(document).width(),
                height: n(document).height() || document.body.parentNode.scrollHeight
            }) : (r = n(i), f = [], n(["Top", "Right", "Left", "Bottom"]).each(function(n, i) {
                f[n] = t._num(r.css("padding" + i))
            }), t.containerOffset = r.offset(), t.containerPosition = r.position(), t.containerSize = {
                height: r.innerHeight() - f[3],
                width: r.innerWidth() - f[1]
            }, e = t.containerOffset, o = t.containerSize.height, s = t.containerSize.width, h = t._hasScroll(i, "left") ? i.scrollWidth : s, c = t._hasScroll(i) ? i.scrollHeight : o, t.parentData = {
                element: i,
                left: e.left,
                top: e.top,
                width: h,
                height: c
            }))
        },
        resize: function(t) {
            var o, s, h, c, i = n(this).resizable("instance"),
                v = i.options,
                r = i.containerOffset,
                l = i.position,
                f = i._aspectRatio || t.shiftKey,
                e = {
                    top: 0,
                    left: 0
                },
                a = i.containerElement,
                u = !0;
            a[0] !== document && /static/.test(a.css("position")) && (e = r);
            l.left < (i._helper ? r.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - r.left : i.position.left - e.left), f && (i.size.height = i.size.width / i.aspectRatio, u = !1), i.position.left = v.helper ? r.left : 0);
            l.top < (i._helper ? r.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - r.top : i.position.top), f && (i.size.width = i.size.height * i.aspectRatio, u = !1), i.position.top = i._helper ? r.top : 0);
            h = i.containerElement.get(0) === i.element.parent().get(0);
            c = /relative|absolute/.test(i.containerElement.css("position"));
            h && c ? (i.offset.left = i.parentData.left + i.position.left, i.offset.top = i.parentData.top + i.position.top) : (i.offset.left = i.element.offset().left, i.offset.top = i.element.offset().top);
            o = Math.abs(i.sizeDiff.width + (i._helper ? i.offset.left - e.left : i.offset.left - r.left));
            s = Math.abs(i.sizeDiff.height + (i._helper ? i.offset.top - e.top : i.offset.top - r.top));
            o + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - o, f && (i.size.height = i.size.width / i.aspectRatio, u = !1));
            s + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - s, f && (i.size.width = i.size.height * i.aspectRatio, u = !1));
            u || (i.position.left = i.prevPosition.left, i.position.top = i.prevPosition.top, i.size.width = i.prevSize.width, i.size.height = i.prevSize.height)
        },
        stop: function() {
            var t = n(this).resizable("instance"),
                r = t.options,
                u = t.containerOffset,
                f = t.containerPosition,
                e = t.containerElement,
                i = n(t.helper),
                o = i.offset(),
                s = i.outerWidth() - t.sizeDiff.width,
                h = i.outerHeight() - t.sizeDiff.height;
            t._helper && !r.animate && /relative/.test(e.css("position")) && n(this).css({
                left: o.left - f.left - u.left,
                width: s,
                height: h
            });
            t._helper && !r.animate && /static/.test(e.css("position")) && n(this).css({
                left: o.left - f.left - u.left,
                width: s,
                height: h
            })
        }
    });
    n.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var r = n(this).resizable("instance"),
                t = r.options,
                i = function(t) {
                    n(t).each(function() {
                        var t = n(this);
                        t.data("ui-resizable-alsoresize", {
                            width: parseInt(t.width(), 10),
                            height: parseInt(t.height(), 10),
                            left: parseInt(t.css("left"), 10),
                            top: parseInt(t.css("top"), 10)
                        })
                    })
                };
            typeof t.alsoResize != "object" || t.alsoResize.parentNode ? i(t.alsoResize) : t.alsoResize.length ? (t.alsoResize = t.alsoResize[0], i(t.alsoResize)) : n.each(t.alsoResize, function(n) {
                i(n)
            })
        },
        resize: function(t, i) {
            var r = n(this).resizable("instance"),
                u = r.options,
                f = r.originalSize,
                e = r.originalPosition,
                s = {
                    height: r.size.height - f.height || 0,
                    width: r.size.width - f.width || 0,
                    top: r.position.top - e.top || 0,
                    left: r.position.left - e.left || 0
                },
                o = function(t, r) {
                    n(t).each(function() {
                        var t = n(this),
                            f = n(this).data("ui-resizable-alsoresize"),
                            u = {},
                            e = r && r.length ? r : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        n.each(e, function(n, t) {
                            var i = (f[t] || 0) + (s[t] || 0);
                            i && i >= 0 && (u[t] = i || null)
                        });
                        t.css(u)
                    })
                };
            typeof u.alsoResize != "object" || u.alsoResize.nodeType ? o(u.alsoResize) : n.each(u.alsoResize, function(n, t) {
                o(n, t)
            })
        },
        stop: function() {
            n(this).removeData("resizable-alsoresize")
        }
    });
    n.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = n(this).resizable("instance"),
                i = t.options,
                r = t.size;
            t.ghost = t.originalElement.clone();
            t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: r.height,
                width: r.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof i.ghost == "string" ? i.ghost : "");
            t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = n(this).resizable("instance");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = n(this).resizable("instance");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    });
    n.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var h, t = n(this).resizable("instance"),
                i = t.options,
                y = t.size,
                e = t.originalSize,
                o = t.originalPosition,
                c = t.axis,
                l = typeof i.grid == "number" ? [i.grid, i.grid] : i.grid,
                s = l[0] || 1,
                f = l[1] || 1,
                a = Math.round((y.width - e.width) / s) * s,
                v = Math.round((y.height - e.height) / f) * f,
                r = e.width + a,
                u = e.height + v,
                p = i.maxWidth && i.maxWidth < r,
                w = i.maxHeight && i.maxHeight < u,
                b = i.minWidth && i.minWidth > r,
                k = i.minHeight && i.minHeight > u;
            i.grid = l;
            b && (r += s);
            k && (u += f);
            p && (r -= s);
            w && (u -= f);
            /^(se|s|e)$/.test(c) ? (t.size.width = r, t.size.height = u) : /^(ne)$/.test(c) ? (t.size.width = r, t.size.height = u, t.position.top = o.top - v) : /^(sw)$/.test(c) ? (t.size.width = r, t.size.height = u, t.position.left = o.left - a) : ((u - f <= 0 || r - s <= 0) && (h = t._getPaddingPlusBorderDimensions(this)), u - f > 0 ? (t.size.height = u, t.position.top = o.top - v) : (u = f - h.height, t.size.height = u, t.position.top = o.top + e.height - u), r - s > 0 ? (t.size.width = r, t.position.left = o.left - a) : (r = f - h.height, t.size.width = r, t.position.left = o.left + e.width - r))
        }
    });
    ut = n.ui.resizable;
    ft = n.widget("ui.dialog", {
        version: "1.11.2",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "Close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(t) {
                    var i = n(this).css(t).offset().top;
                    i < 0 && n(this).css("top", t.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            };
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            };
            this.originalTitle = this.element.attr("title");
            this.options.title = this.options.title || this.originalTitle;
            this._createWrapper();
            this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
            this._createTitlebar();
            this._createButtonPane();
            this.options.draggable && n.fn.draggable && this._makeDraggable();
            this.options.resizable && n.fn.resizable && this._makeResizable();
            this._isOpen = !1;
            this._trackFocus()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? n(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function() {
            var n, t = this.originalPosition;
            this._destroyOverlay();
            this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
            this.uiDialog.stop(!0, !0).remove();
            this.originalTitle && this.element.attr("title", this.originalTitle);
            n = t.parent.children().eq(t.index);
            n.length && n[0] !== this.element[0] ? n.before(this.element) : t.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: n.noop,
        enable: n.noop,
        close: function(t) {
            var i, r = this;
            if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
                if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
                    i = this.document[0].activeElement;
                    i && i.nodeName.toLowerCase() !== "body" && n(i).blur()
                } catch (u) {}
                this._hide(this.uiDialog, this.options.hide, function() {
                    r._trigger("close", t)
                })
            }
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(t, i) {
            var r = !1,
                f = this.uiDialog.siblings(".ui-front:visible").map(function() {
                    return +n(this).css("z-index")
                }).get(),
                u = Math.max.apply(null, f);
            return u >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", u + 1), r = !0), r && !i && this._trigger("focus", t), r
        },
        open: function() {
            var t = this;
            if (this._isOpen) {
                this._moveToTop() && this._focusTabbable();
                return
            }
            this._isOpen = !0;
            this.opener = n(this.document[0].activeElement);
            this._size();
            this._position();
            this._createOverlay();
            this._moveToTop(null, !0);
            this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1);
            this._show(this.uiDialog, this.options.show, function() {
                t._focusTabbable();
                t._trigger("focus")
            });
            this._makeFocusTarget();
            this._trigger("open")
        },
        _focusTabbable: function() {
            var n = this._focusedElement;
            n || (n = this.element.find("[autofocus]"));
            n.length || (n = this.element.find(":tabbable"));
            n.length || (n = this.uiDialogButtonPane.find(":tabbable"));
            n.length || (n = this.uiDialogTitlebarClose.filter(":tabbable"));
            n.length || (n = this.uiDialog);
            n.eq(0).focus()
        },
        _keepFocus: function(t) {
            function i() {
                var t = this.document[0].activeElement,
                    i = this.uiDialog[0] === t || n.contains(this.uiDialog[0], t);
                i || this._focusTabbable()
            }
            t.preventDefault();
            i.call(this);
            this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = n("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo());
            this._on(this.uiDialog, {
                keydown: function(t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === n.ui.keyCode.ESCAPE) {
                        t.preventDefault();
                        this.close(t);
                        return
                    }
                    if (t.keyCode === n.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable"),
                            r = i.filter(":first"),
                            u = i.filter(":last");
                        t.target !== u[0] && t.target !== this.uiDialog[0] || t.shiftKey ? (t.target === r[0] || t.target === this.uiDialog[0]) && t.shiftKey && (this._delay(function() {
                            u.focus()
                        }), t.preventDefault()) : (this._delay(function() {
                            r.focus()
                        }), t.preventDefault())
                    }
                },
                mousedown: function(n) {
                    this._moveToTop(n) && this._focusTabbable()
                }
            });
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var t;
            this.uiDialogTitlebar = n("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
            this._on(this.uiDialogTitlebar, {
                mousedown: function(t) {
                    n(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            });
            this.uiDialogTitlebarClose = n("<button type='button'><\/button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
            this._on(this.uiDialogTitlebarClose, {
                click: function(n) {
                    n.preventDefault();
                    this.close(n)
                }
            });
            t = n("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
            this._title(t);
            this.uiDialog.attr({
                "aria-labelledby": t.attr("id")
            })
        },
        _title: function(n) {
            this.options.title || n.html("&#160;");
            n.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = n("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
            this.uiButtonSet = n("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
            this._createButtons()
        },
        _createButtons: function() {
            var i = this,
                t = this.options.buttons;
            if (this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), n.isEmptyObject(t) || n.isArray(t) && !t.length) {
                this.uiDialog.removeClass("ui-dialog-buttons");
                return
            }
            n.each(t, function(t, r) {
                var u, f;
                r = n.isFunction(r) ? {
                    click: r,
                    text: t
                } : r;
                r = n.extend({
                    type: "button"
                }, r);
                u = r.click;
                r.click = function() {
                    u.apply(i.element[0], arguments)
                };
                f = {
                    icons: r.icons,
                    text: r.showText
                };
                delete r.icons;
                delete r.showText;
                n("<button><\/button>", r).button(f).appendTo(i.uiButtonSet)
            });
            this.uiDialog.addClass("ui-dialog-buttons");
            this.uiDialogButtonPane.appendTo(this.uiDialog)
        },
        _makeDraggable: function() {
            function i(n) {
                return {
                    position: n.position,
                    offset: n.offset
                }
            }
            var t = this,
                r = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(r, u) {
                    n(this).addClass("ui-dialog-dragging");
                    t._blockFrames();
                    t._trigger("dragStart", r, i(u))
                },
                drag: function(n, r) {
                    t._trigger("drag", n, i(r))
                },
                stop: function(u, f) {
                    var e = f.offset.left - t.document.scrollLeft(),
                        o = f.offset.top - t.document.scrollTop();
                    r.position = {
                        my: "left top",
                        at: "left" + (e >= 0 ? "+" : "") + e + " top" + (o >= 0 ? "+" : "") + o,
                        of: t.window
                    };
                    n(this).removeClass("ui-dialog-dragging");
                    t._unblockFrames();
                    t._trigger("dragStop", u, i(f))
                }
            })
        },
        _makeResizable: function() {
            function r(n) {
                return {
                    originalPosition: n.originalPosition,
                    originalSize: n.originalSize,
                    position: n.position,
                    size: n.size
                }
            }
            var t = this,
                i = this.options,
                u = i.resizable,
                f = this.uiDialog.css("position"),
                e = typeof u == "string" ? u : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: i.maxWidth,
                maxHeight: i.maxHeight,
                minWidth: i.minWidth,
                minHeight: this._minHeight(),
                handles: e,
                start: function(i, u) {
                    n(this).addClass("ui-dialog-resizing");
                    t._blockFrames();
                    t._trigger("resizeStart", i, r(u))
                },
                resize: function(n, i) {
                    t._trigger("resize", n, r(i))
                },
                stop: function(u, f) {
                    var e = t.uiDialog.offset(),
                        o = e.left - t.document.scrollLeft(),
                        s = e.top - t.document.scrollTop();
                    i.height = t.uiDialog.height();
                    i.width = t.uiDialog.width();
                    i.position = {
                        my: "left top",
                        at: "left" + (o >= 0 ? "+" : "") + o + " top" + (s >= 0 ? "+" : "") + s,
                        of: t.window
                    };
                    n(this).removeClass("ui-dialog-resizing");
                    t._unblockFrames();
                    t._trigger("resizeStop", u, r(f))
                }
            }).css("position", f)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(t) {
                    this._makeFocusTarget();
                    this._focusedElement = n(t.target)
                }
            })
        },
        _makeFocusTarget: function() {
            this._untrackInstance();
            this._trackingInstances().unshift(this)
        },
        _untrackInstance: function() {
            var t = this._trackingInstances(),
                i = n.inArray(this, t);
            i !== -1 && t.splice(i, 1)
        },
        _trackingInstances: function() {
            var n = this.document.data("ui-dialog-instances");
            return n || (n = [], this.document.data("ui-dialog-instances", n)), n
        },
        _minHeight: function() {
            var n = this.options;
            return n.height === "auto" ? n.minHeight : Math.min(n.minHeight, n.height)
        },
        _position: function() {
            var n = this.uiDialog.is(":visible");
            n || this.uiDialog.show();
            this.uiDialog.position(this.options.position);
            n || this.uiDialog.hide()
        },
        _setOptions: function(t) {
            var i = this,
                r = !1,
                u = {};
            n.each(t, function(n, t) {
                i._setOption(n, t);
                n in i.sizeRelatedOptions && (r = !0);
                n in i.resizableRelatedOptions && (u[n] = t)
            });
            r && (this._size(), this._position());
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", u)
        },
        _setOption: function(n, t) {
            var u, r, i = this.uiDialog;
            (n === "dialogClass" && i.removeClass(this.options.dialogClass).addClass(t), n !== "disabled") && (this._super(n, t), n === "appendTo" && this.uiDialog.appendTo(this._appendTo()), n === "buttons" && this._createButtons(), n === "closeText" && this.uiDialogTitlebarClose.button({
                label: "" + t
            }), n === "draggable" && (u = i.is(":data(ui-draggable)"), u && !t && i.draggable("destroy"), !u && t && this._makeDraggable()), n === "position" && this._position(), n === "resizable" && (r = i.is(":data(ui-resizable)"), r && !t && i.resizable("destroy"), r && typeof t == "string" && i.resizable("option", "handles", t), r || t === !1 || this._makeResizable()), n === "title" && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var t, i, r, n = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            });
            n.minWidth > n.width && (n.width = n.minWidth);
            t = this.uiDialog.css({
                height: "auto",
                width: n.width
            }).outerHeight();
            i = Math.max(0, n.minHeight - t);
            r = typeof n.maxHeight == "number" ? Math.max(0, n.maxHeight - t) : "none";
            n.height === "auto" ? this.element.css({
                minHeight: i,
                maxHeight: r,
                height: "auto"
            }) : this.element.height(Math.max(0, n.height - t));
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var t = n(this);
                return n("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function(t) {
            return n(t.target).closest(".ui-dialog").length ? !0 : !!n(t.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var t = !0;
                this._delay(function() {
                    t = !1
                });
                this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(n) {
                        t || this._allowInteraction(n) || (n.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                });
                this.overlay = n("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                });
                this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var n = this.document.data("ui-dialog-overlays") - 1;
                n ? this.document.data("ui-dialog-overlays", n) : this.document.unbind("focusin").removeData("ui-dialog-overlays");
                this.overlay.remove();
                this.overlay = null
            }
        }
    });
    n.widget("ui.droppable", {
        version: "1.11.2",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var t, i = this.options,
                r = i.accept;
            this.isover = !1;
            this.isout = !0;
            this.accept = n.isFunction(r) ? r : function(n) {
                return n.is(r)
            };
            this.proportions = function() {
                if (arguments.length) t = arguments[0];
                else return t ? t : t = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }
            };
            this._addToManager(i.scope);
            i.addClasses && this.element.addClass("ui-droppable")
        },
        _addToManager: function(t) {
            n.ui.ddmanager.droppables[t] = n.ui.ddmanager.droppables[t] || [];
            n.ui.ddmanager.droppables[t].push(this)
        },
        _splice: function(n) {
            for (var t = 0; t < n.length; t++) n[t] === this && n.splice(t, 1)
        },
        _destroy: function() {
            var t = n.ui.ddmanager.droppables[this.options.scope];
            this._splice(t);
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(t, i) {
            if (t === "accept") this.accept = n.isFunction(i) ? i : function(n) {
                return n.is(i)
            };
            else if (t === "scope") {
                var r = n.ui.ddmanager.droppables[this.options.scope];
                this._splice(r);
                this._addToManager(i)
            }
            this._super(t, i)
        },
        _activate: function(t) {
            var i = n.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass);
            i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function(t) {
            var i = n.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass);
            i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function(t) {
            var i = n.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
        },
        _out: function(t) {
            var i = n.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
        },
        _drop: function(t, i) {
            var r = i || n.ui.ddmanager.current,
                u = !1;
            return !r || (r.currentItem || r.element)[0] === this.element[0] ? !1 : (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var i = n(this).droppable("instance");
                if (i.options.greedy && !i.options.disabled && i.options.scope === r.options.scope && i.accept.call(i.element[0], r.currentItem || r.element) && n.ui.intersect(r, n.extend(i, {
                        offset: i.element.offset()
                    }), i.options.tolerance, t)) return u = !0, !1
            }), u) ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1
        },
        ui: function(n) {
            return {
                draggable: n.currentItem || n.element,
                helper: n.helper,
                position: n.position,
                offset: n.positionAbs
            }
        }
    });
    n.ui.intersect = function() {
        function n(n, t, i) {
            return n >= t && n < t + i
        }
        return function(t, i, r, u) {
            if (!i.offset) return !1;
            var o = (t.positionAbs || t.position.absolute).left + t.margins.left,
                s = (t.positionAbs || t.position.absolute).top + t.margins.top,
                h = o + t.helperProportions.width,
                c = s + t.helperProportions.height,
                f = i.offset.left,
                e = i.offset.top,
                l = f + i.proportions().width,
                a = e + i.proportions().height;
            switch (r) {
                case "fit":
                    return f <= o && h <= l && e <= s && c <= a;
                case "intersect":
                    return f < o + t.helperProportions.width / 2 && h - t.helperProportions.width / 2 < l && e < s + t.helperProportions.height / 2 && c - t.helperProportions.height / 2 < a;
                case "pointer":
                    return n(u.pageY, e, i.proportions().height) && n(u.pageX, f, i.proportions().width);
                case "touch":
                    return (s >= e && s <= a || c >= e && c <= a || s < e && c > a) && (o >= f && o <= l || h >= f && h <= l || o < f && h > l);
                default:
                    return !1
            }
        }
    }();
    n.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t, i) {
            var r, f, u = n.ui.ddmanager.droppables[t.options.scope] || [],
                o = i ? i.type : null,
                e = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            n: for (r = 0; r < u.length; r++)
                if (!u[r].options.disabled && (!t || u[r].accept.call(u[r].element[0], t.currentItem || t.element))) {
                    for (f = 0; f < e.length; f++)
                        if (e[f] === u[r].element[0]) {
                            u[r].proportions().height = 0;
                            continue n
                        }(u[r].visible = u[r].element.css("display") !== "none", u[r].visible) && (o === "mousedown" && u[r]._activate.call(u[r], i), u[r].offset = u[r].element.offset(), u[r].proportions({
                            width: u[r].element[0].offsetWidth,
                            height: u[r].element[0].offsetHeight
                        }))
                }
        },
        drop: function(t, i) {
            var r = !1;
            return n.each((n.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && n.ui.intersect(t, this, this.options.tolerance, i) && (r = this._drop.call(this, i) || r), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }), r
        },
        dragStart: function(t, i) {
            t.element.parentsUntil("body").bind("scroll.droppable", function() {
                t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
            })
        },
        drag: function(t, i) {
            t.options.refreshPositions && n.ui.ddmanager.prepareOffsets(t, i);
            n.each(n.ui.ddmanager.droppables[t.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var r, e, f, o = n.ui.intersect(t, this, this.options.tolerance, i),
                        u = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                    u && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function() {
                        return n(this).droppable("instance").options.scope === e
                    }), f.length && (r = n(f[0]).droppable("instance"), r.greedyChild = u === "isover")), r && u === "isover" && (r.isover = !1, r.isout = !0, r._out.call(r, i)), this[u] = !0, this[u === "isout" ? "isover" : "isout"] = !1, this[u === "isover" ? "_over" : "_out"].call(this, i), r && u === "isout" && (r.isout = !1, r.isover = !0, r._over.call(r, i)))
                }
            })
        },
        dragStop: function(t, i) {
            t.element.parentsUntil("body").unbind("scroll.droppable");
            t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
        }
    };
    var ct = n.ui.droppable,
        w = "ui-effects-",
        b = n;
    n.effects = {
            effect: {}
        },
        function(n, t) {
            function e(n, t, i) {
                var r = s[t.type] || {};
                return n == null ? i || !t.def ? null : t.def : (n = r.floor ? ~~n : parseFloat(n), isNaN(n)) ? t.def : r.mod ? (n + r.mod) % r.mod : 0 > n ? 0 : r.max < n ? r.max : n
            }

            function l(t) {
                var e = i(),
                    o = e._rgba = [];
                return (t = t.toLowerCase(), r(v, function(n, i) {
                    var r, s = i.re.exec(t),
                        h = s && i.parse(s),
                        f = i.space || "rgba";
                    if (h) return r = e[f](h), e[u[f].cache] = r[u[f].cache], o = e._rgba = r._rgba, !1
                }), o.length) ? (o.join() === "0,0,0,0" && n.extend(o, f.transparent), e) : f[t]
            }

            function o(n, t, i) {
                return (i = (i + 1) % 1, i * 6 < 1) ? n + (t - n) * i * 6 : i * 2 < 1 ? t : i * 3 < 2 ? n + (t - n) * (2 / 3 - i) * 6 : n
            }
            var a = /^([\-+])=\s*(\d+\.?\d*)/,
                v = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(n) {
                        return [n[1], n[2], n[3], n[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(n) {
                        return [n[1] * 2.55, n[2] * 2.55, n[3] * 2.55, n[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(n) {
                        return [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(n) {
                        return [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(n) {
                        return [n[1], n[2] / 100, n[3] / 100, n[4]]
                    }
                }],
                i = n.Color = function(t, i, r, u) {
                    return new n.Color.fn.parse(t, i, r, u)
                },
                u = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                s = {
                    byte: {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                h = i.support = {},
                c = n("<p>")[0],
                f, r = n.each;
            c.style.cssText = "background-color:rgba(1,1,1,.5)";
            h.rgba = c.style.backgroundColor.indexOf("rgba") > -1;
            r(u, function(n, t) {
                t.cache = "_" + n;
                t.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            });
            i.fn = n.extend(i.prototype, {
                parse: function(o, s, h, c) {
                    if (o === t) return this._rgba = [null, null, null, null], this;
                    (o.jquery || o.nodeType) && (o = n(o).css(s), s = t);
                    var a = this,
                        v = n.type(o),
                        y = this._rgba = [];
                    return (s !== t && (o = [o, s, h, c], v = "array"), v === "string") ? this.parse(l(o) || f._default) : v === "array" ? (r(u.rgba.props, function(n, t) {
                        y[t.idx] = e(o[t.idx], t)
                    }), this) : v === "object" ? (o instanceof i ? r(u, function(n, t) {
                        o[t.cache] && (a[t.cache] = o[t.cache].slice())
                    }) : r(u, function(t, i) {
                        var u = i.cache;
                        r(i.props, function(n, t) {
                            if (!a[u] && i.to) {
                                if (n === "alpha" || o[n] == null) return;
                                a[u] = i.to(a._rgba)
                            }
                            a[u][t.idx] = e(o[n], t, !0)
                        });
                        a[u] && n.inArray(null, a[u].slice(0, 3)) < 0 && (a[u][3] = 1, i.from && (a._rgba = i.from(a[u])))
                    }), this) : void 0
                },
                is: function(n) {
                    var e = i(n),
                        t = !0,
                        f = this;
                    return r(u, function(n, i) {
                        var o, u = e[i.cache];
                        return u && (o = f[i.cache] || i.to && i.to(f._rgba) || [], r(i.props, function(n, i) {
                            if (u[i.idx] != null) return t = u[i.idx] === o[i.idx]
                        })), t
                    }), t
                },
                _space: function() {
                    var n = [],
                        t = this;
                    return r(u, function(i, r) {
                        t[r.cache] && n.push(i)
                    }), n.pop()
                },
                transition: function(n, t) {
                    var f = i(n),
                        c = f._space(),
                        o = u[c],
                        l = this.alpha() === 0 ? i("transparent") : this,
                        a = l[o.cache] || o.to(l._rgba),
                        h = a.slice();
                    return f = f[o.cache], r(o.props, function(n, i) {
                        var c = i.idx,
                            r = a[c],
                            u = f[c],
                            o = s[i.type] || {};
                        u !== null && (r === null ? h[c] = u : (o.mod && (u - r > o.mod / 2 ? r += o.mod : r - u > o.mod / 2 && (r -= o.mod)), h[c] = e((u - r) * t + r, i)))
                    }), this[c](h)
                },
                blend: function(t) {
                    if (this._rgba[3] === 1) return this;
                    var r = this._rgba.slice(),
                        u = r.pop(),
                        f = i(t)._rgba;
                    return i(n.map(r, function(n, t) {
                        return (1 - u) * f[t] + u * n
                    }))
                },
                toRgbaString: function() {
                    var i = "rgba(",
                        t = n.map(this._rgba, function(n, t) {
                            return n == null ? t > 2 ? 1 : 0 : n
                        });
                    return t[3] === 1 && (t.pop(), i = "rgb("), i + t.join() + ")"
                },
                toHslaString: function() {
                    var i = "hsla(",
                        t = n.map(this.hsla(), function(n, t) {
                            return n == null && (n = t > 2 ? 1 : 0), t && t < 3 && (n = Math.round(n * 100) + "%"), n
                        });
                    return t[3] === 1 && (t.pop(), i = "hsl("), i + t.join() + ")"
                },
                toHexString: function(t) {
                    var i = this._rgba.slice(),
                        r = i.pop();
                    return t && i.push(~~(r * 255)), "#" + n.map(i, function(n) {
                        return n = (n || 0).toString(16), n.length === 1 ? "0" + n : n
                    }).join("")
                },
                toString: function() {
                    return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
                }
            });
            i.fn.parse.prototype = i.fn;
            u.hsla.to = function(n) {
                if (n[0] == null || n[1] == null || n[2] == null) return [null, null, null, n[3]];
                var i = n[0] / 255,
                    r = n[1] / 255,
                    f = n[2] / 255,
                    s = n[3],
                    u = Math.max(i, r, f),
                    e = Math.min(i, r, f),
                    t = u - e,
                    o = u + e,
                    h = o * .5,
                    c, l;
                return c = e === u ? 0 : i === u ? 60 * (r - f) / t + 360 : r === u ? 60 * (f - i) / t + 120 : 60 * (i - r) / t + 240, l = t === 0 ? 0 : h <= .5 ? t / o : t / (2 - o), [Math.round(c) % 360, l, h, s == null ? 1 : s]
            };
            u.hsla.from = function(n) {
                if (n[0] == null || n[1] == null || n[2] == null) return [null, null, null, n[3]];
                var r = n[0] / 360,
                    u = n[1],
                    t = n[2],
                    e = n[3],
                    i = t <= .5 ? t * (1 + u) : t + u - t * u,
                    f = 2 * t - i;
                return [Math.round(o(f, i, r + 1 / 3) * 255), Math.round(o(f, i, r) * 255), Math.round(o(f, i, r - 1 / 3) * 255), e]
            };
            r(u, function(u, f) {
                var s = f.props,
                    o = f.cache,
                    h = f.to,
                    c = f.from;
                i.fn[u] = function(u) {
                    if (h && !this[o] && (this[o] = h(this._rgba)), u === t) return this[o].slice();
                    var l, a = n.type(u),
                        v = a === "array" || a === "object" ? u : arguments,
                        f = this[o].slice();
                    return r(s, function(n, t) {
                        var i = v[a === "object" ? n : t.idx];
                        i == null && (i = f[t.idx]);
                        f[t.idx] = e(i, t)
                    }), c ? (l = i(c(f)), l[o] = f, l) : i(f)
                };
                r(s, function(t, r) {
                    i.fn[t] || (i.fn[t] = function(i) {
                        var f = n.type(i),
                            h = t === "alpha" ? this._hsla ? "hsla" : "rgba" : u,
                            o = this[h](),
                            s = o[r.idx],
                            e;
                        return f === "undefined" ? s : (f === "function" && (i = i.call(this, s), f = n.type(i)), i == null && r.empty) ? this : (f === "string" && (e = a.exec(i), e && (i = s + parseFloat(e[2]) * (e[1] === "+" ? 1 : -1))), o[r.idx] = i, this[h](o))
                    })
                })
            });
            i.hook = function(t) {
                var u = t.split(" ");
                r(u, function(t, r) {
                    n.cssHooks[r] = {
                        set: function(t, u) {
                            var o, f, e = "";
                            if (u !== "transparent" && (n.type(u) !== "string" || (o = l(u)))) {
                                if (u = i(o || u), !h.rgba && u._rgba[3] !== 1) {
                                    for (f = r === "backgroundColor" ? t.parentNode : t;
                                        (e === "" || e === "transparent") && f && f.style;) try {
                                        e = n.css(f, "backgroundColor");
                                        f = f.parentNode
                                    } catch (s) {}
                                    u = u.blend(e && e !== "transparent" ? e : "_default")
                                }
                                u = u.toRgbaString()
                            }
                            try {
                                t.style[r] = u
                            } catch (s) {}
                        }
                    };
                    n.fx.step[r] = function(t) {
                        t.colorInit || (t.start = i(t.elem, r), t.end = i(t.end), t.colorInit = !0);
                        n.cssHooks[r].set(t.elem, t.start.transition(t.end, t.pos))
                    }
                })
            };
            i.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");
            n.cssHooks.borderColor = {
                expand: function(n) {
                    var t = {};
                    return r(["Top", "Right", "Bottom", "Left"], function(i, r) {
                        t["border" + r + "Color"] = n
                    }), t
                }
            };
            f = n.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(b),
        function() {
            function t(t) {
                var r, u, i = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                    f = {};
                if (i && i.length && i[0] && i[i[0]])
                    for (u = i.length; u--;) r = i[u], typeof i[r] == "string" && (f[n.camelCase(r)] = i[r]);
                else
                    for (r in i) typeof i[r] == "string" && (f[r] = i[r]);
                return f
            }

            function u(t, i) {
                var e = {},
                    u, f;
                for (u in i) f = i[u], t[u] !== f && (r[u] || (n.fx.step[u] || !isNaN(parseFloat(f))) && (e[u] = f));
                return e
            }
            var i = ["add", "remove", "toggle"],
                r = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            n.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, i) {
                n.fx.step[i] = function(n) {
                    (n.end === "none" || n.setAttr) && (n.pos !== 1 || n.setAttr) || (b.style(n.elem, i, n.end), n.setAttr = !0)
                }
            });
            n.fn.addBack || (n.fn.addBack = function(n) {
                return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
            });
            n.effects.animateClass = function(r, f, e, o) {
                var s = n.speed(f, e, o);
                return this.queue(function() {
                    var e = n(this),
                        h = e.attr("class") || "",
                        o, f = s.children ? e.find("*").addBack() : e;
                    f = f.map(function() {
                        var i = n(this);
                        return {
                            el: i,
                            start: t(this)
                        }
                    });
                    o = function() {
                        n.each(i, function(n, t) {
                            r[t] && e[t + "Class"](r[t])
                        })
                    };
                    o();
                    f = f.map(function() {
                        return this.end = t(this.el[0]), this.diff = u(this.start, this.end), this
                    });
                    e.attr("class", h);
                    f = f.map(function() {
                        var i = this,
                            t = n.Deferred(),
                            r = n.extend({}, s, {
                                queue: !1,
                                complete: function() {
                                    t.resolve(i)
                                }
                            });
                        return this.el.animate(this.diff, r), t.promise()
                    });
                    n.when.apply(n, f.get()).done(function() {
                        o();
                        n.each(arguments, function() {
                            var t = this.el;
                            n.each(this.diff, function(n) {
                                t.css(n, "")
                            })
                        });
                        s.complete.call(e[0])
                    })
                })
            };
            n.fn.extend({
                addClass: function(t) {
                    return function(i, r, u, f) {
                        return r ? n.effects.animateClass.call(this, {
                            add: i
                        }, r, u, f) : t.apply(this, arguments)
                    }
                }(n.fn.addClass),
                removeClass: function(t) {
                    return function(i, r, u, f) {
                        return arguments.length > 1 ? n.effects.animateClass.call(this, {
                            remove: i
                        }, r, u, f) : t.apply(this, arguments)
                    }
                }(n.fn.removeClass),
                toggleClass: function(t) {
                    return function(i, r, u, f, e) {
                        return typeof r == "boolean" || r === undefined ? u ? n.effects.animateClass.call(this, r ? {
                            add: i
                        } : {
                            remove: i
                        }, u, f, e) : t.apply(this, arguments) : n.effects.animateClass.call(this, {
                            toggle: i
                        }, r, u, f)
                    }
                }(n.fn.toggleClass),
                switchClass: function(t, i, r, u, f) {
                    return n.effects.animateClass.call(this, {
                        add: i,
                        remove: t
                    }, r, u, f)
                }
            })
        }(),
        function() {
            function t(t, i, r, u) {
                return n.isPlainObject(t) && (i = t, t = t.effect), t = {
                    effect: t
                }, i == null && (i = {}), n.isFunction(i) && (u = i, r = null, i = {}), (typeof i == "number" || n.fx.speeds[i]) && (u = r, r = i, i = {}), n.isFunction(r) && (u = r, r = null), i && n.extend(t, i), r = r || i.duration, t.duration = n.fx.off ? 0 : typeof r == "number" ? r : r in n.fx.speeds ? n.fx.speeds[r] : n.fx.speeds._default, t.complete = u || i.complete, t
            }

            function i(t) {
                return !t || typeof t == "number" || n.fx.speeds[t] ? !0 : typeof t == "string" && !n.effects.effect[t] ? !0 : n.isFunction(t) ? !0 : typeof t == "object" && !t.effect ? !0 : !1
            }
            n.extend(n.effects, {
                version: "1.11.2",
                save: function(n, t) {
                    for (var i = 0; i < t.length; i++) t[i] !== null && n.data(w + t[i], n[0].style[t[i]])
                },
                restore: function(n, t) {
                    for (var r, i = 0; i < t.length; i++) t[i] !== null && (r = n.data(w + t[i]), r === undefined && (r = ""), n.css(t[i], r))
                },
                setMode: function(n, t) {
                    return t === "toggle" && (t = n.is(":hidden") ? "show" : "hide"), t
                },
                getBaseline: function(n, t) {
                    var i, r;
                    switch (n[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = n[0] / t.height
                    }
                    switch (n[1]) {
                        case "left":
                            r = 0;
                            break;
                        case "center":
                            r = .5;
                            break;
                        case "right":
                            r = 1;
                            break;
                        default:
                            r = n[1] / t.width
                    }
                    return {
                        x: r,
                        y: i
                    }
                },
                createWrapper: function(t) {
                    if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                    var i = {
                            width: t.outerWidth(!0),
                            height: t.outerHeight(!0),
                            float: t.css("float")
                        },
                        u = n("<div><\/div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        f = {
                            width: t.width(),
                            height: t.height()
                        },
                        r = document.activeElement;
                    try {
                        r.id
                    } catch (e) {
                        r = document.body
                    }
                    return t.wrap(u), (t[0] === r || n.contains(t[0], r)) && n(r).focus(), u = t.parent(), t.css("position") === "static" ? (u.css({
                        position: "relative"
                    }), t.css({
                        position: "relative"
                    })) : (n.extend(i, {
                        position: t.css("position"),
                        zIndex: t.css("z-index")
                    }), n.each(["top", "left", "bottom", "right"], function(n, r) {
                        i[r] = t.css(r);
                        isNaN(parseInt(i[r], 10)) && (i[r] = "auto")
                    }), t.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), t.css(f), u.css(i).show()
                },
                removeWrapper: function(t) {
                    var i = document.activeElement;
                    return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || n.contains(t[0], i)) && n(i).focus()), t
                },
                setTransition: function(t, i, r, u) {
                    return u = u || {}, n.each(i, function(n, i) {
                        var f = t.cssUnit(i);
                        f[0] > 0 && (u[i] = f[0] * r + f[1])
                    }), u
                }
            });
            n.fn.extend({
                effect: function() {
                    function e(t) {
                        function o() {
                            n.isFunction(e) && e.call(r[0]);
                            n.isFunction(t) && t()
                        }
                        var r = n(this),
                            e = i.complete,
                            u = i.mode;
                        (r.is(":hidden") ? u === "hide" : u === "show") ? (r[u](), o()) : f.call(r[0], i, o)
                    }
                    var i = t.apply(this, arguments),
                        r = i.mode,
                        u = i.queue,
                        f = n.effects.effect[i.effect];
                    return n.fx.off || !f ? r ? this[r](i.duration, i.complete) : this.each(function() {
                        i.complete && i.complete.call(this)
                    }) : u === !1 ? this.each(e) : this.queue(u || "fx", e)
                },
                show: function(n) {
                    return function(r) {
                        if (i(r)) return n.apply(this, arguments);
                        var u = t.apply(this, arguments);
                        return u.mode = "show", this.effect.call(this, u)
                    }
                }(n.fn.show),
                hide: function(n) {
                    return function(r) {
                        if (i(r)) return n.apply(this, arguments);
                        var u = t.apply(this, arguments);
                        return u.mode = "hide", this.effect.call(this, u)
                    }
                }(n.fn.hide),
                toggle: function(n) {
                    return function(r) {
                        if (i(r) || typeof r == "boolean") return n.apply(this, arguments);
                        var u = t.apply(this, arguments);
                        return u.mode = "toggle", this.effect.call(this, u)
                    }
                }(n.fn.toggle),
                cssUnit: function(t) {
                    var i = this.css(t),
                        r = [];
                    return n.each(["em", "px", "%", "pt"], function(n, t) {
                        i.indexOf(t) > 0 && (r = [parseFloat(i), t])
                    }), r
                }
            })
        }(),
        function() {
            var t = {};
            n.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(n, i) {
                t[i] = function(t) {
                    return Math.pow(t, n + 2)
                }
            });
            n.extend(t, {
                Sine: function(n) {
                    return 1 - Math.cos(n * Math.PI / 2)
                },
                Circ: function(n) {
                    return 1 - Math.sqrt(1 - n * n)
                },
                Elastic: function(n) {
                    return n === 0 || n === 1 ? n : -Math.pow(2, 8 * (n - 1)) * Math.sin(((n - 1) * 80 - 7.5) * Math.PI / 15)
                },
                Back: function(n) {
                    return n * n * (3 * n - 2)
                },
                Bounce: function(n) {
                    for (var t, i = 4; n < ((t = Math.pow(2, --i)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((t * 3 - 2) / 22 - n, 2)
                }
            });
            n.each(t, function(t, i) {
                n.easing["easeIn" + t] = i;
                n.easing["easeOut" + t] = function(n) {
                    return 1 - i(1 - n)
                };
                n.easing["easeInOut" + t] = function(n) {
                    return n < .5 ? i(n * 2) / 2 : 1 - i(n * -2 + 2) / 2
                }
            })
        }();
    var lt = n.effects,
        at = n.effects.effect.blind = function(t, i) {
            var r = n(this),
                s = ["position", "top", "bottom", "left", "right", "height", "width"],
                v = n.effects.setMode(r, t.mode || "hide"),
                y = t.direction || "up",
                f = /up|down|vertical/.test(y),
                h = f ? "height" : "width",
                c = f ? "top" : "left",
                p = /up|left|vertical|horizontal/.test(y),
                l = {},
                a = v === "show",
                u, e, o;
            r.parent().is(".ui-effects-wrapper") ? n.effects.save(r.parent(), s) : n.effects.save(r, s);
            r.show();
            u = n.effects.createWrapper(r).css({
                overflow: "hidden"
            });
            e = u[h]();
            o = parseFloat(u.css(c)) || 0;
            l[h] = a ? e : 0;
            p || (r.css(f ? "bottom" : "right", 0).css(f ? "top" : "left", "auto").css({
                position: "absolute"
            }), l[c] = a ? o : e + o);
            a && (u.css(h, 0), p || u.css(c, o + e));
            u.animate(l, {
                duration: t.duration,
                easing: t.easing,
                queue: !1,
                complete: function() {
                    v === "hide" && r.hide();
                    n.effects.restore(r, s);
                    n.effects.removeWrapper(r);
                    i()
                }
            })
        },
        vt = n.effects.effect.bounce = function(t, i) {
            var r = n(this),
                v = ["position", "top", "bottom", "left", "right", "height", "width"],
                k = n.effects.setMode(r, t.mode || "effect"),
                f = k === "hide",
                y = k === "show",
                h = t.direction || "up",
                u = t.distance,
                p = t.times || 5,
                d = p * 2 + (y || f ? 1 : 0),
                c = t.duration / d,
                l = t.easing,
                e = h === "up" || h === "down" ? "top" : "left",
                w = h === "up" || h === "left",
                b, o, s, a = r.queue(),
                g = a.length;
            for ((y || f) && v.push("opacity"), n.effects.save(r, v), r.show(), n.effects.createWrapper(r), u || (u = r[e === "top" ? "outerHeight" : "outerWidth"]() / 3), y && (s = {
                    opacity: 1
                }, s[e] = 0, r.css("opacity", 0).css(e, w ? -u * 2 : u * 2).animate(s, c, l)), f && (u = u / Math.pow(2, p - 1)), s = {}, s[e] = 0, b = 0; b < p; b++) o = {}, o[e] = (w ? "-=" : "+=") + u, r.animate(o, c, l).animate(s, c, l), u = f ? u * 2 : u / 2;
            f && (o = {
                opacity: 0
            }, o[e] = (w ? "-=" : "+=") + u, r.animate(o, c, l));
            r.queue(function() {
                f && r.hide();
                n.effects.restore(r, v);
                n.effects.removeWrapper(r);
                i()
            });
            g > 1 && a.splice.apply(a, [1, 0].concat(a.splice(g, d + 1)));
            r.dequeue()
        },
        yt = n.effects.effect.clip = function(t, i) {
            var r = n(this),
                h = ["position", "top", "bottom", "left", "right", "height", "width"],
                v = n.effects.setMode(r, t.mode || "hide"),
                f = v === "show",
                y = t.direction || "vertical",
                c = y === "vertical",
                o = c ? "height" : "width",
                l = c ? "top" : "left",
                s = {},
                a, u, e;
            n.effects.save(r, h);
            r.show();
            a = n.effects.createWrapper(r).css({
                overflow: "hidden"
            });
            u = r[0].tagName === "IMG" ? a : r;
            e = u[o]();
            f && (u.css(o, 0), u.css(l, e / 2));
            s[o] = f ? e : 0;
            s[l] = f ? 0 : e / 2;
            u.animate(s, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    f || r.hide();
                    n.effects.restore(r, h);
                    n.effects.removeWrapper(r);
                    i()
                }
            })
        },
        pt = n.effects.effect.drop = function(t, i) {
            var r = n(this),
                h = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                c = n.effects.setMode(r, t.mode || "hide"),
                e = c === "show",
                u = t.direction || "left",
                o = u === "up" || u === "down" ? "top" : "left",
                s = u === "up" || u === "left" ? "pos" : "neg",
                l = {
                    opacity: e ? 1 : 0
                },
                f;
            n.effects.save(r, h);
            r.show();
            n.effects.createWrapper(r);
            f = t.distance || r[o === "top" ? "outerHeight" : "outerWidth"](!0) / 2;
            e && r.css("opacity", 0).css(o, s === "pos" ? -f : f);
            l[o] = (e ? s === "pos" ? "+=" : "-=" : s === "pos" ? "-=" : "+=") + f;
            r.animate(l, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    c === "hide" && r.hide();
                    n.effects.restore(r, h);
                    n.effects.removeWrapper(r);
                    i()
                }
            })
        },
        wt = n.effects.effect.explode = function(t, i) {
            function k() {
                l.push(this);
                l.length === o * c && d()
            }

            function d() {
                r.css({
                    visibility: "visible"
                });
                n(l).remove();
                u || r.hide();
                i()
            }
            for (var o = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = o, r = n(this), b = n.effects.setMode(r, t.mode || "hide"), u = b === "show", w = r.show().css("visibility", "hidden").offset(), s = Math.ceil(r.outerWidth() / c), h = Math.ceil(r.outerHeight() / o), l = [], e, a, v, y, p, f = 0; f < o; f++)
                for (v = w.top + f * h, p = f - (o - 1) / 2, e = 0; e < c; e++) a = w.left + e * s, y = e - (c - 1) / 2, r.clone().appendTo("body").wrap("<div><\/div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -e * s,
                    top: -f * h
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: s,
                    height: h,
                    left: a + (u ? y * s : 0),
                    top: v + (u ? p * h : 0),
                    opacity: u ? 0 : 1
                }).animate({
                    left: a + (u ? 0 : y * s),
                    top: v + (u ? 0 : p * h),
                    opacity: u ? 1 : 0
                }, t.duration || 500, t.easing, k)
        },
        bt = n.effects.effect.fade = function(t, i) {
            var r = n(this),
                u = n.effects.setMode(r, t.mode || "toggle");
            r.animate({
                opacity: u
            }, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: i
            })
        },
        kt = n.effects.effect.fold = function(t, i) {
            var r = n(this),
                s = ["position", "top", "bottom", "left", "right", "height", "width"],
                h = n.effects.setMode(r, t.mode || "hide"),
                e = h === "show",
                c = h === "hide",
                f = t.size || 15,
                l = /([0-9]+)%/.exec(f),
                a = !!t.horizFirst,
                v = e !== a,
                y = v ? ["width", "height"] : ["height", "width"],
                p = t.duration / 2,
                u, o, w = {},
                b = {};
            n.effects.save(r, s);
            r.show();
            u = n.effects.createWrapper(r).css({
                overflow: "hidden"
            });
            o = v ? [u.width(), u.height()] : [u.height(), u.width()];
            l && (f = parseInt(l[1], 10) / 100 * o[c ? 0 : 1]);
            e && u.css(a ? {
                height: 0,
                width: f
            } : {
                height: f,
                width: 0
            });
            w[y[0]] = e ? o[0] : f;
            b[y[1]] = e ? o[1] : 0;
            u.animate(w, p, t.easing).animate(b, p, t.easing, function() {
                c && r.hide();
                n.effects.restore(r, s);
                n.effects.removeWrapper(r);
                i()
            })
        },
        dt = n.effects.effect.highlight = function(t, i) {
            var r = n(this),
                u = ["backgroundImage", "backgroundColor", "opacity"],
                f = n.effects.setMode(r, t.mode || "show"),
                e = {
                    backgroundColor: r.css("backgroundColor")
                };
            f === "hide" && (e.opacity = 0);
            n.effects.save(r, u);
            r.show().css({
                backgroundImage: "none",
                backgroundColor: t.color || "#ffff99"
            }).animate(e, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    f === "hide" && r.hide();
                    n.effects.restore(r, u);
                    i()
                }
            })
        },
        gt = n.effects.effect.size = function(t, i) {
            var f, l, u, r = n(this),
                w = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                a = ["width", "height", "overflow"],
                v = ["fontSize"],
                e = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                o = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                h = n.effects.setMode(r, t.mode || "effect"),
                y = t.restore || h !== "effect",
                c = t.scale || "both",
                b = t.origin || ["middle", "center"],
                k = r.css("position"),
                s = y ? w : ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                p = {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
            h === "show" && r.show();
            f = {
                height: r.height(),
                width: r.width(),
                outerHeight: r.outerHeight(),
                outerWidth: r.outerWidth()
            };
            t.mode === "toggle" && h === "show" ? (r.from = t.to || p, r.to = t.from || f) : (r.from = t.from || (h === "show" ? p : f), r.to = t.to || (h === "hide" ? p : f));
            u = {
                from: {
                    y: r.from.height / f.height,
                    x: r.from.width / f.width
                },
                to: {
                    y: r.to.height / f.height,
                    x: r.to.width / f.width
                }
            };
            (c === "box" || c === "both") && (u.from.y !== u.to.y && (s = s.concat(e), r.from = n.effects.setTransition(r, e, u.from.y, r.from), r.to = n.effects.setTransition(r, e, u.to.y, r.to)), u.from.x !== u.to.x && (s = s.concat(o), r.from = n.effects.setTransition(r, o, u.from.x, r.from), r.to = n.effects.setTransition(r, o, u.to.x, r.to)));
            (c === "content" || c === "both") && u.from.y !== u.to.y && (s = s.concat(v).concat(a), r.from = n.effects.setTransition(r, v, u.from.y, r.from), r.to = n.effects.setTransition(r, v, u.to.y, r.to));
            n.effects.save(r, s);
            r.show();
            n.effects.createWrapper(r);
            r.css("overflow", "hidden").css(r.from);
            b && (l = n.effects.getBaseline(b, f), r.from.top = (f.outerHeight - r.outerHeight()) * l.y, r.from.left = (f.outerWidth - r.outerWidth()) * l.x, r.to.top = (f.outerHeight - r.to.outerHeight) * l.y, r.to.left = (f.outerWidth - r.to.outerWidth) * l.x);
            r.css(r.from);
            (c === "content" || c === "both") && (e = e.concat(["marginTop", "marginBottom"]).concat(v), o = o.concat(["marginLeft", "marginRight"]), a = w.concat(e).concat(o), r.find("*[width]").each(function() {
                var i = n(this),
                    r = {
                        height: i.height(),
                        width: i.width(),
                        outerHeight: i.outerHeight(),
                        outerWidth: i.outerWidth()
                    };
                y && n.effects.save(i, a);
                i.from = {
                    height: r.height * u.from.y,
                    width: r.width * u.from.x,
                    outerHeight: r.outerHeight * u.from.y,
                    outerWidth: r.outerWidth * u.from.x
                };
                i.to = {
                    height: r.height * u.to.y,
                    width: r.width * u.to.x,
                    outerHeight: r.height * u.to.y,
                    outerWidth: r.width * u.to.x
                };
                u.from.y !== u.to.y && (i.from = n.effects.setTransition(i, e, u.from.y, i.from), i.to = n.effects.setTransition(i, e, u.to.y, i.to));
                u.from.x !== u.to.x && (i.from = n.effects.setTransition(i, o, u.from.x, i.from), i.to = n.effects.setTransition(i, o, u.to.x, i.to));
                i.css(i.from);
                i.animate(i.to, t.duration, t.easing, function() {
                    y && n.effects.restore(i, a)
                })
            }));
            r.animate(r.to, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    r.to.opacity === 0 && r.css("opacity", r.from.opacity);
                    h === "hide" && r.hide();
                    n.effects.restore(r, s);
                    y || (k === "static" ? r.css({
                        position: "relative",
                        top: r.to.top,
                        left: r.to.left
                    }) : n.each(["top", "left"], function(n, t) {
                        r.css(t, function(t, i) {
                            var f = parseInt(i, 10),
                                u = n ? r.to.left : r.to.top;
                            return i === "auto" ? u + "px" : f + u + "px"
                        })
                    }));
                    n.effects.removeWrapper(r);
                    i()
                }
            })
        },
        ni = n.effects.effect.scale = function(t, i) {
            var u = n(this),
                r = n.extend(!0, {}, t),
                f = n.effects.setMode(u, t.mode || "effect"),
                s = parseInt(t.percent, 10) || (parseInt(t.percent, 10) === 0 ? 0 : f === "hide" ? 0 : 100),
                h = t.direction || "both",
                c = t.origin,
                e = {
                    height: u.height(),
                    width: u.width(),
                    outerHeight: u.outerHeight(),
                    outerWidth: u.outerWidth()
                },
                o = {
                    y: h !== "horizontal" ? s / 100 : 1,
                    x: h !== "vertical" ? s / 100 : 1
                };
            r.effect = "size";
            r.queue = !1;
            r.complete = i;
            f !== "effect" && (r.origin = c || ["middle", "center"], r.restore = !0);
            r.from = t.from || (f === "show" ? {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            } : e);
            r.to = {
                height: e.height * o.y,
                width: e.width * o.x,
                outerHeight: e.outerHeight * o.y,
                outerWidth: e.outerWidth * o.x
            };
            r.fade && (f === "show" && (r.from.opacity = 0, r.to.opacity = 1), f === "hide" && (r.from.opacity = 1, r.to.opacity = 0));
            u.effect(r)
        },
        ti = n.effects.effect.puff = function(t, i) {
            var r = n(this),
                e = n.effects.setMode(r, t.mode || "hide"),
                o = e === "hide",
                s = parseInt(t.percent, 10) || 150,
                f = s / 100,
                u = {
                    height: r.height(),
                    width: r.width(),
                    outerHeight: r.outerHeight(),
                    outerWidth: r.outerWidth()
                };
            n.extend(t, {
                effect: "scale",
                queue: !1,
                fade: !0,
                mode: e,
                complete: i,
                percent: o ? s : 100,
                from: o ? u : {
                    height: u.height * f,
                    width: u.width * f,
                    outerHeight: u.outerHeight * f,
                    outerWidth: u.outerWidth * f
                }
            });
            r.effect(t)
        },
        ii = n.effects.effect.pulsate = function(t, i) {
            var r = n(this),
                e = n.effects.setMode(r, t.mode || "show"),
                h = e === "show",
                a = e === "hide",
                v = h || e === "hide",
                o = (t.times || 5) * 2 + (v ? 1 : 0),
                c = t.duration / o,
                u = 0,
                f = r.queue(),
                l = f.length,
                s;
            for ((h || !r.is(":visible")) && (r.css("opacity", 0).show(), u = 1), s = 1; s < o; s++) r.animate({
                opacity: u
            }, c, t.easing), u = 1 - u;
            r.animate({
                opacity: u
            }, c, t.easing);
            r.queue(function() {
                a && r.hide();
                i()
            });
            l > 1 && f.splice.apply(f, [1, 0].concat(f.splice(l, o + 1)));
            r.dequeue()
        },
        ri = n.effects.effect.shake = function(t, i) {
            var r = n(this),
                v = ["position", "top", "bottom", "left", "right", "height", "width"],
                k = n.effects.setMode(r, t.mode || "effect"),
                f = t.direction || "left",
                o = t.distance || 20,
                y = t.times || 3,
                p = y * 2 + 1,
                u = Math.round(t.duration / p),
                s = f === "up" || f === "down" ? "top" : "left",
                h = f === "up" || f === "left",
                c = {},
                l = {},
                w = {},
                a, e = r.queue(),
                b = e.length;
            for (n.effects.save(r, v), r.show(), n.effects.createWrapper(r), c[s] = (h ? "-=" : "+=") + o, l[s] = (h ? "+=" : "-=") + o * 2, w[s] = (h ? "-=" : "+=") + o * 2, r.animate(c, u, t.easing), a = 1; a < y; a++) r.animate(l, u, t.easing).animate(w, u, t.easing);
            r.animate(l, u, t.easing).animate(c, u / 2, t.easing).queue(function() {
                k === "hide" && r.hide();
                n.effects.restore(r, v);
                n.effects.removeWrapper(r);
                i()
            });
            b > 1 && e.splice.apply(e, [1, 0].concat(e.splice(b, p + 1)));
            r.dequeue()
        },
        ui = n.effects.effect.slide = function(t, i) {
            var r = n(this),
                s = ["position", "top", "bottom", "left", "right", "width", "height"],
                h = n.effects.setMode(r, t.mode || "show"),
                c = h === "show",
                f = t.direction || "left",
                e = f === "up" || f === "down" ? "top" : "left",
                o = f === "up" || f === "left",
                u, l = {};
            n.effects.save(r, s);
            r.show();
            u = t.distance || r[e === "top" ? "outerHeight" : "outerWidth"](!0);
            n.effects.createWrapper(r).css({
                overflow: "hidden"
            });
            c && r.css(e, o ? isNaN(u) ? "-" + u : -u : u);
            l[e] = (c ? o ? "+=" : "-=" : o ? "-=" : "+=") + u;
            r.animate(l, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    h === "hide" && r.hide();
                    n.effects.restore(r, s);
                    n.effects.removeWrapper(r);
                    i()
                }
            })
        },
        fi = n.effects.effect.transfer = function(t, i) {
            var u = n(this),
                r = n(t.to),
                f = r.css("position") === "fixed",
                e = n("body"),
                o = f ? e.scrollTop() : 0,
                s = f ? e.scrollLeft() : 0,
                h = r.offset(),
                l = {
                    top: h.top - o,
                    left: h.left - s,
                    height: r.innerHeight(),
                    width: r.innerWidth()
                },
                c = u.offset(),
                a = n("<div class='ui-effects-transfer'><\/div>").appendTo(document.body).addClass(t.className).css({
                    top: c.top - o,
                    left: c.left - s,
                    height: u.innerHeight(),
                    width: u.innerWidth(),
                    position: f ? "fixed" : "absolute"
                }).animate(l, t.duration, t.easing, function() {
                    a.remove();
                    i()
                })
        },
        ei = n.widget("ui.progressbar", {
            version: "1.11.2",
            options: {
                max: 100,
                value: 0,
                change: null,
                complete: null
            },
            min: 0,
            _create: function() {
                this.oldValue = this.options.value = this._constrainedValue();
                this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                    role: "progressbar",
                    "aria-valuemin": this.min
                });
                this.valueDiv = n("<div class='ui-progressbar-value ui-widget-header ui-corner-left'><\/div>").appendTo(this.element);
                this._refreshValue()
            },
            _destroy: function() {
                this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
                this.valueDiv.remove()
            },
            value: function(n) {
                if (n === undefined) return this.options.value;
                this.options.value = this._constrainedValue(n);
                this._refreshValue()
            },
            _constrainedValue: function(n) {
                return n === undefined && (n = this.options.value), this.indeterminate = n === !1, typeof n != "number" && (n = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, n))
            },
            _setOptions: function(n) {
                var t = n.value;
                delete n.value;
                this._super(n);
                this.options.value = this._constrainedValue(t);
                this._refreshValue()
            },
            _setOption: function(n, t) {
                n === "max" && (t = Math.max(this.min, t));
                n === "disabled" && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t);
                this._super(n, t)
            },
            _percentage: function() {
                return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
            },
            _refreshValue: function() {
                var t = this.options.value,
                    i = this._percentage();
                this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(i.toFixed(0) + "%");
                this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate);
                this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = n("<div class='ui-progressbar-overlay'><\/div>").appendTo(this.valueDiv))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": t
                }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null));
                this.oldValue !== t && (this.oldValue = t, this._trigger("change"));
                t === this.options.max && this._trigger("complete")
            }
        }),
        oi = n.widget("ui.selectable", n.ui.mouse, {
            version: "1.11.2",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function() {
                var t, i = this;
                this.element.addClass("ui-selectable");
                this.dragged = !1;
                this.refresh = function() {
                    t = n(i.options.filter, i.element[0]);
                    t.addClass("ui-selectee");
                    t.each(function() {
                        var t = n(this),
                            i = t.offset();
                        n.data(this, "selectable-item", {
                            element: this,
                            $element: t,
                            left: i.left,
                            top: i.top,
                            right: i.left + t.outerWidth(),
                            bottom: i.top + t.outerHeight(),
                            startselected: !1,
                            selected: t.hasClass("ui-selected"),
                            selecting: t.hasClass("ui-selecting"),
                            unselecting: t.hasClass("ui-unselecting")
                        })
                    })
                };
                this.refresh();
                this.selectees = t.addClass("ui-selectee");
                this._mouseInit();
                this.helper = n("<div class='ui-selectable-helper'><\/div>")
            },
            _destroy: function() {
                this.selectees.removeClass("ui-selectee").removeData("selectable-item");
                this.element.removeClass("ui-selectable ui-selectable-disabled");
                this._mouseDestroy()
            },
            _mouseStart: function(t) {
                var i = this,
                    r = this.options;
                (this.opos = [t.pageX, t.pageY], this.options.disabled) || (this.selectees = n(r.filter, this.element[0]), this._trigger("start", t), n(r.appendTo).append(this.helper), this.helper.css({
                    left: t.pageX,
                    top: t.pageY,
                    width: 0,
                    height: 0
                }), r.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var r = n.data(this, "selectable-item");
                    r.startselected = !0;
                    t.metaKey || t.ctrlKey || (r.$element.removeClass("ui-selected"), r.selected = !1, r.$element.addClass("ui-unselecting"), r.unselecting = !0, i._trigger("unselecting", t, {
                        unselecting: r.element
                    }))
                }), n(t.target).parents().addBack().each(function() {
                    var u, r = n.data(this, "selectable-item");
                    if (r) return u = !t.metaKey && !t.ctrlKey || !r.$element.hasClass("ui-selected"), r.$element.removeClass(u ? "ui-unselecting" : "ui-selected").addClass(u ? "ui-selecting" : "ui-unselecting"), r.unselecting = !u, r.selecting = u, r.selected = u, u ? i._trigger("selecting", t, {
                        selecting: r.element
                    }) : i._trigger("unselecting", t, {
                        unselecting: r.element
                    }), !1
                }))
            },
            _mouseDrag: function(t) {
                if (this.dragged = !0, !this.options.disabled) {
                    var e, o = this,
                        s = this.options,
                        i = this.opos[0],
                        r = this.opos[1],
                        u = t.pageX,
                        f = t.pageY;
                    return i > u && (e = u, u = i, i = e), r > f && (e = f, f = r, r = e), this.helper.css({
                        left: i,
                        top: r,
                        width: u - i,
                        height: f - r
                    }), this.selectees.each(function() {
                        var e = n.data(this, "selectable-item"),
                            h = !1;
                        e && e.element !== o.element[0] && (s.tolerance === "touch" ? h = !(e.left > u || e.right < i || e.top > f || e.bottom < r) : s.tolerance === "fit" && (h = e.left > i && e.right < u && e.top > r && e.bottom < f), h ? (e.selected && (e.$element.removeClass("ui-selected"), e.selected = !1), e.unselecting && (e.$element.removeClass("ui-unselecting"), e.unselecting = !1), e.selecting || (e.$element.addClass("ui-selecting"), e.selecting = !0, o._trigger("selecting", t, {
                            selecting: e.element
                        }))) : (e.selecting && ((t.metaKey || t.ctrlKey) && e.startselected ? (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.$element.addClass("ui-selected"), e.selected = !0) : (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.startselected && (e.$element.addClass("ui-unselecting"), e.unselecting = !0), o._trigger("unselecting", t, {
                            unselecting: e.element
                        }))), e.selected && (t.metaKey || t.ctrlKey || e.startselected || (e.$element.removeClass("ui-selected"), e.selected = !1, e.$element.addClass("ui-unselecting"), e.unselecting = !0, o._trigger("unselecting", t, {
                            unselecting: e.element
                        })))))
                    }), !1
                }
            },
            _mouseStop: function(t) {
                var i = this;
                return this.dragged = !1, n(".ui-unselecting", this.element[0]).each(function() {
                    var r = n.data(this, "selectable-item");
                    r.$element.removeClass("ui-unselecting");
                    r.unselecting = !1;
                    r.startselected = !1;
                    i._trigger("unselected", t, {
                        unselected: r.element
                    })
                }), n(".ui-selecting", this.element[0]).each(function() {
                    var r = n.data(this, "selectable-item");
                    r.$element.removeClass("ui-selecting").addClass("ui-selected");
                    r.selecting = !1;
                    r.selected = !0;
                    r.startselected = !0;
                    i._trigger("selected", t, {
                        selected: r.element
                    })
                }), this._trigger("stop", t), this.helper.remove(), !1
            }
        }),
        si = n.widget("ui.selectmenu", {
            version: "1.11.2",
            defaultElement: "<select>",
            options: {
                appendTo: null,
                disabled: null,
                icons: {
                    button: "ui-icon-triangle-1-s"
                },
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                width: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                select: null
            },
            _create: function() {
                var n = this.element.uniqueId().attr("id");
                this.ids = {
                    element: n,
                    button: n + "-button",
                    menu: n + "-menu"
                };
                this._drawButton();
                this._drawMenu();
                this.options.disabled && this.disable()
            },
            _drawButton: function() {
                var t = this,
                    i = this.element.attr("tabindex");
                this.label = n("label[for='" + this.ids.element + "']").attr("for", this.ids.button);
                this._on(this.label, {
                    click: function(n) {
                        this.button.focus();
                        n.preventDefault()
                    }
                });
                this.element.hide();
                this.button = n("<span>", {
                    "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                    tabindex: i || this.options.disabled ? -1 : 0,
                    id: this.ids.button,
                    role: "combobox",
                    "aria-expanded": "false",
                    "aria-autocomplete": "list",
                    "aria-owns": this.ids.menu,
                    "aria-haspopup": "true"
                }).insertAfter(this.element);
                n("<span>", {
                    "class": "ui-icon " + this.options.icons.button
                }).prependTo(this.button);
                this.buttonText = n("<span>", {
                    "class": "ui-selectmenu-text"
                }).appendTo(this.button);
                this._setText(this.buttonText, this.element.find("option:selected").text());
                this._resizeButton();
                this._on(this.button, this._buttonEvents);
                this.button.one("focusin", function() {
                    t.menuItems || t._refreshMenu()
                });
                this._hoverable(this.button);
                this._focusable(this.button)
            },
            _drawMenu: function() {
                var t = this;
                this.menu = n("<ul>", {
                    "aria-hidden": "true",
                    "aria-labelledby": this.ids.button,
                    id: this.ids.menu
                });
                this.menuWrap = n("<div>", {
                    "class": "ui-selectmenu-menu ui-front"
                }).append(this.menu).appendTo(this._appendTo());
                this.menuInstance = this.menu.menu({
                    role: "listbox",
                    select: function(n, i) {
                        n.preventDefault();
                        t._setSelection();
                        t._select(i.item.data("ui-selectmenu-item"), n)
                    },
                    focus: function(n, i) {
                        var r = i.item.data("ui-selectmenu-item");
                        t.focusIndex != null && r.index !== t.focusIndex && (t._trigger("focus", n, {
                            item: r
                        }), t.isOpen || t._select(r, n));
                        t.focusIndex = r.index;
                        t.button.attr("aria-activedescendant", t.menuItems.eq(r.index).attr("id"))
                    }
                }).menu("instance");
                this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all");
                this.menuInstance._off(this.menu, "mouseleave");
                this.menuInstance._closeOnDocumentClick = function() {
                    return !1
                };
                this.menuInstance._isDivider = function() {
                    return !1
                }
            },
            refresh: function() {
                this._refreshMenu();
                this._setText(this.buttonText, this._getSelectedItem().text());
                this.options.width || this._resizeButton()
            },
            _refreshMenu: function() {
                this.menu.empty();
                var n, t = this.element.find("option");
                t.length && (this._parseOptions(t), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), n = this._getSelectedItem(), this.menuInstance.focus(null, n), this._setAria(n.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
            },
            open: function(n) {
                this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", n))
            },
            _position: function() {
                this.menuWrap.position(n.extend({
                    of: this.button
                }, this.options.position))
            },
            close: function(n) {
                this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", n))
            },
            widget: function() {
                return this.button
            },
            menuWidget: function() {
                return this.menu
            },
            _renderMenu: function(t, i) {
                var u = this,
                    r = "";
                n.each(i, function(i, f) {
                    f.optgroup !== r && (n("<li>", {
                        "class": "ui-selectmenu-optgroup ui-menu-divider" + (f.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
                        text: f.optgroup
                    }).appendTo(t), r = f.optgroup);
                    u._renderItemData(t, f)
                })
            },
            _renderItemData: function(n, t) {
                return this._renderItem(n, t).data("ui-selectmenu-item", t)
            },
            _renderItem: function(t, i) {
                var r = n("<li>");
                return i.disabled && r.addClass("ui-state-disabled"), this._setText(r, i.label), r.appendTo(t)
            },
            _setText: function(n, t) {
                t ? n.text(t) : n.html("&#160;")
            },
            _move: function(n, t) {
                var i, r, u = ".ui-menu-item";
                this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), u += ":not(.ui-state-disabled)");
                r = n === "first" || n === "last" ? i[n === "first" ? "prevAll" : "nextAll"](u).eq(-1) : i[n + "All"](u).eq(0);
                r.length && this.menuInstance.focus(t, r)
            },
            _getSelectedItem: function() {
                return this.menuItems.eq(this.element[0].selectedIndex)
            },
            _toggle: function(n) {
                this[this.isOpen ? "close" : "open"](n)
            },
            _setSelection: function() {
                var n;
                this.range && (window.getSelection ? (n = window.getSelection(), n.removeAllRanges(), n.addRange(this.range)) : this.range.select(), this.button.focus())
            },
            _documentClick: {
                mousedown: function(t) {
                    this.isOpen && (n(t.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(t))
                }
            },
            _buttonEvents: {
                mousedown: function() {
                    var n;
                    window.getSelection ? (n = window.getSelection(), n.rangeCount && (this.range = n.getRangeAt(0))) : this.range = document.selection.createRange()
                },
                click: function(n) {
                    this._setSelection();
                    this._toggle(n)
                },
                keydown: function(t) {
                    var i = !0;
                    switch (t.keyCode) {
                        case n.ui.keyCode.TAB:
                        case n.ui.keyCode.ESCAPE:
                            this.close(t);
                            i = !1;
                            break;
                        case n.ui.keyCode.ENTER:
                            this.isOpen && this._selectFocusedItem(t);
                            break;
                        case n.ui.keyCode.UP:
                            t.altKey ? this._toggle(t) : this._move("prev", t);
                            break;
                        case n.ui.keyCode.DOWN:
                            t.altKey ? this._toggle(t) : this._move("next", t);
                            break;
                        case n.ui.keyCode.SPACE:
                            this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                            break;
                        case n.ui.keyCode.LEFT:
                            this._move("prev", t);
                            break;
                        case n.ui.keyCode.RIGHT:
                            this._move("next", t);
                            break;
                        case n.ui.keyCode.HOME:
                        case n.ui.keyCode.PAGE_UP:
                            this._move("first", t);
                            break;
                        case n.ui.keyCode.END:
                        case n.ui.keyCode.PAGE_DOWN:
                            this._move("last", t);
                            break;
                        default:
                            this.menu.trigger(t);
                            i = !1
                    }
                    i && t.preventDefault()
                }
            },
            _selectFocusedItem: function(n) {
                var t = this.menuItems.eq(this.focusIndex);
                t.hasClass("ui-state-disabled") || this._select(t.data("ui-selectmenu-item"), n)
            },
            _select: function(n, t) {
                var i = this.element[0].selectedIndex;
                this.element[0].selectedIndex = n.index;
                this._setText(this.buttonText, n.label);
                this._setAria(n);
                this._trigger("select", t, {
                    item: n
                });
                n.index !== i && this._trigger("change", t, {
                    item: n
                });
                this.close(t)
            },
            _setAria: function(n) {
                var t = this.menuItems.eq(n.index).attr("id");
                this.button.attr({
                    "aria-labelledby": t,
                    "aria-activedescendant": t
                });
                this.menu.attr("aria-activedescendant", t)
            },
            _setOption: function(n, t) {
                n === "icons" && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button);
                this._super(n, t);
                n === "appendTo" && this.menuWrap.appendTo(this._appendTo());
                n === "disabled" && (this.menuInstance.option("disabled", t), this.button.toggleClass("ui-state-disabled", t).attr("aria-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0));
                n === "width" && this._resizeButton()
            },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
            },
            _toggleAttr: function() {
                this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen);
                this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen);
                this.menu.attr("aria-hidden", !this.isOpen)
            },
            _resizeButton: function() {
                var n = this.options.width;
                n || (n = this.element.show().outerWidth(), this.element.hide());
                this.button.outerWidth(n)
            },
            _resizeMenu: function() {
                this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
            },
            _getCreateOptions: function() {
                return {
                    disabled: this.element.prop("disabled")
                }
            },
            _parseOptions: function(t) {
                var i = [];
                t.each(function(t, r) {
                    var u = n(r),
                        f = u.parent("optgroup");
                    i.push({
                        element: u,
                        index: t,
                        value: u.attr("value"),
                        label: u.text(),
                        optgroup: f.attr("label") || "",
                        disabled: f.prop("disabled") || u.prop("disabled")
                    })
                });
                this.items = i
            },
            _destroy: function() {
                this.menuWrap.remove();
                this.button.remove();
                this.element.show();
                this.element.removeUniqueId();
                this.label.attr("for", this.ids.element)
            }
        }),
        hi = n.widget("ui.slider", n.ui.mouse, {
            version: "1.11.2",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            numPages: 5,
            _create: function() {
                this._keySliding = !1;
                this._mouseSliding = !1;
                this._animateOff = !0;
                this._handleIndex = null;
                this._detectOrientation();
                this._mouseInit();
                this._calculateNewMax();
                this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
                this._refresh();
                this._setOption("disabled", this.options.disabled);
                this._animateOff = !1
            },
            _refresh: function() {
                this._createRange();
                this._createHandles();
                this._setupEvents();
                this._refreshValue()
            },
            _createHandles: function() {
                var r, i, u = this.options,
                    t = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    f = [];
                for (i = u.values && u.values.length || 1, t.length > i && (t.slice(i).remove(), t = t.slice(0, i)), r = t.length; r < i; r++) f.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'><\/span>");
                this.handles = t.add(n(f.join("")).appendTo(this.element));
                this.handle = this.handles.eq(0);
                this.handles.each(function(t) {
                    n(this).data("ui-slider-handle-index", t)
                })
            },
            _createRange: function() {
                var t = this.options,
                    i = "";
                t.range ? (t.range === !0 && (t.values ? t.values.length && t.values.length !== 2 ? t.values = [t.values[0], t.values[0]] : n.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                    left: "",
                    bottom: ""
                }) : (this.range = n("<div><\/div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + (t.range === "min" || t.range === "max" ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function() {
                this._off(this.handles);
                this._on(this.handles, this._handleEvents);
                this._hoverable(this.handles);
                this._focusable(this.handles)
            },
            _destroy: function() {
                this.handles.remove();
                this.range && this.range.remove();
                this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
                this._mouseDestroy()
            },
            _mouseCapture: function(t) {
                var s, f, r, i, u, h, e, c, o = this,
                    l = this.options;
                return l.disabled ? !1 : (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), s = {
                    x: t.pageX,
                    y: t.pageY
                }, f = this._normValueFromMouse(s), r = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                    var e = Math.abs(f - o.values(t));
                    (r > e || r === e && (t === o._lastChangedValue || o.values(t) === l.min)) && (r = e, i = n(this), u = t)
                }), h = this._start(t, u), h === !1) ? !1 : (this._mouseSliding = !0, this._handleIndex = u, i.addClass("ui-state-active").focus(), e = i.offset(), c = !n(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = c ? {
                    left: 0,
                    top: 0
                } : {
                    left: t.pageX - e.left - i.width() / 2,
                    top: t.pageY - e.top - i.height() / 2 - (parseInt(i.css("borderTopWidth"), 10) || 0) - (parseInt(i.css("borderBottomWidth"), 10) || 0) + (parseInt(i.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(t, u, f), this._animateOff = !0, !0)
            },
            _mouseStart: function() {
                return !0
            },
            _mouseDrag: function(n) {
                var t = {
                        x: n.pageX,
                        y: n.pageY
                    },
                    i = this._normValueFromMouse(t);
                return this._slide(n, this._handleIndex, i), !1
            },
            _mouseStop: function(n) {
                return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(n, this._handleIndex), this._change(n, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function() {
                this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(n) {
                var i, r, t, u, f;
                return this.orientation === "horizontal" ? (i = this.elementSize.width, r = n.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (i = this.elementSize.height, r = n.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), t = r / i, t > 1 && (t = 1), t < 0 && (t = 0), this.orientation === "vertical" && (t = 1 - t), u = this._valueMax() - this._valueMin(), f = this._valueMin() + t * u, this._trimAlignValue(f)
            },
            _start: function(n, t) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", n, i)
            },
            _slide: function(n, t, i) {
                var r, f, u;
                this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && i > r || t === 1 && i < r) && (i = r), i !== this.values(t) && (f = this.values(), f[t] = i, u = this._trigger("slide", n, {
                    handle: this.handles[t],
                    value: i,
                    values: f
                }), r = this.values(t ? 0 : 1), u !== !1 && this.values(t, i))) : i !== this.value() && (u = this._trigger("slide", n, {
                    handle: this.handles[t],
                    value: i
                }), u !== !1 && this.value(i))
            },
            _stop: function(n, t) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values());
                this._trigger("stop", n, i)
            },
            _change: function(n, t) {
                if (!this._keySliding && !this._mouseSliding) {
                    var i = {
                        handle: this.handles[t],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values());
                    this._lastChangedValue = t;
                    this._trigger("change", n, i)
                }
            },
            value: function(n) {
                if (arguments.length) {
                    this.options.value = this._trimAlignValue(n);
                    this._refreshValue();
                    this._change(null, 0);
                    return
                }
                return this._value()
            },
            values: function(t, i) {
                var u, f, r;
                if (arguments.length > 1) {
                    this.options.values[t] = this._trimAlignValue(i);
                    this._refreshValue();
                    this._change(null, t);
                    return
                }
                if (arguments.length)
                    if (n.isArray(arguments[0])) {
                        for (u = this.options.values, f = arguments[0], r = 0; r < u.length; r += 1) u[r] = this._trimAlignValue(f[r]), this._change(null, r);
                        this._refreshValue()
                    } else return this.options.values && this.options.values.length ? this._values(t) : this.value();
                else return this._values()
            },
            _setOption: function(t, i) {
                var r, u = 0;
                t === "range" && this.options.range === !0 && (i === "min" ? (this.options.value = this._values(0), this.options.values = null) : i === "max" && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null));
                n.isArray(this.options.values) && (u = this.options.values.length);
                t === "disabled" && this.element.toggleClass("ui-state-disabled", !!i);
                this._super(t, i);
                switch (t) {
                    case "orientation":
                        this._detectOrientation();
                        this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                        this._refreshValue();
                        this.handles.css(i === "horizontal" ? "bottom" : "left", "");
                        break;
                    case "value":
                        this._animateOff = !0;
                        this._refreshValue();
                        this._change(null, 0);
                        this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), r = 0; r < u; r += 1) this._change(null, r);
                        this._animateOff = !1;
                        break;
                    case "step":
                    case "min":
                    case "max":
                        this._animateOff = !0;
                        this._calculateNewMax();
                        this._refreshValue();
                        this._animateOff = !1;
                        break;
                    case "range":
                        this._animateOff = !0;
                        this._refresh();
                        this._animateOff = !1
                }
            },
            _value: function() {
                var n = this.options.value;
                return this._trimAlignValue(n)
            },
            _values: function(n) {
                var r, t, i;
                if (arguments.length) return r = this.options.values[n], this._trimAlignValue(r);
                if (this.options.values && this.options.values.length) {
                    for (t = this.options.values.slice(), i = 0; i < t.length; i += 1) t[i] = this._trimAlignValue(t[i]);
                    return t
                }
                return []
            },
            _trimAlignValue: function(n) {
                if (n <= this._valueMin()) return this._valueMin();
                if (n >= this._valueMax()) return this._valueMax();
                var t = this.options.step > 0 ? this.options.step : 1,
                    i = (n - this._valueMin()) % t,
                    r = n - i;
                return Math.abs(i) * 2 >= t && (r += i > 0 ? t : -t), parseFloat(r.toFixed(5))
            },
            _calculateNewMax: function() {
                var n = (this.options.max - this._valueMin()) % this.options.step;
                this.max = this.options.max - n
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.max
            },
            _refreshValue: function() {
                var s, t, c, f, h, e = this.options.range,
                    i = this.options,
                    r = this,
                    u = this._animateOff ? !1 : i.animate,
                    o = {};
                this.options.values && this.options.values.length ? this.handles.each(function(f) {
                    t = (r.values(f) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100;
                    o[r.orientation === "horizontal" ? "left" : "bottom"] = t + "%";
                    n(this).stop(1, 1)[u ? "animate" : "css"](o, i.animate);
                    r.options.range === !0 && (r.orientation === "horizontal" ? (f === 0 && r.range.stop(1, 1)[u ? "animate" : "css"]({
                        left: t + "%"
                    }, i.animate), f === 1 && r.range[u ? "animate" : "css"]({
                        width: t - s + "%"
                    }, {
                        queue: !1,
                        duration: i.animate
                    })) : (f === 0 && r.range.stop(1, 1)[u ? "animate" : "css"]({
                        bottom: t + "%"
                    }, i.animate), f === 1 && r.range[u ? "animate" : "css"]({
                        height: t - s + "%"
                    }, {
                        queue: !1,
                        duration: i.animate
                    })));
                    s = t
                }) : (c = this.value(), f = this._valueMin(), h = this._valueMax(), t = h !== f ? (c - f) / (h - f) * 100 : 0, o[this.orientation === "horizontal" ? "left" : "bottom"] = t + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](o, i.animate), e === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                    width: t + "%"
                }, i.animate), e === "max" && this.orientation === "horizontal" && this.range[u ? "animate" : "css"]({
                    width: 100 - t + "%"
                }, {
                    queue: !1,
                    duration: i.animate
                }), e === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                    height: t + "%"
                }, i.animate), e === "max" && this.orientation === "vertical" && this.range[u ? "animate" : "css"]({
                    height: 100 - t + "%"
                }, {
                    queue: !1,
                    duration: i.animate
                }))
            },
            _handleEvents: {
                keydown: function(t) {
                    var e, r, i, u, f = n(t.target).data("ui-slider-handle-index");
                    switch (t.keyCode) {
                        case n.ui.keyCode.HOME:
                        case n.ui.keyCode.END:
                        case n.ui.keyCode.PAGE_UP:
                        case n.ui.keyCode.PAGE_DOWN:
                        case n.ui.keyCode.UP:
                        case n.ui.keyCode.RIGHT:
                        case n.ui.keyCode.DOWN:
                        case n.ui.keyCode.LEFT:
                            if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, n(t.target).addClass("ui-state-active"), e = this._start(t, f), e === !1)) return
                    }
                    u = this.options.step;
                    r = this.options.values && this.options.values.length ? i = this.values(f) : i = this.value();
                    switch (t.keyCode) {
                        case n.ui.keyCode.HOME:
                            i = this._valueMin();
                            break;
                        case n.ui.keyCode.END:
                            i = this._valueMax();
                            break;
                        case n.ui.keyCode.PAGE_UP:
                            i = this._trimAlignValue(r + (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case n.ui.keyCode.PAGE_DOWN:
                            i = this._trimAlignValue(r - (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case n.ui.keyCode.UP:
                        case n.ui.keyCode.RIGHT:
                            if (r === this._valueMax()) return;
                            i = this._trimAlignValue(r + u);
                            break;
                        case n.ui.keyCode.DOWN:
                        case n.ui.keyCode.LEFT:
                            if (r === this._valueMin()) return;
                            i = this._trimAlignValue(r - u)
                    }
                    this._slide(t, f, i)
                },
                keyup: function(t) {
                    var i = n(t.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), n(t.target).removeClass("ui-state-active"))
                }
            }
        }),
        ci = n.widget("ui.sortable", n.ui.mouse, {
            version: "1.11.2",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _isOverAxis: function(n, t, i) {
                return n >= t && n < t + i
            },
            _isFloating: function(n) {
                return /left|right/.test(n.css("float")) || /inline|table-cell/.test(n.css("display"))
            },
            _create: function() {
                var n = this.options;
                this.containerCache = {};
                this.element.addClass("ui-sortable");
                this.refresh();
                this.floating = this.items.length ? n.axis === "x" || this._isFloating(this.items[0].item) : !1;
                this.offset = this.element.offset();
                this._mouseInit();
                this._setHandleClassName();
                this.ready = !0
            },
            _setOption: function(n, t) {
                this._super(n, t);
                n === "handle" && this._setHandleClassName()
            },
            _setHandleClassName: function() {
                this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle");
                n.each(this.items, function() {
                    (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
                })
            },
            _destroy: function() {
                this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle");
                this._mouseDestroy();
                for (var n = this.items.length - 1; n >= 0; n--) this.items[n].item.removeData(this.widgetName + "-item");
                return this
            },
            _mouseCapture: function(t, i) {
                var r = null,
                    f = !1,
                    u = this;
                return this.reverting ? !1 : this.options.disabled || this.options.type === "static" ? !1 : (this._refreshItems(t), n(t.target).parents().each(function() {
                    if (n.data(this, u.widgetName + "-item") === u) return r = n(this), !1
                }), n.data(t.target, u.widgetName + "-item") === u && (r = n(t.target)), !r) ? !1 : this.options.handle && !i && (n(this.options.handle, r).find("*").addBack().each(function() {
                    this === t.target && (f = !0)
                }), !f) ? !1 : (this.currentItem = r, this._removeCurrentsFromItems(), !0)
            },
            _mouseStart: function(t, i, r) {
                var f, e, u = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, n.extend(this.offset, {
                        click: {
                            left: t.pageX - this.offset.left,
                            top: t.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, u.cursorAt && this._adjustOffsetFromHelper(u.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), u.containment && this._setContainment(), u.cursor && u.cursor !== "auto" && (e = this.document.find("body"), this.storedCursor = e.css("cursor"), e.css("cursor", u.cursor), this.storedStylesheet = n("<style>*{ cursor: " + u.cursor + " !important; }<\/style>").appendTo(e)), u.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", u.opacity)), u.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", u.zIndex)), this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !r)
                    for (f = this.containers.length - 1; f >= 0; f--) this.containers[f]._trigger("activate", t, this._uiHash(this));
                return n.ui.ddmanager && (n.ui.ddmanager.current = this), n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
            },
            _mouseDrag: function(t) {
                var e, u, f, o, i = this.options,
                    r = !1;
                for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && this.scrollParent[0].tagName !== "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - n(document).scrollTop() < i.scrollSensitivity ? r = n(document).scrollTop(n(document).scrollTop() - i.scrollSpeed) : n(window).height() - (t.pageY - n(document).scrollTop()) < i.scrollSensitivity && (r = n(document).scrollTop(n(document).scrollTop() + i.scrollSpeed)), t.pageX - n(document).scrollLeft() < i.scrollSensitivity ? r = n(document).scrollLeft(n(document).scrollLeft() - i.scrollSpeed) : n(window).width() - (t.pageX - n(document).scrollLeft()) < i.scrollSensitivity && (r = n(document).scrollLeft(n(document).scrollLeft() + i.scrollSpeed))), r !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && this.options.axis === "y" || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && this.options.axis === "x" || (this.helper[0].style.top = this.position.top + "px"), e = this.items.length - 1; e >= 0; e--)
                    if ((u = this.items[e], f = u.item[0], o = this._intersectsWithPointer(u), o) && u.instance === this.currentContainer && f !== this.currentItem[0] && this.placeholder[o === 1 ? "next" : "prev"]()[0] !== f && !n.contains(this.placeholder[0], f) && (this.options.type === "semi-dynamic" ? !n.contains(this.element[0], f) : !0)) {
                        if (this.direction = o === 1 ? "down" : "up", this.options.tolerance === "pointer" || this._intersectsWithSides(u)) this._rearrange(t, u);
                        else break;
                        this._trigger("change", t, this._uiHash());
                        break
                    }
                return this._contactContainers(t), n.ui.ddmanager && n.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function(t, i) {
                if (t) {
                    if (n.ui.ddmanager && !this.options.dropBehaviour && n.ui.ddmanager.drop(this, t), this.options.revert) {
                        var e = this,
                            f = this.placeholder.offset(),
                            r = this.options.axis,
                            u = {};
                        r && r !== "x" || (u.left = f.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft));
                        r && r !== "y" || (u.top = f.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop));
                        this.reverting = !0;
                        n(this.helper).animate(u, parseInt(this.options.revert, 10) || 500, function() {
                            e._clear(t)
                        })
                    } else this._clear(t, i);
                    return !1
                }
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp({
                        target: null
                    });
                    this.options.helper === "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                    for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper !== "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), n.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? n(this.domPosition.prev).after(this.currentItem) : n(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function(t) {
                var r = this._getItemsAsjQuery(t && t.connected),
                    i = [];
                return t = t || {}, n(r).each(function() {
                    var r = (n(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                    r && i.push((t.key || r[1] + "[]") + "=" + (t.key && t.expression ? r[1] : r[2]))
                }), !i.length && t.key && i.push(t.key + "="), i.join("&")
            },
            toArray: function(t) {
                var r = this._getItemsAsjQuery(t && t.connected),
                    i = [];
                return t = t || {}, r.each(function() {
                    i.push(n(t.item || this).attr(t.attribute || "id") || "")
                }), i
            },
            _intersectsWith: function(n) {
                var t = this.positionAbs.left,
                    h = t + this.helperProportions.width,
                    i = this.positionAbs.top,
                    c = i + this.helperProportions.height,
                    r = n.left,
                    f = r + n.width,
                    u = n.top,
                    e = u + n.height,
                    o = this.offset.click.top,
                    s = this.offset.click.left,
                    l = this.options.axis === "x" || i + o > u && i + o < e,
                    a = this.options.axis === "y" || t + s > r && t + s < f,
                    v = l && a;
                return this.options.tolerance === "pointer" || this.options.forcePointerForContainers || this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > n[this.floating ? "width" : "height"] ? v : r < t + this.helperProportions.width / 2 && h - this.helperProportions.width / 2 < f && u < i + this.helperProportions.height / 2 && c - this.helperProportions.height / 2 < e
            },
            _intersectsWithPointer: function(n) {
                var r = this.options.axis === "x" || this._isOverAxis(this.positionAbs.top + this.offset.click.top, n.top, n.height),
                    u = this.options.axis === "y" || this._isOverAxis(this.positionAbs.left + this.offset.click.left, n.left, n.width),
                    f = r && u,
                    t = this._getDragVerticalDirection(),
                    i = this._getDragHorizontalDirection();
                return f ? this.floating ? i && i === "right" || t === "down" ? 2 : 1 : t && (t === "down" ? 2 : 1) : !1
            },
            _intersectsWithSides: function(n) {
                var r = this._isOverAxis(this.positionAbs.top + this.offset.click.top, n.top + n.height / 2, n.height),
                    u = this._isOverAxis(this.positionAbs.left + this.offset.click.left, n.left + n.width / 2, n.width),
                    t = this._getDragVerticalDirection(),
                    i = this._getDragHorizontalDirection();
                return this.floating && i ? i === "right" && u || i === "left" && !u : t && (t === "down" && r || t === "up" && !r)
            },
            _getDragVerticalDirection: function() {
                var n = this.positionAbs.top - this.lastPositionAbs.top;
                return n !== 0 && (n > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function() {
                var n = this.positionAbs.left - this.lastPositionAbs.left;
                return n !== 0 && (n > 0 ? "right" : "left")
            },
            refresh: function(n) {
                return this._refreshItems(n), this._setHandleClassName(), this.refreshPositions(), this
            },
            _connectWith: function() {
                var n = this.options;
                return n.connectWith.constructor === String ? [n.connectWith] : n.connectWith
            },
            _getItemsAsjQuery: function(t) {
                function h() {
                    s.push(this)
                }
                var r, u, e, i, s = [],
                    f = [],
                    o = this._connectWith();
                if (o && t)
                    for (r = o.length - 1; r >= 0; r--)
                        for (e = n(o[r]), u = e.length - 1; u >= 0; u--) i = n.data(e[u], this.widgetFullName), i && i !== this && !i.options.disabled && f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element) : n(i.options.items, i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), i]);
                for (f.push([n.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : n(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), r = f.length - 1; r >= 0; r--) f[r][0].each(h);
                return n(s)
            },
            _removeCurrentsFromItems: function() {
                var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = n.grep(this.items, function(n) {
                    for (var i = 0; i < t.length; i++)
                        if (t[i] === n.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function(t) {
                this.items = [];
                this.containers = [this];
                var r, u, e, i, o, s, h, l, a = this.items,
                    f = [
                        [n.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                            item: this.currentItem
                        }) : n(this.options.items, this.element), this]
                    ],
                    c = this._connectWith();
                if (c && this.ready)
                    for (r = c.length - 1; r >= 0; r--)
                        for (e = n(c[r]), u = e.length - 1; u >= 0; u--) i = n.data(e[u], this.widgetFullName), i && i !== this && !i.options.disabled && (f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element[0], t, {
                            item: this.currentItem
                        }) : n(i.options.items, i.element), i]), this.containers.push(i));
                for (r = f.length - 1; r >= 0; r--)
                    for (o = f[r][1], s = f[r][0], u = 0, l = s.length; u < l; u++) h = n(s[u]), h.data(this.widgetName + "-item", o), a.push({
                        item: h,
                        instance: o,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function(t) {
                this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                for (var r, f, u, i = this.items.length - 1; i >= 0; i--)(r = this.items[i], r.instance !== this.currentContainer && this.currentContainer && r.item[0] !== this.currentItem[0]) || (f = this.options.toleranceElement ? n(this.options.toleranceElement, r.item) : r.item, t || (r.width = f.outerWidth(), r.height = f.outerHeight()), u = f.offset(), r.left = u.left, r.top = u.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (i = this.containers.length - 1; i >= 0; i--) u = this.containers[i].element.offset(), this.containers[i].containerCache.left = u.left, this.containers[i].containerCache.top = u.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                return this
            },
            _createPlaceholder: function(t) {
                t = t || this;
                var r, i = t.options;
                i.placeholder && i.placeholder.constructor !== String || (r = i.placeholder, i.placeholder = {
                    element: function() {
                        var u = t.currentItem[0].nodeName.toLowerCase(),
                            i = n("<" + u + ">", t.document[0]).addClass(r || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        return u === "tr" ? t.currentItem.children().each(function() {
                            n("<td>&#160;<\/td>", t.document[0]).attr("colspan", n(this).attr("colspan") || 1).appendTo(i)
                        }) : u === "img" && i.attr("src", t.currentItem.attr("src")), r || i.css("visibility", "hidden"), i
                    },
                    update: function(n, u) {
                        (!r || i.forcePlaceholderSize) && (u.height() || u.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), u.width() || u.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                    }
                });
                t.placeholder = n(i.placeholder.element.call(t.element, t.currentItem));
                t.currentItem.after(t.placeholder);
                i.placeholder.update(t, t.placeholder)
            },
            _contactContainers: function(t) {
                for (var u, c, f, a, v, o, l, s, h, e = null, i = null, r = this.containers.length - 1; r >= 0; r--)
                    if (!n.contains(this.currentItem[0], this.containers[r].element[0]))
                        if (this._intersectsWith(this.containers[r].containerCache)) {
                            if (e && n.contains(this.containers[r].element[0], e.element[0])) continue;
                            e = this.containers[r];
                            i = r
                        } else this.containers[r].containerCache.over && (this.containers[r]._trigger("out", t, this._uiHash(this)), this.containers[r].containerCache.over = 0);
                if (e)
                    if (this.containers.length === 1) this.containers[i].containerCache.over || (this.containers[i]._trigger("over", t, this._uiHash(this)), this.containers[i].containerCache.over = 1);
                    else {
                        for (c = 1e4, f = null, s = e.floating || this._isFloating(this.currentItem), a = s ? "left" : "top", v = s ? "width" : "height", h = s ? "clientX" : "clientY", u = this.items.length - 1; u >= 0; u--) n.contains(this.containers[i].element[0], this.items[u].item[0]) && this.items[u].item[0] !== this.currentItem[0] && (o = this.items[u].item.offset()[a], l = !1, t[h] - o > this.items[u][v] / 2 && (l = !0), Math.abs(t[h] - o) < c && (c = Math.abs(t[h] - o), f = this.items[u], this.direction = l ? "up" : "down"));
                        if (!f && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[i]) {
                            this.currentContainer.containerCache.over || (this.containers[i]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1);
                            return
                        }
                        f ? this._rearrange(t, f, null, !0) : this._rearrange(t, null, this.containers[i].element, !0);
                        this._trigger("change", t, this._uiHash());
                        this.containers[i]._trigger("change", t, this._uiHash(this));
                        this.currentContainer = this.containers[i];
                        this.options.placeholder.update(this.currentContainer, this.placeholder);
                        this.containers[i]._trigger("over", t, this._uiHash(this));
                        this.containers[i].containerCache.over = 1
                    }
            },
            _createHelper: function(t) {
                var r = this.options,
                    i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t, this.currentItem])) : r.helper === "clone" ? this.currentItem.clone() : this.currentItem;
                return i.parents("body").length || n(r.appendTo !== "parent" ? r.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), (!i[0].style.width || r.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || r.forceHelperSize) && i.height(this.currentItem.height()), i
            },
            _adjustOffsetFromHelper: function(t) {
                typeof t == "string" && (t = t.split(" "));
                n.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                });
                "left" in t && (this.offset.click.left = t.left + this.margins.left);
                "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left);
                "top" in t && (this.offset.click.top = t.top + this.margins.top);
                "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var t = this.offsetParent.offset();
                return this.cssPosition === "absolute" && this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && n.ui.ie) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if (this.cssPosition === "relative") {
                    var n = this.currentItem.position();
                    return {
                        top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var t, r, u, i = this.options;
                i.containment === "parent" && (i.containment = this.helper[0].parentNode);
                (i.containment === "document" || i.containment === "window") && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, n(i.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (n(i.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]);
                /^(document|window|parent)$/.test(i.containment) || (t = n(i.containment)[0], r = n(i.containment).offset(), u = n(t).css("overflow") !== "hidden", this.containment = [r.left + (parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (u ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderLeftWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (u ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderTopWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function(t, i) {
                i || (i = this.position);
                var r = t === "absolute" ? 1 : -1,
                    u = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                    f = /(html|body)/i.test(u[0].tagName);
                return {
                    top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r,
                    left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r
                }
            },
            _generatePosition: function(t) {
                var r, u, i = this.options,
                    f = t.pageX,
                    e = t.pageY,
                    o = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                    s = /(html|body)/i.test(o[0].tagName);
                return this.cssPosition !== "relative" || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (e = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (e = this.containment[3] + this.offset.click.top)), i.grid && (r = this.originalPageY + Math.round((e - this.originalPageY) / i.grid[1]) * i.grid[1], e = this.containment ? r - this.offset.click.top >= this.containment[1] && r - this.offset.click.top <= this.containment[3] ? r : r - this.offset.click.top >= this.containment[1] ? r - i.grid[1] : r + i.grid[1] : r, u = this.originalPageX + Math.round((f - this.originalPageX) / i.grid[0]) * i.grid[0], f = this.containment ? u - this.offset.click.left >= this.containment[0] && u - this.offset.click.left <= this.containment[2] ? u : u - this.offset.click.left >= this.containment[0] ? u - i.grid[0] : u + i.grid[0] : u)), {
                    top: e - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : s ? 0 : o.scrollTop()),
                    left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : s ? 0 : o.scrollLeft())
                }
            },
            _rearrange: function(n, t, i, r) {
                i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction === "down" ? t.item[0] : t.item[0].nextSibling);
                this.counter = this.counter ? ++this.counter : 1;
                var u = this.counter;
                this._delay(function() {
                    u === this.counter && this.refreshPositions(!r)
                })
            },
            _clear: function(n, t) {
                function u(n, t, i) {
                    return function(r) {
                        i._trigger(n, r, t._uiHash(t))
                    }
                }
                this.reverting = !1;
                var i, r = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (i in this._storedCSS)(this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") && (this._storedCSS[i] = "");
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !t && r.push(function(n) {
                        this._trigger("receive", n, this._uiHash(this.fromOutside))
                    }), (this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !t && r.push(function(n) {
                        this._trigger("update", n, this._uiHash())
                    }), this !== this.currentContainer && (t || (r.push(function(n) {
                        this._trigger("remove", n, this._uiHash())
                    }), r.push(function(n) {
                        return function(t) {
                            n._trigger("receive", t, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)), r.push(function(n) {
                        return function(t) {
                            n._trigger("update", t, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) t || r.push(u("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (r.push(u("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", n, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) {
                    for (i = 0; i < r.length; i++) r[i].call(this, n);
                    this._trigger("stop", n, this._uiHash())
                }
                return this.fromOutside = !1, !this.cancelHelperRemoval
            },
            _trigger: function() {
                n.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
            },
            _uiHash: function(t) {
                var i = t || this;
                return {
                    helper: i.helper,
                    placeholder: i.placeholder || n([]),
                    position: i.position,
                    originalPosition: i.originalPosition,
                    offset: i.positionAbs,
                    item: i.currentItem,
                    sender: t ? t.element : null
                }
            }
        });
    var li = n.widget("ui.spinner", {
            version: "1.11.2",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                culture: null,
                icons: {
                    down: "ui-icon-triangle-1-s",
                    up: "ui-icon-triangle-1-n"
                },
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._setOption("max", this.options.max);
                this._setOption("min", this.options.min);
                this._setOption("step", this.options.step);
                this.value() !== "" && this._value(this.element.val(), !0);
                this._draw();
                this._on(this._events);
                this._refresh();
                this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _getCreateOptions: function() {
                var t = {},
                    i = this.element;
                return n.each(["min", "max", "step"], function(n, r) {
                    var u = i.attr(r);
                    u !== undefined && u.length && (t[r] = u)
                }), t
            },
            _events: {
                keydown: function(n) {
                    this._start(n) && this._keydown(n) && n.preventDefault()
                },
                keyup: "_stop",
                focus: function() {
                    this.previous = this.element.val()
                },
                blur: function(n) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return
                    }
                    this._stop();
                    this._refresh();
                    this.previous !== this.element.val() && this._trigger("change", n)
                },
                mousewheel: function(n, t) {
                    if (t) {
                        if (!this.spinning && !this._start(n)) return !1;
                        this._spin((t > 0 ? 1 : -1) * this.options.step, n);
                        clearTimeout(this.mousewheelTimer);
                        this.mousewheelTimer = this._delay(function() {
                            this.spinning && this._stop(n)
                        }, 100);
                        n.preventDefault()
                    }
                },
                "mousedown .ui-spinner-button": function(t) {
                    function r() {
                        var n = this.element[0] === this.document[0].activeElement;
                        n || (this.element.focus(), this.previous = i, this._delay(function() {
                            this.previous = i
                        }))
                    }
                    var i;
                    (i = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), r.call(this), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur;
                        r.call(this)
                    }), this._start(t) !== !1) && this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function(t) {
                    if (n(t.currentTarget).hasClass("ui-state-active")) {
                        if (this._start(t) === !1) return !1;
                        this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                    }
                },
                "mouseleave .ui-spinner-button": "_stop"
            },
            _draw: function() {
                var n = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                this.element.attr("role", "spinbutton");
                this.buttons = n.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
                this.buttons.height() > Math.ceil(n.height() * .5) && n.height() > 0 && n.height(n.height());
                this.options.disabled && this.disable()
            },
            _keydown: function(t) {
                var r = this.options,
                    i = n.ui.keyCode;
                switch (t.keyCode) {
                    case i.UP:
                        return this._repeat(null, 1, t), !0;
                    case i.DOWN:
                        return this._repeat(null, -1, t), !0;
                    case i.PAGE_UP:
                        return this._repeat(null, r.page, t), !0;
                    case i.PAGE_DOWN:
                        return this._repeat(null, -r.page, t), !0
                }
                return !1
            },
            _uiSpinnerHtml: function() {
                return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'><\/span>"
            },
            _buttonHtml: function() {
                return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;<\/span><\/a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;<\/span><\/a>"
            },
            _start: function(n) {
                return !this.spinning && this._trigger("start", n) === !1 ? !1 : (this.counter || (this.counter = 1), this.spinning = !0, !0)
            },
            _repeat: function(n, t, i) {
                n = n || 500;
                clearTimeout(this.timer);
                this.timer = this._delay(function() {
                    this._repeat(40, t, i)
                }, n);
                this._spin(t * this.options.step, i)
            },
            _spin: function(n, t) {
                var i = this.value() || 0;
                this.counter || (this.counter = 1);
                i = this._adjustValue(i + n * this._increment(this.counter));
                this.spinning && this._trigger("spin", t, {
                    value: i
                }) === !1 || (this._value(i), this.counter++)
            },
            _increment: function(t) {
                var i = this.options.incremental;
                return i ? n.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
            },
            _precision: function() {
                var n = this._precisionOf(this.options.step);
                return this.options.min !== null && (n = Math.max(n, this._precisionOf(this.options.min))), n
            },
            _precisionOf: function(n) {
                var t = n.toString(),
                    i = t.indexOf(".");
                return i === -1 ? 0 : t.length - i - 1
            },
            _adjustValue: function(n) {
                var r, i, t = this.options;
                return (r = t.min !== null ? t.min : 0, i = n - r, i = Math.round(i / t.step) * t.step, n = r + i, n = parseFloat(n.toFixed(this._precision())), t.max !== null && n > t.max) ? t.max : t.min !== null && n < t.min ? t.min : n
            },
            _stop: function(n) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", n))
            },
            _setOption: function(n, t) {
                if (n === "culture" || n === "numberFormat") {
                    var i = this._parse(this.element.val());
                    this.options[n] = t;
                    this.element.val(this._format(i));
                    return
                }(n === "max" || n === "min" || n === "step") && typeof t == "string" && (t = this._parse(t));
                n === "icons" && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down));
                this._super(n, t);
                n === "disabled" && (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable"))
            },
            _setOptions: t(function(n) {
                this._super(n)
            }),
            _parse: function(n) {
                return typeof n == "string" && n !== "" && (n = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(n, 10, this.options.culture) : +n), n === "" || isNaN(n) ? null : n
            },
            _format: function(n) {
                return n === "" ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(n, this.options.numberFormat, this.options.culture) : n
            },
            _refresh: function() {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            isValid: function() {
                var n = this.value();
                return n === null ? !1 : n === this._adjustValue(n)
            },
            _value: function(n, t) {
                var i;
                n !== "" && (i = this._parse(n), i !== null && (t || (i = this._adjustValue(i)), n = this._format(i)));
                this.element.val(n);
                this._refresh()
            },
            _destroy: function() {
                this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
                this.uiSpinner.replaceWith(this.element)
            },
            stepUp: t(function(n) {
                this._stepUp(n)
            }),
            _stepUp: function(n) {
                this._start() && (this._spin((n || 1) * this.options.step), this._stop())
            },
            stepDown: t(function(n) {
                this._stepDown(n)
            }),
            _stepDown: function(n) {
                this._start() && (this._spin((n || 1) * -this.options.step), this._stop())
            },
            pageUp: t(function(n) {
                this._stepUp((n || 1) * this.options.page)
            }),
            pageDown: t(function(n) {
                this._stepDown((n || 1) * this.options.page)
            }),
            value: function(n) {
                if (!arguments.length) return this._parse(this.element.val());
                t(this._value).call(this, n)
            },
            widget: function() {
                return this.uiSpinner
            }
        }),
        ai = n.widget("ui.tabs", {
            version: "1.11.2",
            delay: 300,
            options: {
                active: null,
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _isLocal: function() {
                var n = /#.*$/;
                return function(t) {
                    var i, r;
                    t = t.cloneNode(!1);
                    i = t.href.replace(n, "");
                    r = location.href.replace(n, "");
                    try {
                        i = decodeURIComponent(i)
                    } catch (u) {}
                    try {
                        r = decodeURIComponent(r)
                    } catch (u) {}
                    return t.hash.length > 1 && i === r
                }
            }(),
            _create: function() {
                var i = this,
                    t = this.options;
                this.running = !1;
                this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", t.collapsible);
                this._processTabs();
                t.active = this._initialActive();
                n.isArray(t.disabled) && (t.disabled = n.unique(t.disabled.concat(n.map(this.tabs.filter(".ui-state-disabled"), function(n) {
                    return i.tabs.index(n)
                }))).sort());
                this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(t.active) : n();
                this._refresh();
                this.active.length && this.load(t.active)
            },
            _initialActive: function() {
                var t = this.options.active,
                    i = this.options.collapsible,
                    r = location.hash.substring(1);
                return t === null && (r && this.tabs.each(function(i, u) {
                    if (n(u).attr("aria-controls") === r) return t = i, !1
                }), t === null && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (t === null || t === -1) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), t === -1 && (t = i ? !1 : 0)), !i && t === !1 && this.anchors.length && (t = 0), t
            },
            _getCreateEventData: function() {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : n()
                }
            },
            _tabKeydown: function(t) {
                var r = n(this.document[0].activeElement).closest("li"),
                    i = this.tabs.index(r),
                    u = !0;
                if (!this._handlePageNav(t)) {
                    switch (t.keyCode) {
                        case n.ui.keyCode.RIGHT:
                        case n.ui.keyCode.DOWN:
                            i++;
                            break;
                        case n.ui.keyCode.UP:
                        case n.ui.keyCode.LEFT:
                            u = !1;
                            i--;
                            break;
                        case n.ui.keyCode.END:
                            i = this.anchors.length - 1;
                            break;
                        case n.ui.keyCode.HOME:
                            i = 0;
                            break;
                        case n.ui.keyCode.SPACE:
                            t.preventDefault();
                            clearTimeout(this.activating);
                            this._activate(i);
                            return;
                        case n.ui.keyCode.ENTER:
                            t.preventDefault();
                            clearTimeout(this.activating);
                            this._activate(i === this.options.active ? !1 : i);
                            return;
                        default:
                            return
                    }
                    t.preventDefault();
                    clearTimeout(this.activating);
                    i = this._focusNextTab(i, u);
                    t.ctrlKey || (r.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function() {
                        this.option("active", i)
                    }, this.delay))
                }
            },
            _panelKeydown: function(t) {
                this._handlePageNav(t) || t.ctrlKey && t.keyCode === n.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
            },
            _handlePageNav: function(t) {
                return t.altKey && t.keyCode === n.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === n.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function(t, i) {
                function u() {
                    return t > r && (t = 0), t < 0 && (t = r), t
                }
                for (var r = this.tabs.length - 1; n.inArray(u(), this.options.disabled) !== -1;) t = i ? t + 1 : t - 1;
                return t
            },
            _focusNextTab: function(n, t) {
                return n = this._findNextTab(n, t), this.tabs.eq(n).focus(), n
            },
            _setOption: function(n, t) {
                if (n === "active") {
                    this._activate(t);
                    return
                }
                if (n === "disabled") {
                    this._setupDisabled(t);
                    return
                }
                this._super(n, t);
                n === "collapsible" && (this.element.toggleClass("ui-tabs-collapsible", t), t || this.options.active !== !1 || this._activate(0));
                n === "event" && this._setupEvents(t);
                n === "heightStyle" && this._setupHeightStyle(t)
            },
            _sanitizeSelector: function(n) {
                return n ? n.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function() {
                var t = this.options,
                    i = this.tablist.children(":has(a[href])");
                t.disabled = n.map(i.filter(".ui-state-disabled"), function(n) {
                    return i.index(n)
                });
                this._processTabs();
                t.active !== !1 && this.anchors.length ? this.active.length && !n.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = n()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = n());
                this._refresh()
            },
            _refresh: function() {
                this._setupDisabled(this.options.disabled);
                this._setupEvents(this.options.event);
                this._setupHeightStyle(this.options.heightStyle);
                this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                });
                this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-hidden": "true"
                });
                this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }), this._getPanelForTab(this.active).show().attr({
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function() {
                var t = this,
                    i = this.tabs,
                    r = this.anchors,
                    u = this.panels;
                this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(t) {
                    n(this).is(".ui-state-disabled") && t.preventDefault()
                }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                    n(this).closest("li").is(".ui-state-disabled") && this.blur()
                });
                this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                    role: "tab",
                    tabIndex: -1
                });
                this.anchors = this.tabs.map(function() {
                    return n("a", this)[0]
                }).addClass("ui-tabs-anchor").attr({
                    role: "presentation",
                    tabIndex: -1
                });
                this.panels = n();
                this.anchors.each(function(i, r) {
                    var f, u, e, s = n(r).uniqueId().attr("id"),
                        o = n(r).closest("li"),
                        h = o.attr("aria-controls");
                    t._isLocal(r) ? (f = r.hash, e = f.substring(1), u = t.element.find(t._sanitizeSelector(f))) : (e = o.attr("aria-controls") || n({}).uniqueId()[0].id, f = "#" + e, u = t.element.find(f), u.length || (u = t._createPanel(e), u.insertAfter(t.panels[i - 1] || t.tablist)), u.attr("aria-live", "polite"));
                    u.length && (t.panels = t.panels.add(u));
                    h && o.data("ui-tabs-aria-controls", h);
                    o.attr({
                        "aria-controls": e,
                        "aria-labelledby": s
                    });
                    u.attr("aria-labelledby", s)
                });
                this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel");
                i && (this._off(i.not(this.tabs)), this._off(r.not(this.anchors)), this._off(u.not(this.panels)))
            },
            _getList: function() {
                return this.tablist || this.element.find("ol,ul").eq(0)
            },
            _createPanel: function(t) {
                return n("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            },
            _setupDisabled: function(t) {
                n.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
                for (var i = 0, r; r = this.tabs[i]; i++) t === !0 || n.inArray(i, t) !== -1 ? n(r).addClass("ui-state-disabled").attr("aria-disabled", "true") : n(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                this.options.disabled = t
            },
            _setupEvents: function(t) {
                var i = {};
                t && n.each(t.split(" "), function(n, t) {
                    i[t] = "_eventHandler"
                });
                this._off(this.anchors.add(this.tabs).add(this.panels));
                this._on(!0, this.anchors, {
                    click: function(n) {
                        n.preventDefault()
                    }
                });
                this._on(this.anchors, i);
                this._on(this.tabs, {
                    keydown: "_tabKeydown"
                });
                this._on(this.panels, {
                    keydown: "_panelKeydown"
                });
                this._focusable(this.tabs);
                this._hoverable(this.tabs)
            },
            _setupHeightStyle: function(t) {
                var i, r = this.element.parent();
                t === "fill" ? (i = r.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                    var t = n(this),
                        r = t.css("position");
                    r !== "absolute" && r !== "fixed" && (i -= t.outerHeight(!0))
                }), this.element.children().not(this.panels).each(function() {
                    i -= n(this).outerHeight(!0)
                }), this.panels.each(function() {
                    n(this).height(Math.max(0, i - n(this).innerHeight() + n(this).height()))
                }).css("overflow", "auto")) : t === "auto" && (i = 0, this.panels.each(function() {
                    i = Math.max(i, n(this).height("").height())
                }).height(i))
            },
            _eventHandler: function(t) {
                var u = this.options,
                    r = this.active,
                    c = n(t.currentTarget),
                    i = c.closest("li"),
                    f = i[0] === r[0],
                    e = f && u.collapsible,
                    o = e ? n() : this._getPanelForTab(i),
                    s = r.length ? this._getPanelForTab(r) : n(),
                    h = {
                        oldTab: r,
                        oldPanel: s,
                        newTab: e ? n() : i,
                        newPanel: o
                    };
                (t.preventDefault(), i.hasClass("ui-state-disabled") || i.hasClass("ui-tabs-loading") || this.running || f && !u.collapsible || this._trigger("beforeActivate", t, h) === !1) || (u.active = e ? !1 : this.tabs.index(i), this.active = f ? n() : i, this.xhr && this.xhr.abort(), s.length || o.length || n.error("jQuery UI Tabs: Mismatching fragment identifier."), o.length && this.load(this.tabs.index(i), t), this._toggle(t, h))
            },
            _toggle: function(t, i) {
                function e() {
                    u.running = !1;
                    u._trigger("activate", t, i)
                }

                function o() {
                    i.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
                    r.length && u.options.show ? u._show(r, u.options.show, e) : (r.show(), e())
                }
                var u = this,
                    r = i.newPanel,
                    f = i.oldPanel;
                this.running = !0;
                f.length && this.options.hide ? this._hide(f, this.options.hide, function() {
                    i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                    o()
                }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), f.hide(), o());
                f.attr("aria-hidden", "true");
                i.oldTab.attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                });
                r.length && f.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function() {
                    return n(this).attr("tabIndex") === 0
                }).attr("tabIndex", -1);
                r.attr("aria-hidden", "false");
                i.newTab.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _activate: function(t) {
                var r, i = this._findActive(t);
                i[0] !== this.active[0] && (i.length || (i = this.active), r = i.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: r,
                    currentTarget: r,
                    preventDefault: n.noop
                }))
            },
            _findActive: function(t) {
                return t === !1 ? n() : this.tabs.eq(t)
            },
            _getIndex: function(n) {
                return typeof n == "string" && (n = this.anchors.index(this.anchors.filter("[href$='" + n + "']"))), n
            },
            _destroy: function() {
                this.xhr && this.xhr.abort();
                this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
                this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
                this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
                this.tablist.unbind(this.eventNamespace);
                this.tabs.add(this.panels).each(function() {
                    n.data(this, "ui-tabs-destroy") ? n(this).remove() : n(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                });
                this.tabs.each(function() {
                    var t = n(this),
                        i = t.data("ui-tabs-aria-controls");
                    i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
                });
                this.panels.show();
                this.options.heightStyle !== "content" && this.panels.css("height", "")
            },
            enable: function(t) {
                var i = this.options.disabled;
                i !== !1 && (t === undefined ? i = !1 : (t = this._getIndex(t), i = n.isArray(i) ? n.map(i, function(n) {
                    return n !== t ? n : null
                }) : n.map(this.tabs, function(n, i) {
                    return i !== t ? i : null
                })), this._setupDisabled(i))
            },
            disable: function(t) {
                var i = this.options.disabled;
                if (i !== !0) {
                    if (t === undefined) i = !0;
                    else {
                        if (t = this._getIndex(t), n.inArray(t, i) !== -1) return;
                        i = n.isArray(i) ? n.merge([t], i).sort() : [t]
                    }
                    this._setupDisabled(i)
                }
            },
            load: function(t, i) {
                t = this._getIndex(t);
                var u = this,
                    r = this.tabs.eq(t),
                    e = r.find(".ui-tabs-anchor"),
                    f = this._getPanelForTab(r),
                    o = {
                        tab: r,
                        panel: f
                    };
                this._isLocal(e[0]) || (this.xhr = n.ajax(this._ajaxSettings(e, i, o)), this.xhr && this.xhr.statusText !== "canceled" && (r.addClass("ui-tabs-loading"), f.attr("aria-busy", "true"), this.xhr.success(function(n) {
                    setTimeout(function() {
                        f.html(n);
                        u._trigger("load", i, o)
                    }, 1)
                }).complete(function(n, t) {
                    setTimeout(function() {
                        t === "abort" && u.panels.stop(!1, !0);
                        r.removeClass("ui-tabs-loading");
                        f.removeAttr("aria-busy");
                        n === u.xhr && delete u.xhr
                    }, 1)
                })))
            },
            _ajaxSettings: function(t, i, r) {
                var u = this;
                return {
                    url: t.attr("href"),
                    beforeSend: function(t, f) {
                        return u._trigger("beforeLoad", i, n.extend({
                            jqXHR: t,
                            ajaxSettings: f
                        }, r))
                    }
                }
            },
            _getPanelForTab: function(t) {
                var i = n(t).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + i))
            }
        }),
        vi = n.widget("ui.tooltip", {
            version: "1.11.2",
            options: {
                content: function() {
                    var t = n(this).attr("title") || "";
                    return n("<a>").text(t).html()
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                },
                show: !0,
                tooltipClass: null,
                track: !1,
                close: null,
                open: null
            },
            _addDescribedBy: function(t, i) {
                var r = (t.attr("aria-describedby") || "").split(/\s+/);
                r.push(i);
                t.data("ui-tooltip-id", i).attr("aria-describedby", n.trim(r.join(" ")))
            },
            _removeDescribedBy: function(t) {
                var u = t.data("ui-tooltip-id"),
                    i = (t.attr("aria-describedby") || "").split(/\s+/),
                    r = n.inArray(u, i);
                r !== -1 && i.splice(r, 1);
                t.removeData("ui-tooltip-id");
                i = n.trim(i.join(" "));
                i ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
            },
            _create: function() {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                });
                this.tooltips = {};
                this.parents = {};
                this.options.disabled && this._disable();
                this.liveRegion = n("<div>").attr({
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
            },
            _setOption: function(t, i) {
                var r = this;
                if (t === "disabled") {
                    this[i ? "_disable" : "_enable"]();
                    this.options[t] = i;
                    return
                }
                this._super(t, i);
                t === "content" && n.each(this.tooltips, function(n, t) {
                    r._updateContent(t.element)
                })
            },
            _disable: function() {
                var t = this;
                n.each(this.tooltips, function(i, r) {
                    var u = n.Event("blur");
                    u.target = u.currentTarget = r.element[0];
                    t.close(u, !0)
                });
                this.element.find(this.options.items).addBack().each(function() {
                    var t = n(this);
                    t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).removeAttr("title")
                })
            },
            _enable: function() {
                this.element.find(this.options.items).addBack().each(function() {
                    var t = n(this);
                    t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
                })
            },
            open: function(t) {
                var r = this,
                    i = n(t ? t.target : this.element).closest(this.options.items);
                i.length && !i.data("ui-tooltip-id") && (i.attr("title") && i.data("ui-tooltip-title", i.attr("title")), i.data("ui-tooltip-open", !0), t && t.type === "mouseover" && i.parents().each(function() {
                    var t = n(this),
                        i;
                    t.data("ui-tooltip-open") && (i = n.Event("blur"), i.target = i.currentTarget = this, r.close(i, !0));
                    t.attr("title") && (t.uniqueId(), r.parents[this.id] = {
                        element: this,
                        title: t.attr("title")
                    }, t.attr("title", ""))
                }), this._updateContent(i, t))
            },
            _updateContent: function(n, t) {
                var i, r = this.options.content,
                    u = this,
                    f = t ? t.type : null;
                if (typeof r == "string") return this._open(t, n, r);
                i = r.call(n[0], function(i) {
                    n.data("ui-tooltip-open") && u._delay(function() {
                        t && (t.type = f);
                        this._open(t, n, i)
                    })
                });
                i && this._open(t, n, i)
            },
            _open: function(t, i, r) {
                function h(n) {
                    (s.of = n, u.is(":hidden")) || u.position(s)
                }
                var f, u, e, c, o, s = n.extend({}, this.options.position);
                if (r) {
                    if (f = this._find(i), f) {
                        f.tooltip.find(".ui-tooltip-content").html(r);
                        return
                    }
                    i.is("[title]") && (t && t.type === "mouseover" ? i.attr("title", "") : i.removeAttr("title"));
                    f = this._tooltip(i);
                    u = f.tooltip;
                    this._addDescribedBy(i, u.attr("id"));
                    u.find(".ui-tooltip-content").html(r);
                    this.liveRegion.children().hide();
                    r.clone ? (o = r.clone(), o.removeAttr("id").find("[id]").removeAttr("id")) : o = r;
                    n("<div>").html(o).appendTo(this.liveRegion);
                    this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                        mousemove: h
                    }), h(t)) : u.position(n.extend({
                        of: i
                    }, this.options.position));
                    u.hide();
                    this._show(u, this.options.show);
                    this.options.show && this.options.show.delay && (c = this.delayedShow = setInterval(function() {
                        u.is(":visible") && (h(s.of), clearInterval(c))
                    }, n.fx.interval));
                    this._trigger("open", t, {
                        tooltip: u
                    });
                    e = {
                        keyup: function(t) {
                            if (t.keyCode === n.ui.keyCode.ESCAPE) {
                                var r = n.Event(t);
                                r.currentTarget = i[0];
                                this.close(r, !0)
                            }
                        }
                    };
                    i[0] !== this.element[0] && (e.remove = function() {
                        this._removeTooltip(u)
                    });
                    t && t.type !== "mouseover" || (e.mouseleave = "close");
                    t && t.type !== "focusin" || (e.focusout = "close");
                    this._on(!0, i, e)
                }
            },
            close: function(t) {
                var u, f = this,
                    i = n(t ? t.currentTarget : this.element),
                    r = this._find(i);
                r && ((u = r.tooltip, r.closing) || (clearInterval(this.delayedShow), i.data("ui-tooltip-title") && !i.attr("title") && i.attr("title", i.data("ui-tooltip-title")), this._removeDescribedBy(i), r.hiding = !0, u.stop(!0), this._hide(u, this.options.hide, function() {
                    f._removeTooltip(n(this))
                }), i.removeData("ui-tooltip-open"), this._off(i, "mouseleave focusout keyup"), i[0] !== this.element[0] && this._off(i, "remove"), this._off(this.document, "mousemove"), t && t.type === "mouseleave" && n.each(this.parents, function(t, i) {
                    n(i.element).attr("title", i.title);
                    delete f.parents[t]
                }), r.closing = !0, this._trigger("close", t, {
                    tooltip: u
                }), r.hiding || (r.closing = !1)))
            },
            _tooltip: function(t) {
                var i = n("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                    r = i.uniqueId().attr("id");
                return n("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[r] = {
                    element: t,
                    tooltip: i
                }
            },
            _find: function(n) {
                var t = n.data("ui-tooltip-id");
                return t ? this.tooltips[t] : null
            },
            _removeTooltip: function(n) {
                n.remove();
                delete this.tooltips[n.attr("id")]
            },
            _destroy: function() {
                var t = this;
                n.each(this.tooltips, function(i, r) {
                    var f = n.Event("blur"),
                        u = r.element;
                    f.target = f.currentTarget = u[0];
                    t.close(f, !0);
                    n("#" + i).remove();
                    u.data("ui-tooltip-title") && (u.attr("title") || u.attr("title", u.data("ui-tooltip-title")), u.removeData("ui-tooltip-title"))
                });
                this.liveRegion.remove()
            }
        })
});

/*!
 * fancyBox - jQuery Plugin
 * version: 3.0.0 Beta 1 (Tue, 29 Jan 2013)
 * @requires jQuery v1.7 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2013 Janis Skarnelis - janis@fancyapps.com
 *
 */
(function(n,t,i,r){"use strict";var o=i(n),s=i(t),v=i("html"),u=i.fancybox=function(){u.open.apply(this,arguments)},h=u.isTouch=t.createTouch!==r||n.ontouchstart!==r,l=function(n){return n&&n.hasOwnProperty&&n instanceof i},c=function(n){return n&&i.type(n)==="string"},a=function(n){return c(n)&&n.indexOf("%")>0},e=function(n,t){var i=parseFloat(n,10)||0;return t&&a(n)&&(i=u.getViewport()[t]/100*i),Math.ceil(i)},f=function(n,t){return e(n,t)+"px"},y=Date.now||function(){return+new Date},p=function(n){var t=c(n)?i(n):n;if(t&&t.length){t.removeClass("fancybox-wrap").stop(!0).trigger("onReset").hide().unbind();try{t.find("iframe").unbind().attr("src",h?"":"//about:blank");setTimeout(function(){if(t.empty().remove(),u.lock&&!u.coming&&!u.current){var n,r;i(".fancybox-margin").removeClass("fancybox-margin");n=o.scrollTop();r=o.scrollLeft();v.removeClass("fancybox-lock");u.lock.remove();u.lock=null;o.scrollTop(n).scrollLeft(r)}},150)}catch(r){}}};i.extend(u,{version:"3.0.0",defaults:{theme:"default",padding:15,margin:[30,55,30,55],loop:!0,arrows:!0,closeBtn:!0,expander:!h,caption:{type:"outside"},overlay:{closeClick:!0,speedIn:0,speedOut:250,showEarly:!0,css:{}},helpers:{},width:800,height:450,minWidth:100,minHeight:100,maxWidth:99999,maxHeight:99999,aspectRatio:!1,fitToView:!0,autoHeight:!0,autoWidth:!0,autoResize:!0,autoCenter:!h,topRatio:.5,leftRatio:.5,openEffect:"elastic",openSpeed:350,openEasing:"easeOutQuad",closeEffect:"elastic",closeSpeed:350,closeEasing:"easeOutQuad",nextEffect:"elastic",nextSpeed:350,nextEasing:"easeOutQuad",prevEffect:"elastic",prevSpeed:350,prevEasing:"easeOutQuad",autoPlay:!1,playSpeed:3e3,onCancel:i.noop,beforeLoad:i.noop,afterLoad:i.noop,beforeShow:i.noop,afterShow:i.noop,beforeClose:i.noop,afterClose:i.noop,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-inner"><\/div><\/div>',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true"><\/iframe>',error:'<p class="fancybox-error">{{ERROR}}<\/p>',closeBtn:'<a title="{{CLOSE}}" class="fancybox-close" href="javascript:;"><\/a>',next:'<a title="{{NEXT}}" class="fancybox-nav fancybox-next" href="javascript:;"><span><\/span><\/a>',prev:'<a title="{{PREV}}" class="fancybox-nav fancybox-prev" href="javascript:;"><span><\/span><\/a>'},locale:"en",locales:{en:{CLOSE:"Đóng",NEXT:"Ảnh tiếp",PREV:"Ảnh trước",ERROR:"Không thể tải được dữ liệu. <br/> Vui lòng thử lại sau ít phút.",EXPAND:"Xem kích thước thật",SHRINK:"Hiển thị vừa màn hình",PLAY_START:"Bắt đầu slideshow",PLAY_STOP:"Tạm dừng slideshow"},de:{CLOSE:"Schliessen",NEXT:"VorwĂ¤rts",PREV:"ZurĂ¼ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es spĂ¤ter nochmal.",EXPAND:"",SHRINK:"",PLAY_START:"",PLAY_STOP:""}},index:0,content:null,href:null,wrapCSS:"",modal:!1,locked:!0,preload:3,mouseWheel:!0,scrolling:"auto",scrollOutside:!0},current:null,coming:null,group:[],index:0,isActive:!1,isOpen:!1,isOpened:!1,isMaximized:!1,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,helpers:{},open:function(n,t){n&&!1!==u.close(!0)&&(i.isPlainObject(t)||(t={}),u.opts=i.extend(!0,{},u.defaults,t),u.populate(n),u.group.length&&u._start(u.opts.index))},populate:function(n){var t=[];i.isArray(n)||(n=[n]);i.each(n,function(f,e){var a=i.extend(!0,{},u.opts),o,s,p,v,y;if(i.isPlainObject(e))o=e;else if(c(e))o={href:e};else if(l(e)||i.type(e)==="object"&&e.nodeType)s=i(e),o=i(s).get(0),o.href||(o={href:e}),o=i.extend({href:s.data("fancybox-href")||s.attr("href")||o.href,title:s.data("fancybox-title")||s.attr("title")||o.title,type:s.data("fancybox-type"),element:s},s.data("fancybox-options"));else return;!o.type&&(o.content||o.href)&&(o.type=o.content?"html":u.guessType(s,o.href));p=o.type||u.opts.type;(p==="image"||p==="swf")&&(a.autoWidth=a.autoHeight=!1,a.scrolling="visible");p==="image"&&(a.aspectRatio=!0);p==="iframe"&&(a.autoWidth=!1,a.scrolling=h?"scroll":"visible");n.length<2&&(a.margin=30);o=i.extend(!0,{},a,o);v=o.margin;y=o.padding;i.type(v)==="number"&&(o.margin=[v,v,v,v]);i.type(y)==="number"&&(o.padding=[y,y,y,y]);o.modal&&i.extend(!0,o,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,overlay:{closeClick:!1}});o.autoSize!==r&&(o.autoWidth=o.autoHeight=!!o.autoSize);o.width==="auto"&&(o.autoWidth=!0);o.height==="auto"&&(o.autoHeight=!0);t.push(o)});u.group=u.group.concat(t)},cancel:function(){var n=u.coming;n&&!1!==u.trigger("onCancel")&&(u.hideLoading(),u.ajaxLoad&&u.ajaxLoad.abort(),u.imgPreload&&(u.imgPreload.onload=u.imgPreload.onerror=null),n.wrap&&p(n.wrap),u.ajaxLoad=u.imgPreload=u.coming=null,u.current||u._afterZoomOut(n))},close:function(n){(n&&i.type(n)==="object"&&n.preventDefault(),u.cancel(),u.isActive&&!u.coming&&!1!==u.trigger("beforeClose"))&&(u.unbind(),u.isClosing=!0,u.lock&&u.lock.css("overflow","hidden"),u.isOpen&&n!==!0?(u.isOpen=u.isOpened=!1,u.transitions.close()):u._afterZoomOut())},prev:function(n){var t=u.current;t&&u.jumpto(t.index-1,c(n)?n:t.direction.prev)},next:function(n){var t=u.current;t&&u.jumpto(t.index+1,c(n)?n:t.direction.next)},jumpto:function(n,t){var i=u.current;u.coming&&u.coming.index===n||(u.cancel(),i.index==n?t=null:t||(t=i.direction[n>i.index?"next":"prev"]),u.direction=t,u._start(n))}});i.extend(u,{guessType:function(n,t){var r=n&&n.prop("class")?n.prop("class").match(/fancybox\.(\w+)/):0,i=!1;return r?r[1]:(c(t)?t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)?i="image":t.match(/\.(swf)((\?|#).*)?$/i)?i="swf":t.charAt(0)==="#"&&(i="inline"):c(n)&&(i="html"),i)},trigger:function(n,t){var f,r=t||u.coming||u.current;if(r){if(i.isFunction(r[n])&&(f=r[n].apply(r,Array.prototype.slice.call(arguments,1))),f===!1||n==="afterClose"&&u.isActive)return!1;r.helpers&&i.each(r.helpers,function(t,f){var e=u.helpers[t],o;f&&e&&i.isFunction(e[n])&&(o=i.extend(!0,{},e.defaults,f),e.opts=o,e[n](o,r))});i.event.trigger(n)}},reposition:function(n,t){var i=t||u.current,r=i&&i.wrap,f;u.isOpen&&r&&(f=u._getPosition(i),n===!1||n&&n.type==="scroll"?r.stop(!0).animate(f,200).css("overflow","visible"):r.css(f))},update:function(n){var f=n&&n.type,e=y(),t=u.current,r;if(t&&u.isOpen){if(f==="scroll"){if(u.wrap.outerHeight(!0)>u.getViewport().h)return;u.didUpdate&&clearTimeout(u.didUpdate);u.didUpdate=setTimeout(function(){u.reposition(n);u.didUpdate=null},50);return}u.lock&&u.lock.css("overflow","hidden");u._setDimension();u.reposition(n);u.lock&&u.lock.css("overflow","auto");t.caption.type==="float"&&(r=u.getViewport().w-(u.wrap.outerWidth(!0)-u.inner.width()),t.caption.wrap.css("width",r).css("marginLeft",(r*.5-u.inner.width()*.5)*-1));t.expander&&(t.canShrink?i(".fancybox-expand").show().attr("title",t.locales[t.locale].SHRINK):t.canExpand?i(".fancybox-expand").show().attr("title",t.locales[t.locale].EXPAND):i(".fancybox-expand").hide());u.trigger("onUpdate")}},toggle:function(n){var t=u.current;t&&u.isOpen&&(u.current.fitToView=i.type(n)==="boolean"?n:!u.current.fitToView,u.update(!0))},hideLoading:function(){i("#fancybox-loading").remove()},showLoading:function(){var t,n;u.hideLoading();t=i('<div id="fancybox-loading"><\/div>').click(u.cancel).appendTo("body");u.defaults.fixed||(n=u.getViewport(),t.css({position:"absolute",top:n.h*.5+n.y,left:n.w*.5+n.x}))},getViewport:function(){return u.lock?{x:u.lock.scrollLeft(),y:u.lock.scrollTop(),w:u.lock[0].clientWidth,h:u.lock[0].clientHeight}:{x:o.scrollLeft(),y:o.scrollTop(),w:h&&n.innerWidth?n.innerWidth:o.width(),h:h&&n.innerHeight?n.innerHeight:o.height()}},unbind:function(){l(u.wrap)&&u.wrap.unbind(".fb");l(u.inner)&&u.inner.unbind(".fb");s.unbind(".fb");o.unbind(".fb")},rebind:function(){var n=u.current,t;(u.unbind(),n&&u.isOpen)&&(o.bind("orientationchange.fb"+(h?"":" resize.fb")+(n.autoCenter&&!n.locked?" scroll.fb":""),u.update),t=n.keys,t&&s.bind("keydown.fb",function(f){var e=f.which||f.keyCode,o=f.target||f.srcElement;if(e===27&&u.coming)return!1;f.ctrlKey||f.altKey||f.shiftKey||f.metaKey||o&&(o.type||i(o).is("[contenteditable]"))||i.each(t,function(t,o){return o[e]!==r?(f.preventDefault(),n.group.length>1&&u[t](o[e]),!1):i.inArray(e,o)>-1?(f.preventDefault(),t==="play"?u.slideshow.toggle():u[t](),!1):void 0})}),u.lastScroll=y(),n.mouseWheel&&u.group.length>1&&u.wrap.bind("DOMMouseScroll.fb mousewheel.fb MozMousePixelScroll.fb",function(n){var t=n.originalEvent,i=t.target||0,r=t.wheelDelta||t.detail||0,f=t.wheelDeltaX||0,o=t.wheelDeltaY||0,e=y();if((!i||!i.style||i.style.overflow&&i.style.overflow==="hidden"||!(i.clientWidth&&i.scrollWidth>i.clientWidth||i.clientHeight&&i.scrollHeight>i.clientHeight))&&r!==0&&(!u.current||!u.current.canShrink)){if(t.stopPropagation(),u.lastScroll&&e-u.lastScroll<80){u.lastScroll=e;return}u.lastScroll=e;t.axis&&(t.axis===t.HORIZONTAL_AXIS?f=r*-1:t.axis===t.VERTICAL_AXIS&&(o=r*-1));f===0?u.transitions.close():f>0?u.prev("right"):u.next("left")}}),u.touch.init())},rebuild:function(){var n=u.current;n.wrap.find(".fancybox-nav, .fancybox-close, .fancybox-expand").remove();n.arrows&&u.group.length>1&&((n.loop||n.index>0)&&i(u._translate(n.tpl.prev)).appendTo(u.inner).bind("click.fb",u.prev),(n.loop||n.index<u.group.length-1)&&i(u._translate(n.tpl.next)).appendTo(u.inner).bind("click.fb",u.next));n.closeBtn&&i(u._translate(n.tpl.closeBtn)).appendTo(u.wrap).bind("click.fb",u.close);n.expander&&n.type==="image"&&(i('<a title="Expand image" class="fancybox-expand" href="javascript:;"><\/a>').appendTo(u.inner).bind("click.fb",u.toggle),!n.canShrink&&!n.canExpand)},_start:function(n){var t,r;if(u.opts.loop&&(n<0&&(n=u.group.length+n%u.group.length),n=n%u.group.length),t=u.group[n],!t)return!1;if(t=i.extend(!0,{},u.opts,t),t.group=u.group,t.index=n,u.coming=t,!1===u.trigger("beforeLoad")){u.coming=null;return}u.isActive=!0;u._build();s.bind("keydown.loading",function(n){(n.which||n.keyCode)===27&&(s.unbind(".loading"),n.preventDefault(),u.cancel())});t.overlay&&t.overlay.showEarly&&u.overlay.open(t.overlay);r=t.type;r==="image"?u._loadImage():r==="ajax"?u._loadAjax():r==="iframe"?u._loadIframe():r==="inline"?u._loadInline():r==="html"||r==="swf"?u._afterLoad():u._error()},_build:function(){var n=u.coming,r=n.caption.type,t,h,f,e;n.wrap=t=i('<div class="fancybox-wrap"><\/div>').appendTo(n.parent||"body").addClass("fancybox-"+n.theme);n.inner=h=i('<div class="fancybox-inner"><\/div>').appendTo(t);n[r==="outside"||r==="float"?"inner":"wrap"].addClass("fancybox-skin fancybox-"+n.theme+"-skin");n.locked&&n.overlay&&u.defaults.fixed&&(u.lock||(u.lock=i('<div id="fancybox-lock"><\/div>').appendTo(t.parent())),u.lock.unbind().append(t),n.overlay.closeClick&&u.lock.click(function(n){i(n.target).is(u.lock)&&u.close()}),(s.height()>o.height()||v.css("overflow-y")==="scroll")&&(i("*:visible").filter(function(){return i(this).css("position")==="fixed"&&!i(this).hasClass("fancybox-overlay")&&i(this).attr("id")!=="fancybox-lock"}).addClass("fancybox-margin"),v.addClass("fancybox-margin")),f=o.scrollTop(),e=o.scrollLeft(),v.addClass("fancybox-lock"),o.scrollTop(f).scrollLeft(e));u.trigger("onReady")},_error:function(n){u.coming&&(i.extend(u.coming,{type:"html",autoWidth:!0,autoHeight:!0,closeBtn:!0,minWidth:0,minHeight:0,padding:[15,15,15,15],scrolling:"visible",hasError:n,content:u._translate(u.coming.tpl.error)}),u._afterLoad())},_loadImage:function(){var n=u.imgPreload=new Image;n.onload=function(){this.onload=this.onerror=null;i.extend(u.coming,{width:this.width,height:this.height,content:i(this).addClass("fancybox-image")});u._afterLoad()};n.onerror=function(){this.onload=this.onerror=null;u._error("image")};n.src=u.coming.href;(n.complete!==!0||n.width<1)&&u.showLoading()},_loadAjax:function(){var n=u.coming,f=n.href,t,r;t=f.split(/\s+/,2);f=t.shift();r=t.shift();u.showLoading();u.ajaxLoad=i.ajax(i.extend({},n.ajax,{url:n.href,error:function(n,t){u.coming&&t!=="abort"?u._error("ajax",n):u.hideLoading()},success:function(t,f){f==="success"&&(r&&(t=i("<div>").html(t).find(r)),n.content=t,u._afterLoad())}}))},_loadIframe:function(){var n=u.coming,t;if(n.content=t=i(n.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",h?"auto":n.iframe.scrolling),n.iframe.preload){u.showLoading();u._setDimension(n);n.wrap.addClass("fancybox-tmp");t.one("load.fb",function(){n.iframe.preload&&(i(this).data("ready",1),i(this).bind("load.fb",u.update),u._afterLoad())})}t.attr("src",n.href).appendTo(n.inner);n.iframe.preload?t.data("ready")!==1&&u.showLoading():u._afterLoad()},_loadInline:function(){var n=u.coming,t=n.href;n.content=i(c(t)?t.replace(/.*(?=#[^\s]+$)/,""):t);n.content.length?u._afterLoad():u._error()},_preloadImages:function(){for(var r=u.group,i=u.current,f=r.length,e=i.preload?Math.min(i.preload,f-1):0,n,t=1;t<=e;t+=1)n=r[(i.index+t)%f],n&&n.type==="image"&&n.href&&((new Image).src=n.href)},_afterLoad:function(){var n=u.coming,t=u.current;if(s.unbind(".loading"),!n||u.isActive===!1||!1===u.trigger("afterLoad",n,t)){u.hideLoading();n&&n.wrap&&p(n.wrap);t||u._afterZoomOut(n);u.coming=null;return}i.extend(u,{wrap:n.wrap.addClass("fancybox-type-"+n.type+" fancybox-"+(h?"mobile":"desktop")+" fancybox-"+n.theme+"-"+(h?"mobile":"desktop")+" "+n.wrapCSS),inner:n.inner,current:n,previous:t});u._prepare();u.trigger("beforeShow",n,t);u.isOpen=!1;u.coming=null;u._setDimension();u.hideLoading();n.overlay&&!u.overlay.el&&u.overlay.open(n.overlay);u.transitions.open()},_prepare:function(){var n=u.current,t=n.content||"",v=n.wrap,y=n.inner,p=n.margin,s=n.padding,w=n.href,b=n.type,d=n.scrolling,k=n.caption,r=n.title,e=k.type,o="fancybox-placeholder",h="fancybox-display",a;b!=="iframe"&&l(t)&&t.length&&(t.data(o)||t.data(h,t.css("display")).data(o,i('<div class="'+o+'"><\/div>').insertAfter(t).hide()),t=t.show().detach(),n.wrap.bind("onReset",function(){i(this).find(t).length&&t.css("display",t.data(h)).replaceAll(t.data(o)).data(o,!1).data(h,!1)}));b==="swf"&&(t='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+w+'"><\/param>',a="",i.each(n.swf,function(n,i){t+='<param name="'+n+'" value="'+i+'"><\/param>';a+=" "+n+'="'+i+'"'}),t+='<embed src="'+w+'" type="application/x-shockwave-flash" width="100%" height="100%"'+a+"><\/embed><\/object>");l(t)&&t.parent().is(n.inner)||(n.inner.append(t),n.content=n.inner.children(":last"));i.each(["Top","Right","Bottom","Left"],function(n,t){p[n]&&v.css("margin"+t,f(p[n]));s[n]&&(t==="Bottom"&&e==="outside"||v.css("padding"+t,f(s[n])),(e==="outside"||e==="float")&&(y.css("border"+t+"Width",f(s[n])),(t==="Top"||t==="Left")&&y.css("margin"+t,f(s[n]*-1))))});i.isFunction(r)&&(r=r.call(n.element,n));c(r)&&i.trim(r)!==""&&(n.caption.wrap=i('<div class="fancybox-title fancybox-title-'+e+'-wrap">'+r+"<\/div>").appendTo(n[e==="over"?"inner":"wrap"]),e==="float"&&n.caption.wrap.width(u.getViewport().w-(u.wrap.outerWidth(!0)-u.inner.width())).wrapInner("<div><\/div>"))},_setDimension:function(n){var at=u.getViewport(),t=n||u.current,y=t.wrap,o=t.inner,i=t.width,r=t.height,c=t.minWidth,v=t.minHeight,s=t.maxWidth,h=t.maxHeight,ft=t.margin,et=t.scrollOutside?t.scrollbarWidth:0,ft=t.margin,ot=t.padding,st=t.scrolling,yt=1,tt,ht,it,b,k,p,w,d,ct,rt,ut,g,nt,vt,lt;if(st=st.split(","),tt=st[0],ht=st[1]||tt,t.inner.css("overflow-x",tt==="yes"?"scroll":tt==="no"?"hidden":tt).css("overflow-y",ht==="yes"?"scroll":ht==="no"?"hidden":ht),b=ft[1]+ft[3]+ot[1]+ot[3],it=ft[0]+ft[2]+ot[0]+ot[2],c=e(a(c)?e(c,"w")-b:c),s=e(a(s)?e(s,"w")-b:s),v=e(a(v)?e(v,"h")-it:v),h=e(a(h)?e(h,"h")-it:h),k=e(a(i)?e(i,"w")-b:i),p=e(a(r)?e(r,"h")-it:r),t.fitToView&&(s=Math.min(s,e("100%","w")-b),h=Math.min(h,e("100%","h")-it)),rt=at.w,ut=at.h,t.type==="iframe"){if(d=t.content,y.removeClass("fancybox-tmp"),(t.autoWidth||t.autoHeight)&&d&&d.data("ready")===1)try{d[0].contentWindow&&d[0].contentWindow.document.location&&(ct=d.contents().find("body"),o.addClass("fancybox-tmp"),o.width(screen.width-b).height(99999),et&&ct.css("overflow-x","hidden"),t.autoWidth&&(k=ct.outerWidth(!0)),t.autoHeight&&(p=ct.outerHeight(!0)),o.removeClass("fancybox-tmp"))}catch(pt){}}else!(t.autoWidth||t.autoHeight)||t.type==="image"||t.type==="swf"||(o.addClass("fancybox-tmp"),t.autoWidth?o.width("auto"):o.width(s),t.autoHeight?o.height("auto"):o.height(h),t.autoWidth&&(k=o[0].scrollWidth||o.width()),t.autoHeight&&(p=o[0].scrollHeight||o.height()),o.removeClass("fancybox-tmp"));if(i=k,r=p,w=k/p,!t.autoResize){y.css({width:f(i),height:"auto"});o.css({width:f(i),height:f(r)});return}if(t.aspectRatio?(i>s&&(i=s,r=i/w),r>h&&(r=h,i=r*w),i<c&&(i=c,r=i/w),r<v&&(r=v,i=r*w)):(i=Math.max(c,Math.min(i,s)),t.autoHeight&&t.type!=="iframe"&&(o.width(i),p=r=o[0].scrollHeight),r=Math.max(v,Math.min(r,h))),y.css({width:f(i),height:"auto"}),o.css({width:f(i),height:f(r)}),g=e(y.outerWidth(!0)),nt=e(y.outerHeight(!0)),t.fitToView)if(t.aspectRatio)while((g>rt||nt>ut)&&i>c&&r>v){if(yt++>30)break;r=Math.max(v,Math.min(h,r-10));i=e(r*w);i<c&&(i=c,r=e(i/w));i>s&&(i=s,r=e(i/w));y.css({width:f(i)});o.css({width:f(i),height:f(r)});g=e(y.outerWidth(!0));nt=e(y.outerHeight(!0))}else i=Math.max(c,Math.min(i,i-(g-rt))),r=Math.max(v,Math.min(r,r-(nt-ut)));et&&tt==="auto"&&(r<o[0].scrollHeight||l(t.content)&&t.content[0]&&r<t.content[0].offsetHeight)&&i+b+et<s&&(i+=et);y.css({width:i});o.css({width:f(i),height:f(r)});g=e(y.outerWidth(!0));nt=e(y.outerHeight(!0));vt=(g>rt||nt>ut)&&i>c&&r>v;lt=(g<rt||nt<ut)&&(t.aspectRatio?i<s&&r<h&&i<k&&r<p:(i<s||r<h)&&(i<k||r<p));t.canShrink=vt;t.canExpand=lt;!d&&t.autoHeight&&r>v&&r<h&&!lt&&o.height("auto")},_getPosition:function(n){var r=n||u.current,t=r.wrap,i=u.getViewport(),e=i.y,o=i.x;return{top:f(Math.max(e,e+(i.h-t.outerHeight(!0))*r.topRatio)),left:f(Math.max(o,o+(i.w-t.outerWidth(!0))*r.leftRatio)),width:f(t.width()),height:f(t.height())}},_afterZoomIn:function(){var n=u.current;n&&(u.lock&&u.lock.css("overflow","auto"),u.isOpen=u.isOpened=!0,u.rebuild(),u.rebind(),n.caption&&n.caption.wrap&&n.caption.wrap.show().css({visibility:"visible",opacity:0,left:0}).animate({opacity:1},"fast"),u.update(),u.wrap.css("overflow","visible").addClass("fancybox-open").focus(),u[u.wrap.hasClass("fancybox-skin")?"wrap":"inner"].addClass("fancybox-"+n.theme+"-skin-open"),n.caption&&n.caption.wrap&&n.caption.wrap.show().css("left",0).animate({opacity:1},"fast"),n.margin[2]>0&&i('<div class="fancybox-spacer"><\/div>').css("height",f(n.margin[2]-2)).appendTo(u.wrap),u.trigger("afterShow"),u._preloadImages(),n.autoPlay&&!u.slideshow.isActive&&u.slideshow.start())},_afterZoomOut:function(n){var t=function(){p(".fancybox-wrap")};u.hideLoading();n=n||u.current;n&&n.wrap&&n.wrap.hide();i.extend(u,{group:[],opts:{},coming:null,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,inner:null});u.trigger("afterClose",n);u.coming||u.current||(n.overlay?u.overlay.close(n.overlay,t):t())},_translate:function(n){var t=u.coming||u.current,i=t.locales[t.locale];return n.replace(/\{\{(\w+)\}\}/g,function(n,t){var u=i[t];return u===r?n:u})}});u.transitions={_getOrig:function(n){var i=n||u.current,e=i.wrap,s=i.element,t=i.orig,h=u.getViewport(),r={},c=50,a=50;return!t&&s&&s.is(":visible")&&(t=s.find("img:first:visible"),t.length||(t=s)),!t&&i.group[0].element&&(t=i.group[0].element.find("img:visible:first")),l(t)&&t.is(":visible")?(r=t.offset(),t.is("img")&&(c=t.outerWidth(),a=t.outerHeight()),u.lock&&(r.top-=o.scrollTop(),r.left-=o.scrollLeft())):(r.top=h.y+(h.h-a)*i.topRatio,r.left=h.x+(h.w-c)*i.leftRatio),{top:f(r.top-(e.outerHeight(!0)-e.height())*.5),left:f(r.left-(e.outerWidth(!0)-e.width())*.5),width:f(c),height:f(a)}},_getCenter:function(n){var r=n||u.current,t=r.wrap,i=u.getViewport(),e=i.y,o=i.x;return{top:f(Math.max(e,e+(i.h-t.outerHeight(!0))*r.topRatio)),left:f(Math.max(o,o+(i.w-t.outerWidth(!0))*r.leftRatio)),width:f(t.width()),height:f(t.height())}},_prepare:function(n,t){var f=n||u.current,i=f.wrap,r=f.inner;i.height(i.height());r.css({width:r.width()*100/i.width()+"%",height:Math.floor(r.height()*100/i.height()*100)/100+"%"});t===!0&&i.find(".fancybox-title, .fancybox-spacer, .fancybox-close, .fancybox-nav").remove();r.css("overflow","hidden")},fade:function(n,t){var u=this._getCenter(n),r={opacity:0};return t==="open"||t==="changeIn"?[i.extend(u,r),{opacity:1}]:[{},r]},drop:function(n,t){var r=i.extend(this._getCenter(n),{opacity:1}),o=i.extend({},r,{opacity:0,top:f(Math.max(u.getViewport().y-n.margin[0],e(r.top)-200))});return t==="open"||t==="changeIn"?[o,r]:[{},o]},elastic:function(n,t){var c=n.wrap,s=n.margin,f=u.getViewport(),o=u.direction,y=this._getCenter(n),h=i.extend({},y),l=i.extend({},y),a,v,r;return t==="open"?h=this._getOrig(n):t==="close"?(h={},l=this._getOrig(n)):o&&(a=o==="up"||o==="down"?"top":"left",v=o==="up"||o==="left"?200:-200,t==="changeIn"?(r=e(h[a])+v,r=o==="left"?Math.min(r,f.x+f.w-s[3]-c.outerWidth()-1):o==="right"?Math.max(r,f.x-s[1]):o==="up"?Math.min(r,f.y+f.h-s[0]-c.outerHeight()-1):Math.max(r,f.y-s[2]),h[a]=r):(r=e(c.css(a))-v,h={},r=o==="left"?Math.max(r,f.x-s[3]):o==="right"?Math.min(r,f.x+f.w-s[1]-c.outerWidth()-1):o==="up"?Math.max(r,f.y-s[0]):Math.min(r,f.y+f.h-s[2]-c.outerHeight()-1),l[a]=r)),t==="open"||t==="changeIn"?(h.opacity=0,l.opacity=1):l.opacity=0,[h,l]},open:function(){var t=u.current,n=u.previous,h=u.direction,r,f,e,o,s;n&&n.wrap.stop(!0).removeClass("fancybox-opened");u.isOpened?(r=t.nextEffect,e=t.nextSpeed,o=t.nextEasing,s="changeIn"):(r=t.openEffect,e=t.openSpeed,o=t.openEasing,s="open");r==="none"?u._afterZoomIn():(f=this[r](t,s),r==="elastic"&&this._prepare(t),t.wrap.css(f[0]),t.wrap.animate(f[1],e,o,u._afterZoomIn));n&&(u.isOpened&&n.prevEffect!=="none"?(n.wrap.stop(!0).removeClass("fancybox-opened"),f=this[n.prevEffect](n,"changeOut"),this._prepare(n,!0),n.wrap.animate(f[1],n.prevSpeed,n.prevEasing,function(){p(n.wrap)})):p(i(".fancybox-wrap").not(t.wrap)))},close:function(){var n=u.current,r=n.wrap.stop(!0).removeClass("fancybox-opened"),t=n.closeEffect,i;if(t==="none")return u._afterZoomOut();this._prepare(n,!0);i=this[t](n,"close");r.addClass("fancybox-animating").animate(i[1],n.closeSpeed,n.closeEasing,u._afterZoomOut)}};u.slideshow={_clear:function(){this._timer&&clearTimeout(this._timer)},_set:function(){this._clear();u.current&&this.isActive&&(this._timer=setTimeout(u.next,this._speed))},_timer:null,_speed:null,isActive:!1,start:function(n){var t=u.current;t&&(t.loop||t.index<t.group.length-1)&&(this.stop(),this.isActive=!0,this._speed=n||t.playSpeed,s.bind({"beforeLoad.player":i.proxy(this._clear,this),"onUpdate.player":i.proxy(this._set,this),"onCancel.player beforeClose.player":i.proxy(this.stop,this)}),this._set(),u.trigger("onPlayStart"))},stop:function(){this._clear();s.unbind(".player");this.isActive=!1;this._timer=this._speed=null;u.trigger("onPlayEnd")},toggle:function(){this.isActive?this.stop():this.start.apply(this,arguments)}};u.overlay={el:null,theme:"",open:function(n){var s=this,t=this.el,e=u.defaults.fixed,f,r;n=i.extend({},u.defaults.overlay,n);t?t.stop(!0).removeAttr("style").unbind(".overlay"):t=i('<div class="fancybox-overlay'+(e?" fancybox-overlay-fixed":"")+'"><\/div>').appendTo(n.parent||"body");n.closeClick&&t.bind("click.overlay",function(){return u.lastTouch&&y()-u.lastTouch<300?!1:(u.isActive?u.close():s.close(),!1)});r=n.theme||(u.coming?u.coming.theme:"default");r!==this.theme&&t.removeClass("fancybox-"+this.theme+"-overlay");this.theme=r;t.addClass("fancybox-"+r+"-overlay").css(n.css);f=t.css("opacity");!this.el&&f<1&&n.speedIn&&t.css({opacity:0,filter:"alpha(opacity=0)"}).fadeTo(n.speedIn,f);this.el=t;e||(o.bind("resize.overlay",i.proxy(this.update,this)),this.update())},close:function(n,t){n=i.extend({},u.defaults.overlay,n);this.el&&this.el.stop(!0).fadeOut(n.speedOut,function(){o.unbind("resize.overlay");i(".fancybox-overlay").remove();u.overlay.el=null;i.isFunction(t)&&t()})},update:function(){this.el.css({width:"100%",height:"100%"});this.el.width(s.width()).height(s.height())}};u.touch={startX:0,wrapX:0,dx:0,isMoving:!1,_start:function(n){var f=u.current,r=n.originalEvent.touches?n.originalEvent.touches[0]:n,t=y();if(u.isOpen&&!u.wrap.is(":animated")&&(i(n.target).is(u.inner)||i(n.target).parent().is(u.inner))){if(u.lastTouch&&t-u.lastTouch<300)return n.preventDefault(),u.lastTouch=t,this._cancel(!0),u.toggle(),!1;if((u.lastTouch=t,!u.wrap||!(u.wrap.outerWidth()>u.getViewport().w))&&(n.preventDefault(),r&&u.wrap&&u.wrap.outerWidth()<u.getViewport().w)){this.startX=r.pageX;this.wrapX=u.wrap.position().left;this.isMoving=!0;u.inner.bind("touchmove.fb",i.proxy(this._move,this)).one("touchend.fb touchcancel.fb",i.proxy(this._cancel,this))}}},_move:function(n){var i=n.originalEvent.touches?n.originalEvent.touches[0]:n,t=this.startX-i.pageX;this.isMoving&&u.isOpen&&(this.dx=t,u.current.wrap.outerWidth(!0)<=o.width()&&(Math.abs(t)>=50?(n.preventDefault(),this.last=0,this._cancel(!0),t>0?u.next("left"):u.prev("right")):Math.abs(t)>3&&(n.preventDefault(),this.last=0,u.wrap.css("left",this.wrapX-t))))},_clear:function(){this.startX=this.wrapX=this.dx=0;this.isMoving=!1},_cancel:function(){u.inner&&u.inner.unbind("touchmove.fb");u.isOpen&&Math.abs(this.dx)>3&&u.reposition(!1);this._clear()},init:function(){var n=this;u.inner&&u.touch&&(this._cancel(!0),u.inner.bind("touchstart.fb",i.proxy(this._start,this)))}};i.easing.easeOutQuad||(i.easing.easeOutQuad=function(n,t,i,r,u){return-r*(t/=u)*(t-2)+i});s.ready(function(){var t,f,e,s;i.scrollbarWidth===r&&(i.scrollbarWidth=function(){var n=i('<div style="width:50px;height:50px;overflow:auto"><div/><\/div>').appendTo("body"),t=n.children(),r=t.innerWidth()-t.height(99).innerWidth();return n.remove(),r});i.support.fixedPosition===r&&(i.support.fixedPosition=function(){var n=i('<div style="position:fixed;top:20px;padding:0;margin:0;border:0;"><\/div>').appendTo("body"),t=n.css("position")==="fixed"&&(n[0].offsetTop>18&&n[0].offsetTop<22||n[0].offsetTop===15);return n.remove(),t}());i.extend(u.defaults,{scrollbarWidth:i.scrollbarWidth(),fixed:i.support.fixedPosition,parent:i("body")});e=o.scrollTop();s=o.scrollLeft();t=i(n).width();v.addClass("fancybox-lock-test");f=i(n).width();v.removeClass("fancybox-lock-test");o.scrollTop(e).scrollLeft(s);u.lockMargin=f-t;i("<style type='text/css'>.fancybox-margin{margin-right:"+u.lockMargin+"px;}<\/style>").appendTo("head")});i.fn.fancybox=function(n){var r=this,t=this.length?this.selector:!1,f=t&&t.indexOf("()")<0&&!(n&&n.live===!1),e=function(e){var l=f?i(t):r,o=i(this).blur(),h=n.groupAttr||"data-fancybox-group",s=o.attr(h),c=this.rel;!s&&c&&c!=="nofollow"&&(h="rel",s=c);s&&(o=l.filter("["+h+'="'+s+'"]'),n.index=o.index(this));o.length&&(e.preventDefault(),u.open(o.get(),n))};return n=n||{},f?s.undelegate(t,"click.fb-start").delegate(t+":not('.fancybox-close,.fancybox-nav,.fancybox-wrap')","click.fb-start",e):r.unbind("click.fb-start").bind("click.fb-start",e),this}})(window,document,jQuery),function(n,t,i,r){var u="beforeAfter",e={beforeImgClass:".panel-before img",afterImgClass:".panel-after img",initPosition:.5,animateSpeed:500,allowFullWidth:!1,onReady:null,onResize:null},f=function(t,i){var r=this;return r.element=t,r.settings=n.extend({},e,i),r.init(),r},o=function(t,i){var u=n(t).find("img").length,r;u>0?(r=0,n(t).find("img").one("load error",function(){r++;r==u&&i()}).each(function(){this.complete&&n(this).load()})):i()};f.prototype={init:function(){var n=this;typeof n.isInit=="undefined"&&(o(n.element,function(){n._createWrapper()}),n.isInit=!0)},_createWrapper:function(){var f=this,u=n(f.element),l=u.find(f.settings.beforeImgClass),s=u.find(f.settings.afterImgClass),e=u.parent(),y="ontouchstart"in i.documentElement,p="onorientationchange"in t,o=u.width(),a=f.settings.initPosition,v=0,h;percent=u.attr("position-percent");f.settings.allowFullWidth&&(o=u.outerWidth());e&&(e.attr("id")=="divfirst"||e.attr("id")=="divend")&&(e=e.parent());e&&o>e.width()&&(f.settings.allowFullWidth?(v=(e.outerWidth()-e.width())/2,u.css({width:e.outerWidth(),"margin-left":"-"+v+"px"}),o=e.outerWidth()):(u.width(e.width()),o=e.width()));f.parentEl=e;f.wrapperW=o;var w=s.width(),b=o/w,c=s.height()*b;if(percent!=r&&percent!=null&&(a=o*(percent>1?parseFloat(percent)/100:parseFloat(percent))),u.find(".panel-before").length>0?u.find(".panel-before").remove():l.remove(),u.find(".panel-after").length>0?u.find(".panel-after").remove():s.remove(),u.prepend('<div class="before-after-wrapper" style="overflow:hidden;position: relative;padding:0;user-select: none;-webkit-user-select: none;-moz-user-select: none;width:'+o+"px;height:"+c+'px;"><div class="after" style="background-image:url('+s.attr("src")+');background-size:100% 100%;width:100%;height:100%;"><\/div><div class="before" style="background-image:url('+l.attr("src")+");background-size:"+o+"px "+c+"px;width:"+a+"px;height:"+c+'px;"><\/div><\/div><div class="btn_after_before"><input class="btn_before" type="button"/><input class="btn_after" type="button"/><\/div>'),u.find(".btn_before").unbind("click").bind("click",function(){f.showFullBeforeImg()}),u.find(".btn_after").unbind("click").bind("click",function(){f.showFullAfterImg()}),y&&(h=!1,u.find(".before-after-wrapper").unbind("touchmove").bind("touchmove",function(n){var i=n.touches?n.touches[0].clientX:n.originalEvent.touches[0].clientX,t;h&&(n.preventDefault(),t=i-u.offset().left,t>=0&&t<=f.wrapperW&&u.find("div.before").width(t))}),u.find(".before-after-wrapper").unbind("touchstart").bind("touchstart",function(n){var r=n.touches?n.touches[0].clientX:n.originalEvent.touches[0].clientX,t=r-u.offset().left,i=u.find("div.before").width();t>i-30&&t<i+30&&(h=!0)}),u.find(".before-after-wrapper").unbind("touchend").bind("touchend",function(){h=!1})),u.find(".before-after-wrapper").unbind("mousemove").bind("mousemove",function(n){var i=n.clientX,t=i-u.offset().left;t>=0&&t<=f.wrapperW&&u.find("div.before").width(t)}),p)n(t).on("orientationchange",function(n){f._handlerResize(n)});else n(t).on("resize",function(n){f._handlerResize(n)});typeof f.settings.onReady=="function"&&f.settings.onReady.call(this)},showFullBeforeImg:function(){var t=this;n(t.element).find("div.before").animate({width:0},t.settings.animateSpeed)},showFullAfterImg:function(){var t=this;n(t.element).find("div.before").animate({width:n(t.element).find("div.after").width()},t.settings.animateSpeed)},_handlerResize:function(t){var i=this;i.timerResize&&clearTimeout(i.timerResize);i.timerResize=setTimeout(function(){var r=n(i.element),u=i.parentEl?i.settings.allowFullWidth?i.parentEl.outerWidth():i.parentEl.width():r.width();var e=r.find(".before-after-wrapper").width(),s=r.find("div.before").width(),o=u/e,f=Math.round(r.find("div.after").height()*o),h=""+u+"px "+f+"px";if(u!=e&&(r.width(u),r.find("div.before-after-wrapper").css({width:u,height:f}),r.find("div.before").css({width:s*o,height:f,"background-size":h}),i.wrapperW=u),typeof i.settings.onResize=="function")i.settings.onResize(t)},100)}};n.fn[u]=function(t){return t===r||typeof t=="object"?this.each(function(){var i=n.data(this,"plugin_"+u);i&&i instanceof f?i.init():n.data(this,"plugin_"+u,new f(this,t))}):typeof t!="string"||t[0]==="_"||t==="init"?!0:void 0}}(jQuery,window,document);spnBeforeAfter={init:function(){var n=600;$(".before-after:not(.done-before-after)").each(function(){var i=$(this).attr("w"),t=$(this).attr("h");t=parseInt(n*t/i);i=n;$(this).height(t+25+"px");$(this).beforeAfter({animateIntro:!0,introDuration:100,linkDisplaySpeed:500,introPosition:parseFloat($(this).attr("position-percent"))/100,initPosition:parseFloat($(this).attr("position-percent"))/100,showFullLinks:!0,title:decodeURIComponent($(this).attr("title")),cursor:"e-resize",enableKeyboard:!0,beforeDate:$(this).attr("before-date"),afterDate:$(this).attr("after-date"),imageWidth:i,imageHeight:t});$(this).addClass("done-before-after")})}},function(n,t){var i=function(n,t,i){var r;return function(){function e(){i||n.apply(u,f);r=null}var u=this,f=arguments;r?clearTimeout(r):i&&n.apply(u,f);r=setTimeout(e,t||100)}};jQuery.fn[t]=function(n){return n?this.bind("resize",i(n)):this.trigger(t)}}(jQuery,"smartresize");$(function(){var n,t;initLightBox();beforeAfter(".before-after");n=$(".before-after.skin2");n.length>0&&window.addEventListener("orientationchange",function(){setTimeout(function(){n.each(function(){var n=$(this),t=parseFloat(n.attr("w")),i=parseFloat(n.attr("h")),r=parseInt(n.width()),u=r*i/t;$(this).find(".flipper").css("height",u+"px")})},100)},!1);initMagazineObj();$('.entry-body [type="link-content-footer"]:first a:first, .entry-body .link-content-footer a:first').prepend('<i class="ico-focus-4"/>');$('.VCSortableInPreviewMode[type="LayoutAlbum"]').addClass("LastestLayoutAlbum");SmartAlbumLayout();t=null;$(window).on("resize",function(){$(".VCSortableInPreviewMode[type=Photo]").attr("style","");$(".VCSortableInPreviewMode[type=LayoutAlbum]").attr("style","");clearTimeout(t);t=setTimeout(function(){$('.VCSortableInPreviewMode[type="LayoutAlbum"]').addClass("LastestLayoutAlbum");SmartAlbumLayout()},300)});$(".VCSortableInPreviewMode[type=BeforeAfter]").each(function(){var n=$(this).find(".spdc-img-wrapper").css("width");$(this).find(".PhotoCMS_Caption").css("width",n).css("margin","auto")});$(".PhotoCMS_Caption").each(function(){($(this).html()==""||$(this).text()=="")&&$(this).remove()});$(".VCSortableInPreviewMode[type=content]").each(function(){var t=$(this).attr("w"),i=$(this).attr("h"),r=$(this).attr("data-back"),u=$(this).attr("data-border"),n=$(this).attr("data-text-color");$(this).css({width:t,height:i,background:r,"border-color":u,color:n,"margin-bottom":"20px"}).find("p").css("color",n)})});$(document).ready(function(){for(var n,i=$(".VCSortableInPreviewMode[border-left-color],.VCSortableInPreviewMode[border-right-color],.VCSortableInPreviewMode[border-top-color],.VCSortableInPreviewMode[border-bottom-color]"),t=0;t<i.length;t++)i[t]&&(n=$(i[t]),n.length)&&(n.attr("border-left-color")&&n.find(".border-left").css("border-left-color",n.attr("border-left-color")),n.attr("border-right-color")&&n.find(".border-right").css("border-right-color",n.attr("border-right-color")),n.attr("border-top-color")&&n.find(".border-top").css("border-top-color",n.attr("border-top-color")),n.attr("border-bottom-color")&&n.find(".border-bottom").css("border-bottom-color",n.attr("border-bottom-color")))});$(document).ready(function(){$("[data-tweet-id], blockquote.twitter-tweet").length&&$.getScript("https://platform.twitter.com/widgets.js",function(){try{$("[data-tweet-id]").each(function(){var n=$(this);if(n.attr("data-tweet-id"))try{window.twttr.widgets.createTweet(n.attr("data-tweet-id"),n[0],{align:"center","link-color":"#a20000",lang:"vi"})}catch(t){console.error("[VCC] Unable to initialize tweet_id: "+n.attr("data-tweet-id"));console.error(t)}});twttr.widgets.load()}catch(n){console.error("[VCC] Unable to initialize twitter embed posts")}})});$(document).ready(function(){var t=function(n,t){if(n=n.toLowerCase(),n=="close"){$("#cmt-account .close").click();return}$("#cmt-account").show();$("#cmt-account input[type='password']").val("");$("#cmt-account [data-target='"+n+"']").click().addClass("active");$("body").css("overflow","hidden");$("#nav").removeClass("active");setTimeout(function(){$("#cmt_alert").html(t||"")},200)},i=function(n){if(n.origin!="local.s.thethaovanhoa.vn",n.data&&n.data.act)switch(n.data.act){case"popup":t(n.data.id,n.data.alert);break;case"resize":$('[data-comment-id="'+n.data.id+'"]').css("height",n.data.height+10+"px")}},n;window.addEventListener("message",i,!1);n=function(){$("#_img_captcha").attr("src",appSettings.ajaxDomain+"/captcha.htm?"+(new Date).getTime())};$("#cmt-account [data-target]").on("click",function(){$("#cmt-account [data-target], #cmt-account [data-tab]").removeClass("active");$(this).addClass("active");var t=$("#cmt-account [data-tab='"+$(this).attr("data-target")+"']");t.addClass("active").find("input[type='text'], input[type='email']").first().focus();t.find("input").keyup(function(n){n.keyCode===13&&t.find(".btn.clickable").click()});$("#cmt_alert").html("");n()});$("#cmt-account [data-target]:first-child").click();$("#cmt-account .close").on("click",function(){$("#cmt-account").hide();$("body").removeAttr("style");n();$("#cmt_alert").html("")});$("#_reload_captcha").on("click",function(){n()});$("#_btn_login").on("click",function(){$("#cmt_alert").html("");var n,t;if(n=$("#_login_email").val(),t=$("#_login_password").val(),!/^[a-z0-9-_\.]+[@][0-9a-z-]+(\.[0-9a-z-]+)+$/ig.test(n)||t.length<8){$("#cmt_alert").html("Email hoặc mật khẩu không đúng!");return}$("#comment-frame")[0].contentWindow.postMessage({act:"cmlogin",info:{email:n,password:t}},"*")});$("#_btn_sign").on("click",function(){$("#cmt_alert").html("");var t,i,n,u,r;if(t=$("#_sign_email").val(),i=$("#_sign_name").val(),n=$("#_sign_password").val(),u=$("#_sign_repassword").val(),r=$("#_sign_captcha").val(),!/^[a-z0-9-_\.]+[@][0-9a-z-]+(\.[0-9a-z-]+)+$/ig.test(t)){$("#cmt_alert").html("Email không hợp lệ");return}if(n.length<8||n!=u){$("#cmt_alert").html("Mật khẩu phải có ít nhất 8 ký tự, chứa ít nhất 1 chữ số và 1 chữ cái");return}if(!(/[a-z]/ig.test(n)&&/[0-9]/ig.test(n))){$("#cmt_alert").html("Mật khẩu phải chứa ít nhất 1 chữ số và 1 chữ cái");return}if(i.length<=0){$("#cmt_alert").html("Vui lòng nhập họ tên của bạn!");return}if(r.length<=0){$("#cmt_alert").html("Vui lòng điền mã xác nhận trong ảnh!");return}$("#comment-frame")[0].contentWindow.postMessage({act:"cmsignup",info:{email:t,password:n,name:i,captcha:r}},"*")})});window._cnnd||(window._cnnd={});window._cnnd.globalinit=function(){function y(n){var t=new Date(n),i=t.getDay(),n=t.getDate(),r=t.getMonth()+1,u=t.getFullYear();return["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"][i]+", ngày "+n+" tháng "+r+" năm "+u}var t,n,i,u,f,e,o,s,r,h,a,c,v,l;for(window._cnnd.navBar=$("#nav"),u=$("[data-bg]"),t=0;t<u.length;t++){if(n=$(u[t]),!n.attr("data-bg")){n.hide();continue}n.css("background-image","url('"+n.attr("data-bg")+"')").delay(500).addClass("active")}for(f=$("[data-width]:not([data-width=''])"),t=0;t<f.length;t++)(n=$(f[t]),n.closest(".entry-body,.k14-sp-wrapper,.main-content-body,.live-zone").length>0)||(i=n.attr("data-width"),/^[0-9]+$/ig.test(i)?n.css("width",i+"px"):(/^[0-9]+px$/ig.test(i)||/^[0-9-.]+[%]$/ig.test(i))&&n.css("width",i.replace("w","")));for(e=$("[data-copy]:not([data-copy=''])"),t=0;t<e.length;t++)(n=$(e[t]),o=n.attr("data-copy"),o.length<=0)||n.html($(o).html());for(s=$("[data-scroll]:not([data-scroll=''])"),t=0;t<s.length;t++)n=$(s[t]),r={height:n.attr("data-scroll"),alwaysVisible:!0},n.attr("data-scroll-width")&&(r.width=n.attr("data-scroll-width")),n.attr("data-scroll-thumb")&&(r.color=n.attr("data-scroll-thumb")),n.attr("data-scroll-track")&&(r.railColor=n.attr("data-scroll-track")),n.attr("data-scroll-size")&&(r.size=n.attr("data-scroll-size")),n.slimScroll(r);for($(".need-get-timeago").timeago(),typeof relatedNews!="undefined"&&relatedNews.initTimelinePoppup(),h=$("[data-action]"),a=function(n,t){return function(){t&&$(t).attr("data-disabled")||eval(n)}},t=0;t<h.length;t++){n=$(h[t]);n.removeAttr("href");n.on(n.attr("data-action-trigger")||"click",a(n.attr("data-action")||"",n[0]))}for(c=$("[data-href]"),v=function(n,t,i){return function(){i&&$(i).attr("data-disabled")||window.open(n,t)}},t=0;t<c.length;t++)if(n=$(c[t]),n[0].className.toLowerCase()==="a")n.attr("href",n.attr("data-href"));else{n.addClass("clickable");n.on("click",v(n.attr("data-href")||"#",n.attr("data-href-target")||"_self",n[0]))}for(l=$("[data-trimline]:not([data-disabled])"),t=0;t<l.length;t++)n=$(l[t]),/^[0-9]+$/ig.test(n.attr("data-trimline"))&&n.trimLineNew(n.attr("data-trimline"));window._cnnd.slideshow&&window._cnnd.slideshow.init();$("#__back2top").on("click",function(){window.scroll({top:0,left:0,behavior:"smooth"})});$(".datetimenow").text(y(new Date));swipeSlide.container=".hlist-slide";swipeSlide.effect="slide";swipeSlide.init()};swipeSlide={container:".swiper-container",effect:"slide",speed:500,delay:1e4,loop:!0,init:function(){var n=this,t=new Swiper(n.container,{spaceBetween:0,effect:n.effect,speed:n.speed,autoplay:{delay:n.delay},loop:n.loop,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".right",prevEl:".left"}})}};window._cnnd.weatherinit=function(){var t=$("#_weather");if(t&&t.length){typeof localStorage!="undefined"&&localStorage&&localStorage.removeItem("cnnd_weather_data");var n={"default":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACC0lEQVRIS+2VT6hMURzHv78jT5ZIk1jI6mHB21hYMCRloZBkQepF9/zuLZmysxk2dnpeXb97zYgFC1cWysaKlIUUj1K8kuVDvclyMjPnp6M7Nc2bv4+s3tmcxTnn+7l9f/f7+xGGrDRNV6vqDlVdYOYfw+53n9OgB3Ec7zbGPAawzd9T1RvMfJmIdFRQX4D/cufcJwC/iOg6gClVvaSq02EY3v1rgIhMAXgL4AwzP1BVSpJkHsBHZj72LwBFAM8BHGDmF15QRP7szFwUkYMA9nWA1BhzPwiCL53wvhaJyDDAPQDnOsV62bdswIpFvqADa7Bi0X+xaBrAnR5B22+tNaP2o545SNN00jnn28SEqu4Mw/BznuRbPsg+1MwcjlLoJYC857wBsNU5dyiKorm2ULlcNoVCIQVwHsBRZn46DLIEEMfxXmPMK1U9FYbho26BHPIegJ8Ph8cGiMhFADfr9fq6Uqn0s5eAiMwAOMvMG5YDuADgtnNuUxRF3/oAktyizWMDkiTZpapzRHTaWvuwWyDLslWLi4sfiGjeWnt8bEDu8TMAk8aYPUEQLLRF/A8gIleI6BoRFa21L8cG+AeVSmVLs9l8DWAtgFkieuec20hEJwAcAXCVmcvDxP1533lQrVbXNxqNWQAnAazJh/5XY0zJWvtkFPGBgLZAlmUTtVpte6vV+t6v6INgvwH0RTwoUR+gegAAAABJRU5ErkJggg==",cloud:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADPklEQVRIS82VX2gcVRjFz3fvZJ1qQdhdQX1oq1bFVqHFB0EJqVhUKlipZRF8qDFm987EBiyUFn3IFKoVg3+ajHMnWcU+CH0IWBHBB31QsQhKWhCxFIu0IJtsotJaMdKkc+SWpmySNRsIAe/rnXt+33fu/c4IVnjJCuvj/wUYGhoqZll2e5Zlf0xOTp6NomimlQNL6iBJkg4ROQCgo0HwNxFJReRQpVL5+79ALQFpmu4meZjkzyIyLCKnANxI8jEAzwL4yfO8R7u7u+vNIAsASZLcrZR6E8BDJC8AWANgxPf9XZ2dnf9EUaSKxeI9WutNANoBPKeUGh0bG2uPoiibD5kDcOIARkWkBuBTkncppbYBOGKMed5au0VE3ibpxOevapZle3p6ev5q3JgDSNN0VnTTrK9JkrwgIlWS74pID4CTInJQa31yamrqd631vSKyBcDLIuJs2h4EwY+zkDkAa+15EfkAgBN0/rqO3AVuBXALybcmJib2NrOiWq3eNjMz8zEAz/f9+52dDjIf8CuAiwDWA9AAfiF5s1LKJ/lZvV7f3kx8tto0TTeQPEFyMAzDvQsAVy16nOSrJPudn3Ec79JaHxGRB40x37Z699badwB0K6VucjZf6yBJknYR+YrknjAM3UdXlrW21/lqjNkqIlwC4BkAR0Wkwxjz9TWAtXYEwAP1en3dYjYsAbAZgLOpFIbhSCPgDIAfgiDY0Upksf00TXeSdMU+HATBl40WnQZwOgzDJ5cJeJ3kS7lcrtjV1XWxsYMPATxSKBTWlkqlS42QNE3dsN1pjDm8GDyO47VaazcDR4MgKM95RdZa5913JF8Lw7CvUchaux/AIQD7jDH9zS47juOC1vojAOump6fv6+3t/bPZHLwC4CDJ9z3Pe6NWq53J5/Orfd/flmXZeyRvAHBMRPrHx8e/7+vruzw8POzi26WsK0ArpZ6qVCrfNJ1kkmKt7XJ5A2A1gCkAq65UInKc5BcAXgRQAOCCzU3r9VfFPvE8rzw/VZvG9eDg4K1tbW1Pk7wDwDkRGc3n88dLpdLlgYGB63K53BMkNwIokqxprT8vl8suoxbMScv/wXJe1II7WK5Ys/Mr3sG/gQtiKAZQ9tQAAAAASUVORK5CYII=",windy:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACO0lEQVRIS7WVz4vTUBDHv/NK3XYPom1FFwQVV9CTF0EF2f9A8OAGD/44iCQvCELVgyBYYUFRFiFu8l7soiJ4sCdB8CgeFAR/gCeFvYmi0KJ4cEttk5FAD+lq0rTu5pZk5vuZfGcmj7DGF2XRd113ixBihoimgiB43Ww2X9VqtTBL7lCA1tpi5nkAkzHB50KIU6ZpfhoGSQV4njdLRA0iconoFoBWEASH+vc/SqXSfsMwfqdBEgHMTFrrLwBeSiln4yJa673M/I6ZZafTaRQKhdPM/DOXy70wTfNjPDYR4LrutBBiiYiOWZb1aGWVSqkPAN4y80Miehp777Xb7QvVarUdPUsE+L4/FYbhvBDivGmaX5MAUsrjjuNMFIvFDd1u9ygR3SSiu5ZlnU0FpPkat8i27TvxWKVUJHxbCLEnsmvoFMWTHcdZn8/nZwAsAPheLpcPrGxyvV7f3Ov1vjHzGdu2FwcASqklANPDRg9A4pgOA5wAsDMBsJGINgVBsJC2aP9lUdqX9SuPxvnGX03WWp9k5nsARAZ7UkOiJVxeXr44MKZKqe0AInty4wCYeQcRNYUQi5kXbRzQv3IGpsj3/d1hGL4HsC4LgIh+hWF4vVKpXDMMI8gCmGTmc8w8kQGwjZl3EdFBZr5i2/bcUEAGUSil7gN4IKV8FsUrpR4D2Cel3LpagM8A3kgpj6wJwPO8y0R0FcCTfsWHV9WiRqORa7Val4jIigDMrDM3OUsPRo0Z6W86qvjY58EooD9IKgooPvt6iQAAAABJRU5ErkJggg==",thunder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADEElEQVRIS6WVT4gURxTGv6/GHUmauJeFGSMSQyQBc5BAViFCPHrxFHEPEcbIil3Vs2xYISEoaq8gRs2CDNtT3eQSFQ8O0eQSRYX8uQiiB0kI3mRzSdg/kIisLkLXk5YZ6R3XnTbWtV99v/devf4e8T9OkiT9aZquFxGVpunU6Ojo7Itk+DL6cRxvEJFTALYBKOXu3iJ50vf9iyQlr1kYYK09BOAIgH8AnCH5J4D7IrIewC4AmwC0lFJ7fN9/2IEsCWg0GqvK5fJmAP0ApgBsEZHTACaUUofzAplQGIaqUqkEAE6KyJWZmZmdYRi67NsiQJIkfc65rwAcBLCyk4WIgKTVWte7W5BvR7PZ3EcyAVAzxpxbBGg0Giv7+vp+BrBZRJokrznnppVSEwA+8DyvWqvV5pd7MxFhHMe/AHhTa/1elsyzCqy1JwB8rpTa6vv+zY6QtfY/AOeNMfUiAxHHcU1EzjjnNtTr9btPAZOTk2+VSqV7JMe11kfzQlEUfUTybhAE/xYEfCgit0RkexAEPz0FNJvNvSS/FZGNQRD8XkToRTFxHC8JOEDyWLlcXjU8PPzgFQHPt6jTN5KDWuvb3YAkSV7vHs2lkmg/8q8AVi965CiKqkqpv0g2tdZj+cvtGZ8BcNYYs3+56pYdU2vtlwCOi8iOIAh+7JrvCZL7ReSbgYGBg0NDQ4+7k6hWq3URySbx8vT09NBzP1qr1SrNzc21SH4C4AcA10n+7Zx7n+Q+AGsy/xGRKZJnAfwhIgtKqcz0Pi1kFe0e7s4qAVDNZXmDZEDyDefcFwC2A1B5swNwQmt9qZDZZdXMzs6+S7K/nfFukl+3Bcc9zzs1Pz//tnPutVe26zAMV1QqlXsA1mbuubCwsG5sbCz7uwudnnZtrd0B4PtO9saYsJByO6gI4DcAH+dEH6VpOjgyMpLtg55nWUAcxxtF5E6Xyh5jzHc9lYtUEEXRWqXUOwC2Znsl22TGmM+KimdxPVvUNsNxkjs9zxvstRO64YUA1toLaZoeLdr3PKQoYJsx5urLtKYT+wQbWmYoWRN59AAAAABJRU5ErkJggg==",fog:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACRklEQVRIS+2Vz0tUURTHP2fy2SJbWUhWIFGtXLQwgiJs2yJqk4RFuAjeve+tykVFIUNgvxYhwsx9QwyJ0B9QCJWboCCkFi6EWtSiTZBBhJAg0twTT2amURzHSaRNd3vP+X7O/Z7DucImH9lkff4DGjrclEWqKkmSnAH6gUPAXuArMOm9vx/H8aeVxHUDnHNdwBjQC8yo6rSIfAe6gR5gq4gMhmFYEBGtgOoCcrlcWyaT6fLez5VKpYUgCF4DbSISh2H4tFakHHsPiIBha+3NuoDR0dGdQRCMAGeBoBy4AHgROWyMeV/PeOfctRSgqseiKJpK45a9IEmSHlWdAFqAoqrOiEjq9aCIFI0xl9bqajabbeno6HgDtFpr07w/gPHx8W3z8/PTwA/glLX2WxrgnBsGrqhqZxRF6d2axzl3GXjgvT+QNr36giRJhlT1hoh0G2M+VlRyudx+YF8cx5ONxMsFnQBeloucqAKcc2+BX9bao+sRqhdTKBSOeO+nROSkMeZ5LeAz8Mpae3EjAOfcAPAI2GOt/VIF5PP5dAyJouh42cfTTYKeGGNGkiRJm7zDGHMwHeXaHlxX1duZTKbTe38OaBogIh9U9RlwwVr7eNkUFYvF7YuLi/2zs7MPs9msb7L6pXDn3G5goL29/W5fX1+pCsjn870iMgRsaSQsIi+MMXcqNorITxE5H4bh3Gq5SxZtOqBR1Ru5r7vsCoXCLlUdU9VWVc2Wd9GtletlVVtEfKlUuhrH8bt/B9iILbW56/5w/hb4G05g+hkJ9s3IAAAAAElFTkSuQmCC",nightCloud:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADvElEQVRIS7VVbWgcVRQ99+0HWxVLRY1NEW2IgiBSpUpVUEEEkfyQoiioqYEkM+9t2NpAQVFwwUIFqambzpu3oEVRxAaloNE/ghVBWtE/FcQPtPhRiwlpQInEspk58kKmTJLNEsG+n3fe3HPuuefeJ7jARy5wfnQEiKLoEqXUawAeKpVKVwwODs7+V0JrAsRx/ASAlwB0+aStVqtSq9XO/S8AcRxrABbA5wDuJOmMMT6Ger2uenp6NvT39/+9HrBVFVhrd4nI6wBeJblfRD4B8KSIzAHYQvIQgG4AHydJEhQKhYUwDM+ICNsBLgMYHx/vLhaLPwF4b2pqqr9er6fOud0kx4DFfqUAvhKRz0juERFF0sf/AnBofn5+3+jo6HweaBlAHMfjnm2SJNeOjIycjaKoVyn1PYAjJI+KiBWRUyRvIfkrgDcA/KaUuolkCODrVqt1V75X5wHiON4C4BSAl7XWz3gWzrkHSH4I4BUAfSS3ikgC4MtKpXLvwMDAPxnbOI5vBnCCZMMYszeL5wECn1MpdU0QBJ4dms3mxiRJPhWRbQDeES80+QjJ240xJ1Zqbq2NReTBMAy7s56cB3DOHSZ5n9b66hyrG33ZJEeNMQedc/cDCIIg2NmuqZlBliT+xefJV/ARgMu11rflABbt2mq1NtZqNd/Ijsda+5SIHKhUKhdn8uUBPgCwWWu9PQcwAsA3vktrPe3jURRtE5HKSon8fHR1dX1BMjHG7FjVA+dck2Sf1to3e/HkXLRfa/2cj1lrD4tIP8nd09PTzXq9vtBoNC4tlUoNAH6G7gjD8PiaTc7r5y/Fcfw0AD9wx0h+A+BukjeISBGAd9HPAK4DcI7kkDHm7bZzEEXRVUqpMwD2aq0P5C8553aS9NbrBXCyUCg0FhYWICJ9ADYt2fOoMcbPiIyNjVWygVs5aEc8wzRNe6vVql8Nax7n3IvesgCOk/zdW9ivEgCP+p+y5bgMwFrbIyLfknxTaz201n5Zku4eAN4E3hRXAvC76KIlRi2tdXmZTTOqmZdF5PkgCF7oBJIvz7tLKTUJYC5N0+2ZAm3fgziOnwWwD8C7xWJxz9DQ0Om1tJqYmCjMzs4+5lc6gNOFQqFveHj4h1UuWpnAWvuwiDQBbADwloi8LyIny+Xy9Nzc3GXlcrmH5I40TY2IbAUwqZR6PAiCP9u6qB1Da+0mEfE23ZW9bCvukeSkiBwMw/BYOznX9eh7GWZmZm5VSl2fpulmAGdF5Mc0Tb+rVqt/dHLbugA6b6DOX/8FgyCyKOwTwfsAAAAASUVORK5CYII=",sunny:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACXklEQVRIS72WPWzTQBTH/++6nZOdSoBYgE5MqViBhYmFAZhCNt/ZoKp8tIDExNLyIUCKfRcWIBMsLEwswAp0QgyhEwIkYCa2xJA7dJUtOanzicItlvXevd/5ffzPhClWq9VadO6+7/+YdBtN6uj8lFIv3VNKeWrSfdMC3maAYzMDoijaFwTBdyKyg0GUUm8ywPEyQBRFe8Iw/Fm09X2BC84Y+wrgoRBidRCilDqRAV4Xg1hrSWt9H8CKMWaxCOkDFB2ttXeDILjqAkVRtExEZ4hoyb1bazuMsedCiC33HsfxHSK6UnawXTVwEKXUbcbYEc756TRNN621oYsLYDs7+SEAREQR53w9SZJnAD4JIW4MfvXQIrfbbS9N03fGmAOMsTXO+dN6vZ44QGY7b4xxB/nCOT+a2wZrMxSgtW4aYxoLCws13/c7ZUVttVpLvV5vi4geSykvlvmUAlzOGWPviSgUQsSjWjKO45CImkS0nNdkaBflhqxolxhjVd/301EAl64kSX5ba+/lTdEHcONvjHkEoJoV8haAVQAHpZQ7XTNuKaU61tptInoA4GbWAH+IqEFzB5SdLkvRZc/zqsO6I983NkVlAK11zVr7YW5FdtC5tmlhmHYGDcB6pVJ5Uhy0brfbALA59aDlUuF0x/O8c0mSbAC4UCYVAJqe511L0/SFMeajlHJtrFQopVyrrQDYkFJez9JVM8acBXA4q9nnmcTO6TljzF2H/yLX+8Mw/JY3zy6pcJAgCH5Ne+G41MZxvLcY3EH+/5U5Sha01q+cXQhxcpx8DE3RqI2z/Lb8Bf5+YvCdHA9wAAAAAElFTkSuQmCC",lightRain:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADBklEQVRIS61VTWhcVRg9585kQg0mm0CmaUGEYiEuglIN1EXpyi6yqpqFwohE5t13H0QsWMRgOhVKSWpAJpl575FVR90M2HbTpFTQQlGQdFNFupMIYs0PVJGIKbz7lRcy5WWSmbxU3/L+nPN95zvvXOIJvjAMe6IoOiIiKoqipbGxsdVWMNwPfhAEAyJyCcCrADKJu4skpxzH+YqkJDFTE/i+/zGAcwDuA7hM8mcAf4nIEQBvAXgZQF0p9Y7jOP80SHYlKJfL3blcbghAD4AlAK+IyGcAppVSE0mAGKhUKqm+vj4DYEpEFlZWVt4olUo23ttGEIZhh7X2QwDjADobVYgISPpaa69ZgqQc1Wq1SDIEUHBd9/NtBOVyubOjo+MbAEMiUiV501q7rJSaBvBCV1dXvlAorLebmYgwCIJvAfRrrY/GxTzuwPf9SQDvKaVOOI7zQwPI9/0/AXzpuq6XxhBBEBRE5LK1dsDzvHubBLOzs89kMplfSJ7XWn+SBKpUKsdJ3jPGPEhJcExEFkVk2BhzfZOgWq2+S3JORAaNMT+mAWp1JgiCXQk+Inkhl8t1j46O/v0fCXZK1NCN5Eta6zvNBGEYPtVszd2K2BryLQAHtw25UqnklVK/kqxqrd9PXt7y+AqAmuu6Z9p119amvu+fBXBRRF4zxlxr8vc0yTMi8mlvb+/4yMjIw+Yi8vm8JyKxE+eXl5dHdvxo9Xo9s7a2Vid5GsBVAF+T/N1a+zzJIoBDcf6IyBLJGoCfRORfpVQcem+miootDd+OOwGQT1T5PUlD8mlr7QcAhgGoZNgBmNRaX0kVdnE3q6urz5HsiSv2PO+Pubm5PhF5sVgsLtRqta719fVnrbUH/re49n3/BoBBAK+7rvtdWiuniuswDE9aa7+IM8ZaO2+MGW4Xeqnfg4YsGxsbd7PZ7G2Sh2OnZLPZSkOuvTpp20FSliiKfiN5yvO8cD9ytSRoJct+5WpJMDMz05+UxXXdiViOVutP9OjHMd6QJQnQan03klQu2muQ7fYfAZFmnChg2EJeAAAAAElFTkSuQmCC",nightClear:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADTUlEQVRIS7VVXWhcVRD+5uxfdhFEqaSp+Ff8ea1QRURQkOCDeVODonaFZHN2smHBgNDiQyP1D0RTsuw594JJhKpgUBCNQXywTxV8EXwwFaliTVGj2cDKoiTLnpEje8vdbXa7FXqeDvfOfN/MNzNnCFf50FXGR1+CarV6jVJqEcDjqVTqhsnJye0ooJWVlcT6+rrMzc25fkH2JLDWPgvgDQDDHqDZbA6Vy+Udfw/D8NpsNvuFiKBer4+Wy+W/epHsSWCtZQAGwFcA7heRyvT0dDkOsrS09HoikWjl8/kXrygDY0yeiN4B8DaA9wCcBvAwM3/ZC6ifXB0ZVCqVA8lk8kcAH21ubh4ZHh4+AmC51WrdOjMzcz4Mw5FMJvNQLpdbGR8fbw0iVweBtbYC4Lk2YC0IgmMi8mqk/9raWmZjY+OQ1vrrQeW6SGCtvRHATwDeYuZjHsAYM0VEYTKZ3F8oFDbjoIuLiwcmJiZ+vVybxwk0gEApdYvW+hfvaK19BMDnAB5g5jOxFs3W6/Uzu7u746VS6dxARQ6CYElERpn5psghDMOcc+5PACeZuaNbwjBMaa2bV5LBGoB9zHxv3Mla+z6AB5VSd2it/74cYPf/uESfAhhh5sNxI2PMXUT0HYATzPzS/yYIgiAUkTFm9sXuONbaVwAcJaJHi8Wir8nA55IiRz0fR/CDVKvVPgYwCqDAzKcGZbhIUK1W9yulfNu9wMxvdgMsLCxkUqlU4OeEiD5zzh1n5m+ISOK2IkLz8/NDs7Oz//jv3YP2gS+oc+72UqnU6Cbxztbap4joNQA3A/i5/V791rb18j7p79FwdhAYYw4S0VkROcXMhe7oIsLl5eWhnZ2dMRF5DMDdADywApBr2zSZOX1JBu3p/e+xI6LjWusTvUi6s6tWq4eUUqsAGs65w5ECvZ5rP1QvA/gwmUw+XygULvQqqm+A7e3tp0XE1+dCIpEYm5qa+iGy77lwjDFP+HcIQBbAu0T0CRF9m06n/2g0Gten0+mDInKfc26aiG4DsKqUekZrXY8H03dlGmOuI6KjAPLRZuvKRERklYhOFovF03vJOdDS9zJsbW3do5S60zk3AqBGROecc9+XSqXf+83EQASDDtVedv8CDQ5sKGG6gqAAAAAASUVORK5CYII=",dayCloud:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADPElEQVRIS8WVX2hcRRTGv2+urhuC+rDSNeCD0Cf/UH0RCopitVClVmo0L4ooijNzs4lIsCLauorQB2UFm71z14BYxD7slmLRitgi6INaEIpI44v6ULGyxQ0oKon37hwZ2V2StSnBEHqehnvmnt+c+c45Q2ywcYPj4+IBkiTZQvLzPM+vn5qaOvt/M101A+fcTgAfkLzFGPP1ugFpms4CmNdaO5IyOzt7QxRFhwHcba39uVqtqnK5vIfkqDFm71qBgwySJDlI8lGSzxpjXnfO3Qhgm4j8trS0dLRYLD4PYI+I1BYXF18cHR3d0u12bwJwJckfsyw7Pj09/fsweADonfAZAKcA3A5gHzAognPe+9dI/kGyC+BVAJuGgv0F4Ll2u51Uq1Xf9/1HgzRN7xWRYyKyN4qiAyTL3W73KIArAHwD4B4Ah733SaFQmM/zXLz3N0dRNC4iTwE4kWXZeD+bFRkEarlcfgfAVqVURUR2ee/HSEYA7gfgST5kjDlyPg3q9fqdSqn3RaQVx/GTYQ+bzWah0+mE+98hIh+JSJHkdgCXA1gCcEZENpNUfX0uJHCSJI+TfFtEdsZxfKwPOATgVwDvAgiwa4PgAFpa68w5F7LarZQa01qHu17VRIRpmp4iuWCM2bZCA+fcCwBeJrl1ee0751oiMh/H8UtrKU/nXArgiVKpVBwAms1m1Ol0Qscet9Y+spZAq+1xzoVqrGVZtmkAmJubuybP858APG2tfXM9gNC0ImLb7fZlA0Cj0Rjz3p8lOWOMqa0HkCTJV6FfrLW3DgA9cc4AOGmtfXAY4Jyb8d5/Ozk5+cmF4M653QCOiMjDcRwfGha5AuAAgLustZ8uD+Sc+xjAHSKyI47jz84H6Y2XEwC+MMaMh5m2AtAbFyHQbST3kXxPa/1LvV6/Wik1BWAGwCUi8oZS6i2t9fetVuvShYWF67z3D5AM8+o7ANuttef+bbThk9RqtZGRkZH9QezgE5E/wwTtrQ+G5iP5GIBCrxFDjLAO82d/qVR6ZWJi4u9VZ1Hf0Xtw7iN5lff+tPf+y0qlcjr4G41G+LYLwObQ+UqpH0h+qLUOGq6wi/dkrqdMl/+74Rn8A692Z3gFfAckAAAAAElFTkSuQmCC",rainHeavy:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAD0UlEQVRIS6VVbWhbVRh+3pPcpNhs+ZFCo4LCGFPmmIgfQ0VkDPFPf4hiC0ojtdJ7zk2JOJgMOzUqfmyuIrG556bij2X4JzgVREUdKgh+MFHwY9U/oyK4NjbbrGysTe555YxmpGnXRr0/773neZ7zvs/7vIT/8JRKpWQYhpuZWYRhOJ3L5f68FAz9G/wgCLYy88sA7gYQaTl7jIgOuK57hIi4FbNjAq31kwCeBnASwCEi+hnAX8y8GcCDAG4BUBFCDLmue65JsipBoVDYGIvFdgBIApgGcDszvwpgXAjxVCuABcrn86K3t9cDcICZP6xWq/fn83ljvy0jKJVKjjFmL4AxAPGmCmYGEWkpZba9BK3l8H1/hIhKADJKqcPLCAqFQtxxnE8B7GBmn4g+NsbMCiHGAdzQ3d2dzmQyZ9fqGTNTEASfAbhCSnmNFXPxBlrr/QAeFULc6bruN00grfUZAG8qpbKdGCIIggwzHzLGbM1ms1MXCCYmJq6ORCIniOgZKeWzrUDFYvE2IpryPO90hwQ3MfMxZu7zPO/9CwS+7z9CRK8z8/We5/3QCdCl/gmCYFWCJ4jo+VgstnF4ePjv/0mwskTNuhHRzVLKb9sJSqXSZe3WXE3EUpM/B3D5siYXi8W0EOI3IvKllI+1Hl7yeBVAWSm1e63brWlTrfXjAF5k5vs8z3u3zd/jRLSbmQ/29PSM9ff3L7aLSKfTWWa2Tvxgdna2f8WgVSqVyNzcXIWI7gXwDoBPiOgPY8x1RDQC4EqbP8w8TURlAD8y83khhA29BzqKiqUaPmRvAiDdovJLIvKIaIMxZg+APgCiNewA7JdSvr1u2AVBMADg1jAM7cinmPn06OioDTZorW0Jf0kkEm/Nz89vj0ajzuLi4lTHcb0UFycAHFdK3eX7viainUqpa7XW22xZAOxLpVIv1Wo1Oy9fKKXkWo1fFnaTk5NbwjC0am3e/wTgdwBvKKU8rfXDAF5xHGdTo9G4g5mtEQaUUpWOCGz9tda7EonEVzbU7NYyxrwmhNi3sLBwpqura5vjON8NDQ2d933/RiHEyMzMTDafzzc6IvB9/x4isu7ZKYT4PgzDw0KIvVLK41pruwu8er2+IRKJbBdCjNXr9YFcLrew3tS3pulRZt5UrVa3pNPpPcz8gs2mRqPxq+M4pwAcUUplgiD4yL5PpVJXtc/DamQXCYIg2GWMOet53tda6/eIiKSUfU3rRqPRo8lk8mStVjtFRM9JKQ+up37FRmsesG6Kx+PGdd16O0i5XO4eHBw8t9Zmaz3T8dLvRO1q//wDEILUKPO11X0AAAAASUVORK5CYII=",rain:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADJElEQVRIS81VS4hURxQ9p5ppGYfoZmDauIiCJGgWEkgiKGJcZeNKcUADHcIEX1W1TFAwmIj6JhCCnwFppl/Vw5WGJNCQzyaKEdSQIIiuFHEXxiwM8wF/TFCx3w01dIc37czQMxJIbYp6VXXOvefed4pYxEjTdHmj0VgjIqrRaIwODg5OzAXDheB779eJyAkA7wMo5O5eJ3k8iqLvSUoes2MC59xhAEcB/AXgDMnbAB6KyBoAHwB4F0BdKfVRFEV/t0hmJahWq8uKxeIGAMsBjALYJCKnAAwrpY7kAQJQHMeqr6/PAjguIufHx8d3xnGchb0ZBGmadmVZdhDAIQBLWlGICEg6rXWlXYK8HEmS7CGZAigbY76eQVCtVpd0dXVdArBBRBKSv2RZNqaUGgbwVk9PT6lcLk/NVzMRoff+MoBXtdZvhGD+zcA5dwzAJ0qpLVEUXWsBOeceAPjGGFPppCG892UROZNl2bpKpXJnmmBkZOS1QqHwB8khrfUXeaBarbaR5B1r7f0OCd4Wkesiss1a+/M0QZIkH5M8LSLrrbU3OwGa64z3flaCz0l+WSwWlw0MDDx+SYIXJWrpRvIdrfWNdoI0TZe2t+ZsQTSLfAXAihlFrtVqJaXUXZKJ1npf/nKzx8cBnDXG7J8vu3nb1Dn3KYCvRGSHtfantv4eJrlfRE729vYe6u/vf9YeRKlUqohI6MRzY2Nj/S/8aPV6vTA5OVknuR3AjwAukryXZdmbJPcAWBn8R0RGSZ4FcEtEniilgunt7sgqmhp+GDIBUMpFeZWkJflKlmUHAGwDoPJmB+CY1vqHjswuZDMxMfG6UqpPKfU8iqLfA1iapivC3N3d/Whqamq1iKwtFArXoij6c1F27b3/TERiY8y0L3nvL4RZax3sGs65pyRjrXXIeNYxr1075+Jg0caY6XPOudCCMMa811wH7x8yxoRzCydIkmQLyV3GGN0E3NskGGmuvYh8Z639dVEEzrlVIrLRWvttAEiSZHOYrbW/Nde7SV41xoQ3Y+EZOOfCCxZq0JIoWHGQaGtOorA/9L8l+G8lmivthXz/B7P8lSgrbbWdAAAAAElFTkSuQmCC"},r=function(i,r,u){u=u.toLowerCase();var o=(new Date).getHours()<=18&&(new Date).getHours()>=6,e=i,f=n.default;u=="mây"?f=n.cloud:u=="mưa"?f=n.rain:u.indexOf("mưa giông")>=0?f=n.rainHeavy:u.indexOf("nhiều mây")>=0?f=o?n.dayCloud:n.nightCloud:u.indexOf("rải rác")>=0&&u.indexOf("mưa")>=0?f=n.lightRain:u.indexOf("breezy")>=0?f=n.fog:u.indexOf("nắng")>=0&&(f=n.sunny);u=u[0].toUpperCase()+u.substr(1,u.length-1);e+=' <img src="'+f+'" alt="weather" title="'+u+'" width="22"/> ';e+=r+"&deg;C<b>|<\/b>";typeof localStorage!="undefined"&&localStorage&&localStorage.setItem("cnnd_weather_data",JSON.stringify({timestamp:(new Date).getTime(),markup:e}));t.html(e)},i=function(n){(n=n.map(function(n){return(n||"").trim().replace(/[\s\t\r\n]/ig,"").toLowerCase()}),n)&&$.getJSON("https://utils1.cnnd.vn/APIWeather.ashx",function(t){var u,i;t&&t.length&&(u=t.filter(function(t){return n.indexOf(t.temp.trim().replace(/[\s\t\r\n]/ig,"").toLowerCase())>=0}),u.length)&&(i=u[0],console.debug(i.temp+" | "+i.Temperature+" | "+i.temp1),r(i.temp,i.Temperature,i.temp1))})};$.ajax({url:"https://geoip-db.com/json/geoip.php?v="+(new Date).getTime(),type:"GET",dataType:"json",headers:{"User-Agent":"My-Agent "+Math.round(Math.random()*1e4)},success:function(n){var t=["hanoi"];n&&n.city&&(t=[n.state,n.city]);i(t)},error:function(){i(["hanoi"])}})}};$(document).ready(function(){var n,r,t,s,f,e,i,h;window._cnnd.navBar=$("#nav");window._cnnd.startPointOfStickyNav=function(){var n=$("#header");return n.length?+n.height():-10}();console.debug("Start point: "+window._cnnd.startPointOfStickyNav);window._cnnd.lazyImages=$("img[data-src]");$(window).scroll(function(){var n=window._cnnd.navBar;window._cnnd.scrollY>window.scrollY?n.addClass("active"):n.removeClass("active");window._cnnd.startPointOfStickyNav+n.height()<=window.scrollY?(window._cnnd.scrollY=window.scrollY,n.addClass("sticky")):n.removeClass("sticky");window.scrollY>500?$("#__back2top").addClass("active"):$("#__back2top").removeClass("active")});t=$("#nav [data-trigger]");t.on("mouseover",function(){t.find(".icon").toggleClass("icon-close-nav");t.find(".popup").toggleClass("active")});t.on("mouseout",function(){t.find(".icon").toggleClass("icon-close-nav");t.find(".popup").toggleClass("active")});$("#search-form button").on("click",function(){var n=$("#search").val();if(n=n.replace(/[<][\/]?[a-z0-9-]+\s*(\s*[a-z0-9-]+([=]?["']?[^>]*["']?)?)*\s*[>]/ig," ").trim().replace(/[_\?\+%@&=\*]/ig," ").replace(/--/ig," ").trim().replace(/[\*\+=\\\/]/ig," ").trim().replace(/"/g," ").replace(/^\s+|\s+$/g," ").trim(),n.length<=0){window.location.href.indexOf("/tim-kiem.htm")>0&&(window.location.href="/");return}n.length>200&&(n=n.substr(0,200));console.debug("[SEARCH] Keyword: "+n);window.location.href="/tim-kiem.htm?search="+n});$("#search").keyup(function(n){n.keyCode===13&&$("#search-form button").click()});var u=$("[data-ajaxcontent]:not([data-disabled])"),o=function(n,t,i){$.get(t,function(t){var r,u,f;if($(n).html(t).removeAttr("data-ajaxcontent").removeAttr("data-ajaxcontent-option"),i&&i.length)for(r=0;r<i.length;r++)switch(i[r]){case"init":window._cnnd.globalinit();break;case"initnews":window._cnnd.globalinit();$(n).find('[data-id="'+$("#__HFIELD__nid").val()+'"]').remove();u=$(n).attr("data-limit");u&&/^[0-9]+$/ig.test(u)&&$(n).find("[data-id]:nth-child(n+"+(parseInt(u)+1)+")").hide();$(n).find("[data-id]").removeAttr("data-id");break;case"trimline":for(f=$(n).find("[data-trimline]:not([data-disabled])"),r=0;r<f.length;r++)n=$(f[r]),/^[0-9]+$/ig.test(n.attr("data-trimline"))&&n.trimLine(+n.attr("data-trimline"))}})},c=function(n,t,i){if(t||(t=$(n).attr("data-ajaxcontent")),t){(t+"").indexOf("http://")<0&&(t+"").indexOf("https://")<0&&(t=((t+"").indexOf("/")==0?"":"/")+t);var r=$(n).closest("[data-ajaxcontent-trigger]");if(r.length){r.attr("data-ajaxcontent-trigger")||r.attr("data-ajaxcontent-trigger","mouseenter");r.on(r.attr("data-ajaxcontent-trigger")||"mouseenter",function(){r.attr("data-ajaxcontent-trigger")!=undefined&&(r.off(r.attr("data-ajaxcontent-trigger")||"mouseenter"),r.removeAttr("data-ajaxcontent-trigger"),o(n,t,i))})}else o(n,t,i)}};for(n=0;n<u.length;n++)s=$(u[n]).attr("data-ajaxcontent-option")||"",c(u[n],null,s.split(";"));for(function(){var n="/rss";$("#__HFIELD__tid").length?n+="/chu-de/"+$("#__HFIELD__tid").val():window.location.href.indexOf("/video/")>0||window.location.href.indexOf("/video.htm")>0?n+="/video":$("#__HFIELD__zurl").length&&(n+="/"+$("#__HFIELD__zurl").val().replace(".htm",""))}(),f=$("ul.pager li:not(.disabled)"),n=0;n<f.length;n++)r=$(f[n]),e=r.find("a").attr("href"),e&&r.attr("data-href",e).addClass("clickable");$(window).on("scroll",function(){var n=$("#__main_wrapper_content > .right"),t=$("#__main_wrapper_content > .left");!n.length||!t.length||t.height()<=n.height()||(n.height(t.height()),$("#__main_wrapper_content>.right .fb-page.fb_iframe_widget").addClass("fb-page-fixbottom"))});window._cnnd.globalinit();typeof localStorage!="undefined"&&!!localStorage&&localStorage.getItem("cnnd_weather_data")?(i=JSON.parse(localStorage.getItem("cnnd_weather_data")),setTimeout(function(){if(i&&i.timestamp&&i.markup&&(new Date).getTime()-i.timestamp<=36e5){$("#_weather").html(i.markup);return}localStorage.removeItem("cnnd_weather_data");window._cnnd.weatherinit()},1500)):window._cnnd.weatherinit();h=function(){var t=$("#_dateTime"),n;if(t&&t.length){n=new Date;try{n=/^[0-9]+$/ig.test(t.attr("data-value"))?new Date(+t.attr("data-value")):new Date(t.attr("data-value"))}catch(i){}t.html((n.getHours()<10||n.getHours()>12&&n.getHours()<22?"0":"")+(n.getHours()>12?n.getHours()-12:n.getHours())+":"+(n.getMinutes()>=10?n.getMinutes():"0"+n.getMinutes())+(n.getHours()>12?"PM":"AM")+", "+(n.getDate()>=10?n.getDate():"0"+n.getDate())+"/"+(n.getMonth()<10?"0":"")+(n.getMonth()+1)+"/"+n.getFullYear())}};setInterval(function(){var n=$("#_dateTime"),t;if(n&&n.length){t=new Date;try{/^[0-9]+$/ig.test(n.attr("data-value"))||(t=new Date(n.attr("data-value")))}catch(i){}n.attr("data-value",t.getTime());t.getSeconds()==0&&h()}},1e3)});detail={init:function(){var n=this,u,i,r,t;getBoxDetail.init($("#hdZoneId").val());fbClient.init();n.InitVideoTop();n.getEmbedAlbum();n.getCountLikeApi();setTimeout(function(){n.setInMiddleScreen("#sticky-box")},4e3);typeof getCountComment=="function"&&getCountComment(".networktop");n.initPopup(".relate-container ul li a, .box-newsrelated a, .detail-album .news-relation a");n.setColRightForHeightConent();$("#btn-feedback").click(function(){for(var i,t=$(".check_blank"),n=0;n<t.length;n++)if($(t[n]).val().trim()=="")return i=$(t[n]).parent().find("label").text(),$(t[n]).parent().find("p").text("vui lòng nhập "+i),!1;var r=$(".name").val(),u=$(".receiver").val(),f=$(".email-content").val()+'<br> xem bài viết tại đây: <a href="<%=ShortUrl%>"><%=TitleNews.ToString().EnCode() %><\/a>',e=$(".title-post").attr("title"),s=$(".title-post").attr("act"),o=r+" chia sẻ với bạn bài viết  "+e;window.open("mailto:"+u+"?subject="+o+"&body="+f,"_blank")});$(".NLPlaceholderShow").each(function(){($(this).html()=="&nbsp;"||$(this).html()=="")&&$(this).hide()});$(".content-detail.column-1 .VCSortableInPreviewMode[type=VideoStream]").length>0&&$(".content-detail.column-1 .VCSortableInPreviewMode[type=VideoStream]").each(function(){var t=$(this),n=$(this).parent();if(typeof n!="undefined"&&n.hasClass("IMSCurrentEditorEditObject"))return!0});$("#main-detail-body").length>0&&(videoHD.isAd=!0,videoHD.init("#main-detail-body",{type:videoHD.videoType.newsDetail}),videoInContent.init("#main-detail-body"));$(".VCSortableInPreviewMode[type=Audio]").length>0&&$(".VCSortableInPreviewMode[type=Audio]").each(function(){var u=$(this).find("iframe"),i,r;if(!(u.length>0)){var n=parseInt($(this).attr("data-width").replace("px","")),t=$(this).attr("data-src"),f=$(this).attr("audioid");t=t.replace("&amp;","&");i=440;$(".content-detail.column-2").length>0&&(i=586);n=Math.min(i,n);r='<iframe style="max-width:100%" width="'+n+'" height="255" src="'+t+'" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen scrolling="no">';$(this).prepend(r)}});$(".VCSortableInPreviewMode[type=Photo]").length>0&&$(".VCSortableInPreviewMode[type=Photo]").each(function(){var t=$(this),f=$(this).parent(),r,i,u,n;if(typeof f!="undefined"&&f.hasClass("IMSCurrentEditorEditObject"))return!0;r=t.find(".PhotoCMS_Caption");i=t.find("img:first");i&&i.length>0&&typeof i.attr("w")!="undefined"&&(u=parseInt(i.attr("w")),n=440,$(".column1cover").length>0?(n=980,t.hasClass("GifPhoto")&&(n=660),n=Math.min(n,i.attr("w")),n<586?(i.width(u),t.width(n),t.css("margin","auto"),r.children().css("margin","0")):(t.css("margin-left",(634-n)/2+"px"),t.width(n))):$(".column-1").length>0?(n=980,t.hasClass("GifPhoto")&&(n=660),n=Math.min(n,i.attr("w")),n<586?(i.width(u),t.width(n),t.css("margin","auto"),r.children().css("margin","0")):(t.css("margin-left",(634-n)/2+"px"),t.width(n))):$(".column-2 .left-side2").length>0&&(n=586,t.width(Math.min(n,i.attr("w")))));r&&r.length>0&&r.each(function(){$(this).html()==""||$(this).text()==""?$(this).remove():$(this).addClass("ck_legend caption")})});spnBeforeAfter.init();u=$("#main-detail-body").text();i=u.match(/\$[^\$]+\$/g);i!=null&&i.length>0&&((window.unsafeWindow==null?window:unsafeWindow).MathJax==null?(r=document.getElementsByTagName("head")[0],t=document.createElement("script"),t.type="text/x-mathjax-config",t[window.opera?"innerHTML":"text"]="MathJax.Hub.Config({\n  showMathMenu:false,  showMathMenuMSIE:false,  tex2jax: { inlineMath: [['$','$'], ['\\\\(','\\\\)']] }\n});",r.appendChild(t),t=document.createElement("script"),t.type="text/javascript",t.src="https://statictuoitre.mediacdn.vn/web_js/MathJax-2.7.1/MathJax.js?config=TeX-AMS_SVG",r.appendChild(t)):MathJax.Hub.Queue(["Typeset",MathJax.Hub]));poll.init();n.initLightBox();n.viewMoreTag();$('#mainContentDetail .VCSortableInPreviewMode[type="VideoStream"]').length>0&&$('#mainContentDetail .VCSortableInPreviewMode[type="VideoStream"]').each(function(){$(this).after('<a href="https://tv.tuoitre.vn/" target="_blank" title="tuổi trẻ TV" class="fr lnkTuoiTreTV">Xem thêm video khác trên TVO<\/a>')});insertAds()},initMedia:function(n){var i=this,f,r,u,t;i.InitVideoTop();i.getEmbedAlbum();i.getCountLikeApi();typeof getCountComment=="function"&&getCountComment(".networktop");$(n+" .NLPlaceholderShow").each(function(){($(this).html()=="&nbsp;"||$(this).html()=="")&&$(this).hide()});$(n).length>0&&(videoHD.isAd=!0,videoHD.init(n,{type:videoHD.videoType.newsDetail}),setTimeout(function(){videoInPopup.init(n)},500));$(n+" .VCSortableInPreviewMode[type=Audio]").length>0&&$(n+" .VCSortableInPreviewMode[type=Audio]").each(function(){var u=$(this).find("iframe"),i,r;if(!(u.length>0)){var n=parseInt($(this).attr("data-width").replace("px","")),t=$(this).attr("data-src"),f=$(this).attr("audioid");t=t.replace("&amp;","&");i=418;$(".content-detail.column-2").length>0&&(i=578);n=Math.min(i,n);r='<iframe style="max-width:100%" width="'+n+'" height="255" src="'+t+'" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen scrolling="no">';$(this).prepend(r)}});$(n+" .VCSortableInPreviewMode[type=Photo]").length>0&&$(n+" .VCSortableInPreviewMode[type=Photo]").each(function(){var t=$(this),i=$(this).parent(),n,r;if(typeof i!="undefined"&&i.hasClass("IMSCurrentEditorEditObject"))return!0;n=t.find(".PhotoCMS_Caption");r=t.find("img:first");n&&n.length>0&&n.each(function(){$(this).html()==""||$(this).text()==""?$(this).remove():$(this).addClass("ck_legend caption")})});f=$(n+" .fck").text();r=f.match(/\$[^\$]+\$/g);r!=null&&r.length>0&&((window.unsafeWindow==null?window:unsafeWindow).MathJax==null?(u=document.getElementsByTagName("head")[0],t=document.createElement("script"),t.type="text/x-mathjax-config",t[window.opera?"innerHTML":"text"]="MathJax.Hub.Config({\n  showMathMenu:false,  showMathMenuMSIE:false,  tex2jax: { inlineMath: [['$','$'], ['\\\\(','\\\\)']] }\n});",u.appendChild(t),t=document.createElement("script"),t.type="text/javascript",t.src="https://statictuoitre.mediacdn.vn/web_js/MathJax-2.7.1/MathJax.js?config=TeX-AMS_SVG",u.appendChild(t)):MathJax.Hub.Queue(["Typeset",MathJax.Hub]));setTimeout(function(){var t=578;$(n+" .before-after").each(function(n,i){var r=t,u=parseInt(t*u/r);$(i).beforeAfter({animateIntro:!0,introDuration:100,linkDisplaySpeed:500,introPosition:parseFloat($(i).attr("position-percent")),showFullLinks:!0,title:decodeURIComponent($(i).attr("title")),cursor:"e-resize",enableKeyboard:!0,beforeDate:$(i).attr("before-date"),afterDate:$(i).attr("after-date"),imageWidth:r,imageHeight:u})})},500);poll.init()},getCountLikeApi:function(){var n=[];$(".need-get-favorite").each(function(){var i=$(this),t=i.attr("data-newsId");n.indexOf(t)<0&&(n.push(t),$.ajax({url:appSettings.ajaxDomain+"/count-object.htm",data:{newsId:t},xhrFields:{withCredentials:!0},type:"GET",success:function(n){var i=$(".btn-qt[data-newsId='"+t+"']"),r;i.length>0&&(r=n==0?"0":n,i.find(".number").html(r),i.removeClass("need-get-favorite"),detail.SetFavorite(i))}}))})},initComment:function(){function t(n,t){$("#"+n).fadeIn(100);var i=$("#"+n+" > .popup").height();$("#"+n+" > .popup").css("margin-top",-i/2);$("#"+n).fadeOut(t)}function n(n){var i,r,u;if(typeof n.data.act!="undefined"&&n.data.act!=null){if(n.data.act=="popup"){i=n.data.id;i=="successForm"?(closepopup("infoForm"),$("#cm-email").val(""),$("#cm-name").val(""),t("successForm",1500)):i=="errorForm"?($("#errorForm .timeout").html(n.data.remain_time),closepopup("infoForm"),openPopup("errorForm")):openPopup(i);return}n.data.act=="resize"&&(r=document.getElementById("sComment"),u=parseInt(n.data.height),r.height=u+"px")}}window.addEventListener?window.addEventListener("message",n,!1):window.attachEvent&&window.attachEvent("onmessage",n);$("#btn-info").click(function(){var n=$("#cm-email").val(),t=$("#cm-name").val(),i,r;n!=""&&t!=""&&IsEmail(n)?(i=$("#sComment").get(0).contentWindow,r={act:"cminsert",email:n,name:t},typeof i!="undefined"&&i.postMessage(r,"*"),closepopup("infoForm")):(n==""?$(".email-warning1").show():($(".email-warning1").hide(),IsEmail(n)?$(".email-warning2").hide():$(".email-warning2").show()),t==""?$(".name-warning").show():$(".name-warning").hide())})},InitVotePage:function(n){function r(n){var r=$(".vote-msg"),u=$("#btnVoteCommit"),f;r.hide();u.hide();f="tuoitreVote"+n;getCookie(f)?(r.show(),u.hide(),clearInterval(i),i=setInterval(function(){var e=new Date,o=getCookie(f),n=parseInt((t-(e.getTime()-new Date(o).getTime()))/1e3);n>0?$(".vote-msg").text(String.format("Cảm ơn bạn đã đóng góp ý kiến. Bạn có thể bình chọn tiếp sau {0} phút {1} giây nữa. ",parseInt(n/60),n%60)):(clearInterval(i),r.hide(),u.show())},500),setTimeout(function(){clearInterval(i);u.show();r.hide()},t)):(r.hide(),u.show())}function f(){var n=0;$(".vote-result .ui-progress").each(function(){n+=parseInt($(this).attr("vote"))});$(".vote-result .ui-progress").each(function(){var i=parseInt($(this).attr("vote")),t=n==0?0:i/n*100;t=Math.round(t*100)/100;$(this).find(".ui-progress-value").css("width",t+"%");$(this).find(".ui-progress-text").text(t+"%")})}function e(n){var i="tuoitreVote"+n;setCookie(i,new Date,new Date((new Date).getTime()+t))}var t,i,u;$.ajax({url:appSettings.ajaxDomain+"/CountCommentHandler.htm",xhrFields:{withCredentials:!0},data:{voteId:n},success:function(n){n&&n!=""&&n!="null"&&$(".ming-counter:first").text(n)}});t=6e4;r(n);u=function(){function s(){var t=u.find("input[status=2]");t&&t.length>0&&t.each(function(){var i=$(this);t.click(function(){boxVote.postOtherAnswer(n,i.val(),2,function(){i.attr("checked",!1)},function(){o(function(){e(n);r(n);f()})})})})}function o(n){var r,f;if(!i&&(r=u.find("tr"),r&&r.length>0)){if(f=[],r.find(":checked").length<=0){alert("Bạn chưa có lựa chọn nào");return}r.each(function(){var n=$(this).find(":checked:first"),t;n&&n.length>0&&(f.push(n.val()),t=$(this).find(".ui-progress:first"),t.attr("vote",parseInt(t.attr("vote"))+1))});i=!0;$.ajax({url:t.url,xhrFields:{withCredentials:!0},data:{voteId:t.voteId,VoteAnswers:f.join(",")},success:function(){r.find(":checked").prop("checked",!1);i=!1;typeof n=="function"&&n()}})}}var t={url:appSettings.ajaxDomain+"/handlers/vote.ashx",voteId:0},i=!1,u=$(".vote-result");return{init:function(n){t=$.extend(t,n);s()},vote:function(n){return o(n)}}}(jQuery);u.init({voteId:n});f();$("#btnVoteCommit").click(function(){u.vote(function(){f();e(n);r(n)})})},initLightBox:function(){var n='<a href="{0}" data-fancybox-group="img-lightbox" title="{1}" target="_blank" class="detail-img-lightbox"><\/a>';$('.VCSortableInPreviewMode[type="photo"] img:not(.lightbox-content)').each(function(){var t=$(this),f=t.attr("src"),i=t.parents(".VCSortableInPreviewMode").find(".PhotoCMS_Caption").text(),r,u;i==null&&(i="");r=String.format(n,f,encodeReplace(i));u=t.parent("div").prepend(r);$(u).find("a").append(t);t.addClass("lightbox-content")});$(".desc_image.slide_content img:not(.lightbox-content)").each(function(){var t=$(this),u=t.parents(".desc_image.slide_content"),i=u.attr("href"),r=u.find(".ck_legend.caption").html(),f,e;r==null&&(r="");typeof i=="undefined"&&(i=t.attr("src"));f=String.format(n,i,htmlEncode(r));e=t.parent("td").prepend(f);$(e).find("a").append(t);t.addClass("lightbox-content")});$(".detail-img-lightbox").fancybox({padding:0,showNavArrows:!0,locked:!1,beforeShow:function(){$(".fancybox-overlay").addClass("fancybox-opening")},onUpdate:function(){$(window).scroll(function(){try{$.fancybox.close().transitions()}catch(n){}});$(".fancybox-image").on("click",function(){try{$.fancybox.close().transitions()}catch(n){}})},beforeClose:function(){$(".fancybox-overlay").addClass("fancybox-closing")},nextEffect:"none",prevEffect:"none"})},toggleMenu:function(){$(".kbw-minicover-wrapper").toggleClass("show-expand-menu")},getEmbedAlbum:function(){var n=$(".afs_wrap");n.length!=0&&n.each(function(){var t=$(this),n=t.attr("data-slide-id");n!=""&&n!="undefined"&&$.ajax({url:"/embedalbum/"+n+".htm",data:{},xhrFields:{withCredentials:!0},type:"GET",success:function(n){var i=$("<div/>").html(n);t.append(i.html())}})})},SetFavorite:function(n){var t=n.attr("data-newsId"),i="qt"+t;if(getCookie(i)){n.addClass("active");return}n.click(function(n){var r=$(this),t,i;(n.stopPropagation(),t=r.attr("data-newsId"),i="qt"+t,getCookie(i))||$.ajax({url:appSettings.ajaxDomain+"/like-object.htm",data:{newsId:t},xhrFields:{withCredentials:!0},type:"GET",success:function(){setCookie(i,new Date,30);var n=$(".btn-qt[data-newsId='"+t+"']"),r=parseInt("0"+n.find(".number").html());r++;n.find(".number").html(r);n.addClass("active")}})})},InitVideoTop:function(){$(".box-avatar-video-top").length>0&&(videoHD.isAd=!0,videoHD.init(".box-avatar-video-top",{type:videoHD.videoType.videoDetail}))},reloadCaptcha:function(){var n=document.getElementById("imgReload");n.setAttribute("src",appSettings.ajaxDomain+"/captcha.htm?"+Math.random())},initPopup:function(n){function s(){$(".closepopup").unbind("click").click(function(){videoInContent.stopAllVideo();$("#NewsPopup").css("display","none");$("body").css("overflow","visible");document.title=r;history.replaceState(null,r,e);u=!0})}function h(){$(n).click(function(n){var y,s,b,c,a;t=[];n.preventDefault();var u=$(this).attr("data-id"),f=$(this).attr("href"),v=$(this).attr("title"),e=$(this).attr("data-type"),k=$(this).attr("data-zone"),d=$(this).attr("data-newsType"),g=$(this).attr("data-objecttype");if(parseInt(g)===2){y=window.open(f,"_blank");y.focus();return}if(e===27||e===10||e===9||e===11||d===2){window.location.href=f;return}s=t.filter(function(n){return n.newsId===u});u!==undefined&&s.length===0&&t.push({newsId:u,title:v,url:f});i!==null&&i.removeAllSlides();videoInContent.stopAllVideo();var h="",p="",w="",r=null;for($(n.target).closest(".relate-container").length===1?r=$('.relate-container ul li a:not([data-objecttype="2"])').parents("li"):$(n.target).closest(".box_co_the_ban_quan_tam .canyoucare").length===1?r=$(".box_co_the_ban_quan_tam .canyoucare li"):$(n.target).closest(".box-newsrelated").length===1&&(r=$('.box-newsrelated .list-news li a:not([data-objecttype="2"])').parents("li")),r===null&&(r=$('.relate-container ul li a:not([data-objecttype="2"])').parents("li")),r!==null&&r.each(function(n,i){h=$(i).find("a").attr("data-id");p=$(i).find("a").attr("title");w=$(i).find("a").attr("href");s=t.filter(function(n){return n.newsId===h});h!==undefined&&s.length===0&&t.push({newsId:h,title:p,url:w})}),b=t.length,c="",a=0;a<b;a++)c+='<li class="content-detail swiper-slide"><\/li>';return $("#NewsPopup .popup-detail-swiper-container ul.swiper-wrapper").html(c),o(0,u,f,v,k),$("#NewsPopup").css("display","block"),$("body").css("overflow","hidden"),l(),!1});$("#NewsPopup").unbind("click").click(function(n){$(n.target).closest(".popup-detail-swiper-container").length!==0||$(n.target).hasClass("tags-item last")||(videoInContent.stopAllVideo(),$("#NewsPopup").css("display","none"),$("body").css("overflow","visible"),document.title=r,history.replaceState(null,r,e),u=!0)});c()}function c(){setTimeout(function(){window.onpopstate=function(){var n=$("#NewsPopup").is(":hidden");n?window.history.back():$(".closepopup").click()}},500)}function o(n,i,r,e,o){var h,l,a,c;i!==undefined&&i!==0&&(h="#NewsPopup li.swiper-slide.content-detail:nth-child("+(n+1)+")",l=$(h),l.html()===""?$.ajax({url:"/ajax-detail-popup-"+i+".htm",xhrFields:{withCredentials:!0},type:"GET",success:function(r){var a=t.filter(function(n){return n.newsId===i}),c;a.length>0&&(c=a[0],document.title=c.title,n===0?history.pushState({title:c.title,url:c.url},c.title,c.url):history.replaceState({title:c.title,url:c.url},c.title,c.url));l.html(r);f.initMedia(h);comment.initListComment(h,i,e,o,!0);$(h+' .comment-wrapper [data-act="viewmore"]').off("click");comment.initPopupShowCommentMore();f.viewMoreTag();setTimeout(function(){u&&($(h+" .sticky-box-popup").stickyBox({stopper:h+" .author",scrollContainer:"#NewsPopup",contentContainer:h}),u=!1)},2e3);setTimeout(function(){$("#NewsPopup li.swiper-slide.content-detail").removeAttr("style");var n=$(h).height();$(h).attr("data-height",n);$("#NewsPopup li.swiper-slide.content-detail").css("height",n);$(h).find(".lazy").each(function(n,t){$(t).attr("src",$(t).attr("data-src"))})},2e3);s()}}):(a=t.filter(function(n){return n.newsId===i}),a.length>0&&(c=a[0],document.title=c.title,history.replaceState({title:c.title,url:c.url},c.title,c.url))))}function l(){i=new Swiper("#NewsPopup .popup-detail-swiper-container",{slidesPerView:"auto",initialSlide:0,loopedSlides:1,spaceBetween:0,nextButton:".swiper-button-next",prevButton:".swiper-button-prev",simulateTouch:!1,allowTouchMove:!1,centeredSlides:!1,preventClicks:!1,preventClicksPropagation:!1});i.on("onSlideNextStart",function(){var n=i.activeIndex,f=0,e="",r,s,u;t.length>=n+1&&(f=t[n].newsId,e=t[n].url);r="#NewsPopup li.swiper-slide.content-detail:nth-child("+n+")";$(r).parent().removeAttr("style");$(r).find(".sticky-box-popup").removeAttr("style");s="#NewsPopup li.swiper-slide.content-detail:nth-child("+(n+1)+")";u=$(s).attr("data-height");u!==undefined&&$("#NewsPopup li.swiper-slide.content-detail").css("height",u);o(n,f,e);$("#NewsPopup").scrollTop(0)});i.on("onSlideNextEnd",function(){var t=i.activeIndex,n="#NewsPopup li.swiper-slide.content-detail:nth-child("+(t+1)+")";$("#NewsPopup .sticky-box-popup").removeAttr("style");setTimeout(function(){$(n+" .sticky-box-popup").stickyBox({stopper:n+" .author",scrollContainer:"#NewsPopup",contentContainer:n})},1e3)});i.on("onSlidePrevStart",function(){var r=i.activeIndex,o=0,h="",u,f,s,e,n;t.length>=r+1&&(o=t[r].newsId,h=t[r].url);u=t.filter(function(n){return n.newsId===o});f="#NewsPopup li.swiper-slide.content-detail:nth-child("+r+")";$(f).parent().removeAttr("style");$(f).find(".sticky-box-popup").removeAttr("style");s="#NewsPopup li.swiper-slide.content-detail:nth-child("+(r+1)+")";e=$(s).attr("data-height");e!==undefined&&$("#NewsPopup li.swiper-slide.content-detail").css("height",e);u.length>0&&(n=u[0],document.title=n.title,history.replaceState({title:n.title,url:n.url},n.title,n.url));$("#NewsPopup").scrollTop(0)});i.on("onSlidePrevEnd",function(){var t=i.activeIndex,n="#NewsPopup li.swiper-slide.content-detail:nth-child("+(t+1)+")";$("#NewsPopup .sticky-box-popup").removeAttr("style");$(n+" .sticky-box-popup").stickyBox({stopper:n+" .author",scrollContainer:"#NewsPopup",contentContainer:n})})}var f=this,t=[],i=null,e=document.URL,r=document.title,u=!0;h()},viewMoreTag:function(){$(".tags-container .last").length>0&&$(".tags-container .last").each(function(n,t){$(t).off("click").on("click",function(){var n=$(this),t=n.parents(".tags-container");t.find(".tags-item.hidden").removeClass("hidden");n.remove()})})},setColRightForHeightConent:function(){var n=$(".detail-w").height();$(".content-detail.column-3").length>0?(n>3500&&$(".area6").removeClass("hidden"),n>3130&&$(".area5").removeClass("hidden"),n>2660&&$(".area4").removeClass("hidden"),n>2360&&$(".area3_3").removeClass("hidden"),n>2100&&$(".area3_2").removeClass("hidden"),n>1555&&$(".area3_1").removeClass("hidden"),n>1295&&$(".area2_2").removeClass("hidden"),n>1030&&$(".area2_1").removeClass("hidden"),n>785&&$(".area1_2").removeClass("hidden")):$(".content-detail.column-2").length>0&&(n>4470&&$(".area6").removeClass("hidden"),n>4240&&$(".area5").removeClass("hidden"),n>3545&&$(".area4").removeClass("hidden"),n>3210&&$(".area3_3").removeClass("hidden"),n>2930&&$(".area3_2").removeClass("hidden"),n>2360&&$(".area3_1").removeClass("hidden"),n>2100&&$(".area2_2").removeClass("hidden"),n>1600&&$(".area2_1").removeClass("hidden"),n>1325&&$(".area1_2").removeClass("hidden"));$(".area2_1").is(":visible")&&$("#jmgdsrp8").length>0&&arfAsync.push("jmgdsrp8");$(".area3_1").is(":visible")&&$("#jmgdujzj").length>0&&arfAsync.push("jmgdujzj");$(".area3_3").is(":visible")&&$("#jmgdwhr7").length>0&&arfAsync.push("jmgdwhr7");$(".area2_1").is(":visible")&&$("#jmww869k").length>0&&arfAsync.push("jmww869k");$(".area3_1").is(":visible")&&$("#jmww8nk3").length>0&&arfAsync.push("jmww8nk3");$(".area3_3").is(":visible")&&$("#jmww9hum").length>0&&arfAsync.push("jmww9hum");$(".area2_1").is(":visible")&&$("#jmwv7pvn").length>0&&arfAsync.push("jmwv7pvn");$(".area3_1").is(":visible")&&$("#jmwv86ru").length>0&&arfAsync.push("jmwv86ru");$(".area3_3").is(":visible")&&$("#jmwv8rpn").length>0&&arfAsync.push("jmwv8rpn");$(".area2_1").is(":visible")&&$("#jmwy2mc6").length>0&&arfAsync.push("jmwy2mc6");$(".area3_1").is(":visible")&&$("#jmwy37re").length>0&&arfAsync.push("jmwy37re");$(".area3_3").is(":visible")&&$("#jmwy3rfr").length>0&&arfAsync.push("jmwy3rfr");$(".area2_1").is(":visible")&&$("#jntrssei").length>0&&arfAsync.push("jntrssei");$(".area3_1").is(":visible")&&$("#jntrtame").length>0&&arfAsync.push("jntrtame");$(".area3_3").is(":visible")&&$("#jntrts5w").length>0&&arfAsync.push("jntrts5w")},setInMiddleScreen:function(n){var t=$(n),u=t.outerHeight(),f=$(window).height(),i=f/2-u/2,r=t.offset().top;i>r&&t.css({"margin-top":i-r})}};spnBeforeAfter={init:function(){var n=418;($(".content-detail.column-1").length>0||$(".content-detail.column-2").length>0)&&(n=578);$(".before-after").each(function(){var t=parseInt(n*t/i),i=n;$(this).beforeAfter({animateIntro:!0,introDuration:100,linkDisplaySpeed:500,introPosition:parseFloat($(this).attr("position-percent")),showFullLinks:!0,title:decodeURIComponent($(this).attr("title")),cursor:"e-resize",enableKeyboard:!0,beforeDate:$(this).attr("before-date"),afterDate:$(this).attr("after-date"),imageWidth:i,imageHeight:t})})}};getBoxDetail={catId:0,init:function(n){var t,i,r;window.location.pathname!=="/"&&(t=this,t.catId=n,i=0,$("#hidNewsId").val()&&(i=$("#hidNewsId").val()),r="/ajax-detail-"+t.catId+"-"+i+".htm",$.ajax({url:r,data:{},xhrFields:{withCredentials:!0},type:"GET",success:function(n){var r=$("<div/>").html(n),i,u;$(".detail-w .right-site").length>0&&(i=r.find(".hotnewscolumn3"),i.length>0&&$(".right-site .box_noi_bat_detail_column3").html(i.html()));$(".content-detail .slidebar").length>0&&(i=r.find(".hotnewscolumn2"),i.length>0&&$(".slidebar .box_noi_bat_detail_column2").html(i.html()));$(".slidebar .box_xem_nhieu_detail_column23").length>0&&(i=r.find(".box_xem_nhieu"),i.length>0&&$(".slidebar .box_xem_nhieu_detail_column23").html(i.html()));$(".box_video_detail_column23").length>0&&(i=r.find(".box_video_detail_ap"),i.length>0&&$(".box_video_detail_column23").html(i.html()));$(".box_co_the_ban_quan_tam").length>0&&(i=r.find(".box_can_you_care"),i.length>0&&($(".box_co_the_ban_quan_tam").html(i.html()),$(".k14-sp-wrapper").length==0&&detail.initPopup(".canyoucare a")));$(".box_noi_bat_bottom").length>0&&(i=r.find(".box_noi_bat_detail_stream"),i.length>0&&$(".box_noi_bat_bottom").html(i.html()));$(".box_tren_dong_su_kien").length>0&&(i=r.find(".box_tren_dong_su_kien_ap"),i.length>0&&$(".box_tren_dong_su_kien").html(i.html()));$(".box_image").length>0&&(i=r.find(".box-image"),i.length>0&&$(".box_image").html(i.html()));$(".box-video-stream").length>0&&(i=r.find(".box-video-stream"),i.length>0?($(".box-video-stream").html(i.html()),t.initSwiperVideo()):($(".box-video-stream").prev(".line").remove(),$(".box-video-stream").remove()));$(".box_news_stream").length>0&&(i=r.find(".stream-home"),i.length>0&&(i.find("li.news-normal").each(function(n,t){$(t).find(".news-extra-one").length===0&&$(t).find(".sapo").removeClass("collapse")}),$(".box_news_stream").html(i.html())));$(".box_other_cat").length>0&&(i=r.find(".box_other_cat"),i.length>0&&$(".box_other_cat").html(i.html()));$(".area3-boxcate").length>0&&(i=r.find(".area3"),i.length>0&&$(".area3-boxcate").append(i.html()));$(".area4").length>0&&(i=r.find(".area4"),i.length>0&&$(".area4").append(i.html()));$(".box_xem_them_detail_column23").length>0&&(i=r.find(".box_xem_them_detail"),i.length>0&&$(".box_xem_them_detail_column23").html(i.html()));$(".timeago").timeago();initIconNews();formatTrimLine();u=$(".lazy");u.length>0&&u.Lazy({afterLoad:function(n){$(n).removeClass("lazy")}});setTimeout(function(){$(".k14-sp-wrapper").length>0||$(".content.column1cover").length>0||$(".content .column-1").length>0||$(".box_xem_them_detail_column23").stickyBox({stopper:".content-bottom-detail"})},9e3);$(".content .box-category3:not(.canyoucare) .list-news li .name-title a").each(function(){equalheight($(this))});equalheight(".content .content-bottom-detail .boxFocusDetail .list-news li:not(:first-child) .name-title a");setTimeout(function(){if($(".content:not(.tab-content-popup-comment) .content-bottom-detail .boxFocusDetail .list-news li .sapo").length>0){var n=$(".content:not(.tab-content-popup-comment) .content-bottom-detail .boxFocusDetail .list-news li .sapo").offset().top+$(".content .content-bottom-detail .boxFocusDetail .list-news li .sapo").height(),t=$(".content .content-bottom-detail .boxFocusDetail .description .list-news-same-cate").offset().top;n>=t&&$(".content .content-bottom-detail .boxFocusDetail .list-news li .sapo").hide()}$(".content:not(.tab-content-popup-comment) .stream-home .box-news-latest ul .news-item:not(.news-big)").each(function(){$(this).find(".sapo").offset().top+$(this).find(".sapo").height()>=$(this).find(".news-extra-one").offset().top&&$(this).find(".sapo").hide()});$(".content .stream-home .box-news-latest ul .news-item.news-big").each(function(){$(this).find(".sapo").length>0&&$(this).find("img").length>0&&$(this).find(".sapo").offset().top+$(this).find(".sapo").height()>=$(this).find("img").offset().top&&$(this).find(".sapo").hide()})},1e3);getCountView(".canyoucare","lượt xem",!0,!0);$(".box-worldcup-2018.cate-other-detail").each(function(){equalheight($(this).find(".title-box-wc-2018 a"))});$("#phototab").click(function(n){n.stopPropagation();$(".box_image .list-left li").removeClass("active");$("#lstMegastoryTab").hide();var t=$(this);t.parents("li").addClass("active");$("#lstPhotoTab").show();$("#lstPhotoTab").removeClass("hidden");$(".photoviewmore").attr("href","/photo.htm").attr("title","Photo")});$("#megastorytab").click(function(n){n.stopPropagation();$(".box_image .list-left li").removeClass("active");$("#lstPhotoTab").hide();var t=$(this);t.parents("li").addClass("active");$("#lstMegastoryTab").show();$("#lstMegastoryTab").removeClass("hidden");$(".photoviewmore").attr("href","/megastory.htm").attr("title","Megastory");equalheight(".content .box-photo ul#lstMegastoryTab li .title-box-photo a")});equalheight(".content .content-detail .slidebar .box-category2.boxccmdetail ul li")}}))},initSwiperVideo:function(){var n=this,t=new Swiper(".box-video-stream .swiper-container",{slidesPerView:"auto",spaceBetween:0,nextButton:".swiper-button-next",prevButton:".swiper-button-prev",centeredSlides:!1,preventClicks:!1,preventClicksPropagation:!1,onInit:function(){n.videoSlideChange()},onSlideChangeStart:function(){n.videoSlideChange()}});t.on("slideChange",function(){n.videoSlideChange()})},videoSlideChange:function(){playerInitScript.pauseAll();var t=".include-video .swiper-slide-active .video-content",n=$(t);n.find("video").length>0||(n.find("img").remove(),n.find(".VCSortableInPreviewMode").removeClass("hidden"),videoHD.init(t,{type:videoHD.videoType.stream}))}};iniDetail={initVideoDetail:function(){$(".entry-body").length>0&&(videoHD.isAd=!0,videoHD.init(".entry-body",{type:videoHD.videoType.newsDetail}),videoInContent.init(".entry-body"))},init:function(){iniDetail.initVideoDetail()}};setcss=!0;$(window).scroll(function(){var n=$(this).scrollTop();n>=178?setcss&&($(".header-bottom").css({position:"fixed",top:0,width:"100%",height:"30px",background:"#fff","z-index":"9999"}),setcss=!1):(setcss=!0,$(".header-bottom").css({position:"relative",height:"auto"}))});