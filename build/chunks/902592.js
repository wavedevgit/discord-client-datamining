/** Chunk was on 87557 **/
/** chunk id: 902592, original params: e,t,n (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => w,
    openDevToolsPopout: () => O
}), n(896048);
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(110259),
    o = n(311907),
    c = n(397927),
    d = n(761929),
    u = n(139286),
    m = n(58736),
    p = n(923917),
    h = n(574172),
    x = n(147925),
    g = n(538064),
    f = n(265059),
    b = n(867041),
    v = n(641616),
    j = n(231643),
    _ = n(652215),
    y = n(985018),
    A = n(346858),
    C = n(661251);

function S(e) {
    let {
        resizableNode: t,
        onResize: n,
        onResizeEnd: l
    } = e, r = (0, d.A)({
        minDimension: f.q,
        resizableDomNodeRef: t,
        onElementResize: n,
        onElementResizeEnd: l,
        orientation: d.R.HORIZONTAL_LEFT
    });
    return (0, a.jsx)("div", {
        onMouseDown: r,
        className: A.Di
    })
}

function O() {
    (0, h.open)(_.MLl.DEVTOOLS_POPOUT, () => (0, a.jsx)(p.A, {
        windowKey: _.MLl.DEVTOOLS_POPOUT,
        title: "DevTools",
        withTitleBar: !0,
        children: (0, a.jsx)(w, {
            mobile: !1,
            isPopout: !0
        })
    }), {
        width: 800,
        height: 600
    })
}

function T(e) {
    var t;
    let {
        isPopout: n = !1
    } = e, l = (0, v.x)(), {
        TabBar: r,
        renderSelectedTab: i,
        selectedTabId: o
    } = (0, j.Ay)({
        tabs: l,
        initialSelectedTabId: null != (t = f.A.lastOpenTabId) ? t : void 0,
        onChangeTab: e => {
            (0, g.Jt)({
                lastOpenTabId: e
            })
        }
    }, [l]);
    return (0, u.A)({
        type: s.ImpressionTypes.PANE,
        name: s.ImpressionNames.VIEW_PANEL_DEVTOOLS,
        properties: {
            panel: o
        }
    }), (0, a.jsxs)(b.xG, {
        children: [(0, a.jsxs)(m.Ay, {
            className: C.jr,
            toolbar: n ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(m.Ay.Icon, {
                    icon: c.tfB,
                    tooltip: "Pop Out",
                    onClick: O
                }), (0, a.jsx)(m.Ay.Icon, {
                    icon: c.PGe,
                    tooltip: y.intl.string(y.t.cpT0Cq),
                    onClick: g.pf
                })]
            }),
            children: [(0, a.jsx)(m.Ay.Icon, {
                icon: c.VaJ,
                tooltip: "DevTools"
            }), (0, a.jsx)(m.Ay.Title, {
                children: "DevTools"
            })]
        }), (0, a.jsx)(r, {}), i(), (0, a.jsx)(b.jY, {
            className: A.n7
        })]
    })
}

function E() {
    let e = l.useRef(null),
        t = (0, o.bG)([f.A], () => f.A.sidebarWidth),
        [n, r] = l.useState(null),
        i = l.useCallback(e => (0, g.Jt)({
            sidebarWidth: e
        }), []);
    return (l.useEffect(() => {
        null === n && null !== t && r(t)
    }, [t, n]), null === n) ? null : (0, a.jsxs)("div", {
        ref: e,
        className: A.kL,
        style: {
            minWidth: f.q,
            width: n
        },
        "data-app-right-panel": !0,
        children: [(0, a.jsx)(S, {
            resizableNode: e,
            onResize: r,
            onResizeEnd: i
        }), (0, a.jsx)("div", {
            className: A.wp,
            children: (0, a.jsx)(T, {})
        })]
    })
}

function N() {
    return (0, o.bG)([f.A], () => f.A.displayTools) ? (0, a.jsx)("div", {
        className: i()(A.kL, A.PQ),
        children: (0, a.jsx)("div", {
            className: A.wp,
            children: (0, a.jsx)(T, {})
        })
    }) : (0, a.jsx)("div", {
        className: A.kL,
        children: (0, a.jsx)(c.DUT, {
            onClick: g.pf,
            children: (0, a.jsxs)(m.Ay, {
                className: i()(C.jr, A.J$),
                toolbar: (0, a.jsx)(x.A, {
                    direction: x.A.Directions.UP
                }),
                children: [(0, a.jsx)(m.Ay.Icon, {
                    icon: c.VaJ,
                    tooltip: "DevTools"
                }), (0, a.jsx)(m.Ay.Title, {
                    children: "DevTools"
                })]
            })
        })
    })
}

function w(e) {
    let {
        mobile: t,
        isPopout: n = !1
    } = e;
    return t ? (0, a.jsx)(N, {}) : n ? (0, a.jsx)("div", {
        className: A.jC,
        children: (0, a.jsx)(T, {
            isPopout: !0
        })
    }) : (0, a.jsx)(E, {})
}