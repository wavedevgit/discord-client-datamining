/** chunk id: 456647 params = (module,exports,require) **/
n.d(t, {
    X: () => s
});
var r = n(64700),
    l = n(311907),
    i = n(77468),
    a = n(962173);

function s(e) {
    let t = (0, l.bG)([a.A], () => null != e ? a.A.getAccount(null, e) : null),
        n = (0, l.bG)([a.A], () => a.A.isFetching()),
        s = null != t && !t.revoked;
    return {
        loading: n,
        hasConnection: s,
        canConnect: null != e,
        startConnection: r.useCallback(async t => {
            if (null == e) return {
                success: !1
            };
            try {
                let n = await i.A.authorize(e, {
                    location: t ?? "Account Linking"
                });
                if (n.ok && n.body?.url != null) return {
                    success: !0,
                    url: n.body.url
                };
                return {
                    success: !1
                }
            } catch (e) {
                return {
                    success: !1
                }
            }
        }, [e]),
        account: t
    }
}