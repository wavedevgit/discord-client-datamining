/** chunk id: 859587 params = (module,exports,require) **/
r.d(t, {
    x: () => o
});
var n = r(64700),
    l = r(954571),
    i = r(440938),
    s = r(298072),
    a = r(623373),
    u = r(652215);

function o(e, t) {
    let r = (0, i.uM)(),
        o = (0, s.Q)(t),
        d = n.useRef(!1),
        c = n.useRef(r),
        p = n.useRef(t),
        m = n.useRef(o);
    n.useEffect(() => {
        c.current = r
    }, [r]), n.useEffect(() => {
        p.current = t
    }, [t]), n.useEffect(() => {
        m.current = o
    }, [o]), n.useEffect(() => {
        if (!e) {
            d.current = !1;
            return
        }
        if (d.current) return;
        let t = setTimeout(() => {
            let e = c.current,
                t = p.current,
                r = (0, a.B1)(t);
            l.default.track(u.HAw.SHOP_CARD_HOVERED, {
                shop_session_id: e?.sessionId,
                sku_id: r ? t.variants[m.current]?.skuId ?? t.skuId : t.skuId,
                position_in_section: e?.tilePosition,
                card_id: e?.cardId,
                card_contents: (0, a.v8)(t)
            }), d.current = !0
        }, 250);
        return () => clearTimeout(t)
    }, [e])
}