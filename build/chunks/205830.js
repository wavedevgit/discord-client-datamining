/** chunk id: 205830, original params: e,l,t (module,exports,require) **/
t.d(l, {
    $: () => o
});
var n = t(627968);
t(64700);
var s = t(503698),
    i = t.n(s),
    a = t(183802),
    r = t(616838);

function o(e) {
    let {
        applicationId: l,
        skuIds: t,
        variant: s = a.s.SMALL,
        guildId: o,
        analyticsLocations: d
    } = e;
    return null == t || 0 === t.length ? null : (0, n.jsx)("div", {
        className: i()(r.kL, r.$2, {
            [r.Wc]: s === a.s.MEDIUM
        }),
        children: t.map((e, t) => (0, n.jsx)(a.A, {
            positionInSection: t,
            applicationId: l,
            skuId: e,
            variant: s,
            guildId: o,
            analyticsLocations: d
        }, `${e}-${t}`))
    })
}