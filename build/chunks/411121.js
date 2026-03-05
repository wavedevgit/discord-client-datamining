/** chunk id: 411121, original params: e,t,n (module,exports,require) **/
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
    _ = n(397927),
    g = n(869038),
    m = n(786144),
    A = n(587895),
    h = n(235986),
    p = n(769015),
    x = n(75825),
    E = n(871123),
    T = n(366523),
    S = n(961350),
    C = n(30793),
    f = n(351906),
    I = n(97352),
    b = n(67480),
    N = n(147925),
    v = n(957565),
    j = n(45938),
    O = n(615396),
    R = n(788868),
    y = n(985018),
    P = n(553551);
class L extends s.PureComponent {
    _copyModeTimeout = new c.Ep;
    state = {
        copyMode: _.qCr.DEFAULT
    };
    componentWillUnmount() {
        this._copyModeTimeout.stop()
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case _.qCr.SUCCESS:
                return y.intl.string(y.t.XVvPjU);
            case _.qCr.ERROR:
                return y.intl.string(y.t.i4GM3L);
            default:
                return y.intl.string(y.t.OpuAlK)
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
        (0, j.AK)(t, n), (0, v.C)(e, () => this.setState({
            copyMode: _.qCr.SUCCESS
        }), () => this.setState({
            copyMode: _.qCr.ERROR
        })), this._copyModeTimeout.start(1e3, () => {
            this.setState({
                copyMode: _.qCr.DEFAULT
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
        return (0, i.jsxs)(h.A, {
            direction: h.A.Direction.VERTICAL,
            className: P.Gj,
            children: [(0, i.jsx)(_.e2O, {
                className: P.ph,
                value: (0, j.Zq)(t.code),
                text: this.copyButtonText,
                mode: n,
                supportsCopy: v.p5,
                hideMessage: e ? y.intl.string(y.t["0RLn47"]) : null,
                onCopy: this.handleCopy,
                buttonColor: u.XD.BRAND,
                buttonLook: u.pR.FILLED
            }), (0, i.jsxs)("div", {
                className: P.KB,
                children: [null != t.expiresAt ? (0, i.jsxs)(s.Fragment, {
                    children: [y.intl.format(y.t.ltVZcJ, {
                        hours: t.expiresAt.diff(o()(), "h")
                    }), " —\xa0"]
                }) : null, (0, i.jsx)(_.DUT, {
                    tag: "a",
                    onClick: () => this.handleRevoke(t.code),
                    children: y.intl.string(y.t.v6Yazx)
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
        return (0, E.bF)(e) ? (0, i.jsx)(T.e, {
            shape: "square",
            sku: e,
            containerClassName: P.ez
        }) : null != t ? (0, i.jsx)(x.A, {
            giftStyle: t,
            className: P.ez,
            shouldAnimate: this.state.isHovered
        }) : (0, i.jsx)(p.A, {
            game: n,
            size: p.M.MEDIUM,
            skuId: e.id
        })
    }
    renderSubtitle() {
        let {
            sku: e,
            entitlements: t,
            application: n
        } = this.props;
        return (0, E.bF)(e) ? (0, i.jsxs)("div", {
            className: a()(P.Oc, P.ic),
            children: [(0, i.jsx)(p.A, {
                game: n,
                size: p.M.XSMALL,
                skuId: e.id,
                className: P._u
            }), y.intl.format(y.t["6plpZi"], {
                applicationName: n.name,
                copies: t.length
            })]
        }) : (0, i.jsx)("div", {
            className: P.Oc,
            children: y.intl.format(y.t.zMcvcA, {
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
        return e = s === R.FB ? y.intl.string(y.t.odsU6W) : s === R.Bu && null != n ? y.intl.formatToPlainString(n.interval === R.WT.MONTH ? y.t.uZjpiJ : y.t.bJW1EA, {
            skuName: t.name,
            intervalCount: n.intervalCount
        }) : null == n ? t.name : y.intl.formatToPlainString(n.interval === R.WT.MONTH ? y.t.rCJvqo : y.t.Vd3Iu8, {
            skuName: t.name,
            intervalCount: n.intervalCount
        }), (0, i.jsx)("div", {
            className: P.mO,
            children: e
        })
    }
    renderGenerateGiftCodeRow() {
        return (0, i.jsxs)(h.A, {
            justify: h.A.Justify.BETWEEN,
            align: h.A.Align.CENTER,
            className: P.pe,
            children: [(0, i.jsx)(_.Text, {
                variant: "text-md/normal",
                children: y.intl.string(y.t.lELyPj)
            }), (0, i.jsx)(_.Button, {
                variant: "primary",
                size: "sm",
                text: y.intl.string(y.t.Q3Qguo),
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
        return (0, i.jsxs)(m.A, {
            className: l,
            children: [(0, i.jsx)(_.DUT, {
                onClick: this.handleToggleOpen,
                className: P.Nr,
                onMouseEnter: () => this.setIsHovered(!0),
                onMouseLeave: () => this.setIsHovered(!1),
                children: (0, i.jsx)(m.A.Header, {
                    splashArtURL: t.getSplashURL(512),
                    children: (0, i.jsxs)("div", {
                        className: P.MY,
                        children: [(0, i.jsxs)(h.A, {
                            align: h.A.Align.CENTER,
                            children: [this.renderGiftIcon(), (0, i.jsxs)("div", {
                                className: P.TK,
                                children: [this.renderTitle(), this.renderSubtitle()]
                            })]
                        }), (0, i.jsx)(N.A, {
                            direction: d ? N.A.Directions.UP : N.A.Directions.DOWN,
                            className: P.eO
                        })]
                    })
                })
            }), d ? (0, i.jsx)(m.A.Body, {
                children: r ? (0, i.jsx)(_.y$y, {
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
let G = d.Ay.connectStores([b.A, f.A, C.A, A.A, I.A, S.default], e => {
    let {
        skuId: t,
        subscriptionPlanId: n,
        giftStyle: i
    } = e, s = b.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = C.A.getForGifterSKUAndPlan(S.default.getId(), t, n).filter(e => !e.isClaimed).filter(e => e.giftStyle === i);
    return {
        sku: s,
        hideCodes: f.A.enabled,
        isFetching: C.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: C.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: A.A.getApplication(s.applicationId),
        subscriptionPlan: null != n ? (0, O.c9)(n) : null,
        giftCodes: l
    }
})(D)