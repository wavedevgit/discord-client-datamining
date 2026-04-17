/** chunk id: 743693 params = (module,exports,require) **/
n.d(t, {
    _: () => o
});
var l = n(627968),
    a = n(311907),
    s = n(139146),
    i = n(961350),
    r = n(471505);

function o(e) {
    let {
        sku: t,
        location: n,
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
        location: n,
        trackButtonClick: c
    });
    return o || _ ? (0, l.jsx)(s._, {
        skuId: t.id,
        productName: t.name,
        isWishlisted: _,
        isBusy: m,
        isFirstTimeWishlister: h,
        onClick: x,
        ...d
    }) : null
}