/** chunk id: 367130, original params: e,t,n (module,exports,require) **/
n.d(t, {
    a: () => a
});
var i = n(562465),
    r = n(349435),
    l = n(652215);

function a(e) {
    return i.Bo.post({
        url: l.Rsh.ADD_SAFETY_WARNING(e),
        body: {
            safety_warning_type: r._j.LIKELY_ATO
        },
        rejectWithError: !1
    })
}