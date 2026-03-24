/** chunk id: 738876 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(323073),
    r = n(861382),
    o = n(47167),
    c = n(31717),
    d = n(834942),
    u = n(186111),
    h = n(576705),
    A = n(994500),
    m = n(287809),
    p = n(203982),
    _ = n(518960),
    g = n(65593),
    f = n(698638),
    x = n(652215),
    C = n(985018);
let E = function(e) {
    let {
        className: t,
        style: n,
        channel: E,
        draftType: I
    } = e, [N, b] = s.useState(!0), S = (0, l.bG)([u.A], () => u.A.hasLayers()), T = (0, l.bG)([h.A], () => null != E && h.A.can(x.xBc.ATTACH_FILES, E), [E]), v = null != (0, l.bG)([r.A], () => r.A.getActiveCommand(E.id)), y = E.getGuildId(), j = I === c.C.FirstThreadMessage, R = (0, a.vL)(E), O = s.useMemo(() => !S && (E.isPrivate() && !E.isManaged() || null != y && !R && T && d.A.canChatInGuild(y)), [T, R, E, y, S]), L = j ? x.kvI.GUILD_THREADS_ONLY.has(E.type) ? C.intl.string(C.t.RBBLhL) : C.intl.string(C.t.gUx4eu) : N ? C.intl.format(C.t.dYP2Fc, {
        destination: (0, o.m1)(E, m.default, A.A, !0)
    }) : C.intl.string(C.t.h76ulG);
    return v || !O ? null : (0, i.jsx)(g.A, {
        className: t,
        style: n,
        title: L,
        description: j ? C.intl.string(C.t.lpgkzq) : C.intl.string(C.t.usQh4J),
        icons: f.ir,
        onDrop: e => {
            if (v) return !1;
            O && null != E && ((0, _.R)(e, E, I, {
                requireConfirm: N,
                origin: "drag_drop"
            }), p._.dispatchToLastSubscribed(x.jej.TEXTAREA_FOCUS))
        },
        onDragClear: () => b(!0),
        onDragOver: e => {
            if (v) return !1;
            j || e.shiftKey !== N || b(!e.shiftKey)
        }
    })
}