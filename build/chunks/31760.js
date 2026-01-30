/** chunk id: 31760, original params: e,t,i (module,exports,require) **/
i.d(t, {
    J: () => N,
    q: () => C
}), i(228524), i(896048), i(747238);
var n = i(627968),
    l = i(64700),
    s = i(397927),
    r = i(419954),
    a = i(933297),
    u = i(780964),
    o = i(143177),
    d = i(350017),
    T = i(819188),
    c = i(231137),
    A = i(151098),
    S = i(716005),
    _ = i(144010),
    E = i(175631),
    g = i(430443),
    I = i(997442),
    O = i(985018);

function C(e) {
    let {
        label: t,
        description: i,
        placeholder: r,
        overrideId: a,
        setOverride: u,
        fetchOverride: o
    } = e, [d, T] = l.useState(null != a ? a : ""), c = l.useRef(null), [A, S] = l.useState(0), _ = () => {
        null != c.current && (clearTimeout(c.current), c.current = null)
    };
    return l.useEffect(() => _, []), (0, n.jsx)(s.D0$, {
        layout: "horizontal-responsive",
        label: t,
        description: i,
        children: (0, n.jsx)(s.ksK, {
            placeholder: r,
            error: 2 === A ? "Failed to fetch override" : void 0,
            successMessage: 3 === A ? "Override applied" : void 0,
            value: d,
            onChange: e => {
                if (!(e.length > 0) || /^[0-9]+$/.test(e)) {
                    if (T(e), _(), 0 === e.length) {
                        S(0), u(null);
                        return
                    }
                    c.current = setTimeout(() => {
                        S(1), o(e).then(t => {
                            S(null == t ? 2 : 3), null != t && u(e)
                        })
                    }, 500)
                }
            },
            clearable: !0
        })
    })
}
let N = (0, r.zZ)(u.X.DEV_OVERRIDES, {
    useTitle: () => "Overrides",
    buildLayout: () => [g.U, I.l, T.B, c.q, S.g, o.Y, E.s, A.t, _.T, d.s],
    useInlineNotice: () => ({
        type: a.W.INLINE_NOTICE,
        noticeType: "info",
        useText: () => O.intl.format(O.t.UeZJlg, {
            link: "https://i.dis.gd/dev-settings-changes"
        })
    })
})