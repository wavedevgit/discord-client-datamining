/** chunk id: 742710 params = (module,exports,require) **/
n.d(t, {
    A: () => k
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a);
n(926675);
var r = n(397927),
    o = n(915089),
    c = n(409626),
    d = n(692969),
    u = n(201438),
    m = n(287809),
    g = n(562153),
    f = n(183555),
    x = n(735321),
    p = n(451395),
    _ = n(823016),
    I = n(788593),
    h = n(492280),
    A = n(946599),
    E = n(858808),
    T = n(907430),
    v = n(985018),
    j = n(496527),
    C = n(646022);

function N(e) {
    let {
        index: t,
        widgetType: n,
        game: l,
        children: a,
        getWidth: s
    } = e, {
        manageFocusOnReorder: r
    } = (0, _.r)();
    return (0, i.jsx)(p.mG, {
        index: t,
        itemId: l.applicationId,
        listType: n,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: {
            game: l,
            widgetType: n,
            getWidth: s
        },
        "aria-label": v.intl.formatToPlainString(v.t["0dR3gw"], {
            positionNumber: t + 1
        }),
        onReorder: (e, t) => (0, x.Un)(n, e, t),
        onEnd: () => r(l.applicationId),
        className: C.vF,
        dropBeforeClassName: C.A,
        dropAfterClassName: C.Ze,
        draggingClassName: C.Id,
        children: a
    })
}

function y(e) {
    let {
        applicationId: t,
        userId: n,
        gameName: l,
        ...a
    } = e, s = (0, d.A)({
        location: "UserProfileWidgetGameDetailsCard",
        applicationId: t,
        source: c.Ob.UserProfile,
        sourceUserId: n,
        trackEntryPointImpression: !0
    });
    return null == s ? (0, i.jsx)(r.Heading, {
        ...a,
        children: l
    }) : (0, i.jsx)(r.Heading, {
        ...a,
        children: (0, i.jsx)(r.DUT, {
            onClick: s,
            className: C.sd,
            children: l
        })
    })
}

function b(e) {
    let {
        user: t,
        guildId: n,
        channelId: l,
        id: a
    } = e;
    return (0, i.jsx)(r.AC4, {
        id: a,
        children: v.intl.format(v.t.TM0XDY, {
            name: g.Ay.getName(n, l, t)
        })
    })
}

function R(e) {
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
        guildId: l,
        channelId: a
    } = e, s = (0, o.GV)();
    return null == t || "" === t.trim() ? null : (0, i.jsxs)("div", {
        role: "group",
        "aria-labelledby": s,
        children: [(0, i.jsx)(r.cyi, {
            size: "xxs",
            color: r.LU0.colors.ICON_MUTED,
            className: C.Ls
        }), (0, i.jsx)(b, {
            user: n,
            guildId: l,
            channelId: a,
            id: s
        }), (0, i.jsx)(R, {
            text: t
        })]
    })
}

