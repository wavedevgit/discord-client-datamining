/** Chunk was on 49559 **/
/** chunk id: 653826, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(64700),
    l = n(429913),
    a = n(139675),
    i = n(998218),
    o = n(583846),
    s = n(424994),
    c = n(360469),
    u = n(985018);

function d(e) {
    var t, n;
    let d, {
            entry: p,
            baseEntryData: m
        } = e,
        f = (0, l.h)(p.extra.application_id),
        O = null == f ? void 0 : f.getIconURL(128),
        b = (0, a.uD)(p.extra.application_id, p.extra.media_assets_large_image, [c.iu.LARGE, c.iu.LARGE]),
        y = p.extra.media_title,
        h = p.extra.media_subtitle,
        j = (0, o.Hd)(p) ? u.t["LH+Z3y"] : u.t.YuKgml,
        g = {
            type: s.a4.CRUNCHYROLL
        },
        A = r.useMemo(() => {
            if (null == p.extra.url) return;
            let e = i.A.safeParseWithQuery(p.extra.url);
            if (null != e && null != e.protocol && null != e.hostname) return e
        }, [p.extra.url]);
    return null != A && (d = {
        href: i.A.format(A),
        ariaDescription: u.intl.formatToPlainString(u.t.aFFQ3g, {
            title: y
        })
    }), t = function(e) {
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
    }({}, m), n = n = {
        thumbnailUrl: null != b ? b : O,
        title: y,
        titleClickable: d,
        thumbnailClickable: d,
        subtitle: h,
        userDescription: j,
        providerIconProps: g
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