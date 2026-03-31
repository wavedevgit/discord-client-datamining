/** chunk id: 742710 params = (module,exports,require) **/
n.d(t, {
    A: () => k
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l);
n(926675);
var r = n(397927),
    o = n(915089),
    c = n(152621),
    d = n(409626),
    u = n(692969),
    g = n(287809),
    m = n(562153),
    p = n(183555),
    x = n(735321),
    f = n(451395),
    h = n(823016),
    _ = n(788593),
    A = n(492280),
    I = n(946599),
    j = n(858808),
    E = n(907430),
    v = n(985018),
    T = n(496527),
    b = n(646022);

function C(e) {
    let {
        index: t,
        widgetType: n,
        game: a,
        children: l,
        getWidth: s
    } = e, {
        manageFocusOnReorder: r
    } = (0, h.r)();
    return (0, i.jsx)(f.mG, {
        index: t,
        itemId: a.applicationId,
        listType: n,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: {
            game: a,
            widgetType: n,
            getWidth: s
        },
        "aria-label": v.intl.formatToPlainString(v.t["0dR3gw"], {
            positionNumber: t + 1
        }),
        onReorder: (e, t) => (0, x.Un)(n, e, t),
        onEnd: () => r(a.applicationId),
        className: b.vF,
        dropBeforeClassName: b.A,
        dropAfterClassName: b.Ze,
        draggingClassName: b.Id,
        children: l
    })
}

function S(e) {
    let {
        applicationId: t,
        userId: n,
        gameName: a,
        ...l
    } = e, s = (0, u.A)({
        location: "UserProfileWidgetGameDetailsCard",
        applicationId: t,
        source: d.Ob.UserProfile,
        sourceUserId: n,
        trackEntryPointImpression: !0
    });
    return null == s ? (0, i.jsx)(r.Heading, {
        ...l,
        children: a
    }) : (0, i.jsx)(r.Heading, {
        ...l,
        children: (0, i.jsx)(r.DUT, {
            onClick: s,
            className: b.sd,
            children: a
        })
    })
}

function N(e) {
    let {
        user: t,
        guildId: n,
        channelId: a,
        id: l
    } = e;
    return (0, i.jsx)(r.AC4, {
        id: l,
        children: v.intl.format(v.t.TM0XDY, {
            name: m.Ay.getName(n, a, t)
        })
    })
}

function y(e) {
    let {
        text: t,
        className: n
    } = e;
    return (0, i.jsx)(r.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: n,
        children: t
    })
}

function R(e) {
    let {
        text: t,
        user: n,
        guildId: a,
        channelId: l
    } = e, s = (0, o.GV)();
    return null == t || "" === t.trim() ? null : (0, i.jsxs)("div", {
        role: "group",
        "aria-labelledby": s,
        children: [(0, i.jsx)(r.cyi, {
            size: "xxs",
            color: r.LU0.colors.ICON_MUTED,
            className: b.Ls
        }), (0, i.jsx)(N, {
            user: n,
            guildId: a,
            channelId: l,
            id: s
        }), (0, i.jsx)(y, {
            text: t
        })]
    })
}

