/** chunk id: 561769 params = (module,exports,require) **/
"use strict";
i.d(e, {
    AW: () => T,
    Hi: () => h,
    UU: () => E,
    Vm: () => O,
    gZ: () => S,
    nY: () => p,
    ql: () => C,
    v3: () => _
});
var n, s, r = i(64700),
    l = i(575593),
    a = i(417597),
    o = i(793574),
    u = i(688810),
    c = i(954571),
    d = i(590180),
    g = i(161918),
    I = i(572595),
    m = i(57020),
    A = i(758836),
    f = i(652215);
let _ = r.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0
});

function p() {
    return r.useContext(_).flattenProductVariants
}

function S() {
    return r.useContext(_).prioritizedCurrency
}
var T = ((n = {}).NONE = "none", n.NEW = "new", n.ORBS_EXCLUSIVE = "orbs_exclusive", n.LIMITED_TIME = "limited_time", n.NITRO_EXCLUSIVE = "nitro_exclusive", n),
    h = ((s = {}).FIAT = "fiat", s.ORBS = "orbs", s);
let E = (t, e, i) => n => {
        c.default.track(f.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: i?.sessionId,
            sku_id: t.skuId,
            page_type: e,
            page_section: i?.pageSection,
            page_category: e === A.G2.HOME ? void 0 : i?.pageCategory,
            page_index: e === A.G2.CATALOG ? i?.pageIndex : void 0,
            page_size: e === A.G2.CATALOG ? i?.pageSize : void 0,
            tile_type: l.R[t.type],
            tile_position: String(i?.tilePosition),
            cta_name: n
        })
    },
    C = (t, e, i) => {
        let n = (0, g.Mk)(),
            s = n?.tab,
            {
                analyticsLocations: l
            } = (0, u.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
            c = (0, a.bG)([d.A], () => d.A.getCategoryForProduct(t.skuId)),
            A = r.useRef(null);
        return r.useCallback(e => n => {
            if (null == c) return;
            let r = (0, m.A)({
                product: t
            });
            A.current = n.currentTarget, i?.(), (0, I.t)({
                product: t,
                category: c,
                shouldCheckoutWithOrbs: r,
                analyticsLocations: l,
                analyticsSource: e,
                returnRef: A,
                tab: s
            })
        }, [t, s, c, l, i])(e)
    },
    O = t => {
        let {
            flattenProductVariants: e,
            productOverride: i
        } = r.useContext(_);
        return (0, a.bG)([d.A], () => null != i ? i : e ? d.A.getProduct(t) : d.A.getCategoryForProduct(t)?.products.find(e => e.skuId === t))
    }