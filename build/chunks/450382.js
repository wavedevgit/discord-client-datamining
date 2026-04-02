/** chunk id: 450382 params = (module,exports,require) **/
i.d(t, {
    A: () => A
});
var l = i(627968),
    n = i(64700),
    a = i(991660),
    s = i(311907),
    r = i(397927),
    d = i(565645),
    o = i(59520),
    c = i(997590),
    u = i(954571),
    m = i(475720),
    x = i(652215),
    g = i(985018),
    h = i(639325);

function _(e) {
    let {
        categoryIds: t
    } = e, i = (0, s.yK)([c.A], () => t.map(e => c.A.getCategoryName(e)));
    return (0, l.jsxs)("div", {
        className: h.Ff,
        children: [(0, l.jsx)(r.Heading, {
            className: h.Uo,
            variant: "heading-sm/medium",
            color: "text-default",
            children: g.intl.string(g.t.ffgJrs)
        }), (0, l.jsx)(r.Text, {
            className: h._O,
            variant: "text-sm/normal",
            color: "text-muted",
            children: (0, l.jsx)("span", {
                children: i.join(", ")
            })
        })]
    })
}

function p(e) {
    let {
        discoveryGuild: t,
        invite: i
    } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [t?.reasons_to_join != null && t.reasons_to_join.length > 0 && (0, l.jsx)(r.BJc, {
            direction: "vertical",
            gap: 8,
            className: h.$s,
            children: t.reasons_to_join.map((e, t) => (0, l.jsxs)(r.BJc, {
                direction: "horizontal",
                gap: 8,
                children: [(0, l.jsx)(d.A, {
                    className: h.E2,
                    size: "reaction",
                    emojiId: e.emoji_id,
                    emojiName: e.emoji_name
                }), (0, l.jsx)(r.Text, {
                    tag: "span",
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: e.reason
                })]
            }, t))
        }), t?.about != null && "" !== t.about && (0, l.jsxs)("div", {
            className: h.lu,
            id: "invite-about-section",
            children: [(0, l.jsx)(r.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: g.intl.string(g.t.xcsPye)
            }), (0, l.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: t.about
            })]
        }), null != t && (0, l.jsxs)("div", {
            className: h.xw,
            children: [null != t.social_links && t.social_links.length > 0 && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(r.cGx, {}), (0, l.jsxs)("div", {
                    className: h.Ff,
                    children: [(0, l.jsx)(r.Heading, {
                        className: h.Uo,
                        variant: "heading-sm/medium",
                        color: "text-default",
                        children: g.intl.string(g.t.jGVzY5)
                    }), (0, l.jsx)(r.Text, {
                        className: h.qv,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: t.social_links.map(e => (0, l.jsx)(m.A, {
                            url: e,
                            invite: i
                        }, e))
                    })]
                })]
            }), null != t.category_ids && t.category_ids.length > 0 && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(r.cGx, {}), (0, l.jsx)(_, {
                    categoryIds: t.category_ids
                })]
            })]
        })]
    })
}

function A(e) {
    let {
        invite: t,
        guild: i,
        discoveryGuild: s,
        scrollableSectionClassName: d,
        expanded: c,
        setExpanded: m
    } = e, _ = null != m, A = s?.about != null && "" !== s.about || s?.reasons_to_join != null && s.reasons_to_join.length > 0, j = n.useCallback((e, t) => {
        u.default.track(x.HAw.INVITE_ACCEPT_DETAILS_VIEWED, {
            guild_id: t,
            invite_code: e,
            action: "scrolled"
        })
    }, []), E = (0, o.I)(j, 3e3, [t.code, i.id], {
        trailing: !1
    }), v = n.useCallback(() => {
        E(t.code, i.id)
    }, [t.code, i.id, E]);
    return A ? (0, l.jsx)(a.A, {
        className: d,
        gradientClassName: h.wH,
        onScroll: v,
        children: (0, l.jsxs)("div", {
            className: h.Bn,
            children: [null != i.description && "" !== i.description && (0, l.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: i.description
            }), !c && _ && (0, l.jsxs)(r.BJc, {
                direction: "horizontal",
                gap: 4,
                className: h.qh,
                children: [(0, l.jsx)(r.QWc, {
                    text: g.intl.string(g.t["k+2jmZ"]),
                    onClick: () => m?.(!0),
                    "aria-expanded": c,
                    "aria-controls": "invite-about-section",
                    size: "sm",
                    variant: "secondary",
                    textVariant: "text-xs/medium"
                }), (0, l.jsx)(r.abt, {
                    size: "xs",
                    color: r.LU0.colors.ICON_DEFAULT
                })]
            }), (0, l.jsx)("div", {
                className: h.y,
                "data-expanded": c || !_,
                "aria-hidden": _ && !c,
                children: (0, l.jsxs)("div", {
                    className: h.Cz,
                    children: [(0, l.jsx)(p, {
                        discoveryGuild: s,
                        invite: t
                    }), c && _ && (0, l.jsxs)(r.BJc, {
                        direction: "horizontal",
                        gap: 4,
                        className: h.qh,
                        children: [(0, l.jsx)(r.QWc, {
                            text: g.intl.string(g.t["3G783D"]),
                            onClick: () => m?.(!1),
                            "aria-expanded": c,
                            "aria-controls": "invite-about-section",
                            size: "sm",
                            variant: "secondary",
                            textVariant: "text-xs/medium"
                        }), (0, l.jsx)(r.tN5, {
                            size: "xs",
                            color: r.LU0.colors.ICON_DEFAULT
                        })]
                    })]
                })
            })]
        })
    }) : (0, l.jsx)("div", {
        className: d,
        children: (0, l.jsx)("div", {
            className: h.Bn,
            children: null != i.description && "" !== i.description && (0, l.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: i.description
            })
        })
    })
}