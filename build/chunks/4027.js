/** chunk id: 4027, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => C
});
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(442433),
    r = n(847767),
    d = n(358367),
    o = n(468389),
    s = n(793574),
    u = n(50268),
    c = n(133238),
    f = n(795144),
    A = n(73028),
    v = n(961350),
    h = n(605691),
    g = n(848977),
    _ = n(995102),
    p = n(652215),
    b = n(985018);
let C = (0, d.A)((0, r.A)(function(e) {
    let {
        channel: t,
        selected: r,
        onSelect: d
    } = e, p = t.isOwner(v.default.getId()), C = (0, g.A)(t), m = (0, _.Ay)(t), O = (0, h.A)(t, r), E = (0, u.A)({
        id: t.id,
        label: b.intl.string(b.t.gFHI3k)
    }), y = (0, o.A)(t), T = (0, c.m)(t), R = (0, c.y)(t), I = (0, f.A)(t), U = p ? (0, i.jsx)(l.Drp, {
        id: "instant-invites",
        label: b.intl.string(b.t.ngRFjZ),
        action: () => (0, l.mMO)(async () => {
            let {
                default: e
            } = await n.e("48574").then(n.bind(n, 830541));
            return n => (0, i.jsx)(e, {
                channelId: t.id,
                ...n
            })
        })
    }) : null;
    return null == t || t.isManaged() ? null : (0, i.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "gdm-context",
        "aria-label": b.intl.string(b.t.Xm41aV),
        onClose: a.Z_,
        onSelect: d,
        children: [(0, i.jsxs)(l.rXV, {
            children: [C, T, I]
        }), (0, i.jsxs)(l.rXV, {
            children: [U, (0, i.jsx)(l.Drp, {
                id: "edit-gdm",
                label: b.intl.string(b.t["5Q9+/L"]),
                action: () => (0, A.U)(t.id, s.A.GROUP_DM_CONTEXT_MENU)
            })]
        }), (0, i.jsx)(l.rXV, {
            children: y
        }), (0, i.jsx)(l.rXV, {
            children: m
        }), (0, i.jsxs)(l.rXV, {
            children: [R, O]
        }), (0, i.jsx)(l.rXV, {
            children: E
        })]
    })
}, {
    object: p.ZSU.CONTEXT_MENU
}), [s.A.CONTEXT_MENU, s.A.GROUP_DM_MENU])