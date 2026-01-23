/** Chunk was on 65076 **/
/** chunk id: 362205, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => O
}), r(896048);
var n = r(627968),
    l = r(64700),
    o = r(503698),
    a = r.n(o),
    i = r(284009),
    c = r.n(i),
    s = r(108531),
    u = r(837381),
    y = r(397927),
    f = r(964486),
    b = r(894858),
    d = r(890690),
    p = r(637577);

function g(e) {
    let {
        category: t,
        onClick: r,
        active: l
    } = e, {
        useTitle: o,
        useSubnavLabel: i,
        key: s
    } = t, f = null == o ? void 0 : o(), b = null == i ? void 0 : i(), d = null != b ? b : f;
    return c()(null != d, "[SettingsSubnavigationCategory] Category must have a title"), (0, n.jsx)(u.tG, {
        id: s,
        children: e => {
            var t, o;
            return (0, n.jsx)(y.DUT, (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach(function(t) {
                        var n;
                        n = r[t], t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    })
                }
                return e
            }({
                onClick: r,
                className: a()(p.AS, {
                    [p.vu]: l
                })
            }, e), o = o = {
                children: d
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r.push.apply(r, n)
                }
                return r
            })(Object(o)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
            }), t), s)
        }
    })
}

function O(e) {
    let {
        categories: t
    } = e, r = b.A.useField("currentCategoryKey");
    (0, f.Ay)(() => {
        t.some(e => e.key === r) || b.A.setState({
            currentCategoryKey: t[0].key
        })
    });
    let o = l.useMemo(() => Math.max(t.findIndex(e => e.key === r), 0), [t, r]),
        {
            thumbRef: a,
            trackRef: i,
            thumbAnchorRef: c,
            springs: u
        } = function(e) {
            let t = l.useRef(null),
                r = l.useRef(null),
                n = l.useRef(null),
                o = l.useRef(!0),
                [a, i] = (0, y.zhh)(() => ({
                    y: 0,
                    height: 0,
                    config: {
                        mass: .1,
                        friction: 20,
                        tension: 300
                    }
                }));
            return l.useLayoutEffect(() => {
                if (null == t.current || null == r.current || null == n.current) return;
                let [e, l] = [t.current.getBoundingClientRect(), n.current.getBoundingClientRect()];
                if (o.current) {
                    o.current = !1, a.y.set(l.y - e.y), a.height.set(l.height);
                    return
                }
                i({
                    y: l.y - e.y,
                    height: l.height
                })
            }, [e, i, a.y, a.height]), {
                thumbRef: r,
                trackRef: t,
                thumbAnchorRef: n,
                springs: a
            }
        }(o);
    return (0, d.o)(), (0, n.jsxs)("div", {
        className: p.o8,
        role: "list",
        style: {
            "--custom-nav-count": t.length,
            "--custom-nav-index": o
        },
        children: [(0, n.jsx)("div", {
            className: p.u4,
            "aria-hidden": "true",
            ref: i,
            children: (0, n.jsx)(s.animated.div, {
                className: p.FF,
                style: u,
                ref: a
            })
        }), (0, n.jsx)("div", {
            className: p.gu,
            "aria-hidden": "true",
            ref: c
        }), t.map(e => (0, n.jsx)(g, {
            onClick: () => {
                var t;
                return t = e.key, void b.A.setState({
                    requestedTargetKey: t,
                    showNavigationMobile: !1
                })
            },
            active: e.key === r,
            category: e
        }, e.key))]
    })
}