/** chunk id: 894389, original params: t,e,i (module,exports,require) **/
i.d(e, {
    b: () => g
});
var n = i(934551),
    l = i(419954),
    s = i(780964),
    a = i(358776),
    r = i(115980),
    u = i(901177),
    o = i(493068),
    d = i(994421),
    A = i(531525),
    T = i(985018);
let S = (0, l.t_)(s.X.BILLING_PANEL, {
        usePredicate: () => (0, a.dk)("BillingPanel"),
        useTitle: () => T.intl.string(T.t.oeUm2s),
        buildLayout: () => [u.B, o.a, d.Z],
        hideInStreamerMode: !0
    }),
    E = (0, l.t_)(s.X.BILLING_PANEL, {
        usePredicate: () => !(0, a.dk)("LegacyBillingPanel"),
        useTitle: () => T.intl.string(T.t.oeUm2s),
        StronglyDiscouragedCustomComponent: r.Ay,
        buildLayout: () => []
    }),
    g = (0, l.i4)(s.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => T.intl.string(T.t.oeUm2s),
        icon: n.CreditCardIcon,
        getLegacySearchKey: () => (0, a.WJ)("BillingPanel") ? void 0 : A.H.BILLING,
        buildLayout: () => (0, a.WJ)("BillingPanel") ? [S] : [E]
    })