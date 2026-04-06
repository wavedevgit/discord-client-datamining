/** chunk id: 137365 params = (module,exports,require) **/
n.d(t, {
    D7: () => S,
    Md: () => b,
    _S: () => y,
    a1: () => C,
    g_: () => T,
    h2: () => E,
    it: () => A,
    pD: () => j
}), n(321073);
var a = n(450827),
    i = n(47167),
    s = n(626584),
    l = n(174768),
    r = n(734057),
    o = n(205761),
    d = n(256587),
    c = n(696451),
    u = n(71393),
    m = n(994500),
    h = n(287809),
    x = n(860689),
    p = n(661191),
    g = n(427262),
    f = n(926140);
let _ = new s.A("SearchDebugUtils");

function v() {
    _.info("--------------------------")
}

function b() {
    let e = r.A.getMutablePrivateChannels(),
        t = [],
        n = [];
    Object.values(e).forEach(e => {
        e.isGroupDM() && t.push(e), e.isDM() && n.push(e)
    }), _.info("START Logging Group DM Channels"), t.forEach(e => {
        let t = (0, i.m1)(e, h.default, m.A),
            n = (0, i.ks)(e, h.default, m.A);
        _.info(`id: ${e.id}`), _.info(`name: ${t}`), _.info(`default name: ${n}`), _.info(`recipients ids: ${e.recipients}`), e.recipients.forEach(e => {
            let t = h.default.getUser(e);
            if (null == t) return;
            let n = t.username,
                a = g.Ay.getGlobalName(t),
                i = m.A.getNickname(t.id),
                s = c.Ay.getNicknames(t.id);
            _.info(`username: ${n}`), _.info(`global name: ${a}`), _.info(`nickname: ${i}`), _.info(`guild nicknames: ${s}`), v()
        })
    }), _.info("END Logging Group DM Channels\n"), _.info("START Logging DM Channels"), n.forEach(e => {
        let t = (0, i.m1)(e, h.default, m.A);
        _.info(`id: ${e.id}`), _.info(`name: ${t}`);
        let n = e.getRecipientId(),
            a = h.default.getUser(n);
        if (null == a) return;
        let s = a.username,
            l = g.Ay.getGlobalName(a),
            r = m.A.getNickname(a.id);
        _.info(`username: ${s}`), _.info(`global name: ${l}`), _.info(`nickname: ${r}`), v()
    }), _.info("END Logging DM Channels\n")
}

function j() {
    let e = r.A.getMutablePrivateChannels(),
        t = [],
        n = [];
    Object.values(e).forEach(e => {
        e.isGroupDM() && t.push(e), e.isDM() && n.push(e)
    }), _.info("START Logging Group DM Channels"), t.forEach(e => {
        let t = (0, i.m1)(e, h.default, m.A),
            n = (0, i.ks)(e, h.default, m.A);
        _.info(`id: ${e.id}`), _.info(`name: ${t}`), _.info(`default name: ${n}`), _.info(`recipients ids: ${e.recipients}`), e.recipients.forEach(e => {
            let t = h.default.getUser(e);
            if (null == t) return;
            let n = t.username,
                a = g.Ay.getGlobalName(t),
                i = m.A.getNickname(t.id),
                s = c.Ay.getNicknames(t.id);
            _.info(`username: ${n}`), _.info(`global name: ${a}`), _.info(`nickname: ${i}`), _.info(`guild nicknames: ${s}`), v()
        })
    }), _.info("END Logging Group DM Channels\n"), _.info("START Logging DM Channels"), n.forEach(e => {
        let t = (0, i.m1)(e, h.default, m.A);
        _.info(`id: ${e.id}`), _.info(`name: ${t}`);
        let n = e.getRecipientId(),
            a = h.default.getUser(n);
        if (null == a) return;
        let s = a.username,
            l = g.Ay.getGlobalName(a),
            r = m.A.getNickname(a.id);
        _.info(`username: ${s}`), _.info(`global name: ${l}`), _.info(`nickname: ${r}`), v()
    }), _.info("END Logging DM Channels\n")
}

function A() {
    let e = m.A.getFriendIDs();
    _.info("START Discord Friends"), e.forEach(e => {
        let t = h.default.getUser(e);
        if (null == t) return;
        let n = t.username,
            a = g.Ay.getGlobalName(t),
            i = m.A.getNickname(t.id),
            s = c.Ay.getNicknames(t.id);
        _.info(`username: ${n}`), _.info(`global name: ${a}`), _.info(`nickname: ${i}`), _.info(`guild nicknames: ${s}`), v()
    }), _.info("END Discord Friends\n")
}

