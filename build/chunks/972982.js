/** chunk id: 972982 params = (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(195043),
    c = n(359990),
    u = n(961350),
    _ = n(670492),
    g = n(287809),
    A = n(464477),
    m = n(709913),
    h = n(455611),
    p = n(858526),
    x = n(309198),
    E = n(978551),
    T = n(100817),
    S = n(531525);
class C extends s.PureComponent {
    renderEnabled() {
        let {
            backupCodes: e,
            hasTOTPEnabled: t,
            currentUser: n,
            togglingSMS: s
        } = this.props;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(m.A, {
                backupCodes: e,
                currentUser: n,
                hasTOTPEnabled: t
            }), e.length > 0 && (0, i.jsxs)(o.BJc, {
                gap: 16,
                children: [(0, i.jsx)(h.A, {
                    backupCodes: e
                }), (0, i.jsx)(o.cGx, {})]
            }), t && (0, i.jsx)(d.x, {
                setting: S.H.ACCOUNT_SMS_BACKUP,
                children: (0, i.jsx)(x.A, {
                    currentUser: n,
                    togglingSMS: s
                })
            }), (0, i.jsx)(d.x, {
                setting: S.H.ACCOUNT_SECURITY_KEYS,
                children: (0, i.jsx)(c.A, {})
            })]
        })
    }
    renderDisabled() {
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(p.A, {}), (0, i.jsx)(c.A, {})]
        })
    }
    render() {
        let {
            currentUser: e
        } = this.props;
        return A.K7 ? e.verified ? e.mfaEnabled ? this.renderEnabled() : this.renderDisabled() : (0, i.jsx)(T.A, {}) : (0, i.jsx)(E.A, {})
    }
}

function I(e) {
    let t = (0, r.bG)([g.default], () => g.default.getCurrentUser());
    a()(null != t, "TwoFactorAuth: currentUser cannot be undefined");
    let n = (0, r.cf)([_.A, u.default], () => ({
        togglingSMS: _.A.togglingSMS,
        hasTOTPEnabled: u.default.hasTOTPEnabled()
    }));
    return (0, i.jsx)(C, {
        currentUser: t,
        ...n,
        ...e
    })
}