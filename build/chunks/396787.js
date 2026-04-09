/** chunk id: 396787 params = (module,exports,require) **/
n.d(e, {
    F5: () => h,
    XA: () => m,
    jv: () => _
});
var i = n(627968);
n(64700);
var l = n(653922),
    a = n(397927),
    s = n(157559),
    r = n(308528),
    o = n(793574),
    c = n(576470),
    d = n(339984),
    u = n(985018);
let h = (t, e) => (0, a.mMO)(async () => {
        let {
            default: l
        } = await Promise.all([n.e("79149"), n.e("53653"), n.e("11884")]).then(n.bind(n, 551028));
        return n => (0, i.jsx)(l, {
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
            r.A.setIcon(t, n.imageUri, e).catch(m)
        }, [e])
    },
    m = t => {
        if (t?.body?.retry_after != null) {
            let e = (0, l.A)(new Date, t.body.retry_after);
            s.A.show({
                title: u.intl.string(u.t.Whhv4w),
                body: u.intl.format(u.t.VIJkAy, {
                    duration: (0, i.jsx)(c.A, {
                        showUnits: !0,
                        deadline: e
                    })
                })
            })
        }
    }