/** chunk id: 743693 params = (module,exports,require) **/
n.d(t, {
    _: () => o
});
var a = n(627968),
    l = n(311907),
    i = n(139146),
    s = n(961350),
    r = n(471505);

function o(e) {
    let {
        sku: t,
        location: n,
        isCardHovered: o = !0,
        trackButtonClick: d,
        ...c
    } = e, u = (0, l.bG)([s.default], () => s.default.getId()), {
        isWishlisted: _,
        isBusy: m,
        isFirstTimeWishlister: h,
        handleToggle: b
    } = (0, r.G)({
        userId: u,
        sku: t,
        location: n,
        trackButtonClick: d
    });
    return o || _ ? (0, a.jsx)(i._, {
        skuId: t.id,
        productName: t.name,
        isWishlisted: _,
        isBusy: m,
        isFirstTimeWishlister: h,
        onClick: b,
        ...c
    }) : null
}