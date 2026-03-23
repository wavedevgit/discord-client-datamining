/** chunk id: 162396 params = (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => p
});
var n = r(627968),
    a = r(64700),
    i = r(503698),
    l = r.n(i),
    s = r(397927),
    o = r(975807),
    c = r(212031),
    u = r(975571),
    d = r(809465),
    h = r(652215),
    f = r(985018),
    _ = r(535790);

function m(e) {
    let {
        onClose: t
    } = e;
    return (0, n.jsx)(s.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "settings-footer-more-menu",
        onClose: t,
        onSelect: () => {},
        "aria-label": "More options",
        children: (0, n.jsxs)(s.rXV, {
            children: [(0, n.jsx)(s.Drp, {
                id: "changelog",
                label: f.intl.string(f.t.LRmNAl),
                action: () => (0, c.j)(!0)
            }), (0, n.jsx)(s.Drp, {
                id: "acknowledgements",
                label: f.intl.string(f.t["0nUKy3"]),
                action: () => (0, o.A)(h.X7G.ACKNOWLEDGEMENTS)
            }), (0, n.jsx)(s.Drp, {
                id: "support",
                label: f.intl.string(f.t["Yl/Riu"]),
                action: () => (0, o.A)(u.C)
            })]
        })
    })
}

function p() {
    let e = a.useRef(null);
    return (0, n.jsxs)("div", {
        children: [(0, n.jsx)(d.A, {}), (0, n.jsxs)("div", {
            className: _.yJ,
            children: [(0, n.jsx)(s.MzZ, {
                href: h.X7G.PRIVACY,
                children: (0, n.jsx)(s.Text, {
                    tag: "span",
                    variant: "text-xxs/normal",
                    color: "currentColor",
                    children: f.intl.string(f.t["Knf/f/"])
                })
            }), (0, n.jsx)("span", {
                className: _.xE,
                "aria-hidden": "true",
                children: "•"
            }), (0, n.jsx)(s.MzZ, {
                href: h.X7G.TERMS,
                children: (0, n.jsx)(s.Text, {
                    tag: "span",
                    variant: "text-xxs/normal",
                    color: "currentColor",
                    children: f.intl.string(f.t.uFSTGq)
                })
            }), (0, n.jsx)("span", {
                className: _.xE,
                "aria-hidden": "true",
                children: "•"
            }), (0, n.jsx)(s.YNO, {
                targetElementRef: e,
                position: "top",
                align: "center",
                spacing: 0,
                animation: s.YNO.Animation.NONE,
                renderPopout: e => {
                    let {
                        closePopout: t
                    } = e;
                    return (0, n.jsx)(m, {
                        onClose: t
                    })
                },
                children: (t, r) => (0, n.jsx)(s.MzZ, {
                    ...t,
                    ref: e,
                    useDefaultUnderlineStyles: !1,
                    className: l()(_.Mj, {
                        [_.vu]: r.isShown
                    }),
                    children: (0, n.jsx)(s.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "currentColor",
                        children: f.intl.string(f.t["UKOtz+"])
                    })
                })
            })]
        })]
    })
}