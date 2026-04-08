/** chunk id: 571827 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968);
n(64700);
var i = n(575593),
    s = n(397927),
    l = n(688810),
    a = n(404374),
    c = n(788868),
    o = n(985018),
    d = n(238333);

function u(e) {
    let {
        itemType: t,
        onClose: u
    } = e, {
        newestAnalyticsLocation: m
    } = (0, l.Ay)(), p = t === i.R.AVATAR_DECORATION ? c.e.AVATAR_DECORATION_MODAL_UPSELL : t === i.R.PROFILE_EFFECT ? c.e.PROFILE_EFFECT_MODAL_UPSELL : t === i.R.NAMEPLATE ? c.e.NAMEPLATE_MODAL_UPSELL : null;
    return null == p ? null : (0, r.jsxs)("div", {
        className: d.hc,
        children: [(0, r.jsx)(s.tvc, {
            className: d.ax,
            size: "md",
            color: a.k0.PREMIUM_TIER_2
        }), (0, r.jsx)(s.Text, {
            className: d.cf,
            variant: "text-md/medium",
            children: p === c.e.AVATAR_DECORATION_MODAL_UPSELL ? o.intl.format(o.t["aFR/EI"], {
                onClick: () => {
                    (0, s.mMO)(async () => {
                        let {
                            default: e
                        } = await Promise.all([n.e("14138"), n.e("49924"), n.e("59701"), n.e("28330")]).then(n.bind(n, 948265));
                        return t => (0, r.jsx)(e, {
                            premiumUpsellType: p,
                            title: o.intl.string(o.t.JI7uhc),
                            body: o.intl.string(o.t["5XvsdZ"]),
                            glowUp: o.intl.string(o.t["5XvsdZ"]),
                            analyticsSource: m,
                            onSecondaryClick: u,
                            ...t
                        })
                    })
                }
            }) : p === c.e.PROFILE_EFFECT_MODAL_UPSELL ? o.intl.format(o.t.eWNONM, {
                onClick: () => {
                    (0, s.mMO)(async () => {
                        let {
                            default: e
                        } = await Promise.all([n.e("14138"), n.e("49924"), n.e("59701"), n.e("28330")]).then(n.bind(n, 948265));
                        return t => (0, r.jsx)(e, {
                            premiumUpsellType: p,
                            title: o.intl.string(o.t.sYm15X),
                            body: o.intl.string(o.t["Hza+Bu"]),
                            glowUp: o.intl.string(o.t["Hza+Bu"]),
                            analyticsSource: m,
                            onSecondaryClick: u,
                            ...t
                        })
                    })
                }
            }) : p === c.e.NAMEPLATE_MODAL_UPSELL ? o.intl.format(o.t.G6b8TF, {
                onClick: () => {
                    (0, s.mMO)(async () => {
                        let {
                            default: e
                        } = await Promise.all([n.e("14138"), n.e("49924"), n.e("59701"), n.e("28330")]).then(n.bind(n, 948265));
                        return t => (0, r.jsx)(e, {
                            premiumUpsellType: p,
                            title: o.intl.string(o.t.k7UN4k),
                            body: o.intl.string(o.t["0/QPxO"]),
                            glowUp: o.intl.string(o.t["0/QPxO"]),
                            analyticsSource: m,
                            onSecondaryClick: u,
                            ...t
                        })
                    })
                }
            }) : void 0
        })]
    })
}