/** chunk id: 919470 params = (module,exports,require) **/
l.d(t, {
    A: () => m
});
var a = l(627968),
    n = l(64700),
    r = l(827734),
    i = l(116833),
    o = l(397927),
    s = l(301679),
    d = l(149757),
    u = l(788868),
    c = l(985018);
let p = {
        bronze: {
            type: "custom",
            start: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_START,
            end: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_BRONZE_END
        },
        silver: {
            type: "custom",
            start: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_START,
            end: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_SILVER_END
        },
        gold: {
            type: "custom",
            start: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_START,
            end: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_GOLD_END
        },
        platinum: {
            type: "custom",
            start: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_START,
            end: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_PLATINUM_END
        },
        diamond: {
            type: "custom",
            start: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_START,
            end: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END
        },
        emerald: {
            type: "custom",
            start: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_START,
            end: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_EMERALD_END
        },
        ruby: {
            type: "custom",
            start: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_START,
            end: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_RUBY_END
        },
        opal: {
            type: "custom",
            start: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_START,
            end: r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_OPAL_END
        }
    },
    m = e => {
        let {
            title: t,
            body: l,
            showGraphic: r,
            showActions: m,
            badgeId: h,
            showProgress: x,
            progressCircleText: b,
            progressCirclePercent: y,
            progressCircleUrgency: f,
            delay: g,
            size: v,
            gradientColor: _,
            estimatedTooltipHeight: E
        } = e, C = n.useRef(null), j = n.useRef(null), S = n.useMemo(() => ({
            bronze: u.Ac.PREMIUM_TENURE_1_MONTH,
            silver: u.Ac.PREMIUM_TENURE_3_MONTH,
            gold: u.Ac.PREMIUM_TENURE_6_MONTH,
            platinum: u.Ac.PREMIUM_TENURE_12_MONTH,
            diamond: u.Ac.PREMIUM_TENURE_24_MONTH,
            emerald: u.Ac.PREMIUM_TENURE_36_MONTH,
            ruby: u.Ac.PREMIUM_TENURE_60_MONTH,
            opal: u.Ac.PREMIUM_TENURE_72_MONTH
        })[h], [h]), T = null != S ? (0, d.I)(S).standard : null, A = n.useMemo(() => {
            if (null == S) return "";
            let e = u.VD[S];
            return (c.intl.string(c.t.lG6a5x) + " " + c.intl.string(e.nameUnformatted)).toLocaleUpperCase()
        }, [S]), P = n.useMemo(() => {
            if (!r || null == T) return;
            let e = x ? {
                progressCircleText: b,
                progressCirclePercent: y,
                progressCircleUrgency: f
            } : {};
            return {
                type: "dynamic",
                component: i.DynamicGraphicComponent.BADGE_IMAGE_WITH_PROGRESS_CIRCLE,
                aspectRatio: "6/4",
                props: {
                    src: T,
                    alt: A,
                    ...e
                }
            }
        }, [r, T, A, x, b, y, f]), k = {
            title: t,
            body: l,
            graphic: P,
            actions: n.useMemo(() => {
                if (m) return [{
                    text: "Got it",
                    variant: "primary"
                }]
            }, [m]),
            delay: g,
            size: v,
            gradientColor: n.useMemo(() => "string" == typeof _ && _ in p ? p[_] : _, [_]),
            estimatedTooltipHeight: E
        };
        return (0, a.jsxs)("div", {
            children: [(0, a.jsx)(o.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: "Hover or focus these buttons."
            }), (0, a.jsxs)("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "16px",
                    width: "100%",
                    marginTop: "200px"
                },
                children: [(0, a.jsx)(s.L, {
                    targetElementRef: C,
                    ...k,
                    children: (0, a.jsx)(o.Button, {
                        buttonRef: C,
                        variant: "primary",
                        text: "Left"
                    })
                }), (0, a.jsx)(s.L, {
                    targetElementRef: j,
                    ...k,
                    children: (0, a.jsx)(o.Button, {
                        buttonRef: j,
                        variant: "primary",
                        text: "Right"
                    })
                })]
            })]
        })
    }