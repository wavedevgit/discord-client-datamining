/** chunk id: 128988 params = (module,exports,require) **/
n.d(t, {
    A: () => f
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
    m = n(463259),
    x = n(18983),
    p = n(563919);

function f(e) {
    let {
        scrollerRef: t
    } = e, n = (0, o.GG)("user_profile_drag_preview_layer"), {
        isDragging: f,
        item: h,
        sourceClientOffset: _
    } = (0, l.V)(e => ({
        isDragging: e.isDragging(),
        item: e.getItem(),
        sourceClientOffset: e.getSourceClientOffset()
    })), A = (0, s.bG)([d.default], () => d.default.getCurrentUser()), I = (0, r.VUy)(), j = a.useMemo(() => null == A || null == h ? null : function(e, t, n) {
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
                className: p.dt,
                style: {
                    width: a
                },
                children: (0, i.jsx)(m.u, {
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
                    className: p.XJ,
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
                className: p.xB,
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
                className: p.Xm,
                children: n ? (0, i.jsx)(c.A, {
                    item: e,
                    wishlistOwner: t,
                    wishlistId: null,
                    isDragging: !0
                }) : (0, i.jsx)(x.A, {
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
    }(h, A, n), [h, A, n]), v = a.useRef(null), T = a.useCallback(() => {
        if (null == t.current) return;
        let e = t.current.getBoundingClientRect();
        v.current = {
            x: e.left,
            y: e.top
        }
    }, [t]);
    if (a.useEffect(() => {
            if (!f) {
                v.current = null;
                return
            }
            null == v.current && T()
        }, [f, T]), !0 !== f || null == _ || null == j) return null;
    null == v.current && T();
    let {
        x: E,
        y: b
    } = v.current ?? {
        x: 0,
        y: 0
    }, C = _.x - E - 60 * !!I, N = _.y - b;
    return (0, i.jsx)("div", {
        className: p.kL,
        style: {
            transform: `translate3d(${C}px, ${N}px, 0)`
        },
        children: j
    })
}