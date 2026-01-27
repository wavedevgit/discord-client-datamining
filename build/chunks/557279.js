/** Chunk was on web.js **/
/** chunk id: 557279, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Di: () => c,
    S: () => u,
    gz: () => l
});
var r = n(617617),
    i = n(287809),
    a = n(349435),
    o = n(665909);

function s(e) {
    return a.Ay.getChannelSafetyWarnings(e).filter(e => e.type === a._j.INAPPROPRIATE_CONVERSATION_TIER_1)
}

function l() {
    var e, t, n, a;
    let s = (null == (t = i.default.getCurrentUser()) ? void 0 : t.isStaff()) === !0,
        l = null == (e = null == (a = r.A.settings.privacy) || null == (n = a.inappropriateConversationWarnings) ? void 0 : n.value) || e;
    return ((0, o.Wu)() || s) && l
}

function c(e) {
    let t = s(e);
    if (t.filter(e => null != e.dismiss_timestamp).length > 0) return null;
    let n = t.filter(e => null == e.dismiss_timestamp);
    return 1 === n.length ? n[0] : null
}

function u(e) {
    let t = e.filter(e => e.type === a._j.INAPPROPRIATE_CONVERSATION_TIER_1);
    return t.length > 0 && t.every(e => null == e.dismiss_timestamp)
}