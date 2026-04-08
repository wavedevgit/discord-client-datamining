/** chunk id: 742710 params = (module,exports,require) **/
n.d(t, {
    A: () => O
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l);
n(926675);
var r = n(397927),
    o = n(915089),
    d = n(409626),
    c = n(692969),
    u = n(201438),
    g = n(287809),
    m = n(562153),
    x = n(183555),
    f = n(735321),
    p = n(451395),
    h = n(823016),
    _ = n(788593),
    A = n(492280),
    I = n(946599),
    j = n(858808),
    v = n(907430),
    E = n(985018),
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
    return (0, i.jsx)(p.mG, {
        index: t,
        itemId: a.applicationId,
        listType: n,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: {
            game: a,
            widgetType: n,
            getWidth: s
        },
        "aria-label": E.intl.formatToPlainString(E.t["0dR3gw"], {
            positionNumber: t + 1
        }),
        onReorder: (e, t) => (0, f.Un)(n, e, t),
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
    } = e, s = (0, c.A)({
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
        children: E.intl.format(E.t.TM0XDY, {
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

function k(e) {
    let {
        text: t,
        user: n,
        guildId: l,
        channelId: d,
        widgetType: c,
        applicationId: u
    } = e, g = (0, o.GV)(), m = (0, o.GV)(), {
        trackUserProfileEditAction: p
    } = (0, x.NJ)(), [h, _] = a.useState("idle"), [A, I] = a.useState(t ?? ""), j = a.useRef(null), v = a.useRef(null), T = E.intl.string(E.t.xKSfBT), C = null != t && "" !== t.trim(), S = a.useCallback(() => {
        p({
            action: "PRESS_ADD_COMMENTARY",
            widgetEdited: c
        }), _("editing")
    }, [c, p]), R = a.useCallback(() => {
        let e = A.trim(),
            n = e !== (t ?? "").trim();
        (0, f.oc)(c, u, "" !== e ? e : void 0), _("completed"), n && p({
            action: "COMMENTARY_EDITED",
            widgetEdited: c,
            gameId: u
        })
    }, [c, u, A, t, p]), k = a.useCallback(e => {
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
            children: E.intl.string(E.t.JxKXeT)
        }), (0, i.jsx)(r.fs1, {
            id: g,
            value: A,
            placeholder: T,
            onChange: k,
            onBlur: R,
            rows: 3,
            autoFocus: "editing" === h,
            onKeyDown: e => {
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), R())
            },
            maxLength: 200
        })]
    }) : (0, i.jsxs)("div", {
        ref: v,
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
            channelId: d,
            id: m
        }), (0, i.jsx)(y, {
            text: t ?? T,
            className: s()(b.qC, !C && b.qf)
        }), (0, i.jsx)(r.DUT, {
            innerRef: j,
            "aria-label": E.intl.string(E.t.ppb9MJ),
            onClick: e => {
                e.stopPropagation(), S()
            },
            focusProps: {
                ringTarget: v
            }
        })]
    })
}

function O(e) {
    let {
        user: t,
        guildId: n,
        channelId: l,
        game: o,
        widgetType: d,
        disableInteraction: c = !1,
        index: m,
        onRemoveGame: x,
        coverRef: E,
        className: N
    } = e, y = a.useRef(null), {
        applicationId: O,
        comment: w,
        tags: L
    } = o, {
        coverImageUrl: P,
        gameName: D,
        isLoading: G
    } = (0, u.A)(O), M = {
        variant: "heading-sm/medium",
        color: "text-default"
    }, U = g.default.getCurrentUser(), F = U?.id === t.id, W = 1 === (0, f.cv)(d), H = !c && F, B = H && (0, f.y9)(d), X = H && !W, {
        registerDragHandleRef: V
    } = (0, h.r)();
    if (G) return (0, i.jsx)(A.E, {});
    let z = () => (0, i.jsx)(_.A, {
            coverRef: E,
            className: null == P || c ? void 0 : T.iL,
            imageSrc: P,
            gameName: D,
            applicationId: O,
            userId: t.id,
            disableInteraction: c,
            hideTooltip: !0
        }),
        Y = () => (0, i.jsxs)("div", {
            ref: y,
            className: s()(b.Nr, N),
            children: [X ? (0, i.jsxs)("div", {
                className: b.An,
                children: [z(), (0, i.jsx)(p.jV, {
                    buttonRef: V(o.applicationId),
                    className: b.BU
                })]
            }) : z(), (0, i.jsxs)("div", {
                className: b.zH,
                children: [c ? (0, i.jsx)(r.Heading, {
                    ...M,
                    children: D
                }) : (0, i.jsx)(S, {
                    applicationId: O,
                    userId: t.id,
                    gameName: D,
                    ...M
                }), B ? (0, i.jsx)(k, {
                    text: w,
                    user: t,
                    guildId: n,
                    channelId: l,
                    widgetType: d,
                    applicationId: O
                }) : (0, i.jsx)(R, {
                    text: w,
                    user: t,
                    guildId: n,
                    channelId: l
                }), (0, i.jsx)(I.A, {
                    tags: L,
                    isCurrentUser: F,
                    widgetType: d,
                    applicationId: O,
                    disableInteraction: c,
                    className: b._A
                }), !c && (0, i.jsx)(v.o, {
                    className: b.Ez,
                    applicationId: O,
                    guildId: n,
                    channelId: l
                })]
            }), !c && F && (0, i.jsx)(j.A, {
                game: o,
                widgetType: d,
                className: b.vS,
                onRemove: () => x?.(o.applicationId)
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