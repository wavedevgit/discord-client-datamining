/** chunk id: 362205 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => j
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    u = n(687498),
    c = n(942381),
    d = n(837381),
    h = n(935399),
    m = n(319354),
    f = n(397927),
    p = n(775602),
    v = n(253932),
    y = n(894858),
    g = n(272053),
    _ = n(397274),
    x = n(189857),
    E = n(674085),
    A = n(188180),
    S = n(890690),
    b = n(480270);

function N(e) {
    let {
        category: t,
        onClick: n,
        active: l,
        dismissibleBadge: i
    } = e, {
        useTitle: s,
        useSubnavLabel: u,
        key: c
    } = t, h = s?.(), m = u?.() ?? h;
    return o()(null != m, "[SettingsSubnavigationCategory] Category must have a title"), (0, r.jsx)(d.tG, {
        id: c,
        children: e => (0, r.jsxs)(f.DUT, {
            onClick: n,
            className: a()(b.AS, {
                [b.vu]: l
            }),
            ...e,
            children: [m, null != i && !l && (0, r.jsx)(E.A, {
                badge: i
            })]
        }, c)
    })
}

function j(e) {
    let {
        active: t,
        categories: n,
        visibleContent: i,
        dismissibleBadges: a
    } = e, [s, o] = l.useState(() => {
        let e = y.A.getField("currentCategoryKey"),
            t = n.find(t => t.key === e);
        return t?.key ?? n[0].key
    }), [u, d] = l.useState(t);
    l.useEffect(() => y.A.subscribe(e => {
        let {
            currentCategoryKey: t
        } = e;
        return t
    }, e => {
        let r = t ? n.find(t => t.key === e) : null;
        null != r && (d(!0), o(r.key))
    }, {
        equalityFn: c.x,
        fireImmediately: !0
    }), [n, t]);
    let h = l.useMemo(() => Math.max(n.findIndex(e => e.key === s), 0), [n, s]);
    l.useEffect(() => {
        if (!t) {
            let e = m.current;
            null != e && (e.style.height = `${e.scrollHeight}px`, window.getComputedStyle(e).height, e.style.height = "0", Promise.allSettled(e.getAnimations().map(e => e.finished)).then(() => {
                d(!1)
            }))
        }
    }, [t]);
    let m = l.useRef(null),
        [f, p] = l.useState(t ? "auto" : "0");
    return (0, S.u)(n, t), (0, r.jsx)("div", {
        className: b.lK,
        style: {
            height: f,
            opacity: +!!t
        },
        ref: m,
        children: u && (0, r.jsx)(C, {
            index: h,
            activeKey: s,
            categories: n,
            visibleContent: i,
            dismissibleBadges: a,
            onMount: function() {
                let e = m.current;
                null != e && (e.style.height = `${e.scrollHeight}px`, Promise.all(e.getAnimations().map(e => e.finished)).then(() => {
                    e.style.height = "auto", _.A.scrollSidebarNodeIntoView(e, {
                        animate: !0,
                        block: "nearest"
                    })
                }).catch(() => {}))
            }
        })
    })
}

function C(e) {
    let {
        index: t,
        activeKey: n,
        categories: i,
        visibleContent: a,
        dismissibleBadges: s,
        onMount: o
    } = e, {
        thumbRef: c,
        trackRef: d,
        thumbAnchorRef: y,
        springs: _
    } = function(e) {
        let t = v.Xi.useSetting(),
            n = l.useRef(null),
            r = l.useRef(null),
            i = l.useRef(null),
            a = l.useRef(!0),
            s = l.useRef(t),
            [o, u] = (0, f.zhh)(() => ({
                y: 0,
                height: 0,
                config: {
                    mass: .1,
                    friction: 20,
                    tension: 300
                }
            }));
        return l.useLayoutEffect(() => {
            let e = s.current !== t,
                l = () => {
                    if (null == n.current || null == r.current || null == i.current) return;
                    let [l, c] = [n.current.getBoundingClientRect(), i.current.getBoundingClientRect()], d = l.width / 2, h = (c.y - l.y) / d, m = c.height / d;
                    a.current || e || p.A.useReducedMotion ? (o.y.set(h), o.height.set(m)) : u({
                        y: h,
                        height: m
                    }), a.current = !1, s.current = t
                },
                c = null;
            return e ? c = requestAnimationFrame(() => {
                c = null, l()
            }) : l(), () => {
                null != c && cancelAnimationFrame(c)
            }
        }, [e, u, o.y, o.height, t]), {
            thumbRef: r,
            trackRef: n,
            thumbAnchorRef: i,
            springs: o
        }
    }(t);
    return (0, h.Ay)(o), (0, r.jsxs)("div", {
        className: b.o8,
        role: "list",
        style: {
            "--custom-nav-count": i.length,
            "--custom-nav-index": t,
            "--custom-nav-width": "2px",
            "--custom-icon-size": `${m.E[A.V]}px`
        },
        children: [(0, r.jsx)("div", {
            className: b.u4,
            "aria-hidden": "true",
            ref: d,
            children: (0, r.jsx)(u.animated.div, {
                className: b.FF,
                style: _,
                ref: c
            })
        }), (0, r.jsx)("div", {
            className: b.gu,
            "aria-hidden": "true",
            ref: y
        }), i.map(e => {
            let t = (0, x.H)(e.key, a, s);
            return (0, r.jsx)(N, {
                onClick: () => {
                    var t;
                    return t = e.key, void g.A.navigate(t, {
                        showNavigationMobile: !1
                    })
                },
                active: e.key === n,
                category: e,
                dismissibleBadge: t
            }, e.key)
        })]
    })
}