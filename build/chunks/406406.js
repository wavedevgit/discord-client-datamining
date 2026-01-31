/** chunk id: 406406, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => O
});
var l = n(627968);
n(64700);
var r = n(397927),
    i = n(442433),
    u = n(820284),
    o = n(50268),
    a = n(247191),
    c = n(971961),
    s = n(753333),
    d = n(544255),
    g = n(28314),
    E = n(24661),
    f = n(288357),
    A = n(587018),
    y = n(675623),
    p = n(174966),
    b = n(652215),
    v = n(985018);

function O(t) {
    let {
        guildEventId: e,
        recurrenceId: n,
        channel: O,
        guild: h,
        analyticsContext: _,
        isRecurrenceItem: m = !1,
        onSelect: T,
        target: j
    } = t, S = (0, A.A)({
        guildEventId: e,
        recurrenceId: n,
        guild: h,
        channel: O
    }), w = (0, d.A)({
        guildEventId: e,
        recurrenceId: n,
        guild: h,
        channel: O
    }), D = (0, g.A)({
        guildEventId: e,
        guild: h,
        channel: O,
        recurrenceId: n,
        isRecurrenceItem: m
    }), N = (0, E.A)(e, h, O), P = (0, p.A)(e, h, O), G = (0, s.A)(e, h.id, n), I = (0, c.A)(e, j), C = (0, f.A)(e), x = (0, o.A)({
        id: e,
        label: v.intl.string(v.t.WZwPO4)
    }), R = (0, o.A)({
        id: n,
        label: v.intl.string(v.t.NZRGQo)
    }), L = (0, a.A)(e, h.id, O, n), U = (0, y.A)({
        guildEventId: e,
        guildId: h.id,
        recurrenceId: n
    });
    return (0, l.jsx)(u.A, {
        context: _,
        object: b.ZSU.CONTEXT_MENU,
        children: (0, l.jsxs)(r.W1t, {
            "data-menu-migrated-auto": !0,
            navId: "user-context",
            onClose: i.Z_,
            "aria-label": v.intl.string(v.t.liqwPJ),
            onSelect: T,
            children: [(0, l.jsxs)(r.rXV, {
                children: [L, !m && P, D, !m && N, w, S, G, m && U]
            }), !m && (0, l.jsx)(r.rXV, {
                children: C
            }), null != I && (0, l.jsx)(r.rXV, {
                children: I
            }), (0, l.jsxs)(r.rXV, {
                children: [x, R]
            })]
        })
    })
}