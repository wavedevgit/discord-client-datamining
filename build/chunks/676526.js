/** Chunk was on 38663 **/
/** chunk id: 676526, original params: e,t,n (module,exports,require) **/
n.d(t, {
    h: () => x
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(688807),
    o = n(287809),
    s = n(735321),
    c = n(451395),
    u = n(823016),
    d = n(788593),
    f = n(858808),
    p = n(685049),
    g = n(973397),
    m = n(617086),
    b = n(985018),
    y = n(461349),
    O = n(616060);

function j(e) {
    let {
        index: t,
        widgetType: n,
        game: l,
        coverImageUrl: i,
        gameName: a,
        children: o
    } = e, {
        manageFocusOnReorder: d
    } = (0, u.r)();
    return (0, r.jsx)(c.mG, {
        index: t,
        itemId: l.applicationId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: {
            imageSrc: i,
            gameName: a
        },
        "aria-label": b.intl.formatToPlainString(b.t["0dR3gw"], {
            positionNumber: t + 1
        }),
        onReorder: (e, t) => (0, s.Un)(n, e, t),
        onEnd: () => d(l.applicationId),
        className: O.kL,
        dropBeforeClassName: O.A,
        dropAfterClassName: O.Ze,
        draggingClassName: O.Id,
        children: (0, r.jsx)("div", {
            className: O.An,
            children: o
        })
    })
}

function x(e) {
    let {
        game: t,
        userId: n,
        widgetType: l,
        guildId: s,
        channelId: b,
        disableInteraction: x = !1,
        index: h,
        onRemoveGame: v,
        coverRef: _
    } = e, {
        coverImageUrl: A,
        gameName: I,
        isLoading: w
    } = (0, g.A)(t.applicationId), {
        registerDragHandleRef: P
    } = (0, u.r)(), E = (0, m.A)(t.applicationId).length > 0, S = o.default.getCurrentUser(), T = (null == S ? void 0 : S.id) === n, N = !x && T, {
        isDragging: C
    } = (0, a.V)(e => ({
        isDragging: e.isDragging()
    })), D = () => (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.A, {
            imageSrc: A,
            gameName: I,
            applicationId: t.applicationId,
            userId: n,
            disableInteraction: x,
            className: i()(E ? O.kO : void 0, null == A || x ? void 0 : y.iL),
            hideTooltip: C,
            coverRef: _
        }), N && (0, r.jsx)(c.jV, {
            buttonRef: P(t.applicationId),
            className: O.BU
        }), !x && (0, r.jsx)(p.d, {
            userId: n,
            applicationId: t.applicationId,
            guildId: s,
            channelId: b,
            className: O.Ez
        }), N && (0, r.jsx)(f.A, {
            game: t,
            widgetType: l,
            className: O.vS,
            iconSize: "xs",
            onRemove: () => null == v ? void 0 : v(t.applicationId)
        })]
    });
    return w ? (0, r.jsx)("div", {
        className: y.mD
    }) : N ? (0, r.jsx)(j, {
        widgetType: l,
        index: null != h ? h : 0,
        game: t,
        coverImageUrl: A,
        gameName: I,
        children: D()
    }) : (0, r.jsx)("div", {
        className: O.kL,
        children: D()
    })
}