function C() {
    let e = o.A.getFrequentlyWithoutFetchingLatest(),
        t = [],
        n = [],
        a = [],
        s = [];
    e.forEach(e => {
        (0, x.fh)(e) ? t.push(e): e.isDM() ? a.push(e) : e.isMultiUserDM() ? s.push(e) : n.push(e)
    }), _.info("START Frecency"), _.info("Guilds"), t.forEach(e => {
        let t = o.A.getScoreWithoutFetchingLatest(e.id);
        _.info(`id: ${e.id} - name: ${e.name} - Frecency Score: ${t}`)
    }), v(), _.info("DM Channels"), a.forEach(e => {
        let t = o.A.getScoreWithoutFetchingLatest(e.id);
        _.info(`id: ${e.id} - Frecency Score: ${t}`)
    }), v(), _.info("Group DM Channels"), s.forEach(e => {
        let t = o.A.getScoreWithoutFetchingLatest(e.id);
        _.info(`id: ${e.id} - Frecency Score: ${t}`), _.info(`default name: ${(0,i.ks)(e,h.default,m.A)}`), _.info(`name: ${(0,i.m1)(e,h.default,m.A)}`)
    }), v(), _.info("Guild Channels"), n.forEach(e => {
        let t = o.A.getScoreWithoutFetchingLatest(e.id);
        _.info(`id: ${e.id} - Frecency Score: ${t}`)
    }), v(), _.info("END Frecency\n")
}

function y() {
    let e = l.A.getProps();
    _.info("START Quick Switcher State"), _.info(`Query: ${e.query}`), e.results.forEach(e => {
        switch (_.info(`Result Type: ${e.type}`), e.type) {
            case f.rD.GUILD:
                _.info(`guild id: ${e.record.id}`);
                break;
            case f.rD.TEXT_CHANNEL:
            case f.rD.VOICE_CHANNEL:
                _.info(`channel type: ${e.record.type}`), _.info(`channel id: ${e.record.id}`), _.info(`name: ${e.record.name}`);
                break;
            case f.rD.DM:
                _.info(`channel type: ${e.record.type}`), _.info(`channel id: ${e.record.id}`), e.record.isDM() && (_.info(`recipient id: ${e.record.getRecipientId()}`), e.record.recipients.forEach(e => {
                    let t = h.default.getUser(e);
                    null != t && (_.info(`recipient username: ${t.username}`), _.info(`recipient global name: ${g.Ay.getGlobalName(t)}`), _.info(`recipient nickname: ${m.A.getNickname(t.id)}`))
                }));
                break;
            case f.rD.GROUP_DM:
                _.info(`channel type: ${e.record.type}`), _.info(`channel id: ${e.record.id}`), _.info(`name: ${(0,i.m1)(e.record,h.default,m.A)}`), e.record.isGroupDM() && (_.info(`default name: ${(0,i.ks)(e.record,h.default,m.A)}`), _.info(`recipient id: ${e.record.recipients}`), e.record.recipients.forEach(e => {
                    let t = h.default.getUser(e);
                    null != t && (_.info(`recipient username: ${t.username}`), _.info(`recipient global name: ${g.Ay.getGlobalName(t)}`), _.info(`recipient nickname: ${m.A.getNickname(t.id)}`))
                }));
                break;
            case f.rD.USER:
                _.info(`user id: ${e.record.id}`), _.info(`username: ${e.record.username}`), _.info(`global name: ${g.Ay.getGlobalName(e.record)}`), _.info(`nickname: ${m.A.getNickname(e.record.id)}`), _.info(`guild nicknames: ${c.Ay.getNicknames(e.record.id)}`)
        }
        _.info(`frecency score: ${o.A.getScoreWithoutFetchingLatest(e.record.id)}`), v()
    }), _.info("END Quick Switcher State\n")
}
async function S() {
    _.info("START User Search Worker State");
    let e = await a.A.requestDebugState();
    null == e ? _.info("Unable to get debug state from User Search Worker") : (Object.entries(JSON.parse(e.users)).forEach(e => {
        let [t, n] = e;
        _.info(`id: ${t}`), _.info(`username: ${n.username}`), _.info(`global name: ${n.globalName}`), _.info(`nickname: ${n.friendNickname}`), Object.entries(n.nicknames).forEach(e => {
            let [t, n] = e;
            _.info(`guild id: ${t}`), _.info(`guild nickname: ${n}`)
        }), v()
    }), _.info("END User Search Worker State\n"))
}
async function T() {
    let e = await a.A.requestDebugState();
    if (null == e) throw Error("Unable to get debug state from User Search Worker");
    let t = JSON.parse(e.users),
        n = h.default.getUsers(),
        i = new Set(Object.keys(t)),
        s = p.default.keys(n),
        l = [];
    return s.forEach(e => {
        i.has(e) || l.push(e)
    }), l
}
async function E(e) {
    let t = await a.A.requestDebugState(),
        n = null != t ? JSON.parse(t.users)[e] : null,
        i = u.A.getGuildIds(),
        s = [];
    i.forEach(t => {
        let n = c.Ay.getMember(t, e);
        null != n && s.push(n)
    });
    let l = d.A.getDebugState(e);
    return {
        user: h.default.getUser(e),
        searchWorkerUser: n,
        guildMembers: s,
        guildMemberRequests: l
    }
}