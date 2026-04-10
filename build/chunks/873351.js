/** chunk id: 873351 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(73153),
    l = n(613057);
let r = {
    [n(652215).e$_.SET_SUPPRESS_NOTIFICATIONS]: {
        scope: l.hj,
        handler(e) {
            let {
                socket: t,
                args: {
                    suppress_notifications: n,
                    target_user_id: l
                }
            } = e;
            i.h.dispatch({
                type: "SET_RPC_NOTIFICATION_SETTINGS",
                socketId: t.id,
                suppressNotifications: n,
                targetUserId: l
            })
        }
    }
}