/** Chunk was on 77870 **/
/** chunk id: 738876, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(323073),
    a = n(861382),
    o = n(47167),
    c = n(31717),
    u = n(834942),
    d = n(186111),
    p = n(576705),
    h = n(994500),
    f = n(287809),
    g = n(203982),
    m = n(518960),
    b = n(65593),
    A = n(698638),
    y = n(652215),
    _ = n(985018);
let O = function(e) {
    let {
        className: t,
        style: n,
        channel: O,
        draftType: j
    } = e, [v, x] = l.useState(!0), E = (0, i.bG)([d.A], () => d.A.hasLayers()), C = (0, i.bG)([p.A], () => null != O && p.A.can(y.xBc.ATTACH_FILES, O), [O]), S = null != (0, i.bG)([a.A], () => a.A.getActiveCommand(O.id)), I = O.getGuildId(), N = j === c.C.FirstThreadMessage, T = (0, s.vL)(O), P = l.useMemo(() => !E && (O.isPrivate() && !O.isManaged() || null != I && !T && C && u.A.canChatInGuild(I)), [C, T, O, I, E]), w = N ? y.kvI.GUILD_THREADS_ONLY.has(O.type) ? _.intl.string(_.t.RBBLhL) : _.intl.string(_.t.gUx4eu) : v ? _.intl.format(_.t.dYP2Fc, {
        destination: (0, o.m1)(O, f.default, h.A, !0)
    }) : _.intl.string(_.t.h76ulG);
    return S || !P ? null : (0, r.jsx)(b.A, {
        className: t,
        style: n,
        title: w,
        description: N ? _.intl.string(_.t.lpgkzq) : _.intl.string(_.t.usQh4J),
        icons: A.ir,
        onDrop: e => {
            if (S) return !1;
            P && null != O && ((0, m.R)(e, O, j, {
                requireConfirm: v,
                origin: "drag_drop"
            }), g._.dispatchToLastSubscribed(y.jej.TEXTAREA_FOCUS))
        },
        onDragClear: () => x(!0),
        onDragOver: e => {
            if (S) return !1;
            N || e.shiftKey !== v || x(!e.shiftKey)
        }
    })
}