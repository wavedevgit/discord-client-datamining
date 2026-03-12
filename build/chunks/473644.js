/** chunk id: 473644 params = (module,exports,require) **/
i.d(t, {
    A: () => A
});
var l = i(627968),
    n = i(64700),
    a = i(311907),
    s = i(397927),
    r = i(854378),
    d = i(997590),
    c = i(714991),
    o = i(107123),
    u = i(773669),
    m = i(473145),
    x = i(661191),
    _ = i(652215),
    h = i(985018),
    g = i(306989);

function A(e) {
    let {
        guild: t,
        invite: i,
        discoveryGuild: A
    } = e, E = i.approximate_presence_count ?? 0, p = i.approximate_member_count ?? 0, j = (0, a.bG)([u.default], () => u.default.locale), I = (0, o.P)(x.default.extractTimestamp(t.id), j), v = (0, a.bG)([d.A], () => A?.primary_category_id != null ? d.A.getCategoryName(A.primary_category_id) : null), T = t.premiumTier ?? _.TVA.NONE, f = T !== _.TVA.NONE, N = t.preferredLocale ?? A?.preferred_locale ?? null, C = n.useMemo(() => {
        if ("en-US" === N) return h.intl.string(h.t.LQLMGP);
        let e = (0, h.getAvailableLocales)().find(e => e.value === N);
        return null != e ? h.intl.string(e.localizedName) : N
    }, [N]), y = null != N && "" !== N, D = null != v, S = y || D || f, L = D || f;
    return (0, l.jsxs)("div", {
        className: g.hn,
        children: [(0, l.jsxs)("div", {
            className: g.S7,
            children: [(0, l.jsx)(s.Text, {
                tag: "span",
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: t.name
            }), (0, l.jsx)(c.A, {
                guild: t,
                tooltipPosition: "right"
            })]
        }), (0, l.jsx)(r.R1, {
            className: g.He,
            online: E,
            total: p,
            renderText: e => (0, l.jsx)(s.Text, {
                tag: "span",
                variant: "text-sm/normal",
                color: "text-subtle",
                ...e
            })
        }), (0, l.jsxs)("div", {
            className: g.ov,
            children: [null != I && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(s.Text, {
                    tag: "span",
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: h.intl.format(h.t.zb2Q56, {
                        createdAtDate: I
                    })
                }), S && (0, l.jsx)("span", {
                    className: g.LO,
                    "aria-hidden": !0
                })]
            }), y && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(s.Text, {
                    tag: "span",
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: C
                }), L && (0, l.jsx)("span", {
                    className: g.LO,
                    "aria-hidden": !0
                })]
            }), D && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(s.Text, {
                    tag: "span",
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: v
                }), f && (0, l.jsx)("span", {
                    className: g.LO,
                    "aria-hidden": !0
                })]
            }), f && (0, l.jsx)(s.Text, {
                tag: "span",
                variant: "text-sm/normal",
                color: "text-subtle",
                children: (0, m.gb)(T)
            })]
        })]
    })
}