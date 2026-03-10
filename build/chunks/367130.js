/** chunk id: 367130 params = (module,exports,require) **/
t.d(e, {
    a: () => d
});
var i = t(562465),
    r = t(349435),
    l = t(652215);

function d(n) {
    return i.Bo.post({
        url: l.Rsh.ADD_SAFETY_WARNING(n),
        body: {
            safety_warning_type: r._j.LIKELY_ATO
        },
        rejectWithError: !1
    })
}