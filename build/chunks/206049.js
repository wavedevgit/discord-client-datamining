/** chunk id: 206049, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => O
}), r(801460), r(508300), r(650828), r(747238), r(812715), r(927092), r(212978), r(201528), r(393431), r(752391), r(532706), r(42231), r(232424), r(757074), r(949626), r(767709), r(65162), r(896048), r(693327), r(554719), r(680155), r(323874), r(14289), r(35956);
var n = r(627968),
    o = r(64700),
    a = r(158954),
    l = r(562465),
    i = r(397927),
    c = r(450233),
    s = r(181658),
    u = r(256006),
    y = r(652215),
    p = r(985018);

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n
        })
    }
    return e
}

function f(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
        }
        return r
    })(Object(t)).forEach(function(r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
    }), e
}
async function b(e, t, r) {
    let n = y.Rsh.BILLING_INVOICE_PDF,
        o = t ? {
            name: r.name,
            line_1: r.line1,
            line_2: r.line2,
            city: r.city,
            state: r.state,
            postal_code: r.postalCode,
            country: r.country
        } : null,
        a = await l.Bo.post({
            url: n,
            body: {
                payment_id: e,
                billing_address_override: t ? o : null
            },
            oldFormErrors: !0,
            rejectWithError: !1
        });
    return ! function(e, t) {
        let r = atob(t.replace(/\s/g, "")),
            n = new Uint8Array(new ArrayBuffer(r.length));
        for (let e = 0; e < r.length; e++) n[e] = r.charCodeAt(e);
        let o = new Blob([n], {
                type: "application/pdf"
            }),
            a = URL.createObjectURL(o),
            l = document.createElement("a");
        l.href = a, l.download = "receipt_".concat(e, ".pdf"), document.body.appendChild(l), l.click(), document.body.removeChild(l), URL.revokeObjectURL(a)
    }(e, a.text), !0
}

function O(e) {
    let {
        payment: t,
        paymentSource: r
    } = e, l = function(e, t) {
        if (null == e) return {};
        var r, n, o, a = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            return a
        }
        if (a = function(e, t) {
                if (null == e) return {};
                var r, n, o = {},
                    a = Object.getOwnPropertyNames(e);
                for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                return o
            }(e, t), Object.getOwnPropertySymbols)
            for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
        return a
    }(e, ["payment", "paymentSource"]), y = {
        name: "",
        line1: "",
        line2: "",
        city: "",
        postalCode: "",
        state: "",
        country: r.country
    }, [O, S] = o.useState(y), [g, m] = o.useState(!1), [h, j] = o.useState(!1), [E, T] = o.useState(!1), [_, w] = o.useState("");
    async function I() {
        T(!0);
        try {
            await b(A, g, O)
        } catch (r) {
            var e;
            let t = JSON.parse(await r.body.text());
            w(null != (e = new s.A(f(d({}, r), {
                body: t
            })).getAnyErrorMessage()) ? e : p.intl.formatToPlainString(p.t["4eT6rr"], {}))
        } finally {
            T(!1)
        }
    }
    let L = u.K,
        A = t.id,
        N = (0, n.jsx)(i.dOG, {
            label: p.intl.formatToPlainString(p.t["aJg+oS"], {}),
            description: p.intl.formatToPlainString(p.t["2p1XJW"], {}),
            checked: g,
            onChange: m
        }),
        P = g ? (0, n.jsx)(c.Ay, f(d({}, O), {
            mode: c.Ay.Modes.CREATE,
            layout: L,
            onBillingAddressChange: function(e, t) {
                S(e), j(t)
            },
            error: null
        })) : null;
    return (0, n.jsxs)(a.Modal, {
        transitionState: l.transitionState,
        onClose: l.onClose,
        title: p.intl.formatToPlainString(p.t.onRIxS, {}),
        actions: [{
            variant: "primary",
            text: p.intl.formatToPlainString(p.t.uqZjLi, {}),
            onClick: I,
            disabled: g && !h,
            loading: E,
            autoFocus: !0
        }],
        children: [N, P, null != _ && "" !== _ && (0, n.jsx)(i.wx6, {
            type: "critical",
            children: _
        })]
    })
}