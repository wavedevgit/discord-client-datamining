/** chunk id: 362205 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(284009),
    o = n.n(l),
    c = n(490249),
    u = n(942381),
    d = n(837381),
    m = n(397927),
    f = n(775602),
    g = n(253932),
    h = n(894858),
    p = n(272053),
    y = n(189857),
    _ = n(674085),
    x = n(890690),
    v = n(652099);

function b(e) {
    let {
        category: t,
        onClick: n,
        active: i,
        dismissibleBadge: a
    } = e, {
        useTitle: l,
        useSubnavLabel: c,
        key: u
    } = t, f = l?.(), g = c?.() ?? f;
    return o()(null != g, "[SettingsSubnavigationCategory] Category must have a title"), (0, r.jsx)(d.tG, {
        id: u,
        children: e => (0, r.jsxs)(m.DUT, {
            onClick: n,
            className: s()(v.AS, {
                [v.vu]: i
            }),
            ...e,
            children: [g, null != a && !i && (0, r.jsx)(_.A, {
                badge: a
            })]
        }, u)
    })
}

function A(e) {
    let {
        categories: t,
        visibleContent: n,
        dismissibleBadges: a
    } = e, [s, l] = i.useState(() => {
        let e = h.A.getField("currentCategoryKey"),
            n = t.find(t => t.key === e);
        return n?.key ?? t[0].key
    });
    i.useEffect(() => h.A.subscribe(e => {
        let {
            currentCategoryKey: t
        } = e;
        return t
    }, e => {
        let n = t.find(t => t.key === e);
        null != n && l(n.key)
    }, {
        equalityFn: u.x
    }), [t]);
    let o = i.useMemo(() => Math.max(t.findIndex(e => e.key === s), 0), [t, s]),
        {
            thumbRef: d,
            trackRef: _,
            thumbAnchorRef: A,
            springs: j
        } = function(e) {
            let t = g.Xi.useSetting(),
                n = i.useRef(null),
                r = i.useRef(null),
                a = i.useRef(null),
                s = i.useRef(!0),
                l = i.useRef(t),
                [o, c] = (0, m.zhh)(() => ({
                    y: 0,
                    height: 0,
                    config: {
                        mass: .1,
                        friction: 20,
                        tension: 300
                    }
                }));
            return i.useLayoutEffect(() => {
                let e = l.current !== t,
                    i = () => {
                        if (null == n.current || null == r.current || null == a.current) return;
                        let [i, u] = [n.current.getBoundingClientRect(), a.current.getBoundingClientRect()], d = i.width / 2, m = (u.y - i.y) / d, g = u.height / d;
                        s.current || e || f.A.useReducedMotion ? (o.y.set(m), o.height.set(g)) : c({
                            y: m,
                            height: g
                        }), s.current = !1, l.current = t
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
    return (0, x.u)(t), (0, r.jsxs)("div", {
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
            ref: _,
            children: (0, r.jsx)(c.animated.div, {
                className: v.FF,
                style: j,
                ref: d
            })
        }), (0, r.jsx)("div", {
            className: v.gu,
            "aria-hidden": "true",
            ref: A
        }), t.map(e => {
            let t = (0, y.H)(e.key, n, a);
            return (0, r.jsx)(b, {
                onClick: () => {
                    var t;
                    return t = e.key, void p.A.navigate(t, {
                        showNavigationMobile: !1
                    })
                },
                active: e.key === s,
                category: e,
                dismissibleBadge: t
            }, e.key)
        })]
    })
}