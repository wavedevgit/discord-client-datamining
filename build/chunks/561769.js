/** chunk id: 561769 params = (module,exports,require) **/
i.d(n, {
    AW: () => b,
    Hi: () => h,
    UU: () => v,
    Vm: () => C,
    gZ: () => f,
    ql: () => j,
    v3: () => I
});
var t, a, l = i(64700),
    s = i(575593),
    r = i(417597),
    d = i(793574),
    o = i(688810),
    c = i(954571),
    u = i(440938),
    _ = i(590180),
    A = i(161918),
    p = i(572595),
    x = i(57020),
    g = i(758836),
    m = i(652215);
let I = l.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0
});

function f() {
    return l.useContext(I).prioritizedCurrency
}
var b = ((t = {}).NONE = "none", t.NEW = "new", t.ORBS_EXCLUSIVE = "orbs_exclusive", t.LIMITED_TIME = "limited_time", t.NITRO_EXCLUSIVE = "nitro_exclusive", t),
    h = ((a = {}).FIAT = "fiat", a.ORBS = "orbs", a);
let v = (e, n, i) => t => {
        c.default.track(m.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: i?.sessionId,
            sku_id: e.skuId,
            page_type: n,
            page_section: i?.pageSection,
            page_category: n === g.G2.HOME ? void 0 : i?.pageCategory,
            page_index: n === g.G2.CATALOG ? i?.pageIndex : void 0,
            page_size: n === g.G2.CATALOG ? i?.pageSize : void 0,
            tile_type: s.R[e.type],
            tile_position: String(i?.tilePosition),
            cta_name: t
        })
    },
    j = (e, n, i) => {
        let t = (0, A.Mk)(),
            a = t?.tab,
            s = (0, u.uM)(),
            {
                analyticsLocations: c
            } = (0, o.Ay)(d.A.COLLECTIBLES_SHOP_CARD),
            g = (0, r.bG)([_.A], () => _.A.getCategoryForProduct(e.skuId)),
            m = l.useRef(null);
        return l.useCallback(n => t => {
            if (null == g) return;
            let l = (0, x.A)({
                product: e
            });
            m.current = t.currentTarget, i?.(), (0, p.t)({
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
        }, [e, a, g, c, i, s?.cardId, s?.sessionId, s?.tilePosition])(n)
    },
    C = e => {
        let {
            flattenProductVariants: n,
            productOverride: i
        } = l.useContext(I);
        return (0, r.bG)([_.A], () => null != i ? i : n ? _.A.getProduct(e) : _.A.getCategoryForProduct(e)?.products.find(n => n.skuId === e))
    }