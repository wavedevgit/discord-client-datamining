/** chunk id: 791767, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(73153),
    a = n(361158),
    s = n(80556),
    o = n(159329),
    c = n(163679),
    u = n(446868),
    d = n(524134),
    p = n(961350),
    h = n(287809),
    g = n(536194),
    f = n(639719),
    m = n(652215),
    A = n(53516),
    _ = n(87404),
    b = n(818348);
let E = {
    init() {
        l.h.subscribe("CONNECTION_OPEN", this.handleRequiredAction), l.h.subscribe("USER_REQUIRED_ACTION_UPDATE", this.handleRequiredAction), l.h.subscribe("CURRENT_USER_UPDATE", this.handleCurrentUserUpdate), p.default.addChangeListener(this.handleAuthenticationStoreChanged)
    },
    handleRequiredAction(e) {
        let t = e.requiredAction;
        !g.P.isDisallowPopupsSet() && null != h.default.getCurrentUser() && (t === m.a3B.REQUIRE_CAPTCHA || t === m.a3B.REQUIRE_VERIFIED_EMAIL || t === m.a3B.REQUIRE_VERIFIED_PHONE || t === m.a3B.REQUIRE_REVERIFIED_PHONE || t === m.a3B.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE || t === m.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === m.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE || u.A.isEmailReverification(t) ? (0, o.P3)({
            location: "verification-legacy"
        }) ? (0, a.B8)(e => {
            let {
                closeLayer: t
            } = e;
            return (0, r.jsx)(c.A, {
                onClose: t
            })
        }, {
            layerKey: _._s,
            Layer: s.Ay
        }) : (0, a.B8)(() => (0, r.jsx)(d.A, {}), {
            layerKey: _._s,
            Layer: s.Ay
        }) : t === m.a3B.AGREEMENTS ? (0, i.qfG)(e => (0, r.jsx)(f.default, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r;
                    r = n[t], t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r
                })
            }
            return e
        }({}, e)), {
            modalKey: _.i$,
            onCloseRequest: b.FX,
            dismissable: !1
        }) : t === m.a3B.REQUIRE_SAFETY_FLOWS ? (0, a.B8)(e => {
            let {
                closeLayer: t
            } = e;
            return (0, r.jsx)(c.A, {
                onClose: t
            })
        }, {
            layerKey: _._s,
            Layer: s.Ay
        }) : null == t && ((0, a.dF)(_._s), (0, i.kBI)(_.i$) && (0, i.OoC)(_.i$)))
    },
    handleAuthenticationStoreChanged() {
        null == p.default.getId() && ((0, a.dF)(_._s), (0, i.OoC)(_.i$), (0, i.OoC)(_.Pr), (0, i.OoC)(_.H1), (0, i.OoC)(A.V))
    },
    handleCurrentUserUpdate(e) {
        let {
            user: t
        } = e;
        t.verified && (0, i.OoC)(_.H1)
    }
}