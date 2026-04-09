/** chunk id: 133134 params = (module,exports,require) **/
n.d(t, {
    A: () => g
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
    p = n(985018);
let g = e => {
    let {
        user: t,
        channelId: n,
        reportId: g,
        reportType: h
    } = e, x = (0, r.bG)([u.A], () => u.A.isBlocked(t.id), [t.id]), A = (0, r.bG)([c.A], () => c.A.getChannel(n), [n]), v = a.useMemo(() => _.Ay.getName(A?.guild_id, A?.id, t), [A, t]), b = a.useCallback(() => {
        s.Ay.trackWithMetadata(m.HAw.IAR_BLOCK_USER_BUTTON_CLICKED, {
            other_user_id: t.id,
            report_id: g
        }), i.A.blockUser(t.id, {
            location: "ReportMenuBlockUser-iOS"
        }).then(() => {
            d.A.showBlockSuccessToast(t.id, n)
        })
    }, [t, g, n]);
    return (0, l.jsx)(o.PQ, {
        title: p.intl.formatToPlainString(p.t["Q1o/f3"], {
            username: v
        }),
        description: p.intl.string(p.t.G08MKu),
        buttonText: x ? p.intl.string(p.t.ot2tSp) : p.intl.string(p.t["l+7PZY"]),
        buttonDisabled: x,
        onButtonPress: b,
        buttonVariant: "application" === h.name && x ? "secondary" : "critical-primary"
    })
}