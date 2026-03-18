/** chunk id: 561769 params = (module,exports,require) **/
n.d(t, {
    AW: () => I,
    Hi: () => j,
    UU: () => b,
    Vm: () => C,
    gZ: () => g,
    nY: () => h,
    ql: () => v,
    v3: () => f
});
var i, s, r = n(64700),
    a = n(575593),
    l = n(417597),
    o = n(793574),
    d = n(688810),
    c = n(954571),
    u = n(590180),
    _ = n(161918),
    A = n(572595),
    m = n(57020),
    x = n(758836),
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
            page_category: t === x.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === x.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === x.G2.CATALOG ? n?.pageSize : void 0,
            tile_type: a.R[e.type],
            tile_position: String(n?.tilePosition),
            cta_name: i
        })
    },
    v = (e, t, n) => {
        let i = (0, _.Mk)(),
            s = i?.tab,
            {
                analyticsLocations: a
            } = (0, d.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
            c = (0, l.bG)([u.A], () => u.A.getCategoryForProduct(e.skuId)),
            x = r.useRef(null);
        return r.useCallback(t => i => {
            if (null == c) return;
            let r = (0, m.A)({
                product: e
            });
            x.current = i.currentTarget, n?.(), (0, A.t)({
                product: e,
                category: c,
                shouldCheckoutWithOrbs: r,
                analyticsLocations: a,
                analyticsSource: t,
                returnRef: x,
                tab: s
            })
        }, [e, s, c, a, n])(t)
    },
    C = e => {
        let {
            flattenProductVariants: t,
            productOverride: n
        } = r.useContext(f);
        return (0, l.bG)([u.A], () => null != n ? n : t ? u.A.getProduct(e) : u.A.getCategoryForProduct(e)?.products.find(t => t.skuId === e))
    }