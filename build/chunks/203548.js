/** chunk id: 203548 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(64700),
    l = n(382222),
    a = n(397927),
    r = n(770178),
    o = n(637707);
let c = Math.ceil(Math.sqrt(115200)),
    d = (c - 240) / 2,
    u = s.forwardRef(function(e, t) {
        let {
            children: n
        } = e, [u, h] = s.useState(-1), A = s.useCallback(e => {
            h(e.contentRect.width)
        }, []), m = (0, r.w)(A, [], {
            fireOnMount: !0
        }), [{
            shineSpring: _
        }, g] = (0, a.zhh)(() => ({
            from: {
                shineSpring: 0
            },
            config: {
                clamp: !0,
                mass: 1,
                tension: 170,
                friction: 38
            }
        })), p = s.useCallback((e, t) => {
            g({
                shineSpring: 1,
                delay: t
            })
        }, [g]), f = s.useCallback(() => {
            g({
                shineSpring: 0,
                immediate: !0
            })
        }, [g]), x = s.useMemo(() => {
            let e = (0, i.jsx)(l.animated.div, {
                className: o.q2,
                style: {
                    transform: _.to(e => `translateX(calc(${e*u}px + ${e*c}px)) translateY(-50%) rotate(45deg)`)
                }
            });
            return n(o.VU, o.Qq, o.Kk, e)
        }, [n, u, _]);
        return s.useImperativeHandle(t, () => ({
            onMouseEnter: p,
            onMouseLeave: f
        }), [p, f]), (0, i.jsx)("div", {
            className: o.iE,
            onMouseEnter: p,
            onMouseLeave: f,
            onFocus: p,
            onBlur: f,
            ref: m,
            style: {
                "--custom-shine-dimensions": "240px",
                "--custom-shine-rotated-dimensions-delta": `${d}px`
            },
            children: x
        })
    })