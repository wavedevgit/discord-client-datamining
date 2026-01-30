/** chunk id: 828797, original params: e,t,i (module,exports,require) **/
i.d(t, {
    o: () => I
});
var n = i(311907),
    l = i(419954),
    s = i(933297),
    r = i(287809),
    a = i(780964),
    u = i(36535),
    o = i(548018),
    d = i(953410),
    T = i(102277),
    c = i(354093),
    A = i(909081),
    S = i(25894),
    _ = i(32096),
    E = i(545214),
    g = i(985018);
let I = (0, l.zZ)(a.X.ACCOUNT_AUTHENTICATION_CATEGORY, {
    useTitle: () => g.intl.string(g.t.pKSjEj),
    useInlineNotice: function() {
        return (0, n.bG)([r.default], () => {
            var e, t;
            return null != (e = null == (t = r.default.getCurrentUser()) ? void 0 : t.mfaEnabled) && e
        }) ? {
            type: s.W.STRONGLY_DISCOURAGED_CUSTOM,
            notice: u.A
        } : null
    },
    buildLayout: () => [c.L, _.A, E.k, T.v, o.c, d.g, A.T, S.C]
})