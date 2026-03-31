/** chunk id: 537643 params = (module,exports,require) **/
n.d(t, {
    I: () => d
});
var i = n(64700),
    a = n(311907),
    r = n(139675),
    l = n(835517),
    s = n(729394),
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
        let s = 600 * (0, l.A)(),
            d = (n?.assets?.invite_cover_image != null ? (0, r.uD)(n.application_id, n.assets.invite_cover_image, s) : null) ?? a ?? i.getCoverImageURL(s) ?? null;
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
        c !== u && s.K({
            messageId: t,
            coverImageURL: u
        })
    }, [c, u, t]), u
}