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
    g = n(793574),
    A = n(688810),
    m = n(429619),
    h = n(451909),
    p = n(550111),
    x = n(202639),
    E = n(407217),
    T = n(919395),
    S = n(884546),
    C = n(287070),
    I = n(196291),
    f = n(101058),
    N = n(836602),
    b = n(814390),
    v = n(351906),
    O = n(287809),
    j = n(954571),
    R = n(927578),
    y = n(606532),
    P = n(161290),
    D = n(652215),
    L = n(985018),
    G = n(166378);

function M() {
    let e = (0, r.bG)([O.default], () => {
            let e = O.default.getCurrentUser();
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
        V = (0, f.V7)({
            userId: e.id,
            image: l
        }),
        w = (0, T.lw)({
            pendingValue: M,
            userValue: e?.collectibles?.nameplate
        }),
        H = (0, b.A)() && null != n ? h.Ay.parse(void 0, n).content : n,
        B = R.Ay.canUsePremiumProfileCustomization(e),
        {
            analyticsLocations: F,
            newestAnalyticsLocation: Y
        } = (0, A.Ay)(g.A.USER_SETTINGS_USER_PROFILE);
    s.useEffect(() => () => c.h.wait(u.IM), []);
    let [z, X] = s.useState(!1), W = !B, K = s.useRef(null);
    return t ? (0, i.jsx)(_.A, {}) : (0, i.jsxs)(A.f5, {
        value: F,
        children: [(0, i.jsx)(m.A, {}), (0, i.jsx)(S.A, {
            profilePreview: (0, i.jsx)(C.A, {
                user: e,
                canUsePremiumCustomization: B,
                onUpsellClick: y.A,
                pendingBio: H,
                ...k,
                pendingAvatar: V
            }),
            nameplatePreview: (0, i.jsx)(p.A, {
                user: e,
                nameplate: w,
                ...k,
                className: null == w ? G.tJ : void 0,
                isHighlighted: !0
            }),
            children: (0, i.jsx)(P.A, {})
        }), (0, i.jsx)(o.L, {
            innerRef: K,
            onChange: e => X(e),
            threshold: .25,
            active: W,
            children: (0, i.jsx)("div", {
                ref: K,
                children: (0, i.jsx)(I.A, {
                    user: e,
                    shouldShow: W,
                    isVisible: z
                })
            })
        }), W && !U && (0, i.jsx)(x.d, {
            className: G.EL,
            showUpsell: W && !z,
            text: L.intl.format(L.t.TmfgI2, {
                onClick: () => (0, E.K)({
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
                        j.default.track(D.HAw.TRY_IT_OUT_PRESET_CLICKED, {
                            cta_variant: "floating_action_button"
                        }), K?.current?.scrollIntoView({
                            behavior: "smooth"
                        })
                    },
                    text: L.intl.string(L.t.uw9zI7),
                    icon: d.tvc
                })
            })
        })]
    })
}