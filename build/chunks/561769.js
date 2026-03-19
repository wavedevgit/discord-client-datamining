/** chunk id: 561769 params = (module,exports,require) **/
"use strict";
n.d(t, {
    AW: () => C,
    Hi: () => E,
    UU: () => I,
    Vm: () => b,
    gZ: () => x,
    nY: () => f,
    ql: () => N,
    v3: () => _
});
var i, s, l = n(64700),
    a = n(575593),
    r = n(417597),
    o = n(793574),
    c = n(688810),
    d = n(954571),
    u = n(590180),
    h = n(161918),
    A = n(572595),
    m = n(57020),
    g = n(758836),
    p = n(652215);
let _ = l.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0
});

function f() {
    return l.useContext(_).flattenProductVariants
}

function x() {
    return l.useContext(_).prioritizedCurrency
}
var C = ((i = {}).NONE = "none", i.NEW = "new", i.ORBS_EXCLUSIVE = "orbs_exclusive", i.LIMITED_TIME = "limited_time", i.NITRO_EXCLUSIVE = "nitro_exclusive", i),
    E = ((s = {}).FIAT = "fiat", s.ORBS = "orbs", s);
let I = (e, t, n) => i => {
        d.default.track(p.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: n?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: n?.pageSection,
            page_category: t === g.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === g.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === g.G2.CATALOG ? n?.pageSize : void 0,
            tile_type: a.R[e.type],
            tile_position: String(n?.tilePosition),
            cta_name: i
        })
    },
    N = (e, t, n) => {
        let i = (0, h.Mk)(),
            s = i?.tab,
            {
                analyticsLocations: a
            } = (0, c.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
            d = (0, r.bG)([u.A], () => u.A.getCategoryForProduct(e.skuId)),
            g = l.useRef(null);
        return l.useCallback(t => i => {
            if (null == d) return;
            let l = (0, m.A)({
                product: e
            });
            g.current = i.currentTarget, n?.(), (0, A.t)({
                product: e,
                category: d,
                shouldCheckoutWithOrbs: l,
                analyticsLocations: a,
                analyticsSource: t,
                returnRef: g,
                tab: s
            })
        }, [e, s, d, a, n])(t)
    },
    b = e => {
        let {
            flattenProductVariants: t,
            productOverride: n
        } = l.useContext(_);
        return (0, r.bG)([u.A], () => null != n ? n : t ? u.A.getProduct(e) : u.A.getCategoryForProduct(e)?.products.find(t => t.skuId === e))
    }