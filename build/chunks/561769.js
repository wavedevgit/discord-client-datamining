/** chunk id: 561769, original params: e,t,n (module,exports,require) **/
n.d(t, {
    AW: () => g,
    Hi: () => j,
    UU: () => b,
    Vm: () => v,
    gZ: () => I,
    nY: () => h,
    ql: () => N,
    v3: () => f
});
var i, s, l = n(64700),
    r = n(575593),
    a = n(417597),
    d = n(793574),
    o = n(688810),
    c = n(954571),
    u = n(590180),
    A = n(161918),
    x = n(572595),
    _ = n(57020),
    m = n(758836),
    p = n(652215);
let f = l.createContext({
    flattenProductVariants: !1,
    productOverride: void 0,
    prioritizedCurrency: void 0
});

function h() {
    return l.useContext(f).flattenProductVariants
}

function I() {
    return l.useContext(f).prioritizedCurrency
}
var g = ((i = {}).NONE = "none", i.NEW = "new", i.ORBS_EXCLUSIVE = "orbs_exclusive", i.LIMITED_TIME = "limited_time", i.NITRO_EXCLUSIVE = "nitro_exclusive", i),
    j = ((s = {}).FIAT = "fiat", s.ORBS = "orbs", s);
let b = (e, t, n) => i => {
        c.default.track(p.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: n?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: n?.pageSection,
            page_category: t === m.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === m.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === m.G2.CATALOG ? n?.pageSize : void 0,
            tile_type: r.R[e.type],
            tile_position: String(n?.tilePosition),
            cta_name: i
        })
    },
    N = (e, t, n) => {
        let i = (0, A.Mk)(),
            s = i?.tab,
            {
                analyticsLocations: r
            } = (0, o.Ay)(d.A.COLLECTIBLES_SHOP_CARD),
            c = (0, a.bG)([u.A], () => u.A.getCategoryForProduct(e.skuId)),
            m = l.useRef(null);
        return l.useCallback(t => i => {
            if (null == c) return;
            let l = (0, _.A)({
                product: e
            });
            m.current = i.currentTarget, n?.(), (0, x.t)({
                product: e,
                category: c,
                shouldCheckoutWithOrbs: l,
                analyticsLocations: r,
                analyticsSource: t,
                returnRef: m,
                tab: s
            })
        }, [e, s, c, r, n])(t)
    },
    v = e => {
        let {
            flattenProductVariants: t,
            productOverride: n
        } = l.useContext(f);
        return (0, a.bG)([u.A], () => null != n ? n : t ? u.A.getProduct(e) : u.A.getCategoryForProduct(e)?.products.find(t => t.skuId === e))
    }