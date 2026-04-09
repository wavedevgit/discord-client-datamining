/** chunk id: 570050 params = (module,exports,require) **/
t.d(e, {
    J: () => o
});
var s = t(64700),
    n = t(954571),
    r = t(299679),
    c = t(652215);

function o(i, e) {
    let t = (0, r.Ar)(),
        o = s.useRef(!1),
        l = s.useRef(t);
    s.useEffect(() => {
        l.current = t
    }, [t]), s.useEffect(() => {
        if (!i) {
            o.current = !1;
            return
        }
        if (o.current) return;
        let t = setTimeout(() => {
            let i = l.current;
            n.default.track(c.HAw.WISHLIST_ITEM_HOVERED, {
                sku_id: i?.skuId,
                wishlist_id: i?.wishlistId,
                wishlist_owner_id: i?.wishlistOwnerId,
                surface: i?.surface,
                position_in_section: i?.positionInSection,
                item_source: i?.itemSource,
                product_line: i?.productLine,
                card_id: e,
                impression_session_id: i?.impressionSessionId,
                location_stack: i?.analyticsLocations
            }), o.current = !0
        }, 250);
        return () => clearTimeout(t)
    }, [i, e])
}