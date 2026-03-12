/** chunk id: 828797 params = (module,exports,require) **/
n.d(t, {
    o: () => T
});
var i = n(311907),
    s = n(419954),
    l = n(933297),
    a = n(287809),
    r = n(780964),
    o = n(358776),
    d = n(36535),
    c = n(548018),
    u = n(953410),
    _ = n(102277),
    g = n(354093),
    m = n(909081),
    A = n(25894),
    h = n(237948),
    p = n(32096),
    x = n(545214),
    E = n(985018);
let T = (0, s.zZ)(r.X.ACCOUNT_AUTHENTICATION_CATEGORY, {
    useTitle: () => E.intl.string(E.t.pKSjEj),
    useInlineNotice: function() {
        return (0, i.bG)([a.default], () => a.default.getCurrentUser()?.mfaEnabled ?? !1) ? {
            type: l.lT.STRONGLY_DISCOURAGED_CUSTOM,
            notice: d.A
        } : null
    },
    buildLayout: () => [g.L, p.A, x.k, _.v, c.c, u.g, m.T, A.C, ...(0, o.pC)("AccountAuthenticationCategory") ? [h.w] : []]
})