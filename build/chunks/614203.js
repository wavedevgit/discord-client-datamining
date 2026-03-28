/** chunk id: 614203 params = (module,exports,require) **/
"use strict";
s.d(e, {
    A: () => b
});
var a = s(627968),
    n = s(64700),
    r = s(621466),
    i = s(311907),
    c = s(397927),
    l = s(711581),
    o = s(638128),
    p = s(975571),
    u = s(454235),
    g = s(652215),
    d = s(985018);

function b(t) {
    let {
        text: e = "",
        target: s
    } = t, b = (0, i.bG)([o.A], () => o.A.isEnabled()), f = (0, i.bG)([o.A], () => o.A.hasLearnedWord(e), [e]), x = n.useRef({
        ...t,
        spellcheckEnabled: b
    });
    x.current = {
        ...t,
        spellcheckEnabled: b
    };
    let h = n.useRef(!1),
        [T, m] = n.useState(!1),
        [y, S] = n.useState([]),
        C = n.useCallback(() => {
            let {
                spellcheckEnabled: t,
                text: e,
                onHeightUpdate: s
            } = x.current;
            t && (0, u.TT)() && Promise.all([(0, u.PS)(e, !0), (0, u.Os)(e, !0)]).then(t => {
                let [e, a] = t;
                h.current && (m(e), S(a), s())
            })
        }, []),
        A = n.useCallback(() => {
            if ((0, r.vq)(s, HTMLInputElement) || (0, r.vq)(s, HTMLTextAreaElement)) {
                let {
                    selectionStart: t,
                    selectionEnd: e,
                    value: a
                } = s;
                s.value = "", s.value = a, "email" !== s.type && (s.selectionStart = t, s.selectionEnd = e)
            }
        }, [s]);
    return (n.useEffect(() => {
        let t = (0, u.nL)(C);
        return h.current = !0, () => {
            h.current = !1, t()
        }
    }, [C]), n.useEffect(() => {
        C()
    }, [e, b, C]), (0, u.TT)()) ? [y.map((t, e) => (0, a.jsx)(c.Drp, {
        id: `correction-${e}`,
        label: t,
        action: () => {
            (0, u.rK)(t), s.focus()
        }
    }, `correction-${e}`)), (0, a.jsxs)(a.Fragment, {
        children: [T ? (0, a.jsx)(c.Drp, {
            id: "add-to-dictionary",
            label: d.intl.string(d.t.HJmG1G),
            action: () => {
                (0, l.NG)(e), A()
            }
        }) : null, f && (0, a.jsx)(c.Drp, {
            id: "remove-from-dictionary",
            label: d.intl.string(d.t.xXqIX0),
            action: () => {
                (0, l.QZ)(e), A()
            }
        }), (0, a.jsx)(c.sLh, {
            id: "spellcheck",
            label: d.intl.string(d.t.TKkotf),
            checked: b,
            action: () => {
                (0, l.Np)(), A()
            }
        }), b ? (0, a.jsx)(c.Drp, {
            id: "languages",
            label: d.intl.string(d.t.OlOHDH),
            action: () => window.open(p.A.getArticleURL(g.MVz.SPELLCHECK))
        }) : null]
    })] : [null, null]
}