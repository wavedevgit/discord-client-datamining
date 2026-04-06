/** chunk id: 989556 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var i = n(627968),
    s = n(503698),
    l = n.n(s),
    r = n(311907),
    a = n(421380),
    o = n(397927),
    d = n(81461),
    c = n(208039),
    u = n(975571),
    m = n(997509),
    g = n(555337),
    x = n(652215),
    h = n(583970),
    _ = n(985018),
    p = n(791633);
let A = function(e) {
    let {
        className: t,
        guildId: n,
        tag: s,
        badge: A,
        primaryColor: f,
        secondaryColor: j,
        isDisabled: N = !1
    } = e, E = (0, r.bG)([g.A], () => g.A.getProps().originalProfile), C = null != E && E.tag !== s;

    function b(e) {
        m.A.updateGuildProfile(n, {
            tag: e
        })
    }
    return (0, i.jsxs)("div", {
        className: t,
        children: [(0, i.jsx)(o.D0$, {
            label: _.intl.string(h.default["tN+8pD"]),
            children: e => (0, i.jsxs)("div", {
                className: p.I8,
                children: [(0, i.jsx)("div", {
                    className: p.sx,
                    children: (0, i.jsx)(a.ob, {
                        id: e.controlId,
                        className: p.U3,
                        inputClassName: l()(p.f1, "heading-sm/semibold"),
                        maxLength: 4,
                        autoFocus: !0,
                        placeholder: "WUMP",
                        prefixElement: (0, i.jsx)(d.J, {
                            badge: A,
                            width: 40,
                            height: 40,
                            primaryTintColor: f ?? void 0,
                            secondaryTintColor: j ?? void 0
                        }),
                        disabled: N,
                        value: s ?? "",
                        onChange: b
                    })
                }), (0, i.jsx)("div", {
                    className: p.e7,
                    children: (0, i.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: _.intl.string(h.default.CrHXHt)
                    })
                })]
            })
        }), C && (0, i.jsx)(c.A, {
            className: p.O2,
            children: (0, i.jsx)(o.Text, {
                variant: "text-xs/medium",
                children: _.intl.format(h.default["4ZKDXq"], {
                    articleUrl: u.A.getArticleURL(x.MVz.SERVER_TAGS)
                })
            })
        })]
    })
}