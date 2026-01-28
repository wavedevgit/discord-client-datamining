/** Chunk was on 5606 **/
/** chunk id: 147441, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(397927),
    o = n(985018),
    c = n(997021);
let d = i.createContext({
    isOpen: !1,
    toggleOpen: () => {}
});

function u(e) {
    let {
        children: t
    } = e, [n, l] = i.useReducer(e => !e, !1), s = i.useMemo(() => ({
        isOpen: n,
        toggleOpen: l
    }), [n]);
    return (0, r.jsx)(d.Provider, {
        value: s,
        children: t(n)
    })
}
u.Toggle = function(e) {
    let {
        className: t,
        text: n
    } = e, {
        isOpen: l,
        toggleOpen: u
    } = i.useContext(d), p = l ? a.tN5 : a.abt, _ = null != n ? n : l ? o.intl.string(o.t.fgq1gs) : o.intl.string(o.t.XJuakA);
    return (0, r.jsxs)(a.DUT, {
        className: s()(c.L, t),
        onClick: u,
        children: [(0, r.jsx)(a.Text, {
            variant: "heading-sm/semibold",
            tag: "div",
            color: "currentColor",
            children: _
        }), (0, r.jsx)(p, {
            size: "sm",
            color: "currentColor"
        })]
    })
}