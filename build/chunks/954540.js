/** Chunk was on 46875 **/
/** chunk id: 954540, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => eo
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    c = n(989349),
    d = n.n(c),
    u = n(942381),
    m = n(837381),
    h = n(311907),
    g = n(990078),
    f = n(397927),
    x = n(147192),
    p = n(765671),
    b = n(104171),
    j = n(935649),
    v = n(847599),
    _ = n(114166),
    y = n(810181),
    A = n(390248),
    C = n(422844),
    O = n(435470),
    T = n(473503),
    S = n(256265),
    N = n(969043),
    w = n(710948),
    E = n(218152),
    I = n(52933),
    P = n(504261),
    R = n(505234),
    k = n(387408),
    M = n(77350),
    D = n(294520),
    L = n(505527),
    F = n(863439),
    U = n(465364),
    G = n(467073),
    z = n(652176),
    H = n(260821),
    B = n(448368),
    V = n(302031),
    K = n(253932),
    W = n(761640),
    q = n(734057),
    J = n(320501),
    X = n(576705),
    Q = n(967198),
    Y = n(287809),
    Z = n(531685),
    $ = n(405269),
    ee = n(715757),
    et = n(95905),
    en = n(652215),
    er = n(838541),
    el = n(985018),
    ei = n(518335),
    ea = n(558997),
    es = n(206314);
let eo = l.memo(function(e) {
    let {
        threadId: t,
        goToThread: n,
        observePostVisibilityAnalytics: i,
        overrideMedia: s,
        className: c
    } = e, {
        channel: d,
        isOpen: g,
        messageCount: x,
        content: b,
        firstMessage: j,
        media: v
    } = function(e) {
        let {
            threadId: t,
            overrideMedia: n
        } = e, r = (0, h.bG)([q.A], () => q.A.getChannel(t));
        o()(null != r, "the thread should not be null here, a store must have missed an update");
        let i = (0, h.bG)([W.Ay], () => W.Ay.getCurrentSidebarChannelId(r.parent_id) === r.id),
            {
                firstMessage: a
            } = (0, T.OA)(r),
            s = function(e) {
                let {
                    firstMessage: t,
                    formatInline: n = !0,
                    noStyleAndInteraction: r = !0
                } = e, i = l.useMemo(() => null != t ? (0, k.A)(t, null == t ? void 0 : t.messageSnapshots[0]) : null, [t]), {
                    hasSpoilerEmbeds: a,
                    content: s
                } = l.useMemo(() => (null == i ? void 0 : i.content) != null && "" !== i.content ? (0, U.Ay)(i, {
                    formatInline: n,
                    noStyleAndInteraction: r,
                    allowHeading: !0,
                    allowList: !0
                }) : {
                    hasSpoilerEmbeds: !1,
                    content: null
                }, [n, i, r]), o = (0, S.Ky)(t, a), c = (0, S.L_)(t, a);
                return null == t ? null : {
                    hasSpoilerEmbeds: a,
                    content: s,
                    firstMedia: o,
                    firstMediaIsEmbed: c
                }
            }({
                firstMessage: a
            }),
            c = null == s ? void 0 : s.content,
            d = null == s ? void 0 : s.firstMedia,
            {
                messageCountText: u
            } = (0, O.k6)(r);
        return {
            channel: r,
            isOpen: i,
            messageCount: u,
            firstMessage: a,
            content: c,
            media: null != n ? n : d
        }
    }({
        threadId: t,
        overrideMedia: s
    });
    (0, ee.vb)(j);
    let _ = (0, h.bG)([Y.default, J.A], () => {
            var e, t, n, r, l, i;
            let a = Y.default.getUser(null == j || null == (t = j.messageSnapshots[0]) || null == (e = t.moderatorReport) ? void 0 : e.reported_user_id);
            if (null != a) return a;
            if ((null == j || null == (n = j.messageReference) ? void 0 : n.channel_id) != null && (null == j || null == (r = j.messageReference) ? void 0 : r.message_id) != null) {
                let e = J.A.getMessage(null == j || null == (l = j.messageReference) ? void 0 : l.channel_id, null == j || null == (i = j.messageReference) ? void 0 : i.message_id);
                if (null != e) return e.author
            }
            return null
        }),
        {
            ref: y,
            height: A
        } = (0, p.Ay)(),
        C = (0, E.kU)(e => e.setCardHeight, u.x);
    l.useEffect(() => {
        null != A && C(t, A)
    }, [A, C, t]), l.useEffect(() => {
        null == i || i(y.current, t)
    }, [y, i, t]);
    let N = l.useRef(null),
        {
            handleLeftClick: w,
            handleRightClick: I
        } = (0, R.A)({
            facepileRef: N,
            goToThread: n,
            channel: d
        }),
        M = (0, m.rm)(t),
        {
            role: D,
            onFocus: L
        } = M,
        F = function(e, t) {
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
        }(M, ["role", "onFocus"]),
        {
            isFocused: G,
            handleFocus: z,
            handleBlur: H
        } = (0, P.A)(L);
    return (0, r.jsxs)("div", {
        ref: y,
        "data-item-id": t,
        onClick: w,
        onContextMenu: I,
        className: a()(ea.kL, ei.kL, c, {
            [ea.nT]: g
        }),
        children: [(0, r.jsx)(f.DUT, function(e) {
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
            onClick: w,
            focusProps: {
                ringTarget: y
            },
            onContextMenu: I,
            "aria-label": el.intl.formatToPlainString(el.t.pgYN6c, {
                title: d.name,
                count: x
            }),
            className: ea.Kv,
            onFocus: z,
            onBlur: H
        }, F)), (0, r.jsxs)("div", {
            className: ea.kb,
            children: [(0, r.jsx)(f.Fmo, {
                children: (0, r.jsxs)("div", {
                    className: ei.fx,
                    children: [(0, r.jsx)(ec, {
                        channel: d,
                        firstMessage: j,
                        content: b,
                        hasMediaAttachment: null != v,
                        originalAuthor: _
                    }), (null == j ? void 0 : j.blocked) || null == v ? null : (0, r.jsx)(ep, {
                        channel: d,
                        firstMedia: v
                    })]
                })
            }), (0, r.jsx)(f.M1G, {
                enabled: !G,
                children: (0, r.jsx)(eu, {
                    channel: d,
                    firstMessage: j,
                    facepileRef: N
                })
            })]
        })]
    })
});

function ec(e) {
    let {
        channel: t,
        firstMessage: n,
        content: l,
        hasMediaAttachment: i,
        originalAuthor: s
    } = e, {
        hasUnreads: o
    } = (0, O.X5)(t);
    return (0, r.jsxs)("div", {
        className: a()(ei.rf, ea.rf),
        children: [(0, r.jsx)(I.Ay, {
            channel: t
        }), (0, r.jsx)("div", {
            className: (ea.iU, ei.iU),
            children: (0, r.jsx)(ed, {
                channel: t,
                message: n,
                content: l,
                hasMediaAttachment: i,
                hasUnreads: o,
                originalAuthor: s
            })
        })]
    })
}
let ed = l.memo(function(e) {
    let {
        message: t,
        channel: n,
        content: l,
        hasMediaAttachment: i,
        hasUnreads: s,
        originalAuthor: o
    } = e, c = (0, h.bG)([N.A], () => N.A.isLoading(n.id)), d = (0, h.bG)([X.A], () => X.A.can(en.xBc.MANAGE_MESSAGES, n)), u = K.gs.useSetting(), m = (0, h.bG)([Q.A], () => Q.A.getGuildId()), {
        contentPlaceholder: g,
        renderedContent: x
    } = null == t ? {
        contentPlaceholder: null,
        renderedContent: null
    } : (0, B.o)(t, l, !1, !1, a()(ea.BK, ei.BK, es.tZ, es.__invalid_smallFontSize), {
        leadingIconClass: ea.aG,
        trailingIconClass: ea.sl,
        iconSize: er.eJ
    }), p = null != x ? (0, r.jsx)(f.Text, {
        variant: "text-md/normal",
        children: x
    }) : i ? null : (0, r.jsx)(f.Text, {
        tag: "span",
        variant: "text-sm/medium",
        color: s ? "text-default" : "text-muted",
        className: a()(ea.BK, ei.BK),
        "aria-label": "",
        children: null == t ? c ? null : el.intl.string(el.t.mE3KJN) : g
    });
    return (0, r.jsxs)(V.Bs.Provider, {
        value: (0, F.A)(u, d),
        children: [null != o ? (0, r.jsx)(f.euF, {
            size: f._3J.SIZE_40,
            src: o.getAvatarURL(m, (0, f.FT9)(f._3J.SIZE_40)),
            "aria-label": "",
            className: ei.Nd
        }) : null, (0, r.jsxs)("div", {
            className: ei.IF,
            children: [(0, r.jsx)(et.A, {
                channel: n,
                originalAuthor: o,
                message: t
            }), (0, r.jsx)(f.M1G, {
                className: ea.JY,
                children: p
            })]
        })]
    })
});

function eu(e) {
    let {
        channel: t,
        facepileRef: n,
        firstMessage: l
    } = e, {
        isNew: i
    } = (0, O.X5)(t), a = (0, y.m)(t.id), s = (null == l ? void 0 : l.reactions) != null && l.reactions.length > 0;
    return (0, r.jsxs)("div", {
        className: ei.qr,
        children: [(0, r.jsxs)("div", {
            className: ei.JS,
            children: [(0, r.jsx)(f.iFK, {
                size: "custom",
                width: 14,
                height: 14
            }), (0, r.jsx)(f.Text, {
                variant: "text-sm/medium",
                children: t.name
            }), i ? (0, r.jsx)(f.LpS, {
                color: f.LU0.unsafe_rawColors.BRAND_260.css,
                text: el.intl.string(el.t.y2b7CA),
                className: ei.Ad
            }) : null]
        }), (0, r.jsxs)("div", {
            className: ei.PQ,
            children: [s || null == l ? null : (0, r.jsx)(eh, {
                firstMessage: l,
                channel: t
            }), (0, r.jsx)(em, {
                channel: t,
                iconSize: 14
            }), (0, r.jsx)("span", {
                className: ea.xE,
                children: "•"
            }), a.length > 0 ? (0, r.jsxs)("div", {
                className: ea.IW,
                children: [(0, r.jsx)(ef, {
                    channel: t,
                    userIds: a,
                    facepileRef: n
                }), (0, r.jsx)("div", {
                    className: ea.r$,
                    children: (0, r.jsx)(f.nvX, {
                        themed: !0,
                        dotRadius: 2
                    })
                }), (0, r.jsx)(x.Ay, {
                    channel: t,
                    className: ea.mD,
                    renderDots: !1
                })]
            }) : (0, r.jsx)(eg, {
                channel: t
            })]
        })]
    })
}

function em(e) {
    let {
        channel: t,
        iconSize: n,
        showReadState: l = !1
    } = e, {
        messageCountText: i,
        unreadCount: s
    } = (0, O.k6)(t);
    return (0, r.jsxs)("div", {
        className: a()(ea.Mv, {
            [ea.hT]: l && null == s
        }),
        children: [(0, r.jsx)("span", {
            className: ea.SZ,
            children: (0, r.jsx)(f.oyn, {
                size: "custom",
                color: "currentColor",
                width: n,
                height: n
            })
        }), "number" == typeof i ? (0, r.jsx)(_.A, {
            value: i,
            digitWidth: 9,
            className: ea.gv
        }) : (0, r.jsx)("div", {
            className: ea.gv,
            children: i
        }), null == s ? null : (0, r.jsxs)(f.Text, {
            className: ea.bU,
            variant: "text-sm/semibold",
            color: "text-brand",
            children: ["(", el.intl.format(el.t.z3PEth, {
                count: s
            }), ")"]
        })]
    })
}

function eh(e) {
    let {
        firstMessage: t,
        channel: n
    } = e, l = (0, h.bG)([q.A], () => q.A.getChannel(n.parent_id)), i = (0, O.Ck)(l), {
        disableReactionCreates: a,
        isLurking: s,
        isPendingMember: o
    } = (0, G.A)(n);
    return null == i || a ? null : (0, r.jsx)(H.qT, {
        className: ea.vC,
        message: t,
        readOnly: n.isArchivedLockedThread(),
        useChatFontScaling: !1,
        isLurking: s,
        isPendingMember: o,
        emoji: i,
        hideCount: !0,
        count: 0,
        burst_count: 0,
        me: !1,
        me_burst: !1,
        type: L.v.NORMAL,
        emojiSize: "reaction",
        emojiSizeTooltip: "reaction"
    })
}

function eg(e) {
    var t;
    let {
        channel: n
    } = e, {
        sortOrder: l
    } = (0, C.R)(n.parent_id), i = (0, O.Mw)(n, l), a = null == (t = n.threadMetadata) ? void 0 : t.createTimestamp, s = null == a ? null : el.intl.formatToPlainString(el.t["13euCd"], {
        timestamp: (0, $.i$)(d()(a), "LLLL")
    });
    return (0, r.jsx)(g.m, {
        text: s,
        children: (0, r.jsx)(f.Text, {
            className: ea.__invalid_activityText,
            variant: "text-sm/normal",
            color: "text-default",
            children: i
        })
    })
}

function ef(e) {
    let {
        channel: t,
        userIds: n,
        facepileRef: l
    } = e, i = (0, O.$I)(t, n);
    return (0, r.jsx)("div", {
        ref: l,
        children: (0, r.jsx)(b.Ay, {
            className: ea.__invalid_facepile,
            showDefaultAvatarsForNullUsers: !0,
            guildId: t.guild_id,
            users: i,
            max: 5,
            size: 16,
            hideMoreUsers: !0,
            showUserPopout: !0
        })
    })
}

function ex(e) {
    let t, n, {
            firstMedia: l,
            shouldObscure: i,
            obscureReason: s,
            shouldShowAgeVerification: o
        } = e,
        c = (0, h.bG)([Z.A], () => Z.A.isFocused()),
        d = (0, M.ge)(l.src),
        u = K.kt.useSetting(),
        m = (0, D.rx)(s),
        {
            src: g,
            width: x,
            height: p,
            alt: b
        } = l;
    if (p > x ? n = 72 : t = 72, o) {
        var j;
        return (0, r.jsx)("div", {
            "aria-label": null != (j = null != m ? m : b) ? j : el.intl.string(el.t.hqwnc2),
            className: a()(ea.iT, ea.nh),
            style: {
                maxWidth: t,
                maxHeight: n,
                height: p,
                width: x
            }
        })
    }
    return g.startsWith("data:") ? (0, r.jsx)(f._V3, {
        src: g,
        maxHeight: t,
        maxWidth: n,
        width: x,
        height: p,
        alt: null != b && i ? m : b,
        className: ea.iT,
        imageClassName: a()({
            [ea.cd]: i,
            [ea.LW]: !0
        })
    }) : (0, z.LL)({
        src: g,
        maxHeight: t,
        maxWidth: n,
        width: x,
        height: p,
        alt: null != b && i ? m : b,
        autoPlay: u,
        animated: d && !i && c,
        srcIsAnimated: l.srcIsAnimated,
        containerClassName: ea.iT,
        imageClassName: a()({
            [ea.cd]: i
        }),
        analyticsSource: "ForumPostMediaPreview"
    })
}

function ep(e) {
    let {
        channel: t,
        firstMedia: n
    } = e, [l, i] = (0, D.eJ)({
        media: n,
        channel: t
    }), s = (0, A.qZ)(i);
    return (0, r.jsx)(f.M1G, {
        enabled: !0,
        children: (0, r.jsxs)("div", {
            className: a()(ea.pV, ei.pV),
            onClick: function(e) {
                e.stopPropagation(), s && (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), j.A.showAgeVerificationGetStartedModal({
                    entryPoint: v.q1.FORUM_POST_MEDIA_PREVIEW
                }))
            },
            children: [(0, r.jsx)(ex, {
                firstMedia: n,
                shouldObscure: l,
                obscureReason: i,
                shouldShowAgeVerification: s
            }), l && (0, r.jsx)(w.A, {
                iconClassname: ea.yo,
                obscureReason: i
            })]
        })
    })
}