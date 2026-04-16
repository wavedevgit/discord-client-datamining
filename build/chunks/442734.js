/** chunk id: 442734 params = (module,exports,require) **/
n.d(t, {
    e: () => _
});
var i = n(627968),
    a = n(827734),
    l = n(397927),
    s = n(998304),
    r = n(890687),
    o = n(545986),
    d = n(652215),
    c = n(985018),
    u = n(900601);

function _(e) {
    let {
        onClick: t,
        questId: n,
        canUseQuestOrbMultiplier: _
    } = e, m = (0, r.ZP)(n), h = (0, l.rdh)(a.A.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, d.NJ8.DARK).hex(), p = (0, l.rdh)(a.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, d.NJ8.DARK).hex(), g = (0, l.rdh)(a.A.colors.BACKGROUND_BASE_LOWEST, d.NJ8.DARK).hex(), A = (0, s.cb)(h, .5), x = (0, s.cb)(p, .5);
    if (null == m) return null;
    let f = _ ? c.intl.formatToPlainString(c.t.l2UfLG, {
        bonusOrbMultiplier: m
    }) : c.intl.formatToPlainString(c.t["G+mKoo"], {
        bonusOrbMultiplier: m
    });
    return (0, i.jsx)(l.DUT, {
        onClick: () => {
            (0, o.gC)(m, _), t?.()
        },
        "aria-label": f,
        children: (0, i.jsxs)("div", {
            className: u.I,
            style: {
                "--custom-pill-gradient-start": A,
                "--custom-pill-gradient-end": x,
                "--custom-pill-base-color": g
            },
            children: [(0, i.jsx)(l.tvc, {
                size: "xs",
                color: "white"
            }), (0, i.jsx)(l.Text, {
                variant: "text-xs/semibold",
                color: "always-white",
                children: f
            })]
        })
    })
}