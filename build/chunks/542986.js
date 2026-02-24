/** chunk id: 542986, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(311907),
    r = n(73153),
    l = n(686956);
let a = {},
    s = 0;

function o(e) {
    return a[e]?.fetchState ?? 0
}

function d() {
    a = {}
}
class c extends i.Ay.Store {
    isFetchingFriendsForGuild(e) {
        return 1 === o(e)
    }
    fetchFriendMembersIfNotFetched(e, t) {
        0 === o(e) && (a[e] = {
            fetchState: 1,
            foundMembers: 0,
            notFoundMembers: 0
        }, s = t.length, l.A.requestMembersById(e, t, !1))
    }
}
let u = new c(r.h, {
    CONNECTION_OPEN: d,
    LOGOUT: d,
    RELATIONSHIP_ADD: d,
    RELATIONSHIP_REMOVE: d,
    GUILD_MEMBERS_CHUNK_BATCH: function(e) {
        let t = e.chunks[0],
            {
                guildId: n
            } = t;
        1 === o(n) && (a[n].foundMembers += t.members.length, a[n].notFoundMembers += t.notFound?.length ?? 0, a[n].foundMembers + a[n].notFoundMembers >= s && (a[n].fetchState = 2))
    }
})