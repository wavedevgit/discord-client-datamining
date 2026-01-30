/** chunk id: 873879, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I
}), n(591487), n(727858), n(747238), n(812715), n(866193);
var r = n(284009),
    i = n.n(r),
    a = n(280230),
    o = n.n(a);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            s(e, t, n[t])
        })
    }
    return e
}

function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function u(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let d = /\n{2,}$/,
    f = /(?:^|\n)( *)$/,
    p = "(?:[*-]|\\d+\\.)",
    _ = "(%INDENT_CAPTURE_PATTERN%)(" + p + ") +",
    h = RegExp("^" + _.replace("%INDENT_CAPTURE_PATTERN%", " *")),
    m = _ + "[^\\n]*(?:\\n(?!%INDENT_CAPTURE_PATTERN%" + p + " )[^\\n]*)*(\n|$)",
    g = / *\n$/,
    E = RegExp("^( *)(" + p + ") [\\s\\S]+?(?:\\n(?! )(?!\\1" + p + " )|$)"),
    y = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
    b = 10,
    O = 1,
    v = 1e9,
    A = e => e.map(e => ("text" === e.type && null != e.content && (e.content = e.content.replace(/\n+\s*$/, "")), e)),
    I = u(l({}, o().defaultRules.list), {
        requiredFirstCharacters: " *-0123456789".split(""),
        match: (e, t) => {
            if (!t.allowList || t._listLevel >= b + 1) return null;
            let n = null == t.prevCapture ? "" : t.prevCapture[0],
                r = f.exec(n);
            return null == r || y.test(r[0]) ? null : E.exec(e)
        },
        parse: (e, t, n) => {
            let r = e[2],
                a = r.length > 1,
                o = a ? Math.min(v, Math.max(O, +r)) : void 0,
                s = e[0].replace(d, "\n"),
                c = h.exec(s),
                f = null != c ? c[0].length : 0,
                p = null != c ? c[1].length : 0,
                _ = " {".concat(p, ",").concat(p + 1, "}"),
                E = RegExp(m.replaceAll("%INDENT_CAPTURE_PATTERN%", _), "gm"),
                y = RegExp("^ {1," + f + "}", "gm"),
                b = s.match(E);
            i()(null != b, "markup list items can not be parsed.");
            let I = !1;
            return {
                ordered: a,
                start: o,
                items: b.map((e, r) => {
                    let i, a = e.replace(h, "").replace(y, ""),
                        o = r === b.length - 1,
                        s = -1 !== a.indexOf("\n\n") || o && I;
                    I = s;
                    let c = n.inline,
                        d = n._list,
                        f = n._listLevel;
                    n._list = !0, n._listLevel = (null != f ? f : 0) + 1, s ? (n.inline = !1, i = a.replace(g, "\n\n")) : (n.inline = !0, i = a.replace(g, ""));
                    let p = A(t(i, u(l({}, n), {
                        allowHeading: !1
                    })));
                    return n.inline = c, n._list = d, n._listLevel = f, p
                })
            }
        }
    })