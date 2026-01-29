/** Chunk was on 1113 **/
/** chunk id: 831741, original params: e,t,n (module,exports,require) **/
n.d(t, {
    R: () => y
}), n(457529);
var r, l, i = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    c = n(883885),
    u = n.n(c),
    d = n(311907),
    h = n(775602),
    p = n(455902),
    g = n(423993),
    f = n(851007);

function m(e) {
    let t = (0, d.bG)([h.A], () => h.A.useReducedMotion),
        n = s.useRef(null);
    return s.useEffect(() => {
        let r;
        return null != n.current && (r = u().loadAnimation({
            container: n.current,
            renderer: "svg",
            loop: !0,
            autoplay: !t,
            animationData: JSON.parse(JSON.stringify(e))
        })), () => {
            null == r || r.destroy()
        }
    }, [n, t, e]), n
}

function b(e) {
    let {
        className: t
    } = e;
    return (0, i.jsx)("div", {
        ref: m(r || (r = n.t(p, 2))),
        className: o()(f.ys, t)
    })
}

function A(e) {
    let {
        className: t
    } = e;
    return (0, i.jsx)("div", {
        ref: m(l || (l = n.t(g, 2))),
        className: o()(f.R0, t)
    })
}
let y = e => {
    let {
        children: t,
        animationContainerClassName: n,
        glowClassName: r,
        trinketsClassName: l,
        onMount: a
    } = e;
    return s.useEffect(() => {
        a()
    }, [a]), (0, i.jsxs)("div", {
        className: n,
        children: [(0, i.jsx)(b, {
            className: r
        }), (0, i.jsx)("div", {
            className: f.cw
        }), (0, i.jsx)("div", {
            className: f.h$,
            children: t
        }), (0, i.jsx)(A, {
            className: l
        })]
    })
}