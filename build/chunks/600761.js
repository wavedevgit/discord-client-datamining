/** chunk id: 600761 params = (module,exports,require) **/
n.d(t, {
    i: () => s
});
var i = n(64700),
    a = n(688807),
    l = n(397927);

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
    }), g = (0, i.useRef)(null), _ = (0, i.useCallback)(e => ({
        isDragging: e.isDragging(),
        clientOffset: e.getClientOffset(),
        item: e.getItem()
    }), []), {
        isDragging: m,
        clientOffset: f,
        item: x
    } = (0, a.V)(_);
    (0, i.useEffect)(() => {
        g.current = f
    }, [f]);
    let p = (0, l.VUy)();
    (0, i.useEffect)(() => {
        let e = t.current;
        if (null == e) return;
        if (!(!0 === m && x?.itemType === n && !p)) {
            null !== c.current && cancelAnimationFrame(c.current), c.current = null, e.style.overflowAnchor = "auto", e.style.overscrollBehavior = "auto", d.current = 0;
            return
        }
        let i = e.getBoundingClientRect();
        return u.current = {
            top: i.top,
            bottom: i.bottom
        }, e.style.overflowAnchor = "none", e.style.overscrollBehavior = "contain", c.current = requestAnimationFrame(function t(n) {
            c.current = requestAnimationFrame(t);
            let i = g.current;
            if (null == e || null == i) {
                d.current = n;
                return
            }
            let a = Math.min(32, 0 !== d.current ? n - d.current : 16) / 1e3;
            d.current = n;
            let {
                top: l,
                bottom: _
            } = u.current, m = i.y, f = m - l, x = _ - m, p = 0;
            if (f >= 0 && f < s ? p = -r * Math.pow(1 - f / s, o) : x >= 0 && x < s && (p = r * Math.pow(1 - x / s, o)), 0 !== p) {
                let t = p * a;
                Math.abs(t) >= 1 && (e.scrollTop += Math.round(t))
            }
        }), () => {
            null !== c.current && cancelAnimationFrame(c.current), c.current = null, d.current = 0, null != e && (e.style.overflowAnchor = "auto", e.style.overscrollBehavior = "auto")
        }
    }, [t, m, x?.itemType, n, s, r, o, p])
}