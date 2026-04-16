/** chunk id: 450382 params = (module,exports,require) **/
t.d(i, {
    A: () => A
});
var l = t(627968),
    s = t(64700),
    n = t(991660),
    a = t(311907),
    r = t(397927),
    o = t(565645),
    d = t(59520),
    c = t(997590),
    u = t(954571),
    m = t(475720),
    _ = t(652215),
    h = t(985018),
    x = t(963120);

function g(e) {
    let {
        categoryIds: i
    } = e, t = (0, a.yK)([c.A], () => i.map(e => c.A.getCategoryName(e)));
    return (0, l.jsxs)("div", {
        className: x.Ff,
        children: [(0, l.jsx)(r.Heading, {
            className: x.Uo,
            variant: "heading-sm/medium",
            color: "text-default",
            children: h.intl.string(h.t.ffgJrs)
        }), (0, l.jsx)(r.Text, {
            className: x._O,
            variant: "text-sm/normal",
            color: "text-muted",
            children: (0, l.jsx)("span", {
                children: t.join(", ")
            })
        })]
    })
}

function p(e) {
    let {
        discoveryGuild: i,
        invite: t
    } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [i?.reasons_to_join != null && i.reasons_to_join.length > 0 && (0, l.jsx)(r.BJc, {
            direction: "vertical",
            gap: 8,
            className: x.$s,
            children: i.reasons_to_join.map((e, i) => (0, l.jsxs)(r.BJc, {
                direction: "horizontal",
                gap: 8,
                children: [(0, l.jsx)(o.A, {
                    className: x.E2,
                    size: "reaction",
                    emojiId: e.emoji_id,
                    emojiName: e.emoji_name
                }), (0, l.jsx)(r.Text, {
                    tag: "span",
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: e.reason
                })]
            }, i))
        }), i?.about != null && "" !== i.about && (0, l.jsxs)("div", {
            className: x.lu,
            id: "invite-about-section",
            children: [(0, l.jsx)(r.Text, {
                variant: "text-xs/medium",
                color: "text-subtle",
                children: h.intl.string(h.t.xcsPye)
            }), (0, l.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: i.about
            })]
        }), null != i && (0, l.jsxs)("div", {
            className: x.xw,
            children: [null != i.social_links && i.social_links.length > 0 && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(r.cGx, {}), (0, l.jsxs)("div", {
                    className: x.Ff,
                    children: [(0, l.jsx)(r.Heading, {
                        className: x.Uo,
                        variant: "heading-sm/medium",
                        color: "text-default",
                        children: h.intl.string(h.t.jGVzY5)
                    }), (0, l.jsx)(r.Text, {
                        className: x.qv,
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: i.social_links.map(e => (0, l.jsx)(m.A, {
                            url: e,
                            invite: t
                        }, e))
                    })]
                })]
            }), null != i.category_ids && i.category_ids.length > 0 && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(r.cGx, {}), (0, l.jsx)(g, {
                    categoryIds: i.category_ids
                })]
            })]
        })]
    })
}

function A(e) {
    let {
        invite: i,
        guild: t,
        discoveryGuild: a,
        scrollableSectionClassName: o,
        expanded: c,
        setExpanded: m
    } = e, g = null != m, A = a?.about != null && "" !== a.about || a?.reasons_to_join != null && a.reasons_to_join.length > 0, E = s.useCallback((e, i) => {
        u.default.track(_.HAw.INVITE_ACCEPT_DETAILS_VIEWED, {
            guild_id: i,
            invite_code: e,
            action: "scrolled"
        })
    }, []), j = (0, d.I)(E, 3e3, [i.code, t.id], {
        trailing: !1
    }), v = s.useCallback(() => {
        j(i.code, t.id)
    }, [i.code, t.id, j]);
    return A ? (0, l.jsx)(n.A, {
        className: o,
        gradientClassName: x.wH,
        onScroll: v,
        children: (0, l.jsxs)("div", {
            className: x.Bn,
            children: [null != t.description && "" !== t.description && (0, l.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: t.description
            }), !c && g && (0, l.jsxs)(r.BJc, {
                direction: "horizontal",
                gap: 4,
                className: x.qh,
                children: [(0, l.jsx)(r.QWc, {
                    text: h.intl.string(h.t["k+2jmZ"]),
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
                className: x.y,
                "data-expanded": c || !g,
                "aria-hidden": g && !c,
                children: (0, l.jsxs)("div", {
                    className: x.Cz,
                    children: [(0, l.jsx)(p, {
                        discoveryGuild: a,
                        invite: i
                    }), c && g && (0, l.jsxs)(r.BJc, {
                        direction: "horizontal",
                        gap: 4,
                        className: x.qh,
                        children: [(0, l.jsx)(r.QWc, {
                            text: h.intl.string(h.t["3G783D"]),
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
        className: o,
        children: (0, l.jsx)("div", {
            className: x.Bn,
            children: null != t.description && "" !== t.description && (0, l.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: t.description
            })
        })
    })
}