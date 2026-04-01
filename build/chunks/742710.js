/** chunk id: 742710 params = (module,exports,require) **/
n.d(t, {
    A: () => w
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
    m = n(287809),
    g = n(562153),
    p = n(183555),
    x = n(735321),
    f = n(451395),
    _ = n(823016),
    h = n(788593),
    A = n(492280),
    I = n(946599),
    v = n(858808),
    j = n(907430),
    E = n(985018),
    T = n(496527),
    N = n(646022);

function C(e) {
    let {
        index: t,
        widgetType: n,
        game: a,
        children: l,
        getWidth: s
    } = e, {
        manageFocusOnReorder: r
    } = (0, _.r)();
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
        "aria-label": E.intl.formatToPlainString(E.t["0dR3gw"], {
            positionNumber: t + 1
        }),
        onReorder: (e, t) => (0, x.Un)(n, e, t),
        onEnd: () => r(a.applicationId),
        className: N.vF,
        dropBeforeClassName: N.A,
        dropAfterClassName: N.Ze,
        draggingClassName: N.Id,
        children: l
    })
}

function b(e) {
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
        children: E.intl.format(E.t.TM0XDY, {
            name: g.Ay.getName(n, a, t)
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
            className: N.Ls
        }), (0, i.jsx)(S, {
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
    } = e, m = (0, o.GV)(), g = (0, o.GV)(), {
        trackUserProfileEditAction: f
    } = (0, p.NJ)(), [_, h] = a.useState("idle"), [A, I] = a.useState(t ?? ""), v = a.useRef(null), j = a.useRef(null), T = E.intl.string(E.t.xKSfBT), C = null != t && "" !== t.trim(), b = a.useCallback(() => {
        f({
            action: "PRESS_ADD_COMMENTARY",
            widgetEdited: d
        }), h("editing")
    }, [d, f]), R = a.useCallback(() => {
        let e = A.trim(),
            n = e !== (t ?? "").trim();
        (0, x.oc)(d, u, "" !== e ? e : void 0), h("completed"), n && f({
            action: "COMMENTARY_EDITED",
            widgetEdited: d,
            gameId: u
        })
    }, [d, u, A, t, f]), O = a.useCallback(e => {
        I(e)
    }, []);
    return a.useEffect(() => {
        "editing" === _ && I(t ?? "")
    }, [t, _]), a.useEffect(() => {
        "completed" === _ && v.current?.focus()
    }, [_]), "editing" === _ ? (0, i.jsxs)("div", {
        className: N.kS,
        children: [(0, i.jsx)(r.AC4, {
            tag: "label",
            htmlFor: m,
            children: E.intl.string(E.t.JxKXeT)
        }), (0, i.jsx)(r.fs1, {
            id: m,
            value: A,
            placeholder: T,
            onChange: O,
            onBlur: R,
            rows: 3,
            autoFocus: "editing" === _,
            onKeyDown: e => {
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), R())
            },
            maxLength: 200
        })]
    }) : (0, i.jsxs)("div", {
        ref: j,
        role: "group",
        "aria-labelledby": g,
        onClick: b,
        className: N.Vg,
        children: [(0, i.jsx)(r.R2l, {
            size: "xxs",
            color: r.LU0.colors.ICON_MUTED,
            className: N.Ls
        }), (0, i.jsx)(S, {
            user: n,
            guildId: l,
            channelId: c,
            id: g
        }), (0, i.jsx)(y, {
            text: t ?? T,
            className: s()(N.qC, !C && N.qf)
        }), (0, i.jsx)(r.DUT, {
            innerRef: v,
            "aria-label": E.intl.string(E.t.ppb9MJ),
            onClick: e => {
                e.stopPropagation(), b()
            },
            focusProps: {
                ringTarget: j
            }
        })]
    })
}

function w(e) {
    let {
        user: t,
        guildId: n,
        channelId: l,
        game: o,
        widgetType: d,
        disableInteraction: u = !1,
        index: g,
        onRemoveGame: p,
        coverRef: E,
        className: S
    } = e, y = a.useRef(null), {
        applicationId: w,
        comment: k,
        tags: L
    } = o, {
        coverImageUrl: D,
        gameName: P,
        isLoading: G
    } = (0, c.A)(w), U = {
        variant: "heading-sm/medium",
        color: "text-default"
    }, F = m.default.getCurrentUser(), M = F?.id === t.id, W = 1 === (0, x.cv)(d), H = !u && M, B = H && (0, x.y9)(d), X = H && !W, {
        registerDragHandleRef: V
    } = (0, _.r)();
    if (G) return (0, i.jsx)(A.E, {});
    let z = () => (0, i.jsx)(h.A, {
            coverRef: E,
            className: null == D || u ? void 0 : T.iL,
            imageSrc: D,
            gameName: P,
            applicationId: w,
            userId: t.id,
            disableInteraction: u,
            hideTooltip: !0
        }),
        Y = () => (0, i.jsxs)("div", {
            ref: y,
            className: s()(N.Nr, S),
            children: [X ? (0, i.jsxs)("div", {
                className: N.An,
                children: [z(), (0, i.jsx)(f.jV, {
                    buttonRef: V(o.applicationId),
                    className: N.BU
                })]
            }) : z(), (0, i.jsxs)("div", {
                className: N.zH,
                children: [u ? (0, i.jsx)(r.Heading, {
                    ...U,
                    children: P
                }) : (0, i.jsx)(b, {
                    applicationId: w,
                    userId: t.id,
                    gameName: P,
                    ...U
                }), B ? (0, i.jsx)(O, {
                    text: k,
                    user: t,
                    guildId: n,
                    channelId: l,
                    widgetType: d,
                    applicationId: w
                }) : (0, i.jsx)(R, {
                    text: k,
                    user: t,
                    guildId: n,
                    channelId: l
                }), (0, i.jsx)(I.A, {
                    tags: L,
                    isCurrentUser: M,
                    widgetType: d,
                    applicationId: w,
                    disableInteraction: u,
                    className: N._A
                }), !u && (0, i.jsx)(j.o, {
                    className: N.Ez,
                    applicationId: w,
                    guildId: n,
                    channelId: l
                })]
            }), !u && M && (0, i.jsx)(v.A, {
                game: o,
                widgetType: d,
                className: N.vS,
                onRemove: () => p?.(o.applicationId)
            })]
        });
    return X ? (0, i.jsx)(C, {
        index: g ?? 0,
        widgetType: d,
        game: o,
        getWidth: () => y.current?.offsetWidth,
        children: Y()
    }) : Y()
}