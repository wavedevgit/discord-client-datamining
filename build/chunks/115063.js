/** Chunk was on 62684 **/
/** chunk id: 115063, original params: t,e,i (module,exports,require) **/
i.d(e, {
    CN: () => A,
    Kk: () => S,
    Lx: () => g,
    Oj: () => _,
    Tb: () => o,
    fO: () => m,
    iY: () => f,
    xo: () => c
}), i(896048);
var n = i(58149),
    l = i(253932),
    a = i(919638),
    r = i(71393),
    s = i(203982),
    u = i(652215);
i(985018);
let d = 864e5 * u.n83;

function o() {
    let t = l.$s.getSetting();
    return 0 === a.A.totalUnavailableGuilds && (t = t.filter(t => null != r.A.getGuild(t))), new Set(t)
}

function c() {
    let t = l.Zr.getSetting();
    return 0 === a.A.totalUnavailableGuilds && (t = t.filter(t => null != r.A.getGuild(t))), new Set(t)
}

function S() {
    let t = l.JG.getSetting();
    return 0 === a.A.totalUnavailableGuilds && (t = t.filter(t => null != r.A.getGuild(t))), new Set(t)
}

function A() {
    let t = l.pE.getSetting();
    return 0 === a.A.totalUnavailableGuilds && (t = t.filter(t => null != r.A.getGuild(t))), new Set(t)
}

function g(t) {
    return (t & u.yKI) === u.yKI ? {
        all: !0,
        mutualFriends: !0,
        mutualGuilds: !0
    } : {
        all: !1,
        mutualFriends: (t & u.dzt.MUTUAL_FRIENDS) === u.dzt.MUTUAL_FRIENDS,
        mutualGuilds: (t & u.dzt.MUTUAL_GUILDS) === u.dzt.MUTUAL_GUILDS
    }
}

function _(t, e) {
    return !!(!e.verified || e.isStaff()) || null != t && d > Date.now() - new Date(t.created_at).getTime()
}

function f(t) {
    let {
        destinationPane: e,
        originPane: i,
        source: l,
        subsection: a,
        locationStack: r,
        applicationId: s
    } = t;
    n.Ay.trackWithMetadata(u.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "user",
        origin_pane: i,
        destination_pane: e,
        location_stack: r,
        source: l,
        subsection: a,
        application_id: s
    })
}

function m(t) {
    s._.dispatch(u.jej.SHAKE_SETTINGS_MODAL, t)
}