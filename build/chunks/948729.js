/** chunk id: 948729 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    l = n(64700),
    r = n(110259),
    a = n(417597),
    s = n(793574),
    o = n(688810),
    d = n(139286),
    c = n(627363),
    u = n(587895),
    _ = n(485724),
    m = n(204776);

function h(e) {
    let {
        applicationId: t,
        message: n
    } = e, [r, s, o] = (0, a.yK)([u.A], () => [u.A.getApplication(t), u.A.isFetchingApplication(t), u.A.didFetchingApplicationFail(t)], [t]);
    return (l.useEffect(() => {
        null != r || s || o || c.Ay.fetchApplication(t)
    }, [r, s, o, t]), null != r && (0, m.Ie)({
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
    } = e, a = l.useCallback(() => {
        (0, d.x)({
            type: r.ImpressionTypes.VIEW,
            name: r.ImpressionNames.APP_OAUTH2_LINK_EMBED,
            properties: {
                application_id: t.id
            }
        })
    }, [t.id]), {
        analyticsLocations: c
    } = (0, o.Ay)(s.A.APP_OAUTH2_LINK_EMBED);
    return (0, i.jsx)(o.f5, {
        value: c,
        children: (0, i.jsx)(_.W, {
            app: t,
            linkType: _.J.OAUTH,
            onView: a,
            message: n
        })
    })
}