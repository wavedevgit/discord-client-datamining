/** chunk id: 709732 params = (module,exports,require) **/
n.d(t, {
    A: () => G
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(989349),
    o = n.n(r),
    d = n(311907),
    c = n(451988),
    u = n(421380),
    m = n(397927),
    g = n(869038),
    _ = n(786144),
    A = n(587895),
    x = n(235986),
    h = n(769015),
    p = n(75825),
    T = n(871123),
    f = n(366523),
    E = n(961350),
    S = n(30793),
    b = n(351906),
    C = n(97352),
    N = n(67480),
    v = n(147925),
    I = n(957565),
    j = n(45938),
    y = n(615396),
    O = n(788868),
    R = n(985018),
    P = n(508816);
class L extends s.PureComponent {
    _copyModeTimeout = new c.Ep;
    state = {
        copyMode: m.qCr.DEFAULT
    };
    componentWillUnmount() {
        this._copyModeTimeout.stop()
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case m.qCr.SUCCESS:
                return R.intl.string(R.t.XVvPjU);
            case m.qCr.ERROR:
                return R.intl.string(R.t.i4GM3L);
            default:
                return R.intl.string(R.t.OpuAlK)
        }
    }
    handleRevoke(e) {
        g.A.revokeGiftCode(e)
    }
    handleCopy = e => {
        let {
            giftCode: t,
            sku: n
        } = this.props;
        (0, j.AK)(t, n), (0, I.C)(e, () => this.setState({
            copyMode: m.qCr.SUCCESS
        }), () => this.setState({
            copyMode: m.qCr.ERROR
        })), this._copyModeTimeout.start(1e3, () => {
            this.setState({
                copyMode: m.qCr.DEFAULT
            })
        })
    };
    render() {
        let {
            hideCode: e,
            giftCode: t
        } = this.props, {
            copyMode: n
        } = this.state;
        return (0, i.jsxs)(x.A, {
            direction: x.A.Direction.VERTICAL,
            className: P.Gj,
            children: [(0, i.jsx)(m.e2O, {
                className: P.ph,
                value: (0, j.Zq)(t.code),
                text: this.copyButtonText,
                mode: n,
                supportsCopy: I.p5,
                hideMessage: e ? R.intl.string(R.t["0RLn47"]) : null,
                onCopy: this.handleCopy,
                buttonColor: u.XD.BRAND,
                buttonLook: u.pR.FILLED
            }), (0, i.jsxs)("div", {
                className: P.KB,
                children: [null != t.expiresAt ? (0, i.jsxs)(s.Fragment, {
                    children: [R.intl.format(R.t.ltVZcJ, {
                        hours: t.expiresAt.diff(o()(), "h")
                    }), " —\xa0"]
                }) : null, (0, i.jsx)(m.DUT, {
                    tag: "a",
                    onClick: () => this.handleRevoke(t.code),
                    children: R.intl.string(R.t.v6Yazx)
                })]
            })]
        })
    }
}
class D extends s.PureComponent {
    _loadedAt = null;
    state = {
        isOpen: !1,
        isCreating: !1,
        isHovered: !1
    };
    componentDidMount() {
        this._loadedAt = Date.now()
    }
    handleGenerateGiftCode = async e => {
        e.stopPropagation();
        let {
            skuId: t,
            subscriptionPlanId: n,
            giftStyle: i
        } = this.props;
        this.setState({
            isCreating: !0
        }), await g.A.createGiftCode(t, n, i), this.setState({
            isCreating: !1,
            isOpen: !0
        })
    };
    handleToggleOpen = () => {
        let {
            skuId: e,
            subscriptionPlanId: t,
            loadedAt: n
        } = this.props, i = !this.state.isOpen;
        (null == n || null == this._loadedAt || n < this._loadedAt) && i && g.A.fetchUserGiftCodesForSKU(e, t), this.setState({
            isOpen: !this.state.isOpen
        })
    };
    renderGiftIcon() {
        let {
            sku: e,
            giftStyle: t,
            application: n
        } = this.props;
        return (0, T.bF)(e) ? (0, i.jsx)(f.e, {
            shape: "square",
            sku: e,
            containerClassName: P.ez
        }) : null != t ? (0, i.jsx)(p.A, {
            giftStyle: t,
            className: P.ez,
            shouldAnimate: this.state.isHovered
        }) : (0, i.jsx)(h.A, {
            game: n,
            size: h.M.MEDIUM,
            skuId: e.id
        })
    }
    renderSubtitle() {
        let {
            sku: e,
            entitlements: t,
            application: n
        } = this.props;
        return (0, T.bF)(e) ? (0, i.jsxs)("div", {
            className: a()(P.Oc, P.ic),
            children: [(0, i.jsx)(h.A, {
                game: n,
                size: h.M.XSMALL,
                skuId: e.id,
                className: P._u
            }), R.intl.format(R.t["6plpZi"], {
                applicationName: n.name,
                copies: t.length
            })]
        }) : (0, i.jsx)("div", {
            className: P.Oc,
            children: R.intl.format(R.t.zMcvcA, {
                copies: t.length
            })
        })
    }
    renderTitle() {
        let e, {
            sku: t,
            subscriptionPlan: n,
            giftCodeBatchId: s
        } = this.props;
        return e = s === O.FB ? R.intl.string(R.t.odsU6W) : s === O.Bu && null != n ? R.intl.formatToPlainString(n.interval === O.WT.MONTH ? R.t.uZjpiJ : R.t.bJW1EA, {
            skuName: t.name,
            intervalCount: n.intervalCount
        }) : null == n ? t.name : R.intl.formatToPlainString(n.interval === O.WT.MONTH ? R.t.rCJvqo : R.t.Vd3Iu8, {
            skuName: t.name,
            intervalCount: n.intervalCount
        }), (0, i.jsx)("div", {
            className: P.mO,
            children: e
        })
    }
    renderGenerateGiftCodeRow() {
        return (0, i.jsxs)(x.A, {
            justify: x.A.Justify.BETWEEN,
            align: x.A.Align.CENTER,
            className: P.pe,
            children: [(0, i.jsx)(m.Text, {
                variant: "text-md/normal",
                children: R.intl.string(R.t.lELyPj)
            }), (0, i.jsx)(m.Button, {
                variant: "primary",
                size: "sm",
                text: R.intl.string(R.t.Q3Qguo),
                loading: this.state.isCreating,
                onClick: this.handleGenerateGiftCode
            })]
        })
    }
    setIsHovered(e) {
        this.setState({
            isHovered: e
        })
    }
    render() {
        let {
            entitlements: e,
            application: t,
            giftCodes: n,
            className: l,
            sku: a,
            isFetching: r,
            hideCodes: o
        } = this.props, {
            isOpen: d
        } = this.state;
        return (0, i.jsxs)(_.A, {
            className: l,
            children: [(0, i.jsx)(m.DUT, {
                onClick: this.handleToggleOpen,
                className: P.Nr,
                onMouseEnter: () => this.setIsHovered(!0),
                onMouseLeave: () => this.setIsHovered(!1),
                children: (0, i.jsx)(_.A.Header, {
                    splashArtURL: t.getSplashURL(512),
                    children: (0, i.jsxs)("div", {
                        className: P.MY,
                        children: [(0, i.jsxs)(x.A, {
                            align: x.A.Align.CENTER,
                            children: [this.renderGiftIcon(), (0, i.jsxs)("div", {
                                className: P.TK,
                                children: [this.renderTitle(), this.renderSubtitle()]
                            })]
                        }), (0, i.jsx)(v.A, {
                            direction: d ? v.A.Directions.UP : v.A.Directions.DOWN,
                            className: P.eO
                        })]
                    })
                })
            }), d ? (0, i.jsx)(_.A.Body, {
                children: r ? (0, i.jsx)(m.y$y, {
                    className: P.u1
                }) : (0, i.jsxs)(s.Fragment, {
                    children: [n.length < e.length ? this.renderGenerateGiftCodeRow() : null, n.map(e => (0, i.jsx)(L, {
                        giftCode: e,
                        sku: a,
                        hideCode: o
                    }, e.code))]
                })
            }) : null]
        })
    }
}
let G = d.Ay.connectStores([N.A, b.A, S.A, A.A, C.A, E.default], e => {
    let {
        skuId: t,
        subscriptionPlanId: n,
        giftStyle: i
    } = e, s = N.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = S.A.getForGifterSKUAndPlan(E.default.getId(), t, n).filter(e => !e.isClaimed).filter(e => e.giftStyle === i);
    return {
        sku: s,
        hideCodes: b.A.enabled,
        isFetching: S.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: S.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: A.A.getApplication(s.applicationId),
        subscriptionPlan: null != n ? (0, y.c9)(n) : null,
        giftCodes: l
    }
})(D)