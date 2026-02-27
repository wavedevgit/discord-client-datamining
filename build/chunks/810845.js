/** chunk id: 810845, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => f
});
var l = t(627968),
    i = t(64700),
    a = t(311907),
    r = t(397927),
    s = t(367513),
    d = t(401843),
    o = t(574172),
    c = t(954571),
    u = t(911900),
    A = t(313961),
    h = t(806931),
    g = t(652215),
    p = t(985018);

function f(e, n) {
    let {
        enabled: t
    } = u.A.useConfig({
        location: "useCallTilePopoutItem"
    }), f = (0, a.bG)([A.A], () => A.A.getParticipant(e, n)), I = (0, a.bG)([A.A], () => A.A.isParticipantPoppedOut(e, n)), m = i.useCallback(() => {
        null != f && ((0, h.Ay)(f) && (0, d.A9)(f.stream, {
            forceMultiple: !0
        }), s.A.popoutParticipant(e, f.id), o.openCallTilePopout(e, f.id), c.default.track(g.HAw.CALL_TILE_POPPED_OUT, {
            channel_id: e,
            tile_type: (0, h.Ay)(f) ? "stream" : "user"
        }))
    }, [f, e]);
    return I || null == f || !t || f.type === h.lp.ACTIVITY ? null : (0, l.jsx)(r.Drp, {
        id: "call-tile-popout",
        label: (0, h.Ay)(f) ? p.intl.string(p.t.Cm4aDQ) : null != f.streamId ? p.intl.string(p.t["8Xyas9"]) : p.intl.string(p.t.ifpl2s),
        action: m,
        icon: r.tfB,
        leadingAccessory: {
            type: "icon",
            icon: r.tfB
        }
    })
}