/** chunk id: 842012 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(832712),
    s = n(58149),
    d = n(662502),
    o = n(632738),
    c = n(734057),
    u = n(543465),
    _ = n(562153),
    m = n(477427),
    p = n(652215),
    h = n(985018);
let x = e => {
    let {
        user: t,
        channelId: n,
        reportId: x
    } = e, g = c.A.getDMFromUserId(t.id), A = (0, i.bG)([c.A], () => c.A.getChannel(n), [n]), v = a.useMemo(() => _.Ay.getName(A?.guild_id, A?.id, t), [A, t]), b = (0, i.bG)([u.Ay], () => null == g ? null : u.Ay.isChannelMuted(null, g)), [f, T] = a.useState(b ?? !1), S = a.useCallback(() => {
        null != g && (T(!0), s.Ay.trackWithMetadata(p.HAw.IAR_MUTE_USER_BUTTON_CLICKED, {
            other_user_id: t.id,
            report_id: x
        }), r.A.updateChannelOverrideSettings(null, g, {
            muted: !0
        }, m.fd.Muted), d.A.showMuteSuccessToast(t.id, n))
    }, [g, n, t, x]);
    return (0, l.jsx)(o.PQ, {
        title: h.intl.formatToPlainString(h.t.TRp5wR, {
            username: v
        }),
        description: h.intl.string(h.t["yM/+AJ"]),
        buttonText: f ? h.intl.string(h.t.E8x4Nj) : h.intl.string(h.t.HITUcR),
        buttonDisabled: f,
        onButtonPress: S
    })
}