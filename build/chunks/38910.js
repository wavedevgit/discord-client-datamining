/** chunk id: 38910 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(562465),
    r = n(73153),
    l = n(652215);
let s = {
    async fetch() {
        try {
            let e = await i.Bo.get({
                url: l.Rsh.FRIEND_SUGGESTIONS,
                rejectWithError: !0
            });
            r.h.dispatch({
                type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS",
                suggestions: e.body
            })
        } catch (e) {
            r.h.dispatch({
                type: "LOAD_FRIEND_SUGGESTIONS_FAILURE"
            })
        }
    },
    ignore(e) {
        i.Bo.del({
            url: l.Rsh.FRIEND_SUGGESTION(e),
            rejectWithError: !0
        })
    }
}