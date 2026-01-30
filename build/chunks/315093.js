/** Chunk was on 49559 **/
/** chunk id: 315093, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
});
var r = n(681154),
    l = n(808380),
    a = n(429913),
    i = n(409626),
    o = n(692969),
    s = n(583846),
    c = n(424994),
    u = n(158611),
    d = n(360469),
    p = n(985018);
let m = {
        [l.Y.XBOX]: c.a4.XBOX,
        [l.Y.PLAYSTATION]: c.a4.PLAYSTATION
    },
    f = {
        [u.Z.EMBED]: i.Ob.Embed
    };

function O(e) {
    var t, n;
    let l, i, {
            entry: c,
            location: u,
            baseEntryData: O
        } = e,
        b = (0, a.h)(c.extra.application_id),
        y = null == b ? void 0 : b.getIconURL(d.iu.LARGE),
        h = c.extra.game_name;
    if (null != c.extra.platform) {
        let e = m[c.extra.platform];
        null != e && (l = {
            type: e
        })
    }
    i = c.content_type === r.ContentInventoryEntryType.PLAYED_GAME && (0, s.JM)(c) && !(0, s.I5)(c) ? p.t.vPg1JT : p.t.rPqqts;
    let j = f[u],
        g = {
            onClick: (0, o.A)({
                location: j,
                applicationId: c.extra.application_id,
                source: j,
                trackEntryPointImpression: !0,
                sourceUserId: c.author_id
            }),
            ariaDescription: p.intl.formatToPlainString(p.t["9sZWVp"], {
                gameName: h
            })
        };
    return t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r
            })
        }
        return e
    }({}, O), n = n = {
        thumbnailUrl: y,
        title: h,
        titleClickable: g,
        thumbnailClickable: g,
        userDescription: i,
        providerIconProps: l
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t
}