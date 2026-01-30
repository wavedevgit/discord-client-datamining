/** chunk id: 612669, original params: e,r,a (module,exports,require) **/
a.d(r, {
    O9: () => x,
    PA: () => C,
    bf: () => g,
    o1: () => b
});
var t = a(311907),
    i = a(780964),
    d = a(840065),
    n = a(287809),
    _ = a(166403),
    o = a(927578),
    l = a(427262),
    u = a(593032),
    m = a(788868),
    f = a(88001),
    p = a(652215),
    s = a(519412),
    c = a(985018);
let b = e => {
        let r, a, {
                sender: t,
                channel: _,
                isSender: o,
                inviteState: u
            } = e,
            m = (0, f.DP)();
        if (o) {
            let e = ((e, r) => {
                var a;
                if (null == r) return null;
                let t = null == (a = r.recipients) ? void 0 : a.find(r => r !== e.id),
                    i = n.default.getUser(t);
                return null == i ? null : (0, l.$3)(i)
            })(t, _);
            if (null == e) return null;
            let o = c.intl.format(s.default.MkcFjx, {
                receiverName: e,
                premiumGroupProductName: m
            });
            switch (u) {
                case f.xI.ACCEPTED:
                    r = c.intl.formatToPlainString(s.default["5uwv8J"], {
                        premiumGroupProductName: m
                    }), a = c.intl.formatToPlainString(s.default["W7e/z1"], {
                        receiverName: e
                    });
                    break;
                case f.xI.REMOVED:
                case f.xI.NOT_FOUND:
                case f.xI.ERROR:
                    r = c.intl.formatToPlainString(s.default.YLvraS, {
                        premiumGroupProductName: m
                    }), a = c.intl.format(s.default.BHxlIR, {
                        premiumGroupProductName: m,
                        onClick: () => {
                            (0, d.openUserSettings)(i.X.SUBSCRIPTIONS_PANEL, {
                                section: p.nc_.SUBSCRIPTIONS
                            })
                        }
                    });
                    break;
                case f.xI.PENDING:
                default:
                    r = c.intl.formatToPlainString(s.default["5uwv8J"], {
                        premiumGroupProductName: m
                    }), a = c.intl.formatToPlainString(s.default["AmE0B/"], {
                        receiverName: e
                    })
            }
            return {
                message: o,
                header: r,
                body: a
            }
        } {
            let e = (0, l.$3)(t),
                i = c.intl.format(s.default["51Kv/4"], {
                    senderName: e,
                    premiumGroupProductName: m,
                    helpCenterLink: f.TE
                });
            switch (u) {
                case f.xI.ACCEPTED:
                    r = c.intl.string(s.default.ssge1y), a = c.intl.formatToPlainString(s.default.fTAcw3, {
                        senderName: e
                    });
                    break;
                case f.xI.REMOVED:
                case f.xI.NOT_FOUND:
                case f.xI.ERROR:
                    r = c.intl.formatToPlainString(s.default["AmLUw+"], {
                        premiumGroupProductName: m
                    }), a = c.intl.formatToPlainString(s.default["7XAuyg"], {
                        premiumGroupProductName: m
                    });
                    break;
                case f.xI.PENDING:
                default:
                    r = c.intl.string(s.default.ssge1y), a = c.intl.formatToPlainString(s.default.MkcdX8, {
                        senderName: e,
                        premiumGroupProductName: m
                    })
            }
            return {
                message: i,
                header: r,
                body: a
            }
        }
    },
    C = () => {
        var e;
        let r = (0, u.A)({
                location: "PremiumGroupPurchase"
            }),
            a = (0, t.bG)([_.A], () => _.A.getPremiumSubscription()),
            i = (0, t.bG)([n.default], () => n.default.getCurrentUser());
        return (null == i || !i.isPremiumWithFractionalPremiumOnly()) && !!r && (null == a || m.BL.has(null != (e = a.premiumPlanIdFromItems) ? e : "") && !a.isPurchasedExternally)
    },
    x = () => {
        let e = (0, u.A)({
                location: "PremiumGroupPurchase"
            }),
            r = C(),
            a = (0, t.bG)([n.default], () => n.default.getCurrentUser());
        return !!e && !!r && (null == a || !a.isPremiumWithPremiumGroup())
    },
    g = () => {
        let e = x(),
            r = (0, t.bG)([n.default], () => n.default.getCurrentUser());
        return e && ((0, o.TW)(r) || !(0, o.mv)(r))
    }