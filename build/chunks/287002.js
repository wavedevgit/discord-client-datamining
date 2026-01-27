/** Chunk was on 92917 **/
/** chunk id: 287002, original params: e,t,n (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => m
});
var r = n(627968);
n(64700);
var i = n(417597),
    l = n(397927),
    a = n(104217),
    s = n(135598),
    o = n(390248),
    c = n(900819),
    u = n(279547),
    d = n(961997),
    p = n(985018);

function m(e) {
    let {
        channelId: t,
        messageId: n,
        transitionState: m,
        onClose: f
    } = e, g = (0, i.bG)([c.A], () => c.A.getFpMessageInfo(n)), h = g.attachments.map(e => e.id), _ = g.attachments.map(e => e.filename), {
        reportFalsePositive: b,
        isReportFalsePositiveLoading: A
    } = (0, u.d)({
        onSuccess: () => {
            (0, d.o)(f), a.A.disableFalsePositiveButton(t, n)
        },
        onError: () => {
            (0, l.showToast)((0, l.createToast)(p.intl.string(p.t.R0RpRX), l.ToastType.FAILURE))
        },
        report: () => {
            (0, s.wV)(t, n, h, _)
        }
    });
    return g.attachments.length > 0 || f(), (0, r.jsx)(d.k, {
        messageId: n,
        channelId: t,
        isReportFalsePositiveLoading: A,
        analyticsContext: o.SW.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW,
        onConfirmPress: b,
        transitionState: m,
        onClose: f
    })
}