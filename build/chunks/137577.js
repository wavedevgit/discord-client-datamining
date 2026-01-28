/** Chunk was on 78528 **/
/** chunk id: 137577, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(64700),
    l = n(311907),
    i = n(824552),
    s = n(627363),
    a = n(587895),
    o = n(546183);

function c(e) {
    let t = (null == e ? void 0 : e.require_application_authorization) ? e.application_id : null,
        {
            authorizationsFetchState: n,
            applicationOAuth2Token: c
        } = (0, l.cf)([o.default], () => ({
            authorizationsFetchState: o.default.getFetchState(),
            applicationOAuth2Token: o.default.getNewestTokenForApplication(t)
        })),
        u = (0, l.bG)([a.A], () => a.A.getApplication(t)),
        d = (0, l.bG)([a.A], () => a.A.getApplication(null == u ? void 0 : u.parentId));
    (0, r.useEffect)(() => {
        null != t && n === o.FetchState.NOT_FETCHED && i.A.fetch()
    }, [n, t]), (0, r.useEffect)(() => {
        null != t && null == u && n === o.FetchState.FETCHED && s.Ay.fetchApplications([t], !1)
    }, [t, c, n, u]), (0, r.useEffect)(() => {
        null != u && null != u.parentId && null == d && n === o.FetchState.FETCHED && s.Ay.fetchApplications([u.parentId], !1)
    }, [u, n, d]);
    let p = null != u && (null == u.parentId || null != d);
    return {
        showLinkedLobbyApplicationLoadingIndicator: null != t && (n !== o.FetchState.FETCHED || null == u || !p),
        requiredLinkedLobbyApplication: null == c && null != u && p ? null != d ? d : u : null
    }
}