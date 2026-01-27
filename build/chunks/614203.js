/** Chunk was on 58127 **/
/** chunk id: 614203, original params: t,e,s (module,exports,require) **/
"use strict";
s.d(e, {
    A: () => x
}), s(896048);
var n = s(627968),
    r = s(64700),
    a = s(621466),
    i = s(311907),
    l = s(397927),
    c = s(711581),
    o = s(638128),
    u = s(975571),
    p = s(454235),
    g = s(652215),
    d = s(985018);

function b(t) {
    for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(s);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(s).filter(function(t) {
            return Object.getOwnPropertyDescriptor(s, t).enumerable
        }))), n.forEach(function(e) {
            var n;
            n = s[e], e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n
        })
    }
    return t
}

function f(t, e) {
    return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
        var s = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            s.push.apply(s, n)
        }
        return s
    })(Object(e)).forEach(function(s) {
        Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(e, s))
    }), t
}

function x(t) {
    let {
        text: e = "",
        target: s
    } = t, x = (0, i.bG)([o.A], () => o.A.isEnabled()), h = (0, i.bG)([o.A], () => o.A.hasLearnedWord(e), [e]), y = r.useRef(f(b({}, t), {
        spellcheckEnabled: x
    }));
    y.current = f(b({}, t), {
        spellcheckEnabled: x
    });
    let m = r.useRef(!1),
        [S, T] = r.useState(!1),
        [j, O] = r.useState([]),
        C = r.useCallback(() => {
            let {
                spellcheckEnabled: t,
                text: e,
                onHeightUpdate: s
            } = y.current;
            t && (0, p.TT)() && Promise.all([(0, p.PS)(e, !0), (0, p.Os)(e, !0)]).then(t => {
                let [e, n] = t;
                m.current && (T(e), O(n), s())
            })
        }, []),
        E = r.useCallback(() => {
            if ((0, a.vq)(s, HTMLInputElement) || (0, a.vq)(s, HTMLTextAreaElement)) {
                let {
                    selectionStart: t,
                    selectionEnd: e,
                    value: n
                } = s;
                s.value = "", s.value = n, "email" !== s.type && (s.selectionStart = t, s.selectionEnd = e)
            }
        }, [s]);
    return (r.useEffect(() => {
        let t = (0, p.nL)(C);
        return m.current = !0, () => {
            m.current = !1, t()
        }
    }, [C]), r.useEffect(() => {
        C()
    }, [e, x, C]), (0, p.TT)()) ? [j.map((t, e) => (0, n.jsx)(l.Drp, {
        id: "correction-".concat(e),
        label: t,
        action: () => {
            (0, p.rK)(t), s.focus()
        }
    }, "correction-".concat(e))), (0, n.jsxs)(n.Fragment, {
        children: [S ? (0, n.jsx)(l.Drp, {
            id: "add-to-dictionary",
            label: d.intl.string(d.t.HJmG1G),
            action: () => {
                (0, c.NG)(e), E()
            }
        }) : null, h && (0, n.jsx)(l.Drp, {
            id: "remove-from-dictionary",
            label: d.intl.string(d.t.xXqIX0),
            action: () => {
                (0, c.QZ)(e), E()
            }
        }), (0, n.jsx)(l.sLh, {
            id: "spellcheck",
            label: d.intl.string(d.t.TKkotf),
            checked: x,
            action: () => {
                (0, c.Np)(), E()
            }
        }), x ? (0, n.jsx)(l.Drp, {
            id: "languages",
            label: d.intl.string(d.t.OlOHDH),
            action: () => window.open(u.A.getArticleURL(g.MVz.SPELLCHECK))
        }) : null]
    })] : [null, null]
}