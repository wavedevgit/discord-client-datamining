/** chunk id: 128988 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    l = n(64700),
    a = n(688807),
    s = n(311907),
    r = n(397927),
    o = n(178213),
    c = n(86638),
    d = n(287809),
    u = n(788593),
    m = n(742710),
    g = n(463259),
    f = n(18983),
    x = n(214456);

function p(e) {
    let {
        scrollerRef: t
    } = e, n = (0, o.GG)("user_profile_drag_preview_layer"), {
        isDragging: p,
        item: _,
        sourceClientOffset: I
    } = (0, a.V)(e => ({
        isDragging: e.isDragging(),
        item: e.getItem(),
        sourceClientOffset: e.getSourceClientOffset()
    })), h = (0, s.bG)([d.default], () => d.default.getCurrentUser()), A = (0, r.VUy)(), E = l.useMemo(() => null == h || null == _ ? null : function(e, t, n) {
        let {
            id: l,
            itemType: a,
            itemPreviewProps: s
        } = e;
        if ("WIDGET" === a && s?.widget != null) {
            let {
                widget: e,
                getWidth: n
            } = s, l = n?.() ?? 432;
            return (0, i.jsx)("div", {
                className: x.dt,
                style: {
                    width: l
                },
                children: (0, i.jsx)(g.u, {
                    widget: e,
                    user: t,
                    disableInteraction: !0
                })
            })
        }
        if ("GAME_COVER" === a && s?.gameName != null) {
            let {
                imageSrc: e,
                gameName: n,
                getWidth: a
            } = s, r = a?.() ?? 90;
            return (0, i.jsx)("div", {
                style: {
                    width: r
                },
                children: (0, i.jsx)(u.A, {
                    className: x.XJ,
                    imageSrc: e,
                    gameName: n,
                    applicationId: l,
                    userId: t?.id,
                    disableInteraction: !0
                })
            })
        }
        if ("GAME_DETAILS_CARD" === a && s?.game != null && s?.widgetType != null) {
            let {
                game: e,
                widgetType: n,
                getWidth: l
            } = s, a = l?.() ?? 400;
            return (0, i.jsx)("div", {
                className: x.xB,
                style: {
                    width: a
                },
                children: (0, i.jsx)(m.A, {
                    user: t,
                    widgetType: n,
                    game: e,
                    disableInteraction: !0
                })
            })
        }
        if ("WISHLIST_ITEM" === a && s?.item != null) {
            let {
                item: e
            } = s;
            return (0, i.jsx)("div", {
                className: x.Xm,
                children: n ? (0, i.jsx)(c.A, {
                    item: e,
                    wishlistOwner: t,
                    wishlistId: null,
                    isDragging: !0
                }) : (0, i.jsx)(f.A, {
                    item: e,
                    profileOwner: t,
                    wishlistId: null,
                    isOwner: !1,
                    showOverlayButton: !1,
                    showIcons: !1,
                    isDragging: !0
                })
            })
        }
        return null
    }(_, h, n), [_, h, n]), T = l.useRef(null), v = l.useCallback(() => {
        if (null == t.current) return;
        let e = t.current.getBoundingClientRect();
        T.current = {
            x: e.left,
            y: e.top
        }
    }, [t]);
    if (l.useEffect(() => {
            if (!p) {
                T.current = null;
                return
            }
            null == T.current && v()
        }, [p, v]), !0 !== p || null == I || null == E) return null;
    null == T.current && v();
    let {
        x: j,
        y: C
    } = T.current ?? {
        x: 0,
        y: 0
    }, N = I.x - j - 60 * !!A, y = I.y - C;
    return (0, i.jsx)("div", {
        className: x.kL,
        style: {
            transform: `translate3d(${N}px, ${y}px, 0)`
        },
        children: E
    })
}