/** Chunk was on 63974 **/
/** chunk id: 629403, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => r
});
var l = n(562465),
    i = n(652215);
let r = {
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