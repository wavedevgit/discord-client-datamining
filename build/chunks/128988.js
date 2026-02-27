/** chunk id: 128988, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    l = n(64700),
    a = n(688807),
    s = n(311907),
    r = n(397927),
    o = n(287809),
    c = n(788593),
    d = n(742710),
    u = n(463259),
    m = n(18983),
    g = n(330966);

function x(e) {
    let {
        scrollerRef: t
    } = e, {
        isDragging: n,
        item: x,
        sourceClientOffset: f
    } = (0, a.V)(e => ({
        isDragging: e.isDragging(),
        item: e.getItem(),
        sourceClientOffset: e.getSourceClientOffset()
    })), p = (0, s.bG)([o.default], () => o.default.getCurrentUser()), h = (0, r.VUy)(), _ = l.useMemo(() => null == p || null == x ? null : function(e, t) {
        let {
            id: n,
            itemType: l,
            itemPreviewProps: a
        } = e;
        if ("WIDGET" === l && a?.widget != null) return (0, i.jsx)("div", {
            className: g.dt,
            children: (0, i.jsx)(u.u, {
                widget: a.widget,
                user: t,
                disableInteraction: !0
            })
        });
        if ("GAME_COVER" === l && a?.gameName != null) {
            let {
                imageSrc: e,
                gameName: l
            } = a;
            return (0, i.jsx)(c.A, {
                className: g.XJ,
                imageSrc: e,
                gameName: l,
                applicationId: n,
                userId: t?.id,
                disableInteraction: !0
            })
        }
        if ("GAME_DETAILS_CARD" === l && a?.game != null && a?.widgetType != null) {
            let {
                game: e,
                widgetType: n
            } = a;
            return (0, i.jsx)(d.A, {
                className: g.xB,
                user: t,
                widgetType: n,
                game: e,
                disableInteraction: !0
            })
        }
        if ("WISHLIST_ITEM" === l && a?.item != null) {
            let {
                item: e
            } = a;
            return (0, i.jsx)("div", {
                className: g.Xm,
                children: (0, i.jsx)(m.A, {
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
    }(x, p), [x, p]), A = l.useRef(null), I = l.useCallback(() => {
        if (null == t.current) return;
        let e = t.current.getBoundingClientRect();
        A.current = {
            x: e.left,
            y: e.top
        }
    }, [t]);
    if (l.useEffect(() => {
            if (!n) {
                A.current = null;
                return
            }
            null == A.current && I()
        }, [n, I]), !0 !== n || null == f || null == _) return null;
    null == A.current && I();
    let {
        x: j,
        y: v
    } = A.current ?? {
        x: 0,
        y: 0
    }, E = f.x - j - 60 * !!h, T = f.y - v;
    return (0, i.jsx)("div", {
        className: g.kL,
        style: {
            transform: `translate3d(${E}px, ${T}px, 0)`
        },
        children: _
    })
}