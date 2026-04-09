/** chunk id: 362205 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => j
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(284009),
    o = n.n(l),
    u = n(687498),
    c = n(942381),
    d = n(837381),
    h = n(935399),
    m = n(319354),
    p = n(397927),
    f = n(775602),
    _ = n(253932),
    g = n(894858),
    y = n(272053),
    v = n(397274),
    x = n(189857),
    S = n(674085),
    E = n(188180),
    A = n(890690),
    N = n(480270);

function b(e) {
    let {
        category: t,
        onClick: n,
        active: i,
        dismissibleBadge: a
    } = e, {
        useTitle: l,
        useSubnavLabel: u,
        key: c
    } = t, h = l?.(), m = u?.() ?? h;
    return o()(null != m, "[SettingsSubnavigationCategory] Category must have a title"), (0, r.jsx)(d.tG, {
        id: c,
        children: e => (0, r.jsxs)(p.DUT, {
            onClick: n,
            className: s()(N.AS, {
                [N.vu]: i
            }),
            ...e,
            children: [m, null != a && !i && (0, r.jsx)(S.A, {
                badge: a
            })]
        }, c)
    })
}

function j(e) {
    let {
        active: t,
        categories: n,
        visibleContent: a,
        dismissibleBadges: s
    } = e, [l, o] = i.useState(() => {
        let e = g.A.getField("currentCategoryKey"),
            t = n.find(t => t.key === e);
        return t?.key ?? n[0].key
    }), [u, d] = i.useState(t);
    i.useEffect(() => g.A.subscribe(e => {
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
    let h = i.useMemo(() => Math.max(n.findIndex(e => e.key === l), 0), [n, l]);
    i.useEffect(() => {
        if (!t) {
            let e = m.current;
            null != e && (e.style.height = `${e.scrollHeight}px`, window.getComputedStyle(e).height, e.style.height = "0", Promise.allSettled(e.getAnimations().map(e => e.finished)).then(() => {
                d(!1)
            }))
        }
    }, [t]);
    let m = i.useRef(null),
        [p, f] = i.useState(t ? "auto" : "0");
    return (0, A.u)(n, t), (0, r.jsx)("div", {
        className: N.lK,
        style: {
            height: p,
            opacity: +!!t
        },
        ref: m,
        children: u && (0, r.jsx)(C, {
            index: h,
            activeKey: l,
            categories: n,
            visibleContent: a,
            dismissibleBadges: s,
            onMount: function() {
                let e = m.current;
                null != e && (e.style.height = `${e.scrollHeight}px`, Promise.all(e.getAnimations().map(e => e.finished)).then(() => {
                    e.style.height = "auto", v.A.scrollSidebarNodeIntoView(e, {
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
        categories: a,
        visibleContent: s,
        dismissibleBadges: l,
        onMount: o
    } = e, {
        thumbRef: c,
        trackRef: d,
        thumbAnchorRef: g,
        springs: v
    } = function(e) {
        let t = _.Xi.useSetting(),
            n = i.useRef(null),
            r = i.useRef(null),
            a = i.useRef(null),
            s = i.useRef(!0),
            l = i.useRef(t),
            [o, u] = (0, p.zhh)(() => ({
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
                    let [i, c] = [n.current.getBoundingClientRect(), a.current.getBoundingClientRect()], d = i.width / 2, h = (c.y - i.y) / d, m = c.height / d;
                    s.current || e || f.A.useReducedMotion ? (o.y.set(h), o.height.set(m)) : u({
                        y: h,
                        height: m
                    }), s.current = !1, l.current = t
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
            thumbAnchorRef: a,
            springs: o
        }
    }(t);
    return (0, h.Ay)(o), (0, r.jsxs)("div", {
        className: N.o8,
        role: "list",
        style: {
            "--custom-nav-count": a.length,
            "--custom-nav-index": t,
            "--custom-nav-width": "2px",
            "--custom-icon-size": `${m.E[E.V]}px`
        },
        children: [(0, r.jsx)("div", {
            className: N.u4,
            "aria-hidden": "true",
            ref: d,
            children: (0, r.jsx)(u.animated.div, {
                className: N.FF,
                style: v,
                ref: c
            })
        }), (0, r.jsx)("div", {
            className: N.gu,
            "aria-hidden": "true",
            ref: g
        }), a.map(e => {
            let t = (0, x.H)(e.key, s, l);
            return (0, r.jsx)(b, {
                onClick: () => {
                    var t;
                    return t = e.key, void y.A.navigate(t, {
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