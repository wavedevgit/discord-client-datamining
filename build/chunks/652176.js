/** chunk id: 652176, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $o: () => $,
    Ab: () => ec,
    Dk: () => ea,
    Ez: () => eu,
    GN: () => ed,
    LL: () => en,
    OZ: () => ef,
    P$: () => et,
    UK: () => eh,
    Uk: () => Z,
    Uq: () => eg,
    Y0: () => eE,
    _d: () => ei,
    bU: () => er,
    gL: () => ee,
    ks: () => eo,
    yR: () => em
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(735438),
    l = n.n(s),
    c = n(621466),
    u = n(311907),
    d = n(397927),
    f = n(843472),
    p = n(334738),
    _ = n(490693),
    h = n(9578),
    m = n(56562),
    g = n(475743),
    E = n(718468),
    y = n(692051),
    b = n(915089),
    O = n(611371),
    v = n(74068),
    A = n(248643),
    I = n(752063),
    S = n(863922),
    T = n(513272),
    C = n(977463),
    N = n(253932),
    w = n(41431),
    R = n(222823),
    P = n(287809),
    D = n(147925),
    L = n(954571),
    x = n(403362),
    M = n(587481),
    j = n(661191),
    k = n(838541),
    U = n(652215),
    G = n(521732),
    V = n(650583),
    F = n(985018),
    B = n(702926);

function H(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function Y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            H(e, t, n[t])
        })
    }
    return e
}

function W(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function K(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : W(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function z(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = q(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function q(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let Z = {
        delay: 300,
        position: "top"
    },
    Q = e => t => {
        null == e || e(t), (0, M.ls)(t)
    },
    X = e => t => {
        null == e || e(t), (0, M.y5)(t)
    };

function J(e) {
    let {
        onVolumeChange: t,
        onMute: n,
        volume: a,
        autoMute: s,
        alt: l,
        renderAdjacentContent: c,
        renderOverlayContent: u,
        disableAltTextDisplay: f = !1,
        hiddenSpoilers: p,
        mosaicStyleAlt: _,
        mediaLayoutType: h,
        reducedSizeAltTextButton: m
    } = e, g = z(e, ["onVolumeChange", "onMute", "volume", "autoMute", "alt", "renderAdjacentContent", "renderOverlayContent", "disableAltTextDisplay", "hiddenSpoilers", "mosaicStyleAlt", "mediaLayoutType", "reducedSizeAltTextButton"]), E = Q(t), y = X(n);
    a = null == a ? M.v1 : a, s = null == s ? M.uj : s;
    let [b, O] = i.useState(!0), [v, I] = i.useState(!1), S = h === k.dG.MOSAIC || !0 === _, T = (b || v) && !f && N._z.getSetting() && null != l && "" !== l && !0 !== p, C = e => {
        let {
            altText: t
        } = e;
        return (0, r.jsxs)(d.lGe, {
            "aria-label": F.intl.string(F.t.fSiQ3A),
            className: B.ob,
            onKeyDown: e => {
                e.key === V.N$.Escape && setTimeout(() => {
                    var e;
                    return null == (e = w.current) ? void 0 : e.focus()
                }, 0)
            },
            children: [(0, r.jsx)("span", {
                className: B.k_,
                children: F.intl.string(F.t.fSiQ3A)
            }), (0, r.jsx)("span", {
                className: B.a7,
                children: t
            })]
        })
    }, w = i.useRef(null);
    return (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(A.A, K(Y({}, g), {
            alt: l,
            autoMute: s,
            mediaLayoutType: h,
            onControlsHide: () => O(!1),
            onControlsShow: () => O(!0),
            onMute: y,
            onVolumeChange: E,
            renderLinkComponent: er,
            renderOverlayContent: u,
            volume: a
        })), null != c && c(), S && T && (0, r.jsx)("div", {
            className: B.NO,
            children: (0, r.jsx)(d.YNO, {
                targetElementRef: w,
                animation: d.YNO.Animation.FADE,
                renderPopout: () => (0, r.jsx)(C, {
                    altText: l
                }),
                children: e => (0, r.jsx)(d.vN3, {
                    offset: 4,
                    children: (0, r.jsx)("button", K(Y({}, e), {
                        type: "button",
                        ref: w,
                        "aria-label": F.intl.string(F.t.fSiQ3A),
                        onMouseEnter: () => I(!0),
                        onMouseLeave: () => I(!1),
                        className: o()(B.DV, {
                            [B.yZ]: !0,
                            [B.I5]: m
                        }),
                        children: F.intl.string(F.t.jCV1Tz)
                    }))
                })
            })
        }), !S && T && (0, r.jsx)("span", {
            className: B.R5,
            children: l
        })]
    })
}

function $(e) {
    return (0, r.jsx)(J, Y({}, e))
}

function ee(e) {
    let {
        onVolumeChange: t,
        volume: n,
        onMute: a,
        onVolumeShow: o,
        onVolumeHide: s,
        renderAdjacentContent: l
    } = e, c = z(e, ["onVolumeChange", "volume", "onMute", "onVolumeShow", "onVolumeHide", "renderAdjacentContent"]), u = Q(t), d = X(a);
    n = null == n ? M.v1 : n;
    let f = () => !1;
    return (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(v.A, K(Y({}, c), {
            onVolumeChange: u,
            onMute: d,
            onVolumeShow: o,
            onVolumeHide: s,
            volume: n,
            autoMute: f,
            renderLinkComponent: er
        })), null != l && l()]
    })
}

function et(e) {
    let {
        onVolumeChange: t,
        volume: n,
        onMute: i
    } = e, a = z(e, ["onVolumeChange", "volume", "onMute"]), o = Q(t), s = X(i);
    return n = null == n ? M.v1 : n, (0, r.jsx)(w.A, K(Y({}, a), {
        onVolumeChange: o,
        onMute: s,
        volume: n
    }))
}

function en(e) {
    let {
        alt: t,
        hiddenSpoilers: n,
        renderAdjacentContent: a,
        containerClassName: s,
        imageContainerClassName: l,
        disableAltTextDisplay: c = !1,
        reducedSizeAltTextButton: u = !1,
        mediaLayoutType: f,
        imageContainerStyle: p,
        mosaicStyleAlt: h
    } = e, m = f === k.dG.MOSAIC || !0 === h, g = !c && N._z.getSetting() && null != t && "" !== t && !0 !== n, E = e => {
        let {
            altText: t
        } = e;
        return (0, r.jsxs)(d.lGe, {
            "aria-label": F.intl.string(F.t.fSiQ3A),
            className: B.ob,
            onKeyDown: e => {
                e.key === V.N$.Escape && setTimeout(() => {
                    var e;
                    return null == (e = y.current) ? void 0 : e.focus()
                }, 0)
            },
            children: [(0, r.jsx)("span", {
                className: B.k_,
                children: F.intl.string(F.t.fSiQ3A)
            }), (0, r.jsx)("span", {
                className: B.a7,
                children: t
            })]
        })
    }, y = i.createRef();
    return (0, r.jsxs)("div", {
        className: o()(B.fo, s),
        children: [(0, r.jsxs)("div", {
            className: o()(B.ZS, l),
            style: p,
            children: [(0, r.jsx)(_.A, Y({}, e)), null != a && a()]
        }), m && g && (0, r.jsx)("div", {
            className: B.Y1,
            children: (0, r.jsx)(d.YNO, {
                targetElementRef: y,
                animation: d.YNO.Animation.FADE,
                renderPopout: () => (0, r.jsx)(E, {
                    altText: t
                }),
                children: e => (0, r.jsx)(d.vN3, {
                    offset: 4,
                    children: (0, r.jsx)("button", K(Y({}, e), {
                        type: "button",
                        ref: y,
                        "aria-label": F.intl.string(F.t.fSiQ3A),
                        className: o()(B.DV, {
                            [B.I5]: u
                        }),
                        children: F.intl.string(F.t.jCV1Tz)
                    }))
                })
            })
        }), !m && g && (0, r.jsx)("span", {
            className: B.R5,
            children: t
        })]
    })
}

function er(e) {
    return (0, r.jsx)(h.A, Y({}, e))
}

function ei(e) {
    let {
        renderAdjacentContent: t
    } = e, n = z(e, ["renderAdjacentContent"]);
    return (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(I.A, Y({}, n)), null != t && t()]
    })
}

function ea(e) {
    return (0, r.jsx)(E.A, Y({}, e))
}
var eo = function(e) {
    return e[e.OLD_MESSAGES = 0] = "OLD_MESSAGES", e[e.REPLY = 1] = "REPLY", e
}({});

function es(e) {
    switch (e) {
        case 0:
            return F.intl.string(F.t["4EvBbw"]);
        case 1:
            return F.intl.string(F.t["1J6Xq7"]);
        default:
            return (0, x.xb)(e)
    }
}

function el(e) {
    switch (e) {
        case 0:
            return F.intl.string(F.t.gpoQsB);
        case 1:
            return F.intl.string(F.t.k3RM8z);
        default:
            return (0, x.xb)(e)
    }
}
let ec = e => {
        let {
            type: t = 0,
            onClick: n,
            className: i
        } = e;
        return (0, r.jsx)(y.Y.Consumer, {
            children: e => e.disableInteractions ? null : (0, r.jsxs)("div", {
                onClick: n,
                className: o()(B.Sg, i),
                children: [(0, r.jsx)("div", {
                    className: B.$I,
                    children: es(t)
                }), null != n ? (0, r.jsx)(d.vN3, {
                    offset: -2,
                    children: (0, r.jsx)(d.Button, {
                        variant: "primary",
                        size: "sm",
                        text: el(t),
                        onClick: n
                    })
                }) : (0, r.jsx)(d.y$y, {
                    type: d.y$y.Type.PULSING_ELLIPSIS,
                    className: B.u1,
                    itemClassName: B.$N
                })]
            })
        })
    },
    eu = e => {
        let {
            onClick: t,
            loading: n,
            className: i
        } = e;
        return (0, r.jsx)(y.Y.Consumer, {
            children: e => e.disableInteractions ? null : (0, r.jsxs)(d.DUT, {
                className: o()(B._5, i),
                onClick: t,
                focusProps: {
                    offset: {
                        top: 4,
                        right: 4,
                        bottom: 12,
                        left: 4
                    }
                },
                children: [(0, r.jsx)("div", {
                    className: B.$I,
                    children: F.intl.string(F.t["1zUvlw"])
                }), n ? (0, r.jsx)(d.y$y, {
                    type: d.y$y.Type.PULSING_ELLIPSIS,
                    className: B.u1,
                    itemClassName: B.$N
                }) : (0, r.jsx)("div", {
                    className: B.hQ,
                    children: F.intl.string(F.t.TdQXA8)
                })]
            })
        })
    };

function ed(e) {
    let {
        content: t,
        channelId: n
    } = e, [a] = i.useState(() => (0, b.Ld)("NewMessagesBarJumpToNewMessages_")), s = i.useCallback(() => {
        let e = R.Ay.ackMessageId(n);
        null != e ? f.A.jumpToMessage({
            channelId: n,
            messageId: e,
            offset: 1,
            context: "Mark As Read"
        }) : f.A.jumpToMessage({
            channelId: n,
            messageId: j.default.castChannelIdAsMessageId(n),
            offset: 1,
            context: "Mark As Read"
        })
    }, [n]), l = i.useCallback(() => {
        (0, p.ack)(n, {
            section: U.JJy.NEW_MESSAGES_BANNER,
            object: U.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
            objectType: U.AnalyticsObjectTypes.ACK_MANUAL
        })
    }, [n]), {
        disableInteractions: c
    } = i.useContext(y.Y);
    return c ? null : (0, r.jsxs)("div", {
        className: o()(B.eb, {
            [B.y7]: c
        }),
        children: [(0, r.jsx)(d.vN3, {
            offset: 4,
            children: (0, r.jsx)("button", {
                type: "button",
                className: B.$I,
                onClick: s,
                "aria-label": F.intl.string(F.t.z0Mkp3),
                "aria-describedby": a,
                children: (0, r.jsx)("span", {
                    id: a,
                    className: B.Ln,
                    children: t
                })
            })
        }), (0, r.jsx)(d.vN3, {
            offset: 4,
            children: (0, r.jsxs)("button", {
                type: "button",
                onClick: l,
                className: B.hQ,
                children: [F.intl.string(F.t.e6RscS), (0, r.jsx)(d.MBj, {
                    size: "md",
                    color: "currentColor",
                    className: B.t3
                })]
            })
        })]
    })
}

function ef(e) {
    var t, n, a;
    let {
        channel: s,
        content: _,
        scrollManager: h
    } = e, {
        disableInteractions: E
    } = i.useContext(y.Y), [b, v] = i.useState(null), A = i.useRef(null), [I, N] = i.useState(null), w = i.useRef(null), M = (0, u.yK)([T.A], () => {
        var e;
        return null != (e = T.A.summaries(s.id)) ? e : []
    }, [s]), k = (0, g.A)(M);
    i.useEffect(() => {
        l().isEqual(k, M) || L.default.track(U.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
            num_summaries: M.length,
            message_counts: M.map(e => e.count),
            start_message_ids: M.map(e => e.startId),
            end_message_ids: M.map(e => e.endId),
            num_participants: M.map(e => e.people.length),
            guild_id: s.guild_id,
            channel_id: s.id,
            channel_type: s.type
        })
    }, [M, k, s.guild_id, s.id, s.type]);
    let V = (0, u.bG)([P.default], () => {
            var e;
            return null != (e = null == M ? void 0 : M.map(e => {
                var t;
                return null == (t = e.people) ? void 0 : t.map(e => {
                    var t;
                    return null != (t = P.default.getUser(e)) ? t : null
                }).filter(x.Vq)
            })) ? e : []
        }, [M], e_),
        H = null != (t = (0, u.bG)([T.A], () => T.A.visibleSummaryIndex())) ? t : -1,
        Y = null == M || null == (n = M[H]) ? void 0 : n.topic;
    null == Y && null == b && (null == M ? void 0 : M.length) >= 1 && (Y = null == (a = M[0]) ? void 0 : a.topic);
    let W = i.useMemo(() => l().debounce(e => {
            var t;
            v(null != (t = null == e ? void 0 : e.id) ? t : null)
        }, 64), [v]),
        K = i.useMemo(() => l().throttle(() => {
            (0, S.C6)(null)
        }, 1200, {
            trailing: !1
        }), []),
        z = i.useCallback(e => {
            K(), W(e)
        }, [W, K]),
        [q, Z] = i.useState(!1),
        Q = i.useCallback(() => {
            L.default.track(U.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !q,
                num_summaries: M.length,
                message_counts: M.map(e => e.count),
                start_message_ids: M.map(e => e.startId),
                end_message_ids: M.map(e => e.endId),
                num_participants: M.map(e => e.people.length),
                guild_id: s.guild_id,
                channel_id: s.id,
                channel_type: s.type
            }), Z(!q)
        }, [q, M, Z, s]),
        X = i.useCallback(function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G.eh.PILL_DROPDOWN,
                n = M[e];
            if (null == n) return;
            (0, S.sK)(s.id, n.id), (0, S.C6)(s.id, n.id);
            let r = () => {
                h.removeScrollCompleteCallback(r), setTimeout(() => {
                    h.addAutomaticAnchorCallback(z, !1)
                }, 100)
            };
            h.removeAutomaticAnchorCallback(z), h.addScrollCompleteCallback(r), L.default.track(U.HAw.SUMMARIES_TOPIC_CLICKED, {
                source: t,
                message_id: n.startId,
                guild_id: s.guild_id,
                channel_id: s.id,
                channel_type: s.type
            }), f.A.jumpToMessage({
                channelId: s.id,
                messageId: n.startId,
                flash: !0,
                offset: 0,
                jumpType: m.US.ANIMATED,
                context: "Summary Jump"
            })
        }, [M, s, z, h]),
        J = i.useCallback(e => {
            var t;
            Z(e);
            let n = null == (t = w.current) ? void 0 : t.scrollTop;
            null != n && N(n)
        }, []);
    i.useEffect(() => {
        if (null != I && q) {
            var e;
            null == (e = w.current) || e.scrollTo({
                top: I
            })
        }
    }, [I, q]);
    let $ = i.useCallback(e => {
        var t;
        (0, c.vq)(e.target) && (null == (t = A.current) ? void 0 : t.contains(e.target)) || (q && L.default.track(U.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
            topics_dropdown_open: !1,
            num_summaries: M.length,
            message_counts: M.map(e => e.count),
            start_message_ids: M.map(e => e.startId),
            end_message_ids: M.map(e => e.endId),
            num_participants: M.map(e => e.people.length),
            guild_id: s.guild_id,
            channel_id: s.id,
            channel_type: s.type
        }), J(!1))
    }, [q, M, s, J]);
    i.useEffect(() => (h.addAutomaticAnchorCallback(z), () => {
        h.removeAutomaticAnchorCallback(z)
    }), [h, z]), i.useEffect(() => {
        (0, S.$T)(s.id)
    }, [s.id]), i.useEffect(() => (document.addEventListener("mousedown", $), () => {
        document.removeEventListener("mousedown", $)
    }), [$]);
    let ee = i.useMemo(() => (0, r.jsx)(C.A, {
            channel: s,
            summaries: M,
            summariesMembers: V,
            selectTopic: X,
            setOpen: J
        }), [M, V, X, J, s]),
        et = i.useCallback(() => {
            let e = R.Ay.ackMessageId(s.id);
            null != e ? f.A.jumpToMessage({
                channelId: s.id,
                messageId: e,
                offset: 1,
                context: "Mark As Read"
            }) : f.A.jumpToMessage({
                channelId: s.id,
                messageId: j.default.castChannelIdAsMessageId(s.id),
                offset: 1,
                context: "Mark As Read"
            })
        }, [s.id]),
        en = i.useCallback(() => {
            (0, p.ack)(s.id, {
                section: U.JJy.NEW_TOPICS_BAR,
                object: U.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: U.AnalyticsObjectTypes.ACK_MANUAL
            })
        }, [s.id]),
        er = F.intl.string(F.t["38qwgO"]);
    return M.length > 0 && (er = "" === Y || null == Y ? F.intl.string(F.t.DwnFuG) : Y), E ? null : (0, r.jsxs)("div", {
        ref: A,
        className: o()(B.dw, B.jh),
        children: [(0, r.jsx)("div", {
            className: B.qm,
            children: (0, r.jsx)(d.DUT, {
                className: B.TQ,
                "aria-label": F.intl.string(F.t.RT3MPz),
                onClick: Q,
                children: (0, r.jsxs)("div", {
                    className: o()({
                        [B.hN]: !q,
                        [B.Ap]: q
                    }),
                    children: [(0, r.jsx)(d.Kck, {
                        size: "xs",
                        color: "currentColor",
                        className: B.Vd
                    }), (0, r.jsx)(d.Text, {
                        variant: "text-sm/medium",
                        className: o()(B.$U, B.lc),
                        children: er
                    }), (0, r.jsx)(D.A, {
                        width: 16,
                        height: 16,
                        direction: D.A.Directions.DOWN,
                        className: B.HB
                    })]
                })
            })
        }), (0, r.jsx)(d.DUT, {
            onClick: et,
            className: B.ij,
            children: _
        }), (0, r.jsxs)(d.DUT, {
            onClick: en,
            className: o()(B.hQ, B.NX),
            children: [(0, r.jsx)("div", {
                className: B.$U,
                children: F.intl.string(F.t.e6RscS)
            }), (0, r.jsx)(d.MBj, {
                size: "md",
                color: "currentColor",
                className: B.t3
            })]
        }), q && (0, r.jsxs)("div", {
            className: B.A1,
            children: [(0, r.jsxs)("div", {
                className: B.ke,
                children: [(0, r.jsxs)("div", {
                    className: B.Ne,
                    children: [(0, r.jsx)(d.Kck, {
                        size: "custom",
                        color: "currentColor",
                        className: B.vl,
                        width: 18,
                        height: 20
                    }), (0, r.jsx)(d.Heading, {
                        variant: "heading-md/bold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: F.intl.string(F.t.q21fUr)
                    }), (0, r.jsx)(O.A, {
                        className: B.Zx
                    })]
                }), (0, r.jsx)(d.DUT, {
                    "aria-label": F.intl.string(F.t.cpT0Cq),
                    onClick: Q,
                    className: B.oX,
                    children: (0, r.jsx)(d.PGe, {
                        size: "md",
                        color: "currentColor"
                    })
                })]
            }), (0, r.jsx)(d.HOs, {
                ref: w,
                className: B.Pe,
                fade: !0,
                children: ee
            })]
        })]
    })
}

function ep(e, t) {
    return null != t && e.length === t.length && !e.some((e, n) => t[n] !== e)
}

function e_(e, t) {
    return null != t && e.length === t.length && !e.some((e, n) => !ep(e, t[n]))
}

function eh(e) {
    var t, n, a;
    let {
        channel: s,
        scrollManager: p
    } = e, {
        disableInteractions: _
    } = i.useContext(y.Y), [h, E] = i.useState(null), b = i.useRef(null), [v, A] = i.useState(null), I = i.useRef(null), N = (0, u.yK)([T.A], () => {
        var e;
        return null != (e = T.A.summaries(s.id)) ? e : []
    }, [s]), w = (0, g.A)(N);
    i.useEffect(() => {
        l().isEqual(w, N) || L.default.track(U.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
            num_summaries: N.length,
            message_counts: N.map(e => e.count),
            start_message_ids: N.map(e => e.startId),
            end_message_ids: N.map(e => e.endId),
            num_participants: N.map(e => e.people.length),
            guild_id: s.guild_id,
            channel_id: s.id,
            channel_type: s.type
        })
    }, [N, w, s.guild_id, s.id, s.type]);
    let R = (0, u.bG)([P.default], () => {
            var e;
            return null != (e = null == N ? void 0 : N.map(e => {
                var t;
                return null == (t = e.people) ? void 0 : t.map(e => {
                    var t;
                    return null != (t = P.default.getUser(e)) ? t : null
                }).filter(x.Vq)
            })) ? e : []
        }, [N], e_),
        M = null != (t = (0, u.bG)([T.A], () => T.A.visibleSummaryIndex())) ? t : -1,
        j = null == N || null == (n = N[M]) ? void 0 : n.topic;
    null == j && null == h && (null == N ? void 0 : N.length) >= 1 && (j = null == (a = N[0]) ? void 0 : a.topic);
    let k = i.useMemo(() => l().get(N, M - 1), [M, N]),
        V = i.useMemo(() => l().get(N, M + 1), [M, N]),
        H = i.useMemo(() => l().debounce(e => {
            var t;
            E(null != (t = null == e ? void 0 : e.id) ? t : null)
        }, 64), [E]),
        Y = i.useMemo(() => l().throttle(() => {
            (0, S.C6)(null)
        }, 1200, {
            trailing: !1
        }), []),
        W = i.useCallback(e => {
            Y(), H(e)
        }, [H, Y]),
        [K, z] = i.useState(!1),
        q = i.useCallback(() => {
            L.default.track(U.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !K,
                num_summaries: N.length,
                message_counts: N.map(e => e.count),
                start_message_ids: N.map(e => e.startId),
                end_message_ids: N.map(e => e.endId),
                num_participants: N.map(e => e.people.length),
                guild_id: s.guild_id,
                channel_id: s.id,
                channel_type: s.type
            }), z(!K)
        }, [K, N, z, s]),
        Z = i.useCallback(function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G.eh.PILL_DROPDOWN,
                n = N[e];
            if (null == n) return;
            (0, S.sK)(s.id, n.id), (0, S.C6)(s.id, n.id);
            let r = () => {
                p.removeScrollCompleteCallback(r), setTimeout(() => {
                    p.addAutomaticAnchorCallback(W, !1)
                }, 100)
            };
            p.removeAutomaticAnchorCallback(W), p.addScrollCompleteCallback(r), L.default.track(U.HAw.SUMMARIES_TOPIC_CLICKED, {
                source: t,
                message_id: n.startId,
                guild_id: s.guild_id,
                channel_id: s.id,
                channel_type: s.type
            }), f.A.jumpToMessage({
                channelId: s.id,
                messageId: n.startId,
                flash: !0,
                offset: 0,
                jumpType: m.US.ANIMATED,
                context: "Summary Jump"
            })
        }, [N, s, W, p]),
        Q = i.useCallback(() => {
            Z(M - 1, G.eh.PILL_NEXT_ARROW)
        }, [Z, M]),
        X = i.useCallback(() => {
            Z(M + 1, G.eh.PILL_PREVIOUS_ARROW)
        }, [M, Z]),
        J = i.useCallback(e => {
            var t;
            z(e);
            let n = null == (t = I.current) ? void 0 : t.scrollTop;
            null != n && A(n)
        }, []);
    i.useEffect(() => {
        if (null != v && K) {
            var e;
            null == (e = I.current) || e.scrollTo({
                top: v
            })
        }
    }, [v, K]);
    let $ = i.useCallback(e => {
        var t;
        (0, c.vq)(e.target) && (null == (t = b.current) ? void 0 : t.contains(e.target)) || (K && L.default.track(U.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
            topics_dropdown_open: !1,
            num_summaries: N.length,
            message_counts: N.map(e => e.count),
            start_message_ids: N.map(e => e.startId),
            end_message_ids: N.map(e => e.endId),
            num_participants: N.map(e => e.people.length),
            guild_id: s.guild_id,
            channel_id: s.id,
            channel_type: s.type
        }), J(!1))
    }, [K, N, s, J]);
    i.useEffect(() => (p.addAutomaticAnchorCallback(W), () => {
        p.removeAutomaticAnchorCallback(W)
    }), [p, W]), i.useEffect(() => {
        (0, S.$T)(s.id)
    }, [s.id]), i.useEffect(() => (document.addEventListener("mousedown", $), () => {
        document.removeEventListener("mousedown", $)
    }), [$]);
    let ee = i.useMemo(() => (0, r.jsx)(C.A, {
        channel: s,
        summaries: N,
        summariesMembers: R,
        selectTopic: Z,
        setOpen: J
    }), [N, R, Z, J, s]);
    if (!(0, u.bG)([T.A], () => T.A.shouldShowTopicsBar())) return null;
    let et = F.intl.string(F.t["38qwgO"]);
    return N.length > 0 && (et = "" === j || null == j ? F.intl.string(F.t.DwnFuG) : j), _ ? null : (0, r.jsxs)("div", {
        ref: b,
        className: o()(B.$T, B.jh),
        children: [(0, r.jsxs)("div", {
            className: B.sE,
            children: [(0, r.jsx)(d.DUT, {
                className: B.LP,
                "aria-label": F.intl.string(F.t.RT3MPz),
                onClick: q,
                children: (0, r.jsxs)("div", {
                    className: o()({
                        [B.Nv]: !K,
                        [B.An]: K
                    }),
                    children: [(0, r.jsx)(d.Kck, {
                        size: "xs",
                        color: "currentColor",
                        className: B.Np
                    }), (0, r.jsx)(d.Text, {
                        className: B.r1,
                        variant: "text-sm/medium",
                        children: et
                    }), (0, r.jsx)(D.A, {
                        width: 16,
                        height: 16,
                        direction: D.A.Directions.DOWN,
                        className: B._l
                    })]
                })
            }), (0, r.jsxs)("div", {
                className: B.Yk,
                children: [(0, r.jsx)(d.DUT, {
                    "aria-label": F.intl.string(F.t["4huCnC"]),
                    onClick: X,
                    className: o()(B.ZM, B.vz, {
                        [B.jf]: null == V
                    }),
                    children: (0, r.jsx)(D.A, {
                        width: 16,
                        height: 16,
                        direction: D.A.Directions.UP
                    })
                }), (0, r.jsx)(d.DUT, {
                    "aria-label": F.intl.string(F.t["58KOoF"]),
                    onClick: Q,
                    className: o()(B.ZM, B.mt, {
                        [B.jf]: null == k
                    }),
                    children: (0, r.jsx)(D.A, {
                        width: 16,
                        height: 16,
                        direction: D.A.Directions.DOWN
                    })
                })]
            })]
        }), K && (0, r.jsxs)("div", {
            className: B.A1,
            children: [(0, r.jsxs)("div", {
                className: B.ke,
                children: [(0, r.jsxs)("div", {
                    className: B.Ne,
                    children: [(0, r.jsx)(d.Kck, {
                        size: "custom",
                        color: "currentColor",
                        className: B.vl,
                        width: 18,
                        height: 20
                    }), (0, r.jsx)(d.Heading, {
                        variant: "heading-md/bold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: F.intl.string(F.t.q21fUr)
                    }), (0, r.jsx)(O.A, {
                        className: B.Zx
                    })]
                }), (0, r.jsx)(d.DUT, {
                    "aria-label": F.intl.string(F.t.cpT0Cq),
                    onClick: q,
                    className: B.oX,
                    children: (0, r.jsx)(d.PGe, {
                        size: "md",
                        color: "currentColor"
                    })
                })]
            }), (0, r.jsx)(d.HOs, {
                ref: I,
                className: B.Pe,
                fade: !0,
                children: ee
            })]
        })]
    })
}
let em = function(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (0, r.jsxs)("div", {
            className: B.YL,
            children: [(0, r.jsx)(d.Text, {
                color: "none",
                variant: "text-sm/semibold",
                lineClamp: 1,
                className: B.Ld,
                children: e
            }), t && (0, r.jsx)(d.Text, {
                className: B.$o,
                color: "text-muted",
                variant: "text-sm/normal",
                children: F.intl.string(F.t["515vjG"])
            })]
        })
    },
    eg = e => {
        let {
            children: t,
            className: n
        } = e;
        return (0, r.jsx)("div", {
            className: o()(B.jC, n),
            children: t
        })
    },
    eE = e => {
        let {
            className: t
        } = e;
        return (0, r.jsx)(eg, {
            className: t,
            children: (0, r.jsx)("div", {
                className: B.wH,
                children: (0, r.jsx)("div", {
                    className: B.j3
                })
            })
        })
    }