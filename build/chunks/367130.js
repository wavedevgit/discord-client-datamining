/** chunk id: 367130, original params: n,t,e (module,exports,require) **/
e.d(t, {
    a: () => a
});
var i = e(562465),
    r = e(349435),
    l = e(652215);

function a(n) {
    return i.Bo.post({
        url: l.Rsh.ADD_SAFETY_WARNING(n),
        body: {
            safety_warning_type: r._j.LIKELY_ATO
        },
        rejectWithError: !1
    })
}