/** chunk id: 574660 params = (module,exports,require) **/
n.d(t, {
    F: () => C,
    t: () => E
});
var i = n(64700),
    l = n(311907),
    s = n(735991),
    r = n(297486),
    a = n(837057),
    o = n(310419),
    d = n(734057),
    c = n(576705),
    u = n(309010),
    m = n(967198),
    _ = n(692848),
    h = n(204776),
    p = n(354287),
    g = n(652215),
    A = n(488995),
    x = n(985018);

function f(e) {
    let {
        isDiscoverable: t,
        customInstallUrl: n,
        installParams: i,
        integrationTypesConfig: r
    } = e, a = (0, h.Ie)({
        customInstallUrl: n,
        installParams: i,
        integrationTypesConfig: r
    }), o = (0, l.bG)([m.A], () => m.A.getGuildId() ?? void 0), _ = (0, l.bG)([d.A, c.A, u.A], () => {
        let e = d.A.getChannel(u.A.getChannelId());
        return null != e && (e.isPrivate() || c.A.can(g.xBc.SEND_MESSAGES, e))
    }, []), p = (0, s.V1)(e, o) && _;
    return {
        isDiscoverable: t,
        customInstallUrl: n,
        installParams: i,
        integrationTypesConfig: r,
        canViewApp: t || p,
        canOpenAppLauncher: p,
        isInstallable: a,
        selectedGuildId: o
    }
}

function C(e, t) {
    let {
        canViewApp: n,
        canOpenAppLauncher: l,
        isInstallable: s,
        customInstallUrl: d,
        installParams: c,
        integrationTypesConfig: u,
        selectedGuildId: m
    } = f(e);
    return i.useMemo(() => n ? () => {
        (t?.(), l) ? (0, r.hg)(e.id) : (0, a.transitionToGlobalDiscovery)({
            tab: A.GlobalDiscoveryTab.APPS,
            applicationId: e.id,
            newSessionState: {
                entrypoint: {
                    name: o.sW.APPLICATION_MESSAGE_EMBED
                }
            }
        })
    } : s ? () => {
        t?.(), (0, _.o)({
            applicationId: e.id,
            customInstallUrl: d,
            installParams: c,
            integrationTypesConfig: u,
            guildId: m,
            source: "app_message_embed"
        })
    } : void 0, [e.id, l, n, d, c, u, s, t, m])
}

function E(e) {
    let {
        canViewApp: t,
        isInstallable: n
    } = f(e), l = C(e);
    return i.useMemo(() => t && null != l ? {
        label: x.intl.string(x.t.hvVgAZ),
        trackingArea: p.kY.VIEW,
        onClick() {
            l()
        }
    } : n && null != l ? {
        label: x.intl.string(x.t.NgXl3C),
        trackingArea: p.kY.ADD_APP,
        onClick() {
            l()
        }
    } : void 0, [t, n, l])
}