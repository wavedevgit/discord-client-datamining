/** chunk id: 542986 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(311907),
    a = n(73153),
    r = n(686956);
let l = {},
    s = 0;

function o(e) {
    return l[e]?.fetchState ?? 0
}

function d() {
    l = {}
}
class c extends i.Ay.Store {
    isFetchingFriendsForGuild(e) {
        return 1 === o(e)
    }
    fetchFriendMembersIfNotFetched(e, t) {
        0 === o(e) && (l[e] = {
            fetchState: 1,
            foundMembers: 0,
            notFoundMembers: 0
        }, s = t.length, r.A.requestMembersById(e, t, !1))
    }
}
let u = new c(a.h, {
    CONNECTION_OPEN: d,
    LOGOUT: d,
    RELATIONSHIP_ADD: d,
    RELATIONSHIP_REMOVE: d,
    GUILD_MEMBERS_CHUNK_BATCH: function(e) {
        let t = e.chunks[0],
            {
                guildId: n
            } = t;
        1 === o(n) && (l[n].foundMembers += t.members.length, l[n].notFoundMembers += t.notFound?.length ?? 0, l[n].foundMembers + l[n].notFoundMembers >= s && (l[n].fetchState = 2))
    }
})