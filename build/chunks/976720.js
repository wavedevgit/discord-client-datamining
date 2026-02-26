/** chunk id: 976720, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => u,
    Y: () => m
});
var n = i(627968),
    l = i(64700),
    a = i(158954),
    s = i(871123),
    r = i(44724),
    c = i(409626),
    o = i(652215),
    d = i(985018);

function u(e) {
    let {
        invite: t,
        trackClick: i,
        closeModal: u
    } = e, m = l.useCallback(() => {
        t?.guild != null && (0, r.X)({
            guildId: t.guild.id
        })
    }, [t]), x = l.useCallback(() => {
        t?.guild != null && ((0, r.default)({
            invite: t
        }), u(), i(c.Ws.GameShop))
    }, [u, t, i]);
    return new Set(t?.guild?.features).has(o.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? (0, n.jsx)(a.$nd, {
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
        trackClick: i,
        closeModal: u
    } = e, m = l.useCallback(() => {
        t?.guild != null && (0, r.X)({
            guildId: t.guild.id
        })
    }, [t]), x = l.useCallback(() => {
        t?.guild != null && ((0, r.default)({
            invite: t
        }), u(), i(c.Ws.GameShop))
    }, [u, t, i]);
    return new Set(t?.guild?.features).has(o.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? (0, n.jsx)(a.$nd, {
        variant: "primary",
        text: t?.guild?.id === (0, s.zf)() ? d.intl.string(d.t.WTXyEQ) : d.intl.string(d.t.v8UpgE),
        icon: a.U1X,
        onClick: x,
        onMouseDown: m,
        fullWidth: !0
    }) : null
}