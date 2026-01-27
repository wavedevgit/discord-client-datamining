/** Chunk was on 39048 **/
/** chunk id: 454516, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
}), n(896048), n(733351), n(228524), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(735438),
    s = n.n(l),
    a = n(417597),
    o = n(397927),
    c = n(442433),
    d = n(686956),
    u = n(475743),
    g = n(736653),
    m = n(962125),
    p = n(859126),
    f = n(287809),
    h = n(996439),
    b = n(997509),
    x = n(555337),
    j = n(203498),
    _ = n(660496),
    O = n(652215),
    v = n(985018),
    y = n(220906);

function A(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            A(e, t, n[t])
        })
    }
    return e
}

function N(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
class S extends i.PureComponent {
    render() {
        var e;
        let {
            user: t,
            guild: n
        } = this.props;
        return (0, r.jsxs)(o.DUT, {
            className: y.KD,
            onClick: this.handleShowModal,
            onContextMenu: this.handleContextMenu,
            children: [(0, r.jsx)(o.euF, {
                src: t.getAvatarURL(null == n ? void 0 : n.id, 40),
                "aria-label": t.username,
                size: o._3J.SIZE_40,
                className: y.pX
            }), (0, r.jsxs)("div", {
                className: y.Xh,
                children: [(0, r.jsx)(o.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: null != (e = t.globalName) ? e : t.username
                }), (0, r.jsx)(o.Text, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    children: null != t.globalName ? t.username : null
                })]
            })]
        })
    }
    constructor(...e) {
        super(...e), A(this, "handleShowModal", () => {
            let {
                guild: e,
                user: t,
                ban: i
            } = this.props;
            (0, o.mMO)(async () => {
                let {
                    default: l
                } = await n.e("50437").then(n.bind(n, 392516));
                return n => (0, r.jsx)(l, N(E({}, n), {
                    guild: e,
                    user: t,
                    ban: i
                }))
            })
        }), A(this, "handleContextMenu", e => {
            (0, c.L3)(e, async () => {
                let {
                    default: e
                } = await n.e("12123").then(n.bind(n, 263702));
                return t => (0, r.jsx)(e, N(E({}, t), {
                    user: this.props.user
                }))
            })
        })
    }
}
let I = i.forwardRef(function(e, t) {
    let {
        guild: n,
        sortedBans: l,
        bans: s
    } = e, a = i.useCallback(e => {
        var t;
        if (null == s && 0 === e) return 60;
        let n = l[e],
            r = null == s ? void 0 : s.get(null != (t = null == n ? void 0 : n.id) ? t : "");
        return 60 * (null != n && null != r)
    }, [s, l]), c = i.useCallback(e => {
        var t;
        if (null == s && 0 === e) return (0, r.jsx)(o.y$y, {
            className: y.u1,
            type: o.y$y.Type.SPINNING_CIRCLE
        }, "spinner");
        let i = l[e],
            a = null == s ? void 0 : s.get(null != (t = null == i ? void 0 : i.id) ? t : "");
        if (null != i && null != a) return (0, r.jsx)(S, {
            user: i,
            ban: a,
            guild: n
        }, i.id)
    }, [s, n, l]);
    return (0, r.jsx)(m.A, {
        role: "listbox",
        listPadding: [8, 8, 8, 8],
        rowCount: l.length,
        rowHeight: a,
        renderRow: c,
        ref: t
    })
});

function T(e) {
    let {
        guildId: t,
        storedSearchQuery: n
    } = e, [l, s] = i.useState(null != n ? n : ""), [a, c] = i.useState(!1), u = i.useCallback(() => {
        b.A.setSection(O.BEX.SAFETY), (0, j.K)(_.C.DM_AND_SPAM_PROTECTION)
    }, []), g = i.useCallback(e => {
        s(e), 0 === e.trim().length && b.A.setSearchQuery(e)
    }, []), m = i.useCallback(() => {
        s(""), b.A.setSearchQuery("")
    }, []), f = i.useCallback(async () => {
        if (0 === l.trim().length) {
            b.A.setSearchQuery(l), c(!1);
            return
        }
        if (!a) try {
            c(!0);
            let [e, n] = (0, p.H)(l), r = e[0];
            b.A.setSearchQuery(l), await d.A.searchGuildBans(t, r, n), c(!1)
        } catch (e) {
            c(!1)
        }
    }, [t, a, l]), h = i.useCallback(e => {
        "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), f())
    }, [f]);
    return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(o.Heading, {
            variant: "heading-lg/semibold",
            children: v.intl.string(v.t["7OY0gJ"])
        }), (0, r.jsx)("div", {
            className: y.Vu,
            children: (0, r.jsx)(o.Text, {
                variant: "text-sm/normal",
                className: y.h_,
                children: v.intl.format(v.t.JcZ36i, {
                    onModerationClick: u
                })
            })
        }), (0, r.jsxs)("div", {
            className: y.IA,
            children: [(0, r.jsx)(o.IWV, {
                query: null != l ? l : "",
                placeholder: v.intl.string(v.t.MiqUmf),
                "aria-label": v.intl.string(v.t.MiqUmf),
                onChange: g,
                onKeyDown: h,
                onClear: m
            }), (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: y.JU,
                children: (0, r.jsx)(o.Button, {
                    variant: "primary",
                    text: v.intl.string(v.t["5h0QOP"]),
                    onClick: f,
                    disabled: a,
                    loading: a
                })
            })]
        })]
    })
}

function C() {
    var e, t;
    let {
        guild: c,
        searchQuery: m
    } = (0, a.bG)([x.A], () => x.A.getProps(), [], l.isEqual), b = null != m && m.trim().length > 0, j = (0, u.A)(b), _ = b !== j, [A] = (0, a.bG)([x.A], () => x.A.getBans(), [], h.D), S = null != (e = null == A ? void 0 : A.size) ? e : 0, C = (0, g.Ay)(), P = null != (t = null == c ? void 0 : c.id) ? t : O.dJq, w = i.useRef(null), R = i.useCallback(e => null == e || 0 === e.length ? e => null != e : t => {
        if (null == t || 0 === e.trim().length) return !1;
        let [
            [n], r
        ] = (0, p.H)(e);
        return !!r.includes(t.id) || null != n && !!(t.username.toLowerCase().includes(n.toLowerCase()) || null != t.globalName && t.globalName.toLowerCase().includes(n.toLowerCase()))
    }, []), D = i.useCallback((e, t, n) => {
        if (null == e || 0 === n) return [];
        let r = [];
        for (let n of e.keys()) {
            let e = f.default.getUser(n);
            null != e && R(t)(e) && r.push(e)
        }
        return r
    }, [R]), G = i.useMemo(() => D(A, m, S), [A, D, m, S]), L = null != A, k = G.length % 1e3 == 0 && G.length > 0 && L, M = 0 === G.length, [U, B] = i.useState({
        currentPage: 1,
        pageSize: 100
    });
    i.useEffect(() => {
        _ && 1 !== U.currentPage && B(e => N(E({}, e), {
            currentPage: 1
        }))
    }, [_, U.currentPage]);
    let F = i.useCallback(e => {
            d.A.fetchGuildBansBatch(P, 1e3, e)
        }, [P]),
        H = i.useMemo(() => s().chunk(G, U.pageSize), [U.pageSize, G]),
        V = i.useCallback(e => {
            var t, n, r;
            null == (t = w.current) || t.scrollToSectionTop(0), (e + 1) * U.pageSize > G.length && k && !b && (K.current = null != (n = null == (r = G[G.length - 1]) ? void 0 : r.id) ? n : null, F(K.current)), (null != H[e - 1] || k) && B(t => N(E({}, t), {
                currentPage: e
            }))
        }, [U.pageSize, G, k, H, F, b]),
        K = i.useRef(null);
    i.useEffect(() => {
        F(K.current)
    }, [F]);
    let z = i.useMemo(() => {
        var e;
        return null != (e = H[U.currentPage - 1]) ? e : []
    }, [H, U.currentPage]);
    return null == c ? null : (0, r.jsxs)("div", {
        className: y.kL,
        children: [(0, r.jsx)(T, {
            guildId: P,
            storedSearchQuery: m
        }), (0, r.jsxs)("div", {
            className: y.gs,
            children: [!M && (0, r.jsx)(I, {
                guild: c,
                bans: A,
                sortedBans: z,
                ref: w
            }), !k && M && (0, r.jsxs)(o.ppr, {
                theme: C,
                className: y.p$,
                children: [(0, r.jsx)(o.G8R, {
                    darkSrc: n(29093),
                    lightSrc: n(993507),
                    width: 256,
                    height: 212
                }), (0, r.jsx)(o.SGT, {
                    note: v.intl.string(v.t.zfCsAw),
                    style: {
                        maxWidth: 300
                    },
                    children: v.intl.string(v.t.ZEiY1D)
                })]
            })]
        }), (0, r.jsx)("div", {
            children: (0, r.jsx)(o.mgR, {
                className: y.JV,
                totalCount: G.length + (k ? U.pageSize : 0),
                pageSize: U.pageSize,
                currentPage: U.currentPage,
                onPageChange: V,
                maxVisiblePages: 9
            })
        })]
    })
}