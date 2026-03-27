/** chunk id: 597783 params = (module,exports,require) **/
r.d(t, {
    Z: () => h
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

function h(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        h = (0, a.uM)(),
        m = (0, l.bG)([u.A], () => u.A.getProduct(e)),
        x = (0, c.i)(),
        f = s.Ay.canUseCollectibles(x),
        p = n.useRef(null),
        g = n.useCallback(() => {
            let n = null != m ? (0, o.Br)(m, f, !1) : null,
                l = null != m ? (0, o.c7)(m, f, !1) : void 0;
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
        }, [h?.sessionId, h?.categoryPosition, h?.pageCategory, h?.pageSection, h?.tilePosition, f, t, m, e, r]),
        v = n.useCallback(e => {
            e ? null === p.current && (p.current = setTimeout(() => {
                g(), p.current = null
            }, 1e3)) : null !== p.current && (clearTimeout(p.current), p.current = null)
        }, [g]);
    return n.useEffect(() => () => {
        null !== p.current && (clearTimeout(p.current), p.current = null)
    }, []), {
        handleCardVisibilityChange: v
    }
}