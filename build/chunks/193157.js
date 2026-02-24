/** chunk id: 193157, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => d
});
var s = a(627968);
a(64700);
var r = a(503698),
    n = a.n(r),
    o = a(158954),
    c = a(309326),
    i = a(337322),
    l = a(229227);

function d(e) {
    let {
        powerup: t
    } = e, a = (0, i.A)(t);
    return (0, s.jsx)("div", {
        className: l.I1,
        children: a.map(e => {
            let {
                Icon: t,
                className: a
            } = (0, c.a)(e.perkIcon, !1);
            return (0, s.jsxs)("div", {
                className: l.Ab,
                children: [(0, s.jsx)(t, {
                    color: "currentColor",
                    className: n()(l.kf, a)
                }), (0, s.jsx)(o.EYj, {
                    className: l.uL,
                    color: "text-default",
                    variant: "text-sm/medium",
                    children: e.description
                })]
            }, `perk-${e.perkIcon}`)
        })
    })
}