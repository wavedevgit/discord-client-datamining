/** Chunk was on 58652 **/
/** chunk id: 133134, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(49229),
    s = n(58149),
    o = n(662502),
    d = n(632738),
    c = n(734057),
    u = n(994500),
    m = n(562153),
    p = n(652215),
    b = n(985018);
let x = e => {
    let {
        user: t,
        channelId: n,
        reportId: x,
        reportType: g
    } = e, _ = (0, i.bG)([u.A], () => u.A.isBlocked(t.id), [t.id]), h = (0, i.bG)([c.A], () => c.A.getChannel(n), [n]), v = r.useMemo(() => m.Ay.getName(null == h ? void 0 : h.guild_id, null == h ? void 0 : h.id, t), [h, t]), f = r.useCallback(() => {
        s.Ay.trackWithMetadata(p.HAw.IAR_BLOCK_USER_BUTTON_CLICKED, {
            other_user_id: t.id,
            report_id: x
        }), a.A.blockUser(t.id, {
            location: "ReportMenuBlockUser-iOS"
        }).then(() => {
            o.A.showBlockSuccessToast(t.id, n)
        })
    }, [t, x, n]);
    return (0, l.jsx)(d.PQ, {
        title: b.intl.formatToPlainString(b.t["Q1o/f3"], {
            username: v
        }),
        description: b.intl.string(b.t.G08MKu),
        buttonText: _ ? b.intl.string(b.t.ot2tSp) : b.intl.string(b.t["l+7PZY"]),
        buttonDisabled: _,
        onButtonPress: f,
        buttonVariant: "application" === g.name && _ ? "secondary" : "critical-primary"
    })
}