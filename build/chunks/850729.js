/** chunk id: 850729, original params: e,t,n (module,exports,require) **/
n.d(t, {
    C: () => M
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(837381),
    s = n(311907),
    a = n(506774),
    o = n(397927),
    c = n(509963),
    u = n(704761),
    d = n(531260),
    h = n(793943),
    p = n(411976),
    g = n(912309),
    f = n(400492),
    m = n(728321),
    b = n(309010),
    A = n(287809),
    y = n(816733),
    O = n(619921),
    _ = n(194871),
    j = n(966846),
    x = n(674378),
    v = n(87941),
    E = n(941971),
    C = n(900848),
    S = n(550591),
    I = n(65611),
    N = n(652215),
    T = n(788868),
    P = n(235079),
    w = n(985018),
    R = n(623773);
let D = {
    origin: {
        x: -16,
        y: 0
    },
    targetWidth: 48,
    targetHeight: 48,
    offset: {
        x: 0,
        y: 0
    }
};

function L(e) {
    var t, n;
    let {
        selected: s,
        user: d,
        badge: p,
        link: g,
        showProgressBadge: b
    } = e, [A, y] = l.useState(!1), [O, _] = l.useState(!1), [j, x] = l.useState(null), [v, T] = l.useState(0), L = (0, i.Vd)("home"), M = (0, h.fy)().activePanel === h.HP.APP_ICON, G = () => {
        x(null), T(0), clearTimeout(j)
    };
    if (null == d) return null;
    let k = w.intl.string(w.t.YUU0RF);
    O && (k = a.w.get(N.wqg) ? w.intl.string(w.t["nkq1l+"]) : w.intl.string(w.t.Be8Q5E));
    let U = null;
    !s && b && (U = (0, r.jsx)(c.A, {
        className: R.Cp,
        determineOwnVisibility: !1
    }));
    let V = s || A || M,
        B = (0, r.jsx)(o.Qk9, {
            selected: !0,
            lowerBadge: p > 0 ? (0, I.wN)(p) : null,
            upperBadge: U,
            lowerBadgeSize: {
                width: (0, o.o6S)(p)
            },
            children: (0, r.jsx)(o.jlP, (t = function(e) {
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
            }({
                onMouseEnter: () => y(!0),
                onMouseLeave: () => y(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != j && clearTimeout(j), x(setTimeout(G, 500)), T(v + 1), 15 === v)) {
                        G();
                        let e = !a.w.get(N.wqg);
                        a.w.set(N.wqg, e), e && a.w.set(P.L, !0), e ? (0, f.Ak)("discodo") : (0, f.Ak)("user_leave"), _(!0), setTimeout(() => {
                            _(!1)
                        }, 1e3)
                    }
                },
                selected: V,
                ariaLabel: w.intl.string(w.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": s
            }, L), n = n = {
                to: {
                    pathname: g,
                    state: {
                        analyticsSource: {
                            page: N.liQ.GUILD_CHANNEL,
                            section: N.JJy.NAVIGATION,
                            object: N.ZSU.BUTTON_HOME
                        }
                    }
                },
                children: (0, r.jsx)(u.A, {})
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t))
        });
    return (0, r.jsx)("div", {
        className: R.Uq,
        children: (0, r.jsx)(m.A, {
            inlineSpecs: D,
            tutorialId: "friends-list",
            position: "right",
            children: (0, r.jsxs)(C.c, {
                children: [(0, r.jsx)(E.A, {
                    selected: s,
                    hovered: A,
                    className: R.Io
                }), (0, r.jsx)(S.A, {
                    hideOnClick: !0,
                    text: k,
                    selected: s,
                    children: B
                })]
            })
        })
    })
}

function M() {
    let e = (0, v.q)(),
        t = (0, s.bG)([j.A, _.A], () => {
            let e = (0, c.v)(j.A.activeItems, _.A),
                {
                    total: t,
                    progress: n
                } = x.zY(e),
                r = x.uA(n, t);
            return r > 0 && r < 100
        }),
        n = (0, g.kX)(),
        l = Object.keys(T.TP),
        i = (0, d.A)(),
        {
            unviewedTrialCount: a,
            unviewedDiscountCount: o
        } = (0, s.cf)([y.A], () => ({
            unviewedTrialCount: y.A.getUnacknowledgedOffers(l).length,
            unviewedDiscountCount: y.A.getUnacknowledgedDiscountOffers().length
        })),
        u = i.fractionalState === T.xc.NONE ? a + o : 0,
        h = (0, s.bG)([A.default], () => A.default.getCurrentUser()),
        f = (0, p.W)(),
        m = n + u + f,
        E = m === u && u > 0 && n + f === 0,
        C = O.A.getHomeLink();
    return E && (C = N.BVt.APPLICATION_STORE), (0, r.jsx)(L, {
        selected: e,
        user: h,
        selectedChannelId: b.A.getChannelId(N.ME),
        badge: m,
        link: C,
        showProgressBadge: t
    })
}