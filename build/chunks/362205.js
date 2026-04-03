/** chunk id: 362205 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(284009),
    o = n.n(s),
    u = n(687498),
    c = n(942381),
    d = n(837381),
    h = n(319354),
    f = n(397927),
    m = n(775602),
    p = n(253932),
    _ = n(894858),
    v = n(272053),
    y = n(189857),
    g = n(674085),
    x = n(188180),
    E = n(890690),
    A = n(480270);

function S(e) {
    let {
        category: t,
        onClick: n,
        active: i,
        dismissibleBadge: l
    } = e, {
        useTitle: s,
        useSubnavLabel: u,
        key: c
    } = t, h = s?.(), m = u?.() ?? h;
    return o()(null != m, "[SettingsSubnavigationCategory] Category must have a title"), (0, r.jsx)(d.tG, {
        id: c,
        children: e => (0, r.jsxs)(f.DUT, {
            onClick: n,
            className: a()(A.AS, {
                [A.vu]: i
            }),
            ...e,
            children: [m, null != l && !i && (0, r.jsx)(g.A, {
                badge: l
            })]
        }, c)
    })
}

function b(e) {
    let {
        categories: t,
        visibleContent: n,
        dismissibleBadges: l
    } = e, [a, s] = i.useState(() => {
        let e = _.A.getField("currentCategoryKey"),
            n = t.find(t => t.key === e);
        return n?.key ?? t[0].key
    });
    i.useEffect(() => _.A.subscribe(e => {
        let {
            currentCategoryKey: t
        } = e;
        return t
    }, e => {
        let n = t.find(t => t.key === e);
        null != n && s(n.key)
    }, {
        equalityFn: c.x
    }), [t]);
    let o = i.useMemo(() => Math.max(t.findIndex(e => e.key === a), 0), [t, a]),
        {
            thumbRef: d,
            trackRef: g,
            thumbAnchorRef: b,
            springs: N
        } = function(e) {
            let t = p.Xi.useSetting(),
                n = i.useRef(null),
                r = i.useRef(null),
                l = i.useRef(null),
                a = i.useRef(!0),
                s = i.useRef(t),
                [o, u] = (0, f.zhh)(() => ({
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
                        if (null == n.current || null == r.current || null == l.current) return;
                        let [i, c] = [n.current.getBoundingClientRect(), l.current.getBoundingClientRect()], d = i.width / 2, h = (c.y - i.y) / d, f = c.height / d;
                        a.current || e || m.A.useReducedMotion ? (o.y.set(h), o.height.set(f)) : u({
                            y: h,
                            height: f
                        }), a.current = !1, s.current = t
                    },
                    c = null;
                return e ? c = requestAnimationFrame(() => {
                    c = null, i()
                }) : i(), () => {
                    null != c && cancelAnimationFrame(c)
                }
            }, [e, u, o.y, o.height, t]), {
                thumbRef: r,
                trackRef: n,
                thumbAnchorRef: l,
                springs: o
            }
        }(o);
    return (0, E.u)(t), (0, r.jsxs)("div", {
        className: A.o8,
        role: "list",
        style: {
            "--custom-nav-count": t.length,
            "--custom-nav-index": o,
            "--custom-nav-width": "2px",
            "--custom-icon-size": `${h.E[x.V]}px`
        },
        children: [(0, r.jsx)("div", {
            className: A.u4,
            "aria-hidden": "true",
            ref: g,
            children: (0, r.jsx)(u.animated.div, {
                className: A.FF,
                style: N,
                ref: d
            })
        }), (0, r.jsx)("div", {
            className: A.gu,
            "aria-hidden": "true",
            ref: b
        }), t.map(e => {
            let t = (0, y.H)(e.key, n, l);
            return (0, r.jsx)(S, {
                onClick: () => {
                    var t;
                    return t = e.key, void v.A.navigate(t, {
                        showNavigationMobile: !1
                    })
                },
                active: e.key === a,
                category: e,
                dismissibleBadge: t
            }, e.key)
        })]
    })
}