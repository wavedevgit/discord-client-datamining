/** chunk id: 133134 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var a = n(627968),
    l = n(64700),
    i = n(311907),
    r = n(49229),
    s = n(58149),
    d = n(662502),
    o = n(632738),
    c = n(734057),
    u = n(994500),
    _ = n(562153),
    m = n(652215),
    p = n(985018);
let h = e => {
    let {
        user: t,
        channelId: n,
        reportId: h,
        reportType: x
    } = e, g = (0, i.bG)([u.A], () => u.A.isBlocked(t.id), [t.id]), A = (0, i.bG)([c.A], () => c.A.getChannel(n), [n]), v = l.useMemo(() => _.Ay.getName(A?.guild_id, A?.id, t), [A, t]), b = l.useCallback(() => {
        s.Ay.trackWithMetadata(m.HAw.IAR_BLOCK_USER_BUTTON_CLICKED, {
            other_user_id: t.id,
            report_id: h
        }), r.A.blockUser(t.id, {
            location: "ReportMenuBlockUser-iOS"
        }).then(() => {
            d.A.showBlockSuccessToast(t.id, n)
        })
    }, [t, h, n]);
    return (0, a.jsx)(o.PQ, {
        title: p.intl.formatToPlainString(p.t["Q1o/f3"], {
            username: v
        }),
        description: p.intl.string(p.t.G08MKu),
        buttonText: g ? p.intl.string(p.t.ot2tSp) : p.intl.string(p.t["l+7PZY"]),
        buttonDisabled: g,
        onButtonPress: b,
        buttonVariant: "application" === x.name && g ? "secondary" : "critical-primary"
    })
}