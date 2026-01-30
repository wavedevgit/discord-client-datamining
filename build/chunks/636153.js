/** chunk id: 636153, original params: e,t,r (module,exports,require) **/
r.d(t, {
    q: () => s
}), r(896048);
var n = r(64700),
    l = r(311907),
    u = r(383501),
    i = r(814278);

function s(e) {
    let {
        userId: t
    } = e, r = (0, l.bG)([u.A], () => u.A.getSecureFramesRosterMapEntry(t)), [s, a] = n.useState(!0), [c, o] = n.useState(!1), [f, d] = n.useState(!1), E = n.useCallback(async (e, t) => {
        a(!0);
        try {
            let r = await (0, i.A5)(1),
                n = await (0, i.iO)(e, t, 1);
            o(r), d(n)
        } catch (e) {
            o(!1), d(!1)
        } finally {
            a(!1)
        }
    }, []);
    return n.useEffect(() => {
        null == r ? (o(!1), d(!1), a(!1)) : E(t, r)
    }, [r, E, t]), {
        loading: s,
        isCurrentUserKeyPersistent: c,
        isOtherUserKeyPersistent: f
    }
}
r(603266)