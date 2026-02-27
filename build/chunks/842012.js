/** chunk id: 842012, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
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
let g = e => {
    let {
        user: t,
        channelId: n,
        reportId: g
    } = e, A = c.A.getDMFromUserId(t.id), h = (0, r.bG)([c.A], () => c.A.getChannel(n), [n]), b = a.useMemo(() => _.Ay.getName(h?.guild_id, h?.id, t), [h, t]), v = (0, r.bG)([u.Ay], () => null == A ? null : u.Ay.isChannelMuted(null, A)), [f, T] = a.useState(v ?? !1), C = a.useCallback(() => {
        null != A && (T(!0), s.Ay.trackWithMetadata(x.HAw.IAR_MUTE_USER_BUTTON_CLICKED, {
            other_user_id: t.id,
            report_id: g
        }), i.A.updateChannelOverrideSettings(null, A, {
            muted: !0
        }, m.fd.Muted), d.A.showMuteSuccessToast(t.id, n))
    }, [A, n, t, g]);
    return (0, l.jsx)(o.PQ, {
        title: p.intl.formatToPlainString(p.t.TRp5wR, {
            username: b
        }),
        description: p.intl.string(p.t["yM/+AJ"]),
        buttonText: f ? p.intl.string(p.t.E8x4Nj) : p.intl.string(p.t.HITUcR),
        buttonDisabled: f,
        onButtonPress: C
    })
}