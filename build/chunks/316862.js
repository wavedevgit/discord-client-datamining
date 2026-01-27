/** Chunk was on 12236 **/
/** chunk id: 316862, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(157559),
    s = n(58149),
    o = n(997509),
    d = n(794967),
    c = n(632738),
    u = n(734057),
    m = n(71393),
    p = n(576705),
    b = n(309010),
    _ = n(652215),
    g = n(985018);
let x = e => {
    let {
        application: t,
        reportId: n
    } = e, [x, h] = r.useState(!1), [v, f] = r.useState(!1), j = (0, i.bG)([b.A, u.A], () => {
        var e;
        return null == (e = u.A.getChannel(b.A.getChannelId())) ? void 0 : e.guild_id
    }), [A, y] = r.useState(null);
    r.useEffect(() => {
        null != A && (h(!0), f(!0))
    }, [A]), r.useEffect(() => {
        if (null == j) return;
        let e = !1;
        return (async () => {
            let n = null;
            try {
                n = await (0, d.c)(j)
            } catch (e) {}
            if (e || null == n) return;
            let l = n.find(e => {
                var n;
                return (null == (n = e.application) ? void 0 : n.id) === t.id
            });
            null != l && y(l)
        })(), () => {
            e = !0
        }
    }, [j, t.id]);
    let O = r.useCallback(() => {
            f(!1), s.Ay.trackWithMetadata(_.HAw.IAR_REMOVE_APP_BUTTON_CLICKED, {
                guild_id: j,
                application_id: t.id,
                report_id: n
            }), null != j && null != A && o.A.disableIntegration(j, A.id).catch(() => {
                a.A.show({
                    title: g.intl.string(g.t.wYqMmI),
                    body: g.intl.string(g.t.A4Mnst)
                })
            })
        }, [t.id, j, A, n]),
        S = (0, i.bG)([p.A, m.A], () => {
            let e = m.A.getGuild(j);
            if (null == e) return !1;
            let n = p.A.can(_.xBc.MANAGE_GUILD, e),
                l = null == t.bot || p.A.canManageUser(_.xBc.MANAGE_GUILD, t.bot.id, e);
            return n && l
        });
    return null != t && null != j && x && S ? (0, l.jsx)(c.PQ, {
        title: g.intl.string(g.t["WV/CsH"]),
        description: g.intl.string(g.t["FlcC+3"]),
        buttonText: v ? g.intl.string(g.t.aCJlq4) : g.intl.string(g.t["6I1F3i"]),
        buttonDisabled: !v,
        onButtonPress: O,
        buttonVariant: v ? "critical-primary" : "secondary"
    }) : null
}