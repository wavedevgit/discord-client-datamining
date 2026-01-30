/** chunk id: 415299, original params: e,t,l (module,exports,require) **/
l.d(t, {
    v: () => u
});
var n = l(64700),
    r = l(508425),
    s = l(559949),
    a = l(631670),
    o = l(159001),
    i = l(207803),
    c = l(954571),
    d = l(652215);

function u(e) {
    let {
        hasChanges: t,
        selectedFontId: l,
        selectedEffectId: u,
        selectedColors: m,
        defaultColor: p,
        guildId: f,
        isTryItOut: g,
        onClose: _
    } = e;
    return n.useCallback(() => {
        if (t) {
            let e = m;
            u === r.z.SOLID && m.length > 0 && m[0] === p && (e = []);
            let t = {
                fontId: l,
                effectId: u,
                colors: e
            };
            null != f ? (0, o.mZ)(t) : g ? (0, i.EW)(t) : (0, a.dM)(t), c.default.track(d.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                font_name: s.x[l],
                effect_name: r.z[u],
                colors: m
            }), null == _ || _()
        }
    }, [t, l, u, m, p, _, f, g])
}