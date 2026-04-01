/** chunk id: 362205 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(284009),
    o = n.n(s),
    c = n(773690),
    u = n(942381),
    d = n(837381),
    h = n(319354),
    m = n(397927),
    f = n(775602),
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
        dismissibleBadge: a
    } = e, {
        useTitle: s,
        useSubnavLabel: c,
        key: u
    } = t, h = s?.(), f = c?.() ?? h;
    return o()(null != f, "[SettingsSubnavigationCategory] Category must have a title"), (0, r.jsx)(d.tG, {
        id: u,
        children: e => (0, r.jsxs)(m.DUT, {
            onClick: n,
            className: l()(A.AS, {
                [A.vu]: i
            }),
            ...e,
            children: [f, null != a && !i && (0, r.jsx)(g.A, {
                badge: a
            })]
        }, u)
    })
}

function b(e) {
    let {
        categories: t,
        visibleContent: n,
        dismissibleBadges: a
    } = e, [l, s] = i.useState(() => {
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
        equalityFn: u.x
    }), [t]);
    let o = i.useMemo(() => Math.max(t.findIndex(e => e.key === l), 0), [t, l]),
        {
            thumbRef: d,
            trackRef: g,
            thumbAnchorRef: b,
            springs: N
        } = function(e) {
            let t = p.Xi.useSetting(),
                n = i.useRef(null),
                r = i.useRef(null),
                a = i.useRef(null),
                l = i.useRef(!0),
                s = i.useRef(t),
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
                let e = s.current !== t,
                    i = () => {
                        if (null == n.current || null == r.current || null == a.current) return;
                        let [i, u] = [n.current.getBoundingClientRect(), a.current.getBoundingClientRect()], d = i.width / 2, h = (u.y - i.y) / d, m = u.height / d;
                        l.current || e || f.A.useReducedMotion ? (o.y.set(h), o.height.set(m)) : c({
                            y: h,
                            height: m
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
            children: (0, r.jsx)(c.animated.div, {
                className: A.FF,
                style: N,
                ref: d
            })
        }), (0, r.jsx)("div", {
            className: A.gu,
            "aria-hidden": "true",
            ref: b
        }), t.map(e => {
            let t = (0, y.H)(e.key, n, a);
            return (0, r.jsx)(S, {
                onClick: () => {
                    var t;
                    return t = e.key, void v.A.navigate(t, {
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