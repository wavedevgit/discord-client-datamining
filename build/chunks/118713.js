/** chunk id: 118713 params = (module,exports,require) **/
t.d(l, {
    A: () => c
});
var r = t(627968),
    n = t(64700),
    o = t(503698),
    i = t.n(o),
    a = t(713517),
    s = t(949317);
let d = e => {
        let {
            position: l,
            children: t
        } = e;
        return (0, r.jsx)("div", {
            className: i()(s.child, s[l]),
            children: t
        })
    },
    c = e => {
        let {
            children: l,
            paused: t = !1,
            slideDuration: o = 5e3
        } = e, [i, c] = n.useState(0), u = n.useRef(null), h = (0, a.M)(u), m = n.useRef(void 0), p = n.useMemo(() => n.Children.map(l, e => n.isValidElement(e) ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal") ? e : n.cloneElement(e, {
            tabIndex: -1
        }) : e), [l]);
        n.useEffect(() => {
            Array.isArray(p) ? c(i >= p?.length ? Math.max(p?.length - 1, 0) : i) : c(0)
        }, [p, i]);
        let _ = t || h;
        return (n.useEffect(() => {
            if (_) {
                null != m.current && (window.clearTimeout(m.current), m.current = void 0);
                return
            }
            let e = () => {
                c(e => {
                    let l = e + 1;
                    return l >= (p?.length ?? 1) ? 0 : l
                }), m.current = window.setTimeout(e, o)
            };
            window.clearTimeout(m.current), m.current = window.setTimeout(e, o)
        }, [_, o, p]), n.useEffect(() => () => {
            window.clearTimeout(m.current)
        }, []), null == p) ? null : Array.isArray(p) ? (0, r.jsx)("div", {
            ref: u,
            className: s.carousel,
            children: (0, r.jsx)("div", {
                className: s.children,
                children: p?.map((e, l) => {
                    var t, n, o;
                    let a = (t = l, n = i, o = p.length, t === n ? "center" : t < n ? n === o - 1 && 0 === t ? "right" : "left" : 0 === n && t === o - 1 ? "left" : "right");
                    return (0, r.jsx)(d, {
                        position: a,
                        children: e
                    }, l)
                })
            })
        }) : (0, r.jsx)("div", {
            ref: u,
            className: s.carousel,
            children: (0, r.jsx)("div", {
                className: s.children,
                children: (0, r.jsx)(d, {
                    position: "center",
                    children: l
                })
            })
        })
    }