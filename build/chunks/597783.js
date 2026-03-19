/** chunk id: 597783 params = (module,exports,require) **/
r.d(t, {
    Z: () => h
});
var n = r(64700),
    l = r(311907),
    i = r(954571),
    a = r(927578),
    s = r(440938),
    u = r(590180),
    o = r(993408),
    c = r(331884),
    d = r(652215);

function h(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        h = (0, s.uM)(),
        m = (0, l.bG)([u.A], () => u.A.getProduct(e)),
        f = (0, c.i)(),
        x = a.Ay.canUseCollectibles(f),
        A = n.useRef(null),
        p = n.useCallback(() => {
            let n = null != m ? (0, o.Br)(m, x, !1) : null,
                l = null != m ? (0, o.c7)(m, x, !1) : void 0;
            i.default.track(d.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: h?.sessionId,
                sku_id: e,
                display_price: n?.amount,
                display_price_currency: n?.currency.toString(),
                display_price_strikethrough: l,
                position: h?.tilePosition,
                page_type: t,
                page_category: h?.pageCategory,
                page_section: h?.pageSection,
                type: r,
                category_position: h?.categoryPosition
            })
        }, [h?.sessionId, h?.categoryPosition, h?.pageCategory, h?.pageSection, h?.tilePosition, x, t, m, e, r]),
        v = n.useCallback(e => {
            e ? null === A.current && (A.current = setTimeout(() => {
                p(), A.current = null
            }, 1e3)) : null !== A.current && (clearTimeout(A.current), A.current = null)
        }, [p]);
    return n.useEffect(() => () => {
        null !== A.current && (clearTimeout(A.current), A.current = null)
    }, []), {
        handleCardVisibilityChange: v
    }
}