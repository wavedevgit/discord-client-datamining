/** chunk id: 48128 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(562465),
    l = n(73153),
    a = n(652215);
let r = {
    fetch() {
        l.h.dispatch({
            type: "UNCLAIMED_GAMES_FETCH"
        }), i.Bo.get({
            url: a.Rsh.UNCLAIMED_GAMES,
            oldFormErrors: !0,
            rejectWithError: !1
        }).then(e => {
            let {
                body: t
            } = e;
            l.h.dispatch({
                type: "UNCLAIMED_GAMES_FETCH_SUCCESS",
                guildIdToGameIds: t
            })
        }, () => {
            l.h.dispatch({
                type: "UNCLAIMED_GAMES_FETCH_FAIL"
            })
        })
    }
}