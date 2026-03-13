/** chunk id: 810845 params = (module,exports,require) **/
t.d(n, {
    A: () => p
});
var l = t(627968),
    i = t(64700),
    r = t(311907),
    a = t(397927),
    s = t(367513),
    d = t(401843),
    c = t(574172),
    o = t(954571),
    u = t(313961),
    A = t(806931),
    h = t(652215),
    g = t(985018);

function p(e, n) {
    let t = (0, r.bG)([u.A], () => u.A.getParticipant(e, n)),
        p = (0, r.bG)([u.A], () => u.A.isParticipantPoppedOut(e, n)),
        f = i.useCallback(() => {
            null != t && ((0, A.Ay)(t) && (0, d.A9)(t.stream, {
                forceMultiple: !0
            }), s.A.popoutParticipant(e, t.id), c.openCallTilePopout(e, t.id), o.default.track(h.HAw.CALL_TILE_POPPED_OUT, {
                channel_id: e,
                tile_type: (0, A.Ay)(t) ? "stream" : "user"
            }))
        }, [t, e]);
    return p || null == t || t.type === A.lp.ACTIVITY ? null : (0, l.jsx)(a.Drp, {
        id: "call-tile-popout",
        label: (0, A.Ay)(t) ? g.intl.string(g.t.Cm4aDQ) : null != t.streamId ? g.intl.string(g.t["8Xyas9"]) : g.intl.string(g.t.ifpl2s),
        action: f,
        icon: a.tfB,
        leadingAccessory: {
            type: "icon",
            icon: a.tfB
        }
    })
}