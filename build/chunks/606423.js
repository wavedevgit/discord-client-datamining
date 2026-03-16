/** chunk id: 606423 params = (module,exports,require) **/
i.d(e, {
    Z: () => j
}), i(321073);
var n = i(627968),
    r = i(64700),
    l = i(284009),
    a = i.n(l),
    s = i(158954),
    u = i(311907),
    o = i(397927),
    c = i(576622),
    d = i(287809),
    m = i(927578),
    f = i(477421),
    g = i(96304),
    p = i(816252),
    x = i(473702),
    h = i(916974),
    P = i(88001),
    C = i(519412),
    y = i(985018),
    v = i(426771);
let E = t => {
        let {
            churnUserDiscountOffer: e
        } = t;
        return null == e ? null : (0, n.jsx)("div", {
            className: v.i,
            children: (0, n.jsx)(p._, {
                userDiscountOffer: e
            })
        })
    },
    j = () => {
        let {
            transitionState: t,
            onClose: e,
            premiumType: i,
            setStep: l,
            churnUserDiscountOffer: p,
            isFetchingChurnDiscountOffer: v,
            planId: j
        } = (0, h.X)(), D = (0, u.bG)([d.default], () => {
            let t = d.default.getCurrentUser();
            return a()(null != t, "ProfileItem: currentUser cannot be undefined"), t
        });
        r.useEffect(() => {
            (0, c.A)(D.id, D.getAvatarURL(null, 80))
        }, [D]);
        let _ = (0, f.A)(),
            S = "US" === _.ipCountryCode && "CA" === _.ipSubdivisionCode;
        if (v) return (0, n.jsx)(s.Modal, {
            transitionState: t,
            title: "",
            actions: [],
            onClose: async () => {
                e()
            }
        });
        let A = (0, m.Zb)(j),
            N = A ? y.intl.string(C.default.z2vO3h) : y.intl.string(y.t.PWq8TL),
            T = A ? y.intl.formatToPlainString(C.default.stVlc6, {
                cooldownMonths: P.wl
            }) : y.intl.string(y.t.SOC4ML),
            M = [];
        return null != p ? M.push({
            text: y.intl.string(y.t.zrCzVB),
            onClick: () => l(x.g.CONFIRM_DISCOUNT),
            variant: "secondary",
            icon: o.tvc
        }) : M.push({
            text: y.intl.string(y.t.rzVN6j),
            onClick: () => e(),
            variant: "secondary"
        }), M.push({
            text: S ? y.intl.string(y.t.PfnxqD) : y.intl.string(y.t["3PatSz"]),
            onClick: () => l(x.g.CONFIRM),
            variant: "primary"
        }), (0, n.jsx)(s.Modal, {
            transitionState: t,
            title: N,
            subtitle: T,
            actions: M,
            preview: null !== p && (0, n.jsx)(E, {
                churnUserDiscountOffer: p
            }),
            onClose: async () => e(),
            children: (0, n.jsx)(g.l, {
                currentUser: D,
                premiumType: i,
                onClose: e,
                isDowngrade: !1,
                isPremiumRebrand: !0
            })
        })
    }