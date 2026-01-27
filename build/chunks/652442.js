/** Chunk was on 35270 **/
/** chunk id: 652442, original params: t,e,n (module,exports,require) **/
n.r(e), n.d(e, {
    default: () => I
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(135598),
    o = n(390248),
    a = n(279547),
    E = n(788322),
    s = n(961997),
    _ = n(985018);

function I(t) {
    let {
        channelId: e,
        messageId: n,
        mediaItemUrl: I,
        embedId: u,
        transitionState: c,
        onClose: A
    } = t, d = (0, E.L)(e, n, I), C = (0, E.F)(e, n, u), {
        reportFalsePositive: L,
        isReportFalsePositiveLoading: R
    } = (0, a.d)({
        onSuccess: () => (0, s.o)(A),
        onError: () => {
            (0, i.showToast)((0, i.createToast)(_.intl.string(_.t.R0RpRX), i.ToastType.FAILURE))
        },
        report: () => {
            (0, l.XR)(e, n, d.map(t => t.id), C.map(t => t.id))
        }
    });
    return d.length > 0 || C.length > 0 || A(), (0, r.jsx)(s.k, {
        messageId: n,
        channelId: e,
        isReportFalsePositiveLoading: R,
        analyticsContext: o.SW.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW,
        onConfirmPress: L,
        attachmentPreview: 1 === d.length && 0 === C.length ? d[0] : void 0,
        embedPreview: 1 === C.length && 0 === d.length ? C[0] : void 0,
        transitionState: c,
        onClose: A
    })
}