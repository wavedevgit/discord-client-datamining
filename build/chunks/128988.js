/** chunk id: 128988 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    a = n(64700),
    l = n(688807),
    s = n(311907),
    r = n(397927),
    o = n(178213),
    c = n(86638),
    d = n(287809),
    u = n(788593),
    g = n(742710),
    _ = n(463259),
    m = n(18983),
    f = n(214456);

function x(e) {
    let {
        scrollerRef: t
    } = e, n = (0, o.GG)("user_profile_drag_preview_layer"), {
        isDragging: x,
        item: p,
        sourceClientOffset: I
    } = (0, l.V)(e => ({
        isDragging: e.isDragging(),
        item: e.getItem(),
        sourceClientOffset: e.getSourceClientOffset()
    })), A = (0, s.bG)([d.default], () => d.default.getCurrentUser()), h = (0, r.VUy)(), v = a.useMemo(() => null == A || null == p ? null : function(e, t, n) {
        let {
            id: a,
            itemType: l,
            itemPreviewProps: s
        } = e;
        if ("WIDGET" === l && s?.widget != null) {
            let {
                widget: e,
                getWidth: n
            } = s, a = n?.() ?? 432;
            return (0, i.jsx)("div", {
                className: f.dt,
                style: {
                    width: a
                },
                children: (0, i.jsx)(_.u, {
                    widget: e,
                    user: t,
                    disableInteraction: !0
                })
            })
        }
        if ("GAME_COVER" === l && s?.gameName != null) {
            let {
                imageSrc: e,
                gameName: n,
                getWidth: l
            } = s, r = l?.() ?? 90;
            return (0, i.jsx)("div", {
                style: {
                    width: r
                },
                children: (0, i.jsx)(u.A, {
                    className: f.XJ,
                    imageSrc: e,
                    gameName: n,
                    applicationId: a,
                    userId: t?.id,
                    disableInteraction: !0
                })
            })
        }
        if ("GAME_DETAILS_CARD" === l && s?.game != null && s?.widgetType != null) {
            let {
                game: e,
                widgetType: n,
                getWidth: a
            } = s, l = a?.() ?? 400;
            return (0, i.jsx)("div", {
                className: f.xB,
                style: {
                    width: l
                },
                children: (0, i.jsx)(g.A, {
                    user: t,
                    widgetType: n,
                    game: e,
                    disableInteraction: !0
                })
            })
        }
        if ("WISHLIST_ITEM" === l && s?.item != null) {
            let {
                item: e
            } = s;
            return (0, i.jsx)("div", {
                className: f.Xm,
                children: n ? (0, i.jsx)(c.A, {
                    item: e,
                    wishlistOwner: t,
                    wishlistId: null,
                    isDragging: !0
                }) : (0, i.jsx)(m.A, {
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
    }(p, A, n), [p, A, n]), E = a.useRef(null), j = a.useCallback(() => {
        if (null == t.current) return;
        let e = t.current.getBoundingClientRect();
        E.current = {
            x: e.left,
            y: e.top
        }
    }, [t]);
    if (a.useEffect(() => {
            if (!x) {
                E.current = null;
                return
            }
            null == E.current && j()
        }, [x, j]), !0 !== x || null == I || null == v) return null;
    null == E.current && j();
    let {
        x: T,
        y: b
    } = E.current ?? {
        x: 0,
        y: 0
    }, C = I.x - T - 60 * !!h, N = I.y - b;
    return (0, i.jsx)("div", {
        className: f.kL,
        style: {
            transform: `translate3d(${C}px, ${N}px, 0)`
        },
        children: v
    })
}