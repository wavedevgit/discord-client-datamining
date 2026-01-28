/** Chunk was on 78528 **/
/** chunk id: 850729, original params: e,t,n (module,exports,require) **/
n.d(t, {
    C: () => L
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
    p = n(793943),
    h = n(411976),
    f = n(912309),
    g = n(400492),
    m = n(728321),
    b = n(309010),
    A = n(287809),
    y = n(816733),
    _ = n(619921),
    O = n(194871),
    j = n(966846),
    v = n(674378),
    x = n(87941),
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

function M(e) {
    var t, n;
    let {
        selected: s,
        user: d,
        badge: h,
        link: f,
        showProgressBadge: b
    } = e, [A, y] = l.useState(!1), [_, O] = l.useState(!1), [j, v] = l.useState(null), [x, T] = l.useState(0), M = (0, i.Vd)("home"), L = (0, p.fy)().activePanel === p.HP.APP_ICON, k = () => {
        v(null), T(0), clearTimeout(j)
    };
    if (null == d) return null;
    let U = w.intl.string(w.t.YUU0RF);
    _ && (U = a.w.get(N.wqg) ? w.intl.string(w.t["nkq1l+"]) : w.intl.string(w.t.Be8Q5E));
    let G = null;
    !s && b && (G = (0, r.jsx)(c.A, {
        className: R.Cp,
        determineOwnVisibility: !1
    }));
    let B = s || A || L,
        V = (0, r.jsx)(o.Qk9, {
            selected: !0,
            lowerBadge: h > 0 ? (0, I.wN)(h) : null,
            upperBadge: G,
            lowerBadgeSize: {
                width: (0, o.o6S)(h)
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
                    if (!__OVERLAY__ && (null != j && clearTimeout(j), v(setTimeout(k, 500)), T(x + 1), 15 === x)) {
                        k();
                        let e = !a.w.get(N.wqg);
                        a.w.set(N.wqg, e), e && a.w.set(P.L, !0), e ? (0, g.Ak)("discodo") : (0, g.Ak)("user_leave"), O(!0), setTimeout(() => {
                            O(!1)
                        }, 1e3)
                    }
                },
                selected: B,
                ariaLabel: w.intl.string(w.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": s
            }, M), n = n = {
                to: {
                    pathname: f,
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
                    text: U,
                    selected: s,
                    children: V
                })]
            })
        })
    })
}

function L() {
    let e = (0, x.q)(),
        t = (0, s.bG)([j.A, O.A], () => {
            let e = (0, c.v)(j.A.activeItems, O.A),
                {
                    total: t,
                    progress: n
                } = v.zY(e),
                r = v.uA(n, t);
            return r > 0 && r < 100
        }),
        n = (0, f.kX)(),
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
        p = (0, s.bG)([A.default], () => A.default.getCurrentUser()),
        g = (0, h.W)(),
        m = n + u + g,
        E = m === u && u > 0 && n + g === 0,
        C = _.A.getHomeLink();
    return E && (C = N.BVt.APPLICATION_STORE), (0, r.jsx)(M, {
        selected: e,
        user: p,
        selectedChannelId: b.A.getChannelId(N.ME),
        badge: m,
        link: C,
        showProgressBadge: t
    })
}