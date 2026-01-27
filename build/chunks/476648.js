/** Chunk was on 20941 **/
/** chunk id: 476648, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u,
    f: () => c
}), n(896048);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(877272),
    o = n(834450);
let c = 400;

function u(e) {
    let {
        className: t,
        textClassName: n,
        text: a,
        variant: u,
        delay: d
    } = e, m = (0, l.useRef)(0), f = (0, l.useRef)(0), [p, h] = (0, l.useState)("");
    return (0, l.useEffect)(() => {
        let e = () => {
            let t = Date.now() - m.current,
                n = Math.max(Math.min(t / c, 1), 0);
            h(a.substring(0, Math.floor(n * a.length))), t < c && (f.current = window.requestAnimationFrame(e))
        };
        return m.current = Date.now() + (null != d ? d : 0), f.current = window.requestAnimationFrame(e), () => cancelAnimationFrame(f.current)
    }, [d, a]), (0, r.jsxs)("div", {
        className: i()(t, o.kL),
        children: [(0, r.jsx)(s.A, {
            "aria-hidden": !0,
            className: i()(o.CZ, n),
            variant: u,
            children: a
        }), (0, r.jsx)(s.A, {
            className: i()(o.Hi, n),
            variant: u,
            children: p
        })]
    })
}