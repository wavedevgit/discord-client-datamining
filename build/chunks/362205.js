/** chunk id: 362205, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x
});
var a = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    l = n(284009),
    o = n.n(l),
    c = n(442215),
    u = n(837381),
    d = n(397927),
    _ = n(964486),
    m = n(775602),
    g = n(253932),
    p = n(894858),
    b = n(890690),
    f = n(652099);

function h(e) {
    let {
        category: t,
        onClick: n,
        active: r
    } = e, {
        useTitle: i,
        useSubnavLabel: l,
        key: c
    } = t, _ = i?.(), m = l?.() ?? _;
    return o()(null != m, "[SettingsSubnavigationCategory] Category must have a title"), (0, a.jsx)(u.tG, {
        id: c,
        children: e => (0, a.jsx)(d.DUT, {
            onClick: n,
            className: s()(f.AS, {
                [f.vu]: r
            }),
            ...e,
            children: m
        }, c)
    })
}

function x(e) {
    let {
        categories: t
    } = e, n = p.A.useField("currentCategoryKey");
    (0, _.Ay)(() => {
        t.some(e => e.key === n) || p.A.setState({
            currentCategoryKey: t[0].key
        })
    });
    let i = r.useMemo(() => Math.max(t.findIndex(e => e.key === n), 0), [t, n]),
        {
            thumbRef: s,
            trackRef: l,
            thumbAnchorRef: o,
            springs: u
        } = function(e) {
            let t = g.Xi.useSetting(),
                n = r.useRef(null),
                a = r.useRef(null),
                i = r.useRef(null),
                s = r.useRef(!0),
                l = r.useRef(t),
                [o, c] = (0, d.zhh)(() => ({
                    y: 0,
                    height: 0,
                    config: {
                        mass: .1,
                        friction: 20,
                        tension: 300
                    }
                }));
            return r.useLayoutEffect(() => {
                let e = l.current !== t,
                    r = () => {
                        if (null == n.current || null == a.current || null == i.current) return;
                        let [r, u] = [n.current.getBoundingClientRect(), i.current.getBoundingClientRect()], d = r.width / 2, _ = (u.y - r.y) / d, g = u.height / d;
                        s.current || e || m.A.useReducedMotion ? (o.y.set(_), o.height.set(g)) : c({
                            y: _,
                            height: g
                        }), s.current = !1, l.current = t
                    },
                    u = null;
                return e ? u = requestAnimationFrame(() => {
                    u = null, r()
                }) : r(), () => {
                    null != u && cancelAnimationFrame(u)
                }
            }, [e, c, o.y, o.height, t]), {
                thumbRef: a,
                trackRef: n,
                thumbAnchorRef: i,
                springs: o
            }
        }(i);
    return (0, b.u)(t), (0, a.jsxs)("div", {
        className: f.o8,
        role: "list",
        style: {
            "--custom-nav-count": t.length,
            "--custom-nav-index": i,
            "--custom-nav-width": "2px"
        },
        children: [(0, a.jsx)("div", {
            className: f.u4,
            "aria-hidden": "true",
            ref: l,
            children: (0, a.jsx)(c.animated.div, {
                className: f.FF,
                style: u,
                ref: s
            })
        }), (0, a.jsx)("div", {
            className: f.gu,
            "aria-hidden": "true",
            ref: o
        }), t.map(e => (0, a.jsx)(h, {
            onClick: () => {
                var t;
                return t = e.key, void p.A.setState({
                    requestedTargetKey: t,
                    showNavigationMobile: !1
                })
            },
            active: e.key === n,
            category: e
        }, e.key))]
    })
}