/** chunk id: 550732 params = (module,exports,require) **/
l.d(e, {
    C: () => g
});
var n = l(627968);
l(64700);
var s = l(991660),
    r = l(158954),
    a = l(311907),
    i = l(397927),
    o = l(587895),
    c = l(212534),
    d = l(272859),
    u = l(957565),
    x = l(943775),
    _ = l(997997),
    h = l(816709),
    m = l(652215),
    j = l(985018),
    v = l(94024),
    A = l(277355);

function g(t) {
    let {
        appId: e,
        skuId: l,
        transitionState: g,
        onClose: p,
        children: E,
        footer: S
    } = t, T = (0, a.bG)([o.A, c.A], () => o.A.getApplication(e) ?? c.A.getApplicationRecord(e), [e]), {
        data: f
    } = (0, d.d)(l);
    if (null == T) return null;
    let I = (0, x.A)(T, 25),
        {
            termsOfServiceUrl: R,
            privacyPolicyUrl: C
        } = T;
    if (f?.applicationId !== e) return (0, n.jsx)(r.Modal, {
        actions: [{
            onClick: p,
            text: j.intl.string(j.t.BddRzS),
            variant: "primary"
        }],
        onClose: p,
        size: "sm",
        transitionState: g,
        title: j.intl.string(j.t["0Bf80I"]),
        children: (0, n.jsx)(i.Text, {
            variant: "text-md/normal",
            color: "text-default",
            className: v.$r,
            children: j.intl.string(j.t.omH3bq)
        })
    });
    let k = null != I ? (0, n.jsx)("img", {
        src: I.href,
        alt: "",
        className: v.Z2
    }) : void 0;
    return (0, n.jsxs)(r.dWK, {
        onClose: p,
        size: "lg",
        transitionState: g,
        children: [(0, n.jsx)(r.rQ0, {
            leading: k,
            title: T.name
        }), (0, n.jsx)(s.A, {
            children: (0, n.jsx)("main", {
                className: A.bodyInner,
                children: E
            })
        }), (0, n.jsx)(r.jlY, {
            children: (0, n.jsxs)("div", {
                className: v.qr,
                children: [null != R || null != C ? (0, n.jsx)(i.Text, {
                    color: "text-strong",
                    variant: "text-sm/normal",
                    children: (0, n.jsx)(h.A, {
                        termsOfServiceUrl: R,
                        privacyPolicyUrl: C
                    })
                }) : (0, n.jsx)(i.Text, {
                    color: "text-strong",
                    variant: "text-xs/normal",
                    children: j.intl.string(j.t["3ZY+0D"])
                }), (0, n.jsxs)("div", {
                    className: v.Hq,
                    children: [u.p5 && (0, n.jsx)(i.K0, {
                        "aria-label": j.intl.string(j.t.WqhZss),
                        icon: () => (0, n.jsx)(i.qYV, {
                            size: "xs",
                            color: "currentColor"
                        }),
                        onClick: () => {
                            let t = `${location.protocol}//${location.host}${m.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(e,l)}`;
                            (0, u.C)(t, () => (0, i.showToast)((0, i.createToast)(j.intl.string(j.t["L/PwZf"]), i.ToastType.SUCCESS))), (0, _.K)(e, _.C.DETAILS_MODAL, l)
                        },
                        variant: "icon-only"
                    }), S]
                })]
            })
        })]
    })
}