/** Chunk was on 84841 **/
/** chunk id: 810845, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => p
});
var n = l(627968),
    i = l(64700),
    r = l(311907),
    o = l(397927),
    a = l(367513),
    c = l(401843),
    d = l(574172),
    s = l(911900),
    u = l(313961),
    A = l(806931),
    g = l(985018);

function p(e, t) {
    let {
        enabled: l
    } = s.A.useConfig({
        location: "useCallTilePopoutItem"
    }), p = (0, r.bG)([u.A], () => u.A.getParticipant(e, t)), b = (0, r.bG)([u.A], () => u.A.isParticipantPoppedOut(e, t)), f = i.useCallback(() => {
        null != p && ((0, A.Ay)(p) && (0, c.A9)(p.stream, {
            forceMultiple: !0
        }), a.A.popoutParticipant(e, p.id), d.openCallTilePopout(e, p.id))
    }, [p, e]);
    return b || null == p || !l || p.type === A.lp.ACTIVITY ? null : (0, n.jsx)(o.Drp, {
        id: "call-tile-popout",
        label: (0, A.Ay)(p) ? g.intl.string(g.t.Cm4aDQ) : null != p.streamId ? g.intl.string(g.t["8Xyas9"]) : g.intl.string(g.t.ifpl2s),
        action: f,
        icon: o.tfB,
        leadingAccessory: {
            type: "icon",
            icon: o.tfB
        }
    })
}