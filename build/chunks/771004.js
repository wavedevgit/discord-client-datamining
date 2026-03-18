/** chunk id: 771004 params = (module,exports,require) **/
n.d(t, {
    A: () => v,
    h: () => _
});
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(934551),
    c = n(158954),
    o = n(827734),
    d = n(397927),
    u = n(981355),
    m = n(409626),
    x = n(305080),
    h = n(936636),
    f = n(985018),
    g = n(851822),
    p = n(812254);

function _(e) {
    let {
        detectedGame: t,
        trackAction: n
    } = e, [i, x] = a.useState(t?.summaryLocalized != null), [_, v] = a.useState(!0), [j, A] = a.useState(!1), I = a.useRef(null), {
        width: E,
        height: N
    } = (0, u.A)();
    return (a.useEffect(() => {
        let e = I.current;
        null != e && A(e.scrollHeight - e.clientHeight > 1 || !_)
    }, [I, E, N, _]), null == t.summary) ? null : (0, l.jsxs)("div", {
        className: r()(g.fi, g.mX),
        children: [null != t.summaryLocalized && (0, l.jsxs)("div", {
            className: r()(g.nM, g.Lc),
            children: [(0, l.jsx)(s.PencilSparkleIcon, {
                color: o.A.colors.TEXT_DEFAULT,
                size: "xs"
            }), (0, l.jsx)(c.EYj, {
                variant: "text-xs/medium",
                color: "text-default",
                children: i ? f.intl.format(f.t.aZ2iIp, {
                    onShowOriginal: () => x(!1)
                }) : f.intl.format(f.t["/2ylF4"], {
                    onShowTranslated: () => x(!0)
                })
            })]
        }), (0, l.jsx)(c.EYj, {
            ref: I,
            lineClamp: _ ? 8 : void 0,
            variant: "text-sm/normal",
            children: i ? t.summaryLocalized : t.summary
        }), j && (0, l.jsx)(d.DUT, {
            className: g.vk,
            onClick: () => {
                n(_ ? m.Ws.ShowMore : m.Ws.ShowLess), v(!_)
            },
            children: (0, l.jsx)(c.EYj, {
                variant: "text-sm/semibold",
                children: _ ? f.intl.string(f.t.lBeKY2) : f.intl.string(f.t["6MwJo/"])
            })
        }), (0, l.jsx)(h.A, {
            className: p.B,
            detectedGame: t
        })]
    })
}

function v(e) {
    let {
        detectedGame: t,
        trackAction: n
    } = e, [i, s] = a.useState(!0), [o, h] = a.useState(!1), p = a.useRef(null), {
        width: _,
        height: v
    } = (0, u.A)(), {
        isTwoColumn: j
    } = (0, x.c)();
    return (a.useEffect(() => {
        let e = p.current;
        null != e && h(e.scrollHeight - e.clientHeight > 1 || !i)
    }, [p, _, v, i, j]), null == t.summary) ? null : (0, l.jsxs)("div", {
        className: r()(g.fi, g.mX),
        children: [(0, l.jsx)(c.EYj, {
            ref: p,
            lineClamp: i ? j ? 8 : 5 : void 0,
            variant: "text-sm/normal",
            children: t.summary
        }), o && (0, l.jsx)(d.DUT, {
            className: g.vk,
            onClick: () => {
                n(i ? m.Ws.ShowMore : m.Ws.ShowLess), s(!i)
            },
            children: (0, l.jsx)(c.EYj, {
                variant: "text-sm/semibold",
                children: i ? f.intl.string(f.t.lBeKY2) : f.intl.string(f.t["6MwJo/"])
            })
        })]
    })
}