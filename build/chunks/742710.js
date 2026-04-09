/** chunk id: 742710 params = (module,exports,require) **/
n.d(t, {
    A: () => P
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l);
n(926675);
var r = n(397927),
    o = n(915089),
    c = n(409626),
    d = n(692969),
    u = n(201438),
    g = n(287809),
    _ = n(562153),
    m = n(183555),
    f = n(735321),
    x = n(451395),
    p = n(823016),
    I = n(788593),
    A = n(492280),
    h = n(946599),
    v = n(858808),
    E = n(907430),
    j = n(985018),
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
    } = (0, p.r)();
    return (0, i.jsx)(x.mG, {
        index: t,
        itemId: a.applicationId,
        listType: n,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: {
            game: a,
            widgetType: n,
            getWidth: s
        },
        "aria-label": j.intl.formatToPlainString(j.t["0dR3gw"], {
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

function N(e) {
    let {
        applicationId: t,
        userId: n,
        gameName: a,
        ...l
    } = e, s = (0, d.A)({
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

function k(e) {
    let {
        user: t,
        guildId: n,
        channelId: a,
        id: l
    } = e;
    return (0, i.jsx)(r.AC4, {
        id: l,
        children: j.intl.format(j.t.TM0XDY, {
            name: _.Ay.getName(n, a, t)
        })
    })
}

function S(e) {
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

function O(e) {
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
        }), (0, i.jsx)(k, {
            user: n,
            guildId: a,
            channelId: l,
            id: s
        }), (0, i.jsx)(S, {
            text: t
        })]
    })
}

function L(e) {
    let {
        text: t,
        user: n,
        guildId: l,
        channelId: c,
        widgetType: d,
        applicationId: u
    } = e, g = (0, o.GV)(), _ = (0, o.GV)(), {
        trackUserProfileEditAction: x
    } = (0, m.NJ)(), [p, I] = a.useState("idle"), [A, h] = a.useState(t ?? ""), v = a.useRef(null), E = a.useRef(null), T = j.intl.string(j.t.xKSfBT), C = null != t && "" !== t.trim(), N = a.useCallback(() => {
        x({
            action: "PRESS_ADD_COMMENTARY",
            widgetEdited: d
        }), I("editing")
    }, [d, x]), O = a.useCallback(() => {
        let e = A.trim(),
            n = e !== (t ?? "").trim();
        (0, f.oc)(d, u, "" !== e ? e : void 0), I("completed"), n && x({
            action: "COMMENTARY_EDITED",
            widgetEdited: d,
            gameId: u
        })
    }, [d, u, A, t, x]), L = a.useCallback(e => {
        h(e)
    }, []);
    return a.useEffect(() => {
        "editing" === p && h(t ?? "")
    }, [t, p]), a.useEffect(() => {
        "completed" === p && v.current?.focus()
    }, [p]), "editing" === p ? (0, i.jsxs)("div", {
        className: b.kS,
        children: [(0, i.jsx)(r.AC4, {
            tag: "label",
            htmlFor: g,
            children: j.intl.string(j.t.JxKXeT)
        }), (0, i.jsx)(r.fs1, {
            id: g,
            value: A,
            placeholder: T,
            onChange: L,
            onBlur: O,
            rows: 3,
            autoFocus: "editing" === p,
            onKeyDown: e => {
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), O())
            },
            maxLength: 200
        })]
    }) : (0, i.jsxs)("div", {
        ref: E,
        role: "group",
        "aria-labelledby": _,
        onClick: N,
        className: b.Vg,
        children: [(0, i.jsx)(r.R2l, {
            size: "xxs",
            color: r.LU0.colors.ICON_MUTED,
            className: b.Ls
        }), (0, i.jsx)(k, {
            user: n,
            guildId: l,
            channelId: c,
            id: _
        }), (0, i.jsx)(S, {
            text: t ?? T,
            className: s()(b.qC, !C && b.qf)
        }), (0, i.jsx)(r.DUT, {
            innerRef: v,
            "aria-label": j.intl.string(j.t.ppb9MJ),
            onClick: e => {
                e.stopPropagation(), N()
            },
            focusProps: {
                ringTarget: E
            }
        })]
    })
}

function P(e) {
    let {
        user: t,
        guildId: n,
        channelId: l,
        game: o,
        widgetType: c,
        disableInteraction: d = !1,
        index: _,
        onRemoveGame: m,
        coverRef: j,
        className: k
    } = e, S = a.useRef(null), {
        applicationId: P,
        comment: R,
        tags: D
    } = o, {
        coverImageUrl: w,
        gameName: G,
        isLoading: y
    } = (0, u.A)(P), U = {
        variant: "heading-sm/medium",
        color: "text-default"
    }, M = g.default.getCurrentUser(), W = M?.id === t.id, F = 1 === (0, f.cv)(c), H = !d && W, B = H && (0, f.y9)(c), X = H && !F, {
        registerDragHandleRef: V
    } = (0, p.r)();
    if (y) return (0, i.jsx)(A.E, {});
    let z = () => (0, i.jsx)(I.A, {
            coverRef: j,
            className: null == w || d ? void 0 : T.iL,
            imageSrc: w,
            gameName: G,
            applicationId: P,
            userId: t.id,
            disableInteraction: d,
            hideTooltip: !0
        }),
        K = () => (0, i.jsxs)("div", {
            ref: S,
            className: s()(b.Nr, k),
            children: [X ? (0, i.jsxs)("div", {
                className: b.An,
                children: [z(), (0, i.jsx)(x.jV, {
                    buttonRef: V(o.applicationId),
                    className: b.BU
                })]
            }) : z(), (0, i.jsxs)("div", {
                className: b.zH,
                children: [d ? (0, i.jsx)(r.Heading, {
                    ...U,
                    children: G
                }) : (0, i.jsx)(N, {
                    applicationId: P,
                    userId: t.id,
                    gameName: G,
                    ...U
                }), B ? (0, i.jsx)(L, {
                    text: R,
                    user: t,
                    guildId: n,
                    channelId: l,
                    widgetType: c,
                    applicationId: P
                }) : (0, i.jsx)(O, {
                    text: R,
                    user: t,
                    guildId: n,
                    channelId: l
                }), (0, i.jsx)(h.A, {
                    tags: D,
                    isCurrentUser: W,
                    widgetType: c,
                    applicationId: P,
                    disableInteraction: d,
                    className: b._A
                }), !d && (0, i.jsx)(E.o, {
                    className: b.Ez,
                    applicationId: P,
                    guildId: n,
                    channelId: l
                })]
            }), !d && W && (0, i.jsx)(v.A, {
                game: o,
                widgetType: c,
                className: b.vS,
                onRemove: () => m?.(o.applicationId)
            })]
        });
    return X ? (0, i.jsx)(C, {
        index: _ ?? 0,
        widgetType: c,
        game: o,
        getWidth: () => S.current?.offsetWidth,
        children: K()
    }) : K()
}