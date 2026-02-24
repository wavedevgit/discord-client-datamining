/** chunk id: 367130, original params: n,e,t (module,exports,require) **/
t.d(e, {
    a: () => a
});
var i = t(562465),
    r = t(349435),
    l = t(652215);

function a(n) {
    return i.Bo.post({
        url: l.Rsh.ADD_SAFETY_WARNING(n),
        body: {
            safety_warning_type: r._j.LIKELY_ATO
        },
        rejectWithError: !1
    })
}