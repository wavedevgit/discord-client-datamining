/** chunk id: 292548 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    l = n(64700),
    a = n(665260),
    r = n(311907),
    s = n(147351),
    o = n(71393),
    c = n(942075),
    d = n(226139),
    u = n(652215);

function m(e) {
    let {
        channel: t,
        message: n
    } = e, m = n.roleSubscriptionData?.is_renewal ? (0, d.J9)() : (0, d.oL)(), _ = t.guild_id, A = (0, r.bG)([o.A], () => o.A.getGuild(_)?.systemChannelFlags, [_]), E = null != A && (0, a.Lt)(A, u.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES), f = l.useMemo(() => (0, c.y4)(t, n), [t, n]);
    return E ? null : (0, i.jsx)(s.A, {
        channel: t,
        message: n,
        buttonLabels: m,
        stickers: d.D3,
        event: u.HAw.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
        eventProperties: f
    })
}