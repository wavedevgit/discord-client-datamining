/** chunk id: 115063 params = (module,exports,require) **/
n.d(t, {
    CN: () => E,
    Kk: () => A,
    Lx: () => I,
    Oj: () => h,
    Tb: () => u,
    fO: () => C,
    iY: () => g,
    xo: () => _
});
var i = n(58149),
    r = n(324593),
    l = n(253932),
    o = n(919638),
    s = n(71393),
    a = n(203982),
    d = n(652215);
n(985018);
let c = 864e5 * d.n83;

function u() {
    let e = l.$s.getSetting();
    return 0 === o.A.totalUnavailableGuilds && (e = e.filter(e => null != s.A.getGuild(e))), new Set(e)
}

function _() {
    let e = l.Zr.getSetting();
    return 0 === o.A.totalUnavailableGuilds && (e = e.filter(e => null != s.A.getGuild(e))), new Set(e)
}

function A() {
    let e = l.JG.getSetting();
    return 0 === o.A.totalUnavailableGuilds && (e = e.filter(e => null != s.A.getGuild(e))), new Set(e)
}

function E() {
    let e = l.pE.getSetting();
    return 0 === o.A.totalUnavailableGuilds && (e = e.filter(e => null != s.A.getGuild(e))), new Set(e)
}

function I(e) {
    return (e & d.yKI) === d.yKI ? {
        all: !0,
        mutualFriends: !0,
        mutualGuilds: !0
    } : {
        all: !1,
        mutualFriends: (e & d.dzt.MUTUAL_FRIENDS) === d.dzt.MUTUAL_FRIENDS,
        mutualGuilds: (e & d.dzt.MUTUAL_GUILDS) === d.dzt.MUTUAL_GUILDS
    }
}

function h(e, t) {
    return !!(!t.verified || t.isStaff()) || null != e && c > Date.now() - new Date(e.created_at).getTime()
}

function g(e) {
    let {
        destinationPane: t,
        originPane: n,
        source: l,
        subsection: o,
        locationStack: s,
        applicationId: a
    } = e;
    i.Ay.trackWithMetadata(d.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: n,
        destination_pane: t,
        location_stack: s,
        source: l,
        subsection: o,
        application_id: a,
        search_session_id: r.A.getSearchSessionId()
    })
}

function C(e) {
    a._.dispatch(d.jej.SHAKE_SETTINGS_MODAL, e)
}