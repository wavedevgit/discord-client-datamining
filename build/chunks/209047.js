/** chunk id: 209047 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    l = n(64700),
    s = n(990078),
    a = n(397927),
    r = n(976860),
    o = n(93055),
    d = n(652215),
    c = n(335993),
    u = n(985018);
let h = l.lazy(() => n.e("60497").then(n.bind(n, 908424)));

function A(e) {
    let {
        className: t
    } = e, {
        hasAccess: n
    } = (0, o.TW)("FavoriteGuildHeaderActionButton"), A = l.useRef(null), _ = n ? u.intl.string(c.default.G9fGlP) : u.intl.string(u.t.ojM1xJ), m = l.useCallback(() => {
        (0, r.pX)(d.BVt.ME)
    }, []), p = l.useCallback(e => {
        let {
            closePopout: t
        } = e;
        return (0, i.jsx)(l.Suspense, {
            fallback: null,
            children: (0, i.jsx)(h, {
                navId: "favorite-guild-header-add-context",
                onClose: t,
                onSelect: t
            })
        })
    }, []);
    return n ? (0, i.jsx)(a.YNO, {
        targetElementRef: A,
        position: "bottom",
        align: "left",
        spacing: 4,
        renderPopout: p,
        children: (e, n) => {
            let {
                isShown: l
            } = n;
            return (0, i.jsx)(s.m, {
                text: _,
                position: "bottom",
                asContainer: !0,
                shouldShow: !l,
                children: (0, i.jsx)(a.DUT, {
                    innerRef: A,
                    className: t,
                    "aria-label": _,
                    ...e,
                    children: (0, i.jsx)(a.TIR, {
                        color: "currentColor",
                        size: "refresh_sm"
                    })
                })
            })
        }
    }) : (0, i.jsx)(s.m, {
        text: _,
        position: "bottom",
        asContainer: !0,
        children: (0, i.jsx)(a.DUT, {
            className: t,
            "aria-label": _,
            onClick: m,
            children: (0, i.jsx)(a.PGe, {
                color: "currentColor",
                size: "refresh_sm"
            })
        })
    })
}