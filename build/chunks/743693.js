/** chunk id: 743693 params = (module,exports,require) **/
l.d(t, {
    _: () => o
});
var n = l(627968),
    a = l(311907),
    s = l(139146),
    i = l(961350),
    r = l(471505);

function o(e) {
    let {
        sku: t,
        location: l,
        isCardHovered: o = !0,
        trackButtonClick: c,
        ...d
    } = e, u = (0, a.bG)([i.default], () => i.default.getId()), {
        isWishlisted: _,
        isBusy: m,
        isFirstTimeWishlister: h,
        handleToggle: x
    } = (0, r.G)({
        userId: u,
        sku: t,
        location: l,
        trackButtonClick: c
    });
    return o || _ ? (0, n.jsx)(s._, {
        skuId: t.id,
        productName: t.name,
        isWishlisted: _,
        isBusy: m,
        isFirstTimeWishlister: h,
        onClick: x,
        ...d
    }) : null
}