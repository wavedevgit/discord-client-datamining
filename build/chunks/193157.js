/** chunk id: 193157, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => d
}), r(228524);
var n = r(627968);
r(64700);
var o = r(503698),
    a = r.n(o),
    s = r(158954),
    c = r(309326),
    i = r(337322),
    l = r(260905);

function d(e) {
    let {
        powerup: t
    } = e, r = (0, i.A)(t);
    return (0, n.jsx)("div", {
        className: l.I1,
        children: r.map(e => {
            let {
                Icon: t,
                className: r
            } = (0, c.a)(e.perkIcon, !1);
            return (0, n.jsxs)("div", {
                className: l.Ab,
                children: [(0, n.jsx)(t, {
                    color: "currentColor",
                    className: a()(l.kf, r)
                }), (0, n.jsx)(s.EYj, {
                    className: l.uL,
                    color: "text-default",
                    variant: "text-sm/medium",
                    children: e.description
                })]
            }, "perk-".concat(e.perkIcon))
        })
    })
}