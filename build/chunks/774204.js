/** chunk id: 774204, original params: t,e,i (module,exports,require) **/
i.d(e, {
    q: () => I
}), i(896048);
var n = i(627968),
    l = i(64700),
    s = i(311907),
    r = i(212245),
    u = i(419954),
    a = i(329551),
    o = i(987384),
    d = i(413339),
    T = i(952572),
    A = i(520999),
    S = i(430452),
    c = i(287809),
    E = i(780964),
    g = i(652215),
    _ = i(985018);
let I = (0, u.E2)(E.X.CAMERA_BACKGROUND_SETTING, {
    useSearchTerms: () => [_.intl.string(_.t.lZTUPs)],
    usePredicate: T.A,
    Component: function() {
        let t = (0, r.p)(),
            e = l.useRef(!1),
            i = (0, s.bG)([S.A], () => S.A.getVideoDeviceId()),
            [u, T] = l.useState((0, a.i)(c.default.getCurrentUser())),
            E = l.useRef(u);
        return l.useEffect(() => () => {
            e.current && (0, o._C)(E.current)
        }, []), (0, n.jsx)(A.A, {
            selectedBackgroundOption: u,
            onSelectBackgroundOption: i => {
                e.current = !0, E.current = i, T(i), (0, d.gB)(i, {
                    location: t.location
                }).catch(g.tEg)
            },
            currentDeviceId: i
        })
    }
})