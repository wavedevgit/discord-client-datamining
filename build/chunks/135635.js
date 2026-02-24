/** chunk id: 135635, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => u
});
var n = i(64700),
    o = i(158954),
    s = i(311907),
    a = i(827734),
    d = i(387755),
    r = i(313961),
    l = i(325909),
    _ = i(994500),
    c = i(806931),
    p = i(985018);

function u(e) {
    let {
        user: t,
        channel: i,
        location: u
    } = e, b = (0, l.oP)(t, u, i.id), h = (0, l.lQ)(t, u, i), C = t.bot || t.system || t.isProvisional, g = (0, s.bG)([r.A], () => r.A.getParticipant(i.id, t.id)), v = null == g, A = null != g && g.type === c.lp.USER && g.ringing, S = (0, s.bG)([_.A], () => _.A.isFriend(t.id)), R = !b && (!h || C), E = (0, n.useCallback)(() => {
        if (b) {
            if (v) return void d.A.ring(i.id, [t.id], u);
            A && d.A.stopRinging(i.id, [t.id])
        }
    }, [v, A, b, u, i.id, t.id]);
    return {
        iconColor: A ? a.A.colors.ICON_FEEDBACK_CRITICAL : void 0,
        icon: A ? o.zWQ : o._jp,
        tooltipText: S ? v ? p.intl.string(p.t["3Hv9qQ"]) : A ? p.intl.string(p.t.ygslb0) : null : p.intl.string(p.t.TGqF9g),
        disabled: !b,
        shouldHideButton: R,
        onClick: E
    }
}