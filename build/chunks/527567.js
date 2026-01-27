/** Chunk was on 86142 **/
/** chunk id: 527567, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(896048);
var r = n(627968),
    i = n(64700),
    s = n(830215),
    l = n(396681),
    a = n(854378),
    o = n(210714),
    c = n(985018),
    d = n(473169);

function u(e) {
    let {
        location: t
    } = e, [u, h] = i.useState("submitting");
    return (i.useEffect(() => {
        (0, o.d)("authorize_payment");
        let e = (0, l.A)(t);
        null == e ? h("failed") : (async () => {
            try {
                await s.A.authorizePayment(e), h("succeeded")
            } catch (e) {
                h("failed")
            }
        })()
    }, [t]), "failed" === u) ? (0, r.jsxs)(a.Ay, {
        children: [(0, r.jsx)("img", {
            alt: "",
            src: n(678985),
            className: d.SX
        }), (0, r.jsx)(a.hE, {
            className: d.QB,
            children: c.intl.string(c.t.GHRpue)
        }), (0, r.jsx)(a.tK, {
            className: d.C2,
            children: c.intl.string(c.t["1nO55v"])
        })]
    }) : "succeeded" === u ? (0, r.jsxs)(a.Ay, {
        children: [(0, r.jsx)("img", {
            alt: "",
            src: n(586430),
            className: d.SX
        }), (0, r.jsx)(a.hE, {
            className: d.QB,
            children: c.intl.string(c.t.ihHX53)
        }), (0, r.jsx)(a.tK, {
            className: d.C2,
            children: c.intl.string(c.t["pGPCv+"])
        })]
    }) : (0, r.jsxs)(a.Ay, {
        children: [(0, r.jsx)(a.CK, {}), (0, r.jsx)(a.hE, {
            children: c.intl.string(c.t.T3vC7n)
        })]
    })
}