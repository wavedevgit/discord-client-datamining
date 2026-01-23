/** Chunk was on 41031 **/
/** chunk id: 280617, original params: e,t,a (module,exports,require) **/
a.d(t, {
    i: () => p
}), a(896048);
var r = a(627968),
    s = a(64700),
    l = a(503698),
    n = a.n(l),
    i = a(359459),
    o = a(137540),
    c = a(709808),
    d = a(464261),
    u = a(818348),
    _ = a(563853),
    N = a(510057);
let A = u.sE.MAIN_NAVIGATION_MENU;

function p(e) {
    let {
        className: t,
        TrackClick: a,
        onChangeLocale: l,
        avoidRouter: p,
        openNavAriaLabel: h,
        hideNavAriaLabel: m
    } = e, I = s.useId(), [k, g] = s.useState(!1), O = s.useCallback(() => g(!k), [k]), T = s.useCallback(e => {
        ("Escape" === e.key || "Esc" === e.key) && (e.preventDefault(), k && O())
    }, [k, O]);
    return s.useEffect(() => (window.addEventListener("keydown", T), () => window.removeEventListener("keydown", T)), [T]), (0, r.jsx)("header", {
        className: n()(N.header, t),
        children: (0, r.jsxs)("nav", {
            className: N.headerInner,
            children: [(0, r.jsx)(a, {
                tag: "div",
                eventName: A,
                className: N.headerLogo,
                data: {
                    linkClicked: "logo"
                },
                children: (0, r.jsx)(o.A, {
                    avoidRouter: p,
                    className: N.logoWrapper,
                    to: u.Tk.INDEX,
                    from: u.sE.MAIN_NAVIGATION_MENU,
                    children: (0, r.jsx)("img", {
                        className: N.logo,
                        src: _.T.ASSET_LOGO_DISCORD_SVG,
                        alt: "Discord",
                        itemProp: "logo"
                    })
                })
            }), (0, r.jsx)(a, {
                tag: "div",
                className: N.hamburgerButton,
                eventName: A,
                data: {
                    linkClicked: "mobile-menu"
                },
                children: (0, r.jsx)(i._, {
                    open: k,
                    "aria-haspopup": "true",
                    "aria-label": k ? m : h,
                    "aria-expanded": k,
                    "aria-controls": I,
                    onClick: O
                })
            }), (0, r.jsxs)("ul", {
                className: k ? N.headerNavOpen : N.headerNav,
                children: [(0, r.jsx)(d.C, {
                    avoidRouter: p,
                    TrackClick: a,
                    styles: N,
                    isMobile: !0,
                    isVisible: k
                }), (0, r.jsx)(c.B, {
                    onChange: l
                })]
            })]
        })
    })
}