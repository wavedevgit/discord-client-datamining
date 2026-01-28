/** Chunk was on 78528 **/
/** chunk id: 483270, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => Q
}), n(896048), n(264879);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(735438),
    o = n.n(a),
    c = n(837381),
    u = n(884362),
    d = n(607399),
    p = n(311907),
    h = n(397927),
    f = n(442433),
    g = n(414798),
    m = n(775602),
    b = n(793574),
    A = n(688810),
    y = n(485947),
    _ = n(509536),
    O = n(201275),
    j = n(111864),
    v = n(657048),
    x = n(561010),
    E = n(219065),
    C = n(342296),
    S = n(616356),
    I = n(696451),
    N = n(317525),
    T = n(290863),
    P = n(461213),
    w = n(741961),
    R = n(287809),
    D = n(303727),
    M = n(954571),
    L = n(203982),
    k = n(488926),
    U = n(427262),
    G = n(837921),
    B = n(110574),
    V = n(652215),
    F = n(985018),
    H = n(767952),
    K = n(701939);

function W(e) {
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
let z = G.Ay.getEnableHardwareAcceleration(),
    Y = 44 + B.b,
    q = l.memo(function(e) {
        let {
            channel: t,
            sectionId: i,
            userId: s,
            guildOwnerId: a
        } = e, o = l.useRef(null), u = (0, p.bG)([w.A], () => w.A.isTyping(t.id, s)), h = (0, p.bG)([I.Ay], () => I.Ay.getMember(t.guild_id, s)), m = (0, p.bG)([N.A], () => {
            var e;
            return (null == h ? void 0 : h.colorRoleId) != null ? null == (e = N.A.getRole(t.guild_id, h.colorRoleId)) ? void 0 : e.name : void 0
        }, [t.guild_id, h]), b = (0, p.bG)([R.default], () => R.default.getUser(s)), A = (0, p.bG)([R.default], () => R.default.getCurrentUser()), y = (null == b ? void 0 : b.id) === (null == A ? void 0 : A.id), O = (0, p.bG)([T.A, P.A], () => y ? P.A.getStatus() : T.A.getStatus(s, t.guild_id)), v = (0, p.bG)([T.A], () => T.A.isMobileOnline(s)), x = (0, p.bG)([T.A, P.A], () => y ? P.A.getActivities() : T.A.getActivities(s, t.guild_id)), D = (0, p.bG)([S.A], () => S.A.getAnyStreamForUser(s)), M = (0, c.rm)(s), k = (0, p.bG)([E.A], () => E.A.canUserViewChannel(t.id, i, s)), G = (null == b ? void 0 : b.id) != null && b.id === a, H = l.useCallback(e => {
            null != b && (0, f.L3)(e, async () => {
                let {
                    default: e
                } = await Promise.all([n.e("97262"), n.e("29534"), n.e("67447"), n.e("79961")]).then(n.bind(n, 708202));
                return n => {
                    var l, i;
                    return (0, r.jsx)(e, (l = W({}, n), i = i = {
                        user: b,
                        guildId: t.guild_id,
                        channel: t
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(i)).forEach(function(e) {
                        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
                    }), l))
                }
            })
        }, [b, t]), K = l.useCallback(() => {
            if (null == b) return;
            let e = "@".concat(U.Ay.getUserTag(b, {
                    decoration: "never"
                })),
                n = "<@".concat(b.id, ">");
            L._.dispatch(V.jej.TEXTAREA_FOCUS, {
                channelId: t.id
            }), L._.dispatchToLastSubscribed(V.jej.INSERT_TEXT, {
                plainText: e,
                rawText: n
            }), g.A.startTyping(t.id)
        }, [b, t]), Y = l.useCallback(e => {
            e.stopPropagation(), (0, _.K)({
                guildId: t.guild_id,
                location: {
                    section: V.JJy.THREAD_MEMBER_LIST,
                    object: V.ZSU.BOOST_GEM_ICON
                }
            })
        }, [t.guild_id]), q = (0, j.r)({
            user: b,
            guildId: t.guild_id
        }), [X, J] = l.useState(!1);
        if (null == b) return null;
        let Q = null == h ? void 0 : h.premiumSince;
        return (0, r.jsx)(C.A, {
            targetElementRef: o,
            user: b,
            guildId: t.guild_id,
            channelId: t.id,
            position: d.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: K,
            shouldShow: X,
            onRequestClose: () => J(!1),
            children: e => {
                let {
                    onClick: n,
                    onMouseDown: l
                } = e, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, l, i = {};
                    if ("u" > typeof Reflect && Reflect.ownKeys) {
                        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                        return i
                    }
                    if (i = function(e, t) {
                            if (null == e) return {};
                            var n, r, l = {},
                                i = Object.getOwnPropertyNames(e);
                            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                            return l
                        }(e, t), Object.getOwnPropertySymbols)
                        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                    return i
                }(e, ["onClick", "onMouseDown"]);
                return (0, r.jsx)(B.A, W({
                    ref: o,
                    onContextMenu: H,
                    shouldAnimateStatus: z,
                    user: b,
                    currentUser: A,
                    nick: null == h ? void 0 : h.nick,
                    status: O,
                    activities: x,
                    colorString: null == h ? void 0 : h.colorString,
                    colorStrings: null == h ? void 0 : h.colorStrings,
                    colorRoleName: m,
                    isTyping: u,
                    channel: t,
                    guildId: t.guild_id,
                    isMobile: v,
                    selected: X,
                    applicationStream: D,
                    premiumSince: null == Q ? null : new Date(Q),
                    onClickPremiumGuildIcon: Y,
                    itemProps: M,
                    lostPermissionTooltipText: k ? void 0 : F.intl.string(F.t["/QcoTz"]),
                    isOwner: G,
                    nameplate: q,
                    onClick: e => {
                        e.shiftKey ? null == K || K() : J(e => !e)
                    },
                    onMouseDown: e => {
                        X ? e.stopPropagation() : null == l || l(e)
                    }
                }, i))
            }
        })
    }),
    X = l.memo(function(e) {
        let {
            id: t,
            label: n,
            count: l,
            guildId: i
        } = e, s = (0, O.$7)({
            roleId: t,
            guildId: i,
            size: 16
        });
        return t === V.clD.UNKNOWN ? (0, r.jsx)("div", {
            className: K.lL,
            children: (0, r.jsx)("div", {
                className: K.k1
            })
        }) : (0, r.jsxs)(y.A, {
            className: K.lL,
            "aria-label": F.intl.formatToPlainString(F.t.Uaqbke, {
                title: n,
                count: l
            }),
            children: [null != s ? (0, r.jsx)(v.A, W({
                className: K.UT
            }, s)) : null, (0, r.jsxs)("span", {
                "aria-hidden": !0,
                children: [n, " — ", l]
            })]
        })
    }),
    J = l.memo(function(e) {
        let {
            channel: t
        } = e;
        return t.type === V.rbe.PRIVATE_THREAD ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
                className: H.yF
            }), (0, r.jsxs)(h.Text, {
                variant: "text-xs/bold",
                color: "text-default",
                className: H.Uz,
                children: [(0, r.jsx)(h.XAi, {
                    size: "xxs",
                    color: "currentColor"
                }), "\xa0", F.intl.string(F.t.BTLTAs)]
            }), (0, r.jsx)(h.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                className: H.GA,
                children: F.intl.string(F.t.Hsd8hC)
            })]
        }) : null
    });

function Q(e) {
    var t, n;
    let i, a, d, f, g, {
            channel: y,
            guild: _
        } = e,
        O = "members-".concat(y.id),
        {
            analyticsLocations: j
        } = (0, A.Ay)(b.A.MEMBER_LIST),
        v = (0, x.q)(y.id, _),
        E = v.filter(e => e.userIds.length > 0).reverse()[0],
        {
            navigator: C,
            listRef: S
        } = (t = O, n = Y, i = (0, p.bG)([m.A], () => m.A.keyboardModeEnabled), a = l.useRef(null), d = l.useCallback((e, t) => {
            let r = a.current;
            if (null == r) return;
            let l = parseInt(t, 10),
                [i, s] = r.getSectionRowFromIndex(l),
                o = 0 === i && 0 === s ? n : 0;
            r.scrollToIndex({
                section: i,
                row: s,
                padding: o,
                callback: () => {
                    requestAnimationFrame(() => {
                        var t;
                        return null == (t = document.querySelector(e)) ? void 0 : t.focus({
                            preventScroll: !0
                        })
                    })
                }
            })
        }, [n]), f = l.useCallback(() => new Promise(e => {
            let t = a.current;
            if (null == t) return e();
            t.scrollToTop({
                callback: () => requestAnimationFrame(() => e())
            })
        }), []), g = l.useCallback(() => new Promise(e => {
            let t = a.current;
            if (null == t) return e();
            t.scrollToBottom({
                callback() {
                    requestAnimationFrame(() => setTimeout(e, 100))
                }
            })
        }), []), {
            navigator: (0, u.Ay)({
                id: t,
                setFocus: d,
                isEnabled: i,
                scrollToStart: f,
                scrollToEnd: g
            }),
            listRef: a
        }),
        I = 0 === v.length || v.every(e => 0 === e.userIds.length);
    if (l.useEffect(() => {
            M.default.track(V.HAw.MEMBER_LIST_VIEWED, {
                channel_id: y.id,
                channel_type: y.type,
                guild_id: y.guild_id
            })
        }, [y.guild_id, y.id, y.type]), I) return (0, r.jsx)(Z, {
        channel: y
    });
    let N = o().omit(C.containerProps, ["ref"]),
        T = k.wT(_);
    return (0, r.jsx)(A.f5, {
        value: j,
        children: (0, r.jsx)(c.hD, {
            navigator: C,
            children: (0, r.jsx)(h.skg, {
                children: e => (0, r.jsx)("div", {
                    className: s()(K.yg, K.ML, H.kL),
                    children: (0, r.jsx)(h.B8B, W({
                        ref: S,
                        className: K.ol,
                        paddingTop: 0,
                        sectionHeight: 40,
                        renderSection: e => {
                            let {
                                section: t
                            } = e, n = v[t];
                            return (0, r.jsx)(X, {
                                id: n.id,
                                label: n.label,
                                count: n.userIds.length,
                                guildId: _.id
                            }, n.id)
                        },
                        rowHeight: Y,
                        renderRow: e => {
                            let {
                                section: t,
                                row: n
                            } = e, {
                                userIds: l,
                                id: i
                            } = v[t];
                            return (0, r.jsx)(q, {
                                channel: y,
                                sectionId: i,
                                userId: l[n],
                                guildOwnerId: T
                            }, l[n])
                        },
                        footerHeight: e => 80 * (v[e] === E && y.type === V.rbe.PRIVATE_THREAD),
                        renderFooter: e => v[e.section] === E ? (0, r.jsx)(J, {
                            channel: y
                        }, "footer") : null,
                        innerAriaLabel: F.intl.string(F.t["9Oq93m"]),
                        innerTag: "ul",
                        sections: v.map(e => e.userIds.length),
                        fade: !0
                    }, N, e), O)
                })
            })
        })
    })
}

function Z(e) {
    let {
        channel: t
    } = e;
    return (0, r.jsxs)("div", {
        className: s()(H.p$, H.kL, K.yg, K.ML, K.ol),
        children: [(0, r.jsx)(h.Text, {
            className: H.ks,
            variant: "text-xs/bold",
            color: "interactive-text-default",
            children: F.intl.string(F.t["9Oq93m"])
        }), (0, r.jsxs)("div", {
            className: H.hs,
            children: [(0, r.jsx)("div", {
                className: H.AI,
                children: (0, r.jsx)(h.nFg, {
                    size: "lg",
                    color: "currentColor"
                })
            }), (0, r.jsx)(D.A, {
                className: H.WA
            })]
        }), (0, r.jsx)(h.Heading, {
            variant: "heading-md/semibold",
            children: t.isForumPost() ? F.intl.string(F.t.p0UgNQ) : F.intl.string(F.t["9/n5vz"])
        }), (0, r.jsx)(h.Text, {
            className: H.WO,
            variant: "text-sm/normal",
            color: "text-default",
            children: F.intl.string(F.t.emw8UP)
        })]
    })
}