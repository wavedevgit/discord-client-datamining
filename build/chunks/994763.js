/** chunk id: 994763 params = (module,exports,require) **/
n.d(t, {
    z: () => s
});
var i = n(64700),
    r = n(311907),
    a = n(775602);

function s(e, t, n, s) {
    ! function(e, t, n) {
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            l = arguments.length > 4 ? arguments[4] : void 0,
            o = (0, r.bG)([a.A], () => a.A.useReducedMotion),
            c = i.useRef(!1);
        i.useEffect(() => {
            if (!t || c.current) return;
            let n = {
                    behavior: o ? "auto" : "smooth",
                    block: s,
                    inline: l
                },
                i = e();
            if (null != i && i.offsetHeight > 0) {
                c.current = !0, i.scrollIntoView(n);
                return
            }
            let r = !1,
                a = null,
                d = new ResizeObserver(e => {
                    let t = e[0];
                    null == t || !(t.contentRect.height > 0) || c.current || r || (c.current = !0, d.disconnect(), t.target.scrollIntoView(n))
                }),
                u = performance.now(),
                _ = () => {
                    if (r || performance.now() - u > 5e3) return;
                    let t = e();
                    null != t ? t.offsetHeight > 0 ? (c.current = !0, t.scrollIntoView(n)) : d.observe(t) : a = requestAnimationFrame(_)
                };
            return _(), () => {
                r = !0, null != a && cancelAnimationFrame(a), d.disconnect()
            }
        }, [t, o, s, l, ...n]), i.useEffect(() => {
            t || (c.current = !1)
        }, [t])
    }(() => document.getElementById(e), t, [e], n, s)
}