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
    d = n(152621),
    c = n(409626),
    u = n(692969),
    g = n(287809),
    m = n(562153),
    x = n(183555),
    p = n(735321),
    f = n(451395),
    h = n(823016),
    _ = n(788593),
    A = n(492280),
    I = n(946599),
    j = n(858808),
    v = n(685049),
    T = n(985018),
    E = n(522500),
    b = n(629475);

function N(e) {
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
        "aria-label": T.intl.formatToPlainString(T.t["0dR3gw"], {
            positionNumber: t + 1
        }),
        onReorder: (e, t) => (0, p.Un)(n, e, t),
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
        source: c.Ob.UserProfile,
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

function y(e) {
    let {
        user: t,
        guildId: n,
        channelId: a,
        id: l
    } = e;
    return (0, i.jsx)(r.AC4, {
        id: l,
        children: T.intl.format(T.t.TM0XDY, {
            name: m.Ay.getName(n, a, t)
        })
    })
}

function C(e) {
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
        }), (0, i.jsx)(y, {
            user: n,
            guildId: a,
            channelId: l,
            id: s
        }), (0, i.jsx)(C, {
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
        trackUserProfileEditAction: f
    } = (0, x.NJ)(), [h, _] = a.useState("idle"), [A, I] = a.useState(t ?? ""), j = a.useRef(null), v = a.useRef(null), E = T.intl.string(T.t.xKSfBT), N = null != t && "" !== t.trim(), S = a.useCallback(() => {
        f({
            action: "PRESS_ADD_COMMENTARY",
            widgetEdited: c
        }), _("editing")
    }, [c, f]), R = a.useCallback(() => {
        let e = A.trim(),
            n = e !== (t ?? "").trim();
        (0, p.oc)(c, u, "" !== e ? e : void 0), _("completed"), n && f({
            action: "COMMENTARY_EDITED",
            widgetEdited: c,
            gameId: u
        })
    }, [c, u, A, t, f]), k = a.useCallback(e => {
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
            children: T.intl.string(T.t.JxKXeT)
        }), (0, i.jsx)(r.fs1, {
            id: g,
            value: A,
            placeholder: E,
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
        }), (0, i.jsx)(y, {
            user: n,
            guildId: l,
            channelId: d,
            id: m
        }), (0, i.jsx)(C, {
            text: t ?? E,
            className: s()(b.qC, !N && b.qf)
        }), (0, i.jsx)(r.DUT, {
            innerRef: j,
            "aria-label": T.intl.string(T.t.ppb9MJ),
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
        widgetType: c,
        disableInteraction: u = !1,
        index: m,
        onRemoveGame: x,
        coverRef: T,
        className: y
    } = e, C = a.useRef(null), {
        applicationId: O,
        comment: w,
        tags: L
    } = o, {
        coverImageUrl: P,
        gameName: D,
        isLoading: G
    } = (0, d.A)(O), M = {
        variant: "heading-sm/medium",
        color: "text-default"
    }, U = g.default.getCurrentUser(), F = U?.id === t.id, W = 1 === (0, p.cv)(c), H = !u && F, B = H && (0, p.y9)(c), X = H && !W, {
        registerDragHandleRef: V
    } = (0, h.r)();
    if (G) return (0, i.jsx)(A.E, {});
    let z = () => (0, i.jsx)(_.A, {
            coverRef: T,
            className: null == P || u ? void 0 : E.iL,
            imageSrc: P,
            gameName: D,
            applicationId: O,
            userId: t.id,
            disableInteraction: u,
            hideTooltip: !0
        }),
        Y = () => (0, i.jsxs)("div", {
            ref: C,
            className: s()(b.Nr, y),
            children: [X ? (0, i.jsxs)("div", {
                className: b.An,
                children: [z(), (0, i.jsx)(f.jV, {
                    buttonRef: V(o.applicationId),
                    className: b.BU
                })]
            }) : z(), (0, i.jsxs)("div", {
                className: b.zH,
                children: [u ? (0, i.jsx)(r.Heading, {
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
                    widgetType: c,
                    applicationId: O
                }) : (0, i.jsx)(R, {
                    text: w,
                    user: t,
                    guildId: n,
                    channelId: l
                }), (0, i.jsx)(I.A, {
                    tags: L,
                    isCurrentUser: F,
                    widgetType: c,
                    applicationId: O,
                    disableInteraction: u,
                    className: b._A
                }), !u && (0, i.jsx)(v.o, {
                    className: b.Ez,
                    applicationId: O,
                    guildId: n,
                    channelId: l
                })]
            }), !u && F && (0, i.jsx)(j.A, {
                game: o,
                widgetType: c,
                className: b.vS,
                onRemove: () => x?.(o.applicationId)
            })]
        });
    return X ? (0, i.jsx)(N, {
        index: m ?? 0,
        widgetType: c,
        game: o,
        getWidth: () => C.current?.offsetWidth,
        children: Y()
    }) : Y()
}