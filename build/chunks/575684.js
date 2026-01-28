/** Chunk was on 60449 **/
/** chunk id: 575684, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(896048);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(212245),
    a = n(195043),
    o = n(329551),
    c = n(987384),
    d = n(413339),
    u = n(520999),
    g = n(430452),
    h = n(287809),
    x = n(531525),
    A = n(652215);

function p(e) {
    let {
        isRedesign: t = !1
    } = e, n = (0, r.p)(), p = s.useRef(!1), m = (0, l.bG)([g.A], () => g.A.getVideoDeviceId()), [j, O] = s.useState((0, o.i)(h.default.getCurrentUser())), E = s.useRef(j);
    return s.useEffect(() => () => {
        p.current && (0, c._C)(E.current)
    }, []), (0, i.jsx)(a.x, {
        setting: x.H.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
        children: (0, i.jsx)(u.A, {
            selectedBackgroundOption: j,
            onSelectBackgroundOption: e => {
                p.current = !0, E.current = e, O(e), (0, d.gB)(e, {
                    location: n.location
                }).catch(A.tEg)
            },
            currentDeviceId: m,
            responsiveBackgroundOptions: t
        })
    })
}