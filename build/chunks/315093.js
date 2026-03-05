/** chunk id: 315093 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l = n(681154),
    a = n(808380),
    r = n(429913),
    s = n(409626),
    i = n(692969),
    o = n(583846),
    c = n(424994),
    d = n(158611),
    u = n(360469),
    m = n(985018);
let p = {
        [a.Y.XBOX]: c.a4.XBOX,
        [a.Y.PLAYSTATION]: c.a4.PLAYSTATION
    },
    A = {
        [d.Z.EMBED]: s.Ob.Embed
    };

function h(e) {
    let t, n, {
            entry: a,
            location: s,
            baseEntryData: c
        } = e,
        d = (0, r.h)(a.extra.application_id),
        h = d?.getIconURL(u.iu.LARGE),
        C = a.extra.game_name;
    if (null != a.extra.platform) {
        let e = p[a.extra.platform];
        null != e && (t = {
            type: e
        })
    }
    n = a.content_type === l.ContentInventoryEntryType.PLAYED_GAME && (0, o.JM)(a) && !(0, o.I5)(a) ? m.t.vPg1JT : m.t.rPqqts;
    let E = A[s],
        x = {
            onClick: (0, i.A)({
                location: E,
                applicationId: a.extra.application_id,
                source: E,
                trackEntryPointImpression: !0,
                sourceUserId: a.author_id
            }),
            ariaDescription: m.intl.formatToPlainString(m.t["9sZWVp"], {
                gameName: C
            })
        };
    return {
        ...c,
        thumbnailUrl: h,
        title: C,
        titleClickable: x,
        thumbnailClickable: x,
        userDescription: n,
        providerIconProps: t
    }
}