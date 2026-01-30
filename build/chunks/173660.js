/** chunk id: 173660, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d,
    k: () => u
});
var r = n(311907),
    i = n(164956),
    a = n(961350),
    o = n(430452),
    s = n(576705),
    l = n(977997),
    c = n(652215);

function u(e) {
    var t;
    let {
        channel: n,
        authenticationStore: r = a.default,
        voiceStateStore: u = l.A,
        mediaEngineStore: d = o.A,
        permissionStore: f = s.A,
        impersonateStore: p = i.A
    } = e, _ = null != n ? u.getVoiceState(n.getGuildId(), r.getId()) : null, h = d.isSelfMute() || d.isSelfMutedTemporarily(), m = null == n ? void 0 : n.getGuildId(), g = p.isViewingRoles(m) && !f.can(c.xBc.SPEAK, n);
    return {
        selfMute: h,
        suppress: (null == _ ? void 0 : _.suppress) || g,
        mute: null != (t = null == _ ? void 0 : _.mute) && t
    }
}

function d(e) {
    return (0, r.cf)([a.default, l.A, o.A, s.A, i.A], () => u({
        channel: e,
        authenticationStore: a.default,
        voiceStateStore: l.A,
        mediaEngineStore: o.A,
        permissionStore: s.A,
        impersonateStore: i.A
    }))
}