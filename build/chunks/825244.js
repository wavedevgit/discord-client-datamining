/** chunk id: 825244 params = (module,exports,require) **/
n.d(t, {
    A: () => L,
    E: () => M
}), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(615300),
    o = n(311907),
    c = n(554146),
    d = n(397927),
    u = n(444927),
    h = n(919796),
    m = n(58149),
    A = n(668446),
    g = n(997509),
    p = n(794967),
    _ = n(595818),
    f = n(961350),
    E = n(71393),
    C = n(287809),
    x = n(147925),
    S = n(203982),
    I = n(975571),
    T = n(723702),
    v = n(661191),
    N = n(314307),
    y = n(652215),
    b = n(936649),
    j = n(985018),
    R = n(516847);

function M(e) {
    let {
        className: t,
        iconUrl: n,
        icon: a,
        header: r,
        completed: o,
        onClick: c
    } = e, [u, m] = l.useState(!1), A = (0, h.A)(o);
    return l.useEffect(() => {
        null != A && o !== A && (m(!0), setTimeout(() => m(!1), 1e3))
    }, [o, A]), (0, i.jsxs)(d.DUT, {
        className: s()(t, R.Nr, {
            [R.so]: o
        }),
        onClick: c,
        children: [a ?? (0, i.jsx)("img", {
            className: R.Kk,
            src: n,
            alt: ""
        }), (0, i.jsx)(d.Text, {
            color: "text-strong",
            className: s()(R.t$, R.MY),
            variant: "text-sm/normal",
            children: r
        }), o ? (0, i.jsx)(d.A9s, {
            size: "md",
            color: "currentColor",
            className: s()(R.AI, {
                [R.i0]: u
            })
        }) : (0, i.jsx)(x.A, {
            className: R.UE,
            direction: x.A.Directions.RIGHT
        })]
    })
}

