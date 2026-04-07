/** chunk id: 203548 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    l = n(64700),
    s = n(687498),
    a = n(397927),
    r = n(770178),
    o = n(637707);
let d = Math.ceil(Math.sqrt(115200)),
    c = (d - 240) / 2,
    u = l.forwardRef(function(e, t) {
        let {
            children: n
        } = e, [u, h] = l.useState(-1), A = l.useCallback(e => {
            h(e.contentRect.width)
        }, []), _ = (0, r.w)(A, [], {
            fireOnMount: !0
        }), [{
            shineSpring: m
        }, p] = (0, a.zhh)(() => ({
            from: {
                shineSpring: 0
            },
            config: {
                clamp: !0,
                mass: 1,
                tension: 170,
                friction: 38
            }
        })), g = l.useCallback((e, t) => {
            p({
                shineSpring: 1,
                delay: t
            })
        }, [p]), f = l.useCallback(() => {
            p({
                shineSpring: 0,
                immediate: !0
            })
        }, [p]), x = l.useMemo(() => {
            let e = (0, i.jsx)(s.animated.div, {
                className: o.q2,
                style: {
                    transform: m.to(e => `translateX(calc(${e*u}px + ${e*d}px)) translateY(-50%) rotate(45deg)`)
                }
            });
            return n(o.VU, o.Qq, o.Kk, e)
        }, [n, u, m]);
        return l.useImperativeHandle(t, () => ({
            onMouseEnter: g,
            onMouseLeave: f
        }), [g, f]), (0, i.jsx)("div", {
            className: o.iE,
            onMouseEnter: g,
            onMouseLeave: f,
            onFocus: g,
            onBlur: f,
            ref: _,
            style: {
                "--custom-shine-dimensions": "240px",
                "--custom-shine-rotated-dimensions-delta": `${c}px`
            },
            children: x
        })
    })