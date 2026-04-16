/** chunk id: 755588 params = (module,exports,require) **/
n.d(t, {
    b: () => F
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(397927),
    u = n(730134),
    d = n(775602),
    c = n(566903),
    h = n(47167),
    g = n(410540),
    m = n(302223),
    f = n(609425),
    A = n(922301),
    I = n(750112),
    E = n(853390),
    p = n(253932),
    _ = n(734057),
    S = n(290863),
    x = n(383501),
    T = n(222823),
    C = n(309010),
    N = n(741961),
    v = n(287809),
    y = n(977997),
    M = n(486020),
    b = n(427262),
    R = n(914853),
    D = n(589051),
    O = n(545807),
    w = n(406595),
    j = n(652215),
    k = n(985018),
    U = n(340281);
let L = r.memo(function(e) {
    let {
        startTimestampMs: t
    } = e, n = (0, O.A)(), [i, l] = r.useState(() => Date.now());
    r.useEffect(() => {
        let e = n.setInterval(() => l(Date.now()), 1e3);
        return () => n.clearInterval(e)
    }, [n]);
    let s = Math.max(0, (i - t) / 1e3);
    return (0, E.fU)(s)
});
L.displayName = "OverlayElapsedTime";
let G = r.memo(function() {
    let e = (0, O.A)(),
        [t, n] = r.useState(() => Date.now());
    r.useEffect(() => {
        let t = e.setInterval(() => n(Date.now()), 1e3);
        return () => e.clearInterval(t)
    }, [e]);
    let i = (0, a.bG)([x.A], () => x.A.getDuration() ?? 0, [t]) ?? 0;
    return (0, E.fU)(i / 1e3)
});

function P(e) {
    var t;
    let n, {
            currentUser: l,
            activity: s,
            currentGameName: d
        } = e,
        E = l?.id ?? null,
        x = (0, D.Mn)("UserActivityBanner"),
        T = (0, b.tx)(l),
        N = x ? T : l?.globalName ?? l?.username,
        v = (0, f.A)({
            userId: E,
            guildId: null
        }),
        {
            isMobileOnline: y,
            status: R
        } = (0, a.cf)([S.A], () => null == E ? {
            isMobileOnline: void 0,
            status: void 0
        } : {
            isMobileOnline: S.A.isMobileOnline(E),
            status: S.A.getStatus(E)
        }, [E]),
        O = (0, a.bG)([C.A], () => C.A.getVoiceChannelId()),
        w = (0, a.bG)([_.A], () => null != O ? _.A.getChannel(O) : null, [O]),
        P = (0, h.Ay)(w),
        F = (0, g.A)(E ?? "0") ?? null,
        V = null != E ? F : null,
        z = null == (n = (0, c.A)(s, !0).text ?? d) ? null : s?.type === j.$pd.PLAYING || null == s ? k.intl.formatToPlainString(k.t.lFApmz, {
            game: n
        }) : n,
        H = s?.timestamps?.start != null ? (t = s.timestamps.start) < 1e12 ? 1e3 * t : t : null,
        Y = r.useMemo(() => (function(e) {
            let {
                activityLabel: t,
                activityStartTimestampMs: n,
                voiceCallName: i,
                customStatusActivity: r
            } = e;
            return null != t ? {
                type: "activity",
                label: t,
                startTimestampMs: n
            } : null != i ? {
                type: "voice_call",
                label: i
            } : null != r ? {
                type: "custom_status",
                customStatusActivity: r
            } : {
                type: "none"
            }
        })({
            activityLabel: z,
            activityStartTimestampMs: H,
            voiceCallName: P,
            customStatusActivity: V
        }), [z, H, P, V]);
    if (null == l) return null;
    let W = null == l.banner ? null : (0, M.z)({
        id: l.id,
        banner: l.banner,
        canAnimate: p.kt.getSetting(),
        size: 600
    }) ?? null;
    return (0, i.jsxs)("div", {
        className: U.cI,
        children: [(0, i.jsx)("div", {
            className: U.CK,
            style: {
                backgroundImage: null != W ? `url(${W})` : void 0
            }
        }), (0, i.jsxs)("div", {
            className: U.vK,
            children: [(0, i.jsxs)("div", {
                className: U.iy,
                children: [(0, i.jsx)(u.A, {
                    user: l,
                    isMobile: y,
                    status: R,
                    className: U.my,
                    size: o._3J.SIZE_40
                }), (0, i.jsxs)("div", {
                    className: U.ic,
                    children: [(0, i.jsx)(I.A, {
                        userName: N,
                        textClassName: U.Xh,
                        displayNameStyles: v,
                        effectDisplayType: A.G.ANIMATED
                    }), (() => {
                        switch (Y.type) {
                            case "activity":
                                return (0, i.jsxs)("div", {
                                    className: U.nU,
                                    children: [(0, i.jsx)(o._xR, {
                                        size: "xxs",
                                        color: "currentColor",
                                        className: U.Wo
                                    }), (0, i.jsx)(o.Text, {
                                        className: U.Yg,
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: Y.label
                                    })]
                                });
                            case "voice_call":
                                return (0, i.jsxs)("div", {
                                    className: U.nU,
                                    children: [(0, i.jsx)(o.HKD, {
                                        size: "xxs",
                                        color: "currentColor",
                                        className: U.Wo
                                    }), (0, i.jsx)(o.Text, {
                                        className: U.Yg,
                                        variant: "text-xs/medium",
                                        color: "text-subtle",
                                        children: Y.label
                                    })]
                                });
                            case "custom_status":
                                return (0, i.jsx)("div", {
                                    className: U.nU,
                                    children: (0, i.jsx)(m.A, {
                                        activity: Y.customStatusActivity,
                                        className: U.tR,
                                        emojiClassName: U.qp,
                                        textClassName: U.Yg,
                                        hideTooltip: !0
                                    })
                                });
                            default:
                                return null
                        }
                    })()]
                })]
            }), "activity" === Y.type ? null == Y.startTimestampMs ? null : (0, i.jsx)(o.Text, {
                className: U.p0,
                variant: "code",
                tag: "div",
                children: (0, i.jsx)(L, {
                    startTimestampMs: Y.startTimestampMs
                })
            }) : "voice_call" === Y.type ? null == O ? null : (0, i.jsx)(o.Text, {
                className: U.p0,
                variant: "code",
                tag: "div",
                children: (0, i.jsx)(G, {})
            }) : null]
        })]
    })
}

function F(e) {
    let {
        currentUser: t,
        activity: n,
        currentGameName: l,
        activeTab: s,
        onTabChange: o
    } = e, {
        friendsHasUnreadFavorites: u,
        messagesHasUnreadFavorites: c,
        voiceHasActiveFavorites: h,
        friendsHasTypingInFavorites: g,
        messagesHasTypingInFavorites: m
    } = (0, a.cf)([w.A, T.Ay, _.A, y.A, N.A, v.default], () => {
        let e = v.default.getCurrentUser()?.id ?? null,
            [t] = w.A.getFavoriteTargetIdsForTab(R.x.FRIENDS),
            [n] = w.A.getFavoriteTargetIdsForTab(R.x.MESSAGES),
            [i] = w.A.getFavoriteTargetIdsForTab(R.x.VOICE),
            r = e => T.Ay.hasUnread(e) || T.Ay.getMentionCount(e) > 0,
            l = t => {
                let n = N.A.getTypingUsers(t);
                for (let t in n)
                    if (t !== e) return !0;
                return !1
            },
            s = e => _.A.getDMFromUserId(e) ?? null,
            a = t.some(e => {
                let t = s(e);
                return null != t && r(t)
            }),
            o = t.some(e => {
                let t = s(e);
                return null != t && l(t)
            }),
            u = n.some(r),
            d = n.some(l);
        return {
            friendsHasUnreadFavorites: a,
            messagesHasUnreadFavorites: u,
            voiceHasActiveFavorites: i.some(e => {
                let t = y.A.getVoiceStatesForChannel(e);
                for (let e in t) return !0;
                return !1
            }),
            friendsHasTypingInFavorites: o,
            messagesHasTypingInFavorites: d
        }
    }, []), f = r.useMemo(() => ({
        [R.x.FRIENDS]: u,
        [R.x.MESSAGES]: c,
        [R.x.VOICE]: h
    }), [u, c, h]), A = (0, a.bG)([d.A], () => d.A.useReducedMotion), I = r.useMemo(() => ({
        [R.x.FRIENDS]: !A && g,
        [R.x.MESSAGES]: !A && m,
        [R.x.VOICE]: !1
    }), [A, g, m]);
    return (0, i.jsxs)("div", {
        className: U.kL,
        children: [(0, i.jsx)(P, {
            currentUser: t,
            activity: n,
            currentGameName: l
        }), (0, i.jsx)("div", {
            className: U.vR,
            role: "tablist",
            "aria-label": k.intl.string(k.t.TdEu5X),
            children: [{
                id: R.x.FRIENDS,
                label: k.t.TdEu5X
            }, {
                id: R.x.MESSAGES,
                label: k.t.OIgYlQ
            }, {
                id: R.x.VOICE,
                label: k.t.K3lovD
            }].map(e => {
                let {
                    id: t,
                    label: n
                } = e, r = !0 === f[t], l = !0 === I[t];
                return (0, i.jsx)(V, {
                    tab: t,
                    label: k.intl.formatToPlainString(n, {}),
                    selected: s === t,
                    shouldShowCutoutDot: r,
                    shouldPulseDot: l,
                    onSelect: o
                }, t)
            })
        })]
    })
}

function V(e) {
    let {
        tab: t,
        label: n,
        selected: r,
        shouldShowCutoutDot: l = !1,
        shouldPulseDot: a = !1,
        onSelect: u,
        className: d
    } = e, c = l ? s()(U.OD, a && U.S) : null;
    return (0, i.jsxs)(o.DUT, {
        role: "tab",
        "aria-selected": r,
        className: s()(U.Mf, r && U.jP, d),
        onClick: () => u(t),
        children: [null != c ? (0, i.jsx)("span", {
            className: c,
            "aria-hidden": !0
        }) : null, (0, i.jsx)(o.Text, {
            variant: "text-sm/medium",
            color: "currentColor",
            children: n
        })]
    })
}
G.displayName = "OverlayVoiceCallElapsedTime"