/** chunk id: 118713 params = (module,exports,require) **/
r.d(t, {
    A: () => o
});
var l = r(627968),
    n = r(64700),
    a = r(503698),
    s = r.n(a),
    c = r(713517),
    i = r(290583);
let d = e => {
        let {
            position: t,
            children: r
        } = e;
        return (0, l.jsx)("div", {
            className: s()(i.child, i[t]),
            children: r
        })
    },
    o = e => {
        let {
            children: t,
            paused: r = !1,
            slideDuration: a = 5e3
        } = e, [s, o] = n.useState(0), u = n.useRef(null), m = (0, c.M)(u), h = n.useRef(void 0), p = n.useMemo(() => n.Children.map(t, e => n.isValidElement(e) ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal") ? e : n.cloneElement(e, {
            tabIndex: -1
        }) : e), [t]);
        n.useEffect(() => {
            Array.isArray(p) ? o(s >= p?.length ? Math.max(p?.length - 1, 0) : s) : o(0)
        }, [p, s]);
        let A = r || m;
        return (n.useEffect(() => {
            if (A) {
                null != h.current && (window.clearTimeout(h.current), h.current = void 0);
                return
            }
            let e = () => {
                o(e => {
                    let t = e + 1;
                    return t >= (p?.length ?? 1) ? 0 : t
                }), h.current = window.setTimeout(e, a)
            };
            window.clearTimeout(h.current), h.current = window.setTimeout(e, a)
        }, [A, a, p]), n.useEffect(() => () => {
            window.clearTimeout(h.current)
        }, []), null == p) ? null : Array.isArray(p) ? (0, l.jsx)("div", {
            ref: u,
            className: i.carousel,
            children: (0, l.jsx)("div", {
                className: i.children,
                children: p?.map((e, t) => {
                    var r, n, a;
                    let c = (r = t, n = s, a = p.length, r === n ? "center" : r < n ? n === a - 1 && 0 === r ? "right" : "left" : 0 === n && r === a - 1 ? "left" : "right");
                    return (0, l.jsx)(d, {
                        position: c,
                        children: e
                    }, t)
                })
            })
        }) : (0, l.jsx)("div", {
            ref: u,
            className: i.carousel,
            children: (0, l.jsx)("div", {
                className: i.children,
                children: (0, l.jsx)(d, {
                    position: "center",
                    children: t
                })
            })
        })
    }