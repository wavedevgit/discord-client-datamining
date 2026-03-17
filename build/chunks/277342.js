/** chunk id: 277342 params = (module,exports,require) **/
n.d(t, {
    q: () => c
});
var r = n(64700),
    a = n(523875),
    l = n(270737),
    i = n(397927),
    s = n(267102),
    u = n(494783),
    o = n(652215);

function c(e) {
    let t = (0, s.Us)(),
        {
            activeVoice: n
        } = (0, u.f)(),
        c = null != n,
        d = e ? "unmute" : "mute",
        m = (0, l.V)(d),
        A = (0, a.L)(d),
        v = c ? m : A,
        _ = t === o.BRT.POPOUT ? c ? e ? i.Ts3 : i.A4$ : e ? i.z0P : i.cNw : v.Component;
    return r.useMemo(() => ({
        ...v,
        Component: _
    }), [v, _])
}