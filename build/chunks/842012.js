/** chunk id: 842012, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(832712),
    s = n(58149),
    o = n(662502),
    d = n(632738),
    c = n(734057),
    u = n(543465),
    m = n(562153),
    p = n(477427),
    b = n(652215),
    _ = n(985018);
let g = e => {
    let {
        user: t,
        channelId: n,
        reportId: g
    } = e, x = c.A.getDMFromUserId(t.id), h = (0, i.bG)([c.A], () => c.A.getChannel(n), [n]), v = r.useMemo(() => m.Ay.getName(null == h ? void 0 : h.guild_id, null == h ? void 0 : h.id, t), [h, t]), f = (0, i.bG)([u.Ay], () => null == x ? null : u.Ay.isChannelMuted(null, x)), [j, A] = r.useState(null != f && f), y = r.useCallback(() => {
        null != x && (A(!0), s.Ay.trackWithMetadata(b.HAw.IAR_MUTE_USER_BUTTON_CLICKED, {
            other_user_id: t.id,
            report_id: g
        }), a.A.updateChannelOverrideSettings(null, x, {
            muted: !0
        }, p.fd.Muted), o.A.showMuteSuccessToast(t.id, n))
    }, [x, n, t, g]);
    return (0, l.jsx)(d.PQ, {
        title: _.intl.formatToPlainString(_.t.TRp5wR, {
            username: v
        }),
        description: _.intl.string(_.t["yM/+AJ"]),
        buttonText: j ? _.intl.string(_.t.E8x4Nj) : _.intl.string(_.t.HITUcR),
        buttonDisabled: j,
        onButtonPress: y
    })
}