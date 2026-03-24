/** chunk id: 89305 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(64700),
    i = n(621466);

function s(e) {
    let {
        targetRef: t,
        onShouldClose: n,
        topThreshold: s = 40,
        bottomThreshold: l = 60,
        enabled: o = !0
    } = e;
    r.useEffect(() => {
        if (!o || t?.current == null) return;
        let e = null,
            r = r => {
                if (t?.current == null || !(0, i.vq)(r.target, HTMLElement)) return;
                let o = r.target;
                if (!o.contains(t.current)) return;
                let a = o.scrollTop;
                if (null === e) {
                    e = a;
                    return
                }
                let u = a - e,
                    d = Math.abs(u);
                (u < 0 && d > s || u > 0 && d > l) && n()
            };
        return document.addEventListener("scroll", r, {
            passive: !0,
            capture: !0
        }), () => {
            document.removeEventListener("scroll", r, {
                capture: !0
            })
        }
    }, [o, t, n, s, l])
}