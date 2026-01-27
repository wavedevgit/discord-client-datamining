/** Chunk was on 39048 **/
/** chunk id: 989556, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x
});
var r = n(627968),
    i = n(503698),
    l = n.n(i),
    s = n(311907),
    a = n(421380),
    o = n(397927),
    c = n(81461),
    d = n(801264),
    u = n(975571),
    g = n(997509),
    m = n(555337),
    p = n(652215),
    f = n(583970),
    h = n(985018),
    b = n(175820);
let x = function(e) {
    let {
        className: t,
        guildId: n,
        tag: i,
        badge: x,
        primaryColor: j,
        secondaryColor: _,
        isDisabled: O = !1
    } = e, v = (0, s.bG)([m.A], () => m.A.getProps().originalProfile), y = null != v && v.tag !== i;

    function A(e) {
        g.A.updateGuildProfile(n, {
            tag: e
        })
    }
    return (0, r.jsxs)("div", {
        className: t,
        children: [(0, r.jsx)(o.D0$, {
            label: h.intl.string(f.default["tN+8pD"]),
            children: e => (0, r.jsxs)("div", {
                className: b.I8,
                children: [(0, r.jsx)("div", {
                    className: b.sx,
                    children: (0, r.jsx)(a.ob, {
                        id: e.controlId,
                        className: b.U3,
                        inputClassName: l()(b.f1, "heading-sm/semibold"),
                        maxLength: 4,
                        autoFocus: !0,
                        placeholder: "WUMP",
                        prefixElement: (0, r.jsx)(c.J, {
                            badge: x,
                            width: 40,
                            height: 40,
                            primaryTintColor: j,
                            secondaryTintColor: _
                        }),
                        disabled: O,
                        value: null != i ? i : "",
                        onChange: A
                    })
                }), (0, r.jsx)("div", {
                    className: b.e7,
                    children: (0, r.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: h.intl.string(f.default.CrHXHt)
                    })
                })]
            })
        }), y && (0, r.jsx)(d.A, {
            className: b.O2,
            children: (0, r.jsx)(o.Text, {
                variant: "text-xs/medium",
                children: h.intl.format(f.default["4ZKDXq"], {
                    articleUrl: u.A.getArticleURL(p.MVz.SERVER_TAGS)
                })
            })
        })]
    })
}