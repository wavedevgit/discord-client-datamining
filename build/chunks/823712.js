/** chunk id: 823712 params = (module,exports,require) **/
l.d(t, {
    A: () => N
});
var n = l(627968),
    s = l(64700),
    i = l(503698),
    a = l.n(i),
    r = l(311907),
    d = l(3666),
    o = l(582754),
    c = l(397927),
    u = l(770178),
    x = l(765548),
    m = l(736653),
    h = l(716416),
    j = l(786180),
    _ = l(742589),
    g = l(761640),
    A = l(836872),
    f = l(985018),
    b = l(256177);
let v = e => {
    let {
        tabs: t,
        selectedTab: l,
        onTabSelect: s,
        onClose: i
    } = e;
    return (0, n.jsx)(c.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "members-tabs-overflow-menu",
        "aria-label": f.intl.string(f.t.riPnr0),
        hideScroller: !0,
        onClose: i,
        onSelect: i,
        children: (0, n.jsx)(c.rXV, {
            children: t.map(e => {
                let {
                    id: t,
                    label: i
                } = e;
                return (0, n.jsx)(c.Drp, {
                    id: t,
                    label: i,
                    icon: t === l ? c.yr3 : void 0,
                    leadingAccessory: t === l ? {
                        type: "icon",
                        icon: c.yr3
                    } : void 0,
                    action: () => s(t)
                }, t)
            })
        }, "applications-overflow-tabs")
    })
};

function T(e) {
    let {
        onTabSelect: t,
        tabs: l,
        selectedTab: i
    } = e, r = s.useRef(null), d = (0, m.Ay)(), u = (0, o.Mw)(d), x = s.useMemo(() => null != l.find(e => {
        let {
            id: t
        } = e;
        return t === i
    }), [i, l]), h = x ? "text-strong" : u ? "text-muted" : "text-strong", j = x ? c.LU0.colors.TEXT_STRONG : u ? c.LU0.colors.TEXT_MUTED : c.LU0.colors.TEXT_STRONG;
    return (0, n.jsx)(c.YNO, {
        targetElementRef: r,
        renderPopout: e => {
            let {
                closePopout: s
            } = e;
            return (0, n.jsx)(v, {
                selectedTab: i,
                onClose: s,
                tabs: l,
                onTabSelect: t
            })
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            let {
                isShown: l
            } = t;
            return (0, n.jsxs)(c.VQ0.Item, {
                ...e,
                id: "more",
                clickableInnerRef: r,
                color: "text-muted",
                className: a()(b.OS, {
                    [b.wH]: x
                }),
                "aria-label": f.intl.string(f.t["UKOtz+"]),
                children: [(0, n.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: h,
                    children: f.intl.string(f.t["UKOtz+"])
                }), l ? (0, n.jsx)(c.tN5, {
                    size: "sm",
                    color: j
                }) : (0, n.jsx)(c.abt, {
                    size: "sm",
                    color: j
                })]
            })
        }
    })
}

function N(e) {
    let t, {
            guildId: l,
            currentTab: i,
            onTabSelect: a
        } = e,
        [o, m] = s.useState(0),
        v = s.useRef(null),
        N = s.useRef(o),
        E = (t = (0, j.H)({
            guildId: l
        }) ?? 0, [{
            id: A.D.ALL_MEMBERS,
            label: f.intl.string(f.t.NOOm1Z)
        }, {
            id: A.D.PENDING,
            label: t > 0 ? f.intl.formatToPlainString(f.t["Wo+zL0"], {
                count: t
            }) : f.intl.string(f.t["4eQVBO"])
        }, {
            id: A.D.REJECTED,
            label: f.intl.string(f.t.bSZkla)
        }, {
            id: A.D.APPROVED,
            label: f.intl.string(f.t.aURgY2)
        }]),
        {
            lastVisibleIndex: S,
            onItemLayout: C,
            overflowItemsRef: I
        } = (0, d.Wv)({
            items: E,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: o - 200
        }),
        R = (0, r.bG)([g.Ay], () => null != g.Ay.getGuildSidebarState(l), [l]),
        p = (0, h.R)({
            guildId: l
        }),
        M = s.useMemo(() => i === A.D.ALL_MEMBERS ? R : null != p && null != p.user, [i, R, p]),
        D = s.useMemo(() => E.slice(0, S + 1), [S, E]),
        y = s.useMemo(() => E.slice(S + 1), [S, E]),
        G = (0, x.A)(e => {
            let t = e.contentRect.width;
            null != t && N.current !== t && (m(t), N.current = t)
        });
    return (0, u.g)(v, G, [M]), (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(_.A.Divider, {
            className: b.yF
        }), (0, n.jsxs)("div", {
            className: b.oB,
            ref: v,
            children: [(0, n.jsxs)("div", {
                className: b.Kk,
                children: [E.map((e, t) => (0, n.jsx)(d.Ae, {
                    index: t,
                    onItemLayout: C,
                    children: (0, n.jsx)(c.VQ0.Item, {
                        id: e.id,
                        "aria-label": e.label,
                        children: e.label
                    })
                }, e.id)), (0, n.jsx)("div", {
                    ref: I,
                    children: (0, n.jsx)(T, {
                        tabs: y,
                        onTabSelect: a,
                        selectedTab: i
                    })
                })]
            }), (0, n.jsxs)(c.VQ0, {
                "aria-label": f.intl.string(f.t.tcvVXM),
                selectedItem: i,
                type: "top-pill",
                onItemSelect: a,
                children: [D.map(e => (0, n.jsx)(c.VQ0.Item, {
                    id: e.id,
                    "aria-label": e.label,
                    children: e.label
                }, e.id)), 0 !== y.length ? (0, n.jsx)(T, {
                    tabs: y,
                    onTabSelect: a,
                    selectedTab: i
                }) : null]
            })]
        })]
    })
}