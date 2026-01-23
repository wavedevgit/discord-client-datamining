/** Chunk was on 39778 **/
/** chunk id: 367130, original params: e,t,n (module,exports,require) **/
n.d(t, {
    a: () => a
});
var r = n(562465),
    i = n(349435),
    l = n(652215);

function a(e) {
    return r.Bo.post({
        url: l.Rsh.ADD_SAFETY_WARNING(e),
        body: {
            safety_warning_type: i._j.LIKELY_ATO
        },
        rejectWithError: !1
    })
}