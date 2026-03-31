/** chunk id: 115063 params = (module,exports,require) **/
n.d(t, {
    CN: () => E,
    Kk: () => A,
    Lx: () => g,
    Oj: () => I,
    Tb: () => c,
    fO: () => C,
    iY: () => h,
    xo: () => u
});
var i = n(58149),
    r = n(324593),
    s = n(253932),
    a = n(919638),
    l = n(71393),
    o = n(203982),
    d = n(652215);
n(985018);
let _ = 864e5 * d.n83;

function c() {
    let e = s.$s.getSetting();
    return 0 === a.A.totalUnavailableGuilds && (e = e.filter(e => null != l.A.getGuild(e))), new Set(e)
}

function u() {
    let e = s.Zr.getSetting();
    return 0 === a.A.totalUnavailableGuilds && (e = e.filter(e => null != l.A.getGuild(e))), new Set(e)
}

function A() {
    let e = s.JG.getSetting();
    return 0 === a.A.totalUnavailableGuilds && (e = e.filter(e => null != l.A.getGuild(e))), new Set(e)
}

function E() {
    let e = s.pE.getSetting();
    return 0 === a.A.totalUnavailableGuilds && (e = e.filter(e => null != l.A.getGuild(e))), new Set(e)
}

function g(e) {
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

function I(e, t) {
    return !!(!t.verified || t.isStaff()) || null != e && _ > Date.now() - new Date(e.created_at).getTime()
}

function h(e) {
    let {
        destinationPane: t,
        originPane: n,
        source: s,
        subsection: a,
        locationStack: l,
        applicationId: o
    } = e;
    i.Ay.trackWithMetadata(d.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: n,
        destination_pane: t,
        location_stack: l,
        source: s,
        subsection: a,
        application_id: o,
        search_session_id: r.A.getSearchSessionId()
    })
}

function C(e) {
    o._.dispatch(d.jej.SHAKE_SETTINGS_MODAL, e)
}