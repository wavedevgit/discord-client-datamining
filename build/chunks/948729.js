/** chunk id: 948729 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    l = n(64700),
    r = n(110259),
    s = n(417597),
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
    } = e, [r, a, o] = (0, s.yK)([u.A], () => [u.A.getApplication(t), u.A.isFetchingApplication(t), u.A.didFetchingApplicationFail(t)], [t]);
    return (l.useEffect(() => {
        null != r || a || o || c.Ay.fetchApplication(t)
    }, [r, a, o, t]), null != r && (0, _.Ie)({
        customInstallUrl: r.customInstallUrl,
        installParams: r.installParams,
        integrationTypesConfig: r.integrationTypesConfig
    })) ? (0, i.jsx)(p, {
        application: r,
        message: n
    }) : null
}

function p(e) {
    let {
        application: t,
        message: n
    } = e, s = l.useCallback(() => {
        (0, d.x)({
            type: r.ImpressionTypes.VIEW,
            name: r.ImpressionNames.APP_OAUTH2_LINK_EMBED,
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
            onView: s,
            message: n
        })
    })
}