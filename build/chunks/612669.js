/** chunk id: 612669, original params: e,t,i (module,exports,require) **/
i.d(t, {
    O9: () => I,
    PA: () => g,
    bf: () => S,
    o1: () => h
});
var n = i(311907),
    r = i(780964),
    l = i(840065),
    s = i(287809),
    a = i(166403),
    o = i(927578),
    u = i(427262),
    c = i(593032),
    d = i(788868),
    m = i(88001),
    p = i(652215),
    f = i(519412),
    _ = i(985018);
let h = e => {
        let t, i, {
                sender: n,
                channel: a,
                isSender: o,
                inviteState: c
            } = e,
            d = (0, m.DP)();
        if (o) {
            let e = ((e, t) => {
                var i;
                if (null == t) return null;
                let n = null == (i = t.recipients) ? void 0 : i.find(t => t !== e.id),
                    r = s.default.getUser(n);
                return null == r ? null : (0, u.$3)(r)
            })(n, a);
            if (null == e) return null;
            let o = _.intl.format(f.default.MkcFjx, {
                receiverName: e,
                premiumGroupProductName: d
            });
            switch (c) {
                case m.xI.ACCEPTED:
                    t = _.intl.formatToPlainString(f.default["5uwv8J"], {
                        premiumGroupProductName: d
                    }), i = _.intl.formatToPlainString(f.default["W7e/z1"], {
                        receiverName: e
                    });
                    break;
                case m.xI.REMOVED:
                case m.xI.NOT_FOUND:
                case m.xI.ERROR:
                    t = _.intl.formatToPlainString(f.default.YLvraS, {
                        premiumGroupProductName: d
                    }), i = _.intl.format(f.default.BHxlIR, {
                        premiumGroupProductName: d,
                        onClick: () => {
                            (0, l.openUserSettings)(r.X.SUBSCRIPTIONS_PANEL, {
                                section: p.nc_.SUBSCRIPTIONS
                            })
                        }
                    });
                    break;
                case m.xI.PENDING:
                default:
                    t = _.intl.formatToPlainString(f.default["5uwv8J"], {
                        premiumGroupProductName: d
                    }), i = _.intl.formatToPlainString(f.default["AmE0B/"], {
                        receiverName: e
                    })
            }
            return {
                message: o,
                header: t,
                body: i
            }
        } {
            let e = (0, u.$3)(n),
                r = _.intl.format(f.default["51Kv/4"], {
                    senderName: e,
                    premiumGroupProductName: d,
                    helpCenterLink: m.TE
                });
            switch (c) {
                case m.xI.ACCEPTED:
                    t = _.intl.string(f.default.ssge1y), i = _.intl.formatToPlainString(f.default.fTAcw3, {
                        senderName: e
                    });
                    break;
                case m.xI.REMOVED:
                case m.xI.NOT_FOUND:
                case m.xI.ERROR:
                    t = _.intl.formatToPlainString(f.default["AmLUw+"], {
                        premiumGroupProductName: d
                    }), i = _.intl.formatToPlainString(f.default["7XAuyg"], {
                        premiumGroupProductName: d
                    });
                    break;
                case m.xI.PENDING:
                default:
                    t = _.intl.string(f.default.ssge1y), i = _.intl.formatToPlainString(f.default.MkcdX8, {
                        senderName: e,
                        premiumGroupProductName: d
                    })
            }
            return {
                message: r,
                header: t,
                body: i
            }
        }
    },
    g = () => {
        var e;
        let t = (0, c.A)({
                location: "PremiumGroupPurchase"
            }),
            i = (0, n.bG)([a.A], () => a.A.getPremiumSubscription()),
            r = (0, n.bG)([s.default], () => s.default.getCurrentUser());
        return (null == r || !r.isPremiumWithFractionalPremiumOnly()) && !!t && (null == i || d.BL.has(null != (e = i.premiumPlanIdFromItems) ? e : "") && !i.isPurchasedExternally)
    },
    I = () => {
        let e = (0, c.A)({
                location: "PremiumGroupPurchase"
            }),
            t = g(),
            i = (0, n.bG)([s.default], () => s.default.getCurrentUser());
        return !!e && !!t && (null == i || !i.isPremiumWithPremiumGroup())
    },
    S = () => {
        let e = I(),
            t = (0, n.bG)([s.default], () => s.default.getCurrentUser());
        return e && ((0, o.TW)(t) || !(0, o.mv)(t))
    }