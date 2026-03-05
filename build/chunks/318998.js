/** chunk id: 318998 params = (module,exports,require) **/
e.d(a, {
    PremiumSubscriptionPauseModalSelect: () => f,
    cN: () => v
}), e(321073);
var n = e(627968),
    i = e(64700),
    r = e(989349),
    s = e.n(r),
    l = e(539267),
    c = e(158954),
    o = e(421380),
    u = e(384904),
    d = e(964486),
    m = e(927578),
    p = e(615396),
    S = e(473702),
    C = e(916974),
    D = e(652215),
    y = e(985018),
    g = e(993414);
async function h(t) {
    let {
        premiumSubscription: a,
        pauseDuration: e,
        onClose: n,
        setHasError: i,
        setIsCancelling: r,
        analyticsLocations: s,
        analyticsLocation: l
    } = t;
    try {
        r(!0), i(!1), await (0, u.nV)(a, {
            pauseDuration: e
        }, {
            amount: 0,
            currency: a.currency
        }, (0, m.UC)(a.items, a.currency, a.paymentSourceId), s, l), n()
    } catch {
        i(!0), r(!1)
    }
}

function f() {
    let {
        transitionState: t,
        onClose: a,
        setStep: e,
        setPauseDuration: r,
        pauseDuration: s,
        premiumSubscription: u
    } = (0, C.X)(), m = i.useCallback(t => {
        let {
            value: a
        } = t;
        r(a)
    }, [r]), h = u.status === D.Dmq.PAUSED ? y.intl.string(y.t.Lp9WoG) : y.intl.string(y.t.eSR83U), f = function(t) {
        let a = t.status === D.Dmq.PAUSED ? y.t.o3upfT : y.t.dBXZEm,
            {
                durations: e,
                currentDaysPaused: n
            } = (0, p.Vy)(t),
            i = [];
        for (let t of e) {
            let e = l.V[t];
            i.push({
                name: y.intl.formatToPlainString(a, {
                    days: e - n
                }),
                value: e,
                radioItemIconClassName: g.hO
            })
        }
        return i.sort((t, a) => t.value - a.value), i.push({
            name: y.intl.string(y.t.OCPUM6),
            value: 0,
            radioBarClassName: g.CK,
            radioItemIconClassName: g.CK
        }), i
    }(u);
    return (0, d.Ay)(() => {
        f.length < 1 || r(f[0].value)
    }), (0, n.jsx)(c.Modal, {
        transitionState: t,
        title: y.intl.string(y.t["f3nnB/"]),
        subtitle: h,
        onClose: async () => {
            await a()
        },
        actions: [{
            variant: "secondary",
            text: y.intl.string(y.t.rzVN6j),
            onClick: a
        }, {
            variant: "primary",
            disabled: null === s,
            text: y.intl.string(y.t["3PatSz"]),
            onClick: () => {
                0 === s ? e(S.g.WHAT_YOU_LOSE) : e(S.g.PAUSE_CONFIRM)
            }
        }],
        children: (0, n.jsx)(o.$d, {
            "data-migration-pending": !0,
            options: f,
            onChange: m,
            value: s
        })
    })
}

function v() {
    let {
        transitionState: t,
        onClose: a,
        pauseDuration: e,
        premiumSubscription: r,
        analyticsLocation: l,
        setStep: o,
        analyticsLocations: u
    } = (0, C.X)(), [d, m] = i.useState(!1), [p, f] = i.useState(!1);
    if (null == e) return void o(S.g.PAUSE_SELECT);
    let v = null,
        x = [D.Dmq.PAST_DUE, D.Dmq.PAUSED].includes(r.status) ? r.currentPeriodStart : r.currentPeriodEnd,
        P = s()(x).add(e, "days").toDate();
    switch (r.status) {
        case D.Dmq.PAST_DUE:
            v = y.intl.format(y.t["xaS18/"], {
                pauseDuration: e,
                resumeDate: P
            });
            break;
        case D.Dmq.PAUSED:
            v = y.intl.format(y.t.Vur3Fc, {
                resumeDate: P
            });
            break;
        default:
            v = y.intl.format(y.t.W85vFA, {
                pauseDate: x,
                resumeDate: P,
                pauseDuration: e
            })
    }
    return (0, n.jsxs)(c.Modal, {
        title: y.intl.string(y.t.AnMG5x),
        transitionState: t,
        actions: [{
            text: y.intl.string(y.t.rzVN6j),
            variant: "primary",
            onClick: a
        }, {
            text: y.intl.string(y.t["cY+Oob"]),
            variant: "critical-primary",
            disabled: p || null == e,
            onClick: async () => {
                await h({
                    premiumSubscription: r,
                    pauseDuration: e,
                    setIsCancelling: f,
                    setHasError: m,
                    onClose: a,
                    analyticsLocations: u,
                    analyticsLocation: l
                })
            }
        }],
        onClose: async () => {
            await a()
        },
        children: [d ? (0, n.jsx)("div", {
            className: g.QK,
            children: (0, n.jsx)(c.wx6, {
                type: "critical",
                children: y.intl.string(y.t["5mlOCW"])
            })
        }) : null, (0, n.jsx)("div", {
            className: g.rf,
            children: v
        })]
    })
}