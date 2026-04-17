/** chunk id: 93474 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
});
var i = n(311907),
    r = n(73153),
    l = n(884384),
    s = n(141468),
    a = n(734057),
    o = n(320501),
    c = n(661191),
    u = n(753738),
    d = n(785823),
    _ = n(652215);
let A = {},
    E = 0,
    m = {},
    I = {},
    T = e => {
        null != A[e] && delete A[e], E++
    };

function g(e) {
    let t, n, {
        messageData: i,
        errorResponseBody: r
    } = e;
    return n = {
        id: t = (0, l.cR)(i),
        isBlockedEdit: (0, l.Qn)(i),
        messageData: i,
        errorMessage: (0, u.PD)(i, r)
    }, A[t] = n, E++, !0
}

function N(e) {
    let {
        channelId: t,
        messages: n
    } = e, i = a.A.getChannel(t)?.getGuildId();
    if (null == i) return !1;
    let r = I[i],
        l = n.reduce((e, t) => t.type === _.lAJ.AUTO_MODERATION_ACTION && t.embeds?.some(e => {
            let {
                type: t
            } = e;
            return t === _.Auw.AUTO_MODERATION_NOTIFICATION
        }) ? null == e || -1 === c.default.compare(e, t.id) ? t.id : void 0 : e, r);
    return null != l && I[i] !== l && (I[i] = l, !0)
}
class f extends i.Ay.PersistedStore {
    static displayName = "GuildAutomodMessageStore";
    static persistKey = "GuildAutomodMessages";
    initialize(e) {
        this.waitFor(a.A, o.A), null != e && (A = e.automodFailedMessages, m = e.mentionRaidDetectionByGuild)
    }
    getState() {
        return {
            automodFailedMessages: A,
            mentionRaidDetectionByGuild: m,
            lastIncidentAlertMessage: I
        }
    }
    getMessage(e) {
        return null == e ? null : A[e] ?? null
    }
    getMessagesVersion() {
        return E
    }
    getMentionRaidDetected(e) {
        return m[e] ?? null
    }
    getLastIncidentAlertMessage(e) {
        return I[e] ?? null
    }
}
let C = new f(r.h, {
    CONNECTION_OPEN: function(e) {
        return 0 !== Object.keys(A).length && (A = {}, E++, !0)
    },
    LOAD_MESSAGES_SUCCESS: N,
    LOCAL_MESSAGES_LOADED: N,
    MESSAGE_CREATE: function(e) {
        let {
            guildId: t,
            message: n
        } = e;
        if (null == t || n.type !== _.lAJ.AUTO_MODERATION_ACTION) return !1;
        let i = (0, s.rh)(n);
        return !!(0, d.ER)(i) && !!(0, d.de)(i) && (I[t] = i.id, !0)
    },
    MESSAGE_SEND_FAILED_AUTOMOD: g,
    MESSAGE_EDIT_FAILED_AUTOMOD: g,
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
        return m[t] = {
            guildId: t,
            decisionId: n,
            suspiciousMentionActivityUntil: i
        }, !0
    },
    AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function(e) {
        let {
            guildId: t
        } = e;
        return delete m[t], !0
    }
})