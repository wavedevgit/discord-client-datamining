/** chunk id: 771004 params = (module,exports,require) **/
n.d(t, {
    A: () => v,
    h: () => h
});
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(934551),
    o = n(158954),
    c = n(827734),
    d = n(397927),
    u = n(981355),
    m = n(409626),
    x = n(305080),
    _ = n(936636),
    g = n(985018),
    f = n(728528),
    p = n(887448);

function h(e) {
    let {
        detectedGame: t,
        trackAction: n
    } = e, [i, x] = l.useState(t?.summaryLocalized != null), [h, v] = l.useState(!0), [A, j] = l.useState(!1), I = l.useRef(null), {
        width: b,
        height: C
    } = (0, u.A)();
    return (l.useEffect(() => {
        let e = I.current;
        null != e && j(e.scrollHeight - e.clientHeight > 1 || !h)
    }, [I, b, C, h]), null == t.summary) ? null : (0, a.jsxs)("div", {
        className: r()(f.fi, f.mX),
        children: [null != t.summaryLocalized && (0, a.jsxs)("div", {
            className: r()(f.nM, f.Lc),
            children: [(0, a.jsx)(s.PencilSparkleIcon, {
                color: c.A.colors.TEXT_DEFAULT,
                size: "xs"
            }), (0, a.jsx)(o.EYj, {
                variant: "text-xs/medium",
                color: "text-default",
                children: i ? g.intl.format(g.t.aZ2iIp, {
                    onShowOriginal: () => x(!1)
                }) : g.intl.format(g.t["/2ylF4"], {
                    onShowTranslated: () => x(!0)
                })
            })]
        }), (0, a.jsx)(o.EYj, {
            ref: I,
            lineClamp: h ? 8 : void 0,
            variant: "text-sm/normal",
            children: i ? t.summaryLocalized : t.summary
        }), A && (0, a.jsx)(d.DUT, {
            className: f.vk,
            onClick: () => {
                n(h ? m.Ws.ShowMore : m.Ws.ShowLess), v(!h)
            },
            children: (0, a.jsx)(o.EYj, {
                variant: "text-sm/semibold",
                children: h ? g.intl.string(g.t.lBeKY2) : g.intl.string(g.t["6MwJo/"])
            })
        }), (0, a.jsx)(_.A, {
            className: p.B,
            detectedGame: t
        })]
    })
}

function v(e) {
    let {
        detectedGame: t,
        trackAction: n
    } = e, [i, s] = l.useState(!0), [c, _] = l.useState(!1), p = l.useRef(null), {
        width: h,
        height: v
    } = (0, u.A)(), {
        isTwoColumn: A
    } = (0, x.c)();
    return (l.useEffect(() => {
        let e = p.current;
        null != e && _(e.scrollHeight - e.clientHeight > 1 || !i)
    }, [p, h, v, i, A]), null == t.summary) ? null : (0, a.jsxs)("div", {
        className: r()(f.fi, f.mX),
        children: [(0, a.jsx)(o.EYj, {
            ref: p,
            lineClamp: i ? A ? 8 : 5 : void 0,
            variant: "text-sm/normal",
            children: t.summary
        }), c && (0, a.jsx)(d.DUT, {
            className: f.vk,
            onClick: () => {
                n(i ? m.Ws.ShowMore : m.Ws.ShowLess), s(!i)
            },
            children: (0, a.jsx)(o.EYj, {
                variant: "text-sm/semibold",
                children: i ? g.intl.string(g.t.lBeKY2) : g.intl.string(g.t["6MwJo/"])
            })
        })]
    })
}