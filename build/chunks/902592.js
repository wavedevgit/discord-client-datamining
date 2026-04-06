/** chunk id: 902592 params = (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => k,
    openDevToolsPopout: () => E
});
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(110259),
    o = n(311907),
    d = n(397927),
    c = n(761929),
    u = n(139286),
    m = n(58736),
    h = n(923917),
    x = n(574172),
    p = n(147925),
    g = n(538064),
    f = n(265059),
    _ = n(867041),
    v = n(641616),
    b = n(231643),
    j = n(652215),
    A = n(985018),
    C = n(670211),
    y = n(310086);

function S(e) {
    let {
        resizableNode: t,
        onResize: n,
        onResizeEnd: i
    } = e, s = (0, c.A)({
        minDimension: f.q,
        resizableDomNodeRef: t,
        onElementResize: n,
        onElementResizeEnd: i,
        orientation: c.R.HORIZONTAL_LEFT
    });
    return (0, a.jsx)("div", {
        onMouseDown: s,
        className: C.Di
    })
}

function E() {
    (0, x.open)(j.MLl.DEVTOOLS_POPOUT, () => (0, a.jsx)(h.A, {
        windowKey: j.MLl.DEVTOOLS_POPOUT,
        title: "DevTools",
        withTitleBar: !0,
        children: (0, a.jsx)(k, {
            mobile: !1,
            isPopout: !0
        })
    }), {
        width: 800,
        height: 600
    })
}

function T(e) {
    let {
        isPopout: t = !1
    } = e, n = (0, v.x)(), {
        TabBar: i,
        renderSelectedTab: s,
        selectedTabId: l
    } = (0, b.Ay)({
        tabs: n,
        initialSelectedTabId: f.A.lastOpenTabId ?? void 0,
        onChangeTab: e => {
            (0, g.Jt)({
                lastOpenTabId: e
            })
        }
    }, [n]);
    return (0, u.A)({
        type: r.ImpressionTypes.PANE,
        name: r.ImpressionNames.VIEW_PANEL_DEVTOOLS,
        properties: {
            panel: l
        }
    }), (0, a.jsxs)(_.xG, {
        children: [(0, a.jsxs)(m.Ay, {
            className: y.jr,
            toolbar: t ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(m.Ay.Icon, {
                    icon: d.tfB,
                    tooltip: "Pop Out",
                    onClick: E
                }), (0, a.jsx)(m.Ay.Icon, {
                    icon: d.PGe,
                    tooltip: A.intl.string(A.t.cpT0Cq),
                    onClick: g.pf
                })]
            }),
            children: [(0, a.jsx)(m.Ay.Icon, {
                icon: d.VaJ,
                tooltip: "DevTools"
            }), (0, a.jsx)(m.Ay.Title, {
                children: "DevTools"
            })]
        }), (0, a.jsx)(i, {}), s(), (0, a.jsx)(_.jY, {
            className: C.n7
        })]
    })
}

function N() {
    let e = i.useRef(null),
        t = (0, o.bG)([f.A], () => f.A.sidebarWidth),
        [n, s] = i.useState(null),
        l = i.useCallback(e => (0, g.Jt)({
            sidebarWidth: e
        }), []);
    return (i.useEffect(() => {
        null === n && null !== t && s(t)
    }, [t, n]), null === n) ? null : (0, a.jsxs)("div", {
        ref: e,
        className: C.kL,
        style: {
            minWidth: f.q,
            width: n
        },
        "data-app-right-panel": !0,
        children: [(0, a.jsx)(S, {
            resizableNode: e,
            onResize: s,
            onResizeEnd: l
        }), (0, a.jsx)("div", {
            className: C.wp,
            children: (0, a.jsx)(T, {})
        })]
    })
}

function I() {
    return (0, o.bG)([f.A], () => f.A.displayTools) ? (0, a.jsx)("div", {
        className: l()(C.kL, C.PQ),
        children: (0, a.jsx)("div", {
            className: C.wp,
            children: (0, a.jsx)(T, {})
        })
    }) : (0, a.jsx)("div", {
        className: C.kL,
        children: (0, a.jsx)(d.DUT, {
            onClick: g.pf,
            children: (0, a.jsxs)(m.Ay, {
                className: l()(y.jr, C.J$),
                toolbar: (0, a.jsx)(p.A, {
                    direction: p.A.Directions.UP
                }),
                children: [(0, a.jsx)(m.Ay.Icon, {
                    icon: d.VaJ,
                    tooltip: "DevTools"
                }), (0, a.jsx)(m.Ay.Title, {
                    children: "DevTools"
                })]
            })
        })
    })
}

function k(e) {
    let {
        mobile: t,
        isPopout: n = !1
    } = e;
    return t ? (0, a.jsx)(I, {}) : n ? (0, a.jsx)("div", {
        className: C.jC,
        children: (0, a.jsx)(T, {
            isPopout: !0
        })
    }) : (0, a.jsx)(N, {})
}