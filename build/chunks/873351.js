/** chunk id: 873351 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(73153),
    a = n(613057);
let l = {
    [n(652215).e$_.SET_SUPPRESS_NOTIFICATIONS]: {
        scope: a.hj,
        handler(e) {
            let {
                socket: t,
                args: {
                    suppress_notifications: n,
                    target_user_id: a
                }
            } = e;
            i.h.dispatch({
                type: "SET_RPC_NOTIFICATION_SETTINGS",
                socketId: t.id,
                suppressNotifications: n,
                targetUserId: a
            })
        }
    }
}