/** chunk id: 362205 params = (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => A
});
var n = r(627968),
    a = r(64700),
    i = r(503698),
    l = r.n(i),
    s = r(284009),
    o = r.n(s),
    c = r(497766),
    u = r(942381),
    d = r(837381),
    h = r(319354),
    f = r(397927),
    _ = r(775602),
    m = r(253932),
    p = r(894858),
    g = r(272053),
    b = r(189857),
    y = r(674085),
    v = r(188180),
    x = r(890690),
    E = r(637577);

function S(e) {
    let {
        category: t,
        onClick: r,
        active: a,
        dismissibleBadge: i
    } = e, {
        useTitle: s,
        useSubnavLabel: c,
        key: u
    } = t, h = s?.(), _ = c?.() ?? h;
    return o()(null != _, "[SettingsSubnavigationCategory] Category must have a title"), (0, n.jsx)(d.tG, {
        id: u,
        children: e => (0, n.jsxs)(f.DUT, {
            onClick: r,
            className: l()(E.AS, {
                [E.vu]: a
            }),
            ...e,
            children: [_, null != i && !a && (0, n.jsx)(y.A, {
                badge: i
            })]
        }, u)
    })
}

function A(e) {
    let {
        categories: t,
        visibleContent: r,
        dismissibleBadges: i
    } = e, [l, s] = a.useState(() => {
        let e = p.A.getField("currentCategoryKey"),
            r = t.find(t => t.key === e);
        return r?.key ?? t[0].key
    });
    a.useEffect(() => p.A.subscribe(e => {
        let {
            currentCategoryKey: t
        } = e;
        return t
    }, e => {
        let r = t.find(t => t.key === e);
        null != r && s(r.key)
    }, {
        equalityFn: u.x
    }), [t]);
    let o = a.useMemo(() => Math.max(t.findIndex(e => e.key === l), 0), [t, l]),
        {
            thumbRef: d,
            trackRef: y,
            thumbAnchorRef: A,
            springs: N
        } = function(e) {
            let t = m.Xi.useSetting(),
                r = a.useRef(null),
                n = a.useRef(null),
                i = a.useRef(null),
                l = a.useRef(!0),
                s = a.useRef(t),
                [o, c] = (0, f.zhh)(() => ({
                    y: 0,
                    height: 0,
                    config: {
                        mass: .1,
                        friction: 20,
                        tension: 300
                    }
                }));
            return a.useLayoutEffect(() => {
                let e = s.current !== t,
                    a = () => {
                        if (null == r.current || null == n.current || null == i.current) return;
                        let [a, u] = [r.current.getBoundingClientRect(), i.current.getBoundingClientRect()], d = a.width / 2, h = (u.y - a.y) / d, f = u.height / d;
                        l.current || e || _.A.useReducedMotion ? (o.y.set(h), o.height.set(f)) : c({
                            y: h,
                            height: f
                        }), l.current = !1, s.current = t
                    },
                    u = null;
                return e ? u = requestAnimationFrame(() => {
                    u = null, a()
                }) : a(), () => {
                    null != u && cancelAnimationFrame(u)
                }
            }, [e, c, o.y, o.height, t]), {
                thumbRef: n,
                trackRef: r,
                thumbAnchorRef: i,
                springs: o
            }
        }(o);
    return (0, x.u)(t), (0, n.jsxs)("div", {
        className: E.o8,
        role: "list",
        style: {
            "--custom-nav-count": t.length,
            "--custom-nav-index": o,
            "--custom-nav-width": "2px",
            "--custom-icon-size": `${h.E[v.V]}px`
        },
        children: [(0, n.jsx)("div", {
            className: E.u4,
            "aria-hidden": "true",
            ref: y,
            children: (0, n.jsx)(c.animated.div, {
                className: E.FF,
                style: N,
                ref: d
            })
        }), (0, n.jsx)("div", {
            className: E.gu,
            "aria-hidden": "true",
            ref: A
        }), t.map(e => {
            let t = (0, b.H)(e.key, r, i);
            return (0, n.jsx)(S, {
                onClick: () => {
                    var t;
                    return t = e.key, void g.A.navigate(t, {
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