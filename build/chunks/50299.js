/** chunk id: 50299, original params: e,t,r (module,exports,require) **/
r.d(t, {
    R: () => E
}), r(896048), r(927092), r(212978), r(201528), r(393431), r(752391), r(532706), r(42231), r(232424), r(757074), r(949626), r(767709), r(65162);
var n = r(64700),
    l = r(827762),
    u = r(284009),
    i = r.n(u),
    s = r(311907),
    a = r(149597),
    c = r(961350),
    o = r(430452),
    f = r(383501);
r(603266);
var d = r(731854);

function E(e) {
    let {
        userId: t
    } = e, r = (0, s.bG)([c.default], () => c.default.getId());
    i()(r !== t, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
    let [u, E] = n.useState(null), [y, b] = n.useState(!1), A = (0, s.bG)([f.A], () => f.A.getSecureFramesRosterMapEntry(t)), p = (0, s.bG)([f.A], () => f.A.getSecureFramesRosterMapEntry(r)), g = n.useCallback(e => {
        E(l.fromByteArray(e)), b(!1)
    }, []), O = n.useCallback(async (e, t, r, n) => {
        if (o.A.supports(d.O5.MLS_PAIRWISE_FINGERPRINTS)) {
            var l;
            null == (l = f.A.getRTCConnection()) || l.getMLSPairwiseFingerprint(0, r, e => {
                g(new Uint8Array(e))
            })
        } else g(await (0, a._x)(0, new Uint8Array(t), e, new Uint8Array(n), r))
    }, [g]), _ = n.useRef(null);
    return n.useEffect(() => {
        null != A && null != p && null == _.current && (b(!0), _.current = setTimeout(() => O(r, p, t, A), 0));
        let e = _.current;
        return () => {
            null != e && clearTimeout(e)
        }
    }, [r, p, O, t, A]), n.useMemo(() => ({
        fingerprint: u,
        userKey: A,
        loading: y
    }), [u, y, A])
}