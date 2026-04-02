/** chunk id: 52144 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(966871),
    o = n(851580),
    d = n(222823),
    c = n(287809),
    u = n(371911),
    A = n(790782),
    h = n(985018);

function _(e) {
    let {
        onOpen: t,
        onClose: n,
        "data-jump-section": _
    } = e, m = (0, a.bG)([c.default], () => c.default.getCurrentUser()), p = l.useRef(null), g = (0, a.bG)([d.Ay], () => m?.id != null && d.Ay.getMentionCount(m.id, A.P.NOTIFICATION_CENTER) > 0);
    return (0, i.jsx)(u.C, {
        targetElementRef: p,
        onOpen: t,
        onClose: n,
        badgeState: {
            badgeForYou: g
        },
        popoutPosition: "bottom",
        popoutAlign: "right",
        children: (e, t, n, l) => (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(s.A, {
                ...n,
                icon: r.K$s,
                tooltip: h.intl.string(h.t.GSmTKJ),
                onClick: e,
                showBadge: g || l,
                selected: t,
                "data-jump-section": _,
                ref: p
            }), (0, i.jsx)(o.v, {
                location: "inbox-button",
                targetElementRef: p
            })]
        })
    })
}