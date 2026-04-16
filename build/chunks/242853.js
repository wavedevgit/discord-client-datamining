/** chunk id: 242853 params = (module,exports,require) **/
a.d(t, {
    A: () => x
});
var n = a(627968);
a(64700);
var s = a(503698),
    l = a.n(s),
    r = a(158954),
    i = a(397927),
    o = a(898985),
    c = a(922301),
    d = a(750112),
    u = a(750656),
    m = a(864386),
    _ = a(985018),
    p = a(257170),
    h = a(700090);

function x(e) {
    let {
        selectedEffectId: t,
        setSelectedEffectId: a,
        className: s
    } = e;
    return (0, n.jsxs)("div", {
        className: s,
        children: [(0, n.jsxs)(r.DZT, {
            variant: "heading-md/semibold",
            className: p.s,
            children: [_.intl.string(m.default["1wilM1"]), (0, n.jsx)(i.tvc, {
                size: "xs",
                color: i.LU0.colors.TEXT_DEFAULT
            })]
        }), (0, n.jsx)(r.BJc, {
            direction: "horizontal",
            align: "center",
            wrap: !0,
            gap: 8,
            children: u.re.map(e => (0, n.jsx)(g, {
                effectId: e,
                selected: e === t,
                onClick: () => a(e)
            }, e))
        })]
    })
}

function g(e) {
    let {
        effectId: t,
        selected: a,
        onClick: s
    } = e, r = (0, o._)(t);
    return (0, n.jsx)(i.DUT, {
        className: l()(h.Tw, {
            [h.wH]: a
        }),
        onClick: s,
        children: (0, n.jsx)(d.A, {
            userName: r.name,
            effectDisplayType: c.G.STATIC,
            displayNameStyles: r.previewStyles,
            textClassName: h.tr,
            inProfile: !0
        })
    }, t)
}