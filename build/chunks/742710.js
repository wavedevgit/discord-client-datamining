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
    E = n(858808),
    v = n(685049),
    j = n(985018),
    T = n(522500),
    N = n(629475);

function b(e) {
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
        className: N.vF,
        dropBeforeClassName: N.A,
        dropAfterClassName: N.Ze,
        draggingClassName: N.Id,
        children: l
    })
}

function C(e) {
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
            className: N.sd,
            children: a
        })
    })
}

function S(e) {
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

function k(e) {
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
            className: N.Ls
        }), (0, i.jsx)(S, {
            user: n,
            guildId: a,
            channelId: l,
            id: s
        }), (0, i.jsx)(k, {
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
    } = (0, m.NJ)(), [p, I] = a.useState("idle"), [A, h] = a.useState(t ?? ""), E = a.useRef(null), v = a.useRef(null), T = j.intl.string(j.t.xKSfBT), b = null != t && "" !== t.trim(), C = a.useCallback(() => {
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
        "completed" === p && E.current?.focus()
    }, [p]), "editing" === p ? (0, i.jsxs)("div", {
        className: N.kS,
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
        ref: v,
        role: "group",
        "aria-labelledby": _,
        onClick: C,
        className: N.Vg,
        children: [(0, i.jsx)(r.R2l, {
            size: "xxs",
            color: r.LU0.colors.ICON_MUTED,
            className: N.Ls
        }), (0, i.jsx)(S, {
            user: n,
            guildId: l,
            channelId: c,
            id: _
        }), (0, i.jsx)(k, {
            text: t ?? T,
            className: s()(N.qC, !b && N.qf)
        }), (0, i.jsx)(r.DUT, {
            innerRef: E,
            "aria-label": j.intl.string(j.t.ppb9MJ),
            onClick: e => {
                e.stopPropagation(), C()
            },
            focusProps: {
                ringTarget: v
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
        className: S
    } = e, k = a.useRef(null), {
        applicationId: P,
        comment: R,
        tags: D
    } = o, {
        coverImageUrl: G,
        gameName: w,
        isLoading: y
    } = (0, u.A)(P), U = {
        variant: "heading-sm/medium",
        color: "text-default"
    }, M = g.default.getCurrentUser(), F = M?.id === t.id, W = 1 === (0, f.cv)(c), H = !d && F, B = H && (0, f.y9)(c), V = H && !W, {
        registerDragHandleRef: X
    } = (0, p.r)();
    if (y) return (0, i.jsx)(A.E, {});
    let z = () => (0, i.jsx)(I.A, {
            coverRef: j,
            className: null == G || d ? void 0 : T.iL,
            imageSrc: G,
            gameName: w,
            applicationId: P,
            userId: t.id,
            disableInteraction: d,
            hideTooltip: !0
        }),
        K = () => (0, i.jsxs)("div", {
            ref: k,
            className: s()(N.Nr, S),
            children: [V ? (0, i.jsxs)("div", {
                className: N.An,
                children: [z(), (0, i.jsx)(x.jV, {
                    buttonRef: X(o.applicationId),
                    className: N.BU
                })]
            }) : z(), (0, i.jsxs)("div", {
                className: N.zH,
                children: [d ? (0, i.jsx)(r.Heading, {
                    ...U,
                    children: w
                }) : (0, i.jsx)(C, {
                    applicationId: P,
                    userId: t.id,
                    gameName: w,
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
                    isCurrentUser: F,
                    widgetType: c,
                    applicationId: P,
                    disableInteraction: d,
                    className: N._A
                }), !d && (0, i.jsx)(v.o, {
                    className: N.Ez,
                    applicationId: P,
                    guildId: n,
                    channelId: l
                })]
            }), !d && F && (0, i.jsx)(E.A, {
                game: o,
                widgetType: c,
                className: N.vS,
                onRemove: () => m?.(o.applicationId)
            })]
        });
    return V ? (0, i.jsx)(b, {
        index: _ ?? 0,
        widgetType: c,
        game: o,
        getWidth: () => k.current?.offsetWidth,
        children: K()
    }) : K()
}