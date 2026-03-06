/** chunk id: 782844 params = (module,exports,require) **/
n.d(t, {
    A: () => V,
    D: () => U
});
var i, s = n(627968),
    l = n(64700),
    a = n(284009),
    r = n.n(a),
    o = n(311907),
    d = n(397927),
    c = n(98207),
    u = n(631670),
    _ = n(974544),
    g = n(210742),
    m = n(195043),
    A = n(130771),
    h = n(576622),
    p = n(670492),
    x = n(351906),
    E = n(628965),
    T = n(287809),
    S = n(954571),
    C = n(773669),
    f = n(544028),
    I = n(740625),
    b = n(524738),
    N = n(972982),
    v = n(36535),
    j = n(299116),
    O = n(457684),
    R = n(998252),
    y = n(980172),
    P = n(531525),
    D = n(652215),
    L = n(985018),
    G = n(221432);

function M() {
    let e = (0, o.bG)([T.default], () => {
            let e = T.default.getCurrentUser();
            return r()(null != e, "SecuritySettingsTab: currentUser cannot be undefined"), e
        }),
        t = (0, o.bG)([p.A], () => p.A.getBackupCodes()),
        {
            teams: n,
            loading: i
        } = (0, A.A)({
            refreshOnDepChange: !0
        });
    return (0, s.jsxs)(d.lVW, {
        children: [(0, s.jsxs)(m.x, {
            setting: P.H.ACCOUNT_PROFILE,
            children: [(0, s.jsx)(R.A, {
                currentUser: e
            }), (0, s.jsx)(y.A, {
                currentUser: e
            })]
        }), (0, s.jsx)(m.x, {
            setting: P.H.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            children: (0, s.jsxs)(d.nVY, {
                className: G.PN,
                label: L.intl.string(L.t.pKSjEj),
                children: [e.mfaEnabled ? (0, s.jsx)(v.A, {}) : null, (0, s.jsx)(m.x, {
                    setting: P.H.ACCOUNT_CHANGE_PASSWORD,
                    children: (0, s.jsx)(j.A, {})
                }), (0, s.jsx)(m.x, {
                    setting: P.H.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                    children: (0, s.jsx)(N.A, {
                        backupCodes: t
                    })
                })]
            })
        }), (0, s.jsxs)(m.x, {
            setting: P.H.ACCOUNT_REMOVAL,
            children: [(0, s.jsx)(d.cGx, {}), (0, s.jsx)(O.A, {
                currentUser: e,
                userTeamsLoading: i,
                userTeams: n
            })]
        })]
    })
}
var U = ((i = {}).SECURITY = "SECURITY", i.STANDING = "STANDING", i);
class k extends l.PureComponent {
    componentDidMount() {
        let {
            currentUser: e
        } = this.props;
        (0, h.A)(e.id, e.getAvatarURL(void 0, 80))
    }
    componentWillUnmount() {
        c.A.clearBackupCodes(), (0, u.Uo)()
    }
    renderUnhidden() {
        let {
            subsection: e
        } = this.props;
        return (0, s.jsx)(I.R, {
            header: L.intl.string(L.t["JAIM/m"]),
            children: (0, s.jsx)(b.A, {
                parentSetting: P.H.ACCOUNT,
                settingsSection: D.nc_.ACCOUNT,
                panelClassName: G.SZ,
                onTabChange: e => {
                    S.default.track(D.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
                        target_tab_name: e === P.H.ACCOUNT_SECURITY_TAB ? "SECURITY" : "STANDING"
                    })
                },
                defaultTabIndex: "ACCOUNT_STANDING" === e ? 1 : void 0,
                tabs: [{
                    title: L.intl.string(L.t.Am9YHi),
                    component: M,
                    setting: P.H.ACCOUNT_SECURITY_TAB
                }, {
                    title: L.intl.string(L.t["Vov/9o"]),
                    component: g.A,
                    setting: P.H.PRIVACY_AND_SAFETY_STANDING
                }]
            })
        })
    }
    render() {
        return this.props.hide ? (0, s.jsx)(_.A, {}) : this.renderUnhidden()
    }
}
let V = () => {
    let e = (0, o.bG)([T.default], () => T.default.getCurrentUser()),
        t = (0, o.bG)([x.A], () => x.A.hidePersonalInformation),
        n = (0, o.bG)([f.A], () => f.A.theme),
        i = (0, o.bG)([C.default], () => C.default.locale),
        l = (0, o.bG)([E.A], () => E.A.getSubsection());
    return null == e ? null : (0, s.jsx)(k, {
        theme: n,
        currentUser: e,
        hide: t,
        locale: i,
        subsection: l
    })
}