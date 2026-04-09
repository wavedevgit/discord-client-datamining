/** chunk id: 561769 params = (module,exports,require) **/
i.d(t, {
    AW: () => C,
    Hi: () => L,
    UU: () => p,
    Vm: () => v,
    gZ: () => E,
    ql: () => _,
    v3: () => f
});
var r, l, n = i(64700),
    s = i(575593),
    u = i(417597),
    o = i(793574),
    a = i(688810),
    d = i(954571),
    c = i(440938),
    I = i(590180),
    h = i(161918),
    g = i(572595),
    S = i(57020),
    m = i(758836),
    A = i(652215);
let f = n.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0
});

function E() {
    return n.useContext(f).prioritizedCurrency
}
var C = ((r = {}).NONE = "none", r.NEW = "new", r.ORBS_EXCLUSIVE = "orbs_exclusive", r.LIMITED_TIME = "limited_time", r.NITRO_EXCLUSIVE = "nitro_exclusive", r),
    L = ((l = {}).FIAT = "fiat", l.ORBS = "orbs", l);
let p = (e, t, i) => r => {
        d.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: i?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: i?.pageSection,
            page_category: t === m.G2.HOME ? void 0 : i?.pageCategory,
            page_index: t === m.G2.CATALOG ? i?.pageIndex : void 0,
            page_size: t === m.G2.CATALOG ? i?.pageSize : void 0,
            tile_type: s.R[e.type],
            tile_position: String(i?.tilePosition),
            cta_name: r
        })
    },
    _ = (e, t, i) => {
        let r = (0, h.Mk)(),
            l = r?.tab,
            s = (0, c.uM)(),
            {
                analyticsLocations: d
            } = (0, a.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
            m = (0, u.bG)([I.A], () => I.A.getCategoryForProduct(e.skuId)),
            A = n.useRef(null);
        return n.useCallback(t => r => {
            if (null == m) return;
            let n = (0, S.A)({
                product: e
            });
            A.current = r.currentTarget, i?.(), (0, g.t)({
                product: e,
                category: m,
                shouldCheckoutWithOrbs: n,
                analyticsLocations: d,
                analyticsSource: t,
                returnRef: A,
                tab: l,
                cardId: s?.cardId,
                sessionId: s?.sessionId,
                tilePosition: s?.tilePosition
            })
        }, [e, l, m, d, i, s?.cardId, s?.sessionId, s?.tilePosition])(t)
    },
    v = e => {
        let {
            flattenProductVariants: t,
            productOverride: i
        } = n.useContext(f);
        return (0, u.bG)([I.A], () => null != i ? i : t ? I.A.getProduct(e) : I.A.getCategoryForProduct(e)?.products.find(t => t.skuId === e))
    }