/** chunk id: 774204 params = (module,exports,require) **/
n.d(t, {
    q: () => x
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(212245),
    r = n(419954),
    o = n(329551),
    d = n(987384),
    c = n(413339),
    u = n(952572),
    _ = n(520999),
    g = n(430452),
    A = n(287809),
    m = n(780964),
    h = n(652215),
    p = n(985018);
let x = (0, r.E2)(m.X.CAMERA_BACKGROUND_SETTING, {
    useSearchTerms: () => [p.intl.string(p.t.lZTUPs)],
    usePredicate: u.A,
    Component: function() {
        let e = (0, a.p)(),
            t = s.useRef(!1),
            n = (0, l.bG)([g.Ay], () => g.Ay.getVideoDeviceId()),
            [r, u] = s.useState((0, o.i)(A.default.getCurrentUser())),
            m = s.useRef(r);
        return s.useEffect(() => () => {
            t.current && (0, d._C)(m.current)
        }, []), (0, i.jsx)(_.A, {
            selectedBackgroundOption: r,
            onSelectBackgroundOption: n => {
                t.current = !0, m.current = n, u(n), (0, c.gB)(n, {
                    location: e.location
                }).catch(h.tEg)
            },
            currentDeviceId: n
        })
    }
})