/** chunk id: 226698, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => i
});
var l = n(562465),
    a = n(652215);
let i = {
    resolveFlag: t => l.Bo.post({
        url: a.Rsh.MODERATOR_REPORT_CLOSE(t),
        body: {},
        rejectWithError: !0
    }),
    reopenModReport: t => l.Bo.put({
        url: a.Rsh.REPORT_TO_MOD_REOPEN(t),
        rejectWithError: !0
    })
}