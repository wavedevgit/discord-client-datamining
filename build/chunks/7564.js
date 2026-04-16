/** chunk id: 7564 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(397927),
    o = n(975807),
    u = n(212031),
    c = n(975571),
    d = n(228093),
    h = n(652215),
    p = n(985018),
    _ = n(180131);

function m(e) {
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
                label: p.intl.string(p.t.LRmNAl),
                action: () => (0, u.j)(!0)
            }), (0, r.jsx)(l.Drp, {
                id: "acknowledgements",
                label: p.intl.string(p.t["0nUKy3"]),
                action: () => (0, o.A)(h.X7G.ACKNOWLEDGEMENTS)
            }), (0, r.jsx)(l.Drp, {
                id: "support",
                label: p.intl.string(p.t["Yl/Riu"]),
                action: () => (0, o.A)(c.C)
            })]
        })
    })
}

function f() {
    let e = i.useRef(null);
    return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(d.A, {}), (0, r.jsxs)("div", {
            className: _.yJ,
            children: [(0, r.jsx)(l.MzZ, {
                href: h.X7G.PRIVACY,
                children: (0, r.jsx)(l.Text, {
                    tag: "span",
                    variant: "text-xxs/normal",
                    color: "currentColor",
                    children: p.intl.string(p.t["Knf/f/"])
                })
            }), (0, r.jsx)("span", {
                className: _.xE,
                "aria-hidden": "true",
                children: "•"
            }), (0, r.jsx)(l.MzZ, {
                href: h.X7G.TERMS,
                children: (0, r.jsx)(l.Text, {
                    tag: "span",
                    variant: "text-xxs/normal",
                    color: "currentColor",
                    children: p.intl.string(p.t.uFSTGq)
                })
            }), (0, r.jsx)("span", {
                className: _.xE,
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
                    return (0, r.jsx)(m, {
                        onClose: t
                    })
                },
                children: (t, n) => (0, r.jsx)(l.MzZ, {
                    ...t,
                    ref: e,
                    useDefaultUnderlineStyles: !1,
                    className: s()(_.Mj, {
                        [_.vu]: n.isShown
                    }),
                    children: (0, r.jsx)(l.Text, {
                        tag: "span",
                        variant: "text-xxs/normal",
                        color: "currentColor",
                        children: p.intl.string(p.t["UKOtz+"])
                    })
                })
            })]
        })]
    })
}