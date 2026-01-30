/** chunk id: 115063, original params: e,t,n (module,exports,require) **/
n.d(t, {
    CN: () => p,
    Kk: () => _,
    Lx: () => m,
    Oj: () => g,
    Tb: () => d,
    fO: () => f,
    iY: () => A,
    xo: () => u
}), n(896048);
var r = n(58149),
    i = n(253932),
    l = n(919638),
    s = n(71393),
    a = n(203982),
    o = n(652215);
n(985018);
let c = 864e5 * o.n83;

function d() {
    let e = i.$s.getSetting();
    return 0 === l.A.totalUnavailableGuilds && (e = e.filter(e => null != s.A.getGuild(e))), new Set(e)
}

function u() {
    let e = i.Zr.getSetting();
    return 0 === l.A.totalUnavailableGuilds && (e = e.filter(e => null != s.A.getGuild(e))), new Set(e)
}

function _() {
    let e = i.JG.getSetting();
    return 0 === l.A.totalUnavailableGuilds && (e = e.filter(e => null != s.A.getGuild(e))), new Set(e)
}

function p() {
    let e = i.pE.getSetting();
    return 0 === l.A.totalUnavailableGuilds && (e = e.filter(e => null != s.A.getGuild(e))), new Set(e)
}

function m(e) {
    return (e & o.yKI) === o.yKI ? {
        all: !0,
        mutualFriends: !0,
        mutualGuilds: !0
    } : {
        all: !1,
        mutualFriends: (e & o.dzt.MUTUAL_FRIENDS) === o.dzt.MUTUAL_FRIENDS,
        mutualGuilds: (e & o.dzt.MUTUAL_GUILDS) === o.dzt.MUTUAL_GUILDS
    }
}

function g(e, t) {
    return !!(!t.verified || t.isStaff()) || null != e && c > Date.now() - new Date(e.created_at).getTime()
}

function A(e) {
    let {
        destinationPane: t,
        originPane: n,
        source: i,
        subsection: l,
        locationStack: s,
        applicationId: a
    } = e;
    r.Ay.trackWithMetadata(o.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: n,
        destination_pane: t,
        location_stack: s,
        source: i,
        subsection: l,
        application_id: a
    })
}

function f(e) {
    a._.dispatch(o.jej.SHAKE_SETTINGS_MODAL, e)
}