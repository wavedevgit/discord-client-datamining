/** Chunk was on 28979 **/
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
    T = i(350017),
    d = i(819188),
    A = i(231137),
    S = i(151098),
    E = i(716005),
    g = i(144010),
    _ = i(175631),
    c = i(430443),
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
    } = t, [T, d] = l.useState(null != u ? u : ""), A = l.useRef(null), [S, E] = l.useState(0), g = () => {
        null != A.current && (clearTimeout(A.current), A.current = null)
    };
    return l.useEffect(() => g, []), (0, n.jsx)(s.D0$, {
        layout: "horizontal-responsive",
        label: e,
        description: i,
        children: (0, n.jsx)(s.ksK, {
            placeholder: r,
            error: 2 === S ? "Failed to fetch override" : void 0,
            successMessage: 3 === S ? "Override applied" : void 0,
            value: T,
            onChange: t => {
                if (!(t.length > 0) || /^[0-9]+$/.test(t)) {
                    if (d(t), g(), 0 === t.length) {
                        E(0), a(null);
                        return
                    }
                    A.current = setTimeout(() => {
                        E(1), o(t).then(e => {
                            E(null == e ? 2 : 3), null != e && a(t)
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
    buildLayout: () => [c.U, I.l, d.B, A.q, E.g, o.Y, _.s, S.t, g.T, T.s],
    useInlineNotice: () => ({
        type: u.W.INLINE_NOTICE,
        noticeType: "info",
        useText: () => O.intl.format(O.t.UeZJlg, {
            link: "https://i.dis.gd/dev-settings-changes"
        })
    })
})