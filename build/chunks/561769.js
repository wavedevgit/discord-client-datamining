/** chunk id: 561769 params = (module,exports,require) **/
t.d(n, {
    AW: () => b,
    Hi: () => j,
    UU: () => C,
    Vm: () => N,
    gZ: () => h,
    nY: () => g,
    ql: () => E,
    v3: () => f
});
var i, s, l = t(64700),
    r = t(575593),
    a = t(417597),
    o = t(793574),
    d = t(688810),
    c = t(954571),
    u = t(440938),
    A = t(590180),
    _ = t(161918),
    x = t(572595),
    p = t(57020),
    m = t(758836),
    I = t(652215);
let f = l.createContext({
    flattenProductVariants: void 0,
    productOverride: void 0,
    prioritizedCurrency: void 0
});

function g() {
    return l.useContext(f).flattenProductVariants
}

function h() {
    return l.useContext(f).prioritizedCurrency
}
var b = ((i = {}).NONE = "none", i.NEW = "new", i.ORBS_EXCLUSIVE = "orbs_exclusive", i.LIMITED_TIME = "limited_time", i.NITRO_EXCLUSIVE = "nitro_exclusive", i),
    j = ((s = {}).FIAT = "fiat", s.ORBS = "orbs", s);
let C = (e, n, t) => i => {
        c.default.track(I.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: t?.sessionId,
            sku_id: e.skuId,
            page_type: n,
            page_section: t?.pageSection,
            page_category: n === m.G2.HOME ? void 0 : t?.pageCategory,
            page_index: n === m.G2.CATALOG ? t?.pageIndex : void 0,
            page_size: n === m.G2.CATALOG ? t?.pageSize : void 0,
            tile_type: r.R[e.type],
            tile_position: String(t?.tilePosition),
            cta_name: i
        })
    },
    E = (e, n, t) => {
        let i = (0, _.Mk)(),
            s = i?.tab,
            r = (0, u.uM)(),
            {
                analyticsLocations: c
            } = (0, d.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
            m = (0, a.bG)([A.A], () => A.A.getCategoryForProduct(e.skuId)),
            I = l.useRef(null);
        return l.useCallback(n => i => {
            if (null == m) return;
            let l = (0, p.A)({
                product: e
            });
            I.current = i.currentTarget, t?.(), (0, x.t)({
                product: e,
                category: m,
                shouldCheckoutWithOrbs: l,
                analyticsLocations: c,
                analyticsSource: n,
                returnRef: I,
                tab: s,
                cardId: r?.cardId,
                sessionId: r?.sessionId,
                tilePosition: r?.tilePosition
            })
        }, [e, s, m, c, t, r?.cardId, r?.sessionId, r?.tilePosition])(n)
    },
    N = e => {
        let {
            flattenProductVariants: n,
            productOverride: t
        } = l.useContext(f);
        return (0, a.bG)([A.A], () => null != t ? t : n ? A.A.getProduct(e) : A.A.getCategoryForProduct(e)?.products.find(n => n.skuId === e))
    }