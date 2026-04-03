/** chunk id: 537643 params = (module,exports,require) **/
n.d(t, {
    I: () => d
});
var i = n(64700),
    l = n(311907),
    r = n(139675),
    s = n(835517),
    a = n(729394),
    o = n(216184);
let d = e => {
    let {
        messageId: t,
        presenceActivity: n,
        application: d
    } = e, {
        cachedImageURL: c,
        imageURL: u
    } = (0, l.cf)([o.A], () => (e => {
        let {
            messageId: t,
            presenceActivity: n,
            application: i
        } = e, l = o.A.getCoverImageURL({
            messageId: t
        });
        if (null === l) return {
            cachedImageURL: null,
            imageURL: null
        };
        let a = 600 * (0, s.A)(),
            d = (n?.assets?.invite_cover_image != null ? (0, r.uD)(n.application_id, n.assets.invite_cover_image, a) : null) ?? l ?? i.getCoverImageURL(a) ?? null;
        return {
            cachedImageURL: l,
            imageURL: d
        }
    })({
        messageId: t,
        presenceActivity: n,
        application: d
    }), [t, n, d]);
    return i.useEffect(() => {
        c !== u && a.K({
            messageId: t,
            coverImageURL: u
        })
    }, [c, u, t]), u
}