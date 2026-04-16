/** chunk id: 561769 params = (module,exports,require) **/
n.d(t, {
    AW: () => A,
    Hi: () => b,
    UU: () => E,
    Vm: () => I,
    gZ: () => v,
    ql: () => j,
    v3: () => _
});
var a, l, i = n(64700),
    r = n(575593),
    s = n(417597),
    o = n(793574),
    c = n(688810),
    d = n(954571),
    u = n(440938),
    m = n(590180),
    f = n(161918),
    x = n(572595),
    h = n(57020),
    g = n(758836),
    p = n(652215);
let _ = i.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0
});

function v() {
    return i.useContext(_).prioritizedCurrency
}
var A = ((a = {}).NONE = "none", a.NEW = "new", a.ORBS_EXCLUSIVE = "orbs_exclusive", a.LIMITED_TIME = "limited_time", a.NITRO_EXCLUSIVE = "nitro_exclusive", a),
    b = ((l = {}).FIAT = "fiat", l.ORBS = "orbs", l);
let E = (e, t, n) => a => {
        d.default.track(p.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: n?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: n?.pageSection,
            page_category: t === g.G2.HOME ? void 0 : n?.pageCategory,
            page_index: t === g.G2.CATALOG ? n?.pageIndex : void 0,
            page_size: t === g.G2.CATALOG ? n?.pageSize : void 0,
            tile_type: r.R[e.type],
            tile_position: String(n?.tilePosition),
            cta_name: a
        })
    },
    j = (e, t, n) => {
        let a = (0, f.Mk)(),
            l = a?.tab,
            r = (0, u.uM)(),
            {
                analyticsLocations: d
            } = (0, c.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
            g = (0, s.bG)([m.A], () => m.A.getCategoryForProduct(e.skuId)),
            p = i.useRef(null);
        return i.useCallback(t => a => {
            if (null == g) return;
            let i = (0, h.A)({
                product: e
            });
            p.current = a.currentTarget, n?.(), (0, x.t)({
                product: e,
                category: g,
                shouldCheckoutWithOrbs: i,
                analyticsLocations: d,
                analyticsSource: t,
                returnRef: p,
                tab: l,
                cardId: r?.cardId,
                sessionId: r?.sessionId,
                tilePosition: r?.tilePosition
            })
        }, [e, l, g, d, n, r?.cardId, r?.sessionId, r?.tilePosition])(t)
    },
    I = e => {
        let {
            flattenProductVariants: t,
            productOverride: n
        } = i.useContext(_);
        return (0, s.bG)([m.A], () => null != n ? n : t ? m.A.getProduct(e) : m.A.getCategoryForProduct(e)?.products.find(t => t.skuId === e))
    }