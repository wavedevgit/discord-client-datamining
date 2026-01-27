/** Chunk was on web.js **/
/** chunk id: 776781, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $b: () => p,
    Ni: () => m,
    pC: () => g,
    pF: () => _,
    qd: () => h
});
var r = n(136722),
    i = n(311907),
    a = n(857071);
n(260509), n(961350);
var o = n(734057),
    s = n(71393),
    l = n(576705),
    c = n(488926),
    u = n(233993),
    d = n(446600),
    f = n(652215);

function p(e, t, n) {
    var i, a;
    let o = null == n ? void 0 : n.permissionOverwrites[e];
    return {
        id: e,
        type: t,
        deny: null != (i = null == o ? void 0 : o.deny) ? i : c.x3,
        allow: r.TF(null != (a = null == o ? void 0 : o.allow) ? a : c.x3, u.QY)
    }
}

function _(e) {
    let {
        allow: t,
        deny: n
    } = e;
    return r.aI(t, c.x3) && r.aI(n, c.x3)
}

function h(e) {
    return (0, i.bG)([l.A, s.A, o.A], () => {
        let t = o.A.getChannel(e),
            n = s.A.getGuild(null == t ? void 0 : t.getGuildId());
        return !!(l.A.can(f.xBc.ADMINISTRATOR, n) || l.A.can(f.xBc.MANAGE_ROLES, t, void 0, void 0, !0) || l.A.can(u.Kn, t))
    }, [e])
}

function m(e) {
    return (0, i.bG)([o.A, l.A], () => null != e && l.A.can(f.xBc.MUTE_MEMBERS, o.A.getChannel(e)), [e])
}

function g(e) {
    return null != e && !!e.isGuildStageVoice() && !!a.A.isLurking(e.guild_id) && !!d.A.isPublic(e.id) && l.A.can(u.Gk, e)
}