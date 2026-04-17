/** chunk id: 537174 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(64700),
    l = n(317097),
    a = n(311907),
    s = n(397927),
    r = n(775602),
    u = n(521427),
    o = n(381941);

function c(e) {
    let t = (0, s.rdh)(s.LU0.colors.BACKGROUND_BASE_LOWER).hex(),
        n = (0, a.bG)([r.A], () => r.A.desaturateUserColors ? r.A.saturation : 1);
    return i.useMemo(() => {
        if (null == e) return;
        let i = (0, u.Fy)(e, t, n, o.oe).hex();
        return {
            "--custom-guild-official-message": (0, l.$k)(e, !0),
            "--custom-guild-official-message-hsl": (0, l.BK)(e, !0),
            "--custom-guild-official-message-alpha": o.cZ,
            "--custom-guild-official-message-selected-alpha": o.oe,
            "--custom-guild-official-message-text": i
        }
    }, [e, t, n])
}