/** chunk id: 93474 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(311907),
    l = n(73153),
    a = n(884384),
    r = n(141468),
    s = n(734057),
    o = n(320501),
    c = n(661191),
    d = n(753738),
    u = n(785823),
    _ = n(652215);
let A = {},
    m = 0,
    E = {},
    T = {},
    I = e => {
        null != A[e] && delete A[e], m++
    };

function g(e) {
    let t, n, {
        messageData: i,
        errorResponseBody: l
    } = e;
    return n = {
        id: t = (0, a.cR)(i),
        isBlockedEdit: (0, a.Qn)(i),
        messageData: i,
        errorMessage: (0, d.PD)(i, l)
    }, A[t] = n, m++, !0
}

function N(e) {
    let {
        channelId: t,
        messages: n
    } = e, i = s.A.getChannel(t)?.getGuildId();
    if (null == i) return !1;
    let l = T[i],
        a = n.reduce((e, t) => t.type === _.lAJ.AUTO_MODERATION_ACTION && t.embeds?.some(e => {
            let {
                type: t
            } = e;
            return t === _.Auw.AUTO_MODERATION_NOTIFICATION
        }) ? null == e || -1 === c.default.compare(e, t.id) ? t.id : void 0 : e, l);
    return null != a && T[i] !== a && (T[i] = a, !0)
}
class f extends i.Ay.PersistedStore {
    static displayName = "GuildAutomodMessageStore";
    static persistKey = "GuildAutomodMessages";
    initialize(e) {
        this.waitFor(s.A, o.A), null != e && (A = e.automodFailedMessages, E = e.mentionRaidDetectionByGuild)
    }
    getState() {
        return {
            automodFailedMessages: A,
            mentionRaidDetectionByGuild: E,
            lastIncidentAlertMessage: T
        }
    }
    getMessage(e) {
        return null == e ? null : A[e] ?? null
    }
    getMessagesVersion() {
        return m
    }
    getMentionRaidDetected(e) {
        return E[e] ?? null
    }
    getLastIncidentAlertMessage(e) {
        return T[e] ?? null
    }
}
let C = new f(l.h, {
    CONNECTION_OPEN: function(e) {
        return 0 !== Object.keys(A).length && (A = {}, m++, !0)
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
        return !!(0, u.ER)(i) && !!(0, u.de)(i) && (T[t] = i.id, !0)
    },
    MESSAGE_SEND_FAILED_AUTOMOD: g,
    MESSAGE_EDIT_FAILED_AUTOMOD: g,
    REMOVE_AUTOMOD_MESSAGE_NOTICE: function(e) {
        let {
            messageId: t
        } = e;
        return I(t), !0
    },
    MESSAGE_END_EDIT: function(e) {
        let {
            response: t
        } = e;
        if (t?.body == null || t.body.code === _.t02.AUTOMOD_MESSAGE_BLOCKED) return !1;
        let n = t.body.id;
        if (null == n) return !1;
        I(n)
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