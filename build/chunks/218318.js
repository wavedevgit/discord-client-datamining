/** chunk id: 218318, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => k
}), n(896048);
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(110259),
    o = n(311907),
    c = n(397927),
    d = n(765671),
    _ = n(235986),
    u = n(915089),
    p = n(362311),
    m = n(230801),
    f = n(424912),
    b = n(468820),
    E = n(287809),
    h = n(954571),
    N = n(426620),
    A = n(603738),
    x = n(701077),
    T = n(758384),
    y = n(239763),
    j = n(771016),
    g = n(994277),
    O = n(652215),
    v = n(570465),
    C = n(819638),
    D = n(985018),
    I = n(147732);

function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), a.forEach(function(t) {
            var a;
            a = n[t], t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a
        })
    }
    return e
}

function S(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            n.push.apply(n, a)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function k(e) {
    let t = (0, u.GV)(),
        {
            onSlideChange: n
        } = e,
        l = function(e, t) {
            if (null == e) return {};
            var n, a, i, l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) a = n[i], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (l[a] = e[a]);
                return l
            }
            if (l = function(e, t) {
                    if (null == e) return {};
                    var n, a, i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (a = 0; a < l.length; a++) n = l[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i
                }(e, t), Object.getOwnPropertySymbols)
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) a = n[i], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (l[a] = e[a]);
            return l
        }(e, ["onSlideChange"]),
        {
            onClose: k
        } = l,
        [L, U] = i.useState(!1),
        w = (0, o.bG)([E.default], () => E.default.getCurrentUser()),
        R = null != w && null == w.nsfwAllowed,
        [M, P] = i.useState(R ? g.i.AGE_GATE : g.i.CHOOSE_TEMPLATE),
        [W, H] = i.useState(null);
    i.useEffect(() => {
        n(L ? g.i.COMPLETE : M)
    }, [n, M, L]);
    let [B, V] = i.useState(null), [F, q] = i.useState(null), [z, J] = i.useState(!1), Y = (0, o.bG)([N.A], () => N.A.getType() === j.zY.INVITE_UNCLAIMED), Z = i.useCallback(e => {
        q(e), P(g.i.CREATION_INTENT), h.default.track(O.HAw.GUILD_TEMPLATE_SELECTED, {
            template_name: e.label,
            template_code: e.code
        })
    }, [q, P]), {
        content: K,
        footer: Q
    } = (0, m.u)({
        hasFooter: !1,
        onBack: () => {
            q(null), P(g.i.CHOOSE_TEMPLATE)
        },
        onCreationIntentChosen: e => {
            J(e === C.IR.COMMUNITY), P(g.i.CUSTOMIZE_GUILD)
        }
    }), {
        content: $,
        footer: X
    } = (0, f.D)({
        guildTemplate: F,
        titleClassName: I.RH,
        hasFooter: !1,
        onGuildCreated: e => {
            V(e), (null == F ? void 0 : F.id) === v.v.CREATE ? P(g.i.CHANNEL_PROMPT) : U(!0)
        },
        onBack: () => {
            P(g.i.CREATION_INTENT)
        },
        isSlideReady: W === g.i.CUSTOMIZE_GUILD,
        isCommunity: z
    }), {
        content: ee,
        footer: et
    } = (0, p.m)({
        createdGuildId: B,
        hasFooter: !1,
        onChannelPromptCompleted: () => {
            U(!0)
        },
        isSlideReady: W === g.i.CHANNEL_PROMPT
    }), {
        content: en,
        footer: ea
    } = (0, T.A)({
        onBack: () => P(g.i.CHOOSE_TEMPLATE),
        onComplete: () => {
            k()
        },
        onConnect: k,
        isSlideReady: W === g.i.JOIN_GUILD
    }), ei = null;
    switch (M) {
        case g.i.CUSTOMIZE_GUILD:
            ei = X;
            break;
        case g.i.CHANNEL_PROMPT:
            ei = et;
            break;
        case g.i.JOIN_GUILD:
            ei = ea;
            break;
        case g.i.CREATION_INTENT:
            ei = Q
    }
    let {
        ref: el,
        width: es
    } = (0, d.Ay)();
    if (L) return (0, a.jsx)(c.EOs, S(G({}, l), {
        "data-migration-pending": !0,
        size: c.rIJ.MEDIUM,
        className: s()(I.yl, I.so),
        "aria-labelledby": t,
        parentComponent: "NUFModal",
        children: (0, a.jsx)(x.A, {
            onComplete: k
        })
    }));
    let er = {
        impression_group: r.ImpressionGroups.GUILD_ADD_NUF
    };
    return (0, a.jsxs)(c.EOs, S(G({}, l), {
        "data-migration-pending": !0,
        size: c.rIJ.MEDIUM,
        className: I.yl,
        "aria-labelledby": t,
        parentComponent: "NUFModal",
        children: [(0, a.jsx)("div", {
            className: I.pz,
            children: (0, a.jsx)(y.A, {
                step: M
            })
        }), (0, a.jsx)(c.NPJ, {
            theme: O.NJ8.LIGHT,
            children: e => (0, a.jsxs)("div", {
                className: s()(I.Qs, e),
                ref: el,
                children: [(0, a.jsx)("div", {
                    className: I.WT,
                    children: (0, a.jsxs)(c.tN_, {
                        activeSlide: M,
                        onSlideReady: e => H(e),
                        centered: !1,
                        width: es,
                        children: [(0, a.jsx)(c.q7S, {
                            id: g.i.AGE_GATE,
                            children: (0, a.jsx)("div", {
                                className: I.kL,
                                children: (0, a.jsx)(A.A, {
                                    onComplete: () => {
                                        Y ? k() : P(g.i.CHOOSE_TEMPLATE)
                                    },
                                    onClose: k
                                })
                            })
                        }), (0, a.jsx)(c.q7S, {
                            id: g.i.CHOOSE_TEMPLATE,
                            impressionName: r.ImpressionNames.GUILD_ADD_LANDING,
                            impressionProperties: er,
                            children: (0, a.jsx)("div", {
                                className: s()(I.kL, I.yT),
                                children: (0, a.jsx)(b.A, {
                                    className: I.kT,
                                    onChooseTemplate: Z,
                                    isNewUser: !0
                                })
                            })
                        }), (0, a.jsx)(c.q7S, {
                            id: g.i.CREATION_INTENT,
                            impressionName: r.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
                            impressionProperties: er,
                            children: (0, a.jsx)("div", {
                                className: s()(I.kL, I.tn),
                                children: K
                            })
                        }), (0, a.jsx)(c.q7S, {
                            id: g.i.CUSTOMIZE_GUILD,
                            impressionName: r.ImpressionNames.GUILD_ADD_CUSTOMIZE,
                            impressionProperties: er,
                            children: (0, a.jsx)("div", {
                                className: s()(I.kL, I.tn),
                                children: $
                            })
                        }), (0, a.jsx)(c.q7S, {
                            id: g.i.CHANNEL_PROMPT,
                            impressionName: r.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
                            impressionProperties: er,
                            children: (0, a.jsx)("div", {
                                className: s()(I.kL, I.tn),
                                children: ee
                            })
                        }), (0, a.jsx)(c.q7S, {
                            id: g.i.JOIN_GUILD,
                            impressionName: r.ImpressionNames.GUILD_ADD_JOIN,
                            impressionProperties: er,
                            children: (0, a.jsx)("div", {
                                className: s()(I.kL, I.tn),
                                children: en
                            })
                        })]
                    })
                }), M !== g.i.AGE_GATE ? (0, a.jsx)(c.s_y, {
                    "data-migration-pending": !0,
                    onClick: k,
                    className: I.b
                }) : null, M === g.i.CHOOSE_TEMPLATE ? (0, a.jsx)(c.jlY, {
                    "data-migration-pending": !0,
                    justify: _.A.Justify.BETWEEN,
                    className: s()(I.qr, I.fj),
                    children: (0, a.jsx)(c.MzZ, {
                        className: I.D3,
                        onClick: () => {
                            P(g.i.JOIN_GUILD)
                        },
                        children: (0, a.jsxs)(c.Text, {
                            variant: "text-sm/medium",
                            className: I.D3,
                            children: [D.intl.string(D.t["N+Mi/U"]), " ", D.intl.string(D.t.yRjK4p)]
                        })
                    })
                }) : null, null != ei ? (0, a.jsx)(c.jlY, {
                    "data-migration-pending": !0,
                    justify: _.A.Justify.BETWEEN,
                    className: I.qr,
                    children: ei
                }) : null]
            })
        })]
    }))
}