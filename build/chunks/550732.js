/** chunk id: 550732, original params: t,e,r (module,exports,require) **/
r.d(e, {
    C: () => g
});
var n = r(627968);
r(64700);
var l = r(991660),
    s = r(158954),
    i = r(311907),
    a = r(397927),
    o = r(587895),
    c = r(212534),
    d = r(272859),
    u = r(957565),
    x = r(943775),
    p = r(997997),
    m = r(816709),
    v = r(652215),
    _ = r(985018),
    j = r(356426),
    f = r(22789);

function g(t) {
    let {
        appId: e,
        skuId: r,
        transitionState: g,
        onClose: h,
        children: y,
        footer: E
    } = t, b = (0, i.bG)([o.A, c.A], () => {
        var t;
        return null != (t = o.A.getApplication(e)) ? t : c.A.getApplicationRecord(e)
    }, [e]), {
        data: A
    } = (0, d.d)(r);
    if (null == b) return null;
    let I = (0, x.A)(b, 25),
        {
            termsOfServiceUrl: O,
            privacyPolicyUrl: S
        } = b;
    if ((null == A ? void 0 : A.applicationId) !== e) return (0, n.jsx)(s.Modal, {
        actions: [{
            onClick: h,
            text: _.intl.string(_.t.BddRzS),
            variant: "primary"
        }],
        onClose: h,
        size: "sm",
        transitionState: g,
        title: _.intl.string(_.t["0Bf80I"]),
        children: (0, n.jsx)(a.Text, {
            variant: "text-md/normal",
            color: "text-default",
            className: j.$r,
            children: _.intl.string(_.t.omH3bq)
        })
    });
    let T = null != I ? (0, n.jsx)("img", {
        src: I.href,
        alt: "",
        className: j.Z2
    }) : void 0;
    return (0, n.jsxs)(s.dWK, {
        onClose: h,
        size: "lg",
        transitionState: g,
        children: [(0, n.jsx)(s.rQ0, {
            leading: T,
            title: b.name
        }), (0, n.jsx)(l.A, {
            children: (0, n.jsx)("main", {
                className: f.bodyInner,
                children: y
            })
        }), (0, n.jsx)(s.jlY, {
            children: (0, n.jsxs)("div", {
                className: j.qr,
                children: [null != O || null != S ? (0, n.jsx)(a.Text, {
                    color: "text-strong",
                    variant: "text-sm/normal",
                    children: (0, n.jsx)(m.A, {
                        termsOfServiceUrl: O,
                        privacyPolicyUrl: S
                    })
                }) : (0, n.jsx)(a.Text, {
                    color: "text-strong",
                    variant: "text-xs/normal",
                    children: _.intl.string(_.t["3ZY+0D"])
                }), (0, n.jsxs)("div", {
                    className: j.Hq,
                    children: [u.p5 && (0, n.jsx)(a.K0, {
                        "aria-label": _.intl.string(_.t.WqhZss),
                        icon: () => (0, n.jsx)(a.qYV, {
                            size: "xs",
                            color: "currentColor"
                        }),
                        onClick: () => {
                            let t = "".concat(location.protocol, "//").concat(location.host).concat(v.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(e, r));
                            (0, u.C)(t, () => (0, a.showToast)((0, a.createToast)(_.intl.string(_.t["L/PwZf"]), a.ToastType.SUCCESS))), (0, p.K)(e, p.C.DETAILS_MODAL, r)
                        },
                        variant: "icon-only"
                    }), E]
                })]
            })
        })]
    })
}