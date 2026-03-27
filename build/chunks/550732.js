/** chunk id: 550732 params = (module,exports,require) **/
l.d(e, {
    C: () => p
});
var s = l(627968);
l(64700);
var r = l(991660),
    n = l(158954),
    i = l(311907),
    a = l(397927),
    o = l(587895),
    c = l(212534),
    d = l(272859),
    x = l(957565),
    u = l(943775),
    _ = l(997997),
    h = l(816709),
    m = l(652215),
    v = l(985018),
    j = l(141675),
    g = l(110992);

function p(t) {
    let {
        appId: e,
        skuId: l,
        transitionState: p,
        onClose: A,
        children: T,
        footer: E
    } = t, I = (0, i.bG)([o.A, c.A], () => o.A.getApplication(e) ?? c.A.getApplicationRecord(e), [e]), {
        data: S
    } = (0, d.d)(l);
    if (null == I) return null;
    let R = (0, u.A)(I, 25),
        {
            termsOfServiceUrl: f,
            privacyPolicyUrl: N
        } = I;
    if (S?.applicationId !== e) return (0, s.jsx)(n.Modal, {
        actions: [{
            onClick: A,
            text: v.intl.string(v.t.BddRzS),
            variant: "primary"
        }],
        onClose: A,
        size: "sm",
        transitionState: p,
        title: v.intl.string(v.t["0Bf80I"]),
        children: (0, s.jsx)(a.Text, {
            variant: "text-md/normal",
            color: "text-default",
            className: j.$r,
            children: v.intl.string(v.t.omH3bq)
        })
    });
    let k = null != R ? (0, s.jsx)("img", {
        src: R.href,
        alt: "",
        className: j.Z2
    }) : void 0;
    return (0, s.jsxs)(n.dWK, {
        onClose: A,
        size: "lg",
        transitionState: p,
        children: [(0, s.jsx)(n.rQ0, {
            leading: k,
            title: I.name
        }), (0, s.jsx)(r.A, {
            children: (0, s.jsx)("main", {
                className: g.bodyInner,
                children: T
            })
        }), (0, s.jsx)(n.jlY, {
            children: (0, s.jsxs)("div", {
                className: j.qr,
                children: [null != f || null != N ? (0, s.jsx)(a.Text, {
                    color: "text-strong",
                    variant: "text-sm/normal",
                    children: (0, s.jsx)(h.A, {
                        termsOfServiceUrl: f,
                        privacyPolicyUrl: N
                    })
                }) : (0, s.jsx)(a.Text, {
                    color: "text-strong",
                    variant: "text-xs/normal",
                    children: v.intl.string(v.t["3ZY+0D"])
                }), (0, s.jsxs)("div", {
                    className: j.Hq,
                    children: [x.p5 && (0, s.jsx)(a.K0, {
                        "aria-label": v.intl.string(v.t.WqhZss),
                        icon: () => (0, s.jsx)(a.qYV, {
                            size: "xs",
                            color: "currentColor"
                        }),
                        onClick: () => {
                            let t = `${location.protocol}//${location.host}${m.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(e,l)}`;
                            (0, x.C)(t, () => (0, a.showToast)((0, a.createToast)(v.intl.string(v.t["L/PwZf"]), a.ToastType.SUCCESS))), (0, _.K)(e, _.C.DETAILS_MODAL, l)
                        },
                        variant: "icon-only"
                    }), E]
                })]
            })
        })]
    })
}