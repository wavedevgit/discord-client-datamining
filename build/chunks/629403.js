/** chunk id: 629403 params = (module,exports,require) **/
l.d(t, {
    A: () => s
});
var n = l(562465),
    i = l(652215);
let s = {
    updateNote(e, t) {
        n.Bo.put({
            url: i.Rsh.NOTE(e),
            body: {
                note: t
            },
            oldFormErrors: !0,
            rejectWithError: !0
        })
    }
}