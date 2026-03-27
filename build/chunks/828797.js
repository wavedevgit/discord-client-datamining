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
    d = n(199499),
    c = n(548018),
    u = n(953410),
    m = n(102277),
    _ = n(354093),
    g = n(909081),
    A = n(25894),
    x = n(237948),
    h = n(32096),
    p = n(545214),
    f = n(985018);
let T = (0, s.zZ)(r.X.ACCOUNT_AUTHENTICATION_CATEGORY, {
    useTitle: () => f.intl.string(f.t.pKSjEj),
    useInlineNotice: function() {
        return (0, i.bG)([a.default], () => a.default.getCurrentUser()?.mfaEnabled ?? !1) ? {
            type: l.lT.STRONGLY_DISCOURAGED_CUSTOM,
            notice: d.A
        } : null
    },
    buildLayout: () => [_.L, h.A, p.k, m.v, c.c, u.g, g.T, A.C, ...(0, o.pC)("AccountAuthenticationCategory") ? [x.w] : []]
})