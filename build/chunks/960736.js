/** chunk id: 960736 params = (module,exports,require) **/
n.d(t, {
    N9: () => S,
    Z1: () => p,
    dR: () => s,
    jJ: () => A,
    lD: () => _,
    p9: () => f,
    qO: () => c,
    tJ: () => I,
    uE: () => v,
    xD: () => g,
    xP: () => u
});
var i = n(353640),
    l = n(873298),
    a = n(253932),
    r = n(287809);
let o = {
    nickname: void 0,
    dmsAllowed: !a.Zt.getSetting()
};

function d(e) {
    let t = a._Z.getSetting();
    return t !== l.Qd.ACTIVITY_STATUS_ON && (t !== l.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS || null == e || !(e > 200))
}
let _ = (0, i.v)(e => ({
        nickname: o.nickname,
        dmsAllowed: o.dmsAllowed,
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
            showActivity: d(t),
            dmsAllowed: !a.Zt.getSetting(),
            touched: !1
        })),
        reset: () => e(e => ({
            nickname: o.nickname,
            dmsAllowed: o.dmsAllowed,
            showActivity: d(e.guildSize),
            inviteCode: void 0,
            guildId: void 0,
            guildSize: e.guildSize,
            touched: !1
        }))
    })),
    s = (e, t, n) => {
        _.getState().initialize(e, t, n)
    },
    u = () => {
        _.getState().reset()
    },
    c = () => {
        let e = _.getState();
        return e.nickname !== o.nickname || e.dmsAllowed !== o.dmsAllowed || e.showActivity !== d(e.guildSize)
    },
    f = () => _.getState().inviteCode,
    g = () => _.getState().guildId,
    A = () => _.getState().touched,
    p = () => _.getState().dmsAllowed,
    I = () => _.getState().nickname,
    S = () => _.getState().showActivity,
    v = () => {
        let {
            nickname: e
        } = _();
        if (null != e && "" !== e.trim()) return e;
        let t = r.default.getCurrentUser();
        return t?.globalName ?? t?.username ?? ""
    }