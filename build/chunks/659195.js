/** chunk id: 659195 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    l = n(64700),
    a = n(417597),
    s = n(397927),
    r = n(58149),
    o = n(734057),
    c = n(147036),
    d = n(957565),
    u = n(975571),
    h = n(36491),
    m = n(209100),
    A = n(652215),
    g = n(985018),
    _ = n(788780);

function p(e) {
    let {
        threadId: t
    } = e, n = (0, a.bG)([o.A], () => o.A.getChannel(t)), p = (0, a.bG)([o.A], () => o.A.getChannel(n?.parent_id)), f = l.useCallback(() => {
        null != n && null != p && ((0, r.zV)(A.HAw.MEDIA_POST_SHARE_PROMPT_CLICKED, {
            media_post_id: n.id
        }), (0, d.C)((0, c.af)(n, p)))
    }, [n, p]);
    return (0, i.jsxs)("div", {
        className: _.BQ,
        children: [(0, i.jsx)(m.A, {}), (0, i.jsxs)("div", {
            className: _.BB,
            children: [(0, i.jsx)(s.Text, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: g.intl.string(g.t["5uAO7d"])
            }), (0, i.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: g.intl.format(g.t.WnfPV3, {
                    helpArticleUrl: u.A.getCreatorSupportArticleURL(A.MVz.MEDIA_CHANNEL)
                })
            }), (0, i.jsx)(s.hKd, {
                size: 4
            }), (0, i.jsx)(s.Button, {
                text: g.intl.string(g.t.C5UQC9),
                variant: "primary",
                icon: s.qYV,
                onClick: f
            })]
        }), (0, i.jsx)(s.DUT, {
            className: _.b,
            onClick: () => {
                (0, h.sF)(t)
            },
            "aria-label": g.intl.string(g.t["0+xZH0"]),
            children: (0, i.jsx)(s.PGe, {
                color: "currentColor",
                size: "xs"
            })
        })]
    })
}