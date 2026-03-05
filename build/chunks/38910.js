/** chunk id: 38910 params = (module,exports,require) **/
s.d(t, {
    A: () => o
});
var n = s(562465),
    i = s(73153),
    a = s(652215);
let o = {
    async fetch() {
        try {
            let e = await n.Bo.get({
                url: a.Rsh.FRIEND_SUGGESTIONS,
                rejectWithError: !0
            });
            i.h.dispatch({
                type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS",
                suggestions: e.body
            })
        } catch (e) {
            i.h.dispatch({
                type: "LOAD_FRIEND_SUGGESTIONS_FAILURE"
            })
        }
    },
    ignore(e) {
        n.Bo.del({
            url: a.Rsh.FRIEND_SUGGESTION(e),
            rejectWithError: !0
        })
    }
}