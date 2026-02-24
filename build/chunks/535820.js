/** chunk id: 535820, original params: e,t,n (module,exports,require) **/
let l, i, s, a, r, o;
n.d(t, {
    A: () => b
});
var d = n(311907),
    u = n(73153),
    c = n(174768),
    g = n(21119),
    h = n(403362),
    A = n(735547),
    p = n(734057),
    I = n(576705),
    m = n(994500),
    x = n(652215),
    v = n(172799);
let S = new Set,
    y = [],
    E = new Map,
    f = {
        numFriends: 0,
        numDms: 0,
        numGroupDms: 0,
        numChannels: 0
    };

function T(e) {
    let t = new Set,
        n = a?.type === x.rbe.GUILD_VOICE,
        l = null;
    null == s || o === v.yV.EMBEDDED_APPLICATION || n || (l = s.id);
    let i = (0, A.oW)(S, l);
    for (let e of (null == i || m.A.isBlockedOrIgnored(i.id) || t.add(i.id), g.A.getUserAffinities())) t.add(e.otherUserId);
    let r = new Set;
    return o === v.yV.EMBEDDED_APPLICATION && c.A.getChannelHistory().map(e => p.A.getChannel(e)).filter(h.Vq).filter(e => e.type === x.rbe.GUILD_TEXT).filter(e => I.A.can(x.xBc.SEND_MESSAGES, e)).slice(0, 3).forEach(e => r.add(e.id)), (0, A.Us)({
        query: e,
        omitUserIds: S,
        suggestedUserIds: t,
        maxRowsWithoutQuery: 100,
        omitGuildId: l,
        suggestedChannelIds: r,
        inviteTargetType: o
    })
}

function C(e) {
    y = e, E = new Map, e.forEach((e, t) => {
        E.set(e, {
            index: t
        })
    })
}
class _ extends d.Ay.Store {
    static displayName = "InviteSuggestionsStore";
    initialize() {
        this.waitFor(p.A, I.A, c.A, m.A, g.A)
    }
    getInviteSuggestionRows() {
        return y
    }
    getTotalSuggestionsCount() {
        return l
    }
    getInitialCounts() {
        return f
    }
    getSelectedInviteMetadata(e) {
        let t = E.get(e),
            n = g.A.getUserAffinities().map(e => e.otherUserId);
        if (null != t) return {
            rowNum: t.index,
            isAffinitySuggestion: e.isSuggested,
            numTotal: y.length,
            numAffinityConnections: n.length,
            isFiltered: i
        }
    }
}
let b = new _(u.h, {
    LOAD_INVITE_SUGGESTIONS: function(e) {
        let {
            omitUserIds: t,
            guild: n,
            channel: d,
            applicationId: u,
            inviteTargetType: c
        } = e;
        s = null != d ? n : null, a = d, r = u, o = c, S = new Set([...t, ...m.A.getBlockedOrIgnoredIDs(), ...(0, A.Uo)({
            channel: a,
            applicationId: r,
            inviteTargetType: c
        })]), i = !1;
        let {
            rows: g,
            counts: h
        } = T("");
        C(g), f = h, l = y.length
    },
    INVITE_SUGGESTIONS_SEARCH: function(e) {
        let {
            query: t
        } = e;
        i = "" !== t;
        let {
            rows: n
        } = T(t);
        n.sort((e, t) => null != e.score && null != t.score ? e.score - t.score : 0), C(n)
    }
})