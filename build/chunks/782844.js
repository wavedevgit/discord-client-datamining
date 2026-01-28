/** Chunk was on 60449 **/
/** chunk id: 782844, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => H,
    D: () => w
});
var i, s = n(627968),
    l = n(64700),
    r = n(284009),
    a = n.n(r),
    o = n(311907),
    c = n(397927),
    d = n(98207),
    u = n(631670),
    g = n(974544),
    h = n(772786),
    x = n(210742),
    A = n(195043),
    p = n(130771),
    m = n(576622),
    j = n(670492),
    O = n(351906),
    E = n(628965),
    b = n(287809),
    S = n(954571),
    v = n(773669),
    C = n(544028),
    f = n(740625),
    T = n(524738),
    N = n(972982),
    _ = n(36535),
    I = n(299116),
    y = n(433410),
    D = n(457684),
    G = n(998252),
    P = n(980172),
    R = n(531525),
    V = n(652215),
    L = n(985018),
    k = n(139674);

function M() {
    let e = (0, o.bG)([b.default], () => {
            let e = b.default.getCurrentUser();
            return a()(null != e, "SecuritySettingsTab: currentUser cannot be undefined"), e
        }),
        t = (0, o.bG)([j.A], () => j.A.getBackupCodes()),
        n = (0, h.g)(),
        {
            teams: i,
            loading: l
        } = (0, p.A)({
            refreshOnDepChange: !0
        });
    return (0, s.jsxs)(c.lVW, {
        children: [(0, s.jsxs)(A.x, {
            setting: R.H.ACCOUNT_PROFILE,
            children: [n && (0, s.jsx)(y.A, {}), (0, s.jsx)(G.A, {
                currentUser: e
            }), (0, s.jsx)(P.A, {})]
        }), (0, s.jsx)(A.x, {
            setting: R.H.ACCOUNT_PASSWORD_AND_AUTHENTICATION,
            children: (0, s.jsxs)(c.nVY, {
                className: k.PN,
                label: L.intl.string(L.t.pKSjEj),
                children: [e.mfaEnabled ? (0, s.jsx)(_.A, {}) : null, (0, s.jsx)(A.x, {
                    setting: R.H.ACCOUNT_CHANGE_PASSWORD,
                    children: (0, s.jsx)(I.A, {})
                }), (0, s.jsx)(A.x, {
                    setting: R.H.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                    children: (0, s.jsx)(N.A, {
                        backupCodes: t
                    })
                })]
            })
        }), (0, s.jsxs)(A.x, {
            setting: R.H.ACCOUNT_REMOVAL,
            children: [(0, s.jsx)(c.cGx, {}), (0, s.jsx)(D.A, {
                currentUser: e,
                userTeamsLoading: l,
                userTeams: i
            })]
        })]
    })
}
var w = ((i = {}).SECURITY = "SECURITY", i.STANDING = "STANDING", i);
class U extends l.PureComponent {
    componentDidMount() {
        let {
            currentUser: e
        } = this.props;
        (0, m.A)(e.id, e.getAvatarURL(void 0, 80))
    }
    componentWillUnmount() {
        d.A.clearBackupCodes(), (0, u.Uo)()
    }
    renderUnhidden() {
        let {
            subsection: e
        } = this.props;
        return (0, s.jsx)(f.R, {
            header: L.intl.string(L.t["JAIM/m"]),
            children: (0, s.jsx)(T.A, {
                parentSetting: R.H.ACCOUNT,
                settingsSection: V.nc_.ACCOUNT,
                panelClassName: k.SZ,
                onTabChange: e => {
                    S.default.track(V.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
                        target_tab_name: e === R.H.ACCOUNT_SECURITY_TAB ? "SECURITY" : "STANDING"
                    })
                },
                defaultTabIndex: "ACCOUNT_STANDING" === e ? 1 : void 0,
                tabs: [{
                    title: L.intl.string(L.t.Am9YHi),
                    component: M,
                    setting: R.H.ACCOUNT_SECURITY_TAB
                }, {
                    title: L.intl.string(L.t["Vov/9o"]),
                    component: x.A,
                    setting: R.H.PRIVACY_AND_SAFETY_STANDING
                }]
            })
        })
    }
    render() {
        return this.props.hide ? (0, s.jsx)(g.A, {}) : this.renderUnhidden()
    }
}
let H = () => {
    let e = (0, o.bG)([b.default], () => b.default.getCurrentUser()),
        t = (0, o.bG)([O.A], () => O.A.hidePersonalInformation),
        n = (0, o.bG)([C.A], () => C.A.theme),
        i = (0, o.bG)([v.default], () => v.default.locale),
        l = (0, o.bG)([E.A], () => E.A.getSubsection());
    return null == e ? null : (0, s.jsx)(U, {
        theme: n,
        currentUser: e,
        hide: t,
        locale: i,
        subsection: l
    })
}