/** chunk id: 287002 params = (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => m
});
var i = n(627968);
n(64700);
var l = n(417597),
    s = n(397927),
    r = n(104217),
    a = n(135598),
    o = n(390248),
    d = n(900819),
    c = n(279547),
    u = n(961997),
    _ = n(985018);

function m(e) {
    let {
        channelId: t,
        messageId: n,
        transitionState: m,
        onClose: h
    } = e, p = (0, l.bG)([d.A], () => d.A.getFpMessageInfo(n)), g = p.attachments.map(e => e.id), A = p.attachments.map(e => e.filename), {
        reportFalsePositive: x,
        isReportFalsePositiveLoading: f
    } = (0, c.d)({
        onSuccess: () => {
            (0, u.o)(h), r.A.disableFalsePositiveButton(t, n)
        },
        onError: () => {
            (0, s.showToast)((0, s.createToast)(_.intl.string(_.t.R0RpRX), s.ToastType.FAILURE))
        },
        report: () => {
            (0, a.wV)(t, n, g, A)
        }
    });
    return p.attachments.length > 0 || h(), (0, i.jsx)(u.k, {
        messageId: n,
        channelId: t,
        isReportFalsePositiveLoading: f,
        analyticsContext: o.SW.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
        onConfirmPress: x,
        transitionState: m,
        onClose: h
    })
}