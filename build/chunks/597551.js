/** chunk id: 597551 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(64700),
    s = n(311907),
    l = n(775602),
    r = n(507553);

function a(e, t) {
    let n = r.A.useField("scrollPosition"),
        a = (0, s.bG)([l.A], () => l.A.useReducedMotion);
    (0, i.useEffect)(() => {
        let i = e.current;
        if (null == i || n !== t) return;
        let s = requestAnimationFrame(() => {
            i.scrollIntoView({
                behavior: a ? "auto" : "smooth"
            }), r.A.setState({
                scrollPosition: null
            })
        });
        return () => cancelAnimationFrame(s)
    }, [e, t, n, a])
}