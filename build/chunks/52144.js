/** chunk id: 52144 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    a = n(64700),
    l = n(311907),
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
    } = e, m = (0, l.bG)([c.default], () => c.default.getCurrentUser()), g = a.useRef(null), p = (0, l.bG)([d.Ay], () => m?.id != null && d.Ay.getMentionCount(m.id, A.P.NOTIFICATION_CENTER) > 0);
    return (0, i.jsx)(u.C, {
        targetElementRef: g,
        onOpen: t,
        onClose: n,
        badgeState: {
            badgeForYou: p
        },
        popoutPosition: "bottom",
        popoutAlign: "right",
        children: (e, t, n, a) => (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(s.A, {
                ...n,
                icon: r.K$s,
                tooltip: h.intl.string(h.t.GSmTKJ),
                onClick: e,
                showBadge: p || a,
                selected: t,
                "data-jump-section": _,
                ref: g
            }), (0, i.jsx)(o.v, {
                location: "inbox-button",
                targetElementRef: g
            })]
        })
    })
}