/** Chunk was on web.js **/
/** chunk id: 102001, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(311907),
    l = n(397927),
    c = n(212245),
    u = n(58149),
    d = n(688810),
    f = n(151271),
    p = n(631305),
    _ = n(997509),
    h = n(931991),
    m = n(71393),
    g = n(473145),
    E = n(652215),
    y = n(874864),
    b = n(985018),
    O = n(476217);
let v = e => {
    let {
        className: t,
        guildId: n,
        channel: a,
        shouldTrackUpsellViewed: v,
        setTrackedUpsellViewed: A
    } = e, {
        location: I
    } = (0, c.p)(), {
        analyticsLocations: S
    } = (0, d.Ay)(), T = (0, s.bG)([m.A], () => m.A.getGuild(n)), {
        canManageAllExpressions: C
    } = (0, h.nr)(T), N = null != T && 0 === (0, g.aG)(T.premiumTier) && !T.features.has(E.GuildFeatures.MORE_STICKERS);
    if (i.useEffect(() => {
            C && N && v && ((0, u.zV)(E.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                location: I,
                guild_id: null == T ? void 0 : T.id,
                channel_id: null == a ? void 0 : a.id,
                type: "Expression Picker Inline Sticker Upsell",
                location_stack: S
            }), A(!0))
        }, [N, T, a, I, v, A, S, C]), null == T || !C) return null;
    if (N) {
        let e = () => {
            (0, p.A)({
                analyticsLocations: S,
                analyticsSourceLocation: I,
                guild: T,
                perks: (0, y.q5)()
            })
        };
        return (0, r.jsxs)("div", {
            className: o()(O.UX, t),
            children: [(0, r.jsx)(l.vRF, {
                size: "md",
                color: "currentColor",
                className: O.Kk
            }), (0, r.jsx)(l.Text, {
                color: "interactive-text-default",
                className: O.rf,
                variant: "text-sm/normal",
                children: b.intl.format(b.t.AXWla1, {
                    count: (0, g.aG)(E.TVA.TIER_1)
                })
            }), (0, r.jsx)(l.QWc, {
                variant: "primary",
                text: b.intl.string(b.t["Gb+BJD"]),
                onClick: e
            })]
        })
    } {
        let e = () => {
            (0, f.v8)(), _.A.open(n, E.BEX.STICKERS, I)
        };
        return (0, r.jsxs)("div", {
            className: o()(O.UX, t),
            children: [(0, r.jsx)(l.tEP, {
                size: "custom",
                color: "currentColor",
                className: O.Kk,
                width: 20,
                height: 20
            }), (0, r.jsx)(l.Text, {
                color: "interactive-text-default",
                className: O.rf,
                variant: "text-sm/normal",
                children: b.intl.string(b.t.S83wgh)
            }), (0, r.jsx)(l.QWc, {
                variant: "primary",
                text: b.intl.string(b.t.bwNjug),
                onClick: e
            })]
        })
    }
}