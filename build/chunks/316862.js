/** chunk id: 316862 params = (module,exports,require) **/
n.d(t, {
    A: () => g
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
    h = n(985018);
let g = e => {
    let {
        application: t,
        reportId: n
    } = e, [g, A] = a.useState(!1), [v, b] = a.useState(!1), f = (0, r.bG)([x.A, u.A], () => u.A.getChannel(x.A.getChannelId())?.guild_id), [j, T] = a.useState(null);
    a.useEffect(() => {
        null != j && (A(!0), b(!0))
    }, [j]), a.useEffect(() => {
        if (null == f) return;
        let e = !1;
        return (async () => {
            let n = null;
            try {
                n = await (0, o.c)(f)
            } catch {}
            if (e || null == n) return;
            let l = n.find(e => e.application?.id === t.id);
            null != l && T(l)
        })(), () => {
            e = !0
        }
    }, [f, t.id]);
    let C = a.useCallback(() => {
            b(!1), s.Ay.trackWithMetadata(p.HAw.IAR_REMOVE_APP_BUTTON_CLICKED, {
                guild_id: f,
                application_id: t.id,
                report_id: n
            }), null != f && null != j && d.A.disableIntegration(f, j.id).catch(() => {
                i.A.show({
                    title: h.intl.string(h.t.wYqMmI),
                    body: h.intl.string(h.t.A4Mnst)
                })
            })
        }, [t.id, f, j, n]),
        N = (0, r.bG)([m.A, _.A], () => {
            let e = _.A.getGuild(f);
            if (null == e) return !1;
            let n = m.A.can(p.xBc.MANAGE_GUILD, e),
                l = null == t.bot || m.A.canManageUser(p.xBc.MANAGE_GUILD, t.bot.id, e);
            return n && l
        });
    return null != t && null != f && g && N ? (0, l.jsx)(c.PQ, {
        title: h.intl.string(h.t["WV/CsH"]),
        description: h.intl.string(h.t["FlcC+3"]),
        buttonText: v ? h.intl.string(h.t.aCJlq4) : h.intl.string(h.t["6I1F3i"]),
        buttonDisabled: !v,
        onButtonPress: C,
        buttonVariant: v ? "critical-primary" : "secondary"
    }) : null
}