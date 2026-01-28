/** Chunk was on 44384 **/
/** chunk id: 519057, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => ez,
    Re: () => ek,
    f7: () => ev,
    k3: () => ej,
    pe: () => eM
}), n(896048), n(747238);
var r, i = n(989349),
    l = n.n(i),
    o = n(877624),
    a = n(311907),
    s = n(531417),
    c = n(554146),
    u = n(506774),
    E = n(73153),
    d = n(77729),
    _ = n(573648),
    A = n(587895),
    T = n(469993),
    I = n(662427),
    O = n(826673),
    N = n(367727),
    p = n(709710),
    R = n(161518),
    S = n(49463),
    P = n(15285),
    y = n(142120),
    f = n(652896),
    C = n(585510),
    m = n(610136),
    D = n(229527),
    g = n(93474),
    h = n(164956),
    b = n(857071),
    U = n(772786),
    M = n(869968),
    j = n(923349),
    k = n(437852),
    v = n(264779),
    L = n(412260),
    x = n(426123),
    G = n(83375),
    w = n(859703),
    B = n(597936),
    q = n(34550),
    X = n(655116),
    V = n(105530),
    F = n(942405),
    H = n(617617),
    W = n(340913),
    K = n(976910),
    Y = n(616356),
    $ = n(961350),
    z = n(546183),
    J = n(347481),
    Z = n(734057),
    Q = n(962173),
    ee = n(584584),
    et = n(696451),
    en = n(71393),
    er = n(430452),
    ei = n(803224),
    el = n(576705),
    eo = n(362790),
    ea = n(383501),
    es = n(309010),
    ec = n(967198),
    eu = n(437959),
    eE = n(351906),
    ed = n(274184),
    e_ = n(870570),
    eA = n(287809),
    eT = n(977997),
    eI = n(295405),
    eO = n(166403),
    eN = n(816733),
    ep = n(469778),
    eR = n(147964),
    eS = n(723702),
    eP = n(927578),
    ey = n(755439),
    ef = n(422033),
    eC = n(966846),
    em = n(652215);
n(436317);
var eD = n(788868),
    eg = n(654487),
    eh = n(818348),
    eb = n(731854);

function eU(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let eM = {
        [em.kqX.DOWNLOAD_NAG]: c.M.NAGBAR_NOTICE_DOWNLOAD,
        [em.kqX.CONNECT_SPOTIFY]: c.M.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [em.kqX.CONNECT_PLAYSTATION]: c.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [em.kqX.PASSKEY_BACKUP]: c.M.NAGBAR_NOTICE_PASSKEY_BACKUP,
        [em.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: c.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [em.kqX.PREMIUM_REACTIVATE]: c.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [em.kqX.BOUNCED_EMAIL_DETECTED]: c.M.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [em.kqX.ACTIVATE_SERVER_SUBSCRIPTION]: c.M.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [em.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: c.M.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [em.kqX.POMELO_ELIGIBLE]: c.M.NAGBAR_NOTICE_POMELO,
        [em.kqX.CHECKOUT_RECOVERY_NAGBAR]: c.M.CHECKOUT_RECOVERY_NAGBAR
    },
    ej = {
        [em.kqX.GIFTING_PROMOTION_REMINDER]: c.M.GIFTING_PROMOTION_REMINDER
    },
    ek = {
        [em.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: c.M.NAGBAR_NOTICE_OFFER_EXPIRING,
        [em.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: c.M.NAGBAR_NOTICE_OFFER_EXPIRING
    },
    ev = {
        [em.kqX.OUTBOUND_PROMOTION]: c.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR
    },
    eL = {
        [em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
        [em.kqX.PREMIUM_UNCANCEL]: "hideUncancelReminder",
        [em.kqX.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
        [em.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
        [em.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
        [em.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
        [em.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
        [em.kqX.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
        [em.kqX.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
        [em.kqX.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
        [em.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice",
        [em.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: "hidePremiumTier2DiscountOfferEndingNotice",
        [em.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: "hideNagbarBlockUserFeedbackNotice",
        [em.kqX.MACOS_19_DEPRECATED_MESSAGE]: "hideMacOS19DeprecationMessageNotice",
        [em.kqX.SYSTEM_SERVICE_WARNING]: "hideSystemServiceWarningNotice",
        [em.kqX.E2EE_UPDATE_REQUIRED]: "hideE2EEUpdateRequiredNotice"
    },
    ex = new Set([em.kqX.NO_INPUT_DETECTED, em.kqX.NO_INPUT_DEVICES_DETECTED, em.kqX.STREAMER_MODE, em.kqX.VIDEO_UNSUPPORTED_BROWSER, em.kqX.SPOTIFY_AUTO_PAUSED, em.kqX.DISPATCH_ERROR, em.kqX.DISPATCH_ERROR, em.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS, em.kqX.BLOCKED_BY_PROXY]),
    eG = {},
    ew = {},
    eB = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null
    }),
    eq = null;

function eX(e) {
    return eL[e] + "-untilAtLeast"
}

function eV(e, t, n) {
    if (null == e) return;
    let r = eL[e];
    (null == r || t || u.w.set(r, !0), ex.has(e) && (eG[e] = !0), null != n && null != r) ? u.w.set(eX(e), n.format("YYYY-MM-DDTHH:mm:ss.SSSZ")): u.w.remove(eX(e))
}

function eF(e) {
    if (null == e || null != ek[e]) return !1;
    let t = ej[e];
    if (null != t) return (0, N.En)(t).isDismissed;
    let n = eM[e];
    if (null != n) return (0, O.k8)(n);
    let r = eL[e];
    if (null != r) {
        let t, n = null != (t = u.w.get(eX(e))) ? l()(t) : null;
        if (null != n) return null == n ? void 0 : n.isAfter(l()())
    }
    let i = eG[e];
    return !!i || (null != r && "" !== r ? u.w.get(r) : !!ex.has(e) && i)
}
let eH = [em.kqX.QUARANTINED, em.kqX.AUTOMOD_QUARANTINED_USER_PROFILE, em.kqX.VIEWING_ROLES, em.kqX.INVITED_TO_SPEAK, em.kqX.LURKING_GUILD, em.kqX.VOICE_DISABLED, em.kqX.NO_INPUT_DEVICES_DETECTED, em.kqX.NO_INPUT_DETECTED, em.kqX.PTT_NO_KEYBIND_WARNING, em.kqX.HARDWARE_MUTE, em.kqX.DISPATCH_ERROR, em.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS, em.kqX.SPOTIFY_AUTO_PAUSED, em.kqX.WIN32_DEPRECATED_MESSAGE, em.kqX.WIN7_8_DEPRECATED_MESSAGE, em.kqX.MACOS_19_DEPRECATED_MESSAGE, em.kqX.E2EE_UPDATE_REQUIRED, em.kqX.BLOCKED_BY_PROXY, em.kqX.VOICE_CONNECTED_LAST_SESSION, em.kqX.SYSTEM_SERVICE_WARNING, em.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION, em.kqX.GUILD_RAID_NOTIFICATION, em.kqX.GIFTING_PROMOTION_REMINDER, em.kqX.QUESTS_PROGRESS_INTERRUPTION, em.kqX.UNCLAIMED_ACCOUNT, em.kqX.POMELO_ELIGIBLE, em.kqX.PENDING_MEMBER, em.kqX.CHECKOUT_RECOVERY_NAGBAR, em.kqX.OUTBOUND_PROMOTION, em.kqX.CORRUPT_INSTALLATION, em.kqX.VIDEO_UNSUPPORTED_BROWSER, em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK, em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, em.kqX.STREAMER_MODE, em.kqX.SCHEDULED_MAINTENANCE, em.kqX.BOUNCED_EMAIL_DETECTED, em.kqX.UNVERIFIED_ACCOUNT, em.kqX.PREMIUM_TIER_2_TRIAL_ENDING, em.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING, em.kqX.PREMIUM_TIER_0_TRIAL_ENDING, em.kqX.PREMIUM_UNCANCEL, em.kqX.PREMIUM_MISSING_PAYMENT, em.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT, em.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT, em.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, em.kqX.PREMIUM_REACTIVATE, em.kqX.ACTIVATE_SERVER_SUBSCRIPTION, em.kqX.PASSKEY_BACKUP, em.kqX.APPLICATION_TEST_MODE, em.kqX.DOWNLOAD_NAG, em.kqX.CONNECT_SPOTIFY, em.kqX.CONNECT_PLAYSTATION, em.kqX.SURVEY, em.kqX.SAFETY_USER_SENTIMENT_NAGBAR, em.kqX.BLOCK_USER_FEEDBACK_NAGBAR, em.kqX.IGNORE_USER_FEEDBACK_NAGBAR];
em.kqX.QUARANTINED, em.kqX.AUTOMOD_QUARANTINED_USER_PROFILE, em.kqX.VIEWING_ROLES, em.kqX.INVITED_TO_SPEAK, em.kqX.LURKING_GUILD, em.kqX.VOICE_DISABLED, em.kqX.NO_INPUT_DETECTED, em.kqX.HARDWARE_MUTE, em.kqX.DISPATCH_ERROR, em.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS, em.kqX.SPOTIFY_AUTO_PAUSED, em.kqX.BLOCKED_BY_PROXY, em.kqX.VOICE_CONNECTED_LAST_SESSION, em.kqX.PENDING_MEMBER, em.kqX.STREAMER_MODE, em.kqX.SCHEDULED_MAINTENANCE;
let eW = {
    [em.kqX.GIFTING_PROMOTION_REMINDER]: {
        predicate: () => {
            let {
                enabled: e
            } = k.qe.getCurrentConfig({
                location: "NoticeStore"
            }, {
                autoTrackExposure: !1
            }), {
                enabled: t
            } = k.Fq.getConfig({
                location: "NoticeStore"
            }), n = L.A.getMarketingComponentByType(o.C.GIFT_REMINDER_NAGBAR);
            return e && t && null != n && (0, N.En)(c.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed && !eF(em.kqX.GIFTING_PROMOTION_REMINDER)
        }
    },
    [em.kqX.GUILD_RAID_NOTIFICATION]: {
        predicate: () => (0, C.dj)().show && !eF(em.kqX.GUILD_RAID_NOTIFICATION),
        metadata: () => ({
            dismissUntil: l()().add(3, "hours").toDate()
        })
    },
    [em.kqX.AUTOMOD_QUARANTINED_USER_PROFILE]: {
        predicate: e => {
            let {
                currentUser: t,
                selectedGuildId: n
            } = e;
            if (null == n) return !1;
            let r = et.Ay.getMember(n, t.id);
            return null != r && !r.isPending && (0, D.TR)(r)
        }
    },
    [em.kqX.QUARANTINED]: {
        predicate: e => {
            let {
                currentUser: t
            } = e;
            return t.hasFlag(em.nhx.QUARANTINED)
        }
    },
    [em.kqX.VIEWING_ROLES]: {
        predicate: e => {
            let {
                selectedGuildId: t
            } = e;
            return h.A.isViewingRoles(t)
        }
    },
    [em.kqX.INVITED_TO_SPEAK]: {
        predicate: e => {
            let {
                voiceState: t
            } = e;
            return (0, V.eY)(t) === V.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
        }
    },
    [em.kqX.LURKING_GUILD]: {
        predicate: e => {
            let {
                selectedGuildId: t
            } = e;
            return null != t && b.A.isLurking(t)
        }
    },
    [em.kqX.VOICE_DISABLED]: {
        predicate: () => null != ea.A.getRemoteDisconnectVoiceChannelId()
    },
    [em.kqX.VOICE_CONNECTED_LAST_SESSION]: {
        predicate: () => null != ea.A.getLastSessionVoiceChannelId()
    },
    [em.kqX.NO_INPUT_DETECTED]: {
        predicate: () => R.A.hasActiveErrorOfType(p.iy.NO_AUDIO_INPUT_DETECTED)
    },
    [em.kqX.NO_INPUT_DEVICES_DETECTED]: {
        predicate: () => R.A.hasActiveErrorOfType(p.iy.NO_INPUT_DEVICES)
    },
    [em.kqX.HARDWARE_MUTE]: {
        predicate: () => ea.A.isConnected() && er.A.isHardwareMute() && er.A.isEnableHardwareMuteNotice(),
        metadata: () => {
            let e = er.A.getInputDeviceId(),
                t = J.A.getVendor(e),
                n = J.A.getModel(e);
            if (null != t && null != n) return {
                vendor: t,
                model: n
            }
        }
    },
    [em.kqX.PTT_NO_KEYBIND_WARNING]: {
        predicate: () => !!ea.A.isConnected() && er.A.getMode() === em.TBI.PUSH_TO_TALK && !(er.A.getSettings().modeOptions.shortcut.length > 0) && !!W.A.getConfig({
            location: "NoticeStore"
        }).showPTTNoKeybindWarning
    },
    [em.kqX.DISPATCH_ERROR]: {
        predicate: () => null != ey.A.getLastError(),
        metadata: () => ({
            error: ey.A.getLastError()
        })
    },
    [em.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
        predicate: () => null != ef.A.getLastProgress(),
        metadata: () => ef.A.getLastProgress()
    },
    [em.kqX.SPOTIFY_AUTO_PAUSED]: {
        predicate: () => X.A.wasAutoPaused()
    },
    [em.kqX.BLOCKED_BY_PROXY]: {
        predicate: () => !eF(em.kqX.BLOCKED_BY_PROXY) && G.A.blockedByProxy && x.A.getCurrentConfig({
            location: "notice_store"
        }).eligibleForNotice
    },
    [em.kqX.UNCLAIMED_ACCOUNT]: {
        predicate: e => {
            let {
                currentUser: t
            } = e;
            return null != t && !t.isClaimed()
        }
    },
    [em.kqX.PENDING_MEMBER]: {
        predicate: e => {
            var t, n, r;
            let {
                selectedGuildId: i,
                currentUser: l
            } = e;
            return null != (t = null != i && null != l && !(null == (n = en.A.getGuild(i)) ? void 0 : n.features.has(em.GuildFeatures.GUILD_ONBOARDING)) && (null == (r = et.Ay.getMember(i, l.id)) ? void 0 : r.isPending)) && t
        }
    },
    [em.kqX.OUTBOUND_PROMOTION]: {
        predicate: () => (0, v.So)()
    },
    [em.kqX.CORRUPT_INSTALLATION]: {
        predicate: () => eS.isPlatformEmbedded && (!s.A.supported() || eC.A.isCorruptInstallation())
    },
    [em.kqX.VIDEO_UNSUPPORTED_BROWSER]: {
        predicate: e => {
            let {
                voiceChannelId: t
            } = e;
            return null != t && eT.A.hasVideo(t) && !er.A.supports(eb.O5.VIDEO) && !eF(em.kqX.VIDEO_UNSUPPORTED_BROWSER)
        }
    },
    [em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
        predicate: e => {
            let {
                currentUser: t
            } = e;
            return eP.Ay.canRedeemPremiumPerks(t) && ee.A.getDetectedOffPlatformPremiumPerks().length > 0
        },
        metadata: () => ee.A.getDetectedOffPlatformPremiumPerks()[0]
    },
    [em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
        predicate: () => !eF(em.kqX.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && ee.A.getDetectedOffPlatformPremiumPerks().length > 0,
        metadata: () => ee.A.getDetectedOffPlatformPremiumPerks()[0]
    },
    [em.kqX.STREAMER_MODE]: {
        predicate: () => eE.A.enabled
    },
    [em.kqX.DOWNLOAD_NAG]: {
        predicate: () => !eS.isPlatformEmbedded && !eF(em.kqX.DOWNLOAD_NAG)
    },
    [em.kqX.SCHEDULED_MAINTENANCE]: {
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
    [em.kqX.SURVEY]: {
        predicate: () => null != ed.Ay.getCurrentSurvey(),
        metadata: () => ed.Ay.getCurrentSurvey()
    },
    [em.kqX.UNVERIFIED_ACCOUNT]: {
        predicate: e => {
            let {
                currentUser: t
            } = e;
            return (null == t ? void 0 : t.email) != null && !t.verified
        }
    },
    [em.kqX.BOUNCED_EMAIL_DETECTED]: {
        predicate: e => {
            let {
                currentUser: t
            } = e;
            return null == t ? void 0 : t.hasBouncedEmail
        }
    },
    [em.kqX.CONNECT_SPOTIFY]: {
        predicate: () => !X.A.hasConnectedAccount() && P.Ay.isObservedAppRunning(_.A.get(em.fg2.SPOTIFY).name) && !eF(em.kqX.CONNECT_SPOTIFY)
    },
    [em.kqX.WIN32_DEPRECATED_MESSAGE]: {
        predicate: () => (null === d.A || void 0 === d.A ? void 0 : d.A.os.arch) === "ia32" && (null === d.A || void 0 === d.A ? void 0 : d.A.process.platform) === "win32",
        metadata: () => ({
            dismissUntil: l()().add(5, "days").toDate()
        })
    },
    [em.kqX.WIN7_8_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if ((null === d.A || void 0 === d.A ? void 0 : d.A.process.platform) === "win32") try {
                return 10 > parseInt(null === d.A || void 0 === d.A ? void 0 : d.A.os.release.split(".")[0])
            } catch (e) {}
            return !1
        },
        metadata: () => ({
            dismissUntil: l()().add(5, "days").toDate()
        })
    },
    [em.kqX.MACOS_19_DEPRECATED_MESSAGE]: {
        predicate: () => {
            if ((null === d.A || void 0 === d.A ? void 0 : d.A.process.platform) === "darwin") try {
                return 20 > parseInt(null === d.A || void 0 === d.A ? void 0 : d.A.os.release.split(".")[0])
            } catch (e) {}
            return !1
        },
        metadata: () => ({
            dismissUntil: l()().add(5, "days").toDate()
        })
    },
    [em.kqX.CONNECT_PLAYSTATION]: {
        predicate: () => Q.A.isSuggestedAccountType(em.fg2.PLAYSTATION) && null == Q.A.getAccount(null, em.fg2.PLAYSTATION) && !eF(em.kqX.CONNECT_PLAYSTATION)
    },
    [em.kqX.PASSKEY_BACKUP]: {
        predicate: e => {
            let {
                currentUser: t
            } = e;
            return (null == t ? void 0 : t.mfaEnabled) && K.A.hasFetchedCredentials() && !K.A.hasCredentials && !eF(em.kqX.PASSKEY_BACKUP)
        }
    },
    [em.kqX.PREMIUM_TIER_2_TRIAL_ENDING]: {
        predicate: () => eN.A.getAlmostExpiringTrialOffers([eD.pe.TIER_2]).length > 0 && !eF(em.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
    },
    [em.kqX.PREMIUM_TIER_0_TRIAL_ENDING]: {
        predicate: () => eN.A.getAlmostExpiringTrialOffers([eD.pe.TIER_0]).length > 0 && !eF(em.kqX.PREMIUM_TIER_0_TRIAL_ENDING)
    },
    [em.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING]: {
        predicate: () => eN.A.getAlmostExpiringDiscountOffers([eD.pe.TIER_2]).length > 0 && !eF(em.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
    },
    [em.kqX.PREMIUM_UNCANCEL]: {
        predicate: e => {
            let {
                premiumSubscription: t,
                currentUser: n
            } = e, r = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0, i = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === em.Dmq.CANCELED && 1 >= l()().diff(l()(t.canceledAt), "days"), o = null != t && l()(t.currentPeriodEnd).isBefore(l()()), a = null != t && t.status === em.Dmq.CANCELED && !o && r <= 7 && r >= 0 && (0, eP.YE)(n, eD.PremiumTypes.TIER_2) && !i && !n.hasFreePremium() && !t.isPurchasedExternally;
            return !eF(em.kqX.PREMIUM_UNCANCEL) && a
        },
        metadata: e => {
            var t;
            let {
                premiumSubscription: n
            } = e, r = null != n ? l()(n.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0, i = null != n ? null == (t = (0, eP.EL)(n)) ? void 0 : t.planId : null;
            return {
                daysLeft: r,
                premiumType: null != i ? eP.Ay.getPremiumType(i) : null,
                premiumSubscription: n
            }
        }
    },
    [em.kqX.PREMIUM_MISSING_PAYMENT]: {
        predicate: e => {
            let {
                premiumSubscription: t,
                currentUser: n
            } = e, r = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0, i = null != t ? l()(t.currentPeriodEnd).diff(l()(t.currentPeriodStart).startOf("day"), "days") : 0, o = null != t && l()(t.currentPeriodEnd).isBefore(l()()), a = ep.A.applicationIdsFetched.has(eD.tv), s = ep.A.getForApplication(eD.tv), c = null != t ? (0, eP.EL)(t) : null, u = null != c ? eP.Ay.getSkuIdForPlan(c.planId) : null, E = null != s && null != c && Array.from(s).filter(e => {
                let {
                    skuId: t,
                    consumed: n
                } = e;
                return !n && t === u
            }).length > 0, d = null != t && r <= (i > 14 ? 7 : 2) && r >= 0 && t.status !== em.Dmq.PAST_DUE && !o && a && !E && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
            return !eF(em.kqX.PREMIUM_MISSING_PAYMENT) && d
        },
        metadata: e => {
            var t;
            let {
                premiumSubscription: n
            } = e, r = null != n ? l()(n.currentPeriodEnd).diff(l()().startOf("day"), "days") : 0, i = null != n ? null == (t = (0, eP.EL)(n)) ? void 0 : t.planId : null;
            return {
                daysLeft: r,
                premiumType: null != i ? eP.Ay.getPremiumType(i) : null,
                premiumSubscription: n
            }
        }
    },
    [em.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
        predicate: e => {
            let {
                premiumSubscription: t,
                currentUser: n
            } = e, r = null != t && null != t.paymentSourceId ? eI.A.getPaymentSource(t.paymentSourceId) : null, i = null != t && l()(t.currentPeriodEnd).isBefore(l()()), o = null != t && t.status === em.Dmq.PAST_DUE && !i && null != r && r.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
            return !eF(em.kqX.PREMIUM_PAST_DUE_INVALID_PAYMENT) && o
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
    [em.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
        predicate: e => {
            let {
                premiumSubscription: t,
                currentUser: n
            } = e, r = null != t && l()(t.currentPeriodEnd).isBefore(l()()), i = null != t && t.status === em.Dmq.PAST_DUE && !r && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
            return !eF(em.kqX.PREMIUM_PAST_DUE_MISSING_PAYMENT) && i
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
    [em.kqX.APPLICATION_TEST_MODE]: {
        predicate: () => null != eR.A.testModeApplicationId,
        metadata: () => {
            if (null == eR.A.testModeApplicationId) return {};
            let e = eR.A.testModeApplicationId,
                t = A.A.getApplication(e);
            return {
                applicationName: null != t ? t.name : e,
                applicationId: e
            }
        }
    },
    [em.kqX.PREMIUM_REACTIVATE]: {
        predicate: () => !eF(em.kqX.PREMIUM_REACTIVATE) && j.A.shouldShowReactivateNotice()
    },
    [em.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
        predicate: e => {
            let {
                premiumSubscription: t,
                currentUser: n
            } = e, r = null != t && l()(t.currentPeriodEnd).isBefore(l()()), i = null != t && null != t.paymentSourceId ? eI.A.getPaymentSource(t.paymentSourceId) : null, o = null != i && eh.AD.has(i.type), a = null != t && t.status === em.Dmq.PAST_DUE && !r && o && !n.hasFreePremium() && !t.isPurchasedExternally;
            return !eF(em.kqX.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && a
        },
        metadata: e => {
            let {
                premiumSubscription: t
            } = e;
            return null == t ? {
                daysPastDue: 0,
                dismissUntil: l()().toDate()
            } : {
                daysPastDue: t.status === em.Dmq.PAST_DUE ? l()().diff(t.currentPeriodStart, "days") : 0,
                dismissUntil: (0, eP.ji)(t).expiresDate.toDate()
            }
        }
    },
    [em.kqX.POMELO_ELIGIBLE]: {
        predicate: () => (0, U.x)() && !eF(em.kqX.POMELO_ELIGIBLE)
    },
    [em.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
        predicate: e => {
            let {
                selectedGuildId: t
            } = e, n = null != t ? en.A.getGuild(t) : null;
            return null != t && null != g.A.getMentionRaidDetected(t) && (null == n ? void 0 : n.features.has(em.GuildFeatures.COMMUNITY)) && !eF(em.kqX.AUTO_MODERATION_MENTION_RAID_DETECTION) || !1
        },
        metadata: e => {
            let {
                selectedGuildId: t
            } = e, n = {
                dismissUntil: l()().add(2, "hours").toDate()
            };
            if (null != t) {
                let e = g.A.getMentionRaidDetected(t);
                null != e && (n.decisionId = e.decisionId)
            }
            return n
        }
    },
    [em.kqX.ACTIVATE_SERVER_SUBSCRIPTION]: {
        predicate: () => !eF(em.kqX.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== I.A.getEligibleGuildsForNagActivate().length && (0, T.KD)()
    },
    [em.kqX.SAFETY_USER_SENTIMENT_NAGBAR]: {
        predicate: e => {
            let {
                currentUser: t
            } = e;
            return B.BN(t)
        }
    },
    [em.kqX.QUESTS_PROGRESS_INTERRUPTION]: {
        predicate: () => {
            let e = Y.A.getCurrentUserActiveStream();
            if (null == e) return !1;
            let t = (0, f._z)(e),
                n = w.A.getStreamHeartbeatFailure(t);
            return null != n && Date.now() - n.firstFailedAt >= eg.tZ
        },
        metadata: () => {
            let e = Y.A.getCurrentUserActiveStream();
            return {
                streamKey: null != e ? (0, f._z)(e) : null
            }
        }
    },
    [em.kqX.CHECKOUT_RECOVERY_NAGBAR]: {
        predicate: e => {
            var t;
            let {
                currentUser: n
            } = e, r = null != (t = eI.A.paymentSources) ? t : {};
            return M.A.getIsTargeted() && !(0, eP.TW)(n) && 0 !== Object.keys(r).length
        }
    },
    [em.kqX.BLOCK_USER_FEEDBACK_NAGBAR]: {
        predicate: () => !eF(em.kqX.BLOCK_USER_FEEDBACK_NAGBAR) && q.Cm(),
        metadata: () => ({
            dismissUntil: l()().add(180, "days").toDate(),
            sampleRate: .1
        })
    },
    [em.kqX.IGNORE_USER_FEEDBACK_NAGBAR]: {
        predicate: () => q.h6(),
        metadata: () => ({
            sampleRate: .1
        })
    },
    [em.kqX.SYSTEM_SERVICE_WARNING]: {
        predicate: e => {
            let {
                voiceChannelId: t
            } = e;
            if (eF(em.kqX.SYSTEM_SERVICE_WARNING) || !(0, F.yA)(P.Ay) || null == t || er.A.getMode() !== em.TBI.PUSH_TO_TALK) return !1;
            let n = P.Ay.getVisibleGame();
            return null != n && !!n.elevated
        }
    },
    [em.kqX.E2EE_UPDATE_REQUIRED]: {
        predicate: () => {
            var e, t;
            if (eF(em.kqX.E2EE_UPDATE_REQUIRED) || !ea.A.isConnected()) return !1;
            let n = er.A.getMediaEngine();
            return 1 !== (null != (e = null == (t = n.getSupportedSecureFramesProtocolVersion) ? void 0 : t.call(n)) ? e : 0)
        },
        metadata: () => ({
            dismissUntil: l()().add(5, "days").toDate()
        })
    }
};

function eK() {
    var e, t, n;
    if (!y.A.isConnected()) return !1;
    eq = null;
    let r = eA.default.getCurrentUser();
    if (null == r) return !1;
    let i = eO.A.getPremiumSubscription(),
        l = ec.A.getGuildId(),
        o = es.A.getVoiceChannelId(),
        a = null != o ? eT.A.getVoiceStateForChannel(o) : null;
    for (let n of eH)
        if (null != eW[n] && eW[n].predicate({
                selectedGuildId: l,
                voiceChannelId: o,
                voiceState: a,
                currentUser: r,
                premiumSubscription: i
            })) {
            let o = null == (e = (t = eW[n]).metadata) ? void 0 : e.call(t, {
                currentUser: r,
                premiumSubscription: i,
                selectedGuildId: l
            });
            eq = function(e, t) {
                return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }), e
            }(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        eU(e, t, n[t])
                    })
                }
                return e
            }({}, eB), {
                type: n,
                metadata: o
            });
            break
        } if (null != eq) {
        (null == (n = eq.metadata) ? void 0 : n.sampleRate) != null && null == ew[eq.type] && (ew[eq.type] = Math.random() <= eq.metadata.sampleRate);
        let e = !1 === ew[eq.type];
        (eF(eq.type) || e) && (eq = null)
    }
}

function eY() {
    return eE.A.enabled || delete eG[em.kqX.STREAMER_MODE], eK()
}
class e$ extends(r = a.Ay.Store) {
    initialize() {
        this.syncWith([ed.Ay, eo.A, ee.A, ec.A, L.A, eN.A, z.default, Q.A, H.A, m.A, w.A, Y.A, P.Ay, K.A], eK), this.waitFor(R.A, A.A, Y.A, $.default, z.default, J.A, Z.A, M.A, Q.A, I.A, ee.A, ey.A, ef.A, eC.A, ep.A, S.A, y.A, g.A, m.A, et.Ay, en.A, h.A, b.A, er.A, ei.A, eI.A, el.A, eo.A, L.A, G.A, w.A, ea.A, P.Ay, es.A, ec.A, X.A, eu.A, eE.A, j.A, eO.A, ed.Ay, eR.A, eN.A, e_.A, H.A, eA.default, eT.A, K.A)
    }
    hasNotice() {
        return null != eq && null != eq.type
    }
    getNotice() {
        return null == e_.A.getAction() ? eq : null
    }
    isNoticeDismissed(e) {
        return eF(e)
    }
}
eU(e$, "displayName", "NoticeStore");
let ez = new e$(E.h, {
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
        return e.user.id === $.default.getId() && eK()
    },
    GUILD_MEMBER_UPDATE: eK,
    SURVEY_FETCHED: eK,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eK,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: eK,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: eK,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: eK,
    VOICE_STATE_UPDATES: function(e) {
        let {
            voiceStates: t
        } = e;
        return ((null == eq ? void 0 : eq.type) === em.kqX.INVITED_TO_SPEAK || t.some(e => {
            let {
                userId: t
            } = e;
            return t !== $.default.getId()
        })) && eK()
    },
    STREAMER_MODE_UPDATE: eY,
    RUNNING_STREAMER_TOOLS_CHANGE: eY,
    DISPATCH_APPLICATION_ERROR: function() {
        return delete eG[em.kqX.DISPATCH_ERROR], eK()
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
        return delete eG[em.kqX.DISPATCH_INSTALL_SCRIPT_PROGRESS], eK()
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function() {
        return eK()
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function() {
        return eK()
    },
    NOTICE_SHOW: function(e) {
        eq = e.notice
    },
    NOTICE_DISMISS: function(e) {
        return null != eq && (null == e.id || e.id === eq.id) && (eV(eq.type, e.isTemporary, e.untilAtLeast), eK())
    },
    NOTICE_DISABLE: function(e) {
        let {
            noticeType: t
        } = e;
        return eV(t), eK()
    },
    LOGOUT: function() {
        eG = {}, ew = {}, eq = null
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: eK,
    AUTO_MODERATION_MENTION_RAID_DETECTION: eK,
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eK,
    PROXY_BLOCKED_REQUEST: eK,
    REPORT_AV_ERROR: eK,
    AUDIO_SET_MODE: eK
})