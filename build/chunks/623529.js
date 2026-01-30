/** chunk id: 623529, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I
}), n(896048), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(735438),
    o = n.n(a),
    c = n(73939),
    d = n(36525),
    u = n(139033),
    g = n(319060),
    m = n(397927),
    p = n(915089),
    f = n(405810),
    h = n(342298),
    b = n(371794),
    x = n(240248),
    j = n(599941),
    _ = n(11351),
    O = n(996507),
    v = n(389025),
    y = n(2242),
    A = n(284683),
    E = n(985018),
    N = n(941769);
let S = (0, x.xI)(g.A.GUILD_SETTINGS_ROLE_SUBSCRIPTIONS_OVERVIEW_SETTINGS_MAX_WIDTH);

function I(e) {
    var t;
    let {
        guild: n,
        isGuildProducts: l = !1
    } = e, {
        format: a
    } = (0, v.A)(n.id), g = (0, j.Tq)(n.id), x = i.useCallback(() => {
        var e;
        return (null == g || null == (e = g.cover_image_asset) ? void 0 : e.application_id) == null ? null : (0, b.YE)(g.cover_image_asset.application_id, g.cover_image_asset, S)
    }, [g]), [I, T] = i.useState(a), [C, P] = i.useState(null != (t = null == g ? void 0 : g.description) ? t : ""), [w, R] = i.useState(x), [D, G] = i.useState(null == g ? void 0 : g.store_page_guild_products_default_sort), [L, k] = i.useState(null == g ? void 0 : g.server_shop_tab_order), {
        loading: M,
        error: U,
        updateSubscriptionsSettings: B
    } = (0, j.KE)(), {
        imageCTA: F,
        imageAriaLabel: H,
        setFilename: V
    } = (0, O.A)(null == g ? void 0 : g.cover_image_asset), K = (0, p.GV)();

    function z(e, t) {
        s()(null != e, "Null value not allowed"), null != t && V(t.name), R(e)
    }
    let W = i.useMemo(() => {
            var e;
            return null != C && C !== (null != (e = null == g ? void 0 : g.description) ? e : "") || (null == w ? void 0 : w.startsWith("data:")) === !0 || I !== a || (null == g ? void 0 : g.store_page_guild_products_default_sort) !== D || (null == g ? void 0 : g.server_shop_tab_order) !== L
        }, [w, a, C, g, I, D, L]),
        Y = null != C && "" !== C && null != w;
    i.useEffect(() => {
        var e;
        (null == g || null == (e = g.cover_image_asset) ? void 0 : e.application_id) != null && R((0, b.YE)(g.cover_image_asset.application_id, g.cover_image_asset, S))
    }, [null == g ? void 0 : g.cover_image_asset]);
    let X = (0, _.gN)(),
        J = i.useMemo(() => A.aq.map(e => ({
            id: e.toString(),
            label: (0, A.Ac)(e),
            value: e
        })), []),
        Z = i.useMemo(() => [{
            id: "products-first",
            label: E.intl.string(E.t.X6h2gz),
            value: A.HA.PRODUCTS_FIRST
        }, {
            id: "subs-first",
            label: E.intl.string(E.t["KzCF/6"]),
            value: A.HA.SUBS_FIRST
        }], []);
    return (0, r.jsxs)("div", {
        className: N.kL,
        children: [null != U && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(m.wx6, {
                type: "critical",
                children: U.getAnyErrorMessage()
            }), (0, r.jsx)(m.hKd, {
                size: 16
            })]
        }), l ? null : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(m.z6M, {
                label: E.intl.string(E.t["PAVi++"]),
                description: E.intl.string(E.t.x87YqH),
                value: I,
                onChange: e => {
                    a !== e && e === y.c4.ALL_CHANNELS && (0, u.A)({
                        title: E.intl.string(E.t.dmVoOz),
                        subtitle: E.intl.string(E.t.mtwzdD),
                        confirmText: E.intl.string(E.t["NX+WJN"])
                    }), T(e)
                },
                disabled: X,
                options: [{
                    name: E.intl.string(E.t.rXqxhF),
                    desc: E.intl.string(E.t.yQiJne),
                    value: y.c4.SOME_CHANNELS,
                    icon: m.N$i
                }, {
                    name: E.intl.string(E.t.WzC9s6),
                    desc: E.intl.string(E.t.WmagiB),
                    value: y.c4.ALL_CHANNELS,
                    icon: m.RYV
                }]
            }), (0, r.jsx)(m.cGx, {
                className: N.yF
            })]
        }), (0, r.jsx)(m.fs1, {
            label: E.intl.string(E.t["1+Ho1X"]),
            placeholder: l ? E.intl.string(E.t.SD6LRZ) : E.intl.string(E.t["aVhW/W"]),
            maxLength: 1500,
            value: C,
            autosize: !0,
            onChange: P,
            "aria-labelledby": K,
            disabled: X
        }), (0, r.jsx)(m.cGx, {
            className: N.yF
        }), (0, r.jsxs)(m.D0$, {
            label: E.intl.string(E.t["0kpTpM"]),
            description: E.intl.string(E.t.i2rCwT),
            children: [(0, r.jsx)(h.A, {
                image: w,
                hint: F,
                showIcon: !0,
                showRemoveButton: !1,
                hideSize: !0,
                className: N.bm,
                iconWrapperClassName: N.RU,
                imageClassName: N.$B,
                iconClassName: N.S$,
                onChange: z,
                "aria-label": H,
                disabled: X
            }), (0, r.jsx)(f.A, {
                onChange: z,
                "aria-label": H,
                disabled: X,
                text: F,
                variant: "secondary",
                size: "md"
            })]
        }), l ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(m.cGx, {
                className: N.yF
            }), (0, r.jsx)(m.l6P, {
                label: E.intl.string(E.t.aaZ9pE),
                description: E.intl.string(E.t.TILN8u),
                value: D,
                placeholder: E.intl.string(E.t.XqMe3N),
                options: J,
                onSelectionChange: G,
                selectionMode: "single",
                fullWidth: !0
            })]
        }) : null, Z.length > 0 && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(m.cGx, {
                className: N.yF
            }), (0, r.jsx)(m.l6P, {
                label: E.intl.string(E.t["+dtmw+"]),
                description: E.intl.string(E.t.n8WSWJ),
                value: L,
                placeholder: E.intl.string(E.t.XqMe3N),
                options: Z,
                onSelectionChange: k,
                selectionMode: "single",
                fullWidth: !0
            })]
        }), (0, r.jsx)(c.F, {
            component: "div",
            className: N.se,
            children: W && (0, r.jsx)(m.FQk, {
                children: (0, r.jsx)(d.A, {
                    submitting: M,
                    disabled: !Y,
                    onReset: () => {
                        var e;
                        T(a), P(null != (e = null == g ? void 0 : g.description) ? e : ""), R(x), G(null == g ? void 0 : g.store_page_guild_products_default_sort), k(null == g ? void 0 : g.server_shop_tab_order)
                    },
                    onSave: () => {
                        s()(null != g, "Settings must be defined");
                        let e = {};
                        C !== g.description && (e.description = C), null != w && w.startsWith("data:") && (e.cover_image = w), I !== a && (e.full_server_gate = I === y.c4.ALL_CHANNELS), D !== g.store_page_guild_products_default_sort && (e.store_page_guild_products_default_sort = D), L !== g.server_shop_tab_order && (e.server_shop_tab_order = L), o().isEmpty(e) || B(n.id, e)
                    },
                    saveButtonTooltip: Y ? void 0 : E.intl.string(E.t["6HRvit"])
                })
            })
        })]
    })
}