/** chunk id: 597783 params = (module,exports,require) **/
r.d(e, {
    Z: () => A
});
var i = r(64700),
    n = r(311907),
    l = r(954571),
    s = r(927578),
    a = r(440938),
    u = r(590180),
    o = r(993408),
    d = r(331884),
    c = r(652215);

function A(t, e) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "product",
        A = (0, a.uM)(),
        m = (0, n.bG)([u.A], () => u.A.getProduct(t)),
        x = (0, d.i)(),
        p = s.Ay.canUseCollectibles(x),
        g = i.useRef(null),
        C = i.useCallback(() => {
            let i = null != m ? (0, o.Br)(m, p, !1) : null,
                n = null != m ? (0, o.c7)(m, p, !1) : void 0;
            l.default.track(c.HAw.COLLECTIBLES_TILE_IMPRESSION, {
                collectibles_shop_session_id: A?.sessionId,
                sku_id: t,
                display_price: i?.amount,
                display_price_currency: i?.currency.toString(),
                display_price_strikethrough: n,
                position: A?.tilePosition,
                page_type: e,
                page_category: A?.pageCategory,
                page_section: A?.pageSection,
                type: r,
                category_position: A?.categoryPosition
            })
        }, [A?.sessionId, A?.categoryPosition, A?.pageCategory, A?.pageSection, A?.tilePosition, p, e, m, t, r]),
        h = i.useCallback(t => {
            t ? null === g.current && (g.current = setTimeout(() => {
                C(), g.current = null
            }, 1e3)) : null !== g.current && (clearTimeout(g.current), g.current = null)
        }, [C]);
    return i.useEffect(() => () => {
        null !== g.current && (clearTimeout(g.current), g.current = null)
    }, []), {
        handleCardVisibilityChange: h
    }
}