/** chunk id: 188180 params = (module,exports,require) **/
"use strict";
r.d(t, {
    V: () => b,
    X: () => v
});
var n = r(627968),
    a = r(64700),
    i = r(503698),
    l = r.n(i),
    s = r(837381),
    o = r(397927),
    c = r(199966),
    u = r(963935),
    d = r(894858),
    h = r(272053),
    f = r(189857),
    _ = r(674085),
    m = r(215566),
    p = r(362205),
    g = r(71862);
let b = "refresh_sm";

function y(e) {
    let {
        tag: t,
        onClick: r,
        active: i,
        node: s,
        dismissibleBadge: c,
        panelKey: u,
        listItemProps: d,
        children: h
    } = e, {
        icon: f,
        StronglyDiscouragedCustomComponent: p,
        usePersistentBadge: y,
        useTitle: v,
        variant: x = "default"
    } = s, E = v?.(), S = function(e) {
        switch (e) {
            case "default":
                return "currentColor";
            case "destructive":
                return "text-feedback-critical"
        }
    }(x), A = function(e) {
        switch (e) {
            case "default":
                return "currentColor";
            case "destructive":
                return o.LU0.colors.ICON_FEEDBACK_CRITICAL
        }
    }(x), N = y?.(i), C = a.useMemo(() => null != c ? i ? null : (0, n.jsx)(_.A, {
        badge: c
    }) : null != N ? (0, n.jsx)(m.A, {
        badge: N
    }) : void 0, [i, c, N]);
    return (0, n.jsxs)(t, {
        "data-settings-sidebar-item": u,
        className: g.DB,
        children: [(0, n.jsxs)(o.DUT, {
            ...d,
            className: l()(g.AS, {
                [g.vu]: i,
                [g.RD]: "destructive" === x
            }),
            onClick: r,
            children: [null != p ? (0, n.jsx)(p, {}) : (0, n.jsxs)("div", {
                className: g.Ly,
                children: [(0, n.jsx)(f, {
                    color: A,
                    size: b,
                    className: g.Kk
                }), (0, n.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: S,
                    children: E
                })]
            }), C]
        }), h]
    })
}

function v(e) {
    let {
        node: t,
        visibleContent: r,
        dismissibleBadges: i,
        hoisted: l = !1
    } = e, o = a.useMemo(() => t.layout[0], [t]), _ = d.A.useField("currentPanelKey"), {
        accessibleDirectory: m
    } = (0, c._)(), g = a.useMemo(() => {
        if (null == _) return !1;
        let e = m.entry(_);
        return e?.parentSidebarItemKey === t.key
    }, [_, t.key, m]), b = a.useMemo(() => {
        if (null == o || !(0, u.Iu)(o.layout)) return null;
        let e = o.layout.filter(u.bJ);
        return e.length > 1 ? e : null
    }, [o]), v = null != o ? () => {
        let e = _ === o.key && null != b ? b[0].key : o.key;
        h.A.navigate(e, {
            animateSidebarScroll: !0,
            showNavigationMobile: !1
        })
    } : t.onClick, x = a.useMemo(() => g && null != b ? (0, n.jsx)(p.A, {
        categories: b,
        visibleContent: r,
        dismissibleBadges: i
    }) : null, [g, b, r, i]), E = l ? "li" : "div", S = a.useMemo(() => (0, f.H)(t.key, r, i), [t.key, r, i]);
    return l ? (0, n.jsx)(y, {
        tag: E,
        panelKey: o?.key,
        onClick: v,
        active: g,
        node: t,
        dismissibleBadge: S,
        children: x
    }) : (0, n.jsx)(s.tG, {
        id: t.key,
        children: e => (0, n.jsx)(y, {
            tag: E,
            panelKey: o?.key,
            onClick: v,
            active: g,
            node: t,
            dismissibleBadge: S,
            listItemProps: e,
            children: x
        })
    })
}