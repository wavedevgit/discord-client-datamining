/** chunk id: 561769 params = (module,exports,require) **/
a.d(t, {
    AW: () => v,
    Hi: () => y,
    UU: () => k,
    Vm: () => _,
    gZ: () => j,
    ql: () => A,
    v3: () => f
});
var l, r, n = a(64700),
    s = a(575593),
    i = a(417597),
    o = a(793574),
    d = a(688810),
    c = a(954571),
    u = a(440938),
    x = a(590180),
    h = a(161918),
    m = a(572595),
    b = a(57020),
    p = a(758836),
    g = a(652215);
let f = n.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0
});

function j() {
    return n.useContext(f).prioritizedCurrency
}
var v = ((l = {}).NONE = "none", l.NEW = "new", l.ORBS_EXCLUSIVE = "orbs_exclusive", l.LIMITED_TIME = "limited_time", l.NITRO_EXCLUSIVE = "nitro_exclusive", l),
    y = ((r = {}).FIAT = "fiat", r.ORBS = "orbs", r);
let k = (e, t, a) => l => {
        c.default.track(g.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: a?.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: a?.pageSection,
            page_category: t === p.G2.HOME ? void 0 : a?.pageCategory,
            page_index: t === p.G2.CATALOG ? a?.pageIndex : void 0,
            page_size: t === p.G2.CATALOG ? a?.pageSize : void 0,
            tile_type: s.R[e.type],
            tile_position: String(a?.tilePosition),
            cta_name: l
        })
    },
    A = (e, t, a) => {
        let l = (0, h.Mk)(),
            r = l?.tab,
            s = (0, u.uM)(),
            {
                analyticsLocations: c
            } = (0, d.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
            p = (0, i.bG)([x.A], () => x.A.getCategoryForProduct(e.skuId)),
            g = n.useRef(null);
        return n.useCallback(t => l => {
            if (null == p) return;
            let n = (0, b.A)({
                product: e
            });
            g.current = l.currentTarget, a?.(), (0, m.t)({
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
        }, [e, r, p, c, a, s?.cardId, s?.sessionId, s?.tilePosition])(t)
    },
    _ = e => {
        let {
            flattenProductVariants: t,
            productOverride: a
        } = n.useContext(f);
        return (0, i.bG)([x.A], () => null != a ? a : t ? x.A.getProduct(e) : x.A.getCategoryForProduct(e)?.products.find(t => t.skuId === e))
    }