/** chunk id: 367130 params = (module,exports,require) **/
t.d(n, {
    a: () => d
});
var i = t(562465),
    r = t(349435),
    l = t(652215);

function d(e) {
    return i.Bo.post({
        url: l.Rsh.ADD_SAFETY_WARNING(e),
        body: {
            safety_warning_type: r._j.LIKELY_ATO
        },
        rejectWithError: !1
    })
}