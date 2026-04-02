/** chunk id: 367130 params = (module,exports,require) **/
t.d(n, {
    a: () => a
});
var r = t(562465),
    i = t(349435),
    l = t(652215);

function a(e) {
    return r.Bo.post({
        url: l.Rsh.ADD_SAFETY_WARNING(e),
        body: {
            safety_warning_type: i._j.LIKELY_ATO
        },
        rejectWithError: !1
    })
}