/** Chunk was on 12236 **/
/** chunk id: 676978, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(843472),
    a = n(58149),
    s = n(632738),
    o = n(734057),
    d = n(576705),
    c = n(652215),
    u = n(985018);
let m = e => {
    let {
        message: t,
        reportId: n
    } = e, [m, p] = r.useState(!1), b = r.useCallback(() => {
        p(!0), a.Ay.trackWithMetadata(c.HAw.IAR_DELETE_MESSAGE_BUTTON_CLICKED, {
            report_id: n
        }), i.A.deleteMessage(t.getChannelId(), t.id)
    }, [t, n]), _ = r.useMemo(() => {
        let e = o.A.getChannel(t.getChannelId());
        return null != e && e.type !== c.rbe.DM && e.type !== c.rbe.GROUP_DM && d.A.canWithPartialContext(c.xBc.MANAGE_MESSAGES, {
            channelId: e.id
        })
    }, [t]);
    return null != t && _ ? (0, l.jsx)(s.PQ, {
        title: u.intl.string(u.t.c9BHL9),
        description: u.intl.string(u.t.dK8S0w),
        buttonText: m ? u.intl.string(u.t.f3pnLL) : u.intl.string(u.t.ch2xbt),
        buttonDisabled: m,
        buttonVariant: "critical-primary",
        onButtonPress: b
    }) : null
}