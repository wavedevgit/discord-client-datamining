/** chunk id: 362205 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var r = n(627968),
    a = n(64700),
    i = n(503698),
    s = n.n(i),
    l = n(284009),
    o = n.n(l),
    c = n(497766),
    u = n(942381),
    d = n(837381),
    m = n(397927),
    f = n(775602),
    h = n(253932),
    p = n(894858),
    g = n(272053),
    x = n(189857),
    _ = n(674085),
    y = n(890690),
    b = n(652099);

function v(e) {
    let {
        category: t,
        onClick: n,
        active: a,
        dismissibleBadge: i
    } = e, {
        useTitle: l,
        useSubnavLabel: c,
        key: u
    } = t, f = l?.(), h = c?.() ?? f;
    return o()(null != h, "[SettingsSubnavigationCategory] Category must have a title"), (0, r.jsx)(d.tG, {
        id: u,
        children: e => (0, r.jsxs)(m.DUT, {
            onClick: n,
            className: s()(b.AS, {
                [b.vu]: a
            }),
            ...e,
            children: [h, null != i && !a && (0, r.jsx)(_.A, {
                badge: i
            })]
        }, u)
    })
}

function A(e) {
    let {
        categories: t,
        visibleContent: n,
        dismissibleBadges: i
    } = e, [s, l] = a.useState(() => {
        let e = p.A.getField("currentCategoryKey"),
            n = t.find(t => t.key === e);
        return n?.key ?? t[0].key
    });
    a.useEffect(() => p.A.subscribe(e => {
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
    let o = a.useMemo(() => Math.max(t.findIndex(e => e.key === s), 0), [t, s]),
        {
            thumbRef: d,
            trackRef: _,
            thumbAnchorRef: A,
            springs: j
        } = function(e) {
            let t = h.Xi.useSetting(),
                n = a.useRef(null),
                r = a.useRef(null),
                i = a.useRef(null),
                s = a.useRef(!0),
                l = a.useRef(t),
                [o, c] = (0, m.zhh)(() => ({
                    y: 0,
                    height: 0,
                    config: {
                        mass: .1,
                        friction: 20,
                        tension: 300
                    }
                }));
            return a.useLayoutEffect(() => {
                let e = l.current !== t,
                    a = () => {
                        if (null == n.current || null == r.current || null == i.current) return;
                        let [a, u] = [n.current.getBoundingClientRect(), i.current.getBoundingClientRect()], d = a.width / 2, m = (u.y - a.y) / d, h = u.height / d;
                        s.current || e || f.A.useReducedMotion ? (o.y.set(m), o.height.set(h)) : c({
                            y: m,
                            height: h
                        }), s.current = !1, l.current = t
                    },
                    u = null;
                return e ? u = requestAnimationFrame(() => {
                    u = null, a()
                }) : a(), () => {
                    null != u && cancelAnimationFrame(u)
                }
            }, [e, c, o.y, o.height, t]), {
                thumbRef: r,
                trackRef: n,
                thumbAnchorRef: i,
                springs: o
            }
        }(o);
    return (0, y.u)(t), (0, r.jsxs)("div", {
        className: b.o8,
        role: "list",
        style: {
            "--custom-nav-count": t.length,
            "--custom-nav-index": o,
            "--custom-nav-width": "2px"
        },
        children: [(0, r.jsx)("div", {
            className: b.u4,
            "aria-hidden": "true",
            ref: _,
            children: (0, r.jsx)(c.animated.div, {
                className: b.FF,
                style: j,
                ref: d
            })
        }), (0, r.jsx)("div", {
            className: b.gu,
            "aria-hidden": "true",
            ref: A
        }), t.map(e => {
            let t = (0, x.H)(e.key, n, i);
            return (0, r.jsx)(v, {
                onClick: () => {
                    var t;
                    return t = e.key, void g.A.navigate(t, {
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