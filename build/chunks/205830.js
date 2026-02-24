/** chunk id: 205830, original params: e,l,t (module,exports,require) **/
t.d(l, {
    $: () => d
});
var n = t(627968);
t(64700);
var s = t(503698),
    i = t.n(s),
    a = t(183802),
    r = t(660592);

function d(e) {
    let {
        applicationId: l,
        skuIds: t,
        variant: s = a.s.SMALL,
        guildId: d,
        analyticsLocations: o
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
            guildId: d,
            analyticsLocations: o
        }, `${e}-${t}`))
    })
}