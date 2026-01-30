/** chunk id: 507887, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => l
});
var n = r(954571),
    o = r(652215);

function l(e) {
    let {
        problem: t,
        feedback: r,
        reportType: l,
        reportId: c = null,
        rating: a = null,
        dontShowAgain: _
    } = e;
    n.default.track(o.HAw.IAR_FEEDBACK_SUBMITTED, {
        reason: t,
        report_type: l,
        report_id: c,
        rating: a,
        feedback: r,
        dont_show_again: _
    })
}