/** chunk id: 118713, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => s
});
var r = t(627968),
    o = t(64700),
    n = t(503698),
    a = t.n(n),
    i = t(713517),
    d = t(949317);
let c = e => {
        let {
            position: l,
            children: t
        } = e;
        return (0, r.jsx)("div", {
            className: a()(d.child, d[l]),
            children: t
        })
    },
    s = e => {
        let {
            children: l,
            paused: t = !1,
            slideDuration: n = 5e3
        } = e, [a, s] = o.useState(0), u = o.useRef(null), h = (0, i.M)(u), m = o.useRef(void 0), p = o.useMemo(() => o.Children.map(l, e => o.isValidElement(e) ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal") ? e : o.cloneElement(e, {
            tabIndex: -1
        }) : e), [l]);
        o.useEffect(() => {
            Array.isArray(p) ? s(a >= p?.length ? Math.max(p?.length - 1, 0) : a) : s(0)
        }, [p, a]);
        let b = t || h;
        return (o.useEffect(() => {
            if (b) {
                null != m.current && (window.clearTimeout(m.current), m.current = void 0);
                return
            }
            let e = () => {
                s(e => {
                    let l = e + 1;
                    return l >= (p?.length ?? 1) ? 0 : l
                }), m.current = window.setTimeout(e, n)
            };
            window.clearTimeout(m.current), m.current = window.setTimeout(e, n)
        }, [b, n, p]), o.useEffect(() => () => {
            window.clearTimeout(m.current)
        }, []), null == p) ? null : Array.isArray(p) ? (0, r.jsx)("div", {
            ref: u,
            className: d.carousel,
            children: (0, r.jsx)("div", {
                className: d.children,
                children: p?.map((e, l) => {
                    var t, o, n;
                    let i = (t = l, o = a, n = p.length, t === o ? "center" : t < o ? o === n - 1 && 0 === t ? "right" : "left" : 0 === o && t === n - 1 ? "left" : "right");
                    return (0, r.jsx)(c, {
                        position: i,
                        children: e
                    }, l)
                })
            })
        }) : (0, r.jsx)("div", {
            ref: u,
            className: d.carousel,
            children: (0, r.jsx)("div", {
                className: d.children,
                children: (0, r.jsx)(c, {
                    position: "center",
                    children: l
                })
            })
        })
    }