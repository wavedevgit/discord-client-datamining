/** chunk id: 738876, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
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
    h = n(576705),
    p = n(994500),
    g = n(287809),
    f = n(203982),
    m = n(518960),
    b = n(65593),
    A = n(698638),
    y = n(652215),
    O = n(985018);
let _ = function(e) {
    let {
        className: t,
        style: n,
        channel: _,
        draftType: j
    } = e, [x, v] = l.useState(!0), E = (0, i.bG)([d.A], () => d.A.hasLayers()), C = (0, i.bG)([h.A], () => null != _ && h.A.can(y.xBc.ATTACH_FILES, _), [_]), S = null != (0, i.bG)([a.A], () => a.A.getActiveCommand(_.id)), I = _.getGuildId(), N = j === c.C.FirstThreadMessage, T = (0, s.vL)(_), P = l.useMemo(() => !E && (_.isPrivate() && !_.isManaged() || null != I && !T && C && u.A.canChatInGuild(I)), [C, T, _, I, E]), w = N ? y.kvI.GUILD_THREADS_ONLY.has(_.type) ? O.intl.string(O.t.RBBLhL) : O.intl.string(O.t.gUx4eu) : x ? O.intl.format(O.t.dYP2Fc, {
        destination: (0, o.m1)(_, g.default, p.A, !0)
    }) : O.intl.string(O.t.h76ulG);
    return S || !P ? null : (0, r.jsx)(b.A, {
        className: t,
        style: n,
        title: w,
        description: N ? O.intl.string(O.t.lpgkzq) : O.intl.string(O.t.usQh4J),
        icons: A.ir,
        onDrop: e => {
            if (S) return !1;
            P && null != _ && ((0, m.R)(e, _, j, {
                requireConfirm: x,
                origin: "drag_drop"
            }), f._.dispatchToLastSubscribed(y.jej.TEXTAREA_FOCUS))
        },
        onDragClear: () => v(!0),
        onDragOver: e => {
            if (S) return !1;
            N || e.shiftKey !== x || v(!e.shiftKey)
        }
    })
}