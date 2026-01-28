/** Chunk was on 5606 **/
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
let p = Object.keys(d.jB),
    _ = e => {
        let t = null == e ? p : p.filter(t => t !== e);
        return t[Math.floor(Math.random() * t.length)]
    };

function m() {
    let e = (0, i.bG)([l.A], () => l.A.useReducedMotion),
        [t, n] = (0, r.useState)(_()),
        {
            banner: p,
            themeColors: m,
            avatarDecorationSkuId: g,
            displayNameStyles: f
        } = (0, r.useMemo)(() => {
            let n = (0, d.Wt)(t);
            return {
                banner: n.getBannerSrc(e),
                themeColors: n.themeColors,
                avatarDecorationSkuId: n.avatarDecorationSkuId,
                displayNameStyles: n.displayNameStyles
            }
        }, [t, e]),
        b = (0, i.bG)([s.A], () => {
            let e = s.A.getProduct(g);
            return (0, a.T)(null == e ? void 0 : e.items[0]) ? e.items[0] : null
        });
    (0, r.useEffect)(() => {
        (0, o.w5)({
            banner: p,
            themeColors: m,
            avatarDecoration: b,
            displayNameStyles: f
        })
    }, [p, m, b, f]);
    let h = (0, r.useCallback)(() => {
        let e = _(t);
        n(e), c.default.track(u.HAw.TRY_IT_OUT_PRESET_SHUFFLED, {
            preset: e
        })
    }, [t]);
    return {
        preset: t,
        onShuffle: h
    }
}