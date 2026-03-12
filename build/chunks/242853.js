/** chunk id: 242853 params = (module,exports,require) **/
s.d(t, {
    A: () => p
});
var l = s(627968);
s(64700);
var a = s(503698),
    n = s.n(a),
    i = s(158954),
    r = s(397927),
    o = s(898985),
    d = s(922301),
    c = s(750112),
    u = s(750656),
    m = s(241015),
    _ = s(985018),
    x = s(402141),
    h = s(345195);

function p(e) {
    let {
        selectedEffectId: t,
        setSelectedEffectId: s,
        className: a
    } = e;
    return (0, l.jsxs)("div", {
        className: a,
        children: [(0, l.jsxs)(i.DZT, {
            variant: "heading-md/semibold",
            className: x.s,
            children: [_.intl.string(m.default["1wilM1"]), (0, l.jsx)(r.tvc, {
                size: "xs",
                color: r.LU0.colors.TEXT_DEFAULT
            })]
        }), (0, l.jsx)(i.BJc, {
            direction: "horizontal",
            align: "center",
            wrap: !0,
            gap: 8,
            children: u.re.map(e => (0, l.jsx)(g, {
                effectId: e,
                selected: e === t,
                onClick: () => s(e)
            }, e))
        })]
    })
}

function g(e) {
    let {
        effectId: t,
        selected: s,
        onClick: a
    } = e, i = (0, o._)(t);
    return (0, l.jsx)(r.DUT, {
        className: n()(h.Tw, {
            [h.wH]: s
        }),
        onClick: a,
        children: (0, l.jsx)(c.A, {
            userName: i.name,
            effectDisplayType: d.G.STATIC,
            displayNameStyles: i.previewStyles,
            textClassName: h.tr,
            inProfile: !0
        })
    }, t)
}