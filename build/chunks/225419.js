/** chunk id: 225419 params = (module,exports,require) **/
e.d(i, {
    BK: () => _,
    LZ: () => o,
    Nk: () => d,
    Si: () => N,
    eD: () => l,
    iG: () => g,
    k6: () => B,
    m6: () => a,
    mL: () => A,
    od: () => x,
    qI: () => T,
    xd: () => M
}), e(321073);
var n = e(403362),
    E = e(818348),
    r = e(985018);

function s(t) {
    let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return i || (t.permissions = t.permissions.filter(t => {
        let {
            isExperimental: i
        } = t;
        return !i
    })), t
}

function S(t, i) {
    return t.map(t => i[t.toString()])
}

function l(t) {
    return {
        [E.xB.VIEW_CHANNEL.toString()]: {
            title: r.intl.string(r.t.uV83yi),
            description: r.t.ybTHLk,
            flag: E.xB.VIEW_CHANNEL
        },
        [E.xB.MANAGE_CHANNELS.toString()]: {
            title: r.intl.string(r.t["9qLtWs"]),
            description: r.t.qfJnug,
            flag: E.xB.MANAGE_CHANNELS
        },
        [E.xB.MANAGE_ROLES.toString()]: {
            title: r.intl.string(r.t["C8d+oG"]),
            description: r.t.buo9uw,
            flag: E.xB.MANAGE_ROLES
        },
        [E.xB.MANAGE_GUILD_EXPRESSIONS.toString()]: {
            title: r.intl.string(r.t.bbuXIn),
            description: r.t["4vb3/6"],
            flag: E.xB.MANAGE_GUILD_EXPRESSIONS
        },
        [E.xB.CREATE_GUILD_EXPRESSIONS.toString()]: {
            title: r.intl.string(r.t.HarVuP),
            description: r.t.gkdHvH,
            flag: E.xB.CREATE_GUILD_EXPRESSIONS
        },
        [E.xB.VIEW_AUDIT_LOG.toString()]: {
            title: r.intl.string(r.t.fZgLpA),
            description: r.t["0hx75i"],
            flag: E.xB.VIEW_AUDIT_LOG
        },
        [E.xB.VIEW_GUILD_ANALYTICS.toString()]: {
            title: r.intl.string(r.t["rQJBE/"]),
            description: r.t.whVKhX,
            flag: E.xB.VIEW_GUILD_ANALYTICS
        },
        [E.xB.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: {
            title: r.intl.string(r.t["0lTLTv"]),
            description: r.t.mut6NV,
            flag: E.xB.VIEW_CREATOR_MONETIZATION_ANALYTICS
        },
        [E.xB.MANAGE_WEBHOOKS.toString()]: {
            title: r.intl.string(r.t["/ADKmM"]),
            description: r.t.LczYqC,
            flag: E.xB.MANAGE_WEBHOOKS
        },
        [E.xB.MANAGE_GUILD.toString()]: {
            title: r.intl.string(r.t.QZRcfO),
            description: r.t["KoQe/G"],
            flag: E.xB.MANAGE_GUILD
        },
        [E.xB.CREATE_INSTANT_INVITE.toString()]: {
            title: r.intl.string(r.t.zJrgTG),
            description: r.t.PCFOZa,
            flag: E.xB.CREATE_INSTANT_INVITE
        },
        [E.xB.CHANGE_NICKNAME.toString()]: {
            title: r.intl.string(r.t.dilOF6),
            description: r.t["b8B++j"],
            flag: E.xB.CHANGE_NICKNAME
        },
        [E.xB.MANAGE_NICKNAMES.toString()]: {
            title: r.intl.string(r.t["t+Ct5x"]),
            description: r.t.hTnlMb,
            flag: E.xB.MANAGE_NICKNAMES
        },
        [E.xB.KICK_MEMBERS.toString()]: {
            title: t.showMembershipManualApprovalPermissions ? r.intl.string(r.t["9TxXwb"]) : r.intl.string(r.t.pBNv6i),
            description: t.showMembershipManualApprovalPermissions ? r.t.hGBAnw : r.t.rwdPaE,
            flag: E.xB.KICK_MEMBERS
        },
        [E.xB.BAN_MEMBERS.toString()]: {
            title: r.intl.string(r.t.oTBA7N),
            description: r.t["OqNY0/"],
            flag: E.xB.BAN_MEMBERS
        },
        [E.xB.MODERATE_MEMBERS.toString()]: {
            title: r.intl.string(r.t["+RL6pz"]),
            description: r.t.T6bZsX,
            flag: E.xB.MODERATE_MEMBERS
        },
        [E.xB.SEND_MESSAGES.toString()]: {
            title: r.intl.string(r.t.S1VOwd),
            description: r.t.prvWKm,
            flag: E.xB.SEND_MESSAGES
        },
        [E.xB.EMBED_LINKS.toString()]: {
            title: r.intl.string(r.t["969dEL"]),
            description: r.t.ChoIiy,
            flag: E.xB.EMBED_LINKS
        },
        [E.xB.ATTACH_FILES.toString()]: {
            title: r.intl.string(r.t["3AS4UM"]),
            description: r.t["/87mYH"],
            flag: E.xB.ATTACH_FILES
        },
        [E.xB.ADD_REACTIONS.toString()]: {
            title: r.intl.string(r.t.yEoJAr),
            description: r.t.FEYwX7,
            flag: E.xB.ADD_REACTIONS
        },
        [E.xB.USE_EXTERNAL_EMOJIS.toString()]: {
            title: r.intl.string(r.t["+bxf3H"]),
            description: r.t.POeVIu,
            flag: E.xB.USE_EXTERNAL_EMOJIS
        },
        [E.xB.USE_EXTERNAL_STICKERS.toString()]: {
            title: r.intl.string(r.t.ERNhYf),
            description: r.t.AdXVhI,
            flag: E.xB.USE_EXTERNAL_STICKERS
        },
        [E.xB.MENTION_EVERYONE.toString()]: {
            title: r.intl.string(r.t.Y78KGC),
            description: r.intl.string(r.t.ryj6N5),
            flag: E.xB.MENTION_EVERYONE
        },
        [E.xB.MANAGE_MESSAGES.toString()]: {
            title: r.intl.string(r.t["6lU9xM"]),
            description: r.t["RXMG/+"],
            flag: E.xB.MANAGE_MESSAGES
        },
        [E.xB.PIN_MESSAGES.toString()]: {
            title: r.intl.string(r.t.Y5BI39),
            description: r.t["LN/K3x"],
            flag: E.xB.PIN_MESSAGES
        },
        [E.xB.BYPASS_SLOWMODE.toString()]: {
            title: r.intl.string(r.t.kqcjeV),
            description: r.t.S2ZE5c,
            flag: E.xB.BYPASS_SLOWMODE
        },
        [E.xB.MANAGE_OFFICIAL_MESSAGES.toString()]: {
            title: r.intl.string(r.t.Aj9ruN),
            description: r.t.pfEgBm,
            flag: E.xB.MANAGE_OFFICIAL_MESSAGES
        },
        [E.xB.READ_MESSAGE_HISTORY.toString()]: {
            title: r.intl.string(r.t.l9ufaR),
            description: r.t.rmHPFR,
            flag: E.xB.READ_MESSAGE_HISTORY
        },
        [E.xB.SEND_TTS_MESSAGES.toString()]: {
            title: r.intl.string(r.t.mMbwh7),
            description: r.t.D6x8Nr,
            flag: E.xB.SEND_TTS_MESSAGES
        },
        [E.xB.USE_APPLICATION_COMMANDS.toString()]: {
            title: r.intl.string(r.t.nkoPOt),
            description: r.t.pJrJ35,
            flag: E.xB.USE_APPLICATION_COMMANDS
        },
        [E.xB.USE_EXTERNAL_APPS.toString()]: {
            title: r.intl.string(r.t.TtA5rK),
            description: r.t.mzLoDY,
            flag: E.xB.USE_EXTERNAL_APPS
        },
        [E.xB.SEND_VOICE_MESSAGES.toString()]: {
            title: r.intl.string(r.t.WlWSBT),
            description: r.t.pDuyi0,
            flag: E.xB.SEND_VOICE_MESSAGES
        },
        [E.xB.SEND_POLLS.toString()]: {
            title: r.intl.string(r.t.UMQ7Ww),
            description: r.t["Xl6W+F"],
            flag: E.xB.SEND_POLLS
        },
        [E.xB.CONNECT.toString()]: {
            title: r.intl.string(r.t.S0W8Z5),
            description: r.t["3GCm/f"],
            flag: E.xB.CONNECT
        },
        [E.xB.SPEAK.toString()]: {
            title: r.intl.string(r.t["8w1tIR"]),
            description: r.t.y4MncF,
            flag: E.xB.SPEAK
        },
        [E.xB.STREAM.toString()]: {
            title: r.intl.string(r.t.FlNoSV),
            description: r.t["6Z0j9v"],
            flag: E.xB.STREAM
        },
        [E.xB.USE_EMBEDDED_ACTIVITIES.toString()]: {
            title: r.intl.string(r.t.rLSGeh),
            description: r.t.BEqU5H,
            flag: E.xB.USE_EMBEDDED_ACTIVITIES
        },
        [E.xB.USE_SOUNDBOARD.toString()]: {
            title: r.intl.string(r.t.Bco7NG),
            description: t?.SOUNDBOARD_DESCRIPTION ?? r.t["+8p+fc"],
            flag: E.xB.USE_SOUNDBOARD
        },
        [E.xB.USE_EXTERNAL_SOUNDS.toString()]: {
            title: r.intl.string(r.t.pwaVJ6),
            description: r.t.qDpPtX,
            flag: E.xB.USE_EXTERNAL_SOUNDS
        },
        [E.xB.USE_VAD.toString()]: {
            title: r.intl.string(r.t["08zAV7"]),
            description: r.t["7CHjmc"],
            flag: E.xB.USE_VAD
        },
        [E.xB.PRIORITY_SPEAKER.toString()]: {
            title: r.intl.string(r.t.BVK71i),
            description: t?.PRIORITY_SPEAKER_DESCRIPTION ?? r.t.OJkrro,
            flag: E.xB.PRIORITY_SPEAKER
        },
        [E.xB.MUTE_MEMBERS.toString()]: {
            title: r.intl.string(r.t["8EI30/"]),
            description: r.t.PIhGA1,
            flag: E.xB.MUTE_MEMBERS
        },
        [E.xB.DEAFEN_MEMBERS.toString()]: {
            title: r.intl.string(r.t["9L47Fr"]),
            description: r.t["FQr3+t"],
            flag: E.xB.DEAFEN_MEMBERS
        },
        [E.xB.MOVE_MEMBERS.toString()]: {
            title: r.intl.string(r.t.YtjJPQ),
            description: r.t.SEe0Gp,
            flag: E.xB.MOVE_MEMBERS
        },
        [E.xB.REQUEST_TO_SPEAK.toString()]: {
            title: r.intl.string(r.t["5kicT2"]),
            description: r.t["yNE+Q5"],
            flag: E.xB.REQUEST_TO_SPEAK,
            isExperimental: !0
        },
        [E.xB.ADMINISTRATOR.toString()]: {
            title: r.intl.string(r.t.PGvZqX),
            description: "string" == typeof r.t.UJxMrK ? r.t.UJxMrK : r.intl.format(r.t.UJxMrK, {}),
            flag: E.xB.ADMINISTRATOR
        },
        [E.xB.MANAGE_EVENTS.toString()]: {
            title: r.intl.string(r.t.HIgA5a),
            description: r.t["SL+qgG"],
            flag: E.xB.MANAGE_EVENTS
        },
        [E.xB.CREATE_EVENTS.toString()]: {
            title: r.intl.string(r.t.qyjZua),
            description: r.t.bQEFJZ,
            flag: E.xB.CREATE_EVENTS
        },
        [E.xB.MANAGE_THREADS.toString()]: {
            title: r.intl.string(r.t.QKe7Q3),
            description: r.t.QAxIIt,
            flag: E.xB.MANAGE_THREADS
        },
        [E.xB.CREATE_PUBLIC_THREADS.toString()]: {
            title: r.intl.string(r.t["25rKnX"]),
            description: r.t.ODCYj8,
            flag: E.xB.CREATE_PUBLIC_THREADS
        },
        [E.xB.CREATE_PRIVATE_THREADS.toString()]: {
            title: r.intl.string(r.t.QwbTSa),
            description: r.t["G/cc3l"],
            flag: E.xB.CREATE_PRIVATE_THREADS
        },
        [E.xB.SEND_MESSAGES_IN_THREADS.toString()]: {
            title: r.intl.string(r.t["5QlVGy"]),
            description: r.t.C2ZPE3,
            flag: E.xB.SEND_MESSAGES_IN_THREADS
        },
        [E.xB.SET_VOICE_CHANNEL_STATUS.toString()]: {
            title: r.intl.string(r.t.VBwkUf),
            description: r.t.C6BzXx,
            flag: E.xB.SET_VOICE_CHANNEL_STATUS
        }
    }
}

function o(t) {
    let i, e, n, o, A, a = l(t),
        _ = [(i = [E.xB.VIEW_CHANNEL, E.xB.MANAGE_CHANNELS, E.xB.MANAGE_ROLES, E.xB.CREATE_GUILD_EXPRESSIONS, E.xB.MANAGE_GUILD_EXPRESSIONS, E.xB.VIEW_AUDIT_LOG, E.xB.VIEW_GUILD_ANALYTICS], t.showCreatorMonetizationAnalyticsPermission && i.push(E.xB.VIEW_CREATOR_MONETIZATION_ANALYTICS), i.push(E.xB.MANAGE_WEBHOOKS), i.push(E.xB.MANAGE_GUILD), s({
            title: r.intl.string(r.t["mYck+B"]),
            permissions: S(i, a)
        })), (e = [E.xB.CREATE_INSTANT_INVITE, E.xB.CHANGE_NICKNAME, E.xB.MANAGE_NICKNAMES, E.xB.KICK_MEMBERS, E.xB.BAN_MEMBERS, E.xB.MODERATE_MEMBERS], s({
            title: r.intl.string(r.t.Ny49TN),
            permissions: S(e, a)
        })), (n = [E.xB.SEND_MESSAGES, E.xB.SEND_MESSAGES_IN_THREADS, E.xB.CREATE_PUBLIC_THREADS, E.xB.CREATE_PRIVATE_THREADS, E.xB.EMBED_LINKS, E.xB.ATTACH_FILES, E.xB.ADD_REACTIONS, E.xB.USE_EXTERNAL_EMOJIS, E.xB.USE_EXTERNAL_STICKERS, E.xB.USE_EXTERNAL_SOUNDS, E.xB.MENTION_EVERYONE, E.xB.MANAGE_MESSAGES, E.xB.PIN_MESSAGES, E.xB.MANAGE_OFFICIAL_MESSAGES, E.xB.BYPASS_SLOWMODE, E.xB.MANAGE_THREADS, E.xB.READ_MESSAGE_HISTORY, E.xB.SEND_TTS_MESSAGES, E.xB.SEND_VOICE_MESSAGES, E.xB.SEND_POLLS], t.inSoundmojiExperiment || (n = n.filter(t => t !== E.xB.USE_EXTERNAL_SOUNDS)), s({
            title: r.intl.string(r.t.cKobO5),
            permissions: S(n, a)
        })), (o = [E.xB.CONNECT, E.xB.SPEAK, E.xB.STREAM, E.xB.USE_SOUNDBOARD, E.xB.USE_EXTERNAL_SOUNDS, E.xB.USE_VAD, E.xB.PRIORITY_SPEAKER, E.xB.MUTE_MEMBERS, E.xB.DEAFEN_MEMBERS, E.xB.MOVE_MEMBERS, E.xB.SET_VOICE_CHANNEL_STATUS], s({
            title: r.intl.string(r.t["46Ra1b"]),
            permissions: S(o, a)
        })), (A = [E.xB.USE_APPLICATION_COMMANDS, E.xB.USE_EMBEDDED_ACTIVITIES, E.xB.USE_EXTERNAL_APPS], s({
            title: r.intl.string(r.t["rrh/W6"]),
            permissions: S(A, a)
        }))];
    return t.showStageChannelPermissions && _.push(s({
        title: r.intl.string(r.t.yniauk),
        permissions: S([E.xB.REQUEST_TO_SPEAK], a)
    }, t.showExperimental)), _.push(s({
        title: r.intl.string(r.t.b8lplT),
        permissions: S([E.xB.CREATE_EVENTS, E.xB.MANAGE_EVENTS], a)
    }, t.showExperimental)), _.push(s({
        title: r.intl.string(r.t["3uI5CX"]),
        permissions: S([E.xB.ADMINISTRATOR], a)
    })), _
}

function A(t, i) {
    let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
        showManageWebhooks: !0
    };
    return {
        title: i,
        permissions: S(e?.showManageWebhooks ? [E.xB.VIEW_CHANNEL, E.xB.MANAGE_CHANNELS, E.xB.MANAGE_ROLES, E.xB.MANAGE_WEBHOOKS] : [E.xB.VIEW_CHANNEL, E.xB.MANAGE_CHANNELS, E.xB.MANAGE_ROLES], t)
    }
}

