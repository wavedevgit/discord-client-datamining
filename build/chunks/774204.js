/** chunk id: 774204 params = (module,exports,require) **/
n.d(t, {
    q: () => p
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
    m = n(430452),
    g = n(287809),
    A = n(780964),
    h = n(652215),
    x = n(985018);
let p = (0, r.E2)(A.X.CAMERA_BACKGROUND_SETTING, {
    useSearchTerms: () => [x.intl.string(x.t.lZTUPs)],
    usePredicate: u.A,
    Component: function() {
        let e = (0, a.p)(),
            t = s.useRef(!1),
            n = (0, l.bG)([m.Ay], () => m.Ay.getVideoDeviceId()),
            [r, u] = s.useState((0, o.i)(g.default.getCurrentUser())),
            A = s.useRef(r);
        return s.useEffect(() => () => {
            t.current && (0, d._C)(A.current)
        }, []), (0, i.jsx)(_.A, {
            selectedBackgroundOption: r,
            onSelectBackgroundOption: n => {
                t.current = !0, A.current = n, u(n), (0, c.gB)(n, {
                    location: e.location
                }).catch(h.tEg)
            },
            currentDeviceId: n
        })
    }
})