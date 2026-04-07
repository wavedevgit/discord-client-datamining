/** chunk id: 771004 params = (module,exports,require) **/
n.d(t, {
    A: () => v,
    h: () => _
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
    h = n(936636),
    f = n(985018),
    p = n(282063),
    g = n(48757);

function _(e) {
    let {
        detectedGame: t,
        trackAction: n
    } = e, [i, x] = l.useState(t?.summaryLocalized != null), [_, v] = l.useState(!0), [A, j] = l.useState(!1), E = l.useRef(null), {
        width: b,
        height: C
    } = (0, u.A)();
    return (l.useEffect(() => {
        let e = E.current;
        null != e && j(e.scrollHeight - e.clientHeight > 1 || !_)
    }, [E, b, C, _]), null == t.summary) ? null : (0, a.jsxs)("div", {
        className: r()(p.fi, p.mX),
        children: [null != t.summaryLocalized && (0, a.jsxs)("div", {
            className: r()(p.nM, p.Lc),
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
            lineClamp: _ ? 8 : void 0,
            variant: "text-sm/normal",
            children: i ? t.summaryLocalized : t.summary
        }), A && (0, a.jsx)(d.DUT, {
            className: p.vk,
            onClick: () => {
                n(_ ? m.Ws.ShowMore : m.Ws.ShowLess), v(!_)
            },
            children: (0, a.jsx)(o.EYj, {
                variant: "text-sm/semibold",
                children: _ ? f.intl.string(f.t.lBeKY2) : f.intl.string(f.t["6MwJo/"])
            })
        }), (0, a.jsx)(h.A, {
            className: g.B,
            detectedGame: t
        })]
    })
}

function v(e) {
    let {
        detectedGame: t,
        trackAction: n
    } = e, i = l.useRef(null), {
        isExpanded: s,
        showToggle: c,
        handleToggleExpanded: d
    } = function(e, t) {
        let [n, a] = l.useState("full");
        l.useEffect(() => {
            let t = e.current;
            if (null == t) return;
            let n = new ResizeObserver(() => {
                let t = e.current;
                null != t && a(e => "expanded" === e ? e : t.scrollHeight - t.clientHeight > 1 ? "collapsed" : "full")
            });
            return n.observe(t), () => n.disconnect()
        }, [e]);
        let i = l.useCallback(() => {
            "expanded" === n ? (t(m.Ws.ShowLess), a("collapsed")) : "collapsed" === n && (t(m.Ws.ShowMore), a("expanded"))
        }, [t, n]);
        return {
            isExpanded: "expanded" === n,
            showToggle: "expanded" === n || "collapsed" === n,
            handleToggleExpanded: i
        }
    }(i, n), {
        isTwoColumn: u
    } = (0, x.c)(), h = l.useMemo(() => u ? 8 : 5, [u]);
    if (null == t.summary) return null;
    let g = s ? f.intl.string(f.t["6MwJo/"]) : f.intl.string(f.t.lBeKY2);
    return (0, a.jsxs)("div", {
        className: r()(p.fi, p.mX),
        children: [(0, a.jsx)(o.EYj, {
            ref: i,
            lineClamp: s ? void 0 : h,
            variant: "text-md/medium",
            children: t.summary
        }), c && (0, a.jsx)(o.QWc, {
            onClick: d,
            text: g
        })]
    })
}