/** chunk id: 631576, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $x: () => R,
    AO: () => S,
    MO: () => w,
    YB: () => I,
    oI: () => T,
    p9: () => N,
    sl: () => C,
    uK: () => L,
    vr: () => x,
    x5: () => P,
    zk: () => A
}), n(65821), n(228524), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(562465),
    o = n(73153),
    s = n(157559),
    l = n(142120),
    c = n(773669),
    u = n(594061),
    d = n(919638),
    f = n(287809),
    p = n(371794),
    _ = n(679382),
    h = n(378058),
    m = n(652215),
    g = n(355097),
    E = n(985018);

function y(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            y(e, t, n[t])
        })
    }
    return e
}

function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function v(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let A = async (e, t) => {
    let {
        body: n
    } = await (0, p.aP)({
        url: m.Rsh.STICKER_PACK(e),
        rejectWithError: !1
    });
    return o.h.dispatch({
        type: "STICKER_PACK_FETCH_SUCCESS",
        packId: e,
        pack: n,
        ingestStickers: t
    }), n
}, I = async function() {
    let {
        locale: e = c.default.locale
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    if (_.A.isFetchingStickerPacks || _.A.hasLoadedStickerPacks) return;
    o.h.wait(() => {
        o.h.dispatch({
            type: "STICKER_PACKS_FETCH_START"
        })
    });
    let {
        body: {
            sticker_packs: t
        }
    } = await a.Bo.get({
        url: m.Rsh.STICKER_PACKS,
        query: {
            locale: e
        },
        rejectWithError: !1
    });
    o.h.dispatch({
        type: "STICKER_PACKS_FETCH_SUCCESS",
        packs: t
    })
}, S = async e => {
    let {
        body: t
    } = await a.Bo.get({
        url: m.Rsh.STICKER(e),
        rejectWithError: !1
    });
    if ((0, h.Xw)(t)) o.h.dispatch({
        type: "GUILD_STICKER_FETCH_SUCCESS",
        sticker: t
    });
    else if ((0, h.FD)(t)) o.h.dispatch({
        type: "PACK_STICKER_FETCH_SUCCESS",
        sticker: t
    });
    else throw Error("Invalid sticker type")
}, T = async (e, t) => {
    let {
        body: n
    } = await a.Bo.get({
        url: m.Rsh.GUILD_STICKER_PACKS(e),
        rejectWithError: !1,
        signal: t
    });
    o.h.dispatch({
        type: "GUILD_STICKERS_FETCH_SUCCESS",
        guildId: e,
        stickers: n.map(e => null != e.user ? v(b({}, e), {
            user_id: e.user.id,
            user: e.user
        }) : e)
    })
}, C = async e => {
    await a.Bo.del({
        url: m.Rsh.GUILD_STICKER(e.guild_id, e.id),
        rejectWithError: !1
    })
}, N = async e => {
    var t;
    let {
        guildId: n
    } = e, r = await a.Bo.post({
        url: m.Rsh.GUILD_STICKER_PACKS(n),
        body: "web" === e.platform ? e.body : void 0,
        fields: "mobile" === e.platform ? [{
            name: "name",
            value: e.name
        }, {
            name: "tags",
            value: e.tags
        }, {
            name: "description",
            value: e.description
        }] : void 0,
        attachments: "mobile" === e.platform ? [{
            name: "file",
            file: {
                uri: e.uri,
                name: e.name,
                type: e.mimeType
            }
        }] : void 0,
        rejectWithError: !1
    });
    return o.h.dispatch({
        type: "GUILD_STICKERS_CREATE_SUCCESS",
        guildId: n,
        sticker: v(b({}, r.body), {
            user_id: null == (t = f.default.getCurrentUser()) ? void 0 : t.id
        })
    }), r.body
}, w = async (e, t, n) => (await a.Bo.patch({
    url: m.Rsh.GUILD_STICKER(e, t),
    body: n,
    rejectWithError: !1
})).body;

function R(e, t, n) {
    o.h.dispatch({
        type: "ADD_STICKER_PREVIEW",
        channelId: e,
        sticker: t,
        draftType: n
    })
}

function P(e, t) {
    o.h.dispatch({
        type: "CLEAR_STICKER_PREVIEW",
        channelId: e,
        draftType: t
    })
}

function D(e) {
    return d.A.totalUnavailableGuilds > 0 || !l.A.isConnected() ? e : e.filter(e => null != _.A.getStickerById(e))
}

function L(e) {
    u.bW.updateAsync("favoriteStickers", t => (t.stickerIds = D(t.stickerIds), i().size(t.stickerIds) >= 250) ? (s.A.show({
        title: E.intl.string(E.t["+XYXtZ"]),
        body: E.intl.formatToPlainString(E.t.JaIyFi, {
            count: 250
        })
    }), !1) : !t.stickerIds.includes(e) && void t.stickerIds.push(e), g.Sb.INFREQUENT_USER_ACTION)
}

function x(e) {
    u.bW.updateAsync("favoriteStickers", t => {
        t.stickerIds = t.stickerIds.filter(t => t !== e), t.stickerIds = D(t.stickerIds)
    }, g.Sb.INFREQUENT_USER_ACTION)
}