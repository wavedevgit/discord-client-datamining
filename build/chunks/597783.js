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
        h = (0, l.bG)([u.A], () => u.A.getProduct(e)),
        p = (0, c.i)(),
        f = s.Ay.canUseCollectibles(p),
        x = n.useRef(null),
        C = n.useCallback(() => {
            let n = null != h ? (0, o.Br)(h, f, !1) : null,
                l = null != h ? (0, o.c7)(h, f, !1) : void 0;
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
        }, [m?.sessionId, m?.categoryPosition, m?.pageCategory, m?.pageSection, m?.tilePosition, f, t, h, e, r]),
        g = n.useCallback(e => {
            e ? null === x.current && (x.current = setTimeout(() => {
                C(), x.current = null
            }, 1e3)) : null !== x.current && (clearTimeout(x.current), x.current = null)
        }, [C]);
    return n.useEffect(() => () => {
        null !== x.current && (clearTimeout(x.current), x.current = null)
    }, []), {
        handleCardVisibilityChange: g
    }
}