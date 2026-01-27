/** Chunk was on 41727 **/
/** chunk id: 467627, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => ec
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(735438),
    o = n.n(a),
    c = n(960488),
    u = n(837381),
    d = n(621466),
    p = n(311907),
    h = n(52133),
    f = n(451988),
    g = n(827734),
    m = n(397927),
    b = n(951001),
    A = n(964486),
    y = n(260762),
    _ = n(793574),
    O = n(688810),
    j = n(313961),
    v = n(832275),
    x = n(730253),
    E = n(633965),
    C = n(857071),
    S = n(851109),
    I = n(397938),
    N = n(366811),
    T = n(72314),
    P = n(543897),
    w = n(696451),
    R = n(71393),
    D = n(711014),
    M = n(723702),
    L = n(757780),
    k = n(263715),
    G = n(987344),
    U = n(750448),
    B = n(845211),
    V = n(941604),
    F = n(246884),
    H = n(497140),
    K = n(34247),
    W = n(850729),
    z = n(521872),
    Y = n(827975),
    q = n(369915),
    X = n(232879),
    J = n(181800),
    Q = n(343170),
    Z = n(652215),
    $ = n(985018),
    ee = n(216788);

function et(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function en(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            et(e, t, n[t])
        })
    }
    return e
}
let er = (0, M.isWindows)() ? 4 : 12 * !(0, M.isMac)();

function el(e) {
    return e.startsWith(Z.BVt.GUILD_DISCOVERY) || e.startsWith(Z.BVt.GLOBAL_DISCOVERY)
}
class ei {
    setGuildsTree(e) {
        this.guildsTree = e
    }
    constructor(e, t, n, r, i) {
        et(this, "guildsTree", void 0), et(this, "setScrolling", void 0), et(this, "setIsScrolledToBottom", void 0), et(this, "onScroll", void 0), et(this, "sizes", void 0), et(this, "scrollerRef", void 0), et(this, "nodeRefs", void 0), et(this, "timeout", void 0), et(this, "observer", void 0), et(this, "setResizeObserver", void 0), et(this, "clearResizeObserver", void 0), et(this, "scrollToGuild", void 0), et(this, "handleJumpToGuild", void 0), et(this, "scrollTo", void 0), et(this, "scrollToBottom", void 0), et(this, "isItemVisible", void 0), et(this, "getVisibleGuildIds", void 0), et(this, "handleScroll", void 0), et(this, "_handleScrollDebounced", void 0), et(this, "_handleScrollThrottled", void 0), et(this, "setNodeRef", void 0), this.guildsTree = e, this.setScrolling = t, this.setIsScrolledToBottom = n, this.onScroll = r, this.sizes = i, this.scrollerRef = l.createRef(), this.nodeRefs = {}, this.timeout = new f.Ep, this.setResizeObserver = () => {
            var e;
            let t = null == (e = this.scrollerRef.current) ? void 0 : e.getScrollerNode();
            null != t && (this.observer = new ResizeObserver(this.handleScroll), this.observer.observe(t))
        }, this.clearResizeObserver = () => {
            var e;
            null == (e = this.observer) || e.disconnect(), this.observer = void 0
        }, this.scrollToGuild = (e, t) => {
            let n = this.scrollerRef.current;
            if (null == n || null == e && el(window.location.pathname) || e === Z.sFm.SERVER_DISCOVERY_BADGE || e === Z.sFm.E3_SERVER_DISCOVERY_BADGE) return;
            if (null == e) return void n.scrollTo({
                to: 0,
                animate: t
            });
            let r = this.nodeRefs[e];
            for (; null == r;) {
                let t = this.guildsTree.getNode(e);
                if ((null == t ? void 0 : t.parentId) == null) break;
                r = this.nodeRefs[t.parentId]
            }
            null != r && (0, d.vq)(r) ? n.scrollIntoViewNode({
                node: r,
                animate: t,
                padding: 24
            }) : n.scrollTo({
                to: 0,
                animate: t
            })
        }, this.handleJumpToGuild = e => {
            this.scrollToGuild(e, !0)
        }, this.scrollTo = e => {
            var t;
            null == (t = this.scrollerRef.current) || t.scrollTo(e)
        }, this.scrollToBottom = () => {
            var e;
            null == (e = this.scrollerRef.current) || e.scrollToBottom()
        }, this.isItemVisible = (e, t, n) => {
            let {
                iconTotalSize: r,
                badgeVisibleBuffer: l,
                heightBeforeGuilds: i,
                bottomInset: s
            } = this.sizes, a = this.scrollerRef.current;
            if (null == a) return !1;
            let o = n.findIndex(t => "string" == typeof t || null == t ? t === e : t.includes(e));
            if (o < 0) return !1;
            let c = r * o + i,
                u = a.getScrollerState();
            return !t && !!(c >= u.scrollTop) || !!t && !!(c + r + l <= u.scrollTop + u.offsetHeight - s)
        }, this.getVisibleGuildIds = () => {
            var e;
            let t = this.scrollerRef.current;
            if (null == t) return [];
            let n = t.getScrollerState().offsetHeight,
                r = null == (e = t.getScrollerNode()) ? void 0 : e.getBoundingClientRect().top;
            return void 0 === r ? [] : this.guildsTree.sortedGuildNodes().filter(e => {
                var t;
                let l = null != (t = e.parentId) ? t : e.id,
                    i = this.nodeRefs[l];
                if (null == i) return !1;
                let s = i.getBoundingClientRect(),
                    a = s.top - r;
                return a + s.height > 0 && a < n
            }).map(e => {
                let {
                    id: t
                } = e;
                return t
            })
        }, this.handleScroll = () => {
            this.setScrolling(!0), this.timeout.start(200, () => this.setScrolling(!1)), this._handleScrollDebounced(), this._handleScrollThrottled()
        }, this._handleScrollDebounced = o().debounce(() => {
            let e = this.scrollerRef.current;
            if (null == e) return;
            let {
                scrollTop: t
            } = e.getScrollerState();
            b.A.updateGuildListScrollTo(t), this.onScroll()
        }, 200), this._handleScrollThrottled = o().throttle(() => {
            let e = this.scrollerRef.current;
            null != e && this.setIsScrolledToBottom(e.isScrolledToBottom())
        }, 100), this.setNodeRef = (e, t) => {
            this.nodeRefs[e] = t
        }, (0, E.u9)(this.getVisibleGuildIds)
    }
}

function es(e) {
    let {
        hideDms: t,
        scrollToTop: n,
        lurkingGuildIds: l
    } = e, i = (0, v.A)(), s = (0, p.yK)([R.A, w.Ay], () => R.A.getGuildIds().filter(e => w.Ay.isCurrentUserGuest(e))), a = l.concat(s), {
        entrypoint: o
    } = (0, S.X8)({
        location: "GuildsBar"
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(W.C, {}), o === S.RK.SERVER_RAIL_TOP && (0, r.jsx)(I.A, {}), i ? (0, r.jsx)(x.A, {}) : null, !t && (0, r.jsx)(B.A, {}), a.map(e => (0, r.jsx)(Q.A, {
            guildId: e
        }, e)), (0, r.jsx)(J.A, {
            onActivate: n
        })]
    })
}

function ea(e) {
    let {
        guildDiscoveryButton: t,
        disableAppDownload: n,
        isOverlay: l,
        renderTreeNode: i,
        lurkingGuildIds: s
    } = e, [a] = (0, p.yK)([D.Ay], () => {
        let e = D.Ay.getGuildsTree();
        return [e, e.version]
    }), o = a.getRoots(), c = (0, p.yK)([P.A], () => P.A.getGeoRestrictedGuilds()).map(e => (0, r.jsx)(H.A, {
        id: e.id,
        name: e.name,
        icon: e.icon
    }, e.id));
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(m.BJc, {
            role: "group",
            "aria-label": $.intl.string($.t["7hB4kg"]),
            gap: "xs",
            children: o.map((e, t) => i(e, t, o.length))
        }), c, (0, r.jsx)(Y.A, {}), l ? null : (0, r.jsx)(F.A, {
            disableTooltip: s.length > 0,
            lastTargetNode: o[o.length - 1]
        }), l ? null : t, n ? null : (0, r.jsx)(V.A, {})]
    })
}

function eo(e) {
    let {
        disableAppDownload: t = M.isPlatformEmbedded,
        isOverlay: n = !1,
        className: i,
        themeOverride: a
    } = e, [o] = (0, p.yK)([D.Ay], () => {
        let e = D.Ay.getGuildsTree();
        return [e, e.version]
    }), d = (0, p.bG)([C.A], () => C.A.lurkingGuildIds()), h = l.useMemo(() => n ? [] : d, [d, n]), b = (0, p.bG)([j.A], () => j.A.isFullscreenInContext()), {
        isSorting: y,
        startSorting: x,
        stopSorting: E
    } = (0, L.A)(), P = l.useRef(!1), [w] = l.useState(() => new f.Ep), R = l.useRef(null), B = l.useRef(null), V = (0, u.$y)(), {
        ref: F
    } = V, H = function(e, t) {
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
    }(V, ["ref"]), W = (0, m.R7z)(), [Y, J] = l.useState(!1), Q = (0, m.rdh)(g.A.modules.guildbar.AVATAR_SIZE), et = (0, m.rdh)(g.A.space.SPACE_XS), eo = (0, v.A)(), {
        pathname: ec
    } = (0, c.zy)(), {
        entrypoint: eu
    } = (0, S.X8)({
        location: "GuildsBar"
    }), ed = +!!eo + +(eu === S.RK.SERVER_RAIL_TOP), ep = l.useMemo(() => {
        let e, t, n = (e = Q + et, {
            iconSize: Q,
            iconTotalSize: e,
            badgeVisibleBuffer: e - 16,
            separatorSize: t = 2 + et,
            heightBeforeGuilds: er + t + ed * e,
            bottomInset: 16
        });
        return new ei(o, J, Z.tEg, () => {
            var e, t;
            null == (e = R.current) || e.calculateState(), null == (t = B.current) || t.calculateState()
        }, n)
    }, [Q, et, o, ed]);
    l.useEffect(() => (ep.setResizeObserver(), () => {
        ep.clearResizeObserver()
    }), [ep]);
    let {
        analyticsLocations: eh
    } = (0, O.Ay)(_.A.GUILDS_LIST), ef = el(ec);
    (0, A.u5)(() => {
        if (!P.current && 0 !== o.size) {
            if (!ef) {
                let {
                    scrollTop: e
                } = T.A.getGuildListDimensions();
                ep.scrollTo({
                    to: e,
                    animate: !1
                })
            }
            return P.current = !0, () => w.stop()
        }
    }), l.useEffect(() => {
        if (ep.setGuildsTree(o), P.current || 0 === o.size) return;
        let e = N.A.getState().guildId;
        ep.scrollToGuild(e, !1);
        let t = null;
        return N.A.subscribe(e => {
            let {
                guildId: n
            } = e;
            n !== t && (t = n, ep.scrollToGuild(t, !1))
        })
    }, [o, ep]);
    let eg = l.useCallback(() => {
        ep.scrollTo({
            to: 0,
            animate: !1
        })
    }, [ep]);
    (0, G.A)(ep.scrollToGuild);
    let em = l.useCallback(function e(t, n, l) {
            switch (t.type) {
                case k.PJ.FOLDER:
                    return (0, r.jsx)(q.A, {
                        folderNode: t,
                        setNodeRef: ep.setNodeRef,
                        draggable: !0,
                        sorting: y,
                        onDragStart: x,
                        onDragEnd: E,
                        renderChildNode: e,
                        "aria-setsize": l,
                        "aria-posinset": void 0 !== n ? n + 1 : void 0
                    }, t.id);
                case k.PJ.GUILD:
                    return (0, r.jsx)(X.A, {
                        guildNode: t,
                        setRef: ep.setNodeRef,
                        draggable: !0,
                        sorting: y,
                        onDragStart: x,
                        onDragEnd: E,
                        "aria-setsize": l,
                        "aria-posinset": void 0 !== n ? n + 1 : void 0
                    }, t.id);
                default:
                    return null
            }
        }, [x, E, y, ep.setNodeRef]),
        eb = (0, r.jsx)(K.A, {
            selected: ef,
            className: ee.ai
        }),
        eA = eu === S.RK.SERVER_RAIL_BOTTOM;
    return (0, r.jsx)(O.f5, {
        value: eh,
        children: (0, r.jsx)(m.NPJ, {
            theme: a,
            children: e => {
                var l, a;
                return (0, r.jsxs)("nav", {
                    className: s()(ee.iE, i, e, {
                        [ee.R]: b
                    }),
                    "aria-label": $.intl.string($.t.PjnF2t),
                    children: [(0, r.jsx)(U.A, {
                        ref: R,
                        isVisible: ep.isItemVisible,
                        onJumpTo: ep.handleJumpToGuild,
                        className: ee.Xl,
                        barClassName: ee.Sh
                    }), (0, r.jsx)("ul", (l = en({
                        ref: F
                    }, H, W), a = a = {
                        role: "tree",
                        className: ee.B2,
                        children: (0, r.jsxs)("div", {
                            className: ee.qD,
                            children: [(0, r.jsxs)(m.zCo, {
                                className: s()({
                                    [ee.XG]: !0,
                                    [ee.qw]: Y
                                }),
                                experimental_useStack: !0,
                                gap: "xs",
                                ref: ep.scrollerRef,
                                onScroll: ep.handleScroll,
                                children: [(0, r.jsx)(es, {
                                    scrollToTop: eg,
                                    lurkingGuildIds: h
                                }), (0, r.jsx)(z.A, {}), (0, r.jsx)(ea, {
                                    guildDiscoveryButton: eb,
                                    disableAppDownload: t,
                                    isOverlay: n,
                                    renderTreeNode: em,
                                    lurkingGuildIds: h
                                })]
                            }), eA && (0, r.jsxs)("div", {
                                children: [(0, r.jsx)(z.A, {
                                    fullWidth: !0
                                }), (0, r.jsx)("div", {
                                    className: ee.JU,
                                    children: (0, r.jsx)(I.A, {})
                                })]
                            })]
                        })
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(a)).forEach(function(e) {
                        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
                    }), l)), (0, r.jsx)(U.A, {
                        reverse: !0,
                        ref: B,
                        isVisible: ep.isItemVisible,
                        onJumpTo: ep.handleJumpToGuild,
                        className: s()(ee.LZ, {
                            [ee.CH]: !n && !eA,
                            [ee.c0]: !n && eA
                        }),
                        barClassName: ee.Sh
                    })]
                })
            }
        })
    })
}
let ec = l.memo(function(e) {
    let t = (0, y.A)("guildsnav");
    return (0, r.jsx)(u.hD, {
        navigator: t,
        children: (0, r.jsx)(eo, en({}, e))
    })
}, (e, t) => !1 === t.isVisible || (0, h.A)(e, t))