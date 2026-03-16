/** chunk id: 561769 params = (module,exports,require) **/
n.d(t, {
    AW: () => I,
    Hi: () => j,
    UU: () => b,
    Vm: () => N,
    gZ: () => g,
    nY: () => h,
    ql: () => v,
    v3: () => f
});
var i, s, r = n(64700),
    l = n(575593),
    a = n(417597),
    o = n(793574),
    d = n(688810),
    c = n(954571),
    u = n(590180),
    m = n(161918),
    A = n(572595),
    x = n(57020),
    _ = n(758836),
    p = n(652215);
let f = r.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0
});

function h() {
    return r.useContext(f).flattenProductVariants
}

function g() {
    return r.useContext(f).prioritizedCurrency
}
var I = ((i = {}).NONE = "none", i.NEW = "new", i.ORBS_EXCLUSIVE = "orbs_exclusive", i.LIMITED_TIME = "limited_time", i.NITRO_EXCLUSIVE = "nitro_exclusive", i),
    j = ((s = {}).FIAT = "fiat", s.ORBS = "orbs", s);
let b = (e, t, n) => i => {
        c.default.track(p.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: n?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: n?.pageSection,
            page_category: t === _.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === _.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === _.G2.CATALOG ? n?.pageSize : void 0,
            tile_type: l.R[e.type],
            tile_position: String(n?.tilePosition),
            cta_name: i
        })
    },
    v = (e, t, n) => {
        let i = (0, m.Mk)(),
            s = i?.tab,
            {
                analyticsLocations: l
            } = (0, d.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
            c = (0, a.bG)([u.A], () => u.A.getCategoryForProduct(e.skuId)),
            _ = r.useRef(null);
        return r.useCallback(t => i => {
            if (null == c) return;
            let r = (0, x.A)({
                product: e
            });
            _.current = i.currentTarget, n?.(), (0, A.t)({
                product: e,
                category: c,
                shouldCheckoutWithOrbs: r,
                analyticsLocations: l,
                analyticsSource: t,
                returnRef: _,
                tab: s
            })
        }, [e, s, c, l, n])(t)
    },
    N = e => {
        let {
            flattenProductVariants: t,
            productOverride: n
        } = r.useContext(f);
        return (0, a.bG)([u.A], () => null != n ? n : t ? u.A.getProduct(e) : u.A.getCategoryForProduct(e)?.products.find(t => t.skuId === e))
    }