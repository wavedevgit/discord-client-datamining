/** chunk id: 506361 params = (module,exports,require) **/
a.d(t, {
    A: () => c
});
var r = a(627968);
a(64700);
var s = a(158954),
    n = a(827734),
    o = a(309326),
    i = a(337322),
    l = a(870487);

function c(e) {
    let {
        powerup: t
    } = e, a = (0, i.A)(t);
    return (0, r.jsx)("div", {
        className: l.kL,
        children: a.map(e => {
            let {
                Icon: t
            } = (0, o.a)(e.perkIcon, !1);
            return (0, r.jsxs)("div", {
                className: l.d_,
                children: [(0, r.jsx)(t, {
                    color: n.A.colors.TEXT_MUTED,
                    className: l.Kk
                }), (0, r.jsx)(s.EYj, {
                    className: l.Qq,
                    color: "text-muted",
                    variant: "text-sm/medium",
                    children: e.description
                })]
            }, `perk-${e.perkIcon}`)
        })
    })
}