function L(e) {
    let t, a, h, x, L, D, {
            channel: O
        } = e,
        P = (0, o.bG)([E.A], () => null != O ? E.A.getGuild(O.getGuildId()) : null, [O]),
        k = null != P && v.default.extractTimestamp(P.id) < Date.now() - y.NOr,
        w = (0, o.bG)([f.default], () => P?.ownerId === f.default.getId(), [P]),
        {
            canInvite: U,
            canManageGuild: G,
            canMessage: F
        } = (0, A.Sk)(O, P),
        B = (0, o.bG)([C.default], () => C.default.getCurrentUser()?.desktop === !0 || C.default.getCurrentUser()?.mobile === !0),
        {
            guildPopulated: H,
            guildMessaged: V,
            guildPersonalized: W
        } = (0, A.lF)(P),
        {
            handleInvite: K,
            handleMessage: z,
            handlePersonalize: Y,
            handleDownload: J,
            handleAddApplication: q
        } = (t = l.useCallback(() => {
            m.Ay.trackWithMetadata(y.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: b.XT.CHANNEL_WELCOME,
                action: b.AG.INVITE
            }), null != P && (0, d.mMO)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("43600"), n.e("28136"), n.e("85905")]).then(n.bind(n, 234355));
                return t => (0, i.jsx)(e, {
                    ...t,
                    guild: P,
                    source: y.PE1.CHANNEL_WELCOME,
                    analyticsLocation: {
                        section: y.JJy.CHANNEL_WELCOME_CTA
                    }
                })
            })
        }, [P]), a = l.useCallback(() => {
            m.Ay.trackWithMetadata(y.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: b.XT.CHANNEL_WELCOME,
                action: b.AG.SEND_MESSAGE
            }), S._.dispatch(y.jej.TEXTAREA_FOCUS, {
                highlight: !0,
                channelId: y.dJq
            })
        }, []), h = l.useCallback(() => {
            m.Ay.trackWithMetadata(y.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: b.XT.CHANNEL_WELCOME,
                action: b.AG.PERSONALIZE_SERVER
            }), null != P && g.A.open(P.id, (0, _.x)(), {
                section: y.JJy.CHANNEL_WELCOME_CTA
            })
        }, [P]), {
            handleInvite: t,
            handleMessage: a,
            handlePersonalize: h,
            handleDownload: l.useCallback(() => {
                m.Ay.trackWithMetadata(y.HAw.SERVER_SETUP_CTA_CLICKED, {
                    setup_type: b.XT.CHANNEL_WELCOME,
                    action: b.AG.DOWNLOAD
                }), (0, d.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                    return t => (0, i.jsx)(e, {
                        source: y.JJy.CHANNEL_WELCOME_CTA,
                        ...t
                    })
                })
            }, []),
            handleAddApplication: l.useCallback(() => {
                null != P && (m.Ay.trackWithMetadata(y.HAw.SERVER_SETUP_CTA_CLICKED, {
                    setup_type: b.XT.CHANNEL_WELCOME,
                    action: b.AG.ADD_APP
                }), (0, d.mMO)(async () => {
                    let {
                        default: e
                    } = await n.e("66003").then(n.bind(n, 258942));
                    return t => (0, i.jsx)(e, {
                        guildId: P.id ?? "",
                        ...t,
                        analyticsType: c.M.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL
                    })
                }))
            }, [P])
        }),
        $ = !(B || H || V || W),
        {
            titleAnimatedStyle: Z,
            opacities: X
        } = (x = (0, u.A)(() => new r.A.Value(0)), L = (0, u.A)(() => new r.A.Value(0)), D = (0, u.A)(() => [new r.A.Value(0), new r.A.Value(0), new r.A.Value(0), new r.A.Value(0)]), l.useEffect(() => {
            r.A.stagger(300, [r.A.parallel([r.A.timing(L, {
                toValue: 1,
                duration: 450
            }), r.A.timing(x, {
                toValue: 1,
                duration: 450
            })]), r.A.stagger(100, [r.A.timing(D[0], {
                toValue: 1,
                duration: 300
            }), r.A.timing(D[1], {
                toValue: 1,
                duration: 300
            }), r.A.timing(D[2], {
                toValue: 1,
                duration: 300
            }), r.A.timing(D[3], {
                toValue: 1,
                duration: 300
            })])]).start()
        }, [L, x, D]), {
            titleAnimatedStyle: $ ? {
                transform: [{
                    translateY: x.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["-20px", "0px"]
                    })
                }],
                opacity: L
            } : {},
            opacities: D
        }),
        [Q, ee] = l.useState([]),
        et = Q.length > 0;
    if (l.useEffect(() => {
            (async () => {
                try {
                    let e = await (0, p.c)(P?.id ?? y.dJq);
                    ee(e.map(e => e.id))
                } catch {}
            })()
        }, [P?.id]), null == P) return null;
    let en = [];
    k || (U && en.push((0, i.jsx)(r.A.div, {
        className: R.cW,
        style: $ ? {
            opacity: X[en.length]
        } : {},
        children: (0, i.jsx)(M, {
            iconUrl: d.zNk,
            header: j.intl.string(j.t.q9n0Ta),
            completed: H,
            onClick: K
        })
    }, "invite")), G && en.push((0, i.jsx)(r.A.div, {
        className: R.cW,
        style: $ ? {
            opacity: X[en.length]
        } : {},
        children: (0, i.jsx)(M, {
            iconUrl: d.nIm,
            header: j.intl.string(j.t.c5kxPh),
            completed: W,
            onClick: Y
        })
    }, "customize")), F && en.push((0, i.jsx)(r.A.div, {
        className: R.cW,
        style: $ ? {
            opacity: X[en.length]
        } : {},
        children: (0, i.jsx)(M, {
            iconUrl: d.Tj_,
            header: j.intl.string(j.t["SoP7+l"]),
            completed: V,
            onClick: z
        })
    }, "message")), (0, T.isWeb)() && en.push((0, i.jsx)(r.A.div, {
        className: R.cW,
        style: $ ? {
            opacity: X[en.length]
        } : {},
        children: (0, i.jsx)(M, {
            iconUrl: d.Gl0,
            header: j.intl.string(j.t.pGVNI9),
            completed: B,
            onClick: J
        })
    }, "download")), en.push((0, i.jsx)(r.A.div, {
        className: R.cW,
        style: $ ? {
            opacity: X[en.length]
        } : {},
        children: (0, i.jsx)(M, {
            iconUrl: d.UJP,
            header: j.intl.string(j.t.IhHDEO),
            completed: et,
            onClick: q
        })
    }, "addapp")));
    let ei = w ? j.intl.string(j.t["1ach9C"]) : j.intl.string(j.t["ezm+/j"]);
    k && (ei = j.intl.string(j.t["gwyU/J"]));
    let el = `${I.A.getArticleURL(y.MVz.GUILD_GETTING_STARTED)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm`;
    return (0, i.jsx)(N.Ay, {
        channelId: O.id,
        children: (0, i.jsx)("div", {
            className: R.kL,
            children: (0, i.jsxs)("div", {
                className: R.vW,
                children: [(0, i.jsxs)(r.A.div, {
                    style: Z,
                    children: [(0, i.jsx)(d.Heading, {
                        className: R.ud,
                        variant: "heading-xxl/medium",
                        children: j.intl.format(j.t.rkHVKf, {
                            guildName: P.name
                        })
                    }), (0, i.jsxs)(d.Text, {
                        color: "text-default",
                        className: s()({
                            [R.VA]: !0,
                            [R.lg]: 0 === en.length
                        }),
                        variant: "text-sm/normal",
                        children: [ei, " ", en.length > 0 ? j.intl.format(j.t.UOtD32, {
                            guideURL: el
                        }) : null]
                    })]
                }), en]
            })
        })
    })
}