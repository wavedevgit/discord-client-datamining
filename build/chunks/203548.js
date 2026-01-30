/** Chunk was on 1113 **/
/** chunk id: 203548, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(864605),
    s = n(397927),
    a = n(770178),
    o = n(180686);
let c = Math.ceil(Math.sqrt(115200)),
    u = (c - 240) / 2,
    d = l.forwardRef(function(e, t) {
        let {
            children: n
        } = e, [d, h] = l.useState(-1), p = l.useCallback(e => {
            h(e.contentRect.width)
        }, []), g = (0, a.w)(p, [], {
            fireOnMount: !0
        }), [{
            shineSpring: f
        }, m] = (0, s.zhh)(() => ({
            from: {
                shineSpring: 0
            },
            config: {
                clamp: !0,
                mass: 1,
                tension: 170,
                friction: 38
            }
        })), b = l.useCallback((e, t) => {
            m({
                shineSpring: 1,
                delay: t
            })
        }, [m]), A = l.useCallback(() => {
            m({
                shineSpring: 0,
                immediate: !0
            })
        }, [m]), y = l.useMemo(() => {
            let e = (0, r.jsx)(i.animated.div, {
                className: o.q2,
                style: {
                    transform: f.to(e => "translateX(calc(".concat(e * d, "px + ").concat(e * c, "px)) translateY(-50%) rotate(45deg)"))
                }
            });
            return n(o.VU, o.Qq, o.Kk, e)
        }, [n, d, f]);
        return l.useImperativeHandle(t, () => ({
            onMouseEnter: b,
            onMouseLeave: A
        }), [b, A]), (0, r.jsx)("div", {
            className: o.iE,
            onMouseEnter: b,
            onMouseLeave: A,
            onFocus: b,
            onBlur: A,
            ref: g,
            style: {
                "--custom-shine-dimensions": "".concat(240, "px"),
                "--custom-shine-rotated-dimensions-delta": "".concat(u, "px")
            },
            children: y
        })
    })