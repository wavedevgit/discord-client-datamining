/** Chunk was on 38985 **/
/** chunk id: 523599, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => w
}), n(264879), n(321073), n(896048), n(667532);
var l, r, a = n(735438),
    i = n.n(a),
    s = n(136722),
    o = n(311907),
    u = n(73153),
    c = n(411153),
    E = n(95701),
    d = n(34457),
    _ = n(696451),
    g = n(317525),
    A = n(71393),
    T = n(652215);
let h = s.kg(T.xBc.KICK_MEMBERS, T.xBc.BAN_MEMBERS, T.xBc.ADMINISTRATOR, T.xBc.MANAGE_CHANNELS, T.xBc.MANAGE_GUILD, T.xBc.MANAGE_MESSAGES, T.xBc.MANAGE_NICKNAMES, T.xBc.MANAGE_ROLES, T.xBc.MANAGE_WEBHOOKS, T.xBc.MANAGE_GUILD_EXPRESSIONS, T.xBc.MOVE_MEMBERS, T.xBc.MUTE_MEMBERS, T.xBc.DEAFEN_MEMBERS),
    I = null,
    O = [],
    m = [],
    N = [],
    f = [],
    p = [],
    S = [],
    G = [],
    R = [],
    D = !0,
    C = !1,
    L = !1,
    b = !0,
    x = !1,
    M = null,
    v = T.F_X.ALL,
    j = null,
    U = {},
    y = 0;

function k(e) {
    let t = [],
        n = 0;
    return e.reverse().forEach(e => {
        var l, r, a;
        let s = [],
            o = null,
            u = null,
            d = null;
        if (null != e.reason && s.push(new c.QO(T.gGk.REASON, null, e.reason)), null != e.changes)
            for (let t of e.changes) {
                let e = new c.QO(t.key, t.old_value, t.new_value);
                s.push(e), e.key === T.gGk.NAME ? o = e : e.key === T.gGk.TYPE ? d = e : e.key === T.gGk.TITLE && (u = e)
            }
        if (e.action_type === T.F_X.MEMBER_PRUNE) {
            let t = null != e && null != e.options && null != e.options.delete_member_days ? e.options.delete_member_days : 1,
                n = new c.QO(T.gGk.PRUNE_DELETE_DAYS, null, t);
            s.push(n)
        }
        e.action_type === T.F_X.AUTO_MODERATION_BLOCK_MESSAGE && (null == (r = e.options) ? void 0 : r.auto_moderation_rule_name) != null && s.push(new c.QO(T.gGk.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)), e.action_type === T.F_X.VOICE_CHANNEL_STATUS_CREATE && (null == (l = e.options) ? void 0 : l.status) != null && s.push(new c.QO(T.gGk.STATUS, null, e.options.status));
        let _ = new c.Ay({
                id: e.id,
                action: e.action_type,
                targetId: e.target_id,
                userId: e.user_id,
                changes: s,
                options: e.options
            }),
            g = t[0];
        if (function(e, t, n) {
                let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30,
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 50;
                return null != e && e.action === t.action && e.targetId === t.targetId && e.userId === t.userId && i().isEqual(e.options, t.options) && t.timestampStart.diff(e.timestampStart, "minutes") < l && n < r && t.targetType !== T.GaG.INVITE && t.action !== T.F_X.MESSAGE_DELETE && t.action !== T.F_X.MESSAGE_BULK_DELETE && t.action !== T.F_X.MESSAGE_PIN && t.action !== T.F_X.MESSAGE_UNPIN && t.action !== T.F_X.MEMBER_MOVE && t.action !== T.F_X.MEMBER_DISCONNECT && t.action !== T.F_X.BOT_ADD && t.action !== T.F_X.APPLICATION_COMMAND_PERMISSION_UPDATE && t.action !== T.F_X.MEMBER_PRUNE
            }(g, _, n)) {
            t[0] = g.merge({
                changes: [...g.changes, ..._.changes],
                timestampEnd: _.timestampStart
            }), n++;
            return
        }
        if (_.actionType === T.RWi.DELETE && (null != o || null != u)) {
            let e = null != (a = null == o ? void 0 : o.oldValue) ? a : null == u ? void 0 : u.oldValue;
            (_.targetType === T.GaG.CHANNEL || _.targetType === T.GaG.CHANNEL_OVERWRITE) && null !== d && (0, E.tr)(d.oldValue) && (e = "#".concat(e)), null == U[_.targetType] ? U[_.targetType] = {
                [_.targetId]: e
            } : U[_.targetType][_.targetId] = e
        }
        n = 0, t.unshift(_)
    }), t
}

function P(e) {
    let {
        section: t
    } = e;
    if (t !== T.BEX.AUDIT_LOG) return !1;
    let n = _.Ay.getMembers(I),
        l = A.A.getGuild(I),
        r = null != I ? g.A.getUnsafeMutableRoles(I) : void 0;
    N = i()(n).filter(e => e.roles.some(t => {
        if (null != l) {
            if (e.userId === l.ownerId) return !0;
            let n = null == r ? void 0 : r[t];
            return null != n && (0, d.sx)(n, h)
        }
    })).map(e => e.userId).value()
}
class F extends(l = o.Ay.Store) {
    initialize() {
        this.waitFor(A.A, g.A, _.Ay)
    }
    get logs() {
        return O
    }
    get integrations() {
        return m
    }
    get webhooks() {
        return f
    }
    get guildScheduledEvents() {
        return p
    }
    get automodRules() {
        return S
    }
    get threads() {
        return G
    }
    get applicationCommands() {
        return R
    }
    get isInitialLoading() {
        return D
    }
    get isLoading() {
        return C
    }
    get isLoadingNextPage() {
        return L
    }
    get hasOlderLogs() {
        return b
    }
    get hasError() {
        return x
    }
    get userIds() {
        return N
    }
    get userIdFilter() {
        return M
    }
    get targetIdFilter() {
        return j
    }
    get actionFilter() {
        return v
    }
    get deletedTargets() {
        return U
    }
    get groupedFetchCount() {
        return y
    }
}(r = "displayName") in F ? Object.defineProperty(F, r, {
    value: "GuildSettingsAuditLogStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : F[r] = "GuildSettingsAuditLogStore";
let w = new F(u.h, {
    AUDIT_LOG_FETCH_START: function() {
        C = !0
    },
    AUDIT_LOG_FETCH_SUCCESS: function(e) {
        var t;
        y = 0, D = !1, C = !1, b = !0, x = !1, O = k(e.logs), m = e.integrations, f = e.webhooks, p = e.guildScheduledEvents, S = null != (t = e.automodRules) ? t : [], G = e.threads, R = e.applicationCommands, e.logs.length < T.$jw && (b = !1)
    },
    AUDIT_LOG_FETCH_FAIL: function() {
        C = !1, x = !0, O = []
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_START: function(e) {
        let {
            isGroupedFetch: t
        } = e;
        L = !0, t && y++
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function(e) {
        let {
            logs: t,
            integrations: n,
            webhooks: l,
            guildScheduledEvents: r,
            automodRules: a,
            threads: i,
            applicationCommands: s
        } = e;
        if (L = !1, m = n, f = l, p = r, S = a, G = i, R = s, (0 === t.length || t.length < T.$jw) && (b = !1), t.length > 0) {
            let e = k(t);
            O = [...O, ...e]
        }
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function() {
        L = !1
    },
    AUDIT_LOG_FILTER_BY_ACTION: function(e) {
        let {
            action: t
        } = e;
        v = t
    },
    AUDIT_LOG_FILTER_BY_USER: function(e) {
        let {
            userId: t
        } = e;
        M = t
    },
    AUDIT_LOG_FILTER_BY_TARGET: function(e) {
        let {
            targetId: t
        } = e;
        j = t
    },
    GUILD_SETTINGS_SET_SECTION: P,
    GUILD_SETTINGS_INIT: function(e) {
        let {
            guildId: t,
            section: n
        } = e;
        return I = t, j = null, P({
            section: n
        })
    },
    GUILD_SETTINGS_CLOSE: function() {
        O = [], N = [], v = T.F_X.ALL, M = null, j = null, U = {}, y = 0, D = !0, m = [], f = [], p = [], S = [], G = []
    }
})