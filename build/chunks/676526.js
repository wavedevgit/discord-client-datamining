/** chunk id: 676526 params = (module,exports,require) **/
n.d(t, {
    h: () => j
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(688807),
    o = n(201438),
    d = n(287809),
    c = n(735321),
    u = n(451395),
    g = n(823016),
    m = n(788593),
    h = n(858808),
    x = n(907430),
    p = n(617086),
    f = n(985018),
    A = n(496527),
    _ = n(303566);

function I(e) {
    let {
        index: t,
        widgetType: n,
        game: l,
        coverImageUrl: s,
        gameName: r,
        children: o
    } = e, {
        manageFocusOnReorder: d
    } = (0, g.r)(), m = a.useRef(null);
    return (0, i.jsx)(u.mG, {
        index: t,
        itemId: l.applicationId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: {
            imageSrc: s,
            gameName: r,
            getWidth: () => m.current?.offsetWidth
        },
        "aria-label": f.intl.formatToPlainString(f.t["0dR3gw"], {
            positionNumber: t + 1
        }),
        onReorder: (e, t) => (0, c.Un)(n, e, t),
        onEnd: () => d(l.applicationId),
        className: _.kL,
        dropBeforeClassName: _.A,
        dropAfterClassName: _.Ze,
        draggingClassName: _.Id,
        children: (0, i.jsx)("div", {
            ref: m,
            className: _.An,
            children: o
        })
    })
}

function j(e) {
    let {
        game: t,
        userId: n,
        widgetType: a,
        guildId: l,
        channelId: c,
        disableInteraction: f = !1,
        index: j,
        onRemoveGame: v,
        coverRef: b
    } = e, {
        coverImageUrl: S,
        gameName: y,
        isLoading: E
    } = (0, o.A)(t.applicationId), {
        registerDragHandleRef: C
    } = (0, g.r)(), T = (0, p.A)(t.applicationId).length > 0, w = d.default.getCurrentUser(), N = w?.id === n, k = !f && N, {
        isDragging: R
    } = (0, r.V)(e => ({
        isDragging: e.isDragging()
    })), L = () => (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(m.A, {
            imageSrc: S,
            gameName: y,
            applicationId: t.applicationId,
            userId: n,
            disableInteraction: f,
            className: s()(T ? _.kO : void 0, null == S || f ? void 0 : A.iL),
            hideTooltip: R,
            coverRef: b
        }), k && (0, i.jsx)(u.jV, {
            buttonRef: C(t.applicationId),
            className: _.BU
        }), !f && (0, i.jsx)(x.d, {
            userId: n,
            applicationId: t.applicationId,
            guildId: l,
            channelId: c,
            className: _.Ez
        }), k && (0, i.jsx)(h.A, {
            game: t,
            widgetType: a,
            className: _.vS,
            iconSize: "xs",
            onRemove: () => v?.(t.applicationId)
        })]
    });
    return E ? (0, i.jsx)("div", {
        className: A.mD
    }) : k ? (0, i.jsx)(I, {
        widgetType: a,
        index: j ?? 0,
        game: t,
        coverImageUrl: S,
        gameName: y,
        children: L()
    }) : (0, i.jsx)("div", {
        className: _.kL,
        children: L()
    })
}