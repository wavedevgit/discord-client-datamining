/** chunk id: 994421, original params: t,e,i (module,exports,require) **/
i.d(e, {
    Z: () => o
});
var n = i(419954),
    l = i(780964),
    s = i(115980),
    a = i(985018);
let r = (0, n.E2)(l.X.BILLING_TRANSACTION_HISTORY, {
        Component: s.ac,
        useSearchTerms: () => [a.intl.string(a.t.obLrcK)]
    }),
    u = (0, n.E2)(l.X.BILLING_REDEMPTION_REDIRECT, {
        Component: s.OH,
        useSearchTerms: () => [a.intl.string(a.t.obLrcK)]
    }),
    o = (0, n.zZ)(l.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => a.intl.string(a.t.obLrcK),
        buildLayout: () => [r, u]
    })