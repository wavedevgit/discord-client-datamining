/** chunk id: 128988, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    l = n(64700),
    i = n(688807),
    a = n(311907),
    o = n(397927),
    s = n(287809),
    c = n(788593),
    u = n(742710),
    d = n(463259),
    f = n(18983),
    p = n(330966);

function g(e) {
    var t;
    let {
        scrollerRef: n
    } = e, {
        isDragging: g,
        item: m,
        sourceClientOffset: b
    } = (0, i.V)(e => ({
        isDragging: e.isDragging(),
        item: e.getItem(),
        sourceClientOffset: e.getSourceClientOffset()
    })), y = (0, a.bG)([s.default], () => s.default.getCurrentUser()), O = (0, o.VUy)(), j = l.useMemo(() => null == y || null == m ? null : function(e, t) {
        let {
            id: n,
            itemType: l,
            itemPreviewProps: i
        } = e;
        if ("WIDGET" === l && (null == i ? void 0 : i.widget) != null) return (0, r.jsx)("div", {
            className: p.dt,
            children: (0, r.jsx)(d.u, {
                widget: i.widget,
                user: t,
                disableInteraction: !0
            })
        });
        if ("GAME_COVER" === l && (null == i ? void 0 : i.gameName) != null) {
            let {
                imageSrc: e,
                gameName: l
            } = i;
            return (0, r.jsx)(c.A, {
                className: p.XJ,
                imageSrc: e,
                gameName: l,
                applicationId: n,
                userId: null == t ? void 0 : t.id,
                disableInteraction: !0
            })
        }
        if ("GAME_DETAILS_CARD" === l && (null == i ? void 0 : i.game) != null && (null == i ? void 0 : i.widgetType) != null) {
            let {
                game: e,
                widgetType: n
            } = i;
            return (0, r.jsx)(u.A, {
                className: p.xB,
                user: t,
                widgetType: n,
                game: e,
                disableInteraction: !0
            })
        }
        if ("WISHLIST_ITEM" === l && (null == i ? void 0 : i.item) != null) {
            let {
                item: e
            } = i;
            return (0, r.jsx)("div", {
                className: p.Xm,
                children: (0, r.jsx)(f.A, {
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
    }(m, y), [m, y]), h = l.useRef(null), x = l.useCallback(() => {
        if (null == n.current) return;
        let e = n.current.getBoundingClientRect();
        h.current = {
            x: e.left,
            y: e.top
        }
    }, [n]);
    if (l.useEffect(() => {
            if (!g) {
                h.current = null;
                return
            }
            null == h.current && x()
        }, [g, x]), !0 !== g || null == b || null == j) return null;
    null == h.current && x();
    let {
        x: v,
        y: _
    } = null != (t = h.current) ? t : {
        x: 0,
        y: 0
    }, I = b.x - v - 60 * !!O, A = b.y - _;
    return (0, r.jsx)("div", {
        className: p.kL,
        style: {
            transform: "translate3d(".concat(I, "px, ").concat(A, "px, 0)")
        },
        children: j
    })
}