/** Chunk was on 13530 **/
/** chunk id: 976720, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(158954),
    a = n(871123),
    s = n(44724),
    o = n(409626),
    c = n(652215),
    u = n(985018);

function d(e) {
    var t, n;
    let {
        invite: d,
        trackClick: m,
        closeModal: f
    } = e, g = r.useCallback(() => {
        (null == d ? void 0 : d.guild) != null && (0, s.X)({
            guildId: d.guild.id
        })
    }, [d]), x = r.useCallback(() => {
        (null == d ? void 0 : d.guild) != null && ((0, s.default)({
            invite: d
        }), f(), m(o.Ws.GameShop))
    }, [f, d, m]);
    return new Set(null == d || null == (t = d.guild) ? void 0 : t.features).has(c.GuildFeatures.SOCIAL_LAYER_STOREFRONT) ? (0, l.jsx)(i.$nd, {
        variant: "primary",
        text: (null == d || null == (n = d.guild) ? void 0 : n.id) === (0, a.zf)() ? u.intl.string(u.t.WTXyEQ) : u.intl.string(u.t.v8UpgE),
        icon: i.U1X,
        onClick: x,
        onMouseDown: g,
        fullWidth: !0
    }) : null
}