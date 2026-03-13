/** chunk id: 629403 params = (module,exports,require) **/
n.d(l, {
    A: () => s
});
var i = n(562465),
    t = n(652215);
let s = {
    updateNote(e, l) {
        i.Bo.put({
            url: t.Rsh.NOTE(e),
            body: {
                note: l
            },
            oldFormErrors: !0,
            rejectWithError: !0
        })
    }
}