/** Chunk was on 47841 **/
/** chunk id: 111771, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
}), n(896048), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(158954),
    o = n(44234),
    c = n(282054),
    d = n(620216),
    u = n(694433),
    g = n(441442),
    m = n(985018),
    p = n(604175);

function f(e) {
    var t, n, l;
    let {
        changeTitle: f,
        value: b,
        options: h,
        className: x,
        onChange: j
    } = e, [_, O] = i.useState(b), [v, y] = i.useState(!1), [A, E] = i.useState(!1), N = i.useRef(null);
    i.useEffect(() => {
        O(b)
    }, [b]), i.useEffect(() => () => {
        clearTimeout(N.current)
    }, []);
    let S = h.find(e => e.value === _);
    return (0, r.jsx)(u.A, {
        title: v ? f : null != (t = null == S ? void 0 : S.title) ? t : f,
        description: v ? "(".concat(null != (n = null == S ? void 0 : S.title) ? n : m.intl.string(m.t.PoWNfe), ")") : null != (l = null == S ? void 0 : S.description) ? l : "",
        highlightColor: v ? d.t.NONE : null == S ? void 0 : S.highlightColor,
        action: (0, r.jsx)(a.QWc, {
            text: m.intl.string(m.t.GEgsA4),
            textVariant: "text-sm/medium"
        }),
        loading: A,
        className: x,
        children: h.map((e, t) => (0, r.jsx)(g.A, {
            title: e.title,
            description: e.description,
            highlightColor: e.highlightColor,
            className: s()(p.bi, _ === e.value && p.wH),
            selected: _ === e.value,
            action: _ === e.value ? (0, r.jsx)(c.A, {
                className: p.VB
            }) : (0, r.jsx)(o.A, {
                className: p.VB
            }),
            onClick: () => {
                e.disabled || e.value === _ || (E(!0), null == j || j(e), O(e.value), N.current = setTimeout(() => {
                    E(!1), y(!1)
                }, 1e3))
            },
            disabled: e.disabled
        }, "".concat(e.title, "-").concat(t)))
    })
}