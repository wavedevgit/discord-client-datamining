/** chunk id: 994421 params = (module,exports,require) **/
n.d(t, {
    Z: () => d
});
var i = n(419954),
    s = n(780964),
    l = n(115980),
    r = n(985018);
let a = (0, i.E2)(s.X.BILLING_TRANSACTION_HISTORY, {
        Component: l.ac,
        useSearchTerms: () => [r.intl.string(r.t.obLrcK)]
    }),
    o = (0, i.E2)(s.X.BILLING_REDEMPTION_REDIRECT, {
        Component: l.OH,
        useSearchTerms: () => [r.intl.string(r.t.obLrcK)]
    }),
    d = (0, i.zZ)(s.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => r.intl.string(r.t.obLrcK),
        buildLayout: () => [a, o]
    })