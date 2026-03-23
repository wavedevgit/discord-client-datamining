/** chunk id: 115063 params = (module,exports,require) **/
n.d(e, {
    CN: () => _,
    Kk: () => c,
    Lx: () => S,
    Oj: () => f,
    Tb: () => s,
    fO: () => g,
    iY: () => p,
    xo: () => o
});
var i = n(58149),
    d = n(324593),
    a = n(253932),
    l = n(919638),
    h = n(71393),
    u = n(203982),
    r = n(652215);
n(985018);
let b = 864e5 * r.n83;

function s() {
    let t = a.$s.getSetting();
    return 0 === l.A.totalUnavailableGuilds && (t = t.filter(t => null != h.A.getGuild(t))), new Set(t)
}

function o() {
    let t = a.Zr.getSetting();
    return 0 === l.A.totalUnavailableGuilds && (t = t.filter(t => null != h.A.getGuild(t))), new Set(t)
}

function c() {
    let t = a.JG.getSetting();
    return 0 === l.A.totalUnavailableGuilds && (t = t.filter(t => null != h.A.getGuild(t))), new Set(t)
}

function _() {
    let t = a.pE.getSetting();
    return 0 === l.A.totalUnavailableGuilds && (t = t.filter(t => null != h.A.getGuild(t))), new Set(t)
}

function S(t) {
    return (t & r.yKI) === r.yKI ? {
        all: !0,
        mutualFriends: !0,
        mutualGuilds: !0
    } : {
        all: !1,
        mutualFriends: (t & r.dzt.MUTUAL_FRIENDS) === r.dzt.MUTUAL_FRIENDS,
        mutualGuilds: (t & r.dzt.MUTUAL_GUILDS) === r.dzt.MUTUAL_GUILDS
    }
}

function f(t, e) {
    return !!(!e.verified || e.isStaff()) || null != t && b > Date.now() - new Date(t.created_at).getTime()
}

function p(t) {
    let {
        destinationPane: e,
        originPane: n,
        source: a,
        subsection: l,
        locationStack: h,
        applicationId: u
    } = t;
    i.Ay.trackWithMetadata(r.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: n,
        destination_pane: e,
        location_stack: h,
        source: a,
        subsection: l,
        application_id: u,
        search_session_id: d.A.getSearchSessionId()
    })
}

function g(t) {
    u._.dispatch(r.jej.SHAKE_SETTINGS_MODAL, t)
}