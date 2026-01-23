/** Chunk was on web.js **/
/** chunk id: 606423, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Z: () => A
}), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    c = n(397927),
    u = n(576622),
    d = n(287809),
    f = n(927578),
    p = n(477421),
    _ = n(96304),
    h = n(816252),
    m = n(473702),
    g = n(916974),
    E = n(88001),
    y = n(519412),
    b = n(985018),
    O = n(426771);
let v = e => {
        let {
            churnUserDiscountOffer: t
        } = e;
        return null == t ? null : (0, r.jsx)("div", {
            className: O.i,
            children: (0, r.jsx)(h._, {
                userDiscountOffer: t
            })
        })
    },
    A = () => {
        let {
            transitionState: e,
            onClose: t,
            premiumType: n,
            setStep: a,
            churnUserDiscountOffer: h,
            isFetchingChurnDiscountOffer: O,
            planId: A
        } = (0, g.X)(), I = (0, l.bG)([d.default], () => {
            let e = d.default.getCurrentUser();
            return s()(null != e, "ProfileItem: currentUser cannot be undefined"), e
        });
        i.useEffect(() => {
            (0, u.A)(I.id, I.getAvatarURL(null, 80))
        }, [I]);
        let S = (0, p.A)(),
            T = "US" === S.ipCountryCode && "CA" === S.ipSubdivisionCode;
        if (O) return (0, r.jsx)(o.Modal, {
            transitionState: e,
            title: "",
            actions: [],
            onClose: async () => {
                t()
            }
        });
        let C = (0, f.Zb)(A),
            N = C ? b.intl.string(y.default.z2vO3h) : b.intl.string(b.t.PWq8TL),
            w = C ? b.intl.formatToPlainString(y.default.stVlc6, {
                cooldownMonths: E.wl
            }) : b.intl.string(b.t.SOC4ML),
            R = [];
        return null != h ? R.push({
            text: b.intl.string(b.t.zrCzVB),
            onClick: () => a(m.g.CONFIRM_DISCOUNT),
            variant: "secondary",
            icon: c.tvc
        }) : R.push({
            text: b.intl.string(b.t.h9tkAK),
            onClick: () => t(),
            variant: "secondary"
        }), R.push({
            text: T ? b.intl.string(b.t.PfnxqD) : b.intl.string(b.t["3PatSz"]),
            onClick: () => a(m.g.CONFIRM),
            variant: "primary"
        }), (0, r.jsx)(o.Modal, {
            transitionState: e,
            title: N,
            subtitle: w,
            actions: R,
            preview: null !== h && (0, r.jsx)(v, {
                churnUserDiscountOffer: h
            }),
            onClose: async () => t(),
            children: (0, r.jsx)(_.l, {
                currentUser: I,
                premiumType: n,
                onClose: t,
                isDowngrade: !1,
                isPremiumRebrand: !0
            })
        })
    }