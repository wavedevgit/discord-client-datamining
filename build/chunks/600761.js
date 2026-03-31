/** chunk id: 600761 params = (module,exports,require) **/
n.d(t, {
    i: () => s
});
var i = n(64700),
    l = n(688807),
    a = n(397927);

function s(e) {
    let {
        containerRef: t,
        itemType: n = "WIDGET",
        edgeDistance: s = 130,
        maxSpeed: r = 1700,
        power: o = 2.2
    } = e, d = (0, i.useRef)(null), c = (0, i.useRef)(0), u = (0, i.useRef)({
        top: 0,
        bottom: 0
    }), g = (0, i.useRef)(null), m = (0, i.useCallback)(e => ({
        isDragging: e.isDragging(),
        clientOffset: e.getClientOffset(),
        item: e.getItem()
    }), []), {
        isDragging: p,
        clientOffset: x,
        item: f
    } = (0, l.V)(m);
    (0, i.useEffect)(() => {
        g.current = x
    }, [x]);
    let h = (0, a.VUy)();
    (0, i.useEffect)(() => {
        let e = t.current;
        if (null == e) return;
        if (!(!0 === p && f?.itemType === n && !h)) {
            null !== d.current && cancelAnimationFrame(d.current), d.current = null, e.style.overflowAnchor = "auto", e.style.overscrollBehavior = "auto", c.current = 0;
            return
        }
        let i = e.getBoundingClientRect();
        return u.current = {
            top: i.top,
            bottom: i.bottom
        }, e.style.overflowAnchor = "none", e.style.overscrollBehavior = "contain", d.current = requestAnimationFrame(function t(n) {
            d.current = requestAnimationFrame(t);
            let i = g.current;
            if (null == e || null == i) {
                c.current = n;
                return
            }
            let l = Math.min(32, 0 !== c.current ? n - c.current : 16) / 1e3;
            c.current = n;
            let {
                top: a,
                bottom: m
            } = u.current, p = i.y, x = p - a, f = m - p, h = 0;
            if (x >= 0 && x < s ? h = -r * Math.pow(1 - x / s, o) : f >= 0 && f < s && (h = r * Math.pow(1 - f / s, o)), 0 !== h) {
                let t = h * l;
                Math.abs(t) >= 1 && (e.scrollTop += Math.round(t))
            }
        }), () => {
            null !== d.current && cancelAnimationFrame(d.current), d.current = null, c.current = 0, null != e && (e.style.overflowAnchor = "auto", e.style.overscrollBehavior = "auto")
        }
    }, [t, p, f?.itemType, n, s, r, o, h])
}