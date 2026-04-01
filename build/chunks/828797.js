/** chunk id: 828797 params = (module,exports,require) **/
n.d(t, {
    o: () => f
});
var i = n(311907),
    s = n(419954),
    l = n(933297),
    a = n(287809),
    r = n(780964),
    o = n(358776),
    d = n(199499),
    c = n(548018),
    u = n(953410),
    m = n(102277),
    g = n(354093),
    _ = n(909081),
    x = n(25894),
    A = n(237948),
    h = n(32096),
    p = n(545214),
    T = n(985018);
let f = (0, s.zZ)(r.X.ACCOUNT_AUTHENTICATION_CATEGORY, {
    useTitle: () => T.intl.string(T.t.pKSjEj),
    useInlineNotice: function() {
        return (0, i.bG)([a.default], () => a.default.getCurrentUser()?.mfaEnabled ?? !1) ? {
            type: l.lT.STRONGLY_DISCOURAGED_CUSTOM,
            notice: d.A
        } : null
    },
    buildLayout: () => [g.L, h.A, p.k, m.v, c.c, u.g, _.T, x.C, ...(0, o.pC)("AccountAuthenticationCategory") ? [A.w] : []]
})