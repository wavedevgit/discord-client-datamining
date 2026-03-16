/** chunk id: 704724 params = (module,exports,require) **/
_.d(e, {
    J6: () => C,
    Jz: () => i,
    ky: () => S,
    qY: () => T
});
var E = _(873298),
    A = _(632119),
    I = _(444802),
    n = _(93857);
let S = t => null != t && t !== E.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
    T = (t, e) => {
        let _ = (t => {
            let {
                goreContentNonFriendDm: e,
                goreContentFriendDm: _
            } = n.oQ.getControlledSetting(t) ?? {};
            return {
                goreContentNonFriendDm: S(e) ? e : (0, I.jj)({
                    isDm: !0
                }),
                goreContentFriendDm: S(_) ? _ : (0, I.jj)({
                    isDm: !0,
                    isFriend: !0
                }),
                goreContentGuilds: E.TO.BLUR
            }
        })(t);
        n.oQ.updateControlledSetting(t, {
            ..._,
            ...e
        })
    },
    C = t => {
        let {
            teenId: e,
            setting: _,
            isFriend: E = !1
        } = t;
        if (S(_)) return _;
        let I = n.sM.getControlledSetting(e);
        return E ? A.Bb[I] : A.fu[I]
    },
    i = (t, e) => {
        let _, A = (_ = n.p7.getControlledSetting(t), {
            explicitContentNonFriendDm: C({
                teenId: t,
                setting: _?.explicitContentNonFriendDm
            }),
            explicitContentFriendDm: C({
                teenId: t,
                setting: _?.explicitContentFriendDm,
                isFriend: !0
            }),
            explicitContentGuilds: E.TO.BLUR
        });
        n.p7.updateControlledSetting(t, {
            ...A,
            ...e
        })
    }