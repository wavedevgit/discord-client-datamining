/** Chunk was on 77870 **/
/** chunk id: 396787, original params: e,t,n (module,exports,require) **/
n.d(t, {
    F5: () => p,
    XA: () => f,
    jv: () => h
});
var r = n(627968);
n(64700);
var l = n(653922),
    i = n(397927),
    s = n(157559),
    a = n(308528),
    o = n(793574),
    c = n(576470),
    u = n(339984),
    d = n(985018);
let p = (e, t) => (0, i.mMO)(async () => {
        let {
            default: l
        } = await Promise.all([n.e("79149"), n.e("53653"), n.e("66863")]).then(n.bind(n, 551028));
        return n => (0, r.jsx)(l, function(e) {
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
        }({
            maxFileSizeBytes: 8388608,
            onComplete: e,
            uploadType: u.HL.AVATAR,
            showUpsellHeader: !1,
            modalTitle: d.intl.string(d.t["6yrpFR"]),
            analyticsLocation: o.A.GROUP_DM_ICON_EDITOR,
            analyticsLocations: t,
            allowRecentAvatarsSelection: !1
        }, n))
    }),
    h = (e, t) => {
        p(n => {
            a.A.setIcon(e, n.imageUri, t).catch(f)
        }, [t])
    },
    f = e => {
        var t;
        if ((null == e || null == (t = e.body) ? void 0 : t.retry_after) != null) {
            let t = (0, l.A)(new Date, e.body.retry_after);
            s.A.show({
                title: d.intl.string(d.t.Whhv4w),
                body: d.intl.format(d.t.VIJkAy, {
                    duration: (0, r.jsx)(c.A, {
                        showUnits: !0,
                        deadline: t
                    })
                })
            })
        }
    }