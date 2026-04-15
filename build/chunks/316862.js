/** chunk id: 316862 params = (module,exports,require) **/
n.d(t, {
    A: () => x
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
    p = n(309010),
    g = n(652215),
    h = n(985018);
let x = e => {
    let {
        application: t,
        reportId: n
    } = e, [x, A] = a.useState(!1), [v, f] = a.useState(!1), b = (0, r.bG)([p.A, u.A], () => u.A.getChannel(p.A.getChannelId())?.guild_id), [T, S] = a.useState(null);
    a.useEffect(() => {
        null != T && (A(!0), f(!0))
    }, [T]), a.useEffect(() => {
        if (null == b) return;
        let e = !1;
        return (async () => {
            let n = null;
            try {
                n = await (0, o.c)(b)
            } catch {}
            if (e || null == n) return;
            let l = n.find(e => e.application?.id === t.id);
            null != l && S(l)
        })(), () => {
            e = !0
        }
    }, [b, t.id]);
    let E = a.useCallback(() => {
            f(!1), s.Ay.trackWithMetadata(g.HAw.IAR_REMOVE_APP_BUTTON_CLICKED, {
                guild_id: b,
                application_id: t.id,
                report_id: n
            }), null != b && null != T && d.A.disableIntegration(b, T.id).catch(() => {
                i.A.show({
                    title: h.intl.string(h.t.wYqMmI),
                    body: h.intl.string(h.t.A4Mnst)
                })
            })
        }, [t.id, b, T, n]),
        I = (0, r.bG)([m.A, _.A], () => {
            let e = _.A.getGuild(b);
            if (null == e) return !1;
            let n = m.A.can(g.xBc.MANAGE_GUILD, e),
                l = null == t.bot || m.A.canManageUser(g.xBc.MANAGE_GUILD, t.bot.id, e);
            return n && l
        });
    return null != t && null != b && x && I ? (0, l.jsx)(c.PQ, {
        title: h.intl.string(h.t["WV/CsH"]),
        description: h.intl.string(h.t["FlcC+3"]),
        buttonText: v ? h.intl.string(h.t.aCJlq4) : h.intl.string(h.t["6I1F3i"]),
        buttonDisabled: !v,
        onButtonPress: E,
        buttonVariant: v ? "critical-primary" : "secondary"
    }) : null
}