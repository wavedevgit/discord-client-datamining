/** chunk id: 456647 params = (module,exports,require) **/
n.d(t, {
    X: () => r
});
var i = n(64700),
    l = n(311907),
    a = n(77468),
    s = n(962173);

function r(e) {
    let t = (0, l.bG)([s.A], () => null != e ? s.A.getAccount(null, e) : null),
        n = (0, l.bG)([s.A], () => s.A.isFetching()),
        r = null != t && !t.revoked;
    return {
        loading: n,
        hasConnection: r,
        canConnect: null != e,
        startConnection: i.useCallback(async t => {
            if (null == e) return {
                success: !1
            };
            try {
                let n = await a.A.authorize(e, {
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