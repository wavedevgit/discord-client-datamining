/** Chunk was on web.js **/
/** chunk id: 918530, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => S,
    Ip: () => T
}), n(896048), n(321073), n(864466), n(443073);
var r = n(64700),
    i = n(311907),
    a = n(931991),
    o = n(594061),
    s = n(71393),
    l = n(576705),
    c = n(287809),
    u = n(473145),
    d = n(927578),
    f = n(477851),
    p = n(163956),
    _ = n(209932),
    h = n(807348),
    m = n(805143),
    g = n(194567),
    E = n(980504),
    y = n(788868);

function b(e, t) {
    return null != t && (e = t(e)), e.map((e, t) => ({
        type: h.uq.SOUND,
        sound: e,
        index: t
    }))
}

function O(e) {
    let {
        sections: t,
        guildIds: n,
        allSounds: r,
        potentialSoundIdsForSection: i,
        sectionType: a,
        sortSoundsFn: o
    } = e, s = {};
    for (let e of [...n, E.mV]) {
        var l;
        for (let t of null != (l = r.get(e)) ? l : []) null != i.find(e => e === t.soundId) && (s[t.soundId] = t)
    }
    let c = [];
    for (let e of i) {
        let t = s[e];
        null != t && c.push(t)
    }
    let u = b(c, o);
    u.length > 0 && t.push({
        key: a,
        categoryInfo: {
            type: a
        },
        items: u
    })
}

function v(e) {
    let {
        sections: t,
        guilds: n,
        currentGuildId: r,
        allSounds: i,
        hasNitro: a,
        sortSoundsFn: o
    } = e;
    for (let e of n) {
        var s;
        if (e.id === r) continue;
        let n = b(null != (s = i.get(e.id)) ? s : [], o);
        n.length > 0 && t.push({
            categoryInfo: {
                type: h.Cx.GUILD,
                guild: e,
                isNitroLocked: !a
            },
            key: e.id,
            items: n
        })
    }
}

function A(e, t, n) {
    var r;
    let {
        currentGuildHasAddPermissions: i,
        allSounds: a,
        filterOutEmptyCurrentGuild: o,
        sortSoundsFn: s
    } = n, l = null != (r = a.get(t.id)) ? r : [], c = b(l, s), d = l.length < (0, u.fA)(t) && i, f = 0 === c.length;
    (d || f) && !o && c.push({
        type: h.uq.ADD_SOUND,
        guild: t
    }), o && f || e.push({
        categoryInfo: {
            type: h.Cx.GUILD,
            guild: t,
            isNitroLocked: !1
        },
        key: t.id,
        items: c
    })
}

function I(e, t) {
    var n;
    let r = null != (n = t.get(E.mV)) ? n : E.pD;
    e.push({
        key: h.Cx.DEFAULTS,
        categoryInfo: {
            type: h.Cx.DEFAULTS
        },
        items: b(r, g.U)
    })
}

function S(e) {
    let {
        filterOutEmptyCurrentGuild: t = !1,
        moveDefaultsToBottom: n = !1
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], u = (0, i.bG)([c.default], () => c.default.getCurrentUser()), b = d.Ay.isPremium(u, y.PremiumTypes.TIER_2), [S, T, N] = (0, i.yK)([_.A], () => [_.A.getSounds(), _.A.getFavorites(), _.A.isFetching()]), w = (0, g.I)(), R = (0, m.Y)(e, !1), P = (0, i.yK)([s.A], () => {
        let e = [];
        return R.forEach(t => {
            let n = s.A.getGuild(t);
            null != n && e.push(n)
        }), e
    }), D = d.Ay.canUseSoundboardEverywhere(u), L = (0, i.bG)([s.A], () => s.A.getGuild(null == e ? void 0 : e.guild_id)), x = (0, i.bG)([l.A], () => {
        let {
            canCreateExpressions: e
        } = (0, a.ie)(L);
        return e
    }, [L]), {
        canSeeRecentlyHeard: M,
        canSeeFrequentlyPlayed: j
    } = (0, f.d)({
        location: "soundboard-useSoundGrid",
        autoTrackExposure: !0
    }), k = C(), U = (0, i.yK)([p.A], () => p.A.recentlyHeardSoundIds);
    return r.useMemo(() => {
        let e = 0,
            r = 0,
            i = [];
        if (o) {
            var a;
            return I(i, S), {
                categories: i,
                availableSounds: null != (a = S.get(E.mV)) ? a : E.pD,
                isFetching: N,
                soundCounts: {
                    favoriteSoundCount: 0,
                    unlockedCustomSoundCount: 0,
                    lockedCustomSoundCount: 0
                }
            }
        }
        return O({
            sections: i,
            guildIds: R,
            allSounds: S,
            potentialSoundIdsForSection: Array.from(T),
            sectionType: h.Cx.FAVORITES,
            sortSoundsFn: g.U
        }), M && O({
            sections: i,
            guildIds: R,
            allSounds: S,
            potentialSoundIdsForSection: U,
            sectionType: h.Cx.RECENTLY_HEARD
        }), j && O({
            sections: i,
            guildIds: R,
            allSounds: S,
            potentialSoundIdsForSection: k.map(e => e.soundId),
            sectionType: h.Cx.FREQUENTLY_USED
        }), void 0 !== L && A(i, L, {
            currentGuildHasAddPermissions: x,
            allSounds: S,
            filterOutEmptyCurrentGuild: t,
            sortSoundsFn: w
        }), n || D || I(i, S), v({
            sections: i,
            guilds: P,
            currentGuildId: null == L ? void 0 : L.id,
            allSounds: S,
            hasNitro: b,
            sortSoundsFn: w
        }), (n || D) && I(i, S), i.forEach(t => {
            t.categoryInfo.type === h.Cx.GUILD && (t.categoryInfo.isNitroLocked ? r += t.items.length : e += t.items.length)
        }), {
            categories: i,
            availableSounds: Array.from(S.values()).flat(),
            isFetching: N,
            soundCounts: {
                favoriteSoundCount: T.size,
                unlockedCustomSoundCount: e,
                lockedCustomSoundCount: r
            }
        }
    }, [R, S, T, U, k, j, M, L, x, t, n, D, P, o, N, b, w])
}

function T(e, t, n) {
    return r.useMemo(() => n.length > 0 ? [{
        key: h.Cx.SEARCH,
        categoryInfo: {
            type: h.Cx.SEARCH
        },
        items: b(t)
    }] : e, [e, n.length, t])
}

function C() {
    return r.useEffect(() => {
        o.bW.loadIfNecessary()
    }, []), (0, i.bG)([p.A], () => p.A.frecentlyPlayedSounds)
}