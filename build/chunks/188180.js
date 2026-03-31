/** chunk id: 188180 params = (module,exports,require) **/
"use strict";
n.d(t, {
    V: () => b,
    X: () => g
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(837381),
    o = n(397927),
    c = n(199966),
    u = n(963935),
    d = n(894858),
    _ = n(272053),
    h = n(189857),
    f = n(674085),
    m = n(215566),
    p = n(362205),
    v = n(710515);
let b = "refresh_sm";

function y(e) {
    let {
        tag: t,
        onClick: n,
        active: a,
        node: s,
        dismissibleBadge: c,
        panelKey: u,
        listItemProps: d,
        children: _
    } = e, {
        icon: h,
        StronglyDiscouragedCustomComponent: p,
        usePersistentBadge: y,
        useTitle: g,
        variant: x = "default"
    } = s, E = g?.(), S = function(e) {
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
    }(x), N = y?.(a), C = i.useMemo(() => null != c ? a ? null : (0, r.jsx)(f.A, {
        badge: c
    }) : null != N ? (0, r.jsx)(m.A, {
        badge: N
    }) : void 0, [a, c, N]);
    return (0, r.jsxs)(t, {
        "data-settings-sidebar-item": u,
        className: v.DB,
        children: [(0, r.jsxs)(o.DUT, {
            ...d,
            className: l()(v.AS, {
                [v.vu]: a,
                [v.RD]: "destructive" === x
            }),
            onClick: n,
            children: [null != p ? (0, r.jsx)(p, {}) : (0, r.jsxs)("div", {
                className: v.Ly,
                children: [(0, r.jsx)(h, {
                    color: A,
                    size: b,
                    className: v.Kk
                }), (0, r.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: S,
                    children: E
                })]
            }), C]
        }), _]
    })
}

function g(e) {
    let {
        node: t,
        visibleContent: n,
        dismissibleBadges: a,
        hoisted: l = !1
    } = e, o = i.useMemo(() => t.layout[0], [t]), f = d.A.useField("currentPanelKey"), {
        accessibleDirectory: m
    } = (0, c._)(), v = i.useMemo(() => {
        if (null == f) return !1;
        let e = m.entry(f);
        return e?.parentSidebarItemKey === t.key
    }, [f, t.key, m]), b = i.useMemo(() => {
        if (null == o || !(0, u.Iu)(o.layout)) return null;
        let e = o.layout.filter(u.bJ);
        return e.length > 1 ? e : null
    }, [o]), g = null != o ? () => {
        let e = f === o.key && null != b ? b[0].key : o.key;
        _.A.navigate(e, {
            animateSidebarScroll: !0,
            showNavigationMobile: !1
        })
    } : t.onClick, x = i.useMemo(() => v && null != b ? (0, r.jsx)(p.A, {
        categories: b,
        visibleContent: n,
        dismissibleBadges: a
    }) : null, [v, b, n, a]), E = l ? "li" : "div", S = i.useMemo(() => (0, h.H)(t.key, n, a), [t.key, n, a]);
    return l ? (0, r.jsx)(y, {
        tag: E,
        panelKey: o?.key,
        onClick: g,
        active: v,
        node: t,
        dismissibleBadge: S,
        children: x
    }) : (0, r.jsx)(s.tG, {
        id: t.key,
        children: e => (0, r.jsx)(y, {
            tag: E,
            panelKey: o?.key,
            onClick: g,
            active: v,
            node: t,
            dismissibleBadge: S,
            listItemProps: e,
            children: x
        })
    })
}