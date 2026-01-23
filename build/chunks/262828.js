/** Chunk was on 67096 **/
/** chunk id: 262828, original params: e,A,t (module,exports,require) **/
t.d(A, {
    A: () => o
}), t(896048);
var r = t(64700),
    n = t(311907),
    l = t(198982),
    a = t(627363),
    i = t(587895);

function o(e, A) {
    let t = (0, n.bG)([i.A], () => i.A.getGuildApplication(e, A)),
        [o, s] = r.useState(null == t),
        [d, u] = r.useState(),
        [c, g] = r.useState(!1),
        p = r.useCallback(async () => {
            if (null == t && null != e) {
                g(!0), s(!0);
                try {
                    await a.Ay.getApplicationsForGuild(e, {
                        type: A,
                        includeTeam: !0
                    })
                } catch (e) {
                    u(new l.LG(e))
                } finally {
                    s(!1)
                }
            }
        }, [t, A, e]);
    return r.useEffect(() => {
        c || p()
    }, [c, p]), {
        application: t,
        error: d,
        loading: o
    }
}