function S(e) {
    let {
        text: t,
        user: n,
        guildId: a,
        channelId: c,
        widgetType: d,
        applicationId: u
    } = e, m = (0, o.GV)(), g = (0, o.GV)(), {
        trackUserProfileEditAction: p
    } = (0, f.NJ)(), [_, I] = l.useState("idle"), [h, A] = l.useState(t ?? ""), E = l.useRef(null), T = l.useRef(null), j = v.intl.string(v.t.xKSfBT), N = null != t && "" !== t.trim(), y = l.useCallback(() => {
        p({
            action: "PRESS_ADD_COMMENTARY",
            widgetEdited: d
        }), I("editing")
    }, [d, p]), O = l.useCallback(() => {
        let e = h.trim(),
            n = e !== (t ?? "").trim();
        (0, x.oc)(d, u, "" !== e ? e : void 0), I("completed"), n && p({
            action: "COMMENTARY_EDITED",
            widgetEdited: d,
            gameId: u
        })
    }, [d, u, h, t, p]), S = l.useCallback(e => {
        A(e)
    }, []);
    return l.useEffect(() => {
        "editing" === _ && A(t ?? "")
    }, [t, _]), l.useEffect(() => {
        "completed" === _ && E.current?.focus()
    }, [_]), "editing" === _ ? (0, i.jsxs)("div", {
        className: C.kS,
        children: [(0, i.jsx)(r.AC4, {
            tag: "label",
            htmlFor: m,
            children: v.intl.string(v.t.JxKXeT)
        }), (0, i.jsx)(r.fs1, {
            id: m,
            value: h,
            placeholder: j,
            onChange: S,
            onBlur: O,
            rows: 3,
            autoFocus: "editing" === _,
            onKeyDown: e => {
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), O())
            },
            maxLength: 200
        })]
    }) : (0, i.jsxs)("div", {
        ref: T,
        role: "group",
        "aria-labelledby": g,
        onClick: y,
        className: C.Vg,
        children: [(0, i.jsx)(r.R2l, {
            size: "xxs",
            color: r.LU0.colors.ICON_MUTED,
            className: C.Ls
        }), (0, i.jsx)(b, {
            user: n,
            guildId: a,
            channelId: c,
            id: g
        }), (0, i.jsx)(R, {
            text: t ?? j,
            className: s()(C.qC, !N && C.qf)
        }), (0, i.jsx)(r.DUT, {
            innerRef: E,
            "aria-label": v.intl.string(v.t.ppb9MJ),
            onClick: e => {
                e.stopPropagation(), y()
            },
            focusProps: {
                ringTarget: T
            }
        })]
    })
}

function k(e) {
    let {
        user: t,
        guildId: n,
        channelId: a,
        game: o,
        widgetType: c,
        disableInteraction: d = !1,
        index: g,
        onRemoveGame: f,
        coverRef: v,
        className: b
    } = e, R = l.useRef(null), {
        applicationId: k,
        comment: D,
        tags: P
    } = o, {
        coverImageUrl: L,
        gameName: G,
        isLoading: w
    } = (0, u.A)(k), U = {
        variant: "heading-sm/medium",
        color: "text-default"
    }, M = m.default.getCurrentUser(), F = M?.id === t.id, W = 1 === (0, x.cv)(c), H = !d && F, X = H && (0, x.y9)(c), B = H && !W, {
        registerDragHandleRef: V
    } = (0, _.r)();
    if (w) return (0, i.jsx)(h.E, {});
    let K = () => (0, i.jsx)(I.A, {
            coverRef: v,
            className: null == L || d ? void 0 : j.iL,
            imageSrc: L,
            gameName: G,
            applicationId: k,
            userId: t.id,
            disableInteraction: d,
            hideTooltip: !0
        }),
        Y = () => (0, i.jsxs)("div", {
            ref: R,
            className: s()(C.Nr, b),
            children: [B ? (0, i.jsxs)("div", {
                className: C.An,
                children: [K(), (0, i.jsx)(p.jV, {
                    buttonRef: V(o.applicationId),
                    className: C.BU
                })]
            }) : K(), (0, i.jsxs)("div", {
                className: C.zH,
                children: [d ? (0, i.jsx)(r.Heading, {
                    ...U,
                    children: G
                }) : (0, i.jsx)(y, {
                    applicationId: k,
                    userId: t.id,
                    gameName: G,
                    ...U
                }), X ? (0, i.jsx)(S, {
                    text: D,
                    user: t,
                    guildId: n,
                    channelId: a,
                    widgetType: c,
                    applicationId: k
                }) : (0, i.jsx)(O, {
                    text: D,
                    user: t,
                    guildId: n,
                    channelId: a
                }), (0, i.jsx)(A.A, {
                    tags: P,
                    isCurrentUser: F,
                    widgetType: c,
                    applicationId: k,
                    disableInteraction: d,
                    className: C._A
                }), !d && (0, i.jsx)(T.o, {
                    className: C.Ez,
                    applicationId: k,
                    guildId: n,
                    channelId: a
                })]
            }), !d && F && (0, i.jsx)(E.A, {
                game: o,
                widgetType: c,
                className: C.vS,
                onRemove: () => f?.(o.applicationId)
            })]
        });
    return B ? (0, i.jsx)(N, {
        index: g ?? 0,
        widgetType: c,
        game: o,
        getWidth: () => R.current?.offsetWidth,
        children: Y()
    }) : Y()
}