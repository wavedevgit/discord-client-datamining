/** chunk id: 93474 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(311907),
    a = n(73153),
    l = n(884384),
    r = n(141468),
    s = n(734057),
    o = n(320501),
    c = n(661191),
    d = n(753738),
    u = n(785823),
    _ = n(652215);
let m = {},
    A = 0,
    E = {},
    I = {},
    T = e => {
        null != m[e] && delete m[e], A++
    };

function f(e) {
    let t, n, {
        messageData: i,
        errorResponseBody: a
    } = e;
    return n = {
        id: t = (0, l.cR)(i),
        isBlockedEdit: (0, l.Qn)(i),
        messageData: i,
        errorMessage: (0, d.PD)(i, a)
    }, m[t] = n, A++, !0
}

function N(e) {
    let {
        channelId: t,
        messages: n
    } = e, i = s.A.getChannel(t)?.getGuildId();
    if (null == i) return !1;
    let a = I[i],
        l = n.reduce((e, t) => t.type === _.lAJ.AUTO_MODERATION_ACTION && t.embeds?.some(e => {
            let {
                type: t
            } = e;
            return t === _.Auw.AUTO_MODERATION_NOTIFICATION
        }) ? null == e || -1 === c.default.compare(e, t.id) ? t.id : void 0 : e, a);
    return null != l && I[i] !== l && (I[i] = l, !0)
}
class g extends i.Ay.PersistedStore {
    static displayName = "GuildAutomodMessageStore";
    static persistKey = "GuildAutomodMessages";
    initialize(e) {
        this.waitFor(s.A, o.A), null != e && (m = e.automodFailedMessages, E = e.mentionRaidDetectionByGuild)
    }
    getState() {
        return {
            automodFailedMessages: m,
            mentionRaidDetectionByGuild: E,
            lastIncidentAlertMessage: I
        }
    }
    getMessage(e) {
        return null == e ? null : m[e] ?? null
    }
    getMessagesVersion() {
        return A
    }
    getMentionRaidDetected(e) {
        return E[e] ?? null
    }
    getLastIncidentAlertMessage(e) {
        return I[e] ?? null
    }
}
let C = new g(a.h, {
    CONNECTION_OPEN: function(e) {
        return 0 !== Object.keys(m).length && (m = {}, A++, !0)
    },
    LOAD_MESSAGES_SUCCESS: N,
    LOCAL_MESSAGES_LOADED: N,
    MESSAGE_CREATE: function(e) {
        let {
            guildId: t,
            message: n
        } = e;
        if (null == t || n.type !== _.lAJ.AUTO_MODERATION_ACTION) return !1;
        let i = (0, r.rh)(n);
        return !!(0, u.ER)(i) && !!(0, u.de)(i) && (I[t] = i.id, !0)
    },
    MESSAGE_SEND_FAILED_AUTOMOD: f,
    MESSAGE_EDIT_FAILED_AUTOMOD: f,
    REMOVE_AUTOMOD_MESSAGE_NOTICE: function(e) {
        let {
            messageId: t
        } = e;
        return T(t), !0
    },
    MESSAGE_END_EDIT: function(e) {
        let {
            response: t
        } = e;
        if (t?.body == null || t.body.code === _.t02.AUTOMOD_MESSAGE_BLOCKED) return !1;
        let n = t.body.id;
        if (null == n) return !1;
        T(n)
    },
    AUTO_MODERATION_MENTION_RAID_DETECTION: function(e) {
        let {
            guildId: t,
            decisionId: n,
            suspiciousMentionActivityUntil: i
        } = e;
        return E[t] = {
            guildId: t,
            decisionId: n,
            suspiciousMentionActivityUntil: i
        }, !0
    },
    AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function(e) {
        let {
            guildId: t
        } = e;
        return delete E[t], !0
    }
})