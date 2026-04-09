/** chunk id: 597783 params = (module,exports,require) **/
r.d(t, {
    Z: () => p
});
var n = r(64700),
    l = r(311907),
    i = r(954571),
    s = r(927578),
    a = r(440938),
    u = r(590180),
    o = r(993408),
    d = r(331884),
    c = r(652215);

function p(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        p = (0, a.uM)(),
        m = (0, l.bG)([u.A], () => u.A.getProduct(e)),
        x = (0, d.i)(),
        g = s.Ay.canUseCollectibles(x),
        h = n.useRef(null),
        C = n.useCallback(() => {
            let n = null != m ? (0, o.Br)(m, g, !1) : null,
                l = null != m ? (0, o.c7)(m, g, !1) : void 0;
            i.default.track(c.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: p?.sessionId,
                sku_id: e,
                display_price: n?.amount,
                display_price_currency: n?.currency.toString(),
                display_price_strikethrough: l,
                position: p?.tilePosition,
                page_type: t,
                page_category: p?.pageCategory,
                page_section: p?.pageSection,
                type: r,
                category_position: p?.categoryPosition
            })
        }, [p?.sessionId, p?.categoryPosition, p?.pageCategory, p?.pageSection, p?.tilePosition, g, t, m, e, r]),
        A = n.useCallback(e => {
            e ? null === h.current && (h.current = setTimeout(() => {
                C(), h.current = null
            }, 1e3)) : null !== h.current && (clearTimeout(h.current), h.current = null)
        }, [C]);
    return n.useEffect(() => () => {
        null !== h.current && (clearTimeout(h.current), h.current = null)
    }, []), {
        handleCardVisibilityChange: A
    }
}