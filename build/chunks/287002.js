/** Chunk was on 66009 **/
/** chunk id: 287002, original params: t,e,n (module,exports,require) **/
n.r(e), n.d(e, {
    default: () => I
});
var i = n(627968);
n(64700);
var l = n(417597),
    a = n(397927),
    r = n(104217),
    o = n(135598),
    s = n(390248),
    c = n(900819),
    u = n(279547),
    d = n(961997),
    _ = n(985018);

function I(t) {
    let {
        channelId: e,
        messageId: n,
        transitionState: I,
        onClose: v
    } = t, E = (0, l.bG)([c.A], () => c.A.getFpMessageInfo(n)), m = E.attachments.map(t => t.id), p = E.attachments.map(t => t.filename), {
        reportFalsePositive: f,
        isReportFalsePositiveLoading: x
    } = (0, u.d)({
        onSuccess: () => {
            (0, d.o)(v), r.A.disableFalsePositiveButton(e, n)
        },
        onError: () => {
            (0, a.showToast)((0, a.createToast)(_.intl.string(_.t.R0RpRX), a.ToastType.FAILURE))
        },
        report: () => {
            (0, o.wV)(e, n, m, p)
        }
    });
    return E.attachments.length > 0 || v(), (0, i.jsx)(d.k, {
        messageId: n,
        channelId: e,
        isReportFalsePositiveLoading: x,
        analyticsContext: s.SW.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
        onConfirmPress: f,
        transitionState: I,
        onClose: v
    })
}