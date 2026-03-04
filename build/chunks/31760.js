/** chunk id: 31760, original params: t,e,i (module,exports,require) **/
i.d(e, {
    J: () => O,
    q: () => N
});
var n = i(627968),
    l = i(64700),
    s = i(397927),
    a = i(419954),
    r = i(933297),
    u = i(780964),
    o = i(143177),
    d = i(350017),
    A = i(819188),
    T = i(231137),
    S = i(151098),
    E = i(716005),
    g = i(144010),
    c = i(175631),
    _ = i(430443),
    I = i(997442),
    C = i(985018);

function N(t) {
    let {
        label: e,
        description: i,
        placeholder: a,
        overrideId: r,
        setOverride: u,
        fetchOverride: o
    } = t, [d, A] = l.useState(r ?? ""), T = l.useRef(null), [S, E] = l.useState(0), g = () => {
        null != T.current && (clearTimeout(T.current), T.current = null)
    };
    return l.useEffect(() => g, []), (0, n.jsx)(s.D0$, {
        layout: "horizontal-responsive",
        label: e,
        description: i,
        children: (0, n.jsx)(s.ksK, {
            placeholder: a,
            error: 2 === S ? "Failed to fetch override" : void 0,
            successMessage: 3 === S ? "Override applied" : void 0,
            value: d,
            onChange: t => {
                if (!(t.length > 0) || /^[0-9]+$/.test(t)) {
                    if (A(t), g(), 0 === t.length) {
                        E(0), u(null);
                        return
                    }
                    T.current = setTimeout(() => {
                        E(1), o(t).then(e => {
                            E(null == e ? 2 : 3), null != e && u(t)
                        })
                    }, 500)
                }
            },
            clearable: !0
        })
    })
}
let O = (0, a.zZ)(u.X.DEV_OVERRIDES, {
    useTitle: () => "Overrides",
    buildLayout: () => [_.U, I.l, A.B, T.q, E.g, o.Y, c.s, S.t, g.T, d.s],
    useInlineNotice: () => ({
        type: r.lT.INLINE_NOTICE,
        noticeType: "info",
        useText: () => C.intl.format(C.t.UeZJlg, {
            link: "https://i.dis.gd/dev-settings-changes"
        })
    })
})