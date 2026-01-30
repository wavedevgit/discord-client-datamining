/** chunk id: 782844, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => H,
    D: () => M
});
var i, l = n(627968),
    s = n(64700),
    r = n(284009),
    a = n.n(r),
    o = n(311907),
    c = n(397927),
    d = n(98207),
    u = n(631670),
    h = n(974544),
    g = n(772786),
    x = n(210742),
    p = n(195043),
    m = n(130771),
    A = n(576622),
    b = n(670492),
    j = n(351906),
    O = n(628965),
    E = n(287809),
    S = n(954571),
    f = n(773669),
    C = n(544028),
    v = n(740625),
    y = n(524738),
    T = n(972982),
    _ = n(36535),
    N = n(299116),
    I = n(433410),
    P = n(457684),
    R = n(998252),
    L = n(980172),
    G = n(531525),
    D = n(652215),
    k = n(985018),
    w = n(139674);

function V() {
    let e = (0, o.bG)([E.default], () => {
            let e = E.default.getCurrentUser();
            return a()(null != e, "SecuritySettingsTab: currentUser cannot be undefined"), e
        }),
        t = (0, o.bG)([b.A], () => b.A.getBackupCodes()),
        n = (0, g.g)(),
        {
            teams: i,
            loading: s
        } = (0, m.A)({
            refreshOnDepChange: !0
        });
    return (0, l.jsxs)(c.lVW, {
        children: [(0, l.jsxs)(p.x, {
            setting: G.H.ACCOUNT_PROFILE,
            children: [n && (0, l.jsx)(I.A, {}), (0, l.jsx)(R.A, {
                currentUser: e
            }), (0, l.jsx)(L.A, {})]
        }), (0, l.jsx)(p.x, {
            setting: G.H.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            children: (0, l.jsxs)(c.nVY, {
                className: w.PN,
                label: k.intl.string(k.t.pKSjEj),
                children: [e.mfaEnabled ? (0, l.jsx)(_.A, {}) : null, (0, l.jsx)(p.x, {
                    setting: G.H.ACCOUNT_CHANGE_PASSWORD,
                    children: (0, l.jsx)(N.A, {})
                }), (0, l.jsx)(p.x, {
                    setting: G.H.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                    children: (0, l.jsx)(T.A, {
                        backupCodes: t
                    })
                })]
            })
        }), (0, l.jsxs)(p.x, {
            setting: G.H.ACCOUNT_REMOVAL,
            children: [(0, l.jsx)(c.cGx, {}), (0, l.jsx)(P.A, {
                currentUser: e,
                userTeamsLoading: s,
                userTeams: i
            })]
        })]
    })
}
var M = ((i = {}).SECURITY = "SECURITY", i.STANDING = "STANDING", i);
class U extends s.PureComponent {
    componentDidMount() {
        let {
            currentUser: e
        } = this.props;
        (0, A.A)(e.id, e.getAvatarURL(void 0, 80))
    }
    componentWillUnmount() {
        d.A.clearBackupCodes(), (0, u.Uo)()
    }
    renderUnhidden() {
        let {
            subsection: e
        } = this.props;
        return (0, l.jsx)(v.R, {
            header: k.intl.string(k.t["JAIM/m"]),
            children: (0, l.jsx)(y.A, {
                parentSetting: G.H.ACCOUNT,
                settingsSection: D.nc_.ACCOUNT,
                panelClassName: w.SZ,
                onTabChange: e => {
                    S.default.track(D.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
                        target_tab_name: e === G.H.ACCOUNT_SECURITY_TAB ? "SECURITY" : "STANDING"
                    })
                },
                defaultTabIndex: "ACCOUNT_STANDING" === e ? 1 : void 0,
                tabs: [{
                    title: k.intl.string(k.t.Am9YHi),
                    component: V,
                    setting: G.H.ACCOUNT_SECURITY_TAB
                }, {
                    title: k.intl.string(k.t["Vov/9o"]),
                    component: x.A,
                    setting: G.H.PRIVACY_AND_SAFETY_STANDING
                }]
            })
        })
    }
    render() {
        return this.props.hide ? (0, l.jsx)(h.A, {}) : this.renderUnhidden()
    }
}
let H = () => {
    let e = (0, o.bG)([E.default], () => E.default.getCurrentUser()),
        t = (0, o.bG)([j.A], () => j.A.hidePersonalInformation),
        n = (0, o.bG)([C.A], () => C.A.theme),
        i = (0, o.bG)([f.default], () => f.default.locale),
        s = (0, o.bG)([O.A], () => O.A.getSubsection());
    return null == e ? null : (0, l.jsx)(U, {
        theme: n,
        currentUser: e,
        hide: t,
        locale: i,
        subsection: s
    })
}