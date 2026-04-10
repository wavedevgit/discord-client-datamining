/** chunk id: 50299 params = (module,exports,require) **/
r.d(t, {
    R: () => f
}), r(393431), r(532706), r(42231), r(232424), r(949626), r(767709), r(65162);
var n = r(64700),
    l = r(827762),
    s = r(284009),
    u = r.n(s),
    i = r(311907),
    a = r(149597),
    c = r(961350),
    o = r(430452),
    d = r(383501);
r(603266);
var E = r(731854);

function f(e) {
    let {
        userId: t
    } = e, r = (0, i.bG)([c.default], () => c.default.getId());
    u()(r !== t, "[useSecureFramesPairwiseFingerprint] Should not pass current user id.");
    let [s, f] = n.useState(null), [A, _] = n.useState(!1), S = (0, i.bG)([d.A], () => d.A.getSecureFramesRosterMapEntry(t)), T = (0, i.bG)([d.A], () => d.A.getSecureFramesRosterMapEntry(r)), g = n.useCallback(e => {
        f(l.fromByteArray(e)), _(!1)
    }, []), R = n.useCallback(async (e, t, r, n) => {
        o.Ay.supports(E.O5.MLS_PAIRWISE_FINGERPRINTS) ? d.A.getRTCConnection()?.getMLSPairwiseFingerprint(0, r, e => {
            g(new Uint8Array(e))
        }) : g(await (0, a._x)(0, new Uint8Array(t), e, new Uint8Array(n), r))
    }, [g]), C = n.useRef(null);
    return n.useEffect(() => {
        null != S && null != T && null == C.current && (_(!0), C.current = setTimeout(() => R(r, T, t, S), 0));
        let e = C.current;
        return () => {
            null != e && clearTimeout(e)
        }
    }, [r, T, R, t, S]), n.useMemo(() => ({
        fingerprint: s,
        userKey: S,
        loading: A
    }), [s, A, S])
}