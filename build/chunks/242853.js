/** chunk id: 242853, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => _
});
var n = l(627968);
l(64700);
var r = l(503698),
    s = l.n(r),
    a = l(158954),
    o = l(397927),
    i = l(898985),
    c = l(922301),
    d = l(750112),
    u = l(750656),
    m = l(927961),
    p = l(985018),
    f = l(880203),
    g = l(317857);

function _(e) {
    let {
        selectedEffectId: t,
        setSelectedEffectId: l,
        className: r
    } = e;
    return (0, n.jsxs)("div", {
        className: r,
        children: [(0, n.jsxs)(a.DZT, {
            variant: "heading-md/semibold",
            className: f.s,
            children: [p.intl.string(m.default["1wilM1"]), (0, n.jsx)(o.tvc, {
                size: "xs",
                color: o.LU0.colors.TEXT_DEFAULT
            })]
        }), (0, n.jsx)(a.BJc, {
            direction: "horizontal",
            align: "center",
            wrap: !0,
            gap: 8,
            children: u.re.map(e => (0, n.jsx)(x, {
                effectId: e,
                selected: e === t,
                onClick: () => l(e)
            }, e))
        })]
    })
}

function x(e) {
    let {
        effectId: t,
        selected: l,
        onClick: r
    } = e, a = (0, i._)(t);
    return (0, n.jsx)(o.DUT, {
        className: s()(g.Tw, {
            [g.wH]: l
        }),
        onClick: r,
        children: (0, n.jsx)(d.A, {
            userName: a.name,
            effectDisplayType: c.G.STATIC,
            displayNameStyles: a.previewStyles,
            textClassName: g.tr,
            inProfile: !0
        })
    }, t)
}