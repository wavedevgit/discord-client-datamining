/** chunk id: 597783 params = (module,exports,require) **/
r.d(t, {
    Z: () => p
});
var n = r(64700),
    l = r(311907),
    i = r(954571),
    s = r(927578),
    a = r(440938),
    o = r(590180),
    u = r(993408),
    c = r(331884),
    d = r(652215);

function p(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        p = (0, a.uM)(),
        k = (0, l.bG)([o.A], () => o.A.getProduct(e)),
        C = (0, c.i)(),
        m = s.Ay.canUseCollectibles(C),
        x = n.useRef(null),
        g = n.useCallback(() => {
            let n = null != k ? (0, u.Br)(k, m, !1) : null,
                l = null != k ? (0, u.c7)(k, m, !1) : void 0;
            i.default.track(d.HAw.COLLECTIBLES_TILE_IMPRESSION, {
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
        }, [p?.sessionId, p?.categoryPosition, p?.pageCategory, p?.pageSection, p?.tilePosition, m, t, k, e, r]),
        A = n.useCallback(e => {
            e ? null === x.current && (x.current = setTimeout(() => {
                g(), x.current = null
            }, 1e3)) : null !== x.current && (clearTimeout(x.current), x.current = null)
        }, [g]);
    return n.useEffect(() => () => {
        null !== x.current && (clearTimeout(x.current), x.current = null)
    }, []), {
        handleCardVisibilityChange: A
    }
}