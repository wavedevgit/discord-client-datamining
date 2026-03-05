/** chunk id: 362205 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x
});
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(284009),
    o = n.n(s),
    u = n(380278),
    c = n(837381),
    d = n(397927),
    h = n(964486),
    g = n(775602),
    f = n(253932),
    m = n(894858),
    y = n(890690),
    p = n(652099);

function v(e) {
    let {
        category: t,
        onClick: n,
        active: a
    } = e, {
        useTitle: i,
        useSubnavLabel: s,
        key: u
    } = t, h = i?.(), g = s?.() ?? h;
    return o()(null != g, "[SettingsSubnavigationCategory] Category must have a title"), (0, r.jsx)(c.tG, {
        id: u,
        children: e => (0, r.jsx)(d.DUT, {
            onClick: n,
            className: l()(p.AS, {
                [p.vu]: a
            }),
            ...e,
            children: g
        }, u)
    })
}

function x(e) {
    let {
        categories: t
    } = e, n = m.A.useField("currentCategoryKey");
    (0, h.Ay)(() => {
        t.some(e => e.key === n) || m.A.setState({
            currentCategoryKey: t[0].key
        })
    });
    let i = a.useMemo(() => Math.max(t.findIndex(e => e.key === n), 0), [t, n]),
        {
            thumbRef: l,
            trackRef: s,
            thumbAnchorRef: o,
            springs: c
        } = function(e) {
            let t = f.Xi.useSetting(),
                n = a.useRef(null),
                r = a.useRef(null),
                i = a.useRef(null),
                l = a.useRef(!0),
                s = a.useRef(t),
                [o, u] = (0, d.zhh)(() => ({
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
                        if (null == n.current || null == r.current || null == i.current) return;
                        let [a, c] = [n.current.getBoundingClientRect(), i.current.getBoundingClientRect()], d = a.width / 2, h = (c.y - a.y) / d, f = c.height / d;
                        l.current || e || g.A.useReducedMotion ? (o.y.set(h), o.height.set(f)) : u({
                            y: h,
                            height: f
                        }), l.current = !1, s.current = t
                    },
                    c = null;
                return e ? c = requestAnimationFrame(() => {
                    c = null, a()
                }) : a(), () => {
                    null != c && cancelAnimationFrame(c)
                }
            }, [e, u, o.y, o.height, t]), {
                thumbRef: r,
                trackRef: n,
                thumbAnchorRef: i,
                springs: o
            }
        }(i);
    return (0, y.u)(t), (0, r.jsxs)("div", {
        className: p.o8,
        role: "list",
        style: {
            "--custom-nav-count": t.length,
            "--custom-nav-index": i,
            "--custom-nav-width": "2px"
        },
        children: [(0, r.jsx)("div", {
            className: p.u4,
            "aria-hidden": "true",
            ref: s,
            children: (0, r.jsx)(u.animated.div, {
                className: p.FF,
                style: c,
                ref: l
            })
        }), (0, r.jsx)("div", {
            className: p.gu,
            "aria-hidden": "true",
            ref: o
        }), t.map(e => (0, r.jsx)(v, {
            onClick: () => {
                var t;
                return t = e.key, void m.A.setState({
                    requestedTargetKey: t,
                    showNavigationMobile: !1
                })
            },
            active: e.key === n,
            category: e
        }, e.key))]
    })
}