/** chunk id: 960736 params = (module,exports,require) **/
n.d(t, {
    N9: () => m,
    Z1: () => v,
    dR: () => u,
    jJ: () => g,
    lD: () => _,
    p9: () => f,
    qO: () => c,
    tJ: () => A,
    uE: () => I,
    xD: () => p,
    xP: () => s
});
var i = n(353640),
    l = n(873298),
    a = n(253932),
    d = n(287809);
let r = {
    nickname: void 0,
    dmsAllowed: !a.Zt.getSetting()
};

function o(e) {
    let t = a._Z.getSetting();
    return t !== l.Qd.ACTIVITY_STATUS_ON && (t !== l.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS || null == e || !(e > 200))
}
let _ = (0, i.v)(e => ({
        nickname: r.nickname,
        dmsAllowed: r.dmsAllowed,
        showActivity: !0,
        inviteCode: void 0,
        guildId: void 0,
        touched: !1,
        setNickname: t => e(e => ({
            ...e,
            nickname: t,
            touched: !0
        })),
        setDmsAllowed: t => e(e => ({
            ...e,
            dmsAllowed: t,
            touched: !0
        })),
        setShowActivity: t => e(e => ({
            ...e,
            showActivity: t,
            touched: !0
        })),
        setInviteCode: t => e(e => ({
            ...e,
            inviteCode: t,
            touched: !0
        })),
        setGuildId: t => e(e => ({
            ...e,
            guildId: t,
            touched: !0
        })),
        initialize: (t, n, i) => e(e => ({
            ...e,
            guildSize: t,
            inviteCode: n,
            guildId: i,
            showActivity: o(t),
            dmsAllowed: !a.Zt.getSetting(),
            touched: !1
        })),
        reset: () => e(e => ({
            nickname: r.nickname,
            dmsAllowed: r.dmsAllowed,
            showActivity: o(e.guildSize),
            inviteCode: void 0,
            guildId: void 0,
            guildSize: e.guildSize,
            touched: !1
        }))
    })),
    u = (e, t, n) => {
        _.getState().initialize(e, t, n)
    },
    s = () => {
        _.getState().reset()
    },
    c = () => {
        let e = _.getState();
        return e.nickname !== r.nickname || e.dmsAllowed !== r.dmsAllowed || e.showActivity !== o(e.guildSize)
    },
    f = () => _.getState().inviteCode,
    p = () => _.getState().guildId,
    g = () => _.getState().touched,
    v = () => _.getState().dmsAllowed,
    A = () => _.getState().nickname,
    m = () => _.getState().showActivity,
    I = () => {
        let {
            nickname: e
        } = _();
        if (null != e && "" !== e.trim()) return e;
        let t = d.default.getCurrentUser();
        return t?.globalName ?? t?.username ?? ""
    }