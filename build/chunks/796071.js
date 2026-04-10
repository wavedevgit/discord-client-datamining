/** chunk id: 796071 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var a = n(627968),
    l = n(64700),
    i = n(311907),
    r = n(49229),
    s = n(58149),
    d = n(632738),
    o = n(734057),
    c = n(994500),
    u = n(562153),
    _ = n(652215),
    m = n(985018);
let p = e => {
    let {
        user: t,
        channelId: n,
        reportId: p
    } = e, {
        isIgnored: h,
        isBlocked: x
    } = (0, i.cf)([c.A], () => ({
        isIgnored: c.A.isIgnored(t.id),
        isBlocked: c.A.isBlocked(t.id)
    }), [t]), g = (0, i.bG)([o.A], () => o.A.getChannel(n), [n]), A = l.useMemo(() => u.Ay.getName(g?.guild_id, g?.id, t), [g, t]), v = l.useCallback(() => {
        s.Ay.trackWithMetadata(_.HAw.IAR_IGNORE_USER_BUTTON_CLICKED, {
            other_user_id: t.id,
            report_id: p
        }), r.A.ignoreUser(t.id, "web_iar_ignore_user_element", n)
    }, [t, p, n]), b = l.useMemo(() => h || x, [h, x]);
    return (0, a.jsx)(d.PQ, {
        title: m.intl.formatToPlainString(m.t.U3yyFs, {
            username: A
        }),
        description: m.intl.string(m.t.naWE6W),
        buttonText: b ? m.intl.string(m.t.nDdxOG) : m.intl.string(m.t.ICYEfY),
        buttonDisabled: b,
        onButtonPress: v
    })
}