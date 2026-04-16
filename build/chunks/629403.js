/** chunk id: 629403 params = (module,exports,require) **/
l.d(n, {
    A: () => s
});
var t = l(562465),
    i = l(652215);
let s = {
    updateNote(e, n) {
        t.Bo.put({
            url: i.Rsh.NOTE(e),
            body: {
                note: n
            },
            oldFormErrors: !0,
            rejectWithError: !0
        })
    }
}