/** chunk id: 574660 params = (module,exports,require) **/
n.d(t, {
    F: () => C,
    t: () => E
});
var i = n(64700),
    r = n(311907),
    a = n(735991),
    l = n(297486),
    s = n(837057),
    o = n(310419),
    d = n(734057),
    c = n(576705),
    u = n(309010),
    _ = n(967198),
    m = n(692848),
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
        integrationTypesConfig: l
    } = e, s = (0, h.Ie)({
        customInstallUrl: n,
        installParams: i,
        integrationTypesConfig: l
    }), o = (0, r.bG)([_.A], () => _.A.getGuildId() ?? void 0), m = (0, r.bG)([d.A, c.A, u.A], () => {
        let e = d.A.getChannel(u.A.getChannelId());
        return null != e && (e.isPrivate() || c.A.can(g.xBc.SEND_MESSAGES, e))
    }, []), p = (0, a.V1)(e, o) && m;
    return {
        isDiscoverable: t,
        customInstallUrl: n,
        installParams: i,
        integrationTypesConfig: l,
        canViewApp: t || p,
        canOpenAppLauncher: p,
        isInstallable: s,
        selectedGuildId: o
    }
}

function C(e, t) {
    let {
        canViewApp: n,
        canOpenAppLauncher: r,
        isInstallable: a,
        customInstallUrl: d,
        installParams: c,
        integrationTypesConfig: u,
        selectedGuildId: _
    } = f(e);
    return i.useMemo(() => n ? () => {
        (t?.(), r) ? (0, l.hg)(e.id) : (0, s.transitionToGlobalDiscovery)({
            tab: A.GlobalDiscoveryTab.APPS,
            applicationId: e.id,
            newSessionState: {
                entrypoint: {
                    name: o.sW.APPLICATION_MESSAGE_EMBED
                }
            }
        })
    } : a ? () => {
        t?.(), (0, m.o)({
            applicationId: e.id,
            customInstallUrl: d,
            installParams: c,
            integrationTypesConfig: u,
            guildId: _,
            source: "app_message_embed"
        })
    } : void 0, [e.id, r, n, d, c, u, a, t, _])
}

function E(e) {
    let {
        canViewApp: t,
        isInstallable: n
    } = f(e), r = C(e);
    return i.useMemo(() => t && null != r ? {
        label: x.intl.string(x.t.hvVgAZ),
        trackingArea: p.kY.VIEW,
        onClick() {
            r()
        }
    } : n && null != r ? {
        label: x.intl.string(x.t.NgXl3C),
        trackingArea: p.kY.ADD_APP,
        onClick() {
            r()
        }
    } : void 0, [t, n, r])
}