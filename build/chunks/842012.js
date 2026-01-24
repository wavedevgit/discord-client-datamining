/** Chunk was on 58652 **/
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
    x = n(985018);
let g = e => {
    let {
        user: t,
        channelId: n,
        reportId: g
    } = e, _ = c.A.getDMFromUserId(t.id), h = (0, i.bG)([c.A], () => c.A.getChannel(n), [n]), v = r.useMemo(() => m.Ay.getName(null == h ? void 0 : h.guild_id, null == h ? void 0 : h.id, t), [h, t]), f = (0, i.bG)([u.Ay], () => null == _ ? null : u.Ay.isChannelMuted(null, _)), [j, A] = r.useState(null != f && f), y = r.useCallback(() => {
        null != _ && (A(!0), s.Ay.trackWithMetadata(b.HAw.IAR_MUTE_USER_BUTTON_CLICKED, {
            other_user_id: t.id,
            report_id: g
        }), a.A.updateChannelOverrideSettings(null, _, {
            muted: !0
        }, p.fd.Muted), o.A.showMuteSuccessToast(t.id, n))
    }, [_, n, t, g]);
    return (0, l.jsx)(d.PQ, {
        title: x.intl.formatToPlainString(x.t.TRp5wR, {
            username: v
        }),
        description: x.intl.string(x.t["yM/+AJ"]),
        buttonText: j ? x.intl.string(x.t.E8x4Nj) : x.intl.string(x.t.HITUcR),
        buttonDisabled: j,
        onButtonPress: y
    })
}