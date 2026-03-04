/** chunk id: 316862, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l = n(627968),
    a = n(64700),
    i = n(311907),
    r = n(157559),
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
    } = e, [h, A] = a.useState(!1), [b, v] = a.useState(!1), f = (0, i.bG)([x.A, u.A], () => u.A.getChannel(x.A.getChannelId())?.guild_id), [T, C] = a.useState(null);
    a.useEffect(() => {
        null != T && (A(!0), v(!0))
    }, [T]), a.useEffect(() => {
        if (null == f) return;
        let e = !1;
        return (async () => {
            let n = null;
            try {
                n = await (0, o.c)(f)
            } catch {}
            if (e || null == n) return;
            let l = n.find(e => e.application?.id === t.id);
            null != l && C(l)
        })(), () => {
            e = !0
        }
    }, [f, t.id]);
    let j = a.useCallback(() => {
            v(!1), s.Ay.trackWithMetadata(p.HAw.IAR_REMOVE_APP_BUTTON_CLICKED, {
                guild_id: f,
                application_id: t.id,
                report_id: n
            }), null != f && null != T && d.A.disableIntegration(f, T.id).catch(() => {
                r.A.show({
                    title: g.intl.string(g.t.wYqMmI),
                    body: g.intl.string(g.t.A4Mnst)
                })
            })
        }, [t.id, f, T, n]),
        I = (0, i.bG)([m.A, _.A], () => {
            let e = _.A.getGuild(f);
            if (null == e) return !1;
            let n = m.A.can(p.xBc.MANAGE_GUILD, e),
                l = null == t.bot || m.A.canManageUser(p.xBc.MANAGE_GUILD, t.bot.id, e);
            return n && l
        });
    return null != t && null != f && h && I ? (0, l.jsx)(c.PQ, {
        title: g.intl.string(g.t["WV/CsH"]),
        description: g.intl.string(g.t["FlcC+3"]),
        buttonText: b ? g.intl.string(g.t.aCJlq4) : g.intl.string(g.t["6I1F3i"]),
        buttonDisabled: !b,
        onButtonPress: j,
        buttonVariant: b ? "critical-primary" : "secondary"
    }) : null
}