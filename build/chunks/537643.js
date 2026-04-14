/** chunk id: 537643 params = (module,exports,require) **/
n.d(t, {
    I: () => d
});
var i = n(64700),
    a = n(311907),
    l = n(139675),
    s = n(835517),
    r = n(729394),
    o = n(216184);
let d = e => {
    let {
        messageId: t,
        presenceActivity: n,
        application: d
    } = e, {
        cachedImageURL: c,
        imageURL: u
    } = (0, a.cf)([o.A], () => (e => {
        let {
            messageId: t,
            presenceActivity: n,
            application: i
        } = e, a = o.A.getCoverImageURL({
            messageId: t
        });
        if (null === a) return {
            cachedImageURL: null,
            imageURL: null
        };
        let r = 600 * (0, s.A)(),
            d = (n?.assets?.invite_cover_image != null ? (0, l.uD)(n.application_id, n.assets.invite_cover_image, r) : null) ?? a ?? i.getCoverImageURL(r) ?? null;
        return {
            cachedImageURL: a,
            imageURL: d
        }
    })({
        messageId: t,
        presenceActivity: n,
        application: d
    }), [t, n, d]);
    return i.useEffect(() => {
        c !== u && r.K({
            messageId: t,
            coverImageURL: u
        })
    }, [c, u, t]), u
}