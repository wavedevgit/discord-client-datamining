/** Chunk was on 28979 **/
/** chunk id: 894389, original params: t,e,i (module,exports,require) **/
i.d(e, {
    b: () => E
});
var n = i(934551),
    l = i(419954),
    s = i(780964),
    r = i(358776),
    u = i(115980),
    a = i(901177),
    o = i(994421),
    T = i(531525),
    A = i(985018);
let d = (0, l.t_)(s.X.BILLING_PANEL, {
        usePredicate: () => (0, r.dk)("BillingPanel"),
        useTitle: () => A.intl.string(A.t.oeUm2s),
        buildLayout: () => [a.B, o.Z],
        hideInStreamerMode: !0
    }),
    S = (0, l.t_)(s.X.BILLING_PANEL, {
        usePredicate: () => !(0, r.dk)("LegacyBillingPanel"),
        useTitle: () => A.intl.string(A.t.oeUm2s),
        StronglyDiscouragedCustomComponent: u.Ay,
        buildLayout: () => []
    }),
    E = (0, l.i4)(s.X.BILLING_SIDEBAR_ITEM, {
        useTitle: () => A.intl.string(A.t.oeUm2s),
        icon: n.CreditCardIcon,
        getLegacySearchKey: () => (0, r.WJ)("BillingPanel") ? void 0 : T.H.BILLING,
        buildLayout: () => (0, r.WJ)("BillingPanel") ? [d] : [S]
    })