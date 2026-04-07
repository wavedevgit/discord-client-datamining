/** chunk id: 561769 params = (module,exports,require) **/
t.d(n, {
    AW: () => b,
    Hi: () => h,
    UU: () => v,
    Vm: () => C,
    gZ: () => f,
    ql: () => j,
    v3: () => I
});
var i, a, l = t(64700),
    s = t(575593),
    r = t(417597),
    d = t(793574),
    o = t(688810),
    c = t(954571),
    u = t(440938),
    _ = t(590180),
    A = t(161918),
    x = t(572595),
    p = t(57020),
    g = t(758836),
    m = t(652215);
let I = l.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0
});

function f() {
    return l.useContext(I).prioritizedCurrency
}
var b = ((i = {}).NONE = "none", i.NEW = "new", i.ORBS_EXCLUSIVE = "orbs_exclusive", i.LIMITED_TIME = "limited_time", i.NITRO_EXCLUSIVE = "nitro_exclusive", i),
    h = ((a = {}).FIAT = "fiat", a.ORBS = "orbs", a);
let v = (e, n, t) => i => {
        c.default.track(m.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: t?.sessionId,
            sku_id: e.skuId,
            page_type: n,
            page_section: t?.pageSection,
            page_category: n === g.G2.HOME ? void 0 : t?.pageCategory,
            page_index: n === g.G2.CATALOG ? t?.pageIndex : void 0,
            page_size: n === g.G2.CATALOG ? t?.pageSize : void 0,
            tile_type: s.R[e.type],
            tile_position: String(t?.tilePosition),
            cta_name: i
        })
    },
    j = (e, n, t) => {
        let i = (0, A.Mk)(),
            a = i?.tab,
            s = (0, u.uM)(),
            {
                analyticsLocations: c
            } = (0, o.Ay)(d.A.COLLECTIBLES_SHOP_CARD),
            g = (0, r.bG)([_.A], () => _.A.getCategoryForProduct(e.skuId)),
            m = l.useRef(null);
        return l.useCallback(n => i => {
            if (null == g) return;
            let l = (0, p.A)({
                product: e
            });
            m.current = i.currentTarget, t?.(), (0, x.t)({
                product: e,
                category: g,
                shouldCheckoutWithOrbs: l,
                analyticsLocations: c,
                analyticsSource: n,
                returnRef: m,
                tab: a,
                cardId: s?.cardId,
                sessionId: s?.sessionId,
                tilePosition: s?.tilePosition
            })
        }, [e, a, g, c, t, s?.cardId, s?.sessionId, s?.tilePosition])(n)
    },
    C = e => {
        let {
            flattenProductVariants: n,
            productOverride: t
        } = l.useContext(I);
        return (0, r.bG)([_.A], () => null != t ? t : n ? _.A.getProduct(e) : _.A.getCategoryForProduct(e)?.products.find(n => n.skuId === e))
    }