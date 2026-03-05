/** chunk id: 31760, original params: e,t,n (module,exports,require) **/
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
    m = n(716005),
    A = n(144010),
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
    } = e, [c, u] = s.useState(r ?? ""), _ = s.useRef(null), [g, m] = s.useState(0), A = () => {
        null != _.current && (clearTimeout(_.current), _.current = null)
    };
    return s.useEffect(() => A, []), (0, i.jsx)(l.D0$, {
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
                    if (u(e), A(), 0 === e.length) {
                        m(0), o(null);
                        return
                    }
                    _.current = setTimeout(() => {
                        m(1), d(e).then(t => {
                            m(null == t ? 2 : 3), null != t && o(e)
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
    buildLayout: () => [p.U, x.l, u.B, _.q, m.g, d.Y, h.s, g.t, A.T, c.s],
    useInlineNotice: () => ({
        type: r.lT.INLINE_NOTICE,
        noticeType: "info",
        useText: () => E.intl.format(E.t.UeZJlg, {
            link: "https://i.dis.gd/dev-settings-changes"
        })
    })
})