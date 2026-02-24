/** chunk id: 652442, original params: t,e,n (module,exports,require) **/
n.r(e), n.d(e, {
    default: () => I
});
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(135598),
    E = n(390248),
    o = n(279547),
    a = n(788322),
    s = n(961997),
    _ = n(985018);

function I(t) {
    let {
        channelId: e,
        messageId: n,
        mediaItemUrl: I,
        embedId: A,
        transitionState: d,
        onClose: C
    } = t, L = (0, a.L)(e, n, I), c = (0, a.F)(e, n, A), {
        reportFalsePositive: u,
        isReportFalsePositiveLoading: R
    } = (0, o.d)({
        onSuccess: () => (0, s.o)(C),
        onError: () => {
            (0, r.showToast)((0, r.createToast)(_.intl.string(_.t.R0RpRX), r.ToastType.FAILURE))
        },
        report: () => {
            (0, l.XR)(e, n, L.map(t => t.id), c.map(t => t.id))
        }
    });
    return L.length > 0 || c.length > 0 || C(), (0, i.jsx)(s.k, {
        messageId: n,
        channelId: e,
        isReportFalsePositiveLoading: R,
        analyticsContext: E.SW.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
        onConfirmPress: u,
        attachmentPreview: 1 === L.length && 0 === c.length ? L[0] : void 0,
        embedPreview: 1 === c.length && 0 === L.length ? c[0] : void 0,
        transitionState: d,
        onClose: C
    })
}