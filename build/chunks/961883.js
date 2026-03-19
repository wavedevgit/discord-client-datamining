/** chunk id: 961883 params = (module,exports,require) **/
n.d(e, {
    $V: () => N,
    $k: () => g,
    aG: () => v,
    mO: () => P,
    v8: () => S
}), n(321073);
var i = n(64700),
    r = n(106778),
    a = n(284009),
    l = n.n(a),
    s = n(575593),
    d = n(398590),
    u = n(954921),
    o = n(590547),
    p = n(87719),
    c = n(309635),
    E = n(545986),
    h = n(780964),
    O = n(840065),
    f = n(318346),
    A = n(954571),
    _ = n(203982),
    y = n(975571),
    R = n(993408),
    C = n(442759),
    I = n(158216),
    L = n(758836),
    m = n(652215),
    T = n(839358),
    b = n(985018);
let k = t => null != t ? b.intl.format(b.t["4kp0AB"], {
        itemName: t
    }) : null,
    g = t => {
        let {
            product: e,
            overrideTitle: n,
            isVariantsGroupEnabled: i,
            shouldShowPromotionalExperience: r,
            productName: a,
            itemConsumed: l
        } = t;
        if (null != n) return n;
        if (L.Dp.ORB_PROFILE_BADGE === e.skuId) return b.intl.string(T.default.nvaTQq);
        if (L.Dp.FRACTIONAL_PREMIUM === e.skuId)
            if (l) return b.intl.string(b.t.t0xkSB);
            else return b.intl.string(b.t.g5W1g8);
        if (i && !r) return b.intl.string(b.t.IMffmm);
        return b.intl.formatToPlainString(b.t.YNaxMp, {
            itemName: a
        })
    },
    S = t => {
        let {
            product: e,
            overrideDescription: n,
            productName: i,
            shouldShowPromotionalExperience: r,
            promotionalRewardCollectedText: a,
            itemConsumed: l,
            isFractionalPremiumActive: d,
            expiresAt: u
        } = t;
        if (null != n) return n;
        if (L.Dp.ORB_PROFILE_BADGE === e.skuId) return b.intl.string(T.default.UnPGii);
        if (L.Dp.FRACTIONAL_PREMIUM === e.skuId) {
            let t = b.intl.formatToPlainString(b.t.Cz1G97, {
                days: 3
            });
            return l ? b.intl.format(b.t.bhLChO, {
                helpCenterLink: y.A.getArticleURL(m.MVz.FRACTIONAL_PREMIUM_ABOUT),
                duration: t,
                expirationDate: u
            }) : d ? b.intl.string(b.t.fBmhE9) : b.intl.format(b.t["1ZBX4E"], {
                helpCenterLink: y.A.getArticleURL(m.MVz.FRACTIONAL_PREMIUM_ABOUT),
                duration: t
            })
        }
        if (e.type === s.R.BUNDLE) {
            let {
                itemOneName: t,
                itemTwoName: n
            } = (0, C.yW)(e);
            return b.intl.format(b.t.fXw44U, {
                itemOneName: t,
                itemTwoName: n
            })
        }
        return e.type === s.R.AVATAR_DECORATION && r && null != a ? a : k(i)
    },
    v = t => {
        let {
            product: e,
            onClose: n,
            analyticsLocations: i,
            hasRequiredProductItems: r,
            handleUseNow: a,
            isApplying: A,
            openProfileSettings: y,
            itemConsumed: R
        } = t, C = [];
        if (L.Dp.ORB_PROFILE_BADGE === e.skuId) C.push({
            text: b.intl.string(T.default.yfwZuy),
            variant: "primary",
            onClick: () => {
                n(), _._.dispatch(m.jej.SHOW_ACCOUNT_PROFILE_POPOUT, {})
            }
        }, {
            text: b.intl.string(b.t.H57f41),
            variant: "secondary",
            onClick: () => {
                n(), (0, f.Y)({
                    pageType: m.liQ.SHOP_ORBS_TAB,
                    sectionType: m.JJy.ORBS_BADGE_REDEMPTION_MODAL,
                    ctaObject: m.ZSU.CTA_TO_QUEST_HOME
                }), (0, E.navigateToQuestHome)()
            }
        });
        else if (L.Dp.FRACTIONAL_PREMIUM === e.skuId) R ? C.push({
            text: b.intl.string(b.t.cpT0Cq),
            variant: "secondary",
            onClick: n
        }, {
            text: b.intl.string(b.t.ERKK6v),
            variant: "primary",
            onClick: () => {
                (0, p.x)(n)
            }
        }) : C.push({
            text: b.intl.string(b.t.cpT0Cq),
            variant: "secondary",
            onClick: n
        }, {
            text: b.intl.string(b.t["Jr6N+s"]),
            variant: "primary",
            onClick: () => {
                (0, O.openUserSettings)(h.X.SUBSCRIPTIONS_PANEL), n()
            }
        });
        else {
            let [t] = e.items;
            C.push({
                text: b.intl.string(b.t["2p2aYz"]),
                variant: r ? "secondary" : "primary",
                onClick: () => {
                    if (n(), (0, d.jH)(), y?.(), e.type === s.R.AVATAR_DECORATION) {
                        l()(t.type === s.R.AVATAR_DECORATION, "product type and item type are the same"), (0, u.L)({
                            initialSelectedDecoration: t,
                            analyticsLocations: i
                        });
                        return
                    }
                    if (e.type === s.R.PROFILE_EFFECT) {
                        l()(t.type === s.R.PROFILE_EFFECT, "product type and item type are the same"), (0, c.W)({
                            initialSelectedEffect: t,
                            analyticsLocations: i
                        });
                        return
                    }
                    if (e.type === s.R.NAMEPLATE) {
                        l()(t.type === s.R.NAMEPLATE, "product type and item type are the same"), (0, o.p)({
                            initialSelectedNameplate: t,
                            analyticsLocations: i
                        });
                        return
                    }
                }
            })
        }
        return r && C.push({
            text: b.intl.string(b.t.MAS7uK),
            variant: "primary",
            onClick: a,
            loading: A
        }), C
    },
    N = (t, e) => {
        let n = i.useMemo(() => (0, R.V6)(t.type, t.skuId), [t.type, t.skuId]);
        return i.useEffect(() => {
            A.default.track(m.HAw.OPEN_MODAL, {
                type: m.JJy.COLLECTIBLES_SHOP_COLLECTED_MODAL,
                location_stack: e,
                sku_id: t.skuId,
                product_type: n
            })
        }, [e, t.skuId, t.items, n]), {
            productType: n
        }
    },
    P = (t, e) => {
        let n = i.useRef(new r.OH),
            a = (0, i.useRef)(null),
            [l, s] = i.useState(null),
            d = (0, I.AB)({
                purchaseType: e,
                skuId: t.skuId
            });
        return {
            environment: n.current,
            modalRef: a,
            confettiCanvas: l,
            setConfettiCanvas: s,
            customConfettiDisplayOptions: d
        }
    }