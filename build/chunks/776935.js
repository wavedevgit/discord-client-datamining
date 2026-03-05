/** chunk id: 776935 params = (module,exports,require) **/
n.d(t, {
    H7: () => r,
    J7: () => l,
    tB: () => o
});
var a, i, s = n(562465),
    l = ((a = {})[a.DEFAULT = 0] = "DEFAULT", a[a.SUCCESSFUL = 1] = "SUCCESSFUL", a[a.FAILURE = 2] = "FAILURE", a[a.NONE = 3] = "NONE", a),
    r = ((i = {})[i.REWIND = 1] = "REWIND", i[i.RENEW = 2] = "RENEW", i[i.CANCEL = 3] = "CANCEL", i[i.UNCANCEL = 4] = "UNCANCEL", i[i.TIME_TRAVEL = 5] = "TIME_TRAVEL", i[i.RESET = 6] = "RESET", i[i.PAY_INVOICE = 7] = "PAY_INVOICE", i[i.END = 8] = "END", i[i.RESUME = 9] = "RESUME", i);
async function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        {
            targetDate: a,
            paymentType: i,
            sendReminderEmail: l
        } = n;
    return (await s.Bo.post({
        url: `/debug/subscriptions/${e}/transition`,
        body: {
            target_datetime: a?.toISOString(),
            payment_type: i ?? 0,
            transition: t,
            send_reminder_email: l ?? !1
        },
        rejectWithError: !0
    })).body
}