/** chunk id: 162396 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(397927),
    o = n(975807),
    u = n(212031),
    c = n(975571),
    d = n(809465),
    f = n(652215),
    m = n(985018),
    g = n(535790);

function h(e) {
    let {
        onClose: t
    } = e;
    return (0, r.jsx)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "settings-footer-more-menu",
        onClose: t,
        onSelect: () => {},
        "aria-label": "More options",
        children: (0, r.jsxs)(l.rXV, {
            children: [(0, r.jsx)(l.Drp, {
                id: "changelog",
                label: m.intl.string(m.t.LRmNAl),
                action: () => (0, u.j)(!0)
            }), (0, r.jsx)(l.Drp, {
                id: "acknowledgements",
                label: m.intl.string(m.t["0nUKy3"]),
                action: () => (0, o.A)(f.X7G.ACKNOWLEDGEMENTS)
            }), (0, r.jsx)(l.Drp, {
                id: "support",
                label: m.intl.string(m.t["Yl/Riu"]),
                action: () => (0, o.A)(c.C)
            })]
        })
    })
}

function y() {
    let e = i.useRef(null);
    return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(d.A, {
            compact: !0
        }), (0, r.jsxs)("div", {
            className: g.yJ,
            children: [(0, r.jsx)(l.MzZ, {
                href: f.X7G.PRIVACY,
                children: (0, r.jsx)(l.Text, {
                    tag: "span",
                    variant: "text-xxs/normal",
                    color: "currentColor",
                    children: m.intl.string(m.t["Knf/f/"])
                })
            }), (0, r.jsx)("span", {
                className: g.xE,
                "aria-hidden": "true",
                children: "•"
            }), (0, r.jsx)(l.MzZ, {
                href: f.X7G.TERMS,
                children: (0, r.jsx)(l.Text, {
                    tag: "span",
                    variant: "text-xxs/normal",
                    color: "currentColor",
                    children: m.intl.string(m.t.uFSTGq)
                })
            }), (0, r.jsx)("span", {
                className: g.xE,
                "aria-hidden": "true",
                children: "•"
            }), (0, r.jsx)(l.YNO, {
                targetElementRef: e,
                position: "top",
                align: "center",
                spacing: 0,
                animation: l.YNO.Animation.NONE,
                renderPopout: e => {
                    let {
                        closePopout: t
                    } = e;
                    return (0, r.jsx)(h, {
                        onClose: t
                    })
                },
                children: (t, n) => (0, r.jsx)(l.MzZ, {
                    ...t,
                    ref: e,
                    useDefaultUnderlineStyles: !1,
                    className: s()(g.Mj, {
                        [g.vu]: n.isShown
                    }),
                    children: (0, r.jsx)(l.Text, {
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