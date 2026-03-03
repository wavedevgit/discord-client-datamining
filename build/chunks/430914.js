/** chunk id: 430914, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Zs: () => f,
    uS: () => c
});
var i = n(311907),
    l = n(600975),
    a = n(428835),
    r = n(961350),
    o = n(994500),
    d = n(652215);
let _ = (0, l.C)({
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
    return Array.isArray(t) ? !t.includes(d.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) : !(t instanceof Set) || !t.has(d.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
}
let u = {
    showFriendsInServer: !1,
    showInviter: !1
};

function c(e) {
    let {
        guild: t,
        ...n
    } = e, l = (0, i.bG)([r.default], () => r.default.isAuthenticated()), d = (0, i.bG)([o.A], () => o.A.getFriendCount() > 0), c = s(t), f = l && d && c, g = (0, a.Dr)(_, {
        ...n,
        disable: !f
    });
    return f ? g : u
}

function f(e) {
    let {
        guild: t,
        ...n
    } = e, i = r.default.isAuthenticated(), l = o.A.getFriendCount() > 0;
    return i && l && s(t) ? (0, a.Kd)(_, n) : u
}