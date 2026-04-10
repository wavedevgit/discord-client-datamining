/** chunk id: 316862 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var a = n(627968),
    l = n(64700),
    i = n(311907),
    r = n(157559),
    s = n(58149),
    d = n(997509),
    o = n(794967),
    c = n(632738),
    u = n(734057),
    _ = n(71393),
    m = n(576705),
    p = n(309010),
    h = n(652215),
    x = n(985018);
let g = e => {
    let {
        application: t,
        reportId: n
    } = e, [g, A] = l.useState(!1), [v, b] = l.useState(!1), f = (0, i.bG)([p.A, u.A], () => u.A.getChannel(p.A.getChannelId())?.guild_id), [T, S] = l.useState(null);
    l.useEffect(() => {
        null != T && (A(!0), b(!0))
    }, [T]), l.useEffect(() => {
        if (null == f) return;
        let e = !1;
        return (async () => {
            let n = null;
            try {
                n = await (0, o.c)(f)
            } catch {}
            if (e || null == n) return;
            let a = n.find(e => e.application?.id === t.id);
            null != a && S(a)
        })(), () => {
            e = !0
        }
    }, [f, t.id]);
    let E = l.useCallback(() => {
            b(!1), s.Ay.trackWithMetadata(h.HAw.IAR_REMOVE_APP_BUTTON_CLICKED, {
                guild_id: f,
                application_id: t.id,
                report_id: n
            }), null != f && null != T && d.A.disableIntegration(f, T.id).catch(() => {
                r.A.show({
                    title: x.intl.string(x.t.wYqMmI),
                    body: x.intl.string(x.t.A4Mnst)
                })
            })
        }, [t.id, f, T, n]),
        I = (0, i.bG)([m.A, _.A], () => {
            let e = _.A.getGuild(f);
            if (null == e) return !1;
            let n = m.A.can(h.xBc.MANAGE_GUILD, e),
                a = null == t.bot || m.A.canManageUser(h.xBc.MANAGE_GUILD, t.bot.id, e);
            return n && a
        });
    return null != t && null != f && g && I ? (0, a.jsx)(c.PQ, {
        title: x.intl.string(x.t["WV/CsH"]),
        description: x.intl.string(x.t["FlcC+3"]),
        buttonText: v ? x.intl.string(x.t.aCJlq4) : x.intl.string(x.t["6I1F3i"]),
        buttonDisabled: !v,
        onButtonPress: E,
        buttonVariant: v ? "critical-primary" : "secondary"
    }) : null
}