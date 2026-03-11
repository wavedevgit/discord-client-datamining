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
    } = e, c = (0, i.useRef)(null), d = (0, i.useRef)(0), u = (0, i.useRef)({
        top: 0,
        bottom: 0
    }), m = (0, i.useRef)(null), g = (0, i.useCallback)(e => ({
        isDragging: e.isDragging(),
        clientOffset: e.getClientOffset(),
        item: e.getItem()
    }), []), {
        isDragging: x,
        clientOffset: f,
        item: p
    } = (0, l.V)(g);
    (0, i.useEffect)(() => {
        m.current = f
    }, [f]);
    let h = (0, a.VUy)();
    (0, i.useEffect)(() => {
        let e = t.current;
        if (null == e) return;
        if (!(!0 === x && p?.itemType === n && !h)) {
            null !== c.current && cancelAnimationFrame(c.current), c.current = null, e.style.overflowAnchor = "auto", e.style.overscrollBehavior = "auto", d.current = 0;
            return
        }
        let i = e.getBoundingClientRect();
        return u.current = {
            top: i.top,
            bottom: i.bottom
        }, e.style.overflowAnchor = "none", e.style.overscrollBehavior = "contain", c.current = requestAnimationFrame(function t(n) {
            c.current = requestAnimationFrame(t);
            let i = m.current;
            if (null == e || null == i) {
                d.current = n;
                return
            }
            let l = Math.min(32, 0 !== d.current ? n - d.current : 16) / 1e3;
            d.current = n;
            let {
                top: a,
                bottom: g
            } = u.current, x = i.y, f = x - a, p = g - x, h = 0;
            if (f >= 0 && f < s ? h = -r * Math.pow(1 - f / s, o) : p >= 0 && p < s && (h = r * Math.pow(1 - p / s, o)), 0 !== h) {
                let t = h * l;
                Math.abs(t) >= 1 && (e.scrollTop += Math.round(t))
            }
        }), () => {
            null !== c.current && cancelAnimationFrame(c.current), c.current = null, d.current = 0, null != e && (e.style.overflowAnchor = "auto", e.style.overscrollBehavior = "auto")
        }
    }, [t, x, p?.itemType, n, s, r, o, h])
}