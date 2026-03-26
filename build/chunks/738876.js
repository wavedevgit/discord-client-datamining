/** chunk id: 738876 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
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
    _ = n(203982),
    p = n(518960),
    g = n(65593),
    f = n(698638),
    x = n(652215),
    E = n(985018);
let C = function(e) {
    let {
        className: t,
        style: n,
        channel: C,
        draftType: I
    } = e, [N, b] = s.useState(!0), S = (0, l.bG)([u.A], () => u.A.hasLayers()), T = (0, l.bG)([h.A], () => null != C && h.A.can(x.xBc.ATTACH_FILES, C), [C]), v = null != (0, l.bG)([r.A], () => r.A.getActiveCommand(C.id)), y = C.getGuildId(), j = I === c.C.FirstThreadMessage, R = (0, a.vL)(C), O = s.useMemo(() => !S && (C.isPrivate() && !C.isManaged() || null != y && !R && T && d.A.canChatInGuild(y)), [T, R, C, y, S]), L = j ? x.kvI.GUILD_THREADS_ONLY.has(C.type) ? E.intl.string(E.t.RBBLhL) : E.intl.string(E.t.gUx4eu) : N ? E.intl.format(E.t.dYP2Fc, {
        destination: (0, o.m1)(C, m.default, A.A, !0)
    }) : E.intl.string(E.t.h76ulG);
    return v || !O ? null : (0, i.jsx)(g.A, {
        className: t,
        style: n,
        title: L,
        description: j ? E.intl.string(E.t.lpgkzq) : E.intl.string(E.t.usQh4J),
        icons: f.ir,
        onDrop: e => {
            if (v) return !1;
            O && null != C && ((0, p.R)(e, C, I, {
                requireConfirm: N,
                origin: "drag_drop"
            }), _._.dispatchToLastSubscribed(x.jej.TEXTAREA_FOCUS))
        },
        onDragClear: () => b(!0),
        onDragOver: e => {
            if (v) return !1;
            j || e.shiftKey !== N || b(!e.shiftKey)
        }
    })
}