/** chunk id: 372745 params = (module,exports,require) **/
n.d(t, {
    u: () => p
});
var i = n(311907),
    s = n(521933),
    l = n(419954),
    r = n(933297),
    a = n(287809),
    o = n(780964),
    d = n(876696),
    c = n(577117),
    u = n(208417),
    m = n(438748),
    g = n(12756),
    _ = n(351603),
    x = n(678447),
    h = n(648699),
    A = n(985018);
let p = (0, l.zZ)(o.X.ACCOUNT_INFO_CATEGORY, {
    usePredicate: () => (0, i.bG)([a.default], () => null != a.default.getCurrentUser()),
    useTitle: () => A.intl.string(A.t.apNo4l),
    useInlineNotice: function() {
        let e = (0, i.bG)([a.default], () => a.default.getCurrentUser());
        return null == e ? null : e.isClaimed() ? null == e.email || e.verified ? null : {
            type: r.lT.INLINE_NOTICE,
            noticeType: "warning",
            useTitle: () => A.intl.string(A.t.tuGzBT),
            useText: () => A.intl.string(A.t.NAzplE),
            button: {
                useText: () => A.intl.string(A.t.lm1UKt),
                onClick: () => (0, d.S)(e)
            }
        } : {
            type: r.lT.INLINE_NOTICE,
            noticeType: "critical",
            useTitle: () => A.intl.string(A.t["/3qnL/"]),
            useText: () => A.intl.string(A.t.qKs3vg),
            button: {
                useText: () => A.intl.string(A.t["7psymi"]),
                onClick: () => s.A.openClaimAccountModal()
            }
        }
    },
    buildLayout: () => [h.h, g.C, _.N, x.n, m.k, c.F, u.j]
})