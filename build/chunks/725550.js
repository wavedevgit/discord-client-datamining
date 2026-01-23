/** Chunk was on 92818 **/
/** chunk id: 725550, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => w
});
var r = n(627968);
n(64700);
var l = n(735438),
    i = n(311907),
    s = n(397927),
    o = n(590180),
    c = n(993408),
    a = n(645178),
    u = n(833336),
    d = n(451909),
    p = n(702211),
    m = n(287070),
    f = n(101058),
    g = n(207803),
    x = n(950191),
    y = n(814390),
    b = n(773669),
    h = n(606532),
    j = n(752319),
    A = n(287809),
    O = n(405269),
    v = n(927578),
    _ = n(985018),
    P = n(645052);

function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}
let C = e => {
        let {
            pendingProfileEffectRecord: t,
            product: n,
            purchase: u
        } = e, d = (0, i.bG)([A.default], () => A.default.getCurrentUser()), m = (0, i.bG)([o.A], () => o.A.getProduct(null == t ? void 0 : t.skuId)), f = (0, i.bG)([b.default], () => b.default.locale), g = v.Ay.canUseCollectibles(d), x = (0, c.gA)(u), y = (0, c.G0)(n), h = !g && x, j = (null == u ? void 0 : u.expiresAt) != null ? (0, O.Tf)(Date.now(), u.expiresAt) : null, E = (0, a.Tk)(u), C = (0, a.o7)(m), w = (0, p.b)(!y || g), S = I(h, y, g, w), k = null == u || h;
        return null != t ? (0, r.jsx)("div", {
            className: k ? P.Mf : P.zf,
            children: (0, r.jsxs)("div", {
                className: P.RQ,
                children: [(0, r.jsx)(s.Text, {
                    color: "text-strong",
                    variant: "text-sm/semibold",
                    children: (0, l.isEmpty)(E) ? C : E
                }), k ? (0, r.jsx)(s.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children: S
                }) : (0, r.jsxs)(r.Fragment, {
                    children: [null != j && (0, r.jsx)(s.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: _.intl.format(_.t.Io7ozn, {
                            days: j.days.toString()
                        })
                    }), (0, r.jsxs)(s.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: [_.intl.format(_.t.gW9R4B, {
                            date: u.purchasedAt.toLocaleDateString(f, {
                                month: "long",
                                year: "numeric"
                            })
                        }), null != u.expiresAt && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("br", {}), _.intl.format(_.t.eZSTa5, {
                                date: u.expiresAt.toLocaleDateString(f, {
                                    minute: "numeric",
                                    hour: "numeric",
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric"
                                })
                            })]
                        })]
                    }), x && (0, r.jsx)(s.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: _.intl.string(_.t.nKdAlO)
                    })]
                })]
            })
        }) : null
    },
    I = (e, t, n, r) => e ? _.intl.string(_.t["1UPza/"]) : t && n ? _.intl.string(_.t.hmyYK8) : t && !n ? r ? _.intl.string(_.t.melduy) : _.intl.string(_.t.JtAKwp) : _.intl.string(_.t.fEGjVQ),
    w = e => {
        var t, n;
        let {
            user: l,
            pendingProfileEffectRecord: s,
            product: o,
            purchase: c,
            guild: a
        } = e, {
            pendingGlobalName: p,
            pendingNickname: b,
            pendingPronouns: A,
            pendingBio: O,
            pendingBanner: _,
            pendingAvatar: I,
            pendingAvatarDecoration: w,
            pendingThemeColors: S,
            pendingAccentColor: k
        } = (0, i.cf)([u.A, j.A], () => E({
            pendingNickname: void 0,
            pendingGlobalName: void 0,
            pendingAccentColor: void 0
        }, null != a ? u.A.getAllPending() : j.A.getAllPending())), N = v.Ay.isPremium(l), T = v.Ay.canUsePremiumProfileCustomization(l), R = (0, x.Ay)(l.id), D = !!(null == R ? void 0 : R.getPreviewBio(O)), L = {
            user: l,
            guild: a,
            pendingGlobalName: p,
            pendingNickname: b,
            pendingPronouns: A,
            pendingBio: (0, y.A)() && null != O ? d.Ay.parse(void 0, O).content : O,
            pendingBanner: _,
            useLargeBanner: !0,
            pendingAvatar: (0, f.V7)({
                userId: l.id,
                image: I
            }),
            pendingAvatarDecoration: w,
            pendingThemeColors: S,
            pendingAccentColor: k,
            pendingProfileEffect: null != s ? s : null,
            hideFakeActivity: D,
            canUsePremiumCustomization: T,
            onUpsellClick: h.A,
            onBannerChange: g.Iz
        };
        return (0, r.jsxs)("div", {
            className: P.i1,
            children: [(0, r.jsx)(m.A, (t = E({}, L), n = n = {
                disabledInputs: !0,
                hideCustomStatus: !0
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t)), !1, (0, r.jsx)(C, {
                pendingProfileEffectRecord: s,
                product: o,
                purchase: c,
                userIsPremium: N
            })]
        })
    }