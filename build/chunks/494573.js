/** chunk id: 494573 params = (module,exports,require) **/
s.d(t, {
    A: () => y
});
var r = s(627968),
    l = s(64700),
    a = s(503698),
    n = s.n(a),
    o = s(3666),
    i = s(397927),
    c = s(770178),
    u = s(955572),
    d = s(775602),
    b = s(742589),
    p = s(421773),
    S = s(397309),
    E = s(190294),
    A = s(758836),
    h = s(985018),
    f = s(656547);

function m(e) {
    let {
        tab: t,
        label: s,
        selected: l,
        handleTransition: a,
        hasSubmenu: o,
        showNewBadge: c,
        icon: u
    } = e;
    return o ? (0, r.jsx)(C, {
        tab: t,
        label: s,
        selected: l,
        handleTransition: a
    }) : (0, r.jsxs)(b.A.Title, {
        onClick: () => a(t),
        wrapperClassName: f.Vn,
        className: n()(f.Mf, {
            [f.wH]: l
        }),
        children: [null != u ? (0, r.jsxs)("span", {
            className: f.nt,
            children: [s, (0, r.jsx)(u, {
                size: "xs",
                color: "currentColor"
            })]
        }) : s, c && (0, r.jsx)(i.LpS, {
            text: h.intl.string(h.t.y2b7CA),
            className: f.Ad
        })]
    })
}

function C(e) {
    let {
        tab: t,
        label: s,
        selected: a,
        handleTransition: o
    } = e, c = l.useRef(null), E = l.useRef(!1), {
        isHovered: A,
        setIsHovered: h,
        onMouseEnter: m,
        onMouseLeave: C,
        cancelTimers: g
    } = (0, p.A)(100, 100), T = e => {
        ("Enter" === e.key || " " === e.key) && (e.preventDefault(), g(), h(!0), E.current = d.A.keyboardModeEnabled)
    }, y = l.useCallback(() => {
        E.current = d.A.keyboardModeEnabled, m()
    }, [m]);
    return (0, r.jsx)("div", {
        className: f.iV,
        onMouseEnter: y,
        onMouseLeave: C,
        children: (0, r.jsx)(i.YNO, {
            targetElementRef: c,
            shouldShow: A,
            position: "bottom",
            align: "left",
            onRequestOpen: () => {
                g(), h(!0), E.current = d.A.keyboardModeEnabled
            },
            onRequestClose: () => {
                E.current && !d.A.keyboardModeEnabled && (0, u.uS)(), h(!1), c.current?.focus()
            },
            renderPopout: e => {
                let {
                    closePopout: t
                } = e;
                return (0, r.jsx)("div", {
                    onMouseEnter: m,
                    onMouseLeave: C,
                    children: (0, r.jsx)(S.A, {
                        handleTransition: o,
                        onClose: t
                    })
                })
            },
            children: (e, l) => {
                let {
                    isShown: u
                } = l, d = u ? i.tN5 : i.abt;
                return (0, r.jsx)(b.A.Title, {
                    ...e,
                    ref: c,
                    onClick: () => o(t),
                    onKeyDown: T,
                    wrapperClassName: f.Vn,
                    className: n()(f.Mf, {
                        [f.wH]: a
                    }),
                    children: (0, r.jsxs)("span", {
                        className: f.hP,
                        children: [s, (0, r.jsx)(d, {
                            size: "sm",
                            color: "currentColor"
                        })]
                    })
                })
            }
        })
    })
}

