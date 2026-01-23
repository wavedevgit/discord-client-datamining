/** Chunk was on 47841 **/
/** chunk id: 7891, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => T
}), n(896048), n(747238);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(284009),
    o = n.n(a),
    c = n(311907),
    d = n(73939),
    u = n(36525),
    g = n(397927),
    m = n(416052),
    p = n(975807),
    f = n(58149),
    b = n(465932),
    h = n(555337),
    x = n(954571),
    j = n(300233),
    _ = n(599941),
    O = n(652215),
    v = n(985018),
    y = n(218251);
let A = [0xdb2389, 0xba2be9, 8804082, 6576370, 5335282, 2652110, 2128781, 2196594, 4752414, 0xc75a38, 0xc74138, 12401e3, 0xc5579d, 5659039, 4092591, 5868359, 6586142, 8876063, 8484432, 9979976, 5269106, 3421236],
    E = /^(https?:\/\/)?(?:m\.|www\.)?(youtu\.be|youtube\.com)\/(embed\/|v\/|watch\?v=|watch\?.+&v=)?((\w|-){11})(?:\S+)?$/,
    N = A[4],
    S = e => {
        var t, n;
        let {
            guild: l,
            canEnable: a
        } = e, c = (0, _.Tq)(l.id), {
            loading: h,
            updateSubscriptionsSettings: j
        } = (0, _.KE)(), [S, I] = i.useState(l.features.has(O.GuildFeatures.CREATOR_STORE_PAGE)), [T, C] = i.useState(null != (t = null == c ? void 0 : c.store_page_primary_color) ? t : N), [P, w] = i.useState(null == c ? void 0 : c.store_page_trailer_url), R = null == P || null != P.match(E), [D, G] = i.useState(null != (n = null == c ? void 0 : c.store_page_show_subscriber_count) && n), L = i.useRef(null == c ? void 0 : c.store_page_slug).current, k = S !== l.features.has(O.GuildFeatures.CREATOR_STORE_PAGE) || (null == c ? void 0 : c.store_page_primary_color) == null && T !== N || (null == c ? void 0 : c.store_page_primary_color) != null && T !== (null == c ? void 0 : c.store_page_primary_color) || P !== (null == c ? void 0 : c.store_page_trailer_url) || null != D && D !== (null == c ? void 0 : c.store_page_show_subscriber_count), M = async () => {
            o()(null != c, "Settings must be defined");
            let e = {};
            S !== l.features.has(O.GuildFeatures.CREATOR_STORE_PAGE) && (e.store_page_enabled = S), ((null == c ? void 0 : c.store_page_primary_color) == null && T !== N || (null == c ? void 0 : c.store_page_primary_color) != null && T !== (null == c ? void 0 : c.store_page_primary_color)) && (e.store_page_primary_color = T), P !== (null == c ? void 0 : c.store_page_trailer_url) && (e.store_page_trailer_url = P), D !== (null == c ? void 0 : c.store_page_show_subscriber_count) && (e.store_page_show_subscriber_count = D), Object.keys(e).length > 0 && (await j(l.id, e), "store_page_enabled" in e && x.default.track(O.HAw.GUILD_ROLE_SUBSCRIPTION_STORE_PAGE_TOGGLED, function(e) {
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
                enabled: S
            }, (0, f.H$)(l.id))))
        }, U = O.X7G.ROLE_SUBSCRIPTION_STORE_PAGE(L), B = null != P && P === (null == c ? void 0 : c.store_page_trailer_url), {
            shouldRestrictUpdatingCreatorMonetizationSettings: F
        } = (0, b.nq)(l.id), H = F || !R, V = !S && !a;
        return (0, r.jsxs)(g.BJc, {
            gap: 24,
            children: [(0, r.jsx)(g.Heading, {
                variant: "heading-lg/semibold",
                children: v.intl.string(v.t.N6Tg9A)
            }), (0, r.jsxs)(g.BJc, {
                gap: 8,
                children: [(0, r.jsx)(g.dOG, {
                    label: v.intl.string(v.t.lwvl1g),
                    checked: S,
                    disabled: F || V,
                    description: v.intl.string(v.t["uU/69/"]),
                    onChange: e => I(e)
                }), V ? (0, r.jsx)(g.po8, {
                    messageType: g.YCn.WARNING,
                    children: v.intl.string(v.t.mIgfEu)
                }) : null]
            }), (0, r.jsx)(g.cGx, {}), (0, r.jsxs)(g.D0$, {
                label: v.intl.string(v.t.N46WOv),
                disabled: F,
                children: [(0, r.jsx)(m.A, {
                    value: U,
                    className: s()({
                        [y.r9]: F
                    })
                }), (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: y.eZ,
                    children: (0, r.jsx)(g.Button, {
                        variant: "primary",
                        text: v.intl.string(v.t.CaOYqc),
                        onClick: () => (0, p.A)(U),
                        disabled: F
                    })
                })]
            }), (0, r.jsx)(g.cGx, {}), (0, r.jsx)(g.D0$, {
                label: v.intl.string(v.t.W39uIL),
                description: v.intl.string(v.t.B6XtE7),
                children: (0, r.jsxs)("div", {
                    className: y.xu,
                    children: [(0, r.jsx)(g.Text, {
                        variant: "text-md/medium",
                        style: {
                            backgroundColor: "#".concat(T.toString(16).padStart(6, "0"))
                        },
                        className: y.pB,
                        children: v.intl.string(v.t.l6iM36)
                    }), (0, r.jsx)(g.skP, {
                        colors: A,
                        customColor: null,
                        defaultColor: N,
                        value: T,
                        onChange: e => C(e),
                        renderDefaultButton: () => null,
                        renderCustomButton: () => null,
                        colorContainerClassName: y.jP,
                        disabled: F
                    })]
                })
            }), (0, r.jsx)(g.cGx, {}), (0, r.jsx)(g.ksK, {
                label: v.intl.string(v.t.k2yRvd),
                description: v.intl.string(v.t.amd996),
                value: null != P ? P : void 0,
                onChange: e => w("" === e ? null : e),
                error: R ? null : v.intl.string(v.t["1kL79Q"]),
                placeholder: v.intl.string(v.t["+I4gdT"]),
                trailing: R && B ? g.yr3 : void 0,
                disabled: F
            }), (0, r.jsx)(g.cGx, {}), (0, r.jsx)(g.nVY, {
                label: v.intl.string(v.t.AU2HU0),
                description: v.intl.string(v.t.iWBt3Q),
                children: (0, r.jsx)(g.dOG, {
                    label: v.intl.string(v.t.hJsAPo),
                    description: v.intl.string(v.t.hn65ET),
                    icon: g.nys,
                    checked: D,
                    onChange: e => G(e),
                    disabled: F
                })
            }), (0, r.jsx)(d.F, {
                component: "div",
                className: y.se,
                children: k && (0, r.jsx)(g.FQk, {
                    children: (0, r.jsx)(u.A, {
                        submitting: h,
                        onReset: () => {
                            var e, t;
                            I(l.features.has(O.GuildFeatures.CREATOR_STORE_PAGE)), C(null != (e = null == c ? void 0 : c.store_page_primary_color) ? e : N), w(null == c ? void 0 : c.store_page_trailer_url), G(null != (t = null == c ? void 0 : c.store_page_show_subscriber_count) && t)
                        },
                        onSave: M,
                        disabled: H
                    })
                })
            })]
        })
    };

function I() {
    let e = (0, c.bG)([h.A], () => h.A.getGuild()),
        t = (0, j.X)(),
        n = (0, _.uP)(null == e ? void 0 : e.id).some(e => e.published);
    return null != e && t ? (0, r.jsx)(S, {
        guild: e,
        canEnable: n
    }) : (0, r.jsx)(g.y$y, {})
}

function T() {
    let e = (0, c.bG)([h.A], () => h.A.getGuild());
    return (0, r.jsx)(j.H, {
        guildId: null == e ? void 0 : e.id,
        refetchOnMount: !0,
        children: (0, r.jsx)(I, {})
    })
}