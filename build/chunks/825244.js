/** Chunk was on 41727 **/
/** chunk id: 825244, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => D,
    E: () => R
}), n(896048), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(615300),
    o = n(311907),
    c = n(554146),
    u = n(397927),
    d = n(444927),
    p = n(919796),
    h = n(58149),
    f = n(668446),
    g = n(997509),
    m = n(794967),
    b = n(595818),
    A = n(961350),
    y = n(71393),
    _ = n(287809),
    O = n(147925),
    j = n(203982),
    v = n(975571),
    x = n(723702),
    E = n(661191),
    C = n(314307),
    S = n(652215),
    I = n(936649),
    N = n(985018),
    T = n(286062);

function P(e) {
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

function w(e, t) {
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

function R(e) {
    let {
        className: t,
        iconUrl: n,
        icon: i,
        header: a,
        completed: o,
        onClick: c
    } = e, [d, h] = l.useState(!1), f = (0, p.A)(o);
    return l.useEffect(() => {
        null != f && o !== f && (h(!0), setTimeout(() => h(!1), 1e3))
    }, [o, f]), (0, r.jsxs)(u.DUT, {
        className: s()(t, T.Nr, {
            [T.so]: o
        }),
        onClick: c,
        children: [null != i ? i : (0, r.jsx)("img", {
            className: T.Kk,
            src: n,
            alt: ""
        }), (0, r.jsx)(u.Text, {
            color: "text-strong",
            className: s()(T.t$, T.MY),
            variant: "text-sm/normal",
            children: a
        }), o ? (0, r.jsx)(u.A9s, {
            size: "md",
            color: "currentColor",
            className: s()(T.AI, {
                [T.i0]: d
            })
        }) : (0, r.jsx)(O.A, {
            className: T.UE,
            direction: O.A.Directions.RIGHT
        })]
    })
}

function D(e) {
    let t, i, p, O, D, M, {
            channel: L
        } = e,
        k = (0, o.bG)([y.A], () => null != L ? y.A.getGuild(L.getGuildId()) : null, [L]),
        G = null != k && E.default.extractTimestamp(k.id) < Date.now() - S.NOr,
        U = (0, o.bG)([A.default], () => (null == k ? void 0 : k.ownerId) === A.default.getId(), [k]),
        {
            canInvite: B,
            canManageGuild: V,
            canMessage: F
        } = (0, f.Sk)(L, k),
        H = (0, o.bG)([_.default], () => {
            var e, t;
            return (null == (e = _.default.getCurrentUser()) ? void 0 : e.desktop) === !0 || (null == (t = _.default.getCurrentUser()) ? void 0 : t.mobile) === !0
        }),
        {
            guildPopulated: K,
            guildMessaged: W,
            guildPersonalized: z
        } = (0, f.lF)(k),
        {
            handleInvite: Y,
            handleMessage: q,
            handlePersonalize: X,
            handleDownload: J,
            handleAddApplication: Q
        } = (t = l.useCallback(() => {
            h.Ay.trackWithMetadata(S.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: I.XT.CHANNEL_WELCOME,
                action: I.AG.INVITE
            }), null != k && (0, u.mMO)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("43600"), n.e("28136"), n.e("74918")]).then(n.bind(n, 234355));
                return t => (0, r.jsx)(e, w(P({}, t), {
                    guild: k,
                    source: S.PE1.CHANNEL_WELCOME,
                    analyticsLocation: {
                        section: S.JJy.CHANNEL_WELCOME_CTA
                    }
                }))
            })
        }, [k]), i = l.useCallback(() => {
            h.Ay.trackWithMetadata(S.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: I.XT.CHANNEL_WELCOME,
                action: I.AG.SEND_MESSAGE
            }), j._.dispatch(S.jej.TEXTAREA_FOCUS, {
                highlight: !0,
                channelId: S.dJq
            })
        }, []), p = l.useCallback(() => {
            h.Ay.trackWithMetadata(S.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: I.XT.CHANNEL_WELCOME,
                action: I.AG.PERSONALIZE_SERVER
            }), null != k && g.A.open(k.id, (0, b.x)(), {
                section: S.JJy.CHANNEL_WELCOME_CTA
            })
        }, [k]), {
            handleInvite: t,
            handleMessage: i,
            handlePersonalize: p,
            handleDownload: l.useCallback(() => {
                h.Ay.trackWithMetadata(S.HAw.SERVER_SETUP_CTA_CLICKED, {
                    setup_type: I.XT.CHANNEL_WELCOME,
                    action: I.AG.DOWNLOAD
                }), (0, u.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                    return t => (0, r.jsx)(e, P({
                        source: S.JJy.CHANNEL_WELCOME_CTA
                    }, t))
                })
            }, []),
            handleAddApplication: l.useCallback(() => {
                null != k && (h.Ay.trackWithMetadata(S.HAw.SERVER_SETUP_CTA_CLICKED, {
                    setup_type: I.XT.CHANNEL_WELCOME,
                    action: I.AG.ADD_APP
                }), (0, u.mMO)(async () => {
                    let {
                        default: e
                    } = await n.e("66003").then(n.bind(n, 258942));
                    return t => {
                        var n;
                        return (0, r.jsx)(e, w(P({
                            guildId: null != (n = k.id) ? n : ""
                        }, t), {
                            analyticsType: c.M.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL
                        }))
                    }
                }))
            }, [k])
        }),
        Z = !(H || K || W || z),
        {
            titleAnimatedStyle: $,
            opacities: ee
        } = (O = (0, d.A)(() => new a.A.Value(0)), D = (0, d.A)(() => new a.A.Value(0)), M = (0, d.A)(() => [new a.A.Value(0), new a.A.Value(0), new a.A.Value(0), new a.A.Value(0)]), l.useEffect(() => {
            a.A.stagger(300, [a.A.parallel([a.A.timing(D, {
                toValue: 1,
                duration: 450
            }), a.A.timing(O, {
                toValue: 1,
                duration: 450
            })]), a.A.stagger(100, [a.A.timing(M[0], {
                toValue: 1,
                duration: 300
            }), a.A.timing(M[1], {
                toValue: 1,
                duration: 300
            }), a.A.timing(M[2], {
                toValue: 1,
                duration: 300
            }), a.A.timing(M[3], {
                toValue: 1,
                duration: 300
            })])]).start()
        }, [D, O, M]), {
            titleAnimatedStyle: Z ? {
                transform: [{
                    translateY: O.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["-20px", "0px"]
                    })
                }],
                opacity: D
            } : {},
            opacities: M
        }),
        [et, en] = l.useState([]),
        er = et.length > 0;
    if (l.useEffect(() => {
            (async () => {
                try {
                    var e;
                    let t = await (0, m.c)(null != (e = null == k ? void 0 : k.id) ? e : S.dJq);
                    en(t.map(e => e.id))
                } catch (e) {}
            })()
        }, [null == k ? void 0 : k.id]), null == k) return null;
    let el = [];
    G || (B && el.push((0, r.jsx)(a.A.div, {
        className: T.cW,
        style: Z ? {
            opacity: ee[el.length]
        } : {},
        children: (0, r.jsx)(R, {
            iconUrl: u.zNk,
            header: N.intl.string(N.t.q9n0Ta),
            completed: K,
            onClick: Y
        })
    }, "invite")), V && el.push((0, r.jsx)(a.A.div, {
        className: T.cW,
        style: Z ? {
            opacity: ee[el.length]
        } : {},
        children: (0, r.jsx)(R, {
            iconUrl: u.nIm,
            header: N.intl.string(N.t.c5kxPh),
            completed: z,
            onClick: X
        })
    }, "customize")), F && el.push((0, r.jsx)(a.A.div, {
        className: T.cW,
        style: Z ? {
            opacity: ee[el.length]
        } : {},
        children: (0, r.jsx)(R, {
            iconUrl: u.Tj_,
            header: N.intl.string(N.t["SoP7+l"]),
            completed: W,
            onClick: q
        })
    }, "message")), (0, x.isWeb)() && el.push((0, r.jsx)(a.A.div, {
        className: T.cW,
        style: Z ? {
            opacity: ee[el.length]
        } : {},
        children: (0, r.jsx)(R, {
            iconUrl: u.Gl0,
            header: N.intl.string(N.t.pGVNI9),
            completed: H,
            onClick: J
        })
    }, "download")), el.push((0, r.jsx)(a.A.div, {
        className: T.cW,
        style: Z ? {
            opacity: ee[el.length]
        } : {},
        children: (0, r.jsx)(R, {
            iconUrl: u.UJP,
            header: N.intl.string(N.t.IhHDEO),
            completed: er,
            onClick: Q
        })
    }, "addapp")));
    let ei = U ? N.intl.string(N.t["1ach9C"]) : N.intl.string(N.t["ezm+/j"]);
    G && (ei = N.intl.string(N.t["gwyU/J"]));
    let es = "".concat(v.A.getArticleURL(S.MVz.GUILD_GETTING_STARTED), "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm");
    return (0, r.jsx)(C.Ay, {
        channelId: L.id,
        children: (0, r.jsx)("div", {
            className: T.kL,
            children: (0, r.jsxs)("div", {
                className: T.vW,
                children: [(0, r.jsxs)(a.A.div, {
                    style: $,
                    children: [(0, r.jsx)(u.Heading, {
                        className: T.ud,
                        variant: "heading-xxl/medium",
                        children: N.intl.format(N.t.rkHVKf, {
                            guildName: k.name
                        })
                    }), (0, r.jsxs)(u.Text, {
                        color: "text-default",
                        className: s()({
                            [T.VA]: !0,
                            [T.lg]: 0 === el.length
                        }),
                        variant: "text-sm/normal",
                        children: [ei, " ", el.length > 0 ? N.intl.format(N.t.UOtD32, {
                            guideURL: es
                        }) : null]
                    })]
                }), el]
            })
        })
    })
}