/** chunk id: 629403 params = (module,exports,require) **/
i.d(l, {
    A: () => s
});
var t = i(562465),
    n = i(652215);
let s = {
    updateNote(e, l) {
        t.Bo.put({
            url: n.Rsh.NOTE(e),
            body: {
                note: l
            },
            oldFormErrors: !0,
            rejectWithError: !0
        })
    }
}