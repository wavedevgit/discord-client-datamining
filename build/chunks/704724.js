/** chunk id: 704724, original params: e,t,n (module,exports,require) **/
n.d(t, {
    J6: () => c,
    Jz: () => d,
    ky: () => l,
    qY: () => o
});
var i = n(873298),
    s = n(632119),
    a = n(444802),
    r = n(93857);
let l = e => null != e && e !== i.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
    o = (e, t) => {
        let n = (e => {
            let {
                goreContentNonFriendDm: t,
                goreContentFriendDm: n
            } = r.oQ.getControlledSetting(e) ?? {};
            return {
                goreContentNonFriendDm: l(t) ? t : (0, a.jj)({
                    isDm: !0
                }),
                goreContentFriendDm: l(n) ? n : (0, a.jj)({
                    isDm: !0,
                    isFriend: !0
                }),
                goreContentGuilds: i.TO.BLUR
            }
        })(e);
        r.oQ.updateControlledSetting(e, {
            ...n,
            ...t
        })
    },
    c = e => {
        let {
            teenId: t,
            setting: n,
            isFriend: i = !1
        } = e;
        if (l(n)) return n;
        let a = r.sM.getControlledSetting(t);
        return i ? s.Bb[a] : s.fu[a]
    },
    d = (e, t) => {
        let n, s = (n = r.p7.getControlledSetting(e), {
            explicitContentNonFriendDm: c({
                teenId: e,
                setting: n?.explicitContentNonFriendDm
            }),
            explicitContentFriendDm: c({
                teenId: e,
                setting: n?.explicitContentFriendDm,
                isFriend: !0
            }),
            explicitContentGuilds: i.TO.BLUR
        });
        r.p7.updateControlledSetting(e, {
            ...s,
            ...t
        })
    }