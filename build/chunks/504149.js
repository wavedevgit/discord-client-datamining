/** chunk id: 504149 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    r = n(64700),
    a = n(969528),
    l = n(765671),
    o = n(700331),
    s = n(454290);

function d(e) {
    let {
        width: t,
        height: n,
        offset: i,
        delta: r
    } = e, a = t > window.innerWidth, l = n > window.innerHeight, o = (window.innerWidth - t) / 2 + i.x, s = (window.innerHeight - n) / 2 + i.y, d = (window.innerWidth + t) / 2 + i.x, u = (window.innerHeight + n) / 2 + i.y, {
        x: h,
        y: c
    } = i;
    return a && (h += r.x, o + r.x > 0 && (h = (t - window.innerWidth) / 2), d + r.x < window.innerWidth && (h = (window.innerWidth - t) / 2)), l && (c += r.y, s + r.y > 0 && (c = (n - window.innerHeight) / 2), u + r.y < window.innerHeight && (c = (window.innerHeight - n) / 2)), {
        x: h,
        y: c
    }
}
let u = r.memo(function(e) {
    let {
        children: t
    } = e, {
        scale: n,
        x: u,
        y: h,
        setOffset: c,
        zoomed: m,
        setZoomed: p
    } = (0, s.Q)(), {
        ref: g,
        width: f,
        height: A
    } = (0, l.Ay)(), [x, y] = [f ?? 0, A ?? 0], w = r.useRef(!1), [C, E] = r.useState({
        x: 0,
        y: 0
    }), I = (e, t) => {
        let i = d({
            width: x * n.goal,
            height: y * n.goal,
            offset: {
                x: u.goal,
                y: h.goal
            },
            delta: {
                x: e,
                y: t
            }
        });
        c(i.x, i.y, {
            immediate: !0
        })
    };
    return (0, i.jsx)(a.animated.div, {
        ref: g,
        onMouseDown: e => {
            m && 0 === e.button && (e.preventDefault(), w.current = !0, E({
                x: e.clientX,
                y: e.clientY
            }))
        },
        onMouseUp: e => {
            if (!m) {
                if (0 === e.button) {
                    o.l.markActionPerformed(o.N.ZOOM_IN_IMAGE_PRESSED), p(!0);
                    let t = e.clientX - window.innerWidth / 2,
                        i = e.clientY - window.innerHeight / 2,
                        r = d({
                            width: x * n.goal,
                            height: y * n.goal,
                            offset: {
                                x: 0,
                                y: 0
                            },
                            delta: {
                                x: -t * (n.goal - 1),
                                y: -i * (n.goal - 1)
                            }
                        });
                    c(r.x, r.y)
                }
                return
            }(e.clientX - C.x) ** 2 + (e.clientY - C.y) ** 2 < 400 && (o.l.markActionPerformed(o.N.ZOOM_OUT_IMAGE_PRESSED), p(!1)), w.current = !1
        },
        onMouseMove: e => w.current && I(e.movementX, e.movementY),
        onWheel: e => !e.ctrlKey && I(-e.deltaX, -e.deltaY),
        onMouseLeave: () => w.current = !1,
        onClick: e => e.stopPropagation(),
        style: {
            scale: n,
            x: u,
            y: h,
            cursor: m ? "zoom-out" : "zoom-in"
        },
        children: t
    })
})