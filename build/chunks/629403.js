/** chunk id: 629403 params = (module,exports,require) **/
i.d(t, {
    A: () => s
});
var l = i(562465),
    n = i(652215);
let s = {
    updateNote(e, t) {
        l.Bo.put({
            url: n.Rsh.NOTE(e),
            body: {
                note: t
            },
            oldFormErrors: !0,
            rejectWithError: !0
        })
    }
}