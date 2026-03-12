/** chunk id: 147441 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(397927),
    o = n(985018),
    d = n(775391);
let c = s.createContext({
    isOpen: !1,
    toggleOpen: () => {}
});

function u(e) {
    let {
        children: t
    } = e, [n, l] = s.useReducer(e => !e, !1), r = s.useMemo(() => ({
        isOpen: n,
        toggleOpen: l
    }), [n]);
    return (0, i.jsx)(c.Provider, {
        value: r,
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
    } = s.useContext(c), _ = l ? a.tN5 : a.abt, m = null != n ? n : l ? o.intl.string(o.t.fgq1gs) : o.intl.string(o.t.XJuakA);
    return (0, i.jsxs)(a.DUT, {
        className: r()(d.L, t),
        onClick: u,
        children: [(0, i.jsx)(a.Text, {
            variant: "heading-sm/semibold",
            tag: "div",
            color: "currentColor",
            children: m
        }), (0, i.jsx)(_, {
            size: "sm",
            color: "currentColor"
        })]
    })
}