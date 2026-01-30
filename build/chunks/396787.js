/** chunk id: 396787, original params: e,t,n (module,exports,require) **/
n.d(t, {
    F5: () => p,
    XA: () => f,
    jv: () => h
});
var l = n(627968);
n(64700);
var r = n(653922),
    i = n(397927),
    a = n(157559),
    o = n(308528),
    s = n(793574),
    c = n(576470),
    u = n(339984),
    d = n(985018);
let p = (e, t) => (0, i.mMO)(async () => {
        let {
            default: r
        } = await Promise.all([n.e("79149"), n.e("53653"), n.e("66863")]).then(n.bind(n, 551028));
        return n => (0, l.jsx)(r, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), l.forEach(function(t) {
                    var l;
                    l = n[t], t in e ? Object.defineProperty(e, t, {
                        value: l,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = l
                })
            }
            return e
        }({
            maxFileSizeBytes: 8388608,
            onComplete: e,
            uploadType: u.HL.AVATAR,
            showUpsellHeader: !1,
            modalTitle: d.intl.string(d.t["6yrpFR"]),
            analyticsLocation: s.A.GROUP_DM_ICON_EDITOR,
            analyticsLocations: t,
            allowRecentAvatarsSelection: !1
        }, n))
    }),
    h = (e, t) => {
        p(n => {
            o.A.setIcon(e, n.imageUri, t).catch(f)
        }, [t])
    },
    f = e => {
        var t;
        if ((null == e || null == (t = e.body) ? void 0 : t.retry_after) != null) {
            let t = (0, r.A)(new Date, e.body.retry_after);
            a.A.show({
                title: d.intl.string(d.t.Whhv4w),
                body: d.intl.format(d.t.VIJkAy, {
                    duration: (0, l.jsx)(c.A, {
                        showUnits: !0,
                        deadline: t
                    })
                })
            })
        }
    }