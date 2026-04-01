/** chunk id: 561769 params = (module,exports,require) **/
t.d(n, {
    AW: () => b,
    Hi: () => h,
    UU: () => j,
    Vm: () => C,
    gZ: () => f,
    ql: () => v,
    v3: () => I
});
var i, a, s = t(64700),
    l = t(575593),
    r = t(417597),
    o = t(793574),
    d = t(688810),
    c = t(954571),
    u = t(440938),
    _ = t(590180),
    A = t(161918),
    x = t(572595),
    p = t(57020),
    g = t(758836),
    m = t(652215);
let I = s.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0
});

function f() {
    return s.useContext(I).prioritizedCurrency
}
var b = ((i = {}).NONE = "none", i.NEW = "new", i.ORBS_EXCLUSIVE = "orbs_exclusive", i.LIMITED_TIME = "limited_time", i.NITRO_EXCLUSIVE = "nitro_exclusive", i),
    h = ((a = {}).FIAT = "fiat", a.ORBS = "orbs", a);
let j = (e, n, t) => i => {
        c.default.track(m.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: t?.sessionId,
            sku_id: e.skuId,
            page_type: n,
            page_section: t?.pageSection,
            page_category: n === g.G2.HOME ? void 0 : t?.pageCategory,
            page_index: n === g.G2.CATALOG ? t?.pageIndex : void 0,
            page_size: n === g.G2.CATALOG ? t?.pageSize : void 0,
            tile_type: l.R[e.type],
            tile_position: String(t?.tilePosition),
            cta_name: i
        })
    },
    v = (e, n, t) => {
        let i = (0, A.Mk)(),
            a = i?.tab,
            l = (0, u.uM)(),
            {
                analyticsLocations: c
            } = (0, d.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
            g = (0, r.bG)([_.A], () => _.A.getCategoryForProduct(e.skuId)),
            m = s.useRef(null);
        return s.useCallback(n => i => {
            if (null == g) return;
            let s = (0, p.A)({
                product: e
            });
            m.current = i.currentTarget, t?.(), (0, x.t)({
                product: e,
                category: g,
                shouldCheckoutWithOrbs: s,
                analyticsLocations: c,
                analyticsSource: n,
                returnRef: m,
                tab: a,
                cardId: l?.cardId,
                sessionId: l?.sessionId,
                tilePosition: l?.tilePosition
            })
        }, [e, a, g, c, t, l?.cardId, l?.sessionId, l?.tilePosition])(n)
    },
    C = e => {
        let {
            flattenProductVariants: n,
            productOverride: t
        } = s.useContext(I);
        return (0, r.bG)([_.A], () => null != t ? t : n ? _.A.getProduct(e) : _.A.getCategoryForProduct(e)?.products.find(n => n.skuId === e))
    }