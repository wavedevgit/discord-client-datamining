/** chunk id: 277342 params = (module,exports,require) **/
n.d(t, {
    q: () => c
});
var r = n(64700),
    a = n(523875),
    i = n(270737),
    l = n(397927),
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
        m = (0, i.V)(d),
        A = (0, a.L)(d),
        _ = c ? m : A,
        v = t === o.BRT.POPOUT ? c ? e ? l.Ts3 : l.A4$ : e ? l.z0P : l.cNw : _.Component;
    return r.useMemo(() => ({
        ..._,
        Component: v
    }), [_, v])
}