/** chunk id: 561769 params = (module,exports,require) **/
t.d(n, {
    AW: () => b,
    Hi: () => j,
    UU: () => v,
    Vm: () => N,
    gZ: () => h,
    nY: () => I,
    ql: () => C,
    v3: () => g
});
var i, a, s = t(64700),
    r = t(575593),
    l = t(417597),
    o = t(793574),
    d = t(688810),
    c = t(954571),
    u = t(440938),
    _ = t(590180),
    A = t(161918),
    p = t(572595),
    x = t(57020),
    f = t(758836),
    m = t(652215);
let g = s.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0
});

function I() {
    return s.useContext(g).flattenProductVariants
}

function h() {
    return s.useContext(g).prioritizedCurrency
}
var b = ((i = {}).NONE = "none", i.NEW = "new", i.ORBS_EXCLUSIVE = "orbs_exclusive", i.LIMITED_TIME = "limited_time", i.NITRO_EXCLUSIVE = "nitro_exclusive", i),
    j = ((a = {}).FIAT = "fiat", a.ORBS = "orbs", a);
let v = (e, n, t) => i => {
        c.default.track(m.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: t?.sessionId,
            sku_id: e.skuId,
            page_type: n,
            page_section: t?.pageSection,
            page_category: n === f.G2.HOME ? void 0 : t?.pageCategory,
            page_index: n === f.G2.CATALOG ? t?.pageIndex : void 0,
            page_size: n === f.G2.CATALOG ? t?.pageSize : void 0,
            tile_type: r.R[e.type],
            tile_position: String(t?.tilePosition),
            cta_name: i
        })
    },
    C = (e, n, t) => {
        let i = (0, A.Mk)(),
            a = i?.tab,
            r = (0, u.uM)(),
            {
                analyticsLocations: c
            } = (0, d.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
            f = (0, l.bG)([_.A], () => _.A.getCategoryForProduct(e.skuId)),
            m = s.useRef(null);
        return s.useCallback(n => i => {
            if (null == f) return;
            let s = (0, x.A)({
                product: e
            });
            m.current = i.currentTarget, t?.(), (0, p.t)({
                product: e,
                category: f,
                shouldCheckoutWithOrbs: s,
                analyticsLocations: c,
                analyticsSource: n,
                returnRef: m,
                tab: a,
                cardId: r?.cardId,
                sessionId: r?.sessionId,
                tilePosition: r?.tilePosition
            })
        }, [e, a, f, c, t, r?.cardId, r?.sessionId, r?.tilePosition])(n)
    },
    N = e => {
        let {
            flattenProductVariants: n,
            productOverride: t
        } = s.useContext(g);
        return (0, l.bG)([_.A], () => null != t ? t : n ? _.A.getProduct(e) : _.A.getCategoryForProduct(e)?.products.find(n => n.skuId === e))
    }