/** chunk id: 810845, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(367513),
    o = n(401843),
    d = n(574172),
    u = n(911900),
    c = n(313961),
    A = n(806931),
    f = n(985018);

function g(e, t) {
    let {
        enabled: n
    } = u.A.useConfig({
        location: "useCallTilePopoutItem"
    }), g = (0, l.bG)([c.A], () => c.A.getParticipant(e, t)), b = (0, l.bG)([c.A], () => c.A.isParticipantPoppedOut(e, t)), p = r.useCallback(() => {
        null != g && ((0, A.Ay)(g) && (0, o.A9)(g.stream, {
            forceMultiple: !0
        }), s.A.popoutParticipant(e, g.id), d.openCallTilePopout(e, g.id))
    }, [g, e]);
    return b || null == g || !n || g.type === A.lp.ACTIVITY ? null : (0, i.jsx)(a.Drp, {
        id: "call-tile-popout",
        label: (0, A.Ay)(g) ? f.intl.string(f.t.Cm4aDQ) : null != g.streamId ? f.intl.string(f.t["8Xyas9"]) : f.intl.string(f.t.ifpl2s),
        action: p,
        icon: a.tfB,
        leadingAccessory: {
            type: "icon",
            icon: a.tfB
        }
    })
}