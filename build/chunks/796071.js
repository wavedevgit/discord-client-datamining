/** chunk id: 796071 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var l = n(627968),
    a = n(64700),
    r = n(311907),
    i = n(49229),
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
        isIgnored: g,
        isBlocked: h
    } = (0, r.cf)([c.A], () => ({
        isIgnored: c.A.isIgnored(t.id),
        isBlocked: c.A.isBlocked(t.id)
    }), [t]), x = (0, r.bG)([o.A], () => o.A.getChannel(n), [n]), A = a.useMemo(() => u.Ay.getName(x?.guild_id, x?.id, t), [x, t]), v = a.useCallback(() => {
        s.Ay.trackWithMetadata(_.HAw.IAR_IGNORE_USER_BUTTON_CLICKED, {
            other_user_id: t.id,
            report_id: p
        }), i.A.ignoreUser(t.id, "web_iar_ignore_user_element", n)
    }, [t, p, n]), f = a.useMemo(() => g || h, [g, h]);
    return (0, l.jsx)(d.PQ, {
        title: m.intl.formatToPlainString(m.t.U3yyFs, {
            username: A
        }),
        description: m.intl.string(m.t.naWE6W),
        buttonText: f ? m.intl.string(m.t.nDdxOG) : m.intl.string(m.t.ICYEfY),
        buttonDisabled: f,
        onButtonPress: v
    })
}