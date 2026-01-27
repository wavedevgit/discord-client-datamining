/** Chunk was on 39048 **/
/** chunk id: 778526, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(990078),
    a = n(397927),
    o = n(636194),
    c = n(11351),
    d = n(306444),
    u = n(652056),
    g = n(930657),
    m = n(4600),
    p = n(964758),
    f = n(57731),
    h = n(985018),
    b = n(275316);

function x(e) {
    var t, n;
    let {
        allSubscriptionListings: x,
        priceTiers: j,
        loading: _,
        error: O,
        handlePublishTier: v,
        onDeleteEditState: y
    } = e, {
        editStateId: A
    } = (0, d.O)(), E = (0, l.bG)([o.A], () => o.A.getSubscriptionListing(A)), N = (0, c.gN)(), S = i.useMemo(() => {
        let e = x.filter(e => e.id !== A).map(e => {
            var t;
            return null == (t = e.subscription_plans[0]) ? void 0 : t.price
        });
        return null == j ? void 0 : j.filter(t => !e.includes(t))
    }, [x, A, j]), I = null == E, T = null != (t = null == E ? void 0 : E.published) && t, C = null != (n = null == E ? void 0 : E.archived) && n;
    return (0, r.jsxs)("div", {
        className: b.rf,
        children: [null != O && (0, r.jsx)(a.wx6, {
            type: "critical",
            children: O.getAnyErrorMessage()
        }), !T && !N && !C && (0, r.jsxs)("div", {
            className: b.Oy,
            children: [(0, r.jsxs)("div", {
                children: [(0, r.jsx)(a.Heading, {
                    variant: "heading-md/semibold",
                    className: b.Bm,
                    children: h.intl.string(h.t.WOlcS8)
                }), (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    children: h.intl.string(h.t.rMulDT)
                })]
            }), (0, r.jsx)(s.m, {
                shouldShow: I,
                text: h.intl.string(h.t.v7lRIh),
                children: (0, r.jsx)("div", {
                    children: (0, r.jsx)(a.Button, {
                        disabled: I,
                        variant: "secondary",
                        onClick: v,
                        loading: _,
                        text: h.intl.string(h.t.Lj6R5m)
                    })
                })
            })]
        }), (0, r.jsx)(g.A, {
            priceTiers: S
        }), (0, r.jsx)(m.A, {
            allSubscriptionListings: x
        }), (0, r.jsx)(p.A, {}), (0, r.jsx)(f.A, {}), (0, r.jsx)(u.A, {
            onDeleteEditState: y
        })]
    })
}