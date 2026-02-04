/** chunk id: 545059, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var l = n(835245),
    r = n(73153),
    i = n(870391);
let s = {
    createGroup(e) {
        let t = (0, l.A)();
        return r.h.dispatch({
            type: "CREATE_FRIEND_GROUP",
            groupId: t,
            name: e
        }), t
    },
    updateGroup(e, t) {
        r.h.dispatch({
            type: "UPDATE_FRIEND_GROUP",
            groupId: e,
            name: t
        })
    },
    deleteGroup(e) {
        r.h.dispatch({
            type: "DELETE_FRIEND_GROUP",
            groupId: e
        })
    },
    reorderGroups(e) {
        r.h.dispatch({
            type: "REORDER_FRIEND_GROUPS",
            groupIds: e
        })
    },
    addUsersToGroup(e, t) {
        let n = Array.isArray(t) ? t : [t];
        r.h.dispatch({
            type: "ADD_USERS_TO_GROUP",
            groupId: e,
            userIds: n
        })
    },
    removeUsersFromGroup(e, t) {
        let n = Array.isArray(t) ? t : [t];
        r.h.dispatch({
            type: "REMOVE_USERS_FROM_GROUP",
            groupId: e,
            userIds: n
        })
    },
    toggleUserInGroup(e, t) {
        let n = i.A.getGroup(e);
        null != n && (n.userIds.includes(t) ? this.removeUsersFromGroup(e, t) : this.addUsersToGroup(e, t))
    }
}