/** chunk id: 629403 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var l = n(562465),
    i = n(652215);
let s = {
    updateNote(e, t) {
        l.Bo.put({
            url: i.Rsh.NOTE(e),
            body: {
                note: t
            },
            oldFormErrors: !0,
            rejectWithError: !0
        })
    }
}