/** chunk id: 955872 params = (module,exports,require) **/
n.d(t, {
    A: () => M
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
    _ = n(974544),
    m = n(793574),
    g = n(688810),
    A = n(429619),
    x = n(451909),
    h = n(550111),
    p = n(202639),
    T = n(407217),
    E = n(919395),
    S = n(884546),
    C = n(287070),
    f = n(196291),
    b = n(101058),
    N = n(836602),
    I = n(814390),
    v = n(351906),
    j = n(287809),
    y = n(954571),
    R = n(927578),
    O = n(606532),
    D = n(161290),
    L = n(652215),
    P = n(985018),
    G = n(166378);

function M() {
    let e = (0, r.bG)([j.default], () => {
            let e = j.default.getCurrentUser();
            return a()(null != e, "UserSettingsProfileCustomization: user cannot be undefined"), e
        }),
        t = (0, r.bG)([v.A], () => v.A.hidePersonalInformation),
        {
            pendingBio: n,
            pendingAvatar: l,
            pendingNameplate: M,
            showNotice: U,
            ...k
        } = (0, r.cf)([N.A], () => ({
            ...N.A.getPendingChanges(),
            showNotice: N.A.showNotice()
        })),
        V = (0, b.V7)({
            userId: e.id,
            image: l
        }),
        w = (0, E.lw)({
            pendingValue: M,
            userValue: e?.collectibles?.nameplate
        }),
        B = (0, I.A)() && null != n ? x.Ay.parse(void 0, n).content : n,
        H = R.Ay.canUsePremiumProfileCustomization(e),
        {
            analyticsLocations: F,
            newestAnalyticsLocation: Y
        } = (0, g.Ay)(m.A.USER_SETTINGS_USER_PROFILE);
    s.useEffect(() => () => c.h.wait(u.IM), []);
    let [z, X] = s.useState(!1), W = !H, K = s.useRef(null);
    return t ? (0, i.jsx)(_.A, {}) : (0, i.jsxs)(g.f5, {
        value: F,
        children: [(0, i.jsx)(A.A, {}), (0, i.jsx)(S.A, {
            profilePreview: (0, i.jsx)(C.A, {
                user: e,
                canUsePremiumCustomization: H,
                onUpsellClick: O.A,
                pendingBio: B,
                ...k,
                pendingAvatar: V
            }),
            nameplatePreview: (0, i.jsx)(h.A, {
                user: e,
                nameplate: w,
                ...k,
                className: null == w ? G.tJ : void 0,
                isHighlighted: !0
            }),
            children: (0, i.jsx)(D.A, {})
        }), (0, i.jsx)(o.L, {
            innerRef: K,
            onChange: e => X(e),
            threshold: .25,
            active: W,
            children: (0, i.jsx)("div", {
                ref: K,
                children: (0, i.jsx)(f.A, {
                    user: e,
                    shouldShow: W,
                    isVisible: z
                })
            })
        }), W && !U && (0, i.jsx)(p.d, {
            className: G.EL,
            showUpsell: !z,
            text: P.intl.format(P.t.TmfgI2, {
                onClick: () => (0, T.K)({
                    analyticsSource: Y
                })
            }),
            textVariant: "heading-md/medium",
            useUpdatedStyling: !0,
            button: (0, i.jsx)("div", {
                className: G.Xl,
                children: (0, i.jsx)(d.Button, {
                    variant: "overlay-primary",
                    onClick: () => {
                        y.default.track(L.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                            cta_variant: "floating_action_button"
                        }), K?.current?.scrollIntoView({
                            behavior: "smooth"
                        })
                    },
                    text: P.intl.string(P.t.uw9zI7),
                    icon: d.tvc
                })
            })
        })]
    })
}