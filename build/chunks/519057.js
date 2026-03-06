/** chunk id: 519057 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => eJ,
    Re: () => ex,
    f7: () => eG,
    k3: () => eL,
    pe: () => ek
});
var i = n(989349),
    r = n.n(i),
    l = n(877624),
    s = n(311907),
    a = n(531417),
    o = n(554146),
    E = n(506774),
    c = n(73153),
    _ = n(77729),
    d = n(573648),
    A = n(587895),
    u = n(469993),
    T = n(662427),
    I = n(826673),
    N = n(367727),
    R = n(487329),
    S = n(161518),
    O = n(49463),
    p = n(15285),
    C = n(142120),
    P = n(652896),
    D = n(585510),
    M = n(610136),
    U = n(229527),
    g = n(93474),
    m = n(164956),
    h = n(857071),
    y = n(751496),
    f = n(780732),
    k = n(869968),
    L = n(923349),
    x = n(437852),
    G = n(264779),
    j = n(412260),
    q = n(160394),
    X = n(859703),
    B = n(597936),
    b = n(34550),
    v = n(655116),
    V = n(105530),
    F = n(942405),
    w = n(964404),
    H = n(617617),
    W = n(340913),
    $ = n(976910),
    Y = n(616356),
    K = n(961350),
    Q = n(546183),
    z = n(347481),
    J = n(734057),
    Z = n(962173),
    ee = n(584584),
    et = n(696451),
    en = n(71393),
    ei = n(430452),
    er = n(803224),
    el = n(576705),
    es = n(362790),
    ea = n(383501),
    eo = n(309010),
    eE = n(967198),
    ec = n(437959),
    e_ = n(351906),
    ed = n(274184),
    eA = n(870570),
    eu = n(287809),
    eT = n(977997),
    eI = n(295405),
    eN = n(166403),
    eR = n(816733),
    eS = n(469778),
    eO = n(147964),
    ep = n(723702),
    eC = n(927578),
    eP = n(837921),
    eD = n(755439),
    eM = n(422033),
    eU = n(966846),
    eg = n(652215);
n(436317);
var em = n(788868),
    eh = n(654487),
    ey = n(818348),
    ef = n(731854);
let ek = {
        [eg.kqX.DOWNLOAD_NAG]: o.M.NAGBAR_NOTICE_DOWNLOAD,
        [eg.kqX.CONNECT_SPOTIFY]: o.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eg.kqX.CONNECT_PLAYSTATION]: o.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eg.kqX.PASSKEY_BACKUP]: o.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [eg.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eg.kqX.PREMIUM_REACTIVATE]: o.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eg.kqX.BOUNCED_EMAIL_DETECTED]: o.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eg.kqX.ACTIVATE_SERVER_SUBSCRIPTION]: o.M.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [eg.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eg.kqX.CHECKOUT_RECOVERY_NAGBAR]: o.M.CHECKOUT_RECOVERY_NAGBAR,
        [eg.kqX.QUEST_APP_UPSELL]: o.M.NAGBAR_QUEST_APP_UPSELL
    },
    eL = {
        [eg.kqX.GIFTING_PROMOTION_REMINDER]: o.M.GIFTING_PROMOTION_REMINDER
    },
    ex = {
        [eg.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: o.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [eg.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: o.M.NAGBAR_NOTICE_OFFER_EXPIRING
    },
    eG = {
        [eg.kqX.OUTBOUND_PROMOTION]: o.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR
    },
    ej = {
        [eg.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
        [eg.kqX.PREMIUM_UNCANCEL]: "hideUncancelReminder",
        [eg.kqX.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
        [eg.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
        [eg.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
        [eg.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
        [eg.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
        [eg.kqX.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
        [eg.kqX.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
        [eg.kqX.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
        [eg.kqX.WIN_COMPAT_MODE_MESSAGE]: "hideWinCompatModeNotice",
        [eg.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
        [eg.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
        [eg.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
        [eg.kqX.MACOS_19_DEPRECATED_MESSAGE]: "hideMacOS19DeprecationMessageNotice",
        [eg.kqX.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
        [eg.kqX.E2EE_UPDATE_REQUIRED]: "hideE2EEUpdateRequiredNotice"
    },
    eq = new Set([eg.kqX.NO_INPUT_DETECTED, eg.kqX.NO_INPUT_DEVICES_DETECTED, eg.kqX.STREAMER_MODE, eg.kqX.VIDEO_UNSUPPORTED_BROWSER, eg.kqX.SPOTIFY_AUTO_PAUSED, eg.kqX.DISPATCH_ERROR, eg.kqX.DISPATCH_ERROR, eg.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS, eg.kqX.WINDOWS_MEDIA_PACK_REQUIRED]),
    eX = {},
    eB = {},
    eb = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null
    }),
    ev = null;

function eV(e) {
    return ej[e] + "-untilAtLeast"
}

function eF(e, t, n) {
    if (null == e) return;
    let i = ej[e];
    (null == i || t || E.w.set(i, !0), eq.has(e) && (eX[e] = !0), null != n && null != i) ? E.w.set(eV(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ")): E.w.remove(eV(e))
}
let ew = null;

function eH() {
    if (null != ew) return ew;
    try {
        let e = document.createElement("canvas").getContext("2d"),
            t = "";
        e.font = "16px monospace";
        let n = e.measureText(t).width;
        e.font = '16px "Segoe MDL2 Assets", monospace', ew = e.measureText(t).width !== n
    } catch (e) {
        ew = !1
    }
    return ew
}

function eW(e) {
    if (null == e || null != ex[e]) return !1;
    let t = eL[e];
    if (null != t) return (0, N.En)(t).isDismissed;
    let n = ek[e];
    if (null != n) return (0, I.k8)(n);
    let i = ej[e];
    if (null != i) {
        let t, n = null != (t = E.w.get(eV(e))) ? r()(t) : null;
        if (null != n) return n?.isAfter(r()())
    }
    let l = eX[e];
    return !!l || (null != i && "" !== i ? E.w.get(i) : !!eq.has(e) && l)
}
let e$ = [eg.kqX.QUARANTINED, eg.kqX.AUTOMOD_QUARANTINED_USER_PROFILE, eg.kqX.VIEWING_ROLES, eg.kqX.INVITED_TO_SPEAK, eg.kqX.LURKING_GUILD, eg.kqX.VOICE_DISABLED, eg.kqX.NO_INPUT_DEVICES_DETECTED, eg.kqX.NO_INPUT_DETECTED, eg.kqX.PTT_NO_KEYBIND_WARNING, eg.kqX.HARDWARE_MUTE, eg.kqX.DISPATCH_ERROR, eg.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS, eg.kqX.SPOTIFY_AUTO_PAUSED, eg.kqX.WIN32_DEPRECATED_MESSAGE, eg.kqX.WIN7_8_DEPRECATED_MESSAGE, eg.kqX.WIN_COMPAT_MODE_MESSAGE, eg.kqX.MACOS_19_DEPRECATED_MESSAGE, eg.kqX.E2EE_UPDATE_REQUIRED, eg.kqX.WINDOWS_MEDIA_PACK_REQUIRED, eg.kqX.VOICE_CONNECTED_LAST_SESSION, eg.kqX.SYSTEM_SERVICE_WARNING, eg.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION, eg.kqX.GUILD_RAID_NOTIFICATION, eg.kqX.GIFTING_PROMOTION_REMINDER, eg.kqX.QUESTS_PROGRESS_INTERRUPTION, eg.kqX.UNCLAIMED_ACCOUNT, eg.kqX.PENDING_MEMBER, eg.kqX.CHECKOUT_RECOVERY_NAGBAR, eg.kqX.OUTBOUND_PROMOTION, eg.kqX.CORRUPT_INSTALLATION, eg.kqX.VIDEO_UNSUPPORTED_BROWSER, eg.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eg.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eg.kqX.STREAMER_MODE, eg.kqX.SCHEDULED_MAINTENANCE, eg.kqX.BOUNCED_EMAIL_DETECTED, eg.kqX.UNVERIFIED_ACCOUNT, eg.kqX.PREMIUM_TIER_2_TRIAL_ENDING, eg.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING, eg.kqX.PREMIUM_TIER_0_TRIAL_ENDING, eg.kqX.PREMIUM_UNCANCEL, eg.kqX.PREMIUM_MISSING_PAYMENT, eg.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT, eg.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT, eg.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eg.kqX.PREMIUM_REACTIVATE, eg.kqX.ACTIVATE_SERVER_SUBSCRIPTION, eg.kqX.PASSKEY_BACKUP, eg.kqX.APPLICATION_TEST_MODE, eg.kqX.QUEST_APP_UPSELL, eg.kqX.DOWNLOAD_NAG, eg.kqX.CONNECT_SPOTIFY, eg.kqX.CONNECT_PLAYSTATION, eg.kqX.SURVEY, eg.kqX.SAFETY_USER_SENTIMENT_NAGBAR, eg.kqX.BLOCK_USER_FEEDBACK_NAGBAR, eg.kqX.IGNORE_USER_FEEDBACK_NAGBAR];
eg.kqX.QUARANTINED, eg.kqX.AUTOMOD_QUARANTINED_USER_PROFILE, eg.kqX.VIEWING_ROLES, eg.kqX.INVITED_TO_SPEAK, eg.kqX.LURKING_GUILD, eg.kqX.VOICE_DISABLED, eg.kqX.NO_INPUT_DETECTED, eg.kqX.HARDWARE_MUTE, eg.kqX.DISPATCH_ERROR, eg.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS, eg.kqX.SPOTIFY_AUTO_PAUSED, eg.kqX.VOICE_CONNECTED_LAST_SESSION, eg.kqX.PENDING_MEMBER, eg.kqX.STREAMER_MODE, eg.kqX.SCHEDULED_MAINTENANCE;
let eY = {
    [eg.kqX.GIFTING_PROMOTION_REMINDER]: {
        predicate: () => {
            let {
                enabled: e
            } = x.qe.getCurrentConfig({
                location: "NoticeStore"
            }, {
                autoTrackExposure: !1
            }), {
                enabled: t
            } = x.Fq.getConfig({
                location: "NoticeStore"
            }), n = j.A.getMarketingComponentByType(l.C.GIFT_REMINDER_NAGBAR);
            return e && t && null != n && (0, N.En)(o.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed && !eW(eg.kqX.GIFTING_PROMOTION_REMINDER)
        }
    },
    [eg.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, D.dj)().show && !eW(eg.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({
            dismissUntil: r()().add(3, "hours").toDate()
        })
    },
    [eg.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: e => {
            let {
                currentUser: t,
                selectedGuildId: n
            } = e;
            if (null == n) return !1;
            let i = et.Ay.getMember(n, t.id);
            return null != i && !i.isPending && (0, U.TR)(i)
        }
    },
    [eg.kqX.QUARANTINED]: {
        predicate: e => {
            let {
                currentUser: t
            } = e;
            return t.hasFlag(eg.nhx.QUARANTINED)
        }
    },
    [eg.kqX.VIEWING_ROLES]: {
        predicate: e => {
            let {
                selectedGuildId: t
            } = e;
            return m.A.isViewingRoles(t)
        }
    },
    [eg.kqX.INVITED_TO_SPEAK]: {
        predicate: e => {
            let {
                voiceState: t
            } = e;
            return (0, V.eY)(t) === V.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
        }
    },
    [eg.kqX.LURKING_GUILD]: {
        predicate: e => {
            let {
                selectedGuildId: t
            } = e;
            return null != t && h.A.isLurking(t)
        }
    },
    [eg.kqX.VOICE_DISABLED]: {
        predicate: () => null != ea.A.getRemoteDisconnectVoiceChannelId()
    },
    [eg.kqX.VOICE_CONNECTED_LAST_SESSION]: {
        predicate: () => null != ea.A.getLastSessionVoiceChannelId()
    },
    [eg.kqX.NO_INPUT_DETECTED]: {
        predicate: () => S.A.hasActiveErrorOfType(R.iy.NO_AUDIO_INPUT_DETECTED)
    },
    [eg.kqX.NO_INPUT_DEVICES_DETECTED]: {
        predicate: () => S.A.hasActiveErrorOfType(R.iy.NO_INPUT_DEVICES)
    },
    [eg.kqX.HARDWARE_MUTE]: {
        predicate: () => ea.A.isConnected() && ei.Ay.isHardwareMute() && ei.Ay.isHardwareMuteNoticeEnabled() && !w.Ay.disableHardwareMuteSilenceAlert,
        metadata: () => {
            let e = ei.Ay.getInputDeviceId(),
                t = z.A.getVendor(e),
                n = z.A.getModel(e);
            if (null != t && null != n) return {
                vendor: t,
                model: n
            }
        }
    },
    [eg.kqX.PTT_NO_KEYBIND_WARNING]: {
        predicate: () => !!ea.A.isConnected() && ei.Ay.getMode() === eg.TBI.PUSH_TO_TALK && !(ei.Ay.getSettings().modeOptions.shortcut.length > 0) && !!W.A.getConfig({
            location: "NoticeStore"
        }).showPTTNoKeybindWarning
    },
    [eg.kqX.DISPATCH_ERROR]: {
        predicate: () => null != eD.A.getLastError(),
        metadata: () => ({
            error: eD.A.getLastError()
        })
    },
    [eg.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != eM.A.getLastProgress(),
        metadata: () => eM.A.getLastProgress()
    },
    [eg.kqX.SPOTIFY_AUTO_PAUSED]: {
        predicate: () => v.A.wasAutoPaused()
    },
    [eg.kqX.UNCLAIMED_ACCOUNT]: {
        predicate: e => {
            let {
                currentUser: t
            } = e;
            return null != t && !t.isClaimed()
        }
    },
    [eg.kqX.PENDING_MEMBER]: {
        predicate: e => {
            let {
                selectedGuildId: t,
                currentUser: n
            } = e;
            return (null != t && null != n && !en.A.getGuild(t)?.features.has(eg.GuildFeatures.GUILD_ONBOARDING) && et.Ay.getMember(t, n.id)?.isPending) ?? !1
        }
    },
    [eg.kqX.OUTBOUND_PROMOTION]: {
        predicate: () => (0, G.So)()
    },
    [eg.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => ep.isPlatformEmbedded && (!a.A.supported() || eU.A.isCorruptInstallation())
    },
    [eg.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: e => {
            let {
                voiceChannelId: t
            } = e;
            return null != t && eT.A.hasVideo(t) && !ei.Ay.supports(ef.O5.VIDEO) && !eW(eg.kqX.VIDEO_UNSUPPORTED_BROWSER)
        }
    },
    [eg.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: e => {
            let {
                currentUser: t
            } = e;
            return eC.Ay.canRedeemPremiumPerks(t) && ee.A.getDetectedOffPlatformPremiumPerks().length > 0
        },
        metadata: () => ee.A.getDetectedOffPlatformPremiumPerks()[0]
    },
    [eg.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () => !eW(eg.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && ee.A.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => ee.A.getDetectedOffPlatformPremiumPerks()[0]
    },
    [eg.kqX.STREAMER_MODE]: {
        predicate: () => e_.A.enabled
    },
    [eg.kqX.DOWNLOAD_NAG]: {
        predicate: () => !ep.isPlatformEmbedded && !eW(eg.kqX.DOWNLOAD_NAG)
    },
    [eg.kqX.QUEST_APP_UPSELL]: {
        predicate: () => (0, ep.isOculusWeb)() && !eW(eg.kqX.QUEST_APP_UPSELL) && q.A.getConfig({
            location: "NoticeStore"
        }).enabled
    },
    [eg.kqX.SCHEDULED_MAINTENANCE]: {
        predicate: () => null != ec.A.getScheduledMaintenance(),
        metadata: () => {
            let e = ec.A.getScheduledMaintenance();
            if (null != e) return {
                id: e.id,
                start: new Date(e.scheduled_for),
                end: new Date(e.scheduled_until)
            }
        }
    },
    [eg.kqX.SURVEY]: {
        predicate: () => null != ed.Ay.getCurrentSurvey(),
        metadata: () => ed.Ay.getCurrentSurvey()
    },
    [eg.kqX.UNVERIFIED_ACCOUNT]: {
        predicate: e => {
            let {
                currentUser: t
            } = e;
            return t?.email != null && !t.verified
        }
    },
    [eg.kqX.BOUNCED_EMAIL_DETECTED]: {
        predicate: e => {
            let {
                currentUser: t
            } = e;
            return t?.hasBouncedEmail
        }
    },
    [eg.kqX.CONNECT_SPOTIFY]: {
        predicate: () => !v.A.hasConnectedAccount() && p.Ay.isObservedAppRunning(d.A.get(eg.fg2.SPOTIFY).name) && !eW(eg.kqX.CONNECT_SPOTIFY)
    },
    [eg.kqX.WIN32_DEPRECATED_MESSAGE]: {
        predicate: () => _.A?.os.arch === "ia32" && _.A?.process.platform === "win32",
        metadata: () => ({
            dismissUntil: r()().add(5, "days").toDate()
        })
    },
    [eg.kqX.WIN7_8_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (_.A?.process.platform === "win32") try {
                if (parseInt(_.A?.os.release.split(".")[0]) >= 10) return !1;
                return !eH()
            } catch (e) {}
            return !1
        },
        metadata: () => ({
            dismissUntil: r()().add(5, "days").toDate()
        })
    },
    [eg.kqX.WIN_COMPAT_MODE_MESSAGE]: {
        predicate: () => {
            if (_.A?.process.platform === "win32") try {
                if (parseInt(_.A?.os.release.split(".")[0]) >= 10) return !1;
                return eH()
            } catch (e) {}
            return !1
        },
        metadata: () => ({
            dismissUntil: r()().add(5, "days").toDate()
        })
    },
    [eg.kqX.MACOS_19_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if (_.A?.process.platform === "darwin") try {
                return 20 > parseInt(_.A?.os.release.split(".")[0])
            } catch (e) {}
            return !1
        },
        metadata: () => ({
            dismissUntil: r()().add(5, "days").toDate()
        })
    },
    [eg.kqX.CONNECT_PLAYSTATION]: {
        predicate: () => Z.A.isSuggestedAccountType(eg.fg2.PLAYSTATION) && null == Z.A.getAccount(null, eg.fg2.PLAYSTATION) && !eW(eg.kqX.CONNECT_PLAYSTATION)
    },
    [eg.kqX.PASSKEY_BACKUP]: {
        predicate: e => {
            let {
                currentUser: t
            } = e;
            return t?.mfaEnabled && $.A.hasFetchedCredentials() && !$.A.hasCredentials && !eW(eg.kqX.PASSKEY_BACKUP)
        }
    },
    [eg.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () => eR.A.getAlmostExpiringTrialOffersForReminder([em.pe.TIER_2]).length > 0 && !eW(eg.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
    },
    [eg.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () => eR.A.getAlmostExpiringTrialOffersForReminder([em.pe.TIER_0]).length > 0 && !eW(eg.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
    },
    [eg.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () => eR.A.getAlmostExpiringDiscountOffersForReminder([em.pe.TIER_2]).length > 0 && !eW(eg.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
    },
    [eg.kqX.PREMIUM_UNCANCEL]: {
        predicate: e => {
            let {
                premiumSubscription: t,
                currentUser: n
            } = e, i = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0, l = t?.canceledAt != null && t?.status === eg.Dmq.CANCELED && 1 >= r()().diff(r()(t.canceledAt), "days"), s = null != t && r()(t.currentPeriodEnd).isBefore(r()()), a = null != t && t.status === eg.Dmq.CANCELED && !s && i <= 7 && i >= 0 && (0, eC.YE)(n, em.PremiumTypes.TIER_2) && !l && !n.hasFreePremium() && !t.isPurchasedExternally;
            return !eW(eg.kqX.PREMIUM_UNCANCEL) && a
        },
        metadata: e => {
            let {
                premiumSubscription: t
            } = e, n = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0, i = null != t ? (0, eC.EL)(t)?.planId : null;
            return {
                daysLeft: n,
                premiumType: null != i ? eC.Ay.getPremiumType(i) : null,
                premiumSubscription: t
            }
        }
    },
    [eg.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: e => {
            let {
                premiumSubscription: t,
                currentUser: n
            } = e, i = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0, l = null != t ? r()(t.currentPeriodEnd).diff(r()(t.currentPeriodStart).startOf("day"), "days") : 0, s = null != t && r()(t.currentPeriodEnd).isBefore(r()()), a = eS.A.applicationIdsFetched.has(em.tv), o = eS.A.getForApplication(em.tv), E = null != t ? (0, eC.EL)(t) : null, c = null != E ? eC.Ay.getSkuIdForPlan(E.planId) : null, _ = null != o && null != E && Array.from(o).filter(e => {
                let {
                    skuId: t,
                    consumed: n
                } = e;
                return !n && t === c
            }).length > 0, d = null != t && i <= (l > 14 ? 7 : 2) && i >= 0 && t.status !== eg.Dmq.PAST_DUE && !s && a && !_ && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
            return !eW(eg.kqX.PREMIUM_MISSING_PAYMENT) && d
        },
        metadata: e => {
            let {
                premiumSubscription: t
            } = e, n = null != t ? r()(t.currentPeriodEnd).diff(r()().startOf("day"), "days") : 0, i = null != t ? (0, eC.EL)(t)?.planId : null;
            return {
                daysLeft: n,
                premiumType: null != i ? eC.Ay.getPremiumType(i) : null,
                premiumSubscription: t
            }
        }
    },
    [eg.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
        predicate: e => {
            let {
                premiumSubscription: t,
                currentUser: n
            } = e, i = null != t && null != t.paymentSourceId ? eI.A.getPaymentSource(t.paymentSourceId) : null, l = null != t && r()(t.currentPeriodEnd).isBefore(r()()), s = null != t && t.status === eg.Dmq.PAST_DUE && !l && null != i && i.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
            return !eW(eg.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && s
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
    [eg.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
        predicate: e => {
            let {
                premiumSubscription: t,
                currentUser: n
            } = e, i = null != t && r()(t.currentPeriodEnd).isBefore(r()()), l = null != t && t.status === eg.Dmq.PAST_DUE && !i && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
            return !eW(eg.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && l
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
    [eg.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != eO.A.testModeApplicationId,
        metadata: () => {
            if (null == eO.A.testModeApplicationId) return {};
            let e = eO.A.testModeApplicationId,
                t = A.A.getApplication(e);
            return {
                applicationName: null != t ? t.name : e,
                applicationId: e
            }
        }
    },
    [eg.kqX.PREMIUM_REACTIVATE]: {
        predicate: () => !eW(eg.kqX.PREMIUM_REACTIVATE) && L.A.shouldShowReactivateNotice()
    },
    [eg.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: e => {
            let {
                premiumSubscription: t,
                currentUser: n
            } = e, i = null != t && r()(t.currentPeriodEnd).isBefore(r()()), l = null != t && null != t.paymentSourceId ? eI.A.getPaymentSource(t.paymentSourceId) : null, s = null != l && ey.AD.has(l.type), a = null != t && t.status === eg.Dmq.PAST_DUE && !i && s && !n.hasFreePremium() && !t.isPurchasedExternally;
            return !eW(eg.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && a
        },
        metadata: e => {
            let {
                premiumSubscription: t
            } = e;
            return null == t ? {
                daysPastDue: 0,
                dismissUntil: r()().toDate()
            } : {
                daysPastDue: t.status === eg.Dmq.PAST_DUE ? r()().diff(t.currentPeriodStart, "days") : 0,
                dismissUntil: (0, eC.ji)(t).expiresDate.toDate()
            }
        }
    },
    [eg.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: e => {
            let {
                selectedGuildId: t
            } = e, n = null != t ? en.A.getGuild(t) : null;
            return null != t && null != g.A.getMentionRaidDetected(t) && n?.features.has(eg.GuildFeatures.COMMUNITY) && !eW(eg.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION) || !1
        },
        metadata: e => {
            let {
                selectedGuildId: t
            } = e, n = {
                dismissUntil: r()().add(2, "hours").toDate()
            };
            if (null != t) {
                let e = g.A.getMentionRaidDetected(t);
                null != e && (n.decisionId = e.decisionId)
            }
            return n
        }
    },
    [eg.kqX.ACTIVATE_SERVER_SUBSCRIPTION]: {
        predicate: () => !eW(eg.kqX.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== T.A.getEligibleGuildsForNagActivate().length && (0, u.KD)()
    },
    [eg.kqX.SAFETY_USER_SENTIMENT_NAGBAR]: {
        predicate: e => {
            let {
                currentUser: t
            } = e;
            return B.BN(t)
        }
    },
    [eg.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = Y.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, P._z)(e),
                n = X.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= eh.tZ
        },
        metadata: () => {
            let e = Y.A.getCurrentUserActiveStream();
            return {
                streamKey: null != e ? (0, P._z)(e) : null
            }
        }
    },
    [eg.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: e => {
            let {
                currentUser: t
            } = e, n = eI.A.paymentSources ?? {};
            return k.A.getIsTargeted() && !(0, eC.TW)(t) && 0 !== Object.keys(n).length
        }
    },
    [eg.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !eW(eg.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && b.Cm(),
        metadata: () => ({
            dismissUntil: r()().add(180, "days").toDate(),
            sampleRate: .1
        })
    },
    [eg.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: {
        predicate: () => b.h6(),
        metadata: () => ({
            sampleRate: .1
        })
    },
    [eg.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: e => {
            let {
                voiceChannelId: t
            } = e;
            if (eW(eg.kqX.SYSTEM_SERVICE_WARNING) || !(0, F.yA)(p.Ay) || null == t || ei.Ay.getMode() !== eg.TBI.PUSH_TO_TALK) return !1;
            let n = p.Ay.getVisibleGame();
            return null != n && !!n.elevated
        }
    },
    [eg.kqX.E2EE_UPDATE_REQUIRED]: {
        predicate: () => {
            if (eW(eg.kqX.E2EE_UPDATE_REQUIRED) || !ea.A.isConnected()) return !1;
            let e = ei.Ay.getMediaEngine();
            return 1 !== (e.getSupportedSecureFramesProtocolVersion?.() ?? 0)
        },
        metadata: () => ({
            dismissUntil: r()().add(5, "days").toDate()
        })
    },
    [eg.kqX.WINDOWS_MEDIA_PACK_REQUIRED]: {
        predicate: () => {
            if (!ep.isPlatformEmbedded || _.A?.process.platform !== "win32" || eW(eg.kqX.WINDOWS_MEDIA_PACK_REQUIRED) || eP.Ay.getEnableHardwareAcceleration()) return !1;
            let e = (0, y.b)({
                    location: "NoticeStore"
                }).enabled,
                t = (0, f.r)({
                    location: "NoticeStore"
                }).enabled;
            return (!!e || !!t) && !1 === ei.Ay.isH264MfDecodeAvailable()
        }
    }
};

function eK() {
    if (!C.A.isConnected()) return !1;
    ev = null;
    let e = eu.default.getCurrentUser();
    if (null == e) return !1;
    let t = eN.A.getPremiumSubscription(),
        n = eE.A.getGuildId(),
        i = eo.A.getVoiceChannelId(),
        r = null != i ? eT.A.getVoiceStateForChannel(i) : null;
    for (let l of e$)
        if (null != eY[l] && eY[l].predicate({
                selectedGuildId: n,
                voiceChannelId: i,
                voiceState: r,
                currentUser: e,
                premiumSubscription: t
            })) {
            let i = eY[l].metadata?.({
                currentUser: e,
                premiumSubscription: t,
                selectedGuildId: n
            });
            ev = {
                ...eb,
                type: l,
                metadata: i
            };
            break
        } if (null != ev) {
        ev.metadata?.sampleRate != null && null == eB[ev.type] && (eB[ev.type] = Math.random() <= ev.metadata.sampleRate);
        let e = !1 === eB[ev.type];
        (eW(ev.type) || e) && (ev = null)
    }
}

function eQ() {
    return e_.A.enabled || delete eX[eg.kqX.STREAMER_MODE], eK()
}
class ez extends s.Ay.Store {
    static displayName = "NoticeStore";
    initialize() {
        this.syncWith([S.A, ed.Ay, es.A, ee.A, eE.A, j.A, eR.A, Q.default, Z.A, H.A, M.A, X.A, Y.A, p.Ay, $.A, S.A], eK), this.waitFor(S.A, A.A, Y.A, K.default, Q.default, z.A, J.A, k.A, Z.A, T.A, ee.A, eD.A, eM.A, eU.A, eS.A, O.A, C.A, g.A, M.A, et.Ay, en.A, m.A, h.A, ei.Ay, er.A, eI.A, el.A, es.A, j.A, X.A, ea.A, p.Ay, eo.A, eE.A, v.A, ec.A, e_.A, L.A, eN.A, ed.Ay, eO.A, w.Ay, eR.A, eA.A, H.A, eu.default, eT.A, $.A)
    }
    hasNotice() {
        return null != ev && null != ev.type
    }
    getNotice() {
        return null == eA.A.getAction() ? ev : null
    }
    isNoticeDismissed(e) {
        return eW(e)
    }
}
let eJ = new ez(c.h, {
    CURRENT_USER_UPDATE: eK,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: eK,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: eK,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: eK,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: eK,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: eK,
    GUILD_CREATE: eK,
    GUILD_DELETE: eK,
    AUDIO_INPUT_DETECTED: eK,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: eK,
    CERTIFIED_DEVICES_SET: eK,
    AUDIO_SET_INPUT_DEVICE: eK,
    AUDIO_SET_OUTPUT_DEVICE: eK,
    MEDIA_ENGINE_DEVICES: eK,
    RTC_CONNECTION_STATE: eK,
    RPC_APP_AUTHENTICATED: eK,
    RPC_APP_DISCONNECTED: eK,
    USER_CONNECTIONS_UPDATE: eK,
    WINDOW_FOCUS: eK,
    INSTANT_INVITE_CREATE: eK,
    INSTANT_INVITE_REVOKE_SUCCESS: eK,
    SPOTIFY_PLAYER_PAUSE: eK,
    RUNNING_GAMES_CHANGE: eK,
    EXPERIMENTS_FETCH_SUCCESS: eK,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: eK,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: eK,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: eK,
    DEVELOPER_TEST_MODE_RESET: eK,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: eK,
    DISPATCH_APPLICATION_INSTALL: eK,
    IMPERSONATE_STOP: eK,
    IMPERSONATE_UPDATE: eK,
    GUILD_MEMBER_ADD: function(e) {
        return e.user.id === K.default.getId() && eK()
    },
    GUILD_MEMBER_UPDATE: eK,
    SURVEY_FETCHED: eK,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eK,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: eK,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: eK,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: eK,
    UNSYNCED_USER_SETTINGS_UPDATE: eK,
    VOICE_STATE_UPDATES: function(e) {
        let {
            voiceStates: t
        } = e;
        return (ev?.type === eg.kqX.INVITED_TO_SPEAK || t.some(e => {
            let {
                userId: t
            } = e;
            return t !== K.default.getId()
        })) && eK()
    },
    STREAMER_MODE_UPDATE: eQ,
    RUNNING_STREAMER_TOOLS_CHANGE: eQ,
    DISPATCH_APPLICATION_ERROR: function() {
        return delete eX[eg.kqX.DISPATCH_ERROR], eK()
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
        return delete eX[eg.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], eK()
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function() {
        return eK()
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function() {
        return eK()
    },
    NOTICE_SHOW: function(e) {
        ev = e.notice
    },
    NOTICE_DISMISS: function(e) {
        return null != ev && (null == e.id || e.id === ev.id) && (eF(ev.type, e.isTemporary, e.untilAtLeast), eK())
    },
    NOTICE_DISABLE: function(e) {
        let {
            noticeType: t
        } = e;
        return eF(t), eK()
    },
    LOGOUT: function() {
        eX = {}, eB = {}, ev = null
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: eK,
    AUTO_MODERATION_MENTION_RAID_DETECTION: eK,
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eK,
    REPORT_AV_ERROR: eK,
    ACTIVE_AV_ERRORS_CHANGED: eK,
    MEDIA_ENGINE_MF_AVAILABILITY_CHECKED: eK,
    AUDIO_SET_MODE: eK
})