/** chunk id: 837924, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => O
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    o = n(765379),
    s = n(90644),
    l = n(587895),
    c = n(429913),
    u = n(806246),
    d = n(890330),
    f = n(734057),
    p = n(71393),
    _ = n(977997),
    h = n(954571),
    m = n(712785),
    g = n(384481),
    E = n(652215);

function y(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            y(e, t, n[t])
        })
    }
    return e
}

function O(e) {
    let {
        user: t,
        currentUser: n,
        activity: y,
        className: O,
        onClose: v
    } = e, {
        voiceGuild: A,
        voiceChannel: I
    } = (0, a.cf)([p.A, _.A, f.A], () => {
        var e, n;
        let r = (0, o.A)(y);
        if (!r && (null == y ? void 0 : y.type) !== E.$pd.HANG_STATUS) return {};
        let i = r ? null == (e = _.A.getVoiceStateForSession(t.id, null == y ? void 0 : y.session_id)) ? void 0 : e.channelId : null == (n = _.A.getVoiceStateForUser(t.id)) ? void 0 : n.channelId,
            a = f.A.getChannel(i);
        return {
            voiceGuild: p.A.getGuild(null == a ? void 0 : a.getGuildId()),
            voiceChannel: a
        }
    }), S = (0, d.v)("UserProfileActivityCardWrapper", I), T = (null == y ? void 0 : y.type) === E.$pd.HANG_STATUS && S ? I : null;
    (0, c.h)(null == y ? void 0 : y.application_id);
    let C = (0, a.bG)([l.A], () => (null == y ? void 0 : y.application_id) != null ? l.A.getApplication(y.application_id) : (null == y ? void 0 : y.name) != null ? l.A.getApplicationByName(y.name) : null);
    return (i.useEffect(() => {
        (null == y ? void 0 : y.type) === E.$pd.HANG_STATUS && S && h.default.track(E.HAw.VIEW_HANG_STATUS, b({
            source: "UserProfilePopout",
            other_user_id: t.id
        }, (0, u.A)(null == T ? void 0 : T.id)))
    }, [null == y ? void 0 : y.type, S, null == T ? void 0 : T.id, t.id]), (null == y ? void 0 : y.type) !== E.$pd.CUSTOM_STATUS && ((null == y ? void 0 : y.type) !== E.$pd.HANG_STATUS || S)) ? (0, s.A)(y) ? (0, r.jsx)(g.A, {
        user: t,
        currentUser: n,
        activity: y,
        className: O,
        onClose: v
    }) : (0, r.jsx)(m.A, {
        user: t,
        currentUser: n,
        activity: y,
        application: C,
        voiceGuild: A,
        voiceChannel: I,
        className: O,
        onClose: v
    }) : null
}