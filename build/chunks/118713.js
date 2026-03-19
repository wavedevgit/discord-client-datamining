/** chunk id: 118713 params = (module,exports,require) **/
l.d(t, {
    A: () => c
});
var r = l(627968),
    n = l(64700),
    i = l(503698),
    o = l.n(i),
    a = l(713517),
    s = l(656071);
let d = e => {
        let {
            position: t,
            children: l
        } = e;
        return (0, r.jsx)("div", {
            className: o()(s.child, s[t]),
            children: l
        })
    },
    c = e => {
        let {
            children: t,
            paused: l = !1,
            slideDuration: i = 5e3
        } = e, [o, c] = n.useState(0), u = n.useRef(null), h = (0, a.M)(u), m = n.useRef(void 0), p = n.useMemo(() => n.Children.map(t, e => n.isValidElement(e) ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal") ? e : n.cloneElement(e, {
            tabIndex: -1
        }) : e), [t]);
        n.useEffect(() => {
            Array.isArray(p) ? c(o >= p?.length ? Math.max(p?.length - 1, 0) : o) : c(0)
        }, [p, o]);
        let _ = l || h;
        return (n.useEffect(() => {
            if (_) {
                null != m.current && (window.clearTimeout(m.current), m.current = void 0);
                return
            }
            let e = () => {
                c(e => {
                    let t = e + 1;
                    return t >= (p?.length ?? 1) ? 0 : t
                }), m.current = window.setTimeout(e, i)
            };
            window.clearTimeout(m.current), m.current = window.setTimeout(e, i)
        }, [_, i, p]), n.useEffect(() => () => {
            window.clearTimeout(m.current)
        }, []), null == p) ? null : Array.isArray(p) ? (0, r.jsx)("div", {
            ref: u,
            className: s.carousel,
            children: (0, r.jsx)("div", {
                className: s.children,
                children: p?.map((e, t) => {
                    var l, n, i;
                    let a = (l = t, n = o, i = p.length, l === n ? "center" : l < n ? n === i - 1 && 0 === l ? "right" : "left" : 0 === n && l === i - 1 ? "left" : "right");
                    return (0, r.jsx)(d, {
                        position: a,
                        children: e
                    }, t)
                })
            })
        }) : (0, r.jsx)("div", {
            ref: u,
            className: s.carousel,
            children: (0, r.jsx)("div", {
                className: s.children,
                children: (0, r.jsx)(d, {
                    position: "center",
                    children: t
                })
            })
        })
    }