/** Chunk was on 21738 **/
/** chunk id: 542678, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968),
    i = n(64700),
    l = n(970984),
    a = n(311907),
    s = n(397927),
    o = n(775602),
    c = n(330640);
let u = {
        mass: 1,
        tension: 600,
        friction: 60,
        clamp: !0
    },
    d = function(e) {
        let {
            animate: t,
            state: n,
            cleanUp: d,
            children: p
        } = e, h = (0, a.bG)([o.A], () => o.A.useReducedMotion), g = i.useMemo(() => !1 === t || h ? {
            opacity: 1
        } : n === s.wLy.ENTERED || n === s.wLy.MOUNTED ? {
            from: {
                opacity: 0
            },
            to: {
                opacity: 1
            },
            config: u
        } : {
            from: {
                opacity: 1
            },
            to: {
                opacity: 0
            },
            config: u,
            onRest: () => {
                d()
            }
        }, [t, d, h, n]), f = (0, s.zhh)(g);
        return (0, r.jsx)(l.animated.div, {
            style: f,
            className: c.Hp,
            children: p
        })
    }