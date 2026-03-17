/** chunk id: 13403 params = (module,exports,require) **/
n.d(t, {
    A: () => M
}), n(321073);
var i = n(627968),
    l = n(64700),
    r = n(311907),
    a = n(554146),
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
    S = n(837197),
    y = n(359549),
    N = n(537643),
    j = n(444901),
    L = n(842157),
    R = n(49999),
    P = n(985018);

function M(e) {
    var t, n;
    let M, D, {
            analyticsLocations: w,
            application: O,
            channel: k,
            currentUserId: U,
            currentUserPresenceActivity: B,
            hideParty: G,
            message: F,
            onView: H,
            partyStatusElement: V,
            presenceActivity: W
        } = e,
        q = (0, d.Ag)(O),
        {
            iconSrc: Y,
            name: z
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
        }(F, O),
        Q = (0, N.I)({
            messageId: F.id,
            presenceActivity: W,
            application: O
        }) ?? void 0,
        {
            openGameProfileModal: K,
            launchableAppId: J
        } = (t = O.id, n = F.author.id, M = (0, f.d)(t), D = (0, r.bG)([m.A, C.A], () => {
            let e = m.A.getApplication(t);
            return null != e ? C.A.getGameByApplication(e) : null
        }, [t]), {
            openGameProfileModal: (0, x.A)({
                location: "Rich Presence Activity Invite Embed",
                applicationId: D?.id ?? void 0,
                source: A.Ob.Embed,
                trackEntryPointImpression: !0,
                sourceUserId: n
            }),
            launchableAppId: M
        }),
        X = (0, y.A)({
            application: O,
            analyticsLocations: w
        }),
        Z = l.useMemo(() => {
            if (null != X) return {
                label: P.intl.string(P.t["jaYS/h"]),
                icon: o.hpF,
                trackingArea: h.kY.CLOUD_PLAY,
                onClick: X
            }
        }, [X]),
        $ = (0, p.F)(O),
        ee = l.useMemo(() => null != K ? K : null != $ && q ? $ : void 0, [q, K, $]),
        et = c.A.useConfig({
            location: "RichPresenceGameActivityInviteEmbed"
        }),
        {
            canStartAuthorization: en,
            hasAlreadyLinked: ei,
            startAuthorization: el
        } = (0, _.RD)(O),
        er = (0, u.z)(el, ei),
        ea = !(0, T.A)(W, F, O.id),
        es = (0, b.n$)(z, F.activity?.type, ea),
        eo = l.useRef(null),
        ed = (0, r.bG)([I.A], () => I.A.getMessages(k.id)),
        ec = () => {
            let e = [];
            return (0, S.G)(F.id, ed) && en && !ei && et.enabled && e.push(a.M.GAME_INVITE_ACCOUNT_LINK_UPSELL), (0, i.jsx)(g.Ay, {
                contentTypes: e,
                children: e => {
                    let {
                        visibleContent: t,
                        markAsDismissed: n
                    } = e;
                    if (t === a.M.GAME_INVITE_ACCOUNT_LINK_UPSELL) return (0, i.jsx)(s.AM, {
                        graphic: {
                            type: "dynamic",
                            component: o.Z86.ACCOUNT_LINK_DISPLAY,
                            props: {
                                application: O
                            }
                        },
                        title: P.intl.formatToPlainString(P.t["lo6H6+"], {
                            gameName: O.name
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
    return ea ? (0, i.jsx)(j.A, {
        message: F,
        application: O,
        applicationName: z,
        channel: k,
        header: es,
        currentUserId: U,
        launchableAppId: J,
        isEmbeddedApplication: q,
        tryWithGdnAction: Z,
        staticBannerSrc: Q,
        onClickContent: ee,
        iconSrc: Y,
        onView: H,
        presenceActivity: W,
        analyticsLocations: w,
        showAuthButton: en && !ei && et.enabled,
        startAuthorization: er,
        accountLinkButtonRef: eo,
        renderAccountLinkUpsell: ec
    }) : (0, i.jsx)(L.A, {
        message: F,
        application: O,
        applicationName: z,
        channel: k,
        header: es,
        currentUserId: U,
        launchableAppId: J,
        isEmbeddedApplication: q,
        tryWithGdnAction: Z,
        staticBannerSrc: Q,
        onClickContent: ee,
        iconSrc: Y,
        onView: H,
        presenceActivity: W,
        currentUserPresenceActivity: B,
        hideParty: G,
        partyStatusElement: V,
        analyticsLocations: w,
        showAuthButton: en && !ei && et.enabled,
        canPromptAuth: en && !ei,
        startAuthorization: er,
        accountLinkButtonRef: eo,
        renderAccountLinkUpsell: ec
    })
}