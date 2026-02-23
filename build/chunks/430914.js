/** chunk id: 430914, original params: e,t,i (module,exports,require) **/
i.d(t, {
    Zs: () => f,
    uS: () => c
});
var n = i(311907),
    l = i(600975),
    r = i(428835),
    d = i(961350),
    a = i(994500),
    o = i(652215);
let u = (0, l.C)({
    kind: "user",
    id: "2025-11_invite_friend_members",
    label: "Show Friends in Server on Invite Modal",
    defaultConfig: {
        showFriendsInServer: !1,
        showInviter: !1
    },
    treatments: [{
        id: 1,
        label: "Show Friends in Server",
        config: {
            showFriendsInServer: !0,
            showInviter: !1
        }
    }, {
        id: 2,
        label: "Show Friends in Server and Inviter",
        config: {
            showFriendsInServer: !0,
            showInviter: !0
        }
    }]
});

function s(e) {
    if (null == e) return !1;
    let t = e.features;
    return Array.isArray(t) ? !t.includes(o.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) : !(t instanceof Set) || !t.has(o.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
}
let _ = {
    showFriendsInServer: !1,
    showInviter: !1
};

function c(e) {
    let {
        guild: t,
        ...i
    } = e, l = (0, n.bG)([d.default], () => d.default.isAuthenticated()), o = (0, n.bG)([a.A], () => a.A.getFriendCount() > 0), c = s(t), f = l && o && c, A = (0, r.Dr)(u, {
        ...i,
        disable: !f
    });
    return f ? A : _
}

function f(e) {
    let {
        guild: t,
        ...i
    } = e, n = d.default.isAuthenticated(), l = a.A.getFriendCount() > 0;
    return n && l && s(t) ? (0, r.Kd)(u, i) : _
}