/** chunk id: 46477, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    CA: () => m,
    _W: () => b,
    we: () => O,
    zl: () => g
}), n(896048);
var r = n(284009),
    i = n.n(r),
    a = n(485845),
    o = n(136722),
    s = n(155718),
    l = n(200662),
    c = n(95701),
    u = n(71393),
    d = n(392054),
    f = n(168186),
    p = n(240591),
    _ = n(73510),
    h = n(652215),
    m = function(e) {
        return e[e.ALLOWED = 0] = "ALLOWED", e[e.NSFW_NOT_ALLOWED = 1] = "NSFW_NOT_ALLOWED", e[e.WRONG_COMMAND_TYPE = 2] = "WRONG_COMMAND_TYPE", e[e.PREDICATE_FAILED = 3] = "PREDICATE_FAILED", e[e.CONTEXT_NOT_ALLOWED = 4] = "CONTEXT_NOT_ALLOWED", e[e.MISSING_BASE_PERMISSIONS = 5] = "MISSING_BASE_PERMISSIONS", e[e.CHANNEL_DENIED = 6] = "CHANNEL_DENIED", e[e.USER_DENIED = 7] = "USER_DENIED", e
    }({});

function g(e, t, n) {
    var r;
    let {
        context: l,
        commandTypes: m,
        allowNsfw: g,
        computedPermissions: v,
        userId: A,
        roleIds: I,
        isImpersonating: S,
        hasBaseAccessPermissions: T
    } = t, {
        applicationAllowedForUser: C,
        applicationAllowedForChannel: N,
        isGuildInstalled: w,
        isUserInstalled: R,
        commandBotId: P
    } = n;
    if (!m.includes(e.type)) return 2;
    if (e.nsfw && !g) return 1;
    let D = null != l ? (0, p.ud)(l, P) : void 0;
    if (null != e.contexts) {
        if (null != D && !e.contexts.includes(D)) return 4
    } else if (e.inputType === d.y$.BOT && (!1 === e.dmPermission && D === s.OL.BOT_DM || D === s.OL.PRIVATE_CHANNEL)) return 4;
    if (null != e.predicate && l instanceof c.YB) {
        let t = u.A.getGuild(l.guild_id);
        if (!e.predicate({
                channel: l,
                guild: t
            })) return 3
    }
    if (e.applicationId === _.Ik.BUILT_IN) return 0;
    let L = null != l ? (0, p.wz)(l) : void 0;
    if (null == L || o.zy(v, h.xBc.ADMINISTRATOR) || R && (null == (r = e.integration_types) ? void 0 : r.includes(a.b.USER_INSTALL))) return 0;
    if (!T && w && (null == e.integration_types || e.integration_types.includes(a.b.GUILD_INSTALL))) return 5;
    if (l instanceof c.YB) {
        i()(void 0 !== N, "missing applicationAllowedForChannel");
        let t = b(e.permissions, l, L);
        if (y(t) || !E(t) && y(N)) return 6
    }
    let x = O(e.permissions, L, A, I, S);
    if (E(x)) return 0;
    if (y(x) || y(C)) return 7;
    if (null != e.defaultMemberPermissions && !(!o.aI(e.defaultMemberPermissions, f.Cq) && o.zy(v, e.defaultMemberPermissions))) return 7;
    return 0
}

function E(e) {
    return !0 === e
}

function y(e) {
    return !1 === e
}

function b(e, t, n) {
    if (null == e) return null;
    let r = t.id;
    if (t.isThread()) {
        var i;
        r = null != (i = t.parent_id) ? i : t.id
    }
    let a = e[(0, l.Eu)(r, d.RA.CHANNEL)];
    if (null != a) return a.permission;
    let o = e[(0, l.Eu)((0, f.Ap)(n), d.RA.CHANNEL)];
    return null != o ? o.permission : null
}

function O(e, t, n, r, i) {
    if (null == e) return null;
    if (!i) {
        let t = e[(0, l.Eu)(n, d.RA.USER)];
        if (null != t) return t.permission
    }
    let a = !1;
    for (let t of r) {
        let n = e[(0, l.Eu)(t, d.RA.ROLE)];
        if (null != n) {
            if (n.permission) return !0;
            a = !0
        }
    }
    if (a) return !1;
    let o = null != t ? e[(0, l.Eu)(t, d.RA.ROLE)] : null;
    return null != o ? o.permission : null
}