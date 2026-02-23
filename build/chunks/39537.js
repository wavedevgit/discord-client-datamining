/** chunk id: 39537, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $R: () => l,
    Rt: () => r
});
var a = n(110259);
n(181658);
var i = n(499785),
    s = n(652215);
async function l() {
    let e = await i.A.get({
        url: s.Rsh.SAFETY_FLOWS_TASK,
        trackedActionData: {
            event: a.NetworkActionNames.USER_VERIFY
        },
        rejectWithError: !0
    });
    return 204 === e.status ? null : e.body
}
async function r(e) {
    return (await i.A.post({
        url: s.Rsh.SAFETY_FLOWS_TASK,
        body: e,
        trackedActionData: {
            event: a.NetworkActionNames.USER_VERIFY
        },
        rejectWithError: !0
    })).body
}