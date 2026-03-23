/** chunk id: 955872 params = (module,exports,require) **/
n.d(t, {
    A: () => G
});
var i = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(311907),
    o = n(230109),
    d = n(397927),
    c = n(73153),
    u = n(631670),
    m = n(974544),
    _ = n(793574),
    g = n(688810),
    A = n(429619),
    x = n(451909),
    p = n(550111),
    h = n(202639),
    T = n(407217),
    E = n(919395),
    f = n(884546),
    S = n(287070),
    C = n(196291),
    b = n(101058),
    N = n(836602),
    I = n(814390),
    v = n(351906),
    j = n(287809),
    y = n(954571),
    O = n(927578),
    R = n(606532),
    L = n(161290),
    P = n(652215),
    D = n(985018),
    M = n(166378);

function G() {
    let e = (0, r.bG)([j.default], () => {
            let e = j.default.getCurrentUser();
            return a()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e
        }),
        t = (0, r.bG)([v.A], () => v.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: l,
            pendingNameplate: G,
            showNotice: k,
            ...U
        } = (0, r.cf)([N.A], () => ({
            ...N.A.getPendingChanges(),
            showNotice: N.A.showNotice()
        })),
        w = (0, b.V7)({
            userId: e.id,
            image: l
        }),
        V = (0, E.lw)({
            pendingValue: G,
            userValue: e?.collectibles?.nameplate
        }),
        B = (0, I.A)() && null != n ? x.Ay.parse(void 0, n).content : n,
        H = O.Ay.canUsePremiumProfileCustomization(e),
        {
            analyticsLocations: F,
            newestAnalyticsLocation: Y
        } = (0, g.Ay)(_.A.USER_SETTINGS_USER_PROFILE);
    s.useEffect(() => () => c.h.wait(u.IM), []);
    let [z, X] = s.useState(!1), W = !H, K = s.useRef(null);
    return t ? (0, i.jsx)(m.A, {}) : (0, i.jsxs)(g.f5, {
        value: F,
        children: [(0, i.jsx)(A.A, {}), (0, i.jsx)(f.A, {
            profilePreview: (0, i.jsx)(S.A, {
                user: e,
                canUsePremiumCustomization: H,
                onUpsellClick: R.A,
                pendingBio: B,
                ...U,
                pendingAvatar: w
            }),
            nameplatePreview: (0, i.jsx)(p.A, {
                user: e,
                nameplate: V,
                ...U,
                className: null == V ? M.tJ : void 0,
                isHighlighted: !0
            }),
            children: (0, i.jsx)(L.A, {})
        }), (0, i.jsx)(o.L, {
            innerRef: K,
            onChange: e => X(e),
            threshold: .25,
            active: W,
            children: (0, i.jsx)("div", {
                ref: K,
                children: (0, i.jsx)(C.A, {
                    user: e,
                    shouldShow: W,
                    isVisible: z
                })
            })
        }), W && !k && (0, i.jsx)(h.d, {
            className: M.EL,
            showUpsell: !z,
            text: D.intl.format(D.t.TmfgI2, {
                onClick: () => (0, T.K)({
                    analyticsSource: Y
                })
            }),
            textVariant: "heading-md/medium",
            useUpdatedStyling: !0,
            button: (0, i.jsx)("div", {
                className: M.Xl,
                children: (0, i.jsx)(d.Button, {
                    variant: "overlay-primary",
                    onClick: () => {
                        y.default.track(P.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                            cta_variant: "floating_action_button"
                        }), K?.current?.scrollIntoView({
                            behavior: "smooth"
                        })
                    },
                    text: D.intl.string(D.t.uw9zI7),
                    icon: d.tvc
                })
            })
        })]
    })
}