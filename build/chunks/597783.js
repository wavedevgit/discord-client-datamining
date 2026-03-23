/** chunk id: 597783 params = (module,exports,require) **/
r.d(t, {
    Z: () => m
});
var n = r(64700),
    l = r(311907),
    i = r(954571),
    s = r(927578),
    a = r(440938),
    u = r(590180),
    o = r(993408),
    c = r(331884),
    d = r(652215);

function m(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        m = (0, a.uM)(),
        f = (0, l.bG)([u.A], () => u.A.getProduct(e)),
        h = (0, c.i)(),
        x = s.Ay.canUseCollectibles(h),
        p = n.useRef(null),
        g = n.useCallback(() => {
            let n = null != f ? (0, o.Br)(f, x, !1) : null,
                l = null != f ? (0, o.c7)(f, x, !1) : void 0;
            i.default.track(d.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: m?.sessionId,
                sku_id: e,
                display_price: n?.amount,
                display_price_currency: n?.currency.toString(),
                display_price_strikethrough: l,
                position: m?.tilePosition,
                page_type: t,
                page_category: m?.pageCategory,
                page_section: m?.pageSection,
                type: r,
                category_position: m?.categoryPosition
            })
        }, [m?.sessionId, m?.categoryPosition, m?.pageCategory, m?.pageSection, m?.tilePosition, x, t, f, e, r]),
        C = n.useCallback(e => {
            e ? null === p.current && (p.current = setTimeout(() => {
                g(), p.current = null
            }, 1e3)) : null !== p.current && (clearTimeout(p.current), p.current = null)
        }, [g]);
    return n.useEffect(() => () => {
        null !== p.current && (clearTimeout(p.current), p.current = null)
    }, []), {
        handleCardVisibilityChange: C
    }
}