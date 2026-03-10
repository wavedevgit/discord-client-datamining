/** chunk id: 147441 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
    o = n(985018),
    d = n(997021);
let c = s.createContext({
    isOpen: !1,
    toggleOpen: () => {}
});

function u(e) {
    let {
        children: t
    } = e, [n, l] = s.useReducer(e => !e, !1), a = s.useMemo(() => ({
        isOpen: n,
        toggleOpen: l
    }), [n]);
    return (0, i.jsx)(c.Provider, {
        value: a,
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
    } = s.useContext(c), _ = l ? r.tN5 : r.abt, g = null != n ? n : l ? o.intl.string(o.t.fgq1gs) : o.intl.string(o.t.XJuakA);
    return (0, i.jsxs)(r.DUT, {
        className: a()(d.L, t),
        onClick: u,
        children: [(0, i.jsx)(r.Text, {
            variant: "heading-sm/semibold",
            tag: "div",
            color: "currentColor",
            children: g
        }), (0, i.jsx)(_, {
            size: "sm",
            color: "currentColor"
        })]
    })
}