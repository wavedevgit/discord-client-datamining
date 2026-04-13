/** chunk id: 831949 params = (module,exports,require) **/
n.d(t, {
    C: () => A
});
var i = n(311907),
    s = n(98207),
    l = n(700062),
    r = n(557722),
    a = n(419954),
    o = n(933297),
    d = n(961350),
    c = n(287809),
    u = n(87707),
    m = n(780964),
    g = n(272338),
    _ = n(946531),
    x = n(652215),
    h = n(985018);
let A = (0, a.zZ)(m.X.SMS_AUTH_CATEGORY, {
    useTitle: () => h.intl.string(h.t.wuHuI5),
    useSubtitle: () => (0, i.bG)([c.default], () => (0, u.BE)(c.default.getCurrentUser(), !0)),
    useHeaderDecoration: () => {
        let e = (0, i.bG)([c.default], () => c.default.getCurrentUser()?.hasFlag(x.nhx.MFA_SMS) ?? !1),
            t = (0, i.bG)([c.default], () => null != (0, u.BE)(c.default.getCurrentUser()));
        if (!e) return {
            type: o.WX.BUTTON_GROUP,
            buttons: [{
                type: o.UV.BUTTON,
                id: "sms-setup-button",
                text: h.intl.string(h.t.Age7yU),
                onClick: p,
                disabled: t
            }]
        }
    },
    collapseOnEmpty: !1,
    usePredicate: () => {
        let e = (0, u.dI)(),
            t = (0, g.f)(),
            n = (0, i.bG)([d.default], () => d.default.hasTOTPEnabled());
        return e === u.gW.AVAILABLE && t && n
    },
    buildLayout: () => [_._]
});

function p() {
    let e = c.default.getCurrentUser();
    null != e && (null == e.phone ? (0, l.ZM)({
        reason: r.d.USER_SETTINGS_UPDATE,
        onAddedPhone: s.A.enableSMS
    }) : s.A.enableSMS())
}