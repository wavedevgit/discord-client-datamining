/** chunk id: 442734 params = (module,exports,require) **/
n.d(t, {
    e: () => m
});
var i = n(627968),
    l = n(827734),
    s = n(397927),
    r = n(998304),
    a = n(890687),
    o = n(545986),
    d = n(652215),
    c = n(985018),
    u = n(247874);

function m(e) {
    let {
        onClick: t,
        questId: n,
        canUseQuestOrbMultiplier: m
    } = e, _ = (0, a.ZP)(n), h = (0, s.rdh)(l.A.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, d.NJ8.DARK).hex(), p = (0, s.rdh)(l.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, d.NJ8.DARK).hex(), g = (0, s.rdh)(l.A.colors.BACKGROUND_BASE_LOWEST, d.NJ8.DARK).hex(), A = (0, r.cb)(h, .5), x = (0, r.cb)(p, .5);
    if (null == _) return null;
    let f = m ? c.intl.formatToPlainString(c.t.l2UfLG, {
        bonusOrbMultiplier: _
    }) : c.intl.formatToPlainString(c.t["G+mKoo"], {
        bonusOrbMultiplier: _
    });
    return (0, i.jsx)(s.DUT, {
        onClick: () => {
            (0, o.gC)(_, m), t?.()
        },
        "aria-label": f,
        children: (0, i.jsxs)("div", {
            className: u.I,
            style: {
                "--custom-pill-gradient-start": A,
                "--custom-pill-gradient-end": x,
                "--custom-pill-base-color": g
            },
            children: [(0, i.jsx)(s.tvc, {
                size: "xs",
                color: "white"
            }), (0, i.jsx)(s.Text, {
                variant: "text-xs/semibold",
                color: "always-white",
                children: f
            })]
        })
    })
}