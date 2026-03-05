/** chunk id: 115063 params = (module,exports,require) **/
i.d(t, {
    CN: () => _,
    Kk: () => h,
    Lx: () => A,
    Oj: () => E,
    Tb: () => o,
    fO: () => f,
    iY: () => T,
    xo: () => S
});
var n = i(58149),
    s = i(324593),
    a = i(253932),
    r = i(919638),
    l = i(71393),
    d = i(203982),
    u = i(652215);
i(985018);
let c = 864e5 * u.n83;

function o() {
    let e = a.$s.getSetting();
    return 0 === r.A.totalUnavailableGuilds && (e = e.filter(e => null != l.A.getGuild(e))), new Set(e)
}

function S() {
    let e = a.Zr.getSetting();
    return 0 === r.A.totalUnavailableGuilds && (e = e.filter(e => null != l.A.getGuild(e))), new Set(e)
}

function h() {
    let e = a.JG.getSetting();
    return 0 === r.A.totalUnavailableGuilds && (e = e.filter(e => null != l.A.getGuild(e))), new Set(e)
}

function _() {
    let e = a.pE.getSetting();
    return 0 === r.A.totalUnavailableGuilds && (e = e.filter(e => null != l.A.getGuild(e))), new Set(e)
}

function A(e) {
    return (e & u.yKI) === u.yKI ? {
        all: !0,
        mutualFriends: !0,
        mutualGuilds: !0
    } : {
        all: !1,
        mutualFriends: (e & u.dzt.MUTUAL_FRIENDS) === u.dzt.MUTUAL_FRIENDS,
        mutualGuilds: (e & u.dzt.MUTUAL_GUILDS) === u.dzt.MUTUAL_GUILDS
    }
}

function E(e, t) {
    return !!(!t.verified || t.isStaff()) || null != e && c > Date.now() - new Date(e.created_at).getTime()
}

function T(e) {
    let {
        destinationPane: t,
        originPane: i,
        source: a,
        subsection: r,
        locationStack: l,
        applicationId: d
    } = e;
    n.Ay.trackWithMetadata(u.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: i,
        destination_pane: t,
        location_stack: l,
        source: a,
        subsection: r,
        application_id: d,
        search_session_id: s.A.getSearchSessionId()
    })
}

function f(e) {
    d._.dispatch(u.jej.SHAKE_SETTINGS_MODAL, e)
}