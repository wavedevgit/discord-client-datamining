/** chunk id: 629403 params = (module,exports,require) **/
n.d(l, {
    A: () => s
});
var t = n(562465),
    i = n(652215);
let s = {
    updateNote(e, l) {
        t.Bo.put({
            url: i.Rsh.NOTE(e),
            body: {
                note: l
            },
            oldFormErrors: !0,
            rejectWithError: !0
        })
    }
}