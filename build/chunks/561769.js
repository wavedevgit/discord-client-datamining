/** chunk id: 561769 params = (module,exports,require) **/
n.d(t, {
    AW: () => f,
    Hi: () => T,
    UU: () => C,
    Vm: () => I,
    gZ: () => v,
    nY: () => b,
    ql: () => j,
    v3: () => A
});
var l, a, i = n(64700),
    r = n(575593),
    s = n(417597),
    d = n(793574),
    o = n(688810),
    c = n(954571),
    u = n(440938),
    _ = n(590180),
    m = n(161918),
    x = n(572595),
    p = n(57020),
    g = n(758836),
    h = n(652215);
let A = i.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0
});

function b() {
    return i.useContext(A).flattenProductVariants
}

function v() {
    return i.useContext(A).prioritizedCurrency
}
var f = ((l = {}).NONE = "none", l.NEW = "new", l.ORBS_EXCLUSIVE = "orbs_exclusive", l.LIMITED_TIME = "limited_time", l.NITRO_EXCLUSIVE = "nitro_exclusive", l),
    T = ((a = {}).FIAT = "fiat", a.ORBS = "orbs", a);
let C = (e, t, n) => l => {
        c.default.track(h.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: n?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: n?.pageSection,
            page_category: t === g.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === g.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === g.G2.CATALOG ? n?.pageSize : void 0,
            tile_type: r.R[e.type],
            tile_position: String(n?.tilePosition),
            cta_name: l
        })
    },
    j = (e, t, n) => {
        let l = (0, m.Mk)(),
            a = l?.tab,
            r = (0, u.uM)(),
            {
                analyticsLocations: c
            } = (0, o.Ay)(d.A.COLLECTIBLES_SHOP_CARD),
            g = (0, s.bG)([_.A], () => _.A.getCategoryForProduct(e.skuId)),
            h = i.useRef(null);
        return i.useCallback(t => l => {
            if (null == g) return;
            let i = (0, p.A)({
                product: e
            });
            h.current = l.currentTarget, n?.(), (0, x.t)({
                product: e,
                category: g,
                shouldCheckoutWithOrbs: i,
                analyticsLocations: c,
                analyticsSource: t,
                returnRef: h,
                tab: a,
                cardId: r?.cardId,
                sessionId: r?.sessionId,
                tilePosition: r?.tilePosition
            })
        }, [e, a, g, c, n, r?.cardId, r?.sessionId, r?.tilePosition])(t)
    },
    I = e => {
        let {
            flattenProductVariants: t,
            productOverride: n
        } = i.useContext(A);
        return (0, s.bG)([_.A], () => null != n ? n : t ? _.A.getProduct(e) : _.A.getCategoryForProduct(e)?.products.find(t => t.skuId === e))
    }