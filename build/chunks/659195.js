/** chunk id: 659195 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968),
    l = n(64700),
    s = n(417597),
    a = n(397927),
    r = n(58149),
    o = n(734057),
    c = n(147036),
    d = n(957565),
    u = n(975571),
    h = n(36491),
    m = n(209100),
    A = n(652215),
    g = n(985018),
    p = n(104741);

function f(e) {
    let {
        threadId: t
    } = e, n = (0, s.bG)([o.A], () => o.A.getChannel(t)), f = (0, s.bG)([o.A], () => o.A.getChannel(n?.parent_id)), _ = l.useCallback(() => {
        null != n && null != f && ((0, r.zV)(A.HAw.MEDIA_POST_SHARE_PROMPT_CLICKED, {
            media_post_id: n.id
        }), (0, d.C)((0, c.af)(n, f)))
    }, [n, f]);
    return (0, i.jsxs)("div", {
        className: p.BQ,
        children: [(0, i.jsx)(m.A, {}), (0, i.jsxs)("div", {
            className: p.BB,
            children: [(0, i.jsx)(a.Text, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: g.intl.string(g.t["5uAO7d"])
            }), (0, i.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: g.intl.format(g.t.WnfPV3, {
                    helpArticleUrl: u.A.getCreatorSupportArticleURL(A.MVz.MEDIA_CHANNEL)
                })
            }), (0, i.jsx)(a.hKd, {
                size: 4
            }), (0, i.jsx)(a.Button, {
                text: g.intl.string(g.t.C5UQC9),
                variant: "primary",
                icon: a.qYV,
                onClick: _
            })]
        }), (0, i.jsx)(a.DUT, {
            className: p.b,
            onClick: () => {
                (0, h.sF)(t)
            },
            "aria-label": g.intl.string(g.t["0+xZH0"]),
            children: (0, i.jsx)(a.PGe, {
                color: "currentColor",
                size: "xs"
            })
        })]
    })
}