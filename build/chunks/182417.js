/** Chunk was on 20941 **/
/** chunk id: 182417, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Aq: () => p,
    Ay: () => h,
    pt: () => f
}), n(896048);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(864605),
    o = n(615300),
    c = n(397927),
    u = n(475743),
    d = n(532294),
    m = n(415813);
let f = {
        duration: 800,
        easing: o.A.Easing.bezier(.4, 0, 0, 1)
    },
    p = l.createContext(null);

function h(e) {
    let {
        activeSlide: t,
        children: n,
        className: a,
        slideClassName: o
    } = e, h = (0, u.A)(t), b = l.useMemo(() => {
        let e = {};
        return l.Children.forEach(n, t => {
            e[t.props.id] = t.props.children
        }), e
    }, [...n]), g = t === d.P7.WELCOME && (null == h || h === d.P7.WELCOME), x = (0, c.pnh)(t, {
        from: g ? {
            transform: "translate3d(0, 0px, 0)",
            opacity: 1,
            backgroundScale: 1,
            backgroundY: 0
        } : {
            transform: "translate3d(0, 200px, 0)",
            opacity: -1,
            backgroundScale: .5,
            backgroundY: 0
        },
        enter: {
            transform: "translate3d(0, 0px, 0)",
            opacity: 1,
            backgroundScale: 1,
            backgroundY: 0
        },
        leave: {
            transform: "translate3d(0, -400px, 0)",
            opacity: -1,
            backgroundScale: 1,
            backgroundY: -400
        },
        config: f
    });
    return (0, r.jsx)(p.Provider, {
        value: x,
        children: (0, r.jsx)("div", {
            className: a,
            children: x((e, t, n) => {
                let {
                    key: l
                } = n;
                return (0, r.jsx)(s.animated.div, {
                    className: i()(m.M, o),
                    style: e,
                    children: b[t]
                }, l)
            })
        })
    })
}