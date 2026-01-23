/** Chunk was on 97492 **/
/** chunk id: 681281, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => H
}), n(896048);
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(311907),
    a = n(990078),
    o = n(397927),
    c = n(730134),
    u = n(440594),
    d = n(429913),
    p = n(309698),
    h = n(47167),
    f = n(713654),
    g = n(769015),
    m = n(508654),
    b = n(974930),
    A = n(961314),
    y = n(58736),
    _ = n(742589),
    O = n(353428),
    j = n(267102),
    v = n(46054),
    x = n(164203),
    E = n(665691),
    C = n(241756),
    S = n(447404),
    I = n(313961),
    N = n(532622),
    T = n(780642),
    P = n(416528),
    w = n(525788),
    R = n(136523),
    D = n(806931),
    M = n(652215),
    L = n(818348),
    k = n(985018),
    G = n(597217),
    U = n(206314);

function B(e) {
    let {
        focusedParticipant: t,
        channel: n
    } = e, l = (0, j.Us)(), i = (0, s.bG)([I.A], () => I.A.getLayout(n.id, l));
    return (0, r.jsx)(S.A, {
        children: (0, r.jsx)(w.A, {
            participant: t,
            maxVisibleUsers: 5,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: l === M.BRT.POPOUT || i === M.DUB.FULL_SCREEN
        })
    })
}

function V(e) {
    let {
        user: t,
        channel: n,
        stream: l,
        color: i
    } = e, s = (0, C.A)(n, t, l);
    return null == t || null == l ? null : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.A, {
            className: G.my,
            size: o._3J.SIZE_24,
            user: t,
            animate: !1
        }), (0, r.jsx)(o.Text, {
            className: G.W$,
            variant: "text-md/medium",
            color: i,
            children: s
        })]
    })
}

function F(e) {
    let t, {
            focusedApplication: n,
            focusedParticipant: l,
            channel: i
        } = e,
        s = (0, T.A)(i, !0),
        a = (0, m.Qs)(i.id),
        c = null != a ? (0, b.G3)(a) : null,
        d = null != a;
    if ((null == l ? void 0 : l.type) === D.lp.ACTIVITY) null != n && (t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(y.Ay.Divider, {
            className: G.yF
        }), (0, r.jsx)(g.A, {
            game: n,
            className: G.RI
        }), (0, r.jsx)(o.Text, {
            className: G.W$,
            variant: "text-md/normal",
            color: "none",
            children: (0, u.A)(n.name)
        }), s && (0, r.jsx)(B, {
            channel: i,
            focusedParticipant: l
        })]
    }));
    else if ((null == l ? void 0 : l.type) === D.lp.STREAM) {
        let e = l.user,
            n = l.stream;
        t = (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(y.Ay.Divider, {
                className: G.yF
            }), (0, r.jsx)(V, {
                user: e,
                channel: i,
                stream: n,
                color: s ? "text-strong" : "none"
            }), s && (0, r.jsx)(B, {
                channel: i,
                focusedParticipant: l
            })]
        })
    } else d && (t = (0, r.jsx)(A.A, {
        guildEvent: a,
        recurrenceId: c
    }));
    return (0, r.jsx)("div", {
        className: G.kL,
        children: t
    })
}

function H(e) {
    let {
        channel: t,
        guild: l,
        appContext: c,
        inCall: u,
        isChatOpen: g,
        exitFullScreen: m
    } = e, {
        focusedParticipant: b
    } = (0, s.cf)([I.A], () => ({
        focusedParticipant: I.A.getSelectedParticipant(t.id),
        participantsOpen: I.A.getParticipantsOpen(t.id)
    }), [t.id]), A = (0, h.Ay)(t), j = (0, f.gU)(t), [C] = (0, d.A)((null == b ? void 0 : b.type) === D.lp.ACTIVITY ? [b.applicationId] : []), S = k.intl.string(k.t.BVZqJl);
    t.isDM() ? S = k.intl.string(k.t.jN2DfZ) : t.isGroupDM() && (S = k.intl.string(k.t["e5y+gm"]));
    let T = (0, s.bG)([p.A], () => p.A.getChannelStatus(t)),
        w = t.isGuildVoice() && u && null != T && T.length > 0,
        M = (0, N.Ay)(t),
        B = w ? (0, r.jsx)(a.m, {
            asContainer: !0,
            text: k.intl.string(k.t.Mgpxiw),
            delay: 500,
            position: "bottom",
            shouldShow: M,
            children: (0, r.jsxs)(o.DUT, {
                className: i()(G.WH, {
                    [G.BI]: M
                }),
                onClick: M ? function() {
                    (0, o.mMO)(async () => {
                        let {
                            default: e
                        } = await Promise.resolve().then(n.bind(n, 136523));
                        return n => (0, r.jsx)(e, function(e) {
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
                        }({
                            channel: t
                        }, n))
                    }, {
                        modalKey: R.m
                    })
                } : void 0,
                children: [(0, r.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    className: i()(G.Gh, U.PT, {
                        [G.BI]: M
                    }),
                    children: v.A.parseVoiceChannelStatus(T, !0, {
                        channelId: t.id
                    })
                }), M && (0, r.jsx)(o.R2l, {
                    size: "custom",
                    color: "currentColor",
                    className: i()(G.rD, G.BI),
                    width: 14,
                    height: 14
                })]
            })
        }) : null,
        V = (0, E.bG)({
            channelId: t.id
        });
    return (0, r.jsxs)("div", {
        className: G.SC,
        children: [(0, r.jsx)(o.NPJ, {
            theme: L.NJ.DARK,
            children: e => (0, r.jsxs)(y.Ay, {
                onDoubleClick: _.I,
                transparent: !0,
                className: i()(e, G.jr),
                innerClassName: G.gi,
                toolbarClassName: G.KE,
                childrenBottom: B,
                toolbar: (0, r.jsx)(P.A, {
                    channel: t,
                    appContext: c,
                    inCall: u,
                    isChatOpen: g,
                    exitFullScreen: m
                }),
                children: [(0, r.jsx)(y.Ay.Title, {
                    wrapperClassName: G.DD,
                    children: (0, r.jsxs)(r.Fragment, {
                        children: [null != j ? (0, r.jsx)(y.Ay.ChannelIcon, {
                            icon: j,
                            "aria-label": S
                        }) : null, A, V && (0, r.jsx)(a.m, {
                            text: k.intl.string(k.t.QyZ4Td),
                            children: (0, r.jsx)(o.m5V, {
                                size: "xs",
                                "aria-label": k.intl.string(k.t.VHXh8a),
                                color: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                className: G.vW
                            })
                        })]
                    })
                }), (0, r.jsx)(O.i$, {
                    channel: t,
                    guild: l
                }), (0, r.jsx)(F, {
                    focusedApplication: C,
                    focusedParticipant: b,
                    channel: t
                })]
            })
        }), (0, r.jsx)(x.A, {
            channelId: t.id
        })]
    })
}