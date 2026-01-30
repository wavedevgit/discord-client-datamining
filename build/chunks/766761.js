/** chunk id: 766761, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => d
});
var n = i(311907),
    l = i(754333),
    s = i(419954),
    r = i(287809),
    a = i(780964),
    u = i(119762),
    o = i(985018);
let d = (0, s.E2)(a.X.SESSIONS_OTHER_SESSIONS_SETTING, {
    Component: u.Af,
    useSearchTerms: () => [o.intl.string(o.t["+1h0k/"])],
    usePredicate: () => {
        let {
            otherSessions: e
        } = (0, l.r)(), t = (0, n.bG)([r.default], () => r.default.getCurrentUser());
        return e.length > 0 || !(null == t ? void 0 : t.mfaEnabled)
    }
})