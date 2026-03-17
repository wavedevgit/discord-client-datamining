/** chunk id: 133134 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var l = n(627968),
    a = n(64700),
    r = n(311907),
    i = n(49229),
    s = n(58149),
    d = n(662502),
    o = n(632738),
    c = n(734057),
    u = n(994500),
    _ = n(562153),
    m = n(652215),
    x = n(985018);
let p = e => {
    let {
        user: t,
        channelId: n,
        reportId: p,
        reportType: h
    } = e, g = (0, r.bG)([u.A], () => u.A.isBlocked(t.id), [t.id]), A = (0, r.bG)([c.A], () => c.A.getChannel(n), [n]), v = a.useMemo(() => _.Ay.getName(A?.guild_id, A?.id, t), [A, t]), b = a.useCallback(() => {
        s.Ay.trackWithMetadata(m.HAw.IAR_BLOCK_USER_BUTTON_CLICKED, {
            other_user_id: t.id,
            report_id: p
        }), i.A.blockUser(t.id, {
            location: "ReportMenuBlockUser-iOS"
        }).then(() => {
            d.A.showBlockSuccessToast(t.id, n)
        })
    }, [t, p, n]);
    return (0, l.jsx)(o.PQ, {
        title: x.intl.formatToPlainString(x.t["Q1o/f3"], {
            username: v
        }),
        description: x.intl.string(x.t.G08MKu),
        buttonText: g ? x.intl.string(x.t.ot2tSp) : x.intl.string(x.t["l+7PZY"]),
        buttonDisabled: g,
        onButtonPress: b,
        buttonVariant: "application" === h.name && g ? "secondary" : "critical-primary"
    })
}