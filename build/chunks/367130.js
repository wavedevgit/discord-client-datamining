/** chunk id: 367130 params = (module,exports,require) **/
i.d(e, {
    a: () => a
});
var t = i(562465),
    r = i(349435),
    l = i(652215);

function a(n) {
    return t.Bo.post({
        url: l.Rsh.ADD_SAFETY_WARNING(n),
        body: {
            safety_warning_type: r._j.LIKELY_ATO
        },
        rejectWithError: !1
    })
}