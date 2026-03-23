/** chunk id: 704724 params = (module,exports,require) **/
n.d(t, {
    J6: () => a,
    Jz: () => o,
    ky: () => d,
    qY: () => s
});
var l = n(873298),
    r = n(632119),
    i = n(444802),
    u = n(93857);
let d = e => null != e && e !== l.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
    s = (e, t) => {
        let n = (e => {
            let {
                goreContentNonFriendDm: t,
                goreContentFriendDm: n
            } = u.oQ.getControlledSetting(e) ?? {};
            return {
                goreContentNonFriendDm: d(t) ? t : (0, i.jj)({
                    isDm: !0
                }),
                goreContentFriendDm: d(n) ? n : (0, i.jj)({
                    isDm: !0,
                    isFriend: !0
                }),
                goreContentGuilds: l.TO.BLUR
            }
        })(e);
        u.oQ.updateControlledSetting(e, {
            ...n,
            ...t
        })
    },
    a = e => {
        let {
            teenId: t,
            setting: n,
            isFriend: l = !1
        } = e;
        if (d(n)) return n;
        let i = u.sM.getControlledSetting(t);
        return l ? r.Bb[i] : r.fu[i]
    },
    o = (e, t) => {
        let n, r = (n = u.p7.getControlledSetting(e), {
            explicitContentNonFriendDm: a({
                teenId: e,
                setting: n?.explicitContentNonFriendDm
            }),
            explicitContentFriendDm: a({
                teenId: e,
                setting: n?.explicitContentFriendDm,
                isFriend: !0
            }),
            explicitContentGuilds: l.TO.BLUR
        });
        u.p7.updateControlledSetting(e, {
            ...r,
            ...t
        })
    }