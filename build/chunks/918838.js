/** chunk id: 918838 params = (module,exports,require) **/
r.d(e, {
    U: () => d
});
var n = r(64700),
    i = r(110259),
    l = r(172218),
    s = r(688810),
    a = r(139286),
    u = r(440938),
    o = r(298072),
    c = r(623373);

function d(t) {
    let e = (0, u.uM)(),
        {
            analyticsLocations: r
        } = (0, s.Ay)(),
        d = (0, o.Q)(t),
        k = n.useRef(null),
        p = n.useRef(!1),
        C = n.useRef(d);
    n.useEffect(() => {
        C.current = d
    }, [d]);
    let m = n.useCallback(() => {
            let n = (0, c.B1)(t);
            (0, a.x)({
                name: i.ImpressionNames.SHOP_CARD,
                type: i.ImpressionTypes.VIEW,
                properties: {
                    sku_id: n ? t.variants[C.current]?.skuId ?? t.skuId : t.skuId,
                    card_id: e?.cardId,
                    shop_session_id: e?.sessionId,
                    position_in_section: e?.tilePosition,
                    product_sku_ids: (0, c.B1)(t) ? t.variants.map(t => t.skuId) : [t.skuId],
                    location_stack: r
                }
            }, !1, !0)
        }, [t, e?.cardId, e?.sessionId, e?.tilePosition, r]),
        x = (0, l.K)(t => {
            t ? p.current || null === k.current && (k.current = setTimeout(() => {
                m(), p.current = !0, k.current = null
            }, 1e3)) : (p.current = !1, null !== k.current && (clearTimeout(k.current), k.current = null))
        }, .5);
    return n.useEffect(() => () => {
        null !== k.current && (clearTimeout(k.current), k.current = null)
    }, []), x
}