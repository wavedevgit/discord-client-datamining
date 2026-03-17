/** chunk id: 629403 params = (module,exports,require) **/
t.d(l, {
    A: () => s
});
var i = t(562465),
    n = t(652215);
let s = {
    updateNote(e, l) {
        i.Bo.put({
            url: n.Rsh.NOTE(e),
            body: {
                note: l
            },
            oldFormErrors: !0,
            rejectWithError: !0
        })
    }
}