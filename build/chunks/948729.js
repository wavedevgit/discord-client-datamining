/** chunk id: 948729 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    r = n(64700),
    l = n(110259),
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
    } = e, [l, s, o] = (0, a.yK)([u.A], () => [u.A.getApplication(t), u.A.isFetchingApplication(t), u.A.didFetchingApplicationFail(t)], [t]);
    return (r.useEffect(() => {
        null != l || s || o || c.Ay.fetchApplication(t)
    }, [l, s, o, t]), null != l && (0, m.Ie)({
        customInstallUrl: l.customInstallUrl,
        installParams: l.installParams,
        integrationTypesConfig: l.integrationTypesConfig
    })) ? (0, i.jsx)(p, {
        application: l,
        message: n
    }) : null
}

function p(e) {
    let {
        application: t,
        message: n
    } = e, a = r.useCallback(() => {
        (0, d.x)({
            type: l.ImpressionTypes.VIEW,
            name: l.ImpressionNames.APP_OAUTH2_LINK_EMBED,
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