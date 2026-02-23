/** chunk id: 415299, original params: e,t,s (module,exports,require) **/
s.d(t, {
    v: () => u
});
var l = s(64700),
    a = s(508425),
    n = s(559949),
    i = s(631670),
    r = s(159001),
    o = s(207803),
    d = s(954571),
    c = s(652215);

function u(e) {
    let {
        hasChanges: t,
        selectedFontId: s,
        selectedEffectId: u,
        selectedColors: m,
        defaultColor: _,
        guildId: x,
        isTryItOut: h,
        onClose: p
    } = e;
    return l.useCallback(() => {
        if (t) {
            let e = m;
            u === a.z.SOLID && m.length > 0 && m[0] === _ && (e = []);
            let t = {
                fontId: s,
                effectId: u,
                colors: e
            };
            null != x ? (0, r.mZ)(t) : h ? (0, o.EW)(t) : (0, i.dM)(t), d.default.track(c.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                font_name: n.x[s],
                effect_name: a.z[u],
                colors: m
            }), p?.()
        }
    }, [t, s, u, m, _, p, x, h])
}