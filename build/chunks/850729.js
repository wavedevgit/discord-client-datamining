/** chunk id: 850729 params = (module,exports,require) **/
"use strict";
n.d(t, {
    C: () => U
});
var i = n(627968),
    s = n(64700),
    l = n(837381),
    a = n(311907),
    r = n(506774),
    o = n(397927),
    c = n(509963),
    d = n(704761),
    u = n(531260),
    h = n(793943),
    A = n(411976),
    m = n(912309),
    _ = n(400492),
    g = n(728321),
    p = n(309010),
    f = n(287809),
    x = n(816733),
    E = n(619921),
    C = n(194871),
    I = n(966846),
    N = n(674378),
    b = n(87941),
    S = n(941971),
    T = n(900848),
    v = n(550591),
    y = n(65611),
    j = n(652215),
    R = n(788868),
    O = n(235079),
    L = n(985018),
    M = n(146842);
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

function G(e) {
    let {
        selected: t,
        user: n,
        badge: a,
        link: u,
        showProgressBadge: A
    } = e, [m, p] = s.useState(!1), [f, x] = s.useState(!1), [E, C] = s.useState(null), [I, N] = s.useState(0), b = (0, l.Vd)("home"), R = (0, h.fy)().activePanel === h.HP.APP_ICON, G = () => {
        C(null), N(0), clearTimeout(E)
    };
    if (null == n) return null;
    let U = L.intl.string(L.t.YUU0RF);
    f && (U = r.w.get(j.wqg) ? L.intl.string(L.t["nkq1l+"]) : L.intl.string(L.t.Be8Q5E));
    let P = null;
    !t && A && (P = (0, i.jsx)(c.A, {
        className: M.Cp,
        determineOwnVisibility: !1
    }));
    let w = t || m || R,
        k = (0, i.jsx)(o.Qk9, {
            selected: !0,
            lowerBadge: a > 0 ? (0, y.wN)(a) : null,
            upperBadge: P,
            lowerBadgeSize: {
                width: (0, o.o6S)(a)
            },
            children: (0, i.jsx)(o.jlP, {
                onMouseEnter: () => p(!0),
                onMouseLeave: () => p(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != E && clearTimeout(E), C(setTimeout(G, 500)), N(I + 1), 15 === I)) {
                        G();
                        let e = !r.w.get(j.wqg);
                        r.w.set(j.wqg, e), e && r.w.set(O.L, !0), e ? (0, _.Ak)("discodo") : (0, _.Ak)("user_leave"), x(!0), setTimeout(() => {
                            x(!1)
                        }, 1e3)
                    }
                },
                selected: w,
                ariaLabel: L.intl.string(L.t.YUU0RF),
                "aria-owns": "guild-list-unread-dms",
                "aria-selected": t,
                ...b,
                to: {
                    pathname: u,
                    state: {
                        analyticsSource: {
                            page: j.liQ.GUILD_CHANNEL,
                            section: j.JJy.NAVIGATION,
                            object: j.ZSU.BUTTON_HOME
                        }
                    }
                },
                children: (0, i.jsx)(d.A, {})
            })
        });
    return (0, i.jsx)("div", {
        className: M.Uq,
        children: (0, i.jsx)(g.A, {
            inlineSpecs: D,
            tutorialId: "friends-list",
            position: "right",
            children: (0, i.jsxs)(T.c, {
                children: [(0, i.jsx)(S.A, {
                    selected: t,
                    hovered: m,
                    className: M.Io
                }), (0, i.jsx)(v.A, {
                    hideOnClick: !0,
                    text: U,
                    selected: t,
                    children: k
                })]
            })
        })
    })
}

function U() {
    let e = (0, b.q)(),
        t = (0, a.bG)([I.A, C.A], () => {
            let e = (0, c.v)(I.A.activeItems, C.A),
                {
                    total: t,
                    progress: n
                } = N.zY(e),
                i = N.uA(n, t);
            return i > 0 && i < 100
        }),
        n = (0, m.kX)(),
        s = Object.keys(R.TP),
        l = (0, u.A)(),
        {
            unviewedTrialCount: r,
            unviewedDiscountCount: o
        } = (0, a.cf)([x.A], () => ({
            unviewedTrialCount: x.A.getUnacknowledgedOffers(s).length,
            unviewedDiscountCount: x.A.getUnacknowledgedDiscountOffers().length
        })),
        d = l.fractionalState === R.xc.NONE ? r + o : 0,
        h = (0, a.bG)([f.default], () => f.default.getCurrentUser()),
        _ = (0, A.W)(),
        g = n + d + _,
        S = g === d && d > 0 && n + _ === 0,
        T = E.A.getHomeLink();
    return S && (T = j.BVt.APPLICATION_STORE), (0, i.jsx)(G, {
        selected: e,
        user: h,
        selectedChannelId: p.A.getChannelId(j.ME),
        badge: g,
        link: T,
        showProgressBadge: t
    })
}