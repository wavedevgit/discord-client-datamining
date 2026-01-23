/** Chunk was on 92818 **/
/** chunk id: 571827, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968);
n(64700);
var l = n(575593),
    i = n(397927),
    s = n(688810),
    o = n(404374),
    c = n(788868),
    a = n(985018),
    u = n(682655);

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function p(e) {
    let {
        itemType: t,
        onClose: p
    } = e, {
        newestAnalyticsLocation: m
    } = (0, s.Ay)(), f = t === l.R.AVATAR_DECORATION ? c.e.AVATAR_DECORATION_MODAL_UPSELL : t === l.R.PROFILE_EFFECT ? c.e.PROFILE_EFFECT_MODAL_UPSELL : t === l.R.NAMEPLATE ? c.e.NAMEPLATE_MODAL_UPSELL : null;
    return null == f ? null : (0, r.jsxs)("div", {
        className: u.hc,
        children: [(0, r.jsx)(i.tvc, {
            className: u.ax,
            size: "md",
            color: o.k0.PREMIUM_TIER_2
        }), (0, r.jsx)(i.Text, {
            className: u.cf,
            variant: "text-md/medium",
            children: f === c.e.AVATAR_DECORATION_MODAL_UPSELL ? a.intl.format(a.t["aFR/EI"], {
                onClick: () => {
                    (0, i.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("64864").then(n.bind(n, 948265));
                        return t => (0, r.jsx)(e, d({
                            premiumUpsellType: f,
                            title: a.intl.string(a.t.JI7uhc),
                            body: a.intl.string(a.t["5XvsdZ"]),
                            glowUp: a.intl.string(a.t["5XvsdZ"]),
                            analyticsSource: m,
                            onSecondaryClick: p
                        }, t))
                    })
                }
            }) : f === c.e.PROFILE_EFFECT_MODAL_UPSELL ? a.intl.format(a.t.eWNONM, {
                onClick: () => {
                    (0, i.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("64864").then(n.bind(n, 948265));
                        return t => (0, r.jsx)(e, d({
                            premiumUpsellType: f,
                            title: a.intl.string(a.t.sYm15X),
                            body: a.intl.string(a.t["Hza+Bu"]),
                            glowUp: a.intl.string(a.t["Hza+Bu"]),
                            analyticsSource: m,
                            onSecondaryClick: p
                        }, t))
                    })
                }
            }) : f === c.e.NAMEPLATE_MODAL_UPSELL ? a.intl.format(a.t.G6b8TF, {
                onClick: () => {
                    (0, i.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("64864").then(n.bind(n, 948265));
                        return t => (0, r.jsx)(e, d({
                            premiumUpsellType: f,
                            title: a.intl.string(a.t.k7UN4k),
                            body: a.intl.string(a.t["0/QPxO"]),
                            glowUp: a.intl.string(a.t["0/QPxO"]),
                            analyticsSource: m,
                            onSecondaryClick: p
                        }, t))
                    })
                }
            }) : void 0
        })]
    })
}