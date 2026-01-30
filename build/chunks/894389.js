/** chunk id: 894389, original params: e,t,i (module,exports,require) **/
i.d(t, {
    b: () => S
});
var n = i(934551),
    l = i(419954),
    s = i(780964),
    r = i(358776),
    a = i(115980),
    u = i(901177),
    o = i(994421),
    d = i(531525),
    T = i(985018);
let c = (0, l.t_)(s.X.BILLING_PANEL, {
        usePredicate: () => (0, r.dk)("BillingPanel"),
        useTitle: () => T.intl.string(T.t.oeUm2s),
        buildLayout: () => [u.B, o.Z],
        hideInStreamerMode: !0
    }),
    A = (0, l.t_)(s.X.BILLING_PANEL, {
        usePredicate: () => !(0, r.dk)("LegacyBillingPanel"),
        useTitle: () => T.intl.string(T.t.oeUm2s),
        StronglyDiscouragedCustomComponent: a.Ay,
        buildLayout: () => []
    }),
    S = (0, l.i4)(s.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => T.intl.string(T.t.oeUm2s),
        icon: n.CreditCardIcon,
        getLegacySearchKey: () => (0, r.WJ)("BillingPanel") ? void 0 : d.H.BILLING,
        buildLayout: () => (0, r.WJ)("BillingPanel") ? [c] : [A]
    })