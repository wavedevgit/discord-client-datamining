/** chunk id: 974875, original params: t,e,n (module,exports,require) **/
n.d(e, {
    Q: () => d
});
var i = n(627968);
n(64700);
var a = n(397927),
    s = n(579872),
    l = n(104217),
    r = n(390248),
    o = n(900819),
    c = n(985018);

function d(t, e) {
    if ((0, r.hv)({
            action: r.rY.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
            messageId: e,
            channelId: t
        }), !o.A.canSubmitFpReport(e)) {
        s.A.show({
            title: c.intl.string(c.t["iS/eFN"]),
            body: c.intl.string(c.t.YrjcgR),
            confirmText: c.intl.string(c.t.BddRzS)
        }), l.A.disableFalsePositiveButton(t, e);
        return
    }(0, a.mMO)(async () => {
        let {
            default: a
        } = await n(287002);
        return n => (0, i.jsx)(a, {
            channelId: t,
            messageId: e,
            ...n
        })
    })
}