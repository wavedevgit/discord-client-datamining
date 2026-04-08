/** chunk id: 561769 params = (module,exports,require) **/
t.d(n, {
    AW: () => h,
    Hi: () => v,
    UU: () => E,
    Vm: () => y,
    gZ: () => x,
    ql: () => b,
    v3: () => f
});
var i, a, l = t(64700),
    r = t(575593),
    s = t(417597),
    d = t(793574),
    o = t(688810),
    c = t(954571),
    u = t(440938),
    _ = t(590180),
    p = t(161918),
    A = t(572595),
    g = t(57020),
    I = t(758836),
    m = t(652215);
let f = l.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0
});

function x() {
    return l.useContext(f).prioritizedCurrency
}
var h = ((i = {}).NONE = "none", i.NEW = "new", i.ORBS_EXCLUSIVE = "orbs_exclusive", i.LIMITED_TIME = "limited_time", i.NITRO_EXCLUSIVE = "nitro_exclusive", i),
    v = ((a = {}).FIAT = "fiat", a.ORBS = "orbs", a);
let E = (e, n, t) => i => {
        c.default.track(m.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: t?.sessionId,
            sku_id: e.skuId,
            page_type: n,
            page_section: t?.pageSection,
            page_category: n === I.G2.HOME ? void 0 : t?.pageCategory,
            page_index: n === I.G2.CATALOG ? t?.pageIndex : void 0,
            page_size: n === I.G2.CATALOG ? t?.pageSize : void 0,
            tile_type: r.R[e.type],
            tile_position: String(t?.tilePosition),
            cta_name: i
        })
    },
    b = (e, n, t) => {
        let i = (0, p.Mk)(),
            a = i?.tab,
            r = (0, u.uM)(),
            {
                analyticsLocations: c
            } = (0, o.Ay)(d.A.COLLECTIBLES_SHOP_CARD),
            I = (0, s.bG)([_.A], () => _.A.getCategoryForProduct(e.skuId)),
            m = l.useRef(null);
        return l.useCallback(n => i => {
            if (null == I) return;
            let l = (0, g.A)({
                product: e
            });
            m.current = i.currentTarget, t?.(), (0, A.t)({
                product: e,
                category: I,
                shouldCheckoutWithOrbs: l,
                analyticsLocations: c,
                analyticsSource: n,
                returnRef: m,
                tab: a,
                cardId: r?.cardId,
                sessionId: r?.sessionId,
                tilePosition: r?.tilePosition
            })
        }, [e, a, I, c, t, r?.cardId, r?.sessionId, r?.tilePosition])(n)
    },
    y = e => {
        let {
            flattenProductVariants: n,
            productOverride: t
        } = l.useContext(f);
        return (0, s.bG)([_.A], () => null != t ? t : n ? _.A.getProduct(e) : _.A.getCategoryForProduct(e)?.products.find(n => n.skuId === e))
    }