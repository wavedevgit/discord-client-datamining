/** chunk id: 118713, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => s
});
var r = t(627968),
    o = t(64700),
    n = t(503698),
    i = t.n(n),
    a = t(713517),
    d = t(949317);
let c = e => {
        let {
            position: l,
            children: t
        } = e;
        return (0, r.jsx)("div", {
            className: i()(d.child, d[l]),
            children: t
        })
    },
    s = e => {
        let {
            children: l,
            paused: t = !1,
            slideDuration: n = 5e3
        } = e, [i, s] = o.useState(0), u = o.useRef(null), h = (0, a.M)(u), p = o.useRef(void 0), m = o.useMemo(() => o.Children.map(l, e => o.isValidElement(e) ? null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal") ? e : o.cloneElement(e, {
            tabIndex: -1
        }) : e), [l]);
        o.useEffect(() => {
            Array.isArray(m) ? s(i >= m?.length ? Math.max(m?.length - 1, 0) : i) : s(0)
        }, [m, i]);
        let _ = t || h;
        return (o.useEffect(() => {
            if (_) {
                null != p.current && (window.clearTimeout(p.current), p.current = void 0);
                return
            }
            let e = () => {
                s(e => {
                    let l = e + 1;
                    return l >= (m?.length ?? 1) ? 0 : l
                }), p.current = window.setTimeout(e, n)
            };
            window.clearTimeout(p.current), p.current = window.setTimeout(e, n)
        }, [_, n, m]), o.useEffect(() => () => {
            window.clearTimeout(p.current)
        }, []), null == m) ? null : Array.isArray(m) ? (0, r.jsx)("div", {
            ref: u,
            className: d.carousel,
            children: (0, r.jsx)("div", {
                className: d.children,
                children: m?.map((e, l) => {
                    var t, o, n;
                    let a = (t = l, o = i, n = m.length, t === o ? "center" : t < o ? o === n - 1 && 0 === t ? "right" : "left" : 0 === o && t === n - 1 ? "left" : "right");
                    return (0, r.jsx)(c, {
                        position: a,
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