function a(t, i) {
    return {
        title: i,
        permissions: S([E.xB.CREATE_INSTANT_INVITE], t)
    }
}

function _(t, i, e) {
    let n = [E.xB.SEND_MESSAGES, E.xB.SEND_MESSAGES_IN_THREADS, E.xB.CREATE_PUBLIC_THREADS, E.xB.CREATE_PRIVATE_THREADS, E.xB.EMBED_LINKS, E.xB.ATTACH_FILES, E.xB.ADD_REACTIONS, E.xB.USE_EXTERNAL_EMOJIS, E.xB.USE_EXTERNAL_STICKERS, E.xB.USE_EXTERNAL_SOUNDS, E.xB.MENTION_EVERYONE, E.xB.MANAGE_MESSAGES, E.xB.PIN_MESSAGES, E.xB.MANAGE_OFFICIAL_MESSAGES, E.xB.BYPASS_SLOWMODE, E.xB.MANAGE_THREADS, E.xB.READ_MESSAGE_HISTORY, E.xB.SEND_TTS_MESSAGES, E.xB.SEND_VOICE_MESSAGES, E.xB.SEND_POLLS];
    return e.inSoundmojiExperiment || (n = n.filter(t => t !== E.xB.USE_EXTERNAL_SOUNDS)), e.showPrivateThreads && e.showCreateThreads || (n = n.filter(t => t !== E.xB.CREATE_PRIVATE_THREADS)), e.showCreateThreads || (n = n.filter(t => t !== E.xB.CREATE_PUBLIC_THREADS)), {
        title: i,
        description: e.sectionDescription,
        permissions: S(n, t)
    }
}

