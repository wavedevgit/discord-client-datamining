/** chunk id: 739836, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var l = n(627968),
    i = n(64700),
    a = n(582754),
    r = n(397927),
    o = n(736653),
    s = n(573648),
    c = n(58149),
    d = n(749403),
    u = n(954571),
    m = n(184952),
    h = n(652215),
    p = n(985018);

function x(e) {
    let {
        connection: t,
        guildId: n,
        location: x
    } = e, A = (0, o.Ay)(), g = (null != t.provider_id ? s.A.get(t.provider_id)?.name : null) ?? p.intl.string(p.t.NzCoRx), {
        hasConnection: f,
        canConnect: C,
        startConnection: j,
        loading: v
    } = (0, d.p)(t.provider_id), _ = i.useCallback(async () => {
        u.default.track(h.HAw.GUILD_ONBOARDING_CONNECTION_CLICKED, {
            ...(0, c.H$)(n),
            connection_type: "provider",
            provider_id: t.provider_id ?? void 0,
            location: x
        }), await j(x)
    }, [j, n, t.provider_id, x]), N = i.useMemo(() => {
        if (null != t.provider_id) {
            let e = s.A.get(t.provider_id),
                n = e?.icon != null ? (0, a.Mw)(A) ? e.icon.darkPNG : e.icon.lightPNG : null;
            if (null != n) return (0, l.jsx)("img", {
                src: n,
                alt: g,
                width: 40,
                height: 40
            })
        }
        return (0, l.jsx)(r.qYV, {
            size: "custom",
            width: 40,
            height: 40,
            color: "currentColor"
        })
    }, [t.provider_id, A, g]);
    return (0, l.jsx)(m.A, {
        displayName: g,
        description: t.description,
        icon: N,
        isLoading: v,
        isConnected: f,
        canConnect: C,
        onConnect: _
    })
}