/** chunk id: 859587 params = (module,exports,require) **/
r.d(e, {
    x: () => d
});
var n = r(64700),
    i = r(66455),
    l = r(688810),
    s = r(954571),
    a = r(440938),
    u = r(298072),
    o = r(623373),
    c = r(652215);

function d(t, e) {
    let r = (0, a.uM)(),
        {
            analyticsLocations: d
        } = (0, l.Ay)(),
        k = (0, u.Q)(e),
        p = n.useRef(!1),
        C = (0, i.A)(r),
        m = (0, i.A)(e),
        x = (0, i.A)(k),
        I = (0, i.A)(d);
    n.useEffect(() => {
        if (!t) {
            p.current = !1;
            return
        }
        if (p.current) return;
        let e = setTimeout(() => {
            let t = C.current,
                e = m.current,
                r = (0, o.B1)(e);
            s.default.track(c.HAw.SHOP_CARD_HOVERED, {
                shop_session_id: t?.sessionId,
                sku_id: r ? e.variants[x.current]?.skuId ?? e.skuId : e.skuId,
                position_in_section: t?.tilePosition,
                card_id: t?.cardId,
                product_sku_ids: (0, o.v8)(e),
                location_stack: I.current
            }), p.current = !0
        }, 250);
        return () => clearTimeout(e)
    }, [t, C, m, x, I])
}