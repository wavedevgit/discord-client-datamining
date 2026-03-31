/** chunk id: 135635 params = (module,exports,require) **/
i.d(e, {
    A: () => h
});
var n = i(64700),
    s = i(158954),
    o = i(311907),
    a = i(827734),
    d = i(387755),
    l = i(313961),
    r = i(325909),
    _ = i(290863),
    u = i(994500),
    c = i(806931),
    p = i(818348),
    b = i(985018);

function h(t) {
    let {
        user: e,
        channel: i,
        location: h
    } = t, C = (0, r.oP)(e, h, i.id), g = (0, r.lQ)(e, h, i), v = e.bot || e.system || e.isProvisional, A = (0, o.bG)([l.A], () => l.A.getParticipant(i.id, e.id)), S = null == A, R = null != A && A.type === c.lp.USER && A.ringing, E = (0, o.bG)([u.A], () => u.A.isFriend(e.id)), w = (0, o.bG)([_.A], () => _.A.getStatus(e.id) === p.cl.DND && i?.guild_id != null), m = !C && (!g || v), O = (0, n.useCallback)(() => {
        if (C) {
            if (S) return void d.A.ring(i.id, [e.id], h);
            R && d.A.stopRinging(i.id, [e.id])
        }
    }, [S, R, C, h, i.id, e.id]);
    return {
        iconColor: R ? a.A.colors.ICON_FEEDBACK_CRITICAL : void 0,
        icon: R ? s.zWQ : s._jp,
        tooltipText: E ? w ? b.intl.string(b.t.jaNpQH) : S ? b.intl.string(b.t["3Hv9qQ"]) : R ? b.intl.string(b.t.ygslb0) : null : b.intl.string(b.t.TGqF9g),
        disabled: !C,
        shouldHideButton: m,
        onClick: O
    }
}