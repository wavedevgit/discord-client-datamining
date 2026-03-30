/** chunk id: 38910 params = (module,exports,require) **/
s.d(t, {
    A: () => o
});
var i = s(562465),
    n = s(73153),
    a = s(652215);
let o = {
    async fetch() {
        try {
            let e = await i.Bo.get({
                url: a.Rsh.FRIEND_SUGGESTIONS,
                rejectWithError: !0
            });
            n.h.dispatch({
                type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS",
                suggestions: e.body
            })
        } catch (e) {
            n.h.dispatch({
                type: "LOAD_FRIEND_SUGGESTIONS_FAILURE"
            })
        }
    },
    ignore(e) {
        i.Bo.del({
            url: a.Rsh.FRIEND_SUGGESTION(e),
            rejectWithError: !0
        })
    }
}