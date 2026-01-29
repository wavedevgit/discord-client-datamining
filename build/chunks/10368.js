/** Chunk was on 2827 **/
/** chunk id: 10368, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(896048);
var r = n(64700),
    i = n(311907),
    l = n(775602),
    s = n(590180),
    a = n(898461),
    o = n(207803),
    c = n(954571),
    d = n(461797),
    u = n(652215);
let _ = Object.keys(d.jB),
    p = e => {
        let t = null == e ? _ : _.filter(t => t !== e);
        return t[Math.floor(Math.random() * t.length)]
    };

function m() {
    let e = (0, i.bG)([l.A], () => l.A.useReducedMotion),
        [t, n] = (0, r.useState)(p()),
        {
            banner: _,
            themeColors: m,
            avatarDecorationSkuId: g,
            displayNameStyles: A
        } = (0, r.useMemo)(() => {
            let n = (0, d.Wt)(t);
            return {
                banner: n.getBannerSrc(e),
                themeColors: n.themeColors,
                avatarDecorationSkuId: n.avatarDecorationSkuId,
                displayNameStyles: n.displayNameStyles
            }
        }, [t, e]),
        f = (0, i.bG)([s.A], () => {
            let e = s.A.getProduct(g);
            return (0, a.T)(null == e ? void 0 : e.items[0]) ? e.items[0] : null
        });
    (0, r.useEffect)(() => {
        (0, o.w5)({
            banner: _,
            themeColors: m,
            avatarDecoration: f,
            displayNameStyles: A
        })
    }, [_, m, f, A]);
    let b = (0, r.useCallback)(() => {
        let e = p(t);
        n(e), c.default.track(u.HAw.TRY_IT_OUT_PRESET_SHUFFLED, {
            preset: e
        })
    }, [t]);
    return {
        preset: t,
        onShuffle: b
    }
}