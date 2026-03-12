/** chunk id: 972982 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968),
    s = n(64700),
    l = n(284009),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    d = n(195043),
    c = n(359990),
    u = n(961350),
    _ = n(670492),
    m = n(287809),
    g = n(464477),
    A = n(709913),
    h = n(455611),
    x = n(858526),
    p = n(309198),
    T = n(978551),
    E = n(100817),
    C = n(531525);
class S extends s.PureComponent {
    renderEnabled() {
        let {
            backupCodes: e,
            hasTOTPEnabled: t,
            currentUser: n,
            togglingSMS: s
        } = this.props;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(A.A, {
                backupCodes: e,
                currentUser: n,
                hasTOTPEnabled: t
            }), e.length > 0 && (0, i.jsxs)(o.BJc, {
                gap: 16,
                children: [(0, i.jsx)(h.A, {
                    backupCodes: e
                }), (0, i.jsx)(o.cGx, {})]
            }), t && (0, i.jsx)(d.x, {
                setting: C.H.ACCOUNT_SMS_BACKUP,
                children: (0, i.jsx)(p.A, {
                    currentUser: n,
                    togglingSMS: s
                })
            }), (0, i.jsx)(d.x, {
                setting: C.H.ACCOUNT_SECURITY_KEYS,
                children: (0, i.jsx)(c.A, {})
            })]
        })
    }
    renderDisabled() {
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(x.A, {}), (0, i.jsx)(c.A, {})]
        })
    }
    render() {
        let {
            currentUser: e
        } = this.props;
        return g.K7 ? e.verified ? e.mfaEnabled ? this.renderEnabled() : this.renderDisabled() : (0, i.jsx)(E.A, {}) : (0, i.jsx)(T.A, {})
    }
}

function f(e) {
    let t = (0, a.bG)([m.default], () => m.default.getCurrentUser());
    r()(null != t, "TwoFactorAuth: currentUser cannot be undefined");
    let n = (0, a.cf)([_.A, u.default], () => ({
        togglingSMS: _.A.togglingSMS,
        hasTOTPEnabled: u.default.hasTOTPEnabled()
    }));
    return (0, i.jsx)(S, {
        currentUser: t,
        ...n,
        ...e
    })
}