/** chunk id: 704724 params = (module,exports,require) **/
n.d(e, {
    J6: () => a,
    Jz: () => o,
    ky: () => d,
    qY: () => s
});
var i = n(873298),
    l = n(632119),
    r = n(444802),
    u = n(93857);
let d = t => null != t && t !== i.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
    s = (t, e) => {
        let n = (t => {
            let {
                goreContentNonFriendDm: e,
                goreContentFriendDm: n
            } = u.oQ.getControlledSetting(t) ?? {};
            return {
                goreContentNonFriendDm: d(e) ? e : (0, r.jj)({
                    isDm: !0
                }),
                goreContentFriendDm: d(n) ? n : (0, r.jj)({
                    isDm: !0,
                    isFriend: !0
                }),
                goreContentGuilds: i.TO.BLUR
            }
        })(t);
        u.oQ.updateControlledSetting(t, {
            ...n,
            ...e
        })
    },
    a = t => {
        let {
            teenId: e,
            setting: n,
            isFriend: i = !1
        } = t;
        if (d(n)) return n;
        let r = u.sM.getControlledSetting(e);
        return i ? l.Bb[r] : l.fu[r]
    },
    o = (t, e) => {
        let n, l = (n = u.p7.getControlledSetting(t), {
            explicitContentNonFriendDm: a({
                teenId: t,
                setting: n?.explicitContentNonFriendDm
            }),
            explicitContentFriendDm: a({
                teenId: t,
                setting: n?.explicitContentFriendDm,
                isFriend: !0
            }),
            explicitContentGuilds: i.TO.BLUR
        });
        u.p7.updateControlledSetting(t, {
            ...l,
            ...e
        })
    }