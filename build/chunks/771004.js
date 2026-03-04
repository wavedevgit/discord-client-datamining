/** chunk id: 771004, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => I,
    h: () => p
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(934551),
    c = n(158954),
    o = n(827734),
    d = n(397927),
    u = n(981355),
    m = n(409626),
    x = n(305080),
    g = n(936636),
    h = n(985018),
    f = n(851822),
    j = n(812254);

function p(e) {
    let {
        detectedGame: t,
        trackAction: n
    } = e, [a, x] = l.useState(t?.summaryLocalized != null), [p, I] = l.useState(!0), [v, E] = l.useState(!1), A = l.useRef(null), {
        width: _,
        height: N
    } = (0, u.A)();
    return (l.useEffect(() => {
        let e = A.current;
        null != e && E(e.scrollHeight - e.clientHeight > 1 || !p)
    }, [A, _, N, p]), null == t.summary) ? null : (0, i.jsxs)("div", {
        className: s()(f.fi, f.mX),
        children: [null != t.summaryLocalized && (0, i.jsxs)("div", {
            className: s()(f.nM, f.Lc),
            children: [(0, i.jsx)(r.PencilSparkleIcon, {
                color: o.A.colors.TEXT_DEFAULT,
                size: "xs"
            }), (0, i.jsx)(c.EYj, {
                variant: "text-xs/medium",
                color: "text-default",
                children: a ? h.intl.format(h.t.aZ2iIp, {
                    onShowOriginal: () => x(!1)
                }) : h.intl.format(h.t["/2ylF4"], {
                    onShowTranslated: () => x(!0)
                })
            })]
        }), (0, i.jsx)(c.EYj, {
            ref: A,
            lineClamp: p ? 8 : void 0,
            variant: "text-sm/normal",
            children: a ? t.summaryLocalized : t.summary
        }), v && (0, i.jsx)(d.DUT, {
            className: f.vk,
            onClick: () => {
                n(p ? m.Ws.ShowMore : m.Ws.ShowLess), I(!p)
            },
            children: (0, i.jsx)(c.EYj, {
                variant: "text-sm/semibold",
                children: p ? h.intl.string(h.t.lBeKY2) : h.intl.string(h.t["6MwJo/"])
            })
        }), (0, i.jsx)(g.A, {
            className: j.B,
            detectedGame: t
        })]
    })
}

function I(e) {
    let {
        detectedGame: t,
        trackAction: n
    } = e, [a, g] = l.useState(t?.summaryLocalized != null), [j, p] = l.useState(!0), [I, v] = l.useState(!1), E = l.useRef(null), {
        width: A,
        height: _
    } = (0, u.A)(), {
        isTwoColumn: N
    } = (0, x.c)();
    return (l.useEffect(() => {
        let e = E.current;
        null != e && v(e.scrollHeight - e.clientHeight > 1 || !j)
    }, [E, A, _, j, N]), null == t.summary) ? null : (0, i.jsxs)("div", {
        className: s()(f.fi, f.mX),
        children: [null != t.summaryLocalized && (0, i.jsxs)("div", {
            className: s()(f.nM, f.Lc),
            children: [(0, i.jsx)(r.PencilSparkleIcon, {
                color: o.A.colors.TEXT_DEFAULT,
                size: "xs"
            }), (0, i.jsx)(c.EYj, {
                variant: "text-xs/medium",
                color: "text-default",
                children: a ? h.intl.format(h.t.aZ2iIp, {
                    onShowOriginal: () => g(!1)
                }) : h.intl.format(h.t["/2ylF4"], {
                    onShowTranslated: () => g(!0)
                })
            })]
        }), (0, i.jsx)(c.EYj, {
            ref: E,
            lineClamp: j ? N ? 8 : 5 : void 0,
            variant: "text-sm/normal",
            children: a ? t.summaryLocalized : t.summary
        }), I && (0, i.jsx)(d.DUT, {
            className: f.vk,
            onClick: () => {
                n(j ? m.Ws.ShowMore : m.Ws.ShowLess), p(!j)
            },
            children: (0, i.jsx)(c.EYj, {
                variant: "text-sm/semibold",
                children: j ? h.intl.string(h.t.lBeKY2) : h.intl.string(h.t["6MwJo/"])
            })
        })]
    })
}