function g(t, i) {
    return {
        title: i,
        permissions: S([E.xB.CONNECT, E.xB.SPEAK, E.xB.STREAM, E.xB.USE_SOUNDBOARD, E.xB.USE_EXTERNAL_SOUNDS, E.xB.USE_VAD, E.xB.PRIORITY_SPEAKER, E.xB.MUTE_MEMBERS, E.xB.DEAFEN_MEMBERS, E.xB.MOVE_MEMBERS, E.xB.SET_VOICE_CHANNEL_STATUS], t)
    }
}

function B(t, i, e) {
    let n = [E.xB.SEND_MESSAGES, E.xB.EMBED_LINKS, E.xB.ATTACH_FILES, E.xB.ADD_REACTIONS, E.xB.USE_EXTERNAL_EMOJIS, E.xB.USE_EXTERNAL_STICKERS, E.xB.USE_EXTERNAL_SOUNDS, E.xB.MENTION_EVERYONE, E.xB.MANAGE_MESSAGES, E.xB.BYPASS_SLOWMODE, E.xB.READ_MESSAGE_HISTORY, E.xB.SEND_TTS_MESSAGES, E.xB.SEND_VOICE_MESSAGES, E.xB.SEND_POLLS];
    return e.inSoundmojiExperiment || (n = n.filter(t => t !== E.xB.USE_EXTERNAL_SOUNDS)), {
        title: i,
        description: e.sectionDescription,
        permissions: S(n, t)
    }
}

function N(t, i) {
    let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
        showActivities: !0
    };
    return {
        title: i,
        permissions: S([E.xB.USE_APPLICATION_COMMANDS, e.showActivities ? E.xB.USE_EMBEDDED_ACTIVITIES : null, E.xB.USE_EXTERNAL_APPS].filter(n.Vq), t)
    }
}

function x(t, i, e) {
    return {
        title: i,
        permissions: S(e ? [E.xB.CONNECT, E.xB.STREAM, E.xB.MUTE_MEMBERS, E.xB.MOVE_MEMBERS] : [E.xB.CONNECT, E.xB.MUTE_MEMBERS, E.xB.MOVE_MEMBERS], t)
    }
}

function T(t, i) {
    return {
        title: i,
        permissions: S([E.xB.REQUEST_TO_SPEAK, E.xB.MENTION_EVERYONE], t)
    }
}

function M(t, i) {
    return {
        title: i,
        permissions: S([E.xB.CREATE_EVENTS, E.xB.MANAGE_EVENTS], t)
    }
}

function d(t) {
    return null == t ? t : "string" == typeof t ? t.trim() : "function" == typeof t ? r.intl.format(t, {}) : t
}