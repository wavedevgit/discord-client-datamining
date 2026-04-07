/** chunk id: 414808 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var l = n(627968),
    s = n(64700),
    i = n(311907),
    a = n(342494),
    r = n(397927),
    o = n(793574),
    u = n(688810),
    c = n(532794),
    d = n(181079),
    A = n(93055),
    m = n(49999),
    E = n(788868),
    _ = n(665606),
    f = n(985018),
    N = n(988572);

function T(e) {
    let {
        targetElementRef: t,
        markMenuItemPopoverAsDismissed: n
    } = e, [T, p] = s.useState("top"), h = s.useRef(null), S = s.useRef(null), {
        hasAccess: C
    } = (0, A.TW)("FavoritesOnboardingMenuItemPopover"), {
        analyticsLocations: g
    } = (0, u.Ay)(o.A.FAVORITES_GUILD_MENU_ITEM), x = (0, i.bG)([d.A], () => d.A.hasStoredFavorites());
    s.useLayoutEffect(() => {
        if (null == t.current) return;
        let e = () => {
            null == S.current && (S.current = window.requestAnimationFrame(() => {
                S.current = null, (() => {
                    let e = t.current?.getBoundingClientRect();
                    if (null == e) return;
                    let n = h.current?.getBoundingClientRect().height ?? 0;
                    p(window.innerHeight - e.top < n ? "bottom" : "top")
                })()
            }))
        };
        return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
            null != S.current && (window.cancelAnimationFrame(S.current), S.current = null), window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0)
        }
    }, [t]);
    let v = s.useCallback(() => {
            n?.(m.i.TAKE_ACTION), C || (0, c.A)({
                subscriptionTier: E.pe.TIER_2,
                analyticsLocations: g
            })
        }, [n, g, C]),
        I = x ? _.default.TWuDTt : _.default["25YCHl"];
    return (0, l.jsx)(a.AM, {
        targetElementRef: t,
        gradientColor: "nitro-pink",
        position: "right",
        alignmentStrategy: "edge",
        align: T,
        caretConfig: {
            align: "top" === T ? "start" : "end"
        },
        popoverRef: h,
        badge: {
            type: "beta",
            variant: "expressive"
        },
        graphic: {
            src: N.A,
            type: "image",
            aspectRatio: "16/9"
        },
        title: f.intl.string(C ? I : _.default.A3ZjbM),
        body: f.intl.string(C ? _.default.DFjrWw : _.default.qJUI2v),
        onRequestClose: () => n?.(m.i.USER_DISMISS),
        actions: C ? void 0 : [{
            icon: r.tvc,
            text: f.intl.string(_.default["avps/2"]),
            onClick: () => v(),
            variant: "expressive"
        }]
    })
}