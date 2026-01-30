/** chunk id: 831806, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    o: () => P
}), n(896048), n(801541);
var r = n(627968),
    i = n(64700),
    l = n(889137),
    s = n(417597),
    a = n(732955),
    o = n(397927),
    c = n(722888),
    d = n(209812),
    u = n(44892),
    g = n(833448),
    m = n(299824),
    p = n(997509),
    f = n(529942),
    h = n(209700),
    b = n(976860),
    x = n(260509),
    j = n(317525),
    _ = n(71393),
    O = n(287809),
    v = n(975571),
    y = n(250627),
    A = n(808138),
    E = n(271653),
    N = n(371701),
    S = n(652215),
    I = n(746080),
    T = n(985018),
    C = n(289);

function P(e) {
    let {
        guildId: t,
        hasValidApplication: n
    } = e, {
        listingsLoaded: P
    } = (0, y.bb)(t), w = (0, s.bG)([_.A], () => _.A.getGuild(t)), R = (0, s.bG)([O.default], () => O.default.getCurrentUser()), D = null != w && (0, x.bM)(w, R), {
        loading: G
    } = (0, c.G)(t), [L, k] = i.useState(n ? "manage_listings" : "payment");
    (0, g.T)(w);
    let M = i.useCallback(() => {
        if (null == w) return;
        let e = j.A.getEveryoneRole(w);
        p.A.close();
        let t = {
            [e.id]: e
        };
        (0, f.Tk)(w.id, {
            type: h._.SERVER_SHOP,
            roles: t,
            initialTab: "guild_products",
            returnToSection: S.BEX.GUILD_PRODUCTS
        }), (0, b.pX)(S.BVt.CHANNEL(w.id, I.VV.GUILD_SHOP))
    }, [w]);
    if (!P || G) return (0, r.jsx)(o.y$y, {});
    if (null == w) return null;
    let U = (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(o.Heading, {
                variant: "heading-lg/semibold",
                children: T.intl.string(T.t.X6h2gz)
            }), (0, r.jsx)(o.Text, {
                variant: "text-sm/normal",
                children: T.intl.format(T.t.xiYuDt, {
                    monetizationPolicyLink: v.A.getArticleURL(S.MVz.CREATOR_POLICY),
                    serverProductsSupportLink: v.A.getCreatorSupportArticleURL(S.MVz.SERVER_PRODUCTS)
                })
            })]
        }),
        B = (0, r.jsxs)(o.VQ0, {
            type: "top",
            look: "brand",
            className: C.$H,
            "aria-label": T.intl.string(T.t.X6h2gz),
            selectedItem: L,
            onItemSelect: k,
            children: [(0, r.jsx)(u.A, {
                id: "basic_info",
                disabledTooltip: T.intl.string(T.t.NVDuUX),
                disabled: !n,
                children: T.intl.string(T.t.w27QAR)
            }), (0, r.jsx)(u.A, {
                id: "manage_listings",
                disabledTooltip: T.intl.string(T.t.NVDuUX),
                disabled: !n,
                children: T.intl.string(T.t.wlZ1mh)
            }), D ? (0, r.jsx)(o.VQ0.Item, {
                id: "payment",
                className: C.YU,
                children: T.intl.string(T.t.YBrFe6)
            }) : null, n ? (0, r.jsx)("div", {
                className: C.jc,
                children: (0, r.jsx)(a.$nd, {
                    text: T.intl.string(T.t.vM81yY),
                    variant: "secondary",
                    onClick: M,
                    size: "sm"
                })
            }) : null]
        }),
        F = (0, l.YW)(L).with("basic_info", () => (0, r.jsx)(A.A, {
            guildId: t
        })).with("manage_listings", () => (0, r.jsx)(E.A, {
            guildId: t
        })).with("payment", () => (0, r.jsx)(N.A, {
            guildId: t
        })).exhaustive(),
        H = P ? (0, r.jsx)(o.VQ0.Panel, {
            id: L,
            children: F
        }) : (0, r.jsx)(o.y$y, {});
    return (0, r.jsxs)(d.ZV, {
        guildId: t,
        children: [U, (0, r.jsx)(m.A, {
            guild: w
        }), (0, r.jsx)("div", {
            className: C.Mv,
            children: B
        }), H]
    })
}