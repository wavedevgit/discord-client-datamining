/** chunk id: 561769 params = (module,exports,require) **/
l.d(t, {
    AW: () => v,
    Hi: () => y,
    UU: () => k,
    Vm: () => A,
    gZ: () => j,
    ql: () => _,
    v3: () => f
});
var a, r, n = l(64700),
    s = l(575593),
    o = l(417597),
    i = l(793574),
    d = l(688810),
    c = l(954571),
    u = l(440938),
    x = l(590180),
    h = l(161918),
    m = l(572595),
    b = l(57020),
    p = l(758836),
    g = l(652215);
let f = n.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0
});

function j() {
    return n.useContext(f).prioritizedCurrency
}
var v = ((a = {}).NONE = "none", a.NEW = "new", a.ORBS_EXCLUSIVE = "orbs_exclusive", a.LIMITED_TIME = "limited_time", a.NITRO_EXCLUSIVE = "nitro_exclusive", a),
    y = ((r = {}).FIAT = "fiat", r.ORBS = "orbs", r);
let k = (e, t, l) => a => {
        c.default.track(g.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: l?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: l?.pageSection,
            page_category: t === p.G2.HOME ? void 0 : l?.pageCategory,
            page_index: t === p.G2.CATALOG ? l?.pageIndex : void 0,
            page_size: t === p.G2.CATALOG ? l?.pageSize : void 0,
            tile_type: s.R[e.type],
            tile_position: String(l?.tilePosition),
            cta_name: a
        })
    },
    _ = (e, t, l) => {
        let a = (0, h.Mk)(),
            r = a?.tab,
            s = (0, u.uM)(),
            {
                analyticsLocations: c
            } = (0, d.Ay)(i.A.COLLECTIBLES_SHOP_CARD),
            p = (0, o.bG)([x.A], () => x.A.getCategoryForProduct(e.skuId)),
            g = n.useRef(null);
        return n.useCallback(t => a => {
            if (null == p) return;
            let n = (0, b.A)({
                product: e
            });
            g.current = a.currentTarget, l?.(), (0, m.t)({
                product: e,
                category: p,
                shouldCheckoutWithOrbs: n,
                analyticsLocations: c,
                analyticsSource: t,
                returnRef: g,
                tab: r,
                cardId: s?.cardId,
                sessionId: s?.sessionId,
                tilePosition: s?.tilePosition
            })
        }, [e, r, p, c, l, s?.cardId, s?.sessionId, s?.tilePosition])(t)
    },
    A = e => {
        let {
            flattenProductVariants: t,
            productOverride: l
        } = n.useContext(f);
        return (0, o.bG)([x.A], () => null != l ? l : t ? x.A.getProduct(e) : x.A.getCategoryForProduct(e)?.products.find(t => t.skuId === e))
    }