/** Chunk was on 58652 **/
/** chunk id: 796071, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(49229),
    s = n(58149),
    o = n(632738),
    d = n(734057),
    c = n(994500),
    u = n(562153),
    m = n(652215),
    p = n(985018);
let b = e => {
    let {
        user: t,
        channelId: n,
        reportId: b
    } = e, {
        isIgnored: x,
        isBlocked: g
    } = (0, i.cf)([c.A], () => ({
        isIgnored: c.A.isIgnored(t.id),
        isBlocked: c.A.isBlocked(t.id)
    }), [t]), _ = (0, i.bG)([d.A], () => d.A.getChannel(n), [n]), h = r.useMemo(() => u.Ay.getName(null == _ ? void 0 : _.guild_id, null == _ ? void 0 : _.id, t), [_, t]), v = r.useCallback(() => {
        s.Ay.trackWithMetadata(m.HAw.IAR_IGNORE_USER_BUTTON_CLICKED, {
            other_user_id: t.id,
            report_id: b
        }), a.A.ignoreUser(t.id, "web_iar_ignore_user_element", n)
    }, [t, b, n]), f = r.useMemo(() => x || g, [x, g]);
    return (0, l.jsx)(o.PQ, {
        title: p.intl.formatToPlainString(p.t.U3yyFs, {
            username: h
        }),
        description: p.intl.string(p.t.naWE6W),
        buttonText: f ? p.intl.string(p.t.nDdxOG) : p.intl.string(p.t.ICYEfY),
        buttonDisabled: f,
        onButtonPress: v
    })
}