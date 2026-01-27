/** Chunk was on web.js **/
/** chunk id: 561844, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    DZ: () => j,
    Mm: () => M,
    Qg: () => L,
    Y5: () => x,
    av: () => D
}), n(896048);
var r = n(835245),
    i = n(345353),
    a = n(881615),
    o = n(861638),
    s = n(58149),
    l = n(69114),
    c = n(111162),
    u = n(186111),
    d = n(954571),
    f = n(723702),
    p = n(859703),
    _ = n(431490),
    h = n(807876),
    m = n(710969),
    g = n(792620),
    E = n(814793),
    y = n(590202),
    b = n(654487),
    O = n(652215);

function v(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            v(e, t, n[t])
        })
    }
    return e
}

function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function S(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let T = new Set([O.HAw.QUEST_CONTENT_VIEWED, O.HAw.QUEST_CONTENT_CLICKED]);

function C(e, t) {
    var n, r, i, a;
    let s = _.e.getConfig({
        location: "quest_analytics"
    });
    return t ? s.use_ad_session_id ? e : null != (n = null == (r = (0, o.Vc)()) ? void 0 : r.uuid) ? n : null : null != (i = null == (a = (0, o.Vc)()) ? void 0 : a.uuid) ? i : null
}

function N(e, t, n) {
    let r = (0, a.sN)(n).uuid;
    return A({
        client_ad_session_id: r,
        billing_session_id: C(r, (0, m.xn)(t))
    }, (0, m.Kc)(e, t))
}

function w(e, t, n) {
    var r;
    return A({
        quest_id: e.id,
        quest_type: (0, E.pv)(e.config),
        game_id: e.config.application.id,
        game_name: e.config.application.name,
        application_ids: null != (r = (0, g._3)(e)) ? r : []
    }, N(e.id, t, n))
}

function R(e, t, n, r) {
    return A({
        ad_content_id: e,
        creative_type: t
    }, N(e, n, r))
}

function P(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    if ((0, h.Q)({
            location: b.rE.QUEST_PREVIEW_TOOL
        }) && u.A.getLayers().includes(O.zgK.USER_SETTINGS) || (c.default.isLoggingAnalyticsEvents && console.info("[Quest] AnalyticsUtils.track", e, t), r)) return;
    let i = T.has(e);
    if (n) return s.Ay.trackWithMetadata(e, t, i);
    d.default.track(e, t, {
        flush: i
    })
}

function D(e) {
    let {
        questId: t,
        event: n,
        properties: r,
        trackGuildAndChannelMetadata: i,
        shouldExtendSession: a = !1,
        sourceQuestContent: o
    } = e, s = p.A.quests.get(t);
    null == s || P(n, A({}, w(s, o, a), r), i, s.preview)
}

function L(e) {
    let {
        adContentId: t,
        adCreativeType: n,
        event: r,
        properties: i,
        trackGuildAndChannelMetadata: a,
        shouldExtendSession: o = !1,
        sourceQuestContent: s
    } = e;
    P(r, A({}, R(t, n, s, o), i), a, !1)
}
async function x(e) {
    let {
        questId: t,
        questContent: n,
        questContentCTA: a,
        questContentPosition: o,
        questContentRowIndex: s,
        impressionId: c,
        trackGuildAndChannelMetadata: u,
        sourceQuestContent: d
    } = e, _ = p.A.getQuest(t), h = await (0, i.N)((0, y.jO)(n)), g = (0, m.Li)(n), E = (0, m.L4)(n), b = (0, m.yI)(n, t), v = (0, m.Gp)(n, t);
    D({
        questId: t,
        event: O.HAw.QUEST_CONTENT_CLICKED,
        properties: S(A({}, (0, y.fF)(n, o, s), (0, l.A)()), {
            cta_name: a,
            quest_status: null != _ ? (0, y.NI)(_) : null,
            impression_id: c,
            apple_advertising_id: null != h && (0, f.isIOS)() ? h.advertisingId : null,
            android_advertising_id: null != h && (0, f.isAndroid)() ? h.advertisingId : null,
            click_id: (0, r.A)(),
            metadata_raw: null != g ? g : null,
            metadata_sealed: null != E ? E : null,
            traffic_metadata_raw: null != b ? b : null,
            traffic_metadata_sealed: null != v ? v : null
        }),
        trackGuildAndChannelMetadata: u,
        shouldExtendSession: (0, m.xn)(n),
        sourceQuestContent: d
    })
}

function M(e) {
    let {
        questContent: t,
        sourceQuestContent: n,
        questId: r,
        mode: i,
        prevMode: a
    } = e, o = (0, y.fF)(t);
    D({
        questId: r,
        event: O.HAw.QUEST_BAR_MODE_CHANGED,
        properties: {
            content_id: o.content_id,
            content_name: o.content_name,
            mode: i,
            previous_mode: a
        },
        sourceQuestContent: n
    })
}

function j(e, t) {
    s.Ay.trackWithMetadata(O.HAw.QUEST_EMBED_FALLBACK_VIEWED, {
        quest_id: e,
        reason: t
    })
}