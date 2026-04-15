/** chunk id: 842012 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l = n(627968),
    a = n(64700),
    r = n(311907),
    i = n(832712),
    s = n(58149),
    d = n(662502),
    o = n(632738),
    c = n(734057),
    u = n(543465),
    _ = n(562153),
    m = n(477427),
    p = n(652215),
    g = n(985018);
let h = e => {
    let {
        user: t,
        channelId: n,
        reportId: h
    } = e, x = c.A.getDMFromUserId(t.id), A = (0, r.bG)([c.A], () => c.A.getChannel(n), [n]), v = a.useMemo(() => _.Ay.getName(A?.guild_id, A?.id, t), [A, t]), f = (0, r.bG)([u.Ay], () => null == x ? null : u.Ay.isChannelMuted(null, x)), [b, T] = a.useState(f ?? !1), S = a.useCallback(() => {
        null != x && (T(!0), s.Ay.trackWithMetadata(p.HAw.IAR_MUTE_USER_BUTTON_CLICKED, {
            other_user_id: t.id,
            report_id: h
        }), i.A.updateChannelOverrideSettings(null, x, {
            muted: !0
        }, m.fd.Muted), d.A.showMuteSuccessToast(t.id, n))
    }, [x, n, t, h]);
    return (0, l.jsx)(o.PQ, {
        title: g.intl.formatToPlainString(g.t.TRp5wR, {
            username: v
        }),
        description: g.intl.string(g.t["yM/+AJ"]),
        buttonText: b ? g.intl.string(g.t.E8x4Nj) : g.intl.string(g.t.HITUcR),
        buttonDisabled: b,
        onButtonPress: S
    })
}