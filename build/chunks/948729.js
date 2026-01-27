/** Chunk was on 92917 **/
/** chunk id: 948729, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(110259),
    a = n(417597),
    s = n(793574),
    o = n(688810),
    c = n(139286),
    u = n(627363),
    d = n(587895),
    p = n(485724),
    m = n(204776);

function f(e) {
    let {
        applicationId: t,
        message: n
    } = e, [l, s, o] = (0, a.yK)([d.A], () => [d.A.getApplication(t), d.A.isFetchingApplication(t), d.A.didFetchingApplicationFail(t)], [t]);
    return (i.useEffect(() => {
        null != l || s || o || u.Ay.fetchApplication(t)
    }, [l, s, o, t]), null != l && (0, m.Ie)({
        customInstallUrl: l.customInstallUrl,
        installParams: l.installParams,
        integrationTypesConfig: l.integrationTypesConfig
    })) ? (0, r.jsx)(g, {
        application: l,
        message: n
    }) : null
}

function g(e) {
    let {
        application: t,
        message: n
    } = e, a = i.useCallback(() => {
        (0, c.x)({
            type: l.ImpressionTypes.VIEW,
            name: l.ImpressionNames.APP_OAUTH2_LINK_EMBED,
            properties: {
                application_id: t.id
            }
        })
    }, [t.id]), {
        analyticsLocations: u
    } = (0, o.Ay)(s.A.APP_OAUTH2_LINK_EMBED);
    return (0, r.jsx)(o.f5, {
        value: u,
        children: (0, r.jsx)(p.W, {
            app: t,
            linkType: p.J.OAUTH,
            onView: a,
            message: n
        })
    })
}