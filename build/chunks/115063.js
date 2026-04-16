/** chunk id: 115063 params = (module,exports,require) **/
n.d(t, {
    CN: () => b,
    Kk: () => c,
    Lx: () => _,
    Oj: () => f,
    Tb: () => o,
    fO: () => A,
    iY: () => E,
    xo: () => S
});
var i = n(58149),
    s = n(324593),
    a = n(253932),
    r = n(919638),
    d = n(71393),
    l = n(203982),
    h = n(652215);
n(985018);
let u = 864e5 * h.n83;

function o() {
    let e = a.$s.getSetting();
    return 0 === r.A.totalUnavailableGuilds && (e = e.filter(e => null != d.A.getGuild(e))), new Set(e)
}

function S() {
    let e = a.Zr.getSetting();
    return 0 === r.A.totalUnavailableGuilds && (e = e.filter(e => null != d.A.getGuild(e))), new Set(e)
}

function c() {
    let e = a.JG.getSetting();
    return 0 === r.A.totalUnavailableGuilds && (e = e.filter(e => null != d.A.getGuild(e))), new Set(e)
}

function b() {
    let e = a.pE.getSetting();
    return 0 === r.A.totalUnavailableGuilds && (e = e.filter(e => null != d.A.getGuild(e))), new Set(e)
}

function _(e) {
    return (e & h.yKI) === h.yKI ? {
        all: !0,
        mutualFriends: !0,
        mutualGuilds: !0
    } : {
        all: !1,
        mutualFriends: (e & h.dzt.MUTUAL_FRIENDS) === h.dzt.MUTUAL_FRIENDS,
        mutualGuilds: (e & h.dzt.MUTUAL_GUILDS) === h.dzt.MUTUAL_GUILDS
    }
}

function f(e, t) {
    return !!(!t.verified || t.isStaff()) || null != e && u > Date.now() - new Date(e.created_at).getTime()
}

function E(e) {
    let {
        destinationPane: t,
        originPane: n,
        source: a,
        subsection: r,
        locationStack: d,
        applicationId: l
    } = e;
    i.Ay.trackWithMetadata(h.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: n,
        destination_pane: t,
        location_stack: d,
        source: a,
        subsection: r,
        application_id: l,
        search_session_id: s.A.getSearchSessionId()
    })
}

function A(e) {
    l._.dispatch(h.jej.SHAKE_SETTINGS_MODAL, e)
}