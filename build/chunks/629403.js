/** chunk id: 629403 params = (module,exports,require) **/
l.d(n, {
    A: () => s
});
var i = l(562465),
    t = l(652215);
let s = {
    updateNote(e, n) {
        i.Bo.put({
            url: t.Rsh.NOTE(e),
            body: {
                note: n
            },
            oldFormErrors: !0,
            rejectWithError: !0
        })
    }
}