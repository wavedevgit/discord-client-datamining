/** chunk id: 738876, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(323073),
    a = n(861382),
    o = n(47167),
    c = n(31717),
    d = n(834942),
    u = n(186111),
    h = n(576705),
    A = n(994500),
    p = n(287809),
    g = n(203982),
    m = n(518960),
    _ = n(65593),
    f = n(698638),
    x = n(652215),
    C = n(985018);
let E = function(e) {
    let {
        className: t,
        style: n,
        channel: E,
        draftType: I
    } = e, [N, b] = s.useState(!0), S = (0, l.bG)([u.A], () => u.A.hasLayers()), T = (0, l.bG)([h.A], () => null != E && h.A.can(x.xBc.ATTACH_FILES, E), [E]), y = null != (0, l.bG)([a.A], () => a.A.getActiveCommand(E.id)), v = E.getGuildId(), j = I === c.C.FirstThreadMessage, R = (0, r.vL)(E), O = s.useMemo(() => !S && (E.isPrivate() && !E.isManaged() || null != v && !R && T && d.A.canChatInGuild(v)), [T, R, E, v, S]), L = j ? x.kvI.GUILD_THREADS_ONLY.has(E.type) ? C.intl.string(C.t.RBBLhL) : C.intl.string(C.t.gUx4eu) : N ? C.intl.format(C.t.dYP2Fc, {
        destination: (0, o.m1)(E, p.default, A.A, !0)
    }) : C.intl.string(C.t.h76ulG);
    return y || !O ? null : (0, i.jsx)(_.A, {
        className: t,
        style: n,
        title: L,
        description: j ? C.intl.string(C.t.lpgkzq) : C.intl.string(C.t.usQh4J),
        icons: f.ir,
        onDrop: e => {
            if (y) return !1;
            O && null != E && ((0, m.R)(e, E, I, {
                requireConfirm: N,
                origin: "drag_drop"
            }), g._.dispatchToLastSubscribed(x.jej.TEXTAREA_FOCUS))
        },
        onDragClear: () => b(!0),
        onDragOver: e => {
            if (y) return !1;
            j || e.shiftKey !== N || b(!e.shiftKey)
        }
    })
}