/** chunk id: 48128 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(562465),
    a = n(73153),
    r = n(652215);
let l = {
    fetch() {
        a.h.dispatch({
            type: "UNCLAIMED_GAMES_FETCH"
        }), i.Bo.get({
            url: r.Rsh.UNCLAIMED_GAMES,
            oldFormErrors: !0,
            rejectWithError: !1
        }).then(e => {
            let {
                body: t
            } = e;
            a.h.dispatch({
                type: "UNCLAIMED_GAMES_FETCH_SUCCESS",
                guildIdToGameIds: t
            })
        }, () => {
            a.h.dispatch({
                type: "UNCLAIMED_GAMES_FETCH_FAIL"
            })
        })
    }
}