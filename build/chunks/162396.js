/** chunk id: 162396, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
});
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(397927),
    o = n(975807),
    u = n(212031),
    c = n(975571),
    d = n(809465),
    h = n(652215),
    g = n(985018),
    f = n(535790);

function m(e) {
    let {
        onClose: t
    } = e;
    return (0, r.jsx)(s.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "settings-footer-more-menu",
        onClose: t,
        onSelect: () => {},
        "aria-label": "More options",
        children: (0, r.jsxs)(s.rXV, {
            children: [(0, r.jsx)(s.Drp, {
                id: "changelog",
                label: g.intl.string(g.t.LRmNAl),
                action: () => (0, u.j)(!0)
            }), (0, r.jsx)(s.Drp, {
                id: "acknowledgements",
                label: g.intl.string(g.t["0nUKy3"]),
                action: () => (0, o.A)(h.X7G.ACKNOWLEDGEMENTS)
            }), (0, r.jsx)(s.Drp, {
                id: "support",
                label: g.intl.string(g.t["Yl/Riu"]),
                action: () => (0, o.A)(c.C)
            })]
        })
    })
}

function y() {
    let e = a.useRef(null);
    return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(d.A, {
            compact: !0
        }), (0, r.jsxs)("div", {
            className: f.yJ,
            children: [(0, r.jsx)(s.MzZ, {
                href: h.X7G.PRIVACY,
                children: (0, r.jsx)(s.Text, {
                    tag: "span",
                    variant: "text-xxs/normal",
                    color: "currentColor",
                    children: g.intl.string(g.t["Knf/f/"])
                })
            }), (0, r.jsx)("span", {
                className: f.xE,
                "aria-hidden": "true",
                children: "•"
            }), (0, r.jsx)(s.MzZ, {
                href: h.X7G.TERMS,
                children: (0, r.jsx)(s.Text, {
                    tag: "span",
                    variant: "text-xxs/normal",
                    color: "currentColor",
                    children: g.intl.string(g.t.uFSTGq)
                })
            }), (0, r.jsx)("span", {
                className: f.xE,
                "aria-hidden": "true",
                children: "•"
            }), (0, r.jsx)(s.YNO, {
                targetElementRef: e,
                position: "top",
                align: "center",
                spacing: 0,
                animation: s.YNO.Animation.NONE,
                renderPopout: e => {
                    let {
                        closePopout: t
                    } = e;
                    return (0, r.jsx)(m, {
                        onClose: t
                    })
                },
                children: (t, n) => (0, r.jsx)(s.MzZ, {
                    ...t,
                    ref: e,
                    useDefaultUnderlineStyles: !1,
                    className: l()(f.Mj, {
                        [f.vu]: n.isShown
                    }),
                    children: (0, r.jsx)(s.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "currentColor",
                        children: g.intl.string(g.t["UKOtz+"])
                    })
                })
            })]
        })]
    })
}