/** chunk id: 561769 params = (module,exports,require) **/
n.d(t, {
    AW: () => f,
    Hi: () => b,
    UU: () => C,
    Vm: () => T,
    gZ: () => v,
    nY: () => A,
    ql: () => j,
    v3: () => g
});
var l, a, r = n(64700),
    i = n(575593),
    s = n(417597),
    d = n(793574),
    o = n(688810),
    c = n(954571),
    u = n(590180),
    _ = n(161918),
    m = n(572595),
    x = n(57020),
    p = n(758836),
    h = n(652215);
let g = r.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0
});

function A() {
    return r.useContext(g).flattenProductVariants
}

function v() {
    return r.useContext(g).prioritizedCurrency
}
var f = ((l = {}).NONE = "none", l.NEW = "new", l.ORBS_EXCLUSIVE = "orbs_exclusive", l.LIMITED_TIME = "limited_time", l.NITRO_EXCLUSIVE = "nitro_exclusive", l),
    b = ((a = {}).FIAT = "fiat", a.ORBS = "orbs", a);
let C = (e, t, n) => l => {
        c.default.track(h.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: n?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: n?.pageSection,
            page_category: t === p.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === p.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === p.G2.CATALOG ? n?.pageSize : void 0,
            tile_type: i.R[e.type],
            tile_position: String(n?.tilePosition),
            cta_name: l
        })
    },
    j = (e, t, n) => {
        let l = (0, _.Mk)(),
            a = l?.tab,
            {
                analyticsLocations: i
            } = (0, o.Ay)(d.A.COLLECTIBLES_SHOP_CARD),
            c = (0, s.bG)([u.A], () => u.A.getCategoryForProduct(e.skuId)),
            p = r.useRef(null);
        return r.useCallback(t => l => {
            if (null == c) return;
            let r = (0, x.A)({
                product: e
            });
            p.current = l.currentTarget, n?.(), (0, m.t)({
                product: e,
                category: c,
                shouldCheckoutWithOrbs: r,
                analyticsLocations: i,
                analyticsSource: t,
                returnRef: p,
                tab: a
            })
        }, [e, a, c, i, n])(t)
    },
    T = e => {
        let {
            flattenProductVariants: t,
            productOverride: n
        } = r.useContext(g);
        return (0, s.bG)([u.A], () => null != n ? n : t ? u.A.getProduct(e) : u.A.getCategoryForProduct(e)?.products.find(t => t.skuId === e))
    }