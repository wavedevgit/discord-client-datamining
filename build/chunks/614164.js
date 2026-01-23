/** Chunk was on 47841 **/
/** chunk id: 614164, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => T
}), n(896048), n(321073), n(864466), n(443073);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(735438),
    o = n.n(a),
    c = n(311907),
    d = n(397927),
    u = n(73153),
    g = n(370480),
    m = n(975571),
    p = n(642133),
    f = n(636042),
    b = n(396816),
    h = n(785312),
    x = n(158720),
    j = n(316506),
    _ = n(927573),
    O = n(652215),
    v = n(783419),
    y = n(985018),
    A = n(750730),
    E = n(261223);

function N(e) {
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

function S(e, t) {
    return t !== g.jO.AND ? Object.values(o().groupBy(e, e => "".concat(e.connectionType, ":").concat(e.applicationId))) : 0 === e.length ? [] : [
        [...e]
    ]
}

function I(e) {
    let {
        handleAddVerificationClicked: t,
        locked: n
    } = e;
    return (0, r.jsxs)("div", {
        className: A.Gq,
        children: [(0, r.jsx)(d.Heading, {
            className: A.gg,
            variant: "eyebrow",
            children: y.intl.string(y.t.nMir27)
        }), (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            className: A.$L,
            children: y.intl.format(y.t.q5f7tK, {
                helpdeskArticleUrl: m.A.getArticleURL(O.MVz.CONNECTION_DETAILS_ADMIN)
            })
        }), (0, r.jsx)(d.Button, {
            disabled: n,
            onClick: t,
            text: y.intl.string(y.t["OSvW5+"]),
            fullWidth: !0,
            variant: "primary"
        })]
    })
}

function T(e) {
    let {
        guild: t,
        role: n,
        locked: l,
        setSelectedSection: a,
        integrations: o
    } = e, {
        headerHeight: T,
        headerRef: C
    } = (0, h.A)(0), {
        scrolledToTop: P,
        handleScroll: w
    } = (0, j.u)(), R = (0, c.bG)([p.A], () => {
        var e;
        return null == (e = p.A.getRoleMemberCount(t.id)) ? void 0 : e[n.id]
    }, [n.id, t.id]), D = (0, c.yK)([b.A], () => {
        var e;
        return null != (e = b.A.getEditedRoleConnectionConfigurationsMap().get(n.id)) ? e : []
    }), G = D.length > 1 ? g.jO.OR : g.jO.AND, L = i.useMemo(() => G === g.jO.OR ? D.flat() : null != D && D.length > 0 ? D[0] : [], [G, D]), k = i.useMemo(() => new Set(L.map(e => e.connectionType)), [L]);

    function M(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            r = [...L];
        r.push({
            connectionType: e,
            connectionMetadataField: void 0,
            applicationId: t,
            operator: void 0,
            value: void 0
        }), (0, f.pn)(n.id, S(r, G))
    }

    function U() {
        u.h.dispatch({
            type: "CONNECTIONS_GRID_MODAL_SHOW",
            onComplete: e => M(e),
            excludedPlatformTypes: k,
            integrations: o,
            onCompleteApplication: e => M(v.zR, e)
        })
    }
    let B = null;
    if (0 === L.length) B = (0, r.jsx)(I, {
        handleAddVerificationClicked: U,
        locked: l
    });
    else if (L.length > 0) {
        var F, H;
        let e, t = null;
        L.length < 10 && (t = (0, r.jsx)(d.Button, {
            disabled: l,
            onClick: U,
            text: y.intl.string(y.t["OSvW5+"]),
            icon: d.U1e,
            fullWidth: !0,
            variant: "secondary"
        })), B = (0, r.jsxs)(r.Fragment, {
            children: [(F = () => (0, f.pn)(n.id, []), (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsxs)("div", {
                    className: A.$$,
                    children: [(0, r.jsx)("div", {
                        className: A.Ir,
                        children: (0, r.jsx)(d.Heading, {
                            variant: "eyebrow",
                            children: y.intl.string(y.t.nMir27)
                        })
                    }), (0, r.jsx)(d.QWc, {
                        variant: "critical",
                        onClick: F,
                        disabled: l,
                        text: y.intl.string(y.t.ntW1cc),
                        textVariant: "text-sm/semibold"
                    })]
                }), (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: y.intl.format(y.t.q5f7tK, {
                        helpdeskArticleUrl: m.A.getArticleURL(O.MVz.CONNECTION_DETAILS_ADMIN)
                    })
                })]
            })), (n.id, H = (e, t) => (0, f.pn)(n.id, S(e, t)), e = S(L, g.jO.OR), (0, r.jsx)(d.z6M, {
                label: y.intl.string(y.t.Xs7PHX),
                options: [{
                    name: y.intl.string(y.t.W3iY58),
                    value: g.jO.OR
                }, {
                    name: y.intl.string(y.t.gHXS9A),
                    value: g.jO.AND
                }],
                onChange: e => H(L, e),
                value: G,
                disabled: l || e.length < 2
            })), function(e, t, n, i, l) {
                function s(n, r) {
                    let i = [];
                    for (let t of e) i.push(N({}, t));
                    if (null == n) {
                        let t = e[r];
                        null !== t && null == t.connectionMetadataField && null == t.operator && null == t.value ? i = i.filter(e => null == t.applicationId ? e.connectionType !== t.connectionType : e.connectionType !== t.connectionType && e.applicationId !== t.applicationId) : i.splice(r, 1)
                    } else - 1 === r ? i.push(n) : r >= 0 && (i[r] = n);
                    t(i)
                }
                let a = new Map;
                for (let t of (e.forEach((e, t) => {
                        let n = "".concat(e.connectionType, ":").concat(e.applicationId);
                        if (a.has(n)) {
                            let r = a.get(n);
                            null == r || r.push({
                                index: t,
                                configuration: e
                            })
                        } else a.set(n, [{
                            index: t,
                            configuration: e
                        }])
                    }), a.values())) {
                    if (t.some(e => {
                            let {
                                configuration: t
                            } = e;
                            return null == t.connectionMetadataField && null == t.operator && null == t.value
                        })) continue;
                    let n = function(e, t) {
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
                        }(N({}, t[0].configuration), {
                            connectionMetadataField: void 0,
                            operator: void 0,
                            value: void 0
                        }),
                        r = e.push(n);
                    t.push({
                        index: r - 1,
                        configuration: n
                    })
                }
                return (0, r.jsx)("div", {
                    className: A.rr,
                    children: Array.from(a.values()).map(e => (0, r.jsx)(x.A, {
                        configurationItems: e,
                        onConfigurationChange: s,
                        locked: n,
                        integrations: l
                    }, e[0].configuration.connectionType + ":" + e[0].index))
                })
            }(L, e => (0, f.pn)(n.id, S(e, G)), l, n.id, o), t]
        })
    }
    return (0, r.jsx)(d.GtU, {
        className: A.XG,
        style: {
            scrollPaddingTop: T
        },
        onScroll: w,
        children: (0, r.jsxs)("div", {
            className: E.Q,
            children: [(0, r.jsx)("div", {
                className: s()(E.wx, E.ln, {
                    [E.l6]: !P
                }),
                ref: C,
                children: (0, r.jsx)(j.A, {
                    guild: t,
                    role: n,
                    selectedSection: _.T$.VERIFICATIONS,
                    setSelectedSection: a
                })
            }), (null != R ? R : 0) > 0 ? (0, r.jsxs)("div", {
                className: A.UW,
                children: [(0, r.jsx)(d.EpV, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: A.QW
                }), (0, r.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: y.intl.string(y.t["2aFeef"])
                })]
            }) : null, B]
        })
    })
}