/** Chunk was on 66009 **/
/** chunk id: 974875, original params: t,e,n (module,exports,require) **/
n.d(e, {
    Q: () => u
});
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(579872),
    r = n(104217),
    o = n(390248),
    s = n(900819),
    c = n(985018);

function u(t, e) {
    if ((0, o.hv)({
            action: o.rY.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
            messageId: e,
            channelId: t
        }), !s.A.canSubmitFpReport(e)) {
        a.A.show({
            title: c.intl.string(c.t["iS/eFN"]),
            body: c.intl.string(c.t.YrjcgR),
            confirmText: c.intl.string(c.t.BddRzS)
        }), r.A.disableFalsePositiveButton(t, e);
        return
    }(0, l.mMO)(async () => {
        let {
            default: l
        } = await n(287002);
        return n => (0, i.jsx)(l, function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                }))), i.forEach(function(e) {
                    var i;
                    i = n[e], e in t ? Object.defineProperty(t, e, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = i
                })
            }
            return t
        }({
            channelId: t,
            messageId: e
        }, n))
    })
}