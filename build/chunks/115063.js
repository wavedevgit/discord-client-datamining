/** chunk id: 115063, original params: e,t,n (module,exports,require) **/
n.d(t, {
    CN: () => g,
    Kk: () => A,
    Lx: () => I,
    Oj: () => E,
    Tb: () => c,
    fO: () => C,
    iY: () => h,
    xo: () => u
});
var i = n(58149),
    r = n(324593),
    a = n(253932),
    l = n(919638),
    s = n(71393),
    o = n(203982),
    d = n(652215);
n(985018);
let _ = 864e5 * d.n83;

function c() {
    let e = a.$s.getSetting();
    return 0 === l.A.totalUnavailableGuilds && (e = e.filter(e => null != s.A.getGuild(e))), new Set(e)
}

function u() {
    let e = a.Zr.getSetting();
    return 0 === l.A.totalUnavailableGuilds && (e = e.filter(e => null != s.A.getGuild(e))), new Set(e)
}

function A() {
    let e = a.JG.getSetting();
    return 0 === l.A.totalUnavailableGuilds && (e = e.filter(e => null != s.A.getGuild(e))), new Set(e)
}

function g() {
    let e = a.pE.getSetting();
    return 0 === l.A.totalUnavailableGuilds && (e = e.filter(e => null != s.A.getGuild(e))), new Set(e)
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

function E(e, t) {
    return !!(!t.verified || t.isStaff()) || null != e && _ > Date.now() - new Date(e.created_at).getTime()
}

function h(e) {
    let {
        destinationPane: t,
        originPane: n,
        source: a,
        subsection: l,
        locationStack: s,
        applicationId: o
    } = e;
    i.Ay.trackWithMetadata(d.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: n,
        destination_pane: t,
        location_stack: s,
        source: a,
        subsection: l,
        application_id: o,
        search_session_id: r.A.getSearchSessionId()
    })
}

function C(e) {
    o._.dispatch(d.jej.SHAKE_SETTINGS_MODAL, e)
}