/** Chunk was on 88615 **/
/** chunk id: 89305, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => i
});
var r = n(64700),
    l = n(621466);

function i(e) {
    let {
        targetRef: t,
        onShouldClose: n,
        topThreshold: i = 40,
        bottomThreshold: o = 60,
        enabled: s = !0
    } = e;
    r.useEffect(() => {
        if (!s || (null == t ? void 0 : t.current) == null) return;
        let e = null,
            r = r => {
                if ((null == t ? void 0 : t.current) == null || !(0, l.vq)(r.target, HTMLElement)) return;
                let s = r.target;
                if (!s.contains(t.current)) return;
                let a = s.scrollTop;
                if (null === e) {
                    e = a;
                    return
                }
                let u = a - e,
                    d = Math.abs(u);
                (u < 0 && d > i || u > 0 && d > o) && n()
            };
        return document.addEventListener("scroll", r, {
            passive: !0,
            capture: !0
        }), () => {
            document.removeEventListener("scroll", r, {
                capture: !0
            })
        }
    }, [s, t, n, i, o])
}