/** chunk id: 627794 params = (module,exports,require) **/
n.d(t, {
    AR: () => m,
    JJ: () => E,
    KU: () => u,
    PZ: () => C,
    X3: () => f,
    ZG: () => A,
    _I: () => T,
    nl: () => h,
    r3: () => _,
    uV: () => N,
    wC: () => g,
    wk: () => I
});
var i = n(168186),
    l = n(961350),
    a = n(372598),
    r = n(753738),
    s = n(928348),
    o = n(53594),
    c = n(411335),
    d = n(985018);
let u = e => e?.triggerType === c.uh.KEYWORD,
    _ = e => e?.triggerType === c.uh.ML_SPAM,
    A = e => e?.triggerType === c.uh.DEFAULT_KEYWORD_LIST,
    m = e => e?.triggerType === c.uh.MENTION_SPAM,
    E = e => e?.triggerType === c.uh.USER_PROFILE;

function T(e, t) {
    let n = o.i$[t],
        i = (0, o.kT)(t, e),
        r = {
            id: `${e}-${t}-new-rule`,
            name: n.getDefaultRuleName(),
            guildId: e,
            eventType: n.eventType,
            triggerType: t,
            triggerMetadata: i,
            enabled: !0,
            creatorId: l.default.getId(),
            actions: (0, a.dL)(n),
            position: 0,
            exemptChannels: new Set,
            exemptRoles: new Set
        };
    if (g(r)) throw Error(d.intl.string(d.t["A/nX8D"]));
    let c = (0, s.p3)(e, t);
    return c > 0 && (r.name += ` ${c+1}`), r
}

function I(e, t) {
    if (e.length > t) throw Error(d.intl.formatToPlainString(d.t.mee4qd, {
        limit: t
    }));
    e.forEach(e => {
        if (e.length > c.kS || e.length < c.Ku) throw new r.lH(d.intl.formatToPlainString(d.t.rbRvGe, {
            keyword: e,
            max: c.kS,
            min: c.Ku
        }))
    })
}

function N(e) {
    if (u(e)) {
        let t = e.triggerMetadata.keywordFilter ?? [],
            n = e.triggerMetadata.regexPatterns ?? [];
        if (0 === t.length && 0 === n.length) throw Error(d.intl.string(d.t.kz2Av3));
        I(t, c.bV);
        if (n.length > c.qm) throw Error(d.intl.formatToPlainString(d.t.tDjhF1, {
            limit: c.qm
        }));
        n.forEach(e => {
            if (e.length > c.$5 || e.length < c.zs) throw new r.Nr(d.intl.formatToPlainString(d.t.WR0m9w, {
                regex: e,
                max: c.$5,
                min: c.zs
            }))
        })
    }
    if (0 === e.actions.length) throw Error(d.intl.string(d.t["t+gj5V"]))
}

function g(e) {
    return (0, i.hT)(e?.id ?? "INVALID_SNOWFLAKE")
}

function f(e) {
    switch (e) {
        case c.Mc.MESSAGE_SEND:
            return d.intl.string(d.t.NlQW4P);
        case c.Mc.GUILD_MEMBER_JOIN_OR_UPDATE:
            return d.intl.string(d.t["Q+68IX"]);
        default:
            return d.intl.string(d.t.SP9BBx)
    }
}

function C(e) {
    switch (e) {
        case c.AH.BLOCK_MESSAGE:
            return d.intl.string(d.t.d1ab8n);
        case c.AH.FLAG_TO_CHANNEL:
            return d.intl.string(d.t["Y+VmvU"]);
        case c.AH.USER_COMMUNICATION_DISABLED:
            return d.intl.string(d.t["6WPxY2"]);
        case c.AH.QUARANTINE_USER:
            return d.intl.string(d.t.NPO8ee);
        default:
            return d.intl.string(d.t.SP9BBx)
    }
}

function h(e) {
    switch (e) {
        case c.uh.KEYWORD:
            return d.intl.string(d.t.ffR2cM);
        case c.uh.ML_SPAM:
            return d.intl.string(d.t["puF/Os"]);
        case c.uh.DEFAULT_KEYWORD_LIST:
            return d.intl.string(d.t.LnGhZv);
        case c.uh.MENTION_SPAM:
            return d.intl.string(d.t.pX7i6n);
        case c.uh.USER_PROFILE:
            return d.intl.string(d.t.q1L2v8);
        default:
            return d.intl.string(d.t.SP9BBx)
    }
}