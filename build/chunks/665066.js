/** chunk id: 665066 params = (module,exports,require) **/
n.d(t, {
    W: () => c,
    g: () => u
});
var i, a = n(612200),
    r = n(323073),
    l = n(398884),
    s = n(772366),
    o = n(652215),
    d = n(204925),
    c = ((i = {}).PROCEED = "PROCEED", i.AGE_GATE_SHOWN = "AGE_GATE_SHOWN", i.GUILD_CAP_SHOWN = "GUILD_CAP_SHOWN", i);

function u(e) {
    let {
        guild: t,
        isMember: n,
        analyticsLocations: i
    } = e;
    return null != t && !n && (0, r.xq)() && (0, r.zS)(t) ? ((0, a.yO)(d.w_.NSFW_SERVER_INVITE_EMBED), "AGE_GATE_SHOWN") : (0, l.Sn)() ? ((0, s.A)({
        analyticsSource: {
            page: o.liQ.INVITE_EMBED
        },
        analyticsLocation: {
            page: o.liQ.INVITE_EMBED,
            section: o.JJy.GUILD_CAP_UPSELL_MODAL
        },
        analyticsLocations: i
    }), "GUILD_CAP_SHOWN") : "PROCEED"
}