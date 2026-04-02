/** chunk id: 13403 params = (module,exports,require) **/
n.d(t, {
    A: () => w
}), n(321073);
var i = n(627968),
    a = n(64700),
    r = n(311907),
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
    S = n(837197),
    y = n(359549),
    N = n(537643),
    j = n(444901),
    L = n(842157),
    R = n(49999),
    P = n(985018);

function w(e) {
    var t, n;
    let w, D, {
            analyticsLocations: M,
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
        } = (t = k.id, n = F.author.id, w = (0, f.d)(t), D = (0, r.bG)([m.A, C.A], () => {
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
            launchableAppId: w
        }),
        X = (0, y.A)({
            application: k,
            analyticsLocations: M
        }),
        Z = a.useMemo(() => {
            if (null != X) return {
                label: P.intl.string(P.t["jaYS/h"]),
                icon: o.hpF,
                trackingArea: h.kY.CLOUD_PLAY,
                onClick: X
            }
        }, [X]),
        $ = (0, p.F)(k),
        ee = a.useMemo(() => null != K ? K : null != $ && W ? $ : void 0, [W, K, $]),
        et = c.A.useConfig({
            location: "RichPresenceGameActivityInviteEmbed"
        }),
        {
            canStartAuthorization: en,
            hasAlreadyLinked: ei,
            startAuthorization: ea
        } = (0, _.RD)(k),
        er = (0, u.z)(ea, ei),
        el = !(0, T.A)(q, F, k.id),
        es = (0, b.n$)(Y, F.activity?.type, el),
        eo = a.useRef(null),
        ed = (0, r.bG)([I.A], () => I.A.getMessages(O.id)),
        ec = () => {
            let e = [];
            return (0, S.G)(F.id, ed) && en && !ei && et.enabled && e.push(l.M.GAME_INVITE_ACCOUNT_LINK_UPSELL), (0, i.jsx)(g.Ay, {
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
        analyticsLocations: M,
        showAuthButton: en && !ei && et.enabled,
        startAuthorization: er,
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
        analyticsLocations: M,
        showAuthButton: en && !ei && et.enabled,
        canPromptAuth: en && !ei,
        startAuthorization: er,
        accountLinkButtonRef: eo,
        renderAccountLinkUpsell: ec
    })
}