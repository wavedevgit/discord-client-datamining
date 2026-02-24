/** chunk id: 133134, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(49229),
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
        reportType: g
    } = e, h = (0, i.bG)([u.A], () => u.A.isBlocked(t.id), [t.id]), A = (0, i.bG)([c.A], () => c.A.getChannel(n), [n]), b = a.useMemo(() => _.Ay.getName(A?.guild_id, A?.id, t), [A, t]), v = a.useCallback(() => {
        s.Ay.trackWithMetadata(m.HAw.IAR_BLOCK_USER_BUTTON_CLICKED, {
            other_user_id: t.id,
            report_id: p
        }), r.A.blockUser(t.id, {
            location: "ReportMenuBlockUser-iOS"
        }).then(() => {
            d.A.showBlockSuccessToast(t.id, n)
        })
    }, [t, p, n]);
    return (0, l.jsx)(o.PQ, {
        title: x.intl.formatToPlainString(x.t["Q1o/f3"], {
            username: b
        }),
        description: x.intl.string(x.t.G08MKu),
        buttonText: h ? x.intl.string(x.t.ot2tSp) : x.intl.string(x.t["l+7PZY"]),
        buttonDisabled: h,
        onButtonPress: v,
        buttonVariant: "application" === g.name && h ? "secondary" : "critical-primary"
    })
}