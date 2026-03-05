/** chunk id: 245750, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var a = n(627968),
    i = n(64700),
    s = n(935399),
    l = n(505312),
    r = n(397927),
    o = n(134991),
    d = n(203982),
    c = n(42473),
    u = n(652215),
    m = n(985018);

function h(e) {
    let t, n, {
            webBuildOverride: h,
            onClick: x,
            onContextMenu: p,
            iconForeground: g,
            nameplate: _
        } = e,
        f = i.useRef(null),
        [v, b] = i.useState(!1);
    (0, s.Ay)(() => {
        let e = () => b(!0);
        return d._.subscribe(u.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e), () => {
            d._.unsubscribe(u.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e)
        }
    });
    let j = i.useCallback(() => {
        b(!1), x()
    }, [x]);
    t = null != h ? m.intl.formatToPlainString(m.t.Gzh6ZP, {
        webBuildOverride: h.id
    }) : m.intl.string(m.t.cduTBL);
    let A = r.Zes,
        C = (0, l.w)();
    return A = null != h ? r.Hnu : C.Component, (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(c.A, {
            ref: f,
            tooltipText: t,
            tooltipPositionKey: n,
            onClick: j,
            onContextMenu: p,
            "aria-label": m.intl.string(m.t.cduTBL),
            icon: (0, a.jsx)(A, {
                size: "refresh_sm",
                color: "currentColor",
                className: g
            }),
            ...C.events,
            plated: null != _
        }), (0, a.jsx)(o.V, {
            targetElementRef: f,
            shouldShow: v,
            onDismiss: () => b(!1)
        })]
    })
}