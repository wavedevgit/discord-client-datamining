/** chunk id: 277342, original params: e,t,n (module,exports,require) **/
n.d(t, {
    q: () => d
});
var i = n(64700),
    l = n(523875),
    r = n(270737),
    s = n(397927),
    a = n(267102),
    o = n(494783),
    u = n(652215);

function d(e) {
    let t = (0, a.Us)(),
        {
            activeVoice: n
        } = (0, o.f)(),
        d = null != n,
        c = e ? "unmute" : "mute",
        h = (0, r.V)(c),
        m = (0, l.L)(c),
        g = d ? h : m,
        p = t === u.BRT.POPOUT ? d ? e ? s.Ts3 : s.A4$ : e ? s.z0P : s.cNw : g.Component;
    return i.useMemo(() => ({
        ...g,
        Component: p
    }), [g, p])
}