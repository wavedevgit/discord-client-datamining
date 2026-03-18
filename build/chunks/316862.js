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
    } = e, [g, A] = a.useState(!1), [v, f] = a.useState(!1), b = (0, r.bG)([x.A, u.A], () => u.A.getChannel(x.A.getChannelId())?.guild_id), [C, j] = a.useState(null);
    a.useEffect(() => {
        null != C && (A(!0), f(!0))
    }, [C]), a.useEffect(() => {
        if (null == b) return;
        let e = !1;
        return (async () => {
            let n = null;
            try {
                n = await (0, o.c)(b)
            } catch {}
            if (e || null == n) return;
            let l = n.find(e => e.application?.id === t.id);
            null != l && j(l)
        })(), () => {
            e = !0
        }
    }, [b, t.id]);
    let T = a.useCallback(() => {
            f(!1), s.Ay.trackWithMetadata(p.HAw.IAR_REMOVE_APP_BUTTON_CLICKED, {
                guild_id: b,
                application_id: t.id,
                report_id: n
            }), null != b && null != C && d.A.disableIntegration(b, C.id).catch(() => {
                i.A.show({
                    title: h.intl.string(h.t.wYqMmI),
                    body: h.intl.string(h.t.A4Mnst)
                })
            })
        }, [t.id, b, C, n]),
        N = (0, r.bG)([m.A, _.A], () => {
            let e = _.A.getGuild(b);
            if (null == e) return !1;
            let n = m.A.can(p.xBc.MANAGE_GUILD, e),
                l = null == t.bot || m.A.canManageUser(p.xBc.MANAGE_GUILD, t.bot.id, e);
            return n && l
        });
    return null != t && null != b && g && N ? (0, l.jsx)(c.PQ, {
        title: h.intl.string(h.t["WV/CsH"]),
        description: h.intl.string(h.t["FlcC+3"]),
        buttonText: v ? h.intl.string(h.t.aCJlq4) : h.intl.string(h.t["6I1F3i"]),
        buttonDisabled: !v,
        onButtonPress: T,
        buttonVariant: v ? "critical-primary" : "secondary"
    }) : null
}