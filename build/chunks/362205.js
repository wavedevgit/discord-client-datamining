/** chunk id: 362205, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x
});
var r = n(627968),
    a = n(64700),
    i = n(503698),
    s = n.n(i),
    l = n(284009),
    o = n.n(l),
    c = n(396181),
    u = n(837381),
    d = n(397927),
    _ = n(964486),
    m = n(775602),
    g = n(253932),
    b = n(894858),
    p = n(890690),
    h = n(637577);

function f(e) {
    let {
        category: t,
        onClick: n,
        active: a
    } = e, {
        useTitle: i,
        useSubnavLabel: l,
        key: c
    } = t, _ = i?.(), m = l?.() ?? _;
    return o()(null != m, "[SettingsSubnavigationCategory] Category must have a title"), (0, r.jsx)(u.tG, {
        id: c,
        children: e => (0, r.jsx)(d.DUT, {
            onClick: n,
            className: s()(h.AS, {
                [h.vu]: a
            }),
            ...e,
            children: m
        }, c)
    })
}

function x(e) {
    let {
        categories: t
    } = e, n = b.A.useField("currentCategoryKey");
    (0, _.Ay)(() => {
        t.some(e => e.key === n) || b.A.setState({
            currentCategoryKey: t[0].key
        })
    });
    let i = a.useMemo(() => Math.max(t.findIndex(e => e.key === n), 0), [t, n]),
        {
            thumbRef: s,
            trackRef: l,
            thumbAnchorRef: o,
            springs: u
        } = function(e) {
            let t = g.Xi.useSetting(),
                n = a.useRef(null),
                r = a.useRef(null),
                i = a.useRef(null),
                s = a.useRef(!0),
                l = a.useRef(t),
                [o, c] = (0, d.zhh)(() => ({
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
                        let [a, u] = [n.current.getBoundingClientRect(), i.current.getBoundingClientRect()], d = a.width / 2, _ = (u.y - a.y) / d, g = u.height / d;
                        s.current || e || m.A.useReducedMotion ? (o.y.set(_), o.height.set(g)) : c({
                            y: _,
                            height: g
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
        }(i);
    return (0, p.u)(t), (0, r.jsxs)("div", {
        className: h.o8,
        role: "list",
        style: {
            "--custom-nav-count": t.length,
            "--custom-nav-index": i,
            "--custom-nav-width": "2px"
        },
        children: [(0, r.jsx)("div", {
            className: h.u4,
            "aria-hidden": "true",
            ref: l,
            children: (0, r.jsx)(c.animated.div, {
                className: h.FF,
                style: u,
                ref: s
            })
        }), (0, r.jsx)("div", {
            className: h.gu,
            "aria-hidden": "true",
            ref: o
        }), t.map(e => (0, r.jsx)(f, {
            onClick: () => {
                var t;
                return t = e.key, void b.A.setState({
                    requestedTargetKey: t,
                    showNavigationMobile: !1
                })
            },
            active: e.key === n,
            category: e
        }, e.key))]
    })
}