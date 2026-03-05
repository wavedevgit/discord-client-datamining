/** chunk id: 368631, original params: e,t,n (module,exports,require) **/
n.d(t, {
    AW: () => eh,
    Jn: () => ep,
    p_: () => eA,
    zj: () => eT
}), n(321073);
var i = n(627968),
    s = n(110259),
    l = n(554146),
    a = n(827734),
    r = n(314116),
    o = n(397927),
    d = n(830215),
    c = n(631670),
    u = n(252452),
    _ = n(361739),
    g = n(975807),
    m = n(813077),
    A = n(569024),
    h = n(212031),
    p = n(652525),
    x = n(932001),
    E = n(379587),
    T = n(3137),
    S = n(454292),
    C = n(704591),
    f = n(682829),
    I = n(103738),
    b = n(745109),
    N = n(890164),
    v = n(836602),
    j = n(540999),
    O = n(111162),
    R = n(954571),
    y = n(957565),
    P = n(307600),
    L = n(723702),
    D = n(809465),
    G = n(517235),
    M = n(81107),
    U = n(805577),
    k = n(782844),
    V = n(513664),
    w = n(69435),
    H = n(614651),
    B = n(891912),
    Y = n(115980),
    F = n(75698),
    z = n(130066),
    X = n(195548),
    W = n(749737),
    K = n(164358),
    Z = n(768908),
    q = n(586685),
    J = n(490510),
    Q = n(93471),
    $ = n(790076),
    ee = n(224515),
    et = n(357864),
    en = n(119762),
    ei = n(16986),
    es = n(62218),
    el = n(640068),
    ea = n(682262),
    er = n(777117),
    eo = n(604151),
    ed = n(531525),
    ec = n(652215),
    eu = n(985018),
    e_ = n(927961),
    eg = n(842130),
    em = n(945213);
