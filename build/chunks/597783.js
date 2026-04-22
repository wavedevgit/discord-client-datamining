/** chunk id: 597783 params = (module,exports,require) **/
r.d(e, {
    Z: () => k
});
var n = r(64700),
    i = r(311907),
    l = r(954571),
    s = r(927578),
    a = r(440938),
    u = r(590180),
    o = r(993408),
    c = r(331884),
    d = r(652215);

function k(t, e) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        k = (0, a.uM)(),
        p = (0, i.bG)([u.A], () => u.A.getProduct(t)),
        C = (0, c.i)(),
        m = s.Ay.canUseCollectibles(C),
        x = n.useRef(null),
        I = n.useCallback(() => {
            let n = null != p ? (0, o.Br)(p, m, !1) : null,
                i = null != p ? (0, o.c7)(p, m, !1) : void 0;
            l.default.track(d.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: k?.sessionId,
                sku_id: t,
                display_price: n?.amount,
                display_price_currency: n?.currency.toString(),
                display_price_strikethrough: i,
                position: k?.tilePosition,
                page_type: e,
                page_category: k?.pageCategory,
                page_section: k?.pageSection,
                type: r,
                category_position: k?.categoryPosition
            })
        }, [k?.sessionId, k?.categoryPosition, k?.pageCategory, k?.pageSection, k?.tilePosition, m, e, p, t, r]),
        A = n.useCallback(t => {
            t ? null === x.current && (x.current = setTimeout(() => {
                I(), x.current = null
            }, 1e3)) : null !== x.current && (clearTimeout(x.current), x.current = null)
        }, [I]);
    return n.useEffect(() => () => {
        null !== x.current && (clearTimeout(x.current), x.current = null)
    }, []), {
        handleCardVisibilityChange: A
    }
}