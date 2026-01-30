/** chunk id: 490744, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Uf: () => m,
    XG: () => g,
    fs: () => h
}), n(228524);
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(241524),
    o = n(166532),
    s = n(19311),
    l = n(482132),
    c = n(910804),
    u = n(376747),
    d = n(985018),
    f = n(123346),
    p = n(938430),
    _ = n(234275);
let h = e => {
        let {
            step: t,
            onClose: n
        } = e, s = (0, a.A)(u.T);
        return t === o.pn.CONFIRM || t === o.pn.BENEFITS ? (0, r.jsx)("div", {}) : (0, r.jsxs)("div", {
            className: f.N1,
            children: [!s && (0, r.jsx)("div", {
                className: f.oZ,
                "aria-hidden": "true",
                children: (0, r.jsx)("img", {
                    src: _,
                    alt: "",
                    className: f.F0
                })
            }), (0, r.jsx)(i.DUT, {
                className: f.G3,
                onClick: () => n(),
                "aria-label": d.intl.string(d.t.cpT0Cq),
                children: (0, r.jsx)(i.PGe, {
                    size: "md",
                    color: "currentColor",
                    className: f.ut
                })
            })]
        })
    },
    m = e => {
        let {
            icon: t,
            storeListingBenefits: n,
            skuBenefits: i,
            application: a,
            title: o,
            subtitle: s,
            description: l
        } = e;
        return null == a ? null : (0, r.jsx)("div", {
            className: f.RP,
            children: (0, r.jsxs)(c.$K, {
                children: [(0, r.jsx)(c.KF, {
                    application: a,
                    asset: t
                }), (0, r.jsx)(c.kj, {
                    children: o
                }), (0, r.jsx)(c.ri, {}), (0, r.jsx)(c.Mx, {
                    title: s,
                    description: l
                }), (0, r.jsx)(c.iH, {
                    applicationId: a.id,
                    storeListingBenefits: n,
                    skuBenefits: i
                })]
            })
        })
    };

function g(e) {
    let {
        tierName: t,
        onConfirm: n,
        subscription: a
    } = e;
    return (0, r.jsxs)("div", {
        className: f.NV,
        children: [(0, r.jsx)("img", {
            src: p,
            alt: "",
            width: 300,
            height: 126
        }), (0, r.jsx)(i.Heading, {
            className: f.i1,
            variant: "heading-xl/extrabold",
            color: "text-strong",
            children: d.intl.format(d.t.wLFT6z, {
                tier: t
            })
        }), (0, r.jsx)(i.Text, {
            className: f.sT,
            variant: "text-md/medium",
            color: "text-default",
            children: d.intl.format(d.t.OsAK9h, {
                timestamp: null == a ? void 0 : a.currentPeriodEnd
            })
        }), (0, r.jsx)(l.UX, {
            children: (0, r.jsx)(s.A, {
                onPrimary: n,
                primaryCTA: s.t.CONTINUE,
                primaryText: d.intl.string(d.t["JtWl+a"])
            })
        })]
    })
}