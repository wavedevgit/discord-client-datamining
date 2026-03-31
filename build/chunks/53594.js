/** chunk id: 53594 params = (module,exports,require) **/
n.d(t, {
    H2: () => d,
    J6: () => E,
    i$: () => u,
    kT: () => N,
    ub: () => m,
    ws: () => I,
    xG: () => T,
    yT: () => _
}), n(938796);
var i, l, a = n(64700),
    r = n(928108),
    s = n(979816),
    o = n(411335),
    c = n(985018),
    d = ((i = {}).NEW = "new", i.RECOMMENDED = "recommended", i.BETA = "beta", i.ALPHA = "alpha", i);
let u = {
    [o.uh.SPAM_LINK]: {
        getDefaultRuleName: () => c.intl.string(c.t.ffR2cM),
        type: o.uh.SPAM_LINK,
        eventType: o.Mc.MESSAGE_SEND,
        perGuildMaxCount: 0,
        availableActionTypes: new Set,
        flags: new Set,
        defaultActionTypes: new Set
    },
    [o.uh.KEYWORD]: {
        getDefaultRuleName: () => c.intl.string(c.t.ffR2cM),
        type: o.uh.KEYWORD,
        eventType: o.Mc.MESSAGE_SEND,
        perGuildMaxCount: 6,
        availableActionTypes: new Set([o.AH.BLOCK_MESSAGE, o.AH.FLAG_TO_CHANNEL, o.AH.USER_COMMUNICATION_DISABLED]),
        flags: new Set,
        defaultActionTypes: new Set([o.AH.BLOCK_MESSAGE])
    },
    [o.uh.ML_SPAM]: {
        getDefaultRuleName: () => c.intl.string(c.t["puF/Os"]),
        type: o.uh.ML_SPAM,
        eventType: o.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([o.AH.BLOCK_MESSAGE, o.AH.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([o.AH.BLOCK_MESSAGE])
    },
    [o.uh.DEFAULT_KEYWORD_LIST]: {
        getDefaultRuleName: () => c.intl.string(c.t.LnGhZv),
        type: o.uh.DEFAULT_KEYWORD_LIST,
        eventType: o.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([o.AH.BLOCK_MESSAGE, o.AH.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([o.AH.BLOCK_MESSAGE])
    },
    [o.uh.MENTION_SPAM]: {
        getDefaultRuleName: () => c.intl.string(c.t.pX7i6n),
        type: o.uh.MENTION_SPAM,
        eventType: o.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([o.AH.BLOCK_MESSAGE, o.AH.FLAG_TO_CHANNEL, o.AH.USER_COMMUNICATION_DISABLED]),
        flags: new Set([]),
        defaultActionTypes: new Set([o.AH.BLOCK_MESSAGE])
    },
    [o.uh.USER_PROFILE]: {
        getDefaultRuleName: () => c.intl.string(c.t.q1L2v8),
        type: o.uh.USER_PROFILE,
        eventType: o.Mc.GUILD_MEMBER_JOIN_OR_UPDATE,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([o.AH.QUARANTINE_USER, o.AH.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([o.AH.QUARANTINE_USER])
    },
    [o.uh.SERVER_POLICY]: {
        getDefaultRuleName: () => c.intl.string(c.t.ZQr92M),
        type: o.uh.SERVER_POLICY,
        eventType: o.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([o.AH.FLAG_TO_CHANNEL]),
        flags: new Set(["alpha"]),
        defaultActionTypes: new Set
    }
};
var _ = ((l = {}).MEMBERS = "members", l.CONTENT = "content", l);
let A = {
        members: [u[o.uh.USER_PROFILE]],
        content: [u[o.uh.SERVER_POLICY], u[o.uh.MENTION_SPAM], u[o.uh.ML_SPAM], u[o.uh.DEFAULT_KEYWORD_LIST], u[o.uh.KEYWORD]]
    },
    m = (e, t) => u[e].flags.has(t);

function E(e) {
    return Array.from(u[e].availableActionTypes)
}

function T(e, t) {
    let {
        id: n,
        eventType: i,
        triggerType: l,
        actions: a
    } = e, r = u[l];
    if (t.filter(e => n !== e.id && e.triggerType === l).length > r.perGuildMaxCount) throw Error(`You have exceeded the maximum number of rules of type ${l}`);
    if (a.some(e => !r.availableActionTypes.has(e.type))) throw Error("You have provided an action that is not available for this trigger type");
    if (i !== r.eventType) throw Error("You have provided an event type that is not available for this trigger type")
}

function I(e) {
    let t = (0, s.XO)(e);
    return a.useMemo(() => Object.keys(A).reduce((e, n) => {
        let i = A[n].filter(e => e.type !== o.uh.SERVER_POLICY && (e.type !== o.uh.USER_PROFILE || !!t) && e.perGuildMaxCount > 0).map(e => e.type);
        return e[n] = i, e
    }, {
        members: [],
        content: []
    }), [t])
}

function N(e, t) {
    let n = (0, r.p)(t);
    switch (e) {
        case o.uh.DEFAULT_KEYWORD_LIST:
            return {
                allowList: [], presets: []
            };
        case o.uh.USER_PROFILE:
        case o.uh.KEYWORD:
            return {
                keywordFilter: [], regexPatterns: [], allowList: []
            };
        case o.uh.MENTION_SPAM:
            return {
                mentionTotalLimit: o.Nu, mentionRaidProtectionEnabled: n
            };
        case o.uh.ML_SPAM:
        case o.uh.SERVER_POLICY:
        default:
            return
    }
}