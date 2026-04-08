/** chunk id: 948729 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    l = n(64700),
    s = n(110259),
    r = n(417597),
    a = n(793574),
    o = n(688810),
    d = n(139286),
    c = n(627363),
    u = n(587895),
    m = n(485724),
    _ = n(204776);

function h(e) {
    let {
        applicationId: t,
        message: n
    } = e, [s, a, o] = (0, r.yK)([u.A], () => [u.A.getApplication(t), u.A.isFetchingApplication(t), u.A.didFetchingApplicationFail(t)], [t]);
    return (l.useEffect(() => {
        null != s || a || o || c.Ay.fetchApplication(t)
    }, [s, a, o, t]), null != s && (0, _.Ie)({
        customInstallUrl: s.customInstallUrl,
        installParams: s.installParams,
        integrationTypesConfig: s.integrationTypesConfig
    })) ? (0, i.jsx)(p, {
        application: s,
        message: n
    }) : null
}

function p(e) {
    let {
        application: t,
        message: n
    } = e, r = l.useCallback(() => {
        (0, d.x)({
            type: s.ImpressionTypes.VIEW,
            name: s.ImpressionNames.APP_OAUTH2_LINK_EMBED,
            properties: {
                application_id: t.id
            }
        })
    }, [t.id]), {
        analyticsLocations: c
    } = (0, o.Ay)(a.A.APP_OAUTH2_LINK_EMBED);
    return (0, i.jsx)(o.f5, {
        value: c,
        children: (0, i.jsx)(m.W, {
            app: t,
            linkType: m.J.OAUTH,
            onView: r,
            message: n
        })
    })
}