/** chunk id: 136179, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(607399),
    a = n(397927),
    o = n(772577),
    c = n(216042);

function u(e) {
    let {
        guildId: t,
        children: n,
        className: l
    } = e, {
        horizontalScrollNotice: u,
        handleScroll: d,
        handleSetScrollerRef: p,
        handleSetContainerRef: h
    } = (0, o.A)(t), g = (0, r.jsx)("div", {
        className: c.vi,
        children: (0, r.jsx)("div", {
            className: i()(c._s, l),
            children: n
        })
    });
    return s.Fr || (g = (0, r.jsxs)(r.Fragment, {
        children: [u, (0, r.jsx)(a.T7Y, {
            className: c.XG,
            orientation: "horizontal",
            ref: p,
            onScroll: d,
            children: g
        })]
    })), (0, r.jsx)("div", {
        className: c.Rc,
        ref: h,
        children: g
    })
}