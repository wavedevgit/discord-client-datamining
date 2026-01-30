/** chunk id: 489253, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(228524), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(172218),
    a = n(397927),
    s = n(486020),
    o = n(82293),
    c = n(412461),
    d = n(273423),
    u = n(867333),
    p = n(973172),
    h = n(652215),
    m = n(985018),
    g = n(265005);

function _(e) {
    let {
        applicationId: t,
        similarApplications: n,
        onSelectApplication: a,
        similarLoadId: s
    } = e, o = function(e) {
        let {
            applicationId: t,
            similarAppIds: n
        } = e, [r, a] = l.useState(), s = (0, i.K)(e => {
            e && a(t)
        });
        return l.useEffect(() => {
            r === t && (0, c.TR)(h.HAw.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
                application_id: t,
                suggested_application_ids: n
            })
        }, [r, t, n]), s
    }({
        applicationId: t,
        similarAppIds: l.useMemo(() => n.map(e => e.id), [n])
    });
    return (0, r.jsx)("div", {
        className: g.hQ,
        ref: o,
        children: n.map((e, n) => (0, r.jsx)(b, {
            applicationId: t,
            similarApplication: e,
            onSelectApplication: a,
            similarLoadId: s,
            position: n
        }, e.id))
    })
}

function b(e) {
    var t, n, i;
    let {
        applicationId: o,
        similarApplication: u,
        onSelectApplication: m,
        position: _,
        similarLoadId: b
    } = e, f = (0, p.A)({
        application: u
    }), x = null == (n = u.categories) ? void 0 : n[0], v = l.useMemo(() => s.Ay.getApplicationIconURL({
        id: u.id,
        icon: u.icon,
        size: 48
    }), [u]), j = l.useCallback(() => {
        (0, c.TR)(h.HAw.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
            current_page: "product",
            application_id: o,
            suggested_application_id: u.id,
            position: _,
            load_id: b,
            shown_mutual_guilds_count: f.length
        }), m(u.id)
    }, [m, u.id, o, f.length, b, _]);
    return (0, r.jsxs)(a.DUT, {
        onClick: j,
        className: g.vU,
        children: [(0, r.jsxs)("div", {
            className: g.nT,
            children: [(0, r.jsx)("img", {
                src: v,
                alt: "",
                className: g.my,
                height: 48,
                width: 48
            }), (0, r.jsxs)("div", {
                className: g.gn,
                children: [(0, r.jsx)("div", {
                    style: {
                        flex: 1,
                        minWidth: 0,
                        overflow: "hidden"
                    },
                    children: (0, r.jsx)(a.Heading, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        className: g.JB,
                        children: u.name
                    })
                }), null != x ? (0, r.jsx)(a.Text, {
                    className: g.m4,
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: x.name
                }) : null]
            })]
        }), (0, r.jsx)(a.Text, {
            className: g.i3,
            variant: "text-sm/medium",
            color: "text-default",
            lineClamp: 2,
            children: null != (t = null == (i = u.directory_entry) ? void 0 : i.short_description) ? t : u.description
        }), (0, r.jsx)(d.A, {
            application: u,
            textVariant: "text-xs/medium",
            mutualGuilds: f,
            mutualGuildShownMax: 3,
            guildIconSize: d.I.SMALL,
            compact: !0
        })]
    })
}
let f = function(e) {
    let {
        applicationId: t,
        fetchState: n,
        similarApplications: l,
        onSelectApplication: i,
        similarLoadId: s
    } = e;
    return n !== o.e.FETCHING && (null == l || 0 === l.length) ? null : (0, r.jsxs)("div", {
        className: g.hd,
        children: [(0, r.jsx)("div", {
            className: g.yF
        }), (0, r.jsx)(a.Heading, {
            variant: "heading-sm/semibold",
            color: "text-strong",
            className: g.bV,
            children: m.intl.string(m.t.E8wCnk)
        }), (0, r.jsx)(u.A, {
            loading: n === o.e.FETCHING,
            children: null != l ? (0, r.jsx)(_, {
                applicationId: t,
                similarApplications: l,
                onSelectApplication: i,
                similarLoadId: s
            }) : null
        })]
    })
}