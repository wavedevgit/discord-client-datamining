/** chunk id: 652442 params = (module,exports,require) **/
n.r(e), n.d(e, {
    default: () => I
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(135598),
    E = n(390248),
    s = n(279547),
    a = n(788322),
    o = n(961997),
    _ = n(985018);

function I(t) {
    let {
        channelId: e,
        messageId: n,
        mediaItemUrl: I,
        embedId: A,
        transitionState: d,
        onClose: C
    } = t, u = (0, a.L)(e, n, I), R = (0, a.F)(e, n, A), {
        reportFalsePositive: c,
        isReportFalsePositiveLoading: L
    } = (0, s.d)({
        onSuccess: () => (0, o.o)(C),
        onError: () => {
            (0, i.showToast)((0, i.createToast)(_.intl.string(_.t.R0RpRX), i.ToastType.FAILURE))
        },
        report: () => {
            (0, l.XR)(e, n, u.map(t => t.id), R.map(t => t.id))
        }
    });
    return u.length > 0 || R.length > 0 || C(), (0, r.jsx)(o.k, {
        messageId: n,
        channelId: e,
        isReportFalsePositiveLoading: L,
        analyticsContext: E.SW.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
        onConfirmPress: c,
        attachmentPreview: 1 === u.length && 0 === R.length ? u[0] : void 0,
        embedPreview: 1 === R.length && 0 === u.length ? R[0] : void 0,
        transitionState: d,
        onClose: C
    })
}