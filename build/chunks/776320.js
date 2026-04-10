/** chunk id: 776320 params = (module,exports,require) **/
n.d(t, {
    V: () => m
});
var i = n(311907),
    s = n(419954),
    l = n(933297),
    r = n(961350),
    a = n(87707),
    o = n(780964),
    d = n(407186),
    c = n(115467),
    u = n(985018);
let m = (0, s.zZ)(o.X.AUTHENTICATOR_APP_CATEGORY, {
    useTitle: () => u.intl.string(u.t.RumMFo),
    useSubtitle: () => u.intl.string(u.t.iTbTo7),
    useHeaderDecoration: function() {
        let e = (0, i.bG)([r.default], () => r.default.hasTOTPEnabled()),
            t = (0, a.dI)() === a.gW.AVAILABLE;
        if (!e && t) return {
            type: l.WX.BUTTON_GROUP,
            buttons: [{
                type: l.UV.BUTTON,
                id: "mfa-setup-button",
                text: u.intl.string(u.t.cTNUeD),
                onClick: d.Ay.enableMFA
            }]
        }
    },
    useInlineNotice: function() {
        switch ((0, a.dI)()) {
            case a.gW.UNAVAILABLE_NO_CRYPTO:
                return {
                    type: l.lT.INLINE_NOTICE, noticeType: "info", useText: () => u.intl.string(u.t.PhHhsj)
                };
            case a.gW.UNAVAILABLE_UNVERIFIED:
                return {
                    type: l.lT.INLINE_NOTICE, noticeType: "warning", useText: () => u.intl.string(u.t.uggF7o)
                };
            case a.gW.AVAILABLE:
                return
        }
    },
    collapseOnEmpty: !1,
    buildLayout: () => [c.i]
})