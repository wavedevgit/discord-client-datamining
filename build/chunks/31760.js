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
    _ = n(231137),
    g = n(151098),
    A = n(716005),
    m = n(144010),
    h = n(175631),
    p = n(430443),
    x = n(997442),
    E = n(985018);

function T(e) {
    let {
        label: t,
        description: n,
        placeholder: a,
        overrideId: r,
        setOverride: o,
        fetchOverride: d
    } = e, [c, u] = s.useState(r ?? ""), _ = s.useRef(null), [g, A] = s.useState(0), m = () => {
        null != _.current && (clearTimeout(_.current), _.current = null)
    };
    return s.useEffect(() => m, []), (0, i.jsx)(l.D0$, {
        layout: "horizontal-responsive",
        label: t,
        description: n,
        children: (0, i.jsx)(l.ksK, {
            placeholder: a,
            error: 2 === g ? "Failed to fetch override" : void 0,
            successMessage: 3 === g ? "Override applied" : void 0,
            value: c,
            onChange: e => {
                if (!(e.length > 0) || /^[0-9]+$/.test(e)) {
                    if (u(e), m(), 0 === e.length) {
                        A(0), o(null);
                        return
                    }
                    _.current = setTimeout(() => {
                        A(1), d(e).then(t => {
                            A(null == t ? 2 : 3), null != t && o(e)
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
    buildLayout: () => [p.U, x.l, u.B, _.q, A.g, d.Y, h.s, g.t, m.T, c.s],
    useInlineNotice: () => ({
        type: r.lT.INLINE_NOTICE,
        noticeType: "info",
        useText: () => E.intl.format(E.t.UeZJlg, {
            link: "https://i.dis.gd/dev-settings-changes"
        })
    })
})