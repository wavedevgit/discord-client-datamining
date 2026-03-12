/** chunk id: 994763 params = (module,exports,require) **/
n.d(t, {
    z: () => r
});
var i = n(64700),
    s = n(311907),
    l = n(775602);

function r(e, t, n, r) {
    ! function(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            a = arguments.length > 4 ? arguments[4] : void 0,
            o = (0, s.bG)([l.A], () => l.A.useReducedMotion),
            d = i.useRef(!1);
        i.useEffect(() => {
            if (!t || d.current) return;
            let n = {
                    behavior: o ? "auto" : "smooth",
                    block: r,
                    inline: a
                },
                i = e();
            if (null != i && i.offsetHeight > 0) {
                d.current = !0, i.scrollIntoView(n);
                return
            }
            let s = !1,
                l = null,
                c = new ResizeObserver(e => {
                    let t = e[0];
                    null == t || !(t.contentRect.height > 0) || d.current || s || (d.current = !0, c.disconnect(), t.target.scrollIntoView(n))
                }),
                u = performance.now(),
                _ = () => {
                    if (s || performance.now() - u > 5e3) return;
                    let t = e();
                    null != t ? t.offsetHeight > 0 ? (d.current = !0, t.scrollIntoView(n)) : c.observe(t) : l = requestAnimationFrame(_)
                };
            return _(), () => {
                s = !0, null != l && cancelAnimationFrame(l), c.disconnect()
            }
        }, [t, o, r, a, ...n]), i.useEffect(() => {
            t || (d.current = !1)
        }, [t])
    }(() => document.getElementById(e), t, [e], n, r)
}