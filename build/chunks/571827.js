/** chunk id: 571827 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968);
n(64700);
var i = n(575593),
    s = n(397927),
    l = n(404374),
    a = n(788868),
    c = n(985018),
    o = n(485466);

function d(e) {
    let {
        itemType: t,
        onClose: d
    } = e, u = t === i.R.AVATAR_DECORATION ? a.e.AVATAR_DECORATION_MODAL_UPSELL : t === i.R.PROFILE_EFFECT ? a.e.PROFILE_EFFECT_MODAL_UPSELL : t === i.R.NAMEPLATE ? a.e.NAMEPLATE_MODAL_UPSELL : null;
    return null == u ? null : (0, r.jsxs)("div", {
        className: o.hc,
        children: [(0, r.jsx)(s.tvc, {
            className: o.ax,
            size: "md",
            color: l.k0.PREMIUM_TIER_2
        }), (0, r.jsx)(s.Text, {
            className: o.cf,
            variant: "text-md/medium",
            children: u === a.e.AVATAR_DECORATION_MODAL_UPSELL ? c.intl.format(c.t["aFR/EI"], {
                onClick: () => {
                    (0, s.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("64864").then(n.bind(n, 948265));
                        return t => (0, r.jsx)(e, {
                            premiumUpsellType: u,
                            title: c.intl.string(c.t.JI7uhc),
                            body: c.intl.string(c.t["5XvsdZ"]),
                            onSecondaryClick: d,
                            ...t
                        })
                    })
                }
            }) : u === a.e.PROFILE_EFFECT_MODAL_UPSELL ? c.intl.format(c.t.eWNONM, {
                onClick: () => {
                    (0, s.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("64864").then(n.bind(n, 948265));
                        return t => (0, r.jsx)(e, {
                            premiumUpsellType: u,
                            title: c.intl.string(c.t.sYm15X),
                            body: c.intl.string(c.t["Hza+Bu"]),
                            onSecondaryClick: d,
                            ...t
                        })
                    })
                }
            }) : u === a.e.NAMEPLATE_MODAL_UPSELL ? c.intl.format(c.t.G6b8TF, {
                onClick: () => {
                    (0, s.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("64864").then(n.bind(n, 948265));
                        return t => (0, r.jsx)(e, {
                            premiumUpsellType: u,
                            title: c.intl.string(c.t.k7UN4k),
                            body: c.intl.string(c.t["0/QPxO"]),
                            onSecondaryClick: d,
                            ...t
                        })
                    })
                }
            }) : void 0
        })]
    })
}