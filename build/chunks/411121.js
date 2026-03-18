/** chunk id: 411121 params = (module,exports,require) **/
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
    m = n(869038),
    g = n(786144),
    A = n(587895),
    x = n(235986),
    h = n(769015),
    p = n(75825),
    T = n(871123),
    E = n(366523),
    S = n(961350),
    f = n(30793),
    C = n(351906),
    b = n(97352),
    N = n(67480),
    I = n(147925),
    v = n(957565),
    j = n(45938),
    y = n(615396),
    R = n(788868),
    O = n(985018),
    D = n(539785);
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
                return O.intl.string(O.t.XVvPjU);
            case _.qCr.ERROR:
                return O.intl.string(O.t.i4GM3L);
            default:
                return O.intl.string(O.t.OpuAlK)
        }
    }
    handleRevoke(e) {
        m.A.revokeGiftCode(e)
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
        return (0, i.jsxs)(x.A, {
            direction: x.A.Direction.VERTICAL,
            className: D.Gj,
            children: [(0, i.jsx)(_.e2O, {
                className: D.ph,
                value: (0, j.Zq)(t.code),
                text: this.copyButtonText,
                mode: n,
                supportsCopy: v.p5,
                hideMessage: e ? O.intl.string(O.t["0RLn47"]) : null,
                onCopy: this.handleCopy,
                buttonColor: u.XD.BRAND,
                buttonLook: u.pR.FILLED
            }), (0, i.jsxs)("div", {
                className: D.KB,
                children: [null != t.expiresAt ? (0, i.jsxs)(s.Fragment, {
                    children: [O.intl.format(O.t.ltVZcJ, {
                        hours: t.expiresAt.diff(o()(), "h")
                    }), " —\xa0"]
                }) : null, (0, i.jsx)(_.DUT, {
                    tag: "a",
                    onClick: () => this.handleRevoke(t.code),
                    children: O.intl.string(O.t.v6Yazx)
                })]
            })]
        })
    }
}
class P extends s.PureComponent {
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
        }), await m.A.createGiftCode(t, n, i), this.setState({
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
        (null == n || null == this._loadedAt || n < this._loadedAt) && i && m.A.fetchUserGiftCodesForSKU(e, t), this.setState({
            isOpen: !this.state.isOpen
        })
    };
    renderGiftIcon() {
        let {
            sku: e,
            giftStyle: t,
            application: n
        } = this.props;
        return (0, T.bF)(e) ? (0, i.jsx)(E.e, {
            shape: "square",
            sku: e,
            containerClassName: D.ez
        }) : null != t ? (0, i.jsx)(p.A, {
            giftStyle: t,
            className: D.ez,
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
            className: a()(D.Oc, D.ic),
            children: [(0, i.jsx)(h.A, {
                game: n,
                size: h.M.XSMALL,
                skuId: e.id,
                className: D._u
            }), O.intl.format(O.t["6plpZi"], {
                applicationName: n.name,
                copies: t.length
            })]
        }) : (0, i.jsx)("div", {
            className: D.Oc,
            children: O.intl.format(O.t.zMcvcA, {
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
        return e = s === R.FB ? O.intl.string(O.t.odsU6W) : s === R.Bu && null != n ? O.intl.formatToPlainString(n.interval === R.WT.MONTH ? O.t.uZjpiJ : O.t.bJW1EA, {
            skuName: t.name,
            intervalCount: n.intervalCount
        }) : null == n ? t.name : O.intl.formatToPlainString(n.interval === R.WT.MONTH ? O.t.rCJvqo : O.t.Vd3Iu8, {
            skuName: t.name,
            intervalCount: n.intervalCount
        }), (0, i.jsx)("div", {
            className: D.mO,
            children: e
        })
    }
    renderGenerateGiftCodeRow() {
        return (0, i.jsxs)(x.A, {
            justify: x.A.Justify.BETWEEN,
            align: x.A.Align.CENTER,
            className: D.pe,
            children: [(0, i.jsx)(_.Text, {
                variant: "text-md/normal",
                children: O.intl.string(O.t.lELyPj)
            }), (0, i.jsx)(_.Button, {
                variant: "primary",
                size: "sm",
                text: O.intl.string(O.t.Q3Qguo),
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
        return (0, i.jsxs)(g.A, {
            className: l,
            children: [(0, i.jsx)(_.DUT, {
                onClick: this.handleToggleOpen,
                className: D.Nr,
                onMouseEnter: () => this.setIsHovered(!0),
                onMouseLeave: () => this.setIsHovered(!1),
                children: (0, i.jsx)(g.A.Header, {
                    splashArtURL: t.getSplashURL(512),
                    children: (0, i.jsxs)("div", {
                        className: D.MY,
                        children: [(0, i.jsxs)(x.A, {
                            align: x.A.Align.CENTER,
                            children: [this.renderGiftIcon(), (0, i.jsxs)("div", {
                                className: D.TK,
                                children: [this.renderTitle(), this.renderSubtitle()]
                            })]
                        }), (0, i.jsx)(I.A, {
                            direction: d ? I.A.Directions.UP : I.A.Directions.DOWN,
                            className: D.eO
                        })]
                    })
                })
            }), d ? (0, i.jsx)(g.A.Body, {
                children: r ? (0, i.jsx)(_.y$y, {
                    className: D.u1
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
let G = d.Ay.connectStores([N.A, C.A, f.A, A.A, b.A, S.default], e => {
    let {
        skuId: t,
        subscriptionPlanId: n,
        giftStyle: i
    } = e, s = N.A.get(t);
    if (null == s) throw Error("SKU was unavailable while rendering gift.");
    let l = f.A.getForGifterSKUAndPlan(S.default.getId(), t, n).filter(e => !e.isClaimed).filter(e => e.giftStyle === i);
    return {
        sku: s,
        hideCodes: C.A.enabled,
        isFetching: f.A.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: f.A.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: A.A.getApplication(s.applicationId),
        subscriptionPlan: null != n ? (0, y.c9)(n) : null,
        giftCodes: l
    }
})(P)