/** chunk id: 828797, original params: t,e,i (module,exports,require) **/
i.d(e, {
    o: () => N
});
var n = i(311907),
    l = i(419954),
    s = i(933297),
    r = i(287809),
    a = i(780964),
    u = i(358776),
    o = i(36535),
    d = i(548018),
    A = i(953410),
    T = i(102277),
    S = i(354093),
    E = i(909081),
    g = i(25894),
    c = i(237948),
    _ = i(32096),
    I = i(545214),
    C = i(985018);
let N = (0, l.zZ)(a.X.ACCOUNT_AUTHENTICATION_CATEGORY, {
    useTitle: () => C.intl.string(C.t.pKSjEj),
    useInlineNotice: function() {
        return (0, n.bG)([r.default], () => r.default.getCurrentUser()?.mfaEnabled ?? !1) ? {
            type: s.lT.STRONGLY_DISCOURAGED_CUSTOM,
            notice: o.A
        } : null
    },
    buildLayout: () => [S.L, _.A, I.k, T.v, d.c, A.g, E.T, g.C, ...(0, u.pC)("AccountAuthenticationCategory") ? [c.w] : []]
})