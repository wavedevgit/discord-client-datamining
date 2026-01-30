/** chunk id: 262828, original params: e,A,t (module,exports,require) **/
t.d(A, {
    A: () => s
}), t(896048);
var r = t(64700),
    n = t(311907),
    l = t(198982),
    a = t(627363),
    i = t(587895);

function s(e, A) {
    let t = (0, n.bG)([i.A], () => i.A.getGuildApplication(e, A)),
        [s, o] = r.useState(null == t),
        [d, u] = r.useState(),
        [c, g] = r.useState(!1),
        f = r.useCallback(async () => {
            if (null == t && null != e) {
                g(!0), o(!0);
                try {
                    await a.Ay.getApplicationsForGuild(e, {
                        type: A,
                        includeTeam: !0
                    })
                } catch (e) {
                    u(new l.LG(e))
                } finally {
                    o(!1)
                }
            }
        }, [t, A, e]);
    return r.useEffect(() => {
        c || f()
    }, [c, f]), {
        application: t,
        error: d,
        loading: s
    }
}