/** chunk id: 629403 params = (module,exports,require) **/
i.d(l, {
    A: () => s
});
var n = i(562465),
    t = i(652215);
let s = {
    updateNote(e, l) {
        n.Bo.put({
            url: t.Rsh.NOTE(e),
            body: {
                note: l
            },
            oldFormErrors: !0,
            rejectWithError: !0
        })
    }
}