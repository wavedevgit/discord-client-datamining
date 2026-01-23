/** Chunk was on 13530 **/
/** chunk id: 771004, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(934551),
    o = n(158954),
    c = n(827734),
    u = n(397927),
    d = n(203736),
    m = n(409626),
    f = n(936636),
    g = n(985018),
    x = n(851822),
    p = n(812254);

function j(e) {
    let {
        detectedGame: t,
        trackAction: n
    } = e, [i, j] = r.useState((null == t ? void 0 : t.summaryLocalized) != null), [h, v] = r.useState(!0), [b, y] = r.useState(!1), O = r.useRef(null), {
        width: A,
        height: _
    } = (0, d.A)();
    return (r.useEffect(() => {
        let e = O.current;
        null != e && y(e.scrollHeight - e.clientHeight > 1 || !h)
    }, [O, A, _, h]), null == t.summary) ? null : (0, l.jsxs)("div", {
        className: a()(x.fi, x.mX),
        children: [null != t.summaryLocalized && (0, l.jsxs)("div", {
            className: a()(x.nM, x.Lc),
            children: [(0, l.jsx)(s.PencilSparkleIcon, {
                color: c.A.colors.TEXT_DEFAULT,
                size: "xs"
            }), (0, l.jsx)(o.EYj, {
                variant: "text-xs/medium",
                color: "text-default",
                children: i ? g.intl.format(g.t.aZ2iIp, {
                    onShowOriginal: () => j(!1)
                }) : g.intl.format(g.t["/2ylF4"], {
                    onShowTranslated: () => j(!0)
                })
            })]
        }), (0, l.jsx)(o.EYj, {
            ref: O,
            lineClamp: h ? 8 : void 0,
            variant: "text-sm/normal",
            children: i ? t.summaryLocalized : t.summary
        }), b && (0, l.jsx)(u.DUT, {
            className: x.vk,
            onClick: () => {
                n(h ? m.Ws.ShowMore : m.Ws.ShowLess), v(!h)
            },
            children: (0, l.jsx)(o.EYj, {
                variant: "text-sm/semibold",
                children: h ? g.intl.string(g.t.lBeKY2) : g.intl.string(g.t["6MwJo/"])
            })
        }), (0, l.jsx)(f.A, {
            className: p.B,
            detectedGame: t
        })]
    })
}