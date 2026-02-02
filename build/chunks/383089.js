/** chunk id: 383089, original params: t,e,i (module,exports,require) **/
i.d(e, {
    m: () => d
});
var n = i(627968);
i(64700);
var a = i(158954),
    s = i(397927),
    l = i(665711),
    r = i(41032),
    o = i(985018),
    c = i(23337);

function d(t) {
    let {
        sku: e,
        application: i,
        primaryCTAButtonProps: l,
        transitionState: d,
        onClose: _,
        hasAlreadyLinked: x,
        canStartAuthorization: m,
        bodyText: f,
        title: p
    } = t;
    return (0, n.jsxs)(a.dWK, {
        transitionState: d,
        onClose: _,
        children: [(0, n.jsx)(r.z, {
            sku: e,
            title: p
        }), (0, n.jsxs)(a.cwr, {
            children: [(0, n.jsxs)("div", {
                className: c.S3,
                children: [(0, n.jsx)(s.Text, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    className: c.jJ,
                    children: f
                }), (0, n.jsx)(u, {
                    isConnected: x,
                    application: i
                })]
            }), !m && !x && (0, n.jsx)(s.Text, {
                variant: "text-md/normal",
                className: c.tl,
                color: "text-feedback-warning",
                children: o.intl.string(o.t.GDL8wb)
            }), !x && (0, n.jsx)("div", {
                className: c.ZT,
                children: (0, n.jsx)(s.Text, {
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    children: o.intl.formatToPlainString(o.t.TTj7ME, {
                        numDays: 14
                    })
                })
            })]
        }), (0, n.jsx)(a.H7u, {
            actions: [l],
            actionsFullWidth: !0
        })]
    })
}

function u(t) {
    let {
        isConnected: e,
        application: i
    } = t;
    return e ? (0, n.jsx)("div", {
        className: c.II,
        children: (0, n.jsxs)("div", {
            className: c.jf,
            children: [(0, n.jsxs)("div", {
                className: c.iN,
                children: [(0, n.jsx)("div", {
                    className: c.I8,
                    children: (0, n.jsx)(a.Uzd, {
                        size: "xs",
                        color: "currentColor"
                    })
                }), (0, n.jsx)(s.Text, {
                    variant: "text-md/normal",
                    className: c.qS,
                    color: "text-subtle",
                    children: o.intl.string(o.t["LV+CXH"])
                })]
            }), (0, n.jsx)("div", {
                className: c.vA,
                children: (0, n.jsx)(l.W, {
                    application: i,
                    iconSize: 20
                })
            })]
        })
    }) : (0, n.jsx)(a.wx6, {
        type: "warning",
        children: (0, n.jsx)(s.Text, {
            variant: "text-sm/medium",
            children: o.intl.string(o.t.Plv1Xk)
        })
    })
}