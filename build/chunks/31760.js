/** chunk id: 31760 params = (module,exports,require) **/
n.d(t, {
    J: () => S,
    q: () => E
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
    _ = n(231137),
    m = n(151098),
    g = n(716005),
    A = n(144010),
    h = n(175631),
    x = n(430443),
    p = n(997442),
    T = n(985018);

function E(e) {
    let {
        label: t,
        description: n,
        placeholder: a,
        overrideId: r,
        setOverride: o,
        fetchOverride: d
    } = e, [c, u] = s.useState(r ?? ""), _ = s.useRef(null), [m, g] = s.useState(0), A = () => {
        null != _.current && (clearTimeout(_.current), _.current = null)
    };
    return s.useEffect(() => A, []), (0, i.jsx)(l.D0$, {
        layout: "horizontal-responsive",
        label: t,
        description: n,
        children: (0, i.jsx)(l.ksK, {
            placeholder: a,
            error: 2 === m ? "Failed to fetch override" : void 0,
            successMessage: 3 === m ? "Override applied" : void 0,
            value: c,
            onChange: e => {
                if (!(e.length > 0) || /^[0-9]+$/.test(e)) {
                    if (u(e), A(), 0 === e.length) {
                        g(0), o(null);
                        return
                    }
                    _.current = setTimeout(() => {
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
    buildLayout: () => [x.U, p.l, u.B, _.q, g.g, d.Y, h.s, m.t, A.T, c.s],
    useInlineNotice: () => ({
        type: r.lT.INLINE_NOTICE,
        noticeType: "info",
        useText: () => T.intl.format(T.t.UeZJlg, {
            link: "https://i.dis.gd/dev-settings-changes"
        })
    })
})