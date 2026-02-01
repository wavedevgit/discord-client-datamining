/** chunk id: 828797, original params: t,e,i (module,exports,require) **/
i.d(e, {
    o: () => I
});
var n = i(311907),
    l = i(419954),
    s = i(933297),
    r = i(287809),
    u = i(780964),
    a = i(36535),
    o = i(548018),
    d = i(953410),
    T = i(102277),
    A = i(354093),
    S = i(909081),
    c = i(25894),
    E = i(32096),
    g = i(545214),
    _ = i(985018);
let I = (0, l.zZ)(u.X.ACCOUNT_AUTHENTICATION_CATEGORY, {
    useTitle: () => _.intl.string(_.t.pKSjEj),
    useInlineNotice: function() {
        return (0, n.bG)([r.default], () => {
            var t, e;
            return null != (t = null == (e = r.default.getCurrentUser()) ? void 0 : e.mfaEnabled) && t
        }) ? {
            type: s.W.STRONGLY_DISCOURAGED_CUSTOM,
            notice: a.A
        } : null
    },
    buildLayout: () => [A.L, E.A, g.k, T.v, o.c, d.g, S.T, c.C]
})