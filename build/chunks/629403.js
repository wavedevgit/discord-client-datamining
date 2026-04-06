/** chunk id: 629403 params = (module,exports,require) **/
t.d(l, {
    A: () => s
});
var n = t(562465),
    i = t(652215);
let s = {
    updateNote(e, l) {
        n.Bo.put({
            url: i.Rsh.NOTE(e),
            body: {
                note: l
            },
            oldFormErrors: !0,
            rejectWithError: !0
        })
    }
}