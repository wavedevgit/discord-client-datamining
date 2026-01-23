/** Chunk was on 38985 **/
/** chunk id: 637248, original params: e,t,n (module,exports,require) **/
n.d(t, {
    DD: () => L,
    RD: () => x,
    YC: () => M,
    vh: () => D,
    xb: () => C,
    zH: () => b
}), n(667532);
var l = n(64700),
    r = n(91871),
    a = n.n(r),
    i = n(989349),
    s = n.n(i),
    o = n(311907),
    u = n(554146),
    c = n(334738),
    E = n(999903),
    d = n(826673),
    _ = n(473529),
    g = n(32603),
    A = n(101579),
    T = n(976860),
    h = n(734057),
    I = n(769765),
    O = n(222823),
    m = n(661191),
    N = n(652215),
    f = n(746080),
    p = n(281405),
    S = n(790782),
    G = n(985018);

function R(e, t) {
    e.index = t
}

function D(e, t, n, r) {
    r = r.toLowerCase();
    let i = (0, _.d)(e),
        s = l.useCallback((e, t) => !(i && e.channel.hasFlag(f.lx.IS_GUILD_RESOURCE_CHANNEL)) && e.channel.type !== N.rbe.GUILD_DIRECTORY && (0 === t.length || a()(t, e.channel.name.toLowerCase()) || e.channel.topic.toLowerCase().includes(t)), [i]);
    return l.useMemo(() => {
        let e = {
            null: [],
            _categories: []
        };
        return n[N.rbe.GUILD_CATEGORY].forEach(n => {
            let {
                channel: l
            } = n;
            "null" === l.id && (e.null = t.null.filter(e => s(e, r))), e[l.id] = t[l.id].filter(e => s(e, r))
        }), e._categories = t._categories.filter(t => "null" === t.channel.id || 0 === r.length || e[t.channel.id].length > 0), (0, E.A)(e._categories, e).forEach(R), e
    }, [t, n, s, r])
}

function C(e) {
    let t = e.getSections(!1);
    if (t[g.PU] > 0) switch (e.getGuildActionSection().getRow(0)) {
        case p.n.GUILD_HOME:
            return f.VV.GUILD_HOME;
        case p.n.GUILD_ROLE_SUBSCRIPTIONS:
            return f.VV.ROLE_SUBSCRIPTIONS;
        case p.n.GUILD_MOD_DASH_MEMBER_SAFETY:
            return f.VV.MEMBER_SAFETY
    }
    for (let l = g.bK; l < e.voiceChannelsSectionNumber; l++)
        if (t[l] > 0) {
            var n;
            let t = null == (n = e.getChannelFromSectionRow(l, 0)) ? void 0 : n.channel;
            if (null != t) return t.id
        } return null
}

function L(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    (0, A.y)(e, t), (0, c.Uq)(t.map(e => ({
        channelId: e,
        readStateType: S.P.CHANNEL,
        messageId: O.Ay.lastMessageId(e)
    }))), null != n && (0, T.pX)(N.BVt.CHANNEL(e, n))
}

function b(e, t, n, l) {
    let r = (0, d.JZ)(u.M.CHANNEL_BROWSER_NUX),
        a = (0, o.cf)([h.A], () => {
            let t = {},
                n = h.A.getMutableGuildChannelsForGuild(e);
            for (let e in n) {
                let {
                    parent_id: r
                } = n[e];
                if (null != r) {
                    var l;
                    t[r] = (null != (l = t[r]) ? l : 0) + 1
                }
            }
            return t
        }, [e]),
        i = t._categories.map(e => {
            let l = t[e.channel.id];
            return {
                rowCount: "null" !== e.channel.id && 0 === a[e.channel.id] ? 1 : l.length,
                rowHeight: 0 === l.length ? 0 : n
            }
        });
    return r || null == l || i.unshift({
        rowCount: 1,
        rowHeight: l
    }), i
}

function x(e) {
    var t, n;
    let l = (0, o.bG)([I.A], () => I.A.getCategories(e)),
        r = l._categories.length,
        a = l._categories[l._categories.length - 1];
    if (null == a) return 0;
    let i = l[null != (t = null == (n = a.channel) ? void 0 : n.id) ? t : "null"];
    return null == i ? 0 : 0 === i.length ? a.index + 2 - r : i[i.length - 1].index + 2 - r
}

function M(e) {
    var t;
    return G.intl.formatToPlainString(G.t["8N0BHR"], {
        timeAgo: s()(m.default.extractTimestamp(null != (t = O.Ay.lastMessageId(e)) ? t : e)).fromNow()
    })
}