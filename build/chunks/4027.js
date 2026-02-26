/** chunk id: 4027, original params: t,n,e (module,exports,require) **/
e.d(n, {
    default: () => O
});
var i = e(627968);
e(64700);
var l = e(397927),
    r = e(442433),
    a = e(847767),
    d = e(358367),
    u = e(468389),
    s = e(793574),
    o = e(50268),
    c = e(133238),
    A = e(795144),
    g = e(73028),
    h = e(961350),
    f = e(605691),
    b = e(848977),
    m = e(995102),
    _ = e(652215),
    v = e(985018);
let O = (0, d.A)((0, a.A)(function(t) {
    let {
        channel: n,
        selected: a,
        onSelect: d
    } = t, _ = n.isOwner(h.default.getId()), O = (0, b.A)(n), p = (0, m.Ay)(n), C = (0, f.A)(n, a), y = (0, o.A)({
        id: n.id,
        label: v.intl.string(v.t.gFHI3k)
    }), G = (0, u.A)(n), x = (0, c.m)(n), j = (0, c.y)(n), T = (0, A.A)(n), M = _ ? (0, i.jsx)(l.Drp, {
        id: "instant-invites",
        label: v.intl.string(v.t.ngRFjZ),
        action: () => (0, l.mMO)(async () => {
            let {
                default: t
            } = await e.e("48574").then(e.bind(e, 830541));
            return e => (0, i.jsx)(t, {
                channelId: n.id,
                ...e
            })
        })
    }) : null;
    return null == n || n.isManaged() ? null : (0, i.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "gdm-context",
        "aria-label": v.intl.string(v.t.Xm41aV),
        onClose: r.Z_,
        onSelect: d,
        children: [(0, i.jsxs)(l.rXV, {
            children: [O, x, T]
        }), (0, i.jsxs)(l.rXV, {
            children: [M, (0, i.jsx)(l.Drp, {
                id: "edit-gdm",
                label: v.intl.string(v.t["5Q9+/L"]),
                action: () => (0, g.U)(n.id, s.A.GROUP_DM_CONTEXT_MENU)
            })]
        }), (0, i.jsx)(l.rXV, {
            children: G
        }), (0, i.jsx)(l.rXV, {
            children: p
        }), (0, i.jsxs)(l.rXV, {
            children: [j, C]
        }), (0, i.jsx)(l.rXV, {
            children: y
        })]
    })
}, {
    object: _.ZSU.CONTEXT_MENU
}), [s.A.CONTEXT_MENU, s.A.GROUP_DM_MENU])