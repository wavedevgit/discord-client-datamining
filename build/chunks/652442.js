/** chunk id: 652442 params = (module,exports,require) **/
n.r(e), n.d(e, {
    default: () => I
});
var i = n(627968);
n(64700);
var r = n(397927),
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
        transitionState: C,
        onClose: d
    } = t, c = (0, a.L)(e, n, I), u = (0, a.F)(e, n, A), {
        reportFalsePositive: R,
        isReportFalsePositiveLoading: L
    } = (0, s.d)({
        onSuccess: () => (0, o.o)(d),
        onError: () => {
            (0, r.showToast)((0, r.createToast)(_.intl.string(_.t.R0RpRX), r.ToastType.FAILURE))
        },
        report: () => {
            (0, l.XR)(e, n, c.map(t => t.id), u.map(t => t.id))
        }
    });
    return c.length > 0 || u.length > 0 || d(), (0, i.jsx)(o.k, {
        messageId: n,
        channelId: e,
        isReportFalsePositiveLoading: L,
        analyticsContext: E.SW.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
        onConfirmPress: R,
        attachmentPreview: 1 === c.length && 0 === u.length ? c[0] : void 0,
        embedPreview: 1 === u.length && 0 === c.length ? u[0] : void 0,
        transitionState: C,
        onClose: d
    })
}