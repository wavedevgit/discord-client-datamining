/** chunk id: 659195, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var l = n(627968),
    r = n(64700),
    i = n(417597),
    a = n(397927),
    s = n(58149),
    o = n(734057),
    c = n(147036),
    u = n(957565),
    d = n(975571),
    h = n(36491),
    p = n(209100),
    f = n(652215),
    m = n(985018),
    g = n(179783);

function A(e) {
    let {
        threadId: t
    } = e, n = (0, i.bG)([o.A], () => o.A.getChannel(t)), A = (0, i.bG)([o.A], () => o.A.getChannel(null == n ? void 0 : n.parent_id)), b = r.useCallback(() => {
        null != n && null != A && ((0, s.zV)(f.HAw.MEDIA_POST_SHARE_PROMPT_CLICKED, {
            media_post_id: n.id
        }), (0, u.C)((0, c.af)(n, A)))
    }, [n, A]);
    return (0, l.jsxs)("div", {
        className: g.BQ,
        children: [(0, l.jsx)(p.A, {}), (0, l.jsxs)("div", {
            className: g.BB,
            children: [(0, l.jsx)(a.Text, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: m.intl.string(m.t["5uAO7d"])
            }), (0, l.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: m.intl.format(m.t.WnfPV3, {
                    helpArticleUrl: d.A.getCreatorSupportArticleURL(f.MVz.MEDIA_CHANNEL)
                })
            }), (0, l.jsx)(a.hKd, {
                size: 4
            }), (0, l.jsx)(a.Button, {
                text: m.intl.string(m.t.C5UQC9),
                variant: "primary",
                icon: a.qYV,
                onClick: b
            })]
        }), (0, l.jsx)(a.DUT, {
            className: g.b,
            onClick: () => {
                (0, h.sF)(t)
            },
            "aria-label": m.intl.string(m.t["0+xZH0"]),
            children: (0, l.jsx)(a.PGe, {
                color: "currentColor",
                size: "xs"
            })
        })]
    })
}