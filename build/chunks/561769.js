/** chunk id: 561769, original params: e,t,l (module,exports,require) **/
"use strict";
l.d(t, {
    AW: () => _,
    Hi: () => j,
    UU: () => y,
    Vm: () => k,
    gZ: () => v,
    nY: () => f,
    ql: () => A,
    v3: () => g
});
var r, a, n = l(64700),
    i = l(575593),
    s = l(417597),
    o = l(793574),
    d = l(688810),
    c = l(954571),
    u = l(590180),
    h = l(161918),
    m = l(572595),
    x = l(57020),
    p = l(758836),
    b = l(652215);
let g = n.createContext({
    flattenProductVariants: !1,
    productOverride: void 0,
    prioritizedCurrency: void 0
});

function f() {
    return n.useContext(g).flattenProductVariants
}

function v() {
    return n.useContext(g).prioritizedCurrency
}
var _ = ((r = {}).NONE = "none", r.NEW = "new", r.ORBS_EXCLUSIVE = "orbs_exclusive", r.LIMITED_TIME = "limited_time", r.NITRO_EXCLUSIVE = "nitro_exclusive", r),
    j = ((a = {}).FIAT = "fiat", a.ORBS = "orbs", a);
let y = (e, t, l) => r => {
        c.default.track(b.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: l?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: l?.pageSection,
            page_category: t === p.G2.HOME ? void 0 : l?.pageCategory,
            page_index: t === p.G2.CATALOG ? l?.pageIndex : void 0,
            page_size: t === p.G2.CATALOG ? l?.pageSize : void 0,
            tile_type: i.R[e.type],
            tile_position: String(l?.tilePosition),
            cta_name: r
        })
    },
    A = (e, t, l) => {
        let r = (0, h.Mk)(),
            a = r?.tab,
            {
                analyticsLocations: i
            } = (0, d.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
            c = (0, s.bG)([u.A], () => u.A.getCategoryForProduct(e.skuId)),
            p = n.useRef(null);
        return n.useCallback(t => r => {
            if (null == c) return;
            let n = (0, x.A)({
                product: e
            });
            p.current = r.currentTarget, l?.(), (0, m.t)({
                product: e,
                category: c,
                shouldCheckoutWithOrbs: n,
                analyticsLocations: i,
                analyticsSource: t,
                returnRef: p,
                tab: a
            })
        }, [e, a, c, i, l])(t)
    },
    k = e => {
        let {
            flattenProductVariants: t,
            productOverride: l
        } = n.useContext(g);
        return (0, s.bG)([u.A], () => null != l ? l : t ? u.A.getProduct(e) : u.A.getCategoryForProduct(e)?.products.find(t => t.skuId === e))
    }