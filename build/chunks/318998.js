/** chunk id: 318998, original params: t,a,e (module,exports,require) **/
e.d(a, {
    PremiumSubscriptionPauseModalSelect: () => f,
    cN: () => v
}), e(321073), e(896048), e(638769);
var n = e(627968),
    i = e(64700),
    r = e(989349),
    s = e.n(r),
    l = e(539267),
    c = e(158954),
    u = e(421380),
    o = e(384904),
    d = e(964486),
    m = e(927578),
    p = e(615396),
    S = e(473702),
    C = e(916974),
    h = e(652215),
    D = e(985018),
    y = e(970032);
async function g(t) {
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
        r(!0), i(!1), await (0, o.nV)(a, {
            pauseDuration: e
        }, {
            amount: 0,
            currency: a.currency
        }, (0, m.UC)(a.items, a.currency, a.paymentSourceId), s, l), n()
    } catch (t) {
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
        premiumSubscription: o
    } = (0, C.X)(), m = i.useCallback(t => {
        let {
            value: a
        } = t;
        r(a)
    }, [r]), g = o.status === h.Dmq.PAUSED ? D.intl.string(D.t.Lp9WoG) : D.intl.string(D.t.eSR83U), f = function(t) {
        let a = t.status === h.Dmq.PAUSED ? D.t.o3upfT : D.t.dBXZEm,
            {
                durations: e,
                currentDaysPaused: n
            } = (0, p.Vy)(t),
            i = [];
        for (let t of e) {
            let e = l.V[t];
            i.push({
                name: D.intl.formatToPlainString(a, {
                    days: e - n
                }),
                value: e,
                radioItemIconClassName: y.hO
            })
        }
        return i.sort((t, a) => t.value - a.value), i.push({
            name: D.intl.string(D.t.OCPUM6),
            value: 0,
            radioBarClassName: y.CK,
            radioItemIconClassName: y.CK
        }), i
    }(o);
    return (0, d.Ay)(() => {
        f.length < 1 || r(f[0].value)
    }), (0, n.jsx)(c.Modal, {
        transitionState: t,
        title: D.intl.string(D.t["f3nnB/"]),
        subtitle: g,
        onClose: async () => {
            await a()
        },
        actions: [{
            variant: "secondary",
            text: D.intl.string(D.t.h9tkAK),
            onClick: a
        }, {
            variant: "primary",
            disabled: null === s,
            text: D.intl.string(D.t["3PatSz"]),
            onClick: () => {
                0 === s ? e(S.g.WHAT_YOU_LOSE) : e(S.g.PAUSE_CONFIRM)
            }
        }],
        children: (0, n.jsx)(u.$d, {
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
        setStep: u,
        analyticsLocations: o
    } = (0, C.X)(), [d, m] = i.useState(!1), [p, f] = i.useState(!1);
    if (null == e) return void u(S.g.PAUSE_SELECT);
    let v = null,
        x = [h.Dmq.PAST_DUE, h.Dmq.PAUSED].includes(r.status) ? r.currentPeriodStart : r.currentPeriodEnd,
        P = s()(x).add(e, "days").toDate();
    switch (r.status) {
        case h.Dmq.PAST_DUE:
            v = D.intl.format(D.t["xaS18/"], {
                pauseDuration: e,
                resumeDate: P
            });
            break;
        case h.Dmq.PAUSED:
            v = D.intl.format(D.t.Vur3Fc, {
                resumeDate: P
            });
            break;
        default:
            v = D.intl.format(D.t.W85vFA, {
                pauseDate: x,
                resumeDate: P,
                pauseDuration: e
            })
    }
    return (0, n.jsxs)(c.Modal, {
        title: D.intl.string(D.t.AnMG5x),
        transitionState: t,
        actions: [{
            text: D.intl.string(D.t.h9tkAK),
            variant: "primary",
            onClick: a
        }, {
            text: D.intl.string(D.t["cY+Oob"]),
            variant: "critical-primary",
            disabled: p || null == e,
            onClick: async () => {
                await g({
                    premiumSubscription: r,
                    pauseDuration: e,
                    setIsCancelling: f,
                    setHasError: m,
                    onClose: a,
                    analyticsLocations: o,
                    analyticsLocation: l
                })
            }
        }],
        onClose: async () => {
            await a()
        },
        children: [d ? (0, n.jsx)("div", {
            className: y.QK,
            children: (0, n.jsx)(c.wx6, {
                type: "critical",
                children: D.intl.string(D.t["5mlOCW"])
            })
        }) : null, (0, n.jsx)("div", {
            className: y.rf,
            children: v
        })]
    })
}