function g(e) {
    let {
        onTabSelect: t,
        tabs: s,
        selectedTab: a,
        selected: o
    } = e, c = l.useRef(null), S = l.useRef(!1), {
        isHovered: A,
        setIsHovered: m,
        onMouseEnter: C,
        onMouseLeave: g,
        cancelTimers: T
    } = (0, p.A)(100, 100), y = e => {
        ("Enter" === e.key || " " === e.key) && (e.preventDefault(), T(), m(!0), S.current = d.A.keyboardModeEnabled)
    }, O = l.useCallback(() => {
        S.current = d.A.keyboardModeEnabled, C()
    }, [C]);
    return (0, r.jsx)("div", {
        className: f.iV,
        onMouseEnter: O,
        onMouseLeave: g,
        children: (0, r.jsx)(i.YNO, {
            targetElementRef: c,
            shouldShow: A,
            position: "bottom",
            align: "left",
            onRequestOpen: () => {
                T(), m(!0), S.current = d.A.keyboardModeEnabled
            },
            onRequestClose: () => {
                S.current && !d.A.keyboardModeEnabled && (0, u.uS)(), m(!1), c.current?.focus()
            },
            renderPopout: e => {
                let {
                    closePopout: l
                } = e;
                return (0, r.jsx)("div", {
                    onMouseEnter: C,
                    onMouseLeave: g,
                    children: (0, r.jsx)(E.A, {
                        selectedTab: a,
                        onClose: l,
                        tabs: s,
                        onTabSelect: t
                    })
                })
            },
            children: (e, t) => {
                let {
                    isShown: s
                } = t, l = s ? i.tN5 : i.abt;
                return (0, r.jsx)(b.A.Title, {
                    ...e,
                    ref: c,
                    onKeyDown: y,
                    wrapperClassName: f.Vn,
                    className: n()(f.Mf, f.OS, {
                        [f.wH]: o
                    }),
                    "aria-label": h.intl.string(h.t["UKOtz+"]),
                    children: (0, r.jsxs)("span", {
                        className: f.hP,
                        children: [h.intl.string(h.t["UKOtz+"]), (0, r.jsx)(l, {
                            size: "xs"
                        })]
                    })
                })
            }
        })
    })
}

function T(e, t, s) {
    return e === s || (t.hasSubmenu ?? !1) && (0, A.dF)(s) && e === A.G2.CATALOG
}

function y(e) {
    let {
        className: t,
        selectedTab: s,
        tabs: a,
        onTabSelect: i
    } = e, [u, d] = l.useState(0), b = l.useRef(u), {
        lastVisibleIndex: p,
        onItemLayout: S,
        overflowItemsRef: E
    } = (0, o.Wv)({
        items: a,
        itemGapPx: 24,
        maxLines: 1,
        containerWidth: u
    }), A = l.useMemo(() => a.slice(0, p + 1), [p, a]), h = l.useMemo(() => a.slice(p + 1), [p, a]), C = l.useRef(null), y = l.useCallback(e => {
        let t = e.contentRect.width;
        null != t && b.current !== t && (d(t), b.current = t)
    }, []);
    (0, c.g)(C, y);
    let O = 0 !== u,
        L = h.some(e => T(e.tab, e, s));
    return (0, r.jsxs)("div", {
        className: n()(f.kL, t),
        ref: C,
        children: [(0, r.jsxs)("div", {
            className: f.Kk,
            children: [a.map((e, t) => (0, r.jsx)(o.Ae, {
                index: t,
                onItemLayout: S,
                children: (0, r.jsx)(m, {
                    tab: e.tab,
                    label: e.label,
                    selected: T(e.tab, e, s),
                    handleTransition: i,
                    hasSubmenu: e.hasSubmenu ?? !1,
                    icon: e.icon
                })
            }, e.tab)), (0, r.jsx)("div", {
                ref: E,
                children: (0, r.jsx)(g, {
                    tabs: h,
                    onTabSelect: i,
                    selectedTab: s,
                    selected: L
                })
            })]
        }), O && (0, r.jsxs)("div", {
            className: f.vR,
            children: [A.map(e => (0, r.jsx)(m, {
                tab: e.tab,
                label: e.label,
                selected: T(e.tab, e, s),
                handleTransition: i,
                hasSubmenu: e.hasSubmenu ?? !1,
                icon: e.icon
            }, e.tab)), 0 !== h.length ? (0, r.jsx)(g, {
                tabs: h,
                onTabSelect: i,
                selectedTab: s,
                selected: L
            }) : null]
        })]
    })
}