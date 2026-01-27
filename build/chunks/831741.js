/** Chunk was on 77870 **/
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
    p = n(775602),
    h = n(455902),
    f = n(423993),
    g = n(851007);

function m(e) {
    let t = (0, d.bG)([p.A], () => p.A.useReducedMotion),
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
        ref: m(r || (r = n.t(h, 2))),
        className: o()(g.ys, t)
    })
}

function A(e) {
    let {
        className: t
    } = e;
    return (0, i.jsx)("div", {
        ref: m(l || (l = n.t(f, 2))),
        className: o()(g.R0, t)
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
            className: g.cw
        }), (0, i.jsx)("div", {
            className: g.h$,
            children: t
        }), (0, i.jsx)(A, {
            className: l
        })]
    })
}