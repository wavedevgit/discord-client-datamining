/** chunk id: 345485, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968);
n(64700);
var i = n(110259),
    l = n(417597),
    a = n(342494),
    s = n(139286),
    o = n(997509),
    c = n(260509),
    u = n(71393),
    d = n(287809),
    p = n(652215),
    h = n(49999),
    g = n(985018),
    f = n(330766);

function m(e) {
    let {
        guildId: t,
        markAsDismissed: n,
        targetElementRef: m
    } = e, A = (0, l.bG)([u.A, d.default], () => {
        let e = d.default.getCurrentUser(),
            n = u.A.getGuild(t);
        return null != n && (0, c.bM)(n, e)
    });
    return (0, s.A)({
        type: i.ImpressionTypes.POPOUT,
        name: i.ImpressionNames.ENABLE_CREATOR_MONETIZATION_GUILD_HEADER_UPSELL,
        properties: {
            guild_id: t,
            is_owner: A
        }
    }), (0, r.jsx)(a.AM, {
        targetElementRef: m,
        title: g.intl.string(g.t.C0m4rQ),
        body: g.intl.string(g.t.zOHfEX),
        graphic: {
            type: "image",
            src: f
        },
        actions: [{
            text: g.intl.string(g.t.OgQQbG),
            variant: "primary",
            onClick: () => {
                o.A.open(t, p.BEX.ROLE_SUBSCRIPTIONS)
            }
        }],
        onRequestClose: () => n(h.i.USER_DISMISS),
        position: "bottom",
        caretConfig: {
            align: "center"
        }
    })
}