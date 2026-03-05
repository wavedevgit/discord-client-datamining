/** chunk id: 349439, original params: e,t,n (module,exports,require) **/
n.d(t, {
    GQ: () => u,
    GZ: () => g,
    il: () => _,
    nF: () => c
});
var i = n(575593),
    s = n(898461),
    l = n(203632),
    a = n(486020),
    r = n(788868),
    o = n(870236),
    d = n(985018);
let c = e => {
        if (0 === e.items.length) return null;
        let t = e.items[0];
        return (0, s.T)(t) ? (0, a.F_)({
            avatarDecoration: {
                asset: t.asset
            },
            size: 40,
            canAnimate: !0
        }) : null
    },
    u = e => {
        if (0 === e.items.length) return null;
        let t = e.items[0];
        return (0, l.C)(t) ? t.thumbnailPreviewSrc : null
    },
    _ = e => {
        if (null == e) return !1;
        let t = r.hd[e];
        return t?.skuId === r.pe.GUILD
    },
    g = (e, t) => {
        let n, s, l = null != t;
        if (null != e) n = e.name, s = (e => {
            switch (e) {
                case i.R.AVATAR_DECORATION:
                    return d.intl.string(o.default.obi47v);
                case i.R.PROFILE_EFFECT:
                    return d.intl.string(o.default.RX8BMR);
                case i.R.NAMEPLATE:
                    return d.intl.string(o.default.nNGEHk);
                case i.R.BUNDLE:
                    return d.intl.string(o.default.VS1fKo);
                default:
                    return ""
            }
        })(e.type);
        else if (l && null != t) {
            let e = r.hd[t];
            n = e?.name
        }
        return {
            displayName: n,
            typeName: s,
            isSubscription: l
        }
    }