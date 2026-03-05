/** chunk id: 976720 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var l = n(627968),
    a = n(64700),
    i = n(158954),
    r = n(44724),
    s = n(409626),
    c = n(652215),
    o = n(985018);

function d(e) {
    let {
        invite: t,
        trackClick: n,
        closeModal: d
    } = e, u = a.useCallback(() => {
        t?.guild != null && (0, r.X)({
            guildId: t.guild.id
        })
    }, [t]), m = a.useCallback(() => {
        t?.guild != null && ((0, r.default)({
            invite: t
        }), d(), n(s.Ws.GameShop))
    }, [d, t, n]);
    return new Set(t?.guild?.features).has(c.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? (0, l.jsx)(i.$nd, {
        variant: "primary",
        text: o.intl.string(o.t.v8UpgE),
        icon: i.U1X,
        onClick: m,
        onMouseDown: u,
        fullWidth: !0
    }) : null
}