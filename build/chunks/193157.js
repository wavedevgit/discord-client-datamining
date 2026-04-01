/** chunk id: 193157 params = (module,exports,require) **/
a.d(t, {
    A: () => d
});
var r = a(627968);
a(64700);
var n = a(503698),
    s = a.n(n),
    i = a(158954),
    l = a(309326),
    o = a(337322),
    c = a(833932);

function d(e) {
    let {
        powerup: t
    } = e, a = (0, o.A)(t);
    return (0, r.jsx)("div", {
        className: c.I1,
        children: a.map(e => {
            let {
                Icon: t,
                className: a
            } = (0, l.a)(e.perkIcon, !1);
            return (0, r.jsxs)("div", {
                className: c.Ab,
                children: [(0, r.jsx)(t, {
                    color: "currentColor",
                    className: s()(c.kf, a)
                }), (0, r.jsx)(i.EYj, {
                    className: c.uL,
                    color: "text-default",
                    variant: "text-sm/medium",
                    children: e.description
                })]
            }, `perk-${e.perkIcon}`)
        })
    })
}