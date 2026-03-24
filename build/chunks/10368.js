/** chunk id: 10368 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(64700),
    s = n(311907),
    l = n(775602),
    a = n(590180),
    r = n(898461),
    o = n(207803),
    d = n(954571),
    c = n(461797),
    u = n(652215);
let m = Object.keys(c.jB),
    _ = e => {
        let t = null == e ? m : m.filter(t => t !== e);
        return t[Math.floor(Math.random() * t.length)]
    };

function g() {
    let e = (0, s.bG)([l.A], () => l.A.useReducedMotion),
        [t, n] = (0, i.useState)(_()),
        {
            banner: m,
            themeColors: g,
            avatarDecorationSkuId: x,
            displayNameStyles: A
        } = (0, i.useMemo)(() => {
            let n = (0, c.Wt)(t);
            return {
                banner: n.getBannerSrc(e),
                themeColors: n.themeColors,
                avatarDecorationSkuId: n.avatarDecorationSkuId,
                displayNameStyles: n.displayNameStyles
            }
        }, [t, e]),
        h = (0, s.bG)([a.A], () => {
            let e = a.A.getProduct(x);
            return (0, r.T)(e?.items[0]) ? e.items[0] : null
        });
    (0, i.useEffect)(() => {
        (0, o.w5)({
            banner: m,
            themeColors: g,
            avatarDecoration: h,
            displayNameStyles: A
        })
    }, [m, g, h, A]);
    let p = (0, i.useCallback)(() => {
        let e = _(t);
        n(e), d.default.track(u.HAw.TRY_IT_OUT_PRESET_SHUFFLED, {
            preset: e
        })
    }, [t]);
    return {
        preset: t,
        onShuffle: p
    }
}