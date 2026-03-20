/** chunk id: 362205 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(284009),
    o = n.n(s),
    c = n(497766),
    u = n(942381),
    d = n(837381),
    h = n(397927),
    _ = n(775602),
    f = n(253932),
    m = n(894858),
    p = n(272053),
    b = n(189857),
    g = n(674085),
    y = n(890690),
    v = n(652099);

function x(e) {
    let {
        category: t,
        onClick: n,
        active: i,
        dismissibleBadge: a
    } = e, {
        useTitle: s,
        useSubnavLabel: c,
        key: u
    } = t, _ = s?.(), f = c?.() ?? _;
    return o()(null != f, "[SettingsSubnavigationCategory] Category must have a title"), (0, r.jsx)(d.tG, {
        id: u,
        children: e => (0, r.jsxs)(h.DUT, {
            onClick: n,
            className: l()(v.AS, {
                [v.vu]: i
            }),
            ...e,
            children: [f, null != a && !i && (0, r.jsx)(g.A, {
                badge: a
            })]
        }, u)
    })
}

function E(e) {
    let {
        categories: t,
        visibleContent: n,
        dismissibleBadges: a
    } = e, [l, s] = i.useState(() => {
        let e = m.A.getField("currentCategoryKey"),
            n = t.find(t => t.key === e);
        return n?.key ?? t[0].key
    });
    i.useEffect(() => m.A.subscribe(e => {
        let {
            currentCategoryKey: t
        } = e;
        return t
    }, e => {
        let n = t.find(t => t.key === e);
        null != n && s(n.key)
    }, {
        equalityFn: u.x
    }), [t]);
    let o = i.useMemo(() => Math.max(t.findIndex(e => e.key === l), 0), [t, l]),
        {
            thumbRef: d,
            trackRef: g,
            thumbAnchorRef: E,
            springs: A
        } = function(e) {
            let t = f.Xi.useSetting(),
                n = i.useRef(null),
                r = i.useRef(null),
                a = i.useRef(null),
                l = i.useRef(!0),
                s = i.useRef(t),
                [o, c] = (0, h.zhh)(() => ({
                    y: 0,
                    height: 0,
                    config: {
                        mass: .1,
                        friction: 20,
                        tension: 300
                    }
                }));
            return i.useLayoutEffect(() => {
                let e = s.current !== t,
                    i = () => {
                        if (null == n.current || null == r.current || null == a.current) return;
                        let [i, u] = [n.current.getBoundingClientRect(), a.current.getBoundingClientRect()], d = i.width / 2, h = (u.y - i.y) / d, f = u.height / d;
                        l.current || e || _.A.useReducedMotion ? (o.y.set(h), o.height.set(f)) : c({
                            y: h,
                            height: f
                        }), l.current = !1, s.current = t
                    },
                    u = null;
                return e ? u = requestAnimationFrame(() => {
                    u = null, i()
                }) : i(), () => {
                    null != u && cancelAnimationFrame(u)
                }
            }, [e, c, o.y, o.height, t]), {
                thumbRef: r,
                trackRef: n,
                thumbAnchorRef: a,
                springs: o
            }
        }(o);
    return (0, y.u)(t), (0, r.jsxs)("div", {
        className: v.o8,
        role: "list",
        style: {
            "--custom-nav-count": t.length,
            "--custom-nav-index": o,
            "--custom-nav-width": "2px"
        },
        children: [(0, r.jsx)("div", {
            className: v.u4,
            "aria-hidden": "true",
            ref: g,
            children: (0, r.jsx)(c.animated.div, {
                className: v.FF,
                style: A,
                ref: d
            })
        }), (0, r.jsx)("div", {
            className: v.gu,
            "aria-hidden": "true",
            ref: E
        }), t.map(e => {
            let t = (0, b.H)(e.key, n, a);
            return (0, r.jsx)(x, {
                onClick: () => {
                    var t;
                    return t = e.key, void p.A.navigate(t, {
                        showNavigationMobile: !1
                    })
                },
                active: e.key === l,
                category: e,
                dismissibleBadge: t
            }, e.key)
        })]
    })
}