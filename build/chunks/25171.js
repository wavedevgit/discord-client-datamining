/** Chunk was on web.js **/
/** chunk id: 25171, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => L
}), n(65821), n(896048);
var r = n(781763),
    i = n(626584),
    a = n(606076),
    o = n(474951),
    s = n(961350),
    l = n(134861),
    c = n(540999),
    u = n(648484),
    d = n(962052),
    f = n(723702),
    p = n(998218),
    _ = n(837921),
    h = n(652215);

function m(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            m(e, t, n[t])
        })
    }
    return e
}

function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function y(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let b = new i.A("Games"),
    O = {},
    v = 0,
    A = null,
    I = 250,
    S = 12e4,
    T = 36e5;

function C() {
    return null != A ? Promise.resolve(A) : (0, f.isDesktop)() ? _.Ay.ensureModule("discord_game_utils").then(() => {
        let e = _.Ay.getGameUtils();
        return null != e && null != e.findLaunchable ? (A = e, e) : Promise.reject(Error("game utils not found"))
    }) : Promise.reject(Error("not desktop client"))
}

function N(e) {
    let t = {
            id: e.id,
            name: e.name,
            thirdPartySkus: e.thirdPartySkus,
            executables: e.executables.filter(e => e.os === (0, f.getPlatformName)()).map(e => e.name)
        },
        n = e.aliases.map(e => y(g({}, t), {
            name: e
        }));
    return [t, ...n]
}

function w(e) {
    return {
        id: e
    }
}
async function R(e) {
    if (Array.isArray(e) || (e = [e]), c.A.isDeveloper || (e = e.filter(e => null == e.thirdPartySkus || -1 === e.thirdPartySkus.findIndex(e => {
            let {
                distributor: t
            } = e;
            return t === h.d3x.BATTLENET
        }))), 0 === e.length) throw Error("No remaining launchable queries");
    let t = Date.now();
    t > v && (v = t + T, O = {});
    let n = await C();
    for (let t of e) {
        let e = O[t.id];
        if (null != e) return e;
        let r = await new Promise(e => n.findLaunchable(t, e));
        if (null != r) return O[t.id] = r, r
    }
    throw Error("could not find launchable")
}

function P(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    e() ? t() : setTimeout(() => {
        r * I <= S ? P(e, t, n, r + 1) : n()
    }, I)
}

function D(e) {
    return b.info("launch", e), new Promise((t, n) => {
        null == p.A.safeParseWithQuery(e.launchTarget) ? n(Error("Failed to parse launch target. ".concat(e.launchTarget))) : (window.open(e.launchTarget), t([]))
    })
}
let L = {
    waitSubscribed: (e, t) => new Promise((n, r) => P(() => o.A.isSubscribed(e, t), n, r)),
    waitConnected(e) {
        return new Promise(P.bind(this, () => l.A.isConnected(e)))
    },
    isLaunchable: e => R(N(e)).then(e => null != e).catch(() => !1),
    launch: e => R(N(e)).then(D),
    launchDispatchApplication(e, t, n, i, o) {
        let {
            launchOptions: l,
            defaultLaunchOptionId: c,
            installPath: f,
            applicationId: p,
            branchId: _,
            buildId: m,
            shouldPatch: g
        } = e;
        if (null == l || null == c || null == f) throw Error("Couldn't construct launchable for ".concat(e.applicationId));
        null == o && (o = c);
        let E = l[o];
        if (null == E) throw Error("Couldn't construct launchable for ".concat(e.applicationId, ". No launch option."));
        return (0, r.r)([_]).then(e => {
            let t = e[0];
            if (null == t) return Promise.reject(Error("branch is null"));
            let {
                liveBuildId: n
            } = t;
            if (g && n !== m) return Promise.reject(Error("live build id changed"))
        }).then(() => d.A.runLaunchSetup(p, _)).then(() => {
            let e = (0, a.A)(f),
                r = {
                    DISCORD_INSTANCE_ID: u.A.getId().toString(),
                    DISCORD_ACCESS_TOKEN: null != t ? t : "",
                    DISCORD_CURRENT_LOCALE: n,
                    DISCORD_CURRENT_BRANCH: i,
                    DISCORD_STORAGE_PATH: h.gkb.ROOT_STORAGE_PATH(e, s.default.getId())
                };
            return d.A.launch(p, _, E.name, r)
        })
    },
    removeShortcuts: e => (0, f.isWindows)() ? C().then(t => {
        var n, r;
        return null != (n = null == (r = t.removeShortcuts) ? void 0 : r.call(t, e)) && n
    }) : Promise.resolve(!1),
    createShortcuts(e, t, n, r, i) {
        if (null == i || !(0, f.isWindows)()) return Promise.resolve(!1);
        let a = "discord:///library/".concat(r, "/launch"),
            o = "".concat(i, "\\icon.ico");
        return C().then(r => {
            var i, s;
            return null != (i = null == (s = r.createShortcuts) ? void 0 : s.call(r, e, t, n, a, o)) && i
        })
    },
    isGameLaunchable: e => R(w(e)).then(e => null != e).catch(() => !1),
    launchGame: e => l.A.isConnected(e) ? Promise.resolve() : R(w(e)).then(D),
    isProtocolRegistered: e => C().then(t => {
        var n, r;
        return null != (n = null == (r = t.isProtocolSchemeRegistered) ? void 0 : r.call(t, e)) && n
    }).catch(() => !1),
    setRecentGames(e) {
        C().then(t => {
            var n;
            return null == (n = t.setRecentGames) ? void 0 : n.call(t, e)
        }).catch(() => {})
    }
}