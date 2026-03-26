/** chunk id: 396787 params = (module,exports,require) **/
n.d(e, {
    F5: () => h,
    XA: () => p,
    jv: () => _
});
var l = n(627968);
n(64700);
var i = n(653922),
    a = n(397927),
    s = n(157559),
    r = n(308528),
    o = n(793574),
    c = n(576470),
    d = n(339984),
    u = n(985018);
let h = (t, e) => (0, a.mMO)(async () => {
        let {
            default: i
        } = await Promise.all([n.e("59701"), n.e("53653"), n.e("35570")]).then(n.bind(n, 551028));
        return n => (0, l.jsx)(i, {
            maxFileSizeBytes: 8388608,
            onComplete: t,
            uploadType: d.HL.AVATAR,
            showUpsellHeader: !1,
            modalTitle: u.intl.string(u.t["6yrpFR"]),
            analyticsLocation: o.A.GROUP_DM_ICON_EDITOR,
            analyticsLocations: e,
            allowRecentAvatarsSelection: !1,
            ...n
        })
    }),
    _ = (t, e) => {
        h(n => {
            r.A.setIcon(t, n.imageUri, e).catch(p)
        }, [e])
    },
    p = t => {
        if (t?.body?.retry_after != null) {
            let e = (0, i.A)(new Date, t.body.retry_after);
            s.A.show({
                title: u.intl.string(u.t.Whhv4w),
                body: u.intl.format(u.t.VIJkAy, {
                    duration: (0, l.jsx)(c.A, {
                        showUnits: !0,
                        deadline: e
                    })
                })
            })
        }
    }