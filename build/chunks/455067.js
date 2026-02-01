/** chunk id: 455067, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    a = n(263063),
    s = n(513461),
    o = n(654265),
    c = n(561446),
    u = n(287809),
    d = n(314307),
    h = n(985018),
    p = n(958404);

function f(e) {
    var t;
    let {
        joinRequest: n,
        guild: o
    } = e, c = (0, r.bG)([u.default], () => u.default.getUser(n.userId));
    return (0, l.jsxs)("div", {
        className: p.I8,
        children: [(0, l.jsxs)("div", {
            className: p.Ov,
            children: [null != o && (0, l.jsxs)("div", {
                className: p.yB,
                children: [(0, l.jsx)(a.A, {
                    guild: o,
                    active: !0,
                    size: a.A.Sizes.SMOL,
                    className: p.$f
                }), (0, l.jsx)(i.Heading, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: o.name
                })]
            }), null != c && (0, l.jsx)(i.Heading, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: h.intl.format(h.t.jDV3i6, {
                    username: c.globalName
                })
            })]
        }), null == (t = n.formResponses) ? void 0 : t.filter(e => e.field_type !== s.rX.TERMS).map(e => {
            let t = e.field_type === s.rX.MULTIPLE_CHOICE && null != e.response ? e.choices[e.response] : e.response;
            return (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("hr", {
                    className: p.g2
                }), (0, l.jsxs)("div", {
                    className: p.fs,
                    children: [(0, l.jsx)(i.Text, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: e.label
                    }), (0, l.jsx)(i.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: t
                    })]
                })]
            })
        })]
    })
}

function m(e) {
    let {
        channel: t
    } = e, {
        loading: n,
        joinRequest: r,
        joinRequestGuild: a
    } = (0, o.A)(t.id);
    return (0, l.jsx)(d.Ay, {
        channelId: t.id,
        className: p.kL,
        children: null != r && null != r.formResponses ? (0, l.jsxs)("div", {
            className: p.KJ,
            children: [(0, l.jsx)("div", {
                children: (0, l.jsx)(f, {
                    guild: a,
                    joinRequest: r
                })
            }), (0, l.jsx)(c.A, {
                channelId: t.id,
                showProfile: !0
            })]
        }) : n ? (0, l.jsx)(i.y$y, {}) : null
    })
}