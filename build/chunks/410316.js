/** Chunk was on 78528 **/
/** chunk id: 410316, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968);
n(64700);
var l = n(688810),
    i = n(796774),
    s = n(536432),
    a = n(975571),
    o = n(824744),
    c = n(420650),
    u = n(652215),
    d = n(985018);

function p() {
    let e = (0, s.wH)(),
        {
            analyticsLocations: t
        } = (0, l.Ay)();
    return (0, r.jsx)(c.A, {
        description: d.intl.format(d.t.BPbGq7, {
            helpCenterArticle: a.A.getArticleURL(u.MVz.SOUNDBOARD)
        }),
        label: d.intl.string(d.t.kbFsAD),
        volume: e,
        onVolumeChange: function(n) {
            e = (0, o.w)(n), (0, i.iy)(e, t)
        }
    })
}