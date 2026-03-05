/** chunk id: 796071, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(49229),
    s = n(58149),
    d = n(632738),
    o = n(734057),
    u = n(994500),
    c = n(562153),
    _ = n(652215),
    m = n(985018);
let x = e => {
    let {
        user: t,
        channelId: n,
        reportId: x
    } = e, {
        isIgnored: p,
        isBlocked: g
    } = (0, i.cf)([u.A], () => ({
        isIgnored: u.A.isIgnored(t.id),
        isBlocked: u.A.isBlocked(t.id)
    }), [t]), h = (0, i.bG)([o.A], () => o.A.getChannel(n), [n]), A = a.useMemo(() => c.Ay.getName(h?.guild_id, h?.id, t), [h, t]), b = a.useCallback(() => {
        s.Ay.trackWithMetadata(_.HAw.IAR_IGNORE_USER_BUTTON_CLICKED, {
            other_user_id: t.id,
            report_id: x
        }), r.A.ignoreUser(t.id, "web_iar_ignore_user_element", n)
    }, [t, x, n]), v = a.useMemo(() => p || g, [p, g]);
    return (0, l.jsx)(d.PQ, {
        title: m.intl.formatToPlainString(m.t.U3yyFs, {
            username: A
        }),
        description: m.intl.string(m.t.naWE6W),
        buttonText: v ? m.intl.string(m.t.nDdxOG) : m.intl.string(m.t.ICYEfY),
        buttonDisabled: v,
        onButtonPress: b
    })
}