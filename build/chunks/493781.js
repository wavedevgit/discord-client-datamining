/** Chunk was on 39048 **/
/** chunk id: 493781, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    G: () => h
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(435371),
    c = n(397927),
    d = n(576705),
    u = n(975571),
    g = n(894222),
    m = n(652215),
    p = n(985018),
    f = n(662413);

function h(e) {
    let {
        activeType: t,
        onTypePicked: n,
        guild: l
    } = e, h = l.features.has(m.GuildFeatures.COMMUNITY), b = (0, a.bG)([d.A], () => d.A.can(m.xBc.ADMINISTRATOR, l)), x = i.useMemo(() => {
        let e = t === g.J.DISCOVERABLE && !b,
            n = h && (t === g.J.DISCOVERABLE || b);
        return [{
            id: g.J.INVITE,
            title: p.intl.string(p.t["HQVS/L"]),
            body: p.intl.string(p.t.KzXzFa),
            icon: c.XAi,
            enabled: !e,
            ineligibleText: p.intl.string(p.t.LIZgwJ)
        }, {
            id: g.J.APPLY,
            title: p.intl.string(p.t.LrFEYW),
            body: p.intl.string(p.t.kJj2oG),
            icon: c.u6c,
            enabled: !e,
            ineligibleText: p.intl.string(p.t.LIZgwJ)
        }, {
            id: g.J.DISCOVERABLE,
            title: p.intl.string(p.t.lhOHL3),
            body: p.intl.string(p.t.pqQylS),
            icon: c.L_e,
            enabled: n,
            ineligibleText: h ? p.intl.string(p.t.iBpXPg) : p.intl.string(p.t["5TQ+eE"])
        }]
    }, [t, h, b]);
    return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(c.Heading, {
            color: "text-strong",
            variant: "text-md/semibold",
            children: p.intl.string(p.t["N+GnP2"])
        }), (0, r.jsx)(c.Text, {
            color: "text-subtle",
            variant: "text-sm/medium",
            className: f.G3,
            children: p.intl.format(p.t["Y/jYwu"], {
                helpdeskArticle: u.A.getArticleURL(m.MVz.MEMBER_APPLICATIONS)
            })
        }), (0, r.jsx)(c.VQ0, {
            selectedItem: t,
            onItemSelect: n,
            orientation: "horizontal",
            className: f.Hd,
            children: x.map(e => {
                let n = e.id === t;
                return (0, r.jsx)(c.VQ0.Item, {
                    id: e.id,
                    selectedItem: t,
                    disableItemStyles: !0,
                    className: f.dZ,
                    disabled: !e.enabled,
                    "aria-label": e.title,
                    children: (0, r.jsx)(o.m_, {
                        text: e.ineligibleText,
                        position: "bottom",
                        shouldShow: !e.enabled,
                        spacing: 16,
                        hideOnClick: !1,
                        children: (0, r.jsxs)("div", {
                            className: s()(f.jn, {
                                [f.vu]: n,
                                [f.A_]: !e.enabled
                            }),
                            children: [(0, r.jsx)(e.icon, {
                                size: "md",
                                color: n ? c.LU0.colors.INTERACTIVE_TEXT_ACTIVE : c.LU0.colors.INTERACTIVE_TEXT_DEFAULT
                            }), (0, r.jsx)(c.Text, {
                                tag: "strong",
                                color: n ? "interactive-text-active" : "interactive-text-default",
                                variant: "text-md/semibold",
                                children: e.title
                            }), (0, r.jsx)(c.Text, {
                                tag: "span",
                                color: n ? "interactive-text-active" : "interactive-text-default",
                                variant: "text-xs/medium",
                                children: e.body
                            })]
                        })
                    })
                }, e.id)
            })
        })]
    })
}