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
    o = n(788868),
    c = n(985018),
    d = n(917389);

function u(e) {
    let {
        itemType: t,
        onClose: u
    } = e, {
        newestAnalyticsLocation: m
    } = (0, l.Ay)(), p = t === i.R.AVATAR_DECORATION ? o.e.AVATAR_DECORATION_MODAL_UPSELL : t === i.R.PROFILE_EFFECT ? o.e.PROFILE_EFFECT_MODAL_UPSELL : t === i.R.NAMEPLATE ? o.e.NAMEPLATE_MODAL_UPSELL : null;
    return null == p ? null : (0, r.jsxs)("div", {
        className: d.hc,
        children: [(0, r.jsx)(s.tvc, {
            className: d.ax,
            size: "md",
            color: a.k0.PREMIUM_TIER_2
        }), (0, r.jsx)(s.Text, {
            className: d.cf,
            variant: "text-md/medium",
            children: p === o.e.AVATAR_DECORATION_MODAL_UPSELL ? c.intl.format(c.t["aFR/EI"], {
                onClick: () => {
                    (0, s.mMO)(async () => {
                        let {
                            default: e
                        } = await Promise.all([n.e("59701"), n.e("64864")]).then(n.bind(n, 948265));
                        return t => (0, r.jsx)(e, {
                            premiumUpsellType: p,
                            title: c.intl.string(c.t.JI7uhc),
                            body: c.intl.string(c.t["5XvsdZ"]),
                            glowUp: c.intl.string(c.t["5XvsdZ"]),
                            analyticsSource: m,
                            onSecondaryClick: u,
                            ...t
                        })
                    })
                }
            }) : p === o.e.PROFILE_EFFECT_MODAL_UPSELL ? c.intl.format(c.t.eWNONM, {
                onClick: () => {
                    (0, s.mMO)(async () => {
                        let {
                            default: e
                        } = await Promise.all([n.e("59701"), n.e("64864")]).then(n.bind(n, 948265));
                        return t => (0, r.jsx)(e, {
                            premiumUpsellType: p,
                            title: c.intl.string(c.t.sYm15X),
                            body: c.intl.string(c.t["Hza+Bu"]),
                            glowUp: c.intl.string(c.t["Hza+Bu"]),
                            analyticsSource: m,
                            onSecondaryClick: u,
                            ...t
                        })
                    })
                }
            }) : p === o.e.NAMEPLATE_MODAL_UPSELL ? c.intl.format(c.t.G6b8TF, {
                onClick: () => {
                    (0, s.mMO)(async () => {
                        let {
                            default: e
                        } = await Promise.all([n.e("59701"), n.e("64864")]).then(n.bind(n, 948265));
                        return t => (0, r.jsx)(e, {
                            premiumUpsellType: p,
                            title: c.intl.string(c.t.k7UN4k),
                            body: c.intl.string(c.t["0/QPxO"]),
                            glowUp: c.intl.string(c.t["0/QPxO"]),
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