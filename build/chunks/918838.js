/** chunk id: 918838 params = (module,exports,require) **/
r.d(t, {
    U: () => c
});
var n = r(64700),
    l = r(110259),
    i = r(172218),
    s = r(688810),
    a = r(139286),
    u = r(440938),
    o = r(298072),
    d = r(623373);

function c(e) {
    let t = (0, u.uM)(),
        {
            analyticsLocations: r
        } = (0, s.Ay)(),
        c = (0, o.Q)(e),
        p = n.useRef(null),
        m = n.useRef(!1),
        x = n.useRef(c);
    n.useEffect(() => {
        x.current = c
    }, [c]);
    let g = n.useCallback(() => {
            let n = (0, d.B1)(e);
            (0, a.x)({
                name: l.ImpressionNames.SHOP_CARD,
                type: l.ImpressionTypes.VIEW,
                properties: {
                    sku_id: n ? e.variants[x.current]?.skuId ?? e.skuId : e.skuId,
                    card_id: t?.cardId,
                    shop_session_id: t?.sessionId,
                    position_in_section: t?.tilePosition,
                    product_sku_ids: (0, d.B1)(e) ? e.variants.map(e => e.skuId) : [e.skuId],
                    location_stack: r
                }
            }, !1, !0)
        }, [e, t?.cardId, t?.sessionId, t?.tilePosition, r]),
        h = (0, i.K)(e => {
            e ? m.current || null === p.current && (p.current = setTimeout(() => {
                g(), m.current = !0, p.current = null
            }, 1e3)) : (m.current = !1, null !== p.current && (clearTimeout(p.current), p.current = null))
        }, .5);
    return n.useEffect(() => () => {
        null !== p.current && (clearTimeout(p.current), p.current = null)
    }, []), h
}