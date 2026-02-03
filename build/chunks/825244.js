/** chunk id: 825244, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => D,
    E: () => R
}), n(896048), n(321073);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(615300),
    o = n(311907),
    c = n(554146),
    u = n(397927),
    d = n(444927),
    h = n(919796),
    p = n(58149),
    f = n(668446),
    m = n(997509),
    g = n(794967),
    A = n(595818),
    b = n(961350),
    _ = n(71393),
    y = n(287809),
    v = n(147925),
    E = n(203982),
    O = n(975571),
    C = n(723702),
    S = n(661191),
    x = n(314307),
    j = n(652215),
    I = n(936649),
    T = n(985018),
    N = n(286062);

function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = l
        })
    }
    return e
}

function w(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function R(e) {
    let {
        className: t,
        iconUrl: n,
        icon: i,
        header: s,
        completed: o,
        onClick: c
    } = e, [d, p] = r.useState(!1), f = (0, h.A)(o);
    return r.useEffect(() => {
        null != f && o !== f && (p(!0), setTimeout(() => p(!1), 1e3))
    }, [o, f]), (0, l.jsxs)(u.DUT, {
        className: a()(t, N.Nr, {
            [N.so]: o
        }),
        onClick: c,
        children: [null != i ? i : (0, l.jsx)("img", {
            className: N.Kk,
            src: n,
            alt: ""
        }), (0, l.jsx)(u.Text, {
            color: "text-strong",
            className: a()(N.t$, N.MY),
            variant: "text-sm/normal",
            children: s
        }), o ? (0, l.jsx)(u.A9s, {
            size: "md",
            color: "currentColor",
            className: a()(N.AI, {
                [N.i0]: d
            })
        }) : (0, l.jsx)(v.A, {
            className: N.UE,
            direction: v.A.Directions.RIGHT
        })]
    })
}

function D(e) {
    let t, i, h, v, D, M, {
            channel: k
        } = e,
        L = (0, o.bG)([_.A], () => null != k ? _.A.getGuild(k.getGuildId()) : null, [k]),
        U = null != L && S.default.extractTimestamp(L.id) < Date.now() - j.NOr,
        G = (0, o.bG)([b.default], () => (null == L ? void 0 : L.ownerId) === b.default.getId(), [L]),
        {
            canInvite: F,
            canManageGuild: H,
            canMessage: B
        } = (0, f.Sk)(k, L),
        V = (0, o.bG)([y.default], () => {
            var e, t;
            return (null == (e = y.default.getCurrentUser()) ? void 0 : e.desktop) === !0 || (null == (t = y.default.getCurrentUser()) ? void 0 : t.mobile) === !0
        }),
        {
            guildPopulated: K,
            guildMessaged: W,
            guildPersonalized: z
        } = (0, f.lF)(L),
        {
            handleInvite: Y,
            handleMessage: q,
            handlePersonalize: J,
            handleDownload: Z,
            handleAddApplication: X
        } = (t = r.useCallback(() => {
            p.Ay.trackWithMetadata(j.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: I.XT.CHANNEL_WELCOME,
                action: I.AG.INVITE
            }), null != L && (0, u.mMO)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("43600"), n.e("28136"), n.e("92779")]).then(n.bind(n, 234355));
                return t => (0, l.jsx)(e, w(P({}, t), {
                    guild: L,
                    source: j.PE1.CHANNEL_WELCOME,
                    analyticsLocation: {
                        section: j.JJy.CHANNEL_WELCOME_CTA
                    }
                }))
            })
        }, [L]), i = r.useCallback(() => {
            p.Ay.trackWithMetadata(j.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: I.XT.CHANNEL_WELCOME,
                action: I.AG.SEND_MESSAGE
            }), E._.dispatch(j.jej.TEXTAREA_FOCUS, {
                highlight: !0,
                channelId: j.dJq
            })
        }, []), h = r.useCallback(() => {
            p.Ay.trackWithMetadata(j.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: I.XT.CHANNEL_WELCOME,
                action: I.AG.PERSONALIZE_SERVER
            }), null != L && m.A.open(L.id, (0, A.x)(), {
                section: j.JJy.CHANNEL_WELCOME_CTA
            })
        }, [L]), {
            handleInvite: t,
            handleMessage: i,
            handlePersonalize: h,
            handleDownload: r.useCallback(() => {
                p.Ay.trackWithMetadata(j.HAw.SERVER_SETUP_CTA_CLICKED, {
                    setup_type: I.XT.CHANNEL_WELCOME,
                    action: I.AG.DOWNLOAD
                }), (0, u.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                    return t => (0, l.jsx)(e, P({
                        source: j.JJy.CHANNEL_WELCOME_CTA
                    }, t))
                })
            }, []),
            handleAddApplication: r.useCallback(() => {
                null != L && (p.Ay.trackWithMetadata(j.HAw.SERVER_SETUP_CTA_CLICKED, {
                    setup_type: I.XT.CHANNEL_WELCOME,
                    action: I.AG.ADD_APP
                }), (0, u.mMO)(async () => {
                    let {
                        default: e
                    } = await n.e("66003").then(n.bind(n, 258942));
                    return t => {
                        var n;
                        return (0, l.jsx)(e, w(P({
                            guildId: null != (n = L.id) ? n : ""
                        }, t), {
                            analyticsType: c.M.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL
                        }))
                    }
                }))
            }, [L])
        }),
        Q = !(V || K || W || z),
        {
            titleAnimatedStyle: $,
            opacities: ee
        } = (v = (0, d.A)(() => new s.A.Value(0)), D = (0, d.A)(() => new s.A.Value(0)), M = (0, d.A)(() => [new s.A.Value(0), new s.A.Value(0), new s.A.Value(0), new s.A.Value(0)]), r.useEffect(() => {
            s.A.stagger(300, [s.A.parallel([s.A.timing(D, {
                toValue: 1,
                duration: 450
            }), s.A.timing(v, {
                toValue: 1,
                duration: 450
            })]), s.A.stagger(100, [s.A.timing(M[0], {
                toValue: 1,
                duration: 300
            }), s.A.timing(M[1], {
                toValue: 1,
                duration: 300
            }), s.A.timing(M[2], {
                toValue: 1,
                duration: 300
            }), s.A.timing(M[3], {
                toValue: 1,
                duration: 300
            })])]).start()
        }, [D, v, M]), {
            titleAnimatedStyle: Q ? {
                transform: [{
                    translateY: v.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["-20px", "0px"]
                    })
                }],
                opacity: D
            } : {},
            opacities: M
        }),
        [et, en] = r.useState([]),
        el = et.length > 0;
    if (r.useEffect(() => {
            (async () => {
                try {
                    var e;
                    let t = await (0, g.c)(null != (e = null == L ? void 0 : L.id) ? e : j.dJq);
                    en(t.map(e => e.id))
                } catch (e) {}
            })()
        }, [null == L ? void 0 : L.id]), null == L) return null;
    let er = [];
    U || (F && er.push((0, l.jsx)(s.A.div, {
        className: N.cW,
        style: Q ? {
            opacity: ee[er.length]
        } : {},
        children: (0, l.jsx)(R, {
            iconUrl: u.zNk,
            header: T.intl.string(T.t.q9n0Ta),
            completed: K,
            onClick: Y
        })
    }, "invite")), H && er.push((0, l.jsx)(s.A.div, {
        className: N.cW,
        style: Q ? {
            opacity: ee[er.length]
        } : {},
        children: (0, l.jsx)(R, {
            iconUrl: u.nIm,
            header: T.intl.string(T.t.c5kxPh),
            completed: z,
            onClick: J
        })
    }, "customize")), B && er.push((0, l.jsx)(s.A.div, {
        className: N.cW,
        style: Q ? {
            opacity: ee[er.length]
        } : {},
        children: (0, l.jsx)(R, {
            iconUrl: u.Tj_,
            header: T.intl.string(T.t["SoP7+l"]),
            completed: W,
            onClick: q
        })
    }, "message")), (0, C.isWeb)() && er.push((0, l.jsx)(s.A.div, {
        className: N.cW,
        style: Q ? {
            opacity: ee[er.length]
        } : {},
        children: (0, l.jsx)(R, {
            iconUrl: u.Gl0,
            header: T.intl.string(T.t.pGVNI9),
            completed: V,
            onClick: Z
        })
    }, "download")), er.push((0, l.jsx)(s.A.div, {
        className: N.cW,
        style: Q ? {
            opacity: ee[er.length]
        } : {},
        children: (0, l.jsx)(R, {
            iconUrl: u.UJP,
            header: T.intl.string(T.t.IhHDEO),
            completed: el,
            onClick: X
        })
    }, "addapp")));
    let ei = G ? T.intl.string(T.t["1ach9C"]) : T.intl.string(T.t["ezm+/j"]);
    U && (ei = T.intl.string(T.t["gwyU/J"]));
    let ea = "".concat(O.A.getArticleURL(j.MVz.GUILD_GETTING_STARTED), "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm");
    return (0, l.jsx)(x.Ay, {
        channelId: k.id,
        children: (0, l.jsx)("div", {
            className: N.kL,
            children: (0, l.jsxs)("div", {
                className: N.vW,
                children: [(0, l.jsxs)(s.A.div, {
                    style: $,
                    children: [(0, l.jsx)(u.Heading, {
                        className: N.ud,
                        variant: "heading-xxl/medium",
                        children: T.intl.format(T.t.rkHVKf, {
                            guildName: L.name
                        })
                    }), (0, l.jsxs)(u.Text, {
                        color: "text-default",
                        className: a()({
                            [N.VA]: !0,
                            [N.lg]: 0 === er.length
                        }),
                        variant: "text-sm/normal",
                        children: [ei, " ", er.length > 0 ? T.intl.format(T.t.UOtD32, {
                            guideURL: ea
                        }) : null]
                    })]
                }), er]
            })
        })
    })
}