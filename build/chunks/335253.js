/** chunk id: 335253 params = (module,exports,require) **/
n.d(t, {
    default: () => x
});
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(442433),
    r = n(847767),
    d = n(358367),
    s = n(793574),
    o = n(50268),
    u = n(235052),
    c = n(222311),
    A = n(237749),
    g = n(961350),
    b = n(661455),
    f = n(291247),
    E = n(652215),
    m = n(985018);
let x = (0, d.A)((0, r.A)(function(e) {
    let {
        user: t,
        channel: n,
        guildId: r,
        onSelect: d,
        onInteraction: s,
        context: E
    } = e, x = n.id, h = t.isNonUserBot(), C = t.id === g.default.getId(), S = (0, c.A)(t), j = (0, A.A)(t, r, x), v = (0, b.n)({
        isOwnSettings: C,
        userId: t.id,
        channelId: x,
        guildId: r,
        context: E
    }), [I, p] = (0, b.O)(t, x, r), _ = (0, f.A)(t, r, x), M = (0, o.A)({
        id: t.id,
        label: m.intl.string(m.t["/AXYnE"])
    }), y = (0, u.A)(t.id, n);
    return (0, i.jsx)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "user-context",
        onClose: a.Z_,
        "aria-label": m.intl.string(m.t.liqwPJ),
        onSelect: d,
        onInteraction: s,
        variant: "fixed",
        children: !h && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(l.rXV, {
                children: [S, j]
            }), y, v, !C && (0, i.jsx)(l.rXV, {
                children: (0, i.jsxs)(l.Drp, {
                    id: "more-options",
                    label: m.intl.string(m.t.PdRCRg),
                    children: [I, (0, i.jsx)(l.rXV, {
                        children: _
                    }), p]
                })
            }), C && (0, i.jsx)(l.rXV, {
                children: M
            })]
        })
    })
}, {
    object: E.ZSU.CONTEXT_MENU
}), [s.A.VOICE_USER])