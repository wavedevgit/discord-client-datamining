/** chunk id: 782844, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => B,
    D: () => U
});
var r, l = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(311907),
    c = n(397927),
    u = n(98207),
    d = n(631670),
    p = n(974544),
    h = n(772786),
    g = n(210742),
    f = n(195043),
    m = n(130771),
    b = n(576622),
    A = n(670492),
    y = n(351906),
    O = n(628965),
    j = n(287809),
    x = n(954571),
    _ = n(773669),
    v = n(544028),
    E = n(740625),
    C = n(524738),
    S = n(972982),
    I = n(36535),
    N = n(299116),
    T = n(433410),
    P = n(457684),
    w = n(998252),
    R = n(980172),
    D = n(531525),
    L = n(652215),
    M = n(985018),
    G = n(139674);

function k() {
    let e = (0, o.bG)([j.default], () => {
            let e = j.default.getCurrentUser();
            return a()(null != e, "SecuritySettingsTab: currentUser cannot be undefined"), e
        }),
        t = (0, o.bG)([A.A], () => A.A.getBackupCodes()),
        n = (0, h.g)(),
        {
            teams: r,
            loading: i
        } = (0, m.A)({
            refreshOnDepChange: !0
        });
    return (0, l.jsxs)(c.lVW, {
        children: [(0, l.jsxs)(f.x, {
            setting: D.H.ACCOUNT_PROFILE,
            children: [n && (0, l.jsx)(T.A, {}), (0, l.jsx)(w.A, {
                currentUser: e
            }), (0, l.jsx)(R.A, {})]
        }), (0, l.jsx)(f.x, {
            setting: D.H.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            children: (0, l.jsxs)(c.nVY, {
                className: G.PN,
                label: M.intl.string(M.t.pKSjEj),
                children: [e.mfaEnabled ? (0, l.jsx)(I.A, {}) : null, (0, l.jsx)(f.x, {
                    setting: D.H.ACCOUNT_CHANGE_PASSWORD,
                    children: (0, l.jsx)(N.A, {})
                }), (0, l.jsx)(f.x, {
                    setting: D.H.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                    children: (0, l.jsx)(S.A, {
                        backupCodes: t
                    })
                })]
            })
        }), (0, l.jsxs)(f.x, {
            setting: D.H.ACCOUNT_REMOVAL,
            children: [(0, l.jsx)(c.cGx, {}), (0, l.jsx)(P.A, {
                currentUser: e,
                userTeamsLoading: i,
                userTeams: r
            })]
        })]
    })
}
var U = ((r = {}).SECURITY = "SECURITY", r.STANDING = "STANDING", r);
class V extends i.PureComponent {
    componentDidMount() {
        let {
            currentUser: e
        } = this.props;
        (0, b.A)(e.id, e.getAvatarURL(void 0, 80))
    }
    componentWillUnmount() {
        u.A.clearBackupCodes(), (0, d.Uo)()
    }
    renderUnhidden() {
        let {
            subsection: e
        } = this.props;
        return (0, l.jsx)(E.R, {
            header: M.intl.string(M.t["JAIM/m"]),
            children: (0, l.jsx)(C.A, {
                parentSetting: D.H.ACCOUNT,
                settingsSection: L.nc_.ACCOUNT,
                panelClassName: G.SZ,
                onTabChange: e => {
                    x.default.track(L.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
                        target_tab_name: e === D.H.ACCOUNT_SECURITY_TAB ? "SECURITY" : "STANDING"
                    })
                },
                defaultTabIndex: "ACCOUNT_STANDING" === e ? 1 : void 0,
                tabs: [{
                    title: M.intl.string(M.t.Am9YHi),
                    component: k,
                    setting: D.H.ACCOUNT_SECURITY_TAB
                }, {
                    title: M.intl.string(M.t["Vov/9o"]),
                    component: g.A,
                    setting: D.H.PRIVACY_AND_SAFETY_STANDING
                }]
            })
        })
    }
    render() {
        return this.props.hide ? (0, l.jsx)(p.A, {}) : this.renderUnhidden()
    }
}
let B = () => {
    let e = (0, o.bG)([j.default], () => j.default.getCurrentUser()),
        t = (0, o.bG)([y.A], () => y.A.hidePersonalInformation),
        n = (0, o.bG)([v.A], () => v.A.theme),
        r = (0, o.bG)([_.default], () => _.default.locale),
        i = (0, o.bG)([O.A], () => O.A.getSubsection());
    return null == e ? null : (0, l.jsx)(V, {
        theme: n,
        currentUser: e,
        hide: t,
        locale: r,
        subsection: i
    })
}