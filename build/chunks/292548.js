/** Chunk was on 64935 **/
/** chunk id: 292548, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968),
    i = n(64700),
    l = n(665260),
    a = n(311907),
    s = n(147351),
    o = n(71393),
    c = n(942075),
    u = n(226139),
    d = n(652215);

function p(e) {
    var t, n;
    let {
        channel: p,
        message: m
    } = e, f = null != (t = null == (n = m.roleSubscriptionData) ? void 0 : n.is_renewal) && t ? (0, u.J9)() : (0, u.oL)(), g = p.guild_id, _ = (0, a.bG)([o.A], () => {
        var e;
        return null == (e = o.A.getGuild(g)) ? void 0 : e.systemChannelFlags
    }, [g]), h = null != _ && (0, l.Lt)(_, d.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES), b = i.useMemo(() => (0, c.y4)(p, m), [p, m]);
    return h ? null : (0, r.jsx)(s.A, {
        channel: p,
        message: m,
        buttonLabels: f,
        stickers: u.D3,
        event: d.HAw.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
        eventProperties: b
    })
}