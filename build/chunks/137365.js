/** chunk id: 137365 params = (module,exports,require) **/
n.d(t, {
    D7: () => S,
    Md: () => b,
    _S: () => y,
    a1: () => C,
    g_: () => E,
    h2: () => T,
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
let v = new s.A("SearchDebugUtils");

function _() {
    v.info("--------------------------")
}

function b() {
    let e = r.A.getMutablePrivateChannels(),
        t = [],
        n = [];
    Object.values(e).forEach(e => {
        e.isGroupDM() && t.push(e), e.isDM() && n.push(e)
    }), v.info("START Logging Group DM Channels"), t.forEach(e => {
        let t = (0, i.m1)(e, h.default, m.A),
            n = (0, i.ks)(e, h.default, m.A);
        v.info(`id: ${e.id}`), v.info(`name: ${t}`), v.info(`default name: ${n}`), v.info(`recipients ids: ${e.recipients}`), e.recipients.forEach(e => {
            let t = h.default.getUser(e);
            if (null == t) return;
            let n = t.username,
                a = g.Ay.getGlobalName(t),
                i = m.A.getNickname(t.id),
                s = c.Ay.getNicknames(t.id);
            v.info(`username: ${n}`), v.info(`global name: ${a}`), v.info(`nickname: ${i}`), v.info(`guild nicknames: ${s}`), _()
        })
    }), v.info("END Logging Group DM Channels\n"), v.info("START Logging DM Channels"), n.forEach(e => {
        let t = (0, i.m1)(e, h.default, m.A);
        v.info(`id: ${e.id}`), v.info(`name: ${t}`);
        let n = e.getRecipientId(),
            a = h.default.getUser(n);
        if (null == a) return;
        let s = a.username,
            l = g.Ay.getGlobalName(a),
            r = m.A.getNickname(a.id);
        v.info(`username: ${s}`), v.info(`global name: ${l}`), v.info(`nickname: ${r}`), _()
    }), v.info("END Logging DM Channels\n")
}

function j() {
    let e = r.A.getMutablePrivateChannels(),
        t = [],
        n = [];
    Object.values(e).forEach(e => {
        e.isGroupDM() && t.push(e), e.isDM() && n.push(e)
    }), v.info("START Logging Group DM Channels"), t.forEach(e => {
        let t = (0, i.m1)(e, h.default, m.A),
            n = (0, i.ks)(e, h.default, m.A);
        v.info(`id: ${e.id}`), v.info(`name: ${t}`), v.info(`default name: ${n}`), v.info(`recipients ids: ${e.recipients}`), e.recipients.forEach(e => {
            let t = h.default.getUser(e);
            if (null == t) return;
            let n = t.username,
                a = g.Ay.getGlobalName(t),
                i = m.A.getNickname(t.id),
                s = c.Ay.getNicknames(t.id);
            v.info(`username: ${n}`), v.info(`global name: ${a}`), v.info(`nickname: ${i}`), v.info(`guild nicknames: ${s}`), _()
        })
    }), v.info("END Logging Group DM Channels\n"), v.info("START Logging DM Channels"), n.forEach(e => {
        let t = (0, i.m1)(e, h.default, m.A);
        v.info(`id: ${e.id}`), v.info(`name: ${t}`);
        let n = e.getRecipientId(),
            a = h.default.getUser(n);
        if (null == a) return;
        let s = a.username,
            l = g.Ay.getGlobalName(a),
            r = m.A.getNickname(a.id);
        v.info(`username: ${s}`), v.info(`global name: ${l}`), v.info(`nickname: ${r}`), _()
    }), v.info("END Logging DM Channels\n")
}

function A() {
    let e = m.A.getFriendIDs();
    v.info("START Discord Friends"), e.forEach(e => {
        let t = h.default.getUser(e);
        if (null == t) return;
        let n = t.username,
            a = g.Ay.getGlobalName(t),
            i = m.A.getNickname(t.id),
            s = c.Ay.getNicknames(t.id);
        v.info(`username: ${n}`), v.info(`global name: ${a}`), v.info(`nickname: ${i}`), v.info(`guild nicknames: ${s}`), _()
    }), v.info("END Discord Friends\n")
}

function C() {
    let e = o.A.getFrequentlyWithoutFetchingLatest(),
        t = [],
        n = [],
        a = [],
        s = [];
    e.forEach(e => {
        (0, x.fh)(e) ? t.push(e): e.isDM() ? a.push(e) : e.isMultiUserDM() ? s.push(e) : n.push(e)
    }), v.info("START Frecency"), v.info("Guilds"), t.forEach(e => {
        let t = o.A.getScoreWithoutFetchingLatest(e.id);
        v.info(`id: ${e.id} - name: ${e.name} - Frecency Score: ${t}`)
    }), _(), v.info("DM Channels"), a.forEach(e => {
        let t = o.A.getScoreWithoutFetchingLatest(e.id);
        v.info(`id: ${e.id} - Frecency Score: ${t}`)
    }), _(), v.info("Group DM Channels"), s.forEach(e => {
        let t = o.A.getScoreWithoutFetchingLatest(e.id);
        v.info(`id: ${e.id} - Frecency Score: ${t}`), v.info(`default name: ${(0,i.ks)(e,h.default,m.A)}`), v.info(`name: ${(0,i.m1)(e,h.default,m.A)}`)
    }), _(), v.info("Guild Channels"), n.forEach(e => {
        let t = o.A.getScoreWithoutFetchingLatest(e.id);
        v.info(`id: ${e.id} - Frecency Score: ${t}`)
    }), _(), v.info("END Frecency\n")
}

function y() {
    let e = l.A.getProps();
    v.info("START Quick Switcher State"), v.info(`Query: ${e.query}`), e.results.forEach(e => {
        switch (v.info(`Result Type: ${e.type}`), e.type) {
            case f.rD.GUILD:
                v.info(`guild id: ${e.record.id}`);
                break;
            case f.rD.TEXT_CHANNEL:
            case f.rD.VOICE_CHANNEL:
                v.info(`channel type: ${e.record.type}`), v.info(`channel id: ${e.record.id}`), v.info(`name: ${e.record.name}`);
                break;
            case f.rD.DM:
                v.info(`channel type: ${e.record.type}`), v.info(`channel id: ${e.record.id}`), e.record.isDM() && (v.info(`recipient id: ${e.record.getRecipientId()}`), e.record.recipients.forEach(e => {
                    let t = h.default.getUser(e);
                    null != t && (v.info(`recipient username: ${t.username}`), v.info(`recipient global name: ${g.Ay.getGlobalName(t)}`), v.info(`recipient nickname: ${m.A.getNickname(t.id)}`))
                }));
                break;
            case f.rD.GROUP_DM:
                v.info(`channel type: ${e.record.type}`), v.info(`channel id: ${e.record.id}`), v.info(`name: ${(0,i.m1)(e.record,h.default,m.A)}`), e.record.isGroupDM() && (v.info(`default name: ${(0,i.ks)(e.record,h.default,m.A)}`), v.info(`recipient id: ${e.record.recipients}`), e.record.recipients.forEach(e => {
                    let t = h.default.getUser(e);
                    null != t && (v.info(`recipient username: ${t.username}`), v.info(`recipient global name: ${g.Ay.getGlobalName(t)}`), v.info(`recipient nickname: ${m.A.getNickname(t.id)}`))
                }));
                break;
            case f.rD.USER:
                v.info(`user id: ${e.record.id}`), v.info(`username: ${e.record.username}`), v.info(`global name: ${g.Ay.getGlobalName(e.record)}`), v.info(`nickname: ${m.A.getNickname(e.record.id)}`), v.info(`guild nicknames: ${c.Ay.getNicknames(e.record.id)}`)
        }
        v.info(`frecency score: ${o.A.getScoreWithoutFetchingLatest(e.record.id)}`), _()
    }), v.info("END Quick Switcher State\n")
}
async function S() {
    v.info("START User Search Worker State");
    let e = await a.A.requestDebugState();
    null == e ? v.info("Unable to get debug state from User Search Worker") : (Object.entries(JSON.parse(e.users)).forEach(e => {
        let [t, n] = e;
        v.info(`id: ${t}`), v.info(`username: ${n.username}`), v.info(`global name: ${n.globalName}`), v.info(`nickname: ${n.friendNickname}`), Object.entries(n.nicknames).forEach(e => {
            let [t, n] = e;
            v.info(`guild id: ${t}`), v.info(`guild nickname: ${n}`)
        }), _()
    }), v.info("END User Search Worker State\n"))
}
async function E() {
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
async function T(e) {
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