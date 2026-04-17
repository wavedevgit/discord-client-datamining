/** chunk id: 778526 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(990078),
    a = n(397927),
    o = n(636194),
    d = n(11351),
    c = n(306444),
    u = n(652056),
    m = n(930657),
    g = n(4600),
    x = n(964758),
    h = n(57731),
    _ = n(985018),
    A = n(347539);

function p(e) {
    let {
        allSubscriptionListings: t,
        priceTiers: n,
        loading: p,
        error: f,
        handlePublishTier: j,
        onDeleteEditState: N
    } = e, {
        editStateId: E
    } = (0, c.O)(), T = (0, l.bG)([o.A], () => o.A.getSubscriptionListing(E)), C = (0, d.gN)(), I = s.useMemo(() => {
        let e = t.filter(e => e.id !== E).map(e => e.subscription_plans[0]?.price);
        return n?.filter(t => !e.includes(t))
    }, [t, E, n]), b = null == T, v = T?.published ?? !1, S = T?.archived ?? !1;
    return (0, i.jsxs)("div", {
        className: A.rf,
        children: [null != f && (0, i.jsx)(a.wx6, {
            type: "critical",
            children: f.getAnyErrorMessage()
        }), !v && !C && !S && (0, i.jsxs)("div", {
            className: A.Oy,
            children: [(0, i.jsxs)("div", {
                children: [(0, i.jsx)(a.Heading, {
                    variant: "heading-md/semibold",
                    className: A.Bm,
                    children: _.intl.string(_.t.WOlcS8)
                }), (0, i.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    children: _.intl.string(_.t.rMulDT)
                })]
            }), (0, i.jsx)(r.m, {
                shouldShow: b,
                text: _.intl.string(_.t.v7lRIh),
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(a.Button, {
                        disabled: b,
                        variant: "secondary",
                        onClick: j,
                        loading: p,
                        text: _.intl.string(_.t.Lj6R5m)
                    })
                })
            })]
        }), (0, i.jsx)(m.A, {
            priceTiers: I
        }), (0, i.jsx)(g.A, {
            allSubscriptionListings: t
        }), (0, i.jsx)(x.A, {}), (0, i.jsx)(h.A, {}), (0, i.jsx)(u.A, {
            onDeleteEditState: N
        })]
    })
}