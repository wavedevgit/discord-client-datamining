/** chunk id: 859587 params = (module,exports,require) **/
r.d(t, {
    x: () => u
});
var n = r(64700),
    l = r(954571),
    i = r(440938),
    s = r(298072),
    a = r(623373),
    o = r(652215);

function u(e, t) {
    let r = (0, i.uM)(),
        u = (0, s.Q)(t),
        c = n.useRef(!1),
        d = n.useRef(r),
        p = n.useRef(t),
        C = n.useRef(u);
    n.useEffect(() => {
        d.current = r
    }, [r]), n.useEffect(() => {
        p.current = t
    }, [t]), n.useEffect(() => {
        C.current = u
    }, [u]), n.useEffect(() => {
        if (!e) {
            c.current = !1;
            return
        }
        if (c.current) return;
        let t = setTimeout(() => {
            let e = d.current,
                t = p.current,
                r = (0, a.B1)(t);
            l.default.track(o.HAw.SHOP_CARD_HOVERED, {
                shop_session_id: e?.sessionId,
                sku_id: r ? t.variants[C.current]?.skuId ?? t.skuId : t.skuId,
                position_in_section: e?.tilePosition,
                card_id: e?.cardId,
                card_contents: (0, a.v8)(t)
            }), c.current = !0
        }, 250);
        return () => clearTimeout(t)
    }, [e])
}