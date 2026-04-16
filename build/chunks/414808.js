/** chunk id: 414808 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var l = n(627968),
    s = n(64700),
    i = n(311907),
    r = n(342494),
    a = n(397927),
    o = n(793574),
    u = n(688810),
    c = n(532794),
    d = n(181079),
    A = n(93055),
    m = n(49999),
    E = n(788868),
    f = n(335993),
    _ = n(985018),
    N = n(988572);

function T(e) {
    let {
        targetElementRef: t,
        markMenuItemPopoverAsDismissed: n
    } = e, [T, p] = s.useState("top"), g = s.useRef(null), C = s.useRef(null), {
        hasAccess: S
    } = (0, A.TW)("FavoritesOnboardingMenuItemPopover"), {
        analyticsLocations: h
    } = (0, u.Ay)(o.A.FAVORITES_GUILD_MENU_ITEM), x = (0, i.bG)([d.A], () => d.A.hasStoredFavorites());
    s.useLayoutEffect(() => {
        if (null == t.current) return;
        let e = () => {
            null == C.current && (C.current = window.requestAnimationFrame(() => {
                C.current = null, (() => {
                    let e = t.current?.getBoundingClientRect();
                    if (null == e) return;
                    let n = g.current?.getBoundingClientRect().height ?? 0;
                    p(window.innerHeight - e.top < n ? "bottom" : "top")
                })()
            }))
        };
        return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
            null != C.current && (window.cancelAnimationFrame(C.current), C.current = null), window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0)
        }
    }, [t]);
    let v = s.useCallback(() => {
            n?.(m.i.TAKE_ACTION), S || (0, c.A)({
                subscriptionTier: E.pe.TIER_2,
                analyticsLocations: h
            })
        }, [n, h, S]),
        I = x ? f.default.TWuDTt : f.default["25YCHl"];
    return (0, l.jsx)(r.AM, {
        targetElementRef: t,
        gradientColor: "nitro-pink",
        position: "right",
        alignmentStrategy: "edge",
        align: T,
        caretConfig: {
            align: "top" === T ? "start" : "end"
        },
        popoverRef: g,
        badge: {
            type: "beta",
            variant: "expressive"
        },
        graphic: {
            src: N.A,
            type: "image",
            aspectRatio: "16/9"
        },
        title: _.intl.string(S ? I : f.default.A3ZjbM),
        body: _.intl.string(S ? f.default.DFjrWw : f.default.qJUI2v),
        onRequestClose: () => n?.(m.i.USER_DISMISS),
        actions: S ? void 0 : [{
            icon: a.tvc,
            text: _.intl.string(f.default["avps/2"]),
            onClick: () => v(),
            variant: "expressive"
        }]
    })
}