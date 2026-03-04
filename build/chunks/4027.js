/** chunk id: 4027, original params: n,t,e (module,exports,require) **/
e.d(t, {
    default: () => j
});
var i = e(627968);
e(64700);
var l = e(397927),
    r = e(442433),
    a = e(847767),
    d = e(358367),
    s = e(468389),
    o = e(793574),
    c = e(50268),
    u = e(133238),
    h = e(795144),
    A = e(73028),
    g = e(961350),
    f = e(605691),
    b = e(848977),
    _ = e(995102),
    m = e(652215),
    p = e(985018);
let j = (0, d.A)((0, a.A)(function(n) {
    let {
        channel: t,
        selected: a,
        onSelect: d
    } = n, m = t.isOwner(g.default.getId()), j = (0, b.A)(t), v = (0, _.Ay)(t), O = (0, f.A)(t, a), x = (0, c.A)({
        id: t.id,
        label: p.intl.string(p.t.gFHI3k)
    }), y = (0, s.A)(t), T = (0, u.m)(t), C = (0, u.y)(t), G = (0, h.A)(t), U = m ? (0, i.jsx)(l.Drp, {
        id: "instant-invites",
        label: p.intl.string(p.t.ngRFjZ),
        action: () => (0, l.mMO)(async () => {
            let {
                default: n
            } = await e.e("48574").then(e.bind(e, 830541));
            return e => (0, i.jsx)(n, {
                channelId: t.id,
                ...e
            })
        })
    }) : null;
    return null == t || t.isManaged() ? null : (0, i.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "gdm-context",
        "aria-label": p.intl.string(p.t.Xm41aV),
        onClose: r.Z_,
        onSelect: d,
        children: [(0, i.jsxs)(l.rXV, {
            children: [j, T, G]
        }), (0, i.jsxs)(l.rXV, {
            children: [U, (0, i.jsx)(l.Drp, {
                id: "edit-gdm",
                label: p.intl.string(p.t["5Q9+/L"]),
                action: () => (0, A.U)(t.id, o.A.GROUP_DM_CONTEXT_MENU)
            })]
        }), (0, i.jsx)(l.rXV, {
            children: y
        }), (0, i.jsx)(l.rXV, {
            children: v
        }), (0, i.jsxs)(l.rXV, {
            children: [C, O]
        }), (0, i.jsx)(l.rXV, {
            children: x
        })]
    })
}, {
    object: m.ZSU.CONTEXT_MENU
}), [o.A.CONTEXT_MENU, o.A.GROUP_DM_MENU])