/** Chunk was on web.js **/
/** chunk id: 859703, original params: e,t,n (module,exports,require) **/
"use strict";
let r, i, a, o, s, l, c, u, d, f, p, _, h, m, g, E, y, b, O, v, A, I, S, T, C, N, w, R, P;
n.d(t, {
    A: () => te
}), n(896048);
var D, L = n(735438),
    x = n(412703),
    M = n(440703),
    j = n(311907),
    k = n(73153),
    U = n(927813),
    G = n(341915),
    F = n(405670),
    V = n(302654),
    B = n(943849),
    H = n(710969),
    Y = n(229006),
    W = n(654487);

function K(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            K(e, t, n[t])
        })
    }
    return e
}

function q(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function Z(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : q(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let Q = 6 * U.A.Millis.HOUR,
    X = new Map,
    J = null,
    $ = null,
    ee = !1,
    et = null,
    en = new Map,
    er = 5e3,
    ei = 864e6;

function ea() {
    r = !1, i = !1, a = new Map, o = !1, s = !1, l = new Map, c = new Map, u = new Map, d = new Map, f = new Map, p = 0, _ = 0, h = new Set, m = new Set, g = new Set, E = new Set, y = new Set, X = new Map, O = new Map, v = new Map, A = new Map, I = null, S = new Map, b = new Set, T = new Map, C = new Map, N = new Map, e3(), w = null, P = new Map, en = new Map, R = new Map
}

function eo(e, t) {
    var n, r, i, a;
    if (null != t.userStatus)
        for (let o of Object.values(null != (n = null == (r = t.userStatus) ? void 0 : r.progress) ? n : {})) !(0, L.isNil)(o) && x.o.DESKTOP.has(o.eventName) && ((null == (i = o.heartbeat) ? void 0 : i.lastBeatAt) != null ? b.add(e) : (null == (a = o.heartbeat) ? void 0 : a.lastBeatAt) == null && b.delete(e))
}

function es(e, t) {
    let n = (u = new Map(u)).get(e);
    if (null != n) {
        let r = z({}, n, t);
        if (eo(e, t), u.set(e, r), P.has(e)) {
            let n = P.get(e);
            null != n && (P = new Map(P)).set(e, z({}, n, t))
        }
    }
}

function el(e, t) {
    let n = new Map(O);
    n.set(e, t), O = n
}

function ec(e, t) {
    el(e, t);
    let n = u.get(e),
        r = null == n ? void 0 : n.userStatus;
    null != r && null == r.claimedAt && es(e, {
        userStatus: Z(z({}, r), {
            claimedAt: t.claimedAt
        })
    })
}

function eu(e) {
    var t;
    let {
        entitlements: n
    } = e, r = null == (t = n.items[0].tenantMetadata) ? void 0 : t.questRewards.reward;
    return (null == r ? void 0 : r.tag) !== M.l.REWARD_CODE ? null : r.rewardCode
}

function ed(e, t) {
    let n = new Map(v);
    n.set(e, t.items), v = n;
    let r = u.get(e),
        i = null == r ? void 0 : r.userStatus;
    if (null != i && null == i.claimedAt) {
        var a;
        let n = eu({
            entitlements: t
        });
        null != n && el(e, n), es(e, {
            userStatus: Z(z({}, i), {
                claimedAt: t.claimedAt,
                claimedTier: null != (a = null == n ? void 0 : n.tier) ? a : null
            })
        })
    }
}

function ef(e) {
    null != A.get(e) && (A = new Map(A)).delete(e)
}

function ep() {
    e3(), ea()
}

function e_() {
    r = !0
}

function eh(e) {
    let {
        quests: t,
        excludedQuests: n,
        questEnrollmentBlockedUntil: i
    } = e;
    p = Date.now(), r = !1, u = new Map, c = new Map;
    let a = new Map;
    for (let e of t) u.set(e.id, e), c.set(e.id, e.config), a.set(e.id, (0, H.Ic)(e)), e.targetedContent.includes(G.uF.QUEST_BAR) && (0, B.L)({
        location: W.rE.QUESTS_STORE
    }).log("Delivered ".concat(e.config.messages.questName, " (").concat(e.id, ")"));
    for (let e of (d = new Map, n)) d.set(e.id, e);
    for (let e of null == P ? void 0 : P.values()) u.has(e.id) || (u.set(e.id, e), c.set(e.id, e.config), a.set(e.id, (0, H.Ic)(e)));
    N = a, e2(), w = null != i ? new Date(i) : null
}

function em() {
    p = 0, r = !1
}

function eg(e) {
    let {
        placement: t
    } = e;
    i = !0, (a = new Map(a)).set(t, !0)
}

function eE(e) {
    let {
        questId: t
    } = e;
    (y = new Set(y)).add(t), (en = new Map(en)).delete(t)
}

function ey(e) {
    let {
        questId: t,
        quest: n
    } = e;
    (y = new Set(y)).delete(t), (P = new Map(P)).set(t, n), (u = new Map(u)).set(t, n), (c = new Map(c)).set(t, n.config), (en = new Map(en)).delete(t)
}

function eb(e) {
    let {
        questId: t,
        error: n
    } = e;
    (y = new Set(y)).delete(t), (en = new Map(en)).set(t, n)
}

function eO() {
    o = !0
}

function ev(e) {
    let {
        quests: t
    } = e;
    for (let e of (o = !1, f = new Map, t)) f.set(e.id, e)
}

function eA() {
    o = !1
}

function eI(e) {
    let {
        questId: t,
        streamKey: n,
        userStatus: r
    } = e;
    b.add(t), es(t, {
        userStatus: r
    }), null != n && ef(n)
}

function eS(e) {
    let {
        questId: t,
        streamKey: n
    } = e;
    null != n && null == A.get(n) && (A = new Map(A)).set(n, {
        questId: t,
        streamKey: n,
        firstFailedAt: Date.now()
    })
}

function eT(e) {
    let {
        streamKey: t
    } = e;
    ef(t)
}

function eC(e) {
    let t = new Set(h);
    t.delete(e), h = t
}

function eN(e) {
    let {
        questId: t
    } = e, n = new Set(h);
    n.add(t), h = n
}

function ew(e) {
    let {
        enrolledQuestUserStatus: t
    } = e;
    es(t.questId, {
        userStatus: t
    }), eC(t.questId)
}

function eR(e) {
    let {
        questId: t
    } = e;
    eC(t)
}

function eP(e) {
    let {
        questId: t
    } = e, n = new Set(g);
    n.add(t), g = n
}

function eD(e) {
    let {
        questId: t,
        rewardCode: n
    } = e, r = new Set(g);
    r.delete(t), g = r, ec(t, n)
}

function eL(e) {
    let {
        questId: t
    } = e, n = new Set(g);
    n.delete(t), g = n
}

function ex(e) {
    let {
        questId: t
    } = e, n = new Set(m);
    n.add(t), m = n
}

function eM(e) {
    let {
        questId: t,
        entitlements: n
    } = e, r = new Set(m);
    r.delete(t), m = r, ed(t, n)
}

function ej(e) {
    let {
        questId: t
    } = e, n = new Set(m);
    n.delete(t), m = n
}

function ek(e) {
    let t = new Set(E);
    t.delete(e), E = t
}

function eU(e) {
    let {
        questId: t
    } = e, n = new Set(E);
    n.add(t), E = n
}

function eG(e) {
    let {
        dismissedQuestUserStatus: t
    } = e;
    es(t.questId, {
        userStatus: t
    }), ek(t.questId)
}

function eF(e) {
    let {
        questId: t
    } = e;
    ek(t)
}

function eV(e) {
    let {
        streamKey: t
    } = e;
    ef(t)
}

function eB(e) {
    let {
        user_status: t
    } = e, n = (0, B.L)({
        location: W.rE.QUESTS_STORE
    });
    n.log("Received user status update for ".concat(t.quest_id), t);
    let r = (0, Y.tp)(t);
    es(t.quest_id, {
        userStatus: r
    });
    let i = u.get(t.quest_id);
    if (null != i) {
        let e = (0, H.Ic)(i);
        N.get(t.quest_id) !== e && (N = new Map(N).set(t.quest_id, e))
    }
    0 === Object.keys(r.progress).length && X.has(r.questId) && (n.log("Removing optimistic progress for ".concat(r.questId)), X.delete(r.questId))
}

function eH(e) {
    let {
        previewQuestUserStatus: t
    } = e;
    es(t.questId, {
        userStatus: t
    }), null == t.claimedAt && (O = new Map(O)).delete(t.questId), null == t.enrolledAt && ((S = new Map(S)).delete(t.questId), F.Ay.getState().resetQuest(t.questId));
    let n = u.get(t.questId);
    if (null != n) {
        let e = (0, H.Ic)(n);
        N.get(t.questId) !== e && (N = new Map(N).set(t.questId, e))
    }
}

function eY(e) {
    let {
        questId: t
    } = e;
    I = I === t ? null : t
}

function eW(e) {
    let {
        questId: t,
        platform: n
    } = e;
    S = new Map(S), null == n ? S.delete(t) : S.set(t, n)
}

function eK(e) {
    var t;
    let {
        questId: n,
        taskEventName: r,
        progress: i
    } = e, a = null != (t = X.get(n)) ? t : new Map;
    a.set(r, i), X.set(n, a)
}

function ez(e) {
    let {
        questId: t
    } = e;
    X.has(t) && X.delete(t), F.Ay.getState().resetQuest(t)
}

function eq(e) {
    let {
        quest: t,
        placement: n,
        adDecisionData: r,
        adContext: o,
        responseTtlSeconds: s,
        metadataRaw: l,
        metadataSealed: c,
        trafficMetadataRaw: u,
        trafficMetadataSealed: d,
        fetchedAt: f
    } = e;
    _ = Date.now(), i = !1, (a = new Map(a)).set(n, !1);
    let {
        enableNewRequestBehavior: p
    } = V.A.getConfig({
        location: "handleFetchQuestToDeliverSuccess"
    });
    if (p) {
        var h;
        let e = {
            questId: null != (h = null == t ? void 0 : t.id) ? h : null,
            fetchedAt: f,
            ttlMillis: eZ(s),
            adDecisionData: r,
            adContext: o,
            metadataRaw: l,
            metadataSealed: c,
            trafficMetadataRaw: u,
            trafficMetadataSealed: d
        };
        (R = new Map(R)).set(n, e)
    } else null == t ? T.delete(n) : T.set(n, {
        quest: t,
        adDecisionData: r,
        adContext: o,
        metadataRaw: l,
        metadataSealed: c,
        trafficMetadataRaw: u,
        trafficMetadataSealed: d
    })
}

function eZ(e) {
    if (null == e) return Q;
    let t = 1e3 * e;
    return t < Q && t > 0 ? t : Q
}

function eQ(e) {
    let {
        placement: t
    } = e;
    T.delete(t), _ = Date.now(), i = !1, (a = new Map(a)).set(t, !1)
}

function eX(e) {
    let {
        content: t
    } = e;
    s = !0, (l = new Map(l)).set(t, !0)
}

function eJ(e) {
    let {
        quests: t,
        metadataRaw: n,
        content: r
    } = e;
    s = !1, (l = new Map(l)).set(r, !1), 0 === t.size ? C.delete(r) : C.set(r, {
        quests: t,
        metadataRaw: n
    })
}

function e$(e) {
    let {
        content: t
    } = e;
    C.delete(t), s = !1, (l = new Map(l)).set(t, !1)
}

function e0() {
    let e = !1,
        t = new Map(N);
    u.forEach((n, r) => {
        !0 !== t.get(r) && ((0, H.Ic)(n) ? (t.set(r, !0), e = !0) : t.has(r) || t.set(r, !1))
    }), e && (N = t, e9.emitChange())
}

function e1() {
    e0();
    let e = (0, H.v1)(Array.from(u.values()));
    if (null == e) return;
    let t = Math.max(er, e - Date.now() + 2e3);
    t > ei || (J = setTimeout(() => {
        e1()
    }, t))
}

function e2() {
    e3(), e1()
}

function e3() {
    null != J && (clearTimeout(J), J = null)
}

function e6(e) {
    let {
        quest_enrollment_blocked_until: t
    } = e;
    w = null != t ? new Date(t) : null
}

function e4() {
    ee = !0
}

function e5(e) {
    ee = !1, $ = Date.now(), et = e.takeover
}

function e7() {
    ee = !1
}
ea();
class e8 extends(D = j.Ay.Store) {
    get quests() {
        return u
    }
    get excludedQuests() {
        return d
    }
    get claimedQuests() {
        return f
    }
    get isFetchingCurrentQuests() {
        return r
    }
    get isFetchingClaimedQuests() {
        return o
    }
    isFetchingQuestPreview(e) {
        return y.has(e)
    }
    get lastFetchedCurrentQuests() {
        return p
    }
    get lastFetchedQuestToDeliver() {
        return _
    }
    get isFetchingQuestToDeliver() {
        return i
    }
    isFetchingQuestToDeliverByPlacement(e) {
        var t;
        return null != (t = null == a ? void 0 : a.get(e)) && t
    }
    get questDeliveryOverride() {
        return u.get(null != I ? I : "")
    }
    get questToDeliverForPlacement() {
        return T
    }
    get questEnrollmentBlockedUntil() {
        return w
    }
    get questAdDecisionByPlacement() {
        return R
    }
    getFetchQuestPreviewError(e) {
        return en.get(e)
    }
    isEnrolling(e) {
        return h.has(e)
    }
    isClaimingReward(e) {
        return m.has(e)
    }
    isFetchingRewardCode(e) {
        return g.has(e)
    }
    isDismissingContent(e) {
        return E.has(e)
    }
    getRewardCode(e) {
        return O.get(e)
    }
    getRewards(e) {
        return v.get(e)
    }
    getStreamHeartbeatFailure(e) {
        return A.get(e)
    }
    getQuest(e) {
        return u.get(e)
    }
    getQuestConfig(e) {
        return c.get(e)
    }
    get questConfigs() {
        return c
    }
    isProgressingOnDesktop(e) {
        return b.has(e)
    }
    selectedTaskPlatform(e) {
        var t;
        return null != (t = S.get(e)) ? t : null
    }
    getOptimisticProgress(e, t) {
        var n;
        return null == (n = X.get(e)) ? void 0 : n.get(t)
    }
    getExpiredQuestsMap() {
        return N
    }
    isQuestExpired(e) {
        var t;
        return null != (t = N.get(e)) && t
    }
    getQuestLoadedViaPreview(e) {
        return P.get(e)
    }
    isFetchingQuestHomeTakeover() {
        return ee
    }
    getQuestHomeTakeoverConfig() {
        return et
    }
    getLastFetchedQuestHomeTakeover() {
        return $
    }
    get isFetchingEarnedQuestToDeliver() {
        return s
    }
    isFetchingEarnedQuestToDeliverByPlacement(e) {
        var t;
        return null != (t = null == l ? void 0 : l.get(e)) && t
    }
    get earnedQuestForPlacement() {
        return C
    }
}
K(e8, "displayName", "QuestStore");
let e9 = new e8(k.h, {
        LOGOUT: ep,
        QUESTS_FETCH_CURRENT_QUESTS_BEGIN: e_,
        QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: eh,
        QUESTS_FETCH_CURRENT_QUESTS_FAILURE: em,
        QUESTS_FETCH_CLAIMED_QUESTS_BEGIN: eO,
        QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS: ev,
        QUESTS_FETCH_CLAIMED_QUESTS_FAILURE: eA,
        QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN: eg,
        QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS: eq,
        QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE: eQ,
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN: eX,
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS: eJ,
        QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE: e$,
        QUESTS_FETCH_PREVIEW_BEGIN: eE,
        QUESTS_FETCH_PREVIEW_SUCCESS: ey,
        QUESTS_FETCH_PREVIEW_FAILURE: eb,
        QUESTS_SEND_HEARTBEAT_SUCCESS: eI,
        QUESTS_SEND_HEARTBEAT_FAILURE: eS,
        QUESTS_ENROLL_BEGIN: eN,
        QUESTS_ENROLL_SUCCESS: ew,
        QUESTS_ENROLL_FAILURE: eR,
        QUESTS_FETCH_REWARD_CODE_BEGIN: eP,
        QUESTS_FETCH_REWARD_CODE_SUCCESS: eD,
        QUESTS_FETCH_REWARD_CODE_FAILURE: eL,
        QUESTS_CLAIM_REWARD_BEGIN: ex,
        QUESTS_CLAIM_REWARD_SUCCESS: eM,
        QUESTS_CLAIM_REWARD_FAILURE: ej,
        QUESTS_DISMISS_CONTENT_BEGIN: eU,
        QUESTS_DISMISS_CONTENT_SUCCESS: eG,
        QUESTS_DISMISS_CONTENT_FAILURE: eF,
        QUESTS_USER_STATUS_UPDATE: eB,
        STREAM_CLOSE: eT,
        QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE: eV,
        QUESTS_PREVIEW_UPDATE_SUCCESS: eH,
        QUESTS_DELIVERY_OVERRIDE: eY,
        QUESTS_SELECT_TASK_PLATFORM: eW,
        QUESTS_UPDATE_OPTIMISTIC_PROGRESS: eK,
        QUESTS_RESET_OPTIMISTIC_PROGRESS: ez,
        QUESTS_USER_COMPLETION_UPDATE: e6,
        QUESTS_FETCH_QUEST_HOME_TAKEOVER_BEGIN: e4,
        QUESTS_FETCH_QUEST_HOME_TAKEOVER_SUCCESS: e5,
        QUESTS_FETCH_QUEST_HOME_TAKEOVER_FAILURE: e7
    }),
    te = e9