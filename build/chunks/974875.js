/** chunk id: 974875 params = (module,exports,require) **/
n.d(t, {
    Q: () => c
});
var i = n(627968);
n(64700);
var r = n(397927),
    a = n(579872),
    l = n(104217),
    s = n(390248),
    o = n(900819),
    d = n(985018);

function c(e, t) {
    if ((0, s.hv)({
            action: s.rY.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
            messageId: t,
            channelId: e
        }), !o.A.canSubmitFpReport(t)) {
        a.A.show({
            title: d.intl.string(d.t["iS/eFN"]),
            body: d.intl.string(d.t.YrjcgR),
            confirmText: d.intl.string(d.t.BddRzS)
        }), l.A.disableFalsePositiveButton(e, t);
        return
    }(0, r.mMO)(async () => {
        let {
            default: r
        } = await n(287002);
        return n => (0, i.jsx)(r, {
            channelId: e,
            messageId: t,
            ...n
        })
    })
}