/** chunk id: 885969, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(65821), n(896048), n(457529);
var r = n(86980),
    i = n(793574),
    l = n(580960),
    a = n(636401),
    s = n(629471),
    o = n(569475),
    c = n(994717),
    u = n(546983),
    d = n(613057),
    p = n(652215),
    h = n(788868);
let f = [i.A.RPC];

function g(e, t) {
    let n = {
        subscriptionTier: h.pe.TIER_2,
        analyticsLocations: f,
        analyticsObject: t
    };
    switch (e) {
        case p.BRT.APP:
            return l.A.openPremiumPaymentModalInApp(n);
        case p.BRT.OVERLAY:
            return l.A.openPremiumPaymentModalInOverlay(n);
        default:
            throw Error("Unexpected app context: ".concat(e))
    }
}
let m = {
    [p.e$_.START_PURCHASE]: {
        [d.sm.ANY]: [d.VH, d.hj],
        validation: e => (0, s.A)(e).required().keys({
            sku_id: e.string().required(),
            pid: e.number().min(0)
        }),
        handler(e) {
            let {
                socket: t,
                args: {
                    sku_id: n,
                    pid: i
                }
            } = e;
            (0, c.C)(t.transport);
            let l = t.application.id;
            if (null == l) throw new a.A({
                errorCode: p.Lw6.INVALID_COMMAND
            }, "No application.");
            let {
                lock: s,
                context: h
            } = (0, u.d5)(t.transport !== d.z4.POST_MESSAGE ? i : null);
            if (null == (0, o.A)()) throw new a.A({
                errorCode: p.Lw6.INVALID_CHANNEL
            }, "Invalid channel");
            let m = {
                page: p.liQ.IN_APP
            };
            return (async () => {
                try {
                    let e = await (0, r.j)({
                        applicationId: l,
                        skuId: n,
                        openPremiumPaymentModal: () => g(h, m),
                        analyticsLocations: f,
                        analyticsLocationObject: m,
                        context: h
                    });
                    return s(), e
                } catch (e) {
                    if (s(), null != e) {
                        let t = "";
                        throw t = "object" == typeof e && "message" in e && "string" == typeof e.message ? e.message : "string" == typeof e ? e : JSON.stringify(e), new a.A({
                            errorCode: p.Lw6.PURCHASE_ERROR
                        }, t)
                    }
                    throw new a.A({
                        errorCode: p.Lw6.PURCHASE_CANCELED
                    }, "Purchase was canceled by the user.")
                }
            })()
        }
    },
    [p.e$_.START_PREMIUM_PURCHASE]: {
        [d.sm.ANY]: [d.VH, d.hj],
        validation: e => (0, s.A)(e).keys({
            pid: e.number().min(0)
        }),
        handler(e) {
            let {
                socket: t,
                args: {
                    pid: n
                }
            } = e;
            if ((0, c.C)(t.transport), null == t.application.id) throw new a.A({
                errorCode: p.Lw6.INVALID_COMMAND
            }, "No application.");
            let {
                lock: r,
                context: i
            } = (0, u.d5)(t.transport !== d.z4.POST_MESSAGE ? n : null);
            return g(i, {
                page: p.liQ.IN_APP
            }).then(() => {
                r()
            }, e => {
                if (r(), null != e) throw new a.A({
                    errorCode: p.Lw6.PURCHASE_ERROR
                }, e);
                throw new a.A({
                    errorCode: p.Lw6.PURCHASE_CANCELED
                }, "Purchase was canceled by the user.")
            })
        }
    }
}