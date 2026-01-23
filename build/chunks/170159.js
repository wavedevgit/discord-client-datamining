/** Chunk was on 86142 **/
/** chunk id: 170159, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => L
}), n(747238), n(896048), n(65821);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(311907),
    o = n(397927),
    c = n(73153),
    u = n(830215),
    d = n(869038),
    h = n(110782),
    p = n(803306),
    g = n(854378),
    m = n(10088),
    f = n(871123),
    _ = n(210714),
    A = n(961350),
    x = n(650048),
    E = n(30793),
    v = n(189081),
    j = n(67480),
    y = n(45938),
    b = n(975571),
    S = n(427262),
    I = n(161928),
    N = n(129851),
    O = n(229),
    C = n(652215),
    T = n(985018),
    R = n(473169);

function w(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
a.Ay.initialize();
class P extends i.PureComponent {
    componentDidMount() {
        let {
            authenticated: e,
            isResolved: t
        } = this.props;
        e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, _.d)("gift_code")
    }
    componentDidUpdate(e) {
        let {
            authenticated: t,
            isResolved: n
        } = this.props;
        n || c.h.wait(() => {
            this.resolveGiftCode()
        }), t && !e.authenticated && this.handleAuthenticated(), !t && e.authenticated && this.setState({
            currentUser: null
        })
    }
    handleAuthenticated() {
        let {
            currentUser: e
        } = this.state;
        h.Yq(), null == e && this.refreshUser()
    }
    get requiresVerification() {
        let {
            currentUser: e
        } = this.state;
        return null != e && !e.verified
    }
    getCode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.match.params.giftCode
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.login ? "login" : "register"
    }
    getErrorMessage(e) {
        let {
            libraryApplication: t,
            sku: n
        } = this.props, {
            error: r
        } = this.state, i = null != r ? r.code : null;
        return i === C.t02.INVALID_GIFT_SELF_REDEMPTION ? T.intl.string(T.t.wa9h7F) : i === C.t02.INVALID_GIFT_REDEMPTION_OWNED && (null == n ? void 0 : n.productLine) === C.EZt.COLLECTIBLES ? T.intl.string(T.t.mdLtb5) : null != t || i === C.t02.INVALID_GIFT_REDEMPTION_OWNED ? T.intl.format(T.t.PIdmg3, {
            libraryLink: C.BVt.APPLICATION_LIBRARY
        }) : e.isClaimed || i === C.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED ? T.intl.string(T.t.ilcBeX) : i === C.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED ? T.intl.string(T.t.ypuSd8) : void 0
    }
    renderSpinner(e) {
        return (0, r.jsxs)(g.Ay, {
            children: [(0, r.jsx)(g.hE, {
                children: e
            }), (0, r.jsx)(g.CK, {})]
        })
    }
    renderExpiredInvite() {
        let {
            defaultRoute: e,
            transitionTo: t
        } = this.props;
        return (0, r.jsxs)(g.Ay, {
            children: [(0, r.jsx)(g._V, {
                src: n(428721),
                className: R.QB
            }), (0, r.jsx)(g.hE, {
                className: l()(R.Ot, R.QB),
                children: T.intl.string(T.t.KPowgn)
            }), (0, r.jsx)(g.tK, {
                children: T.intl.string(T.t.j8734b)
            }), (0, r.jsx)("div", {
                className: l()(R.eT, R.QB),
                children: (0, r.jsx)(o.Button, {
                    text: T.intl.string(T.t.fIv16B),
                    fullWidth: !0,
                    onClick: () => t(e)
                })
            }), (0, r.jsx)(o.QWc, {
                text: T.intl.string(T.t["/CjuXF"]),
                textVariant: "text-sm/normal",
                onClick: () => window.open(b.A.getArticleURL(C.MVz.GIFTING), "_blank")
            })]
        })
    }
    renderAppOpened() {
        return (0, r.jsxs)(g.Ay, {
            children: [(0, r.jsx)(g.hE, {
                className: R.QB,
                children: T.intl.string(T.t.csrAMJ)
            }), (0, r.jsx)(g.tK, {
                children: T.intl.string(T.t["m1+IBn"])
            }), (0, r.jsx)("div", {
                className: R.eT,
                children: (0, r.jsx)(o.Button, {
                    text: T.intl.string(T.t["qsI+EH"]),
                    fullWidth: !0,
                    onClick: () => this.setState({
                        continueOnWeb: !0
                    })
                })
            })]
        })
    }
    renderVerification(e) {
        let {
            sentVerification: t
        } = this.state;
        return (0, r.jsxs)(g.Ay, {
            children: [(0, r.jsx)(g._V, {
                src: n(792525),
                className: R.QB
            }), (0, r.jsx)(g.hE, {
                children: T.intl.format(T.t["ivLUf/"], {
                    username: e.username
                })
            }), (0, r.jsx)(g.tK, {
                className: R.QX,
                children: T.intl.string(T.t["8Su18+"])
            }), (0, r.jsx)("div", {
                className: R.eT,
                children: (0, r.jsx)(o.Button, {
                    text: t ? T.intl.string(T.t.CMa9Rv) : T.intl.string(T.t.lm1UKt),
                    fullWidth: !0,
                    disabled: t,
                    onClick: this.handleResendVerification
                })
            }), (0, r.jsx)("div", {
                className: R.Ot,
                children: (0, r.jsx)(o.QWc, {
                    text: T.intl.string(T.t.Po9eBQ),
                    textVariant: "text-sm/normal",
                    onClick: this.refreshUser
                })
            })]
        })
    }
    renderAuthenticated(e, t, n) {
        let {
            transitionTo: i
        } = this.props, s = this.getErrorMessage(e);
        return (0, r.jsx)(k, {
            sku: n,
            giftCodeCode: e.code,
            transitionTo: i,
            children: (0, r.jsxs)(g.Ay, {
                children: [(0, r.jsx)(I.A, {
                    giftCode: e
                }), (0, r.jsx)("div", {
                    className: R.eT,
                    children: (0, r.jsx)(o.Button, {
                        text: T.intl.string(T.t.n6I6k4),
                        fullWidth: !0,
                        disabled: null != s,
                        onClick: this.handleAccept
                    })
                }), null != s ? (0, r.jsx)(g.tK, {
                    className: R.QX,
                    children: s
                }) : (0, r.jsx)(g.ME, {
                    className: R.QX,
                    children: T.intl.format(T.t.NYM08s, {
                        userTag: S.Ay.getUserTag(t),
                        onLogoutClick: this.handleLogout
                    })
                })]
            })
        })
    }
    render() {
        let {
            nativeAppState: e,
            sku: t,
            authenticated: n,
            giftCode: i,
            isResolved: s,
            isAccepting: l,
            transitionTo: a,
            location: o
        } = this.props, {
            fetchingUser: c,
            continueOnWeb: u
        } = this.state;
        if (e === C.fAW.OPEN && !u) return this.renderAppOpened();
        if (e === C.fAW.OPENING) return this.renderSpinner(T.intl.string(T.t["Z+hCVU"]));
        if (l) return this.renderSpinner(T.intl.string(T.t.bhJseN));
        if (null == i) return s ? this.renderExpiredInvite() : this.renderSpinner(T.intl.string(T.t.b3lf1c));
        if (s) {
            if (n) {
                let e = this.state.currentUser;
                return c || null == e ? this.renderSpinner(T.intl.string(T.t.bYb2nS)) : this.requiresVerification && null != e ? this.renderVerification(e) : this.renderAuthenticated(i, e, t)
            }
            return "login" === this.getMode() ? (0, r.jsx)(N.A, {
                giftCodeSKU: t,
                giftCode: i,
                transitionTo: a,
                location: o
            }) : (0, r.jsx)(O.A, {
                giftCodeSKU: t,
                giftCode: i,
                transitionTo: a,
                location: o
            })
        }
        return null
    }
    constructor(...e) {
        super(...e), w(this, "state", {
            error: null,
            continueOnWeb: !1,
            currentUser: null,
            sentVerification: !1,
            fetchingUser: !1
        }), w(this, "refreshUser", () => {
            this.setState({
                fetchingUser: !0
            }), p.rQ({
                withAnalyticsToken: !0
            }).then(e => this.setState({
                currentUser: e,
                fetchingUser: !1
            })).catch(() => this.setState({
                fetchingUser: !1
            }))
        }), w(this, "handleLogout", () => {
            let e = this.props.match.params.giftCode;
            u.A.logout("gift_code", C.BVt.GIFT_CODE_LOGIN(e))
        }), w(this, "handleResendVerification", () => {
            u.A.verifyResend(), this.setState({
                sentVerification: !0
            })
        }), w(this, "handleAccept", async () => {
            let {
                transitionTo: e,
                giftCode: t
            } = this.props;
            if (null == t) throw Error("Trying to accept gift before resolve");
            let n = this.getCode();
            try {
                this.setState({
                    error: null
                }), await d.A.redeemGiftCode({
                    code: n
                }), e(C.BVt.APP)
            } catch (e) {
                this.setState({
                    error: e
                })
            }
        }), w(this, "resolveGiftCode", () => {
            let {
                transitionTo: e
            } = this.props, t = this.getCode();
            d.A.resolveGiftCode(t, !0, !0).then(n => {
                null != n && null != n.giftCode.promotion && e(C.BVt.BILLING_PROMOTION_REDEMPTION(t))
            })
        })
    }
}
let L = a.Ay.connectStores([E.A, v.A, A.default, j.A, x.A, m.A], e => {
        let t = e.match.params.giftCode,
            n = E.A.get(t),
            r = null != n ? j.A.get(n.skuId) : null;
        return {
            giftCode: n,
            sku: r,
            libraryApplication: null != r && (null == n ? void 0 : n.entitlementBranches) != null ? y.YI(n.entitlementBranches, r, v.A) : null,
            authenticated: A.default.isAuthenticated(),
            defaultRoute: x.A.defaultRoute,
            isResolved: E.A.getIsResolved(t),
            isAccepting: E.A.getIsAccepting(t),
            libraryApplicationsFetched: v.A.fetched,
            nativeAppState: m.A.getState(t)
        }
    })(P),
    k = e => {
        let {
            sku: t,
            children: n,
            giftCodeCode: s,
            transitionTo: l
        } = e, a = (0, f.bF)(t);
        return (i.useEffect(() => {
            null != s && a && l(C.BVt.APP_WITH_GIFT_CODE(s))
        }, [a, s, l]), a) ? (0, r.jsxs)(g.Ay, {
            children: [(0, r.jsx)(g.hE, {
                children: T.intl.string(T.t.b3lf1c)
            }), (0, r.jsx)(g.CK, {})]
        }) : n
    }