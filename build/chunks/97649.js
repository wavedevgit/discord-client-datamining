/** chunk id: 97649, original params: e,t,n (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => f
}), n(747238), n(812715);
var r = n(627968),
    l = n(64700),
    c = n(492462),
    a = n(960488),
    o = n(13202),
    i = n(77468),
    s = n(556074),
    u = n(652215);

function d(e) {
    let {
        platformType: t
    } = e, n = (0, a.W6)();
    return l.useEffect(() => {
        let {
            code: e,
            state: r
        } = c.parse(window.location.search), l = "".concat(u.BVt.CONNECTIONS_ERROR(t)).concat(window.location.search);
        null == e || null == r ? n.replace(l) : i.A.linkDispatchAuthCallback(t, {
            code: e,
            state: r
        }).then(e => {
            let {
                status: r
            } = e;
            204 === r ? n.replace(u.BVt.CONNECTIONS_SUCCESS(t)) : n.replace(l)
        }, () => {
            n.replace(l)
        })
    }, [n, t]), (0, r.jsx)(s.VerifyAccountLoading, {
        platformType: t
    })
}
let f = function(e) {
    let {
        match: t
    } = e, n = t.params.type, {
        two_way_link_type: l
    } = c.parse(window.location.search);
    return [u.fg2.XBOX, u.fg2.PLAYSTATION_STAGING, u.fg2.PLAYSTATION, u.fg2.CRUNCHYROLL].includes(n) && l === o.I.DESKTOP ? (0, r.jsx)(d, {
        platformType: n
    }) : null
}