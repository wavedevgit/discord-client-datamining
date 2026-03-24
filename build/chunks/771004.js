/** chunk id: 771004 params = (module,exports,require) **/
n.d(t, {
    A: () => v,
    h: () => p
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
    f = n(985018),
    g = n(851822),
    h = n(812254);

function p(e) {
    let {
        detectedGame: t,
        trackAction: n
    } = e, [i, x] = l.useState(t?.summaryLocalized != null), [p, v] = l.useState(!0), [A, j] = l.useState(!1), E = l.useRef(null), {
        width: I,
        height: C
    } = (0, u.A)();
    return (l.useEffect(() => {
        let e = E.current;
        null != e && j(e.scrollHeight - e.clientHeight > 1 || !p)
    }, [E, I, C, p]), null == t.summary) ? null : (0, a.jsxs)("div", {
        className: r()(g.fi, g.mX),
        children: [null != t.summaryLocalized && (0, a.jsxs)("div", {
            className: r()(g.nM, g.Lc),
            children: [(0, a.jsx)(s.PencilSparkleIcon, {
                color: c.A.colors.TEXT_DEFAULT,
                size: "xs"
            }), (0, a.jsx)(o.EYj, {
                variant: "text-xs/medium",
                color: "text-default",
                children: i ? f.intl.format(f.t.aZ2iIp, {
                    onShowOriginal: () => x(!1)
                }) : f.intl.format(f.t["/2ylF4"], {
                    onShowTranslated: () => x(!0)
                })
            })]
        }), (0, a.jsx)(o.EYj, {
            ref: E,
            lineClamp: p ? 8 : void 0,
            variant: "text-sm/normal",
            children: i ? t.summaryLocalized : t.summary
        }), A && (0, a.jsx)(d.DUT, {
            className: g.vk,
            onClick: () => {
                n(p ? m.Ws.ShowMore : m.Ws.ShowLess), v(!p)
            },
            children: (0, a.jsx)(o.EYj, {
                variant: "text-sm/semibold",
                children: p ? f.intl.string(f.t.lBeKY2) : f.intl.string(f.t["6MwJo/"])
            })
        }), (0, a.jsx)(_.A, {
            className: h.B,
            detectedGame: t
        })]
    })
}

function v(e) {
    let {
        detectedGame: t,
        trackAction: n
    } = e, [i, s] = l.useState(!0), [c, _] = l.useState(!1), h = l.useRef(null), {
        width: p,
        height: v
    } = (0, u.A)(), {
        isTwoColumn: A
    } = (0, x.c)();
    return (l.useEffect(() => {
        let e = h.current;
        null != e && _(e.scrollHeight - e.clientHeight > 1 || !i)
    }, [h, p, v, i, A]), null == t.summary) ? null : (0, a.jsxs)("div", {
        className: r()(g.fi, g.mX),
        children: [(0, a.jsx)(o.EYj, {
            ref: h,
            lineClamp: i ? A ? 8 : 5 : void 0,
            variant: "text-sm/normal",
            children: t.summary
        }), c && (0, a.jsx)(d.DUT, {
            className: g.vk,
            onClick: () => {
                n(i ? m.Ws.ShowMore : m.Ws.ShowLess), s(!i)
            },
            children: (0, a.jsx)(o.EYj, {
                variant: "text-sm/semibold",
                children: i ? f.intl.string(f.t.lBeKY2) : f.intl.string(f.t["6MwJo/"])
            })
        })]
    })
}