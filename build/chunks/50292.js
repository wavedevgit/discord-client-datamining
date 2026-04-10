/** chunk id: 50292 params = (module,exports,require) **/
r.d(t, {
    default: () => v
}), r(323874), r(14289), r(35956);
var i = r(627968),
    a = r(158954),
    n = r(397927),
    o = r(793574),
    s = r(688810),
    l = r(532794),
    c = r(920050),
    p = r(553081),
    _ = r(976860),
    u = r(652215),
    d = r(788868),
    b = r(985018);

function v(e) {
    let {
        onClose: t,
        multiplier: r,
        eligibleToReceivePremiumRewards: v,
        ...f
    } = e, {
        analyticsLocations: h
    } = (0, s.Ay)(o.A.QUEST_ORB_MULTIPLIER_INFO_MODAL), k = v ? b.intl.format(b.t.NpUfej, {
        bonusOrbMultiplier: r
    }) : b.intl.format(b.t["G5k+lZ"], {
        bonusOrbMultiplier: r
    });
    return (0, i.jsx)(n.kpP, {
        ...f,
        onClose: t,
        badge: {
            type: "beta",
            variant: "expressive"
        },
        gradientColor: "nitro-pink",
        title: b.intl.string(b.t.F2MShO),
        subtitle: k,
        graphic: {
            type: "rive",
            rive: a.E44,
            props: {
                artboard: "Torbs_Multiply"
            }
        },
        actions: v ? [{
            text: b.intl.string(b.t.cpT0Cq),
            variant: "secondary",
            onClick: t
        }, {
            text: b.intl.string(b.t.hvVgAZ),
            variant: "primary",
            onClick: () => {
                let e = u.BVt.NITRO_HOME,
                    r = new URLSearchParams({
                        [p.W]: c.QUEST_ORB_MULTIPLIER_CARD_ID
                    }).toString();
                t(), (0, _.pX)(e.includes("?") ? `${e}&${r}` : `${e}?${r}`)
            }
        }] : [{
            text: b.intl.string(b.t.PcTCB7),
            variant: "secondary",
            onClick: () => {
                t(), (0, _.pX)(u.BVt.NITRO_HOME)
            }
        }, {
            text: b.intl.string(b.t.pj0XBN),
            variant: "expressive",
            icon: n.tvc,
            onClick: () => {
                t(), (0, l.A)({
                    subscriptionTier: d.pe.TIER_2,
                    analyticsLocations: h
                })
            }
        }]
    })
}