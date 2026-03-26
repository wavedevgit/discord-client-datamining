/** chunk id: 561769 params = (module,exports,require) **/
n.d(t, {
    AW: () => b,
    Hi: () => C,
    UU: () => j,
    Vm: () => N,
    gZ: () => f,
    nY: () => v,
    ql: () => T,
    v3: () => A
});
var l, a, r = n(64700),
    i = n(575593),
    s = n(417597),
    d = n(793574),
    o = n(688810),
    c = n(954571),
    u = n(440938),
    _ = n(590180),
    m = n(161918),
    x = n(572595),
    p = n(57020),
    h = n(758836),
    g = n(652215);
let A = r.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0
});

function v() {
    return r.useContext(A).flattenProductVariants
}

function f() {
    return r.useContext(A).prioritizedCurrency
}
var b = ((l = {}).NONE = "none", l.NEW = "new", l.ORBS_EXCLUSIVE = "orbs_exclusive", l.LIMITED_TIME = "limited_time", l.NITRO_EXCLUSIVE = "nitro_exclusive", l),
    C = ((a = {}).FIAT = "fiat", a.ORBS = "orbs", a);
let j = (e, t, n) => l => {
        c.default.track(g.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: n?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: n?.pageSection,
            page_category: t === h.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === h.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === h.G2.CATALOG ? n?.pageSize : void 0,
            tile_type: i.R[e.type],
            tile_position: String(n?.tilePosition),
            cta_name: l
        })
    },
    T = (e, t, n) => {
        let l = (0, m.Mk)(),
            a = l?.tab,
            i = (0, u.uM)(),
            {
                analyticsLocations: c
            } = (0, o.Ay)(d.A.COLLECTIBLES_SHOP_CARD),
            h = (0, s.bG)([_.A], () => _.A.getCategoryForProduct(e.skuId)),
            g = r.useRef(null);
        return r.useCallback(t => l => {
            if (null == h) return;
            let r = (0, p.A)({
                product: e
            });
            g.current = l.currentTarget, n?.(), (0, x.t)({
                product: e,
                category: h,
                shouldCheckoutWithOrbs: r,
                analyticsLocations: c,
                analyticsSource: t,
                returnRef: g,
                tab: a,
                cardId: i?.cardId,
                sessionId: i?.sessionId,
                tilePosition: i?.tilePosition
            })
        }, [e, a, h, c, n, i?.cardId, i?.sessionId, i?.tilePosition])(t)
    },
    N = e => {
        let {
            flattenProductVariants: t,
            productOverride: n
        } = r.useContext(A);
        return (0, s.bG)([_.A], () => null != n ? n : t ? _.A.getProduct(e) : _.A.getCategoryForProduct(e)?.products.find(t => t.skuId === e))
    }