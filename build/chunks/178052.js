/** chunk id: 178052 params = (module,exports,require) **/
l.d(t, {
    A: () => x
});
var n = l(627968),
    i = l(64700),
    s = l(33851),
    a = l.n(s),
    C = l(517738),
    r = l(615300),
    o = l(827734),
    d = l(397927),
    c = l(475743);
let u = {
        duration: 100,
        easing: r.A.Easing.inOut(r.A.Easing.back()),
        clamp: !0
    },
    m = {
        duration: 2e3,
        easing: r.A.Easing.quad,
        clamp: !0
    };

function x(e) {
    let {
        value: t,
        children: l,
        equalityFn: s = a(),
        style: r,
        ...x
    } = e, h = (0, c.A)(t), [{
        spring: g
    }, H] = (0, d.zhh)(() => ({
        spring: 0
    }), "animate-always"), p = (0, d.rdh)(o.A.colors.BACKGROUND_BASE_LOW).hex(), j = (0, d.rdh)(o.A.colors.CONTROL_BRAND_FOREGROUND).hex(), _ = i.useCallback(() => {
        H({
            spring: 1,
            config: u
        }), H({
            spring: 0,
            config: m,
            delay: 300
        })
    }, [H]);
    i.useEffect(() => {
        null == t || null == h || s(t, h) || _()
    }, [_, t, h, s]);
    let f = g?.to({
            range: [0, 1],
            output: [`${p}00`, `${j}27`]
        }),
        b = null != r ? {
            ...r,
            backgroundColor: f
        } : {
            backgroundColor: f
        };
    return (0, n.jsx)(C.animated.tr, {
        ...x,
        style: b,
        children: l
    })
}