function O(e) {
    let {
        text: t,
        user: n,
        guildId: l,
        channelId: c,
        widgetType: d,
        applicationId: u
    } = e, g = (0, o.GV)(), m = (0, o.GV)(), {
        trackUserProfileEditAction: f
    } = (0, p.NJ)(), [h, _] = a.useState("idle"), [A, I] = a.useState(t ?? ""), j = a.useRef(null), E = a.useRef(null), T = v.intl.string(v.t.xKSfBT), C = null != t && "" !== t.trim(), S = a.useCallback(() => {
        f({
            action: "PRESS_ADD_COMMENTARY",
            widgetEdited: d
        }), _("editing")
    }, [d, f]), R = a.useCallback(() => {
        let e = A.trim(),
            n = e !== (t ?? "").trim();
        (0, x.oc)(d, u, "" !== e ? e : void 0), _("completed"), n && f({
            action: "COMMENTARY_EDITED",
            widgetEdited: d,
            gameId: u
        })
    }, [d, u, A, t, f]), O = a.useCallback(e => {
        I(e)
    }, []);
    return a.useEffect(() => {
        "editing" === h && I(t ?? "")
    }, [t, h]), a.useEffect(() => {
        "completed" === h && j.current?.focus()
    }, [h]), "editing" === h ? (0, i.jsxs)("div", {
        className: b.kS,
        children: [(0, i.jsx)(r.AC4, {
            tag: "label",
            htmlFor: g,
            children: v.intl.string(v.t.JxKXeT)
        }), (0, i.jsx)(r.fs1, {
            id: g,
            value: A,
            placeholder: T,
            onChange: O,
            onBlur: R,
            rows: 3,
            autoFocus: "editing" === h,
            onKeyDown: e => {
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), R())
            },
            maxLength: 200
        })]
    }) : (0, i.jsxs)("div", {
        ref: E,
        role: "group",
        "aria-labelledby": m,
        onClick: S,
        className: b.Vg,
        children: [(0, i.jsx)(r.R2l, {
            size: "xxs",
            color: r.LU0.colors.ICON_MUTED,
            className: b.Ls
        }), (0, i.jsx)(N, {
            user: n,
            guildId: l,
            channelId: c,
            id: m
        }), (0, i.jsx)(y, {
            text: t ?? T,
            className: s()(b.qC, !C && b.qf)
        }), (0, i.jsx)(r.DUT, {
            innerRef: j,
            "aria-label": v.intl.string(v.t.ppb9MJ),
            onClick: e => {
                e.stopPropagation(), S()
            },
            focusProps: {
                ringTarget: E
            }
        })]
    })
}

function k(e) {
    let {
        user: t,
        guildId: n,
        channelId: l,
        game: o,
        widgetType: d,
        disableInteraction: u = !1,
        index: m,
        onRemoveGame: p,
        coverRef: v,
        className: N
    } = e, y = a.useRef(null), {
        applicationId: k,
        comment: L,
        tags: w
    } = o, {
        coverImageUrl: P,
        gameName: D,
        isLoading: G
    } = (0, c.A)(k), F = {
        variant: "heading-sm/medium",
        color: "text-default"
    }, U = g.default.getCurrentUser(), M = U?.id === t.id, W = 1 === (0, x.cv)(d), H = !u && M, B = H && (0, x.y9)(d), X = H && !W, {
        registerDragHandleRef: V
    } = (0, h.r)();
    if (G) return (0, i.jsx)(A.E, {});
    let z = () => (0, i.jsx)(_.A, {
            coverRef: v,
            className: null == P || u ? void 0 : T.iL,
            imageSrc: P,
            gameName: D,
            applicationId: k,
            userId: t.id,
            disableInteraction: u,
            hideTooltip: !0
        }),
        Y = () => (0, i.jsxs)("div", {
            ref: y,
            className: s()(b.Nr, N),
            children: [X ? (0, i.jsxs)("div", {
                className: b.An,
                children: [z(), (0, i.jsx)(f.jV, {
                    buttonRef: V(o.applicationId),
                    className: b.BU
                })]
            }) : z(), (0, i.jsxs)("div", {
                className: b.zH,
                children: [u ? (0, i.jsx)(r.Heading, {
                    ...F,
                    children: D
                }) : (0, i.jsx)(S, {
                    applicationId: k,
                    userId: t.id,
                    gameName: D,
                    ...F
                }), B ? (0, i.jsx)(O, {
                    text: L,
                    user: t,
                    guildId: n,
                    channelId: l,
                    widgetType: d,
                    applicationId: k
                }) : (0, i.jsx)(R, {
                    text: L,
                    user: t,
                    guildId: n,
                    channelId: l
                }), (0, i.jsx)(I.A, {
                    tags: w,
                    isCurrentUser: M,
                    widgetType: d,
                    applicationId: k,
                    disableInteraction: u,
                    className: b._A
                }), !u && (0, i.jsx)(E.o, {
                    className: b.Ez,
                    applicationId: k,
                    guildId: n,
                    channelId: l
                })]
            }), !u && M && (0, i.jsx)(j.A, {
                game: o,
                widgetType: d,
                className: b.vS,
                onRemove: () => p?.(o.applicationId)
            })]
        });
    return X ? (0, i.jsx)(C, {
        index: m ?? 0,
        widgetType: d,
        game: o,
        getWidth: () => y.current?.offsetWidth,
        children: Y()
    }) : Y()
}