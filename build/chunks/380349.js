/** Chunk was on 49559 **/
/** chunk id: 380349, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(211401),
    l = n(500049),
    a = n(429913),
    i = n(355622),
    o = n(583846),
    s = n(360469),
    c = n(985018);

function u(e) {
    let {
        entry: t
    } = e, n = (0, a.h)(t.extra.application_id), u = null == n ? void 0 : n.getIconURL(s.iu.LARGE), d = t.extra.activity_name, p = (0, o.Hd)(t) ? c.t.vPg1JT : c.t.rPqqts, m = {
        onClick: () => {
            r.R(l.s4.TEXT, i.oU.NORMAL, {
                applicationId: t.extra.application_id
            })
        },
        ariaDescription: c.intl.formatToPlainString(c.t.NTHttN, {
            title: d
        })
    };
    return {
        thumbnailUrl: u,
        title: d,
        titleClickable: m,
        thumbnailClickable: m,
        userDescription: p
    }
}