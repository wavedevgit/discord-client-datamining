/** chunk id: 918838 params = (module,exports,require) **/
r.d(t, {
    U: () => d
});
var n = r(64700),
    l = r(110259),
    i = r(172218),
    s = r(688810),
    a = r(139286),
    o = r(440938),
    u = r(298072),
    c = r(623373);

function d(e) {
    let t = (0, o.uM)(),
        {
            analyticsLocations: r
        } = (0, s.Ay)(),
        d = (0, u.Q)(e),
        p = n.useRef(null),
        C = n.useRef(!1),
        k = n.useRef(d);
    n.useEffect(() => {
        k.current = d
    }, [d]);
    let m = n.useCallback(() => {
            let n = (0, c.B1)(e);
            (0, a.x)({
                name: l.ImpressionNames.SHOP_CARD,
                type: l.ImpressionTypes.VIEW,
                properties: {
                    sku_id: n ? e.variants[k.current]?.skuId ?? e.skuId : e.skuId,
                    card_id: t?.cardId,
                    shop_session_id: t?.sessionId,
                    position_in_section: t?.tilePosition,
                    product_sku_ids: (0, c.B1)(e) ? e.variants.map(e => e.skuId) : [e.skuId],
                    location_stack: r
                }
            }, !1, !0)
        }, [e, t?.cardId, t?.sessionId, t?.tilePosition, r]),
        x = (0, i.K)(e => {
            e ? C.current || null === p.current && (p.current = setTimeout(() => {
                m(), C.current = !0, p.current = null
            }, 1e3)) : (C.current = !1, null !== p.current && (clearTimeout(p.current), p.current = null))
        }, .5);
    return n.useEffect(() => () => {
        null !== p.current && (clearTimeout(p.current), p.current = null)
    }, []), x
}