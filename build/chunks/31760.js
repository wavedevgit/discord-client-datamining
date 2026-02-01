/** chunk id: 31760, original params: t,e,i (module,exports,require) **/
i.d(e, {
    J: () => C,
    q: () => N
}), i(228524), i(896048), i(747238);
var n = i(627968),
    l = i(64700),
    s = i(397927),
    r = i(419954),
    u = i(933297),
    a = i(780964),
    o = i(143177),
    d = i(350017),
    T = i(819188),
    A = i(231137),
    S = i(151098),
    c = i(716005),
    E = i(144010),
    g = i(175631),
    _ = i(430443),
    I = i(997442),
    O = i(985018);

function N(t) {
    let {
        label: e,
        description: i,
        placeholder: r,
        overrideId: u,
        setOverride: a,
        fetchOverride: o
    } = t, [d, T] = l.useState(null != u ? u : ""), A = l.useRef(null), [S, c] = l.useState(0), E = () => {
        null != A.current && (clearTimeout(A.current), A.current = null)
    };
    return l.useEffect(() => E, []), (0, n.jsx)(s.D0$, {
        layout: "horizontal-responsive",
        label: e,
        description: i,
        children: (0, n.jsx)(s.ksK, {
            placeholder: r,
            error: 2 === S ? "Failed to fetch override" : void 0,
            successMessage: 3 === S ? "Override applied" : void 0,
            value: d,
            onChange: t => {
                if (!(t.length > 0) || /^[0-9]+$/.test(t)) {
                    if (T(t), E(), 0 === t.length) {
                        c(0), a(null);
                        return
                    }
                    A.current = setTimeout(() => {
                        c(1), o(t).then(e => {
                            c(null == e ? 2 : 3), null != e && a(t)
                        })
                    }, 500)
                }
            },
            clearable: !0
        })
    })
}
let C = (0, r.zZ)(a.X.DEV_OVERRIDES, {
    useTitle: () => "Overrides",
    buildLayout: () => [_.U, I.l, T.B, A.q, c.g, o.Y, g.s, S.t, E.T, d.s],
    useInlineNotice: () => ({
        type: u.W.INLINE_NOTICE,
        noticeType: "info",
        useText: () => O.intl.format(O.t.UeZJlg, {
            link: "https://i.dis.gd/dev-settings-changes"
        })
    })
})