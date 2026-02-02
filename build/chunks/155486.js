/** chunk id: 155486, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    G: () => k
}), n(896048);
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(696292),
    o = n(311907),
    c = n(554146),
    u = n(397927),
    d = n(770178),
    g = n(736653),
    f = n(379848),
    m = n(742589),
    p = n(545986),
    _ = n(657331),
    b = n(318346),
    h = n(151252),
    E = n(142270),
    v = n(287809),
    C = n(379177),
    A = n(365491),
    x = n(628979),
    S = n(494573),
    O = n(758836),
    y = n(652215);
n(801416);
var j = n(49999),
    T = n(518477),
    L = n(985018),
    I = n(78716);

function k(e) {
    let {
        selectedTab: t,
        handleTransition: n
    } = e, s = (0, g.Ay)(), k = (0, o.bG)([v.default], () => v.default.getCurrentUser()), {
        enabled: N
    } = (0, h.Z)({
        location: "collectibles_shop_header_bar"
    }), {
        searchQuery: R
    } = (0, A.v)(), P = l.useRef(null), [B, w] = l.useState(!1);
    (0, d.g)(P, l.useCallback(e => {
        w(e.contentRect.width < 800)
    }, []));
    let D = (0, C.rR)("CollectiblesShopHeaderBar"),
        M = D ? [c.M.ORB_RENTAL_NEW_BADGE] : [],
        [H, G] = (0, f.kn)(M),
        U = D && H === c.M.ORB_RENTAL_NEW_BADGE;
    l.useEffect(() => () => {
        U && G(j.i.USER_DISMISS)
    }, [U, G]);
    let F = l.useMemo(() => [{
            tab: O.G2.HOME,
            label: L.intl.string(L.t.ijDDwz)
        }, {
            tab: O.G2.CATALOG,
            label: L.intl.string(L.t.Ah5sJo),
            hasSubmenu: !0
        }, ...N ? [{
            tab: O.G2.ORBS,
            label: L.intl.string(L.t.EBYkzk)
        }] : []], [N]),
        z = t === O.G2.ORBS ? y.liQ.SHOP_ORBS_TAB : y.liQ.COLLECTIBLES_SHOP,
        V = l.useCallback(() => {
            (0, b.Y)({
                pageType: z,
                sectionType: y.JJy.ORBS_BALANCE_MENU,
                ctaObject: y.ZSU.CTA_TO_QUEST_HOME
            }), (0, p.navigateToQuestHome)({
                fromContent: i.u.ORBS_BALANCE_MENU
            })
        }, [z]),
        K = l.useCallback(() => {
            (null == k ? void 0 : k.id) != null && (0, _.openUserProfileModal)({
                userId: k.id,
                tabSection: T.RP.WISHLIST,
                showGuildProfile: !1
            })
        }, [null == k ? void 0 : k.id]),
        W = l.useCallback(e => {
            n(e), e === O.G2.ORBS && U && G(j.i.USER_DISMISS)
        }, [n, U, G]);
    return (0, r.jsx)(u.NPJ, {
        theme: s,
        children: e => (0, r.jsx)("div", {
            ref: P,
            children: (0, r.jsxs)(m.A, {
                disableDoubleClick: !0,
                className: a()(e, I.jr),
                innerClassname: N ? I.vi : void 0,
                children: [(0, r.jsx)(u.DUT, {
                    className: I.sU,
                    onClick: () => n(O.G2.HOME),
                    "aria-label": L.intl.string(L.t.pWG4ze) + " home",
                    children: (0, r.jsx)(u.U1X, {
                        size: "md",
                        color: u.LU0.colors.TEXT_DEFAULT
                    })
                }), (0, r.jsx)(S.A, {
                    tabs: F,
                    selectedTab: t,
                    onTabSelect: W,
                    showOrbRentalNewBadge: U
                }), (0, r.jsxs)("div", {
                    className: I.sZ,
                    children: [(0, r.jsx)(x.A, {
                        handleTransition: n,
                        selectedTab: t,
                        isNarrow: B,
                        hasText: "" !== R
                    }), (0, r.jsx)(u.DUT, {
                        className: I.ij,
                        onClick: K,
                        "aria-label": L.intl.string(L.t["7lZ31J"]),
                        children: (0, r.jsx)(u.C3E, {
                            size: "xs",
                            color: "currentColor"
                        })
                    }), N && (0, r.jsx)(E.SS, {
                        analyticsPage: z,
                        cardAlignment: E.SS.CardAlignment.END,
                        ctaText: L.intl.string(L.t.VC4Mq0),
                        ctaOnClick: V,
                        className: I.oz
                    })]
                })]
            })
        })
    })
}