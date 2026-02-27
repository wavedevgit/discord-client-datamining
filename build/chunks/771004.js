/** chunk id: 771004, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => v,
    h: () => j
});
var n = i(627968),
    l = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(934551),
    c = i(158954),
    o = i(827734),
    d = i(397927),
    u = i(981355),
    m = i(409626),
    x = i(936636),
    g = i(985018),
    h = i(851822),
    f = i(812254);

function j(e) {
    let {
        detectedGame: t,
        trackAction: i
    } = e, [a, j] = l.useState(t?.summaryLocalized != null), [v, p] = l.useState(!0), [A, I] = l.useState(!1), _ = l.useRef(null), {
        width: N,
        height: E
    } = (0, u.A)();
    return (l.useEffect(() => {
        let e = _.current;
        null != e && I(e.scrollHeight - e.clientHeight > 1 || !v)
    }, [_, N, E, v]), null == t.summary) ? null : (0, n.jsxs)("div", {
        className: s()(h.fi, h.mX),
        children: [null != t.summaryLocalized && (0, n.jsxs)("div", {
            className: s()(h.nM, h.Lc),
            children: [(0, n.jsx)(r.PencilSparkleIcon, {
                color: o.A.colors.TEXT_DEFAULT,
                size: "xs"
            }), (0, n.jsx)(c.EYj, {
                variant: "text-xs/medium",
                color: "text-default",
                children: a ? g.intl.format(g.t.aZ2iIp, {
                    onShowOriginal: () => j(!1)
                }) : g.intl.format(g.t["/2ylF4"], {
                    onShowTranslated: () => j(!0)
                })
            })]
        }), (0, n.jsx)(c.EYj, {
            ref: _,
            lineClamp: v ? 8 : void 0,
            variant: "text-sm/normal",
            children: a ? t.summaryLocalized : t.summary
        }), A && (0, n.jsx)(d.DUT, {
            className: h.vk,
            onClick: () => {
                i(v ? m.Ws.ShowMore : m.Ws.ShowLess), p(!v)
            },
            children: (0, n.jsx)(c.EYj, {
                variant: "text-sm/semibold",
                children: v ? g.intl.string(g.t.lBeKY2) : g.intl.string(g.t["6MwJo/"])
            })
        }), (0, n.jsx)(x.A, {
            className: f.B,
            detectedGame: t
        })]
    })
}

function v(e) {
    let {
        detectedGame: t,
        trackAction: i
    } = e, [a, j] = l.useState(t?.summaryLocalized != null), [v, p] = l.useState(!0), [A, I] = l.useState(!1), _ = l.useRef(null), {
        width: N,
        height: E
    } = (0, u.A)();
    return (l.useEffect(() => {
        let e = _.current;
        null != e && I(e.scrollHeight - e.clientHeight > 1 || !v)
    }, [_, N, E, v]), null == t.summary) ? null : (0, n.jsxs)("div", {
        className: s()(h.fi, h.mX),
        children: [null != t.summaryLocalized && (0, n.jsxs)("div", {
            className: s()(h.nM, h.Lc),
            children: [(0, n.jsx)(r.PencilSparkleIcon, {
                color: o.A.colors.TEXT_DEFAULT,
                size: "xs"
            }), (0, n.jsx)(c.EYj, {
                variant: "text-xs/medium",
                color: "text-default",
                children: a ? g.intl.format(g.t.aZ2iIp, {
                    onShowOriginal: () => j(!1)
                }) : g.intl.format(g.t["/2ylF4"], {
                    onShowTranslated: () => j(!0)
                })
            })]
        }), (0, n.jsx)(c.EYj, {
            ref: _,
            lineClamp: v ? 8 : void 0,
            variant: "text-sm/normal",
            children: a ? t.summaryLocalized : t.summary
        }), A && (0, n.jsx)(d.DUT, {
            className: h.vk,
            onClick: () => {
                i(v ? m.Ws.ShowMore : m.Ws.ShowLess), p(!v)
            },
            children: (0, n.jsx)(c.EYj, {
                variant: "text-sm/semibold",
                children: v ? g.intl.string(g.t.lBeKY2) : g.intl.string(g.t["6MwJo/"])
            })
        }), (0, n.jsx)(x.A, {
            className: f.B,
            detectedGame: t
        })]
    })
}