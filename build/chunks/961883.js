/** Chunk was on 95481 **/
/** chunk id: 961883, original params: t,e,n (module,exports,require) **/
n.d(e, {
    $V: () => P,
    $k: () => g,
    aG: () => N,
    mO: () => B,
    v8: () => S
}), n(321073), n(896048);
var i = n(64700),
    r = n(106778),
    l = n(284009),
    s = n.n(l),
    a = n(575593),
    d = n(398590),
    u = n(954921),
    p = n(590547),
    o = n(87719),
    c = n(309635),
    h = n(545986),
    E = n(780964),
    O = n(840065),
    A = n(318346),
    f = n(954571),
    _ = n(203982),
    I = n(975571),
    R = n(993408),
    C = n(442759),
    y = n(158216),
    L = n(758836),
    m = n(652215),
    T = n(22104),
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
            productName: l,
            itemConsumed: s,
            rentalDuration: a
        } = t;
        if (null != n) return n;
        if (null != a) return 3 === a ? b.intl.string(b.t["5Gltxj"]) : 7 === a ? b.intl.string(b.t.UpxLQN) : b.intl.string(b.t.sYO0Wl);
        if (L.Dp.ORB_PROFILE_BADGE === e.skuId) return b.intl.string(T.default.nvaTQq);
        if (L.Dp.FRACTIONAL_PREMIUM === e.skuId)
            if (s) return b.intl.string(b.t.t0xkSB);
            else return b.intl.string(b.t.g5W1g8);
        if (i && !r) return b.intl.string(b.t.IMffmm);
        else return b.intl.formatToPlainString(b.t.YNaxMp, {
            itemName: l
        })
    },
    S = t => {
        let {
            product: e,
            overrideDescription: n,
            productName: i,
            shouldShowPromotionalExperience: r,
            promotionalRewardCollectedText: l,
            itemConsumed: s,
            isFractionalPremiumActive: d,
            expiresAt: u,
            isRental: p = !1
        } = t;
        if (null != n) return n;
        if (p && null != u) return b.intl.format(b.t["HQjw+I"], {
            itemName: i,
            date: u
        });
        if (L.Dp.ORB_PROFILE_BADGE === e.skuId) return b.intl.string(T.default.UnPGii);
        if (L.Dp.FRACTIONAL_PREMIUM === e.skuId) {
            let t = b.intl.formatToPlainString(b.t.Cz1G97, {
                days: 3
            });
            return s ? b.intl.format(b.t.bhLChO, {
                helpCenterLink: I.A.getArticleURL(m.MVz.FRACTIONAL_PREMIUM_ABOUT),
                duration: t,
                expirationDate: u
            }) : d ? b.intl.string(b.t.fBmhE9) : b.intl.format(b.t["1ZBX4E"], {
                helpCenterLink: I.A.getArticleURL(m.MVz.FRACTIONAL_PREMIUM_ABOUT),
                duration: t
            })
        }
        if (e.type === a.R.BUNDLE) {
            let {
                itemOneName: t,
                itemTwoName: n
            } = (0, C.yW)(e);
            return b.intl.format(b.t.fXw44U, {
                itemOneName: t,
                itemTwoName: n
            })
        }
        return e.type === a.R.AVATAR_DECORATION && r && null != l ? l : k(i)
    },
    N = t => {
        let {
            product: e,
            onClose: n,
            analyticsLocations: i,
            hasRequiredProductItems: r,
            handleUseNow: l,
            isApplying: f,
            openProfileSettings: I,
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
                n(), (0, A.Y)({
                    pageType: m.liQ.SHOP_ORBS_TAB,
                    sectionType: m.JJy.ORBS_BADGE_REDEMPTION_MODAL,
                    ctaObject: m.ZSU.CTA_TO_QUEST_HOME
                }), (0, h.navigateToQuestHome)()
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
                (0, o.x)(n)
            }
        }) : C.push({
            text: b.intl.string(b.t.cpT0Cq),
            variant: "secondary",
            onClick: n
        }, {
            text: b.intl.string(b.t["Jr6N+s"]),
            variant: "primary",
            onClick: () => {
                (0, O.openUserSettings)(E.X.SUBSCRIPTIONS_PANEL, {
                    section: m.nc_.SUBSCRIPTIONS
                }), n()
            }
        });
        else {
            let [t] = e.items;
            C.push({
                text: b.intl.string(b.t["2p2aYz"]),
                variant: r ? "secondary" : "primary",
                onClick: () => {
                    if (n(), (0, d.jH)(), null == I || I(), e.type === a.R.AVATAR_DECORATION) {
                        s()(t.type === a.R.AVATAR_DECORATION, "product type and item type are the same"), (0, u.L)({
                            initialSelectedDecoration: t,
                            analyticsLocations: i
                        });
                        return
                    }
                    if (e.type === a.R.PROFILE_EFFECT) {
                        s()(t.type === a.R.PROFILE_EFFECT, "product type and item type are the same"), (0, c.W)({
                            initialSelectedEffect: t,
                            analyticsLocations: i
                        });
                        return
                    }
                    if (e.type === a.R.NAMEPLATE) {
                        s()(t.type === a.R.NAMEPLATE, "product type and item type are the same"), (0, p.p)({
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
            onClick: l,
            loading: f
        }), C
    },
    P = (t, e) => {
        let n = i.useMemo(() => (0, R.V6)(t.type, t.skuId), [t.type, t.skuId]);
        return i.useEffect(() => {
            f.default.track(m.HAw.OPEN_MODAL, {
                type: m.JJy.COLLECTIBLES_SHOP_COLLECTED_MODAL,
                location_stack: e,
                sku_id: t.skuId,
                product_type: n
            })
        }, [e, t.skuId, t.items, n]), {
            productType: n
        }
    },
    B = (t, e) => {
        let n = i.useRef(new r.OH),
            l = (0, i.useRef)(null),
            [s, a] = i.useState(null),
            d = (0, y.AB)({
                purchaseType: e,
                skuId: t.skuId
            });
        return {
            environment: n.current,
            modalRef: l,
            confettiCanvas: s,
            setConfettiCanvas: a,
            customConfettiDisplayOptions: d
        }
    }