let eA = () => [l.M.CLIENT_THEMES_SETTINGS_BADGE, l.M.DEKSTOP_CUSTOM_APP_ICON_BADGE, l.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE],
    eh = () => {
        let e = eA(),
            [t] = (0, x.kn)(e);
        return t === l.M.CLIENT_THEMES_SETTINGS_BADGE || t === l.M.DEKSTOP_CUSTOM_APP_ICON_BADGE ? (0, i.jsx)(o.JIr, {
            text: eu.intl.string(eu.t.y2b7CA)
        }) : t === l.M.CLIENT_THEMES_APPEARANCE_SETTINGS_NEW_BADGE ? (0, i.jsx)(o.LpS, {
            text: eu.intl.string(eu.t.y2b7CA)
        }) : null
    },
    ep = () => {
        let e = [];
        return e.push(l.M.WIDGETS_USER_SETTINGS_NEW_BADGE), e.push(l.M.DISPLAY_NAME_STYLES_NEW_BADGE), e
    },
    ex = () => {
        let e = ep(),
            [t] = (0, x.kn)(e);
        return t === l.M.DISPLAY_NAME_STYLES_NEW_BADGE || t === l.M.WIDGETS_USER_SETTINGS_NEW_BADGE ? (0, i.jsx)(o.LpS, {
            text: eu.intl.string(eu.t.y2b7CA)
        }) : null
    },
    eE = es.A,
    eT = e => {
        let {
            unseenGiftCount: t,
            showPrepaidPaymentPastDueWarning: x,
            searchParams: eT,
            numOfPendingFamilyRequests: eS,
            isOverlaySupported: eC,
            shouldMergeGameSettings: ef,
            isStaff: eI,
            isInappropriateConversationWarningEnabled: eb,
            isInapproprateConversationsDefaultOn: eN,
            paymentsBlocked: ev,
            isEligibleForQuests: ej,
            isStricterMessageRequestsEnabled: eO,
            hasLibraryApplication: eR,
            hasTOTPEnabled: ey,
            developerMode: eP,
            isAdultUser: eL,
            hasSecureFramesVerifiedUserIds: eD,
            hasIgnoredUsers: eG,
            hasBlockedUsers: eM,
            hasAgeGatedFeature: eU,
            isHDRAccessibilitySettingExperimentEnabled: ek
        } = e;
        return Object.freeze({
            [ed.H.SEARCH_NO_RESULTS]: {
                section: _.Fq.CUSTOM,
                element: et.A
            },
            [ed.H.ACCOUNT_SECURITY_TAB]: {
                section: ec.nc_.ACCOUNT,
                searchableTitles: [eu.intl.string(eu.t.Am9YHi)],
                label: eu.intl.string(eu.t.Am9YHi)
            },
            [ed.H.ACCOUNT]: {
                section: ec.nc_.ACCOUNT,
                searchableTitles: [eu.intl.string(eu.t["JAIM/m"])],
                label: eu.intl.string(eu.t["JAIM/m"]),
                ariaLabel: eu.intl.string(eu.t["JAIM/m"]),
                element: k.A
            },
            [ed.H.ACCOUNT_PROFILE]: {
                searchableTitles: [eu.intl.string(eu.t.LYju5J)],
                parent: ed.H.ACCOUNT,
                section: ec.nc_.ACCOUNT
            },
            [ed.H.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eu.intl.string(eu.t["9AjdkD"])],
                section: ec.nc_.ACCOUNT,
                parent: ed.H.ACCOUNT_PROFILE
            },
            [ed.H.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eu.intl.string(eu.t.Ulqq6K)],
                section: ec.nc_.ACCOUNT,
                parent: ed.H.ACCOUNT_PROFILE
            },
            [ed.H.ACCOUNT_AGE_GROUP]: {
                searchableTitles: [eu.intl.string(eu.t["/52UYy"]), eu.intl.string(eu.t.sK0dmH), eu.intl.string(eu.t.XxRj7f), eu.intl.string(eu.t.DVywUB), eu.intl.string(eu.t["9KiIz6"])],
                section: ec.nc_.ACCOUNT,
                parent: ed.H.ACCOUNT_PROFILE,
                predicate: () => eU
            },
            [ed.H.ACCOUNT_USERNAME]: {
                searchableTitles: [eu.intl.string(eu.t["+JkHPw"])],
                section: ec.nc_.ACCOUNT,
                parent: ed.H.ACCOUNT_PROFILE
            },
            [ed.H.ACCOUNT_EMAIL]: {
                searchableTitles: [eu.intl.string(eu.t.oP5zGA)],
                section: ec.nc_.ACCOUNT,
                parent: ed.H.ACCOUNT_PROFILE
            },
            [ed.H.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eu.intl.string(eu.t.pKSjEj)],
                section: ec.nc_.ACCOUNT,
                parent: ed.H.ACCOUNT
            },
            [ed.H.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eu.intl.string(eu.t["FRep5/"])],
                section: ec.nc_.ACCOUNT,
                parent: ed.H.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [ed.H.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eu.intl.string(eu.t["7qKDrE"])],
                section: ec.nc_.ACCOUNT,
                parent: ed.H.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [ed.H.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eu.intl.string(eu.t.m0FidJ)],
                section: ec.nc_.ACCOUNT,
                parent: ed.H.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [ed.H.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eu.intl.string(eu.t.cDgKte)],
                section: ec.nc_.ACCOUNT,
                parent: ed.H.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !ey
            },
            [ed.H.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eu.intl.string(eu.t["D+aE7g"])],
                section: ec.nc_.ACCOUNT,
                parent: ed.H.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => ey
            },
            [ed.H.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eu.intl.string(eu.t.fZSi1D)],
                section: ec.nc_.ACCOUNT,
                parent: ed.H.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [ed.H.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eu.intl.string(eu.t.uHAJ5v)],
                section: ec.nc_.ACCOUNT,
                parent: ed.H.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [ed.H.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eu.intl.string(eu.t.vrOCCk), eu.intl.string(eu.t.y7SXYX)],
                section: ec.nc_.ACCOUNT,
                parent: ed.H.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [ed.H.ACCOUNT_REMOVAL]: {
                section: ec.nc_.ACCOUNT,
                searchableTitles: [eu.intl.string(eu.t.ZKsIks)],
                parent: ed.H.ACCOUNT
            },
            [ed.H.ACCOUNT_DISABLE_ACCOUNT]: {
                section: ec.nc_.ACCOUNT,
                searchableTitles: [eu.intl.string(eu.t.jf5GGb)],
                parent: ed.H.ACCOUNT_REMOVAL
            },
            [ed.H.ACCOUNT_DELETE_ACCOUNT]: {
                section: ec.nc_.ACCOUNT,
                searchableTitles: [eu.intl.string(eu.t["8lQ2rR"])],
                parent: ed.H.ACCOUNT_DISABLE_ACCOUNT
            },
            [ed.H.GAMES]: {
                section: ec.nc_.GAMES,
                searchableTitles: [eu.intl.string(eu.t.URyqtP)],
                label: eu.intl.string(eu.t.URyqtP),
                ariaLabel: eu.intl.string(eu.t.URyqtP),
                element: er.A,
                predicate: () => ef
            },
            [ed.H.GAMES_MY_GAMES]: {
                section: ec.nc_.GAMES,
                searchableTitles: [eu.intl.string(eu.t["5DMgp9"])],
                parent: ed.H.GAMES
            },
            [ed.H.GAMES_OVERLAY]: {
                section: ec.nc_.GAMES,
                searchableTitles: [eu.intl.string(eu.t["9cb1Uz"])],
                parent: ed.H.GAMES
            },
            [ed.H.GAMES_ACTIVITY_PRIVACY]: {
                section: ec.nc_.GAMES,
                searchableTitles: [eu.intl.string(eu.t.Cq98yL)],
                parent: ed.H.GAMES
            },
            [ed.H.PROFILE_CUSTOMIZATION]: {
                section: ec.nc_.PROFILE_CUSTOMIZATION,
                type: _.Py.WIDE,
                searchableTitles: [eu.intl.string(eu.t["vi7f+q"])],
                label: eu.intl.string(eu.t["vi7f+q"]),
                ariaLabel: eu.intl.string(eu.t["vi7f+q"]),
                element: b.A,
                newIndicator: (0, i.jsx)(ex, {}),
                newIndicatorDismissibleContentTypes: [...ep()],
                notice: {
                    stores: [v.A],
                    element: I.A
                },
                onSettingsClose: () => {
                    (0, c.F7)(), u.A.clearSubsection(ec.nc_.PROFILE_CUSTOMIZATION)
                }
            },
            [ed.H.PROFILE_DISPLAY_NAME]: {
                section: ec.nc_.PROFILE_CUSTOMIZATION,
                searchableTitles: [eu.intl.string(eu.t["9AjdkD"])],
                parent: ed.H.PROFILE_CUSTOMIZATION
            },
            [ed.H.PROFILE_USER_PROFILE]: {
                section: ec.nc_.PROFILE_CUSTOMIZATION,
                searchableTitles: [eu.intl.string(eu.t["2p07FR"]), eu.intl.string(eu.t["7vhiqk"])],
                parent: ed.H.PROFILE_CUSTOMIZATION
            },
            [ed.H.PROFILE_SERVER_PROFILES]: {
                section: ec.nc_.PROFILE_CUSTOMIZATION,
                searchableTitles: [eu.intl.string(eu.t.kPHroX)],
                parent: ed.H.PROFILE_CUSTOMIZATION
            },
            [ed.H.CONTENT_SOCIAL]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                label: eu.intl.string(eu.t["+o1pDZ"]),
                searchableTitles: [eu.intl.string(eu.t["+o1pDZ"])],
                ariaLabel: eu.intl.string(eu.t["+o1pDZ"]),
                element: z.A
            },
            [ed.H.CONTENT_SOCIAL_DISCORD_TAB]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                searchableTitles: [eu.intl.string(eu.t["+o1pDZ"]), eu.intl.string(eu.t["/7xJCF"])],
                parent: ed.H.CONTENT_SOCIAL
            },
            [ed.H.CONTENT_SOCIAL_DISCORD]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                searchableTitles: [eu.intl.string(eu.t["+o1pDZ"]), eu.intl.string(eu.t["/7xJCF"])],
                parent: ed.H.CONTENT_SOCIAL_DISCORD_TAB
            },
            [ed.H.CONTENT_SOCIAL_CONNECTED_GAMES_TAB]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                searchableTitles: [eu.intl.string(eu.t.YpCiMt)],
                parent: ed.H.CONTENT_SOCIAL
            },
            [ed.H.CONTENT_SOCIAL_CONNECTED_GAMES]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                label: eu.intl.string(eu.t.YpCiMt),
                searchableTitles: [eu.intl.string(eu.t.YpCiMt)],
                ariaLabel: eu.intl.string(eu.t.YpCiMt),
                parent: ed.H.CONTENT_SOCIAL_CONNECTED_GAMES_TAB
            },
            [ed.H.DATA_PRIVACY]: {
                section: ec.nc_.DATA_AND_PRIVACY,
                label: eu.intl.string(eu.t.OAuOHD),
                searchableTitles: [eu.intl.string(eu.t.OAuOHD)],
                ariaLabel: eu.intl.string(eu.t.OAuOHD),
                element: X.A
            },
            [ed.H.PRIVACY_AND_SAFETY_STANDING]: {
                section: ec.nc_.ACCOUNT,
                searchableTitles: [eu.intl.string(eu.t["Vov/9o"])],
                parent: ed.H.ACCOUNT
            },
            [ed.H.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: ec.nc_.DATA_AND_PRIVACY,
                searchableTitles: [eu.intl.string(eu.t.WWaFn5)],
                parent: ed.H.DATA_PRIVACY,
                predicate: () => (0, L.isDesktop)()
            },
            [ed.H.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: ec.nc_.DATA_AND_PRIVACY,
                searchableTitles: [eu.intl.string(eu.t["opi/XK"])],
                parent: ed.H.PRIVACY_AND_SAFETY_VOICE_SECURITY
            },
            [ed.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                searchableTitles: [eu.intl.string(eu.t.xVRG4P)],
                parent: ed.H.CONTENT_SOCIAL_DISCORD
            },
            [ed.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                searchableTitles: [eu.intl.string(eu.t.fyA115)],
                parent: ed.H.CONTENT_SOCIAL_DISCORD
            },
            [ed.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                searchableTitles: [eu.intl.string(eu.t.fyA115)],
                parent: ed.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY
            },
            [ed.H.PRIVACY_AND_SAFETY_ALLOW_GAME_FRIEND_DMS]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                searchableTitles: [eu.intl.string(eu.t["/U8Iwa"])],
                parent: ed.H.CONTENT_SOCIAL_CONNECTED_GAMES
            },
            [ed.H.PRIVACY_AND_SAFETY_IN_GAME_DMS]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                searchableTitles: [eu.intl.string(eu.t["ms+Tme"])],
                parent: ed.H.CONTENT_SOCIAL_CONNECTED_GAMES
            },
            [ed.H.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                searchableTitles: [eu.intl.string(eu.t["y62Z/d"])],
                parent: ed.H.CONTENT_SOCIAL
            },
            [ed.H.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: ec.nc_.DATA_AND_PRIVACY,
                searchableTitles: [eu.intl.string(eu.t.SRZyHg)],
                parent: ed.H.DATA_PRIVACY
            },
            [ed.H.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                searchableTitles: [eu.intl.string(eu.t.uEz8JF), eu.intl.string(eu.t["N/oRI+"]), eu.intl.string(eu.t.QVdYsK), eu.intl.string(eu.t["aWD+tu"]), eu.intl.string(eu.t["5mnTa7"])],
                parent: ed.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [ed.H.SENSITIVE_CONTENT_FILTERS]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                searchableTitles: [eu.intl.string(eu.t["Hj/But"]), eu.intl.string(eu.t["N/oRI+"]), eu.intl.string(eu.t.QVdYsK), eu.intl.string(eu.t["aWD+tu"]), eu.intl.string(eu.t["5mnTa7"]), eu.intl.string(eu.t["K0OWP+"])],
                parent: ed.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [ed.H.SEXUALLY_EXPLICIT_MEDIA_REDACTION]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                searchableTitles: [eu.intl.string(eu.t["Hj/But"]), eu.intl.string(eu.t["N/oRI+"]), eu.intl.string(eu.t.QVdYsK), eu.intl.string(eu.t["aWD+tu"]), eu.intl.string(eu.t["5mnTa7"])],
                parent: ed.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [ed.H.GORE_MEDIA_REDACTION]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                searchableTitles: [eu.intl.string(eu.t["Hj/But"]), eu.intl.string(eu.t["N/oRI+"]), eu.intl.string(eu.t.QVdYsK), eu.intl.string(eu.t["aWD+tu"]), eu.intl.string(eu.t["K0OWP+"])],
                parent: ed.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [ed.H.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                searchableTitles: [eu.intl.string(eu.t.JzaP4h), eu.intl.string(eu.t.H9XOl3), eu.intl.string(eu.t.k4W40P)],
                parent: ed.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [ed.H.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                searchableTitles: [eu.intl.string(eu.t["L+yTsa"])],
                parent: ed.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [ed.H.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                searchableTitles: [eu.intl.string(eu.t.XahVjj)],
                parent: ed.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [ed.H.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                parent: ed.H.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY
            },
            [ed.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                searchableTitles: [eu.intl.string(eu.t.RAQUSN), eu.intl.string(eu.t.wbYDfT)],
                parent: ed.H.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [ed.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                searchableTitles: [eu.intl.string(eu.t["3o2ojh"])],
                parent: ed.H.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !eO
            },
            [ed.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                searchableTitles: [eu.intl.string(eu.t.OLwZDV)],
                parent: ed.H.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [ed.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                searchableTitles: [eu.intl.string(eu.t.wBkwux)],
                parent: ed.H.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [ed.H.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: ec.nc_.DATA_AND_PRIVACY,
                searchableTitles: [eu.intl.string(eu.t.XuADY2)],
                parent: ed.H.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [ed.H.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: ec.nc_.DATA_AND_PRIVACY,
                searchableTitles: [eu.intl.string(eu.t.MNKzyg)],
                parent: ed.H.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [ed.H.PRIVACY_DATA_QUESTS_V2]: {
                section: ec.nc_.DATA_AND_PRIVACY,
                searchableTitles: [eu.intl.string(eu.t.VkS7Yd), eu.intl.string(eu.t.sJYh5t)],
                parent: ed.H.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [ed.H.PRIVACY_DATA_QUESTS_3P]: {
                section: ec.nc_.DATA_AND_PRIVACY,
                searchableTitles: [eu.intl.string(eu.t.CyLYKZ)],
                parent: ed.H.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [ed.H.PRIVACY_DATA_CLIPS]: {
                section: ec.nc_.DATA_AND_PRIVACY,
                searchableTitles: [eu.intl.string(eu.t.AGDDkH)],
                parent: ed.H.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [ed.H.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: ec.nc_.DATA_AND_PRIVACY,
                searchableTitles: [""],
                parent: ed.H.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [ed.H.PRIVACY_DATA_REQUEST_V2]: {
                section: ec.nc_.DATA_AND_PRIVACY,
                searchableTitles: [eu.intl.string(eu.t.dmBSKo)],
                parent: ed.H.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY
            },
            [ed.H.PRIVACY_SAFETY_ALERTS_V2]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                searchableTitles: [eu.intl.string(eu.t.qFsx5q)],
                parent: ed.H.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eb && !eL && !eN
            },
            [ed.H.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: ec.nc_.DATA_AND_PRIVACY,
                searchableTitles: [eu.intl.string(eu.t["5b3FNI"])],
                parent: ed.H.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => eD
            },
            [ed.H.PRIVACY_FAMILY_CENTER]: {
                section: ec.nc_.FAMILY_CENTER,
                searchableTitles: [eu.intl.string(eg.default.gntCQT)],
                label: eu.intl.string(eg.default.gntCQT),
                ariaLabel: eu.intl.string(eg.default.gntCQT),
                element: K.A,
                badgeCount: eS,
                newIndicator: (0, i.jsx)(o.LpS, {
                    text: eu.intl.string(eu.t.y2b7CA),
                    color: a.A.colors.BACKGROUND_BRAND.css
                }),
                newIndicatorDismissibleContentTypes: [l.M.FAMILY_CENTER_NEW_BADGE]
            },
            [ed.H.PRIVACY_PROFILE_VISIBILITY]: {
                section: ec.nc_.DATA_AND_PRIVACY,
                searchableTitles: [eu.intl.string(eu.t.Qnf32C)],
                parent: ed.H.DATA_PRIVACY,
                predicate: () => (0, N.W1)("SettingsRendererConfig")
            },
            [ed.H.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: ec.nc_.DATA_AND_PRIVACY,
                searchableTitles: [eu.intl.string(eu.t.BG7QsQ)],
                parent: ed.H.DATA_PRIVACY
            },
            [ed.H.AUTHORIZED_APPS]: {
                section: ec.nc_.AUTHORIZED_APPS,
                searchableTitles: [eu.intl.string(eu.t["f6kk+r"])],
                label: eu.intl.string(eu.t["f6kk+r"]),
                element: B.Ay
            },
            [ed.H.SESSIONS]: {
                section: ec.nc_.SESSIONS,
                searchableTitles: [eu.intl.string(eu.t["+1h0k/"])],
                label: eu.intl.string(eu.t["+1h0k/"]),
                ariaLabel: eu.intl.string(eu.t["+1h0k/"]),
                element: en.Ay,
                newIndicatorDismissibleContentTypes: [l.M.AUTH_SESSIONS_NEW],
                impressionName: s.ImpressionNames.USER_SETTINGS_SESSIONS,
                impressionProperties: {
                    source: eT?.source
                }
            },
            [ed.H.CONNECTIONS]: {
                section: ec.nc_.CONNECTIONS,
                searchableTitles: [eu.intl.string(eu.t["3fe7U5"])],
                label: eu.intl.string(eu.t["3fe7U5"]),
                ariaLabel: eu.intl.string(eu.t["3fe7U5"]),
                element: F.Ay,
                impressionName: s.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: {
                    source: eT?.source
                },
                newIndicatorDismissibleContentTypes: [l.M.NEW_CRUNCHYROLL_CONNECTION]
            },
            [ed.H.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: ec.nc_.CONNECTIONS,
                searchableTitles: [eu.intl.string(eu.t["+/hZM/"])],
                parent: ed.H.CONNECTIONS,
                element: F.Ay
            },
            [ed.H.RESTRICTED_USERS]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                parent: ed.H.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                label: eu.intl.string(eu.t["3wRort"]),
                element: eo.Ay,
                predicate: () => eG || eM
            },
            [ed.H.BLOCKED_USERS]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                parent: ed.H.RESTRICTED_USERS,
                label: eu.intl.string(eu.t.PFOUKW),
                searchableTitles: [eu.intl.string(eu.t.PFOUKW)],
                element: eo.LP,
                predicate: () => eM
            },
            [ed.H.IGNORED_USERS]: {
                section: ec.nc_.CONTENT_AND_SOCIAL,
                parent: ed.H.RESTRICTED_USERS,
                searchableTitles: [eu.intl.string(eu.t["93ZDWE"])],
                label: eu.intl.string(eu.t["93ZDWE"]),
                element: eo.nK,
                predicate: () => eG
            },
            [ed.H.PREMIUM]: {
                section: ec.nc_.PREMIUM,
                ariaLabel: eu.intl.string(eu.t.Ipxkog),
                searchableTitles: [eu.intl.string(eu.t.Ipxkog)],
                label: eu.intl.string(eu.t.Ipxkog),
                element: G.A,
                className: em.D
            },
            [ed.H.GUILD_BOOSTING]: {
                section: ec.nc_.GUILD_BOOSTING,
                searchableTitles: [eu.intl.string(eu.t["+CbP2v"])],
                label: eu.intl.string(eu.t["+CbP2v"]),
                element: ee.A
            },
            [ed.H.SUBSCRIPTIONS]: {
                section: ec.nc_.SUBSCRIPTIONS,
                ariaLabel: eu.intl.string(eu.t.trSpHX),
                searchableTitles: [eu.intl.string(eu.t.trSpHX)],
                label: eu.intl.string(eu.t.trSpHX),
                element: f.A,
                icon: x ? (0, i.jsx)(o.EpV, {
                    size: "xs",
                    color: a.A.unsafe_rawColors.YELLOW_300.css
                }) : null
            },
            [ed.H.SUBSCRIPTIONS_CREDITS]: {
                section: ec.nc_.SUBSCRIPTIONS,
                searchableTitles: [eu.intl.string(eu.t["2GKrvn"])],
                parent: ed.H.SUBSCRIPTIONS
            },
            [ed.H.GIFT_INVENTORY]: {
                section: ec.nc_.INVENTORY,
                searchableTitles: [eu.intl.string(eu.t["jcSP+g"])],
                label: eu.intl.string(eu.t["jcSP+g"]),
                element: q.Ay,
                ariaLabel: eu.intl.string(eu.t["jcSP+g"]),
                badgeCount: t
            },
            [ed.H.GIFT_CODE_REDEMPTION]: {
                section: ec.nc_.INVENTORY,
                searchableTitles: [eu.intl.string(eu.t["il+VCo"])],
                parent: ed.H.GIFT_INVENTORY,
                predicate: () => !ev
            },
            [ed.H.GIFT_INVENTORY_QUESTS]: {
                section: ec.nc_.INVENTORY,
                searchableTitles: [eu.intl.string(eu.t.JALI2K)],
                parent: ed.H.GIFT_INVENTORY,
                predicate: () => ej
            },
            [ed.H.GIFT_INVENTORY_LIST]: {
                section: ec.nc_.INVENTORY,
                searchableTitles: [eu.intl.string(eu.t["9KeUbY"])],
                parent: ed.H.GIFT_INVENTORY,
                predicate: () => !ev
            },
            [ed.H.GIFT_BLOCKED_PAYMENTS]: {
                section: ec.nc_.INVENTORY,
                searchableTitles: [eu.intl.string(eu.t.vwMEHS)],
                parent: ed.H.GIFT_INVENTORY,
                predicate: () => ev
            },
            [ed.H.BILLING]: {
                section: ec.nc_.BILLING,
                searchableTitles: [eu.intl.string(eu.t.oeUm2s)],
                label: eu.intl.string(eu.t.oeUm2s),
                ariaLabel: eu.intl.string(eu.t.oeUm2s),
                element: Y.Ay
            },
            [ed.H.BILLING_PAYMENT_METHODS]: {
                section: ec.nc_.BILLING,
                searchableTitles: [eu.intl.string(eu.t.W26xGQ)],
                parent: ed.H.BILLING
            },
            [ed.H.BILLING_STORE_COUNTRY]: {
                section: ec.nc_.BILLING,
                searchableTitles: [eu.intl.string(eu.t["3pIjBH"])],
                parent: ed.H.BILLING,
                predicate: () => (0, m.FW)("SettingsRendererConfig")
            },
            [ed.H.BILLING_TRANSACTION_HISTORY]: {
                section: ec.nc_.BILLING,
                searchableTitles: [eu.intl.string(eu.t.obLrcK)],
                parent: ed.H.BILLING
            },
            [ed.H.APPEARANCE]: {
                section: ec.nc_.APPEARANCE,
                searchableTitles: [eu.intl.string(eu.t["iHH+ky"])],
                label: eu.intl.string(eu.t["iHH+ky"]),
                ariaLabel: eu.intl.string(eu.t["iHH+ky"]),
                element: H.Ay,
                newIndicator: (0, i.jsx)(eh, {}),
                newIndicatorDismissibleContentTypes: eA()
            },
            [ed.H.APPEARANCE_THEME]: {
                section: ec.nc_.APPEARANCE,
                searchableTitles: [eu.intl.string(eu.t.Ksh3ik)],
                parent: ed.H.APPEARANCE
            },
            [ed.H.APPEARANCE_COLOR]: {
                section: ec.nc_.APPEARANCE,
                searchableTitles: [eu.intl.string(eu.t.OCOOiI)],
                parent: ed.H.APPEARANCE_THEME
            },
            [ed.H.APPEARANCE_ICON]: {
                section: ec.nc_.APPEARANCE,
                searchableTitles: [eu.intl.string(eu.t.RPh2ou)],
                parent: ed.H.APPEARANCE_THEME
            },
            [ed.H.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: ec.nc_.APPEARANCE,
                searchableTitles: [eu.intl.string(eu.t.ZEoGMd)],
                parent: ed.H.APPEARANCE
            },
            [ed.H.APPEARANCE_LIST_SPACING]: {
                section: ec.nc_.APPEARANCE,
                searchableTitles: ["List Spacing"],
                parent: ed.H.APPEARANCE,
                newIndicator: (0, i.jsx)(o.LpS, {
                    text: eu.intl.string(eu.t.y2b7CA),
                    color: a.A.colors.BACKGROUND_BRAND.css
                })
            },
            [ed.H.APPEARANCE_SCALING_SPACING]: {
                section: ec.nc_.APPEARANCE,
                searchableTitles: [eu.intl.string(eu.t.qPOqoK)],
                parent: ed.H.APPEARANCE
            },
            [ed.H.ACCESSIBILITY]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [eu.intl.string(eu.t.G0neg7)],
                label: eu.intl.string(eu.t.G0neg7),
                ariaLabel: eu.intl.string(eu.t.G0neg7),
                element: U.Ay
            },
            [ed.H.ACCESSIBILITY_HIGH_CONTRAST]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [eu.intl.string(eu.t.aZlePv)],
                parent: ed.H.ACCESSIBILITY
            },
            [ed.H.ACCESSIBILITY_SWITCH_ICON]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [eu.intl.string(eu.t["S3z+pV"])],
                parent: ed.H.ACCESSIBILITY
            },
            [ed.H.ACCESSIBILITY_SATURATION]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [eu.intl.string(eu.t["5PWWCY"])],
                parent: ed.H.ACCESSIBILITY
            },
            [ed.H.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [eu.intl.string(eu.t.bQCodD)],
                parent: ed.H.ACCESSIBILITY_SATURATION
            },
            [ed.H.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [eu.intl.string(eu.t.OLZFB8)],
                parent: ed.H.ACCESSIBILITY
            },
            [ed.H.ACCESSIBILITY_CUSTOM_CURSOR]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [eu.intl.string(eu.t["+Isihb"])],
                parent: ed.H.ACCESSIBILITY,
                predicate: () => (0, p.t)("SettingsRendererConfig")
            },
            [ed.H.ACCESSIBILITY_ROLE_STYLE]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [eu.intl.string(eu.t.uSOPWm)],
                parent: ed.H.ACCESSIBILITY
            },
            [ed.H.ACCESSIBILITY_DISPLAY_NAME_STYLES]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [eu.intl.string(e_.default["2gFUEw"])],
                parent: ed.H.ACCESSIBILITY
            },
            [ed.H.ACCESSIBILITY_PROFILE_COLORS]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [eu.intl.string(eu.t.BT8Bmp)],
                parent: ed.H.ACCESSIBILITY
            },
            [ed.H.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [eu.intl.string(eu.t["sSY+mD"])],
                parent: ed.H.ACCESSIBILITY_PROFILE_COLORS
            },
            [ed.H.ACCESSIBILITY_CONTRAST]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [eu.intl.string(eu.t["TYyfO/"])],
                parent: ed.H.ACCESSIBILITY
            },
            [ed.H.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [eu.intl.string(eu.t.cguiec)],
                parent: ed.H.ACCESSIBILITY_CONTRAST
            },
            [ed.H.ACCESSIBILITY_REDUCED_MOTION]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [eu.intl.string(eu.t.e3TR1b)],
                parent: ed.H.ACCESSIBILITY
            },
            [ed.H.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [eu.intl.string(eu.t.b3XBzg)],
                parent: ed.H.ACCESSIBILITY_REDUCED_MOTION
            },
            [ed.H.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [eu.intl.string(eu.t.Iayoh5)],
                parent: ed.H.ACCESSIBILITY_REDUCED_MOTION
            },
            [ed.H.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [eu.intl.string(eu.t.iIaOlc)],
                parent: ed.H.ACCESSIBILITY_REDUCED_MOTION
            },
            [ed.H.ACCESSIBILITY_STICKERS]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [eu.intl.string(eu.t["6NtAuJ"])],
                parent: ed.H.ACCESSIBILITY_REDUCED_MOTION
            },
            [ed.H.ACCESSIBILITY_MESSAGES]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [eu.intl.string(eu.t.onqU6o)],
                parent: ed.H.ACCESSIBILITY
            },
            [ed.H.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [eu.intl.string(eu.t["3Fztn5"])],
                parent: ed.H.ACCESSIBILITY_MESSAGES
            },
            [ed.H.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [eu.intl.string(eu.t.TZ2hZH)],
                parent: ed.H.ACCESSIBILITY_MESSAGES
            },
            [ed.H.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [eu.intl.string(eu.t.VpSKeO)],
                parent: ed.H.ACCESSIBILITY
            },
            [ed.H.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [eu.intl.string(eu.t.lsW5Ev)],
                parent: ed.H.ACCESSIBILITY
            },
            [ed.H.ACCESSIBILITY_HDR_DYNAMIC_RANGE]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [eu.intl.string(eu.t.nemtgW), "HDR", eu.intl.string(eu.t["O/Gjvn"])],
                parent: ed.H.ACCESSIBILITY,
                predicate: () => ek
            },
            [ed.H.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: ec.nc_.ACCESSIBILITY,
                searchableTitles: [""],
                parent: ed.H.ACCESSIBILITY
            },
            [ed.H.POGGERMODE]: {
                section: ec.nc_.POGGERMODE,
                searchableTitles: [eu.intl.string(eu.t.AtCukI)],
                label: eu.intl.string(eu.t.AtCukI),
                ariaLabel: eu.intl.string(eu.t.AtCukI),
                element: S.A,
                predicate: () => T.A.settingsVisible,
                icon: (0, i.jsx)("img", {
                    alt: "",
                    src: n(724405),
                    className: em.$
                })
            },
            [ed.H.CHAT]: {
                section: ec.nc_.TEXT,
                searchableTitles: [eu.intl.string(eu.t["/VQax8"])],
                label: eu.intl.string(eu.t["/VQax8"]),
                ariaLabel: eu.intl.string(eu.t["/VQax8"]),
                element: ei.A
            },
            [ed.H.MESSAGE_SEARCH]: {
                section: ec.nc_.TEXT,
                searchableTitles: [eu.intl.string(eu.t.VYODPD)],
                parent: ed.H.CHAT
            },
            [ed.H.MESSAGE_SEARCH_ALL_DMS]: {
                section: ec.nc_.TEXT,
                searchableTitles: [eu.intl.string(eu.t["t4+fbe"])],
                parent: ed.H.MESSAGE_SEARCH
            },
            [ed.H.CHAT_INLINE_MEDIA]: {
                section: ec.nc_.TEXT,
                searchableTitles: [eu.intl.string(eu.t.U68Dgp)],
                parent: ed.H.CHAT
            },
            [ed.H.CHAT_INLINE_MEDIA_LINKS]: {
                section: ec.nc_.TEXT,
                searchableTitles: [eu.intl.string(eu.t.U47N1p)],
                parent: ed.H.CHAT_INLINE_MEDIA
            },
            [ed.H.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: ec.nc_.TEXT,
                searchableTitles: [eu.intl.string(eu.t.VP11No)],
                parent: ed.H.CHAT_INLINE_MEDIA
            },
            [ed.H.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: ec.nc_.TEXT,
                searchableTitles: [eu.intl.string(eu.t["5S2AK+"])],
                parent: ed.H.CHAT_INLINE_MEDIA
            },
            [ed.H.CHAT_EMBEDS]: {
                section: ec.nc_.TEXT,
                searchableTitles: [eu.intl.string(eu.t.PWZOn4)],
                parent: ed.H.CHAT
            },
            [ed.H.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: ec.nc_.TEXT,
                searchableTitles: [eu.intl.string(eu.t.xX0ZTA)],
                parent: ed.H.CHAT_EMBEDS
            },
            [ed.H.CHAT_EMOJI]: {
                section: ec.nc_.TEXT,
                searchableTitles: [eu.intl.string(eu.t.sMOuuS)],
                parent: ed.H.CHAT
            },
            [ed.H.CHAT_EMOJI_REACTIONS]: {
                section: ec.nc_.TEXT,
                searchableTitles: [eu.intl.string(eu.t.Iv24sm)],
                parent: ed.H.CHAT_EMOJI
            },
            [ed.H.CHAT_EMOJI_EMOTICONS]: {
                section: ec.nc_.TEXT,
                searchableTitles: [eu.intl.string(eu.t["79qal8"])],
                parent: ed.H.CHAT_EMOJI
            },
            [ed.H.CHAT_STICKERS]: {
                section: ec.nc_.TEXT,
                searchableTitles: [eu.intl.string(eu.t["6NtAuJ"])],
                parent: ed.H.CHAT
            },
            [ed.H.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: ec.nc_.TEXT,
                searchableTitles: [eu.intl.string(eu.t["29xPVZ"])],
                parent: ed.H.CHAT_STICKERS
            },
            [ed.H.CHAT_SOUNDMOJI]: {
                section: ec.nc_.TEXT,
                searchableTitles: [eu.intl.string(eu.t.EHlAMc)],
                parent: ed.H.CHAT,
                predicate: () => (0, C.AA)({
                    location: "SettingsRendererConfig"
                })
            },
            [ed.H.CHAT_SOUNDMOJI_AUTOCOMPLETE]: {
                section: ec.nc_.TEXT,
                searchableTitles: [eu.intl.string(eu.t["CtYr+U"])],
                parent: ed.H.CHAT_SOUNDMOJI,
                predicate: () => (0, C.AA)({
                    location: "SettingsRendererConfig"
                })
            },
            [ed.H.CHAT_FAVORITES]: {
                section: ec.nc_.TEXT,
                searchableTitles: [eu.intl.string(eu.t.k8fFjp)],
                parent: ed.H.CHAT,
                predicate: () => E.o.getConfig({
                    location: "SettingsRendererConfig"
                }).enabled
            },
            [ed.H.CHAT_FAVORITES_SHOW_SERVER]: {
                section: ec.nc_.TEXT,
                searchableTitles: [eu.intl.string(eu.t.k8fFjp)],
                parent: ed.H.CHAT_FAVORITES,
                predicate: () => E.o.getConfig({
                    location: "SettingsRendererConfig"
                }).enabled
            },
            [ed.H.CHAT_TEXT_BOX]: {
                section: ec.nc_.TEXT,
                searchableTitles: [eu.intl.string(eu.t.afR0pI)],
                parent: ed.H.CHAT
            },
            [ed.H.CHAT_TEXT_BOX_PREVIEW]: {
                section: ec.nc_.TEXT,
                searchableTitles: [eu.intl.string(eu.t.AqGrEI)],
                parent: ed.H.CHAT_TEXT_BOX
            },
            [ed.H.CHAT_THREADS]: {
                section: ec.nc_.TEXT,
                searchableTitles: [eu.intl.string(eu.t.B2panI)],
                parent: ed.H.CHAT
            },
            [ed.H.CHAT_THREADS_SPLIT_VIEW]: {
                section: ec.nc_.TEXT,
                searchableTitles: [eu.intl.string(eu.t.AInv5m)],
                parent: ed.H.CHAT_THREADS
            },
            [ed.H.CHAT_SPOILERS]: {
                section: ec.nc_.TEXT,
                searchableTitles: [eu.intl.string(eu.t.QgwmVz)],
                parent: ed.H.CHAT
            },
            [ed.H.KEYBINDS]: {
                section: ec.nc_.KEYBINDS,
                searchableTitles: [eu.intl.string(eu.t.T9DA2K)],
                label: eu.intl.string(eu.t.T9DA2K),
                element: J.A
            },
            [ed.H.LANGUAGE]: {
                section: ec.nc_.LANGUAGE,
                searchableTitles: [eu.intl.string(eu.t.IHMsPn), eu.intl.string(eu.t.dyamEI), eu.intl.string(eu.t.p8NOwi), eu.intl.string(eu.t["+o/sOo"])],
                label: eu.intl.string(eu.t.KyFVyi),
                element: Q.A
            },
            [ed.H.WINDOW_SETTINGS]: {
                section: ec.nc_.WINDOWS,
                searchableTitles: [eu.intl.string(eu.t.ZkDZov)],
                label: eu.intl.string(eu.t.ZkDZov),
                element: es.A,
                predicate: () => L.isPlatformEmbedded && (0, L.isWindows)()
            },
            [ed.H.LINUX_SETTINGS]: {
                section: ec.nc_.LINUX,
                searchableTitles: [eu.intl.string(eu.t["7pPjTW"])],
                label: eu.intl.string(eu.t["7pPjTW"]),
                element: eE,
                predicate: () => L.isPlatformEmbedded && (0, L.isLinux)()
            },
            [ed.H.SETTINGS_ADVANCED]: {
                section: ec.nc_.ADVANCED,
                searchableTitles: [eu.intl.string(eu.t["8/udY0"])],
                label: eu.intl.string(eu.t["8/udY0"]),
                ariaLabel: eu.intl.string(eu.t["8/udY0"]),
                element: w.A
            },
            [ed.H.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: ec.nc_.ADVANCED,
                searchableTitles: [eu.intl.string(eu.t.ObIb1Q)],
                parent: ed.H.SETTINGS_ADVANCED,
                predicate: () => y.p5
            },
            [ed.H.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: ec.nc_.ADVANCED,
                searchableTitles: [eu.intl.string(eu.t["eOC/F2"])],
                parent: ed.H.SETTINGS_ADVANCED,
                predicate: () => L.isPlatformEmbedded && !(0, L.isMac)()
            },
            [ed.H.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: ec.nc_.ADVANCED,
                searchableTitles: [eu.intl.string(eu.t.fi3UQN)],
                parent: ed.H.SETTINGS_ADVANCED,
                predicate: () => eR
            },
            [ed.H.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: ec.nc_.ADVANCED,
                searchableTitles: [eu.intl.string(eu.t.erOqlh)],
                parent: ed.H.SETTINGS_ADVANCED,
                predicate: () => eP
            },
            [ed.H.ACTIVITY_PRIVACY]: {
                section: ec.nc_.ACTIVITY_PRIVACY,
                searchableTitles: [eu.intl.string(eu.t.Cq98yL)],
                label: eu.intl.string(eu.t.Cq98yL),
                ariaLabel: eu.intl.string(eu.t.Cq98yL),
                element: V.Ay,
                predicate: () => !ef
            },
            [ed.H.ACTIVITY_PRIVACY_STATUS]: {
                section: ef ? ec.nc_.GAMES : ec.nc_.ACTIVITY_PRIVACY,
                searchableTitles: [eu.intl.string(eu.t["8ka8li"])],
                parent: ef ? ed.H.GAMES_ACTIVITY_PRIVACY : ed.H.ACTIVITY_PRIVACY
            },
            [ed.H.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: ef ? ec.nc_.GAMES : ec.nc_.ACTIVITY_PRIVACY,
                searchableTitles: [eu.intl.string(eu.t.VOszPA)],
                parent: ef ? ed.H.GAMES_ACTIVITY_PRIVACY : ed.H.ACTIVITY_PRIVACY
            },
            [ed.H.ACTIVITY_PRIVACY_TOS]: {
                section: ef ? ec.nc_.GAMES : ec.nc_.ACTIVITY_PRIVACY,
                searchableTitles: [""],
                parent: ef ? ed.H.GAMES_ACTIVITY_PRIVACY : ed.H.ACTIVITY_PRIVACY
            },
            [ed.H.REGISTERED_GAMES]: {
                section: ec.nc_.REGISTERED_GAMES,
                searchableTitles: [eu.intl.string(eu.t.AVDyEj)],
                label: eu.intl.string(eu.t.AVDyEj),
                element: Z.Ay,
                predicate: () => !ef && (0, ea.Pi)()
            },
            [ed.H.OVERLAY]: {
                section: ec.nc_.OVERLAY,
                searchableTitles: [eu.intl.string(eu.t["9cb1Uz"]), eu.intl.string(eu.t.HcoRu0)],
                label: eu.intl.string(eu.t["9cb1Uz"]),
                element: $.Ay,
                predicate: () => !ef && eC
            },
            [ed.H.CHANGELOG]: {
                section: "changelog",
                onClick: () => (0, h.j)(!0),
                searchableTitles: [eu.intl.string(eu.t.LRmNAl)],
                label: eu.intl.string(eu.t.LRmNAl)
            },
            [ed.H.MERCHANDISE]: {
                section: "merchandise",
                onClick: () => {
                    let e = "https://discordmerch.com/Dsktopprm";
                    R.default.track(ec.HAw.USER_SETTINGS_MERCH_LINK_CLICKED), (0, P.h)({
                        href: e,
                        shouldConfirm: !0,
                        onConfirm: () => {
                            R.default.track(ec.HAw.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, g.A)(e)
                        }
                    })
                },
                searchableTitles: [eu.intl.string(eu.t.sMEktT)],
                label: eu.intl.string(eu.t.sMEktT),
                ariaLabel: eu.intl.string(eu.t.sMEktT)
            },
            [ed.H.EXPERIMENTS]: {
                section: ec.nc_.EXPERIMENTS,
                searchableTitles: ["Experiments"],
                label: "Experiments",
                element: el.A,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options"],
                label: "Developer Options",
                ariaLabel: "Developer Options",
                element: W.A,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_OVERRIDES_TAB]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Overrides"],
                parent: ed.H.DEVELOPER_OPTIONS,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_FLAGS_TAB]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Developer Options Flags"],
                parent: ed.H.DEVELOPER_OPTIONS,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_LOGGING_TAB]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Logging"],
                parent: ed.H.DEVELOPER_OPTIONS,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Manual Triggers"],
                parent: ed.H.DEVELOPER_OPTIONS,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Design Tools"],
                parent: ed.H.DEVELOPER_OPTIONS,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Tracing Requests"],
                parent: ed.H.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Forced Canary"],
                parent: ed.H.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Log Keyboard Mismatches"],
                parent: ed.H.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Gateway Events To Console"],
                parent: ed.H.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Rpc Events Commands"],
                parent: ed.H.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Events Logging"],
                parent: ed.H.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_ALWAYS_DELIVER]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Always deliver ads"],
                parent: ed.H.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eI && j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Source Maps"],
                parent: ed.H.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Analytics Debugger View"],
                parent: ed.H.DEVELOPER_OPTIONS_LOGGING_TAB,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Idle Status Indicator"],
                parent: ed.H.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eI && j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Accessibility Auditing"],
                parent: ed.H.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => !1
            },
            [ed.H.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["CSS Debugging"],
                parent: ed.H.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eI && j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_HIGHLIGHT_MANA_COMPONENTS]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Mana Components"],
                parent: ed.H.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eI && j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Highlight Void Toggleable Components"],
                parent: ed.H.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eI && j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: ed.H.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eI && j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Layout Debugging"],
                parent: ed.H.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                predicate: () => eI && j.A.isDeveloper && O.default.layoutDebuggingEnabled
            },
            [ed.H.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Preview Unpublished Collections"],
                parent: ed.H.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eI && j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable App Collections Cache"],
                parent: ed.H.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => eI && j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side"],
                parent: ed.H.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Premium Type"],
                parent: ed.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Override Client Side Account Created Data"],
                parent: ed.H.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Open Overlay"],
                parent: ed.H.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Reset Socket"],
                parent: ed.H.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Clear Caches"],
                parent: ed.H.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => A.T && j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_SHOW_TOTP_SUCCESS]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Show TOTP Success"],
                parent: ed.H.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_TRIGGER_SUSPICIOUS_SESSIONS]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Trigger Suspicious Sessions Notification"],
                parent: ed.H.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_CRASHES]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Crashes"],
                parent: ed.H.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Survey Override"],
                parent: ed.H.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Changelog Override"],
                parent: ed.H.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Build Override"],
                parent: ed.H.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Prevent Popouts From Closing Automatically"],
                parent: ed.H.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT]: {
                section: ec.nc_.DEVELOPER_OPTIONS,
                searchableTitles: ["Disable Align Chat Input"],
                parent: ed.H.DEVELOPER_OPTIONS_FLAGS_TAB,
                predicate: () => j.A.isDeveloper
            },
            [ed.H.LOGOUT]: {
                section: "logout",
                onClick: () => {
                    (0, r.A)({
                        title: eu.intl.string(eu.t["2jxGer"]),
                        subtitle: eu.intl.string(eu.t.SUnWBB),
                        confirmText: eu.intl.string(eu.t["2jxGer"]),
                        onConfirm: () => d.A.logout("settings")
                    })
                },
                label: eu.intl.string(eu.t["2jxGer"]),
                ariaLabel: eu.intl.string(eu.t["2jxGer"]),
                icon: (0, i.jsx)(o.oLl, {
                    size: "xs",
                    color: "currentColor"
                }),
                variant: "destructive"
            },
            [ed.H.SOCIAL_LINKS]: {
                section: _.Fq.CUSTOM,
                element: M.A
            },
            [ed.H.CLIENT_DEBUG_INFO]: {
                section: _.Fq.CUSTOM,
                element: D.A
            }
        })
    }