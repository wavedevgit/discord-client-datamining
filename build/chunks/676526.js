/** chunk id: 676526, original params: e,t,n (module,exports,require) **/
n.d(t, {
    h: () => I
});
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(688807),
    r = n(152621),
    o = n(287809),
    c = n(735321),
    d = n(451395),
    u = n(823016),
    g = n(788593),
    m = n(858808),
    x = n(685049),
    f = n(617086),
    p = n(985018),
    h = n(461349),
    _ = n(616060);

function A(e) {
    let {
        index: t,
        widgetType: n,
        game: l,
        coverImageUrl: a,
        gameName: s,
        children: r
    } = e, {
        manageFocusOnReorder: o
    } = (0, u.r)();
    return (0, i.jsx)(d.mG, {
        index: t,
        itemId: l.applicationId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: {
            imageSrc: a,
            gameName: s
        },
        "aria-label": p.intl.formatToPlainString(p.t["0dR3gw"], {
            positionNumber: t + 1
        }),
        onReorder: (e, t) => (0, c.Un)(n, e, t),
        onEnd: () => o(l.applicationId),
        className: _.kL,
        dropBeforeClassName: _.A,
        dropAfterClassName: _.Ze,
        draggingClassName: _.Id,
        children: (0, i.jsx)("div", {
            className: _.An,
            children: r
        })
    })
}

function I(e) {
    let {
        game: t,
        userId: n,
        widgetType: l,
        guildId: c,
        channelId: p,
        disableInteraction: I = !1,
        index: j,
        onRemoveGame: v,
        coverRef: E
    } = e, {
        coverImageUrl: T,
        gameName: b,
        isLoading: N
    } = (0, r.A)(t.applicationId), {
        registerDragHandleRef: y
    } = (0, u.r)(), S = (0, f.A)(t.applicationId).length > 0, C = o.default.getCurrentUser(), k = C?.id === n, R = !I && k, {
        isDragging: w
    } = (0, s.V)(e => ({
        isDragging: e.isDragging()
    })), O = () => (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(g.A, {
            imageSrc: T,
            gameName: b,
            applicationId: t.applicationId,
            userId: n,
            disableInteraction: I,
            className: a()(S ? _.kO : void 0, null == T || I ? void 0 : h.iL),
            hideTooltip: w,
            coverRef: E
        }), R && (0, i.jsx)(d.jV, {
            buttonRef: y(t.applicationId),
            className: _.BU
        }), !I && (0, i.jsx)(x.d, {
            userId: n,
            applicationId: t.applicationId,
            guildId: c,
            channelId: p,
            className: _.Ez
        }), R && (0, i.jsx)(m.A, {
            game: t,
            widgetType: l,
            className: _.vS,
            iconSize: "xs",
            onRemove: () => v?.(t.applicationId)
        })]
    });
    return N ? (0, i.jsx)("div", {
        className: h.mD
    }) : R ? (0, i.jsx)(A, {
        widgetType: l,
        index: j ?? 0,
        game: t,
        coverImageUrl: T,
        gameName: b,
        children: O()
    }) : (0, i.jsx)("div", {
        className: _.kL,
        children: O()
    })
}