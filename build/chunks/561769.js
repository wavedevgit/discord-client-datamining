/** chunk id: 561769 params = (module,exports,require) **/
"use strict";
n.d(t, {
    AW: () => C,
    Hi: () => I,
    UU: () => N,
    Vm: () => S,
    gZ: () => E,
    nY: () => x,
    ql: () => b,
    v3: () => f
});
var i, s, l = n(64700),
    a = n(575593),
    r = n(417597),
    o = n(793574),
    c = n(688810),
    d = n(954571),
    u = n(440938),
    h = n(590180),
    A = n(161918),
    m = n(572595),
    _ = n(57020),
    p = n(758836),
    g = n(652215);
let f = l.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0
});

function x() {
    return l.useContext(f).flattenProductVariants
}

function E() {
    return l.useContext(f).prioritizedCurrency
}
var C = ((i = {}).NONE = "none", i.NEW = "new", i.ORBS_EXCLUSIVE = "orbs_exclusive", i.LIMITED_TIME = "limited_time", i.NITRO_EXCLUSIVE = "nitro_exclusive", i),
    I = ((s = {}).FIAT = "fiat", s.ORBS = "orbs", s);
let N = (e, t, n) => i => {
        d.default.track(g.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: n?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: n?.pageSection,
            page_category: t === p.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === p.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === p.G2.CATALOG ? n?.pageSize : void 0,
            tile_type: a.R[e.type],
            tile_position: String(n?.tilePosition),
            cta_name: i
        })
    },
    b = (e, t, n) => {
        let i = (0, A.Mk)(),
            s = i?.tab,
            a = (0, u.uM)(),
            {
                analyticsLocations: d
            } = (0, c.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
            p = (0, r.bG)([h.A], () => h.A.getCategoryForProduct(e.skuId)),
            g = l.useRef(null);
        return l.useCallback(t => i => {
            if (null == p) return;
            let l = (0, _.A)({
                product: e
            });
            g.current = i.currentTarget, n?.(), (0, m.t)({
                product: e,
                category: p,
                shouldCheckoutWithOrbs: l,
                analyticsLocations: d,
                analyticsSource: t,
                returnRef: g,
                tab: s,
                cardId: a?.cardId,
                sessionId: a?.sessionId,
                tilePosition: a?.tilePosition
            })
        }, [e, s, p, d, n, a?.cardId, a?.sessionId, a?.tilePosition])(t)
    },
    S = e => {
        let {
            flattenProductVariants: t,
            productOverride: n
        } = l.useContext(f);
        return (0, r.bG)([h.A], () => null != n ? n : t ? h.A.getProduct(e) : h.A.getCategoryForProduct(e)?.products.find(t => t.skuId === e))
    }