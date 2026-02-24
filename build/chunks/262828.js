/** chunk id: 262828, original params: A,e,t (module,exports,require) **/
t.d(e, {
    A: () => s
});
var n = t(64700),
    a = t(311907),
    r = t(198982),
    i = t(627363),
    l = t(587895);

function s(A, e) {
    let t = (0, a.bG)([l.A], () => l.A.getGuildApplication(A, e)),
        [s, o] = n.useState(null == t),
        [d, u] = n.useState(),
        [c, g] = n.useState(!1),
        q = n.useCallback(async () => {
            if (null == t && null != A) {
                g(!0), o(!0);
                try {
                    await i.Ay.getApplicationsForGuild(A, {
                        type: e,
                        includeTeam: !0
                    })
                } catch (A) {
                    u(new r.LG(A))
                } finally {
                    o(!1)
                }
            }
        }, [t, e, A]);
    return n.useEffect(() => {
        c || q()
    }, [c, q]), {
        application: t,
        error: d,
        loading: s
    }
}