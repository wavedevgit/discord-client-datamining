/** Chunk was on 41727 **/
/** chunk id: 455067, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    s = n(263063),
    a = n(513461),
    o = n(654265),
    c = n(561446),
    u = n(287809),
    d = n(314307),
    p = n(985018),
    h = n(958404);

function f(e) {
    var t;
    let {
        joinRequest: n,
        guild: o
    } = e, c = (0, l.bG)([u.default], () => u.default.getUser(n.userId));
    return (0, r.jsxs)("div", {
        className: h.I8,
        children: [(0, r.jsxs)("div", {
            className: h.Ov,
            children: [null != o && (0, r.jsxs)("div", {
                className: h.yB,
                children: [(0, r.jsx)(s.A, {
                    guild: o,
                    active: !0,
                    size: s.A.Sizes.SMOL,
                    className: h.$f
                }), (0, r.jsx)(i.Heading, {
                    variant: "heading-sm/semibold",
                    color: "text-strong",
                    children: o.name
                })]
            }), null != c && (0, r.jsx)(i.Heading, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                children: p.intl.format(p.t.jDV3i6, {
                    username: c.globalName
                })
            })]
        }), null == (t = n.formResponses) ? void 0 : t.filter(e => e.field_type !== a.rX.TERMS).map(e => {
            let t = e.field_type === a.rX.MULTIPLE_CHOICE && null != e.response ? e.choices[e.response] : e.response;
            return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("hr", {
                    className: h.g2
                }), (0, r.jsxs)("div", {
                    className: h.fs,
                    children: [(0, r.jsx)(i.Text, {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: e.label
                    }), (0, r.jsx)(i.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: t
                    })]
                })]
            })
        })]
    })
}

function g(e) {
    let {
        channel: t
    } = e, {
        loading: n,
        joinRequest: l,
        joinRequestGuild: s
    } = (0, o.A)(t.id);
    return (0, r.jsx)(d.Ay, {
        channelId: t.id,
        className: h.kL,
        children: null != l && null != l.formResponses ? (0, r.jsxs)("div", {
            className: h.KJ,
            children: [(0, r.jsx)("div", {
                children: (0, r.jsx)(f, {
                    guild: s,
                    joinRequest: l
                })
            }), (0, r.jsx)(c.A, {
                channelId: t.id,
                showProfile: !0
            })]
        }) : n ? (0, r.jsx)(i.y$y, {}) : null
    })
}