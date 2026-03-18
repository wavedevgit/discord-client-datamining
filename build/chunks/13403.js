/** chunk id: 13403 params = (module,exports,require) **/
n.d(t, {
    A: () => M
}), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(554146),
    s = n(342494),
    o = n(397927),
    d = n(735991),
    c = n(690456),
    u = n(359800),
    _ = n(362490),
    m = n(587895),
    h = n(354287),
    p = n(574660),
    g = n(379848),
    A = n(409626),
    x = n(692969),
    f = n(928550),
    C = n(760751),
    I = n(320501),
    E = n(139675),
    v = n(486020),
    b = n(456060),
    T = n(659051),
    y = n(837197),
    S = n(359549),
    N = n(537643),
    j = n(444901),
    L = n(842157),
    R = n(49999),
    P = n(985018);

function M(e) {
    var t, n;
    let M, w, {
            analyticsLocations: D,
            application: k,
            channel: O,
            currentUserId: U,
            currentUserPresenceActivity: B,
            hideParty: G,
            message: F,
            onView: H,
            partyStatusElement: V,
            presenceActivity: q
        } = e,
        W = (0, d.Ag)(k),
        {
            iconSrc: z,
            name: Y
        } = function(e, t) {
            let {
                bot: n
            } = t;
            return {
                iconSrc: (e.activity?.icon_override != null ? (0, E.uD)(t.id, e.activity?.icon_override) : null) ?? v.Ay.getApplicationIconURL({
                    id: t.id,
                    icon: t.icon,
                    bot: n
                }),
                name: e.activity?.name_override ?? t.name
            }
        }(F, k),
        Q = (0, N.I)({
            messageId: F.id,
            presenceActivity: q,
            application: k
        }) ?? void 0,
        {
            openGameProfileModal: K,
            launchableAppId: J
        } = (t = k.id, n = F.author.id, M = (0, f.d)(t), w = (0, a.bG)([m.A, C.A], () => {
            let e = m.A.getApplication(t);
            return null != e ? C.A.getGameByApplication(e) : null
        }, [t]), {
            openGameProfileModal: (0, x.A)({
                location: "Rich Presence Activity Invite Embed",
                applicationId: w?.id ?? void 0,
                source: A.Ob.Embed,
                trackEntryPointImpression: !0,
                sourceUserId: n
            }),
            launchableAppId: M
        }),
        X = (0, S.A)({
            application: k,
            analyticsLocations: D
        }),
        Z = r.useMemo(() => {
            if (null != X) return {
                label: P.intl.string(P.t["jaYS/h"]),
                icon: o.hpF,
                trackingArea: h.kY.CLOUD_PLAY,
                onClick: X
            }
        }, [X]),
        $ = (0, p.F)(k),
        ee = r.useMemo(() => null != K ? K : null != $ && W ? $ : void 0, [W, K, $]),
        et = c.A.useConfig({
            location: "RichPresenceGameActivityInviteEmbed"
        }),
        {
            canStartAuthorization: en,
            hasAlreadyLinked: ei,
            startAuthorization: er
        } = (0, _.RD)(k),
        ea = (0, u.z)(er, ei),
        el = !(0, T.A)(q, F, k.id),
        es = (0, b.n$)(Y, F.activity?.type, el),
        eo = r.useRef(null),
        ed = (0, a.bG)([I.A], () => I.A.getMessages(O.id)),
        ec = () => {
            let e = [];
            return (0, y.G)(F.id, ed) && en && !ei && et.enabled && e.push(l.M.GAME_INVITE_ACCOUNT_LINK_UPSELL), (0, i.jsx)(g.Ay, {
                contentTypes: e,
                children: e => {
                    let {
                        visibleContent: t,
                        markAsDismissed: n
                    } = e;
                    if (t === l.M.GAME_INVITE_ACCOUNT_LINK_UPSELL) return (0, i.jsx)(s.AM, {
                        graphic: {
                            type: "dynamic",
                            component: o.Z86.ACCOUNT_LINK_DISPLAY,
                            props: {
                                application: k
                            }
                        },
                        title: P.intl.formatToPlainString(P.t["lo6H6+"], {
                            gameName: k.name
                        }),
                        body: P.intl.string(P.t.qYAzOp),
                        targetElementRef: eo,
                        caretConfig: {
                            align: "start"
                        },
                        shouldShow: !0,
                        gradientColor: "purple",
                        onRequestClose: () => n(R.i.USER_DISMISS)
                    })
                }
            })
        };
    return el ? (0, i.jsx)(j.A, {
        message: F,
        application: k,
        applicationName: Y,
        channel: O,
        header: es,
        currentUserId: U,
        launchableAppId: J,
        isEmbeddedApplication: W,
        tryWithGdnAction: Z,
        staticBannerSrc: Q,
        onClickContent: ee,
        iconSrc: z,
        onView: H,
        presenceActivity: q,
        analyticsLocations: D,
        showAuthButton: en && !ei && et.enabled,
        startAuthorization: ea,
        accountLinkButtonRef: eo,
        renderAccountLinkUpsell: ec
    }) : (0, i.jsx)(L.A, {
        message: F,
        application: k,
        applicationName: Y,
        channel: O,
        header: es,
        currentUserId: U,
        launchableAppId: J,
        isEmbeddedApplication: W,
        tryWithGdnAction: Z,
        staticBannerSrc: Q,
        onClickContent: ee,
        iconSrc: z,
        onView: H,
        presenceActivity: q,
        currentUserPresenceActivity: B,
        hideParty: G,
        partyStatusElement: V,
        analyticsLocations: D,
        showAuthButton: en && !ei && et.enabled,
        canPromptAuth: en && !ei,
        startAuthorization: ea,
        accountLinkButtonRef: eo,
        renderAccountLinkUpsell: ec
    })
}