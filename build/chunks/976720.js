/** chunk id: 976720, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u,
    Y: () => m
});
var i = n(627968),
    l = n(64700),
    a = n(158954),
    s = n(871123),
    r = n(44724),
    c = n(409626),
    o = n(652215),
    d = n(985018);

function u(e) {
    let {
        invite: t,
        trackClick: n,
        closeModal: u
    } = e, m = l.useCallback(() => {
        t?.guild != null && (0, r.X)({
            guildId: t.guild.id
        })
    }, [t]), x = l.useCallback(() => {
        t?.guild != null && ((0, r.default)({
            invite: t
        }), u(), n(c.Ws.GameShop))
    }, [u, t, n]);
    return new Set(t?.guild?.features).has(o.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? (0, i.jsx)(a.$nd, {
        variant: "primary",
        text: t?.guild?.id === (0, s.zf)() ? d.intl.string(d.t.WTXyEQ) : d.intl.string(d.t.v8UpgE),
        icon: a.U1X,
        onClick: x,
        onMouseDown: m,
        fullWidth: !0
    }) : null
}

function m(e) {
    let {
        invite: t,
        trackClick: n,
        closeModal: u
    } = e, m = l.useCallback(() => {
        t?.guild != null && (0, r.X)({
            guildId: t.guild.id
        })
    }, [t]), x = l.useCallback(() => {
        t?.guild != null && ((0, r.default)({
            invite: t
        }), u(), n(c.Ws.GameShop))
    }, [u, t, n]);
    return new Set(t?.guild?.features).has(o.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? (0, i.jsx)(a.$nd, {
        variant: "primary",
        text: t?.guild?.id === (0, s.zf)() ? d.intl.string(d.t.WTXyEQ) : d.intl.string(d.t.v8UpgE),
        icon: a.U1X,
        onClick: x,
        onMouseDown: m,
        fullWidth: !0
    }) : null
}