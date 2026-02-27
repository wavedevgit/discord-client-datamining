/** chunk id: 118713, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => u
});
var r = l(627968),
    a = l(64700),
    d = l(503698),
    c = l.n(d),
    n = l(713517),
    o = l(949317);
let s = e => {
        let {
            position: t,
            children: l
        } = e;
        return (0, r.jsx)("div", {
            className: c()(o.child, o[t]),
            children: l
        })
    },
    u = e => {
        let {
            children: t,
            paused: l = !1,
            slideDuration: d = 5e3
        } = e, [c, u] = a.useState(0), i = a.useRef(null), h = (0, n.M)(i), m = a.useRef(void 0), p = a.useMemo(() => a.Children.map(t, e => a.isValidElement(e) ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal") ? e : a.cloneElement(e, {
            tabIndex: -1
        }) : e), [t]);
        a.useEffect(() => {
            Array.isArray(p) ? u(c >= p?.length ? Math.max(p?.length - 1, 0) : c) : u(0)
        }, [p, c]);
        let k = l || h;
        return (a.useEffect(() => {
            if (k) {
                null != m.current && (window.clearTimeout(m.current), m.current = void 0);
                return
            }
            let e = () => {
                u(e => {
                    let t = e + 1;
                    return t >= (p?.length ?? 1) ? 0 : t
                }), m.current = window.setTimeout(e, d)
            };
            window.clearTimeout(m.current), m.current = window.setTimeout(e, d)
        }, [k, d, p]), a.useEffect(() => () => {
            window.clearTimeout(m.current)
        }, []), null == p) ? null : Array.isArray(p) ? (0, r.jsx)("div", {
            ref: i,
            className: o.carousel,
            children: (0, r.jsx)("div", {
                className: o.children,
                children: p?.map((e, t) => {
                    var l, a, d;
                    let n = (l = t, a = c, d = p.length, l === a ? "center" : l < a ? a === d - 1 && 0 === l ? "right" : "left" : 0 === a && l === d - 1 ? "left" : "right");
                    return (0, r.jsx)(s, {
                        position: n,
                        children: e
                    }, t)
                })
            })
        }) : (0, r.jsx)("div", {
            ref: i,
            className: o.carousel,
            children: (0, r.jsx)("div", {
                className: o.children,
                children: (0, r.jsx)(s, {
                    position: "center",
                    children: t
                })
            })
        })
    }