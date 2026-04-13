/** chunk id: 623529 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S
});
var i = n(627968),
    s = n(64700),
    l = n(284009),
    r = n.n(l),
    a = n(735438),
    o = n.n(a),
    d = n(73939),
    c = n(36525),
    u = n(139033),
    m = n(319060),
    g = n(397927),
    x = n(915089),
    h = n(405810),
    _ = n(342298),
    p = n(371794),
    A = n(240248),
    f = n(599941),
    j = n(11351),
    N = n(996507),
    E = n(389025),
    T = n(2242),
    C = n(284683),
    I = n(985018),
    b = n(619092);
let v = (0, A.xI)(m.A.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);

function S(e) {
    let {
        guild: t,
        isGuildProducts: n = !1
    } = e, {
        format: l
    } = (0, E.A)(t.id), a = (0, f.Tq)(t.id), m = s.useCallback(() => a?.cover_image_asset?.application_id == null ? null : (0, p.YE)(a.cover_image_asset.application_id, a.cover_image_asset, v), [a]), [A, S] = s.useState(l), [y, R] = s.useState(a?.description ?? ""), [O, G] = s.useState(m), [L, D] = s.useState(a?.store_page_guild_products_default_sort), [M, k] = s.useState(a?.server_shop_tab_order), {
        loading: U,
        error: P,
        updateSubscriptionsSettings: w
    } = (0, f.KE)(), {
        imageCTA: B,
        imageAriaLabel: F,
        setFilename: H
    } = (0, N.A)(a?.cover_image_asset), V = (0, x.GV)();

    function z(e, t) {
        r()(null != e, "Null value not allowed"), null != t && H(t.name), G(e)
    }
    let W = s.useMemo(() => null != y && y !== (a?.description ?? "") || O?.startsWith("data:") === !0 || A !== l || a?.store_page_guild_products_default_sort !== L || a?.server_shop_tab_order !== M, [O, l, y, a, A, L, M]),
        K = null != y && "" !== y && null != O;
    s.useEffect(() => {
        a?.cover_image_asset?.application_id != null && G((0, p.YE)(a.cover_image_asset.application_id, a.cover_image_asset, v))
    }, [a?.cover_image_asset]);
    let Y = (0, j.gN)(),
        X = s.useMemo(() => C.aq.map(e => ({
            id: e.toString(),
            label: (0, C.Ac)(e),
            value: e
        })), []),
        J = s.useMemo(() => [{
            id: "products-first",
            label: I.intl.string(I.t.X6h2gz),
            value: C.HA.PRODUCTS_FIRST
        }, {
            id: "subs-first",
            label: I.intl.string(I.t["KzCF/6"]),
            value: C.HA.SUBS_FIRST
        }], []);
    return (0, i.jsxs)("div", {
        className: b.kL,
        children: [null != P && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(g.wx6, {
                type: "critical",
                children: P.getAnyErrorMessage()
            }), (0, i.jsx)(g.hKd, {
                size: 16
            })]
        }), n ? null : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(g.z6M, {
                label: I.intl.string(I.t["PAVi++"]),
                description: I.intl.string(I.t.x87YqH),
                value: A,
                onChange: e => {
                    l !== e && e === T.c4.ALL_CHANNELS && (0, u.A)({
                        title: I.intl.string(I.t.dmVoOz),
                        subtitle: I.intl.string(I.t.mtwzdD),
                        confirmText: I.intl.string(I.t["NX+WJN"])
                    }), S(e)
                },
                disabled: Y,
                options: [{
                    name: I.intl.string(I.t.rXqxhF),
                    desc: I.intl.string(I.t.yQiJne),
                    value: T.c4.SOME_CHANNELS,
                    icon: g.N$i
                }, {
                    name: I.intl.string(I.t.WzC9s6),
                    desc: I.intl.string(I.t.WmagiB),
                    value: T.c4.ALL_CHANNELS,
                    icon: g.RYV
                }]
            }), (0, i.jsx)(g.cGx, {
                className: b.yF
            })]
        }), (0, i.jsx)(g.fs1, {
            label: I.intl.string(I.t["1+Ho1X"]),
            placeholder: n ? I.intl.string(I.t.SD6LRZ) : I.intl.string(I.t["aVhW/W"]),
            maxLength: 1500,
            value: y,
            autosize: !0,
            onChange: R,
            "aria-labelledby": V,
            disabled: Y
        }), (0, i.jsx)(g.cGx, {
            className: b.yF
        }), (0, i.jsxs)(g.D0$, {
            label: I.intl.string(I.t["0kpTpM"]),
            description: I.intl.string(I.t.i2rCwT),
            children: [(0, i.jsx)(_.A, {
                image: O,
                hint: B,
                showIcon: !0,
                showRemoveButton: !1,
                hideSize: !0,
                className: b.bm,
                iconWrapperClassName: b.RU,
                imageClassName: b.$B,
                iconClassName: b.S$,
                onChange: z,
                "aria-label": F,
                disabled: Y
            }), (0, i.jsx)(h.A, {
                onChange: z,
                "aria-label": F,
                disabled: Y,
                text: B,
                variant: "secondary",
                size: "md"
            })]
        }), n ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(g.cGx, {
                className: b.yF
            }), (0, i.jsx)(g.l6P, {
                label: I.intl.string(I.t.aaZ9pE),
                description: I.intl.string(I.t.TILN8u),
                value: L,
                placeholder: I.intl.string(I.t.XqMe3N),
                options: X,
                onSelectionChange: D,
                selectionMode: "single",
                fullWidth: !0
            })]
        }) : null, J.length > 0 && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(g.cGx, {
                className: b.yF
            }), (0, i.jsx)(g.l6P, {
                label: I.intl.string(I.t["+dtmw+"]),
                description: I.intl.string(I.t.n8WSWJ),
                value: M,
                placeholder: I.intl.string(I.t.XqMe3N),
                options: J,
                onSelectionChange: k,
                selectionMode: "single",
                fullWidth: !0
            })]
        }), (0, i.jsx)(d.F, {
            component: "div",
            className: b.se,
            children: W && (0, i.jsx)(g.FQk, {
                children: (0, i.jsx)(c.A, {
                    submitting: U,
                    disabled: !K,
                    onReset: () => {
                        S(l), R(a?.description ?? ""), G(m), D(a?.store_page_guild_products_default_sort), k(a?.server_shop_tab_order)
                    },
                    onSave: () => {
                        r()(null != a, "Settings must be defined");
                        let e = {};
                        y !== a.description && (e.description = y), null != O && O.startsWith("data:") && (e.cover_image = O), A !== l && (e.full_server_gate = A === T.c4.ALL_CHANNELS), L !== a.store_page_guild_products_default_sort && (e.store_page_guild_products_default_sort = L), M !== a.server_shop_tab_order && (e.server_shop_tab_order = M), o().isEmpty(e) || w(t.id, e)
                    },
                    saveButtonTooltip: K ? void 0 : I.intl.string(I.t["6HRvit"])
                })
            })
        })]
    })
}