/** chunk id: 318998, original params: e,t,r (module,exports,require) **/
r.d(t, {
    PremiumSubscriptionPauseModalSelect: () => D,
    cN: () => T
}), r(321073);
var n = r(627968),
    a = r(64700),
    o = r(989349),
    i = r.n(o),
    s = r(539267),
    l = r(158954),
    _ = r(421380),
    c = r(384904),
    u = r(964486),
    d = r(927578),
    m = r(615396),
    C = r(473702),
    p = r(916974),
    f = r(652215),
    E = r(985018),
    I = r(970032);
async function S(e) {
    let {
        premiumSubscription: t,
        pauseDuration: r,
        onClose: n,
        setHasError: a,
        setIsCancelling: o,
        analyticsLocations: i,
        analyticsLocation: s
    } = e;
    try {
        o(!0), a(!1), await (0, c.nV)(t, {
            pauseDuration: r
        }, {
            amount: 0,
            currency: t.currency
        }, (0, d.UC)(t.items, t.currency, t.paymentSourceId), i, s), n()
    } catch {
        a(!0), o(!1)
    }
}

function D() {
    let {
        transitionState: e,
        onClose: t,
        setStep: r,
        setPauseDuration: o,
        pauseDuration: i,
        premiumSubscription: c
    } = (0, p.X)(), d = a.useCallback(e => {
        let {
            value: t
        } = e;
        o(t)
    }, [o]), S = c.status === f.Dmq.PAUSED ? E.intl.string(E.t.Lp9WoG) : E.intl.string(E.t.eSR83U), D = function(e) {
        let t = e.status === f.Dmq.PAUSED ? E.t.o3upfT : E.t.dBXZEm,
            {
                durations: r,
                currentDaysPaused: n
            } = (0, m.Vy)(e),
            a = [];
        for (let e of r) {
            let r = s.V[e];
            a.push({
                name: E.intl.formatToPlainString(t, {
                    days: r - n
                }),
                value: r,
                radioItemIconClassName: I.hO
            })
        }
        return a.sort((e, t) => e.value - t.value), a.push({
            name: E.intl.string(E.t.OCPUM6),
            value: 0,
            radioBarClassName: I.CK,
            radioItemIconClassName: I.CK
        }), a
    }(c);
    return (0, u.Ay)(() => {
        D.length < 1 || o(D[0].value)
    }), (0, n.jsx)(l.Modal, {
        transitionState: e,
        title: E.intl.string(E.t["f3nnB/"]),
        subtitle: S,
        onClose: async () => {
            await t()
        },
        actions: [{
            variant: "secondary",
            text: E.intl.string(E.t.rzVN6j),
            onClick: t
        }, {
            variant: "primary",
            disabled: null === i,
            text: E.intl.string(E.t["3PatSz"]),
            onClick: () => {
                0 === i ? r(C.g.WHAT_YOU_LOSE) : r(C.g.PAUSE_CONFIRM)
            }
        }],
        children: (0, n.jsx)(_.$d, {
            "data-migration-pending": !0,
            options: D,
            onChange: d,
            value: i
        })
    })
}

function T() {
    let {
        transitionState: e,
        onClose: t,
        pauseDuration: r,
        premiumSubscription: o,
        analyticsLocation: s,
        setStep: _,
        analyticsLocations: c
    } = (0, p.X)(), [u, d] = a.useState(!1), [m, D] = a.useState(!1);
    if (null == r) return void _(C.g.PAUSE_SELECT);
    let T = null,
        y = [f.Dmq.PAST_DUE, f.Dmq.PAUSED].includes(o.status) ? o.currentPeriodStart : o.currentPeriodEnd,
        h = i()(y).add(r, "days").toDate();
    switch (o.status) {
        case f.Dmq.PAST_DUE:
            T = E.intl.format(E.t["xaS18/"], {
                pauseDuration: r,
                resumeDate: h
            });
            break;
        case f.Dmq.PAUSED:
            T = E.intl.format(E.t.Vur3Fc, {
                resumeDate: h
            });
            break;
        default:
            T = E.intl.format(E.t.W85vFA, {
                pauseDate: y,
                resumeDate: h,
                pauseDuration: r
            })
    }
    return (0, n.jsxs)(l.Modal, {
        title: E.intl.string(E.t.AnMG5x),
        transitionState: e,
        actions: [{
            text: E.intl.string(E.t.rzVN6j),
            variant: "primary",
            onClick: t
        }, {
            text: E.intl.string(E.t["cY+Oob"]),
            variant: "critical-primary",
            disabled: m || null == r,
            onClick: async () => {
                await S({
                    premiumSubscription: o,
                    pauseDuration: r,
                    setIsCancelling: D,
                    setHasError: d,
                    onClose: t,
                    analyticsLocations: c,
                    analyticsLocation: s
                })
            }
        }],
        onClose: async () => {
            await t()
        },
        children: [u ? (0, n.jsx)("div", {
            className: I.QK,
            children: (0, n.jsx)(l.wx6, {
                type: "critical",
                children: E.intl.string(E.t["5mlOCW"])
            })
        }) : null, (0, n.jsx)("div", {
            className: I.rf,
            children: T
        })]
    })
}