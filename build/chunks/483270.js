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
    g = n(442433),
    f = n(414798),
    m = n(775602),
    b = n(793574),
    A = n(688810),
    y = n(485947),
    O = n(509536),
    j = n(201275),
    x = n(111864),
    _ = n(657048),
    v = n(561010),
    E = n(441446),
    C = n(342296),
    S = n(616356),
    I = n(696451),
    N = n(317525),
    T = n(290863),
    P = n(461213),
    w = n(741961),
    R = n(287809),
    D = n(303727),
    L = n(954571),
    M = n(203982),
    G = n(488926),
    k = n(427262),
    U = n(837921),
    V = n(110574),
    B = n(652215),
    H = n(985018),
    F = n(767952),
    Y = n(701939);

function K(e) {
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
let W = U.Ay.getEnableHardwareAcceleration(),
    z = 44 + V.b,
    X = l.memo(function(e) {
        let {
            channel: t,
            sectionId: i,
            userId: s,
            guildOwnerId: a
        } = e, o = l.useRef(null), u = (0, p.bG)([w.A], () => w.A.isTyping(t.id, s)), h = (0, p.bG)([I.Ay], () => I.Ay.getMember(t.guild_id, s)), m = (0, p.bG)([N.A], () => {
            var e;
            return (null == h ? void 0 : h.colorRoleId) != null ? null == (e = N.A.getRole(t.guild_id, h.colorRoleId)) ? void 0 : e.name : void 0
        }, [t.guild_id, h]), b = (0, p.bG)([R.default], () => R.default.getUser(s)), A = (0, p.bG)([R.default], () => R.default.getCurrentUser()), y = (null == b ? void 0 : b.id) === (null == A ? void 0 : A.id), j = (0, p.bG)([T.A, P.A], () => y ? P.A.getStatus() : T.A.getStatus(s, t.guild_id)), _ = (0, p.bG)([T.A], () => T.A.isMobileOnline(s)), v = (0, p.bG)([T.A, P.A], () => y ? P.A.getActivities() : T.A.getActivities(s, t.guild_id)), D = (0, p.bG)([S.A], () => S.A.getAnyStreamForUser(s)), L = (0, c.rm)(s), G = (0, p.bG)([E.A], () => E.A.canUserViewChannel(t.id, i, s)), U = (null == b ? void 0 : b.id) != null && b.id === a, F = l.useCallback(e => {
            null != b && (0, g.L3)(e, async () => {
                let {
                    default: e
                } = await Promise.all([n.e("97262"), n.e("29534"), n.e("67447"), n.e("79961")]).then(n.bind(n, 708202));
                return n => {
                    var l, i;
                    return (0, r.jsx)(e, (l = K({}, n), i = i = {
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
        }, [b, t]), Y = l.useCallback(() => {
            if (null == b) return;
            let e = "@".concat(k.Ay.getUserTag(b, {
                    decoration: "never"
                })),
                n = "<@".concat(b.id, ">");
            M._.dispatch(B.jej.TEXTAREA_FOCUS, {
                channelId: t.id
            }), M._.dispatchToLastSubscribed(B.jej.INSERT_TEXT, {
                plainText: e,
                rawText: n
            }), f.A.startTyping(t.id)
        }, [b, t]), z = l.useCallback(e => {
            e.stopPropagation(), (0, O.K)({
                guildId: t.guild_id,
                location: {
                    section: B.JJy.THREAD_MEMBER_LIST,
                    object: B.ZSU.BOOST_GEM_ICON
                }
            })
        }, [t.guild_id]), X = (0, x.r)({
            user: b,
            guildId: t.guild_id
        }), [q, J] = l.useState(!1);
        if (null == b) return null;
        let Q = null == h ? void 0 : h.premiumSince;
        return (0, r.jsx)(C.A, {
            targetElementRef: o,
            user: b,
            guildId: t.guild_id,
            channelId: t.id,
            position: d.Fr ? "window_center" : "left",
            spacing: 16,
            onShiftClick: Y,
            shouldShow: q,
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
                return (0, r.jsx)(V.A, K({
                    ref: o,
                    onContextMenu: F,
                    shouldAnimateStatus: W,
                    user: b,
                    currentUser: A,
                    nick: null == h ? void 0 : h.nick,
                    status: j,
                    activities: v,
                    colorString: null == h ? void 0 : h.colorString,
                    colorStrings: null == h ? void 0 : h.colorStrings,
                    colorRoleName: m,
                    isTyping: u,
                    channel: t,
                    guildId: t.guild_id,
                    isMobile: _,
                    selected: q,
                    applicationStream: D,
                    premiumSince: null == Q ? null : new Date(Q),
                    onClickPremiumGuildIcon: z,
                    itemProps: L,
                    lostPermissionTooltipText: G ? void 0 : H.intl.string(H.t["/QcoTz"]),
                    isOwner: U,
                    nameplate: X,
                    onClick: e => {
                        e.shiftKey ? null == Y || Y() : J(e => !e)
                    },
                    onMouseDown: e => {
                        q ? e.stopPropagation() : null == l || l(e)
                    }
                }, i))
            }
        })
    }),
    q = l.memo(function(e) {
        let {
            id: t,
            label: n,
            count: l,
            guildId: i
        } = e, s = (0, j.$7)({
            roleId: t,
            guildId: i,
            size: 16
        });
        return t === B.clD.UNKNOWN ? (0, r.jsx)("div", {
            className: Y.lL,
            children: (0, r.jsx)("div", {
                className: Y.k1
            })
        }) : (0, r.jsxs)(y.A, {
            className: Y.lL,
            "aria-label": H.intl.formatToPlainString(H.t.Uaqbke, {
                title: n,
                count: l
            }),
            children: [null != s ? (0, r.jsx)(_.A, K({
                className: Y.UT
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
        return t.type === B.rbe.PRIVATE_THREAD ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
                className: F.yF
            }), (0, r.jsxs)(h.Text, {
                variant: "text-xs/bold",
                color: "text-default",
                className: F.Uz,
                children: [(0, r.jsx)(h.XAi, {
                    size: "xxs",
                    color: "currentColor"
                }), "\xa0", H.intl.string(H.t.BTLTAs)]
            }), (0, r.jsx)(h.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                className: F.GA,
                children: H.intl.string(H.t.Hsd8hC)
            })]
        }) : null
    });

function Q(e) {
    var t, n;
    let i, a, d, g, f, {
            channel: y,
            guild: O
        } = e,
        j = "members-".concat(y.id),
        {
            analyticsLocations: x
        } = (0, A.Ay)(b.A.MEMBER_LIST),
        _ = (0, v.q)(y.id, O),
        E = _.filter(e => e.userIds.length > 0).reverse()[0],
        {
            navigator: C,
            listRef: S
        } = (t = j, n = z, i = (0, p.bG)([m.A], () => m.A.keyboardModeEnabled), a = l.useRef(null), d = l.useCallback((e, t) => {
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
        }, [n]), g = l.useCallback(() => new Promise(e => {
            let t = a.current;
            if (null == t) return e();
            t.scrollToTop({
                callback: () => requestAnimationFrame(() => e())
            })
        }), []), f = l.useCallback(() => new Promise(e => {
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
                scrollToStart: g,
                scrollToEnd: f
            }),
            listRef: a
        }),
        I = 0 === _.length || _.every(e => 0 === e.userIds.length);
    if (l.useEffect(() => {
            L.default.track(B.HAw.MEMBER_LIST_VIEWED, {
                channel_id: y.id,
                channel_type: y.type,
                guild_id: y.guild_id
            })
        }, [y.guild_id, y.id, y.type]), I) return (0, r.jsx)(Z, {
        channel: y
    });
    let N = o().omit(C.containerProps, ["ref"]),
        T = G.wT(O);
    return (0, r.jsx)(A.f5, {
        value: x,
        children: (0, r.jsx)(c.hD, {
            navigator: C,
            children: (0, r.jsx)(h.skg, {
                children: e => (0, r.jsx)("div", {
                    className: s()(Y.yg, Y.ML, F.kL),
                    children: (0, r.jsx)(h.B8B, K({
                        ref: S,
                        className: Y.ol,
                        paddingTop: 0,
                        sectionHeight: 40,
                        renderSection: e => {
                            let {
                                section: t
                            } = e, n = _[t];
                            return (0, r.jsx)(q, {
                                id: n.id,
                                label: n.label,
                                count: n.userIds.length,
                                guildId: O.id
                            }, n.id)
                        },
                        rowHeight: z,
                        renderRow: e => {
                            let {
                                section: t,
                                row: n
                            } = e, {
                                userIds: l,
                                id: i
                            } = _[t];
                            return (0, r.jsx)(X, {
                                channel: y,
                                sectionId: i,
                                userId: l[n],
                                guildOwnerId: T
                            }, l[n])
                        },
                        footerHeight: e => 80 * (_[e] === E && y.type === B.rbe.PRIVATE_THREAD),
                        renderFooter: e => _[e.section] === E ? (0, r.jsx)(J, {
                            channel: y
                        }, "footer") : null,
                        innerAriaLabel: H.intl.string(H.t["9Oq93m"]),
                        innerTag: "ul",
                        sections: _.map(e => e.userIds.length),
                        fade: !0
                    }, N, e), j)
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
        className: s()(F.p$, F.kL, Y.yg, Y.ML, Y.ol),
        children: [(0, r.jsx)(h.Text, {
            className: F.ks,
            variant: "text-xs/bold",
            color: "interactive-text-default",
            children: H.intl.string(H.t["9Oq93m"])
        }), (0, r.jsxs)("div", {
            className: F.hs,
            children: [(0, r.jsx)("div", {
                className: F.AI,
                children: (0, r.jsx)(h.nFg, {
                    size: "lg",
                    color: "currentColor"
                })
            }), (0, r.jsx)(D.A, {
                className: F.WA
            })]
        }), (0, r.jsx)(h.Heading, {
            variant: "heading-md/semibold",
            children: t.isForumPost() ? H.intl.string(H.t.p0UgNQ) : H.intl.string(H.t["9/n5vz"])
        }), (0, r.jsx)(h.Text, {
            className: F.WO,
            variant: "text-sm/normal",
            color: "text-default",
            children: H.intl.string(H.t.emw8UP)
        })]
    })
}