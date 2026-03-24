/** chunk id: 31760 params = (module,exports,require) **/
n.d(t, {
    J: () => S,
    q: () => T
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(419954),
    r = n(933297),
    o = n(780964),
    d = n(143177),
    c = n(350017),
    u = n(819188),
    m = n(231137),
    _ = n(151098),
    g = n(716005),
    x = n(144010),
    A = n(175631),
    h = n(430443),
    p = n(997442),
    f = n(985018);

function T(e) {
    let {
        label: t,
        description: n,
        placeholder: a,
        overrideId: r,
        setOverride: o,
        fetchOverride: d
    } = e, [c, u] = s.useState(r ?? ""), m = s.useRef(null), [_, g] = s.useState(0), x = () => {
        null != m.current && (clearTimeout(m.current), m.current = null)
    };
    return s.useEffect(() => x, []), (0, i.jsx)(l.D0$, {
        layout: "horizontal-responsive",
        label: t,
        description: n,
        children: (0, i.jsx)(l.ksK, {
            placeholder: a,
            error: 2 === _ ? "Failed to fetch override" : void 0,
            successMessage: 3 === _ ? "Override applied" : void 0,
            value: c,
            onChange: e => {
                if (!(e.length > 0) || /^[0-9]+$/.test(e)) {
                    if (u(e), x(), 0 === e.length) {
                        g(0), o(null);
                        return
                    }
                    m.current = setTimeout(() => {
                        g(1), d(e).then(t => {
                            g(null == t ? 2 : 3), null != t && o(e)
                        })
                    }, 500)
                }
            },
            clearable: !0
        })
    })
}
let S = (0, a.zZ)(o.X.DEV_OVERRIDES, {
    useTitle: () => "Overrides",
    buildLayout: () => [h.U, p.l, u.B, m.q, g.g, d.Y, A.s, _.t, x.T, c.s],
    useInlineNotice: () => ({
        type: r.lT.INLINE_NOTICE,
        noticeType: "info",
        useText: () => f.intl.format(f.t.UeZJlg, {
            link: "https://i.dis.gd/dev-settings-changes"
        })
    })
})