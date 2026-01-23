/** Chunk was on 97492 **/
/** chunk id: 659195, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var r = n(627968),
    l = n(64700),
    i = n(417597),
    s = n(397927),
    a = n(58149),
    o = n(734057),
    c = n(147036),
    u = n(957565),
    d = n(975571),
    p = n(36491),
    h = n(209100),
    f = n(652215),
    g = n(985018),
    m = n(179783);

function b(e) {
    let {
        threadId: t
    } = e, n = (0, i.bG)([o.A], () => o.A.getChannel(t)), b = (0, i.bG)([o.A], () => o.A.getChannel(null == n ? void 0 : n.parent_id)), A = l.useCallback(() => {
        null != n && null != b && ((0, a.zV)(f.HAw.MEDIA_POST_SHARE_PROMPT_CLICKED, {
            media_post_id: n.id
        }), (0, u.C)((0, c.af)(n, b)))
    }, [n, b]);
    return (0, r.jsxs)("div", {
        className: m.BQ,
        children: [(0, r.jsx)(h.A, {}), (0, r.jsxs)("div", {
            className: m.BB,
            children: [(0, r.jsx)(s.Text, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: g.intl.string(g.t["5uAO7d"])
            }), (0, r.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                children: g.intl.format(g.t.WnfPV3, {
                    helpArticleUrl: d.A.getCreatorSupportArticleURL(f.MVz.MEDIA_CHANNEL)
                })
            }), (0, r.jsx)(s.hKd, {
                size: 4
            }), (0, r.jsx)(s.Button, {
                text: g.intl.string(g.t.C5UQC9),
                variant: "primary",
                icon: s.qYV,
                onClick: A
            })]
        }), (0, r.jsx)(s.DUT, {
            className: m.b,
            onClick: () => {
                (0, p.sF)(t)
            },
            "aria-label": g.intl.string(g.t["0+xZH0"]),
            children: (0, r.jsx)(s.PGe, {
                color: "currentColor",
                size: "xs"
            })
        })]
    })
}