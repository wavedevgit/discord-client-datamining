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
    o = n(158954),
    c = n(827734),
    d = n(397927),
    u = n(981355),
    m = n(409626),
    f = n(305080),
    h = n(936636),
    x = n(985018),
    g = n(141535),
    p = n(242021);

function _(e) {
    let {
        game: t,
        trackAction: n
    } = e, [i, f] = a.useState(t?.summaryLocalized != null), [_, v] = a.useState(!0), [A, b] = a.useState(!1), E = a.useRef(null), {
        width: j,
        height: C
    } = (0, u.A)();
    return (a.useEffect(() => {
        let e = E.current;
        null != e && b(e.scrollHeight - e.clientHeight > 1 || !_)
    }, [E, j, C, _]), null == t.description) ? null : (0, l.jsxs)("div", {
        className: r()(g.fi, g.mX),
        children: [null != t.summaryLocalized && (0, l.jsxs)("div", {
            className: r()(g.nM, g.Lc),
            children: [(0, l.jsx)(s.PencilSparkleIcon, {
                color: c.A.colors.TEXT_DEFAULT,
                size: "xs"
            }), (0, l.jsx)(o.EYj, {
                variant: "text-xs/medium",
                color: "text-default",
                children: i ? x.intl.format(x.t.aZ2iIp, {
                    onShowOriginal: () => f(!1)
                }) : x.intl.format(x.t["/2ylF4"], {
                    onShowTranslated: () => f(!0)
                })
            })]
        }), (0, l.jsx)(o.EYj, {
            ref: E,
            lineClamp: _ ? 8 : void 0,
            variant: "text-sm/normal",
            children: i ? t.summaryLocalized : t.description
        }), A && (0, l.jsx)(d.DUT, {
            className: g.vk,
            onClick: () => {
                n(_ ? m.Ws.ShowMore : m.Ws.ShowLess), v(!_)
            },
            children: (0, l.jsx)(o.EYj, {
                variant: "text-sm/semibold",
                children: _ ? x.intl.string(x.t.lBeKY2) : x.intl.string(x.t["6MwJo/"])
            })
        }), (0, l.jsx)(h.A, {
            className: p.B,
            game: t
        })]
    })
}

function v(e) {
    let {
        game: t,
        trackAction: n
    } = e, i = a.useRef(null), {
        isExpanded: s,
        showToggle: c,
        handleToggleExpanded: d
    } = function(e, t) {
        let [n, l] = a.useState("full");
        a.useEffect(() => {
            let t = e.current;
            if (null == t) return;
            let n = new ResizeObserver(() => {
                let t = e.current;
                null != t && l(e => "expanded" === e ? e : t.scrollHeight - t.clientHeight > 1 ? "collapsed" : "full")
            });
            return n.observe(t), () => n.disconnect()
        }, [e]);
        let i = a.useCallback(() => {
            "expanded" === n ? (t(m.Ws.ShowLess), l("collapsed")) : "collapsed" === n && (t(m.Ws.ShowMore), l("expanded"))
        }, [t, n]);
        return {
            isExpanded: "expanded" === n,
            showToggle: "expanded" === n || "collapsed" === n,
            handleToggleExpanded: i
        }
    }(i, n), {
        isTwoColumn: u
    } = (0, f.c)(), h = a.useMemo(() => u ? 8 : 5, [u]);
    if (null == t.description) return null;
    let p = s ? x.intl.string(x.t["6MwJo/"]) : x.intl.string(x.t.lBeKY2);
    return (0, l.jsxs)("div", {
        className: r()(g.fi, g.mX),
        children: [(0, l.jsx)(o.EYj, {
            ref: i,
            lineClamp: s ? void 0 : h,
            variant: "text-md/medium",
            children: t.description
        }), c && (0, l.jsx)(o.QWc, {
            onClick: d,
            text: p
        })]
    })
}