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
    g = n(985018);
let x = e => {
    let {
        user: t,
        channelId: n,
        reportId: x
    } = e, h = c.A.getDMFromUserId(t.id), A = (0, i.bG)([c.A], () => c.A.getChannel(n), [n]), v = a.useMemo(() => _.Ay.getName(A?.guild_id, A?.id, t), [A, t]), b = (0, i.bG)([u.Ay], () => null == h ? null : u.Ay.isChannelMuted(null, h)), [f, T] = a.useState(b ?? !1), E = a.useCallback(() => {
        null != h && (T(!0), s.Ay.trackWithMetadata(p.HAw.IAR_MUTE_USER_BUTTON_CLICKED, {
            other_user_id: t.id,
            report_id: x
        }), r.A.updateChannelOverrideSettings(null, h, {
            muted: !0
        }, m.fd.Muted), d.A.showMuteSuccessToast(t.id, n))
    }, [h, n, t, x]);
    return (0, l.jsx)(o.PQ, {
        title: g.intl.formatToPlainString(g.t.TRp5wR, {
            username: v
        }),
        description: g.intl.string(g.t["yM/+AJ"]),
        buttonText: f ? g.intl.string(g.t.E8x4Nj) : g.intl.string(g.t.HITUcR),
        buttonDisabled: f,
        onButtonPress: E
    })
}