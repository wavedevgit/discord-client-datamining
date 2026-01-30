/** Chunk was on 49559 **/
/** chunk id: 438414, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
}), n(896048);
var r = n(205327),
    l = n(261020),
    a = n(424994),
    i = n(272984),
    o = n(985018);

function s(e) {
    var t, n;
    let s, {
            entry: c,
            baseEntryData: u
        } = e,
        d = c.extra.entries[0].media,
        p = d.artists[0],
        {
            title: m,
            provider: f,
            image_url: O
        } = d,
        b = p.name,
        y = {
            onClick: () => (0, l.n)(i.M0.TRACK, d.external_id),
            ariaDescription: o.intl.formatToPlainString(o.t.xTsar2, {
                itemName: m
            })
        },
        h = {
            onClick: () => (0, l.n)(i.M0.ARTIST, p.external_id),
            ariaDescription: o.intl.formatToPlainString(o.t.xTsar2, {
                itemName: b
            })
        };
    return f === r.X.SPOTIFY && (s = {
        type: a.a4.SPOTIFY
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
    }({}, u), n = n = {
        title: m,
        subtitle: b,
        thumbnailUrl: O,
        titleClickable: y,
        subtitleClickable: h,
        thumbnailClickable: y,
        userDescription: o.t.CcVI1T,
        providerIconProps: s
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