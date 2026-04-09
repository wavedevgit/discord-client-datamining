/** chunk id: 415299 params = (module,exports,require) **/
a.d(t, {
    v: () => d
});
var n = a(64700),
    s = a(508425),
    l = a(559949),
    r = a(207803),
    i = a(84540),
    o = a(954571),
    c = a(652215);

function d(e) {
    let {
        hasChanges: t,
        selectedFontId: a,
        selectedEffectId: d,
        selectedColors: u,
        defaultColor: m,
        guildId: _,
        isTryItOut: p,
        onClose: h
    } = e;
    return n.useCallback(() => {
        if (t) {
            let e = u;
            d === s.z.SOLID && u.length > 0 && u[0] === m && (e = []);
            let t = {
                fontId: a,
                effectId: d,
                colors: e
            };
            p ? (0, r.EW)(t) : (0, i.p)({
                guildId: _,
                displayNameStyles: t
            }), o.default.track(c.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                font_name: l.x[a],
                effect_name: s.z[d],
                colors: u
            }), h?.()
        }
    }, [t, a, d, u, m, h, _, p])
}