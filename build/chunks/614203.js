/** chunk id: 614203 params = (module,exports,require) **/
"use strict";
s.d(e, {
    A: () => f
});
var n = s(627968),
    a = s(64700),
    r = s(621466),
    i = s(311907),
    l = s(397927),
    o = s(711581),
    c = s(638128),
    p = s(975571),
    u = s(454235),
    d = s(652215),
    g = s(985018);

function f(t) {
    let {
        text: e = "",
        target: s
    } = t, f = (0, i.bG)([c.A], () => c.A.isEnabled()), b = (0, i.bG)([c.A], () => c.A.hasLearnedWord(e), [e]), x = a.useRef({
        ...t,
        spellcheckEnabled: f
    });
    x.current = {
        ...t,
        spellcheckEnabled: f
    };
    let m = a.useRef(!1),
        [T, h] = a.useState(!1),
        [S, y] = a.useState([]),
        A = a.useCallback(() => {
            let {
                spellcheckEnabled: t,
                text: e,
                onHeightUpdate: s
            } = x.current;
            t && (0, u.TT)() && Promise.all([(0, u.PS)(e, !0), (0, u.Os)(e, !0)]).then(t => {
                let [e, n] = t;
                m.current && (h(e), y(n), s())
            })
        }, []),
        C = a.useCallback(() => {
            if ((0, r.vq)(s, HTMLInputElement) || (0, r.vq)(s, HTMLTextAreaElement)) {
                let {
                    selectionStart: t,
                    selectionEnd: e,
                    value: n
                } = s;
                s.value = "", s.value = n, "email" !== s.type && (s.selectionStart = t, s.selectionEnd = e)
            }
        }, [s]);
    return (a.useEffect(() => {
        let t = (0, u.nL)(A);
        return m.current = !0, () => {
            m.current = !1, t()
        }
    }, [A]), a.useEffect(() => {
        A()
    }, [e, f, A]), (0, u.TT)()) ? [S.map((t, e) => (0, n.jsx)(l.Drp, {
        id: `correction-${e}`,
        label: t,
        action: () => {
            (0, u.rK)(t), s.focus()
        }
    }, `correction-${e}`)), (0, n.jsxs)(n.Fragment, {
        children: [T ? (0, n.jsx)(l.Drp, {
            id: "add-to-dictionary",
            label: g.intl.string(g.t.HJmG1G),
            action: () => {
                (0, o.NG)(e), C()
            }
        }) : null, b && (0, n.jsx)(l.Drp, {
            id: "remove-from-dictionary",
            label: g.intl.string(g.t.xXqIX0),
            action: () => {
                (0, o.QZ)(e), C()
            }
        }), (0, n.jsx)(l.sLh, {
            id: "spellcheck",
            label: g.intl.string(g.t.TKkotf),
            checked: f,
            action: () => {
                (0, o.Np)(), C()
            }
        }), f ? (0, n.jsx)(l.Drp, {
            id: "languages",
            label: g.intl.string(g.t.OlOHDH),
            action: () => window.open(p.A.getArticleURL(d.MVz.SPELLCHECK))
        }) : null]
    })] : [null, null]
}