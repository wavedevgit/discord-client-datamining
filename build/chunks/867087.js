/** chunk id: 867087, original params: t,e,s (module,exports,require) **/
s.d(e, {
    default: () => N
}), s(896048), s(65821);
var l = s(627968),
    n = s(64700),
    a = s(311907),
    i = s(397927),
    r = s(73153),
    h = s(356645),
    o = s(465842),
    d = s(628264),
    u = s(92077),
    c = s(953689),
    p = s(587895),
    A = s(235986),
    I = s(769015),
    g = s(976860),
    m = s(568004),
    _ = s(293066),
    f = s(775228),
    P = s(255438),
    C = s(980888),
    T = s(652215),
    S = s(985018),
    b = s(25327);

function y(t, e, s) {
    return e in t ? Object.defineProperty(t, e, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = s, t
}
class E extends n.Component {
    fetchInstallSize() {
        let {
            applicationId: t,
            branchId: e,
            buildId: s,
            manifestIds: l,
            buildSizeKB: n
        } = this.props;
        null != s && null != l && null == n && r.h.wait(() => {
            (0, o.K)(t, e, s, l)
        })
    }
    componentDidMount() {
        let {
            applicationId: t,
            branchId: e,
            buildId: s,
            manifestIds: l
        } = this.props;
        null == s || null == l ? (0, h.n)(t, e) : this.fetchInstallSize()
    }
    componentDidUpdate(t) {
        (this.props.buildId !== t.buildId || this.props.manifestIds !== t.manifestIds) && this.fetchInstallSize()
    }
    componentWillUnmount() {
        this.isUnmounted = !0
    }
    renderButton() {
        let {
            buildId: t
        } = this.props, {
            hasError: e,
            hasAcceptedNeccessaryTerms: s
        } = this.state;
        return (0, l.jsx)(i.Button, {
            variant: "active",
            text: S.intl.string(S.t.nL0WvC),
            disabled: e || null == t || !s,
            onClick: this.handleInstall
        })
    }
    render() {
        let {
            application: t,
            buildSizeKB: e,
            transitionState: s
        } = this.props, {
            selectedInstallationPath: n,
            isInstalling: a
        } = this.state, r = null != t && t.getSplashURL(440);
        return (0, l.jsxs)(i.EOs, {
            transitionState: s,
            size: i.rIJ.SMALL,
            "aria-label": S.intl.string(S.t.PphjtJ),
            parentComponent: "ApplicationInstallationModal",
            children: [null != r ? (0, l.jsx)("div", {
                className: b.Yi,
                style: {
                    backgroundImage: "url(".concat(r, ")")
                }
            }) : null, (0, l.jsxs)(i.rQ0, {
                justify: A.A.Justify.BETWEEN,
                children: [(0, l.jsx)(A.A.Child, {
                    grow: 1,
                    children: (0, l.jsx)(i.Heading, {
                        variant: "heading-lg/semibold",
                        children: S.intl.string(S.t.PphjtJ)
                    })
                }), (0, l.jsx)(A.A.Child, {
                    grow: 0,
                    children: (0, l.jsx)(i.s_y, {
                        onClick: this.close
                    })
                })]
            }), (0, l.jsxs)(i.$mQ, {
                children: [(0, l.jsxs)(A.A, {
                    align: A.A.Align.CENTER,
                    children: [(0, l.jsx)(I.A, {
                        game: t,
                        size: I.M.MEDIUM,
                        className: b.Gt
                    }), (0, l.jsx)("div", {
                        className: b.mO,
                        children: null != t && t.name
                    }), null != e ? (0, l.jsx)("div", {
                        className: b.hc,
                        children: (0, P.Xq)(e, {
                            useKibibytes: !0
                        })
                    }) : null]
                }), (0, l.jsx)("div", {
                    className: b.yF
                }), (0, l.jsx)(C.A, {
                    autoFocus: !0,
                    className: b.gD,
                    value: n,
                    requiredDiskKB: e,
                    onChange: this.handleChangePath
                }), (0, l.jsx)(c.A, {
                    eulaId: t.eulaId,
                    applicationName: t.name,
                    disabled: a,
                    onChange: this.handlePurchaseTermsChange,
                    className: b.a_
                })]
            }), (0, l.jsx)(i.jlY, {
                children: this.renderButton()
            })]
        })
    }
    constructor(...t) {
        super(...t), y(this, "state", {
            selectedInstallationPath: this.props.defaultInstallationPath,
            hasError: !1,
            isInstalling: !1,
            hasAcceptedNeccessaryTerms: !1
        }), y(this, "isUnmounted", !1), y(this, "handleChangePath", (t, e) => {
            this.setState({
                selectedInstallationPath: t,
                hasError: e
            })
        }), y(this, "install", (t, e) => {
            let {
                application: s,
                branchId: l,
                analyticsLocation: n
            } = this.props;
            if (null == s) return null;
            (0, u.oc)({
                application: s,
                branchId: l,
                buildId: t,
                manifestIds: e,
                installationPath: this.state.selectedInstallationPath,
                analyticsLocation: n
            }), (0, g.pX)(T.BVt.APPLICATION_LIBRARY), this.close()
        }), y(this, "handleInstall", () => {
            let {
                application: t,
                buildId: e,
                manifestIds: s,
                hasPreviouslyAcceptedStoreTerms: l
            } = this.props;
            if (null != e && null != s) l || (0, d.v)(), null != t && null != t.eulaId && (0, d.C)(t.eulaId), this.install(e, s);
            else throw Error("Unexpected missing build info for non-premium product")
        }), y(this, "handlePurchaseTermsChange", t => {
            this.setState({
                hasAcceptedNeccessaryTerms: t
            })
        }), y(this, "close", () => {
            this.props.onClose()
        })
    }
}
let N = a.Ay.connectStores([m.A, f.A, _.A, p.A], t => {
    let {
        applicationId: e,
        branchId: s
    } = t, l = m.A.getTargetBuildId(e, s);
    return {
        application: p.A.getApplication(e),
        defaultInstallationPath: f.A.defaultInstallationPath,
        buildId: l,
        manifestIds: m.A.getTargetManifests(e, s),
        buildSizeKB: null != l ? m.A.getBuildSize(l) : null,
        hasPreviouslyAcceptedStoreTerms: _.A.hasAcceptedStoreTerms
    }
})(E)