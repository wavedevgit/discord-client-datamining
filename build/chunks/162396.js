/** chunk id: 162396 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(397927),
    o = n(975807),
    c = n(212031),
    u = n(975571),
    d = n(809465),
    h = n(652215),
    m = n(985018),
    f = n(113853);

function p(e) {
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
                label: m.intl.string(m.t.LRmNAl),
                action: () => (0, c.j)(!0)
            }), (0, r.jsx)(s.Drp, {
                id: "acknowledgements",
                label: m.intl.string(m.t["0nUKy3"]),
                action: () => (0, o.A)(h.X7G.ACKNOWLEDGEMENTS)
            }), (0, r.jsx)(s.Drp, {
                id: "support",
                label: m.intl.string(m.t["Yl/Riu"]),
                action: () => (0, o.A)(u.C)
            })]
        })
    })
}

function _() {
    let e = i.useRef(null);
    return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(d.A, {}), (0, r.jsxs)("div", {
            className: f.yJ,
            children: [(0, r.jsx)(s.MzZ, {
                href: h.X7G.PRIVACY,
                children: (0, r.jsx)(s.Text, {
                    tag: "span",
                    variant: "text-xxs/normal",
                    color: "currentColor",
                    children: m.intl.string(m.t["Knf/f/"])
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
                    children: m.intl.string(m.t.uFSTGq)
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
                    return (0, r.jsx)(p, {
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
                        children: m.intl.string(m.t["UKOtz+"])
                    })
                })
            })]
        })]
    })
}