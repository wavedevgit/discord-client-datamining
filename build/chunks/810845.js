/** Chunk was on 84841 **/
/** chunk id: 810845, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var l = n(627968),
    i = n(64700),
    r = n(311907),
    a = n(397927),
    d = n(367513),
    c = n(401843),
    u = n(574172),
    o = n(911900),
    s = n(313961),
    A = n(806931),
    g = n(985018);

function p(e, t) {
    let {
        enabled: n
    } = o.A.useConfig({
        location: "useCallTilePopoutItem"
    }), p = (0, r.bG)([s.A], () => s.A.getParticipant(e, t)), b = (0, r.bG)([s.A], () => s.A.isParticipantPoppedOut(e, t)), f = i.useCallback(() => {
        null != p && ((0, A.Ay)(p) && (0, c.A9)(p.stream, {
            forceMultiple: !0
        }), d.A.popoutParticipant(e, p.id), u.openCallTilePopout(e, p.id))
    }, [p, e]);
    return b || null == p || !n || p.type === A.lp.ACTIVITY ? null : (0, l.jsx)(a.Drp, {
        id: "call-tile-popout",
        label: (0, A.Ay)(p) ? g.intl.string(g.t.Cm4aDQ) : null != p.streamId ? g.intl.string(g.t["8Xyas9"]) : g.intl.string(g.t.ifpl2s),
        action: f,
        icon: a.tfB
    })
}