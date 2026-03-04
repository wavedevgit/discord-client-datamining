/** chunk id: 674082, original params: t,e,i (module,exports,require) **/
i.d(e, {
    Y: () => T
});
var n = i(311907),
    l = i(419954),
    s = i(994500),
    a = i(975571),
    r = i(780964),
    u = i(961583),
    o = i(276221),
    d = i(652215),
    A = i(985018);
let T = (0, l.zZ)(r.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY, {
    useTitle: () => A.intl.string(A.t.LVwR56),
    useSubtitle: () => A.intl.format(A.t["0aNQo9"], {
        helpArticle: a.A.getArticleURL(d.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE)
    }),
    buildLayout: () => [u.T, o.H],
    usePredicate: () => {
        let {
            hasBlockedUsers: t,
            hasIgnoredUsers: e
        } = (0, n.cf)([s.A], () => ({
            hasBlockedUsers: s.A.getBlockedIDs().length > 0,
            hasIgnoredUsers: s.A.getIgnoredIDs().length > 0
        }));
        return e || t
    }
})