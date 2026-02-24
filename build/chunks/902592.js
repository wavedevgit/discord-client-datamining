/** chunk id: 902592, original params: e,t,n (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => k,
    openDevToolsPopout: () => y
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
    _ = n(265059),
    f = n(867041),
    b = n(641616),
    v = n(231643),
    j = n(652215),
    C = n(985018),
    A = n(993572),
    T = n(930821);

function S(e) {
    let {
        resizableNode: t,
        onResize: n,
        onResizeEnd: i
    } = e, s = (0, c.A)({
        minDimension: _.q,
        resizableDomNodeRef: t,
        onElementResize: n,
        onElementResizeEnd: i,
        orientation: c.R.HORIZONTAL_LEFT
    });
    return (0, a.jsx)("div", {
        onMouseDown: s,
        className: A.Di
    })
}

function y() {
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

function E(e) {
    let {
        isPopout: t = !1
    } = e, n = (0, b.x)(), {
        TabBar: i,
        renderSelectedTab: s,
        selectedTabId: l
    } = (0, v.Ay)({
        tabs: n,
        initialSelectedTabId: _.A.lastOpenTabId ?? void 0,
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
    }), (0, a.jsxs)(f.xG, {
        children: [(0, a.jsxs)(m.Ay, {
            className: T.jr,
            toolbar: t ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(m.Ay.Icon, {
                    icon: d.tfB,
                    tooltip: "Pop Out",
                    onClick: y
                }), (0, a.jsx)(m.Ay.Icon, {
                    icon: d.PGe,
                    tooltip: C.intl.string(C.t.cpT0Cq),
                    onClick: g.pf
                })]
            }),
            children: [(0, a.jsx)(m.Ay.Icon, {
                icon: d.VaJ,
                tooltip: "DevTools"
            }), (0, a.jsx)(m.Ay.Title, {
                children: "DevTools"
            })]
        }), (0, a.jsx)(i, {}), s(), (0, a.jsx)(f.jY, {
            className: A.n7
        })]
    })
}

function N() {
    let e = i.useRef(null),
        t = (0, o.bG)([_.A], () => _.A.sidebarWidth),
        [n, s] = i.useState(null),
        l = i.useCallback(e => (0, g.Jt)({
            sidebarWidth: e
        }), []);
    return (i.useEffect(() => {
        null === n && null !== t && s(t)
    }, [t, n]), null === n) ? null : (0, a.jsxs)("div", {
        ref: e,
        className: A.kL,
        style: {
            minWidth: _.q,
            width: n
        },
        "data-app-right-panel": !0,
        children: [(0, a.jsx)(S, {
            resizableNode: e,
            onResize: s,
            onResizeEnd: l
        }), (0, a.jsx)("div", {
            className: A.wp,
            children: (0, a.jsx)(E, {})
        })]
    })
}

function I() {
    return (0, o.bG)([_.A], () => _.A.displayTools) ? (0, a.jsx)("div", {
        className: l()(A.kL, A.PQ),
        children: (0, a.jsx)("div", {
            className: A.wp,
            children: (0, a.jsx)(E, {})
        })
    }) : (0, a.jsx)("div", {
        className: A.kL,
        children: (0, a.jsx)(d.DUT, {
            onClick: g.pf,
            children: (0, a.jsxs)(m.Ay, {
                className: l()(T.jr, A.J$),
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
        className: A.jC,
        children: (0, a.jsx)(E, {
            isPopout: !0
        })
    }) : (0, a.jsx)(N, {})
}