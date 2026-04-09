/** chunk id: 791767 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968);
n(64700);
var a = n(397927),
    l = n(73153),
    r = n(361158),
    s = n(80556),
    o = n(159329),
    d = n(163679),
    c = n(446868),
    u = n(524134),
    A = n(961350),
    h = n(287809),
    _ = n(536194),
    m = n(639719),
    g = n(652215),
    p = n(53516),
    E = n(87404),
    I = n(818348);
let f = {
    init() {
        l.h.subscribe("CONNECTION_OPEN", this.handleRequiredAction), l.h.subscribe("USER_REQUIRED_ACTION_UPDATE", this.handleRequiredAction), l.h.subscribe("CURRENT_USER_UPDATE", this.handleCurrentUserUpdate), A.default.addChangeListener(this.handleAuthenticationStoreChanged)
    },
    handleRequiredAction(e) {
        let t = e.requiredAction;
        !_.P.isDisallowPopupsSet() && null != h.default.getCurrentUser() && (t === g.a3B.REQUIRE_CAPTCHA || t === g.a3B.REQUIRE_VERIFIED_EMAIL || t === g.a3B.REQUIRE_VERIFIED_PHONE || t === g.a3B.REQUIRE_REVERIFIED_PHONE || t === g.a3B.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE || t === g.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === g.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE || c.A.isEmailReverification(t) ? (0, o.P3)({
            location: "verification-legacy"
        }) ? (0, r.B8)(e => {
            let {
                closeLayer: t
            } = e;
            return (0, i.jsx)(d.A, {
                onClose: t
            })
        }, {
            layerKey: E._s,
            Layer: s.Ay
        }) : (0, r.B8)(() => (0, i.jsx)(u.A, {}), {
            layerKey: E._s,
            Layer: s.Ay
        }) : t === g.a3B.AGREEMENTS ? (0, a.qfG)(e => (0, i.jsx)(m.default, {
            ...e
        }), {
            modalKey: E.i$,
            onCloseRequest: I.FX,
            dismissable: !1
        }) : t === g.a3B.REQUIRE_SAFETY_FLOWS ? (0, r.B8)(e => {
            let {
                closeLayer: t
            } = e;
            return (0, i.jsx)(d.A, {
                onClose: t
            })
        }, {
            layerKey: E._s,
            Layer: s.Ay
        }) : null == t && ((0, r.dF)(E._s), (0, a.kBI)(E.i$) && (0, a.OoC)(E.i$)))
    },
    handleAuthenticationStoreChanged() {
        null == A.default.getId() && ((0, r.dF)(E._s), (0, a.OoC)(E.i$), (0, a.OoC)(E.Pr), (0, a.OoC)(E.H1), (0, a.OoC)(p.V))
    },
    handleCurrentUserUpdate(e) {
        let {
            user: t
        } = e;
        t.verified && (0, a.OoC)(E.H1)
    }
}