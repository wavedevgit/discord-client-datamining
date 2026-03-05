/** chunk id: 316862 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l = n(627968),
    a = n(64700),
    r = n(311907),
    i = n(157559),
    s = n(58149),
    d = n(997509),
    o = n(794967),
    c = n(632738),
    u = n(734057),
    _ = n(71393),
    m = n(576705),
    x = n(309010),
    p = n(652215),
    g = n(985018);
let h = e => {
    let {
        application: t,
        reportId: n
    } = e, [h, A] = a.useState(!1), [v, b] = a.useState(!1), f = (0, r.bG)([x.A, u.A], () => u.A.getChannel(x.A.getChannelId())?.guild_id), [C, j] = a.useState(null);
    a.useEffect(() => {
        null != C && (A(!0), b(!0))
    }, [C]), a.useEffect(() => {
        if (null == f) return;
        let e = !1;
        return (async () => {
            let n = null;
            try {
                n = await (0, o.c)(f)
            } catch {}
            if (e || null == n) return;
            let l = n.find(e => e.application?.id === t.id);
            null != l && j(l)
        })(), () => {
            e = !0
        }
    }, [f, t.id]);
    let T = a.useCallback(() => {
            b(!1), s.Ay.trackWithMetadata(p.HAw.IAR_REMOVE_APP_BUTTON_CLICKED, {
                guild_id: f,
                application_id: t.id,
                report_id: n
            }), null != f && null != C && d.A.disableIntegration(f, C.id).catch(() => {
                i.A.show({
                    title: g.intl.string(g.t.wYqMmI),
                    body: g.intl.string(g.t.A4Mnst)
                })
            })
        }, [t.id, f, C, n]),
        N = (0, r.bG)([m.A, _.A], () => {
            let e = _.A.getGuild(f);
            if (null == e) return !1;
            let n = m.A.can(p.xBc.MANAGE_GUILD, e),
                l = null == t.bot || m.A.canManageUser(p.xBc.MANAGE_GUILD, t.bot.id, e);
            return n && l
        });
    return null != t && null != f && h && N ? (0, l.jsx)(c.PQ, {
        title: g.intl.string(g.t["WV/CsH"]),
        description: g.intl.string(g.t["FlcC+3"]),
        buttonText: v ? g.intl.string(g.t.aCJlq4) : g.intl.string(g.t["6I1F3i"]),
        buttonDisabled: !v,
        onButtonPress: T,
        buttonVariant: v ? "critical-primary" : "secondary"
    }) : null
}