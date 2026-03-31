/** chunk id: 292548 params = (module,exports,require) **/
n.d(t, {
    A: () => _
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

function _(e) {
    let {
        channel: t,
        message: n
    } = e, _ = n.roleSubscriptionData?.is_renewal ? (0, d.J9)() : (0, d.oL)(), A = t.guild_id, m = (0, r.bG)([o.A], () => o.A.getGuild(A)?.systemChannelFlags, [A]), E = null != m && (0, a.Lt)(m, u.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES), T = l.useMemo(() => (0, c.y4)(t, n), [t, n]);
    return E ? null : (0, i.jsx)(s.A, {
        channel: t,
        message: n,
        buttonLabels: _,
        stickers: d.D3,
        event: u.HAw.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
        eventProperties: T
    })
}