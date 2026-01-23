/** Chunk was on web.js **/
/** chunk id: 519057, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => tn,
    Re: () => ek,
    f7: () => eU,
    k3: () => eM,
    pe: () => ej
}), n(896048), n(747238);
var r, i = n(989349),
    a = n.n(i),
    s = n(877624),
    o = n(311907),
    l = n(531417),
    c = n(554146),
    u = n(506774),
    d = n(73153),
    f = n(77729),
    p = n(573648),
    _ = n(587895),
    h = n(469993),
    m = n(662427),
    g = n(826673),
    E = n(367727),
    y = n(487329),
    b = n(161518),
    O = n(49463),
    v = n(15285),
    A = n(142120),
    I = n(652896),
    S = n(585510),
    T = n(610136),
    C = n(229527),
    N = n(93474),
    w = n(164956),
    R = n(857071),
    P = n(772786),
    D = n(869968),
    x = n(923349),
    L = n(437852),
    j = n(264779),
    M = n(412260),
    k = n(426123),
    U = n(83375),
    G = n(859703),
    V = n(597936),
    F = n(34550),
    B = n(655116),
    H = n(105530),
    Y = n(942405),
    W = n(617617),
    K = n(340913),
    z = n(976910),
    q = n(616356),
    Z = n(961350),
    X = n(546183),
    Q = n(347481),
    J = n(734057),
    $ = n(962173),
    ee = n(584584),
    et = n(696451),
    en = n(71393),
    er = n(430452),
    ei = n(803224),
    ea = n(576705),
    es = n(362790),
    eo = n(383501),
    el = n(309010),
    ec = n(967198),
    eu = n(437959),
    ed = n(351906),
    ef = n(274184),
    ep = n(870570),
    e_ = n(287809),
    eh = n(977997),
    em = n(295405),
    eg = n(166403),
    eE = n(816733),
    ey = n(469778),
    eb = n(147964),
    eO = n(723702),
    ev = n(927578),
    eA = n(755439),
    eI = n(422033),
    eS = n(966846),
    eT = n(652215);
n(436317);
var eC = n(788868),
    eN = n(654487),
    ew = n(818348),
    eR = n(731854);

function eP(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function eD(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            eP(e, t, n[t])
        })
    }
    return e
}

function ex(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function eL(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ex(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let ej = {
        [eT.kqX.DOWNLOAD_NAG]: c.M.NAGBAR_NOTICE_DOWNLOAD,
        [eT.kqX.CONNECT_SPOTIFY]: c.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eT.kqX.CONNECT_PLAYSTATION]: c.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eT.kqX.PASSKEY_BACKUP]: c.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [eT.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: c.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eT.kqX.PREMIUM_REACTIVATE]: c.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eT.kqX.BOUNCED_EMAIL_DETECTED]: c.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eT.kqX.ACTIVATE_SERVER_SUBSCRIPTION]: c.M.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [eT.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: c.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eT.kqX.POMELO_ELIGIBLE]: c.M.NAGBAR_NOTICE_POMELO,
        [eT.kqX.CHECKOUT_RECOVERY_NAGBAR]: c.M.CHECKOUT_RECOVERY_NAGBAR
    },
    eM = {
        [eT.kqX.GIFTING_PROMOTION_REMINDER]: c.M.GIFTING_PROMOTION_REMINDER
    },
    ek = {
        [eT.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: c.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eT.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: c.M.NAGBAR_NOTICE_OFFER_EXPIRING
    },
    eU = {
        [eT.kqX.OUTBOUND_PROMOTION]: c.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR
    },
    eG = {
        [eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
        [eT.kqX.PREMIUM_UNCANCEL]: "hideUncancelReminder",
        [eT.kqX.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
        [eT.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
        [eT.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
        [eT.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
        [eT.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
        [eT.kqX.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
        [eT.kqX.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
        [eT.kqX.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
        [eT.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
        [eT.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
        [eT.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
        [eT.kqX.MACOS_19_DEPRECATED_MESSAGE]: "hideMacOS19DeprecationMessageNotice",
        [eT.kqX.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice"
    },
    eV = new Set([eT.kqX.NO_INPUT_DETECTED, eT.kqX.NO_INPUT_DEVICES_DETECTED, eT.kqX.STREAMER_MODE, eT.kqX.VIDEO_UNSUPPORTED_BROWSER, eT.kqX.SPOTIFY_AUTO_PAUSED, eT.kqX.DISPATCH_ERROR, eT.kqX.DISPATCH_ERROR, eT.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS, eT.kqX.BLOCKED_BY_PROXY]),
    eF = {},
    eB = {},
    eH = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null
    }),
    eY = null;

function eW(e) {
    return eG[e] + "-untilAtLeast"
}

function eK(e) {
    let t = u.w.get(eW(e));
    return null != t ? a()(t) : null
}

function ez(e, t) {
    u.w.set(eW(e), t.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
}

function eq(e) {
    u.w.remove(eW(e))
}

function eZ(e, t, n) {
    if (null == e) return;
    let r = eG[e];
    null == r || t || u.w.set(r, !0), eV.has(e) && (eF[e] = !0), null != n && null != r ? ez(e, n) : eq(e)
}

function eX(e) {
    if (null == e || null != ek[e]) return !1;
    let t = eM[e];
    if (null != t) return (0, E.En)(t).isDismissed;
    let n = ej[e];
    if (null != n) return (0, g.k8)(n);
    let r = eG[e];
    if (null != r) {
        let t = eK(e);
        if (null != t) return null == t ? void 0 : t.isAfter(a()())
    }
    let i = eF[e];
    return !!i || (null != r && "" !== r ? u.w.get(r) : !!eV.has(e) && i)
}
let eQ = [eT.kqX.QUARANTINED, eT.kqX.AUTOMOD_QUARANTINED_USER_PROFILE, eT.kqX.VIEWING_ROLES, eT.kqX.INVITED_TO_SPEAK, eT.kqX.LURKING_GUILD, eT.kqX.VOICE_DISABLED, eT.kqX.NO_INPUT_DEVICES_DETECTED, eT.kqX.NO_INPUT_DETECTED, eT.kqX.PTT_NO_KEYBIND_WARNING, eT.kqX.HARDWARE_MUTE, eT.kqX.DISPATCH_ERROR, eT.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS, eT.kqX.SPOTIFY_AUTO_PAUSED, eT.kqX.WIN32_DEPRECATED_MESSAGE, eT.kqX.WIN7_8_DEPRECATED_MESSAGE, eT.kqX.MACOS_19_DEPRECATED_MESSAGE, eT.kqX.BLOCKED_BY_PROXY, eT.kqX.VOICE_CONNECTED_LAST_SESSION, eT.kqX.SYSTEM_SERVICE_WARNING, eT.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION, eT.kqX.GUILD_RAID_NOTIFICATION, eT.kqX.GIFTING_PROMOTION_REMINDER, eT.kqX.QUESTS_PROGRESS_INTERRUPTION, eT.kqX.UNCLAIMED_ACCOUNT, eT.kqX.POMELO_ELIGIBLE, eT.kqX.PENDING_MEMBER, eT.kqX.CHECKOUT_RECOVERY_NAGBAR, eT.kqX.OUTBOUND_PROMOTION, eT.kqX.CORRUPT_INSTALLATION, eT.kqX.VIDEO_UNSUPPORTED_BROWSER, eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eT.kqX.STREAMER_MODE, eT.kqX.SCHEDULED_MAINTENANCE, eT.kqX.BOUNCED_EMAIL_DETECTED, eT.kqX.UNVERIFIED_ACCOUNT, eT.kqX.PREMIUM_TIER_2_TRIAL_ENDING, eT.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING, eT.kqX.PREMIUM_TIER_0_TRIAL_ENDING, eT.kqX.PREMIUM_UNCANCEL, eT.kqX.PREMIUM_MISSING_PAYMENT, eT.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT, eT.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT, eT.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eT.kqX.PREMIUM_REACTIVATE, eT.kqX.ACTIVATE_SERVER_SUBSCRIPTION, eT.kqX.PASSKEY_BACKUP, eT.kqX.APPLICATION_TEST_MODE, eT.kqX.DOWNLOAD_NAG, eT.kqX.CONNECT_SPOTIFY, eT.kqX.CONNECT_PLAYSTATION, eT.kqX.SURVEY, eT.kqX.SAFETY_USER_SENTIMENT_NAGBAR, eT.kqX.BLOCK_USER_FEEDBACK_NAGBAR, eT.kqX.IGNORE_USER_FEEDBACK_NAGBAR];
eT.kqX.QUARANTINED, eT.kqX.AUTOMOD_QUARANTINED_USER_PROFILE, eT.kqX.VIEWING_ROLES, eT.kqX.INVITED_TO_SPEAK, eT.kqX.LURKING_GUILD, eT.kqX.VOICE_DISABLED, eT.kqX.NO_INPUT_DETECTED, eT.kqX.HARDWARE_MUTE, eT.kqX.DISPATCH_ERROR, eT.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS, eT.kqX.SPOTIFY_AUTO_PAUSED, eT.kqX.BLOCKED_BY_PROXY, eT.kqX.VOICE_CONNECTED_LAST_SESSION, eT.kqX.PENDING_MEMBER, eT.kqX.STREAMER_MODE, eT.kqX.SCHEDULED_MAINTENANCE;
let eJ = {
    [eT.kqX.GIFTING_PROMOTION_REMINDER]: {
        predicate: () => {
            let {
                enabled: e
            } = L.qe.getCurrentConfig({
                location: "NoticeStore"
            }, {
                autoTrackExposure: !1
            }), {
                enabled: t
            } = L.Fq.getConfig({
                location: "NoticeStore"
            }), n = M.A.getMarketingComponentByType(s.C.GIFT_REMINDER_NAGBAR);
            return e && t && null != n && (0, E.En)(c.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed && !eX(eT.kqX.GIFTING_PROMOTION_REMINDER)
        }
    },
    [eT.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, S.dj)().show && !eX(eT.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({
            dismissUntil: a()().add(3, "hours").toDate()
        })
    },
    [eT.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: e => {
            let {
                currentUser: t,
                selectedGuildId: n
            } = e;
            if (null == n) return !1;
            let r = et.Ay.getMember(n, t.id);
            return null != r && !r.isPending && (0, C.TR)(r)
        }
    },
    [eT.kqX.QUARANTINED]: {
        predicate: e => {
            let {
                currentUser: t
            } = e;
            return t.hasFlag(eT.nhx.QUARANTINED)
        }
    },
    [eT.kqX.VIEWING_ROLES]: {
        predicate: e => {
            let {
                selectedGuildId: t
            } = e;
            return w.A.isViewingRoles(t)
        }
    },
    [eT.kqX.INVITED_TO_SPEAK]: {
        predicate: e => {
            let {
                voiceState: t
            } = e;
            return (0, H.eY)(t) === H.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
        }
    },
    [eT.kqX.LURKING_GUILD]: {
        predicate: e => {
            let {
                selectedGuildId: t
            } = e;
            return null != t && R.A.isLurking(t)
        }
    },
    [eT.kqX.VOICE_DISABLED]: {
        predicate: () => null != eo.A.getRemoteDisconnectVoiceChannelId()
    },
    [eT.kqX.VOICE_CONNECTED_LAST_SESSION]: {
        predicate: () => null != eo.A.getLastSessionVoiceChannelId()
    },
    [eT.kqX.NO_INPUT_DETECTED]: {
        predicate: () => b.A.hasActiveErrorOfType(y.iy.NO_AUDIO_INPUT_DETECTED)
    },
    [eT.kqX.NO_INPUT_DEVICES_DETECTED]: {
        predicate: () => b.A.hasActiveErrorOfType(y.iy.NO_INPUT_DEVICES)
    },
    [eT.kqX.HARDWARE_MUTE]: {
        predicate: () => eo.A.isConnected() && er.A.isHardwareMute() && er.A.isEnableHardwareMuteNotice(),
        metadata: () => {
            let e = er.A.getInputDeviceId(),
                t = Q.A.getVendor(e),
                n = Q.A.getModel(e);
            if (null != t && null != n) return {
                vendor: t,
                model: n
            }
        }
    },
    [eT.kqX.PTT_NO_KEYBIND_WARNING]: {
        predicate: () => !!eo.A.isConnected() && er.A.getMode() === eT.TBI.PUSH_TO_TALK && !(er.A.getSettings().modeOptions.shortcut.length > 0) && !!K.A.getConfig({
            location: "NoticeStore"
        }).showPTTNoKeybindWarning
    },
    [eT.kqX.DISPATCH_ERROR]: {
        predicate: () => null != eA.A.getLastError(),
        metadata: () => ({
            error: eA.A.getLastError()
        })
    },
    [eT.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != eI.A.getLastProgress(),
        metadata: () => eI.A.getLastProgress()
    },
    [eT.kqX.SPOTIFY_AUTO_PAUSED]: {
        predicate: () => B.A.wasAutoPaused()
    },
    [eT.kqX.BLOCKED_BY_PROXY]: {
        predicate: () => !eX(eT.kqX.BLOCKED_BY_PROXY) && U.A.blockedByProxy && k.A.getCurrentConfig({
            location: "notice_store"
        }).eligibleForNotice
    },
    [eT.kqX.UNCLAIMED_ACCOUNT]: {
        predicate: e => {
            let {
                currentUser: t
            } = e;
            return null != t && !t.isClaimed()
        }
    },
    [eT.kqX.PENDING_MEMBER]: {
        predicate: e => {
            var t, n, r;
            let {
                selectedGuildId: i,
                currentUser: a
            } = e;
            return null != (t = null != i && null != a && !(null == (n = en.A.getGuild(i)) ? void 0 : n.features.has(eT.GuildFeatures.GUILD_ONBOARDING)) && (null == (r = et.Ay.getMember(i, a.id)) ? void 0 : r.isPending)) && t
        }
    },
    [eT.kqX.OUTBOUND_PROMOTION]: {
        predicate: () => (0, j.So)()
    },
    [eT.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => eO.isPlatformEmbedded && (!l.A.supported() || eS.A.isCorruptInstallation())
    },
    [eT.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: e => {
            let {
                voiceChannelId: t
            } = e;
            return null != t && eh.A.hasVideo(t) && !er.A.supports(eR.O5.VIDEO) && !eX(eT.kqX.VIDEO_UNSUPPORTED_BROWSER)
        }
    },
    [eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: e => {
            let {
                currentUser: t
            } = e;
            return ev.Ay.canRedeemPremiumPerks(t) && ee.A.getDetectedOffPlatformPremiumPerks().length > 0
        },
        metadata: () => ee.A.getDetectedOffPlatformPremiumPerks()[0]
    },
    [eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () => !eX(eT.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && ee.A.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => ee.A.getDetectedOffPlatformPremiumPerks()[0]
    },
    [eT.kqX.STREAMER_MODE]: {
        predicate: () => ed.A.enabled
    },
    [eT.kqX.DOWNLOAD_NAG]: {
        predicate: () => !eO.isPlatformEmbedded && !eX(eT.kqX.DOWNLOAD_NAG)
    },
    [eT.kqX.SCHEDULED_MAINTENANCE]: {
        predicate: () => null != eu.A.getScheduledMaintenance(),
        metadata: () => {
            let e = eu.A.getScheduledMaintenance();
            if (null != e) return {
                id: e.id,
                start: new Date(e.scheduled_for),
                end: new Date(e.scheduled_until)
            }
        }
    },
    [eT.kqX.SURVEY]: {
        predicate: () => null != ef.Ay.getCurrentSurvey(),
        metadata: () => ef.Ay.getCurrentSurvey()
    },
    [eT.kqX.UNVERIFIED_ACCOUNT]: {
        predicate: e => {
            let {
                currentUser: t
            } = e;
            return (null == t ? void 0 : t.email) != null && !t.verified
        }
    },
    [eT.kqX.BOUNCED_EMAIL_DETECTED]: {
        predicate: e => {
            let {
                currentUser: t
            } = e;
            return null == t ? void 0 : t.hasBouncedEmail
        }
    },
    [eT.kqX.CONNECT_SPOTIFY]: {
        predicate: () => !B.A.hasConnectedAccount() && v.Ay.isObservedAppRunning(p.A.get(eT.fg2.SPOTIFY).name) && !eX(eT.kqX.CONNECT_SPOTIFY)
    },
    [eT.kqX.WIN32_DEPRECATED_MESSAGE]: {
        predicate: () => (null === f.A || void 0 === f.A ? void 0 : f.A.os.arch) === "ia32" && (null === f.A || void 0 === f.A ? void 0 : f.A.process.platform) === "win32",
        metadata: () => ({
            dismissUntil: a()().add(5, "days").toDate()
        })
    },
    [eT.kqX.WIN7_8_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if ((null === f.A || void 0 === f.A ? void 0 : f.A.process.platform) === "win32") try {
                return 10 > parseInt(null === f.A || void 0 === f.A ? void 0 : f.A.os.release.split(".")[0])
            } catch (e) {}
            return !1
        },
        metadata: () => ({
            dismissUntil: a()().add(5, "days").toDate()
        })
    },
    [eT.kqX.MACOS_19_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if ((null === f.A || void 0 === f.A ? void 0 : f.A.process.platform) === "darwin") try {
                return 20 > parseInt(null === f.A || void 0 === f.A ? void 0 : f.A.os.release.split(".")[0])
            } catch (e) {}
            return !1
        },
        metadata: () => ({
            dismissUntil: a()().add(5, "days").toDate()
        })
    },
    [eT.kqX.CONNECT_PLAYSTATION]: {
        predicate: () => $.A.isSuggestedAccountType(eT.fg2.PLAYSTATION) && null == $.A.getAccount(null, eT.fg2.PLAYSTATION) && !eX(eT.kqX.CONNECT_PLAYSTATION)
    },
    [eT.kqX.PASSKEY_BACKUP]: {
        predicate: e => {
            let {
                currentUser: t
            } = e;
            return (null == t ? void 0 : t.mfaEnabled) && z.A.hasFetchedCredentials() && !z.A.hasCredentials && !eX(eT.kqX.PASSKEY_BACKUP)
        }
    },
    [eT.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () => eE.A.getAlmostExpiringTrialOffers([eC.pe.TIER_2]).length > 0 && !eX(eT.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
    },
    [eT.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () => eE.A.getAlmostExpiringTrialOffers([eC.pe.TIER_0]).length > 0 && !eX(eT.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
    },
    [eT.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () => eE.A.getAlmostExpiringDiscountOffers([eC.pe.TIER_2]).length > 0 && !eX(eT.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
    },
    [eT.kqX.PREMIUM_UNCANCEL]: {
        predicate: e => {
            let {
                premiumSubscription: t,
                currentUser: n
            } = e, r = null != t ? a()(t.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0, i = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eT.Dmq.CANCELED && 1 >= a()().diff(a()(t.canceledAt), "days"), s = null != t && a()(t.currentPeriodEnd).isBefore(a()()), o = null != t && t.status === eT.Dmq.CANCELED && !s && r <= 7 && r >= 0 && (0, ev.YE)(n, eC.PremiumTypes.TIER_2) && !i && !n.hasFreePremium() && !t.isPurchasedExternally;
            return !eX(eT.kqX.PREMIUM_UNCANCEL) && o
        },
        metadata: e => {
            var t;
            let {
                premiumSubscription: n
            } = e, r = null != n ? a()(n.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0, i = null != n ? null == (t = (0, ev.EL)(n)) ? void 0 : t.planId : null;
            return {
                daysLeft: r,
                premiumType: null != i ? ev.Ay.getPremiumType(i) : null,
                premiumSubscription: n
            }
        }
    },
    [eT.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: e => {
            let {
                premiumSubscription: t,
                currentUser: n
            } = e, r = null != t ? a()(t.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0, i = (null != t ? a()(t.currentPeriodEnd).diff(a()(t.currentPeriodStart).startOf("day"), "days") : 0) > 14 ? 7 : 2, s = null != t && a()(t.currentPeriodEnd).isBefore(a()()), o = ey.A.applicationIdsFetched.has(eC.tv), l = ey.A.getForApplication(eC.tv), c = null != t ? (0, ev.EL)(t) : null, u = null != c ? ev.Ay.getSkuIdForPlan(c.planId) : null, d = null != l && null != c && Array.from(l).filter(e => {
                let {
                    skuId: t,
                    consumed: n
                } = e;
                return !n && t === u
            }).length > 0, f = null != t && r <= i && r >= 0 && t.status !== eT.Dmq.PAST_DUE && !s && o && !d && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
            return !eX(eT.kqX.PREMIUM_MISSING_PAYMENT) && f
        },
        metadata: e => {
            var t;
            let {
                premiumSubscription: n
            } = e, r = null != n ? a()(n.currentPeriodEnd).diff(a()().startOf("day"), "days") : 0, i = null != n ? null == (t = (0, ev.EL)(n)) ? void 0 : t.planId : null;
            return {
                daysLeft: r,
                premiumType: null != i ? ev.Ay.getPremiumType(i) : null,
                premiumSubscription: n
            }
        }
    },
    [eT.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
        predicate: e => {
            let {
                premiumSubscription: t,
                currentUser: n
            } = e, r = null != t && null != t.paymentSourceId ? em.A.getPaymentSource(t.paymentSourceId) : null, i = null != t && a()(t.currentPeriodEnd).isBefore(a()()), s = null != t && t.status === eT.Dmq.PAST_DUE && !i && null != r && r.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
            return !eX(eT.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && s
        },
        metadata: e => {
            let {
                premiumSubscription: t
            } = e;
            return {
                premiumSubscription: t
            }
        }
    },
    [eT.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
        predicate: e => {
            let {
                premiumSubscription: t,
                currentUser: n
            } = e, r = null != t && a()(t.currentPeriodEnd).isBefore(a()()), i = null != t && t.status === eT.Dmq.PAST_DUE && !r && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
            return !eX(eT.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && i
        },
        metadata: e => {
            let {
                premiumSubscription: t
            } = e;
            return {
                premiumSubscription: t
            }
        }
    },
    [eT.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != eb.A.testModeApplicationId,
        metadata: () => {
            if (null == eb.A.testModeApplicationId) return {};
            let e = eb.A.testModeApplicationId,
                t = _.A.getApplication(e);
            return {
                applicationName: null != t ? t.name : e,
                applicationId: e
            }
        }
    },
    [eT.kqX.PREMIUM_REACTIVATE]: {
        predicate: () => !eX(eT.kqX.PREMIUM_REACTIVATE) && x.A.shouldShowReactivateNotice()
    },
    [eT.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: e => {
            let {
                premiumSubscription: t,
                currentUser: n
            } = e, r = null != t && a()(t.currentPeriodEnd).isBefore(a()()), i = null != t && null != t.paymentSourceId ? em.A.getPaymentSource(t.paymentSourceId) : null, s = null != i && ew.AD.has(i.type), o = null != t && t.status === eT.Dmq.PAST_DUE && !r && s && !n.hasFreePremium() && !t.isPurchasedExternally;
            return !eX(eT.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && o
        },
        metadata: e => {
            let {
                premiumSubscription: t
            } = e;
            return null == t ? {
                daysPastDue: 0,
                dismissUntil: a()().toDate()
            } : {
                daysPastDue: t.status === eT.Dmq.PAST_DUE ? a()().diff(t.currentPeriodStart, "days") : 0,
                dismissUntil: (0, ev.ji)(t).expiresDate.toDate()
            }
        }
    },
    [eT.kqX.POMELO_ELIGIBLE]: {
        predicate: () => (0, P.x)() && !eX(eT.kqX.POMELO_ELIGIBLE)
    },
    [eT.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: e => {
            let {
                selectedGuildId: t
            } = e, n = null != t ? en.A.getGuild(t) : null;
            return null != t && null != N.A.getMentionRaidDetected(t) && (null == n ? void 0 : n.features.has(eT.GuildFeatures.COMMUNITY)) && !eX(eT.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION) || !1
        },
        metadata: e => {
            let {
                selectedGuildId: t
            } = e, n = {
                dismissUntil: a()().add(2, "hours").toDate()
            };
            if (null != t) {
                let e = N.A.getMentionRaidDetected(t);
                null != e && (n.decisionId = e.decisionId)
            }
            return n
        }
    },
    [eT.kqX.ACTIVATE_SERVER_SUBSCRIPTION]: {
        predicate: () => !eX(eT.kqX.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== m.A.getEligibleGuildsForNagActivate().length && (0, h.KD)()
    },
    [eT.kqX.SAFETY_USER_SENTIMENT_NAGBAR]: {
        predicate: e => {
            let {
                currentUser: t
            } = e;
            return V.BN(t)
        }
    },
    [eT.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = q.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, I._z)(e),
                n = G.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= eN.tZ
        },
        metadata: () => {
            let e = q.A.getCurrentUserActiveStream();
            return {
                streamKey: null != e ? (0, I._z)(e) : null
            }
        }
    },
    [eT.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: e => {
            var t;
            let {
                currentUser: n
            } = e, r = null != (t = em.A.paymentSources) ? t : {};
            return D.A.getIsTargeted() && !(0, ev.TW)(n) && 0 !== Object.keys(r).length
        }
    },
    [eT.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !eX(eT.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && F.Cm(),
        metadata: () => ({
            dismissUntil: a()().add(180, "days").toDate(),
            sampleRate: .1
        })
    },
    [eT.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: {
        predicate: () => F.h6(),
        metadata: () => ({
            sampleRate: .1
        })
    },
    [eT.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: e => {
            let {
                voiceChannelId: t
            } = e;
            if (eX(eT.kqX.SYSTEM_SERVICE_WARNING) || !(0, Y.yA)(v.Ay) || null == t || er.A.getMode() !== eT.TBI.PUSH_TO_TALK) return !1;
            let n = v.Ay.getVisibleGame();
            return null != n && !!n.elevated
        }
    }
};

function e$() {
    var e, t, n;
    if (!A.A.isConnected()) return !1;
    eY = null;
    let r = e_.default.getCurrentUser();
    if (null == r) return !1;
    let i = eg.A.getPremiumSubscription(),
        a = ec.A.getGuildId(),
        s = el.A.getVoiceChannelId(),
        o = null != s ? eh.A.getVoiceStateForChannel(s) : null;
    for (let n of eQ)
        if (null != eJ[n] && eJ[n].predicate({
                selectedGuildId: a,
                voiceChannelId: s,
                voiceState: o,
                currentUser: r,
                premiumSubscription: i
            })) {
            let s = null == (e = (t = eJ[n]).metadata) ? void 0 : e.call(t, {
                currentUser: r,
                premiumSubscription: i,
                selectedGuildId: a
            });
            eY = eL(eD({}, eH), {
                type: n,
                metadata: s
            });
            break
        } if (null != eY) {
        (null == (n = eY.metadata) ? void 0 : n.sampleRate) != null && null == eB[eY.type] && (eB[eY.type] = Math.random() <= eY.metadata.sampleRate);
        let e = !1 === eB[eY.type];
        (eX(eY.type) || e) && (eY = null)
    }
}

function e0(e) {
    let {
        voiceStates: t
    } = e;
    return ((null == eY ? void 0 : eY.type) === eT.kqX.INVITED_TO_SPEAK || t.some(e => {
        let {
            userId: t
        } = e;
        return t !== Z.default.getId()
    })) && e$()
}

function e1(e) {
    eY = e.notice
}

function e2(e) {
    return null != eY && (null == e.id || e.id === eY.id) && (eZ(eY.type, e.isTemporary, e.untilAtLeast), e$())
}

function e3(e) {
    let {
        noticeType: t
    } = e;
    return eZ(t), e$()
}

function e6() {
    return ed.A.enabled || delete eF[eT.kqX.STREAMER_MODE], e$()
}

function e4() {
    return delete eF[eT.kqX.DISPATCH_ERROR], e$()
}

function e5() {
    return delete eF[eT.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], e$()
}

function e7() {
    return e$()
}

function e8() {
    return e$()
}

function e9(e) {
    return e.user.id === Z.default.getId() && e$()
}

function te() {
    eF = {}, eB = {}, eY = null
}
class tt extends(r = o.Ay.Store) {
    initialize() {
        this.syncWith([ef.Ay, es.A, ee.A, ec.A, M.A, eE.A, X.default, $.A, W.A, T.A, G.A, q.A, v.Ay, z.A], e$), this.waitFor(b.A, _.A, q.A, Z.default, X.default, Q.A, J.A, D.A, $.A, m.A, ee.A, eA.A, eI.A, eS.A, ey.A, O.A, A.A, N.A, T.A, et.Ay, en.A, w.A, R.A, er.A, ei.A, em.A, ea.A, es.A, M.A, U.A, G.A, eo.A, v.Ay, el.A, ec.A, B.A, eu.A, ed.A, x.A, eg.A, ef.Ay, eb.A, eE.A, ep.A, W.A, e_.default, eh.A, z.A)
    }
    hasNotice() {
        return null != eY && null != eY.type
    }
    getNotice() {
        return null == ep.A.getAction() ? eY : null
    }
    isNoticeDismissed(e) {
        return eX(e)
    }
}
eP(tt, "displayName", "NoticeStore");
let tn = new tt(d.h, {
    CURRENT_USER_UPDATE: e$,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: e$,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: e$,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: e$,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: e$,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: e$,
    GUILD_CREATE: e$,
    GUILD_DELETE: e$,
    AUDIO_INPUT_DETECTED: e$,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: e$,
    CERTIFIED_DEVICES_SET: e$,
    AUDIO_SET_INPUT_DEVICE: e$,
    AUDIO_SET_OUTPUT_DEVICE: e$,
    MEDIA_ENGINE_DEVICES: e$,
    RTC_CONNECTION_STATE: e$,
    RPC_APP_AUTHENTICATED: e$,
    RPC_APP_DISCONNECTED: e$,
    USER_CONNECTIONS_UPDATE: e$,
    WINDOW_FOCUS: e$,
    INSTANT_INVITE_CREATE: e$,
    INSTANT_INVITE_REVOKE_SUCCESS: e$,
    SPOTIFY_PLAYER_PAUSE: e$,
    RUNNING_GAMES_CHANGE: e$,
    EXPERIMENTS_FETCH_SUCCESS: e$,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: e$,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: e$,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: e$,
    DEVELOPER_TEST_MODE_RESET: e$,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: e$,
    DISPATCH_APPLICATION_INSTALL: e$,
    IMPERSONATE_STOP: e$,
    IMPERSONATE_UPDATE: e$,
    GUILD_MEMBER_ADD: e9,
    GUILD_MEMBER_UPDATE: e$,
    SURVEY_FETCHED: e$,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: e$,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: e$,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: e$,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: e$,
    VOICE_STATE_UPDATES: e0,
    STREAMER_MODE_UPDATE: e6,
    RUNNING_STREAMER_TOOLS_CHANGE: e6,
    DISPATCH_APPLICATION_ERROR: e4,
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: e5,
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: e7,
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: e8,
    NOTICE_SHOW: e1,
    NOTICE_DISMISS: e2,
    NOTICE_DISABLE: e3,
    LOGOUT: te,
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: e$,
    AUTO_MODERATION_MENTION_RAID_DETECTION: e$,
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: e$,
    PROXY_BLOCKED_REQUEST: e$,
    REPORT_AV_ERROR: e$,
    AUDIO_SET_MODE: e$
})