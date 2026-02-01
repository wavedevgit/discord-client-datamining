/** chunk id: 545152, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => B,
    x: () => Y
}), n(733351), n(321073), n(65821), n(896048), n(114821), n(339614), n(747238), n(812715), n(866193);
var r = n(284009),
    i = n.n(r),
    a = n(73153),
    o = n(843472),
    s = n(608299),
    l = n(803306),
    c = n(155718),
    u = n(884384),
    d = n(358579),
    f = n(58149),
    p = n(224868),
    _ = n(508675),
    h = n(7584),
    m = n(706727),
    g = n(296043),
    E = n(963852),
    y = n(195880),
    b = n(867455),
    O = n(773669),
    v = n(71393),
    A = n(522602),
    I = n(287809),
    S = n(453771),
    T = n(403362),
    C = n(292348),
    N = n(721768),
    w = n(360161),
    R = n(258363),
    P = n(842209),
    D = n(861382),
    L = n(392054),
    x = n(168186),
    M = n(652215),
    j = n(381941),
    k = n(985018);

function U(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            U(e, t, n[t])
        })
    }
    return e
}

function V(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function F(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : V(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
async function B(e) {
    var t, n, r, o, l, u, d, _, h, m, g, E, y, v, I, S, T;
    let {
        command: C,
        optionValues: P,
        context: j,
        commandTargetId: k,
        maxSizeCallback: U,
        commandOrigin: G = L.iw.CHAT,
        sectionName: V,
        interactionLifecycleOptionsFactory: F = z,
        source: B
    } = e;
    if (null == j.channel) return;
    let Y = null != (t = D.A.getSource(j.channel.id)) ? t : B,
        K = null != (n = D.A.getCommandOrigin(j.channel.id)) ? n : G;
    null == j.autocomplete && a.h.dispatch({
        type: "APPLICATION_COMMAND_USED",
        context: j,
        command: C,
        commandOrigin: K
    }), await b.A.unarchiveThreadIfNecessary(j.channel.id);
    let Z = [],
        Q = [],
        X = (0, x.Qr)(K);
    if (null != C.options)
        for (let e of C.options) {
            let t;
            if (e.type === c.n4.SUB_COMMAND || e.type === c.n4.SUB_COMMAND_GROUP || !(e.name in P)) continue;
            let n = (null == (_ = j.autocomplete) ? void 0 : _.name) === e.name || void 0;
            if (e.type === c.n4.STRING) {
                let r = null != (h = null == (m = R.Eq(P, e.name)) ? void 0 : m.trim()) ? h : "";
                if (null != e.choices ? t = (0, w.$7)(e.choices, r) : e.autocomplete && (t = null != j.autocomplete && n ? j.autocomplete.query : (0, w.Xf)(j.channel.id, e.name, r)), null == t && (t = r), "" === t && null != j.autocomplete && !n) continue;
                i()(null != j.autocomplete || null != t, 'Option "'.concat(e.name, '" expects a value')), Z.push({
                    type: e.type,
                    name: e.name,
                    value: t,
                    focused: n
                });
                continue
            }
            if (e.type === c.n4.ATTACHMENT) {
                if (null != j.autocomplete) continue;
                let t = A.A.getUpload(j.channel.id, e.name, X);
                if (null == t) continue;
                let r = Q.length;
                Q.push(t), Z.push({
                    type: e.type,
                    name: e.name,
                    value: r,
                    focused: n
                });
                continue
            }
            let r = R.Gk(P[e.name]);
            if (i()(null != j.autocomplete || 1 === r.length, 'Option "'.concat(e.name, '" expects a single option type')), null == r[0] && !n) continue;
            let a = null != (d = r[0]) ? d : {
                type: "text",
                text: ""
            };
            switch (e.type) {
                case c.n4.CHANNEL:
                    if ("channelMention" === a.type) t = a.channelId;
                    else if ("text" === a.type)
                        if ((0, x.hT)(a.text)) t = a.text.trim();
                        else {
                            let e = (0, p.f)(a.text, null == (g = j.guild) ? void 0 : g.id, j.channel.id);
                            i()((null == e ? void 0 : e.type) === "channelMention", "Failed to resolve ".concat(a.text)), t = e.channelId
                        } break;
                case c.n4.ROLE:
                    if ("roleMention" === a.type) t = a.roleId;
                    else if ("text" === a.type)
                        if ((0, x.hT)(a.text)) t = a.text.trim();
                        else {
                            let e = (0, p.f)(a.text, null == (E = j.guild) ? void 0 : E.id, j.channel.id, {
                                allowUsers: !1
                            });
                            i()((null == e ? void 0 : e.type) === "roleMention", "Failed to resolve ".concat(a.text)), t = e.roleId
                        }
                    else "textMention" === a.type && "@everyone" === a.text && (t = null == (y = j.guild) ? void 0 : y.id);
                    break;
                case c.n4.USER:
                    if ("userMention" === a.type) t = a.userId;
                    else if ("text" === a.type)
                        if ((0, x.hT)(a.text)) t = a.text.trim();
                        else {
                            let e = (0, p.f)(a.text, null == (v = j.guild) ? void 0 : v.id, j.channel.id, {
                                allowRoles: !1
                            });
                            i()((null == e ? void 0 : e.type) === "userMention", "Failed to resolve ".concat(a.text)), t = e.userId
                        } break;
                case c.n4.MENTIONABLE:
                    if ("userMention" === a.type) t = a.userId;
                    else if ("roleMention" === a.type) t = a.roleId;
                    else if ("textMention" === a.type && "@everyone" === a.text) t = null == (I = j.guild) ? void 0 : I.id;
                    else if ("text" === a.type)
                        if ((0, x.hT)(a.text)) t = a.text.trim();
                        else {
                            let e = (0, p.f)(a.text, null == (S = j.guild) ? void 0 : S.id, j.channel.id);
                            (null == e ? void 0 : e.type) === "userMention" ? t = e.userId: (null == e ? void 0 : e.type) === "roleMention" ? t = e.roleId : (null == e ? void 0 : e.type) === "textMention" && "@everyone" === e.text ? t = null == (T = j.guild) ? void 0 : T.id : i()(!1, "Failed to resolve ".concat(a.text))
                        } break;
                case c.n4.BOOLEAN:
                    "text" === a.type && (t = (0, w.a5)(a.text.trim()));
                    break;
                case c.n4.INTEGER:
                    if ("text" === a.type) {
                        let r = a.text.trim();
                        null != e.choices ? t = (0, w.Bk)(e.choices, r) : e.autocomplete && (t = null != j.autocomplete && n ? j.autocomplete.query : (0, w.lM)(j.channel.id, e.name, r)), null == t && (t = Number(R.ib(O.default.locale, r)))
                    }
                    break;
                case c.n4.NUMBER:
                    if ("text" === a.type) {
                        let r = a.text.trim();
                        null != e.choices ? t = (0, w.Bk)(e.choices, r) : e.autocomplete && (t = null != j.autocomplete && n ? j.autocomplete.query : (0, w.lM)(j.channel.id, e.name, r)), null == t && (t = Number(R.ib(O.default.locale, r)))
                    }
                    break;
                default:
                    throw Error("Unsupported option type: ".concat(e.type))
            }("" !== t || null == j.autocomplete || n) && (i()(null != j.autocomplete || null != t, 'Unexpected value for option "'.concat(e.name, '"')), null != t && Z.push({
                type: e.type,
                name: e.name,
                value: t,
                focused: n
            }))
        }
    if (null != C.subCommandPath)
        for (let e = C.subCommandPath.length - 1; e >= 0; e -= 1) {
            let {
                name: t,
                type: n
            } = C.subCommandPath[e];
            Z = [{
                type: n,
                name: t,
                options: Z
            }]
        }
    if (null != C.execute) return f.Ay.trackWithMetadata(M.HAw.APPLICATION_COMMAND_USED, {
        command_id: C.id,
        application_id: C.applicationId,
        command_type: C.type,
        location: q(K),
        source: Y
    }), C.execute(Z, j);
    if (C.inputType === L.y$.BUILT_IN || C.inputType === L.y$.BUILT_IN_TEXT || C.inputType === L.y$.BUILT_IN_INTEGRATION) return;
    let J = {
            version: C.version,
            id: null != (r = null == (l = C.rootCommand) ? void 0 : l.id) ? r : C.id,
            guild_id: C.guildId,
            name: null != (o = null == (u = C.rootCommand) ? void 0 : u.name) ? o : C.untranslatedName,
            type: C.type,
            options: Z,
            application_command: C.rootCommand
        },
        $ = () => {
            H(P)
        };
    null != k && (J.target_id = k), null != j.autocomplete ? (0, N.WL)(C, j, J) : (s.A.clearAll(j.channel.id, X), W({
        applicationId: C.applicationId,
        data: J,
        context: j,
        attachments: Q,
        maxSizeCallback: U,
        onMessageSuccess: $,
        analytics_location: q(K),
        sectionName: V,
        source: Y,
        interactionLifecycleOptions: await F(C, j, J)
    }))
}
let H = e => {
        let t = Object.values(e).flatMap(e => e.map(e => "emoji" === e.type ? new h.zT({
            names: [e.name.replaceAll(":", "")],
            surrogates: "",
            unicodeVersion: 6
        }) : "customEmoji" === e.type ? _.Ay.getCustomEmojiById(e.emojiId) : null).filter(T.Vq));
        t.length > 0 && a.h.dispatch({
            type: "EMOJI_TRACK_USAGE",
            emojiUsed: t
        })
    },
    Y = async (e, t, n) => {
        if (e.isCommandType() && null != e.interactionData && null != n.command) {
            let r = {
                channel: t,
                guild: null != t.guild_id ? v.A.getGuild(t.guild_id) : null
            };
            W({
                applicationId: n.command.applicationId,
                data: e.interactionData,
                context: r,
                interactionLifecycleOptions: await z(n.command, r, e.interactionData)
            })
        }
    }, W = e => {
        var t;
        let {
            applicationId: n,
            data: r,
            context: i,
            attachments: a,
            maxSizeCallback: o,
            onMessageSuccess: s,
            analytics_location: l,
            sectionName: u,
            source: d,
            interactionLifecycleOptions: f
        } = e;
        if (null == i.channel) return;
        let {
            channel: p,
            guild: _
        } = i, h = p.id, g = null == _ ? void 0 : _.id, E = {
            applicationId: n,
            channelId: h,
            guildId: g,
            data: r,
            nonce: null != (t = f.nonce) ? t : (0, y.m)(),
            attachments: a,
            maxSizeCallback: o,
            analytics_location: l,
            sectionName: u,
            source: d
        };
        m.tU(E.nonce, {
            messageId: f.messageId,
            onCreate: f.onCreate,
            onSuccess: f.onSuccess,
            onFailure: f.onFailure,
            data: {
                interactionType: c.G4.APPLICATION_COMMAND,
                applicationId: n,
                channelId: h
            }
        }), null != a && a.length > 0 ? Q(a, E.nonce, g, o).then(e => {
            e && K(E, s)
        }) : K(E, s)
    };

function K(e, t) {
    u.Ay.enqueue({
        type: u.AZ.COMMAND,
        message: e
    }, n => {
        var r;
        (0, g.wy)(e.nonce, n, e.applicationId, e.channelId, null != (r = e.guildId) ? r : null), n.ok && null != t && t()
    })
}
async function z(e, t, n) {
    var r;
    if (null == t.channel) return {};
    let i = P.s$({
        channel: t.channel,
        type: "channel"
    }, n.type, e.applicationId);
    if (null == i) return {};
    let s = null == (r = i.application) ? void 0 : r.bot;
    if (null == s && null != i.botId) try {
        await l.wz(i.botId)
    } catch (e) {}
    let u = F(G({}, (0, E.Ay)({
        channelId: t.channel.id,
        content: "",
        type: n.type === c.kc.CHAT ? M.lAJ.CHAT_INPUT_COMMAND : M.lAJ.CONTEXT_MENU_COMMAND,
        author: null != s ? s : {
            id: i.id,
            username: i.name,
            discriminator: M.h3J,
            avatar: null,
            bot: !0
        }
    })), {
        application: i.application,
        interaction: {
            id: n.id,
            name: n.name,
            name_localized: e.displayName,
            type: c.G4.APPLICATION_COMMAND,
            user: (0, E.Vi)(I.default.getCurrentUser())
        },
        interaction_data: n
    });
    return o.A.receiveMessage(t.channel.id, u, !0, {
        applicationId: e.applicationId,
        command: e
    }), {
        get messageId() {
            return u.id
        },
        get nonce() {
            return u.id
        },
        onCreate: e => {
            null != u.interaction && (u.interaction.id = e)
        },
        onSuccess: () => {},
        onFailure: (n, r, i, s) => {
            if (null == t.channel) return;
            null == r && null != n && o.A.sendClydeError(t.channel.id, n);
            let l = r;
            null == l && null != s && (l = (0, g.sW)(s, e.applicationId)), a.h.dispatch({
                type: "MESSAGE_SEND_FAILED",
                messageId: u.id,
                channelId: t.channel.id,
                reason: l
            })
        }
    }
}

function q(e) {
    switch (e) {
        case L.iw.APPLICATION_LAUNCHER:
            return L.Oh.APP_LAUNCHER;
        case L.iw.APP_LAUNCHER_APPLICATION_VIEW:
            return L.Oh.APP_LAUNCHER_APPLICATION_VIEW;
        case L.iw.IMAGE_RECS_MENU:
            return L.Oh.IMAGE_RECS_MENU;
        case L.iw.IMAGE_RECS_SUBMENU:
            return L.Oh.IMAGE_RECS_SUBMENU;
        case L.iw.ACTIVITY_INSTANCE_EMBED:
            return L.Oh.ACTIVITY_INSTANCE_EMBED;
        case L.iw.ACTIVITY_BOOKMARK_EMBED:
            return L.Oh.ACTIVITY_BOOKMARK_EMBED;
        case L.iw.MINI_SHELF:
            return L.Oh.ACTIVITIES_MINI_SHELF;
        case L.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS:
            return L.Oh.VC_TILE_ACTIVITY_SUGGESTION;
        case L.iw.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
            return L.Oh.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
        default:
            return L.Oh.SLASH_UI
    }
}
async function Z(e, t) {
    let n = 0,
        r = 0;
    for (let a of e) {
        var i;
        let e = t ? null != (i = a.currentSize) ? i : 0 : await a.getSize();
        e > r && (r = e), n += e
    }
    return {
        totalSize: n,
        largestUploadedFileSize: r
    }
}
async function Q(e, t, n, r) {
    let i = (0, S.o2)(n),
        a = e => {
            null == r || r(i, e), m.C1(t, M.t02.ENTITY_TOO_LARGE, k.intl.formatToPlainString(k.t.fxEKdS, {
                maxSize: (0, S.Hb)(i)
            }))
        },
        {
            totalSize: o,
            largestUploadedFileSize: s
        } = await Z(e, !1);
    if (s > Math.max(i, j.VP) || o > C.eM) return a(s), !1;
    try {
        await (0, d.A)(e)
    } catch (n) {
        m.C1(t, void 0, k.intl.formatToPlainString(k.t["9h1/1p"], {
            count: e.length
        }))
    }
    return {
        totalSize: o,
        largestUploadedFileSize: s
    } = await Z(e, !0), !e.some(e => e.error === M.t02.ENTITY_TOO_LARGE) && !(o > C.eM) || (a(s), !1)
}