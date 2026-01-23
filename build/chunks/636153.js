/** Chunk was on 16674 **/
/** chunk id: 636153, original params: e,t,r (module,exports,require) **/
r.d(t, {
    q: () => a
}), r(896048);
var n = r(64700),
    l = r(311907),
    u = r(383501),
    i = r(814278);

function a(e) {
    let {
        userId: t
    } = e, r = (0, l.bG)([u.A], () => u.A.getSecureFramesRosterMapEntry(t)), [a, s] = n.useState(!0), [c, o] = n.useState(!1), [f, d] = n.useState(!1), E = n.useCallback(async (e, t) => {
        s(!0);
        try {
            let r = await (0, i.A5)(1),
                n = await (0, i.iO)(e, t, 1);
            o(r), d(n)
        } catch (e) {
            o(!1), d(!1)
        } finally {
            s(!1)
        }
    }, []);
    return n.useEffect(() => {
        null == r ? (o(!1), d(!1), s(!1)) : E(t, r)
    }, [r, E, t]), {
        loading: a,
        isCurrentUserKeyPersistent: c,
        isOtherUserKeyPersistent: f
    }
}
r(603266)