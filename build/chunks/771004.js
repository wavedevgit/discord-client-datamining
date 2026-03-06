/** chunk id: 771004 params = (module,exports,require) **/
"use strict";
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
    g = n(728528),
    p = n(887448);

function _(e) {
    let {
        detectedGame: t,
        trackAction: n
    } = e, [i, x] = a.useState(t?.summaryLocalized != null), [_, v] = a.useState(!0), [j, A] = a.useState(!1), I = a.useRef(null), {
        width: E,
        height: b
    } = (0, u.A)();
    return (a.useEffect(() => {
        let e = I.current;
        null != e && A(e.scrollHeight - e.clientHeight > 1 || !_)
    }, [I, E, b, _]), null == t.summary) ? null : (0, l.jsxs)("div", {
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
    } = e, [i, h] = a.useState(t?.summaryLocalized != null), [p, _] = a.useState(!0), [v, j] = a.useState(!1), A = a.useRef(null), {
        width: I,
        height: E
    } = (0, u.A)(), {
        isTwoColumn: b
    } = (0, x.c)();
    return (a.useEffect(() => {
        let e = A.current;
        null != e && j(e.scrollHeight - e.clientHeight > 1 || !p)
    }, [A, I, E, p, b]), null == t.summary) ? null : (0, l.jsxs)("div", {
        className: r()(g.fi, g.mX),
        children: [null != t.summaryLocalized && (0, l.jsxs)("div", {
            className: r()(g.nM, g.Lc),
            children: [(0, l.jsx)(s.PencilSparkleIcon, {
                color: o.A.colors.TEXT_DEFAULT,
                size: "xs"
            }), (0, l.jsx)(c.EYj, {
                variant: "text-md/medium",
                color: "text-default",
                children: i ? f.intl.format(f.t.aZ2iIp, {
                    onShowOriginal: () => h(!1)
                }) : f.intl.format(f.t["/2ylF4"], {
                    onShowTranslated: () => h(!0)
                })
            })]
        }), (0, l.jsx)(c.EYj, {
            ref: A,
            lineClamp: p ? b ? 8 : 5 : void 0,
            variant: "text-sm/normal",
            children: i ? t.summaryLocalized : t.summary
        }), v && (0, l.jsx)(d.DUT, {
            className: g.vk,
            onClick: () => {
                n(p ? m.Ws.ShowMore : m.Ws.ShowLess), _(!p)
            },
            children: (0, l.jsx)(c.EYj, {
                variant: "text-sm/semibold",
                children: p ? f.intl.string(f.t.lBeKY2) : f.intl.string(f.t["6MwJo/"])
            })
        })]
    })
}