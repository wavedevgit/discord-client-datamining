/** chunk id: 537855, original params: e,t,n (module,exports,require) **/
n.d(t, {
    K: () => u
});
var i = n(627968),
    r = n(64700),
    l = n(735438),
    a = n(158954),
    s = n(397927),
    o = n(770178),
    c = n(985018),
    d = n(155135);

function u(e) {
    let {
        hasInvites: t,
        setHeight: n,
        onShowDisableInvites: u,
        onShowInviteModal: p,
        hasInviteDisabledPermission: m,
        invitesDisabled: g,
        canCreateInvites: b
    } = e, f = r.useMemo(() => (0, l.debounce)(n, 100), [n]), h = r.useCallback(e => {
        let t = e.contentRect;
        null != t && f(t.height)
    }, [f]), x = (0, o.w)(h);
    return (0, i.jsxs)("div", {
        ref: x,
        className: d.o,
        children: [(0, i.jsx)(a.DZT, {
            variant: "text-xs/bold",
            color: "text-muted",
            className: d.U,
            children: t ? c.intl.string(c.t.DjWsya) : c.intl.string(c.t.AmwmLg)
        }), (0, i.jsxs)(a.e2v, {
            children: [(0, i.jsx)(s.Button, {
                variant: g ? "primary" : "critical-secondary",
                text: g ? c.intl.string(c.t["/dbw3H"]) : c.intl.string(c.t.Uwsjn6),
                onClick: u,
                disabled: !m
            }), !0 === b ? (0, i.jsx)(s.Button, {
                variant: "primary",
                text: c.intl.string(c.t.KmK3q4),
                onClick: p
            }) : null]
        })]
    })
}