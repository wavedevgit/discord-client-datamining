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
    x = n(652215),
    p = n(985018);
let h = e => {
    let {
        user: t,
        channelId: n,
        reportId: h
    } = e, g = c.A.getDMFromUserId(t.id), A = (0, r.bG)([c.A], () => c.A.getChannel(n), [n]), v = a.useMemo(() => _.Ay.getName(A?.guild_id, A?.id, t), [A, t]), b = (0, r.bG)([u.Ay], () => null == g ? null : u.Ay.isChannelMuted(null, g)), [f, j] = a.useState(b ?? !1), T = a.useCallback(() => {
        null != g && (j(!0), s.Ay.trackWithMetadata(x.HAw.IAR_MUTE_USER_BUTTON_CLICKED, {
            other_user_id: t.id,
            report_id: h
        }), i.A.updateChannelOverrideSettings(null, g, {
            muted: !0
        }, m.fd.Muted), d.A.showMuteSuccessToast(t.id, n))
    }, [g, n, t, h]);
    return (0, l.jsx)(o.PQ, {
        title: p.intl.formatToPlainString(p.t.TRp5wR, {
            username: v
        }),
        description: p.intl.string(p.t["yM/+AJ"]),
        buttonText: f ? p.intl.string(p.t.E8x4Nj) : p.intl.string(p.t.HITUcR),
        buttonDisabled: f,
        onButtonPress: T
    })
}