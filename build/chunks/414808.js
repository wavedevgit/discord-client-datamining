/** chunk id: 414808 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var s = n(627968),
    l = n(64700),
    a = n(311907),
    i = n(342494),
    r = n(397927),
    o = n(793574),
    u = n(688810),
    c = n(532794),
    d = n(181079),
    m = n(93055),
    A = n(49999),
    E = n(788868),
    f = n(665606),
    p = n(985018),
    h = n(988572);

function x(e) {
    let {
        targetElementRef: t,
        markMenuItemPopoverAsDismissed: n
    } = e, [x, N] = l.useState("top"), S = l.useRef(null), g = l.useRef(null), {
        hasAccess: T
    } = (0, m.TW)("FavoritesOnboardingMenuItemPopover"), {
        analyticsLocations: _
    } = (0, u.Ay)(o.A.FAVORITES_GUILD_MENU_ITEM), v = (0, a.bG)([d.A], () => d.A.hasStoredFavorites());
    l.useLayoutEffect(() => {
        if (null == t.current) return;
        let e = () => {
            null == g.current && (g.current = window.requestAnimationFrame(() => {
                g.current = null, (() => {
                    let e = t.current?.getBoundingClientRect();
                    if (null == e) return;
                    let n = S.current?.getBoundingClientRect().height ?? 0;
                    N(window.innerHeight - e.top < n ? "bottom" : "top")
                })()
            }))
        };
        return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
            null != g.current && (window.cancelAnimationFrame(g.current), g.current = null), window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0)
        }
    }, [t]);
    let C = l.useCallback(() => {
            n?.(A.i.TAKE_ACTION), T || (0, c.A)({
                subscriptionTier: E.pe.TIER_2,
                analyticsLocations: _
            })
        }, [n, _, T]),
        I = v ? f.default.TWuDTt : f.default["25YCHl"];
    return (0, s.jsx)(i.AM, {
        targetElementRef: t,
        gradientColor: "nitro-pink",
        position: "right",
        alignmentStrategy: "edge",
        align: x,
        caretConfig: {
            align: "top" === x ? "start" : "end"
        },
        popoverRef: S,
        badge: {
            type: "beta",
            variant: "expressive"
        },
        graphic: {
            src: h.A,
            type: "image",
            aspectRatio: "16/9"
        },
        title: p.intl.string(T ? I : f.default.A3ZjbM),
        body: p.intl.string(T ? f.default.DFjrWw : f.default.qJUI2v),
        onRequestClose: () => n?.(A.i.USER_DISMISS),
        actions: [{
            icon: T ? void 0 : r.tvc,
            text: T ? p.intl.string(f.default["+h9aza"]) : p.intl.string(f.default["avps/2"]),
            onClick: () => C(),
            variant: T ? "secondary" : "expressive"
        }]
    })
}