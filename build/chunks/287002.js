/** chunk id: 287002 params = (module,exports,require) **/
n.r(e), n.d(e, {
    default: () => I
});
var i = n(627968);
n(64700);
var a = n(417597),
    s = n(397927),
    l = n(104217),
    r = n(135598),
    o = n(390248),
    c = n(900819),
    d = n(279547),
    u = n(961997),
    _ = n(985018);

function I(t) {
    let {
        channelId: e,
        messageId: n,
        transitionState: I,
        onClose: E
    } = t, x = (0, a.bG)([c.A], () => c.A.getFpMessageInfo(n)), v = x.attachments.map(t => t.id), m = x.attachments.map(t => t.filename), {
        reportFalsePositive: T,
        isReportFalsePositiveLoading: C
    } = (0, d.d)({
        onSuccess: () => {
            (0, u.o)(E), l.A.disableFalsePositiveButton(e, n)
        },
        onError: () => {
            (0, s.showToast)((0, s.createToast)(_.intl.string(_.t.R0RpRX), s.ToastType.FAILURE))
        },
        report: () => {
            (0, r.wV)(e, n, v, m)
        }
    });
    return x.attachments.length > 0 || E(), (0, i.jsx)(u.k, {
        messageId: n,
        channelId: e,
        isReportFalsePositiveLoading: C,
        analyticsContext: o.SW.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
        onConfirmPress: T,
        transitionState: I,
        onClose: E
    })
}