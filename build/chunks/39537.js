/** Chunk was on 36054 **/
/** chunk id: 39537, original params: e,t,n (module,exports,require) **/
n.d(t, {
    $R: () => i,
    Rt: () => s
});
var a = n(110259);
n(181658);
var l = n(499785),
    r = n(652215);
async function i() {
    let e = await l.A.get({
        url: r.Rsh.SAFETY_FLOWS_TASK,
        trackedActionData: {
            event: a.NetworkActionNames.USER_VERIFY
        },
        rejectWithError: !0
    });
    return 204 === e.status ? null : e.body
}
async function s(e) {
    return (await l.A.post({
        url: r.Rsh.SAFETY_FLOWS_TASK,
        body: e,
        trackedActionData: {
            event: a.NetworkActionNames.USER_VERIFY
        },
        rejectWithError: !0
    })).body
}