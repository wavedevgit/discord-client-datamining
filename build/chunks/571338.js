/** chunk id: 571338 params = (module,exports,require) **/
a.d(t, {
    A: () => x
});
var n = a(627968),
    i = a(64700),
    l = a(503698),
    s = a.n(l),
    r = a(3666),
    o = a(397927),
    c = a(770178),
    d = a(742589),
    u = a(124589),
    m = a(488995),
    h = a(985018),
    p = a(968306);

function _(e) {
    let {
        id: t,
        label: a,
        selected: i,
        handleTransition: l,
        ...r
    } = e;
    return (0, n.jsx)(d.A.Title, {
        ...r,
        onClick: () => l(t),
        wrapperClassName: p.Vn,
        className: s()(p.Mf, {
            [p.wH]: i
        }),
        children: a
    })
}

function g(e) {
    let {
        onTabSelect: t,
        tabs: a,
        selectedTab: l,
        selected: r
    } = e, c = i.useRef(null);
    return (0, n.jsx)(o.YNO, {
        targetElementRef: c,
        renderPopout: e => {
            let {
                closePopout: i
            } = e;
            return (0, n.jsx)(u.A, {
                selectedTab: l,
                onClose: i,
                tabs: a,
                onTabSelect: t
            })
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let {
                isShown: a
            } = t;
            return (0, n.jsxs)(d.A.Title, {
                ...e,
                ref: c,
                wrapperClassName: p.Vn,
                className: s()(p.Mf, p.OS, {
                    [p.wH]: r
                }),
                id: m.GlobalDiscoverySharedTabId.MORE,
                "aria-label": h.intl.string(h.t["UKOtz+"]),
                children: [h.intl.string(h.t["UKOtz+"]), a ? (0, n.jsx)(o.tN5, {
                    size: "xs"
                }) : (0, n.jsx)(o.abt, {
                    size: "xs"
                })]
            })
        }
    })
}

function x(e) {
    let {
        className: t,
        selectedTab: a,
        tabs: l,
        onTabSelect: o,
        onAvailableWidthChange: d
    } = e, [u, m] = i.useState(0), h = i.useRef(u), {
        lastVisibleIndex: x,
        onItemLayout: A,
        overflowItemsRef: f,
        itemWidthsRef: b
    } = (0, r.Wv)({
        items: l,
        itemGapPx: 24,
        maxLines: 1,
        containerWidth: u
    }), C = i.useMemo(() => l.slice(0, x + 1), [x, l]), v = i.useMemo(() => l.slice(x + 1), [x, l]), j = i.useRef(null), I = i.useCallback(e => {
        let t = e.contentRect.width;
        if (null == t || h.current === t) return;
        m(t), h.current = t;
        let a = t - b.current.reduce((e, t, a) => e + t + 24 * (0 !== a));
        d?.(a)
    }, [b, d]);
    (0, c.g)(j, I);
    let S = 0 !== u,
        E = v.some(e => e.id === a);
    return (0, n.jsxs)("div", {
        className: s()(p.kL, t),
        ref: j,
        children: [(0, n.jsxs)("div", {
            className: p.Kk,
            children: [l.map((e, t) => (0, n.jsx)(r.Ae, {
                index: t,
                onItemLayout: A,
                children: (0, n.jsx)(_, {
                    id: e.id,
                    label: e.label,
                    selected: a === e.id,
                    handleTransition: o
                }, e.id)
            }, e.id)), (0, n.jsx)("div", {
                ref: f,
                children: (0, n.jsx)(g, {
                    tabs: v,
                    onTabSelect: o,
                    selectedTab: a,
                    selected: E
                })
            })]
        }), S && (0, n.jsxs)("div", {
            className: p.vR,
            children: [C.map(e => (0, n.jsx)(_, {
                id: e.id,
                label: e.label,
                selected: a === e.id,
                handleTransition: o
            }, e.id)), 0 !== v.length ? (0, n.jsx)(g, {
                tabs: v,
                onTabSelect: o,
                selectedTab: a,
                selected: E
            }) : null]
        })]
    })
}